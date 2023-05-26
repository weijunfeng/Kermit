/*
 * Copyright (c) 2021 Touchlab
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package co.touchlab.kermit

import android.util.Log

class LogcatWriter(private val messageStringFormatter: MessageStringFormatter = DefaultFormatter) : LogWriter() {
    // When running unit tests, Log calls will fail. Back up to a common writer
    private val testWriter: CommonWriter = CommonWriter(messageStringFormatter)

    private fun getSeverity(severity: Severity) = when (severity) {
        Severity.Verbose -> Log.VERBOSE
        Severity.Debug -> Log.DEBUG
        Severity.Info -> Log.INFO
        Severity.Warn -> Log.WARN
        Severity.Error -> Log.ERROR
        Severity.Assert -> Log.ASSERT
    }

    override fun log(severity: Severity, message: String, tag: String, throwable: Throwable?) {
        val formattedMessage = messageStringFormatter.formatMessage(null, null, Message(message))
        try {
            // 使用 Log.println 解决部分设备无法输出debug日志问题
            val stackTraceString = Log.getStackTraceString(throwable)
            Log.println(
                getSeverity(severity), tag, if (stackTraceString.isEmpty()) {
                    formattedMessage
                } else {
                    formattedMessage + '\n' + stackTraceString
                }
            )
        } catch (e: Exception) {
            testWriter.log(severity, message, tag, throwable)
        }
    }
}
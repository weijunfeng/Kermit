"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[19],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(r),m=n,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return r?o.createElement(d,a(a({ref:t},c),{},{components:r})):o.createElement(d,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:20},a="LogWriter",l={unversionedId:"details/LOG_WRITER",id:"details/LOG_WRITER",title:"LogWriter",description:"LogWriter takes care of deciding where to log the messages.",source:"@site/docs/details/LOG_WRITER.md",sourceDirName:"details",slug:"/details/LOG_WRITER",permalink:"/docs/details/LOG_WRITER",draft:!1,editUrl:"https://github.com/touchlab/Kermit/tree/main/website/docs/details/LOG_WRITER.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1677976240,formattedLastUpdatedAt:"Mar 5, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Technical Details",permalink:"/docs/category/technical-details"},next:{title:"Custom Logger API",permalink:"/docs/details/CUSTOM_API"}},s={},p=[{value:"Prebuilt LogWriters",id:"prebuilt-logwriters",level:3},{value:"Custom LogWriter",id:"custom-logwriter",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"logwriter"},"LogWriter"),(0,n.kt)("p",null,"LogWriter takes care of deciding where to log the messages."),(0,n.kt)("h3",{id:"prebuilt-logwriters"},"Prebuilt LogWriters"),(0,n.kt)("p",null,"By default ",(0,n.kt)("inlineCode",{parentName:"p"},"Kermit")," provides default ",(0,n.kt)("inlineCode",{parentName:"p"},"LogWriter")," for each platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CommonWriter")," - Uses println to send logs in Kotlin"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LogcatWriter")," - Uses LogCat to send logs in Android"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OSLogWriter")," - Uses os log to send logs in iOS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ConsoleWriter")," - Uses console to log in JS")),(0,n.kt)("p",null,"These can be created and passed into the ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger")," object during initialization"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"Logger.setLogWriters(listOf(LogcatWriter(), CommonWriter())\n")),(0,n.kt)("p",null,"Selecting loggers for each platform can either be done with platform-specific entry points, or using an expect/actual factory function."),(0,n.kt)("p",null,"Kermit ships with a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/touchlab/Kermit/blob/main/kermit-core/src/commonMain/kotlin/co/touchlab/kermit/platformLogWriter.kt"},"default factory function")," that provides a ",(0,n.kt)("inlineCode",{parentName:"p"},"LogWriter")," suited to local development."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"package co.touchlab.kermit\n\nexpect fun platformLogWriter(messageStringFormatter: MessageStringFormatter = DefaultFormatter): LogWriter\n")),(0,n.kt)("p",null,"You can implement a factory function for your project similar to the one above."),(0,n.kt)("h3",{id:"custom-logwriter"},"Custom LogWriter"),(0,n.kt)("p",null,"If you want to have a custom implementation to send logs to your own server, or a 3rd party tool or simply because default implementation doesn't fit your need, then you would need to extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"LogWriter")," class and provide your own instance."),(0,n.kt)("p",null,"For a simple ",(0,n.kt)("inlineCode",{parentName:"p"},"LogWriter")," you only need to implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"log")," method, which handles all log messages."),(0,n.kt)("p",null,"Simple implementation would look like below,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"class YourCustomWriter : LogWriter() {\n    override fun log(severity: Severity, message: String, tag: String, throwable: Throwable?) {\n        // Handle logging here\n    }\n}\n")),(0,n.kt)("p",null,"Custom loggers may also override ",(0,n.kt)("inlineCode",{parentName:"p"},"isLoggable"),". Kermit will check this value before logging to this LogWriter."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"open fun isLoggable(tag: String, severity: Severity): Boolean = true\n")),(0,n.kt)("p",null,"If your custom logger should only send messages in production, the implementation could look like the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"// LogWriter\nclass YourCustomWriter(private val isProduction:Boolean) : LogWriter() {\n    override fun log(severity: Severity, message: String, tag: String, throwable: Throwable?) {\n        // Do something custom\n    }\n\n    override fun isLoggable(tag: String, severity: Severity): Boolean = isProduction\n}\n\n// Usage \nval logWriter = YourCustomWriter(someProdFlag)\nval logger = Logger(loggerConfigInit(logWriter))\n")))}u.isMDXComponent=!0}}]);
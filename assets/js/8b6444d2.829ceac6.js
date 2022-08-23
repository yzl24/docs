"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[620],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:4},o="FeatureProbe  Architecture",c={unversionedId:"introduction/structure",id:"introduction/structure",title:"FeatureProbe  Architecture",description:"System Overview",source:"@site/docs/introduction/structure.md",sourceDirName:"introduction",slug:"/introduction/structure",permalink:"/introduction/structure",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/docs/introduction/structure.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Core Concepts",permalink:"/introduction/concept"},next:{title:"How-to guides",permalink:"/category/how-to-guides"}},l={},s=[{value:"Architecture Features",id:"architecture-features",level:2},{value:"Performance",id:"performance",level:3},{value:"Resilience",id:"resilience",level:3},{value:"Privacy",id:"privacy",level:3},{value:"Extensibility",id:"extensibility",level:3}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"featureprobe--architecture"},"FeatureProbe  Architecture"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"System Overview")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"featureprobe architecture",src:r(6243).Z,width:"1701",height:"747"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FeatureProbe UI")," - Provides users with a visual UI interface for managing and publishing feature switches."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FeatureProbe API")," - Provides data management capabilities for the UI and external Open API services, designed to strictly adhere to Restful specifications, and as a common API for feature management domain not only provides core data management capabilities for the UI, but you can also automate switch rule changes and publishing based on this API. View OpenAPI documentation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FeatureProbe Server")," - Provides a high-performance switch rule determination engine and second-level data distribution capabilities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FeatureProbe SDK")," - We provide SDKs for all major languages to obtain switch rule determination results, allowing you to quickly access FeatureProbe in your application to implement the corresponding feature switching capabilities.")),(0,i.kt)("h2",{id:"architecture-features"},"Architecture Features"),(0,i.kt)("h3",{id:"performance"},"Performance"),(0,i.kt)("p",null,"Since the SDK needs to be integrated into your application runtime environment, we have designed it to be highly fault-tolerant and high-performance. Even if FeatureProbe Server is not available, it will not affect the normal reading of the switch rules that are already in effect in your application, because we use multi-level caching and local memory-based rule logic calculations for the SDK on the Server side to support nanosecond-level fetching of switch decisions."),(0,i.kt)("h3",{id:"resilience"},"Resilience"),(0,i.kt)("p",null,"FeatureProbe Server is implemented in Rust language and is naturally high-performance and highly reliable. As you can see in the figure below, the fast horizontal scaling allows you to easily handle large-scale traffic access. At the same time, we are already planning to further improve the performance of the Server by using Multiplexing + Publish & Subscribe mode, so that the switch rules can be issued and take effect in milliseconds after changes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"featureprobe server",src:r(7329).Z,width:"1160",height:"747"})),(0,i.kt)("h3",{id:"privacy"},"Privacy"),(0,i.kt)("p",null,"The overall architecture also ensures privacy aspects since the switch execution happens only in the SDK run by the client. We do not collect or share any user data, which also allows us to confidently state that we are  ",(0,i.kt)("a",{parentName:"p",href:"https://gdpr-info.eu/"},"GDPR")," compliant."),(0,i.kt)("h3",{id:"extensibility"},"Extensibility"),(0,i.kt)("p",null,"We open up all of our OpenAPI so you can extend or customize your business based on it."))}p.isMDXComponent=!0},7329:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/feature-probe-server-768644ea5041d1bed39d731d76b40b12.png"},6243:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/structure-e7067d594bbe6d19149be4d668271a47.png"}}]);
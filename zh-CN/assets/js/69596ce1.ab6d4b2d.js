"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},i="\u6570\u636e\u76d1\u63a7",c={unversionedId:"how-to/metrics",id:"how-to/metrics",title:"\u6570\u636e\u76d1\u63a7",description:"\u67e5\u770b\u5f00\u5173\u7684\u8bbf\u95ee\u4fe1\u606f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/metrics.md",sourceDirName:"how-to",slug:"/how-to/metrics",permalink:"/zh-CN/how-to/metrics",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/metrics.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"\u5f00\u5173\u914d\u7f6e",permalink:"/zh-CN/how-to/toggle-detail"},next:{title:"\u4eba\u7fa4\u7ec4",permalink:"/zh-CN/how-to/segments"}},l={},s=[{value:"\u67e5\u770b\u5f00\u5173\u7684\u8bbf\u95ee\u4fe1\u606f",id:"\u67e5\u770b\u5f00\u5173\u7684\u8bbf\u95ee\u4fe1\u606f",level:3}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6570\u636e\u76d1\u63a7"},"\u6570\u636e\u76d1\u63a7"),(0,o.kt)("h3",{id:"\u67e5\u770b\u5f00\u5173\u7684\u8bbf\u95ee\u4fe1\u606f"},"\u67e5\u770b\u5f00\u5173\u7684\u8bbf\u95ee\u4fe1\u606f"),(0,o.kt)("p",null,"\u652f\u6301\u67e5\u770bVariation\u3010name\u3011\u3001\u3010value\u3011\u4e24\u4e2a\u7ef4\u5ea6\u7684\u8bbf\u95ee\u6570\u636e\uff08\u5404\u73af\u5883\u95f4\u72ec\u7acb\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"evaluations screenshot",src:r(1535).Z,width:"2840",height:"1468"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7edf\u8ba1\u4fe1\u606f\uff1a\u5c55\u793a\u7b5b\u9009\u65f6\u95f4\u6bb5\u5185\u6bcf\u4e2aVariation\u7684\u603b\u8bbf\u95ee\u91cf"),(0,o.kt)("li",{parentName:"ol"},"\u7edf\u8ba1\u7c92\u5ea6\uff1a\u76ee\u524d\u9ed8\u8ba4\u5c55\u793a24\u5c0f\u65f6\u5185\u7684\u8bbf\u95ee\u4fe1\u606f\uff0c\u70b9\u51fb\u53ef\u5207\u6362\u67e5\u770b7\u5929\u5185\u7684\u8bbf\u95ee\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ol"},"\u53d8\u66f4\u8bb0\u5f55\uff1a\u6bcf\u6b21\u3010\u7248\u672c\u53d8\u66f4\u3011\u90fd\u4f1a\u5c55\u793a\u53d8\u66f4\u6807\u7b7e\uff08\u4e00\u4e2a\u65f6\u95f4\u7c92\u5ea6\u5185\u591a\u6b21\u53d8\u66f4\u4f1a\u5408\u5e76\u5c55\u793a\u4e00\u4e2a\u53d8\u66f4\u6807\u5fd7\uff09\uff0c\u70b9\u51fb\u53ef\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684\u5f00\u5173\u7248\u672c\u4e2d\uff0c\u65b9\u4fbf\u7528\u6237\u611f\u77e5\u7248\u672c\u53d8\u66f4\u5bf9\u8bbf\u95ee\u6570\u636e\u7684\u5f71\u54cd")))}p.isMDXComponent=!0},1535:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/evaluations-c0803ebb897037963038d974ff44529f.png"}}]);
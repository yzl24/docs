"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[903],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,b=d["".concat(u,".").concat(f)]||d[f]||l[f]||c;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1948:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const c={sidebar_position:3},i="FeatureProbe\u6838\u5fc3\u6982\u5ff5",a={unversionedId:"introduction/concept",id:"introduction/concept",title:"FeatureProbe\u6838\u5fc3\u6982\u5ff5",description:"\u5b83\u5305\u542b\u300e\u529f\u80fd\u7c92\u5ea6\u300f\u7684\u53d1\u5e03\u7ba1\u7406\u3001\u7070\u5ea6\u653e\u91cf\u3001\u964d\u7ea7\u9884\u6848\u3001AB\u5b9e\u9a8c\u53d8\u7b49\u4e00\u7cfb\u5217\u7ba1\u7406\u64cd\u4f5c\u3002\u5b83\u53ef\u4ee5\u8ba9\u5f00\u53d1\u4eba\u5458\u3001\u8fd0\u8425\u4eba\u5458\u3001\u8fd0\u7ef4\u4eba\u5458\u5b89\u5168\u3001\u9ad8\u6548\u7684\u5b8c\u6210\u529f\u80fd\u4ea4\u4ed8\uff0c\u540c\u65f6\u7cbe\u7ec6\u63a7\u5236\u53d8\u66f4\u98ce\u9669\u3002FeatureProbe\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u670d\u52a1\uff0c\u6240\u6709\u4e3b\u6d41\u8bed\u8a00\u7684SDK\uff0c\u53ef\u4ee5\u4e3a\u5404\u7c7b\u6280\u672f\u6808\u7684\u8f6f\u4ef6\u9879\u76ee\u63d0\u4f9b\u6301\u7eed\u4ea4\u4ed8\u65f6\u4ee3\u4e0b\u7684\u6700\u5148\u8fdb\u7684Feature Mangement\u670d\u52a1\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/concept.md",sourceDirName:"introduction",slug:"/introduction/concept",permalink:"/docs/zh-CN/introduction/concept",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/concept.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"\u9002\u7528\u573a\u666f",permalink:"/docs/zh-CN/introduction/scene"},next:{title:"FeatureProbe \u67b6\u6784",permalink:"/docs/zh-CN/introduction/structure"}},u={},p=[],s={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"featureprobe\u6838\u5fc3\u6982\u5ff5"},"FeatureProbe\u6838\u5fc3\u6982\u5ff5"),(0,o.kt)("p",null,"\u5b83\u5305\u542b\u300e\u529f\u80fd\u7c92\u5ea6\u300f\u7684\u53d1\u5e03\u7ba1\u7406\u3001\u7070\u5ea6\u653e\u91cf\u3001\u964d\u7ea7\u9884\u6848\u3001AB\u5b9e\u9a8c\u53d8\u7b49\u4e00\u7cfb\u5217\u7ba1\u7406\u64cd\u4f5c\u3002\u5b83\u53ef\u4ee5\u8ba9\u5f00\u53d1\u4eba\u5458\u3001\u8fd0\u8425\u4eba\u5458\u3001\u8fd0\u7ef4\u4eba\u5458\u5b89\u5168\u3001\u9ad8\u6548\u7684\u5b8c\u6210\u529f\u80fd\u4ea4\u4ed8\uff0c\u540c\u65f6\u7cbe\u7ec6\u63a7\u5236\u53d8\u66f4\u98ce\u9669\u3002FeatureProbe\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u670d\u52a1\uff0c\u6240\u6709\u4e3b\u6d41\u8bed\u8a00\u7684SDK\uff0c\u53ef\u4ee5\u4e3a\u5404\u7c7b\u6280\u672f\u6808\u7684\u8f6f\u4ef6\u9879\u76ee\u63d0\u4f9b\u6301\u7eed\u4ea4\u4ed8\u65f6\u4ee3\u4e0b\u7684\u6700\u5148\u8fdb\u7684Feature Mangement\u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u51c6\u5907\u4e86",(0,o.kt)("a",{parentName:"p",href:"https://featureprobe.io/demo/"},"demo")," \u793a\u4f8b,\u901a\u8fc7\u5b83\uff0c\u4f60\u53ef\u4ee5\u5feb\u901f\u4e86\u89e3\u5e73\u53f0\u529f\u80fd\uff0c\u5feb\u53bb\u8bd5\u8bd5\u5427~"))}l.isMDXComponent=!0}}]);
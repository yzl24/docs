"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(r),b=o,f=d["".concat(l,".").concat(b)]||d[b]||s[b]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},i="FeatureProbe \u67b6\u6784",u={unversionedId:"introduction/structure",id:"introduction/structure",title:"FeatureProbe \u67b6\u6784",description:"\u4e0b\u56fe\u662f  FeatureProbe \u7684\u6574\u4f53\u67b6\u6784\u6a21\u5757\u7684\u6982\u89c8\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/structure.md",sourceDirName:"introduction",slug:"/introduction/structure",permalink:"/docs/zh-CN/introduction/structure",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/structure.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"FeatureProbe\u6838\u5fc3\u6982\u5ff5",permalink:"/docs/zh-CN/introduction/concept"},next:{title:"How-to guides",permalink:"/docs/zh-CN/category/how-to-guides"}},l={},p=[{value:"\u67b6\u6784\u7279\u70b9",id:"\u67b6\u6784\u7279\u70b9",level:2},{value:"\u9ad8\u6027\u80fd",id:"\u9ad8\u6027\u80fd",level:3},{value:"\u53ef\u5f39\u6027\u4f38\u7f29",id:"\u53ef\u5f39\u6027\u4f38\u7f29",level:3},{value:"\u7528\u6237\u9690\u79c1",id:"\u7528\u6237\u9690\u79c1",level:3},{value:"\u53ef\u6269\u5c55\u6027",id:"\u53ef\u6269\u5c55\u6027",level:3}],c={toc:p};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"featureprobe-\u67b6\u6784"},"FeatureProbe \u67b6\u6784"),(0,o.kt)("p",null,"\u4e0b\u56fe\u662f  FeatureProbe \u7684\u6574\u4f53\u67b6\u6784\u6a21\u5757\u7684\u6982\u89c8\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"featureprobe architecture",src:r(6243).Z,width:"1701",height:"747"})),(0,o.kt)("p",null,"\u4e3b\u8981\u7531\u5982\u4e0b\u6a21\u5757\u7ec4\u6210\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FeatureProbe UI"),"  - \u4e3a\u7528\u6237\u63d0\u4f9b\u53ef\u89c6\u5316\u7684\u529f\u80fd\u5f00\u5173\u7ba1\u7406\u548c\u53d1\u5e03\u7684 UI \u754c\u9762\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FeatureProbe API")," - \u4e3a UI \u63d0\u4f9b\u6570\u636e\u7ba1\u7406\u529f\u80fd\u548c\u5bf9\u5916\u7684 Open API \u670d\u52a1\u3002API \u8bbe\u8ba1\u4e25\u683c\u9075\u5b88 ",(0,o.kt)("a",{parentName:"li",href:"https://www.redhat.com/zh/topics/api/what-is-a-rest-api"},"Restful \u89c4\u8303"),"\uff0c\u540c\u65f6\u4f5c\u4e3a\u529f\u80fd\u7ba1\u7406\u9886\u57df\u901a\u7528 API \u4e0d\u4ec5\u4e3a UI \u63d0\u4f9b\u4e86\u6838\u5fc3\u6570\u636e\u7ba1\u7406\u80fd\u529b\uff0c\u4f60\u4e5f\u53ef\u57fa\u4e8e\u8be5 API \u5b9e\u73b0\u5f00\u5173\u89c4\u5219\u81ea\u52a8\u53d8\u66f4\u548c\u53d1\u5e03\u3002",(0,o.kt)("a",{parentName:"li",href:"https://featureprobe.io/api-docs"},"\u67e5\u770b OpenAPI \u6587\u6863")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FeatureProbe Server")," - \u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u5f00\u5173\u89c4\u5219\u5224\u5b9a\u5f15\u64ce\u548c\u79d2\u7ea7\u7684\u6570\u636e\u5206\u53d1\u80fd\u529b\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FeatureProbe SDK")," - \u6211\u4eec\u4e3a\u6240\u6709\u4e3b\u6d41\u8bed\u8a00\u63d0\u4f9b\u83b7\u53d6\u5f00\u5173\u89c4\u5219\u5224\u5b9a\u7ed3\u679c\u7684 SDK\uff0c\u80fd\u591f\u8ba9\u4f60\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5feb\u901f\u63a5\u5165 FeatureProbe \u4ee5\u5b9e\u73b0\u76f8\u5e94\u7684\u529f\u80fd\u5f00\u5173\u80fd\u529b\u3002")),(0,o.kt)("h2",{id:"\u67b6\u6784\u7279\u70b9"},"\u67b6\u6784\u7279\u70b9"),(0,o.kt)("p",null,"FeatureProbe \u67b6\u6784\u7684\u8bbe\u8ba1\u4e3b\u8981\u8003\u8651\u4e86\u9ad8\u6027\u80fd\u3001\u53ef\u5f39\u6027\u4f38\u7f29\u3001\u7528\u6237\u9690\u79c1\u548c\u53ef\u6269\u5c55\u6027\u65b9\u9762\u3002"),(0,o.kt)("h3",{id:"\u9ad8\u6027\u80fd"},"\u9ad8\u6027\u80fd"),(0,o.kt)("p",null,"\u7531\u4e8e SDK \u9700\u8981\u96c6\u6210\u5728\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u73af\u5883\u4e2d\uff0c\u6240\u4ee5\u6211\u4eec\u5bf9\u5b83\u91c7\u7528\u4e86\u9ad8\u5ea6\u53ef\u5bb9\u9519\u548c\u9ad8\u6027\u80fd\u7684\u8bbe\u8ba1\uff0c\u5373\u4fbf FeatureProbe Server \u4e0d\u53ef\u7528\uff0c\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u4f60\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5df2\u7ecf\u751f\u6548\u7684\u5f00\u5173\u89c4\u5219\u6b63\u5e38\u8bfb\u53d6\uff0c \u56e0\u4e3a\u6211\u4eec\u5bf9 Server \u7aef\u7684 SDK \u91c7\u7528\u591a\u7ea7\u7f13\u5b58\u53ca\u57fa\u4e8e\u672c\u5730\u5185\u5b58\u7684\u89c4\u5219\u903b\u8f91\u8ba1\u7b97\uff0c\u652f\u6301\u4ee5\u7eb3\u79d2\u7ea7\u83b7\u53d6\u5f00\u5173\u7684\u5224\u5b9a\u7ed3\u679c\u3002"),(0,o.kt)("h3",{id:"\u53ef\u5f39\u6027\u4f38\u7f29"},"\u53ef\u5f39\u6027\u4f38\u7f29"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/feature-probe-server"},"FeatureProbe Server "),"\u91c7\u7528 Rust \u8bed\u8a00\u5b9e\u73b0\uff0c\u5929\u7136\u5177\u5907\u9ad8\u6027\u80fd\u548c\u9ad8\u53ef\u9760\u6027\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u901a\u8fc7\u5feb\u901f\u6c34\u5e73\u6269\u5bb9\u80fd\u8ba9\u4f60\u8f7b\u677e\u5e94\u5bf9\u5927\u89c4\u6a21\u6d41\u91cf\u8bbf\u95ee\u3002\u540c\u65f6\uff0c\u6211\u4eec\u5df2\u7ecf\u5728\u8ba1\u5212\u91c7\u7528\u957f\u8fde\u63a5\uff08Multiplexing\uff09+\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u8fdb\u4e00\u6b65\u63d0\u9ad8 Server \u7684\u6027\u80fd\uff0c\u505a\u5230\u4f7f\u5f00\u5173\u89c4\u5219\u5728\u53d8\u66f4\u540e\u80fd\u5728\u6beb\u79d2\u7ea7\u4e0b\u53d1\u548c\u751f\u6548\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"featureprobe server",src:r(7329).Z,width:"1160",height:"747"})),(0,o.kt)("h3",{id:"\u7528\u6237\u9690\u79c1"},"\u7528\u6237\u9690\u79c1"),(0,o.kt)("p",null,"\u56e0\u4e3a\u5f00\u5173\u6267\u884c\u4ec5\u53d1\u751f\u5728\u5ba2\u6237\u7aef\u8fd0\u884c\u7684 SDK \u4e2d\uff0c\u6240\u4ee5\u6574\u4f53\u67b6\u6784\u4e5f\u4fdd\u8bc1\u4e86\u9690\u79c1\u65b9\u9762\u3002\u6211\u4eec\u4e0d\u4f1a\u6536\u96c6\u6216\u5171\u4eab\u4efb\u4f55\u7528\u6237\u6570\u636e\uff0c\u8fd9\u4e5f\u4f7f\u5f97\u6211\u4eec\u6709\u4fe1\u5fc3\u58f0\u660e\u6211\u4eec\u7b26\u5408 ",(0,o.kt)("a",{parentName:"p",href:"https://gdpr-info.eu/"},"GDPR"),"\u3002"),(0,o.kt)("h3",{id:"\u53ef\u6269\u5c55\u6027"},"\u53ef\u6269\u5c55\u6027"),(0,o.kt)("p",null,"\u6211\u4eec\u5f00\u653e\u4e86\u6240\u6709\u7684 OpenAPI\uff0c\u60a8\u53ef\u4ee5\u57fa\u4e8e\u5b83\u8fdb\u884c\u4e1a\u52a1\u6269\u5c55\u6216\u5b9a\u5236\u3002"))}s.isMDXComponent=!0},7329:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/feature-probe-server-768644ea5041d1bed39d731d76b40b12.png"},6243:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/structure-e7067d594bbe6d19149be4d668271a47.png"}}]);
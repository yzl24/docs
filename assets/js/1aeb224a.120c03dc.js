"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),g=n,m=d["".concat(i,".").concat(g)]||d[g]||c[g]||o;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},s="Golang SDK",l={unversionedId:"sdk/Server-Side SDKs/golang-sdk",id:"sdk/Server-Side SDKs/golang-sdk",title:"Golang SDK",description:"Feature Probe is an open source feature management service. This SDK is used to control features in golang programs.",source:"@site/docs/sdk/Server-Side SDKs/golang-sdk.md",sourceDirName:"sdk/Server-Side SDKs",slug:"/sdk/Server-Side SDKs/golang-sdk",permalink:"/sdk/Server-Side SDKs/golang-sdk",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/docs/sdk/Server-Side SDKs/golang-sdk.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Java SDK",permalink:"/sdk/Server-Side SDKs/java-sdk"},next:{title:"Rust SDK",permalink:"/sdk/Server-Side SDKs/rust-sdk"}},i={},u=[{value:"Try Out Demo Code",id:"try-out-demo-code",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"Step 1. Install the Golang SDK",id:"step-1-install-the-golang-sdk",level:3},{value:"Step 2. Create a FeatureProbe instance",id:"step-2-create-a-featureprobe-instance",level:3},{value:"Step 3. Use the feature toggle",id:"step-3-use-the-feature-toggle",level:3},{value:"Step 4. Unit Testing (Optional)",id:"step-4-unit-testing-optional",level:3},{value:"Testing SDK",id:"testing-sdk",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"golang-sdk"},"Golang SDK"),(0,n.kt)("p",null,"Feature Probe is an open source feature management service. This SDK is used to control features in golang programs.\nThis SDK is designed primarily for use in multi-user systems such as web servers and applications."),(0,n.kt)("h2",{id:"try-out-demo-code"},"Try Out Demo Code"),(0,n.kt)("p",null,"We provide a runnable ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/server-sdk-java/blob/main/src/main/java/com/featureprobe/sdk/example/"},"demo code")," for you to understand how FeatureProbe SDK is used."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select a FeatureProbe platform to connect to."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can use our online demo environment ",(0,n.kt)("a",{parentName:"li",href:"https://featureprobe.io/login"},"FeatureProbe Demo"),"."),(0,n.kt)("li",{parentName:"ul"},"Or you can use docker composer to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/FeatureProbe/FeatureProbe#1-starting-featureprobe-service-with-docker-compose"},"set up your own FeatureProbe service")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download this repo and run the demo program:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/FeatureProbe/server-sdk-go.git\ncd server-sdk-go\ngo run example/main.go\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Find the Demo code in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/FeatureProbe/server-sdk-go/tree/main/example"},"example"),",\ndo some change and run the program again.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go run main.go\n")),(0,n.kt)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,n.kt)("p",null,"In this guide we explain how to use feature toggles in a Golang application using FeatureProbe."),(0,n.kt)("h3",{id:"step-1-install-the-golang-sdk"},"Step 1. Install the Golang SDK"),(0,n.kt)("p",null,"Fisrt import the FeatureProbe SDK in your application code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/featureprobe/server-sdk-go"\n')),(0,n.kt)("p",null,"Fetch the FeatureProbe SDK as a dependency in ",(0,n.kt)("inlineCode",{parentName:"p"},"go.mod"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/featureprobe/server-sdk-go\n")),(0,n.kt)("h3",{id:"step-2-create-a-featureprobe-instance"},"Step 2. Create a FeatureProbe instance"),(0,n.kt)("p",null,"After you install and import the SDK, create a single, shared instance of the FeatureProbe sdk."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'\nconfig := featureprobe.FPConfig{\n    RemoteUrl:       "FEATURE_PROBE_SERVER_URL",\n    ServerSdkKey:    "FEATURE_PROBE_SERVER_SDK_KEY",\n    RefreshInterval: 1000,\n}\n\nfp, err := featureprobe.NewFeatureProbe(config)\n')),(0,n.kt)("h3",{id:"step-3-use-the-feature-toggle"},"Step 3. Use the feature toggle"),(0,n.kt)("p",null,"You can use sdk to check which variation a particular user will receive for a given feature flag."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'user := featureprobe.NewUser("USER_ID_FOR_PERCENTAGE_ROLLOUT")\nuser.With("ATTRIBUTE_NAME_IN_RULE", VALUE_OF_ATTRIBUTE);    // Call With() for each attribute used in Rule.\nval := fp.BoolValue("YOUR_TOGGLE_KEY", user, true)\n')),(0,n.kt)("h3",{id:"step-4-unit-testing-optional"},"Step 4. Unit Testing (Optional)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'toggles := map[string]interface{}{}\ntoggles["bool_toggle"] = true\n\nfp := featureprobe.NewFeatureProbeForTest(toggles)\nuser := featureprobe.NewUser("user")\n\nassert.Equal(t, fp.BoolValue("bool_toggle", user, false), true)\n')),(0,n.kt)("h2",{id:"testing-sdk"},"Testing SDK"),(0,n.kt)("p",null,"We have unified integration tests for all our SDKs. Integration test cases are added as submodules for each SDK repo. So\nbe sure to pull submodules first to get the latest integration tests before running tests."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git pull --recurse-submodules\ngo test\n")))}c.isMDXComponent=!0}}]);
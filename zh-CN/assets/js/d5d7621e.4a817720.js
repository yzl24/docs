"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[136],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,g=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3},o="iOS SDK",l={unversionedId:"sdk/Client-Side SDKs/ios-sdk",id:"sdk/Client-Side SDKs/ios-sdk",title:"iOS SDK",description:"iOS Usage",source:"@site/docs/sdk/Client-Side SDKs/ios-sdk.md",sourceDirName:"sdk/Client-Side SDKs",slug:"/sdk/Client-Side SDKs/ios-sdk",permalink:"/zh-CN/sdk/Client-Side SDKs/ios-sdk",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/docs/sdk/Client-Side SDKs/ios-sdk.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Android SDK",permalink:"/zh-CN/sdk/Client-Side SDKs/android-sdk"},next:{title:"Best Practices",permalink:"/zh-CN/category/best-practices"}},s={},u=[{value:"iOS Usage",id:"ios-usage",level:2},{value:"Swift",id:"swift",level:3},{value:"Step 1. Install SDK",id:"step-1-install-sdk",level:4},{value:"Step 2. Create a FeatureProbe instance",id:"step-2-create-a-featureprobe-instance",level:4},{value:"Step 3. Use the feature toggle",id:"step-3-use-the-feature-toggle",level:4},{value:"Step 4. Unit Testing (Optional)",id:"step-4-unit-testing-optional",level:4},{value:"Objective-C",id:"objective-c",level:3},{value:"Step 1. Install SDK",id:"step-1-install-sdk-1",level:4},{value:"Step 2. Create a FeatureProbe instance",id:"step-2-create-a-featureprobe-instance-1",level:4},{value:"Step 3. Use the feature toggle",id:"step-3-use-the-feature-toggle-1",level:4},{value:"Step 4. Unit Testing (Optional)",id:"step-4-unit-testing-optional-1",level:4}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ios-sdk"},"iOS SDK"),(0,a.kt)("h2",{id:"ios-usage"},"iOS Usage"),(0,a.kt)("h3",{id:"swift"},"Swift"),(0,a.kt)("h4",{id:"step-1-install-sdk"},"Step 1. Install SDK"),(0,a.kt)("p",null,"Swift Package Manager:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. XCode -> File -> Add Packages -> input `https://github.com/FeatureProbe/client-sdk-ios.git`\n2. click `Add Package`\n")),(0,a.kt)("p",null,"Cocoapods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. add `pod 'FeatureProbe', :git => 'git@github.com:FeatureProbe/client-sdk-ios.git'` to Podfile\n2. `pod install` or `pod update`\n")),(0,a.kt)("h4",{id:"step-2-create-a-featureprobe-instance"},"Step 2. Create a FeatureProbe instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'import featureprobe\n\nlet url = FpUrlBuilder(remoteUrl: "remote_url/").build();\nlet user = FpUser(key: "user@company.com")\nuser.setAttr(key: "name", value: "bob")\nlet config = FpConfig(\n    remoteUrl: url!,\n    clientSdkKey: "client-9d885a68ca2955dfb3a7c95435c0c4faad70b50d",\n    refreshInterval: 10,\n    waitFirstResp: true\n)\nlet fp = FeatureProbe(config: config, user: user)\n')),(0,a.kt)("h4",{id:"step-3-use-the-feature-toggle"},"Step 3. Use the feature toggle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let showFeature = fp.boolValue("your.toggle.key", false)\nif showFeature {\n    # application code to show the feature\n} else {\n    # the code to run if the feature is off\n}\n')),(0,a.kt)("h4",{id:"step-4-unit-testing-optional"},"Step 4. Unit Testing (Optional)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let fp2 = FeatureProbe.newForTest(toggles: "{ \\"toggle_1\\": true }")\nlet is_true = fp2.boolValue(key: "toggle_1", defaultValue: false)\nassert(is_true == true);\n')),(0,a.kt)("p",null,"Find the Demo code in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-ios/demo-cocoapods"},"example")),(0,a.kt)("h3",{id:"objective-c"},"Objective-C"),(0,a.kt)("h4",{id:"step-1-install-sdk-1"},"Step 1. Install SDK"),(0,a.kt)("p",null,"Cocoapods"),(0,a.kt)("p",null,"add ",(0,a.kt)("inlineCode",{parentName:"p"},"pod 'FeatureProbe', :git => 'git@github.com:FeatureProbe/client-sdk-ios.git'")," to Podfile"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pod update")),(0,a.kt)("h4",{id:"step-2-create-a-featureprobe-instance-1"},"Step 2. Create a FeatureProbe instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objective-c"},'#import "FeatureProbe-Swift.h"\n\nNSString *urlStr = @"remote_url/";\nFpUrl *url = [[[FpUrlBuilder alloc] initWithRemoteUrl: urlStr] build];\nFpUser *user = [[FpUser alloc] initWithKey:@"user_key"];\n[user setAttrWithKey:@"name" value:@"bob"];\nFpConfig *config = [[FpConfig alloc] initWithRemoteUrl: url\n                                          clientSdkKey:@"client-9d885a68ca2955dfb3a7c95435c0c4faad70b50d"\n                                       refreshInterval: 10\n                                         waitFirstResp: true];\nFeatureProbe *fp = [[FeatureProbe alloc] initWithConfig:config user:user];\n')),(0,a.kt)("h4",{id:"step-3-use-the-feature-toggle-1"},"Step 3. Use the feature toggle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objective-c"},'bool showFeature = [fp boolValueWithKey: @"your.toggle.key" defaultValue: false];\nif (showFeature) {\n    # application code to show the feature\n} else {\n    # the code to run if the feature is off\n}\n')),(0,a.kt)("h4",{id:"step-4-unit-testing-optional-1"},"Step 4. Unit Testing (Optional)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objective-c"},'#import "FeatureProbe-Swift.h"\n\nNSString *s = @"{ \\"ab_test\\": \\"green\\"}";\nFeatureProbe *fp = [[FeatureProbe alloc] initWithTestJson: s];\nNSString *value = [fp stringValueWithKey:@"ab_test" defaultValue:@"red"];\nNSLog(@"value is %@", value);\n')),(0,a.kt)("p",null,"Find the Demo code in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-ios/demo-objc"},"example")))}c.isMDXComponent=!0}}]);
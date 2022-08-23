"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[537],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(k,s(s({ref:t},p),{},{components:r})):a.createElement(k,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8431:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},s="Java SDK",l={unversionedId:"sdk/Server-Side SDKs/java-sdk",id:"sdk/Server-Side SDKs/java-sdk",title:"Java SDK",description:"Feature Probe is an open source feature management service. This SDK is used to control features in java programs. This",source:"@site/docs/sdk/Server-Side SDKs/java-sdk.md",sourceDirName:"sdk/Server-Side SDKs",slug:"/sdk/Server-Side SDKs/java-sdk",permalink:"/sdk/Server-Side SDKs/java-sdk",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/docs/sdk/Server-Side SDKs/java-sdk.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Server-Side SDKs",permalink:"/category/server-side-sdks"},next:{title:"Golang SDK",permalink:"/sdk/Server-Side SDKs/golang-sdk"}},i={},u=[{value:"Try Out Demo Code",id:"try-out-demo-code",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"Step 1. Install the Java SDK",id:"step-1-install-the-java-sdk",level:3},{value:"Apache Maven",id:"apache-maven",level:4},{value:"Gradle Groovy DSL",id:"gradle-groovy-dsl",level:4},{value:"Step 2. Create a FeatureProbe instance",id:"step-2-create-a-featureprobe-instance",level:3},{value:"Step 3. Use the feature toggle",id:"step-3-use-the-feature-toggle",level:3},{value:"Test of this SDK",id:"test-of-this-sdk",level:2},{value:"Mock FeatureProbe for Unittest",id:"mock-featureprobe-for-unittest",level:2},{value:"1. Add powermock SDK to your project:",id:"1-add-powermock-sdk-to-your-project",level:3},{value:"2. Mock Toggle",id:"2-mock-toggle",level:3},{value:"Target Method",id:"target-method",level:4},{value:"Unit Test Code",id:"unit-test-code",level:4}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"java-sdk"},"Java SDK"),(0,n.kt)("p",null,"Feature Probe is an open source feature management service. This SDK is used to control features in java programs. This\nSDK is designed primarily for use in multi-user systems such as web servers and applications."),(0,n.kt)("h2",{id:"try-out-demo-code"},"Try Out Demo Code"),(0,n.kt)("p",null,"We provide a runnable ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/server-sdk-java/blob/main/src/main/java/com/featureprobe/sdk/example/"},"demo code")," for you to understand how FeatureProbe SDK is used."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select a FeatureProbe platform to connect to."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can use our online demo environment ",(0,n.kt)("a",{parentName:"li",href:"https://featureprobe.io/login"},"FeatureProbe Demo"),"."),(0,n.kt)("li",{parentName:"ul"},"Or you can use docker composer to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/FeatureProbe/FeatureProbe#1-starting-featureprobe-service-with-docker-compose"},"set up your own FeatureProbe service")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download this repo and run the demo program:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/FeatureProbe/server-sdk-java.git\ncd server-sdk-java\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the Demo code in ",(0,n.kt)("inlineCode",{parentName:"p"},"src/main/java/com/featureprobe/sdk/example/FeatureProbeDemo.java")," change ",(0,n.kt)("inlineCode",{parentName:"p"},"FEATURE_PROBE_SERVER_URL")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"FEATURE_PROBE_SERVER_SDK_KEY")," to match the platform you selected."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For online demo environment:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FEATURE_PROBE_SERVER_URL"),' = "',(0,n.kt)("a",{parentName:"li",href:"https://featureprobe.io/server%22"},'https://featureprobe.io/server"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FEATURE_PROBE_SERVER_SDK_KEY")," please copy from GUI:\n",(0,n.kt)("img",{alt:"server_sdk_key snapshot",src:r(2432).Z,width:"1382",height:"1116"})))),(0,n.kt)("li",{parentName:"ul"},"For docker environment:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FEATURE_PROBE_SERVER_URLl"),' = "http://YOUR_DOCKER_IP:4009/server"'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FEATURE_PROBE_SERVER_SDK_KEY"),' = "server-8ed48815ef044428826787e9a238b9c6a479f98c"'))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the program."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mvn package\njava -jar ./target/server-sdk-java-1.2.1.jar\n")),(0,n.kt)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,n.kt)("p",null,"In this guide we explain how to use feature toggles in your own Java application using FeatureProbe."),(0,n.kt)("h3",{id:"step-1-install-the-java-sdk"},"Step 1. Install the Java SDK"),(0,n.kt)("p",null,"First, install the FeatureProbe SDK as a dependency in your application."),(0,n.kt)("h4",{id:"apache-maven"},"Apache Maven"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.featureprobe</groupId>\n    <artifactId>server-sdk-java</artifactId>\n    <version>LATEST_VERSION</version>\n</dependency>\n")),(0,n.kt)("h4",{id:"gradle-groovy-dsl"},"Gradle Groovy DSL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"implementation 'com.featureprobe:server-sdk-java:LATEST_VERSION'\n")),(0,n.kt)("h3",{id:"step-2-create-a-featureprobe-instance"},"Step 2. Create a FeatureProbe instance"),(0,n.kt)("p",null,"After you install and import the SDK, create a single, shared instance of the FeatureProbe sdk."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public class Demo {\n    private static final FPConfig config = FPConfig.builder()\n            .remoteUri(/* FeatureProbe Server URI */)\n            .build();\n\n    private static final FeatureProbe fpClient = new FeatureProbe(\n        /* FeatureProbe Server SDK Key */, config);\n}\n")),(0,n.kt)("h3",{id:"step-3-use-the-feature-toggle"},"Step 3. Use the feature toggle"),(0,n.kt)("p",null,"You can use sdk to check which variation a particular user will receive for a given feature flag."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'\nFPUser user = new FPUser(/* uniqueUserId for percentage rollout */);\nuser.with("ATTRIBUTE_NAME_IN_RULE", VALUE_OF_ATTRIBUTE);    // Call with() for each attribute used in Rule.\nboolean boolValue = fpClient.boolValue("YOUR_TOGGLE_KEY", user, false);\nif (boolValue) {\n   // the code to run if the toggle is on\n} else {\n   // the code to run if the toggle is off\n}\n\n')),(0,n.kt)("h2",{id:"test-of-this-sdk"},"Test of this SDK"),(0,n.kt)("p",null,"We have unified integration tests for all our SDKs. Integration test cases are added as submodules for each SDK repo. So\nbe sure to pull submodules first to get the latest integration tests before running tests."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git pull --recurse-submodules\nmvn test\n")),(0,n.kt)("h2",{id:"mock-featureprobe-for-unittest"},"Mock FeatureProbe for Unittest"),(0,n.kt)("p",null,"You can mock FeatureProbe SDK returned value, to run unittest of your code."),(0,n.kt)("h3",{id:"1-add-powermock-sdk-to-your-project"},"1. Add powermock SDK to your project:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.powermock</groupId>\n    <artifactId>powermock-api-mockito2</artifactId>\n    <version>2.0.9</version>\n    <scope>test</scope>\n</dependency>\n<dependency>\n    <groupId>org.powermock</groupId>\n    <artifactId>powermock-module-junit4</artifactId>\n    <version>2.0.9</version>\n    <scope>test</scope>\n</dependency>\n")),(0,n.kt)("h3",{id:"2-mock-toggle"},"2. Mock Toggle"),(0,n.kt)("h4",{id:"target-method"},"Target Method"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@AllArgsConstructor\n@Service\npublic class DemoService {\n\n    FeatureProbe fp;\n\n    public boolean isTester(String userId, String tel) {\n        FPUser fpUser = new FPUser(userId);\n        fpUser.with("tel", tel);\n        return fp.boolValue("is_tester", fpUser, false);\n    }\n}\n')),(0,n.kt)("h4",{id:"unit-test-code"},"Unit Test Code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@RunWith(PowerMockRunner.class)\n@PrepareForTest({FeatureProbe.class})\npublic class FeatureProbeTest {\n\n    @Test\n    public void test() {\n        FeatureProbe fp = PowerMockito.mock(FeatureProbe.class);\n        DemoService demoService = new DemoService(fp);\n        Mockito.when(fp.boolValue(anyString(), any(FPUser.class), anyBoolean())).thenReturn(true);\n        boolean tester = demoService.isTester("user123", "12397347232");\n        assert tester;\n    }\n\n}\n')))}c.isMDXComponent=!0},2432:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/server_sdk_key-fdb5ba9d6ea1cd5f8471de0f50c6cb14.png"}}]);
(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[2175],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3295:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(4034),r=n(9973),o=(n(7294),n(3905)),i={sidebar_position:12},u="\u6279\u91cf\u53d1\u5305: \u6a21\u7cca\u6d4b\u8bd5\u6279\u91cf\u53d1\u5305",l={unversionedId:"yakexamples/batch-http",id:"yakexamples/batch-http",isDocsHomePage:!1,title:"\u6279\u91cf\u53d1\u5305: \u6a21\u7cca\u6d4b\u8bd5\u6279\u91cf\u53d1\u5305",description:"\u5728 yak \u4e2d\uff0c\u6279\u91cf\u53d1\u5305\u7684\u65b9\u5f0f\u4e3b\u8981\u6709\u4e24\u79cd",source:"@site/docs/yakexamples/batch-http.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/batch-http",permalink:"/docs/yakexamples/batch-http",editUrl:"https://github.com/yaklang/docs/yakexamples/batch-http.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"\u6587\u672c\u76f8\u4f3c\u5ea6\u7b97\u6cd5\uff1aSQLMAP, SimHash \u4e0e SSDeep",permalink:"/docs/yakexamples/similarity-calc"},next:{title:"Java \u53cd\u5e8f\u5217\u5316\u5229\u7528\u94fe: yso(ysoserial)",permalink:"/docs/yakexamples/ysoserial-demo"}},s=[{value:"0x01 \u4f7f\u7528 <code>httpool</code> \u8fdb\u884c\u6a21\u7cca\u6d4b\u8bd5\u6a21\u7248\u53d1\u5305",id:"0x01-\u4f7f\u7528-httpool-\u8fdb\u884c\u6a21\u7cca\u6d4b\u8bd5\u6a21\u7248\u53d1\u5305",children:[{value:"\u5e26\u53c2\u6570\u6e32\u67d3\u7684\u6279\u91cf\u53d1\u5305\u6a21\u7248",id:"\u5e26\u53c2\u6570\u6e32\u67d3\u7684\u6279\u91cf\u53d1\u5305\u6a21\u7248",children:[]},{value:"\u4f7f\u7528 HTTPS \u534f\u8bae",id:"\u4f7f\u7528-https-\u534f\u8bae",children:[]},{value:"\u53d1\u9001\u5230\u6307\u5b9a\u4e3b\u673a\u7aef\u53e3",id:"\u53d1\u9001\u5230\u6307\u5b9a\u4e3b\u673a\u7aef\u53e3",children:[]}]},{value:"0x02 \u4f7f\u7528 <code>fuzz.HTTPRequest</code> \u6765\u5b8c\u6210\u6279\u91cf\u53d1\u5305",id:"0x02-\u4f7f\u7528-fuzzhttprequest-\u6765\u5b8c\u6210\u6279\u91cf\u53d1\u5305",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6279\u91cf\u53d1\u5305-\u6a21\u7cca\u6d4b\u8bd5\u6279\u91cf\u53d1\u5305"},"\u6279\u91cf\u53d1\u5305: \u6a21\u7cca\u6d4b\u8bd5\u6279\u91cf\u53d1\u5305"),(0,o.kt)("p",null,"\u5728 yak \u4e2d\uff0c\u6279\u91cf\u53d1\u5305\u7684\u65b9\u5f0f\u4e3b\u8981\u6709\u4e24\u79cd"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u79cd\u662f\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"fuzz")," \u6a21\u5757\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"fuzz.HTTPRequest")," \u51fd\u6570\u6784\u5efa\u6a21\u7cca\u6d4b\u8bd5\u8bf7\u6c42\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u79cd\u662f\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"httpool")," \u6a21\u5757\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"httpool.Pool")," \u51fd\u6570\u8fdb\u884c\u8bf7\u6c42\u6279\u91cf\u6e32\u67d3\u4e0e\u53d1\u5305\u3002")),(0,o.kt)("p",null,"\u8fd9\u4e24\u79cd\u65b9\u5f0f\u9002\u7528\u7684\u573a\u666f\u6709\u4e00\u4e9b\u7ec6\u5fae\u5dee\u522b\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"httpool.Pool")," \u672c\u8d28\u4e0a\u6838\u5fc3\u53d1\u5305\u51fd\u6570\u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"poc.HTTP")," \u662f\u4e00\u81f4\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u8ba4\u4e3a\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"poc.HTTP")," \u7684\u6279\u91cf\u8fdb\u9636\u7248\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"fuzz.HTTPRequest")," \u867d\u7136\u6700\u540e\u662f\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"httpool.Pool")," \u5b9e\u73b0\u53d1\u5305\u7684\uff0c\u4f46\u662f\u4f1a\u5bf9\u6570\u636e\u5305\u505a\u4e00\u4e9b\u9884\u5904\u7406\uff0c\u4f8b\u5982\uff1a",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u94fe\u5f0f API \u8c03\u7528\u53ef\u7f16\u7a0b\u5730\u5904\u7406\u6570\u636e\u5305\u7ec6\u8282"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u81ea\u52a8\u66ff\u6362\u53c2\u6570\u7684\u5185\u5bb9\u3002\u751f\u6210\u53ef\u4ee5\u6d4b\u8bd5\u7684\u53c2\u6570\u6a21\u7248\u8bf7\u6c42\u3002")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5bf9\u6bd4\u603b\u7ed3")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"fuzz.HTTPRequest")," \u9002\u5408\u7ec6\u8282\u64cd\u4f5c\u6570\u636e\u5305\uff0c\u5c24\u5176\u662f\u6709\u903b\u8f91\u7684\u52a8\u6001\u8c03\u6574\u53c2\u6570\u8fdb\u884c\u6a21\u7cca\u6d4b\u8bd5\u6216\u8005\u6f0f\u6d1e\u68c0\u6d4b\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"httpool.Pool")," \u9002\u5408\u5927\u6279\u91cf\u7684\u53d1\u5305\uff0c\u8fdb\u884c\u6a21\u7248\u6e32\u67d3\u540e\uff0c\u4fee\u590d\u6570\u636e\u5305 ",(0,o.kt)("inlineCode",{parentName:"li"},"Content-Length")," \u518d\u53d1\u9001")),(0,o.kt)("p",{parentName:"div"},"\u4e0e\u6b64\u540c\u65f6\uff0c\u4ed6\u4eec\u7684\u8fd4\u56de\u503c\u90fd\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"chan *palm/common/mutate.(_httpResult)")," \u5bf9\u8c61\u3002"),(0,o.kt)("p",{parentName:"div"},"\u5176\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type palm/common/mutate.(_httpResult) struct {\n  Fields(\u53ef\u7528\u5b57\u6bb5):\n      Url: string\n      Request: *http.Request\n      Error: error\n      RequestRaw: []uint8\n      ResponseRaw: []uint8\n      Response: *http.Response\n      DurationMs: int64\n      Timestamp: int64\n      Payloads: []string\n  StructMethods(\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n  PtrStructMethods(\u6307\u9488\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n}\n")))),(0,o.kt)("h2",{id:"0x01-\u4f7f\u7528-httpool-\u8fdb\u884c\u6a21\u7cca\u6d4b\u8bd5\u6a21\u7248\u53d1\u5305"},"0x01 \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h2"},"httpool")," \u8fdb\u884c\u6a21\u7cca\u6d4b\u8bd5\u6a21\u7248\u53d1\u5305"),(0,o.kt)("p",null,"\u6211\u4eec\u5c1d\u8bd5\u5bf9\u4e00\u4e2a\u7f51\u7ad9\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/target1 /target2 /target3 ... /target10")," \u8fdb\u884c\u6279\u91cf\u53d1\u5305\uff0c\u5982\u4f55\u5b9e\u73b0\u5462\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res, err = httpool.Pool(`GET /target{{int(1-10)}} HTTP/1.1\nHost: www.baidu.com\n`)\ndie(err)\n\nloglevel("info")\nfor result = range res {\n    header, body = poc.Split(result.ResponseRaw)\n    log.info("URL: %v", result.Url)\n}\n\n/*\nOUTPUT:\n    ...\n    ...\n    [INFO] 2022-03-08 14:28:21 +0800 [yaki-code-383898351] URL: http://www.baidu.com/target5\n    [INFO] 2022-03-08 14:28:21 +0800 [yaki-code-383898351] URL: http://www.baidu.com/target10\n    [INFO] 2022-03-08 14:28:21 +0800 [yaki-code-383898351] URL: http://www.baidu.com/target8\n    [INFO] 2022-03-08 14:28:21 +0800 [yaki-code-383898351] URL: http://www.baidu.com/target1\n    [INFO] 2022-03-08 14:28:21 +0800 [yaki-code-383898351] URL: http://www.baidu.com/target2\n    [INFO] 2022-03-08 14:28:21 +0800 [yaki-code-383898351] URL: http://www.baidu.com/target6\n    [INFO] 2022-03-08 14:28:21 +0800 [yaki-code-383898351] URL: http://www.baidu.com/target7\n    [INFO] 2022-03-08 14:28:21 +0800 [yaki-code-383898351] URL: http://www.baidu.com/target9\n    [INFO] 2022-03-08 14:28:21 +0800 [yaki-code-383898351] URL: http://www.baidu.com/target3\n    [INFO] 2022-03-08 14:28:21 +0800 [yaki-code-383898351] URL: http://www.baidu.com/target4\n*/\n')),(0,o.kt)("h3",{id:"\u5e26\u53c2\u6570\u6e32\u67d3\u7684\u6279\u91cf\u53d1\u5305\u6a21\u7248"},"\u5e26\u53c2\u6570\u6e32\u67d3\u7684\u6279\u91cf\u53d1\u5305\u6a21\u7248"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res, err = httpool.Pool(`GET /target{{params(suffix)}} HTTP/1.1\nHost: www.baidu.com\n\n{{params(body)}}\n`, httpool.fuzzParams({"suffix": ["1", "2", "3", "4"], "body": 123}))\ndie(err)\n\nloglevel("info")\nfor result = range res {\n    header, body = poc.Split(result.ResponseRaw)\n    log.info("URL: %v", result.Url)\n    println(string(poc.Split(result.RequestRaw)[1]))\n}\n\n/*\nOUTPUT:\n    ...\n    [INFO] 2022-03-08 14:32:03 +0800 [default:log.go:178] start to send to http://www.baidu.com/target1(:0) (packet mode)\n    [INFO] 2022-03-08 14:32:03 +0800 [default:log.go:178] start to send to http://www.baidu.com/target2(:0) (packet mode)\n    [INFO] 2022-03-08 14:32:03 +0800 [default:log.go:178] start to send to http://www.baidu.com/target3(:0) (packet mode)\n    [INFO] 2022-03-08 14:32:03 +0800 [default:log.go:178] start to send to http://www.baidu.com/target4(:0) (packet mode)\n    [INFO] 2022-03-08 14:32:03 +0800 [yaki-code-283417700] URL: http://www.baidu.com/target1\n    123\n\n    [INFO] 2022-03-08 14:32:03 +0800 [yaki-code-283417700] URL: http://www.baidu.com/target2\n    123\n\n    [INFO] 2022-03-08 14:32:03 +0800 [yaki-code-283417700] URL: http://www.baidu.com/target4\n    123\n\n    [INFO] 2022-03-08 14:32:03 +0800 [yaki-code-283417700] URL: http://www.baidu.com/target3\n    123\n\n*/\n')),(0,o.kt)("h3",{id:"\u4f7f\u7528-https-\u534f\u8bae"},"\u4f7f\u7528 HTTPS \u534f\u8bae"),(0,o.kt)("p",null,"\u6211\u4eec\u5bf9\u4e0a\u9762\u7684\u5185\u5bb9\u8fdb\u884c\u4e00\u70b9\u70b9\u4fee\u6539\uff0c\u589e\u52a0\u4e00\u4e9b\u5176\u4ed6\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res, err = httpool.Pool(`GET /target{{params(suffix)}} HTTP/1.1\nHost: www.baidu.com\n\n{{params(body)}}\n`, httpool.fuzzParams({"suffix": ["1", "2", "3", "4"], "body": 123}), httpool.https(true))\ndie(err)\n')),(0,o.kt)("h3",{id:"\u53d1\u9001\u5230\u6307\u5b9a\u4e3b\u673a\u7aef\u53e3"},"\u53d1\u9001\u5230\u6307\u5b9a\u4e3b\u673a\u7aef\u53e3"),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Host")," \u78b0\u649e\u4f5c\u4e3a\u4e00\u4e2a\u5178\u578b\u4f8b\u5b50\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e Yak \u6765\u8bf4\uff0c\u8fd9\u5e76\u4e0d\u662f\u4e00\u4e2a\u56f0\u96be\u7684\u4e8b\u60c5\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"httpool")," \u7684\u53c2\u6570\u53ef\u4ee5\u6307\u5b9a host \u5b9e\u73b0\u9488\u5bf9 IP \u7684\u7279\u5b9a\u8fde\u63a5\uff0c\u518d\u53bb\u67e5\u8be2\u7ed1\u5b9a\u5173\u7cfb\uff0c\u4ece\u800c\u78b0\u649e\u51fa\u53ef\u4ee5\u8bbf\u95ee\u7684\u5185\u90e8\u8d44\u4ea7\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'domains = [\n    "m1.test.example.com",\n    "oa.example.com",\n    "oa2.example.com",\n    "oa3.example.com",\n    "ns1.test.example.com",\n    "ns2.test.example.com",\n    "test1.stage.example.com",\n    "test2.stage.example.com",\n    "test3.stage.example.com",\n    "crm.test.example.com",\n    "test1.dev.example.com",\n]\n\nres, err = httpool.Pool(`GET /admin/ HTTP/1.1\nHost: {{params(domains)}}\nUesr-Agent: test111\n\n`, httpool.fuzzParams({"domains":domains}), httpool.https(true), httpool.host("cybertunnel.run", true/*type: isHttps*/))\ndie(err)\n\nloglevel("info")\nfor result = range res {\n    header, body = poc.Split(result.ResponseRaw)\n    log.info("URL: %v", result.Url)\n    // \u5904\u7406\u7ed3\u679c\n    if result.Response != nil {\n        if result.Response.StatusCode >= 200 && result.Response.StatusCode < 400 {\n            // \u5904\u7406\u7ed3\u679c\n        }\n    }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Golang \u6807\u51c6\u5e93\u5e76\u4e0d\u9002\u5408\u5b8c\u6210\u8fd9\u9879\u5de5\u4f5c")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5bf9\u4e8e Golang \u6765\u8bf4\uff0c\u4f1a\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"(*http.Request).Host")," \u7b49\u6765\u51b3\u5b9a\u771f\u6b63\u8bbf\u95ee\u7684 IP\u3002"),(0,o.kt)("p",{parentName:"div"},"\u6211\u4eec\u9700\u8981\u6307\u5b9a IP \u5e76\u4e0d\u80fd\u4f7f\u7528\u6807\u51c6\u5e93\u3002"))),(0,o.kt)("h2",{id:"0x02-\u4f7f\u7528-fuzzhttprequest-\u6765\u5b8c\u6210\u6279\u91cf\u53d1\u5305"},"0x02 \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h2"},"fuzz.HTTPRequest")," \u6765\u5b8c\u6210\u6279\u91cf\u53d1\u5305"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fuzz.HTTPRequest"),' \u66f4\u50cf\u662f\u4e00\u4e2a "\u5916\u79d1\u624b\u672f" \u7684\u5e93\uff0c\u867d\u7136\u4e0d\u80fd\u50cf ',(0,o.kt)("inlineCode",{parentName:"p"},"httpool")," \u4e00\u6837\u5927\u5f00\u5927\u5408\uff0c\u4f46\u662f\u66f4\u64c5\u957f\u64cd\u4f5c\u6570\u636e\u5305\u7684\u7ec6\u8282\u4e0e\u53c2\u6570\u3002"),(0,o.kt)("p",null,"\u5173\u4e8e\u8fd9\u4e2a\u5e93\uff0c\u6587\u6863\u4e2d\u5df2\u7ecf\u6709\u5f88\u591a\u63cf\u8ff0\u4e86\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u94fe\u63a5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/newforyak/fuzz_tutorial"},"WEB \u6a21\u7cca\u6d4b\u8bd5\u5165\u95e8\uff1a\u6982\u5ff5\u4e0e\u57fa\u7840\u4f7f\u7528")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/newforyak/fuzz_for_more"},"WEB \u6a21\u7cca\u6d4b\u8bd5\u8fdb\u9636\uff1a\u53c2\u6570\u7ec6\u8282\u5904\u7406")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/buildinlibs/lib_fuzz"},"WEB \u6a21\u7cca\u6d4b\u8bd5\u624b\u518c\uff1a\u4ece fuzz \u6807\u7b7e\u5230\u94fe\u5f0f\u8bf7\u6c42"))),(0,o.kt)("p",null,"\u6211\u4eec\u4ee5\u4e00\u4e2a\u7b80\u5355\u4f8b\u5b50\u5feb\u901f\u9884\u89c8\u4e00\u4e0b\u8fd9\u4e2a\u5e93\u7684\u6838\u5fc3\u529f\u80fd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'freq, err = fuzz.HTTPRequest(`GET / HTTP/1.1\nHost: www.example.com\n`)\ndesc(freq)\n\nfreq = freq.FuzzPath("/specific-path1").FuzzMethod("POST").FuzzPostRaw(`{"a": 123}`).FuzzPostJsonParams("KEY", "123")\nfreq.Show() // Display\n\n/*\nOUTPUT:\n\n    POST /specific-path1 HTTP/1.1\n    Host: www.example.com\n    Content-Length: 21\n\n    {"KEY":"123","a":123}\n*/\n\nres, err = freq.Exec()\ndie(err)\nfor result = range res {\n    // handle `palm/common/mutate.(_httpResult)`\n}\n\nresult, err = freq.ExecFirst()\ndie(err)\n// handle `palm/common/mutate.(_httpResult)`\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"freq \u5b9a\u4e49")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6211\u4eec\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"*mutate.FuzzHTTPRequest")," \u7684\u7684\u65f6\u5019\uff0c\u5982\u679c\u4e0d\u77e5\u9053\u4ed6\u7684\u5b9a\u4e49\u662f\u5565\uff0c\u6709\u54ea\u4e9b\u53ef\u7528\u65b9\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"desc(freq)")," \u76f4\u63a5\u67e5\u770b"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type palm/common/mutate.(FuzzHTTPRequest) struct {\n  Fields(\u53ef\u7528\u5b57\u6bb5):\n      Opts: []mutate.BuildFuzzHTTPRequestOption\n  StructMethods(\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n  PtrStructMethods(\u6307\u9488\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n      func Exec(v1 ...func httpPoolConfigOption(v1: *mutate.httpPoolConfig) ) return(chan *mutate._httpResult, error)\n      func ExecFirst(v1 ...func httpPoolConfigOption(v1: *mutate.httpPoolConfig) ) return(*mutate._httpResult, error)\n      func FuzzCookie(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf)\n      func FuzzCookieRaw(v1: interface {}) return(mutate.FuzzHTTPRequestIf)\n      func FuzzFormEncoded(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf)\n      func FuzzGetParams(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf)\n      func FuzzGetParamsRaw(v1 ...string) return(mutate.FuzzHTTPRequestIf)\n      func FuzzHTTPHeader(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf)\n      func FuzzMethod(v1 ...string) return(mutate.FuzzHTTPRequestIf)\n      func FuzzPath(v1 ...string) return(mutate.FuzzHTTPRequestIf)\n      func FuzzPostJsonParams(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf)\n      func FuzzPostParams(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf)\n      func FuzzPostRaw(v1 ...string) return(mutate.FuzzHTTPRequestIf)\n      func FuzzUploadFile(v1: interface {}, v2: interface {}, v3: []uint8) return(mutate.FuzzHTTPRequestIf)\n      func FuzzUploadFileName(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf)\n      func FuzzUploadKVPair(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf)\n      func GetCommonParams() return([]*mutate.FuzzHTTPRequestParam)\n      func GetCookieParams() return([]*mutate.FuzzHTTPRequestParam)\n      func GetGetQueryParams() return([]*mutate.FuzzHTTPRequestParam)\n      func GetOriginHTTPRequest() return(*http.Request, error)\n      func GetPostJsonParams() return([]*mutate.FuzzHTTPRequestParam)\n      func GetPostParams() return([]*mutate.FuzzHTTPRequestParam)\n      func IsBodyFormEncoded() return(bool)\n      func IsBodyJsonEncoded() return(bool)\n      func IsBodyUrlEncoded() return(bool)\n      func IsEmptyBody() return(bool)\n      func ParamsHash() return(string, error)\n      func Repeat(v1: int) return(mutate.FuzzHTTPRequestIf)\n      func Results() return([]*http.Request, error)\n      func Show()\n}\n")))))}c.isMDXComponent=!0}}]);
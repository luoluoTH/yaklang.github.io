(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3275],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,p(p({ref:t},l),{},{components:n})):r.createElement(m,p({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2098:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(4034),a=n(9973),o=(n(7294),n(3905)),p={sidebar_position:3},i="\u4ece URL \u53d1\u8d77 HTTP \u8bf7\u6c42",s={unversionedId:"yakexamples/http-basic",id:"yakexamples/http-basic",isDocsHomePage:!1,title:"\u4ece URL \u53d1\u8d77 HTTP \u8bf7\u6c42",description:"yak \u539f\u751f\u7684 http \u662f Golang Native http \u7684\u9ad8\u5ea6\u5c01\u88c5\uff0c\u4e24\u8005\u7684\u5185\u90e8\u5bf9\u8c61\u5e76\u65e0\u5927\u7684\u5dee\u522b\u3002",source:"@site/docs/yakexamples/http-basic.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/http-basic",permalink:"/docs/yakexamples/http-basic",editUrl:"https://github.com/yaklang/docs/yakexamples/http-basic.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u9001 HTTP \u539f\u59cb\u6570\u636e\u5305",permalink:"/docs/yakexamples/http-raw"},next:{title:"\u7f16\u7a0b\u6280\u5de7\uff1a\u51fd\u6570\u5f0f\u8865\u5145\u8bed\u6cd5",permalink:"/docs/yakexamples/func-p"}},c=[{value:"\u4f7f\u7528 http \u57fa\u7840\u5e93",id:"\u4f7f\u7528-http-\u57fa\u7840\u5e93",children:[{value:"\u53c2\u6570\u8bbe\u7f6e",id:"\u53c2\u6570\u8bbe\u7f6e",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4ece-url-\u53d1\u8d77-http-\u8bf7\u6c42"},"\u4ece URL \u53d1\u8d77 HTTP \u8bf7\u6c42"),(0,o.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u57fa\u7840\u8bf4\u660e")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"yak \u539f\u751f\u7684 http \u662f Golang Native http \u7684\u9ad8\u5ea6\u5c01\u88c5\uff0c\u4e24\u8005\u7684\u5185\u90e8\u5bf9\u8c61\u5e76\u65e0\u5927\u7684\u5dee\u522b\u3002"))),(0,o.kt)("h2",{id:"\u4f7f\u7528-http-\u57fa\u7840\u5e93"},"\u4f7f\u7528 http \u57fa\u7840\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'rsp, err = http.Get("http://baidu.com")\ndie(err)\n\n# \u83b7\u53d6 StatusCode\nprintf("StatusCode: %v\\n", rsp.StatusCode)\n\n# \u83b7\u53d6\u4e00\u4e2a Header\nprintf("Content-Length: %v\\n", rsp.Header["Content-Length"])\n\n# \u751f\u6210\u5b8c\u6574\u6570\u636e\u5305\nrspRaw, err = http.dump(rsp)\ndie(err)\n\nprintln(string(rspRaw))\n\nhttp.show(rsp.Request)\n')),(0,o.kt)("p",null,"\u6267\u884c\u4e0a\u8ff0\u4ee3\u7801\u8fd0\u884c\u7ed3\u679c\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'StatusCode: 200\nContent-Length: [81]\nHTTP/1.1 200 OK\nConnection: close\nContent-Length: 81\nAccept-Ranges: bytes\nCache-Control: max-age=86400\nContent-Type: text/html\nDate: Sun, 27 Feb 2022 04:26:32 GMT\nEtag: "51-47cf7e6ee8400"\nExpires: Mon, 28 Feb 2022 04:26:32 GMT\nLast-Modified: Tue, 12 Jan 2010 13:48:00 GMT\nServer: Apache\n\n<html>\n<meta http-equiv="refresh" content="0;url=http://www.baidu.com/">\n</html>\n\nGET / HTTP/1.1\nHost: baidu.com\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u8bf4\u660e")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Yak \u4e2d\u7684 http \u6a21\u5757\u672c\u8d28\u4e0a\u662f\u5bf9 Golang \u539f\u751f http \u6a21\u5757\u7684\u9ad8\u5ea6\u5c01\u88c5\u3002"),(0,o.kt)("p",{parentName:"div"},"\u8fd4\u56de\u7684\u5bf9\u8c61 ",(0,o.kt)("inlineCode",{parentName:"p"},"*http.Response")," \u548c Golang \u7684\u5bf9\u8c61\u5e76\u65e0\u5dee\u522b\u3002\u7528\u6237\u968f\u65f6\u90fd\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"desc(rsp)")," \u67e5\u770b\u8be6\u7ec6\u5bf9\u8c61\u6210\u5458"))),(0,o.kt)("h3",{id:"\u53c2\u6570\u8bbe\u7f6e"},"\u53c2\u6570\u8bbe\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'rsp, err = http.Get("http://127.0.0.1:3000/",\n                    http.proxy("http://127.0.0.1:8083"),        //http.proxy \u8bbe\u7f6e\u4ee3\u7406\n                    http.ua(http.uarand()),                     //http.ua \u8bbe\u7f6euser-agent\u3001http.uarand\u83b7\u53d6\u4e00\u4e2a\u968f\u673a\u7684user-agent\n                    http.header("x-forward-for","127.0.0.1"),   //http.header\u8bbe\u7f6e\u4e00\u4e2aheader\n                    http.cookie("phpsession=abcdqwertyy"))      //http.cookie\u8bbe\u7f6ecookie\ndie(err)\nhttp.showhead(rsp) //http.showhead \u6253\u5370\u51fahttp\u7684\u5934\u90e8\u4fe1\u606f\nhttp.showhead(rsp.Request)\n')),(0,o.kt)("p",null,"\u6267\u884c\u4e0a\u8ff0\u4ee3\u7801\u8fd0\u884c\u7ed3\u679c\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nConnection: close\nTransfer-Encoding: chunked\nAccept-Ranges: bytes\nAccess-Control-Allow-Origin: *\nContent-Encoding: gzip\nContent-Type: text/html; charset=UTF-8\nDate: Sun, 27 Feb 2022 04:48:52 GMT\nEtag: W/"63e-qSYRygpIfzO8dOVWWZ44nQMmFqA"\nVary: Accept-Encoding\nX-Powered-By: Express\n\n\nGET / HTTP/1.1\nHost: 127.0.0.1:3000\nCookie: phpsession=abcdqwertyy\nUser-Agent: Mozilla/5.0 (X11; Linux i686; rv:49.0) Gecko/20100101 Firefox/49.0\nX-Forward-For: 127.0.0.1\n')))}d.isMDXComponent=!0}}]);
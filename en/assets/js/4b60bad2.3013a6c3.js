(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3275],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||l[h]||a;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2098:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var r=n(4034),o=n(9973),a=(n(7294),n(3905)),p={sidebar_position:2},i="\u53d1\u9001\u4e00\u4e2a HTTP \u8bf7\u6c42",c={unversionedId:"yakexamples/http-basic",id:"yakexamples/http-basic",isDocsHomePage:!1,title:"\u53d1\u9001\u4e00\u4e2a HTTP \u8bf7\u6c42",description:"\u4f7f\u7528 http \u57fa\u7840\u5e93",source:"@site/docs/yakexamples/http-basic.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/http-basic",permalink:"/en/docs/yakexamples/http-basic",editUrl:"https://github.com/yaklang/docs/yakexamples/http-basic.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u7ae0\u8282\u4ecb\u7ecd",permalink:"/en/docs/yakexamples/intro"},next:{title:"\u8bed\u6cd5\u6269\u5c55\uff1a\u5168\u5c40\u51fd\u6570\u8868",permalink:"/en/docs/api/global_buildin_ops"}},s=[{value:"\u4f7f\u7528 http \u57fa\u7840\u5e93",id:"\u4f7f\u7528-http-\u57fa\u7840\u5e93",children:[{value:"dump \u6d41\u91cf",id:"dump-\u6d41\u91cf",children:[]}]}],u={toc:s};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53d1\u9001\u4e00\u4e2a-http-\u8bf7\u6c42"},"\u53d1\u9001\u4e00\u4e2a HTTP \u8bf7\u6c42"),(0,a.kt)("h2",{id:"\u4f7f\u7528-http-\u57fa\u7840\u5e93"},"\u4f7f\u7528 http \u57fa\u7840\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'rsp, err = http.Get("http://baidu.com")\ndie(err)\n\n# \u83b7\u53d6 StatusCode\nprintf("StatusCode: %v\\n", rsp.StatusCode)\n\n# \u83b7\u53d6\u4e00\u4e2a Header\nprintf("Content-Length: %v\\n", rsp.Header["Content-Length"])\n\n# \u751f\u6210\u5b8c\u6574\u6570\u636e\u5305\nrspRaw, err = http.dump(rsp)\ndie(err)\n\nprintln(string(rspRaw))\n\nhttp.show(rsp.Request)\n')),(0,a.kt)("p",null,"\u6267\u884c\u4e0a\u8ff0\u4ee3\u7801\u8fd0\u884c\u7ed3\u679c\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'StatusCode: 200\nContent-Length: [81]\nHTTP/1.1 200 OK\nConnection: close\nContent-Length: 81\nAccept-Ranges: bytes\nCache-Control: max-age=86400\nContent-Type: text/html\nDate: Sun, 27 Feb 2022 04:26:32 GMT\nEtag: "51-47cf7e6ee8400"\nExpires: Mon, 28 Feb 2022 04:26:32 GMT\nLast-Modified: Tue, 12 Jan 2010 13:48:00 GMT\nServer: Apache\n\n<html>\n<meta http-equiv="refresh" content="0;url=http://www.baidu.com/">\n</html>\n\nGET / HTTP/1.1\nHost: baidu.com\n')),(0,a.kt)("h3",{id:"dump-\u6d41\u91cf"},"dump \u6d41\u91cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'rsp, err = http.Get("http://127.0.0.1:3000/",\n                    http.proxy("http://127.0.0.1:8083"),        //http.proxy \u8bbe\u7f6e\u4ee3\u7406\n                    http.ua(http.uarand()),                     //http.ua \u8bbe\u7f6euser-agent\u3001http.uarand\u83b7\u53d6\u4e00\u4e2a\u968f\u673a\u7684user-agent\n                    http.header("x-forward-for","127.0.0.1"),   //http.header\u8bbe\u7f6e\u4e00\u4e2aheader\n                    http.cookie("phpsession=abcdqwertyy"))      //http.cookie\u8bbe\u7f6ecookie\ndie(err)\nhttp.showhead(rsp) //http.showhead \u6253\u5370\u51fahttp\u7684\u5934\u90e8\u4fe1\u606f\nhttp.showhead(rsp.Request)\n')),(0,a.kt)("p",null,"\u6267\u884c\u4e0a\u8ff0\u4ee3\u7801\u8fd0\u884c\u7ed3\u679c\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nConnection: close\nTransfer-Encoding: chunked\nAccept-Ranges: bytes\nAccess-Control-Allow-Origin: *\nContent-Encoding: gzip\nContent-Type: text/html; charset=UTF-8\nDate: Sun, 27 Feb 2022 04:48:52 GMT\nEtag: W/"63e-qSYRygpIfzO8dOVWWZ44nQMmFqA"\nVary: Accept-Encoding\nX-Powered-By: Express\n\n\nGET / HTTP/1.1\nHost: 127.0.0.1:3000\nCookie: phpsession=abcdqwertyy\nUser-Agent: Mozilla/5.0 (X11; Linux i686; rv:49.0) Gecko/20100101 Firefox/49.0\nX-Forward-For: 127.0.0.1\n')))}l.isMDXComponent=!0}}]);
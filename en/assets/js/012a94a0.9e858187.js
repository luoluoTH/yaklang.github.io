(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3037],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return h},kt:function(){return d}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},h=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),g=l(t),d=a,p=g["".concat(s,".").concat(d)]||g[d]||m[d]||i;return t?o.createElement(p,c(c({ref:n},h),{},{components:t})):o.createElement(p,c({ref:n},h))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=g;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var l=2;l<i;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3101:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var o=t(4034),a=t(9973),i=(t(7294),t(3905)),c={sidebar_position:11},r="\u6587\u672c\u76f8\u4f3c\u5ea6\u7b97\u6cd5\uff1aSQLMAP, SimHash \u4e0e SSDeep",s={unversionedId:"yakexamples/similarity-calc",id:"yakexamples/similarity-calc",isDocsHomePage:!1,title:"\u6587\u672c\u76f8\u4f3c\u5ea6\u7b97\u6cd5\uff1aSQLMAP, SimHash \u4e0e SSDeep",description:'\u6587\u672c\u76f8\u4f3c\u5ea6\u662f\u5f88\u591a\u65f6\u5019\u662f\u5224\u65ad\u4e00\u4e2a "\u9875\u9762\u662f\u5426\u76f8\u540c/\u76f8\u4f3c" \u975e\u5e38\u6709\u6548\u7684\u529e\u6cd5\u3002',source:"@site/docs/yakexamples/similarity-calc.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/similarity-calc",permalink:"/en/docs/yakexamples/similarity-calc",editUrl:"https://github.com/yaklang/docs/yakexamples/similarity-calc.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"JSON \u5904\u7406\uff1aloads / dumps",permalink:"/en/docs/yakexamples/json"},next:{title:"\u6279\u91cf\u53d1\u5305: \u6a21\u7cca\u6d4b\u8bd5\u6279\u91cf\u53d1\u5305",permalink:"/en/docs/yakexamples/batch-http"}},l=[{value:"0x01 SQLMap \u76f8\u4f3c\u5ea6\u8ba1\u7b97",id:"0x01-sqlmap-\u76f8\u4f3c\u5ea6\u8ba1\u7b97",children:[]},{value:"0x02 SimHash: \u5feb\u901f\u6587\u672c\u53bb\u91cd\u4e0e\u76f8\u4f3c\u5ea6\u8ba1\u7b97\uff08\u8ddd\u79bb\u6620\u5c04\uff09",id:"0x02-simhash-\u5feb\u901f\u6587\u672c\u53bb\u91cd\u4e0e\u76f8\u4f3c\u5ea6\u8ba1\u7b97\uff08\u8ddd\u79bb\u6620\u5c04\uff09",children:[]},{value:"0x03 SSDeep: \u6a21\u7cca hash \u7b97\u6cd5",id:"0x03-ssdeep-\u6a21\u7cca-hash-\u7b97\u6cd5",children:[]}],h={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6587\u672c\u76f8\u4f3c\u5ea6\u7b97\u6cd5\uff1asqlmap-simhash-\u4e0e-ssdeep"},"\u6587\u672c\u76f8\u4f3c\u5ea6\u7b97\u6cd5\uff1aSQLMAP, SimHash \u4e0e SSDeep"),(0,i.kt)("p",null,'\u6587\u672c\u76f8\u4f3c\u5ea6\u662f\u5f88\u591a\u65f6\u5019\u662f\u5224\u65ad\u4e00\u4e2a "\u9875\u9762\u662f\u5426\u76f8\u540c/\u76f8\u4f3c" \u975e\u5e38\u6709\u6548\u7684\u529e\u6cd5\u3002'),(0,i.kt)("p",null,"\u5728 Yak \u4e2d\uff0c\u8fd9\u4e3a\u6211\u4eec\u7f16\u5199\u901a\u7528\u7684\u6f0f\u6d1e\u68c0\u6d4b\u63d0\u4f9b\u6781\u5927\u4fbf\u5229\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e09\u79cd\u6587\u672c\u76f8\u4f3c\u5ea6\u68c0\u6d4b\u7b97\u6cd5\uff0c\u5e76\u4e14\u7edf\u4e00\u4e86\u63a5\u53e3\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e00\u822c\u6765\u8bf4\uff0cSSDeep \u9002\u5408\u5904\u7406\u5927\u91cf\u6d77\u91cf\u672c\u6587\uff0cSimHash \u548c SQLMap \u6700\u5927\u5b50\u4e32\u7b97\u6cd5\u5bf9\u6587\u672c\u957f\u5ea6\u5927\u5c0f\u6ca1\u6709\u8981\u6c42"),(0,i.kt)("li",{parentName:"ol"},'SQLMap \u7684\u76f8\u4f3c\u5ea6\u7b97\u6cd5\u53ef\u4ee5\u8ba4\u4e3a\u662f\u76f8\u4f3c\u5ea6\u7ebf\u6027\u589e\u957f\u7684\uff0cSimHash \u548c SSDeep \u662f "Hash \u8ddd\u79bb" \u8f6c\u5316\u4e3a\u767e\u5206\u6bd4\uff0c\u5e76\u4e0d\u4e00\u5b9a\u80fd\u4fdd\u8bc1\u662f "\u7ebf\u6027" \u7684\u3002')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e00\u822c\u6765\u8bf4 SimHash \u548c SQLMap \u7b97\u6cd5\u7684\u6613\u7528\u6027\u76f8\u5bf9\u8981\u66f4\u9ad8"),(0,i.kt)("p",{parentName:"div"},"SSDeep \u662f\u4e13\u95e8\u9488\u5bf9\u5927\u6587\u672c\u51c6\u5907\u7684\u7b97\u6cd5\u3002"))),(0,i.kt)("h2",{id:"0x01-sqlmap-\u76f8\u4f3c\u5ea6\u8ba1\u7b97"},"0x01 SQLMap \u76f8\u4f3c\u5ea6\u8ba1\u7b97"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u7b97\u6cd5\u6765\u6e90\u4e8e SQLMap \u7684\u9875\u9762\u76f8\u4f3c\u5ea6\u7b97\u6cd5\uff0c\u7531 @TimWhite \u5e08\u5085\u63d0\u4f9b Golang \u7684\u5b9e\u73b0\u7248\u672c\u3002"),(0,i.kt)("p",null,"\u76f8\u4f3c\u5ea6\u7b97\u6cd5\u539f\u7406\u662f\uff0c\u4e24\u6bb5\u6587\u672c\u7684\u76f8\u540c\u6587\u672c\u5185\u5bb9\u957f\u5ea6/\u603b\u957f\u5ea6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'packet1 := `GET /_sockets/u/13946521/ws?session=eyJ2IjoiVjMiLCJ1IjoxMzk0NjUyMSwicyI6Njk3MjI4MDcxLCJjIjoxMjQ2NzQ1MzA0LCJ0IjoxNjQ2Mzg3NTU0fQ%3D%3D--6f75e12befb81db097c8c8082e77eaad6b68bc422115c03e3a02a6a467a305f3&shared=true&p=1743245261_1645685603.14085 HTTP/1.1\nHost: alive.github.com\nAccept-Encoding: deflate\nAccept-Language: zh-CN,zh;q=0.9\nCache-Control: no-cache\nConnection: close\nContent-Length: 0\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\n\n`\npacket2 := `GET /_sockets/u/13946521/ws?session=eyJ2IjoiVjMiLCJ1IjoxMzk0NjUyMSwicyI6Njk3MjI4MDcxLCJjIjoxMjQ2NzQ1MzA0LCJ0IjoxNjQ2Mzg3NTU0fQ%3D%3D--6f75e12befb81db097c8c8082e77eaad6b68bc422115c03e3a02a6a467a305f3&shared=true&p=1743245261_1645685603.14085 HTTP/1.1\nHost: alive.github.com\nAccept-Encoding: deflate\nAccept-Language: zh-CN,zh;q=0.911111\nCache-Control: no-cache\nConnection: close\nContent-Length: 0\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\n\n\n`\npacket1, packet2 = []byte(packet1), []byte(packet2)\nstability, err = str.CalcTextMaxSubStrStability(packet1, packet2)\ndie(err)\nprintf("stability: %v\\n", stability)\n\n/*\nOUTPUT:\n\nstability: 0.995774647887324\n*/\n')),(0,i.kt)("h2",{id:"0x02-simhash-\u5feb\u901f\u6587\u672c\u53bb\u91cd\u4e0e\u76f8\u4f3c\u5ea6\u8ba1\u7b97\uff08\u8ddd\u79bb\u6620\u5c04\uff09"},"0x02 SimHash: \u5feb\u901f\u6587\u672c\u53bb\u91cd\u4e0e\u76f8\u4f3c\u5ea6\u8ba1\u7b97\uff08\u8ddd\u79bb\u6620\u5c04\uff09"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In computer science, SimHash is a technique for quickly estimating how similar two sets are. The algorithm is used by the Google Crawler to find near duplicate pages. It was created by Moses Charikar. In 2021 Google announced its intent to also use the algorithm in their newly created FLoC (Federated Learning of Cohorts) system.")),(0,i.kt)("p",null,"\u5728 Yak \u4e2d\uff0c\u6211\u4eec\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"str.*SimHash*")," \u76f8\u5173\u63a5\u53e3\u53ef\u4ee5\u8ba1\u7b97\u76f8\u5173\u5185\u5bb9\uff0c\u4e0b\u9762\u5927\u5bb6\u53ef\u4ee5\u770b\u6848\u4f8b\uff1a\u540c\u4e0a\uff0c\u6211\u4eec\u53ea\u9700\u8981\u4fee\u6539\u51fd\u6570\u8c03\u7528\u5373\u53ef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'packet1 := `GET /_sockets/u/13946521/ws?session=eyJ2IjoiVjMiLCJ1IjoxMzk0NjUyMSwicyI6Njk3MjI4MDcxLCJjIjoxMjQ2NzQ1MzA0LCJ0IjoxNjQ2Mzg3NTU0fQ%3D%3D--6f75e12befb81db097c8c8082e77eaad6b68bc422115c03e3a02a6a467a305f3&shared=true&p=1743245261_1645685603.14085 HTTP/1.1\nHost: alive.github.com\nAccept-Encoding: deflate\nAccept-Language: zh-CN,zh;q=0.9\nCache-Control: no-cache\nConnection: close\nContent-Length: 0\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\n\n`\npacket2 := `GET /_sockets/u/13946521/ws?session=eyJ2IjoiVjMiLCJ1IjoxMzk0NjUyMSwicyI6Njk3MjI4MDcxLCJjIjoxMjQ2NzQ1MzA0LCJ0IjoxNjQ2Mzg3NTU0fQ%3D%3D--6f75e12befb81db097c8c8082e77eaad6b68bc422115c03e3a02a6a467a305f3&shared=true&p=1743245261_1645685603.14085 HTTP/1.1\nHost: alive.github.com\nAccept-Encoding: deflate\nAccept-Language: zh-CN,zh;q=0.911111\nCache-Control: no-cache\nConnection: close\nContent-Length: 0\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\n\n\n`\npacket1, packet2 = []byte(packet1), []byte(packet2)\nstability, err = str.CalcSimHashStability(packet1, packet2)\ndie(err)\nprintf("stability: %v\\n", stability)\n\n\n/*\nOUTPUT:\n\nstability: 0.9921875\n*/\n')),(0,i.kt)("h2",{id:"0x03-ssdeep-\u6a21\u7cca-hash-\u7b97\u6cd5"},"0x03 SSDeep: \u6a21\u7cca hash \u7b97\u6cd5"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\uff0cSSDEEP \u5bf9\u6587\u672c\u5927\u5c0f\u6709\u8981\u6c42")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff0cSSDeep \u5bf9\u6587\u672c\u957f\u5ea6\u6709\u8981\u6c42\uff0c\u5982\u679c\u8981\u751f\u6210\u6709\u610f\u4e49\u7684\u7ed3\u679c\uff0c\u6700\u597d\u6587\u672c\u957f\u5ea6\u4e0d\u5c0f\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"4096")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"ssdeep is a program for computing context triggered piecewise hashes (CTPH). Also called fuzzy hashes, CTPH can match inputs that have homologies. Such inputs have sequences of identical bytes in the same order, although bytes in between these sequences may be different in both content and length.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'packet1 := `GET /_sockets/u/13946521/ws?session=eyJ2IjoiVjMiLCJ1IjoxMzk0NjUyMSwicyI6Njk3MjI4MDcxLCJjIjoxMjQ2NzQ1MzA0LCJ0IjoxNjQ2Mzg3NTU0fQ%3D%3D--6f75e12befb81db097c8c8082e77eaad6b68bc422115c03e3a02a6a467a305f3&shared=true&p=1743245261_1645685603.14085 HTTP/1.1\nHost: alive.github.com\nAccept-Encoding: deflate\nAccept-Language: zh-CN,zh;q=0.9\nCache-Control: no-cache\nConnection: close\nContent-Length: 0Content-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\nContent-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\nContent-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\n\nCookie: _ga=GA1.2.33717236ogged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\nContent-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\nContent-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\nContent-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\nContent-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\n\n`\npacket2 := `GET /_sockets/u/13946521/ws?session=eyJ2IjoiVjMiLCJ1IjoxMzk0NjUyMSwicyI6Njk3MjI4MDcxLCJjIjoxMjQ2NzQ1MzA0LCJ0IjoxNjQ2Mzg3NTU0fQ%3D%3D--6f75e12befb81db097c8c8082e77eaad6b68bc422115c03e3a02a6a467a305f3&shared=true&p=1743245261_1645685603.14085 HTTP/1.1\nHost: alive.github.com\nAccept-Encoding: deflate\nAccept-Language: zh-CN,zh;q=0.9\nCache-Control: no-cache\nConnection: close\nContent-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\n\nContent-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\nContent-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\nContent-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\nContent-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\nContent-Length: 0\nCookie: _ga=GA1.2.33717236.1582554889; logged_in=yes; dotcom_user=VillanCh; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; _octo=GH1.1.973492617.1646016558\nOrigin: https://github.com\nPragma: no-cache\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nSec-Websocket-Key: mn3CV26zb24N5uhErmDaKw==\nSec-Websocket-Version: 13\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\n\n`\npacket1, packet2 = []byte(packet1), []byte(packet2)\nhash1 = str.CalcSSDeep(packet1)\nhash2 = str.CalcSSDeep(packet2)\nstability = str.CalcSSDeepStability(packet1, packet2)\nprintf("hash1: %v\\n", hash1)\nprintf("hash2: %v\\n", hash2)\nprintf("stability: %v\\n", stability)\n')))}m.isMDXComponent=!0}}]);
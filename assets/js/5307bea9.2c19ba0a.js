(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3177],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return k},kt:function(){return N}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),o=d(a),N=r,f=o["".concat(p,".").concat(N)]||o[N]||c[N]||l;return a?n.createElement(f,m(m({ref:e},k),{},{components:a})):n.createElement(f,m({ref:e},k))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,m=new Array(l);m[0]=o;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,m[1]=i;for(var d=2;d<l;d++)m[d]=a[d];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},4250:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=a(4034),r=a(9973),l=(a(7294),a(3905)),m={},i="exec",p={unversionedId:"api/exec",id:"api/exec",isDocsHomePage:!1,title:"exec",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/exec.md",sourceDirName:"api",slug:"/api/exec",permalink:"/docs/api/exec",editUrl:"https://github.com/yaklang/docs/api/exec.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dyn",permalink:"/docs/api/dyn"},next:{title:"file",permalink:"/docs/api/file"}},d=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"exec.CheckCrash",id:"execcheckcrash",children:[]},{value:"exec.Command",id:"execcommand",children:[]},{value:"exec.CommandContext",id:"execcommandcontext",children:[]},{value:"exec.System",id:"execsystem",children:[]},{value:"exec.SystemBatch",id:"execsystembatch",children:[]},{value:"exec.SystemContext",id:"execsystemcontext",children:[]},{value:"exec.WatchOutput",id:"execwatchoutput",children:[]},{value:"exec.WatchStderr",id:"execwatchstderr",children:[]},{value:"exec.WatchStdout",id:"execwatchstdout",children:[]},{value:"exec.callback",id:"execcallback",children:[]},{value:"exec.concurrent",id:"execconcurrent",children:[]},{value:"exec.timeout",id:"exectimeout",children:[]}]}],k={toc:d};function c(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"exec"},"exec"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#execcheckcrash"},"exec.CheckCrash")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u68c0\u67e5\u8fd9\u4e2a\u8fdb\u7a0b\u662f\u5426\u5d29\u6e83")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#execcommand"},"exec.Command")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6700\u57fa\u7840\u7684\uff0c\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"td"},"*exec.Cmd")," \u5bf9\u8c61\uff0c\u53ef\u4ee5\u6267\u884c\uff0c\u8fd9\u4e2a\u529f\u80fd\u5c31\u662f Golang \u539f\u751f\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"exec.Command"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#execcommandcontext"},"exec.CommandContext")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u540c ",(0,l.kt)("inlineCode",{parentName:"td"},"exec.Command")," \u51fd\u6570\uff0c\u4f46\u662f\u589e\u52a0\u4e86 context \u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u4f7f\u7528 context.Context \u6765\u89e3\u51b3\u751f\u547d\u5468\u671f\u7ba1\u7406\u7684\u95ee\u9898")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#execsystem"},"exec.System")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76f4\u63a5\u6267\u884c\u4e00\u6761\u7cfb\u7edf\u547d\u4ee4\uff0c\u628a\u7ed3\u679c\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\u6d41\u4e00\u8d77\u8f93\u51fa\u51fa\u6765\uff0cbytes \u6570\u636e\u6d41\u4f5c\u4e3a\u7ed3\u679c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#execsystembatch"},"exec.SystemBatch")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6279\u91cf\u6267\u884c\u7cfb\u7edf\u547d\u4ee4\uff0ccmd \u4f1a\u7ecf\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"td"},"fuzz.Strings")," \u8fdb\u884c\u53d8\u5f02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#execsystemcontext"},"exec.SystemContext")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e26 context \u63a7\u5236\u751f\u547d\u5468\u671f\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"exec.System"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#execwatchoutput"},"exec.WatchOutput")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76d1\u63a7\u4e00\u4e2a\u547d\u4ee4\u6267\u884c\u7684\u4e2d\u95f4\u7ed3\u679c\uff0c\u4e00\u822c\u7528\u4e8e\u68c0\u6d4b\u8fd9\u4e2a\u547d\u4ee4\u662f\u5426\u5f97\u5230\u4e86\u60f3\u8981\u7684\u7ed3\u679c\uff0c\u6216\u8005\u83b7\u53d6\u4e00\u4e2a\u547d\u4ee4\u7684\u4e2d\u95f4\u7ed3\u679c\u3002\u8be5\u51fd\u6570\u76d1\u63a7\u547d\u4ee4\u6267\u884c\u7684\u6807\u51c6\u8f93\u51fa\u6d41","+","\u6807\u51c6\u9519\u8bef\u6d41\u7ed3\u679c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#execwatchstderr"},"exec.WatchStderr")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f7f\u7528\u65b9\u6cd5\u540c ",(0,l.kt)("inlineCode",{parentName:"td"},"exec.WatchOutput")," \u53ea\u662f\u76d1\u63a7\u7684\u8f93\u51fa\u662f\u6807\u51c6\u9519\u8bef\u6d41")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#execwatchstdout"},"exec.WatchStdout")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#execcallback"},"exec.callback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e SystemBatch \u6279\u91cf\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\uff0c\u547d\u4ee4\u6267\u884c\u7ed3\u675f\u540e\u4f1a\u6267\u884c\u7684\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#execconcurrent"},"exec.concurrent")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e SystemBatch \u6279\u91cf\u6267\u884c\u7684\u5e76\u53d1\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#exectimeout"},"exec.timeout")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e SystemBatch \u6279\u91cf\u6267\u884c\u7684 timeout")))),(0,l.kt)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,l.kt)("h3",{id:"execcheckcrash"},"exec.CheckCrash"),(0,l.kt)("p",null,"\u68c0\u67e5\u8fd9\u4e2a\u8fdb\u7a0b\u662f\u5426\u5d29\u6e83"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func exec.CheckCrash(v1: *exec.Cmd) return (r0: bool, r1: error)")),(0,l.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"*exec.Cmd")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"execcommand"},"exec.Command"),(0,l.kt)("p",null,"\u6700\u57fa\u7840\u7684\uff0c\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"*exec.Cmd")," \u5bf9\u8c61\uff0c\u53ef\u4ee5\u6267\u884c\uff0c\u8fd9\u4e2a\u529f\u80fd\u5c31\u662f Golang \u539f\u751f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"exec.Command")),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("p",null,"\u8be5\u547d\u4ee4\u5c31\u662f\u6700\u57fa\u7840\u7684\u547d\u4ee4\u6267\u884c\uff0c\u4f46\u662f\u662f Golang \u98ce\u683c\u7684\uff0c\u4f7f\u7528\u6848\u4f8b\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"cmd, err := exec.Command(&#34;ls -lh&#34; )\ndie(err)\n\ncmd.Stdout = os.Stdout\ndie(cmd.Run())\n")),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-1"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func exec.Command(cmd: string) return (cmdInstance: *exec.Cmd, r1: error)")),(0,l.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cmd"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u60f3\u8981\u6267\u884c\u7684\u547d\u4ee4\uff0c\u5b57\u7b26\u4e32")))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cmdInstance"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"*exec.Cmd")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u547d\u4ee4\u884c\u6267\u884c\u7a0b\u5e8f\uff0c\u4e0d\u662f\u7acb\u5373\u6267\u884c\uff0c\u9700\u8981\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"td"},"cmdInstance.Run()")," \u6765\u6267\u884c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"execcommandcontext"},"exec.CommandContext"),(0,l.kt)("p",null,"\u540c ",(0,l.kt)("inlineCode",{parentName:"p"},"exec.Command")," \u51fd\u6570\uff0c\u4f46\u662f\u589e\u52a0\u4e86 context \u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u4f7f\u7528 context.Context \u6765\u89e3\u51b3\u751f\u547d\u5468\u671f\u7ba1\u7406\u7684\u95ee\u9898"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-2"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func exec.CommandContext(ctx: context.Context, cmd: string) return (cmdInstance: *exec.Cmd, r1: error)")),(0,l.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ctx"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"context.Context")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u63a7\u5236\u547d\u4ee4\u6267\u884c\u751f\u547d\u5468\u671f\u7684\u4e0a\u4e0b\u6587")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cmd"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cmdInstance"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"*exec.Cmd")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"execsystem"},"exec.System"),(0,l.kt)("p",null,"\u76f4\u63a5\u6267\u884c\u4e00\u6761\u7cfb\u7edf\u547d\u4ee4\uff0c\u628a\u7ed3\u679c\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\u6d41\u4e00\u8d77\u8f93\u51fa\u51fa\u6765\uff0cbytes \u6570\u636e\u6d41\u4f5c\u4e3a\u7ed3\u679c"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-3"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("p",null,"\u4f7f\u7528\u6848\u4f8b\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"res, err := exec.System(&#34;ls -lh&#34; )\ndie(err)\n\nprintln(string(res))\n")),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-3"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func exec.System(cmd: string) return (results: bytes, r1: error)")),(0,l.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cmd"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u60f3\u8981\u6267\u884c\u7684\u547d\u4ee4")))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"results"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6267\u884c\u7684\u7ed3\u679c\u7684\u547d\u4ee4\u884c\u8f93\u51fa")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"execsystembatch"},"exec.SystemBatch"),(0,l.kt)("p",null,"\u6279\u91cf\u6267\u884c\u7cfb\u7edf\u547d\u4ee4\uff0ccmd \u4f1a\u7ecf\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"fuzz.Strings")," \u8fdb\u884c\u53d8\u5f02"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-4"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("p",null,"\u76f4\u63a5\u6267\u884c\u4e00\u6761\u7cfb\u7edf\u547d\u4ee4\uff0c\u8be5\u547d\u4ee4\u652f\u6301 fuzz \u5b57\u7b26\u4e32\uff0c\u5177\u4f53\u6848\u4f8b\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"exec.SystemBatch(&#34;echo {{net:(192.168.1.1/24,example.com)}}&#34; , exec.callback(func(cmd, results){\n    println(&#34;exec: &#34;, &#34;results: &#34;, codec.EncodeASCII(string(results)))\n}))\n")),(0,l.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"exec:  results:  &#34;192.168.1.15\\n&#34;\nexec:  results:  &#34;192.168.1.16\\n&#34;\nexec:  results:  &#34;192.168.1.0\\n&#34;\nexec:  results:  &#34;192.168.1.7\\n&#34;\nexec:  results:  &#34;192.168.1.13\\n&#34;\n...\n...\n...\nexec:  results:  &#34;192.168.1.251\\n&#34;\nexec:  results:  &#34;192.168.1.255\\n&#34;\nexec:  results:  &#34;example.com\\n&#34;\n")),(0,l.kt)("p",null,"\u4e0d\u719f\u6089 ",(0,l.kt)("inlineCode",{parentName:"p"},"{{net:(xxx)}}")," \u7684\u670b\u53cb\u53ef\u4ee5\u8be6\u7ec6\u5b66\u4e60\u4e00\u4e0b fuzz \u8fd9\u4e2a\u5305\u3002"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-4"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func exec.SystemBatch(cmd: string, params ...yaklib.poolOpt)")),(0,l.kt)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cmd"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"params"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"...yaklib.poolOpt")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5bf9\u6279\u91cf\u6267\u884c\u547d\u4ee4\u7684\u540e\u7eed\u64cd\u4f5c\uff0c\u6216\u8005\u6267\u884c\u6c60\u7684\u914d\u7f6e\uff0c\u5e38\u89c1\u53c2\u6570\u6709 ",(0,l.kt)("inlineCode",{parentName:"td"},"callback / concurrent / timeout"))))),(0,l.kt)("h3",{id:"execsystemcontext"},"exec.SystemContext"),(0,l.kt)("p",null,"\u5e26 context \u63a7\u5236\u751f\u547d\u5468\u671f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"exec.System")),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-5"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-5"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func exec.SystemContext(ctx: context.Context, cmd: string) return (results: bytes, err: error)")),(0,l.kt)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ctx"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"context.Context")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cmd"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"results"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"err"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"execwatchoutput"},"exec.WatchOutput"),(0,l.kt)("p",null,"\u76d1\u63a7\u4e00\u4e2a\u547d\u4ee4\u6267\u884c\u7684\u4e2d\u95f4\u7ed3\u679c\uff0c\u4e00\u822c\u7528\u4e8e\u68c0\u6d4b\u8fd9\u4e2a\u547d\u4ee4\u662f\u5426\u5f97\u5230\u4e86\u60f3\u8981\u7684\u7ed3\u679c\uff0c\u6216\u8005\u83b7\u53d6\u4e00\u4e2a\u547d\u4ee4\u7684\u4e2d\u95f4\u7ed3\u679c\u3002\u8be5\u51fd\u6570\u76d1\u63a7\u547d\u4ee4\u6267\u884c\u7684\u6807\u51c6\u8f93\u51fa\u6d41","+","\u6807\u51c6\u9519\u8bef\u6d41\u7ed3\u679c"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-6"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("p",null,"\u8be5\u547d\u4ee4\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u628a\u7ed3\u679c\u6bcf\u79d2\u8f93\u51fa\u4e00\u6b21\uff0c\u901a\u8fc7\u56de\u8c03\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"func callback(results: bytes) bool")," \u6765\u8f93\u51fa\u7ed3\u679c\uff0c"),(0,l.kt)("p",null,"\u6848\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"exec.WatchOutput(&#34;ping 8.8.8.8&#34; , 10, def callback(result) {\n    println(now())\n    println(string(result))\n    return true\n})\n")),(0,l.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"2021-06-25 14:28:47.516709 +0800 CST m=+1.035775209\nPING 8.8.8.8 (8.8.8.8): 56 data bytes\n64 bytes from 8.8.8.8: icmp_seq=0 ttl=113 time=75.586 ms\n\n2021-06-25 14:28:48.515702 +0800 CST m=+2.034775042\nPING 8.8.8.8 (8.8.8.8): 56 data bytes\n64 bytes from 8.8.8.8: icmp_seq=0 ttl=113 time=75.586 ms\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=113 time=124.303 ms\n\n2021-06-25 14:28:49.516388 +0800 CST m=+3.035467376\nPING 8.8.8.8 (8.8.8.8): 56 data bytes\n64 bytes from 8.8.8.8: icmp_seq=0 ttl=113 time=75.586 ms\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=113 time=124.303 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=113 time=90.452 ms\n\n2021-06-25 14:28:50.514747 +0800 CST m=+4.033832667\nPING 8.8.8.8 (8.8.8.8): 56 data bytes\n64 bytes from 8.8.8.8: icmp_seq=0 ttl=113 time=75.586 ms\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=113 time=124.303 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=113 time=90.452 ms\n64 bytes from 8.8.8.8: icmp_seq=3 ttl=113 time=85.585 ms\n")),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-6"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func exec.WatchOutput(cmd: string, timeout: float64, callback: func (v1: bytes) return(bool) ) return (Err: error)")),(0,l.kt)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cmd"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u60f3\u8981\u6267\u884c\u7684\u547d\u4ee4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"timeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"float64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e2a\u547d\u4ee4\u6700\u591a\u6267\u884c\u591a\u5c11\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"callback"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func (v1: bytes) return(bool) ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u4e00\u4e2a\u95f4\u9694\u7684\u65f6\u5019\uff0c\u547d\u4ee4\u884c\u662f\u6280\u672f\u51fa\u4e86\u4ec0\u4e48\uff1f",(0,l.kt)("inlineCode",{parentName:"td"},"func(results bytes) bool"),",\u53c2\u6570\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},"[]byte"),", \u8fd4\u56de\u503c\u4e3a true \u8bf4\u660e\u547d\u4ee4\u7ee7\u7eed\uff0c\u8fd4\u56de\u503c\u4e3a false\uff0c\u8bf4\u660e\u547d\u4ee4\u5e94\u8be5\u7acb\u5373\u505c\u6b62")))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Err"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"execwatchstderr"},"exec.WatchStderr"),(0,l.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\u540c ",(0,l.kt)("inlineCode",{parentName:"p"},"exec.WatchOutput")," \u53ea\u662f\u76d1\u63a7\u7684\u8f93\u51fa\u662f\u6807\u51c6\u9519\u8bef\u6d41"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-7"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\u540c ",(0,l.kt)("inlineCode",{parentName:"p"},"exec.WatchStdout")," \u4f46\u662f\u53ea\u662f\u76d1\u63a7\u7684\u8f93\u51fa\u662f\u6807\u51c6\u9519\u8bef\u6d41"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-7"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func exec.WatchStderr(cmd: string, timeout: float64, callback: func (v1: bytes) return(bool) ) return (err: error)")),(0,l.kt)("h4",{id:"\u53c2\u6570-7"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cmd"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"timeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"float64")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"callback"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func (v1: bytes) return(bool) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-6"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"err"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"execwatchstdout"},"exec.WatchStdout"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-8"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-8"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func exec.WatchStdout(v1: string, v2: float64, v3: func (v1: bytes) return(bool) ) return (r0: error)")),(0,l.kt)("h4",{id:"\u53c2\u6570-8"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v2"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"float64")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v3"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func (v1: bytes) return(bool) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-7"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"execcallback"},"exec.callback"),(0,l.kt)("p",null,"\u8bbe\u7f6e SystemBatch \u6279\u91cf\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\uff0c\u547d\u4ee4\u6267\u884c\u7ed3\u675f\u540e\u4f1a\u6267\u884c\u7684\u51fd\u6570"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-9"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-9"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func exec.callback(callbackFunc: func (v1: string, v2: bytes) ) return (r0: func poolOpt(v1: *yaklib._execPoolConfig) )")),(0,l.kt)("h4",{id:"\u53c2\u6570-9"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"callbackFunc"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func (v1: string, v2: bytes) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-8"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func poolOpt(v1: *yaklib._execPoolConfig) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"execconcurrent"},"exec.concurrent"),(0,l.kt)("p",null,"\u8bbe\u7f6e SystemBatch \u6279\u91cf\u6267\u884c\u7684\u5e76\u53d1\u91cf"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-10"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-10"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func exec.concurrent(poolSize: int) return (r0: func poolOpt(v1: *yaklib._execPoolConfig) )")),(0,l.kt)("h4",{id:"\u53c2\u6570-10"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"poolSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-9"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func poolOpt(v1: *yaklib._execPoolConfig) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"exectimeout"},"exec.timeout"),(0,l.kt)("p",null,"\u8bbe\u7f6e SystemBatch \u6279\u91cf\u6267\u884c\u7684 timeout"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-11"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-11"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func exec.timeout(timeout: float64) return (r0: func poolOpt(v1: *yaklib._execPoolConfig) )")),(0,l.kt)("h4",{id:"\u53c2\u6570-11"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"timeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"float64")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-10"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func poolOpt(v1: *yaklib._execPoolConfig) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}c.isMDXComponent=!0}}]);
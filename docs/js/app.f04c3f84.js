(function(t){function e(e){for(var a,c,l=e[0],s=e[1],i=e[2],f=0,d=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/docs/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01f2":function(t,e,n){"use strict";n("0443")},"034f":function(t,e,n){"use strict";n("3ebb")},"0443":function(t,e,n){var a=n("f201");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("4eb67208",a,!0,{sourceMap:!1,shadowMode:!1})},"06e5":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".attribute-value[data-v-30581e56]{color:#cc864c;padding:0;margin:0}",""]),t.exports=e},"0b9e":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".no-margin-padding[data-v-6cef0f7c]{margin:0;padding:0}.margin-left-sm[data-v-6cef0f7c]{margin-left:1em}.assignment[data-v-6cef0f7c]{color:#9fdafe}.quote[data-v-6cef0f7c]{color:#cc864c}",""]),t.exports=e},"0e67":function(t,e,n){var a=n("5d79");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("4500fe4f",a,!0,{sourceMap:!1,shadowMode:!1})},1746:function(t,e,n){"use strict";n("7249")},3199:function(t,e,n){var a=n("5318");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("104dd08a",a,!0,{sourceMap:!1,shadowMode:!1})},"34ca":function(t,e,n){var a=n("ed24");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("8744e308",a,!0,{sourceMap:!1,shadowMode:!1})},"3ebb":function(t,e,n){var a=n("e31a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("517436b3",a,!0,{sourceMap:!1,shadowMode:!1})},"3f1e":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content[data-v-7683702f]{color:#90ee90}.inline[data-v-7683702f]{display:inline}.no-margin-padding[data-v-7683702f]{margin:0;padding:0}",""]),t.exports=e},5318:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content[data-v-702beba6]{color:#aaa}",""]),t.exports=e},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Test")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-left":"20px","padding-top":"20px"}},[n("XmlViewer",{attrs:{xml:t.xml}})],1)},l=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("XmlElement",{attrs:{node:t.rootNode}})],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("span",{staticClass:"bracket"},[t._v("<")]),n("XmlElementName",{staticClass:"clickable",attrs:{name:t.name},on:{click:t.toggleCollapsed}}),t.collapsed?t._e():n("XmlAttributeLine",{attrs:{attributes:t.attributes}}),t.selfClosing&&!t.collapsed?n("span",{staticClass:"bracket"},[t._v(" /")]):t._e(),t.collapsed?n("span",{staticClass:"dots"},[t._v(" ...")]):t._e(),n("span",{staticClass:"bracket"},[t._v(">")])],1),t.collapsed?t._e():n("div",{staticClass:"child-elements"},[n("div",[t._l(t.childElements,(function(t,e){return n("XmlElement",{key:"e"+e,attrs:{node:t}})})),t._l(t.childContents,(function(t,e){return n("XmlElementContent",{key:"t"+e,attrs:{node:t}})})),t._l(t.cdataSections,(function(t,e){return n("XmlCDataSection",{key:"c"+e,attrs:{cdataSection:t}})})),t._l(t.remarks,(function(t,e){return n("XmlRemark",{key:"r"+e,attrs:{remark:t}})}))],2)]),t.selfClosing||t.collapsed?t._e():n("div",[n("span",{staticClass:"bracket"},[t._v("<")]),n("XmlElementName",{attrs:{name:t.name,closing:!0}}),n("span",{staticClass:"bracket"},[t._v(">")])],1)])},f=[],d=(n("4de4"),n("a630"),n("3ca3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.closing?n("span",{staticClass:"bracket"},[t._v("/")]):t._e(),n("span",{staticClass:"element-name",on:{click:t.onClick}},[t._v(t._s(t.name))])])}),p=[],m=n("a6f4"),v=Object(m["c"])({props:{name:String,closing:Boolean},setup:function(t,e){var n=e.emit,a=function(){n("click")};return{onClick:a}}}),b=v,g=(n("ffa9"),n("2877")),h=Object(g["a"])(b,d,p,!1,null,"6c6f209f",null),_=h.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content"},[t._v(" "+t._s(t.content)+" ")])])},y=[],O=Object(m["c"])({props:{node:Text},setup:function(t){var e=Object(m["a"])((function(){return t.node.textContent}));return{content:e}}}),j=O,C=(n("b798"),Object(g["a"])(j,x,y,!1,null,"702beba6",null)),k=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",t._l(t.attributes,(function(t,e){return n("XmlAttribute",{key:e,attrs:{attribute:t}})})),1)},E=[],X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("XmlAttributeName",{staticClass:"margin-left-sm",attrs:{name:t.name}}),n("span",{staticClass:"no-margin-padding assignment"},[t._v("=")]),n("span",{staticClass:"no-margin-padding quote"},[t._v('"')]),n("XmlAttributeValue",{staticClass:"no-margin-padding",attrs:{value:t.value}}),n("span",{staticClass:"no-margin-padding quote"},[t._v('"')])],1)},M=[],A=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{staticClass:"attribute-name"},[t._v(t._s(t.name))])])}),S=[],T=Object(m["c"])({props:{name:String}}),$=T,N=(n("01f2"),Object(g["a"])($,A,S,!1,null,"917c802e",null)),P=N.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{staticClass:"attribute-value"},[t._v(t._s(t.value))])])},V=[],q=Object(m["c"])({props:{value:String}}),z=q,J=(n("1746"),Object(g["a"])(z,D,V,!1,null,"30581e56",null)),L=J.exports,R=Object(m["c"])({name:"XmlElement",components:{XmlAttributeName:P,XmlAttributeValue:L},props:{attribute:Attr},setup:function(t){var e=Object(m["a"])((function(){return t.attribute.name})),n=Object(m["a"])((function(){return t.attribute.value}));return{name:e,value:n}}}),B=R,F=(n("6be0"),Object(g["a"])(B,X,M,!1,null,"6cef0f7c",null)),G=F.exports,H=Object(m["c"])({name:"XmlElement",components:{XmlAttribute:G},props:{attributes:Array}}),I=H,K=Object(g["a"])(I,w,E,!1,null,null,null),Q=K.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content"},[n("span",[t._v("<![CDATA[")]),n("pre",{staticClass:"inline no-margin-padding"},[t._v(t._s(t.content))]),n("span",[t._v("]]>")])])])},W=[],Y=Object(m["c"])({props:{cdataSection:Text},setup:function(t){var e=Object(m["a"])((function(){return t.cdataSection.textContent}));return{content:e}}}),Z=Y,tt=(n("c8e5"),Object(g["a"])(Z,U,W,!1,null,"4ac2154a",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content"},[t._v(" \x3c!-- "),n("pre",{staticClass:"inline no-margin-padding"},[t._v(t._s(t.content))]),t._v(" --\x3e ")])])},at=[],rt=Object(m["c"])({props:{remark:Comment},setup:function(t){var e=Object(m["a"])((function(){return t.remark.textContent}));return{content:e}}}),ot=rt,ct=(n("986c"),Object(g["a"])(ot,nt,at,!1,null,"7683702f",null)),lt=ct.exports,st=Object(m["c"])({name:"XmlElement",components:{XmlElementName:_,XmlElementContent:k,XmlAttributeLine:Q,XmlCDataSection:et,XmlRemark:lt},props:{node:Element},setup:function(t){var e=Object(m["d"])(!1),n=Object(m["a"])((function(){return t.node.nodeName})),a=Object(m["a"])((function(){return Array.from(t.node.childNodes)})),r=Object(m["a"])((function(){return a.value&&a.value.filter((function(t){return 1===t.nodeType}))})),o=Object(m["a"])((function(){return a.value&&a.value.filter((function(t){return 3===t.nodeType}))})),c=Object(m["a"])((function(){return a.value&&a.value.filter((function(t){return 4===t.nodeType}))})),l=Object(m["a"])((function(){return a.value&&a.value.filter((function(t){return 8===t.nodeType}))})),s=Object(m["a"])((function(){return t.node.attributes&&Array.from(t.node.attributes)||[]})),i=!r.value.length&&!o.value.length&&!c.value.length&&!l.value.length,u=function(){e.value=!e.value};return{name:n,childElements:r,childContents:o,attributes:s,cdataSections:c,remarks:l,selfClosing:i,collapsed:e,toggleCollapsed:u}}}),it=st,ut=(n("9e4a"),Object(g["a"])(it,u,f,!1,null,"ab36510e",null)),ft=ut.exports,dt=Object(m["c"])({components:{XmlElement:ft},props:{xml:String},setup:function(t){var e=new DOMParser,n=Object(m["d"])(),a=function(t){var a=e.parseFromString(t,"text/xml"),r=a.childNodes[0];n.value=r};return Object(m["e"])((function(){return t.xml}),(function(t){a(t)})),a(t.xml),{rootNode:n}}}),pt=dt,mt=Object(g["a"])(pt,s,i,!1,null,null,null),vt=mt.exports,bt='<?xml version="1.0" encoding="utf-8" ?>\r\n<document>\r\n    <node numeric="123" boolean="true" other-boolean="false" text="some text" />\r\n    <node-with-content>\r\n        some content\r\n        \x3c!-- some remark--\x3e\r\n    </node-with-content>\r\n    <node-with-cdata>\r\n    <![CDATA[\r\n        cdata content here\r\n    ]]>\r\n    </node-with-cdata>\r\n</document>',gt={components:{XmlViewer:vt},setup:function(){var t=Object(m["d"])(bt);return{xml:t}}},ht=gt,_t=Object(g["a"])(ht,c,l,!1,null,null,null),xt=_t.exports,yt={name:"App",components:{Test:xt}},Ot=yt,jt=(n("034f"),Object(g["a"])(Ot,r,o,!1,null,null,null)),Ct=jt.exports;a["default"].config.productionTip=!1,a["default"].use(m["b"]),new a["default"]({render:function(t){return t(Ct)}}).$mount("#app")},"5d79":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".bracket[data-v-6c6f209f]{color:grey}.element-name[data-v-6c6f209f]{color:#598ba1}",""]),t.exports=e},"6be0":function(t,e,n){"use strict";n("9910")},7249:function(t,e,n){var a=n("06e5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("027c26e4",a,!0,{sourceMap:!1,shadowMode:!1})},9650:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".bracket[data-v-ab36510e]{color:grey}.dots[data-v-ab36510e]{color:#add8e6}.child-elements[data-v-ab36510e]{background-image:linear-gradient(180deg,grey 40%,hsla(0,0%,100%,0) 0);background-position:0;background-size:1px 3px;background-repeat:repeat-y}.child-elements>div[data-v-ab36510e]{margin-left:20px}.clickable[data-v-ab36510e]{cursor:pointer;text-decoration:underline;-webkit-text-decoration-style:dotted;text-decoration-style:dotted}",""]),t.exports=e},"986c":function(t,e,n){"use strict";n("fcc9")},9910:function(t,e,n){var a=n("0b9e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("51862e51",a,!0,{sourceMap:!1,shadowMode:!1})},"9e4a":function(t,e,n){"use strict";n("a950")},a950:function(t,e,n){var a=n("9650");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("7afccb2c",a,!0,{sourceMap:!1,shadowMode:!1})},b798:function(t,e,n){"use strict";n("3199")},c8e5:function(t,e,n){"use strict";n("34ca")},e31a:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"#app,body{padding:0;margin:0}#app{font-family:Consolas,Arial,sans-serif;font-size:14px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;background-color:#1e1e1e;width:100%;height:100%;position:absolute}",""]),t.exports=e},ed24:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content[data-v-4ac2154a]{color:#cc864c}.inline[data-v-4ac2154a]{display:inline}.no-margin-padding[data-v-4ac2154a]{margin:0;padding:0}",""]),t.exports=e},f201:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".attribute-name[data-v-917c802e]{color:#9fdafe}",""]),t.exports=e},fcc9:function(t,e,n){var a=n("3f1e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("5a595db6",a,!0,{sourceMap:!1,shadowMode:!1})},ffa9:function(t,e,n){"use strict";n("0e67")}});
//# sourceMappingURL=app.f04c3f84.js.map
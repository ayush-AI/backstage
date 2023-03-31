/*! For license information please see bff3990b.0239a500.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[620559],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},644922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(827378);var r=n(603905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"well-known-relations",title:"Well-known Relations between Catalog Entities",sidebar_label:"Well-known Relations",description:"Documentation that lists a number of well known Relations, that have defined semantics. They can be attached to catalog entities and consumed by plugins as needed."},l=void 0,c={unversionedId:"features/software-catalog/well-known-relations",id:"features/software-catalog/well-known-relations",title:"Well-known Relations between Catalog Entities",description:"Documentation that lists a number of well known Relations, that have defined semantics. They can be attached to catalog entities and consumed by plugins as needed.",source:"@site/../docs/features/software-catalog/well-known-relations.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/well-known-relations",permalink:"/docs/features/software-catalog/well-known-relations",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/well-known-relations.md",tags:[],version:"current",frontMatter:{id:"well-known-relations",title:"Well-known Relations between Catalog Entities",sidebar_label:"Well-known Relations",description:"Documentation that lists a number of well known Relations, that have defined semantics. They can be attached to catalog entities and consumed by plugins as needed."},sidebar:"docs",previous:{title:"Well-known Annotations",permalink:"/docs/features/software-catalog/well-known-annotations"},next:{title:"Well-known Statuses",permalink:"/docs/features/software-catalog/well-known-statuses"}},p={},d=[{value:"Relations",id:"relations",level:2},{value:"<code>ownedBy</code> and <code>ownerOf</code>",id:"ownedby-and-ownerof",level:3},{value:"<code>providesApi</code> and <code>apiProvidedBy</code>",id:"providesapi-and-apiprovidedby",level:3},{value:"<code>consumesApi</code> and <code>apiConsumedBy</code>",id:"consumesapi-and-apiconsumedby",level:3},{value:"<code>dependsOn</code> and <code>dependencyOf</code>",id:"dependson-and-dependencyof",level:3},{value:"<code>parentOf</code> and <code>childOf</code>",id:"parentof-and-childof",level:3},{value:"<code>memberOf</code> and <code>hasMember</code>",id:"memberof-and-hasmember",level:3},{value:"<code>partOf</code> and <code>hasPart</code>",id:"partof-and-haspart",level:3}],u={toc:d};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section lists a number of well known\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#common-to-all-kinds-relations"},"entity relation types"),",\nthat have defined semantics. They can be attached to catalog entities and\nconsumed by plugins as needed."),(0,r.kt)("p",null,"If you are looking to extend the set of relations, see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/extending-the-model"},"Extending the model"),"."),(0,r.kt)("h2",{id:"relations"},"Relations"),(0,r.kt)("p",null,"This is a (non-exhaustive) list of relations that are known to be in active use."),(0,r.kt)("p",null,"Each relation has a ",(0,r.kt)("em",{parentName:"p"},"source")," (implicitly: the entity that holds the relation), a\n",(0,r.kt)("em",{parentName:"p"},"target")," (the entity to which the source has a relation), and a ",(0,r.kt)("em",{parentName:"p"},"type")," that\ntells what relation the source has with the target. The relation is directional;\nthere are commonly pairs of relation types and the entity at the other end will\nhave the opposite relation in the opposite direction (e.g. when querying for\n",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", you will see ",(0,r.kt)("inlineCode",{parentName:"p"},"A.ownedBy.B"),", and when querying ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", you will see\n",(0,r.kt)("inlineCode",{parentName:"p"},"B.ownerOf.A"),")."),(0,r.kt)("h3",{id:"ownedby-and-ownerof"},(0,r.kt)("inlineCode",{parentName:"h3"},"ownedBy")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"ownerOf")),(0,r.kt)("p",null,"An ownership relation where the owner is usually an organizational entity\n(",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-user"},"User")," or\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-group"},"Group"),"), and the other entity can be anything."),(0,r.kt)("p",null,"In Backstage, the owner of an entity is the singular entity (commonly a team)\nthat bears ultimate responsibility for the entity, and has the authority and\ncapability to develop and maintain it. They will be the point of contact if\nsomething goes wrong, or if features are to be requested. The main purpose of\nthis relation is for display purposes in Backstage, so that people looking at\ncatalog entities can get an understanding of to whom this entity belongs. It is\nnot to be used by automated processes to for example assign authorization in\nruntime systems. There may be others that also develop or otherwise touch the\nentity, but there will always be one ultimate owner."),(0,r.kt)("p",null,"This relation is commonly generated based on ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.owner")," of the owned entity,\nwhere present."),(0,r.kt)("h3",{id:"providesapi-and-apiprovidedby"},(0,r.kt)("inlineCode",{parentName:"h3"},"providesApi")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"apiProvidedBy")),(0,r.kt)("p",null,"A relation with an ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-api"},"API")," entity, typically from a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-component"},"Component"),"."),(0,r.kt)("p",null,"These relations express that a component exposes an API - meaning that it hosts\ncallable endpoints from which you can consume that API."),(0,r.kt)("p",null,"This relation is commonly generated based on ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.providesApis")," of the\ncomponent or system in question."),(0,r.kt)("h3",{id:"consumesapi-and-apiconsumedby"},(0,r.kt)("inlineCode",{parentName:"h3"},"consumesApi")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"apiConsumedBy")),(0,r.kt)("p",null,"A relation with an ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-api"},"API")," entity, typically from a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-component"},"Component"),"."),(0,r.kt)("p",null,"These relations express that a component consumes an API - meaning that it\ndepends on endpoints of the API."),(0,r.kt)("p",null,"This relation is commonly generated based on ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.consumesApis")," of the\ncomponent or system in question."),(0,r.kt)("h3",{id:"dependson-and-dependencyof"},(0,r.kt)("inlineCode",{parentName:"h3"},"dependsOn")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"dependencyOf")),(0,r.kt)("p",null,"A relation denoting a dependency on another entity."),(0,r.kt)("p",null,"This relation is a general expression of being in need of that other entity for\nan entity to function. It can for example be used to express that a website\ncomponent needs a library component as part of its build, or that a service\ncomponent uses a persistent storage resource."),(0,r.kt)("p",null,"This relation is commonly generated based on ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.dependsOn")," of the component\nor resource in question."),(0,r.kt)("h3",{id:"parentof-and-childof"},(0,r.kt)("inlineCode",{parentName:"h3"},"parentOf")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"childOf")),(0,r.kt)("p",null,"A parent/child relation to build up a tree, used for example to describe the\norganizational structure between ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-group"},"Groups"),"."),(0,r.kt)("p",null,"This relation is commonly based on ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.parent")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.children"),"."),(0,r.kt)("h3",{id:"memberof-and-hasmember"},(0,r.kt)("inlineCode",{parentName:"h3"},"memberOf")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"hasMember")),(0,r.kt)("p",null,"A membership relation, typically for ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-user"},"Users")," in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-group"},"Groups"),"."),(0,r.kt)("p",null,"This relation is commonly based on ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.memberOf"),"."),(0,r.kt)("h3",{id:"partof-and-haspart"},(0,r.kt)("inlineCode",{parentName:"h3"},"partOf")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"hasPart")),(0,r.kt)("p",null,"A relation with a ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-domain"},"Domain"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-system"},"System")," or\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-component"},"Component")," entity, typically from a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-component"},"Component"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-api"},"API"),", or\n",(0,r.kt)("a",{parentName:"p",href:"/docs/features/software-catalog/descriptor-format#kind-system"},"System"),"."),(0,r.kt)("p",null,"These relations express that a component belongs to a larger component; a\ncomponent, API or resource belongs to a system; or that a system is grouped\nunder a domain."),(0,r.kt)("p",null,"This relation is commonly based on ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.system")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.domain"),"."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,l=o(e),c=1;c<arguments.length;c++){for(var p in i=Object(arguments[c]))n.call(i,p)&&(l[p]=i[p]);if(t){s=t(i);for(var d=0;d<s.length;d++)r.call(i,s[d])&&(l[s[d]]=i[s[d]])}}return l}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,s=60110,l=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),a=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),i=d("react.provider"),s=d("react.context"),l=d("react.forward_ref"),d("react.suspense"),c=d("react.memo"),p=d("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function b(){}function k(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var w=k.prototype=new b;w.constructor=k,r(w,y.prototype),w.isPureReactComponent=!0;var g={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];a.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:g.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+P(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),A(i,t,n,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=r+P(s=e[c],c);l+=A(s,t,n,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(s=e.next()).done;)l+=A(s=s.value,t,n,p=r+P(s,c++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function T(e,t,n){if(null==e)return e;var r=[],o=0;return A(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function _(){var e=S.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
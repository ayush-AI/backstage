/*! For license information please see 4db11afa.1851a05b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[633131],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});r(827378);var n=r(603905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={id:"v1.2.0",title:"v1.2.0",description:"Backstage Release v1.2.0"},c=void 0,l={unversionedId:"releases/v1.2.0",id:"releases/v1.2.0",title:"v1.2.0",description:"Backstage Release v1.2.0",source:"@site/../docs/releases/v1.2.0.md",sourceDirName:"releases",slug:"/releases/v1.2.0",permalink:"/docs/releases/v1.2.0",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.2.0.md",tags:[],version:"current",frontMatter:{id:"v1.2.0",title:"v1.2.0",description:"Backstage Release v1.2.0"},sidebar:"releases",previous:{title:"v1.3.0",permalink:"/docs/releases/v1.3.0"},next:{title:"v1.1.0",permalink:"/docs/releases/v1.1.0"}},u={},p=[{value:"Highlights",id:"highlights",level:2},{value:"TechDocs",id:"techdocs",level:3},{value:"New plugin: ADR",id:"new-plugin-adr",level:3},{value:"New Plugin: CodeScene plugin",id:"new-plugin-codescene-plugin",level:3},{value:"New plugin: plugin-catalog-backend-module-gerrit",id:"new-plugin-plugin-catalog-backend-module-gerrit",level:3},{value:"Integrations",id:"integrations",level:3},{value:"Backend-common",id:"backend-common",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Misc",id:"misc",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}],d={toc:p};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"These are the release notes for the v1.2.0 release of ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/"},"Backstage"),"."),(0,n.kt)("p",null,"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."),(0,n.kt)("h2",{id:"highlights"},"Highlights"),(0,n.kt)("h3",{id:"techdocs"},"TechDocs"),(0,n.kt)("p",null,"The TechDocs addon framework is now generally available! See the ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/techdocs/addons"},"TechDocs Addons")," documentation for more information on how to customize your views."),(0,n.kt)("h3",{id:"new-plugin-adr"},"New plugin: ADR"),(0,n.kt)("p",null,"The new ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-adr")," lets you track your active ADRs inside Backstage! Contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kuangp"},"@kuangp")),(0,n.kt)("h3",{id:"new-plugin-codescene-plugin"},"New Plugin: CodeScene plugin"),(0,n.kt)("p",null,"The CodeScene Backstage plugin exposes a page component that will list the existing projects and their analysis data on your CodeScene instance. Contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/julioz"},"@julio")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/10777"},"#10777")),(0,n.kt)("h3",{id:"new-plugin-plugin-catalog-backend-module-gerrit"},"New plugin: plugin-catalog-backend-module-gerrit"),(0,n.kt)("p",null,"Gerrit integration is here! See docs on ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/integrations/gerrit/discovery"},"gerrit discovery")," and ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/integrations/gerrit/locations"},"gerrit locations")," for more information.\nContributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/anicke"},"@anicke")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/10669"},"#10669")),(0,n.kt)("h3",{id:"integrations"},"Integrations"),(0,n.kt)("p",null,"Bitbucket Server and Bitbucket Cloud have been split up internally as the feature sets differ slightly, new scaffolder actions and integrations config has been added to accommodate a gradual migration. Contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pjungermann"},"@pjungermann")),(0,n.kt)("h3",{id:"backend-common"},"Backend-common"),(0,n.kt)("p",null,"Server-to-server authentication tokens issued from a TokenManager (specifically, ServerTokenManager) now has an expiry time set, for one hour in the future from when issued. This improves security. The ability to pass in and validate tokens that either have a missing exp claim, or an exp claim that expired in the past, is now deprecated. Trying to do so will lead to logged warnings, and in a future release will instead lead to errors.\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/11262"},"#11262")),(0,n.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,n.kt)("p",null,"Added support for ",(0,n.kt)("inlineCode",{parentName:"p"},"oidc")," as an auth provider for kubernetes authentication and added an optional ",(0,n.kt)("inlineCode",{parentName:"p"},"oidcTokenProvider")," config value. This will allow users to authenticate to kubernetes clusters using ID tokens obtained from the configured auth provider in their Backstage instance. Contributed by @dbravovmw(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dbravovmw"},"https://github.com/dbravovmw"),"). #11328(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/11328"},"https://github.com/backstage/backstage/pull/11328"),")"),(0,n.kt)("h3",{id:"misc"},"Misc"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"TaskScheduleDefinition")," of the backend task scheduler has been updated to also accept an options object containing duration information in the form of days, hours, seconds and so on. This allows for scheduling without importing luxon. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/11245"},"#11245"),"\nAdded the ability to render a custom component when an entity is not found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/11047"},"#11047")),(0,n.kt)("h2",{id:"security-fixes"},"Security Fixes"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-scaffolder-backend-module-rails"),", please upgrade to the latest version if you are using this module."),(0,n.kt)("h2",{id:"upgrade-path"},"Upgrade path"),(0,n.kt)("p",null,"We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/getting-started/keeping-backstage-updated"},"keeping Backstage updated"),"."),(0,n.kt)("h2",{id:"links-and-references"},"Links and References"),(0,n.kt)("p",null,"Below you can find a list of links and references to help you learn about and start using this new release."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/"},"Backstage official website"),", ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/docs/"},"documentation"),", and ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/docs/getting-started/"},"getting started guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/backstage/backstage"},"GitHub repository")),(0,n.kt)("li",{parentName:"ul"},"Backstage's ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/docs/overview/versioning-policy"},"versioning and support policy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/backstage-687207715902193673"},"Community Discord")," for discussions and support"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.2.0-changelog.md"},"Changelog")),(0,n.kt)("li",{parentName:"ul"},"Backstage ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/demos"},"Demos"),", ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/blog"},"Blog"),", ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/docs/overview/roadmap"},"Roadmap")," and ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/plugins"},"Plugins"))),(0,n.kt)("p",null,"Sign up for our ",(0,n.kt)("a",{parentName:"p",href:"https://mailchi.mp/spotify/backstage-community"},"newsletter")," if you want to be informed about what is happening in the world of Backstage."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,s,c=a(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))r.call(i,u)&&(c[u]=i[u]);if(t){s=t(i);for(var p=0;p<s.length;p++)n.call(i,s[p])&&(c[s[p]]=i[s[p]])}}return c}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var i=60109,s=60110,c=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||g}function b(){}function k(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||g}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var y=k.prototype=new b;y.constructor=k,n(y,m.prototype),y.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,o={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:v.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case o:c=!0}}if(c)return i=i(c=e),e=""===n?"."+S(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+S(s=e[l],l);c+=C(s,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=C(s=s.value,t,r,u=n+S(s,l++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function x(e,t,r){if(null==e)return e;var n=[],a=0;return C(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function D(){var e=_.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
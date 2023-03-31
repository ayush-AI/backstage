/*! For license information please see 6ff56e48.8203a7c9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[984785],{603905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,h=u["".concat(l,".").concat(g)]||u[g]||p[g]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(827378);var a=n(603905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={id:"migrating",title:"Migrating your Backend to the New Backend System",sidebar_label:"Migration Guide",description:"How to migrate existing backends to the new backend system"},l=void 0,c={unversionedId:"backend-system/building-backends/migrating",id:"backend-system/building-backends/migrating",title:"Migrating your Backend to the New Backend System",description:"How to migrate existing backends to the new backend system",source:"@site/../docs/backend-system/building-backends/08-migrating.md",sourceDirName:"backend-system/building-backends",slug:"/backend-system/building-backends/migrating",permalink:"/docs/backend-system/building-backends/migrating",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/building-backends/08-migrating.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"migrating",title:"Migrating your Backend to the New Backend System",sidebar_label:"Migration Guide",description:"How to migrate existing backends to the new backend system"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/backend-system/building-backends/index"},next:{title:"Overview",permalink:"/docs/backend-system/building-plugins-and-modules/index"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Overall Structure",id:"overall-structure",level:2},{value:"Migrating the Index File",id:"migrating-the-index-file",level:2},{value:"Handling Custom Environments",id:"handling-custom-environments",level:2},{value:"Cleaning Up the Plugins Folder",id:"cleaning-up-the-plugins-folder",level:2},{value:"The App Plugin",id:"the-app-plugin",level:3},{value:"The Catalog Plugin",id:"the-catalog-plugin",level:3},{value:"The Events Plugin",id:"the-events-plugin",level:3},{value:"The Scaffolder Plugin",id:"the-scaffolder-plugin",level:3}],p={toc:u};function g(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"DISCLAIMER: The new backend system is in alpha, and still under active development. As such, it is not considered stable, and it is not recommended to migrate production backends to the new backend system until it has a stable release."))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This section describes how to migrate an existing Backstage backend service\npackage (typically in ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/backend"),") to use the new backend system."),(0,a.kt)("p",null,"One of the main benefits of the new backend system is that it abstracts away the\nway that plugins and their dependencies are wired up, leading to a significantly\nsimplified backend package that rarely if ever needs to change when plugins or\ntheir dependencies evolve. You generally don't have to convert all of your\ninternal plugins and support classes themselves to the backend system first -\nthe migration here will mostly deal with wiring and using compatibility wrappers\nwhere possible in the backend package itself. We hope that you will find that\nyou end up with a much smaller, easier to understand, and easier to maintain\npackage as a result of these steps, and then being able to ",(0,a.kt)("a",{parentName:"p",href:"/docs/backend-system/building-plugins-and-modules/migrating"},"migrate\nplugins")," as a separate\nendeavour later."),(0,a.kt)("h2",{id:"overall-structure"},"Overall Structure"),(0,a.kt)("p",null,"Your typical backend package has a few overall component parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("inlineCode",{parentName:"li"},"index.ts")," file that houses all of the creation and wiring together of all\nof the plugins and their dependencies"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"types.ts"),' file that defines the "environment", i.e. the various\ndependencies that get created by the backend and passed down into each plugin'),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins")," folder which has one file for each plugin, e.g.\n",(0,a.kt)("inlineCode",{parentName:"li"},"plugins/catalog.ts"))),(0,a.kt)("p",null,"The index file has this overall shape:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import todo from './plugins/todo'; // repeated for N plugins\n\nfunction makeCreateEnv(config: Config) {\n  return (plugin: string): PluginEnvironment => {\n    // ... build per-plugin environment\n  };\n}\n\nasync function main() {\n  // ... early init\n  const createEnv = makeCreateEnv(config);\n  const todoEnv = useHotMemoize(module, () => createEnv('todo')); // repeated for N plugins\n  const apiRouter = Router();\n  apiRouter.use('/todo', await todo(todoEnv)); // repeated for N plugins\n  // ... wire up and start http server\n}\n\nmodule.hot?.accept();\nmain().catch(...);\n")),(0,a.kt)("h2",{id:"migrating-the-index-file"},"Migrating the Index File"),(0,a.kt)("p",null,"This migration will try to leave the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," folder unchanged initially, first\nfocusing on removing the environment type and reducing the index file to its\nbare minimum. Then as a later step, we can reduce the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," folder bit by\nbit, replacing those files generally with one-liners in the index file instead."),(0,a.kt)("p",null,"Let's start by establishing the basis of your new index file. You may want to\ncomment out its old contents, or renaming the old file to ",(0,a.kt)("inlineCode",{parentName:"p"},"index.backup.ts")," for\nreference and making a new blank one to work on - whichever works best for you.\nThese are our new blank contents in the index file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/index.ts"',title:'"packages/backend/src/index.ts"'},"import { createBackend } from '@backstage/backend-defaults';\n\nconst backend = createBackend();\nbackend.start();\n")),(0,a.kt)("p",null,"Note that the environment builder and the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," dance are entirely gone."),(0,a.kt)("p",null,"We'll also want to add some backend system packages as dependencies. Run the\nfollowing command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# from the repository root\nyarn add --cwd packages/backend @backstage/backend-defaults @backstage/backend-plugin-api\n")),(0,a.kt)("p",null,"You should now be able to start this up with the familiar ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn workspace\nbackend start")," command locally and seeing some logs scroll by. But it'll just be\na blank service with no real features added. So let's stop it with ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," and\nreintroduce some plugins into the mix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/index.ts"',title:'"packages/backend/src/index.ts"'},"import { createBackend } from '@backstage/backend-defaults';\n/* highlight-add-next-line */\nimport { legacyPlugin } from '@backstage/backend-common';\n\nconst backend = createBackend();\n/* highlight-add-next-line */\nbackend.add(legacyPlugin('todo', import('./plugins/todo')));\nbackend.start();\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"todo")," plugin used above is just an example and you may not have it enabled\nin your own backend. Feel free to change it to some other plugin that you\nactually have in your ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," folder, for example\n",(0,a.kt)("inlineCode",{parentName:"p"},"backend.add(legacyPlugin('catalog', import('./plugins/catalog')))"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"legacyPlugin")," helper makes it easy to bridge the gap between the old-style\nplugin files and the new backend system. It ensures that the dependencies that\nyou used to have to declare by hand in your env are gathered behind the scenes,\nthen passes them into the relevant ",(0,a.kt)("inlineCode",{parentName:"p"},"createPlugin")," export function, and makes\nsure that the route handler it returns is passed into the HTTP router with the\ngiven prefix."),(0,a.kt)("h2",{id:"handling-custom-environments"},"Handling Custom Environments"),(0,a.kt)("p",null,"In the simple case, what we did above is sufficient, TypeScript is happy, and\nthe backend runs with the new feature. If they do, feel free to skip this entire\nsection, and delete ",(0,a.kt)("inlineCode",{parentName:"p"},"types.ts"),"."),(0,a.kt)("p",null,"Sometimes though, type errors can be reported on the newly added line, saying\nthat parts of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PluginEnvironment")," type do not match. This happens when the\nenvironment was changed from the defaults, perhaps with your own custom\nadditions. If this is the case in your installation, you still aren't out of\nluck - you can build a customized ",(0,a.kt)("inlineCode",{parentName:"p"},"legacyPlugin")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/index.ts"',title:'"packages/backend/src/index.ts"'},"import { createBackend } from '@backstage/backend-defaults';\n/* highlight-remove-next-line */\nimport { legacyPlugin } from '@backstage/backend-common';\n/* highlight-add-start */\nimport {\n  makeLegacyPlugin,\n  loggerToWinstonLogger,\n} from '@backstage/backend-common';\nimport { coreServices } from '@backstage/backend-plugin-api';\n/* highlight-add-end */\n\n/* highlight-add-start */\nconst legacyPlugin = makeLegacyPlugin(\n  {\n    cache: coreServices.cache,\n    config: coreServices.config,\n    database: coreServices.database,\n    discovery: coreServices.discovery,\n    logger: coreServices.logger,\n    permissions: coreServices.permissions,\n    scheduler: coreServices.scheduler,\n    tokenManager: coreServices.tokenManager,\n    reader: coreServices.urlReader,\n    identity: coreServices.identity,\n    // ... and your own additions\n  },\n  {\n    logger: log => loggerToWinstonLogger(log),\n  },\n);\n/* highlight-add-end */\n\nconst backend = createBackend();\nbackend.add(legacyPlugin('todo', import('./plugins/todo')));\nbackend.start();\n")),(0,a.kt)("p",null,"The first argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"makeLegacyPlugin")," is the mapping from environment keys to\nreferences to actual ",(0,a.kt)("a",{parentName:"p",href:"/docs/backend-system/architecture/services"},"backend system services"),'.\nThe second argument allows you to "tweak" the types of those services to\nsomething more fitting to your env. For example, you\'ll see that the logger\nservice API type was changed from the raw Winston logger of old, to a different,\ncustom API, so we use a helper function to transform that particular one.'),(0,a.kt)("p",null,"To make additions as mentioned above to the environment, you will start to get\ninto the weeds of how the backend system wiring works. You'll need to have a\nservice reference and a service factory that performs the actual creation of\nyour service. Please see ",(0,a.kt)("a",{parentName:"p",href:"/docs/backend-system/architecture/services#defining-a-service"},"the services\narticle")," to learn how to\ncreate a service ref and its default factory. You can place that code directly\nin the index file for now if you want, or near the actual implementation class\nin question."),(0,a.kt)("p",null,"In this example, we'll assume that your added environment field is named\n",(0,a.kt)("inlineCode",{parentName:"p"},"example"),", and the created ref is named ",(0,a.kt)("inlineCode",{parentName:"p"},"exampleServiceRef"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/index.ts"',title:'"packages/backend/src/index.ts"'},"/* highlight-add-next-line */\nimport { exampleServiceRef } from '<somewhere>'; // if the definition is elsewhere\n\nconst legacyPlugin = makeLegacyPlugin(\n  {\n    // ... the above core services still go here\n    /* highlight-add-next-line */\n    example: exampleServiceRef,\n  },\n  {\n    logger: log => loggerToWinstonLogger(log),\n  },\n);\n")),(0,a.kt)("p",null,"After this, your backend will know how to instantiate your thing on demand and\nplace it in the legacy plugin environment."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: If you happen to be dealing with a service ref that does NOT have a\ndefault implementation, but rather has a separate service factory, then you\nwill also need to import that factory and pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," array\nargument of ",(0,a.kt)("inlineCode",{parentName:"p"},"createBackend"),".")),(0,a.kt)("h2",{id:"cleaning-up-the-plugins-folder"},"Cleaning Up the Plugins Folder"),(0,a.kt)("p",null,"For plugins that are private and your own, you can follow a ",(0,a.kt)("a",{parentName:"p",href:"/docs/backend-system/building-plugins-and-modules/migrating"},"dedicated migration\nguide")," as you see fit, at a\nlater time."),(0,a.kt)("p",null,"For third party backend plugins, in particular the larger core plugins that are\nmaintained by the Backstage maintainers, you may find that they have already\nbeen migrated to the new backend system. This section describes some specific\nsuch migrations you can make."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: For each of these, note that your backend still needs to have a\ndependency (e.g. in ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/backend/package.json"),") to those plugin packages,\nand they still need to be configured properly in your app-config. Those\nmechanisms still work just the same as they used to in the old backend system.")),(0,a.kt)("h3",{id:"the-app-plugin"},"The App Plugin"),(0,a.kt)("p",null,"The app backend plugin that serves the frontend from the backend can trivially\nbe used in its new form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/index.ts"',title:'"packages/backend/src/index.ts"'},"/* highlight-add-next-line */\nimport { appPlugin } from '@backstage/plugin-app-backend';\n\nconst backend = createBackend();\n/* highlight-add-next-line */\nbackend.add(appPlugin({ appPackageName: 'app' }));\n")),(0,a.kt)("p",null,"This is an example of how options can be passed into some backend plugins. The\napp plugin specifically needs to know the name of the package that holds the\nfrontend code. This is the ",(0,a.kt)("inlineCode",{parentName:"p"},'"name"')," field in that package's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),",\ntypically found in your ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/app"),' folder. By default it\'s just plain "app".'),(0,a.kt)("p",null,"You should be able to delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/app.ts")," file at this point."),(0,a.kt)("h3",{id:"the-catalog-plugin"},"The Catalog Plugin"),(0,a.kt)("p",null,"A basic installation of the catalog plugin looks as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/index.ts"',title:'"packages/backend/src/index.ts"'},"/* highlight-add-start */\nimport { catalogPlugin } from '@backstage/plugin-catalog-backend';\nimport { catalogModuleTemplateKind } from '@backstage/plugin-scaffolder-backend';\n/* highlight-add-end */\n\nconst backend = createBackend();\n/* highlight-add-start */\nbackend.add(catalogPlugin());\nbackend.add(catalogModuleTemplateKind());\n/* highlight-add-end */\n")),(0,a.kt)("p",null,"Note that this also installs a module from the scaffolder, namely the one which\nenables the use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Template")," kind. In the unlikely event that you do not\nuse templates at all, you can remove those lines."),(0,a.kt)("p",null,"If you have other customizations made to ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/catalog.ts"),", such as adding\ncustom processors or entity providers, read on. Otherwise, you should be able to\njust delete that file at this point."),(0,a.kt)("p",null,"You will use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/backend-system/architecture/extension-points"},"extension points"),"\nmechanism to extend or tweak the functionality of the plugin. To do that,\nyou'll make your own bespoke ",(0,a.kt)("a",{parentName:"p",href:"/docs/backend-system/architecture/modules"},"module")," which\ndepends on the appropriate extension point and interacts with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/index.ts"',title:'"packages/backend/src/index.ts"'},"/* highlight-add-start */\nimport { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node';\nimport { createBackendModule } from '@backstage/backend-plugin-api';\n/* highlight-add-end */\n\n/* highlight-add-start */\nconst catalogModuleCustomExtensions = createBackendModule({\n  pluginId: 'catalog', // name of the plugin that the module is targeting\n  moduleId: 'customExtensions',\n  register(env) {\n    env.registerInit({\n      deps: {\n        catalog: catalogProcessingExtensionPoint,\n        // ... and other dependencies as needed\n      },\n      init({ catalog /* ..., other dependencies */ }) {\n        // Here you have the opportunity to interact with the extension\n        // point before the plugin itself gets instantiated\n        catalog.addEntityProvider(new MyEntityProvider()); // just an example\n        catalog.addProcessor(new MyProcessor()); // just an example\n      },\n    });\n  },\n});\n/* highlight-add-end */\n\nconst backend = createBackend();\nbackend.add(catalogPlugin());\nbackend.add(catalogModuleTemplateKind());\n/* highlight-add-next-line */\nbackend.add(catalogModuleCustomExtensions());\n")),(0,a.kt)("p",null,"This also requires that you have a dependency on the corresponding node package,\nif you didn't already have one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# from the repository root\nyarn add --cwd packages/backend @backstage/plugin-catalog-node\n")),(0,a.kt)("p",null,'Here we\'ve placed the module directly in the backend index file just to get\ngoing easily, but feel free to move it out to where it fits best. As you migrate\nyour entire plugin flora to the new backend system, you will probably make more\nand more of these modules as "first class" things, living right next to the\nimplementations that they represent, and being exported from there.'),(0,a.kt)("h3",{id:"the-events-plugin"},"The Events Plugin"),(0,a.kt)("p",null,"A basic installation of the events plugin looks as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/index.ts"',title:'"packages/backend/src/index.ts"'},"/* highlight-add-next-line */\nimport { eventsPlugin } from '@backstage/plugin-events-backend';\n\nconst backend = createBackend();\n/* highlight-add-next-line */\nbackend.add(eventsPlugin());\n")),(0,a.kt)("p",null,"If you have other customizations made to ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/events.ts"),", such as adding\ncustom subscribers, read on. Otherwise, you should be able to just delete that\nfile at this point."),(0,a.kt)("p",null,"You will use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/backend-system/architecture/extension-points"},"extension points"),"\nmechanism to extend or tweak the functionality of the plugin. To do that,\nyou'll make your own bespoke ",(0,a.kt)("a",{parentName:"p",href:"/docs/backend-system/architecture/modules"},"module")," which\ndepends on the appropriate extension point and interacts with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/index.ts"',title:'"packages/backend/src/index.ts"'},"/* highlight-add-start */\nimport { eventsExtensionPoint } from '@backstage/plugin-events-node';\nimport { createBackendModule } from '@backstage/backend-plugin-api';\n/* highlight-add-end */\n\n/* highlight-add-start */\nconst eventsModuleCustomExtensions = createBackendModule({\n  pluginId: 'events', // name of the plugin that the module is targeting\n  moduleId: 'customExtensions',\n  register(env) {\n    env.registerInit({\n      deps: {\n        events: eventsExtensionPoint,\n        // ... and other dependencies as needed\n      },\n      init({ events /* ..., other dependencies */ }) {\n        // Here you have the opportunity to interact with the extension\n        // point before the plugin itself gets instantiated\n        events.addSubscribers(new MySubscriber()); // just an example\n      },\n    });\n  },\n});\n/* highlight-add-end */\n\nconst backend = createBackend();\nbackend.add(eventsPlugin());\n/* highlight-add-next-line */\nbackend.add(eventsModuleCustomExtensions());\n")),(0,a.kt)("p",null,"This also requires that you have a dependency on the corresponding node package,\nif you didn't already have one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# from the repository root\nyarn add --cwd packages/backend @backstage/plugin-events-node\n")),(0,a.kt)("p",null,'Here we\'ve placed the module directly in the backend index file just to get\ngoing easily, but feel free to move it out to where it fits best. As you migrate\nyour entire plugin flora to the new backend system, you will probably make more\nand more of these modules as "first class" things, living right next to the\nimplementations that they represent, and being exported from there.'),(0,a.kt)("h3",{id:"the-scaffolder-plugin"},"The Scaffolder Plugin"),(0,a.kt)("p",null,"A basic installation of the scaffolder plugin looks as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/index.ts"',title:'"packages/backend/src/index.ts"'},"/* highlight-add-next-line */\nimport { scaffolderPlugin } from '@backstage/plugin-scaffolder-backend';\n\nconst backend = createBackend();\n/* highlight-add-next-line */\nbackend.add(scaffolderPlugin());\n")),(0,a.kt)("p",null,"If you have other customizations made to ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/scaffolder.ts"),", such as adding\ncustom actions, read on. Otherwise, you should be able to just delete that file\nat this point."),(0,a.kt)("p",null,"You will use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/backend-system/architecture/extension-points"},"extension points"),"\nmechanism to extend or tweak the functionality of the plugin. To do that,\nyou'll make your own bespoke ",(0,a.kt)("a",{parentName:"p",href:"/docs/backend-system/architecture/modules"},"module")," which\ndepends on the appropriate extension point and interacts with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/index.ts"',title:'"packages/backend/src/index.ts"'},"/* highlight-add-start */\nimport { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node';\nimport { createBackendModule } from '@backstage/backend-plugin-api';\n/* highlight-add-end */\n\n/* highlight-add-start */\nconst scaffolderModuleCustomExtensions = createBackendModule({\n  pluginId: 'scaffolder', // name of the plugin that the module is targeting\n  moduleId: 'customExtensions',\n  register(env) {\n    env.registerInit({\n      deps: {\n        scaffolder: scaffolderActionsExtensionPoint,\n        // ... and other dependencies as needed\n      },\n      init({ scaffolder /* ..., other dependencies */ }) {\n        // Here you have the opportunity to interact with the extension\n        // point before the plugin itself gets instantiated\n        scaffolder.addActions(new MyAction()); // just an example\n      },\n    });\n  },\n});\n/* highlight-add-end */\n\nconst backend = createBackend();\nbackend.add(scaffolderPlugin());\n/* highlight-add-next-line */\nbackend.add(scaffolderModuleCustomExtensions());\n")),(0,a.kt)("p",null,"This also requires that you have a dependency on the corresponding node package,\nif you didn't already have one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# from the repository root\nyarn add --cwd packages/backend @backstage/plugin-scaffolder-node\n")),(0,a.kt)("p",null,'Here we\'ve placed the module directly in the backend index file just to get\ngoing easily, but feel free to move it out to where it fits best. As you migrate\nyour entire plugin flora to the new backend system, you will probably make more\nand more of these modules as "first class" things, living right next to the\nimplementations that they represent, and being exported from there.'))}g.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(i){return!1}}()?Object.assign:function(e,r){for(var o,s,l=i(e),c=1;c<arguments.length;c++){for(var d in o=Object(arguments[c]))n.call(o,d)&&(l[d]=o[d]);if(t){s=t(o);for(var u=0;u<s.length;u++)a.call(o,s[u])&&(l[s[u]]=o[s[u]])}}return l}},541535:(e,t,n)=>{var a=n(862525),i=60103,r=60106;var o=60109,s=60110,l=60112;var c=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;i=u("react.element"),r=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),o=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),d=u("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function f(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}f.prototype.isReactComponent={},f.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},f.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=f.prototype;var y=b.prototype=new k;y.constructor=b,a(y,f.prototype),y.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var a,r={},o=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,a)&&!x.hasOwnProperty(a)&&(r[a]=t[a]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===r[a]&&(r[a]=l[a]);return{$$typeof:i,type:e,key:o,ref:s,props:r,_owner:v.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case r:l=!0}}if(l)return o=o(l=e),e=""===a?"."+j(l,0):a,Array.isArray(o)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),C(o,t,n,"",(function(e){return e}))):null!=o&&(O(o)&&(o=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var c=0;c<e.length;c++){var d=a+j(s=e[c],c);l+=C(s,t,n,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)l+=C(s=s.value,t,n,d=a+j(s,c++),o);else if("object"===s)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function T(e,t,n){if(null==e)return e;var a=[],i=0;return C(e,a,"","",(function(e){return t.call(n,e,i++)})),a}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function M(){var e=E.current;if(null===e)throw Error(g(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
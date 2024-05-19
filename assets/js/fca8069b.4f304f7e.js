"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[178],{8860:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(7953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),f=o,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||a;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(3911),o=(t(7953),t(8860));const a={sidebar_position:5},s="sourcemap",i={unversionedId:"basic/sourcemap",id:"basic/sourcemap",title:"sourcemap",description:"\u5728CLI\u6307\u4ee4\u89e3\u6790\u540e\uff0c\u5728runEsbuild\u65f6\u6dfb\u52a0 esbuild sourcemap \u7684\u914d\u7f6e",source:"@site/docs/basic/sourcemap.md",sourceDirName:"basic",slug:"/basic/sourcemap",permalink:"/ants-bundle/docs/basic/sourcemap",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"dts",permalink:"/ants-bundle/docs/basic/dts"},next:{title:"\u6784\u5efa\u4ea7\u7269",permalink:"/ants-bundle/docs/basic/format"}},l={},p=[],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"sourcemap"},"sourcemap"),(0,o.yg)("p",null,"\u5728",(0,o.yg)("inlineCode",{parentName:"p"},"CLI"),"\u6307\u4ee4\u89e3\u6790\u540e\uff0c\u5728",(0,o.yg)("inlineCode",{parentName:"p"},"runEsbuild"),"\u65f6\u6dfb\u52a0 esbuild sourcemap \u7684\u914d\u7f6e"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript"},"await esbuild({\n  sourcemap: options.sourcemap ? 'external' : false,\n}\n")),(0,o.yg)("p",null,"\u9488\u5bf9\u8bbe\u7f6e\u4e86 inline \u7684\u9009\u9879\uff0c\u8fd4\u56de\u884c\u5185\u6837\u5f0f\u6784\u5efa\u7684\u7ed3\u679c"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript"},"const inlineSourceMap = this.context!.options.sourcemap === 'inline';\n\nconst getSourcemapComment = (\n  inline: boolean,\n  map: RawSourceMap | string | null | undefined,\n  filepath: string,\n  isCssFile: boolean,\n) => {\n  if (!map) return '';\n  const prefix = isCssFile ? '/*' : '//';\n  const suffix = isCssFile ? ' */' : '';\n  const url = inline\n    ? `data:application/json;base64,${Buffer.from(\n        typeof map === 'string' ? map : JSON.stringify(map),\n      ).toString('base64')}`\n    : `${path.basename(filepath)}.map`;\n  return `${prefix}# sourceMappingURL=${url}${suffix}`;\n};\n")),(0,o.yg)("p",null,"\u8bbe\u7f6e\u5728\u6267\u884c\u6784\u5efa\u65f6\uff0c\u6839\u636e",(0,o.yg)("inlineCode",{parentName:"p"},"options"),"\u7684\u9009\u9879\uff0c\u521b\u5efa\u65b0\u7684\u7ebf\u7a0b\u6267\u884c rollup \u6307\u4ee4\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript"},"const dtsTask = async () => {\n  if (options.dts) {\n    await new Promise<void>((resolve, reject) => {\n      const worker = new Worker(path.join(__dirname, './rollup.js'));\n      worker.postMessage({\n        configName: item?.name,\n        options: {\n          ...options, // functions cannot be cloned\n          banner: undefined,\n          footer: undefined,\n          esbuildPlugins: undefined,\n          esbuildOptions: undefined,\n          plugins: undefined,\n          treeshake: undefined,\n          onSuccess: undefined,\n          outExtension: undefined,\n        },\n      });\n      worker.on('message', (data) => {\n        if (data === 'error') {\n          reject(new Error('error occured in dts build'));\n        } else if (data === 'success') {\n          resolve();\n        } else {\n          const { type, text } = data;\n          if (type === 'log') {\n            console.log(text);\n          } else if (type === 'error') {\n            console.error(text);\n          }\n        }\n      });\n    });\n  }\n};\n")),(0,o.yg)("p",null,"\u6839\u636e\u914d\u7f6e\uff0c\u751f\u6210 dts"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript"},"async function runRollup(options: RollupConfig) {\n  const { rollup } = await import('rollup');\n  try {\n    const start = Date.now();\n    const getDuration = () => {\n      return `${Math.floor(Date.now() - start)}ms`;\n    };\n    logger.info('dts', 'Build start');\n    const bundle = await rollup(options.inputConfig);\n    const results = await Promise.all(options.outputConfig.map(bundle.write));\n    const outputs = results.flatMap((result) => result.output);\n    logger.success('dts', `\u26a1\ufe0f Build success in ${getDuration()}`);\n    reportSize(\n      logger,\n      'dts',\n      outputs.reduce((res, info) => {\n        const name = path.relative(\n          process.cwd(),\n          path.join(options.outputConfig[0].dir || '.', info.fileName),\n        );\n        return {\n          ...res,\n          [name]: info.type === 'chunk' ? info.code.length : info.source.length,\n        };\n      }, {}),\n    );\n  } catch (error) {\n    handleError(error);\n    logger.error('dts', 'Build error');\n  }\n}\n")),(0,o.yg)("p",null,"\u4f7f\u7528",(0,o.yg)("inlineCode",{parentName:"p"},"JoyCon"),"\u8bc6\u522b\u6307\u5b9a\u6587\u4ef6\u6216 package.json \u4e2d\u7684",(0,o.yg)("inlineCode",{parentName:"p"},"ants-bundle"),"\uff0c\u4f5c\u4e3a\u76f8\u5bf9\u7528\u6237\u914d\u7f6e\u9879\u7684\u8fd4\u56de\u3002"))}d.isMDXComponent=!0}}]);
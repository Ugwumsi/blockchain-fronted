(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(17440)}])},96301:function(e,t,n){"use strict";let a=n(37917),i=n(63021);e.exports={contractAddresses:a,abi:i}},19749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,n;var i,{src:r,sizes:g,unoptimized:b=!1,priority:v=!1,loading:w,className:_,quality:x,width:E,height:j,fill:S,style:C,onLoad:N,onLoadingComplete:R,placeholder:k="empty",blurDataURL:O,layout:z,objectFit:M,objectPosition:P,lazyBoundary:A,lazyRoot:I}=e,F=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let L=o.useContext(d.ImageConfigContext),T=o.useMemo(()=>{let e=f||L||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:n})},[L]),H=F,W=H.loader||p.default;if(delete H.loader,"__next_img_default"in W){if("custom"===T.loader)throw Error('Image with src "'.concat(r,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let B=W;W=e=>{let{config:t}=e,n=s(e,["config"]);return B(n)}}if(z){"fill"===z&&(S=!0);let D={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];D&&(C=a({},C,D));let q={responsive:"100vw",fill:"100vw"}[z];q&&!g&&(g=q)}let J="",U=y(E),G=y(j);if("object"==typeof(i=r)&&(m(i)||void 0!==i.src)){let X=m(r)?r.default:r;if(!X.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(!X.height||!X.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)));if(t=X.blurWidth,n=X.blurHeight,O=O||X.blurDataURL,J=X.src,!S){if(U||G){if(U&&!G){let V=U/X.width;G=Math.round(X.height*V)}else if(!U&&G){let Z=G/X.height;U=Math.round(X.width*Z)}}else U=X.width,G=X.height}}let Q=!v&&("lazy"===w||void 0===w);((r="string"==typeof r?r:J).startsWith("data:")||r.startsWith("blob:"))&&(b=!0,Q=!1),T.unoptimized&&(b=!0);let[K,Y]=o.useState(!1),[$,ee]=o.useState(!1),et=y(x),en=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:P}:{},$?{}:{color:"transparent"},C),ea="blur"===k&&O&&!K?{backgroundSize:en.objectFit||"cover",backgroundPosition:en.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({widthInt:U,heightInt:G,blurWidth:t,blurHeight:n,blurDataURL:O}),'")')}:{},ei=function(e){let{config:t,src:n,unoptimized:a,width:i,quality:r,sizes:s,loader:o}=e;if(a)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,n){let{deviceSizes:a,allSizes:i}=e;if(n){let r=/(^|\s)(1?\d?\d)vw/g,s=[];for(let o;o=r.exec(n);o)s.push(parseInt(o[2]));if(s.length){let l=.01*Math.min(...s);return{widths:i.filter(e=>e>=a[0]*l),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let u=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:u,kind:"x"}}(t,i,s),c=l.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:l.map((e,a)=>"".concat(o({config:t,src:n,quality:r,width:e})," ").concat("w"===u?e:a+1).concat(u)).join(", "),src:o({config:t,src:n,quality:r,width:l[c]})}}({config:T,src:r,unoptimized:b,width:U,quality:et,sizes:g,loader:W}),er=r,es={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:H.crossOrigin},eo=o.useRef(N);o.useEffect(()=>{eo.current=N},[N]);let el=o.useRef(R);o.useEffect(()=>{el.current=R},[R]);let eu=a({isLazy:Q,imgAttributes:ei,heightInt:G,widthInt:U,qualityInt:et,className:_,imgStyle:en,blurStyle:ea,loading:w,config:T,fill:S,unoptimized:b,placeholder:k,loader:W,srcString:er,onLoadRef:eo,onLoadingCompleteRef:el,setBlurComplete:Y,setShowAltText:ee},H);return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,Object.assign({},eu)),v?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},es))):null)};var a=n(6495).Z,i=n(92648).Z,r=n(91598).Z,s=n(17273).Z,o=r(n(67294)),l=i(n(83121)),u=n(2675),c=n(10139),d=n(28730);n(57238);var p=i(n(23078));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function y(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,n,i,r,s,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&s(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;i.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist(){},preventDefault(){o=!0,t.preventDefault()},stopPropagation(){l=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let h=e=>{var{imgAttributes:t,heightInt:n,widthInt:i,qualityInt:r,className:l,imgStyle:u,blurStyle:c,isLazy:d,fill:p,placeholder:f,loading:m,srcString:y,config:h,unoptimized:b,loader:v,onLoadRef:w,onLoadingCompleteRef:_,setBlurComplete:x,setShowAltText:E,onLoad:j,onError:S}=e,C=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=d?"lazy":m,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},C,t,{width:i,height:n,decoding:"async","data-nimg":p?"fill":"1",className:l,loading:m,style:a({},u,c),ref:o.useCallback(e=>{e&&(S&&(e.src=e.src),e.complete&&g(e,y,f,w,_,x,b))},[y,f,w,_,x,S,b]),onLoad(e){let t=e.currentTarget;g(t,y,f,w,_,x,b)},onError(e){E(!0),"blur"===f&&x(!0),S&&S(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:a,blurHeight:i,blurDataURL:r}=e,s=a||t,o=i||n,l=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(r,"'/%3E%3C/svg%3E")}},23078:function(e,t){"use strict";function n(e){let{config:t,src:n,width:a,quality:i}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(a,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},17440:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(85893),i=n(9008),r=n.n(i);n(25675);var s=n(7160),o=n.n(s),l=n(41942);function u(){return(0,a.jsxs)("div",{className:"p-5 border-b-2 flex flex-row",children:[(0,a.jsx)("h1",{className:"py-4 px-4 font-blog text-3xl",children:"Decentralized Lottery"}),(0,a.jsx)("div",{className:"ml-auto py-2 px-4",children:(0,a.jsx)(l.cg,{moralisAuth:!1})})]})}var c=n(83078),d=n(96301),p=n(67294),f=n(35553);function m(){let{chainId:e,isWeb3Enabled:t}=(0,c.Nr)(),n=parseInt(e),i=n in d.contractAddresses?d.contractAddresses[n][0]:null,[r,s]=(0,p.useState)("0"),[o,u]=(0,p.useState)("0"),[m,y]=(0,p.useState)("0"),g=(0,l.aa)(),{runContractFunction:h,isLoading:b,isFetching:v}=(0,c.JX)({abi:d.abi,contractAddress:i,functionName:"enterRaffle",msgValue:r,params:{}}),{runContractFunction:w}=(0,c.JX)({abi:d.abi,contractAddress:i,functionName:"getEntranceFee",params:{}}),{runContractFunction:_}=(0,c.JX)({abi:d.abi,contractAddress:i,functionName:"getNumberOfPlayers",params:{}}),{runContractFunction:x}=(0,c.JX)({abi:d.abi,contractAddress:i,functionName:"getRecentWinner",params:{}});async function E(){let e=(await w()).toString(),t=(await _()).toString(),n=await x();s(e),u(t),y(n)}(0,p.useEffect)(()=>{t&&E()},[t]);let j=async function(e){await e.wait(1),S(e),E()},S=function(){g({type:"info",message:"Transaction Complete!",title:"Tx Notification",position:"topR",icon:"bell"})};return(0,a.jsxs)("div",{className:"p-5",children:["Hello from the other side",i?(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto",onClick:async function(){await h({onSuccess:j})},disabled:b||v,children:b||v?(0,a.jsx)("div",{className:"animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"}):(0,a.jsx)("div",{children:"Enter Raffle"})}),(0,a.jsxs)("div",{children:["Entrance Fee: ",f.bM(r,"ether")," ETH "]}),(0,a.jsxs)("div",{children:["Players: ",o]}),(0,a.jsxs)("div",{children:["Winner: ",m]})]}):(0,a.jsx)("div",{children:"No Raffle Address Detected"})]})}function y(){return(0,a.jsxs)("div",{className:o().container,children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"My Smart Contract Lottery"}),(0,a.jsx)("meta",{name:"description",content:"Ugwumsi's Lottery"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(u,{}),"Happy Birthday, Bitches!!!",(0,a.jsx)(m,{})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(83121)},25675:function(e,t,n){n(19749)},63021:function(e){"use strict";e.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[{"type":"address","name":"vrfCoordinatorV2"},{"type":"uint256","name":"entranceFee"},{"type":"bytes32","name":"gasLane"},{"type":"uint64","name":"subscriptionId"},{"type":"uint32","name":"callbackGasLimit"},{"type":"uint256","name":"interval"}]},{"type":"error","name":"OnlyCoordinatorCanFulfill","inputs":[{"type":"address","name":"have"},{"type":"address","name":"want"}]},{"type":"error","name":"Raffle__NotEnoughETHEntered","inputs":[]},{"type":"error","name":"Raffle__NotOpen","inputs":[]},{"type":"error","name":"Raffle__TransferFailed","inputs":[]},{"type":"error","name":"Raffle__UpkeepNotNeeded","inputs":[{"type":"uint256","name":"currentBalance"},{"type":"uint256","name":"numPlayers"},{"type":"uint256","name":"raffleState"}]},{"type":"event","anonymous":false,"name":"RaffleEnter","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"event","anonymous":false,"name":"RequestedRaffleWinner","inputs":[{"type":"uint256","name":"requestId","indexed":true}]},{"type":"event","anonymous":false,"name":"winnerPicked","inputs":[{"type":"address","name":"winner","indexed":true}]},{"type":"function","name":"checkUpkeep","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"bytes"}],"outputs":[{"type":"bool","name":"upkeepNeeded"},{"type":"bytes"}]},{"type":"function","name":"enterRaffle","constant":false,"stateMutability":"payable","payable":true,"gas":29000000,"inputs":[],"outputs":[]},{"type":"function","name":"getEntranceFee","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getInterval","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getLatestTimeStamp","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumWords","constant":true,"stateMutability":"pure","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumberOfPlayers","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getPlayer","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"index"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getRaffleState","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint8"}]},{"type":"function","name":"getRecentWinner","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"address"}]},{"type":"function","name":"getRequestConfirmations","constant":true,"stateMutability":"pure","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"performUpkeep","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"bytes"}],"outputs":[]},{"type":"function","name":"rawFulfillRandomWords","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"requestId"},{"type":"uint256[]","name":"randomWords"}],"outputs":[]}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"31337":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"]}')}},function(e){e.O(0,[774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);
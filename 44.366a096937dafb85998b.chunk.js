"use strict";(self.webpackChunkaurelia_slickgrid_demo=self.webpackChunkaurelia_slickgrid_demo||[]).push([[44],{19650:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(62891),i=r.n(n),s=r(68309),a=r.n(s)()(i());a.push([e.id,".tab-content{padding:10px}",""]);const o=a},65044:(e,t,r)=>{r.r(t),r.d(t,{Example22:()=>T});var n={};r.r(n),r.d(n,{default:()=>c,dependencies:()=>d,name:()=>o,register:()=>u,template:()=>l});var i=r(43112),s=r(1285),a=r(19650);const o="example22",l='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/src/examples/slickgrid/example22.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<div>\n  <nav>\n    <div class="nav nav-tabs" id="nav-tab" role="tablist">\n      <button\n          class="nav-link active"\n          id="javascript-tab"\n          data-bs-toggle="tab"\n          data-bs-target="#javascript"\n          type="button"\n          role="tab"\n          aria-controls="javascript"\n          aria-selected="true">\n        JavaScript\n      </button>\n      <button\n          class="nav-link"\n          id="fetch-tab"\n          data-bs-toggle="tab"\n          data-bs-target="#fetch"\n          type="button"\n          role="tab"\n          aria-controls="fetch"\n          aria-selected="false"\n          click.trigger="resizeGrid2()">\n        Fetch-Client\n      </button>\n    </div>\n  </nav>\n  <div class="tab-content" id="nav-tabContent">\n    <div class="tab-pane fade show active" id="javascript" role="tabpanel" aria-labelledby="javascript-tab" tabindex="0">\n      <h4>Grid 1 - Load Local Data</h4>\n      <aurelia-slickgrid grid-id="grid1"\n                          column-definitions.bind="columnDefinitions1"\n                          grid-options.bind="gridOptions1"\n                          dataset.bind="dataset1">\n      </aurelia-slickgrid>\n    </div>\n    <div class="tab-pane fade" id="fetch" role="tabpanel" aria-labelledby="fetch-tab" tabindex="0">\n      <h4>Grid 2 - Load a JSON dataset through Fetch-Client</h4>\n      <aurelia-slickgrid grid-id="grid2"\n                          column-definitions.bind="columnDefinitions2"\n                          grid-options.bind="gridOptions2"\n                          dataset.bind="dataset2"\n                          on-aurelia-grid-created.trigger="aureliaGrid2Ready($event.detail)">\n      </aurelia-slickgrid>\n    </div>\n  </div>\n</div>\n',c=l,d=[];let h;function u(e){h||(h=s.b_N.define({name:o,template:l,dependencies:d})),e.register(h)}var p=r(54432),f=r(76024),b=r(53124),y=r(83798),g=r.n(y),m=r(52043),v=r.n(m),w=r(47063),R=r.n(w),C=r(44463),O=r.n(C),q=r(8613),k=r.n(q),E=r(2442),j=r.n(E),P={};P.styleTagTransform=j(),P.setAttributes=O(),P.insert=R().bind(null,"head"),P.domAPI=v(),P.insertStyleElement=k(),g()(a.Z,P),a.Z&&a.Z.locals&&a.Z.locals,r(34885);let T=class{http;title="Example 22: Grids in Bootstrap Tabs";subTitle='This example demonstrate the creation of multiple grids in Bootstrap Tabs\n   <ol>\n    <li>Regular mocked data with javascript</li>\n    <li>Load dataset through Fetch-Client. Also note we need to call a "resizeGrid()" after focusing on this tab</li>\n  </ol>';aureliaGrid2;gridOptions1;gridOptions2;columnDefinitions1=[];columnDefinitions2=[];dataset1=[];dataset2=[];constructor(e){this.http=e,this.defineGrid1(),this.defineGrid2()}aureliaGrid2Ready(e){this.aureliaGrid2=e}async attached(){this.dataset1=this.mockData();const e=await this.http.fetch("assets/data/customers_100.json");this.dataset2=await e.json()}defineGrid1(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",minWidth:100},{id:"finish",name:"Finish",field:"finish",minWidth:100},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100}],this.gridOptions1={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableSorting:!0}}defineGrid2(){this.columnDefinitions2=[{id:"name",name:"Name",field:"name",filterable:!0,sortable:!0},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:b.x$p.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0}],this.gridOptions2={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableSorting:!0}}mockData(){const e=[];for(let t=0;t<1e3;t++){const r=2e3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),i=Math.floor(29*Math.random()),s=Math.round(100*Math.random());e[t]={id:t,title:"Task "+t,duration:Math.round(100*Math.random())+"",percentComplete:s,start:`${n}/${i}/${r}`,finish:`${n}/${i}/${r}`,effortDriven:t%5==0}}return e}resizeGrid2(){this.aureliaGrid2.resizerService.resizeGrid(10)}};T=(0,i.gn)([(0,s.MoW)(n),(0,i.fM)(0,(0,f.pZ)(p.tL)),(0,i.w6)("design:paramtypes",[Object])],T)},54432:(e,t,r)=>{r.d(t,{AV:()=>i,tL:()=>u});var n=r(76024);function i(e,t){return JSON.stringify(void 0!==e?e:{},t)}const s={maxRetries:3,interval:1e3,strategy:0};class a{constructor(e){if(this.retryConfig={...s,...void 0!==e?e:{}},2===this.retryConfig.strategy&&this.retryConfig.interval<=1e3)throw new Error("An interval less than or equal to 1 second is not allowed when using the exponential retry strategy")}request(e){return e.retryConfig||(e.retryConfig={...this.retryConfig},e.retryConfig.counter=0),e.retryConfig.requestClone=e.clone(),e}response(e,t){return Reflect.deleteProperty(t,"retryConfig"),e}responseError(e,t,r){const{retryConfig:n}=t,{requestClone:i}=n;return Promise.resolve().then((()=>{if(n.counter<n.maxRetries){const s=void 0===n.doRetry||n.doRetry(e,t);return Promise.resolve(s).then((s=>{if(s){n.counter++;const e=o(n);return new Promise((t=>setTimeout(t,isNaN(e)?0:e))).then((()=>{const e=i.clone();return"function"==typeof n.beforeRetry?n.beforeRetry(e,r):e})).then((e=>{const t={...e,retryConfig:n};return r.fetch(t)}))}throw Reflect.deleteProperty(t,"retryConfig"),e}))}throw Reflect.deleteProperty(t,"retryConfig"),e}))}}function o(e){const{interval:t,strategy:r,minRandomInterval:n,maxRandomInterval:i,counter:s}=e;if("function"==typeof r)return e.strategy(s);switch(r){case 0:return l[0](t);case 1:return l[1](s,t);case 2:return l[2](s,t);case 3:return l[3](s,t,n,i);default:throw new Error("Unrecognized retry strategy")}}const l=[e=>e,(e,t)=>t*e,(e,t)=>1===e?t:t**e/1e3,(e,t,r=0,n=6e4)=>Math.random()*(n-r)+r];class c{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null}withBaseUrl(e){return this.baseUrl=e,this}withDefaults(e){return this.defaults=e,this}withInterceptor(e){return this.interceptors.push(e),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:d})}withRetry(e){const t=new a(e);return this.withInterceptor(t)}withDispatcher(e){return this.dispatcher=e,this}}function d(e){if(!e.ok)throw e;return e}const h=/^([a-z][a-z0-9+\-.]*:)?\/\//i,u=n.DI.createInterface("IHttpClient",(e=>e.singleton(p)));class p{constructor(){this.dispatcher=null,this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.interceptors=[]}configure(e){let t;if("object"==typeof e)t={defaults:e};else{if("function"!=typeof e)throw new Error("invalid config");{t=new c,t.baseUrl=this.baseUrl,t.defaults={...this.defaults},t.interceptors=this.interceptors,t.dispatcher=this.dispatcher;const r=e(t);Object.prototype.isPrototypeOf.call(c.prototype,r)&&(t=r)}}const r=t.defaults;if(void 0!==r&&Object.prototype.isPrototypeOf.call(Headers.prototype,r.headers))throw new Error("Default headers must be a plain object.");const n=t.interceptors;if(void 0!==n&&n.length){if(n.filter((e=>Object.prototype.isPrototypeOf.call(a.prototype,e))).length>1)throw new Error("Only one RetryInterceptor is allowed.");const e=n.findIndex((e=>Object.prototype.isPrototypeOf.call(a.prototype,e)));if(e>=0&&e!==n.length-1)throw new Error("The retry interceptor must be the last interceptor defined.")}return this.baseUrl=t.baseUrl,this.defaults=r,this.interceptors=void 0!==t.interceptors?t.interceptors:[],this.dispatcher=t.dispatcher,this.isConfigured=!0,this}fetch(e,t){this.trackRequestStart();let r=this.buildRequest(e,t);return this.processRequest(r,this.interceptors).then((e=>{let t;if(Object.prototype.isPrototypeOf.call(Response.prototype,e))t=Promise.resolve(e);else{if(!Object.prototype.isPrototypeOf.call(Request.prototype,e))throw new Error(`An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got [${e}]`);r=e,t=fetch(r)}return this.processResponse(t,this.interceptors,r)})).then((e=>Object.prototype.isPrototypeOf.call(Request.prototype,e)?this.fetch(e):e)).then((e=>(this.trackRequestEnd(),e)),(e=>{throw this.trackRequestEnd(),e}))}buildRequest(e,t){const r=null!==this.defaults?this.defaults:{};let n,i,s;const a=function(e){const t={},r=void 0!==e?e:{};for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]="function"==typeof r[e]?r[e]():r[e]);return t}(r.headers);if(Object.prototype.isPrototypeOf.call(Request.prototype,e))n=e,s=new Headers(n.headers).get("Content-Type");else{t||(t={}),i=t.body;const a=void 0!==i?{body:i}:null,o={...r,headers:{},...t,...a};s=new Headers(o.headers).get("Content-Type"),n=new Request(f(this.baseUrl,e),o)}return s||(new Headers(a).has("content-type")?n.headers.set("Content-Type",new Headers(a).get("content-type")):void 0!==i&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(i)&&n.headers.set("Content-Type","application/json")),function(e,t){const r=void 0!==t?t:{};for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&!e.has(t)&&e.set(t,r[t])}(n.headers,a),void 0!==i&&Object.prototype.isPrototypeOf.call(Blob.prototype,i)&&i.type&&n.headers.set("Content-Type",i.type),n}get(e,t){return this.fetch(e,t)}post(e,t,r){return this.callFetch(e,t,r,"POST")}put(e,t,r){return this.callFetch(e,t,r,"PUT")}patch(e,t,r){return this.callFetch(e,t,r,"PATCH")}delete(e,t,r){return this.callFetch(e,t,r,"DELETE")}trackRequestStart(){if(this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!==this.dispatcher){const e=new this.dispatcher.ownerDocument.defaultView.CustomEvent("aurelia-fetch-client-request-started",{bubbles:!0,cancelable:!0});setTimeout((()=>{this.dispatcher.dispatchEvent(e)}),1)}}trackRequestEnd(){if(this.isRequesting=!! --this.activeRequestCount,!this.isRequesting&&null!==this.dispatcher){const e=new this.dispatcher.ownerDocument.defaultView.CustomEvent("aurelia-fetch-client-requests-drained",{bubbles:!0,cancelable:!0});setTimeout((()=>{this.dispatcher.dispatchEvent(e)}),1)}}processRequest(e,t){return this.applyInterceptors(e,t,"request","requestError",this)}processResponse(e,t,r){return this.applyInterceptors(e,t,"response","responseError",r,this)}applyInterceptors(e,t,r,n,...i){return(void 0!==t?t:[]).reduce(((e,t)=>{const s=t[r],a=t[n];return e.then(s?e=>s.call(t,e,...i):b,a?e=>a.call(t,e,...i):y)}),Promise.resolve(e))}callFetch(e,t,r,n){return r||(r={}),r.method=n,t&&(r.body=t),this.fetch(e,r)}}function f(e,t){return h.test(t)?t:(void 0!==e?e:"")+t}function b(e){return e}function y(e){throw e}}}]);
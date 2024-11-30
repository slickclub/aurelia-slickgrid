"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[1921],{4949:(e,t,s)=>{s.d(t,{A:()=>o});var i=s(1856),n=s.n(i),a=s(6305),r=s.n(a)()(n());r.push([e.id,".demo39 .badge{display:none}.demo39 .badge.fully-loaded{display:inline-flex}",""]);const o=r},4791:(e,t,s)=>{var i=s(1856),n=s.n(i),a=s(6305);s.n(a)()(n()).push([e.id,".demo39 .badge{display:none}.demo39 .badge.fully-loaded{display:inline-flex}",""])},1921:(e,t,s)=>{s.r(t),s.d(t,{Example39:()=>B});var i={};s.r(i),s.d(i,{bindables:()=>h,default:()=>l,dependencies:()=>c,name:()=>r,register:()=>u,template:()=>o});var n=s(5959),a=s(7414);s(4791);const r="example39",o='<div class="demo39">\n  <h2>\n    Example 39: GraphQL Backend Service with Infinite Scroll\n    <span class="float-end">\n      <a style="font-size: 18px" target="_blank"\n          href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example39.ts">\n        <span class="mdi mdi-link-variant"></span> code\n      </a>\n    </span>\n  </h2>\n\n  <h6 class="title is-6 italic content">\n    <ul>\n      <li>\n        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position.\n        In its simplest form, the more the user scrolls down, the more rows get loaded.\n        If we reached the end of the dataset and there is no more data to load, then we\'ll assume to have the entire dataset loaded in memory.\n        This contrast with the regular Pagination approach which will only hold a single page data at a time.\n      </li>\n      <li>NOTES</li>\n      <ol>\n        <li>\n          <code>presets.pagination</code> is not supported with Infinite Scroll and will revert to the first page,\n          simply because since we keep appending data, we always have to start from index zero (no offset).\n        </li>\n        <li>\n          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next batch).\n        </li>\n        <li>\n          Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page).\n        </li>\n      </ol>\n    </ul>\n  </h6>\n\n  <div class="row">\n    <div class="col-sm-5">\n      <div class.bind="status.class" role="alert" data-test="status">\n        <strong>Status: </strong> ${status.text}\n        <span hidden.bind="!processing">\n          <i class="mdi mdi-sync mdi-spin-1s"></i>\n        </span>\n      </div>\n\n      <div class="row">\n        <div class="col-md-12">\n          <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-filters-sorting"\n                  click.trigger="clearAllFiltersAndSorts()" title="Clear all Filters & Sorts">\n            <i class="mdi mdi-filter-remove-outline"></i>\n            Clear all Filter & Sorts\n          </button>\n          <label for="serverdelay" class="ml-4">Server Delay: </label>\n          <input id="serverdelay" type="number" data-test="server-delay" style="width: 55px"\n                value.bind="serverWaitDelay"\n                title="input a fake timer delay to simulate slow server response" />\n        </div>\n      </div>\n      <div class="row mt-1">\n        <div class="col-md-12">\n          <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="language-button" click.trigger="switchLanguage()">\n            <i class="mdi mdi-translate"></i>\n            Switch Language\n          </button>\n          <strong>Locale:</strong>\n          <span style="font-style: italic" data-test="selected-locale">\n            ${selectedLanguage + \'.json\'}\n          </span>\n        </div>\n      </div>\n      <br />\n      <div show.bind="metrics" style="margin: 10px 0px">\n        <b>Metrics:</b>\n        <span>\n        <span>${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'}</span> —\n          <span data-test="itemCount">${metrics.itemCount}</span>\n          of\n          <span data-test="totalItemCount">${metrics.totalItemCount}</span>\n          items\n        </span>\n        <span class="badge rounded-pill text-bg-primary" class.bind="tagDataClass" data-test="data-loaded-tag">All Data Loaded!!!</span>\n      </div>\n    </div>\n\n    <div class="col-sm-7">\n      <div class="alert alert-info" data-test="alert-graphql-query">\n        <strong>GraphQL Query:</strong>\n        <div innerhtml.bind="graphqlQuery" data-test="graphql-query-result"></div>\n      </div>\n    </div>\n  </div>\n\n  <aurelia-slickgrid\n    grid-id="grid39"\n    column-definitions.bind="columnDefinitions"\n    grid-options.bind="gridOptions"\n    dataset.bind="dataset"\n    instances.bind="aureliaGrid"\n    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n    on-row-count-changed.trigger="refreshMetrics($event.detail.args)">\n  </aurelia-slickgrid>\n</div>\n',l=o,c=[],h={};let d;function u(e){d||(d=a.K9.define({name:r,template:o,dependencies:c,bindables:h})),e.register(d)}var f=s(1271),p=s(7694),g=s(6824),m=s(2709),b=s(9663),y=s(7323),C=s.n(y),w=s(5280),v=s.n(w),S=s(3452),k=s.n(S),R=s(5947),I=s.n(R),x=s(1439),T=s.n(x),E=s(1308),A=s.n(E),L=s(4949),q={};q.styleTagTransform=A(),q.setAttributes=I(),q.insert=k().bind(null,"head"),q.domAPI=v(),q.insertStyleElement=T(),C()(L.A,q),L.A&&L.A.locals&&L.A.locals,s(1376);const D="assets/data",O="users";function P(e){return e.replace(/^"/,"").replace(/"$/,"").toLowerCase()}let B=(()=>{let e,t,s=[(0,a.EM)(i)],r=[];return class{static{t=this}static{const i="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,n.G4)(null,e={value:t},s,{kind:"class",name:t.name,metadata:i},null,r),t=e.value,i&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),(0,n.zF)(t,r)}http;i18n;aureliaGrid;backendService;columnDefinitions;gridOptions;dataset=[];metrics;tagDataClass="";graphqlQuery="...";processing=!1;selectedLanguage;status={text:"processing...",class:"alert alert-danger"};serverWaitDelay=250;constructor(e=(0,g.hd)((0,g.pn)(p.xl)),t=(0,g.hd)(f.TH)){this.http=e,this.i18n=t,this.backendService=new m.P,this.i18n.setLocale("en"),this.selectedLanguage="en",this.initializeGrid()}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columnDefinitions=[{id:"name",field:"name",nameKey:"NAME",width:60,type:b.PUO.string,sortable:!0,filterable:!0,filter:{model:b.CuW.compoundInput}},{id:"gender",field:"gender",nameKey:"GENDER",filterable:!0,sortable:!0,width:60,filter:{model:b.CuW.singleSelect,collection:[{value:"",label:""},{value:"male",labelKey:"MALE"},{value:"female",labelKey:"FEMALE"}]}},{id:"company",field:"company",nameKey:"COMPANY",width:60,sortable:!0,filterable:!0,filter:{model:b.CuW.multipleSelect,customStructure:{label:"company",value:"company"},collectionSortBy:{property:"company",sortDesc:!1},collectionAsync:this.http.fetch(`${D}/customers_100.json`).then((e=>e.json())),filterOptions:{filter:!0}}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableAutoTooltip:!0,autoTooltipOptions:{enableForHeaderCells:!0},enableTranslate:!0,i18n:this.i18n,enableFiltering:!0,enableCellNavigation:!0,multiColumnSort:!1,gridMenu:{resizeOnShowHeaderRow:!0},backendServiceApi:{disableInternalPostProcess:!0,service:this.backendService,options:{datasetName:O,addLocaleIntoQuery:!0,extraQueryArguments:[{field:"userId",value:123}],infiniteScroll:{fetchSize:30}},preProcess:()=>this.displaySpinner(!0),process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics={endTime:new Date,totalItemCount:e.data[O].totalCount||0},this.displaySpinner(!1),this.getCustomerCallback(e)}}}}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(e){this.processing=e,this.status=e?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"}}getCustomerCallback(e){const{nodes:t,totalCount:s}=e.data[O];this.aureliaGrid&&(this.metrics.totalItemCount=s,e.infiniteScrollBottomHit?this.aureliaGrid.dataView?.addItems(t):(this.aureliaGrid.slickGrid?.scrollTo(0),this.dataset=t,this.metrics.itemCount=t.length))}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return new Promise((t=>{let s=0,i=0,n="",a="";this.http.fetch(`${D}/customers_100.json`).then((e=>e.json())).then((r=>{let o=r;if(e.includes("first:")){const t=e.match(/first:([0-9]+),/)||[];s=+t[1]}if(e.includes("offset:")){const t=e.match(/offset:([0-9]+),/)||[];i=+t[1]}if(e.includes("orderBy:")){const[t,s,i]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(e)||[];n=s||"",a=i||""}if(e.includes("orderBy:")){const[t,s,i]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(e)||[];n=s||"",a=i||""}if(e.includes("filterBy:")){const t=/{field:(\w+),operator:(\w+),value:([0-9a-z',"\s]*)}/gi;let s;for(;null!==(s=t.exec(e));){const e=s[1]||"",t=s[2]||"",i=s[3]||"";let[n,a]=i.split(",");e&&t&&""!==i&&(o=o.filter((s=>{const r=s[e];switch(n=P(n),a=P(a||""),t){case"EQ":return r.toLowerCase()===n;case"NE":return r.toLowerCase()!==n;case"LE":return r.toLowerCase()<=n;case"LT":return r.toLowerCase()<n;case"GT":return r.toLowerCase()>n;case"GE":return r.toLowerCase()>=n;case"EndsWith":return r.toLowerCase().endsWith(n);case"StartsWith":return r.toLowerCase().startsWith(n);case"Starts+Ends":return r.toLowerCase().startsWith(n)&&r.toLowerCase().endsWith(a);case"Contains":return r.toLowerCase().includes(n);case"Not_Contains":return!r.toLowerCase().includes(n);case"IN":const e=i.toLocaleLowerCase().split(",");for(const t of e)if(r.toLocaleLowerCase()===P(t))return!0}})))}}let l=i;l>o.length&&(e=e.replace(`offset:${l}`,""),l=0);const c=e=>n?e[n]:e;switch(a.toUpperCase()){case"ASC":o=o.sort(((e,t)=>c(e).localeCompare(c(t))));break;case"DESC":o=o.sort(((e,t)=>c(t).localeCompare(c(e))))}const h=o.slice(l,l+s),d={data:{[O]:{nodes:h,totalCount:o.length}}};window.setTimeout((()=>{this.graphqlQuery=this.gridOptions.backendServiceApi.service.buildQuery(),t(d)}),this.serverWaitDelay)}))}))}refreshMetrics(e){e?.current>=0&&(this.metrics.itemCount=this.aureliaGrid.dataView?.getFilteredItemCount()||0,this.tagDataClass=this.metrics.itemCount===this.metrics.totalItemCount?"fully-loaded":"partial-load")}async switchLanguage(){const e="en"===this.selectedLanguage?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}},t})()},7694:(e,t,s)=>{s.d(t,{Pq:()=>n,xl:()=>u});var i=s(6824);function n(e,t){return JSON.stringify(void 0!==e?e:{},t)}class a{constructor(){this.cache=new Map,this.delete=e=>this.cache.delete(e),this.has=e=>this.cache.has(e),this.set=(e,t)=>this.cache.set(e,t),this.get=e=>this.cache.get(e),this.clear=()=>this.cache.clear()}}const r=i.DI.createInterface((e=>e.singleton(a)));class o{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null,this.c=(0,i.hd)(i.p7)}withBaseUrl(e){return this.baseUrl=e,this}withDefaults(e){return this.defaults=e,this}withInterceptor(e){return this.interceptors.push(e),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:l})}withRetry(e){const t=this.c.invoke(T,[e]);return this.withInterceptor(t)}withDispatcher(e){return this.dispatcher=e,this}}function l(e){if(!e.ok)throw e;return e}const c=(e,...t)=>new Error(`AUR${String(e).padStart(4,"0")}:${t.map(String)}`),h=/^([a-z][a-z0-9+\-.]*:)?\/\//i,d=i.DI.createInterface("fetch",(e=>{if("function"!=typeof fetch)throw c(5e3);return e.instance(fetch)})),u=i.DI.createInterface("IHttpClient",(e=>e.aliasTo(f)));class f{constructor(){this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.t=[],this.i=null,this.h=(0,i.hd)((0,i.P9)(o)),this.u=(0,i.hd)(d)}get interceptors(){return this.t.slice(0)}configure(e){let t;if("object"==typeof e)t={defaults:e};else{if("function"!=typeof e)throw c(5002,typeof e);{t=this.h(),t.baseUrl=this.baseUrl,t.defaults={...this.defaults},t.interceptors=this.t,t.dispatcher=this.i;const s=e(t);if(null!=s){if("object"!=typeof s)throw c(5001,typeof s);t=s}}}const s=t.defaults;if(s?.headers instanceof Headers)throw c(5003);const i=t.interceptors;if(i?.length>0){if(i.filter((e=>e instanceof T)).length>1)throw c(5004);const e=i.findIndex((e=>e instanceof T));if(e>=0&&e!==i.length-1)throw c(5005)}return this.baseUrl=t.baseUrl,this.defaults=s,this.t=t.interceptors??[],this.i=t.dispatcher,this.isConfigured=!0,this}fetch(e,t){this.C();let s=this.buildRequest(e,t);return this.processRequest(s,this.t).then((e=>{let t;if(e instanceof Response)t=Promise.resolve(e);else{if(!(e instanceof Request))throw c(5006,e);s=e,t=this.u.call(void 0,s)}return this.processResponse(t,this.t,s)})).then((e=>e instanceof Request?this.fetch(e):e)).then((e=>(this.R(),e)),(e=>{throw this.R(),e}))}buildRequest(e,t){const s=this.defaults??{};let i,n,a;const r=function(e){const t={},s=e??{};for(const e of Object.keys(s))t[e]="function"==typeof s[e]?s[e]():s[e];return t}(s.headers);if(e instanceof Request)i=e,a=new Headers(i.headers).get("Content-Type");else{t||(t={}),n=t.body;const r=void 0!==n?{body:n}:null,o={...s,headers:{},...t,...r};a=new Headers(o.headers).get("Content-Type"),i=new Request(p(this.baseUrl,e),o)}return a||(new Headers(r).has("content-type")?i.headers.set("Content-Type",new Headers(r).get("content-type")):void 0!==n&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(n)&&i.headers.set("Content-Type","application/json")),function(e,t){const s=t??{};for(const t of Object.keys(s))e.has(t)||e.set(t,s[t])}(i.headers,r),n instanceof Blob&&n.type&&i.headers.set("Content-Type",n.type),i}get(e,t){return this.fetch(e,t)}post(e,t,s){return this.I(e,t,s,"POST")}put(e,t,s){return this.I(e,t,s,"PUT")}patch(e,t,s){return this.I(e,t,s,"PATCH")}delete(e,t,s){return this.I(e,t,s,"DELETE")}dispose(){this.t.forEach((e=>e.dispose?.())),this.t.length=0,this.i=null}C(){this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!=this.i&&b(this.i,y.started)}R(){this.isRequesting=!! --this.activeRequestCount,this.isRequesting||null==this.i||b(this.i,y.drained)}processRequest(e,t){return this.B(e,t,"request","requestError",Request,this)}processResponse(e,t,s){return this.B(e,t,"response","responseError",Response,s,this)}B(e,t,s,i,n,...a){return(t??[]).reduce(((e,t)=>{const r=t[s],o=t[i];return e.then(r?e=>e instanceof n?r.call(t,e,...a):e:g,o?e=>o.call(t,e,...a):m)}),Promise.resolve(e))}I(e,t,s,i){return s||(s={}),s.method=i,null!=t&&(s.body=t),this.fetch(e,s)}}function p(e,t){return h.test(t)?t:(e??"")+t}function g(e){return e}function m(e){throw e}function b(e,t){const s=new e.ownerDocument.defaultView.CustomEvent(t,{bubbles:!0,cancelable:!0});setTimeout((()=>{e.dispatchEvent(s)}),1)}const y=Object.freeze({started:"aurelia-fetch-client-request-started",drained:"aurelia-fetch-client-requests-drained"}),C=i.DI.createInterface((e=>e.singleton(v))),w=Object.freeze({Set:"au:fetch:cache:set",Get:"au:fetch:cache:get",Clear:"au:fetch:cache:clear",Reset:"au:fetch:cache:reset",Dispose:"au:fetch:cache:dispose",CacheHit:"au:fetch:cache:hit",CacheMiss:"au:fetch:cache:miss",CacheStale:"au:fetch:cache:stale",CacheStaleRefreshed:"au:fetch:cache:stale:refreshed",CacheExpired:"au:fetch:cache:expired",CacheBackgroundRefreshed:"au:fetch:cache:background:refreshed",CacheBackgroundRefreshing:"au:fetch:cache:background:refreshing",CacheBackgroundStopped:"au:fetch:cache:background:stopped"});class v{constructor(){this.storage=(0,i.hd)(r),this.p=(0,i.hd)(i.r_),this.ea=(0,i.hd)(i.xe),this.q=(0,i.hd)(u),this.H=[],this.O=-1,this.j=[],this.T=new Map}subscribe(e,t){const s=this.ea.subscribe(e,t);return this.H.push(s),s}subscribeOnce(e,t){const s=this.ea.subscribeOnce(e,t);return this.H.push(s),s}setStaleTimer(e,t,s){const i=this.p.setTimeout((async()=>{this.delete(e),await this.q.get(s);const t=this.getItem(e);this.ea.publish(w.CacheStaleRefreshed,{key:e,value:t}),this.N(i)}),t);this.j.push(i)}startBackgroundRefresh(e){!e||this.O>-1||(this.O=this.p.setInterval((()=>{this.ea.publish(w.CacheBackgroundRefreshing),this.T.forEach(((e,t)=>{this.delete(t),this.q.get(e).then((()=>{const e=this.getItem(t);this.ea.publish(w.CacheBackgroundRefreshed,{key:t,value:e})}))}))}),e))}stopBackgroundRefresh(){this.p.clearInterval(this.O),this.O=-1,this.ea.publish(w.CacheBackgroundStopped)}set(e,t,s,i){const n={data:t,...s};this.setItem(e,n,i)}get(e){return this.getItem(e)?.data}setItem(e,t,s){t.lastCached=Date.now(),this.storage.set(e,t),this.T.set(e,s),this.ea.publish(w.Set,{key:e,value:t})}getItem(e){if(!this.storage.has(e))return void this.ea.publish(w.CacheMiss,{key:e});const t=this.storage.get(e);if(!t?.staleTime||!t?.lastCached)return this.ea.publish(w.CacheHit,{key:e,value:t}),t;const s=Date.now();if(s>t.lastCached+(t.staleTime??0))this.ea.publish(w.CacheStale,{key:e,value:t});else{if(!(s>t.lastCached+(t.cacheTime??0)))return this.ea.publish(w.CacheHit,{key:e,value:t}),t;this.ea.publish(w.CacheExpired,{key:e,value:t})}}delete(e){this.storage.delete(e),this.ea.publish(w.Clear,{key:e})}clear(){this.storage.clear(),this.T.clear(),this.ea.publish(w.Reset),this.stopBackgroundRefresh(),this.j.forEach((e=>{this.p.clearTimeout(e)})),this.j.length=0}dispose(){this.clear(),this.H.forEach((e=>e.dispose())),this.ea.publish(w.Dispose)}N(e){this.p.clearTimeout(e);const t=this.j.indexOf(e);t>-1&&this.j.splice(t,1)}}const S={cacheTime:3e5,staleTime:0,refreshStaleImmediate:!1,refreshInterval:0};class k{constructor(e){this.P=(0,i.hd)(C),this.cf={...S,...e??{}}}request(e){if(this.P.startBackgroundRefresh(this.cf.refreshInterval),"GET"!==e.method)return e;const t=this.P.get(this.key(e));return this.mark(t)??e}response(e,t){if(!t)return e;if(e.headers.has(k.cacheHeader))return e;const s=this.key(t);return this.P.setItem(s,{data:e,...this.cf},t),this.cf?.refreshStaleImmediate&&this.cf.staleTime>0&&this.P.setStaleTimer(s,this.cf.staleTime,t),e}dispose(){this.P.stopBackgroundRefresh()}key(e){return`${k.prefix}${e.url}`}mark(e){return e?.headers.set(k.cacheHeader,"hit"),e}}k.prefix="au:interceptor:",k.cacheHeader="x-au-fetch-cache";class R{constructor(){this.cache=(0,i.hd)(i.r_).globalThis.indexedDB,this.getStore=()=>this.database.transaction(R.cacheName,"readwrite").objectStore(R.cacheName),this.delete=e=>{this.getStore().delete(e)},this.has=e=>this.getStore().count(e).result>0,this.set=(e,t)=>this.getStore().put(t,e),this.get=e=>this.getStore().get(e).result,this.clear=()=>{const e=this.getStore();e.getAllKeys().result.forEach((t=>{e.delete(t)}))},this.database=this.cache.open(R.cacheName).result}}R.cacheName="au-cache";const I=Object.freeze({fixed:0,incremental:1,exponential:2,random:3}),x={maxRetries:3,interval:1e3,strategy:I.fixed};class T{constructor(e){if(this.p=(0,i.hd)(i.r_),this.retryConfig={...x,...e??{}},this.retryConfig.strategy===I.exponential&&this.retryConfig.interval<=1e3)throw c(5007,this.retryConfig.interval)}request(e){return e.retryConfig||(e.retryConfig={...this.retryConfig},e.retryConfig.counter=0),e.retryConfig.requestClone=e.clone(),e}response(e,t){return delete t.retryConfig,e}responseError(e,t,s){const{retryConfig:i}=t,{requestClone:n}=i;return Promise.resolve().then((()=>{if(i.counter<i.maxRetries){const a=null==i.doRetry||i.doRetry(e,t);return Promise.resolve(a).then((a=>{if(a){i.counter++;const e=function(e){const{interval:t,strategy:s,minRandomInterval:i,maxRandomInterval:n,counter:a}=e;if("function"==typeof s)return e.strategy(a);switch(s){case I.fixed:return E[I.fixed](t);case I.incremental:return E[I.incremental](a,t);case I.exponential:return E[I.exponential](a,t);case I.random:return E[I.random](a,t,i,n);default:throw c(5008,s)}}(i);return new Promise((t=>this.p.setTimeout(t,isNaN(e)?0:e))).then((()=>{const e=n.clone();return"function"==typeof i.beforeRetry?i.beforeRetry(e,s):e})).then((e=>{const t={...e,retryConfig:i};return s.fetch(t)}))}throw delete t.retryConfig,e}))}throw delete t.retryConfig,e}))}}const E=[e=>e,(e,t)=>t*e,(e,t)=>1===e?t:t**e/1e3,(e,t,s=0,i=6e4)=>Math.random()*(i-s)+s]}}]);
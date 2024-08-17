"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[4015],{1011:(t,e,i)=>{i.d(e,{r:()=>o});var s=i(8395),r=i(4817);class n{set columnDefinitions(t){this._columnDefinitions=t}set datasetIdPropName(t){this._datasetIdPropName=t}constructor(){this._filterCount=0,this._columnDefinitions=[],this._datasetIdPropName="id",this._odataOptions={filterQueue:[],orderBy:""},this._defaultSortBy="",this._columnFilters={}}buildQuery(){if(!this._odataOptions)throw new Error('Odata Service requires certain options like "top" for it to work');this._odataOptions.filterQueue=[];const t=[];if(this._odataOptions&&!0===this._odataOptions.enableCount){const e=this._odataOptions.version&&this._odataOptions.version>=4?"$count=true":"$inlinecount=allpages";t.push(e)}if(this._odataOptions.top&&t.push(`$top=${this._odataOptions.top}`),this._odataOptions.skip&&t.push(`$skip=${this._odataOptions.skip}`),this._odataOptions.orderBy){let e="";e=Array.isArray(this._odataOptions.orderBy)?this._odataOptions.orderBy.join(","):this._odataOptions.orderBy,t.push(`$orderby=${e}`)}if(this._odataOptions.filterBy||this._odataOptions.filter){const t=this._odataOptions.filter||this._odataOptions.filterBy;if(t){this._filterCount=1,this._odataOptions.filterQueue=[];let e=t;Array.isArray(t)&&(this._filterCount=t.length,e=t.join(` ${this._odataOptions.filterBySeparator||"and"} `)),"string"==typeof e&&("("!==e[0]||")"!==e.slice(-1)?this.addToFilterQueueWhenNotExists(`(${e})`):this.addToFilterQueueWhenNotExists(e))}}if(this._odataOptions.filterQueue.length>0){const e=this._odataOptions.filterQueue.join(` ${this._odataOptions.filterBySeparator||"and"} `);this._odataOptions.filter=e,t.push(`$filter=${e}`)}if(this._odataOptions.enableSelect||this._odataOptions.enableExpand){const e=this._columnDefinitions.flatMap((t=>t.fields??[t.field]));e.unshift(this._datasetIdPropName);const i=this.buildSelectExpand([...new Set(e)]);if(this._odataOptions.enableSelect){const e=i.selectParts.join(",");t.push(`$select=${e}`)}if(this._odataOptions.enableExpand){const e=i.expandParts.join(",");t.push(`$expand=${e}`)}}return t.join("&")}getFilterCount(){return this._filterCount}get columnFilters(){return this._columnFilters}get options(){return this._odataOptions}set options(t){this._odataOptions=t}removeColumnFilter(t){this._columnFilters&&this._columnFilters.hasOwnProperty(t)&&delete this._columnFilters[t]}saveColumnFilter(t,e,i){this._columnFilters[t]={search:i,value:e}}updateOptions(t){for(const e of Object.keys(t))if(t.hasOwnProperty(e)&&(this._odataOptions[e]=t[e]),"orderBy"===e||"sortBy"===e){let i=t[e];this._odataOptions.caseType===s.X3g.pascalCase&&(Array.isArray(i)?i.forEach(((t,e,i)=>{i[e]=(0,r.titleCase)(t)})):i=(0,r.titleCase)(t[e])),this._odataOptions.orderBy=i,this._defaultSortBy=i}}addToFilterQueueWhenNotExists(t){this._odataOptions.filterQueue&&-1===this._odataOptions.filterQueue.indexOf(t)&&this._odataOptions.filterQueue.push(t)}buildSelectExpand(t){const e={},i=new Set;for(const s of t){const t=s.split("/");if(1===t.length)i.add(s);else{const s=t[0],r=t.splice(1).join("/");e[s]||(e[s]=[]),e[s].push(r),!this._odataOptions.enableExpand||this._odataOptions.version&&this._odataOptions.version>=4||i.add(s)}}return{selectParts:[...i],expandParts:this._odataOptions.enableExpand?this.buildExpand(e):[]}}buildExpand(t){const e=[];for(const i of Object.keys(t))if(this._odataOptions.enableSelect&&this._odataOptions.version&&this._odataOptions.version>=4){const s=this.buildSelectExpand(t[i]);let r=s.selectParts.join(",");r.length>0&&(r="$select="+r),this._odataOptions.enableExpand&&s.expandParts.length>0&&(r+=(r.length>0?";":"")+"$expand="+s.expandParts.join(",")),r.length>0&&(r="("+r+")"),e.push(i+r)}else e.push(i);return e}}class o{get columnDefinitions(){return this._columnDefinitions}get odataService(){return this._odataService}get _gridOptions(){return this._grid?.getOptions()??{}}constructor(){this._currentFilters=[],this._currentPagination=null,this._currentSorters=[],this._columnDefinitions=[],this.defaultOptions={top:25,orderBy:"",caseType:s.X3g.pascalCase},this._odataService=new n}init(t,e,i,s){this._grid=i;const r={...this.defaultOptions,...t};if(this._gridOptions.enablePagination||r?.infiniteScroll){const t=r.infiniteScroll?.fetchSize??e?.pageSize??this.defaultOptions.top;this._odataService.options={...r,top:t},this._currentPagination={pageNumber:1,pageSize:this._odataService.options.top||this.defaultOptions.top||20}}else this._odataService.options={...r,top:void 0},this._currentPagination=null;if(this.options=this._odataService.options,this.pagination=e,i?.getColumns){const t=s?.allColumns??i.getColumns()??[];this._columnDefinitions=t.filter((t=>!t.excludeFromQuery))}this._odataService.columnDefinitions=this._columnDefinitions,this._odataService.datasetIdPropName=this._gridOptions.datasetIdPropertyName||"id"}buildQuery(){return this._odataService.buildQuery()}postProcess(t){const e=this._odataService.options.version??2;if(this.pagination&&this._odataService.options.enableCount){const i=(this._odataService.options.countExtractor??e>=4?t=>t?.["@odata.count"]:3===e?t=>t?.__count:t=>t?.d?.__count)(t);"number"==typeof i&&(this.pagination.totalItems=i)}if(this._odataService.options.enableExpand){const i=(this._odataService.options.datasetExtractor??e>=4?t=>t?.value:3===e?t=>t?.results:t=>t?.d?.results)(t);if(Array.isArray(i)){const t=new Set(this._columnDefinitions.flatMap((t=>t.fields??[t.field])).filter((t=>t.includes("/"))));if(t.size>0){const e=new Set;for(const s of i){for(const i of t){const t=i.split("/"),r=t[0];e.add(r);let n=s[r];for(let e=1;e<t.length;e++){const i=t[e];n&&"object"==typeof n&&i in n&&(n=n[i])}s[i]=n}for(const t of e)"object"==typeof s[t]&&delete s[t]}}}}}clearFilters(){this._currentFilters=[],this.updateFilters([])}clearSorters(){this._currentSorters=[],this.updateSorters([])}updateOptions(t){this.options={...this.options,...t},this._odataService.options=this.options}removeColumnFilter(t){this._odataService.removeColumnFilter(t)}getCurrentFilters(){return this._currentFilters}getCurrentPagination(){return this._currentPagination}getCurrentSorters(){return this._currentSorters}mapOdataOperator(t){let e="";switch(t){case"<":e="lt";break;case"<=":e="le";break;case">":e="gt";break;case">=":e="ge";break;case"<>":case"!=":e="ne";break;default:e="eq"}return e}resetPaginationOptions(){this._odataService.updateOptions({skip:0})}saveColumnFilter(t,e,i){this._odataService.saveColumnFilter(t,e,i)}processOnFilterChanged(t,e){if(void 0===this._gridOptions.backendServiceApi)throw new Error('Something went wrong in the GridOdataService, "backendServiceApi" is not initialized');if(this._currentFilters=this.castFilterToColumnFilters(e.columnFilters),!e||!e.grid)throw new Error('Something went wrong when trying create the GridOdataService, it seems that "args" is not populated correctly');return this.updateFilters(e.columnFilters),this.resetPaginationOptions(),this._odataService.buildQuery()}processOnPaginationChanged(t,e){const i=+(this.options?.infiniteScroll?.fetchSize||e.pageSize||(this.pagination?this.pagination.pageSize:20));return this.updatePagination(e.newPage,i),this._odataService.buildQuery()}processOnSortChanged(t,e){const i=e.multiColumnSort?e.sortCols:new Array({columnId:e.sortCol?.id??"",sortCol:e.sortCol,sortAsc:e.sortAsc});return this.updateSorters(i),this.options?.infiniteScroll&&this._odataService.updateOptions({skip:void 0}),this._odataService.buildQuery()}updateFilters(t,e){let i="";const n=[],o=this._odataService.options.version??2;e&&(this._currentFilters=this.castFilterToColumnFilters(t));for(const a in t)if(t.hasOwnProperty(a)){const h=t[a];let c;if(c=e&&Array.isArray(this._columnDefinitions)?this._columnDefinitions.find((t=>t.id===h.columnId)):h.columnDef,!c)throw new Error("[GridOData Service]: Something went wrong in trying to get the column definition of the specified filter (or preset filters). Did you make a typo on the filter columnId?");let l=c.filter?.queryField||c.queryFieldFilter||c.queryField||c.field||c.name||"";l instanceof HTMLElement&&(l=(0,r.stripTags)(l.innerHTML));const u=c.type||s.PUO.string;let d=(h?.searchTerms?[...h.searchTerms]:null)||[],p=Array.isArray(d)&&1===d.length?d[0]:"";if(void 0===p&&(p=""),!l)throw new Error('GridOData filter could not find the field name to query the search, your column definition must include a valid "field" or "name" (optionally you can also use the "queryfield").');if(this._odataService.options.useVerbatimSearchTerms||h.verbatimSearchTerms){n.push(`${l} ${h.operator} ${JSON.stringify(h.searchTerms)}`.trim());continue}p=null==p?"":`${p}`;const f=!1!==(c.autoParseInputFilterOperator??this._gridOptions.autoParseInputFilterOperator)?p.match(/^((.*[^\\*\r\n])[*]{1}(.*[^*\r\n]))|^([<>!=*]{0,2})(.*[^<>!=*])([*]?)$/)||[]:[p,"","","","",p,""],g=f?.[2]||"",m=f?.[3]||"";let y=h.operator||f?.[4],_=f?.[1]||f?.[5]||"";const O=f?.[6]||"*z"===y||y===s.huT.endsWith?"*":"",S=h.bypassBackendQuery||!1;if(l&&""===_&&d.length<=1){this.removeColumnFilter((0,r.getHtmlStringOutput)(l));continue}if(g&&m?(d=[g,m],y=s.huT.startsWithEndsWith):Array.isArray(d)&&1===d.length&&"string"==typeof d[0]&&d[0].indexOf("..")>=0&&(y!==s.huT.rangeInclusive&&y!==s.huT.rangeExclusive&&(y=this._gridOptions.defaultFilterRangeOperator??s.huT.rangeInclusive),d=d[0].split("..",2),""===d[0]?(y=y===s.huT.rangeInclusive?"<=":y===s.huT.rangeExclusive?"<":y,d=d.slice(1),_=d[0]):""===d[1]&&(y=y===s.huT.rangeInclusive?">=":y===s.huT.rangeExclusive?">":y,d=d.slice(0,1),_=d[0])),!y&&c.filter&&(y=c.filter.operator),!y&&Array.isArray(d)&&2===d.length&&d[0]&&d[1]&&(y=this._gridOptions.defaultFilterRangeOperator),y!==s.huT.rangeInclusive&&y!==s.huT.rangeExclusive||!Array.isArray(d)||1!==d.length||u!==s.PUO.date||(y=s.huT.equal),y||(y=(0,s.OIR)(u)),S)l&&this.saveColumnFilter((0,r.getHtmlStringOutput)(l),p,d);else{let t;if(_=this.normalizeSearchValue(u,_,o),Array.isArray(d)&&d.forEach(((t,e)=>{d[e]=this.normalizeSearchValue(u,d[e],o)})),i="",this._odataService.options.caseType===s.X3g.pascalCase&&(l=(0,r.titleCase)((0,r.getHtmlStringOutput)(l||""))),"function"==typeof this._odataService.options.filterQueryOverride&&(t=this._odataService.options.filterQueryOverride({fieldName:(0,r.getHtmlStringOutput)(l),columnDef:c,operator:y,columnFilterOperator:h.operator,searchValues:d,grid:this._grid})),void 0!==t)i=t;else if(y===s.huT.startsWithEndsWith&&Array.isArray(d)&&2===d.length){const t=[],[e,s]=d;t.push(`startswith(${l}, ${e})`),t.push(`endswith(${l}, ${s})`),i=t.join(" and ")}else if(d?.length>1&&("IN"===y||"NIN"===y||"NOTIN"===y||"NOT IN"===y||"NOT_IN"===y)){const t=[];if("IN"===y){for(let e=0,i=d.length;e<i;e++)t.push(`${l} eq ${d[e]}`);i=t.join(" or ")}else{for(let e=0,i=d.length;e<i;e++)t.push(`${l} ne ${d[e]}`);i=t.join(" and ")}"string"==typeof i&&"("===i[0]&&")"===i.slice(-1)||(i=`(${i})`)}else"*"===y||"a*"===y||"*z"===y||"*"===O||y===s.huT.startsWith||y===s.huT.endsWith?i="*"===y||"*z"===y||y===s.huT.endsWith?`endswith(${l}, ${_})`:`startswith(${l}, ${_})`:y===s.huT.rangeExclusive||y===s.huT.rangeInclusive?i=this.filterBySearchTermRange((0,r.getHtmlStringOutput)(l),y,d):""!==y&&y!==s.huT.contains&&y!==s.huT.notContains||u!==s.PUO.string&&u!==s.PUO.text&&u!==s.PUO.readonly?i=`${l} ${this.mapOdataOperator(y)} ${_}`:(i=o>=4?`contains(${l}, ${_})`:`substringof(${_}, ${l})`,y===s.huT.notContains&&(i=`not ${i}`));""!==i&&(n.push(i.trim()),this.saveColumnFilter((0,r.getHtmlStringOutput)(l||""),p,_))}}this._odataService.updateOptions({filter:n.length>0?n.join(" and "):"",skip:void 0})}updatePagination(t,e){this._currentPagination={pageNumber:t,pageSize:e},this._gridOptions&&(this._gridOptions.enablePagination||!this._gridOptions.hasOwnProperty("enablePagination")||this.options?.infiniteScroll)&&this._odataService.updateOptions({top:e,skip:(t-1)*e})}updateSorters(t,e){let i=[];const n=[];if(!t&&e){i=e,i.forEach((t=>t.direction=t.direction.toLowerCase()));const t=i.map((t=>{const e=this._columnDefinitions.find((e=>e.id===t.columnId));return n.push({field:e?(e.queryFieldSorter||e.queryField||e.field)+"":t.columnId+"",direction:t.direction}),e?{columnId:t.columnId,sortAsc:t.direction.toUpperCase()===s.UEL.ASC}:null}));Array.isArray(t)&&this._grid&&this._grid.setSortColumns(t)}else if(t&&!e)if(0===t?.length);else if(t)for(const e of t)if(e.sortCol){let t=(e.sortCol.queryFieldSorter||e.sortCol.queryField||e.sortCol.field)+"",o=(e.sortCol.field||e.sortCol.id)+"",a=(e.sortCol.queryFieldSorter||e.sortCol.queryField||e.sortCol.field||"")+"";this._odataService.options.caseType===s.X3g.pascalCase&&(t=(0,r.titleCase)(t),o=(0,r.titleCase)(o),a=(0,r.titleCase)(a)),i.push({columnId:e.sortCol.id,direction:e.sortAsc?s.UEL.asc:s.UEL.desc}),""!==a&&n.push({field:a,direction:e.sortAsc?s.UEL.ASC:s.UEL.DESC})}i=i||[];const o=n.map((t=>{let e="";return t&&t.field&&(e=`${this._odataService.options.caseType===s.X3g.pascalCase?(0,r.titleCase)(t.field):t.field} ${t&&t.direction&&t.direction.toLowerCase()||""}`),e})).join(",");return this._odataService.updateOptions({orderBy:o}),this._currentSorters=i,this._odataService.buildQuery()}castFilterToColumnFilters(t){const e="object"==typeof t?Object.keys(t).map((e=>t[e])):t;return Array.isArray(e)?e.map((t=>{const e={columnId:t.columnId||""};return t.operator&&(e.operator=t.operator),t.targetSelector&&(e.targetSelector=t.targetSelector),Array.isArray(t.searchTerms)&&(e.searchTerms=t.searchTerms),e})):[]}filterBySearchTermRange(t,e,i){let r="";return Array.isArray(i)&&2===i.length&&(e===s.huT.rangeInclusive?(r=`(${t} ge ${i[0]}`,""!==i[1]&&(r+=` and ${t} le ${i[1]}`),r+=")"):e===s.huT.rangeExclusive&&(r=`(${t} gt ${i[0]}`,""!==i[1]&&(r+=` and ${t} lt ${i[1]}`),r+=")")),r}normalizeSearchValue(t,e,i){switch(t){case s.PUO.date:e=(0,s.Odt)(e),e=i>=4?e:`DateTime'${e}'`;break;case s.PUO.string:case s.PUO.text:case s.PUO.readonly:"string"==typeof e&&(e=e.replace(/'/g,"''"),e=`'${e=encodeURIComponent(e)}'`);break;case s.PUO.integer:case s.PUO.number:case s.PUO.float:"string"==typeof e&&(""!==(e=(e=(e=(e=(e=e.replace(/\.\./g,".")).replace(/\.+$/g,"")).replace(/^\.+/g,"0.")).replace(/^-+\.+/g,"-0.")).replace(/(?!^-)[^\d.]/g,""))&&"-"!==e||(e="0"))}return e}}},597:(t,e,i)=>{i.d(e,{Pq:()=>r,xl:()=>d});var s=i(3339);function r(t,e){return JSON.stringify(void 0!==t?t:{},e)}class n{constructor(){this.cache=new Map,this.delete=t=>this.cache.delete(t),this.has=t=>this.cache.has(t),this.set=(t,e)=>this.cache.set(t,e),this.get=t=>this.cache.get(t),this.clear=()=>this.cache.clear()}}const o=s.DI.createInterface((t=>t.singleton(n)));class a{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null,this.c=(0,s.hd)(s.p7)}withBaseUrl(t){return this.baseUrl=t,this}withDefaults(t){return this.defaults=t,this}withInterceptor(t){return this.interceptors.push(t),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:h})}withRetry(t){const e=this.c.invoke(P,[t]);return this.withInterceptor(e)}withDispatcher(t){return this.dispatcher=t,this}}function h(t){if(!t.ok)throw t;return t}const c=(t,...e)=>new Error(`AUR${String(t).padStart(4,"0")}:${e.map(String)}`),l=/^([a-z][a-z0-9+\-.]*:)?\/\//i,u=s.DI.createInterface("fetch",(t=>{if("function"!=typeof fetch)throw c(5e3);return t.instance(fetch)})),d=s.DI.createInterface("IHttpClient",(t=>t.aliasTo(p)));class p{constructor(){this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.t=[],this.i=null,this.h=(0,s.hd)((0,s.P9)(a)),this.u=(0,s.hd)(u)}get interceptors(){return this.t.slice(0)}configure(t){let e;if("object"==typeof t)e={defaults:t};else{if("function"!=typeof t)throw c(5002,typeof t);{e=this.h(),e.baseUrl=this.baseUrl,e.defaults={...this.defaults},e.interceptors=this.t,e.dispatcher=this.i;const i=t(e);if(null!=i){if("object"!=typeof i)throw c(5001,typeof i);e=i}}}const i=e.defaults;if(i?.headers instanceof Headers)throw c(5003);const s=e.interceptors;if(s?.length>0){if(s.filter((t=>t instanceof P)).length>1)throw c(5004);const t=s.findIndex((t=>t instanceof P));if(t>=0&&t!==s.length-1)throw c(5005)}return this.baseUrl=e.baseUrl,this.defaults=i,this.t=e.interceptors??[],this.i=e.dispatcher,this.isConfigured=!0,this}fetch(t,e){this.C();let i=this.buildRequest(t,e);return this.processRequest(i,this.t).then((t=>{let e;if(t instanceof Response)e=Promise.resolve(t);else{if(!(t instanceof Request))throw c(5006,t);i=t,e=this.u.call(void 0,i)}return this.processResponse(e,this.t,i)})).then((t=>t instanceof Request?this.fetch(t):t)).then((t=>(this.R(),t)),(t=>{throw this.R(),t}))}buildRequest(t,e){const i=this.defaults??{};let s,r,n;const o=function(t){const e={},i=t??{};for(const t of Object.keys(i))e[t]="function"==typeof i[t]?i[t]():i[t];return e}(i.headers);if(t instanceof Request)s=t,n=new Headers(s.headers).get("Content-Type");else{e||(e={}),r=e.body;const o=void 0!==r?{body:r}:null,a={...i,headers:{},...e,...o};n=new Headers(a.headers).get("Content-Type"),s=new Request(f(this.baseUrl,t),a)}return n||(new Headers(o).has("content-type")?s.headers.set("Content-Type",new Headers(o).get("content-type")):void 0!==r&&function(t){try{JSON.parse(t)}catch(t){return!1}return!0}(r)&&s.headers.set("Content-Type","application/json")),function(t,e){const i=e??{};for(const e of Object.keys(i))t.has(e)||t.set(e,i[e])}(s.headers,o),r instanceof Blob&&r.type&&s.headers.set("Content-Type",r.type),s}get(t,e){return this.fetch(t,e)}post(t,e,i){return this.I(t,e,i,"POST")}put(t,e,i){return this.I(t,e,i,"PUT")}patch(t,e,i){return this.I(t,e,i,"PATCH")}delete(t,e,i){return this.I(t,e,i,"DELETE")}dispose(){this.t.forEach((t=>t.dispose?.())),this.t.length=0,this.i=null}C(){this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!=this.i&&y(this.i,_.started)}R(){this.isRequesting=!! --this.activeRequestCount,this.isRequesting||null==this.i||y(this.i,_.drained)}processRequest(t,e){return this.B(t,e,"request","requestError",Request,this)}processResponse(t,e,i){return this.B(t,e,"response","responseError",Response,i,this)}B(t,e,i,s,r,...n){return(e??[]).reduce(((t,e)=>{const o=e[i],a=e[s];return t.then(o?t=>t instanceof r?o.call(e,t,...n):t:g,a?t=>a.call(e,t,...n):m)}),Promise.resolve(t))}I(t,e,i,s){return i||(i={}),i.method=s,null!=e&&(i.body=e),this.fetch(t,i)}}function f(t,e){return l.test(e)?e:(t??"")+e}function g(t){return t}function m(t){throw t}function y(t,e){const i=new t.ownerDocument.defaultView.CustomEvent(e,{bubbles:!0,cancelable:!0});setTimeout((()=>{t.dispatchEvent(i)}),1)}const _=Object.freeze({started:"aurelia-fetch-client-request-started",drained:"aurelia-fetch-client-requests-drained"}),O=s.DI.createInterface((t=>t.singleton(C))),S=Object.freeze({Set:"au:fetch:cache:set",Get:"au:fetch:cache:get",Clear:"au:fetch:cache:clear",Reset:"au:fetch:cache:reset",Dispose:"au:fetch:cache:dispose",CacheHit:"au:fetch:cache:hit",CacheMiss:"au:fetch:cache:miss",CacheStale:"au:fetch:cache:stale",CacheStaleRefreshed:"au:fetch:cache:stale:refreshed",CacheExpired:"au:fetch:cache:expired",CacheBackgroundRefreshed:"au:fetch:cache:background:refreshed",CacheBackgroundRefreshing:"au:fetch:cache:background:refreshing",CacheBackgroundStopped:"au:fetch:cache:background:stopped"});class C{constructor(){this.storage=(0,s.hd)(o),this.p=(0,s.hd)(s.r_),this.ea=(0,s.hd)(s.xe),this.q=(0,s.hd)(d),this.H=[],this.O=-1,this.j=[],this.T=new Map}subscribe(t,e){const i=this.ea.subscribe(t,e);return this.H.push(i),i}subscribeOnce(t,e){const i=this.ea.subscribeOnce(t,e);return this.H.push(i),i}setStaleTimer(t,e,i){const s=this.p.setTimeout((async()=>{this.delete(t),await this.q.get(i);const e=this.getItem(t);this.ea.publish(S.CacheStaleRefreshed,{key:t,value:e}),this.N(s)}),e);this.j.push(s)}startBackgroundRefresh(t){!t||this.O>-1||(this.O=this.p.setInterval((()=>{this.ea.publish(S.CacheBackgroundRefreshing),this.T.forEach(((t,e)=>{this.delete(e),this.q.get(t).then((()=>{const t=this.getItem(e);this.ea.publish(S.CacheBackgroundRefreshed,{key:e,value:t})}))}))}),t))}stopBackgroundRefresh(){this.p.clearInterval(this.O),this.O=-1,this.ea.publish(S.CacheBackgroundStopped)}set(t,e,i,s){const r={data:e,...i};this.setItem(t,r,s)}get(t){return this.getItem(t)?.data}setItem(t,e,i){e.lastCached=Date.now(),this.storage.set(t,e),this.T.set(t,i),this.ea.publish(S.Set,{key:t,value:e})}getItem(t){if(!this.storage.has(t))return void this.ea.publish(S.CacheMiss,{key:t});const e=this.storage.get(t);if(!e?.staleTime||!e?.lastCached)return this.ea.publish(S.CacheHit,{key:t,value:e}),e;const i=Date.now();if(i>e.lastCached+(e.staleTime??0))this.ea.publish(S.CacheStale,{key:t,value:e});else{if(!(i>e.lastCached+(e.cacheTime??0)))return this.ea.publish(S.CacheHit,{key:t,value:e}),e;this.ea.publish(S.CacheExpired,{key:t,value:e})}}delete(t){this.storage.delete(t),this.ea.publish(S.Clear,{key:t})}clear(){this.storage.clear(),this.T.clear(),this.ea.publish(S.Reset),this.stopBackgroundRefresh(),this.j.forEach((t=>{this.p.clearTimeout(t)})),this.j.length=0}dispose(){this.clear(),this.H.forEach((t=>t.dispose())),this.ea.publish(S.Dispose)}N(t){this.p.clearTimeout(t);const e=this.j.indexOf(t);e>-1&&this.j.splice(e,1)}}const v={cacheTime:3e5,staleTime:0,refreshStaleImmediate:!1,refreshInterval:0};class b{constructor(t){this.P=(0,s.hd)(O),this.cf={...v,...t??{}}}request(t){if(this.P.startBackgroundRefresh(this.cf.refreshInterval),"GET"!==t.method)return t;const e=this.P.get(this.key(t));return this.mark(e)??t}response(t,e){if(!e)return t;if(t.headers.has(b.cacheHeader))return t;const i=this.key(e);return this.P.setItem(i,{data:t,...this.cf},e),this.cf?.refreshStaleImmediate&&this.cf.staleTime>0&&this.P.setStaleTimer(i,this.cf.staleTime,e),t}dispose(){this.P.stopBackgroundRefresh()}key(t){return`${b.prefix}${t.url}`}mark(t){return t?.headers.set(b.cacheHeader,"hit"),t}}b.prefix="au:interceptor:",b.cacheHeader="x-au-fetch-cache";class T{constructor(){this.cache=(0,s.hd)(s.r_).globalThis.indexedDB,this.getStore=()=>this.database.transaction(T.cacheName,"readwrite").objectStore(T.cacheName),this.delete=t=>{this.getStore().delete(t)},this.has=t=>this.getStore().count(t).result>0,this.set=(t,e)=>this.getStore().put(e,t),this.get=t=>this.getStore().get(t).result,this.clear=()=>{const t=this.getStore();t.getAllKeys().result.forEach((e=>{t.delete(e)}))},this.database=this.cache.open(T.cacheName).result}}T.cacheName="au-cache";const w=Object.freeze({fixed:0,incremental:1,exponential:2,random:3}),I={maxRetries:3,interval:1e3,strategy:w.fixed};class P{constructor(t){if(this.p=(0,s.hd)(s.r_),this.retryConfig={...I,...t??{}},this.retryConfig.strategy===w.exponential&&this.retryConfig.interval<=1e3)throw c(5007,this.retryConfig.interval)}request(t){return t.retryConfig||(t.retryConfig={...this.retryConfig},t.retryConfig.counter=0),t.retryConfig.requestClone=t.clone(),t}response(t,e){return delete e.retryConfig,t}responseError(t,e,i){const{retryConfig:s}=e,{requestClone:r}=s;return Promise.resolve().then((()=>{if(s.counter<s.maxRetries){const n=null==s.doRetry||s.doRetry(t,e);return Promise.resolve(n).then((n=>{if(n){s.counter++;const t=function(t){const{interval:e,strategy:i,minRandomInterval:s,maxRandomInterval:r,counter:n}=t;if("function"==typeof i)return t.strategy(n);switch(i){case w.fixed:return $[w.fixed](e);case w.incremental:return $[w.incremental](n,e);case w.exponential:return $[w.exponential](n,e);case w.random:return $[w.random](n,e,s,r);default:throw c(5008,i)}}(s);return new Promise((e=>this.p.setTimeout(e,isNaN(t)?0:t))).then((()=>{const t=r.clone();return"function"==typeof s.beforeRetry?s.beforeRetry(t,i):t})).then((t=>{const e={...t,retryConfig:s};return i.fetch(e)}))}throw delete e.retryConfig,t}))}throw delete e.retryConfig,t}))}}const $=[t=>t,(t,e)=>e*t,(t,e)=>1===t?e:e**t/1e3,(t,e,i=0,s=6e4)=>Math.random()*(s-i)+i]}}]);
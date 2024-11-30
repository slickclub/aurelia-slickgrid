"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[5576],{4758:(e,t,s)=>{s.d(t,{A:()=>l});var a=s(1856),n=s.n(a),i=s(6305),r=s.n(i)()(n());r.push([e.id,".demo38 .badge{display:none}.demo38 .badge.fully-loaded{display:inline-flex}",""]);const l=r},328:(e,t,s)=>{var a=s(1856),n=s.n(a),i=s(6305);s.n(i)()(n()).push([e.id,".demo38 .badge{display:none}.demo38 .badge.fully-loaded{display:inline-flex}",""])},5576:(e,t,s)=>{s.r(t),s.d(t,{Example38:()=>F});var a={};s.r(a),s.d(a,{bindables:()=>c,default:()=>o,dependencies:()=>d,name:()=>r,register:()=>m,template:()=>l});var n=s(5959),i=s(7414);s(328);const r="example38",l='<div class="demo38">\n  <h2>\n    Example 38: OData (v4) Backend Service with Infinite Scroll\n    <span class="float-end">\n      <a style="font-size: 18px" target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example38.ts">\n        <span class="mdi mdi-link-variant"></span> code\n      </a>\n    </span>\n  </h2>\n\n  <h6 class="subtitle italic content">\n    <ul>\n      <li>\n        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position.\n        In its simplest form, the more the user scrolls down, the more rows get loaded.\n        If we reached the end of the dataset and there is no more data to load, then we\'ll assume to have the entire dataset loaded in memory.\n        This contrast with the regular Pagination approach which will only hold a single page data at a time.\n      </li>\n      <li>NOTES</li>\n      <ol>\n        <li>\n          <code>presets.pagination</code> is not supported with Infinite Scroll and will revert to the first page,\n          simply because since we keep appending data, we always have to start from index zero (no offset).\n        </li>\n        <li>\n          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next batch).\n        </li>\n        <li>\n          Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page).\n        </li>\n      </ol>\n    </ul>\n  </h6>\n\n  <div class="row">\n    <div class="col-sm-3">\n      <div class="alert alert-danger" show.bind="errorStatus" data-test="error-status">\n        <em><strong>Backend Error:</strong> <span innerhtml.bind="errorStatus"></span></em>\n      </div>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-sm-2">\n      <div class.bind="status.class" role="alert" data-test="status">\n        <strong>Status: </strong> ${status.text}\n        <span hidden.bind="!processing">\n          <i class="mdi mdi-sync mdi-spin"></i>\n        </span>\n      </div>\n    </div>\n    <div class="col-sm-10">\n      <div class="alert alert-info" data-test="alert-odata-query">\n        <strong>OData Query:</strong> <span data-test="odata-query-result">${odataQuery}</span>\n      </div>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-sm-12">\n      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-filters-sorting"\n              click.trigger="clearAllFiltersAndSorts()" title="Clear all Filters & Sorts">\n        <i class="mdi mdi-filter-remove-outline"></i>\n        Clear all Filter & Sorts\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" data-test="set-dynamic-filter"\n              click.trigger="setFiltersDynamically()">\n        Set Filters Dynamically\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" data-test="set-dynamic-sorting"\n              click.trigger="setSortingDynamically()">\n        Set Sorting Dynamically\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" data-test="group-by-gender"\n              click.trigger="groupByGender()">\n        Group by Gender\n      </button>\n\n      <div show.bind="metrics" class="mt-2" style="margin: 10px 0px">\n        <b>Metrics:</b>\n        <span>\n          <span>${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'}</span> —\n            <span data-test="itemCount">${metrics.itemCount}</span>\n            of\n            <span data-test="totalItemCount">${metrics.totalItemCount}</span>\n            items\n        </span>\n        <span class="badge rounded-pill text-bg-primary" class.bind="tagDataClass" data-test="data-loaded-tag">All Data Loaded!!!</span>\n      </div>\n    </div>\n  </div>\n\n  <aurelia-slickgrid\n    grid-id="grid38"\n    column-definitions.bind="columnDefinitions"\n    grid-options.bind="gridOptions"\n    dataset.bind="dataset"\n    instances.bind="aureliaGrid"\n    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n    on-row-count-changed.trigger="refreshMetrics($event.detail.args)">\n  </aurelia-slickgrid>\n</div>\n',o=l,d=[],c={};let u;function m(e){u||(u=i.K9.define({name:r,template:l,dependencies:d,bindables:c})),e.register(u)}var h=s(7694),g=s(6824),p=s(2566),b=s(9663),f=s(7323),y=s.n(f),w=s(5280),v=s.n(w),C=s(3452),S=s.n(C),k=s(5947),A=s.n(k),G=s(1439),x=s.n(G),z=s(1308),D=s.n(z),E=s(4758),I={};I.styleTagTransform=D(),I.setAttributes=A(),I.insert=S().bind(null,"head"),I.domAPI=v(),I.insertStyleElement=x(),y()(E.A,I),E.A&&E.A.locals&&E.A.locals,s(1376);let F=(()=>{let e,t,s=[(0,i.EM)(a)],r=[];return class{static{t=this}static{const a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,n.G4)(null,e={value:t},s,{kind:"class",name:t.name,metadata:a},null,r),t=e.value,a&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),(0,n.zF)(t,r)}http;aureliaGrid;backendService;columnDefinitions;gridOptions;dataset=[];isPageErrorTest=!1;metrics;tagDataClass="";odataQuery="";processing=!1;errorStatus="";errorStatusClass="hidden";status={text:"processing...",class:"alert alert-danger"};constructor(e=(0,g.hd)((0,g.pn)(h.xl))){this.http=e,this.backendService=new p.r,this.initializeGrid()}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columnDefinitions=[{id:"name",name:"Name",field:"name",sortable:!0,type:b.PUO.string,filterable:!0,filter:{model:b.CuW.compoundInput}},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:b.CuW.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0},{id:"category_name",name:"Category",field:"category/name",filterable:!0,sortable:!0,formatter:(e,t,s,a,n)=>n.category?.name||""}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableRowSelection:!0,enableGrouping:!0,headerMenu:{hideFreezeColumnsCommand:!1},presets:{},backendServiceApi:{service:this.backendService,options:{infiniteScroll:{fetchSize:30},enableCount:!0,version:4},onError:e=>{this.errorStatus=e.message,this.errorStatusClass="visible notification is-light is-danger is-small is-narrow",this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus="",this.errorStatusClass="hidden",this.displaySpinner(!0)},process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics=e.metrics,this.displaySpinner(!1),this.getCustomerCallback(e)}}}}displaySpinner(e,t){this.processing=e,this.status=t?{text:"ERROR!!!",class:"alert alert-danger"}:e?{text:"loading",class:"alert alert-warning"}:{text:"finished",class:"alert alert-success"}}getCustomerCallback(e){const t=e["@odata.count"];this.metrics.totalItemCount=t,e.infiniteScrollBottomHit?this.aureliaGrid.dataView?.addItems(e.value):(this.aureliaGrid.slickGrid?.scrollTo(0),this.dataset=e.value,this.metrics.itemCount=e.value.length),this.odataQuery=e.query}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return this.errorStatusClass="hidden",new Promise((t=>{const s=e.toLowerCase().split("&");let a=0,n=0,i="",r=100;const l={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error("Server timed out trying to retrieve data for the last page");for(const e of s){if(e.includes("$top=")&&(a=+e.substring(5),5e4===a))throw new Error("Server timed out retrieving 50,000 rows");if(e.includes("$skip=")&&(n=+e.substring(6)),e.includes("$orderby=")&&(i=e.substring(9)),e.includes("$filter=")){const t=e.substring(8).replace("%20"," ");if(t.includes("matchespattern")){const e=new RegExp("matchespattern\\(([a-zA-Z]+),\\s'%5E(.*?)'\\)","i"),s=t.match(e)||[],a=s[1].trim();l[a]={type:"matchespattern",term:"^"+s[2].trim()}}if(t.includes("contains")){const e=t.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/)||[],s=e[1].trim();l[s]={type:"substring",term:e[2].trim()}}if(t.includes("substringof")){const e=t.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/)||[],s=e[2].trim();l[s]={type:"substring",term:e[1].trim()}}for(const e of["eq","ne","le","lt","gt","ge"])if(t.includes(e)){const s=new RegExp(`([a-zA-Z ]*) ${e} '(.*?)'`).exec(t);if(Array.isArray(s)){const t=s[1].trim();l[t]={type:e,term:s[2].trim()}}}if(t.includes("startswith")&&t.includes("endswith")){const e=t.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],s=t.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],a=e[1].trim();l[a]={type:"starts+ends",term:[e[2].trim(),s[2].trim()]}}else if(t.includes("startswith")){const e=t.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],s=e[1].trim();l[s]={type:"starts",term:e[2].trim()}}else if(t.includes("endswith")){const e=t.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],s=e[1].trim();l[s]={type:"ends",term:e[2].trim()}}if(t.includes("company"))throw new Error('Server could not filter using the field "Company"')}}if(i.includes("company"))throw new Error('Server could not sort using the field "Company"');this.http.fetch("assets/data/customers_100.json").then((e=>e.json())).then((s=>{if(i?.length>0){const e=i.split(",");for(const t of e){const e=t.split(" "),a=e[0];let n=e=>e;for(const e of a.split("/")){const t=n;n=s=>t(s)[e]}switch((e[1]??"asc").toLocaleLowerCase()){case"asc":s=s.sort(((e,t)=>n(e).localeCompare(n(t))));break;case"desc":s=s.sort(((e,t)=>n(t).localeCompare(n(e))))}}}let o=n,d=s;if(l){for(const e in l)l.hasOwnProperty(e)&&(d=d.filter((t=>{const s=l[e].type,a=l[e].term;let n,i=e;if(-1!==e?.indexOf(" ")){const t=e.split(" ");i=t[t.length-1]}let r=t;for(const e of i.split("/"))n=r[e],r=n;if(n){const[e,t]=Array.isArray(a)?a:[a];switch(s){case"eq":return n.toLowerCase()===e;case"ne":return n.toLowerCase()!==e;case"le":return n.toLowerCase()<=e;case"lt":return n.toLowerCase()<e;case"gt":return n.toLowerCase()>e;case"ge":return n.toLowerCase()>=e;case"ends":return n.toLowerCase().endsWith(e);case"starts":return n.toLowerCase().startsWith(e);case"starts+ends":return n.toLowerCase().startsWith(e)&&n.toLowerCase().endsWith(t);case"substring":return n.toLowerCase().includes(e);case"matchespattern":return new RegExp(e.replaceAll("%25",".*"),"i").test(n)}}})));r=d.length}o>d.length&&(e=e.replace(`$skip=${o}`,""),o=0);const c=d.slice(o,o+a);window.setTimeout((()=>{const s={query:e};s.value=c,s["@odata.count"]=r,t(s)}),100)}))}))}groupByGender(){this.aureliaGrid?.dataView?.setGrouping({getter:"gender",formatter:e=>`Gender: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,t)=>b.Luy.string(e.value,t.value),aggregators:[new b.J2q.Sum("gemder")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.aureliaGrid?.slickGrid.setSortColumns([{columnId:"duration",sortAsc:!0}]),this.aureliaGrid?.slickGrid.invalidate()}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.aureliaGrid?.filterService.updateFilters([{columnId:"gender",searchTerms:["female"]}])}refreshMetrics(e){e?.current>=0&&(this.metrics.itemCount=this.aureliaGrid.dataView?.getFilteredItemCount()||0,this.tagDataClass=this.metrics.itemCount===this.metrics.totalItemCount?"fully-loaded":"partial-load")}setSortingDynamically(){this.aureliaGrid?.sortService.updateSorting([{columnId:"name",direction:"DESC"}])}},t})()}}]);
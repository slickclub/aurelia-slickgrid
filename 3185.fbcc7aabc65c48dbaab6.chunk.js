"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[3185],{3185:(e,t,n)=>{n.r(t),n.d(t,{Example5:()=>f});var a={};n.r(a),n.d(a,{bindables:()=>d,default:()=>l,dependencies:()=>c,name:()=>r,register:()=>p,template:()=>o});var i=n(2443),s=n(7689);const r="example5",o='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example5.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="row">\n  <div class="col-sm-9">\n    <div class="subtitle" innerhtml.bind="subTitle"></div>\n  </div>\n  <div class="col-sm-3">\n    <div class="alert alert-danger" show.bind="errorStatus" data-test="error-status">\n      <em><strong>Backend Error:</strong> <span innerhtml.bind="errorStatus"></span></em>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  <div class="col-sm-2">\n    <div class.bind="status.class" role="alert" data-test="status">\n      <strong>Status: </strong> ${status.text}\n      <span hidden.bind="!processing">\n        <i class="mdi mdi-sync mdi-spin"></i>\n      </span>\n    </div>\n  </div>\n  <div class="col-sm-10">\n    <div class="alert alert-info" data-test="alert-odata-query">\n      <strong>OData Query:</strong> <span data-test="odata-query-result">${odataQuery}</span>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  <div class="col-sm-4">\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter"\n            click.trigger="setFiltersDynamically()">\n      Set Filters Dynamically\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting"\n            click.trigger="setSortingDynamically()">\n      Set Sorting Dynamically\n    </button>\n    <br>\n    <span if.bind="metrics">\n      <b>Metrics:</b> ${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'} | ${metrics.executionTime}ms |\n      ${metrics.totalItemCount}\n      items\n    </span>\n  </div>\n\n  <div class="col-sm-8">\n    <label>OData Version: </label>\n    <span data-test="radioVersion">\n      <label class="radio-inline control-label" for="radio2">\n        <input type="radio" name="inlineRadioOptions" data-test="version2" id="radio2" checked value.bind="2"\n                click.trigger="setOdataVersion(2)"> 2\n      </label>\n      <label class="radio-inline control-label" for="radio4">\n        <input type="radio" name="inlineRadioOptions" data-test="version4" id="radio4" value.bind="4"\n                click.trigger="setOdataVersion(4)"> 4\n      </label>\n    </span>\n    <label class="checkbox-inline control-label" for="enableCount" style="margin-left: 20px">\n      <input type="checkbox" id="enableCount" data-test="enable-count" checked.bind="isCountEnabled"\n              click.trigger="changeCountEnableFlag()">\n      <span style="font-weight: bold">Enable Count</span> (add to OData query)\n    </label>\n    <label class="checkbox-inline control-label" for="enableSelect" style="margin-left: 20px">\n      <input type="checkbox" id="enableSelect" data-test="enable-select" checked.bind="isSelectEnabled"\n              click.trigger="changeEnableSelectFlag()">\n      <span style="font-weight: bold">Enable Select</span> (add to OData query)\n    </label>\n    <label class="checkbox-inline control-label" for="enableExpand" style="margin-left: 20px">\n      <input type="checkbox" id="enableExpand" data-test="enable-expand" checked.bind="isExpandEnabled"\n              click.trigger="changeEnableExpandFlag()">\n      <span style="font-weight: bold">Enable Expand</span> (add to OData query)\n    </label>\n  </div>\n</div>\n<div class="row mt-2 mb-1">\n  <div class="col-md-12">\n    <button class="btn btn-outline-danger btn-sm btn-icon" data-test="throw-page-error-btn"\n            click.trigger="throwPageChangeError()">\n      <span>Throw Error Going to Last Page... </span>\n      <i class="mdi mdi-page-last"></i>\n    </button>\n\n    <span class="ms-2">\n      <label>Programmatically go to first/last page:</label>\n      <div class="btn-group" role="group">\n        <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-first-page" click.trigger="goToFirstPage()">\n          <i class="mdi mdi-page-first"></i>\n        </button>\n        <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-last-page" click.trigger="goToLastPage()">\n          <i class="mdi mdi-page-last"></i>\n        </button>\n      </div>\n    </span>\n  </div>\n</div>\n\n<aurelia-slickgrid grid-id="grid5"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    pagination-options.bind="paginationOptions"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-grid-state-changed.trigger="gridStateChanged($event.detail)"\n                    on-before-sort.trigger="handleOnBeforeSort($event)"\n                    on-before-search-change.trigger="handleOnBeforeSearchChange($event)"\n                    on-before-pagination-change.trigger="handleOnBeforePaginationChange($event)">\n</aurelia-slickgrid>\n',l=o,c=[],d={};let u;function p(e){u||(u=s.K94.define({name:r,template:o,dependencies:c,bindables:d})),e.register(u)}var g=n(597),h=n(3339),b=n(1011),m=n(857);n(7375);let f=(()=>{let e,t,n=[(0,s.EMX)(a)],r=[];return class{static{t=this}static{const a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,i.G4)(null,e={value:t},n,{kind:"class",name:t.name,metadata:a},null,r),t=e.value,a&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),(0,i.zF)(t,r)}http;title="Example 5: Grid with Backend OData Service";subTitle='\n    Use it when you need to support Pagination with a OData endpoint (for simple JSON, use a regular grid)<br/>\n    Take a look at the (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/backend-services/odata" target="_blank">Wiki documentation</a>)\n    <br/>\n    <ul class="small">\n      <li>Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported</li>\n      <li>This example also demos the Grid State feature, open the console log to see the changes</li>\n      <li>String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)\n      <ul>\n        <li>The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")</li>\n        <li>The other operators can be used on column type number for example: ">=100" (greater than or equal to 100)</li>\n      </ul>\n      <li>OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)</li>\n      <li>You can also preload a grid with certain "presets" like Filters / Sorters / Pagination <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grid-state-preset" target="_blank">Wiki - Grid Preset</a>\n      <li><span class="text-danger">NOTE:</span> For demo purposes, the last column (filter & sort) will always throw an\n        error and its only purpose is to demo what would happen when you encounter a backend server error\n        (the UI should rollback to previous state before you did the action).\n        Also changing Page Size to 50,000 will also throw which again is for demo purposes.\n      </li>\n    </ul>\n  ';aureliaGrid;columnDefinitions=[];gridOptions;dataset=[];metrics;paginationOptions;isCountEnabled=!0;isSelectEnabled=!1;isExpandEnabled=!1;odataVersion=2;odataQuery="";processing=!1;errorStatus="";isPageErrorTest=!1;status={text:"",class:""};constructor(e=(0,h.hd)((0,h.pn)(g.xl))){this.http=e,this.defineGrid()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"name",name:"Name",field:"name",sortable:!0,type:m.PUO.string,filterable:!0,filter:{model:m.CuW.compoundInput,compoundOperatorList:[{operator:"",desc:"Contains"},{operator:"<>",desc:"Not Contains"},{operator:"=",desc:"Equals"},{operator:"!=",desc:"Not equal to"},{operator:"a*",desc:"Starts With"},{operator:"Custom",desc:"SQL Like"}]}},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:m.CuW.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0},{id:"category_name",name:"Category",field:"category/name",filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},compoundOperatorAltTexts:{text:{Custom:{operatorAlt:"%%",descAlt:"SQL Like"}}},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableRowSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500,5e4],pageSize:20,totalItems:0},presets:{filters:[{columnId:"gender",searchTerms:["male"],operator:m.huT.equal}],sorters:[{columnId:"name",direction:"asc"}],pagination:{pageNumber:2,pageSize:20}},backendServiceApi:{service:new b.r,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,filterQueryOverride:({fieldName:e,columnDef:t,columnFilterOperator:n,searchValues:a})=>{if(n===m.huT.custom&&"name"===t?.id){let t=a[0].replace(/\*/g,".*");return t=t.slice(0,1)+"%5E"+t.slice(1),t=t.slice(0,-1)+"$'",`matchesPattern(${e}, ${t})`}},version:this.odataVersion},onError:e=>{console.log("ERROR",e),this.errorStatus=e.message,this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus="",this.displaySpinner(!0)},process:e=>this.getCustomerApiCall(e),postProcess:e=>{this.metrics=e.metrics,this.displaySpinner(!1),this.getCustomerCallback(e)}}}}displaySpinner(e,t){this.processing=e,this.status=t?{text:"ERROR!!!",class:"alert alert-danger"}:e?{text:"loading",class:"alert alert-warning"}:{text:"finished",class:"alert alert-success"}}getCustomerCallback(e){let t=e.totalRecordCount;this.isCountEnabled&&(t=4===this.odataVersion?e["@odata.count"]:e.d.__count),this.metrics&&(this.metrics.totalItemCount=t),this.paginationOptions={...this.gridOptions.pagination,totalItems:t},this.dataset=4===this.odataVersion?e.value:e.d.results,this.odataQuery=e.query}getCustomerApiCall(e){return this.getCustomerDataApiMock(e)}getCustomerDataApiMock(e){return new Promise((t=>{const n=e.toLowerCase().split("&");let a,i=0,s="",r=100;const o={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error("Server timed out trying to retrieve data for the last page");for(const e of n){if(e.includes("$top=")&&(a=+e.substring(5),5e4===a))throw new Error("Server timed out retrieving 50,000 rows");if(e.includes("$skip=")&&(i=+e.substring(6)),e.includes("$orderby=")&&(s=e.substring(9)),e.includes("$filter=")){const t=e.substring(8).replace("%20"," ");if(t.includes("matchespattern")){const e=new RegExp("matchespattern\\(([a-zA-Z]+),\\s'%5E(.*?)'\\)","i"),n=t.match(e),a=n[1].trim();o[a]={type:"matchespattern",term:"^"+n[2].trim()}}if(t.includes("contains")){const e=t.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),n=e[1].trim();o[n]={type:"substring",term:e[2].trim()}}if(t.includes("substringof")){const e=t.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),n=e[2].trim();o[n]={type:"substring",term:e[1].trim()}}for(const e of["eq","ne","le","lt","gt","ge"])if(t.includes(e)){const n=new RegExp(`([a-zA-Z ]*) ${e} '(.*?)'`).exec(t);if(Array.isArray(n)){const t=n[1].trim();o[t]={type:e,term:n[2].trim()}}}if(t.includes("startswith")&&t.includes("endswith")){const e=t.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],n=t.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],a=e[1].trim();o[a]={type:"starts+ends",term:[e[2].trim(),n[2].trim()]}}else if(t.includes("startswith")){const e=t.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),n=e[1].trim();o[n]={type:"starts",term:e[2].trim()}}else if(t.includes("endswith")){const e=t.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),n=e[1].trim();o[n]={type:"ends",term:e[2].trim()}}if(t.includes("company"))throw new Error('Server could not filter using the field "Company"')}}if(s.includes("company"))throw new Error('Server could not sort using the field "Company"');this.http.fetch("assets/data/customers_100.json").then((e=>e.json())).then((n=>{if(s?.length>0){const e=s.split(",");for(const t of e){const e=t.split(" "),a=e[0];let i=e=>e;for(const e of a.split("/")){const t=i;i=n=>t(n)[e]}switch((e[1]??"asc").toLocaleLowerCase()){case"asc":n=n.sort(((e,t)=>i(e).localeCompare(i(t))));break;case"desc":n=n.sort(((e,t)=>i(t).localeCompare(i(e))))}}}let l=i,c=n;if(o){for(const e in o)o.hasOwnProperty(e)&&(c=c.filter((t=>{const n=o[e].type,a=o[e].term;let i,s=e;if(-1!==e?.indexOf(" ")){const t=e.split(" ");s=t[t.length-1]}let r=t;for(const e of s.split("/"))i=r[e],r=i;if(i){const[e,t]=Array.isArray(a)?a:[a];switch(n){case"eq":return i.toLowerCase()===e;case"ne":return i.toLowerCase()!==e;case"le":return i.toLowerCase()<=e;case"lt":return i.toLowerCase()<e;case"gt":return i.toLowerCase()>e;case"ge":return i.toLowerCase()>=e;case"ends":return i.toLowerCase().endsWith(e);case"starts":return i.toLowerCase().startsWith(e);case"starts+ends":return i.toLowerCase().startsWith(e)&&i.toLowerCase().endsWith(t);case"substring":return i.toLowerCase().includes(e);case"matchespattern":return new RegExp(e.replaceAll("%25",".*"),"i").test(i)}}})));r=c.length}l>c.length&&(e=e.replace(`$skip=${l}`,""),l=0);const d=c.slice(l,l+a);setTimeout((()=>{const n={query:e};this.isCountEnabled||(n.totalRecordCount=r),4===this.odataVersion?(n.value=d,this.isCountEnabled&&(n["@odata.count"]=r)):(n.d={results:d},this.isCountEnabled&&(n.d.__count=r)),t(n)}),150)}))}))}goToFirstPage(){this.aureliaGrid.paginationService.goToFirstPage()}goToLastPage(){this.aureliaGrid.paginationService.goToLastPage()}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e.change)}setFiltersDynamically(){this.aureliaGrid.filterService.updateFilters([{columnId:"name",searchTerms:["A"],operator:"a*"}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"name",direction:"DESC"}])}throwPageChangeError(){this.isPageErrorTest=!0,this.aureliaGrid?.paginationService?.goToLastPage()}handleOnBeforeSort(){return!0}handleOnBeforeSearchChange(){return!0}handleOnBeforePaginationChange(){return!0}changeCountEnableFlag(){return this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(e){return this.odataVersion=e,this.resetOptions({version:this.odataVersion}),!0}resetOptions(e){this.displaySpinner(!0);const t=this.gridOptions.backendServiceApi.service;t.updateOptions(e),t.clearFilters(),this.aureliaGrid?.filterService.clearFilters()}},t})()}}]);
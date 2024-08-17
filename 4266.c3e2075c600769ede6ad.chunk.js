"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[4266],{4266:(e,t,a)=>{a.r(t),a.d(t,{Example17:()=>w});var i={};a.r(i),a.d(i,{bindables:()=>h,default:()=>l,dependencies:()=>d,name:()=>s,register:()=>m,template:()=>o});var n=a(2443),r=a(7689);const s="example17",o='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example17.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<hr>\n\n<div class="col-md-6"\n      style="margin-bottom: 15px">\n  <label>Octopart Catalog Search <small>(throttle search to 1.5sec)</small></label>\n  <input type="text"\n          class="form-control"\n          value.bind="search & throttle:1500">\n</div>\n\n<div class="alert alert-danger col-md-7" role="alert">\n  <strong>Note:</strong>\n  this demo no longer displays any results because the WebAPI Key to connect and query the <b>Octopart Component\n    Search</b> is no longer valid. However the concept remains valid, which is to use your own Custom DataView\n  instead of the default SlickGrid DataView used by this library.\n</div>\n\n<div class="alert alert-warning col-md-6"\n      role="alert"\n      if.bind="loading">\n  <i class="mdi mdi-sync mdi-spin"></i>\n  <span>Loading...</span>\n</div>\n\n<aurelia-slickgrid grid-id="grid1"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    custom-data-view.bind="customDataView"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-viewport-changed.trigger="onViewportChanged()"\n                    on-sort.trigger="onSort($event.detail.eventData, $event.detail.args)">\n</aurelia-slickgrid>\n',l=o,d=[],h={};let c;function m(e){c||(c=r.K94.define({name:s,template:o,dependencies:d,bindables:h})),e.register(c)}var g=a(9393),u=a(857);a(7375);const b=(e,t,a,i,n)=>n&&n.brand&&n.brand.name||"",p=(e,t,a,i,n)=>{let r="";return n&&n.octopart_url&&n.mpn&&(r=`<a href="${n.octopart_url}" target="_blank">${n.mpn}</a>`),r};let w=(()=>{let e,t,a,s=[(0,r.EMX)(i)],o=[],l=[],d=[];return class{static{t=this}static{const i="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;a=[(0,r._tP)({mode:g.Zm.twoWay})],(0,n.G4)(null,null,a,{kind:"field",name:"search",static:!1,private:!1,access:{has:e=>"search"in e,get:e=>e.search,set:(e,t)=>{e.search=t}},metadata:i},l,d),(0,n.G4)(null,e={value:t},s,{kind:"class",name:t.name,metadata:i},null,o),t=e.value,i&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),(0,n.zF)(t,o)}search=(0,n.zF)(this,l,"");_eventHandler=((0,n.zF)(this,d),new u.JD8);title="Example 17: Octopart Catalog Search - Remote Model Plugin";subTitle='\n    This example demonstrates how to use "slick.remotemodel.js" or any Remote implementation through an external Remote Service\n    <ul>\n      <li>Your browser might block access to the Octopart query, if you get "block content" then just unblock it.</li>\n      <li>If the demo throws some errors, try again later (there\'s a limit per day).</li>\n      <li>\n        Uses <a href="https://github.com/6pac/SlickGrid/blob/master/slick.remotemodel.js" target="_blank">slick.remotemodel.js</a>\n        which is hooked up to load search results from Octopart, but can easily be extended\n        to support any JSONP-compatible backend that accepts paging parameters.\n      </li>\n      <li>\n        This demo implements a custom DataView, however please note that you are on your own to implement all necessary DataView methods\n        for Sorting, Filtering, etc...\n      </li>\n      <li>\n        Soure code for this example is available <a href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/doc/github-demo/src/examples/slickgrid/example17.ts" target="_blank">here</a>\n      </li>\n    </ul>\n  ';aureliaGrid;columnDefinitions=[];customDataView;dataset=[];gridObj;gridOptions;loaderDataView;loading=!1;constructor(){this.defineGrid()}attached(){this.hookAllLoaderEvents()}detaching(){this._eventHandler.unsubscribeAll()}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e.slickGrid,setTimeout((()=>this.searchChanged(this.search)),100)}defineGrid(){this.columnDefinitions=[{id:"mpn",name:"MPN",field:"mpn",formatter:p,width:100,sortable:!0},{id:"brand",name:"Brand",field:"brand.name",formatter:b,width:100,sortable:!0},{id:"short_description",name:"Description",field:"short_description",width:520}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableCellNavigation:!0,enableColumnReorder:!1,enableGridMenu:!1,multiColumnSort:!1}}hookAllLoaderEvents(){this._eventHandler&&this._eventHandler.subscribe&&this.loaderDataView&&this.loaderDataView.onDataLoading&&this.loaderDataView.onDataLoaded&&(this._eventHandler.subscribe(this.loaderDataView.onDataLoading,(()=>this.loading=!0)),this._eventHandler.subscribe(this.loaderDataView.onDataLoaded,((e,t)=>{if(t&&this.gridObj&&this.gridObj.invalidateRow&&this.gridObj.updateRowCount&&this.gridObj.render){for(let e=t.from;e<=t.to;e++)this.gridObj.invalidateRow(e);this.gridObj.updateRowCount(),this.gridObj.render(),this.loading=!1}})))}searchChanged(e){if(e&&this.gridObj&&this.gridObj.getViewport&&this.loaderDataView&&this.loaderDataView.ensureData&&this.loaderDataView.setSearch){const t=this.gridObj.getViewport();this.loaderDataView.setSearch(e),this.loaderDataView.ensureData(t.top,t.bottom)}}onSort(e,t){if(this.gridObj&&this.gridObj.getViewport&&this.loaderDataView&&this.loaderDataView.ensureData&&this.loaderDataView.setSort){const e=this.gridObj.getViewport();t&&t.sortCol&&t.sortCol.field&&this.loaderDataView.setSort(t.sortCol.field,t.sortAsc?1:-1),this.loaderDataView.ensureData(e.top,e.bottom)}}onViewportChanged(){if(this.gridObj&&this.gridObj.getViewport&&this.loaderDataView&&this.loaderDataView.ensureData){const e=this.gridObj.getViewport();this.loaderDataView.ensureData(e.top,e.bottom)}}},t})()}}]);
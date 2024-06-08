"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[248],{8229:(e,t,i)=>{i.d(t,{A:()=>o});var a=i(7526),n=i.n(a),l=i(8967),r=i.n(l)()(n());r.push([e.id,".alert{padding:8px;margin-bottom:10px}.col-sm-1{max-width:70px}",""]);const o=r},5248:(e,t,i)=>{i.r(t),i.d(t,{Example10:()=>T});var a={};i.r(a),i.d(a,{bindables:()=>c,default:()=>s,dependencies:()=>d,name:()=>r,register:()=>p,template:()=>o});var n=i(109),l=i(8229);const r="example10",o='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example10.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<div class="row">\n  <div class="col-sm-4" style="max-width: 205px;">\n    Pagination\n    <div class="btn-group" role="group">\n      <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-first-page"\n              click.trigger="goToGrid1FirstPage()">\n        <i class="mdi mdi-page-first"></i>\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-last-page" click.trigger="goToGrid1LastPage()">\n        <i class="mdi mdi-page-last icon"></i>\n      </button>\n    </div>\n  </div>\n  <div class="col-sm-8">\n    <div class="alert alert-success">\n      <strong>(single select) Selected Row:</strong>\n      <span innerhtml.bind="selectedTitle"\n            data-test="grid1-selections"></span>\n    </div>\n  </div>\n</div>\n\n<div class="overflow-hidden">\n  <aurelia-slickgrid grid-id="grid1"\n                      column-definitions.bind="columnDefinitions1"\n                      grid-options.bind="gridOptions1"\n                      dataset.bind="dataset1"\n                      on-aurelia-grid-created.trigger="aureliaGrid1Ready($event.detail)"\n                      on-grid-state-changed.trigger="grid1StateChanged($event.detail)"\n                      on-selected-rows-changed.trigger="onGrid1SelectedRowsChanged($event.detail.eventData, $event.detail.args)">\n  </aurelia-slickgrid>\n</div>\n\n<hr class="col-md-6 offset-md-1">\n\n<div class="row">\n  <div class="col-sm-4 col-md-3" style="max-width: 215px;">\n    <label for="enableGrid2Pagination">\n      Pagination:\n      <input type="checkbox" id="enableGrid2Pagination"\n              checked.bind="isGrid2WithPagination"\n              data-test="toggle-pagination-grid2" />\n    </label>\n    <span style="margin-left: 5px" if.bind="isGrid2WithPagination">\n      <div class="btn-group" role="group">\n        <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-first-page"\n                click.trigger="goToGrid2FirstPage()">\n          <i class="mdi mdi-page-first"></i>\n        </button>\n        <button class="btn btn-outline-secondary btn-xs btn-icon px-2" data-test="goto-last-page"\n                click.trigger="goToGrid2LastPage()">\n          <i class="mdi mdi-page-last icon"></i>\n        </button>\n      </div>\n    </span>\n  </div>\n  <div class="col-sm-8">\n    <div class="alert alert-success">\n      <strong>(multi-select) Selected Row(s):</strong>\n      <span innerhtml.bind="selectedTitles"\n            data-test="grid2-selections"></span>\n    </div>\n  </div>\n</div>\n\n<div class="overflow-hidden">\n  <aurelia-slickgrid grid-id="grid2"\n                      column-definitions.bind="columnDefinitions2"\n                      grid-options.bind="gridOptions2"\n                      dataset.bind="dataset2"\n                      on-aurelia-grid-created.trigger="aureliaGrid2Ready($event.detail)"\n                      on-grid-state-changed.trigger="grid2StateChanged($event.detail)">\n  </aurelia-slickgrid>\n</div>\n',s=o,d=[],c=[];let g;function p(e){g||(g=n.K94.define({name:r,template:o,dependencies:d,bindables:c})),e.register(g)}var b=i(550),m=i(3957),u=i.n(m),h=i(1794),f=i.n(h),v=i(8866),S=i.n(v),k=i(621),G=i.n(k),P=i(3897),y=i.n(P),w=i(5462),x=i.n(w),C={};C.styleTagTransform=x(),C.setAttributes=G(),C.insert=S().bind(null,"head"),C.domAPI=f(),C.insertStyleElement=y(),u()(l.A,C),l.A&&l.A.locals&&l.A.locals,i(8635);class T{title="Example 10: Multiple Grids with Row Selection";subTitle='\n    Row selection, single or multi-select (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/row-selection" target="_blank">Wiki docs</a>).\n    <ul>\n      <li>Single Select, you can click on any cell to make the row active</li>\n      <li>Multiple Selections, you need to specifically click on the checkbox to make 1 or more selections</li>\n      <li>NOTE: Any Row Selection(s) will be reset when using Pagination and changing Page (you will need to set it back manually if you want it back)</li>\n    </ul>\n  ';isGrid2WithPagination=!0;aureliaGrid1;aureliaGrid2;columnDefinitions1=[];columnDefinitions2=[];gridOptions1;gridOptions2;dataset1=[];dataset2=[];selectedTitles="";selectedTitle="";selectedGrid2IDs=[];constructor(){this.defineGrids()}attached(){this.dataset1=this.prepareData(495),this.dataset2=this.prepareData(525)}aureliaGrid1Ready(e){this.aureliaGrid1=e}aureliaGrid2Ready(e){this.aureliaGrid2=e}defineGrids(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0,type:b.PUO.string,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:b.PUO.number,filterable:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:b._tQ.percentCompleteBar,type:b.PUO.number,filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",formatter:b._tQ.dateIso,exportWithFormatter:!0,type:b.PUO.date,filterable:!0,sortable:!0,filter:{model:b.CuW.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:b._tQ.dateIso,exportWithFormatter:!0,type:b.PUO.date,filterable:!0,sortable:!0,filter:{model:b.CuW.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:b._tQ.checkmarkMaterial,type:b.PUO.boolean,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"true"},{value:!1,label:"false"}],model:b.CuW.singleSelect}}],this.columnDefinitions2=[{id:"title",name:"Title",field:"title",sortable:!0,type:b.PUO.string,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:b.PUO.number,filterable:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:b._tQ.percentCompleteBar,type:b.PUO.number,filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",formatter:b._tQ.dateIso,exportWithFormatter:!0,type:b.PUO.date,filterable:!0,sortable:!0,filter:{model:b.CuW.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:b._tQ.dateIso,exportWithFormatter:!0,type:b.PUO.date,filterable:!0,sortable:!0,filter:{model:b.CuW.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:b._tQ.checkmarkMaterial,type:b.PUO.boolean,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"true"},{value:!1,label:"false"}],model:b.CuW.singleSelect}}],this.gridOptions1={enableAutoResize:!1,enableCellNavigation:!0,enableRowSelection:!0,enableCheckboxSelector:!0,enableFiltering:!0,checkboxSelector:{hideSelectAllCheckbox:!0},multiSelect:!1,rowSelectionOptions:{selectActiveRow:!0},columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0},gridHeight:225,gridWidth:800,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{pagination:{pageNumber:2,pageSize:5}}},this.gridOptions2={enableAutoResize:!1,enableCellNavigation:!0,enableFiltering:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,applySelectOnAllPages:!0},rowSelectionOptions:{selectActiveRow:!1},enableCheckboxSelector:!0,enableRowSelection:!0,gridHeight:255,gridWidth:800,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{rowSelection:{dataContextIds:[3,12,13,522]}}}}prepareData(e){const t=[];for(let i=0;i<e;i++){const e=2e3+Math.floor(10*Math.random()),a=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),l=Math.round(100*Math.random());t[i]={id:i,title:"Task "+i,duration:Math.round(100*Math.random())+"",percentComplete:l,percentCompleteNumber:l,start:new Date(e,a,n),finish:new Date(e,a+1,n),effortDriven:i%5==0}}return t}goToGrid1FirstPage(){this.aureliaGrid1.paginationService.goToFirstPage()}goToGrid1LastPage(){this.aureliaGrid1.paginationService.goToLastPage()}goToGrid2FirstPage(){this.aureliaGrid2.paginationService.goToFirstPage()}goToGrid2LastPage(){this.aureliaGrid2.paginationService.goToLastPage()}grid1StateChanged(e){console.log("Grid State changed:: ",e),console.log("Grid State changed:: ",e.change)}grid2StateChanged(e){console.log("Grid State changed:: ",e),console.log("Grid State changed:: ",e.change),e.gridState.rowSelection&&(this.selectedGrid2IDs=e.gridState.rowSelection.filteredDataContextIds||[],this.selectedGrid2IDs=this.selectedGrid2IDs.sort(((e,t)=>e-t)),this.selectedTitles=this.selectedGrid2IDs.map((e=>`Task ${e}`)).join(","),this.selectedTitles.length>293&&(this.selectedTitles=this.selectedTitles.substring(0,293)+"..."))}isGrid2WithPaginationChanged(){this.aureliaGrid2.paginationService.togglePaginationVisibility(this.isGrid2WithPagination)}onGrid1SelectedRowsChanged(e,t){const i=t&&t.grid;Array.isArray(t.rows)&&(this.selectedTitle=t.rows.map((e=>{const t=i.getDataItem(e);return t&&t.title||""})))}}n.K94.define({...a,bindables:[...c,"isGrid2WithPagination"]},T)}}]);
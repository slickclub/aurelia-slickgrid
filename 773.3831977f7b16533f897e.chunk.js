"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[773],{2773:(t,e,r)=>{r.r(e),r.d(e,{Example13:()=>b});var n={};r.r(n),r.d(n,{bindables:()=>c,default:()=>l,dependencies:()=>s,name:()=>a,register:()=>u,template:()=>i});var o=r(109);const a="example13",i='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example13.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="row">\n  <div class="col-sm-12">\n    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="add-500-rows-btn" click.trigger="loadData(500)">\n      500 rows\n    </button>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="add-50k-rows-btn" click.trigger="loadData(50000)">\n      50k rows\n    </button>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="clear-grouping-btn" click.trigger="clearGrouping()">\n      <i class="mdi mdi-close"></i> Clear grouping\n    </button>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="collapse-all-btn"\n            click.trigger="collapseAllGroups()">\n      <i class="mdi mdi-arrow-collapse"></i> Collapse all groups\n    </button>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="expand-all-btn" click.trigger="expandAllGroups()">\n      <i class="mdi mdi-arrow-expand"></i> Expand all groups\n    </button>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="export-excel-btn" click.trigger="exportToExcel()">\n      <i class="mdi mdi-file-excel-outline text-success"></i> Export to Excel\n    </button>\n  </div>\n</div>\n\n<hr />\n\n<div class="row">\n  <div class="col-sm-12">\n    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="group-duration-sort-value-btn"\n            click.trigger="groupByDuration()">\n      Group by Duration &amp; sort groups by value\n    </button>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="group-duration-sort-count-btn"\n            click.trigger="groupByDurationOrderByCount(false)">\n      Group by Duration &amp; sort groups by count\n    </button>\n  </div>\n  <div class="row">\n    <div class="col-sm-12">\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="group-duration-sort-count-collapse-btn"\n              click.trigger="groupByDurationOrderByCount(true)">\n        Group by Duration &amp; sort groups by count, aggregate collapsed\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="group-duration-effort-btn"\n              click.trigger="groupByDurationEffortDriven()">\n        Group by Duration then Effort-Driven\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="group-duration-effort-percent-btn"\n              click.trigger="groupByDurationEffortDrivenPercent()">\n        Group by Duration then Effort-Driven then Percent.\n      </button>\n      <span hidden.bind="!processing">\n        <i class="mdi mdi-sync mdi-spin"></i>\n      </span>\n    </div>\n  </div>\n</div>\n\n<aurelia-slickgrid grid-id="grid13"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-before-export-to-excel.trigger="processing = true"\n                    on-after-export-to-excel.trigger="processing = false"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)">\n</aurelia-slickgrid>\n',l=i,s=[],c=[];let d;function u(t){d||(d=o.K94.define({name:a,template:i,dependencies:s,bindables:c})),t.register(d)}var p=r(3095),g=r(9916),m=r(550);r(8635);class b{title="Example 13: Grouping & Aggregators";subTitle='\n    <ul>\n      <li><a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grouping-aggregators" target="_blank">Wiki docs</a></li>\n      <li>Fully dynamic and interactive multi-level grouping with filtering and aggregates over 50\'000 items</li>\n      <li>Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows)..</li>\n      <li>Use "Aggregators" and "GroupTotalFormatters" directly from Aurelia-Slickgrid</li>\n    </ul>\n  ';aureliaGrid;columnDefinitions=[];gridOptions;dataset=[];dataviewObj;gridObj;processing=!1;excelExportService=new p.N;textExportService=new g.f;constructor(){this.defineGrid()}attached(){this.loadData(500)}aureliaGridReady(t){this.aureliaGrid=t,this.dataviewObj=t.dataView,this.gridObj=t.slickGrid}defineGrid(){this.columnDefinitions=[{id:"sel",name:"#",field:"num",width:40,type:m.PUO.number,excludeFromExport:!0,maxWidth:70,resizable:!0,filterable:!0,selectable:!1,focusable:!1},{id:"title",name:"Title",field:"title",width:50,minWidth:50,cssClass:"cell-title",filterable:!0,sortable:!0},{id:"duration",name:"Duration",field:"duration",minWidth:50,width:60,filterable:!0,filter:{model:m.CuW.slider,operator:">="},sortable:!0,type:m.PUO.number,groupTotalsFormatter:m.tao.sumTotals,params:{groupFormatterPrefix:"Total: "}},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:70,width:90,formatter:m._tQ.percentCompleteBar,filterable:!0,filter:{model:m.CuW.compoundSlider},sortable:!0,type:m.PUO.number,groupTotalsFormatter:m.tao.avgTotalsPercentage,params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"start",name:"Start",field:"start",minWidth:60,maxWidth:130,filterable:!0,filter:{model:m.CuW.compoundDate},sortable:!0,type:m.PUO.dateIso,formatter:m._tQ.dateIso,exportWithFormatter:!0},{id:"finish",name:"Finish",field:"finish",minWidth:60,maxWidth:130,filterable:!0,filter:{model:m.CuW.compoundDate},sortable:!0,type:m.PUO.dateIso,formatter:m._tQ.dateIso,exportWithFormatter:!0},{id:"cost",name:"Cost",field:"cost",minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:m.CuW.compoundInputNumber},type:m.PUO.number,formatter:m._tQ.currency,groupTotalsFormatter:m.tao.sumTotalsCurrency,params:{displayNegativeNumberWithParentheses:!0,currencyPrefix:"€",groupFormatterCurrencyPrefix:"€",minDecimal:2,maxDecimal:4,groupFormatterPrefix:"<b>Total</b>: "},excelExportOptions:{style:{font:{outline:!0,italic:!0},format:"€0.00##;[Red](€0.00##)"},width:18},groupTotalsExcelExportOptions:{style:{alignment:{horizontal:"center"},font:{bold:!0,color:"FF005289",underline:"single",fontName:"Consolas",size:10},fill:{type:"pattern",patternType:"solid",fgColor:"FFE6F2F6"},border:{top:{color:"FFa500ff",style:"thick"},left:{color:"FFa500ff",style:"medium"},right:{color:"FFa500ff",style:"dotted"},bottom:{color:"FFa500ff",style:"double"}},format:'"Total: "€0.00##;[Red]"Total: "(€0.00##)'}}},{id:"effortDriven",name:"Effort Driven",minWidth:30,width:80,maxWidth:90,cssClass:"cell-effort-driven",field:"effortDriven",formatter:m._tQ.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:m.CuW.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableGrouping:!0,enableExcelExport:!0,enableTextExport:!0,excelExportOptions:{sanitizeDataExport:!0},textExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.textExportService],showCustomFooter:!0,customFooterOptions:{hideMetrics:!1,hideTotalItemCount:!1,hideLastUpdateTimestamp:!1}}}loadData(t){const e=[];for(let r=0;r<t;r++){const t=2e3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),o=Math.floor(29*Math.random()),a=Math.round(100*Math.random()),i=r%33==0?null:Math.round(1e4*Math.random())/100;e[r]={id:"id_"+r,num:r,title:"Task "+r,duration:Math.round(100*Math.random())+"",percentComplete:a,percentCompleteNumber:a,start:new Date(t,n,o),finish:new Date(t,n+1,o),cost:r%3?i:null!==i?-i:null,effortDriven:r%5==0}}this.dataset=e}clearGrouping(){this.dataviewObj.setGrouping([])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:m.ptE.xlsx})}exportToCsv(t="csv"){this.textExportService.exportToFile({delimiter:"csv"===t?m.IQ1.comma:m.IQ1.tab,filename:"myExport",format:"csv"===t?m.ptE.csv:m.ptE.txt})}groupByDuration(){this.dataviewObj.setGrouping({getter:"duration",formatter:t=>`Duration: ${t.value} <span style="color:green">(${t.count} items)</span>`,comparer:(t,e)=>m.Luy.numeric(t.value,e.value,m.Lo1.asc),aggregators:[new m.J2q.Avg("percentComplete"),new m.J2q.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.aureliaGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:!0}]),this.gridObj.invalidate()}groupByDurationOrderByCount(t){this.aureliaGrid.filterService.setSortColumnIcons([]),this.dataviewObj.setGrouping({getter:"duration",formatter:t=>`Duration: ${t.value} <span style="color:green">(${t.count} items)</span>`,comparer:(t,e)=>t.count-e.count,aggregators:[new m.J2q.Avg("percentComplete"),new m.J2q.Sum("cost")],aggregateCollapsed:t,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){this.aureliaGrid.filterService.setSortColumnIcons([]),this.dataviewObj.setGrouping([{getter:"duration",formatter:t=>`Duration: ${t.value}  <span style="color:green">(${t.count} items)</span>`,aggregators:[new m.J2q.Sum("duration"),new m.J2q.Sum("cost")],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:"effortDriven",formatter:t=>`Effort-Driven: ${t.value?"True":"False"} <span style="color:green">(${t.count} items)</span>`,aggregators:[new m.J2q.Avg("percentComplete"),new m.J2q.Sum("cost")],collapsed:!0,lazyTotalsCalculation:!0}]),this.aureliaGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:!0},{columnId:"effortDriven",sortAsc:!0}]),this.gridObj.invalidate()}groupByDurationEffortDrivenPercent(){this.aureliaGrid.filterService.setSortColumnIcons([]),this.dataviewObj.setGrouping([{getter:"duration",formatter:t=>`Duration: ${t.value}  <span style="color:green">(${t.count} items)</span>`,aggregators:[new m.J2q.Sum("duration"),new m.J2q.Sum("cost")],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:"effortDriven",formatter:t=>`Effort-Driven: ${t.value?"True":"False"}  <span style="color:green">(${t.count} items)</span>`,aggregators:[new m.J2q.Sum("duration"),new m.J2q.Sum("cost")],lazyTotalsCalculation:!0},{getter:"percentComplete",formatter:t=>`% Complete: ${t.value}  <span style="color:green">(${t.count} items)</span>`,aggregators:[new m.J2q.Avg("percentComplete")],aggregateCollapsed:!0,collapsed:!0,lazyTotalsCalculation:!0}]),this.aureliaGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:!0},{columnId:"effortDriven",sortAsc:!0},{columnId:"percentComplete",sortAsc:!0}]),this.gridObj.invalidate()}}o.K94.define(n,b)}}]);
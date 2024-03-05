"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[197],{95892:(e,i,n)=>{n.d(i,{A:()=>o});var t=n(54355),a=n.n(t),r=n(84428),l=n.n(r)()(a());l.push([e.id,".slick-row .slick-cell.frozen:last-child,.slick-headerrow-column.frozen:last-child,.slick-footerrow-column.frozen:last-child{border-right:1px solid #969696 !important}.slick-pane-bottom{border-top:1px solid #969696 !important}",""]);const o=l},58197:(e,i,n)=>{n.r(i),n.d(i,{Example14:()=>O});var t={};n.r(t),n.d(t,{default:()=>d,dependencies:()=>m,name:()=>o,register:()=>u,template:()=>s});var a=n(58932),r=n(66539),l=n(95892);const o="example14",s='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example14.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<h3>Grid 1 <small>(with Header Grouping &amp; Colspan)</small></h3>\n<aurelia-slickgrid grid-id="grid1"\n                    column-definitions.bind="columnDefinitions1"\n                    grid-options.bind="gridOptions1"\n                    dataset.bind="dataset1">\n</aurelia-slickgrid>\n\n<hr />\n\n<h3>Grid 2 <small>(with Header Grouping &amp; Frozen/Pinned Columns)</small></h3>\n\n<div class="col-sm 12">\n  <button class="btn btn-outline-secondary btn-sm" click.trigger="setFrozenColumns2(-1)"\n          data-test="remove-frozen-column-button">\n    <i class="fa fa-times fa-lg"></i> Remove Frozen Columns\n  </button>\n  <button class="btn btn-outline-secondary btn-sm" click.trigger="setFrozenColumns2(2)"\n          data-test="set-3frozen-columns">\n    <i class="fa fa-thumb-tack fa-lg"></i> Set 3 Frozen Columns\n  </button>\n</div>\n\n<aurelia-slickgrid grid-id="grid2"\n                    column-definitions.bind="columnDefinitions2"\n                    grid-options.bind="gridOptions2"\n                    dataset.bind="dataset2"\n                    on-aurelia-grid-created.trigger="aureliaGridReady2($event.detail)">\n</aurelia-slickgrid>\n',d=s,m=[];let c;function u(e){c||(c=r.K94.define({name:o,template:s,dependencies:m})),e.register(c)}var p=n(57094),h=n(5597),f=n(59019),g=n.n(f),b=n(90528),C=n.n(b),k=n(88108),G=n.n(k),v=n(72555),x=n.n(v),y=n(12735),z=n.n(y),w=n(85884),D=n.n(w),P={};P.styleTagTransform=D(),P.setAttributes=x(),P.insert=G().bind(null,"head"),P.domAPI=C(),P.insertStyleElement=z(),g()(l.A,P),l.A&&l.A.locals&&l.A.locals,n(35863);let O=class{title="Example 14: Column Span & Header Grouping";subTitle="\n  This example demonstrates how to easily span a row over multiple columns & how to group header titles.\n  <ul>\n    <li>Note that you can add Sort but remember that it will sort by the data which the row contains, even if the data is visually hidden by colspan it will still sort it</li>\n  </ul>\n  ";aureliaGrid2;gridObj2;columnDefinitions1=[];columnDefinitions2=[];gridOptions1;gridOptions2;dataset1=[];dataset2=[];constructor(){this.definedGrid1(),this.definedGrid2()}attached(){this.dataset1=this.getData(500),this.dataset2=this.getData(500)}aureliaGridReady2(e){this.aureliaGrid2=e,this.gridObj2=e.slickGrid}definedGrid1(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:!1,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:h.PUO.boolean,columnGroup:"Analysis"}],this.gridOptions1={enableAutoResize:!1,enableCellNavigation:!0,enableColumnReorder:!1,enableSorting:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,gridHeight:275,gridWidth:800,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new p.N],explicitInitialization:!0,colspanCallback:this.renderDifferentColspan}}definedGrid2(){this.columnDefinitions2=[{id:"sel",name:"#",field:"num",behavior:"select",cssClass:"cell-selection",width:40,resizable:!1,selectable:!1},{id:"title",name:"Title",field:"title",sortable:!0,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:!1,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:h.PUO.boolean,columnGroup:"Analysis"}],this.gridOptions2={enableCellNavigation:!0,enableColumnReorder:!1,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:25,explicitInitialization:!0,gridHeight:275,gridWidth:800,frozenColumn:2,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new p.N],gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}}}getData(e){const i=[];for(let n=0;n<e;n++)i[n]={id:n,num:n,title:"Task "+n,duration:"5 days",percentComplete:Math.round(100*Math.random()),start:"01/01/2009",finish:"01/05/2009",effortDriven:n%5==0};return i}setFrozenColumns2(e){this.gridObj2.setOptions({frozenColumn:e}),this.gridOptions2=this.gridObj2.getOptions()}renderDifferentColspan(e){return e.id%2==1?{columns:{duration:{colspan:3}}}:{columns:{0:{colspan:"*"}}}}};O=(0,a.Cg)([(0,r.EMX)(t),(0,a.Sn)("design:paramtypes",[])],O)}}]);
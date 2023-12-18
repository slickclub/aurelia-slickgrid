"use strict";(self.webpackChunkaurelia_slickgrid_demo=self.webpackChunkaurelia_slickgrid_demo||[]).push([[938],{21938:(e,t,i)=>{i.r(t),i.d(t,{Example19:()=>k});var n={};i.r(n),i.d(n,{default:()=>d,dependencies:()=>c,name:()=>s,register:()=>m,template:()=>r});var a={};i.r(a),i.d(a,{default:()=>f,dependencies:()=>w,name:()=>u,register:()=>y,template:()=>g});var l=i(22970),o=i(26207);const s="example19",r='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px" target="_blank"\n      href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/src/examples/slickgrid/example19.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="col-sm-6">\n  <button class="btn btn-outline-secondary btn-xs" click.trigger="changeEditableGrid()" data-test="editable-grid-btn">\n    Make Grid Editable\n  </button>\n  <button class="btn btn-outline-secondary btn-xs" click.trigger="closeAllRowDetail()" data-test="close-all-btn">\n    Close all Row Details\n  </button>\n  &nbsp;&nbsp;\n\n  <label for="">Detail View Rows Shown: </label>\n  <input type="number" value.bind="detailViewRowCount" style="height: 22px; width: 40px">\n  <button class="btn btn-outline-secondary btn-xs" style="height: 26px;" click.trigger="changeDetailViewRowCount()"\n    data-test="set-count-btn">\n    Set\n  </button>\n</div>\n<div class="alert alert-${flashAlertType} col-sm-6" if.bind="message" data-test="flash-msg">${message}</div>\n\n<hr />\n\n<aurelia-slickgrid grid-id="grid19" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions"\n  dataset.bind="dataset" extensions.bind="extensions" instances.bind="aureliaGrid">\n</aurelia-slickgrid>',d=r,c=[];let p;function m(e){p||(p=o.b_N.define({name:s,template:r,dependencies:c})),e.register(p)}var b=i(23490);i(41414);let h=class{};h=(0,l.gn)([(0,o.MoW)({name:"example19-preload",template:'<div class="container" style="margin-top: 10px">\n    <h4>\n      <i class="fa fa-refresh fa-spin fa-2x fa-fw"></i>\n      Loading...\n    </h4>\n  </div>'})],h);const u="example19-detail-view",g='<div class="container" style="margin-top: 10px">\n  <h3>${model.title}</h3>\n  <div class="row">\n    <div class="col-3"><label>Assignee:</label> <input class="form-control" value.bind="model.assignee" /></div>\n    <div class="col-3"><label>Reporter:</label> <span>${model.reporter}</span></div>\n    <div class="col-2"><label>Duration:</label> <span>${model.duration | decimal: 2}</span></div>\n    <div class="col-2"><label>% Complete:</label> <span>${model.percentComplete}</span></div>\n  </div>\n\n  <div class="row">\n    <div class="col-3"><label>Start:</label> <span>${model.start | dateFormat: \'YYYY-MM-DD\'}</span></div>\n    <div class="col-3"><label>Finish:</label> <span>${model.finish | dateFormat: \'YYYY-MM-DD\'}</span></div>\n    <div class="col-2"><label>Effort Driven:</label> <i class.bind="model.effortDriven ? \'fa fa-check\' : \'\'"></i>\n    </div>\n  </div>\n\n  <hr>\n\n  <div class="col-sm-8">\n    <h4>\n      Find out who is the Assignee\n      <small>\n        <button class="btn btn-primary btn-sm" click.trigger="alertAssignee(model.assignee)" data-test="assignee-btn">\n          Click Me\n        </button>\n      </small>\n    </h4>\n  </div>\n\n  <div class="col-sm-4">\n    <button class="btn btn-primary btn-danger btn-sm" click.trigger="deleteRow(model)" data-test="delete-btn">\n      Delete Row\n    </button>\n    <button class="btn btn-outline-secondary btn-sm" click.trigger="callParentMethod(model)" data-test="parent-btn">\n      Call Parent Method\n    </button>\n  </div>\n</div>',f=g,w=[];let v;function y(e){v||(v=o.b_N.define({name:u,template:g,dependencies:w})),e.register(v)}var D=i(93438);let x=class{model;addon;grid;dataView;parent;alertAssignee(e){"string"==typeof e?alert(`Assignee on this task is: ${e.toUpperCase()}`):alert("No one is assigned to this task.")}deleteRow(e){confirm(`Are you sure that you want to delete ${e.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(e.rowId),this.parent.showFlashMessage(`Deleted row with ${e.title}`,"danger"))}callParentMethod(e){this.parent.showFlashMessage(`We just called Parent Method from the Row Detail Child Component on ${e.title}`)}};(0,l.gn)([(0,o.ExJ)(),(0,l.w6)("design:type",Object)],x.prototype,"model",void 0),(0,l.gn)([(0,o.ExJ)(),(0,l.w6)("design:type",D.h)],x.prototype,"addon",void 0),(0,l.gn)([(0,o.ExJ)(),(0,l.w6)("design:type",Object)],x.prototype,"grid",void 0),(0,l.gn)([(0,o.ExJ)(),(0,l.w6)("design:type",b.Trs)],x.prototype,"dataView",void 0),(0,l.gn)([(0,o.ExJ)(),(0,l.w6)("design:type",Object)],x.prototype,"parent",void 0),x=(0,l.gn)([(0,o.MoW)(a)],x);let k=class{detailViewRowCount=9;title="Example 19: Row Detail View";subTitle='\n    Add functionality to show extra information with a Row Detail View, (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/row-detail" target="_blank">Wiki docs</a>)\n    <ul>\n      <li>Click on the row "+" icon or anywhere on the row to open it (the latter can be changed via property "useRowClick: false")</li>\n      <li>Pass a View/Model as a Template to the Row Detail</li>\n      <li>You can use "expandableOverride()" callback to override logic to display expand icon on every row (for example only show it every 2nd row)</li>\n    </ul>\n  ';aureliaGrid;gridOptions;columnDefinitions=[];dataset=[];flashAlertType="info";message="";constructor(){this.defineGrid()}get rowDetailInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName(b.UXi.rowDetailView)}attached(){this.getData()}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,type:b.fSu.string,width:70,filterable:!0,editor:{model:b.Kob.text}},{id:"duration",name:"Duration (days)",field:"duration",formatter:b.UgU.decimal,params:{minDecimal:1,maxDecimal:2},sortable:!0,type:b.fSu.number,minWidth:90,filterable:!0},{id:"percent2",name:"% Complete",field:"percentComplete2",editor:{model:b.Kob.slider},formatter:b.UgU.progressBar,type:b.fSu.number,sortable:!0,minWidth:100,filterable:!0,filter:{model:b.x$p.slider,operator:">"}},{id:"start",name:"Start",field:"start",formatter:b.UgU.dateIso,sortable:!0,type:b.fSu.date,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:b.x$p.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:b.UgU.dateIso,sortable:!0,type:b.fSu.date,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:b.x$p.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:b.UgU.checkmark,type:b.fSu.boolean,filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:b.x$p.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableRowDetailView:!0,rowSelectionOptions:{selectActiveRow:!0},datasetIdPropertyName:"rowId",rowDetailView:{process:e=>this.simulateServerAsyncCall(e),loadOnce:!0,singleRowExpand:!1,useRowClick:!0,panelRows:this.detailViewRowCount,preloadViewModel:h,viewModel:x,parent:this}}}getData(){const e=[];for(let t=0;t<1e3;t++){const i=2e3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),a=Math.floor(29*Math.random()),l=Math.round(100*Math.random());e[t]={rowId:t,title:"Task "+t,duration:t%33==0?null:100*Math.random()+"",percentComplete:l,percentComplete2:l,percentCompleteNumber:l,start:new Date(i,n,a),finish:new Date(i,n+1,a),effortDriven:t%5==0}}this.dataset=e}changeDetailViewRowCount(){const e=this.rowDetailInstance.getOptions();e&&e.panelRows&&(e.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(e))}changeEditableGrid(){return this.rowDetailInstance.addonOptions.useRowClick=!1,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid?.slickGrid.setOptions({editable:!0,autoEdit:!0,enableCellNavigation:!0}),!0}closeAllRowDetail(){this.rowDetailInstance.collapseAll()}showFlashMessage(e,t="info"){this.message=e,this.flashAlertType=t}simulateServerAsyncCall(e){const t=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise((i=>{setTimeout((()=>{const n=e;n.assignee=t[this.randomNumber(0,10)],n.reporter=t[this.randomNumber(0,10)],i(n)}),1e3)}))}randomNumber(e,t){return Math.floor(Math.random()*(t-e+1)+e)}};(0,l.gn)([o.ExJ,(0,l.w6)("design:type",Object)],k.prototype,"detailViewRowCount",void 0),k=(0,l.gn)([(0,o.MoW)(n),(0,l.w6)("design:paramtypes",[])],k)}}]);
"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[703],{6474:(t,e,n)=>{n.d(e,{A:()=>s});var i=n(1157),o=n.n(i),l=n(8614),r=n.n(l)()(o());r.push([t.id,".slick-row .slick-cell.frozen:last-child,.slick-headerrow-column.frozen:last-child,.slick-footerrow-column.frozen:last-child{border-right:1px solid #969696 !important}.slick-pane-bottom{border-top:1px solid #969696 !important}",""]);const s=r},703:(t,e,n)=>{n.r(e),n.d(e,{Example20:()=>F});var i={};n.r(i),n.d(i,{default:()=>a,dependencies:()=>d,name:()=>r,register:()=>u,template:()=>s});var o=n(3399),l=n(6474);const r="example20",s='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example20.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<br>\n\n<div class="row">\n  <div class="col-sm-12">\n    <span>\n      <label for="">Pinned Rows: </label>\n      <input type="number"\n              value.bind="frozenRowCount">\n      <button class="btn btn-outline-secondary btn-xs btn-icon"\n              click.trigger="changeFrozenRowCount()">\n        Set\n      </button>\n    </span>\n    <span style="margin-left: 10px">\n      <label for="">Pinned Columns: </label>\n      <input type="number"\n              value.bind="frozenColumnCount">\n      <button class="btn btn-outline-secondary btn-xs btn-icon"\n              click.trigger="changeFrozenColumnCount()">\n        Set\n      </button>\n    </span>\n  </div>\n</div>\n\n<div class="row mt-2">\n  <div class="col-sm-12">\n    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="setFrozenColumns(-1)"\n            data-test="remove-frozen-column-button">\n      <i class="mdi mdi-close"></i> Remove Frozen Columns\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="setFrozenColumns(2)"\n            data-test="set-3frozen-columns">\n      <i class="mdi mdi-pin-outline"></i> Set 3 Frozen Columns\n    </button>\n    <span style="margin-left: 15px">\n      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleFrozenBottomRows()">\n        <i class="mdi mdi-flip-vertical"></i> Toggle Pinned Rows\n      </button>\n      <span style="font-weight: bold;">: ${ isFrozenBottom ? \'Bottom\' : \'Top\' }</span>\n    </span>\n  </div>\n</div>\n\n<div class="col-sm-12">\n  <hr>\n</div>\n\n<aurelia-slickgrid grid-id="grid20"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-validation-error.trigger="onCellValidationError($event.detail.eventData, $event.detail.args)"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)">\n</aurelia-slickgrid>\n',a=s,d=[];let m;function u(t){m||(m=o.K94.define({name:r,template:s,dependencies:d})),t.register(m)}var c=n(4792),h=n(3957),b=n.n(h),f=n(1794),g=n.n(f),p=n(8866),C=n.n(p),w=n(621),v=n.n(w),z=n(3897),k=n.n(z),O=n(5462),y=n.n(O),R={};R.styleTagTransform=y(),R.setAttributes=v(),R.insert=C().bind(null,"head"),R.domAPI=g(),R.insertStyleElement=k(),b()(l.A,R),l.A&&l.A.locals&&l.A.locals,n(1125);class F{title="Example 20: Pinned (frozen) Columns/Rows";subTitle='\n    This example demonstrates the use of Pinned (aka frozen) Columns and/or Rows (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/frozen-columns-rows" target="_blank">Wiki docs</a>)\n    <ul>\n      <li>Option to pin any number of columns (left only) or rows</li>\n      <li>Option to pin the rows at the bottom instead of the top (default)</li>\n      <li>You can also dynamically any of these options, through SlickGrid "setOptions()"</li>\n      <li>Possibility to change the styling of the line border between pinned columns/rows</li>\n    </ul>\n  ';aureliaGrid;columnDefinitions=[];gridObj;gridOptions;frozenColumnCount=2;frozenRowCount=3;isFrozenBottom=!1;dataset=[];slickEventHandler;constructor(){this.defineGrid(),this.slickEventHandler=new c.JD8}aureliaGridReady(t){this.aureliaGrid=t,this.gridObj=t&&t.slickGrid,this.slickEventHandler.subscribe(this.gridObj.onMouseEnter,(t=>this.colorizeHoveringRow(t,!0))),this.slickEventHandler.subscribe(this.gridObj.onMouseLeave,(t=>this.colorizeHoveringRow(t,!1)))}colorizeHoveringRow(t,e){const n=this.gridObj.getCellFromEvent(t),i=e?[n?.row??0]:[];this.gridObj.setSelectedRows(i),t.preventDefault()}attached(){this.getData()}detaching(){this.slickEventHandler.unsubscribeAll()}defineGrid(){this.columnDefinitions=[{id:"sel",name:"#",field:"id",minWidth:40,width:40,maxWidth:40,cannotTriggerInsert:!0,resizable:!1,unselectable:!0},{id:"title",name:"Title",field:"title",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",resizable:!1,minWidth:130,width:140,formatter:c._tQ.percentCompleteBar,type:c.PUO.number,filterable:!0,filter:{model:c.CuW.slider,operator:">="},sortable:!0},{id:"start",name:"Start",field:"start",minWidth:100,width:120,filterable:!0,sortable:!0,formatter:c._tQ.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:100,width:120,filterable:!0,sortable:!0,formatter:c._tQ.dateIso},{id:"cost",name:"Cost | Duration",field:"cost",formatter:this.costDurationFormatter.bind(this),minWidth:150,width:170,sortable:!0,filter:{model:c.CuW.compoundSlider},editor:{model:c.R8o.dualInput,params:{leftInput:{field:"cost",type:"float",decimal:2,minValue:0,maxValue:5e4,placeholder:"< 50K",errorMessage:"Cost must be positive and below $50K."},rightInput:{field:"duration",type:"float",minValue:0,maxValue:100,title:"make sure Duration is withing its range of 0 to 100",errorMessage:"Duration must be between 0 and 100."}}}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",minWidth:100,width:120,formatter:c._tQ.checkmarkMaterial,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:c.CuW.singleSelect},sortable:!0},{id:"title1",name:"Title 1",field:"title1",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title2",name:"Title 2",field:"title2",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title3",name:"Title 3",field:"title3",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title4",name:"Title 4",field:"title4",minWidth:100,width:120,filterable:!0,sortable:!0}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},gridWidth:920,enableCellNavigation:!0,editable:!0,autoEdit:!0,enableExcelCopyBuffer:!0,frozenColumn:this.frozenColumnCount,frozenRow:this.frozenRowCount,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}}}getData(){const t=[];for(let e=0;e<500;e++)t[e]={id:e,title:"Task "+e,cost:e%33==0?null:1e4*Math.random(),duration:e%8?Math.round(100*Math.random())+"":null,percentComplete:Math.round(100*Math.random()),start:new Date(2009,0,1),finish:new Date(2009,4,5),effortDriven:e%5==0,title1:`Some Text ${Math.round(25*Math.random())}`,title2:`Some Text ${Math.round(25*Math.random())}`,title3:`Some Text ${Math.round(25*Math.random())}`,title4:`Some Text ${Math.round(25*Math.random())}`};this.dataset=t}changeFrozenColumnCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenColumn:this.frozenColumnCount})}changeFrozenRowCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenRow:this.frozenRowCount})}costDurationFormatter(t,e,n,i,o){const l=this.isNullUndefinedOrEmpty(o.cost)?"n/a":(0,c.ZVp)(o.cost,0,2,!1,"$","",".",",");let r="n/a";return!this.isNullUndefinedOrEmpty(o.duration)&&o.duration>=0&&(r=`${o.duration} ${o.duration>1?"days":"day"}`),`<b>${l}</b> | ${r}`}isNullUndefinedOrEmpty(t){return""===t||null==t}onCellValidationError(t,e){alert(e.validationResults.msg)}setFrozenColumns(t){this.gridObj.setOptions({frozenColumn:t}),this.gridOptions=this.gridObj.getOptions()}toggleFrozenBottomRows(){this.gridObj&&this.gridObj.setOptions&&(this.gridObj.setOptions({frozenBottom:!this.isFrozenBottom}),this.isFrozenBottom=!this.isFrozenBottom)}}o.K94.define(i,F)}}]);
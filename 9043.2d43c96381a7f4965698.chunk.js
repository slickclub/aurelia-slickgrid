"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[9043],{6216:(e,t,i)=>{i.d(t,{A:()=>r});var a=i(1856),n=i.n(a),l=i(6305),s=i.n(l)()(n());s.push([e.id,"#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}",""]);const r=s},7258:(e,t,i)=>{var a=i(1856),n=i.n(a),l=i(6305);i.n(l)()(n()).push([e.id,"#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}",""])},9043:(e,t,i)=>{i.r(t),i.d(t,{Example21:()=>D});var a={};i.r(a),i.d(a,{bindables:()=>c,default:()=>d,dependencies:()=>o,name:()=>s,register:()=>u,template:()=>r});var n=i(5959),l=i(7414);i(7258);const s="example21",r='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example21.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<div class="row row-cols-lg-auto g-1 align-items-center">\n  <div class="col">\n    <label for="columnSelect">Single Search:</label>\n  </div>\n  <div class="col">\n    <select class="form-select" data-test="search-column-list" name="selectedColumn"\n            value.bind="selectedColumn" id="columnSelect">\n      <option repeat.for="column of columnDefinitions"\n              model.bind="column">\n        ${column.name}\n      </option>\n    </select>\n  </div>\n  <div class="col">\n    <select value.bind="selectedOperator"\n            class="form-select"\n            data-test="search-operator-list">\n      <option repeat.for="operator of operatorList"\n              model.bind="operator">\n        ${operator}\n      </option>\n    </select>\n  </div>\n\n  <div class="col">\n    <div class="input-group">\n      <input type="text"\n              class="form-control"\n              placeholder="search value"\n              data-test="search-value-input"\n              value.bind="searchValue" />\n      <button class="btn btn-outline-secondary d-flex align-items-center pl-2 pr-2" data-test="clear-search-value"\n              click.trigger="clearGridSearchInput()">\n        <span class="mdi mdi-close"></span>\n      </button>\n    </div>\n  </div>\n</div>\n\n<hr />\n\n<aurelia-slickgrid grid-id="grid21"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    instances.bind="aureliaGrid">\n</aurelia-slickgrid>\n',d=r,o=[],c={};let h;function u(e){h||(h=l.K9.define({name:s,template:r,dependencies:o,bindables:c})),e.register(h)}var m=i(9663),p=i(7323),g=i.n(p),f=i(5280),b=i.n(f),v=i(3452),k=i.n(v),w=i(5947),y=i.n(w),C=i(1439),O=i.n(C),S=i(1308),F=i.n(S),z=i(6216),G={};G.styleTagTransform=F(),G.setAttributes=y(),G.insert=k().bind(null,"head"),G.domAPI=b(),G.insertStyleElement=O(),g()(z.A,G),z.A&&z.A.locals&&z.A.locals,i(1376);let D=(()=>{let e,t,i,s,r,d=[(0,l.EM)(a)],o=[],c=[],h=[],u=[],p=[],g=[],f=[];return class{static{t=this}static{const a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;i=[(0,l._t)()],s=[(0,l._t)()],r=[(0,l._t)()],(0,n.G4)(null,null,i,{kind:"field",name:"selectedColumn",static:!1,private:!1,access:{has:e=>"selectedColumn"in e,get:e=>e.selectedColumn,set:(e,t)=>{e.selectedColumn=t}},metadata:a},c,h),(0,n.G4)(null,null,s,{kind:"field",name:"selectedOperator",static:!1,private:!1,access:{has:e=>"selectedOperator"in e,get:e=>e.selectedOperator,set:(e,t)=>{e.selectedOperator=t}},metadata:a},u,p),(0,n.G4)(null,null,r,{kind:"field",name:"searchValue",static:!1,private:!1,access:{has:e=>"searchValue"in e,get:e=>e.searchValue,set:(e,t)=>{e.searchValue=t}},metadata:a},g,f),(0,n.G4)(null,e={value:t},d,{kind:"class",name:t.name,metadata:a},null,o),t=e.value,a&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),(0,n.zF)(t,o)}selectedColumn=(0,n.zF)(this,c,void 0);selectedOperator=((0,n.zF)(this,h),(0,n.zF)(this,u,void 0));searchValue=((0,n.zF)(this,p),(0,n.zF)(this,g,""));title=((0,n.zF)(this,f),"Example 21: Grid AutoHeight");subTitle='\n  The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling\n  <ul>\n    <li>You define a fixed grid width via "gridWidth" in the View</li>\n    <li>You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)</li>\n    <li>This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you might have browser scrolling)</li>\n  </ul>\n  ';aureliaGrid;columnDefinitions=[];gridOptions;dataset=[];operatorList=["=","<","<=",">",">=","<>","StartsWith","EndsWith"];constructor(){this.defineGrid()}attached(){this.getData()}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",width:100,sortable:!0,type:m.PUO.string},{id:"duration",name:"Duration (days)",field:"duration",width:100,sortable:!0,type:m.PUO.number},{id:"complete",name:"% Complete",field:"percentComplete",width:100,sortable:!0,formatter:m._tQ.percentCompleteBar,type:m.PUO.number},{id:"start",name:"Start",field:"start",width:100,sortable:!0,formatter:m._tQ.dateIso,type:m.PUO.date},{id:"finish",name:"Finish",field:"finish",width:100,sortable:!0,formatter:m._tQ.dateIso,type:m.PUO.date},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",width:100,sortable:!0,formatter:m._tQ.checkmarkMaterial,type:m.PUO.number}],this.gridOptions={autoHeight:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,showHeaderRow:!1,alwaysShowVerticalScroll:!1,enableColumnPicker:!0,enableCellNavigation:!0,enableRowSelection:!0}}getData(){const e=[];for(let t=0;t<25;t++){const i=2e3+Math.floor(10*Math.random()),a=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),l=Math.round(100*Math.random());e[t]={id:t,title:"Task "+t,duration:Math.round(100*Math.random())+"",percentComplete:l,percentCompleteNumber:l,start:new Date(i,a,n),finish:new Date(i,a+1,n),effortDriven:t%5==0}}this.dataset=e}clearGridSearchInput(){this.searchValue="",this.updateFilter()}selectedOperatorChanged(){this.updateFilter()}selectedColumnChanged(){this.updateFilter()}searchValueChanged(){this.updateFilter()}updateFilter(){this.aureliaGrid?.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||""}`,operator:this.selectedOperator,searchTerms:[this.searchValue||""]})}},t})()}}]);
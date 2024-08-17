"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[9247],{641:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(6240),a=i.n(n),s=i(2753),l=i.n(s)()(a());l.push([e.id,".alert{padding:8px;margin-bottom:10px}.status-container{min-height:50px}",""]);const o=l},9247:(e,t,i)=>{i.r(t),i.d(t,{Example35:()=>D});var n={};i.r(n),i.d(n,{bindables:()=>u,default:()=>d,dependencies:()=>c,name:()=>o,register:()=>m,template:()=>r});var a=i(2443),s=i(7689),l=i(641);const o="example35",r='<h2>\n  Example 35: Row Based Editing\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example35.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n\n<div class="subtitle">\n  <ul>\n    <li>\n      The Row Based Edit plugin allows you to edit either a single or multiple\n      specific rows at a time, while disabling the rest of the grid rows.\n    </li>\n    <li>\n      Editedable rows, as well as modified cells are highlighted with a\n      different color, which you can customize using css variables (see\n      <a\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example35.scss"\n      >\n        example35.scss </a\n      >)\n    </li>\n    <li>\n      Modifications are kept track of and if the cancel button is pressed, all\n      modifications are rolled back.\n    </li>\n    <li>\n      If the save button is pressed, a custom "onBeforeRowUpdated" callback is called, which you can use to save the data with your backend.<br />\n      The callback needs to return a Promise&lt;boolean&gt; and if the promise resolves to true, then the row will be updated, otherwise it will be cancelled and stays in edit mode.\n      You can try out the later by defining a Duration value <b>larger than 40</b>.\n      <br />\n      <small><span class="has-text-danger">NOTE:</span> You can also combine this with e.g. Batch Editing like shown <a href="#/example30">in Example 30</a></small>\n    </li>\n    <li>\n      This example additionally uses the ExcelCopyBuffer Plugin, which you can see also in Slickgrid-Universal\n       <a href="https://ghiscoding.github.io/slickgrid-universal/#/example19">example 19</a>.\n      The example defines a rule that pastes in the first column are prohibited. In combination with the Row Based Editing Plugin though, this rule gets enhanced with the fact\n      that only the edited rows are allowed to be pasted into, while still respecting the original rule.\n    </li>\n  </ul>\n</div>\n\n<section>\n  <div class="row mb-4">\n      <div class="col-sm-8">\n        <button\n          class="btn btn-outline-secondary btn-sm btn-icon"\n          data-test="single-multi-toggle"\n          click.trigger="toggleSingleMultiRowEdit()"\n        >\n          Toggle Single/Multi Row Edit\n        </button>\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="toggle-language" click.trigger="switchLanguage()">\n          <i class="mdi mdi-translate"></i>\n          Switch Language for Action column buttons\n        </button>\n        <label>Locale:</label>\n        <span style="font-style: italic; width: 70px;" data-test="selected-locale">\n          ${selectedLanguage + \'.json\'}\n        </span>\n      </div>\n\n      <div class="col-sm-4" class.bind="statusClass">\n        <strong>Status: </strong>\n        <span data-test="fetch-result" textcontent.bind="fetchResult"></span>\n      </div>\n  </div>\n</section>\n\n<aurelia-slickgrid grid-id="grid35" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions"\n    dataset.bind="dataset" instances.bind="aureliaGrid">\n</aurelia-slickgrid>\n',d=r,c=[],u={};let h;function m(e){h||(h=s.K94.define({name:o,template:r,dependencies:c,bindables:u})),e.register(h)}var g=i(857),p=i(5480),b=i(1858),f=i(9123),w=i.n(f),y=i(4472),x=i.n(y),B=i(948),k=i.n(B),v=i(9747),C=i.n(v),E=i(7383),R=i.n(E),T=i(8308),O=i.n(T),S={};S.styleTagTransform=O(),S.setAttributes=C(),S.insert=k().bind(null,"head"),S.domAPI=x(),S.insertStyleElement=R(),w()(l.A,S),l.A&&l.A.locals&&l.A.locals;var M=i(3339);i(7375);let D=(()=>{let e,t,i=[(0,s.EMX)(n)],l=[];return class{static{t=this}static{const n="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,a.G4)(null,e={value:t},i,{kind:"class",name:t.name,metadata:n},null,l),t=e.value,n&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n}),(0,a.zF)(t,l)}i18n;aureliaGrid;gridOptions;columnDefinitions;dataset;selectedLanguage;selectedLanguageFile;fetchResult="";statusClass="alert alert-light";statusStyle="display: none";constructor(e=(0,M.hd)(p.TH)){this.i18n=e,this.defineGrid(),this.i18n.setLocale("en"),this.selectedLanguage="en"}attached(){this.dataset=this.getData(20)}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100,filterable:!0,editor:{model:g.R8o.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100,filterable:!0,type:g.PUO.number,editor:{model:g.R8o.text}},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100,filterable:!0,type:g.PUO.number,editor:{model:g.R8o.text}},{id:"start",name:"Start",field:"start",formatter:g._tQ.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:g.R8o.date}},{id:"finish",name:"Finish",field:"finish",formatter:g._tQ.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:g.R8o.date}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100,filterable:!0,type:"boolean",editor:{model:g.R8o.checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:350,gridWidth:800,rowHeight:33,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onBeforePasteCell:(e,t)=>t.cell>0},autoEdit:!1,editable:!0,enableCellNavigation:!0,enableRowBasedEdit:!0,enableTranslate:!0,i18n:this.i18n,rowBasedEditOptions:{allowMultipleRows:!1,onBeforeEditMode:()=>this.clearStatus(),onBeforeRowUpdated:e=>{const{effortDriven:t,percentComplete:i,finish:n,start:a,duration:s,title:l}=e.dataContext;return s>40?(alert("Sorry, 40 is the maximum allowed duration."),Promise.resolve(!1)):(JSON.stringify({effortDriven:t,percentComplete:i,finish:n,start:a,duration:s,title:l}),new Promise((e=>{setTimeout((()=>{e(new Response(JSON.stringify({status:200,message:"success"})))}),window.Cypress?10:500)}))).catch((e=>(console.error(e),!1))).then((e=>!1===e?(this.statusClass="alert alert-danger",!1):"object"==typeof e?e.json():void 0)).then((e=>(this.statusStyle="display: block",this.statusClass="alert alert-success",this.fetchResult=e.message,!0)))},actionColumnConfig:{width:100,minWidth:100,maxWidth:100},actionButtons:{editButtonClassName:"button-style margin-auto btn-icon px-2 me-1",iconEditButtonClassName:"mdi mdi-pencil",cancelButtonClassName:"button-style btn-icon px-2",cancelButtonTitle:"Cancel row",cancelButtonTitleKey:"RBE_BTN_CANCEL",iconCancelButtonClassName:"mdi mdi-undo text-danger",cancelButtonPrompt:"Are you sure you want to cancel your changes?",updateButtonClassName:"button-style btn-icon px-2 me-1",updateButtonTitle:"Update row",updateButtonTitleKey:"RBE_BTN_UPDATE",iconUpdateButtonClassName:"mdi mdi-check text-success",updateButtonPrompt:"Save changes?",deleteButtonClassName:"button-style btn-icon px-2",deleteButtonTitle:"Delete row",iconDeleteButtonClassName:"mdi mdi-trash-can text-danger",deleteButtonPrompt:"Are you sure you want to delete this row?"}},externalResources:[new b.T]}}getData(e){const t=[];for(let i=0;i<e;i++){const e=2e3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),a=Math.floor(29*Math.random()),s=Math.round(100*Math.random());t[i]={id:i,title:"Task "+i,duration:Math.round(40*Math.random())+"",percentComplete:s,start:new Date(e,n+1,a),finish:new Date(e+1,n+1,a),effortDriven:i%5==0}}return t}clearStatus(){this.statusClass="alert alert-light",this.statusStyle="display: none",this.fetchResult=""}toggleSingleMultiRowEdit(){const e={...this.gridOptions,rowBasedEditOptions:{...this.gridOptions.rowBasedEditOptions,allowMultipleRows:!this.gridOptions.rowBasedEditOptions?.allowMultipleRows}};this.aureliaGrid.slickGrid.setOptions(e),this.gridOptions=this.aureliaGrid.slickGrid.getOptions()}async switchLanguage(){const e="en"===this.selectedLanguage?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}},t})()}}]);
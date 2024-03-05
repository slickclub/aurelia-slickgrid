"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[982],{13517:(e,t,i)=>{i.d(t,{A:()=>o});var a=i(54355),n=i.n(a),s=i(84428),l=i.n(s)()(n());l.push([e.id,".alert{padding:8px;margin-bottom:10px}.status-container{min-height:50px}",""]);const o=l},36982:(e,t,i)=>{i.r(t),i.d(t,{Example35:()=>O});var a={};i.r(a),i.d(a,{default:()=>d,dependencies:()=>c,name:()=>o,register:()=>h,template:()=>r});var n=i(58932),s=i(66539),l=i(13517);const o="example35",r='<h2>\n  Example 35: Row Based Editing\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example35.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n\n<div class="subtitle">\n  <ul>\n    <li>\n      The Row Based Edit plugin allows you to edit either a single or multiple\n      specific rows at a time, while disabling the rest of the grid rows.\n    </li>\n    <li>\n      Editedable rows, as well as modified cells are highlighted with a\n      different color, which you can customize using css variables (see\n      <a\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example35.scss"\n      >\n        example35.scss </a\n      >)\n    </li>\n    <li>\n      Modifications are kept track of and if the cancel button is pressed, all\n      modifications are rolled back.\n    </li>\n    <li>\n      If the save button is pressed, a custom "onBeforeRowUpdated" callback is called, which you can use to save the data with your backend.<br />\n      The callback needs to return a Promise&lt;boolean&gt; and if the promise resolves to true, then the row will be updated, otherwise it will be cancelled and stays in edit mode.\n      You can try out the later by defining a Duration value <b>larger than 40</b>.\n      <br />\n      <small><span class="has-text-danger">NOTE:</span> You can also combine this with e.g. Batch Editing like shown <a href="#/example30">in Example 30</a></small>\n    </li>\n    <li>\n      This example additionally uses the ExcelCopyBuffer Plugin, which you can see also in Slickgrid-Universal\n       <a href="https://ghiscoding.github.io/slickgrid-universal/#/example19">example 19</a>.\n      The example defines a rule that pastes in the first column are prohibited. In combination with the Row Based Editing Plugin though, this rule gets enhanced with the fact\n      that only the edited rows are allowed to be pasted into, while still respecting the original rule.\n    </li>\n  </ul>\n</div>\n\n<section>\n  <div class="row mb-4">\n      <div class="col-sm-8">\n        <button\n          class="btn btn-outline-secondary btn-sm"\n          data-test="single-multi-toggle"\n          click.trigger="toggleSingleMultiRowEdit()"\n        >\n          Toggle Single/Multi Row Edit\n        </button>\n        <button class="btn btn-outline-secondary btn-sm" data-test="toggle-language" click.trigger="switchLanguage()">\n          <i class="fa fa-language"></i>\n          Switch Language for Action column buttons\n        </button>\n        <label>Locale:</label>\n        <span style="font-style: italic; width: 70px;" data-test="selected-locale">\n          ${selectedLanguage + \'.json\'}\n        </span>\n      </div>\n\n      <div class="col-sm-4" class.bind="statusClass">\n        <strong>Status: </strong>\n        <span data-test="fetch-result" textcontent.bind="fetchResult"></span>\n      </div>\n  </div>\n</section>\n\n<aurelia-slickgrid grid-id="grid35" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions"\n    dataset.bind="dataset" instances.bind="aureliaGrid">\n</aurelia-slickgrid>\n',d=r,c=[];let u;function h(e){u||(u=s.K94.define({name:o,template:r,dependencies:c})),e.register(u)}var g=i(5597),m=i(96713),p=i(59019),f=i.n(p),b=i(90528),w=i.n(b),y=i(88108),x=i.n(y),B=i(72555),k=i.n(B),C=i(12735),v=i.n(C),E=i(85884),R=i.n(E),T={};T.styleTagTransform=R(),T.setAttributes=k(),T.insert=x().bind(null,"head"),T.domAPI=w(),T.insertStyleElement=v(),f()(l.A,T),l.A&&l.A.locals&&l.A.locals,i(35863);let O=class{i18n;aureliaGrid;gridOptions;columnDefinitions;dataset;selectedLanguage;selectedLanguageFile;fetchResult="";statusClass="alert alert-light";statusStyle="display: none";constructor(e){this.i18n=e,this.defineGrid(),this.i18n.setLocale("en"),this.selectedLanguage="en"}attached(){this.dataset=this.getData(20)}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100,filterable:!0,editor:{model:g.R8o.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100,filterable:!0,type:g.PUO.number,editor:{model:g.R8o.text}},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100,filterable:!0,type:g.PUO.number,editor:{model:g.R8o.text}},{id:"start",name:"Start",field:"start",formatter:g._tQ.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:g.R8o.date}},{id:"finish",name:"Finish",field:"finish",formatter:g._tQ.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:g.R8o.date}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100,filterable:!0,type:"boolean",editor:{model:g.R8o.checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:350,gridWidth:800,rowHeight:33,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onBeforePasteCell:(e,t)=>t.cell>0},autoEdit:!1,editable:!0,enableCellNavigation:!0,enableRowBasedEdit:!0,enableTranslate:!0,i18n:this.i18n,rowBasedEditOptions:{allowMultipleRows:!1,onBeforeEditMode:()=>this.clearStatus(),onBeforeRowUpdated:e=>{const{effortDriven:t,percentComplete:i,finish:a,start:n,duration:s,title:l}=e.dataContext;return s>40?(alert("Sorry, 40 is the maximum allowed duration."),Promise.resolve(!1)):(JSON.stringify({effortDriven:t,percentComplete:i,finish:a,start:n,duration:s,title:l}),new Promise((e=>{setTimeout((()=>{e(new Response(JSON.stringify({status:200,message:"success"})))}),window.Cypress?10:500)}))).catch((e=>(console.error(e),!1))).then((e=>!1===e?(this.statusClass="alert alert-danger",!1):"object"==typeof e?e.json():void 0)).then((e=>(this.statusStyle="display: block",this.statusClass="alert alert-success",this.fetchResult=e.message,!0)))},actionColumnConfig:{width:100,minWidth:100,maxWidth:100},actionButtons:{editButtonClassName:"button-style margin-auto px-2 me-1",iconEditButtonClassName:"fa fa-pencil",cancelButtonClassName:"button-style px-2",cancelButtonTitle:"Cancel row",cancelButtonTitleKey:"RBE_BTN_CANCEL",iconCancelButtonClassName:"fa fa-undo text-danger",cancelButtonPrompt:"Are you sure you want to cancel your changes?",updateButtonClassName:"button-style px-2 me-1",updateButtonTitle:"Update row",updateButtonTitleKey:"RBE_BTN_UPDATE",iconUpdateButtonClassName:"fa fa-check text-success",updateButtonPrompt:"Save changes?",deleteButtonClassName:"button-style px-2",deleteButtonTitle:"Delete row",iconDeleteButtonClassName:"fa fa-trash-o text-danger",deleteButtonPrompt:"Are you sure you want to delete this row?"}}}}getData(e){const t=[];for(let i=0;i<e;i++){const e=2e3+Math.floor(10*Math.random()),a=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),s=Math.round(100*Math.random());t[i]={id:i,title:"Task "+i,duration:Math.round(40*Math.random())+"",percentComplete:s,start:new Date(e,a+1,n),finish:new Date(e+1,a+1,n),effortDriven:i%5==0}}return t}clearStatus(){this.statusClass="alert alert-light",this.statusStyle="display: none",this.fetchResult=""}toggleSingleMultiRowEdit(){const e={...this.gridOptions,rowBasedEditOptions:{...this.gridOptions.rowBasedEditOptions,allowMultipleRows:!this.gridOptions.rowBasedEditOptions?.allowMultipleRows}};this.aureliaGrid.slickGrid.setOptions(e),this.gridOptions=this.aureliaGrid.slickGrid.getOptions()}async switchLanguage(){const e="en"===this.selectedLanguage?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}};O=(0,n.Cg)([(0,s.EMX)(a),(0,n.Qj)(0,m.TH),(0,n.Sn)("design:paramtypes",[Object])],O)}}]);
"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[9931],{9931:(e,t,i)=>{i.r(t),i.d(t,{Example15:()=>C});var a={};i.r(a),i.d(a,{bindables:()=>c,default:()=>o,dependencies:()=>d,name:()=>l,register:()=>m,template:()=>s});var n=i(2443),r=i(7689);const l="example15",s='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example15.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="reset-button"\n        click.trigger="clearGridStateFromLocalStorage()">\n  <i class="mdi mdi-close"></i>\n  Clear Grid State from Local Storage &amp; Reset Grid\n</button>\n\n<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="language-button" click.trigger="switchLanguage()">\n  <i class="mdi mdi-translate"></i>\n  Switch Language\n</button>\n<strong>Locale:</strong>\n<span style="font-style: italic" data-test="selected-locale">\n  ${selectedLanguage + \'.json\'}\n</span>\n\n<aurelia-slickgrid grid-id="grid15"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-grid-state-changed.trigger="gridStateChanged($event.detail)"\n                    >\n</aurelia-slickgrid>\n',o=s,d=[],c={};let u;function m(e){u||(u=r.K94.define({name:l,template:s,dependencies:d,bindables:c})),e.register(u)}var g=i(5480),h=i(7183),p=i(3339),b=i(857);function f(e,t){return Math.floor(Math.random()*(t-e+1)+e)}i(7375);const S="gridState";let C=(()=>{let e,t,i=[(0,r.EMX)(a)],l=[];return class{static{t=this}static{const a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,n.G4)(null,e={value:t},i,{kind:"class",name:t.name,metadata:a},null,l),t=e.value,a&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),(0,n.zF)(t,l)}i18n;title="Example 15: Grid State & Presets using Local Storage";subTitle='\n  Grid State & Preset (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grid-state-preset" target="_blank">Wiki docs</a>)\n  <br/>\n  <ul class="small">\n    <li>Uses Local Storage to persist the Grid State and uses Grid Options "presets" to put the grid back to it\'s previous state</li>\n    <ul>\n       <li>to demo this, simply change any columns (position reorder, visibility, size, filter, sort), then refresh your browser with (F5)</li>\n    </ul>\n    <li>Local Storage is just one option, you can use whichever is more convenient for you (Local Storage, Session Storage, DB, ...)</li>\n  </ul>\n';aureliaGrid;columnDefinitions=[];gridOptions;dataset=[];selectedLanguage;constructor(e=(0,p.hd)(g.TH)){this.i18n=e;const t=JSON.parse(localStorage[S]||null);this.defineGrid(t),this.i18n.setLocale("en"),this.selectedLanguage="en"}attached(){this.dataset=this.getData(500)}detaching(){this.saveCurrentGridState()}aureliaGridReady(e){this.aureliaGrid=e}clearGridStateFromLocalStorage(){this.aureliaGrid.gridService.resetGrid(this.columnDefinitions),this.aureliaGrid.paginationService.changeItemPerPage(25),setTimeout((()=>localStorage[S]=null))}defineGrid(e){const t=[];for(let e=0;e<500;e++)t.push({value:e,label:e});this.columnDefinitions=[{id:"title",name:"Title",field:"title",nameKey:"TITLE",filterable:!0,sortable:!0,type:b.PUO.string,minWidth:45,width:100,filter:{model:b.CuW.compoundInput}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,width:100,type:b.PUO.string,filter:{model:b.CuW.input,filterShortcuts:[{titleKey:"BLANK_VALUES",searchTerms:["< A"],iconCssClass:"mdi mdi-filter-minus-outline"},{titleKey:"NON_BLANK_VALUES",searchTerms:["> A"],iconCssClass:"mdi mdi-filter-plus-outline"}]}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:b.PUO.number,exportCsvForceToKeepAsString:!0,minWidth:55,width:100,nameKey:"DURATION",filterable:!0,filter:{collection:t,model:b.CuW.multipleSelect,filterOptions:{maxHeight:250,width:175}}},{id:"complete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:70,type:b.PUO.number,sortable:!0,width:100,formatter:b._tQ.percentCompleteBar,filterable:!0,filter:{model:b.CuW.slider,operator:">"}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:b._tQ.dateIso,sortable:!0,minWidth:75,exportWithFormatter:!0,width:100,type:b.PUO.date,filterable:!0,filter:{model:b.CuW.compoundDate,filterShortcuts:[{titleKey:"PAST",searchTerms:[(0,h.GP)(new Date,"YYYY-MM-DD")],operator:"<",iconCssClass:"mdi mdi-calendar"},{titleKey:"FUTURE",searchTerms:[(0,h.GP)(new Date,"YYYY-MM-DD")],operator:">",iconCssClass:"mdi mdi-calendar-clock"}]}},{id:"completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:85,formatter:b._tQ.checkmarkMaterial,width:100,type:b.PUO.boolean,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:b.CuW.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableCheckboxSelector:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.i18n,columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0,hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,30,40,50,75,100],pageSize:25}},e&&(this.gridOptions.presets=e)}getData(e){const t=(new Date).getFullYear(),i=[];for(let a=0;a<e;a++){const e=Math.round(100*Math.random()),n=f(t-15,t+8),r=f(10,25),l=f(1,12),s=l<10?`0${l}`:l,o=f(10,28),d=f(0,100),c=f(10,23),u=f(10,59);i[a]={id:a,title:"Task "+a,description:a%5?"desc "+a:null,duration:e,percentComplete:d,percentCompleteNumber:d,start:new Date(n,l,o),usDateShort:`${l}/${o}/${r}`,utcDate:`${n}-${s}-${o}T${c}:${u}:${u}Z`,completed:a%3==0}}return i}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e),localStorage[S]=JSON.stringify(e.gridState)}saveCurrentGridState(){const e=this.aureliaGrid.gridStateService.getCurrentGridState();console.log("Client sample, current Grid State:: ",e),localStorage[S]=JSON.stringify(e)}async switchLanguage(){const e="en"===this.selectedLanguage?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}useDefaultPresets(){return{columns:[{columnId:"description",width:170},{columnId:"title",width:55},{columnId:"duration"},{columnId:"complete"},{columnId:"start"},{columnId:"usDateShort"},{columnId:"utcDate"}],filters:[{columnId:"duration",searchTerms:[2,22,44]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]}}},t})()}}]);
"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[8150],{5331:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(1856),o=n.n(i),a=n(6305),l=n.n(a)()(o());l.push([e.id,".bold{font-weight:bold}.italic{font-style:italic}.grey{color:gray}.orange{color:orange}.red{color:red}.yellow{color:#ffeb34}.pointer{cursor:pointer}.cell-menu-dropdown-outline{border:1px solid #a0a0a0;border-radius:4px;width:max-content;padding:2px 14px;cursor:pointer}.cell-menu-dropdown-outline:hover:not(.disabled){background-color:#a3a3a3;color:#fff}.cell-menu-dropdown-outline .mdi-caret-down{margin-left:5px}.disabled{color:#d4d4d4;border:1px solid #d8d8d8}.slick-dark-mode .disabled{border:1px solid #616161;color:#686868}.row.locale{margin-top:5px}span.cell-menu{margin-left:15px}",""]);const s=l},4957:(e,t,n)=>{var i=n(1856),o=n.n(i),a=n(6305);n.n(a)()(o()).push([e.id,".bold{font-weight:bold}.italic{font-style:italic}.grey{color:gray}.orange{color:orange}.red{color:red}.yellow{color:#ffeb34}.pointer{cursor:pointer}.cell-menu-dropdown-outline{border:1px solid #a0a0a0;border-radius:4px;width:max-content;padding:2px 14px;cursor:pointer}.cell-menu-dropdown-outline:hover:not(.disabled){background-color:#a3a3a3;color:#fff}.cell-menu-dropdown-outline .mdi-caret-down{margin-left:5px}.disabled{color:#d4d4d4;border:1px solid #d8d8d8}.slick-dark-mode .disabled{border:1px solid #616161;color:#686868}.row.locale{margin-top:5px}span.cell-menu{margin-left:15px}",""])},8150:(e,t,n)=>{n.r(t),n.d(t,{Example24:()=>_});var i={};n.r(i),n.d(i,{bindables:()=>c,default:()=>d,dependencies:()=>r,name:()=>l,register:()=>u,template:()=>s});var o=n(5959),a=n(7414);n(4957);const l="example24",s='<h2>\n  ${title}\n  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">\n    <i class="mdi mdi-theme-light-dark"></i>\n    <span>Toggle Dark Mode</span>\n  </button>\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example24.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="row">\n  <span class="context-menu">\n    <strong>Context Menu:</strong>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="showContextCommandsAndOptions(false)"\n            data-test="context-menu-priority-only-button">\n      Show Priority Options Only\n    </button>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="showContextCommandsAndOptions(true)"\n            data-test="context-menu-commands-and-priority-button">\n      Show Commands & Priority Options\n    </button>\n  </span>\n\n  <span class="cell-menu">\n    <strong>Cell Menu:</strong>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="showCellMenuCommandsAndOptions(false)"\n            data-test="cell-menu-commands-and-options-false-button">\n      Show Action Commands Only\n    </button>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="showCellMenuCommandsAndOptions(true)"\n            data-test="cell-menu-commands-and-options-true-button">\n      Show Actions Commands & Completed Options\n    </button>\n  </span>\n</div>\n\n<div class="row locale">\n  <div class="col-12">\n    <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="switchLanguage()" data-test="language-button">\n      <i class="mdi mdi-translate"></i>\n      Switch Language\n    </button>\n    <label>Locale:</label>\n    <span style="font-style: italic" data-test="selected-locale">\n      ${selectedLanguage + \'.json\'}\n    </span>\n  </div>\n</div>\n\n<aurelia-slickgrid grid-id="grid24"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    instances.bind="aureliaGrid">\n</aurelia-slickgrid>\n',d=s,r=[],c={};let m;function u(e){m||(m=a.K9.define({name:l,template:s,dependencies:r,bindables:c})),e.register(m)}var p=n(177),b=n(1271),h=n(9663),C=n(7323),g=n.n(C),x=n(5280),f=n.n(x),y=n(3452),O=n.n(y),M=n(5947),v=n.n(M),w=n(1439),k=n.n(w),E=n(1308),T=n.n(E),I=n(5331),S={};S.styleTagTransform=T(),S.setAttributes=v(),S.insert=O().bind(null,"head"),S.domAPI=f(),S.insertStyleElement=k(),g()(I.A,S),I.A&&I.A.locals&&I.A.locals;var A=n(6824);n(1376);const K=(e,t,n,i,o)=>3===o.priority?'<div class="cell-menu-dropdown-outline">Action<i class="mdi mdi-chevron-down"></i></div>':'<div class="cell-menu-dropdown-outline disabled">Action <i class="mdi mdi-chevron-down"></i></div>',L=(e,t,n)=>{if(!n)return"";let i="";const o=+(n>=3?3:n),a=`<i class="mdi mdi-star ${3===o?"red":2===o?"orange":"yellow"}" aria-hidden="true"></i>`;for(let e=1;e<=o;e++)i+=a;return i},D=(e,t,n,i,o,a)=>{if(!n)return"";const l=a.getOptions().i18n,s=+(n>=3?3:n),d=3===s?"HIGH":2===s?"MEDIUM":"LOW";return l?.tr(d)??""},G=(e,t,n,i,o,a)=>{const l=a.getOptions().i18n;return l?.tr("TASK_X",{x:n})??""};let _=(()=>{let e,t,n=[(0,a.EM)(i)],l=[];return class{static{t=this}static{const i="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,o.G4)(null,e={value:t},n,{kind:"class",name:t.name,metadata:i},null,l),t=e.value,i&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),(0,o.zF)(t,l)}i18n;_darkModeGrid=!1;title="Example 24: Cell Menu & Context Menu Plugins";subTitle='Add Cell Menu and Context Menu\n    <ul>\n      <li>This example demonstrates 2 SlickGrid plugins</li>\n      <ol>\n        <li>Using the <b>Slick.Plugins.CellMenu</b> plugin, often used for an Action Menu(s), 1 or more per grid\n          (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/cell-menu" target="_blank">Wiki docs</a>).\n        </li>\n        <li>Using the <b>Slick.Plugins.ContextMenu</b> plugin, shown after a mouse right+click, only 1 per grid.\n        (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/context-menu" target="_blank">Wiki docs</a>).\n        </li>\n      </ol>\n      <li>It will also "autoAdjustDrop" (bottom/top) and "autoAlignSide" (left/right) by default but could be turned off</li>\n      <li>Both plugins have 2 sections, 1st section can have an array of Options (to change value of a field) and 2nd section an array of Commands (execute a command)</li>\n      <li>There are 2 ways to execute a Command/Option</li>\n      <ol>\n        <li>via onCommand/onOptionSelected (use a switch/case to parse command/option and do something with it)</li>\n        <li>via action callback (that can be defined on each command/option)</li>\n      </ol>\n      <li>Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list</li>\n      <ol>\n        <li>These callbacks are: "menuUsabilityOverride", "itemVisibilityOverride", "itemUsabilityOverride"</li>\n        <li>... e.g. in the demo, the "Action" Cell Menu is only available when Priority is set to "High" via "menuUsabilityOverride"</li>\n        <li>... e.g. in the demo, the Context Menu is only available on the first 20 Tasks via "menuUsabilityOverride"</li>\n      </ol>\n    </ul>';aureliaGrid;gridOptions;columnDefinitions=[];dataset=[];selectedLanguage;constructor(e=(0,A.hd)(b.TH)){this.i18n=e,this.defineGrid(),this.i18n.setLocale("en"),this.selectedLanguage="en"}get cellMenuInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName(h.$fu.cellMenu)}get contextMenuInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName(h.$fu.contextMenu)}attached(){this.dataset=this.getData(1e3)}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columnDefinitions=[{id:"id",name:"#",field:"id",maxWidth:45,sortable:!0,filterable:!0},{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:G,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"percentComplete",nameKey:"PERCENT_COMPLETE",field:"percentComplete",minWidth:100,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:h.CuW.slider,operator:">="},formatter:h._tQ.percentCompleteBar,type:h.PUO.number},{id:"start",name:"Start",field:"start",nameKey:"START",minWidth:100,formatter:h._tQ.dateIso,outputType:h.PUO.dateIso,type:h.PUO.date,filterable:!0,filter:{model:h.CuW.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:h._tQ.dateIso,outputType:h.PUO.dateIso,type:h.PUO.date,minWidth:100,filterable:!0,filter:{model:h.CuW.compoundDate}},{id:"priority",nameKey:"PRIORITY",field:"priority",exportCustomFormatter:D,formatter:L,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:1,labelKey:"LOW"},{value:2,labelKey:"MEDIUM"},{value:3,labelKey:"HIGH"}],model:h.CuW.singleSelect,enableTranslateLabel:!0}},{id:"completed",nameKey:"COMPLETED",field:"completed",exportCustomFormatter:h._tQ.translateBoolean,formatter:h._tQ.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,labelKey:"TRUE"},{value:!1,labelKey:"FALSE"}],model:h.CuW.singleSelect,enableTranslateLabel:!0}},{id:"action",name:"Action",field:"action",width:100,maxWidth:110,excludeFromExport:!0,formatter:K,cellMenu:{hideCloseButton:!1,menuUsabilityOverride:e=>3===e.dataContext.priority,commandTitleKey:"COMMANDS",commandItems:[{command:"command2",title:"Command 2",positionOrder:62,action:(e,t)=>{console.log(t.dataContext,t.column)},itemUsabilityOverride:e=>!e.dataContext.completed},{command:"command1",title:"Command 1",cssClass:"orange",positionOrder:61},{command:"delete-row",titleKey:"DELETE_ROW",positionOrder:64,iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",itemVisibilityOverride:e=>!e.dataContext.completed},{divider:!0,command:"",positionOrder:63},{command:"help",titleKey:"HELP",iconCssClass:"mdi mdi-help-circle",positionOrder:66},{command:"something",titleKey:"DISABLED_COMMAND",disabled:!0,positionOrder:67},{command:"",divider:!0,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitleKey:"CHANGE_COMPLETED_FLAG",optionItems:[{option:!0,titleKey:"TRUE",iconCssClass:"mdi mdi-check-box-outline"},{option:!1,titleKey:"FALSE",iconCssClass:"mdi mdi-checkbox-blank-outline"},{option:null,title:"null",cssClass:"italic",action:()=>{},itemUsabilityOverride:e=>3===e.dataContext.priority,itemVisibilityOverride:e=>!e.dataContext.completed}]}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},darkMode:this._darkModeGrid,enableCellNavigation:!0,enableFiltering:!0,enableSorting:!0,enableTranslate:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,customColumnWidth:15,columnHeaderStyle:{font:{bold:!0,italic:!0}}},externalResources:[new p.N],i18n:this.i18n,enableContextMenu:!0,enableCellMenu:!0,cellMenu:{onCommand:(e,t)=>this.executeCommand(e,t),onOptionSelected:(e,t)=>{const n=t?.dataContext;n?.hasOwnProperty("completed")&&(n.completed=t.item.option,this.aureliaGrid.gridService.updateItem(n))},onBeforeMenuShow:(e,t)=>{console.log("Before the Cell Menu is shown",t)},onBeforeMenuClose:(e,t)=>console.log("Cell Menu is closing",t)},contextMenu:this.getContextMenuOptions()}}executeCommand(e,t){const n=t.command,i=t.dataContext;switch(n){case"contact-email":case"contact-chat":case"contact-meeting":alert("Command: "+t?.command);break;case"exports-csv":case"exports-txt":case"exports-xlsx":alert(`Exporting as ${t.item.title}`);break;case"command1":alert("Command 1");break;case"command2":alert("Command 2");break;case"help":alert("Please help!");break;case"delete-row":confirm(`Do you really want to delete row ${t.row+1} with ${this.i18n.tr("TASK_X",{x:i.id})}`)&&this.aureliaGrid.dataView.deleteItem(i.id)}}getData(e){const t=[];for(let n=0;n<e;n++){const e=2e3+Math.floor(30*Math.random()),i=Math.floor(11*Math.random()),o=Math.floor(29*Math.random());t[n]={id:n,duration:Math.floor(25*Math.random())+" days",percentComplete:Math.floor(100*Math.random()),start:new Date(e,i,o),finish:new Date(e,i+1,o),priority:n%3?2:n%5?3:1,completed:n%4==0}}return t}getContextMenuOptions(){return{hideCloseButton:!1,menuUsabilityOverride:e=>(e&&e.dataContext).id<21,commandShownOverColumnIds:["id","title","percentComplete","start","finish","completed"],commandTitleKey:"COMMANDS",commandItems:[{divider:!0,command:"",positionOrder:61},{command:"delete-row",titleKey:"DELETE_ROW",iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",positionOrder:62},{divider:!0,command:"",positionOrder:63},{command:"help",titleKey:"HELP",iconCssClass:"mdi mdi-help-circle",positionOrder:64,action:()=>{},itemVisibilityOverride:e=>!(e&&e.dataContext).completed},{command:"something",titleKey:"DISABLED_COMMAND",disabled:!0,positionOrder:65},{command:"",divider:!0,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitleKey:"CHANGE_PRIORITY",optionShownOverColumnIds:["priority"],optionItems:[{option:0,title:"n/a",textCssClass:"italic",itemUsabilityOverride:e=>!(e&&e.dataContext).completed,action:()=>{}},{option:1,iconCssClass:"mdi mdi-star-outline yellow",titleKey:"LOW"},{option:2,iconCssClass:"mdi mdi-star orange",titleKey:"MEDIUM"},{option:3,iconCssClass:"mdi mdi-star red",titleKey:"HIGH"},"divider",{option:4,title:"Extreme",iconCssClass:"mdi mdi-fire",disabled:!0,itemVisibilityOverride:e=>!(e&&e.dataContext).completed},{option:null,title:"Sub-Options (demo)",subMenuTitleKey:"CHANGE_PRIORITY",optionItems:[{option:1,iconCssClass:"mdi mdi-star-outline yellow",titleKey:"LOW"},{option:2,iconCssClass:"mdi mdi-star orange",titleKey:"MEDIUM"},{option:3,iconCssClass:"mdi mdi-star red",titleKey:"HIGH"}]}],onBeforeMenuShow:(e,t)=>{this.aureliaGrid.slickGrid.setActiveCell(t.row,t.cell,!1),console.log("Before the global Context Menu is shown",t)},onBeforeMenuClose:(e,t)=>console.log("Global Context Menu is closing",t),onCommand:(e,t)=>this.executeCommand(e,t),onOptionSelected:(e,t)=>{const n=t&&t.dataContext;n?.hasOwnProperty("priority")&&(n.priority=t.item.option,this.aureliaGrid.gridService.updateItem(n))}}}showContextCommandsAndOptions(e){const t=e?[]:["id","title","complete","start","finish","completed","action"];this.contextMenuInstance?.setOptions({commandShownOverColumnIds:t})}showCellMenuCommandsAndOptions(e){this.cellMenuInstance?.setOptions({hideOptionSection:!e})}async switchLanguage(){const e="en"===this.selectedLanguage?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}toggleDarkMode(){this._darkModeGrid=!this._darkModeGrid,this._darkModeGrid?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkModeGrid})}},t})()}}]);
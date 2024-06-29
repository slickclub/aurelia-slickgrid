"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[853],{1073:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(8252),a=i.n(n),r=i(4197),l=i.n(r)()(a());l.push([e.id,".trading-platform.full-screen{position:absolute;top:0;left:0;right:0;bottom:0;padding:10px 12px 0 10px;background-color:#fff;z-index:1040;position:fixed}.changed-gain{background-color:#eafae8 !important}.changed-loss{background-color:#ffeae8 !important}.simulation-form input[type=number]{height:32px;width:50px;border:1px solid silver;border-radius:3px}.simulation-form div.range{display:contents;width:200px}.simulation-form div.range label.form-label{margin:0}.simulation-form div.range input.form-range{width:120px}.simulation-form .refresh-rate input{height:30px;width:46px}.sparkline{stroke:#00b78d;fill:rgba(0,183,141,.05)}*[hidden]{display:none}.trading-tooltip{position:absolute;background:rgba(0,0,0,.7);color:#fff;padding:2px 5px;font-size:12px;white-space:nowrap;z-index:9999}.slick-dark-mode .text-success,.dark-mode .text-success{color:#42b47f !important}.slick-dark-mode .changed-gain,.dark-mode .changed-gain{background-color:rgba(0,255,0,.1137254902) !important}.slick-dark-mode .changed-loss,.dark-mode .changed-loss{background-color:rgba(255,0,0,.1058823529) !important}.slick-dark-mode .trading-platform.full-screen,.dark-mode .trading-platform.full-screen{background-color:#33393e}",""]);const s=l},9853:(e,t,i)=>{i.r(t),i.d(t,{Example34:()=>_});var n={};i.r(n),i.d(n,{bindables:()=>m,default:()=>o,dependencies:()=>d,name:()=>l,register:()=>u,template:()=>s});var a=i(3148),r=i(1073);const l="example34",s='<h2>\n  ${title}\n  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">\n    <span class="mdi mdi-theme-light-dark"></span>\n    <span>Toggle Dark Mode</span>\n  </button>\n  <span class="float-end">\n    <a style="font-size: 18px" target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example34.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="trading-platform">\n  <div class="row mb-4 simulation-form">\n    <div class="col-sm-12 d-flex align-items-center">\n      <div class="range">\n        <label for="refreshRateRange" class="form-label me-1">Changes Rate(ms)</label>\n        <input type="range" class="form-range" id="refreshRateRange" min="0" max="250" value.bind="refreshRate">\n        <span class="refresh-rate">\n          <input type="number" value.bind="refreshRate">\n        </span>\n      </div>\n      <span class="ms-3 me-1">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="start-btn" click.trigger="startSimulation()">\n          <li class="mdi mdi-play-circle-outline"></li> Start Simulation\n        </button>\n      </span>\n      <span class="me-3">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="stop-btn" click.trigger="stopSimulation()">\n          <li class="mdi mdi-stop-circle-outline"></li> Stop Simulation\n        </button>\n      </span>\n      <span class="mx-1">\n        <label for="change-per-cycle-input">Changes p/Cycle</label>\n        <input type="number" id="change-per-cycle-input" value.bind="minChangePerCycle" max.bind="maxChangePerCycle">\n        to\n        <input type="number" value.bind="maxChangePerCycle" min.bind="minChangePerCycle">\n      </span>\n      <span class="ms-2">\n        <label for="highlight-input">Highlight Duration(ms)</label>\n        <input type="number" id="highlight-input" data-test="highlight-input" value.bind="highlightDuration">\n      </span>\n      <div class="ms-auto">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleFullScreen()">\n          <li class.bind="isFullScreen ? \'mdi mdi-arrow-collapse\' : \'mdi mdi-arrow-expand\'"></li> Toggle Full-Screen\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <aurelia-slickgrid grid-id="grid34" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions"\n                      dataset.bind="dataset" instances.bind="aureliaGrid">\n  </aurelia-slickgrid>\n</div>\n',o=s,d=[],m=[];let c;function u(e){c||(c=a.K94.define({name:l,template:s,dependencies:d,bindables:m})),e.register(c)}var h=i(9464),g=i(9580),p=i.n(g),b=i(9137),f=i(8823),y=i.n(f),C=i(1412),k=i.n(C),v=i(3288),x=i.n(v),w=i(8799),S=i.n(w),T=i(4835),D=i.n(T),M=i(7392),P=i.n(M),N={};N.styleTagTransform=P(),N.setAttributes=S(),N.insert=x().bind(null,"head"),N.domAPI=k(),N.insertStyleElement=D(),y()(r.A,N),r.A&&r.A.locals&&r.A.locals,i(3262);const W=(e,t,i)=>`<img src="https://flags.fmcdn.net/data/flags/mini/${i.substring(0,2).toLowerCase()}.png" width="20"/> ${i}`,$=(e,t,i,n,a)=>{const r=a.priceChange>=0?"up":"down",l=new DocumentFragment,s=document.createElement("div");s.className="d-inline-flex align-items-center text-"+("up"===r?"success":"danger");const o=document.createElement("span");return o.className=`mdi mdi-arrow-${r}`,s.appendChild(o),l.appendChild(s),i instanceof HTMLElement?s.appendChild(i):s.appendChild(document.createTextNode(i)),l},A=(e,t,i)=>`<div class="d-inline-flex align-items-center"><span class="me-1 mdi mdi-16px mdi-${"Buy"===i?"plus":"minus"}-circle ${"Buy"===i?"text-info":"text-warning"}"></span> ${i}</div>`,G=(e,t,i,n,a)=>{if(a.historic.length<2)return"";const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS(null,"width","135"),r.setAttributeNS(null,"height","30"),r.setAttributeNS(null,"stroke-width","2"),r.classList.add("sparkline"),p()(r,a.historic,{cursorwidth:2,onmousemove:(e,t)=>{const i=e.target.closest("svg"),n=i?.nextElementSibling;n&&(n.hidden=!1,n.textContent=`$${(100*t.value/100).toFixed(2)}`,n.style.top=`${e.offsetY}px`,n.style.left=`${e.offsetX+20}px`)},onmouseout:e=>{const t=e.target.closest("svg"),i=t?.nextElementSibling;i&&(i.hidden=!0)}});const l=document.createElement("div");return l.appendChild(r),l.appendChild((0,b.fhB)("div",{className:"trading-tooltip",hidden:!0})),l};class _{_darkMode=!1;title="Example 34: Real-Time Trading Platform";subTitle="Simulate a stock trading platform with lot of price changes\n  <ul>\n    <li>you can start/stop the simulation</li>\n    <li>optionally change random numbers, between 0 and 10 symbols, per cycle (higher numbers means more changes)</li>\n    <li>optionally change the simulation changes refresh rate in ms (lower number means more changes).</li>\n    <li>you can Group by 1 of these columns: Currency, Market or Type</li>\n    <li>to show SlickGrid HUGE PERF., do the following: (1) lower Changes Rate (2) increase both Changes per Cycle and (3) lower Highlight Duration\n  </ul>";aureliaGrid;gridOptions;columnDefinitions=[];dataset=[];isFullScreen=!1;highlightDuration=150;itemCount=200;minChangePerCycle=0;maxChangePerCycle=10;refreshRate=75;timer;constructor(){this.defineGrid()}attached(){this.getData(),setTimeout((()=>{this.startSimulation()}),this.refreshRate)}detaching(){this.stopSimulation(),document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columnDefinitions=[{id:"currency",name:"Currency",field:"currency",filterable:!0,sortable:!0,minWidth:65,width:65,formatter:W,filter:{model:b.CuW.singleSelect,collection:[{label:"",value:""},{label:"CAD",value:"CAD"},{label:"USD",value:"USD"}]},grouping:{getter:"currency",formatter:e=>`Currency: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new b.J2q.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"symbol",name:"Symbol",field:"symbol",filterable:!0,sortable:!0,minWidth:65,width:65},{id:"market",name:"Market",field:"market",filterable:!0,sortable:!0,minWidth:75,width:75,grouping:{getter:"market",formatter:e=>`Market: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new b.J2q.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0,minWidth:80,width:130},{id:"trsnType",name:"Type",field:"trsnType",filterable:!0,sortable:!0,minWidth:60,width:60,formatter:A,filter:{model:b.CuW.singleSelect,collection:[{label:"",value:""},{label:"Buy",value:"Buy"},{label:"Sell",value:"Sell"}]},grouping:{getter:"trsnType",formatter:e=>`Type: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new b.J2q.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"priceChange",name:"Change",field:"priceChange",filterable:!0,sortable:!0,minWidth:80,width:80,filter:{model:b.CuW.compoundInputNumber},type:b.PUO.number,formatter:b._tQ.multiple,params:{formatters:[b._tQ.dollar,$],maxDecimal:2}},{id:"price",name:"Price",field:"price",filterable:!0,sortable:!0,minWidth:70,width:70,filter:{model:b.CuW.compoundInputNumber},type:b.PUO.number,formatter:b._tQ.dollar,params:{maxDecimal:2}},{id:"quantity",name:"Quantity",field:"quantity",filterable:!0,sortable:!0,minWidth:70,width:70,filter:{model:b.CuW.compoundInputNumber},type:b.PUO.number},{id:"amount",name:"Amount",field:"amount",filterable:!0,sortable:!0,minWidth:70,width:60,filter:{model:b.CuW.compoundInputNumber},type:b.PUO.number,formatter:b._tQ.dollar,params:{maxDecimal:2},groupTotalsFormatter:b.tao.sumTotalsDollarBold},{id:"historic",name:"Price History",field:"historic",minWidth:100,width:150,maxWidth:150,formatter:G},{id:"execution",name:"Execution Timestamp",field:"execution",filterable:!0,sortable:!0,minWidth:125,formatter:b._tQ.dateTimeIsoAmPm,exportWithFormatter:!0,type:b.PUO.dateTimeIsoAM_PM,filter:{model:b.CuW.compoundDate}}],this.gridOptions={autoResize:{container:".trading-platform",rightPadding:0,bottomPadding:10},formatterOptions:{displayNegativeNumberWithParentheses:!0,thousandSeparator:","},draggableGrouping:{dropPlaceHolderText:"Drop a column header here to group by any of these available columns: Currency, Market or Type",deleteIconCssClass:"mdi mdi-close"},enableDraggableGrouping:!0,createPreHeaderPanel:!0,darkMode:this._darkMode,showPreHeaderPanel:!0,preHeaderPanelHeight:40,enableCellNavigation:!0,enableFiltering:!0,cellHighlightCssClass:"changed"}}getData(){const e=[];for(let t=0;t<200;t++){const i=Math.round(100*Math.random()),n=this.randomNumber(1,50),a=this.randomNumber(125,255),r=this.randomNumber(-25,35,!1),l=this.randomNumber(r,300),s=l<5?a:n,o=l*s,d=new Date;d.setHours(9,30,0);const m=Math.floor(10*Math.random())%2?"CAD":"USD",c=h.Jb.company.name();e[t]={id:t,currency:m,trsnType:Math.round(100*Math.random())%2?"Buy":"Sell",company:c,symbol:"CAD"===m?c.substr(0,3).toUpperCase()+".TO":c.substr(0,4).toUpperCase(),market:"CAD"===m?"TSX":l>200?"Nasdaq":"S&P 500",duration:t%33==0?null:100*Math.random()+"",percentCompleteNumber:i,priceChange:r,price:l,quantity:s,amount:o,execution:d,historic:[l]}}this.dataset=e}startSimulation(){const e={},t=this.randomNumber(this.minChangePerCycle,this.maxChangePerCycle);for(let i=0;i<t;i++){const t=this.randomNumber(1,50),i=this.randomNumber(125,255),n=Math.round(Math.random()*(this.dataset.length-1)),a=this.randomNumber(-25,25,!1),r=(0,b.A4q)(this.dataset[n]),l={...this.dataset[n]};l.priceChange=a,l.price=l.price+a<0?0:l.price+a,l.quantity=l.price<5?i:t,l.amount=l.price*l.quantity,l.trsnType=Math.round(100*Math.random())%2?"Buy":"Sell",l.execution=new Date,l.historic.push(l.price),l.historic=l.historic.slice(-20),e[n]||(e[n]={}),e[n].id="changed",this.renderCellHighlighting(l,this.findColumnById("priceChange"),a),(r.priceChange<0&&l.priceChange>0||r.priceChange>0&&l.priceChange<0)&&this.renderCellHighlighting(l,this.findColumnById("price"),a),this.aureliaGrid.dataView.updateItem(l.id,l)}this.timer=setTimeout(this.startSimulation.bind(this),this.refreshRate||0)}stopSimulation(){clearTimeout(this.timer)}findColumnById(e){return this.columnDefinitions.find((t=>t?.field===e))}renderCellHighlighting(e,t,i){if(e&&t){const n=this.aureliaGrid.dataView.getRowByItem(e);if(n>=0){const a={[n]:{[t.id]:i>=0?"changed-gain":"changed-loss"}};this.aureliaGrid.slickGrid.setCellCssStyles(`highlight_${[t.id]}${n}`,a),setTimeout((()=>this.removeUnsavedStylingFromCell(e,t,n)),this.highlightDuration)}}}removeUnsavedStylingFromCell(e,t,i){this.aureliaGrid.slickGrid.removeCellCssStyles(`highlight_${[t.id]}${i}`)}toggleFullScreen(){const e=document.querySelector(".trading-platform");e?.classList.contains("full-screen")?(e.classList.remove("full-screen"),this.isFullScreen=!1):e&&(e.classList.add("full-screen"),this.isFullScreen=!0),this.aureliaGrid.resizerService.resizeGrid()}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}randomNumber(e,t,i=!0){const n=Math.random()*(t-e+1)+e;return i?Math.floor(n):n}}a.K94.define(n,_)}}]);
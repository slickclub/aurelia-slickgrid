"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[802],{63802:(e,t,i)=>{i.r(t),i.d(t,{Example29:()=>p});var n={};i.r(n),i.d(n,{CustomFooter:()=>o});var a={};i.r(a),i.d(a,{default:()=>c,dependencies:()=>m,name:()=>r,register:()=>h,template:()=>l});var s=i(58932),d=i(98899);i(34473);let o=class{clickedTimes=0;clickMe(){this.clickedTimes++}};o=(0,s.Cg)([(0,d.EMX)({name:"custom-footer",template:'<button click.trigger="clickMe()">I\'m a button from an Aurelia custom element (click me)</button>\n  <div if.bind="clickedTimes">You\'ve clicked me ${clickedTimes} time(s)</div>'})],o);const r="example29",l='\n<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example29.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n\n<aurelia-slickgrid grid-id="grid"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset">\n  <div au-slot="slickgrid-header" class="custom-header-slot">\n    <h3>Grid with header and footer slot</h3>\n  </div>\n  <custom-footer class="custom-footer-slot"\n                  au-slot="slickgrid-footer">\n  </custom-footer>\n</aurelia-slickgrid>\n',c=l,m=[n];let f;function h(e){f||(f=d.K94.define({name:r,template:l,dependencies:m})),e.register(f)}var u=i(77155);let p=class{title="Example 29: Grid with Header and Footer slot";subTitle="Simple Grids with a custom header and footer via named slots";gridOptions;columnDefinitions=[];dataset=[];constructor(){this.defineGrids()}attached(){this.dataset=this.mockData(995)}defineGrids(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",formatter:u._tQ.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:u._tQ.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100}],this.gridOptions={enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800}}mockData(e){const t=[];for(let i=0;i<e;i++){const e=2e3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),a=Math.floor(29*Math.random()),s=Math.round(100*Math.random());t[i]={id:i,title:"Task "+i,duration:Math.round(100*Math.random())+"",percentComplete:s,start:new Date(e,n+1,a),finish:new Date(e+1,n+1,a),effortDriven:i%5==0}}return t}};p=(0,s.Cg)([(0,d.EMX)(a),(0,s.Sn)("design:paramtypes",[])],p)}}]);
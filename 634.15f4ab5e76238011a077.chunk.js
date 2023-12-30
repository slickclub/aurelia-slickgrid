"use strict";(self.webpackChunkaurelia_slickgrid_demo=self.webpackChunkaurelia_slickgrid_demo||[]).push([[634],{98618:(t,e,i)=>{i.d(e,{C:()=>o,e:()=>l});var s=i(27180);function o(t,e,i){let o;i={modalType:"edit",validationFailedMsg:"Some of the fields have failed validation",validationMsgPrefix:null,show:null,hide:null,position:null,destroy:null,formValues:{},editors:{},...i};const n=()=>{},r=t=>{const i=e[t],o=(0,s.osI)(i),n=i?.clientWidth??0,r=i?.clientHeight??0;return{top:o?.top??0,left:o?.left??0,bottom:(o?.top??0)+r,right:(o?.left??0)+n,width:n,height:r,visible:!0}};function a(a){const l=this;let d=[];l.getEditors=()=>d,l.destroy=()=>{let t=d.pop();for(;t;)t?.destroy(),t=d.pop();let o=e.pop();for(;o;)(0,s.EUQ)(o),o?.remove(),o=e.pop();i?.destroy?.(),d=[],e=null},l.focus=()=>{(o||d[0]).focus()},l.isValueChanged=()=>{let t=0;for(;t<d.length;){if(d[t].isValueChanged())return!0;t++}return!1},l.serializeValue=()=>{const t=[];let e=0;for(;e<d.length;)t[e]=d[e].serializeValue(),e++;return t},l.applyValue=(t,e)=>{let i=0;for(;i<d.length;)d[i].applyValue(t,e?.[i]),i++},l.loadValue=t=>{let e=0;for(;e<d.length;)d[e].loadValue(t),e++},l.validate=t=>{let s;o=null;const n=[];let r=0;for(;r<d.length;){const a=d[r].args?.column;if(void 0!==a?.id){const l=document.querySelector(".slick-editor-modal");let c=l?.querySelector(`.item-details-validation.editor-${a.id}`),h=l?.querySelector(`.item-details-label.editor-${a.id}`),u=l?.querySelector(`[data-editorid=${a.id}]`);const p=i?.validationMsgPrefix??"";t&&!u?.contains(t)||(s=d[r].validate(),s.valid?c&&(c.textContent="",u?.classList.remove("invalid"),h?.classList.remove("invalid")):(o=d[r],n.push({index:r,editor:d[r],container:e[r],msg:s.msg}),c&&(c.textContent=`${p}${s.msg}`,h?.classList.add("invalid"),u?.classList.add("invalid")))),c=null,h=null,u=null}r++}return t=null,n.length?{valid:!1,msg:i.validationFailedMsg,errors:n}:{valid:!0,msg:""}},l.hide=()=>{let t=0;for(;t<d.length;)d[t]?.hide?.(),t++;i?.hide?.()},l.show=()=>{let t=0;for(;t<d.length;)d[t]?.show?.(),t++;i?.show?.()},l.position=t=>{i?.position?.(t)},function(){let s={},o=0;for(;o<t.length;){if(t[o].editor){const l=t[o];s={...a},s.container=e[o],s.column=l,s.position=r(o),s.commitChanges=n,s.cancelChanges=n,s.compositeEditorOptions=i,s.formValues={};const c=new l.editor(s);i.editors[l.id]=c,d.push(c)}o++}setTimeout((()=>{Array.isArray(d)&&d.length>0&&"function"==typeof d[0].focus&&d[0].focus()}),0)}()}return a.prototype=this,a}var n=i(77498),r=i(92428);const a=t=>console.log(t.message);class l{get eventHandler(){return this._eventHandler}get dataView(){return this.grid?.getData()}get dataViewLength(){return this.dataView.getLength()}get formValues(){return this._formValues}get editors(){return this._editors}set editors(t){this._editors=t}get gridOptions(){return this.grid?.getOptions()}constructor(){this._columnDefinitions=[],this._lastActiveRowNumber=-1,this._formValues=null,this.gridService=null,this._eventHandler=new s.L07,this._bindEventService=new n.s}init(t,e){if(this.grid=t,this.gridService=e.get("GridService"),this.translaterService=e.get("TranslaterService"),!this.gridService)throw new Error("[Slickgrid-Universal] it seems that the GridService is not being loaded properly, make sure the Container Service is properly implemented.");if(this.gridOptions.enableTranslate&&(!this.translaterService||!this.translaterService.translate))throw new Error('[Slickgrid-Universal] requires a Translate Service to be installed and configured when the grid option "enableTranslate" is enabled.');this._locales=this.gridOptions?.locales??s.gTE.locales}dispose(){this._eventHandler.unsubscribeAll(),this._bindEventService.unbindAll(),this._formValues=null,this.disposeComponent()}disposeComponent(){this._modalBodyTopValidationElm?.remove(),this._modalSaveButtonElm?.remove(),"function"==typeof this._modalElm?.remove&&(this._modalElm.remove(),document.body.classList.remove("slick-modal-open")),this._editorContainers=[]}changeFormInputValue(t,e,i=!1,s=!0){const o=this.getColumnByObjectOrId(t),n="string"==typeof t?t:o?.id??"",a=this._editors?.[n];let l=e;if(!a&&!i)throw new Error(`Composite Editor with column id "${n}" not found.`);if("function"==typeof a?.setValue&&Array.isArray(this._editorContainers)){a.setValue(e,!0,s);const t=this._editorContainers.find((t=>t.dataset.editorid===n)),i=this.gridOptions?.compositeEditorOptions?.excludeDisabledFieldFormValues??!1;!a.disabled||a.disabled&&!i?t?.classList?.add("modified"):(l="",t?.classList?.remove("modified")),!a.disabled||""===l&&null===l&&void 0===l&&0===l||(l="")}const d=o?.field??"";if(o&&d?.includes(".")){const t=o.internalColumnEditor?.complexObjectPath??d??"";(0,r.setDeepValue)(this._formValues??{},t,e)}else this._formValues={...this._formValues,[n]:l}}changeFormValue(t,e){const i=this.getColumnByObjectOrId(t),s="string"==typeof t?t:i?.id??"",o=i?.field??t;if(o?.includes(".")){const t=i?.internalColumnEditor?.complexObjectPath??o??"";(0,r.setDeepValue)(this._formValues,t,e)}else this._formValues={...this._formValues,[s]:e};this._formValues=(0,r.deepMerge)({},this._itemDataContext,this._formValues)}changeFormEditorOption(t,e,i){const s=this._editors?.[t];if(!s?.changeEditorOption)throw new Error(`Editor with column id "${t}" not found OR the Editor does not support "changeEditorOption" (current only available with AutoComplete, Date, MultipleSelect & SingleSelect Editors).`);s.changeEditorOption(e,i)}disableFormInput(t,e=!0){const i=this._editors?.[t];i?.disable&&Array.isArray(this._editorContainers)&&i.disable(e)}openDetails(t){const e=t.onError??a,i={backdrop:"static",showCloseButtonOutside:!0,shouldClearRowSelectionAfterMassAction:!0,viewColumnLayout:"auto",modalType:"edit"};try{if(!this.grid||this.grid.getEditorLock().isActive()&&!this.grid.getEditorLock().commitCurrentEdit())return null;this._formValues=null,this._options={...i,...this.gridOptions.compositeEditorOptions,...t,labels:{...this.gridOptions.compositeEditorOptions?.labels,...t?.labels}},this._options.backdrop=void 0!==t.backdrop?t.backdrop:"static";const n=this._options.viewColumnLayout||1,a=this.grid.getActiveCell(),l=a?.cell??0,d=a?.row??0,c=this.grid.getUID()||"";let h=t.headerTitle||"";"function"==typeof this._options.onBeforeOpen&&this._options.onBeforeOpen(),this.hasRowSelectionEnabled()&&"auto-mass"===this._options.modalType&&this.grid.getSelectedRows&&((this.grid.getSelectedRows()||[]).length>0?(this._options.modalType="mass-selection",t?.headerTitleMassSelection&&(h=t?.headerTitleMassSelection)):(this._options.modalType="mass-update",t?.headerTitleMassUpdate&&(h=t?.headerTitleMassUpdate)));const u=this._options.modalType||"edit";if(!this.gridOptions.editable)return e({type:"error",code:"EDITABLE_GRID_REQUIRED",message:"Your grid must be editable in order to use the Composite Editor Modal."}),null;if(!this.gridOptions.enableCellNavigation)return e({type:"error",code:"ENABLE_CELL_NAVIGATION_REQUIRED",message:'Composite Editor requires the flag "enableCellNavigation" to be set to True in your Grid Options.'}),null;if(!(this.gridOptions.enableAddRow||"clone"!==u&&"create"!==u))return e({type:"error",code:"ENABLE_ADD_ROW_REQUIRED",message:'Composite Editor requires the flag "enableAddRow" to be set to True in your Grid Options when cloning/creating a new item.'}),null;if(!(a||"clone"!==u&&"edit"!==u))return e({type:"warning",code:"NO_RECORD_FOUND",message:"No records selected for edit or clone operation."}),null;{const t="mass-update"===u||"mass-selection"===u,i=t?{}:this.grid.getDataItem(d);this._originalDataContext=(0,r.deepCopy)(i),this._columnDefinitions=this.grid.getColumns();const a=this.hasRowSelectionEnabled()?this.grid.getSelectedRows():[],p=this.dataView?.getItemCount()??0;this._lastActiveRowNumber=d;const m=this.dataView.getAllSelectedIds(),g="create"===u?this.dataViewLength:d;if(!this.focusOnFirstColumnCellWithEditor(this._columnDefinitions,i,l,g,t))return null;if("edit"===u&&!i)return e({type:"warning",code:"ROW_NOT_EDITABLE",message:"Current row is not editable."}),null;if("mass-selection"===u&&a.length<1)return e({type:"warning",code:"ROW_SELECTION_REQUIRED",message:"You must select some rows before trying to apply new value(s)."}),null;let f=[];f=t?this._columnDefinitions.filter((t=>t.editor&&!0===t.internalColumnEditor?.massUpdate)):this._columnDefinitions.filter((t=>t.editor)),f.some((t=>void 0!==t.internalColumnEditor?.compositeEditorFormOrder))&&f.sort(((t,e)=>{const i=t?.internalColumnEditor?.compositeEditorFormOrder??1/0,o=e?.internalColumnEditor?.compositeEditorFormOrder??1/0;return(0,s.ZOg)(i,o,s.kuk.asc)}));const y=h.replace(/\{\{(.*?)\}\}/g,((t,e)=>(0,s.XiA)(i,e))),C="auto"===n?this.autoCalculateLayoutColumnCount(f.length):n;this._modalElm=(0,s.uq8)("div",{className:`slick-editor-modal ${c}`});const b=(0,s.uq8)("div",{className:"slick-editor-modal-content"});if(!isNaN(n)&&+n>1||"auto"===n&&C>1){const t=2===C?"split-view":"triple-split-view";b.classList.add(t)}const v=(0,s.uq8)("div",{className:"slick-editor-modal-title"});this.grid.applyHtmlCode(v,y);const E=(0,s.uq8)("button",{type:"button",ariaLabel:"Close",textContent:"×",className:"close",dataset:{action:"close"}});this._options.showCloseButtonOutside&&(v?.classList?.add("outside"),E?.classList?.add("outside"));const _=(0,s.uq8)("div",{ariaLabel:"Close",className:"slick-editor-modal-header"});_.appendChild(v),_.appendChild(E);const w=(0,s.uq8)("div",{className:"slick-editor-modal-body"});this._modalBodyTopValidationElm=(0,s.uq8)("div",{className:"validation-summary",style:{display:"none"}},w);const S=(0,s.uq8)("div",{className:"slick-editor-modal-footer"}),O=(0,s.uq8)("button",{type:"button",ariaLabel:this.getLabelText("cancelButton","TEXT_CANCEL","Cancel"),className:"btn btn-cancel btn-default btn-sm",textContent:this.getLabelText("cancelButton","TEXT_CANCEL","Cancel"),dataset:{action:"cancel"}});let R="",T="";switch(u){case"clone":T=this.getLabelText("cloneButton","TEXT_CLONE","Clone");break;case"mass-update":const t=this.getLabelText("massUpdateStatus","TEXT_ALL_X_RECORDS_SELECTED","All {{x}} records selected");R=this.parseText(t,{x:p}),T=this.getLabelText("massUpdateButton","TEXT_APPLY_MASS_UPDATE","Mass Update");break;case"mass-selection":const e=this.getLabelText("massSelectionStatus","TEXT_X_OF_Y_MASS_SELECTED","{{x}} of {{y}} selected");R=this.parseText(e,{x:m.length,y:p}),T=this.getLabelText("massSelectionButton","TEXT_APPLY_TO_SELECTION","Update Selection");break;default:T=this.getLabelText("saveButton","TEXT_SAVE","Save")}const V=(0,s.uq8)("div",{className:"footer-status-text",textContent:R});this._modalSaveButtonElm=(0,s.uq8)("button",{type:"button",className:"btn btn-save btn-primary btn-sm",ariaLabel:T,textContent:T,dataset:{action:"create"===u||"edit"===u?"save":u,ariaLabel:T}});const x=(0,s.uq8)("div",{className:"footer-buttons"});"mass-update"!==u&&"mass-selection"!==u||S.appendChild(V),x.appendChild(O),x.appendChild(this._modalSaveButtonElm),S.appendChild(x),b.appendChild(_),b.appendChild(w),b.appendChild(S),this._modalElm.appendChild(b);for(const t of f)if(t.editor){const e=(0,s.uq8)("div",{className:`item-details-container editor-${t.id}`});1===C?e.classList.add("slick-col-medium-12"):e.classList.add("slick-col-medium-6","slick-col-xlarge-"+12/C);const i=(0,s.uq8)("div",{className:`item-details-label editor-${t.id}`});this.grid.applyHtmlCode(i,this.getColumnLabel(t)||"n/a");const o=(0,s.uq8)("div",{className:"item-details-editor-container slick-cell",dataset:{editorid:`${t.id}`}}),n=(0,s.uq8)("div",{className:`item-details-validation editor-${t.id}`});if(this._options?.showResetButtonOnEachEditor){const e=this.createEditorResetButtonElement(`${t.id}`);this._bindEventService.bind(e,"click",this.handleResetInputValue.bind(this)),i.appendChild(e)}e.appendChild(i),e.appendChild(o),e.appendChild(n),w.appendChild(e)}if(this._options?.showFormResetButton){const t=this.createFormResetButtonElement();this._bindEventService.bind(t,"click",this.handleResetFormClicked.bind(this)),w.appendChild(t)}document.body.appendChild(this._modalElm),document.body.classList.add("slick-modal-open"),this._bindEventService.bind(document.body,"click",this.handleBodyClicked.bind(this)),this._editors={},this._editorContainers=f.map((t=>w.querySelector(`[data-editorid=${t.id}]`)))||[],this._compositeOptions={destroy:this.disposeComponent.bind(this),modalType:u,validationMsgPrefix:"* ",formValues:{},editors:this._editors};const I=new o(f,this._editorContainers,this._compositeOptions);this.grid.editActiveCell(I),this._bindEventService.bind(E,"click",this.cancelEditing.bind(this)),this._bindEventService.bind(O,"click",this.cancelEditing.bind(this)),this._bindEventService.bind(this._modalSaveButtonElm,"click",this.handleSaveClicked.bind(this)),this._bindEventService.bind(this._modalElm,"keydown",this.handleKeyDown.bind(this)),this._bindEventService.bind(this._modalElm,"focusout",this.validateCurrentEditor.bind(this)),this._bindEventService.bind(this._modalElm,"blur",this.validateCurrentEditor.bind(this)),this._eventHandler.subscribe(this.grid.onCompositeEditorChange,this.handleOnCompositeEditorChange.bind(this)),this._eventHandler.subscribe(this.grid.onAddNewRow,((t,e)=>{this._originalDataContext=this.insertNewItemInDataView(e.item)}))}return this}catch(t){this.dispose();const i="string"==typeof t?t:t?.message??t?.body?.message??"";return e({type:"error",code:"string"==typeof t?t:t?.status??t?.body?.status??i,message:i}),null}}async cancelEditing(){let t=!0;this.formValues&&Object.keys(this.formValues).length>0&&"function"==typeof this._options.onClose&&(t=await this._options.onClose()),t&&(this.grid.getEditController()?.cancelCurrentEdit(),"edit"!==this._options?.modalType&&"clone"!==this._options?.modalType||this.resetCurrentRowDataContext(),this.grid.setActiveRow(this._lastActiveRowNumber),this.dispose())}showValidationSummaryText(t,e=""){t&&""!==e?(this._modalBodyTopValidationElm.textContent=e,this._modalBodyTopValidationElm.style.display="block",this._modalBodyTopValidationElm.scrollIntoView?.(),this._modalSaveButtonElm.disabled=!1,this._modalSaveButtonElm.classList.remove("saving")):(this._modalBodyTopValidationElm.style.display="none",this._modalBodyTopValidationElm.textContent=e)}applySaveMassUpdateChanges(t,e,i=!0){const s=i?this.dataView.getItems():(0,r.deepCopy)(this.dataView.getItems());return Object.keys(t).forEach((e=>{e in t&&s.forEach((i=>{!(e in t)||void 0!==this._options?.validateMassUpdateChange&&!1===this._options.validateMassUpdateChange(e,i,t)||(i[e]=t[e])}))})),i&&(this.dataView.setItems(s,this.gridOptions.datasetIdPropertyName),this.grid.invalidate()),s}applySaveMassSelectionChanges(t,e,i=!0){const s=(e?.dataContextIds??[]).map((t=>this.dataView.getItemById(t))),o=i?s:(0,r.deepCopy)(s);return Object.keys(t).forEach((e=>{e in t&&o.forEach((i=>{!(e in t)||void 0!==this._options?.validateMassUpdateChange&&!1===this._options.validateMassUpdateChange(e,i,t)||(i[e]=t[e])}))})),i&&this.gridService?.updateItems(o),o}autoCalculateLayoutColumnCount(t){return t>=15?3:t>=8?2:1}createEditorResetButtonElement(t){const e=(0,s.uq8)("button",{type:"button",name:t,ariaLabel:"Reset",title:this._options?.labels?.resetFormButton??"Reset Form Input",className:"btn btn-xs btn-editor-reset"});if(this._options?.resetEditorButtonCssClass){const t=this._options?.resetEditorButtonCssClass.split(" ");for(const i of t)e.classList.add(i)}return e}createFormResetButtonElement(){const t=(0,s.uq8)("div",{className:"reset-container"}),e=(0,s.uq8)("button",{type:"button",className:"btn btn-sm reset-form"},t);return(0,s.uq8)("span",{className:this._options?.resetFormButtonIconCssClass??""},e),e.appendChild(document.createTextNode(" Reset Form")),t}executeOnError(t){(this._options?.onError??a)(t)}async executeOnSave(t,e,i,s){try{if(this.showValidationSummaryText(!1,""),this.validateCompositeEditors().valid){if(this._modalSaveButtonElm.classList.add("saving"),this._modalSaveButtonElm.disabled=!0,"function"==typeof this._options?.onSave){const i="mass-update"===this._options.modalType||"mass-selection"===this._options.modalType;let o;i&&this._options?.shouldPreviewMassChangeDataset&&(o=t(this.formValues,this.getCurrentRowSelections(),!1));const n=i?o:s;await(this._options?.onSave(this.formValues,this.getCurrentRowSelections(),n))&&(t(this.formValues,this.getCurrentRowSelections()),e())}else t(this.formValues,this.getCurrentRowSelections()),e();"function"==typeof i&&i(),this.dispose()}}catch(t){const e="string"==typeof t?t:t?.message??t?.body?.message??"";this.showValidationSummaryText(!0,e)}}focusOnFirstColumnCellWithEditor(t,e,i,s,o){const n=o&&!this.gridOptions.enableAddRow&&s>=this.dataViewLength?this.dataViewLength-1:s;let r=i;const a=t[i].editor;let l=this.grid.getCellNode(n,i);if(!a||!l||!this.getActiveCellEditor(n,i)){if(r=this.findNextAvailableEditorColumnIndex(t,e,s,o),-1===r)return this.executeOnError({type:"error",code:"NO_EDITOR_FOUND",message:"We could not find any Editor in your Column Definition"}),!1;this.grid.setActiveCell(n,r,!1),o&&this.grid.setActiveRow(this.dataViewLength,r,!0)}return l=this.grid.getCellNode(n,r),!!l}findNextAvailableEditorColumnIndex(t,e,i,s){let o=-1;for(let n=0;n<t.length;n++){const r=t[n];if(r.editor&&(!s||s&&r.internalColumnEditor?.massUpdate)){const t=this.grid.onBeforeEditCell.notify({row:i,cell:n,item:e,column:r,grid:this.grid,target:"composite",compositeEditorOptions:this._compositeOptions}).getReturnValue();if(this.grid.setActiveCell(i,n,!1),!1!==t){o=n;break}}}return o}getColumnByObjectOrId(t){let e;return"object"==typeof t?e=t:"string"==typeof t&&(e=this._columnDefinitions.find((e=>e.id===t))),e}getActiveCellEditor(t,e){return this.grid.setActiveCell(t,e,!1),this.grid.getCellEditor()}getColumnLabel(t){const e=this.gridOptions.columnGroupSeparator||" - ";let i=t.nameCompositeEditor||t.name||"",s=t.columnGroup||"";if(this.gridOptions.enableTranslate&&this.translaterService){const e=t.nameCompositeEditorKey||t.nameKey;e&&(i=this.translaterService.translate(e)),t.columnGroupKey&&this.translaterService?.translate&&(s=this.translaterService.translate(t.columnGroupKey))}const o=s?`${s}${e}${i}`:i;return o instanceof HTMLElement?o.innerHTML:o||""}getLabelText(t,e,i){const s={...this.gridOptions.compositeEditorOptions?.labels,...this._options?.labels};if(this.gridOptions?.enableTranslate&&this.translaterService?.translate&&s.hasOwnProperty(`${t}Key`)){const e=s[`${t}Key`];return this.translaterService.translate(e||"")}return s?.[t]??this._locales?.[e]??i}getCurrentRowSelections(){const t=this.dataView.getAllSelectedIds();return{gridRowIndexes:this.dataView.mapIdsToRows(t),dataContextIds:t}}handleBodyClicked(t){t.target?.classList?.contains("slick-editor-modal")&&"static"!==this._options?.backdrop&&this.dispose()}handleKeyDown(t){"Escape"===t.code?(this.cancelEditing(),t.stopPropagation(),t.preventDefault()):"Tab"===t.code&&this.validateCurrentEditor()}handleResetInputValue(t){const e=t.target.name,i=this._editors?.[e];i?.reset&&i.reset(),delete this._formValues?.[e]}async handleMassSaving(t,e){if(this.formValues&&0!==Object.keys(this.formValues).length){const i="mass-update"===t?"applySaveMassUpdateChanges":"applySaveMassSelectionChanges";this.executeOnSave(this[i].bind(this),e.bind(this))}else this.executeOnError({type:"warning",code:"NO_CHANGES_DETECTED",message:"Sorry we could not detect any changes."})}handleOnCompositeEditorChange(t,e){const i=e.column?.id??"";this._formValues={...this._formValues,...e.formValues};const s=this._editors?.[i],o=s?.isValueTouched?.()??s?.isValueChanged?.()??!1;this._itemDataContext=s?.dataContext??{};const n=this._modalElm.querySelector(`[data-editorid=${i}]`);n?.classList&&(o?n.classList.add("modified"):n.classList.remove("modified")),this.validateCompositeEditors()}hasRowSelectionEnabled(){const t=this.grid.getSelectionModel();return!(!this.gridOptions.enableRowSelection&&!this.gridOptions.enableCheckboxSelector||!t)}handleResetFormClicked(){for(const t of Object.keys(this._editors)){const e=this._editors[t];e?.reset&&e.reset()}this._formValues=(0,r.emptyObject)(this._formValues)}async handleSaveClicked(){const t=this._options?.modalType;switch(t){case"mass-update":this.handleMassSaving(t,(()=>{this.grid.getEditController()?.cancelCurrentEdit(),this.grid.setActiveCell(0,0,!1),this._options.shouldClearRowSelectionAfterMassAction&&this.grid.setSelectedRows([])}));break;case"mass-selection":this.handleMassSaving(t,(()=>{this.grid.getEditController()?.cancelCurrentEdit(),this.grid.setActiveRow(this._lastActiveRowNumber),this._options.shouldClearRowSelectionAfterMassAction&&this.grid.setSelectedRows([])}));break;case"clone":const e={...this._originalDataContext,...this.formValues},i=()=>{this.grid.getEditController()?.cancelCurrentEdit(),this.grid.setActiveCell(0,0,!1)};this.executeOnSave(this.insertNewItemInDataView.bind(this,e),i,this.resetCurrentRowDataContext.bind(this),e);break;default:let s=this.grid.getEditController()?.commitCurrentEdit();if(s&&"function"==typeof this._options?.onSave){const e="create"===t?this._originalDataContext:this.grid.getDataItem(this._lastActiveRowNumber);s=await(this._options?.onSave(this.formValues,this.getCurrentRowSelections(),e))}s&&this.dispose()}}insertNewItemInDataView(t){const e=this.dataView?.getItemCount()??0,i=this._options.insertNewId??e+1;return t[this.gridOptions.datasetIdPropertyName||"id"]=i,this.dataView.getItemById(i)?this.executeOnError({type:"error",code:"ITEM_ALREADY_EXIST",message:`The item object which you are trying to add already exist with the same Id:: ${i}`}):this.gridService?.addItem(t,this._options.insertOptions),t}parseText(t,e){return t.replace(/\{\{(.*?)\}\}/g,((t,i)=>void 0!==e[i]?e[i]:t))}resetCurrentRowDataContext(){const t=this.gridOptions.datasetIdPropertyName||"id";this.grid.getData().updateItem(this._originalDataContext[t],this._originalDataContext)}validateCompositeEditors(t){let e={valid:!0,msg:""};const i=this.grid.getCellEditor();return i&&(e=i.validate(t)),e}validateCurrentEditor(){const t=this.grid.getCellEditor();t?.validate&&t.validate()}}},54432:(t,e,i)=>{i.d(e,{AV:()=>o,tL:()=>u});var s=i(76024);function o(t,e){return JSON.stringify(void 0!==t?t:{},e)}const n={maxRetries:3,interval:1e3,strategy:0};class r{constructor(t){if(this.retryConfig={...n,...void 0!==t?t:{}},2===this.retryConfig.strategy&&this.retryConfig.interval<=1e3)throw new Error("An interval less than or equal to 1 second is not allowed when using the exponential retry strategy")}request(t){return t.retryConfig||(t.retryConfig={...this.retryConfig},t.retryConfig.counter=0),t.retryConfig.requestClone=t.clone(),t}response(t,e){return Reflect.deleteProperty(e,"retryConfig"),t}responseError(t,e,i){const{retryConfig:s}=e,{requestClone:o}=s;return Promise.resolve().then((()=>{if(s.counter<s.maxRetries){const n=void 0===s.doRetry||s.doRetry(t,e);return Promise.resolve(n).then((n=>{if(n){s.counter++;const t=a(s);return new Promise((e=>setTimeout(e,isNaN(t)?0:t))).then((()=>{const t=o.clone();return"function"==typeof s.beforeRetry?s.beforeRetry(t,i):t})).then((t=>{const e={...t,retryConfig:s};return i.fetch(e)}))}throw Reflect.deleteProperty(e,"retryConfig"),t}))}throw Reflect.deleteProperty(e,"retryConfig"),t}))}}function a(t){const{interval:e,strategy:i,minRandomInterval:s,maxRandomInterval:o,counter:n}=t;if("function"==typeof i)return t.strategy(n);switch(i){case 0:return l[0](e);case 1:return l[1](n,e);case 2:return l[2](n,e);case 3:return l[3](n,e,s,o);default:throw new Error("Unrecognized retry strategy")}}const l=[t=>t,(t,e)=>e*t,(t,e)=>1===t?e:e**t/1e3,(t,e,i=0,s=6e4)=>Math.random()*(s-i)+i];class d{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null}withBaseUrl(t){return this.baseUrl=t,this}withDefaults(t){return this.defaults=t,this}withInterceptor(t){return this.interceptors.push(t),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:c})}withRetry(t){const e=new r(t);return this.withInterceptor(e)}withDispatcher(t){return this.dispatcher=t,this}}function c(t){if(!t.ok)throw t;return t}const h=/^([a-z][a-z0-9+\-.]*:)?\/\//i,u=s.DI.createInterface("IHttpClient",(t=>t.singleton(p)));class p{constructor(){this.dispatcher=null,this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.interceptors=[]}configure(t){let e;if("object"==typeof t)e={defaults:t};else{if("function"!=typeof t)throw new Error("invalid config");{e=new d,e.baseUrl=this.baseUrl,e.defaults={...this.defaults},e.interceptors=this.interceptors,e.dispatcher=this.dispatcher;const i=t(e);Object.prototype.isPrototypeOf.call(d.prototype,i)&&(e=i)}}const i=e.defaults;if(void 0!==i&&Object.prototype.isPrototypeOf.call(Headers.prototype,i.headers))throw new Error("Default headers must be a plain object.");const s=e.interceptors;if(void 0!==s&&s.length){if(s.filter((t=>Object.prototype.isPrototypeOf.call(r.prototype,t))).length>1)throw new Error("Only one RetryInterceptor is allowed.");const t=s.findIndex((t=>Object.prototype.isPrototypeOf.call(r.prototype,t)));if(t>=0&&t!==s.length-1)throw new Error("The retry interceptor must be the last interceptor defined.")}return this.baseUrl=e.baseUrl,this.defaults=i,this.interceptors=void 0!==e.interceptors?e.interceptors:[],this.dispatcher=e.dispatcher,this.isConfigured=!0,this}fetch(t,e){this.trackRequestStart();let i=this.buildRequest(t,e);return this.processRequest(i,this.interceptors).then((t=>{let e;if(Object.prototype.isPrototypeOf.call(Response.prototype,t))e=Promise.resolve(t);else{if(!Object.prototype.isPrototypeOf.call(Request.prototype,t))throw new Error(`An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got [${t}]`);i=t,e=fetch(i)}return this.processResponse(e,this.interceptors,i)})).then((t=>Object.prototype.isPrototypeOf.call(Request.prototype,t)?this.fetch(t):t)).then((t=>(this.trackRequestEnd(),t)),(t=>{throw this.trackRequestEnd(),t}))}buildRequest(t,e){const i=null!==this.defaults?this.defaults:{};let s,o,n;const r=function(t){const e={},i=void 0!==t?t:{};for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]="function"==typeof i[t]?i[t]():i[t]);return e}(i.headers);if(Object.prototype.isPrototypeOf.call(Request.prototype,t))s=t,n=new Headers(s.headers).get("Content-Type");else{e||(e={}),o=e.body;const r=void 0!==o?{body:o}:null,a={...i,headers:{},...e,...r};n=new Headers(a.headers).get("Content-Type"),s=new Request(m(this.baseUrl,t),a)}return n||(new Headers(r).has("content-type")?s.headers.set("Content-Type",new Headers(r).get("content-type")):void 0!==o&&function(t){try{JSON.parse(t)}catch(t){return!1}return!0}(o)&&s.headers.set("Content-Type","application/json")),function(t,e){const i=void 0!==e?e:{};for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&!t.has(e)&&t.set(e,i[e])}(s.headers,r),void 0!==o&&Object.prototype.isPrototypeOf.call(Blob.prototype,o)&&o.type&&s.headers.set("Content-Type",o.type),s}get(t,e){return this.fetch(t,e)}post(t,e,i){return this.callFetch(t,e,i,"POST")}put(t,e,i){return this.callFetch(t,e,i,"PUT")}patch(t,e,i){return this.callFetch(t,e,i,"PATCH")}delete(t,e,i){return this.callFetch(t,e,i,"DELETE")}trackRequestStart(){if(this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!==this.dispatcher){const t=new this.dispatcher.ownerDocument.defaultView.CustomEvent("aurelia-fetch-client-request-started",{bubbles:!0,cancelable:!0});setTimeout((()=>{this.dispatcher.dispatchEvent(t)}),1)}}trackRequestEnd(){if(this.isRequesting=!! --this.activeRequestCount,!this.isRequesting&&null!==this.dispatcher){const t=new this.dispatcher.ownerDocument.defaultView.CustomEvent("aurelia-fetch-client-requests-drained",{bubbles:!0,cancelable:!0});setTimeout((()=>{this.dispatcher.dispatchEvent(t)}),1)}}processRequest(t,e){return this.applyInterceptors(t,e,"request","requestError",this)}processResponse(t,e,i){return this.applyInterceptors(t,e,"response","responseError",i,this)}applyInterceptors(t,e,i,s,...o){return(void 0!==e?e:[]).reduce(((t,e)=>{const n=e[i],r=e[s];return t.then(n?t=>n.call(e,t,...o):g,r?t=>r.call(e,t,...o):f)}),Promise.resolve(t))}callFetch(t,e,i,s){return i||(i={}),i.method=s,e&&(i.body=e),this.fetch(t,i)}}function m(t,e){return h.test(e)?e:(void 0!==t?t:"")+e}function g(t){return t}function f(t){throw t}}}]);
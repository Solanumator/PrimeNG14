"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[3034],{7371:(U,f,i)=>{i.d(f,{Q:()=>s,s:()=>n});var t=i(1571),d=i(6895),e=i(8476),Z=i(3421),c=i(7340),T=i(4174);function u(a,l){if(1&a&&(t.TgZ(0,"span",10),t._uU(1),t.qZA()),2&a){const r=t.oxw(2);t.uIk("id",r.id+"_header"),t.xp6(1),t.Oqu(r.header)}}function _(a,l){1&a&&t.GkF(0)}function h(a,l){}function v(a,l){1&a&&t.YNc(0,h,0,0,"ng-template")}function b(a,l){if(1&a){const r=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(D){t.CHM(r);const m=t.oxw(2);return t.KtG(m.onIconClick(D))})("keydown.enter",function(D){t.CHM(r);const m=t.oxw(2);return t.KtG(m.onIconClick(D))}),t._UZ(1,"span"),t.qZA()}if(2&a){const r=t.oxw(2);t.uIk("aria-label","collapse button")("id",r.id+"-label")("aria-controls",r.id+"-content")("aria-expanded",!r.collapsed),t.xp6(1),t.Tol(r.collapsed?r.expandIcon:r.collapseIcon)}}const A=function(a,l,r){return{"p-panel-icons-start":a,"p-panel-icons-end":l,"p-panel-icons-center":r}};function P(a,l){if(1&a){const r=t.EpF();t.TgZ(0,"div",6),t.NdJ("click",function(D){t.CHM(r);const m=t.oxw();return t.KtG(m.onHeaderClick(D))}),t.YNc(1,u,2,2,"span",7),t.Hsn(2,1),t.YNc(3,_,1,0,"ng-container",4),t.TgZ(4,"div",8),t.YNc(5,v,1,0,null,4),t.YNc(6,b,2,6,"button",9),t.qZA()()}if(2&a){const r=t.oxw();t.uIk("id",r.id+"-titlebar"),t.xp6(1),t.Q6J("ngIf",r.header),t.xp6(2),t.Q6J("ngTemplateOutlet",r.headerTemplate),t.xp6(1),t.Q6J("ngClass",t.kEZ(6,A,"start"===r.iconPos,"end"===r.iconPos,"center"===r.iconPos)),t.xp6(1),t.Q6J("ngTemplateOutlet",r.iconTemplate),t.xp6(1),t.Q6J("ngIf",r.toggleable)}}function C(a,l){1&a&&t.GkF(0)}function y(a,l){1&a&&t.GkF(0)}function x(a,l){if(1&a&&(t.TgZ(0,"div",12),t.Hsn(1,2),t.YNc(2,y,1,0,"ng-container",4),t.qZA()),2&a){const r=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",r.footerTemplate)}}const q=["*",[["p-header"]],[["p-footer"]]],E=function(a,l){return{"p-panel p-component":!0,"p-panel-toggleable":a,"p-panel-expanded":l}},w=function(a){return{transitionParams:a,height:"0",opacity:"0"}},O=function(a){return{value:"hidden",params:a}},M=function(a){return{transitionParams:a,height:"*",opacity:"1"}},L=function(a){return{value:"visible",params:a}},o=["*","p-header","p-footer"];let g=0,n=(()=>{class a{constructor(r){this.el=r,this.collapsed=!1,this.iconPos="end",this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new t.vpe,this.onBeforeToggle=new t.vpe,this.onAfterToggle=new t.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+g++}ngAfterContentInit(){this.templates.forEach(r=>{switch(r.getType()){case"header":this.headerTemplate=r.template;break;case"content":default:this.contentTemplate=r.template;break;case"footer":this.footerTemplate=r.template;break;case"icons":this.iconTemplate=r.template}})}onHeaderClick(r){"header"===this.toggler&&this.toggle(r)}onIconClick(r){"icon"===this.toggler&&this.toggle(r)}toggle(r){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:r,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(r):this.collapse(r)),r.preventDefault()}expand(r){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(r){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(r){this.animating=!1,this.onAfterToggle.emit({originalEvent:r,collapsed:this.collapsed})}}return a.\u0275fac=function(r){return new(r||a)(t.Y36(t.SBq))},a.\u0275cmp=t.Xpm({type:a,selectors:[["p-panel"]],contentQueries:function(r,p,D){if(1&r&&(t.Suo(D,e.$_,5),t.Suo(D,e.jx,4)),2&r){let m;t.iGM(m=t.CRH())&&(p.footerFacet=m.first),t.iGM(m=t.CRH())&&(p.templates=m)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:o,decls:7,vars:23,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],["role","tablist",1,"p-panel-icons",3,"ngClass"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(r,p){1&r&&(t.F$t(q),t.TgZ(0,"div",0),t.YNc(1,P,7,10,"div",1),t.TgZ(2,"div",2),t.NdJ("@panelContent.done",function(m){return p.onToggleDone(m)}),t.TgZ(3,"div",3),t.Hsn(4),t.YNc(5,C,1,0,"ng-container",4),t.qZA(),t.YNc(6,x,3,1,"div",5),t.qZA()()),2&r&&(t.Tol(p.styleClass),t.Q6J("ngClass",t.WLB(12,E,p.toggleable,!p.collapsed&&p.toggleable))("ngStyle",p.style),t.uIk("id",p.id),t.xp6(1),t.Q6J("ngIf",p.showHeader),t.xp6(1),t.Q6J("@panelContent",p.collapsed?t.VKq(17,O,t.VKq(15,w,p.animating?p.transitionOptions:"0ms")):t.VKq(21,L,t.VKq(19,M,p.animating?p.transitionOptions:"0ms"))),t.uIk("id",p.id+"-content")("aria-hidden",p.collapsed)("aria-labelledby",p.id+"-titlebar"),t.xp6(3),t.Q6J("ngTemplateOutlet",p.contentTemplate),t.xp6(1),t.Q6J("ngIf",p.footerFacet||p.footerTemplate))},dependencies:[d.mk,d.O5,d.tP,d.PC,T.H],styles:[".p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded .p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[(0,c.X$)("panelContent",[(0,c.SB)("hidden",(0,c.oB)({height:"0"})),(0,c.SB)("void",(0,c.oB)({height:"{{height}}"}),{params:{height:"0"}}),(0,c.SB)("visible",(0,c.oB)({height:"*"})),(0,c.eR)("visible <=> hidden",[(0,c.jt)("{{transitionParams}}")]),(0,c.eR)("void => hidden",(0,c.jt)("{{transitionParams}}")),(0,c.eR)("void => visible",(0,c.jt)("{{transitionParams}}"))])]},changeDetection:0}),a})(),s=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[d.ez,e.m8,Z.T,e.m8]}),a})()},3427:(U,f,i)=>{i.d(f,{Q:()=>t.Q});var t=i(7371)},7381:(U,f,i)=>{i.d(f,{a:()=>T,h:()=>c});var t=i(6895),d=i(1571);const e=["code"],Z=["*"];let c=(()=>{class u{constructor(h){this.el=h,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return u.\u0275fac=function(h){return new(h||u)(d.Y36(d.SBq))},u.\u0275cmp=d.Xpm({type:u,selectors:[["app-code"]],viewQuery:function(h,v){if(1&h&&d.Gf(e,5),2&h){let b;d.iGM(b=d.CRH())&&(v.codeViewChild=b.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:Z,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(h,v){1&h&&(d.F$t(),d.TgZ(0,"pre",0)(1,"code",null,1),d.Hsn(3),d._uU(4,"\n"),d.qZA()()),2&h&&(d.Akn(v.style),d.Tol(v.styleClass),d.Q6J("ngClass","language-"+v.lang))},dependencies:[t.mk],encapsulation:2}),u})(),T=(()=>{class u{}return u.\u0275fac=function(h){return new(h||u)},u.\u0275mod=d.oAB({type:u}),u.\u0275inj=d.cJS({imports:[t.ez]}),u})()},3034:(U,f,i)=>{i.r(f),i.d(f,{DragDropDemoModule:()=>L});var t=i(6895),d=i(9859),e=i(1571),Z=i(5872),c=i(2240);let T=(()=>{class o{constructor(n,s){this.el=n,this.zone=s,this.onDragStart=new e.vpe,this.onDragEnd=new e.vpe,this.onDrag=new e.vpe}get pDraggableDisabled(){return this._pDraggableDisabled}set pDraggableDisabled(n){this._pDraggableDisabled=n,this._pDraggableDisabled?this.unbindMouseListeners():(this.el.nativeElement.draggable=!0,this.bindMouseListeners())}ngAfterViewInit(){this.pDraggableDisabled||(this.el.nativeElement.draggable=!0,this.bindMouseListeners())}bindDragListener(){this.dragListener||this.zone.runOutsideAngular(()=>{this.dragListener=this.drag.bind(this),this.el.nativeElement.addEventListener("drag",this.dragListener)})}unbindDragListener(){this.dragListener&&this.zone.runOutsideAngular(()=>{this.el.nativeElement.removeEventListener("drag",this.dragListener),this.dragListener=null})}bindMouseListeners(){!this.mouseDownListener&&!this.mouseUpListener&&this.zone.runOutsideAngular(()=>{this.mouseDownListener=this.mousedown.bind(this),this.mouseUpListener=this.mouseup.bind(this),this.el.nativeElement.addEventListener("mousedown",this.mouseDownListener),this.el.nativeElement.addEventListener("mouseup",this.mouseUpListener)})}unbindMouseListeners(){this.mouseDownListener&&this.mouseUpListener&&this.zone.runOutsideAngular(()=>{this.el.nativeElement.removeEventListener("mousedown",this.mouseDownListener),this.el.nativeElement.removeEventListener("mouseup",this.mouseUpListener),this.mouseDownListener=null,this.mouseUpListener=null})}drag(n){this.onDrag.emit(n)}dragStart(n){this.allowDrag()&&!this.pDraggableDisabled?(this.dragEffect&&(n.dataTransfer.effectAllowed=this.dragEffect),n.dataTransfer.setData("text",this.scope),this.onDragStart.emit(n),this.bindDragListener()):n.preventDefault()}dragEnd(n){this.onDragEnd.emit(n),this.unbindDragListener()}mousedown(n){this.handle=n.target}mouseup(n){this.handle=null}allowDrag(){return!this.dragHandle||!this.handle||c.p.matches(this.handle,this.dragHandle)}ngOnDestroy(){this.unbindDragListener(),this.unbindMouseListeners()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(e.SBq),e.Y36(e.R0b))},o.\u0275dir=e.lG2({type:o,selectors:[["","pDraggable",""]],hostAttrs:[1,"p-element"],hostBindings:function(n,s){1&n&&e.NdJ("dragstart",function(l){return s.dragStart(l)})("dragend",function(l){return s.dragEnd(l)})},inputs:{scope:["pDraggable","scope"],dragEffect:"dragEffect",dragHandle:"dragHandle",pDraggableDisabled:"pDraggableDisabled"},outputs:{onDragStart:"onDragStart",onDragEnd:"onDragEnd",onDrag:"onDrag"}}),o})(),u=(()=>{class o{constructor(n,s){this.el=n,this.zone=s,this.onDragEnter=new e.vpe,this.onDragLeave=new e.vpe,this.onDrop=new e.vpe}ngAfterViewInit(){this.pDroppableDisabled||this.bindDragOverListener()}bindDragOverListener(){this.dragOverListener||this.zone.runOutsideAngular(()=>{this.dragOverListener=this.dragOver.bind(this),this.el.nativeElement.addEventListener("dragover",this.dragOverListener)})}unbindDragOverListener(){this.dragOverListener&&this.zone.runOutsideAngular(()=>{this.el.nativeElement.removeEventListener("dragover",this.dragOverListener),this.dragOverListener=null})}dragOver(n){n.preventDefault()}drop(n){this.allowDrop(n)&&(c.p.removeClass(this.el.nativeElement,"p-draggable-enter"),n.preventDefault(),this.onDrop.emit(n))}dragEnter(n){n.preventDefault(),this.dropEffect&&(n.dataTransfer.dropEffect=this.dropEffect),c.p.addClass(this.el.nativeElement,"p-draggable-enter"),this.onDragEnter.emit(n)}dragLeave(n){n.preventDefault(),c.p.removeClass(this.el.nativeElement,"p-draggable-enter"),this.onDragLeave.emit(n)}allowDrop(n){let s=n.dataTransfer.getData("text");if("string"==typeof this.scope&&s==this.scope)return!0;if(this.scope instanceof Array)for(let a=0;a<this.scope.length;a++)if(s==this.scope[a])return!0;return!1}ngOnDestroy(){this.unbindDragOverListener()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(e.SBq),e.Y36(e.R0b))},o.\u0275dir=e.lG2({type:o,selectors:[["","pDroppable",""]],hostAttrs:[1,"p-element"],hostBindings:function(n,s){1&n&&e.NdJ("drop",function(l){return s.drop(l)})("dragenter",function(l){return s.dragEnter(l)})("dragleave",function(l){return s.dragLeave(l)})},inputs:{scope:["pDroppable","scope"],pDroppableDisabled:"pDroppableDisabled",dropEffect:"dropEffect"},outputs:{onDragEnter:"onDragEnter",onDragLeave:"onDragLeave",onDrop:"onDrop"}}),o})(),_=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.ez]}),o})();var h=i(485),v=i(951),b=i(4619),A=i(3032),P=i(7381);function C(o,g){if(1&o){const n=e.EpF();e.TgZ(0,"div")(1,"div",21),e.NdJ("onDragStart",function(){const l=e.CHM(n).$implicit,r=e.oxw();return e.KtG(r.dragStart(l))})("onDragEnd",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.dragEnd())}),e.TgZ(2,"div",22),e._UZ(3,"img",23),e.qZA(),e.TgZ(4,"div",24)(5,"h5",25),e._uU(6),e.qZA(),e._UZ(7,"i",26),e.TgZ(8,"span",27),e._uU(9),e.qZA()(),e.TgZ(10,"div",28)(11,"h6",25),e._uU(12),e.qZA(),e.TgZ(13,"span"),e._uU(14),e.qZA()()()()}if(2&o){const n=g.$implicit;e.xp6(3),e.MGl("src","assets/showcase/images/demo/product/",n.image,"",e.LSH),e.Q6J("alt",n.name),e.xp6(3),e.Oqu(n.name),e.xp6(3),e.Oqu(n.category),e.xp6(3),e.hij("$",n.price,""),e.xp6(1),e.Tol("product-badge status-"+n.inventoryStatus.toLowerCase()),e.xp6(1),e.Oqu(n.inventoryStatus)}}function y(o,g){1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"ID"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Category"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Name"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Price"),e.qZA()())}function x(o,g){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA()()),2&o){const n=g.$implicit;e.xp6(2),e.Oqu(n.id),e.xp6(2),e.Oqu(n.category),e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(n.price)}}let q=(()=>{class o{constructor(n){this.productService=n}ngOnInit(){this.selectedProducts=[],this.productService.getProductsSmall().then(n=>this.availableProducts=n)}dragStart(n){this.draggedProduct=n}drop(){if(this.draggedProduct){let n=this.findIndex(this.draggedProduct);this.selectedProducts=[...this.selectedProducts,this.draggedProduct],this.availableProducts=this.availableProducts.filter((s,a)=>a!=n),this.draggedProduct=null}}dragEnd(){this.draggedProduct=null}findIndex(n){let s=-1;for(let a=0;a<this.availableProducts.length;a++)if(n.id===this.availableProducts[a].id){s=a;break}return s}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(Z.M))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:208,vars:2,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","dragdrop"],[1,"content-section","implementation"],[1,"card"],[1,"grid"],[1,"col-12","md:col-6","drag-column"],[4,"ngFor","ngForOf"],["pDroppable","products",1,"col-12","md:col-6","drop-column",3,"onDrop"],[3,"value"],["pTemplate","header"],["pTemplate","body"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/dragdrop","target","_blank",1,"btn-viewsource"],["lang","css"],["pDraggable","products",1,"product-item",3,"onDragStart","onDragEnd"],[1,"image-container"],[1,"product-image",3,"src","alt"],[1,"product-list-detail"],[1,"mb-2"],[1,"pi","pi-tag","product-category-icon"],[1,"product-category"],[1,"product-list-action"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Drag and Drop"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"pDraggable and pDroppable directives apply drag-drop behaviors to any element."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h5"),e._uU(10,"Drag and Drop to Table"),e.qZA(),e.TgZ(11,"div",5)(12,"div",6),e.YNc(13,C,15,8,"div",7),e.qZA(),e.TgZ(14,"div",8),e.NdJ("onDrop",function(){return s.drop()}),e.TgZ(15,"p-table",9),e.YNc(16,y,9,0,"ng-template",10),e.YNc(17,x,9,4,"ng-template",11),e.qZA()()()()(),e.TgZ(18,"div",12)(19,"p-tabView")(20,"p-tabPanel",13)(21,"h5"),e._uU(22,"Import"),e.qZA(),e.TgZ(23,"app-code",14),e.IAx(),e._uU(24,"\nimport {DragDropModule} from 'primeng/dragdrop';\n"),e.fQ9(),e.qZA(),e.TgZ(25,"h5"),e._uU(26,"Getting Started"),e.qZA(),e.TgZ(27,"p"),e._uU(28,"pDraggable and pDroppable are attached to a target element to add drag-drop behavior. The value of a Directive attribute is required and it defines the scope to match draggables with droppables. Droppable scope can also be an array to accept multiple droppables."),e.qZA(),e.TgZ(29,"app-code",15),e.IAx(),e._uU(30,'\n<div pDraggable="dd">Draggable Div</div>\n\n<div pDroppable="dd">Droppable Div</div>\n'),e.fQ9(),e.qZA(),e.TgZ(31,"h5"),e._uU(32,"Drag Handle"),e.qZA(),e.TgZ(33,"p"),e._uU(34,"Drag handle is used to restrict dragging unless mousedown occurs on the specified element. Panel below can only be dragged using its header."),e.qZA(),e.TgZ(35,"app-code",15),e.IAx(),e._uU(36,'\n<div pDraggable="pnl"  dragHandle=".p-panel-titlebar">\n    <p-panel header="Drag Header">\n        Content\n    </p-panel>\n</div>\n'),e.fQ9(),e.qZA(),e.TgZ(37,"h5"),e._uU(38,"Drop Indicator"),e.qZA(),e.TgZ(39,"p"),e._uU(40,"When a suitable draggable enters a droppable area, the area gets "),e.TgZ(41,"i"),e._uU(42,"p-draggable-enter"),e.qZA(),e._uU(43," class that can be used to style the droppable section."),e.qZA(),e.TgZ(44,"h5"),e._uU(45,"Draggable"),e.qZA(),e.TgZ(46,"h4"),e._uU(47,"Attributes"),e.qZA(),e.TgZ(48,"div",16)(49,"table",17)(50,"thead")(51,"tr")(52,"th"),e._uU(53,"Name"),e.qZA(),e.TgZ(54,"th"),e._uU(55,"Type"),e.qZA(),e.TgZ(56,"th"),e._uU(57,"Default"),e.qZA(),e.TgZ(58,"th"),e._uU(59,"Description"),e.qZA()()(),e.TgZ(60,"tbody")(61,"tr")(62,"td"),e._uU(63,"dragEffect"),e.qZA(),e.TgZ(64,"td"),e._uU(65,"string"),e.qZA(),e.TgZ(66,"td"),e._uU(67,"null"),e.qZA(),e.TgZ(68,"td"),e._uU(69,"Defines the cursor style, valid values are none, copy, move, link, copyMove, copyLink, linkMove and all."),e.qZA()(),e.TgZ(70,"tr")(71,"td"),e._uU(72,"dragHandle"),e.qZA(),e.TgZ(73,"td"),e._uU(74,"string"),e.qZA(),e.TgZ(75,"td"),e._uU(76,"null"),e.qZA(),e.TgZ(77,"td"),e._uU(78,"Selector to define the drag handle, by default anywhere on the target element is a drag handle to start dragging."),e.qZA()(),e.TgZ(79,"tr")(80,"td"),e._uU(81,"pDraggableDisabled"),e.qZA(),e.TgZ(82,"td"),e._uU(83,"boolean"),e.qZA(),e.TgZ(84,"td"),e._uU(85,"false"),e.qZA(),e.TgZ(86,"td"),e._uU(87,"Whether the element is draggable, useful for conditional cases."),e.qZA()()()()(),e.TgZ(88,"h4"),e._uU(89,"Events"),e.qZA(),e.TgZ(90,"div",16)(91,"table",17)(92,"thead")(93,"tr")(94,"th"),e._uU(95,"Name"),e.qZA(),e.TgZ(96,"th"),e._uU(97,"Parameters"),e.qZA(),e.TgZ(98,"th"),e._uU(99,"Description"),e.qZA()()(),e.TgZ(100,"tbody")(101,"tr")(102,"td"),e._uU(103,"onDragStart"),e.qZA(),e.TgZ(104,"td"),e._uU(105," event: browser event "),e.qZA(),e.TgZ(106,"td"),e._uU(107,"Callback to invoke when drag begins."),e.qZA()(),e.TgZ(108,"tr")(109,"td"),e._uU(110,"onDrag"),e.qZA(),e.TgZ(111,"td"),e._uU(112," event: browser event "),e.qZA(),e.TgZ(113,"td"),e._uU(114,"Callback to invoke on dragging."),e.qZA()(),e.TgZ(115,"tr")(116,"td"),e._uU(117,"onDragEnd"),e.qZA(),e.TgZ(118,"td"),e._uU(119," event: browser event "),e.qZA(),e.TgZ(120,"td"),e._uU(121,"Callback to invoke when drag ends."),e.qZA()()()()(),e.TgZ(122,"h5"),e._uU(123,"Droppable"),e.qZA(),e.TgZ(124,"h4"),e._uU(125,"Attributes"),e.qZA(),e.TgZ(126,"div",16)(127,"table",17)(128,"thead")(129,"tr")(130,"th"),e._uU(131,"Name"),e.qZA(),e.TgZ(132,"th"),e._uU(133,"Type"),e.qZA(),e.TgZ(134,"th"),e._uU(135,"Default"),e.qZA(),e.TgZ(136,"th"),e._uU(137,"Description"),e.qZA()()(),e.TgZ(138,"tbody")(139,"tr")(140,"td"),e._uU(141,"dropEffect"),e.qZA(),e.TgZ(142,"td"),e._uU(143,"string"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"null"),e.qZA(),e.TgZ(146,"td"),e._uU(147,"Defines the cursor style on drag over, valid values are copy, relocate, link and move."),e.qZA()(),e.TgZ(148,"tr")(149,"td"),e._uU(150,"pDroppableDisabled"),e.qZA(),e.TgZ(151,"td"),e._uU(152,"boolean"),e.qZA(),e.TgZ(153,"td"),e._uU(154,"false"),e.qZA(),e.TgZ(155,"td"),e._uU(156,"Whether the element is droppable, useful for conditional cases."),e.qZA()()()()(),e.TgZ(157,"h4"),e._uU(158,"Events"),e.qZA(),e.TgZ(159,"div",16)(160,"table",17)(161,"thead")(162,"tr")(163,"th"),e._uU(164,"Name"),e.qZA(),e.TgZ(165,"th"),e._uU(166,"Parameters"),e.qZA(),e.TgZ(167,"th"),e._uU(168,"Description"),e.qZA()()(),e.TgZ(169,"tbody")(170,"tr")(171,"td"),e._uU(172,"onDragEnter"),e.qZA(),e.TgZ(173,"td"),e._uU(174," event: browser event "),e.qZA(),e.TgZ(175,"td"),e._uU(176,"Callback to invoke when a draggable enters drop area."),e.qZA()(),e.TgZ(177,"tr")(178,"td"),e._uU(179,"onDrop"),e.qZA(),e.TgZ(180,"td"),e._uU(181," event: browser event "),e.qZA(),e.TgZ(182,"td"),e._uU(183,"Callback to invoke when a draggable is dropped onto drop area."),e.qZA()(),e.TgZ(184,"tr")(185,"td"),e._uU(186,"onDragLeave"),e.qZA(),e.TgZ(187,"td"),e._uU(188," event: browser event "),e.qZA(),e.TgZ(189,"td"),e._uU(190,"Callback to invoke when a draggable leave drop area."),e.qZA()()()()(),e.TgZ(191,"h5"),e._uU(192,"Dependencies"),e.qZA(),e.TgZ(193,"p"),e._uU(194,"Native HTML5 DragDrop."),e.qZA()(),e.TgZ(195,"p-tabPanel",18)(196,"a",19)(197,"span"),e._uU(198,"View on GitHub"),e.qZA()(),e.TgZ(199,"app-code",15),e.IAx(),e._uU(200,"\n"),e.TgZ(201,"h5"),e._uU(202,"Drag and Drop to Table"),e.qZA(),e._uU(203,'\n<div class="grid">\n    <div class="col-12 md:col-6 drag-column">\n        <div *ngFor="let product of availableProducts">\n            <div class="product-item" pDraggable="products" (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">\n                <div class="image-container">\n                        <img src="assets/showcase/images/demo/product/{{product.image}}" [alt]="product.name" class="product-image" />\n                </div>\n                <div class="product-list-detail">\n                    <h5 class="mb-2">{{product.name}}</h5>\n                    <i class="pi pi-tag product-category-icon"></i>\n                    <span class="product-category">{{product.category}}</span>\n                </div>\n                <div class="product-list-action">\n                    <h6 class="mb-2">${{product.price}}</h6>\n                    <span class="\'product-badge status-\'{{product.inventoryStatus.toLowerCase()}}">{{product.inventoryStatus}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="col-12 md:col-6 drop-column" pDroppable="products" (onDrop)="drop()">\n    <p-table [value]="selectedProducts">\n        <ng-template pTemplate="header">\n            <tr>\n                <th>ID</th>\n                <th>Category</th>\n                <th>Name</th>\n                <th>Price</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate="body" let-product>\n            <tr>\n                    <td>{{product.id}}</td>\n                    <td>{{product.category}}</td>\n                    <td>{{product.name}}</td>\n                    <td>{{product.price}}</td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n</div>\n'),e.fQ9(),e.qZA(),e.TgZ(204,"app-code",14),e.IAx(),e._uU(205,"\nexport class DragDropDemo {\n\n    availableProducts: Product[];\n    \n    selectedProducts: Product[];\n    \n    draggedProduct: Product;\n    \n    constructor(private productService: ProductService) { }\n    \n    ngOnInit() {\n        this.selectedProducts = [];\n        this.productService.getProductsSmall().then(products => this.availableProducts = products);\n    }\n    \n    dragStart(event,product: Product) {\n        this.draggedProduct = product;\n    }\n    \n    drop(event) {\n        if (this.draggedProduct) {\n            let draggedProductIndex = this.findIndex(this.draggedProduct);\n            this.selectedProducts = [...this.selectedProducts, this.draggedProduct];\n            this.availableProducts = this.availableProducts.filter((val,i) => i!=draggedProductIndex);\n            this.draggedProduct = null;\n        }\n    }\n    \n    dragEnd(event) {\n        this.draggedProduct = null;\n    }\n    \n    findIndex(product: Product) {\n        let index = -1;\n        for(let i = 0; i < this.availableProducts.length; i++) {\n            if (product.id === this.availableProducts[i].id) {\n                index = i;\n                break;\n            }\n        }\n        return index;\n    }\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(206,"app-code",20),e.IAx(),e._uU(207,"\n:host ::ng-deep .drag-column {\n    padding-right: .5em;\n}\n\n.drop-column {\n    border: 1px solid transparent;\n    transition: border-color .2s;\n\n    &.p-draggable-enter {\n        border-color: var(--primary-color); \n    }\n}\n\n.product-item {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: .5rem;\n    width: 100%;\n    border-bottom: 1px solid var(--surface-d);\n\n\timg {\n\t\twidth: 75px;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n        margin-right: 1rem;\n\t}\n\n\t.product-list-detail {\n\t\tflex: 1 1 0;\n\t}\n\n\t.product-list-action {\n\t\tdisplay: flex;\n        flex-direction: column;\n        align-items: flex-end;\n    }\n\n    .product-category-icon {\n        vertical-align: middle;\n        margin-right: .5rem;\n    }\n\n    .product-category {\n        vertical-align: middle;\n        line-height: 1;\n    }\n}\n\n[pDraggable] {\n    cursor: move;\n}\n\n@media screen and (max-width: 576px) {\n    .product-item {\n        flex-wrap: wrap;\n\n        .image-container {\n            width: 100%;\n            text-align: center;\n        }\n\n        img {\n            margin: 0 0 1rem 0;\n            width: 100px;\n        }\n    }\n}\n"),e.fQ9(),e.qZA()()()()),2&n&&(e.xp6(13),e.Q6J("ngForOf",s.availableProducts),e.xp6(2),e.Q6J("value",s.selectedProducts))},dependencies:[t.sg,T,u,h.jx,v.iA,b.xf,b.x4,A.P,P.h],styles:["[_nghost-%COMP%]     .drag-column{padding-right:.5em}.drop-column[_ngcontent-%COMP%]{border:1px solid transparent;transition:border-color .2s}.drop-column.p-draggable-enter[_ngcontent-%COMP%]{border-color:var(--primary-color)}.product-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1rem;width:100%;border-bottom:1px solid var(--surface-d)}.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b;margin-right:1rem}.product-item[_ngcontent-%COMP%]   .product-list-detail[_ngcontent-%COMP%]{flex:1 1 0}.product-item[_ngcontent-%COMP%]   .product-list-action[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.product-item[_ngcontent-%COMP%]   .product-category-icon[_ngcontent-%COMP%]{vertical-align:middle;margin-right:.5rem}.product-item[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%]{vertical-align:middle;line-height:1}[pDraggable][_ngcontent-%COMP%]{cursor:move}@media screen and (max-width: 576px){.product-item[_ngcontent-%COMP%]{flex-wrap:wrap}.product-item[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:100%;text-align:center}.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 0 1rem;width:100px}}"]}),o})(),E=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild([{path:"",component:q}]),d.Bz]}),o})();var w=i(3427),O=i(4434),M=i(1508);let L=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.ez,E,_,w.Q,O.U$,M.LU,A.L,P.a]}),o})()}}]);
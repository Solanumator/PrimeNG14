"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[9354],{7371:(v,h,i)=>{i.d(h,{Q:()=>M,s:()=>D});var t=i(1571),s=i(6895),e=i(8476),f=i(3421),r=i(7340),_=i(4174);function d(a,o){if(1&a&&(t.TgZ(0,"span",10),t._uU(1),t.qZA()),2&a){const n=t.oxw(2);t.uIk("id",n.id+"_header"),t.xp6(1),t.Oqu(n.header)}}function m(a,o){1&a&&t.GkF(0)}function u(a,o){}function g(a,o){1&a&&t.YNc(0,u,0,0,"ng-template")}function b(a,o){if(1&a){const n=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(c){t.CHM(n);const p=t.oxw(2);return t.KtG(p.onIconClick(c))})("keydown.enter",function(c){t.CHM(n);const p=t.oxw(2);return t.KtG(p.onIconClick(c))}),t._UZ(1,"span"),t.qZA()}if(2&a){const n=t.oxw(2);t.uIk("aria-label","collapse button")("id",n.id+"-label")("aria-controls",n.id+"-content")("aria-expanded",!n.collapsed),t.xp6(1),t.Tol(n.collapsed?n.expandIcon:n.collapseIcon)}}const U=function(a,o,n){return{"p-panel-icons-start":a,"p-panel-icons-end":o,"p-panel-icons-center":n}};function A(a,o){if(1&a){const n=t.EpF();t.TgZ(0,"div",6),t.NdJ("click",function(c){t.CHM(n);const p=t.oxw();return t.KtG(p.onHeaderClick(c))}),t.YNc(1,d,2,2,"span",7),t.Hsn(2,1),t.YNc(3,m,1,0,"ng-container",4),t.TgZ(4,"div",8),t.YNc(5,g,1,0,null,4),t.YNc(6,b,2,6,"button",9),t.qZA()()}if(2&a){const n=t.oxw();t.uIk("id",n.id+"-titlebar"),t.xp6(1),t.Q6J("ngIf",n.header),t.xp6(2),t.Q6J("ngTemplateOutlet",n.headerTemplate),t.xp6(1),t.Q6J("ngClass",t.kEZ(6,U,"start"===n.iconPos,"end"===n.iconPos,"center"===n.iconPos)),t.xp6(1),t.Q6J("ngTemplateOutlet",n.iconTemplate),t.xp6(1),t.Q6J("ngIf",n.toggleable)}}function y(a,o){1&a&&t.GkF(0)}function I(a,o){1&a&&t.GkF(0)}function C(a,o){if(1&a&&(t.TgZ(0,"div",12),t.Hsn(1,2),t.YNc(2,I,1,0,"ng-container",4),t.qZA()),2&a){const n=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",n.footerTemplate)}}const k=["*",[["p-header"]],[["p-footer"]]],Z=function(a,o){return{"p-panel p-component":!0,"p-panel-toggleable":a,"p-panel-expanded":o}},T=function(a){return{transitionParams:a,height:"0",opacity:"0"}},P=function(a){return{value:"hidden",params:a}},B=function(a){return{transitionParams:a,height:"*",opacity:"1"}},q=function(a){return{value:"visible",params:a}},x=["*","p-header","p-footer"];let E=0,D=(()=>{class a{constructor(n){this.el=n,this.collapsed=!1,this.iconPos="end",this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new t.vpe,this.onBeforeToggle=new t.vpe,this.onAfterToggle=new t.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+E++}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"header":this.headerTemplate=n.template;break;case"content":default:this.contentTemplate=n.template;break;case"footer":this.footerTemplate=n.template;break;case"icons":this.iconTemplate=n.template}})}onHeaderClick(n){"header"===this.toggler&&this.toggle(n)}onIconClick(n){"icon"===this.toggler&&this.toggle(n)}toggle(n){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:n,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(n):this.collapse(n)),n.preventDefault()}expand(n){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(n){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(n){this.animating=!1,this.onAfterToggle.emit({originalEvent:n,collapsed:this.collapsed})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(t.SBq))},a.\u0275cmp=t.Xpm({type:a,selectors:[["p-panel"]],contentQueries:function(n,l,c){if(1&n&&(t.Suo(c,e.$_,5),t.Suo(c,e.jx,4)),2&n){let p;t.iGM(p=t.CRH())&&(l.footerFacet=p.first),t.iGM(p=t.CRH())&&(l.templates=p)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:x,decls:7,vars:23,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],["role","tablist",1,"p-panel-icons",3,"ngClass"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(n,l){1&n&&(t.F$t(k),t.TgZ(0,"div",0),t.YNc(1,A,7,10,"div",1),t.TgZ(2,"div",2),t.NdJ("@panelContent.done",function(p){return l.onToggleDone(p)}),t.TgZ(3,"div",3),t.Hsn(4),t.YNc(5,y,1,0,"ng-container",4),t.qZA(),t.YNc(6,C,3,1,"div",5),t.qZA()()),2&n&&(t.Tol(l.styleClass),t.Q6J("ngClass",t.WLB(12,Z,l.toggleable,!l.collapsed&&l.toggleable))("ngStyle",l.style),t.uIk("id",l.id),t.xp6(1),t.Q6J("ngIf",l.showHeader),t.xp6(1),t.Q6J("@panelContent",l.collapsed?t.VKq(17,P,t.VKq(15,T,l.animating?l.transitionOptions:"0ms")):t.VKq(21,q,t.VKq(19,B,l.animating?l.transitionOptions:"0ms"))),t.uIk("id",l.id+"-content")("aria-hidden",l.collapsed)("aria-labelledby",l.id+"-titlebar"),t.xp6(3),t.Q6J("ngTemplateOutlet",l.contentTemplate),t.xp6(1),t.Q6J("ngIf",l.footerFacet||l.footerTemplate))},dependencies:[s.mk,s.O5,s.tP,s.PC,_.H],styles:[".p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded .p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[(0,r.X$)("panelContent",[(0,r.SB)("hidden",(0,r.oB)({height:"0"})),(0,r.SB)("void",(0,r.oB)({height:"{{height}}"}),{params:{height:"0"}}),(0,r.SB)("visible",(0,r.oB)({height:"*"})),(0,r.eR)("visible <=> hidden",[(0,r.jt)("{{transitionParams}}")]),(0,r.eR)("void => hidden",(0,r.jt)("{{transitionParams}}")),(0,r.eR)("void => visible",(0,r.jt)("{{transitionParams}}"))])]},changeDetection:0}),a})(),M=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[s.ez,e.m8,f.T,e.m8]}),a})()},3427:(v,h,i)=>{i.d(h,{Q:()=>t.Q});var t=i(7371)},7381:(v,h,i)=>{i.d(h,{a:()=>_,h:()=>r});var t=i(6895),s=i(1571);const e=["code"],f=["*"];let r=(()=>{class d{constructor(u){this.el=u,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return d.\u0275fac=function(u){return new(u||d)(s.Y36(s.SBq))},d.\u0275cmp=s.Xpm({type:d,selectors:[["app-code"]],viewQuery:function(u,g){if(1&u&&s.Gf(e,5),2&u){let b;s.iGM(b=s.CRH())&&(g.codeViewChild=b.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:f,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(u,g){1&u&&(s.F$t(),s.TgZ(0,"pre",0)(1,"code",null,1),s.Hsn(3),s._uU(4,"\n"),s.qZA()()),2&u&&(s.Akn(g.style),s.Tol(g.styleClass),s.Q6J("ngClass","language-"+g.lang))},dependencies:[t.mk],encapsulation:2}),d})(),_=(()=>{class d{}return d.\u0275fac=function(u){return new(u||d)},d.\u0275mod=s.oAB({type:d}),d.\u0275inj=s.cJS({imports:[t.ez]}),d})()},9354:(v,h,i)=>{i.r(h),i.d(h,{BlockUIDemoModule:()=>a});var t=i(6895),s=i(9859),e=i(1571),f=i(8476),r=i(9716),_=i(2240);const d=["mask"];function m(o,n){1&o&&e.GkF(0)}const u=function(o){return{"p-blockui-document":o,"p-blockui p-component-overlay p-component-overlay-enter":!0}},g=function(o){return{display:o}},b=["*"];let U=(()=>{class o{constructor(l,c,p){this.el=l,this.cd=c,this.config=p,this.autoZIndex=!0,this.baseZIndex=0}get blocked(){return this._blocked}set blocked(l){this.mask&&this.mask.nativeElement?l?this.block():this.unblock():this._blocked=l}ngAfterViewInit(){if(this.target&&!this.target.getBlockableElement)throw"Target of BlockUI must implement BlockableUI interface"}ngAfterContentInit(){this.templates.forEach(l=>{l.getType(),this.contentTemplate=l.template})}block(){this._blocked=!0,this.target?(this.target.getBlockableElement().appendChild(this.mask.nativeElement),this.target.getBlockableElement().style.position="relative"):document.body.appendChild(this.mask.nativeElement),this.autoZIndex&&r.P9.set("modal",this.mask.nativeElement,this.baseZIndex+this.config.zIndex.modal)}unblock(){this.animationEndListener=this.destroyModal.bind(this),this.mask.nativeElement.addEventListener("animationend",this.animationEndListener),_.p.addClass(this.mask.nativeElement,"p-component-overlay-leave")}destroyModal(){this._blocked=!1,_.p.removeClass(this.mask.nativeElement,"p-component-overlay-leave"),r.P9.clear(this.mask.nativeElement),this.el.nativeElement.appendChild(this.mask.nativeElement),this.unbindAnimationEndListener(),this.cd.markForCheck()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.mask.nativeElement.removeEventListener("animationend",this.animationEndListener),this.animationEndListener=null)}ngOnDestroy(){this.unblock(),this.destroyModal()}}return o.\u0275fac=function(l){return new(l||o)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(f.b4))},o.\u0275cmp=e.Xpm({type:o,selectors:[["p-blockUI"]],contentQueries:function(l,c,p){if(1&l&&e.Suo(p,f.jx,4),2&l){let w;e.iGM(w=e.CRH())&&(c.templates=w)}},viewQuery:function(l,c){if(1&l&&e.Gf(d,5),2&l){let p;e.iGM(p=e.CRH())&&(c.mask=p.first)}},hostAttrs:[1,"p-element"],inputs:{target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",styleClass:"styleClass",blocked:"blocked"},ngContentSelectors:b,decls:4,vars:9,consts:[[3,"ngClass","ngStyle"],["mask",""],[4,"ngTemplateOutlet"]],template:function(l,c){1&l&&(e.F$t(),e.TgZ(0,"div",0,1),e.Hsn(2),e.YNc(3,m,1,0,"ng-container",2),e.qZA()),2&l&&(e.Tol(c.styleClass),e.Q6J("ngClass",e.VKq(5,u,!c.target))("ngStyle",e.VKq(7,g,c.blocked?"flex":"none")),e.xp6(3),e.Q6J("ngTemplateOutlet",c.contentTemplate))},dependencies:[t.mk,t.tP,t.PC],styles:[".p-blockui{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;transition-property:background-color;display:flex;align-items:center;justify-content:center}.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:transparent}\n"],encapsulation:2,changeDetection:0}),o})(),A=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.ez]}),o})();var y=i(2863),I=i(7371),C=i(485),k=i(4619),Z=i(7381),T=i(3032);function P(o,n){1&o&&e._UZ(0,"iframe",26)}const B=function(){return["/theming"]};let q=(()=>{class o{constructor(){this.blockedPanel=!1,this.blockedDocument=!1}blockDocument(){this.blockedDocument=!0,setTimeout(()=>{this.blockedDocument=!1},3e3)}}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:173,vars:5,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","blockui","stackblitz","blockui-demo"],[1,"content-section","implementation"],[1,"card"],[3,"blocked"],["type","button","pButton","","pRipple","","label","Block",3,"click"],["type","button","pButton","","pRipple","","label","Unblock",3,"click"],[3,"target","blocked"],[1,"pi","pi-lock",2,"font-size","3rem"],["header","Header","styleClass","mt-4"],["pnl",""],[1,"m-0"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/blockui","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-blockui-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["lang","css"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-blockui-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(l,c){if(1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"BlockUI"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"BlockUI can either block other components or the whole page."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h5"),e._uU(10,"Document"),e.qZA(),e._UZ(11,"p-blockUI",5),e.TgZ(12,"button",6),e.NdJ("click",function(){return c.blockDocument()}),e.qZA(),e.TgZ(13,"h5"),e._uU(14,"Panel"),e.qZA(),e.TgZ(15,"button",6),e.NdJ("click",function(){return c.blockedPanel=!0}),e.qZA(),e.TgZ(16,"button",7),e.NdJ("click",function(){return c.blockedPanel=!1}),e.qZA(),e.TgZ(17,"p-blockUI",8),e._UZ(18,"i",9),e.qZA(),e.TgZ(19,"p-panel",10,11)(21,"p",12),e._uU(22,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),e.qZA()()()(),e.TgZ(23,"div",13)(24,"p-tabView")(25,"p-tabPanel",14)(26,"h5"),e._uU(27,"Import"),e.qZA(),e.TgZ(28,"app-code",15),e.IAx(),e._uU(29,"\nimport {BlockUIModule} from 'primeng/blockui';\n"),e.fQ9(),e.qZA(),e.TgZ(30,"h5"),e._uU(31,"Getting Started"),e.qZA(),e.TgZ(32,"p"),e._uU(33,"BlockUI is controlled using the "),e.TgZ(34,"i"),e._uU(35,"blocked"),e.qZA(),e._uU(36," property and component to block is defined as target. If target is not provided, document itself is selected as the block target."),e.qZA(),e.TgZ(37,"app-code",15),e.IAx(),e._uU(38,"\nexport class BlockUIDemo {\n\n    blocked: boolean;\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(39,"app-code",16),e.IAx(),e._uU(40,'\n<p-blockUI [blocked]="blocked"></p-blockUI>\n'),e.fQ9(),e.qZA(),e.TgZ(41,"p"),e._uU(42,"To block a certain component, define a local ng-template variable and bind it to the target option. The target component must implement the BlockableUI interface, otherwise an exception is thrown."),e.qZA(),e.TgZ(43,"app-code",16),e.IAx(),e._uU(44,'\n<p-blockUI [blocked]="blockedDocument" [target]="pnl"></p-blockUI>\n\n<p-panel #pnl header="Panel Header">\n    Content of Panel\n</p-panel>\n'),e.fQ9(),e.qZA(),e.TgZ(45,"h5"),e._uU(46,"Custom Content"),e.qZA(),e.TgZ(47,"p"),e._uU(48,"Blocker mask is customized by simply adding the content inside the component"),e.qZA(),e.TgZ(49,"p")(50,"app-code",16),e.IAx(),e._uU(51,'\n<p-blockUI [target]="pnl" [blocked]="blockedPanel">\n    <i class="pi pi-lock" style="font-size: 3rem"></i>\n</p-blockUI>\n\n<p-panel #pnl header="Panel Header">\n    Content of Panel\n</p-panel>\n'),e.fQ9(),e.qZA()(),e.TgZ(52,"h5"),e._uU(53,"Properties"),e.qZA(),e.TgZ(54,"div",17)(55,"table",18)(56,"thead")(57,"tr")(58,"th"),e._uU(59,"Name"),e.qZA(),e.TgZ(60,"th"),e._uU(61,"Type"),e.qZA(),e.TgZ(62,"th"),e._uU(63,"Default"),e.qZA(),e.TgZ(64,"th"),e._uU(65,"Description"),e.qZA()()(),e.TgZ(66,"tbody")(67,"tr")(68,"td"),e._uU(69,"blocked"),e.qZA(),e.TgZ(70,"td"),e._uU(71,"boolean"),e.qZA(),e.TgZ(72,"td"),e._uU(73,"false"),e.qZA(),e.TgZ(74,"td"),e._uU(75,"Controls the blocked state."),e.qZA()(),e.TgZ(76,"tr")(77,"td"),e._uU(78,"target"),e.qZA(),e.TgZ(79,"td"),e._uU(80,"any"),e.qZA(),e.TgZ(81,"td"),e._uU(82,"document"),e.qZA(),e.TgZ(83,"td"),e._uU(84,"Name of the local ng-template variable referring to another component."),e.qZA()(),e.TgZ(85,"tr")(86,"td"),e._uU(87,"baseZIndex"),e.qZA(),e.TgZ(88,"td"),e._uU(89,"number"),e.qZA(),e.TgZ(90,"td"),e._uU(91,"0"),e.qZA(),e.TgZ(92,"td"),e._uU(93,"Base zIndex value to use in layering."),e.qZA()(),e.TgZ(94,"tr")(95,"td"),e._uU(96,"autoZIndex"),e.qZA(),e.TgZ(97,"td"),e._uU(98,"boolean"),e.qZA(),e.TgZ(99,"td"),e._uU(100,"true"),e.qZA(),e.TgZ(101,"td"),e._uU(102,"Whether to automatically manage layering."),e.qZA()(),e.TgZ(103,"tr")(104,"td"),e._uU(105,"styleClass"),e.qZA(),e.TgZ(106,"td"),e._uU(107,"string"),e.qZA(),e.TgZ(108,"td"),e._uU(109,"false"),e.qZA(),e.TgZ(110,"td"),e._uU(111,"Style class of the component."),e.qZA()()()()(),e.TgZ(112,"h5"),e._uU(113,"Templates"),e.qZA(),e.TgZ(114,"div",17)(115,"table",18)(116,"thead")(117,"tr")(118,"th"),e._uU(119,"Name"),e.qZA(),e.TgZ(120,"th"),e._uU(121,"Parameters"),e.qZA()()(),e.TgZ(122,"tbody")(123,"tr")(124,"td"),e._uU(125,"content"),e.qZA(),e.TgZ(126,"td"),e._uU(127,"-"),e.qZA()()()()(),e.TgZ(128,"h5"),e._uU(129,"Styling"),e.qZA(),e.TgZ(130,"p"),e._uU(131,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(132,"a",19),e._uU(133,"theming page"),e.qZA(),e._uU(134,"."),e.qZA(),e.TgZ(135,"div",17)(136,"table",18)(137,"thead")(138,"tr")(139,"th"),e._uU(140,"Name"),e.qZA(),e.TgZ(141,"th"),e._uU(142,"Element"),e.qZA()()(),e.TgZ(143,"tbody")(144,"tr")(145,"td"),e._uU(146,"p-blockui"),e.qZA(),e.TgZ(147,"td"),e._uU(148,"Mask element."),e.qZA()(),e.TgZ(149,"tr")(150,"td"),e._uU(151,"p-blockui-document"),e.qZA(),e.TgZ(152,"td"),e._uU(153,"Mask element in full screen mode."),e.qZA()()()()(),e.TgZ(154,"h5"),e._uU(155,"Dependencies"),e.qZA(),e.TgZ(156,"p"),e._uU(157,"None."),e.qZA()(),e.TgZ(158,"p-tabPanel",20)(159,"a",21)(160,"span"),e._uU(161,"View on GitHub"),e.qZA()(),e.TgZ(162,"a",22)(163,"span"),e._uU(164,"Edit in StackBlitz"),e.qZA()(),e.TgZ(165,"app-code",16),e.IAx(),e._uU(166,'\n<h5>Document</h5>\n<p-blockUI [blocked]="blockedDocument"></p-blockUI>\n\n<button type="button" pButton pRipple label="Block" (click)="blockDocument()"></button>\n\n<h5>Panel</h5>\n<button type="button" pButton pRipple label="Block" (click)="blockedPanel=true"></button>\n<button type="button" pButton pRipple label="Unblock" (click)="blockedPanel=false"></button>\n\n<p-blockUI [target]="pnl" [blocked]="blockedPanel">\n    <i class="pi pi-lock" style="font-size: 3rem"></i>\n</p-blockUI>\n<p-panel #pnl header="Header" styleClass="mt-4">\n    <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</p-panel>\n'),e.fQ9(),e.qZA(),e.TgZ(167,"app-code",15),e.IAx(),e._uU(168,"\nexport class BlockUIDemo {\n\n    blockedPanel: boolean = false;\n\n    blockedDocument: boolean = false;\n\n    blockDocument() {\n        this.blockedDocument = true;\n        setTimeout(() => {\n            this.blockedDocument = false;\n        }, 3000);\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(169,"app-code",23),e.IAx(),e._uU(170,"\n:host ::ng-deep button {\n    margin-right: .25em;\n}\n\n:host ::ng-deep .p-component-overlay-enter .pi.pi-lock {\n    animation: enter 150ms forwards;\n}\n\n:host ::ng-deep .p-component-overlay-leave .pi.pi-lock {\n    animation: leave 150ms forwards;\n}\n\n@keyframes enter {\n    from {\n        color: transparent;\n    }\n    to {\n        color: var(--text-color);\n    }\n}\n\n@keyframes leave {\n    from {\n        color: var(--text-color);\n    }\n    to {\n        color: transparent;\n    }\n}\n"),e.fQ9(),e.qZA()(),e.TgZ(171,"p-tabPanel",24),e.YNc(172,P,1,0,"ng-template",25),e.qZA()()()),2&l){const p=e.MAs(20);e.xp6(11),e.Q6J("blocked",c.blockedDocument),e.xp6(6),e.Q6J("target",p)("blocked",c.blockedPanel),e.xp6(115),e.Q6J("routerLink",e.DdM(4,B))}},dependencies:[s.yS,U,y.Hq,I.s,C.jx,k.xf,k.x4,Z.h,T.P],styles:["[_nghost-%COMP%]     button{margin-right:.25em}[_nghost-%COMP%]     .p-component-overlay-enter .pi.pi-lock{animation:enter .15s forwards}[_nghost-%COMP%]     .p-component-overlay-leave .pi.pi-lock{animation:leave .15s forwards}@keyframes enter{0%{color:transparent}to{color:var(--text-color)}}@keyframes leave{0%{color:var(--text-color)}to{color:transparent}}"]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.Bz.forChild([{path:"",component:q}]),s.Bz]}),o})();var E=i(1928),D=i(3427),M=i(1508);let a=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.ez,x,A,E.hJ,D.Q,M.LU,Z.a,T.L]}),o})()}}]);
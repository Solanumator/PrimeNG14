"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[4393],{7371:(b,T,i)=>{i.d(T,{Q:()=>E,s:()=>D});var t=i(1571),l=i(6895),e=i(8476),A=i(3421),p=i(7340),f=i(4174);function r(a,c){if(1&a&&(t.TgZ(0,"span",10),t._uU(1),t.qZA()),2&a){const n=t.oxw(2);t.uIk("id",n.id+"_header"),t.xp6(1),t.Oqu(n.header)}}function m(a,c){1&a&&t.GkF(0)}function g(a,c){}function u(a,c){1&a&&t.YNc(0,g,0,0,"ng-template")}function v(a,c){if(1&a){const n=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(Z){t.CHM(n);const d=t.oxw(2);return t.KtG(d.onIconClick(Z))})("keydown.enter",function(Z){t.CHM(n);const d=t.oxw(2);return t.KtG(d.onIconClick(Z))}),t._UZ(1,"span"),t.qZA()}if(2&a){const n=t.oxw(2);t.uIk("aria-label","collapse button")("id",n.id+"-label")("aria-controls",n.id+"-content")("aria-expanded",!n.collapsed),t.xp6(1),t.Tol(n.collapsed?n.expandIcon:n.collapseIcon)}}const y=function(a,c,n){return{"p-panel-icons-start":a,"p-panel-icons-end":c,"p-panel-icons-center":n}};function C(a,c){if(1&a){const n=t.EpF();t.TgZ(0,"div",6),t.NdJ("click",function(Z){t.CHM(n);const d=t.oxw();return t.KtG(d.onHeaderClick(Z))}),t.YNc(1,r,2,2,"span",7),t.Hsn(2,1),t.YNc(3,m,1,0,"ng-container",4),t.TgZ(4,"div",8),t.YNc(5,u,1,0,null,4),t.YNc(6,v,2,6,"button",9),t.qZA()()}if(2&a){const n=t.oxw();t.uIk("id",n.id+"-titlebar"),t.xp6(1),t.Q6J("ngIf",n.header),t.xp6(2),t.Q6J("ngTemplateOutlet",n.headerTemplate),t.xp6(1),t.Q6J("ngClass",t.kEZ(6,y,"start"===n.iconPos,"end"===n.iconPos,"center"===n.iconPos)),t.xp6(1),t.Q6J("ngTemplateOutlet",n.iconTemplate),t.xp6(1),t.Q6J("ngIf",n.toggleable)}}function U(a,c){1&a&&t.GkF(0)}function q(a,c){1&a&&t.GkF(0)}function x(a,c){if(1&a&&(t.TgZ(0,"div",12),t.Hsn(1,2),t.YNc(2,q,1,0,"ng-container",4),t.qZA()),2&a){const n=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",n.footerTemplate)}}const s=["*",[["p-header"]],[["p-footer"]]],_=function(a,c){return{"p-panel p-component":!0,"p-panel-toggleable":a,"p-panel-expanded":c}},h=function(a){return{transitionParams:a,height:"0",opacity:"0"}},P=function(a){return{value:"hidden",params:a}},w=function(a){return{transitionParams:a,height:"*",opacity:"1"}},I=function(a){return{value:"visible",params:a}},M=["*","p-header","p-footer"];let k=0,D=(()=>{class a{constructor(n){this.el=n,this.collapsed=!1,this.iconPos="end",this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new t.vpe,this.onBeforeToggle=new t.vpe,this.onAfterToggle=new t.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+k++}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"header":this.headerTemplate=n.template;break;case"content":default:this.contentTemplate=n.template;break;case"footer":this.footerTemplate=n.template;break;case"icons":this.iconTemplate=n.template}})}onHeaderClick(n){"header"===this.toggler&&this.toggle(n)}onIconClick(n){"icon"===this.toggler&&this.toggle(n)}toggle(n){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:n,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(n):this.collapse(n)),n.preventDefault()}expand(n){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(n){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(n){this.animating=!1,this.onAfterToggle.emit({originalEvent:n,collapsed:this.collapsed})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(t.SBq))},a.\u0275cmp=t.Xpm({type:a,selectors:[["p-panel"]],contentQueries:function(n,o,Z){if(1&n&&(t.Suo(Z,e.$_,5),t.Suo(Z,e.jx,4)),2&n){let d;t.iGM(d=t.CRH())&&(o.footerFacet=d.first),t.iGM(d=t.CRH())&&(o.templates=d)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:M,decls:7,vars:23,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],["role","tablist",1,"p-panel-icons",3,"ngClass"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(n,o){1&n&&(t.F$t(s),t.TgZ(0,"div",0),t.YNc(1,C,7,10,"div",1),t.TgZ(2,"div",2),t.NdJ("@panelContent.done",function(d){return o.onToggleDone(d)}),t.TgZ(3,"div",3),t.Hsn(4),t.YNc(5,U,1,0,"ng-container",4),t.qZA(),t.YNc(6,x,3,1,"div",5),t.qZA()()),2&n&&(t.Tol(o.styleClass),t.Q6J("ngClass",t.WLB(12,_,o.toggleable,!o.collapsed&&o.toggleable))("ngStyle",o.style),t.uIk("id",o.id),t.xp6(1),t.Q6J("ngIf",o.showHeader),t.xp6(1),t.Q6J("@panelContent",o.collapsed?t.VKq(17,P,t.VKq(15,h,o.animating?o.transitionOptions:"0ms")):t.VKq(21,I,t.VKq(19,w,o.animating?o.transitionOptions:"0ms"))),t.uIk("id",o.id+"-content")("aria-hidden",o.collapsed)("aria-labelledby",o.id+"-titlebar"),t.xp6(3),t.Q6J("ngTemplateOutlet",o.contentTemplate),t.xp6(1),t.Q6J("ngIf",o.footerFacet||o.footerTemplate))},dependencies:[l.mk,l.O5,l.tP,l.PC,f.H],styles:[".p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded .p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[(0,p.X$)("panelContent",[(0,p.SB)("hidden",(0,p.oB)({height:"0"})),(0,p.SB)("void",(0,p.oB)({height:"{{height}}"}),{params:{height:"0"}}),(0,p.SB)("visible",(0,p.oB)({height:"*"})),(0,p.eR)("visible <=> hidden",[(0,p.jt)("{{transitionParams}}")]),(0,p.eR)("void => hidden",(0,p.jt)("{{transitionParams}}")),(0,p.eR)("void => visible",(0,p.jt)("{{transitionParams}}"))])]},changeDetection:0}),a})(),E=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[l.ez,e.m8,A.T,e.m8]}),a})()},3427:(b,T,i)=>{i.d(T,{Q:()=>t.Q});var t=i(7371)},7381:(b,T,i)=>{i.d(T,{a:()=>f,h:()=>p});var t=i(6895),l=i(1571);const e=["code"],A=["*"];let p=(()=>{class r{constructor(g){this.el=g,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return r.\u0275fac=function(g){return new(g||r)(l.Y36(l.SBq))},r.\u0275cmp=l.Xpm({type:r,selectors:[["app-code"]],viewQuery:function(g,u){if(1&g&&l.Gf(e,5),2&g){let v;l.iGM(v=l.CRH())&&(u.codeViewChild=v.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:A,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(g,u){1&g&&(l.F$t(),l.TgZ(0,"pre",0)(1,"code",null,1),l.Hsn(3),l._uU(4,"\n"),l.qZA()()),2&g&&(l.Akn(u.style),l.Tol(u.styleClass),l.Q6J("ngClass","language-"+u.lang))},dependencies:[t.mk],encapsulation:2}),r})(),f=(()=>{class r{}return r.\u0275fac=function(g){return new(g||r)},r.\u0275mod=l.oAB({type:r}),r.\u0275inj=l.cJS({imports:[t.ez]}),r})()},4393:(b,T,i)=>{i.r(T),i.d(T,{ChipDemoModule:()=>x});var t=i(6895),l=i(9859),e=i(1571),A=i(485),p=i(4619),f=i(8683),r=i(3032),m=i(7381);function g(s,_){1&s&&e._UZ(0,"iframe",35)}const u=function(){return["/theming"]};let v=(()=>{class s{}return s.\u0275fac=function(h){return new(h||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["ng-component"]],decls:226,vars:6,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","chip","stackblitz","chip-demo"],[1,"content-section","implementation"],[1,"card"],[1,"flex","align-items-center"],["label","Action","styleClass","mr-2"],["label","Comedy","styleClass","mr-2"],["label","Mystery","styleClass","mr-2"],["label","Thriller",3,"removable"],["label","Apple","icon","pi pi-apple","styleClass","mr-2"],["label","Facebook","icon","pi pi-facebook","styleClass","mr-2"],["label","Google","icon","pi pi-google","styleClass","mr-2"],["label","Microsoft","icon","pi pi-microsoft",3,"removable"],["label","Amy Elsner","image","assets/showcase/images/demo/avatar/amyelsner.png","styleClass","mr-2"],["label","Asiya Javayant","image","assets/showcase/images/demo/avatar/asiyajavayant.png","styleClass","mr-2"],["label","Onyama Limba","image","assets/showcase/images/demo/avatar/onyamalimba.png","styleClass","mr-2"],["label","Xuxue Feng","image","assets/showcase/images/demo/avatar/xuxuefeng.png",3,"removable"],["label","Action","styleClass","mr-2 custom-chip"],["label","Comedy","styleClass","mr-2 custom-chip"],["label","Onyama Limba","image","assets/showcase/images/demo/avatar/onyamalimba.png","styleClass","mr-2 custom-chip"],["label","Xuxue Feng","image","assets/showcase/images/demo/avatar/xuxuefeng.png","styleClass","custom-chip",3,"removable"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chip","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-chip-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["lang","css"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-chip-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(h,P){1&h&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Chip"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Chip represents entities using icons, labels and images."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h5"),e._uU(10,"Basic"),e.qZA(),e.TgZ(11,"div",5),e._UZ(12,"p-chip",6)(13,"p-chip",7)(14,"p-chip",8)(15,"p-chip",9),e.qZA(),e.TgZ(16,"h5"),e._uU(17,"Icon"),e.qZA(),e.TgZ(18,"div",5),e._UZ(19,"p-chip",10)(20,"p-chip",11)(21,"p-chip",12)(22,"p-chip",13),e.qZA(),e.TgZ(23,"h5"),e._uU(24,"Image"),e.qZA(),e.TgZ(25,"div",5),e._UZ(26,"p-chip",14)(27,"p-chip",15)(28,"p-chip",16)(29,"p-chip",17),e.qZA(),e.TgZ(30,"h5"),e._uU(31,"Styling"),e.qZA(),e.TgZ(32,"div",5),e._UZ(33,"p-chip",18)(34,"p-chip",19)(35,"p-chip",20)(36,"p-chip",21),e.qZA()()(),e.TgZ(37,"div",22)(38,"p-tabView")(39,"p-tabPanel",23)(40,"h5"),e._uU(41,"Import"),e.qZA(),e.TgZ(42,"app-code",24),e.IAx(),e._uU(43,"\nimport { ChipModule } from 'primeng/chip';\n"),e.fQ9(),e.qZA(),e.TgZ(44,"h5"),e._uU(45,"Getting Started"),e.qZA(),e.TgZ(46,"p"),e._uU(47,"Chip can display labels, icons and images."),e.qZA(),e.TgZ(48,"app-code",25),e.IAx(),e._uU(49,'\n<p-chip label="Text Only"></p-chip>\n<p-chip label="Text with icon" icon="pi pi-check"></p-chip>\n<p-chip label="Text with image" image="user.png"></p-chip>\n'),e.fQ9(),e.qZA(),e.TgZ(50,"h5"),e._uU(51,"Removable"),e.qZA(),e.TgZ(52,"p"),e._uU(53,"Setting "),e.TgZ(54,"i"),e._uU(55,"removable"),e.qZA(),e._uU(56," property displays an icon to close the chip, the optional "),e.TgZ(57,"i"),e._uU(58,"onRemove"),e.qZA(),e._uU(59," event is available to get notified when a chip is hidden."),e.qZA(),e.TgZ(60,"app-code",25),e.IAx(),e._uU(61,'\n<p-chip label="Text" [removable]="true"></p-chip>\n'),e.fQ9(),e.qZA(),e.TgZ(62,"h5"),e._uU(63,"Templating"),e.qZA(),e.TgZ(64,"p"),e._uU(65,"Content can easily be customized with the dynamic content instead of using the built-in modes."),e.qZA(),e.TgZ(66,"app-code",25),e.IAx(),e._uU(67,"\n<p-chip>\n    Content\n</p-chip>\n"),e.fQ9(),e.qZA(),e.TgZ(68,"h5"),e._uU(69,"Properties"),e.qZA(),e.TgZ(70,"div",26)(71,"table",27)(72,"thead")(73,"tr")(74,"th"),e._uU(75,"Name"),e.qZA(),e.TgZ(76,"th"),e._uU(77,"Type"),e.qZA(),e.TgZ(78,"th"),e._uU(79,"Default"),e.qZA(),e.TgZ(80,"th"),e._uU(81,"Description"),e.qZA()()(),e.TgZ(82,"tbody")(83,"tr")(84,"td"),e._uU(85,"label"),e.qZA(),e.TgZ(86,"td"),e._uU(87,"string"),e.qZA(),e.TgZ(88,"td"),e._uU(89,"null"),e.qZA(),e.TgZ(90,"td"),e._uU(91,"Defines the text to display."),e.qZA()(),e.TgZ(92,"tr")(93,"td"),e._uU(94,"icon"),e.qZA(),e.TgZ(95,"td"),e._uU(96,"string"),e.qZA(),e.TgZ(97,"td"),e._uU(98,"null"),e.qZA(),e.TgZ(99,"td"),e._uU(100,"Defines the icon to display."),e.qZA()(),e.TgZ(101,"tr")(102,"td"),e._uU(103,"image"),e.qZA(),e.TgZ(104,"td"),e._uU(105,"string"),e.qZA(),e.TgZ(106,"td"),e._uU(107,"null"),e.qZA(),e.TgZ(108,"td"),e._uU(109,"Defines the image to display."),e.qZA()(),e.TgZ(110,"tr")(111,"td"),e._uU(112,"removable"),e.qZA(),e.TgZ(113,"td"),e._uU(114,"boolean"),e.qZA(),e.TgZ(115,"td"),e._uU(116,"false"),e.qZA(),e.TgZ(117,"td"),e._uU(118,"Whether to display a remove icon."),e.qZA()(),e.TgZ(119,"tr")(120,"td"),e._uU(121,"style"),e.qZA(),e.TgZ(122,"td"),e._uU(123,"object"),e.qZA(),e.TgZ(124,"td"),e._uU(125,"null"),e.qZA(),e.TgZ(126,"td"),e._uU(127,"Inline style of the component."),e.qZA()(),e.TgZ(128,"tr")(129,"td"),e._uU(130,"styleClass"),e.qZA(),e.TgZ(131,"td"),e._uU(132,"string"),e.qZA(),e.TgZ(133,"td"),e._uU(134,"null"),e.qZA(),e.TgZ(135,"td"),e._uU(136,"Style class of the component."),e.qZA()(),e.TgZ(137,"tr")(138,"td"),e._uU(139,"removeIcon"),e.qZA(),e.TgZ(140,"td"),e._uU(141,"string"),e.qZA(),e.TgZ(142,"td"),e._uU(143,"pi pi-times-circle"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"Icon of the remove element."),e.qZA()()()()(),e.TgZ(146,"h5"),e._uU(147,"Events"),e.qZA(),e.TgZ(148,"div",26)(149,"table",27)(150,"thead")(151,"tr")(152,"th"),e._uU(153,"Name"),e.qZA(),e.TgZ(154,"th"),e._uU(155,"Parameters"),e.qZA(),e.TgZ(156,"th"),e._uU(157,"Description"),e.qZA()()(),e.TgZ(158,"tbody")(159,"tr")(160,"td"),e._uU(161,"onRemove"),e.qZA(),e.TgZ(162,"td"),e._uU(163,"event: Browser event"),e.qZA(),e.TgZ(164,"td"),e._uU(165,"Callback to invoke when a chip is removed."),e.qZA()(),e.TgZ(166,"tr")(167,"td"),e._uU(168,"onImageError"),e.qZA(),e.TgZ(169,"td"),e._uU(170,"event: Browser event"),e.qZA(),e.TgZ(171,"td"),e._uU(172,"This event is triggered if an error occurs while loading an image file."),e.qZA()()()()(),e.TgZ(173,"h5"),e._uU(174,"Styling"),e.qZA(),e.TgZ(175,"p"),e._uU(176,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(177,"a",28),e._uU(178,"theming"),e.qZA(),e._uU(179," page."),e.qZA(),e.TgZ(180,"div",26)(181,"table",27)(182,"thead")(183,"tr")(184,"th"),e._uU(185,"Name"),e.qZA(),e.TgZ(186,"th"),e._uU(187,"Element"),e.qZA()()(),e.TgZ(188,"tbody")(189,"tr")(190,"td"),e._uU(191,"p-chip"),e.qZA(),e.TgZ(192,"td"),e._uU(193,"Container element."),e.qZA()(),e.TgZ(194,"tr")(195,"td"),e._uU(196,"p-chip-image"),e.qZA(),e.TgZ(197,"td"),e._uU(198,"Container element in image mode."),e.qZA()(),e.TgZ(199,"tr")(200,"td"),e._uU(201,"p-chip-text"),e.qZA(),e.TgZ(202,"td"),e._uU(203,"Text of the chip."),e.qZA()(),e.TgZ(204,"tr")(205,"td"),e._uU(206,"pi-chip-remove-icon"),e.qZA(),e.TgZ(207,"td"),e._uU(208,"Remove icon."),e.qZA()()()()(),e.TgZ(209,"h5"),e._uU(210,"Dependencies"),e.qZA(),e.TgZ(211,"p"),e._uU(212,"None."),e.qZA()(),e.TgZ(213,"p-tabPanel",29)(214,"a",30)(215,"span"),e._uU(216,"View on GitHub"),e.qZA()(),e.TgZ(217,"a",31)(218,"span"),e._uU(219,"Edit in StackBlitz"),e.qZA()(),e.TgZ(220,"app-code",25),e.IAx(),e._uU(221,'\n<h5>Basic</h5>\n<div class="flex align-items-center">\n    <p-chip label="Action" styleClass="mr-2"></p-chip>\n    <p-chip label="Comedy" styleClass="mr-2"></p-chip>\n    <p-chip label="Mystery" styleClass="mr-2"></p-chip>\n    <p-chip label="Thriller" [removable]="true"></p-chip>\n</div>\n\n<h5>Icon</h5>\n<div class="flex align-items-center">\n    <p-chip label="Apple" icon="pi pi-apple" styleClass="mr-2"></p-chip>\n    <p-chip label="Facebook" icon="pi pi-facebook" styleClass="mr-2"></p-chip>\n    <p-chip label="Google" icon="pi pi-google" styleClass="mr-2"></p-chip>\n    <p-chip label="Microsoft" icon="pi pi-microsoft" [removable]="true"></p-chip>\n</div>\n\n<h5>Image</h5>\n<div class="flex align-items-center">\n    <p-chip label="Amy Elsner" image="assets/showcase/images/demo/avatar/amyelsner.png" styleClass="mr-2"></p-chip>\n    <p-chip label="Asiya Javayant" image="assets/showcase/images/demo/avatar/asiyajavayant.png" styleClass="mr-2"></p-chip>\n    <p-chip label="Onyama Limba" image="assets/showcase/images/demo/avatar/onyamalimba.png" styleClass="mr-2"></p-chip>\n    <p-chip label="Xuxue Feng" image="assets/showcase/images/demo/avatar/xuxuefeng.png" [removable]="true"></p-chip>\n</div>\n\n<h5>Styling</h5>\n<div class="flex align-items-center">\n    <p-chip label="Action" styleClass="mr-2 custom-chip"></p-chip>\n    <p-chip label="Comedy" styleClass="mr-2 custom-chip"></p-chip>\n    <p-chip label="Onyama Limba" image="assets/showcase/images/demo/avatar/onyamalimba.png" styleClass="mr-2 custom-chip"></p-chip>\n    <p-chip label="Xuxue Feng" image="assets/showcase/images/demo/avatar/xuxuefeng.png" [removable]="true" styleClass="custom-chip"></p-chip>\n</div>\n'),e.fQ9(),e.qZA(),e.TgZ(222,"app-code",32),e.IAx(),e._uU(223,"\n:host ::ng-deep .p-chip.custom-chip {\n    background: var(--primary-color);\n    color: var(--primary-color-text);\n}\n"),e.fQ9(),e.qZA()(),e.TgZ(224,"p-tabPanel",33),e.YNc(225,g,1,0,"ng-template",34),e.qZA()()()),2&h&&(e.xp6(15),e.Q6J("removable",!0),e.xp6(7),e.Q6J("removable",!0),e.xp6(7),e.Q6J("removable",!0),e.xp6(7),e.Q6J("removable",!0),e.xp6(141),e.Q6J("routerLink",e.DdM(5,u)))},dependencies:[l.yS,A.jx,p.xf,p.x4,f.A,r.P,m.h],styles:["[_nghost-%COMP%]     .p-chip.custom-chip{background:var(--primary-color);color:var(--primary-color-text)}"]}),s})(),y=(()=>{class s{}return s.\u0275fac=function(h){return new(h||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[l.Bz.forChild([{path:"",component:v}]),l.Bz]}),s})();var C=i(1928),U=i(3427),q=i(1508);let x=(()=>{class s{}return s.\u0275fac=function(h){return new(h||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[t.ez,y,C.hJ,U.Q,q.LU,f.o,r.L,m.a]}),s})()}}]);
"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[7135],{7381:(A,u,r)=>{r.d(u,{a:()=>h,h:()=>T});var m=r(6895),s=r(1571);const e=["code"],Z=["*"];let T=(()=>{class l{constructor(g){this.el=g,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return l.\u0275fac=function(g){return new(g||l)(s.Y36(s.SBq))},l.\u0275cmp=s.Xpm({type:l,selectors:[["app-code"]],viewQuery:function(g,d){if(1&g&&s.Gf(e,5),2&g){let _;s.iGM(_=s.CRH())&&(d.codeViewChild=_.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:Z,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(g,d){1&g&&(s.F$t(),s.TgZ(0,"pre",0)(1,"code",null,1),s.Hsn(3),s._uU(4,"\n"),s.qZA()()),2&g&&(s.Akn(d.style),s.Tol(d.styleClass),s.Q6J("ngClass","language-"+d.lang))},dependencies:[m.mk],encapsulation:2}),l})(),h=(()=>{class l{}return l.\u0275fac=function(g){return new(g||l)},l.\u0275mod=s.oAB({type:l}),l.\u0275inj=s.cJS({imports:[m.ez]}),l})()},7135:(A,u,r)=>{r.r(u),r.d(u,{ImageDemoModule:()=>z});var m=r(6895),s=r(9859),e=r(1571),Z=r(4619),T=r(485),h=r(7381),l=r(8476),c=r(7340),g=r(2240),d=r(9716);const _=["mask"];function f(i,o){1&i&&e.GkF(0)}function w(i,o){if(1&i&&(e.ynx(0),e.YNc(1,f,1,0,"ng-container",7),e.BQk()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",t.indicatorTemplate)}}function U(i,o){1&i&&e._UZ(0,"i",8)}function q(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",4),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.onImageClick())}),e.YNc(1,w,2,1,"ng-container",5),e.YNc(2,U,1,0,"ng-template",null,6,e.W1O),e.qZA()}if(2&i){const t=e.MAs(3),n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.indicatorTemplate)("ngIfElse",t)}}const y=function(i,o){return{showTransitionParams:i,hideTransitionParams:o}},I=function(i){return{value:"visible",params:i}};function C(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div"),e.NdJ("@animation.start",function(a){e.CHM(t);const p=e.oxw(2);return e.KtG(p.onAnimationStart(a))})("@animation.done",function(a){e.CHM(t);const p=e.oxw(2);return e.KtG(p.onAnimationEnd(a))}),e.TgZ(1,"img",20),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.onPreviewImageClick())}),e.qZA()()}if(2&i){const t=e.oxw(2);e.Q6J("@animation",e.VKq(6,I,e.WLB(3,y,t.showTransitionOptions,t.hideTransitionOptions))),e.xp6(1),e.Q6J("ngStyle",t.imagePreviewStyle()),e.uIk("src",t.src,e.LSH)}}function b(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",9,10),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.onMaskClick())}),e.TgZ(2,"div",11),e.NdJ("click",function(a){e.CHM(t);const p=e.oxw();return e.KtG(p.handleToolbarClick(a))}),e.TgZ(3,"button",12),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.rotateRight())}),e._UZ(4,"i",13),e.qZA(),e.TgZ(5,"button",12),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.rotateLeft())}),e._UZ(6,"i",14),e.qZA(),e.TgZ(7,"button",15),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.zoomOut())}),e._UZ(8,"i",16),e.qZA(),e.TgZ(9,"button",15),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.zoomIn())}),e._UZ(10,"i",17),e.qZA(),e.TgZ(11,"button",12),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.closePreview())}),e._UZ(12,"i",18),e.qZA()(),e.YNc(13,C,2,8,"div",19),e.qZA()}if(2&i){const t=e.oxw();e.xp6(7),e.Q6J("disabled",t.isZoomOutDisabled),e.xp6(2),e.Q6J("disabled",t.isZoomInDisabled),e.xp6(4),e.Q6J("ngIf",t.previewVisible)}}let k=(()=>{class i{constructor(t,n){this.config=t,this.cd=n,this.preview=!1,this.showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.onShow=new e.vpe,this.onHide=new e.vpe,this.onImageError=new e.vpe,this.maskVisible=!1,this.previewVisible=!1,this.rotate=0,this.scale=1,this.previewClick=!1,this.zoomSettings={default:1,step:.1,max:1.5,min:.5}}get isZoomOutDisabled(){return this.scale-this.zoomSettings.step<=this.zoomSettings.min}get isZoomInDisabled(){return this.scale+this.zoomSettings.step>=this.zoomSettings.max}ngAfterContentInit(){this.templates.forEach(t=>{t.getType(),this.indicatorTemplate=t.template})}onImageClick(){this.preview&&(this.maskVisible=!0,this.previewVisible=!0)}onMaskClick(){this.previewClick||this.closePreview(),this.previewClick=!1}onPreviewImageClick(){this.previewClick=!0}rotateRight(){this.rotate+=90,this.previewClick=!0}rotateLeft(){this.rotate-=90,this.previewClick=!0}zoomIn(){this.scale=this.scale+this.zoomSettings.step,this.previewClick=!0}zoomOut(){this.scale=this.scale-this.zoomSettings.step,this.previewClick=!0}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.wrapper=this.container.parentElement,this.appendContainer(),this.moveOnTop();break;case"void":g.p.addClass(this.wrapper,"p-component-overlay-leave")}}onAnimationEnd(t){switch(t.toState){case"void":d.P9.clear(this.wrapper),this.maskVisible=!1,this.container=null,this.wrapper=null,this.cd.markForCheck(),this.onHide.emit({});break;case"visible":this.onShow.emit({})}}moveOnTop(){d.P9.set("modal",this.wrapper,this.config.zIndex.modal)}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.wrapper):g.p.appendChild(this.wrapper,this.appendTo))}imagePreviewStyle(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}}containerClass(){return{"p-image p-component":!0,"p-image-preview-container":this.preview}}handleToolbarClick(t){t.stopPropagation()}closePreview(){this.previewVisible=!1,this.rotate=0,this.scale=this.zoomSettings.default}imageError(t){this.onImageError.emit(t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.b4),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-image"]],contentQueries:function(t,n,a){if(1&t&&e.Suo(a,l.jx,4),2&t){let p;e.iGM(p=e.CRH())&&(n.templates=p)}},viewQuery:function(t,n){if(1&t&&e.Gf(_,5),2&t){let a;e.iGM(a=e.CRH())&&(n.mask=a.first)}},hostAttrs:[1,"p-element"],inputs:{imageClass:"imageClass",imageStyle:"imageStyle",styleClass:"styleClass",style:"style",src:"src",alt:"alt",width:"width",height:"height",appendTo:"appendTo",preview:"preview",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide",onImageError:"onImageError"},decls:4,vars:13,consts:[[3,"ngClass","ngStyle"],[3,"ngStyle","error"],["class","p-image-preview-indicator",3,"click",4,"ngIf"],["class","p-image-mask p-component-overlay p-component-overlay-enter",3,"click",4,"ngIf"],[1,"p-image-preview-indicator",3,"click"],[4,"ngIf","ngIfElse"],["defaultTemplate",""],[4,"ngTemplateOutlet"],[1,"p-image-preview-icon","pi","pi-eye"],[1,"p-image-mask","p-component-overlay","p-component-overlay-enter",3,"click"],["mask",""],[1,"p-image-toolbar",3,"click"],["type","button",1,"p-image-action","p-link",3,"click"],[1,"pi","pi-refresh"],[1,"pi","pi-undo"],["type","button",1,"p-image-action","p-link",3,"disabled","click"],[1,"pi","pi-search-minus"],[1,"pi","pi-search-plus"],[1,"pi","pi-times"],[4,"ngIf"],[1,"p-image-preview",3,"ngStyle","click"]],template:function(t,n){1&t&&(e.TgZ(0,"span",0)(1,"img",1),e.NdJ("error",function(p){return n.imageError(p)}),e.qZA(),e.YNc(2,q,4,2,"div",2),e.YNc(3,b,14,3,"div",3),e.qZA()),2&t&&(e.Tol(n.styleClass),e.Q6J("ngClass",n.containerClass())("ngStyle",n.style),e.xp6(1),e.Tol(n.imageClass),e.Q6J("ngStyle",n.imageStyle),e.uIk("src",n.src,e.LSH)("alt",n.alt)("width",n.width)("height",n.height),e.xp6(1),e.Q6J("ngIf",n.preview),e.xp6(1),e.Q6J("ngIf",n.maskVisible))},dependencies:[m.mk,m.O5,m.tP,m.PC],styles:[".p-image-mask{display:flex;align-items:center;justify-content:center}.p-image-preview-container{position:relative;display:inline-block}.p-image-preview-indicator{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}.p-image-preview-icon{font-size:1.5rem}.p-image-preview-container:hover>.p-image-preview-indicator{opacity:1;cursor:pointer}.p-image-preview-container>img{cursor:pointer}.p-image-toolbar{position:absolute;top:0;right:0;display:flex;z-index:1}.p-image-action.p-link{display:flex;justify-content:center;align-items:center}.p-image-action.p-link[disabled]{opacity:.5}.p-image-preview{transition:transform .15s;max-width:100vw;max-height:100vh}\n"],encapsulation:2,data:{animation:[(0,c.X$)("animation",[(0,c.eR)("void => visible",[(0,c.oB)({transform:"scale(0.7)",opacity:0}),(0,c.jt)("{{showTransitionParams}}")]),(0,c.eR)("visible => void",[(0,c.jt)("{{hideTransitionParams}}",(0,c.oB)({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0}),i})(),x=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.ez,l.m8]}),i})();var v=r(3032);function S(i,o){1&i&&(e.TgZ(0,"a",17)(1,"span"),e._uU(2,"View on GitHub"),e.qZA()(),e.TgZ(3,"app-code",11),e.IAx(),e._uU(4,'\n<h5>Basic</h5>\n<p-image src="assets/showcase/images/galleria/galleria1.jpg" alt="Image" width="250"></p-image>\n\n<h5>Preview</h5>\n<p-image src="assets/showcase/images/galleria/galleria11.jpg" alt="Image" width="250" [preview]="true"></p-image>\n'),e.fQ9(),e.qZA())}const M=function(){return["/galleria"]},P=function(){return["/theming"]};let J=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:254,vars:5,consts:[[1,"content-section","introduction"],[1,"feature-intro"],[3,"routerLink"],["github","button"],[1,"content-section","implementation"],[1,"card"],["src","assets/showcase/images/galleria/galleria1.jpg","alt","Image","width","250"],["src","assets/showcase/images/galleria/galleria11.jpg","alt","Image","width","250",3,"preview"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["pTemplate","content"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/image","target","_blank",1,"btn-viewsource"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Image"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Displays an image with preview and tranformation options. For multiple image, see "),e.TgZ(6,"a",2),e._uU(7,"Galleria."),e.qZA()()(),e._UZ(8,"app-demoActions",3),e.qZA(),e.TgZ(9,"div",4)(10,"div",5)(11,"h5"),e._uU(12,"Basic"),e.qZA(),e._UZ(13,"p-image",6),e.TgZ(14,"h5"),e._uU(15,"Preview"),e.qZA(),e._UZ(16,"p-image",7),e.qZA()(),e.TgZ(17,"div",8)(18,"p-tabView")(19,"p-tabPanel",9)(20,"h5"),e._uU(21,"Import"),e.qZA(),e.TgZ(22,"app-code",10),e.IAx(),e._uU(23,"\nimport {ImageModule} from 'primeng/image';\n"),e.fQ9(),e.qZA(),e.TgZ(24,"h5"),e._uU(25,"Getting Started"),e.qZA(),e.TgZ(26,"p"),e._uU(27,"Image is used as the native "),e.TgZ(28,"i"),e._uU(29,"img"),e.qZA(),e._uU(30," element and supports all properties that the native element has."),e.qZA(),e.TgZ(31,"app-code",11),e.IAx(),e._uU(32,'\n<p-image src="assets/showcase/images/galleria/galleria1.jpg" alt="Image" width="250"></p-image>\n'),e.fQ9(),e.qZA(),e.TgZ(33,"h5"),e._uU(34,"Preview"),e.qZA(),e.TgZ(35,"p"),e._uU(36,"Preview mode displays a modal layer when the image is clicked that provides transformation options such as rotating and zooming."),e.qZA(),e.TgZ(37,"h5"),e._uU(38,"Indicator Templating"),e.qZA(),e.TgZ(39,"p"),e._uU(40,"An eye icon is displayed by default when the image is hovered in preview mode. Use the "),e.TgZ(41,"i"),e._uU(42,"indicator"),e.qZA(),e._uU(43," template for custom content."),e.qZA(),e.TgZ(44,"app-code",11),e.IAx(),e._uU(45,'\n<p-image src="assets/showcase/images/galleria/galleria1.jpg" alt="Image" width="250">\n    <ng-template pTemplate="indicator">\n        Indicator Content\n    </ng-template>\n</p-image>\n'),e.fQ9(),e.qZA(),e.TgZ(46,"h5"),e._uU(47,"Properties"),e.qZA(),e.TgZ(48,"div",12)(49,"table",13)(50,"thead")(51,"tr")(52,"th"),e._uU(53,"Name"),e.qZA(),e.TgZ(54,"th"),e._uU(55,"Type"),e.qZA(),e.TgZ(56,"th"),e._uU(57,"Default"),e.qZA(),e.TgZ(58,"th"),e._uU(59,"Description"),e.qZA()()(),e.TgZ(60,"tbody")(61,"tr")(62,"td"),e._uU(63,"preview"),e.qZA(),e.TgZ(64,"td"),e._uU(65,"boolean"),e.qZA(),e.TgZ(66,"td"),e._uU(67,"false"),e.qZA(),e.TgZ(68,"td"),e._uU(69,"Controls the preview functionality."),e.qZA()(),e.TgZ(70,"tr")(71,"td"),e._uU(72,"style"),e.qZA(),e.TgZ(73,"td"),e._uU(74,"any"),e.qZA(),e.TgZ(75,"td"),e._uU(76,"null"),e.qZA(),e.TgZ(77,"td"),e._uU(78,"Inline style of the element."),e.qZA()(),e.TgZ(79,"tr")(80,"td"),e._uU(81,"styleClass"),e.qZA(),e.TgZ(82,"td"),e._uU(83,"string"),e.qZA(),e.TgZ(84,"td"),e._uU(85,"null"),e.qZA(),e.TgZ(86,"td"),e._uU(87,"Style class of the element."),e.qZA()(),e.TgZ(88,"tr")(89,"td"),e._uU(90,"imageStyle"),e.qZA(),e.TgZ(91,"td"),e._uU(92,"any"),e.qZA(),e.TgZ(93,"td"),e._uU(94,"null"),e.qZA(),e.TgZ(95,"td"),e._uU(96,"Inline style of the image element."),e.qZA()(),e.TgZ(97,"tr")(98,"td"),e._uU(99,"imageClass"),e.qZA(),e.TgZ(100,"td"),e._uU(101,"string"),e.qZA(),e.TgZ(102,"td"),e._uU(103,"null"),e.qZA(),e.TgZ(104,"td"),e._uU(105,"Style class of the image element."),e.qZA()(),e.TgZ(106,"tr")(107,"td"),e._uU(108,"src"),e.qZA(),e.TgZ(109,"td"),e._uU(110,"string | SafeUrl"),e.qZA(),e.TgZ(111,"td"),e._uU(112,"null"),e.qZA(),e.TgZ(113,"td"),e._uU(114,"src attribute of the image element."),e.qZA()(),e.TgZ(115,"tr")(116,"td"),e._uU(117,"alt"),e.qZA(),e.TgZ(118,"td"),e._uU(119,"string"),e.qZA(),e.TgZ(120,"td"),e._uU(121,"null"),e.qZA(),e.TgZ(122,"td"),e._uU(123,"alt attribute of the image element."),e.qZA()(),e.TgZ(124,"tr")(125,"td"),e._uU(126,"width"),e.qZA(),e.TgZ(127,"td"),e._uU(128,"string"),e.qZA(),e.TgZ(129,"td"),e._uU(130,"null"),e.qZA(),e.TgZ(131,"td"),e._uU(132,"width attribute of the image element."),e.qZA()(),e.TgZ(133,"tr")(134,"td"),e._uU(135,"height"),e.qZA(),e.TgZ(136,"td"),e._uU(137,"string"),e.qZA(),e.TgZ(138,"td"),e._uU(139,"null"),e.qZA(),e.TgZ(140,"td"),e._uU(141,"height attribute of the image element."),e.qZA()()()()(),e.TgZ(142,"h5"),e._uU(143,"Events"),e.qZA(),e.TgZ(144,"div",12)(145,"table",13)(146,"thead")(147,"tr")(148,"th"),e._uU(149,"Name"),e.qZA(),e.TgZ(150,"th"),e._uU(151,"Parameters"),e.qZA(),e.TgZ(152,"th"),e._uU(153,"Description"),e.qZA()()(),e.TgZ(154,"tbody")(155,"tr")(156,"td"),e._uU(157,"onShow"),e.qZA(),e.TgZ(158,"td"),e._uU(159,"-"),e.qZA(),e.TgZ(160,"td"),e._uU(161,"Triggered when the preview overlay is shown."),e.qZA()(),e.TgZ(162,"tr")(163,"td"),e._uU(164,"onHide"),e.qZA(),e.TgZ(165,"td"),e._uU(166,"-"),e.qZA(),e.TgZ(167,"td"),e._uU(168,"Triggered when the preview overlay is hidden."),e.qZA()(),e.TgZ(169,"tr")(170,"td"),e._uU(171,"onImageError"),e.qZA(),e.TgZ(172,"td"),e._uU(173,"event: Browser event"),e.qZA(),e.TgZ(174,"td"),e._uU(175,"This event is triggered if an error occurs while loading an image file."),e.qZA()()()()(),e.TgZ(176,"h5"),e._uU(177,"Templates"),e.qZA(),e.TgZ(178,"div",12)(179,"table",13)(180,"thead")(181,"tr")(182,"th"),e._uU(183,"Name"),e.qZA(),e.TgZ(184,"th"),e._uU(185,"Parameters"),e.qZA()()(),e.TgZ(186,"tbody")(187,"tr")(188,"td"),e._uU(189,"indicator"),e.qZA(),e.TgZ(190,"td"),e._uU(191,"-"),e.qZA()()()()(),e.TgZ(192,"h5"),e._uU(193,"Styling"),e.qZA(),e.TgZ(194,"p"),e._uU(195,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(196,"a",14),e._uU(197,"theming page"),e.qZA(),e._uU(198,"."),e.qZA(),e.TgZ(199,"div",12)(200,"table",13)(201,"thead")(202,"tr")(203,"th"),e._uU(204,"Name"),e.qZA(),e.TgZ(205,"th"),e._uU(206,"Element"),e.qZA()()(),e.TgZ(207,"tbody")(208,"tr")(209,"td"),e._uU(210,"p-image"),e.qZA(),e.TgZ(211,"td"),e._uU(212,"Container element."),e.qZA()(),e.TgZ(213,"tr")(214,"td"),e._uU(215,"p-image-preview-container"),e.qZA(),e.TgZ(216,"td"),e._uU(217,"Container element with preview enabled."),e.qZA()(),e.TgZ(218,"tr")(219,"td"),e._uU(220,"p-image-preview-indicator"),e.qZA(),e.TgZ(221,"td"),e._uU(222,"Mask layer over the image when hovered."),e.qZA()(),e.TgZ(223,"tr")(224,"td"),e._uU(225,"p-image-preview-icon"),e.qZA(),e.TgZ(226,"td"),e._uU(227,"Icon of the preview indicator."),e.qZA()(),e.TgZ(228,"tr")(229,"td"),e._uU(230,"p-image-mask"),e.qZA(),e.TgZ(231,"td"),e._uU(232,"Preview overlay container."),e.qZA()(),e.TgZ(233,"tr")(234,"td"),e._uU(235,"p-image-toolbar"),e.qZA(),e.TgZ(236,"td"),e._uU(237,"Transformation options container."),e.qZA()(),e.TgZ(238,"tr")(239,"td"),e._uU(240,"p-image-action"),e.qZA(),e.TgZ(241,"td"),e._uU(242,"An element inside the toolbar."),e.qZA()(),e.TgZ(243,"tr")(244,"td"),e._uU(245,"p-image-preview"),e.qZA(),e.TgZ(246,"td"),e._uU(247,"Image element inside the preview overlay."),e.qZA()()()()(),e.TgZ(248,"h5"),e._uU(249,"Dependencies"),e.qZA(),e.TgZ(250,"p"),e._uU(251,"None."),e.qZA()(),e.TgZ(252,"p-tabPanel",15),e.YNc(253,S,5,0,"ng-template",16),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("routerLink",e.DdM(3,M)),e.xp6(10),e.Q6J("preview",!0),e.xp6(180),e.Q6J("routerLink",e.DdM(4,P)))},dependencies:[s.yS,Z.xf,Z.x4,T.jx,h.h,k,v.P],encapsulation:2}),i})(),D=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[s.Bz.forChild([{path:"",component:J}]),s.Bz]}),i})();var E=r(1928),Q=r(1508);let z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.ez,D,E.hJ,Q.LU,h.a,x,v.L]}),i})()}}]);
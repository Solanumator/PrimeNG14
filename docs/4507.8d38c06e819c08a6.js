"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[4507],{7381:(q,Z,a)=>{a.d(Z,{a:()=>h,h:()=>f});var u=a(6895),o=a(1571);const e=["code"],r=["*"];let f=(()=>{class s{constructor(d){this.el=d,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return s.\u0275fac=function(d){return new(d||s)(o.Y36(o.SBq))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-code"]],viewQuery:function(d,c){if(1&d&&o.Gf(e,5),2&d){let _;o.iGM(_=o.CRH())&&(c.codeViewChild=_.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:r,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(d,c){1&d&&(o.F$t(),o.TgZ(0,"pre",0)(1,"code",null,1),o.Hsn(3),o._uU(4,"\n"),o.qZA()()),2&d&&(o.Akn(c.style),o.Tol(c.styleClass),o.Q6J("ngClass","language-"+c.lang))},dependencies:[u.mk],encapsulation:2}),s})(),h=(()=>{class s{}return s.\u0275fac=function(d){return new(d||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[u.ez]}),s})()},3669:(q,Z,a)=>{a.r(Z),a.d(Z,{FieldsetDemoModule:()=>z});var u=a(6895),o=a(9859),e=a(1571),r=a(7340),f=a(8476),h=a(3421),s=a(4174);const p=function(t,i){return{"pi-minus":t,"pi-plus":i}};function d(t,i){if(1&t&&e._UZ(0,"span",9),2&t){const n=e.oxw(2);e.Q6J("ngClass",e.WLB(1,p,!n.collapsed,n.collapsed))}}function c(t,i){1&t&&e.GkF(0)}function _(t,i){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"a",7),e.NdJ("click",function(g){e.CHM(n);const m=e.oxw();return e.KtG(m.toggle(g))})("keydown.enter",function(g){e.CHM(n);const m=e.oxw();return e.KtG(m.toggle(g))}),e.YNc(2,d,1,4,"span",8),e.YNc(3,c,1,0,"ng-container",6),e.qZA(),e.BQk()}if(2&t){const n=e.oxw(),l=e.MAs(4);e.xp6(1),e.uIk("aria-controls",n.id+"-content")("aria-expanded",!n.collapsed),e.xp6(1),e.Q6J("ngIf",n.toggleable),e.xp6(1),e.Q6J("ngTemplateOutlet",l)}}function b(t,i){1&t&&e.GkF(0)}function v(t,i){if(1&t&&(e.TgZ(0,"span",10),e._uU(1),e.qZA(),e.Hsn(2,1),e.YNc(3,b,1,0,"ng-container",6)),2&t){const n=e.oxw();e.xp6(1),e.Oqu(n.legend),e.xp6(2),e.Q6J("ngTemplateOutlet",n.headerTemplate)}}function C(t,i){1&t&&e.GkF(0)}const y=["*",[["p-header"]]],F=function(t,i){return{"p-fieldset p-component":!0,"p-fieldset-toggleable":t,"p-fieldset-expanded":i}},x=function(t){return{transitionParams:t,height:"0"}},w=function(t){return{value:"hidden",params:t}},D=function(t){return{transitionParams:t,height:"*"}},k=function(t){return{value:"visible",params:t}},M=["*","p-header"];let B=0,E=(()=>{class t{constructor(n){this.el=n,this.collapsed=!1,this.collapsedChange=new e.vpe,this.onBeforeToggle=new e.vpe,this.onAfterToggle=new e.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-fieldset-"+B++}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"header":this.headerTemplate=n.template;break;case"content":this.contentTemplate=n.template}})}toggle(n){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:n,collapsed:this.collapsed}),this.collapsed?this.expand(n):this.collapse(n),this.onAfterToggle.emit({originalEvent:n,collapsed:this.collapsed}),n.preventDefault()}expand(n){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(n){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(){this.animating=!1}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq))},t.\u0275cmp=e.Xpm({type:t,selectors:[["p-fieldset"]],contentQueries:function(n,l,g){if(1&n&&e.Suo(g,f.jx,4),2&n){let m;e.iGM(m=e.CRH())&&(l.templates=m)}},hostAttrs:[1,"p-element"],inputs:{legend:"legend",toggleable:"toggleable",collapsed:"collapsed",style:"style",styleClass:"styleClass",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:M,decls:9,vars:23,consts:[[3,"ngClass","ngStyle"],[1,"p-fieldset-legend"],[4,"ngIf","ngIfElse"],["legendContent",""],["role","region",1,"p-toggleable-content"],[1,"p-fieldset-content"],[4,"ngTemplateOutlet"],["tabindex","0","pRipple","",3,"click","keydown.enter"],["class","p-fieldset-toggler pi",3,"ngClass",4,"ngIf"],[1,"p-fieldset-toggler","pi",3,"ngClass"],[1,"p-fieldset-legend-text"]],template:function(n,l){if(1&n&&(e.F$t(y),e.TgZ(0,"fieldset",0)(1,"legend",1),e.YNc(2,_,4,4,"ng-container",2),e.YNc(3,v,4,2,"ng-template",null,3,e.W1O),e.qZA(),e.TgZ(5,"div",4),e.NdJ("@fieldsetContent.done",function(){return l.onToggleDone()}),e.TgZ(6,"div",5),e.Hsn(7),e.YNc(8,C,1,0,"ng-container",6),e.qZA()()()),2&n){const g=e.MAs(4);e.Tol(l.styleClass),e.Q6J("ngClass",e.WLB(12,F,l.toggleable,!l.collapsed&&l.toggleable))("ngStyle",l.style),e.uIk("id",l.id),e.xp6(2),e.Q6J("ngIf",l.toggleable)("ngIfElse",g),e.xp6(3),e.Q6J("@fieldsetContent",l.collapsed?e.VKq(17,w,e.VKq(15,x,l.transitionOptions)):e.VKq(21,k,e.VKq(19,D,l.animating?l.transitionOptions:"0ms"))),e.uIk("id",l.id+"-content")("aria-labelledby",l.id)("aria-hidden",l.collapsed),e.xp6(3),e.Q6J("ngTemplateOutlet",l.contentTemplate)}},dependencies:[u.mk,u.O5,u.tP,u.PC,s.H],styles:[".p-fieldset-legend>a,.p-fieldset-legend>span{display:flex;align-items:center;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{cursor:pointer;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-fieldset-legend-text{line-height:1}.p-fieldset-toggleable.p-fieldset-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-fieldset-toggleable .p-toggleable-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[(0,r.X$)("fieldsetContent",[(0,r.SB)("hidden",(0,r.oB)({height:"0"})),(0,r.SB)("visible",(0,r.oB)({height:"*"})),(0,r.eR)("visible <=> hidden",[(0,r.jt)("{{transitionParams}}")]),(0,r.eR)("void => *",(0,r.jt)(0))])]},changeDetection:0}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,h.T,f.m8]}),t})();var I=a(485),T=a(4619),A=a(7381),U=a(3032);function O(t,i){1&t&&e._UZ(0,"iframe",19)}const S=function(){return["/theming"]};let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:234,vars:3,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","fieldset","stackblitz","fieldset-demo"],[1,"content-section","implementation"],[1,"card"],["legend","Header"],["legend","Header",3,"toggleable"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/fieldset","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-fieldset-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-fieldset-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Fieldset"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Fieldset is a grouping component with the optional content toggle feature."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h5"),e._uU(10,"Regular"),e.qZA(),e.TgZ(11,"p-fieldset",5)(12,"p"),e._uU(13,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),e.qZA()(),e.TgZ(14,"h5"),e._uU(15,"Toggleable"),e.qZA(),e.TgZ(16,"p-fieldset",6)(17,"p"),e._uU(18,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),e.qZA()()()(),e.TgZ(19,"div",7)(20,"p-tabView")(21,"p-tabPanel",8)(22,"h5"),e._uU(23,"Import"),e.qZA(),e.TgZ(24,"app-code",9),e.IAx(),e._uU(25,"\nimport {FieldsetModule} from 'primeng/fieldset';\n"),e.fQ9(),e.qZA(),e.TgZ(26,"h5"),e._uU(27,"Getting Started"),e.qZA(),e.TgZ(28,"p"),e._uU(29,"Fieldset is defined with p-fieldset element."),e.qZA(),e.TgZ(30,"app-code",10),e.IAx(),e._uU(31,'\n<p-fieldset legend="Header">\n    Content\n</p-fieldset>\n'),e.fQ9(),e.qZA(),e.TgZ(32,"h5"),e._uU(33,"Toggleable"),e.qZA(),e.TgZ(34,"p"),e._uU(35,"Content of the fieldset can be expanded and collapsed using "),e.TgZ(36,"i"),e._uU(37,"toggleable"),e.qZA(),e._uU(38," option, default state is defined with collapsed option."),e.qZA(),e.TgZ(39,"app-code",10),e.IAx(),e._uU(40,'\n<p-fieldset legend="Header" [toggleable]="true">\n    Content\n</p-fieldset>\n'),e.fQ9(),e.qZA(),e.TgZ(41,"h5"),e._uU(42,"Custom Legend"),e.qZA(),e.TgZ(43,"p"),e._uU(44,"Header section can be customized using "),e.TgZ(45,"i"),e._uU(46,"header"),e.qZA(),e._uU(47," template."),e.qZA(),e.TgZ(48,"app-code",10),e.IAx(),e._uU(49,'\n<p-fieldset>\n    <ng-template pTemplate="header">Custom Legend Content</ng-template>\n    Content\n</p-fieldset>\n'),e.fQ9(),e.qZA(),e.TgZ(50,"h5"),e._uU(51,"Animation Configuration"),e.qZA(),e.TgZ(52,"p"),e._uU(53,"Transition of toggle animation can be customized using the "),e.TgZ(54,"i"),e._uU(55,"transitionOptions"),e.qZA(),e._uU(56," property with a default value as "),e.TgZ(57,"b"),e._uU(58,"400ms cubic-bezier(0.86, 0, 0.07, 1)"),e.qZA(),e._uU(59,", example below disables the animation altogether."),e.qZA(),e.TgZ(60,"app-code",10),e.IAx(),e._uU(61,"\n<p-fieldset [transitionOptions]=\"'0ms'\">\n</p-fieldset>\n"),e.fQ9(),e.qZA(),e.TgZ(62,"h5"),e._uU(63,"Properties"),e.qZA(),e.TgZ(64,"div",11)(65,"table",12)(66,"thead")(67,"tr")(68,"th"),e._uU(69,"Name"),e.qZA(),e.TgZ(70,"th"),e._uU(71,"Type"),e.qZA(),e.TgZ(72,"th"),e._uU(73,"Default"),e.qZA(),e.TgZ(74,"th"),e._uU(75,"Description"),e.qZA()()(),e.TgZ(76,"tbody")(77,"tr")(78,"td"),e._uU(79,"legend"),e.qZA(),e.TgZ(80,"td"),e._uU(81,"string"),e.qZA(),e.TgZ(82,"td"),e._uU(83,"null"),e.qZA(),e.TgZ(84,"td"),e._uU(85,"Header text of the fieldset."),e.qZA()(),e.TgZ(86,"tr")(87,"td"),e._uU(88,"toggleable"),e.qZA(),e.TgZ(89,"td"),e._uU(90,"boolean"),e.qZA(),e.TgZ(91,"td"),e._uU(92,"false"),e.qZA(),e.TgZ(93,"td"),e._uU(94,"When specified, content can toggled by clicking the legend."),e.qZA()(),e.TgZ(95,"tr")(96,"td"),e._uU(97,"collapsed"),e.qZA(),e.TgZ(98,"td"),e._uU(99,"boolean"),e.qZA(),e.TgZ(100,"td"),e._uU(101,"false"),e.qZA(),e.TgZ(102,"td"),e._uU(103,"Defines the default visibility state of the content."),e.qZA()(),e.TgZ(104,"tr")(105,"td"),e._uU(106,"style"),e.qZA(),e.TgZ(107,"td"),e._uU(108,"string"),e.qZA(),e.TgZ(109,"td"),e._uU(110,"null"),e.qZA(),e.TgZ(111,"td"),e._uU(112,"Inline style of the fieldset."),e.qZA()(),e.TgZ(113,"tr")(114,"td"),e._uU(115,"styleClass"),e.qZA(),e.TgZ(116,"td"),e._uU(117,"string"),e.qZA(),e.TgZ(118,"td"),e._uU(119,"null"),e.qZA(),e.TgZ(120,"td"),e._uU(121,"Style class of the fieldset."),e.qZA()(),e.TgZ(122,"tr")(123,"td"),e._uU(124,"transitionOptions"),e.qZA(),e.TgZ(125,"td"),e._uU(126,"string"),e.qZA(),e.TgZ(127,"td"),e._uU(128,"400ms cubic-bezier(0.86, 0, 0.07, 1)"),e.qZA(),e.TgZ(129,"td"),e._uU(130,"Transition options of the animation."),e.qZA()()()()(),e.TgZ(131,"h5"),e._uU(132,"Events"),e.qZA(),e.TgZ(133,"div",11)(134,"table",12)(135,"thead")(136,"tr")(137,"th"),e._uU(138,"Name"),e.qZA(),e.TgZ(139,"th"),e._uU(140,"Parameters"),e.qZA(),e.TgZ(141,"th"),e._uU(142,"Description"),e.qZA()()(),e.TgZ(143,"tbody")(144,"tr")(145,"td"),e._uU(146,"onBeforeToggle"),e.qZA(),e.TgZ(147,"td"),e._uU(148,"event.originalEvent: browser event"),e._UZ(149,"br"),e._uU(150," event.collapsed: state as a boolean"),e.qZA(),e.TgZ(151,"td"),e._uU(152,"Callback to invoke before content toggle."),e.qZA()(),e.TgZ(153,"tr")(154,"td"),e._uU(155,"onAfterToggle"),e.qZA(),e.TgZ(156,"td"),e._uU(157,"event.originalEvent: browser event"),e._UZ(158,"br"),e._uU(159," event.collapsed: state as a boolean"),e.qZA(),e.TgZ(160,"td"),e._uU(161,"Callback to invoke after content toggle."),e.qZA()()()()(),e.TgZ(162,"h5"),e._uU(163,"Templates"),e.qZA(),e.TgZ(164,"div",11)(165,"table",12)(166,"thead")(167,"tr")(168,"th"),e._uU(169,"Name"),e.qZA(),e.TgZ(170,"th"),e._uU(171,"Parameters"),e.qZA()()(),e.TgZ(172,"tbody")(173,"tr")(174,"td"),e._uU(175,"header"),e.qZA(),e.TgZ(176,"td"),e._uU(177,"-"),e.qZA()(),e.TgZ(178,"tr")(179,"td"),e._uU(180,"content"),e.qZA(),e.TgZ(181,"td"),e._uU(182,"-"),e.qZA()()()()(),e.TgZ(183,"h5"),e._uU(184,"Styling"),e.qZA(),e.TgZ(185,"p"),e._uU(186,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(187,"a",13),e._uU(188,"theming page"),e.qZA(),e._uU(189,"."),e.qZA(),e.TgZ(190,"div",11)(191,"table",12)(192,"thead")(193,"tr")(194,"th"),e._uU(195,"Name"),e.qZA(),e.TgZ(196,"th"),e._uU(197,"Element"),e.qZA()()(),e.TgZ(198,"tbody")(199,"tr")(200,"td"),e._uU(201,"p-fieldset"),e.qZA(),e.TgZ(202,"td"),e._uU(203,"Fieldset element"),e.qZA()(),e.TgZ(204,"tr")(205,"td"),e._uU(206,"p-fieldset-toggleable"),e.qZA(),e.TgZ(207,"td"),e._uU(208,"Toggleable fieldset element"),e.qZA()(),e.TgZ(209,"tr")(210,"td"),e._uU(211,"p-fieldset-legend"),e.qZA(),e.TgZ(212,"td"),e._uU(213,"Legend element."),e.qZA()(),e.TgZ(214,"tr")(215,"td"),e._uU(216,"p-fieldset-content"),e.qZA(),e.TgZ(217,"td"),e._uU(218,"Content element."),e.qZA()()()()(),e.TgZ(219,"h5"),e._uU(220,"Dependencies"),e.qZA(),e.TgZ(221,"p"),e._uU(222,"None."),e.qZA()(),e.TgZ(223,"p-tabPanel",14)(224,"a",15)(225,"span"),e._uU(226,"View on GitHub"),e.qZA()(),e.TgZ(227,"a",16)(228,"span"),e._uU(229,"Edit in StackBlitz"),e.qZA()(),e.TgZ(230,"app-code",10),e.IAx(),e._uU(231,'\n<h5>Regular</h5>\n<p-fieldset legend="Header">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</p-fieldset>\n\n<h5>Toggleable</h5>\n<p-fieldset legend="Header" [toggleable]="true">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</p-fieldset>\n'),e.fQ9(),e.qZA()(),e.TgZ(232,"p-tabPanel",17),e.YNc(233,O,1,0,"ng-template",18),e.qZA()()()),2&n&&(e.xp6(16),e.Q6J("toggleable",!0),e.xp6(171),e.Q6J("routerLink",e.DdM(2,S)))},dependencies:[o.yS,E,I.jx,T.xf,T.x4,A.h,U.P],styles:["[_nghost-%COMP%]     .p-fieldset p{line-height:1.5;margin:0}"]}),t})(),H=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.Bz.forChild([{path:"",component:P}]),o.Bz]}),t})();var J=a(1508);let z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,H,Q,J.LU,A.a,U.L]}),t})()}}]);
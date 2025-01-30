"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[875],{7381:(h,c,p)=>{p.d(c,{a:()=>Z,h:()=>g});var s=p(6895),t=p(1571);const e=["code"],m=["*"];let g=(()=>{class o{constructor(i){this.el=i,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(t.SBq))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-code"]],viewQuery:function(i,r){if(1&i&&t.Gf(e,5),2&i){let u;t.iGM(u=t.CRH())&&(r.codeViewChild=u.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:m,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(i,r){1&i&&(t.F$t(),t.TgZ(0,"pre",0)(1,"code",null,1),t.Hsn(3),t._uU(4,"\n"),t.qZA()()),2&i&&(t.Akn(r.style),t.Tol(r.styleClass),t.Q6J("ngClass","language-"+r.lang))},dependencies:[s.mk],encapsulation:2}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez]}),o})()},875:(h,c,p)=>{p.r(c),p.d(c,{RippleDemoModule:()=>b});var s=p(6895),t=p(9859),e=p(1571),m=p(4174),g=p(4619),Z=p(485),o=p(7381),a=p(3032);function i(n,l){1&n&&e._UZ(0,"iframe",21)}let r=(()=>{class n{}return n.\u0275fac=function(d){return new(d||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:100,vars:0,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","ripple","stackblitz","ripple-demo"],[1,"content-section","implementation"],[1,"card-container","flex"],["pRipple","",1,"card","primary-box"],["pRipple","",1,"card","styled-box-green"],["pRipple","",1,"card","styled-box-orange"],["pRipple","",1,"card","styled-box-purple"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],["lang","css"],[1,"doc-tablewrapper"],[1,"doc-table"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/ripple","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-ripple-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-ripple-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(d,v){1&d&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Ripple"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Ripple directive adds ripple effect to the host element."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5),e._uU(10,"Default"),e.qZA(),e.TgZ(11,"div",6),e._uU(12,"Green"),e.qZA(),e.TgZ(13,"div",7),e._uU(14,"Orange"),e.qZA(),e.TgZ(15,"div",8),e._uU(16,"Purple"),e.qZA()()(),e.TgZ(17,"div",9)(18,"p-tabView")(19,"p-tabPanel",10)(20,"h5"),e._uU(21,"Import"),e.qZA(),e.TgZ(22,"app-code",11),e.IAx(),e._uU(23,"\nimport {RippleModule} from 'primeng/ripple';\n"),e.fQ9(),e.qZA(),e.TgZ(24,"h5"),e._uU(25,"Getting Started"),e.qZA(),e.TgZ(26,"p"),e._uU(27,"Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled globally at your main component e.g. app.component.ts by injecting "),e.TgZ(28,"i"),e._uU(29,"PrimeNGConfig"),e.qZA(),e._uU(30,"."),e.qZA(),e.TgZ(31,"app-code",11),e.IAx(),e._uU(32,"\nimport { PrimeNGConfig } from 'primeng/api';\n\n@Component({\n    selector: 'app-root',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent implements OnInit {\n\n    constructor(private primengConfig: PrimeNGConfig) {}\n\n    ngOnInit() {\n        this.primengConfig.ripple = true;\n    }\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(33,"h5"),e._uU(34,"Directive"),e.qZA(),e.TgZ(35,"p"),e._uU(36,"Ripple is applied by adding the "),e.TgZ(37,"i"),e._uU(38,"pRipple"),e.qZA(),e._uU(39," directive to the host."),e.qZA(),e.TgZ(40,"app-code",12),e.IAx(),e._uU(41,"\n<div pRipple></div>\n"),e.fQ9(),e.qZA(),e.TgZ(42,"app-code",11),e.IAx(),e._uU(43,"\nexport class ModelComponent {\n\n    val: number;\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(44,"h5"),e._uU(45,"Styling"),e.qZA(),e.TgZ(46,"p"),e._uU(47,"Default styling of the animation adds a shade of white. This can easily be customized using css that changes the color of "),e.TgZ(48,"i"),e._uU(49,".p-ink"),e.qZA(),e._uU(50," element."),e.qZA(),e.TgZ(51,"app-code",12),e.IAx(),e._uU(52,'\n<div pRipple class="purple" ></div>\n'),e.fQ9(),e.qZA(),e.TgZ(53,"app-code",13),e.IAx(),e._uU(54,"\n.p-ripple.purple .p-ink {\n    background: rgba(256,39,176,.3);\n}\n"),e.fQ9(),e.qZA(),e.TgZ(55,"h5"),e._uU(56,"Styling"),e.qZA(),e.TgZ(57,"div",14)(58,"table",15)(59,"thead")(60,"tr")(61,"th"),e._uU(62,"Name"),e.qZA(),e.TgZ(63,"th"),e._uU(64,"Element"),e.qZA()()(),e.TgZ(65,"tbody")(66,"tr")(67,"td"),e._uU(68,"p-ripple"),e.qZA(),e.TgZ(69,"td"),e._uU(70,"Host element."),e.qZA()(),e.TgZ(71,"tr")(72,"td"),e._uU(73,"p-ink"),e.qZA(),e.TgZ(74,"td"),e._uU(75,"Ripple element."),e.qZA()(),e.TgZ(76,"tr")(77,"td"),e._uU(78,"p-ink-active"),e.qZA(),e.TgZ(79,"td"),e._uU(80,"Ripple element during animating."),e.qZA()()()()(),e.TgZ(81,"h5"),e._uU(82,"Dependencies"),e.qZA(),e.TgZ(83,"p"),e._uU(84,"None."),e.qZA()(),e.TgZ(85,"p-tabPanel",16)(86,"a",17)(87,"span"),e._uU(88,"View on GitHub"),e.qZA()(),e.TgZ(89,"a",18)(90,"span"),e._uU(91,"Edit in StackBlitz"),e.qZA()(),e.TgZ(92,"app-code",12),e.IAx(),e._uU(93,'\n<div class="card-container flex">\n    <div class="card primary-box" pRipple>Default</div>\n    <div class="card styled-box-green" pRipple>Green</div>\n    <div class="card styled-box-orange" pRipple>Orange</div>\n    <div class="card styled-box-purple" pRipple>Purple</div>\n</div>\n'),e.fQ9(),e.qZA(),e.TgZ(94,"app-code",13),e.IAx(),e._uU(95,"\n:host ::ng-deep .card-container {\n    .card {\n        width: 75px;\n        height: 75px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 1rem;\n        user-select: none;\n        padding: 0;\n\n        &.primary-box {\n            background-color: var(--primary-color);\n            padding: 0;\n            color: var(--primary-color-text);\n        }\n\n        &.styled-box-green {\n            .p-ink {\n                background: rgba(#4baf50, 0.3);\n            }\n        }\n\n        &.styled-box-orange {\n            .p-ink {\n                background: rgba(#ffc106, 0.3);\n            }\n        }\n\n        &.styled-box-purple {\n            .p-ink {\n                background: rgba(#9c27b0, 0.3);\n            }\n        }\n\n        &:last-child {\n            margin-right: 0;\n        }\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(96,"app-code",11),e.IAx(),e._uU(97,"\nexport class Ripple {\n\n}\n"),e.fQ9(),e.qZA()(),e.TgZ(98,"p-tabPanel",19),e.YNc(99,i,1,0,"ng-template",20),e.qZA()()())},dependencies:[m.H,g.xf,g.x4,Z.jx,o.h,a.P],styles:["[_nghost-%COMP%]     .card-container .card{width:75px;height:75px;display:flex;align-items:center;justify-content:center;margin-right:1rem;-webkit-user-select:none;user-select:none;padding:0}[_nghost-%COMP%]     .card-container .card.primary-box{background-color:var(--primary-color);padding:0;color:var(--primary-color-text)}[_nghost-%COMP%]     .card-container .card.styled-box-green .p-ink{background:rgba(75,175,80,.3)}[_nghost-%COMP%]     .card-container .card.styled-box-orange .p-ink{background:rgba(255,193,6,.3)}[_nghost-%COMP%]     .card-container .card.styled-box-purple .p-ink{background:rgba(156,39,176,.3)}[_nghost-%COMP%]     .card-container .card:last-child{margin-right:0}"]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(d){return new(d||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[t.Bz.forChild([{path:"",component:r}]),t.Bz]}),n})();var f=p(3421),A=p(1508);let b=(()=>{class n{}return n.\u0275fac=function(d){return new(d||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.ez,u,f.T,A.LU,o.a,a.L]}),n})()}}]);
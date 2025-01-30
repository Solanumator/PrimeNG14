"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[7372],{7381:(y,u,i)=>{i.d(u,{a:()=>e,h:()=>c});var d=i(6895),o=i(1571);const m=["code"],v=["*"];let c=(()=>{class t{constructor(a){this.el=a,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return t.\u0275fac=function(a){return new(a||t)(o.Y36(o.SBq))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-code"]],viewQuery:function(a,s){if(1&a&&o.Gf(m,5),2&a){let g;o.iGM(g=o.CRH())&&(s.codeViewChild=g.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:v,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(a,s){1&a&&(o.F$t(),o.TgZ(0,"pre",0)(1,"code",null,1),o.Hsn(3),o._uU(4,"\n"),o.qZA()()),2&a&&(o.Akn(s.style),o.Tol(s.styleClass),o.Q6J("ngClass","language-"+s.lang))},dependencies:[d.mk],encapsulation:2}),t})(),e=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.ez]}),t})()},7372:(y,u,i)=>{i.r(u),i.d(u,{OverlayDemoModule:()=>g});var d=i(6895),o=i(6634),m=i(7381),v=i(3032),c=i(9859),e=i(1571),t=i(6071);const r=function(){return{breakpoint:"640px",direction:"bottom",contentStyleClass:"h-20rem"}};let a=(()=>{class n{constructor(){this.overlayVisible=!1}toggle(){this.overlayVisible=!this.overlayVisible}}return n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:168,vars:3,consts:[[1,"content-section","documentation"],["lang","typescript"],[1,"flex","justify-content-center","border-blue-500","border-dashed","border-round","p-5","card-demo"],[3,"click"],["contentStyleClass","p-4 surface-overlay shadow-2 border-round",3,"visible","responsive","visibleChange"],[1,"mt-3"],["lang","markup"]],template:function(l,Z){1&l&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Overlay API"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"This API allows overlay components to be controlled from the "),e.TgZ(5,"i"),e._uU(6,"PrimeNGConfig"),e.qZA(),e._uU(7,". In this way, all overlay components in the application can have the same behavior."),e.qZA(),e.TgZ(8,"h5"),e._uU(9,"Options"),e.qZA(),e.TgZ(10,"h6"),e._uU(11,"Mode"),e.qZA(),e.TgZ(12,"p"),e._uU(13,"It has two valid values; "),e.TgZ(14,"i"),e._uU(15,"overlay"),e.qZA(),e._uU(16," and "),e.TgZ(17,"i"),e._uU(18,"modal"),e.qZA(),e._uU(19,". In overlay mode, a container element is opened like overlaypanel or dropdown's panel. In modal mode, the container element behaves like popup. This behaviour is similar to a dialog component."),e.qZA(),e.TgZ(20,"app-code",1),e.IAx(),e._uU(21,"\nimport { PrimeNGConfig, OverlayOptions } from 'primeng/api';\n\n@Component({\n    selector: 'app-root',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent implements OnInit {\n\n    constructor(private primengConfig: PrimeNGConfig) {}\n\n    ngOnInit() {\n        this.primengConfig.overlayOptions: OverlayOptions = {\n            mode: 'modal'\n        };\n    }\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(22,"h6"),e._uU(23,"Responsive"),e.qZA(),e.TgZ(24,"p"),e._uU(25,"It is the option used to determine in which mode it should appear according to the given "),e.TgZ(26,"i"),e._uU(27,"media"),e.qZA(),e._uU(28," or "),e.TgZ(29,"i"),e._uU(30,"breakpoint"),e.qZA(),e._uU(31,"."),e.qZA(),e.TgZ(32,"app-code",1),e.IAx(),e._uU(33,"\nimport { PrimeNGConfig, OverlayOptions, ResponsiveOverlayDirectionType } from 'primeng/api';\n\nconst responsiveOptions: ResponsiveOverlayOptions = {\n    // style?: any;                                     // Style of component in given breakpoint or media query\n    // styleClass?: string;                             // Style class of component in given breakpoint or media query\n    // contentStyle?: any;                              // Style of content in given breakpoint or media query\n    // contentStyleClass?: string;                      // Style class of content in given breakpoint or media query\n    // breakpoint?: string;                             // Breakpoint required to show component in modal mode. Exp: '640px', '10rem' etc.\n    // media?: string;                                  // Media query required to show component in modal mode. Exp: '@media screen and (max-width: 640px)', '@media screen and (min-width: 640px) and (max-width: 900px)' etc.\n    // direction?: ResponsiveOverlayDirectionType;      // Direction in which the component will be displayed in modal mode.\n}\n\nthis.primengConfig.overlayOptions: OverlayOptions = {\n    responsive: responsiveOptions\n};\n"),e.fQ9(),e.qZA(),e.TgZ(34,"p"),e._uU(35,"Valid values of the "),e.TgZ(36,"i"),e._uU(37,"direction"),e.qZA(),e._uU(38," property would be;"),e.qZA(),e.TgZ(39,"ul")(40,"li"),e._uU(41,"center (default)"),e.qZA(),e.TgZ(42,"li"),e._uU(43,"top"),e.qZA(),e.TgZ(44,"li"),e._uU(45,"top-start"),e.qZA(),e.TgZ(46,"li"),e._uU(47,"top-end"),e.qZA(),e.TgZ(48,"li"),e._uU(49,"bottom"),e.qZA(),e.TgZ(50,"li"),e._uU(51,"bottom-start"),e.qZA(),e.TgZ(52,"li"),e._uU(53,"bottom-end"),e.qZA(),e.TgZ(54,"li"),e._uU(55,"left"),e.qZA(),e.TgZ(56,"li"),e._uU(57,"left-start"),e.qZA(),e.TgZ(58,"li"),e._uU(59,"left-end"),e.qZA(),e.TgZ(60,"li"),e._uU(61,"right"),e.qZA(),e.TgZ(62,"li"),e._uU(63,"right-start"),e.qZA(),e.TgZ(64,"li"),e._uU(65,"right-end"),e.qZA()(),e.TgZ(66,"h6"),e._uU(67,"AppendTo"),e.qZA(),e.TgZ(68,"p"),e._uU(69,"Overlay can be mounted into its location, body or DOM element instance using this option."),e.qZA(),e.TgZ(70,"app-code",1),e.IAx(),e._uU(71,"\nimport { PrimeNGConfig, OverlayOptions } from 'primeng/api';\n\nthis.primengConfig.overlayOptions: OverlayOptions = {\n    appendTo: 'body'\n};\n"),e.fQ9(),e.qZA(),e.TgZ(72,"h6"),e._uU(73,"Target"),e.qZA(),e.TgZ(74,"p"),e._uU(75,"The "),e.TgZ(76,"i"),e._uU(77,"target"),e.qZA(),e._uU(78," is used to detect the element that will be used to position the overlay. Valid values would be;"),e.qZA(),e.TgZ(79,"ul")(80,"li"),e._uU(81,"@prev (default)"),e.qZA(),e.TgZ(82,"li"),e._uU(83,"@next"),e.qZA(),e.TgZ(84,"li"),e._uU(85,"@parent"),e.qZA(),e.TgZ(86,"li"),e._uU(87,"@grandparent"),e.qZA(),e.TgZ(88,"li"),e._uU(89,"Use "),e.TgZ(90,"em"),e._uU(91,"CSS selector"),e.qZA()(),e.TgZ(92,"li"),e._uU(93,"Use "),e.TgZ(94,"em"),e._uU(95,"() => HTMLElement"),e.qZA()()(),e.TgZ(96,"h6"),e._uU(97,"Style and StyleClass"),e.qZA(),e.TgZ(98,"p"),e._uU(99,"The "),e.TgZ(100,"i"),e._uU(101,"style"),e.qZA(),e._uU(102," and "),e.TgZ(103,"i"),e._uU(104,"styleClass"),e.qZA(),e._uU(105," are used to define styles that will be added to all overlay components. In addition, it can be used in "),e.TgZ(106,"i"),e._uU(107,"contentStyle"),e.qZA(),e._uU(108," and "),e.TgZ(109,"i"),e._uU(110,"contentStyleClass"),e.qZA(),e._uU(111," classes."),e.qZA(),e.TgZ(112,"h6"),e._uU(113,"AutoZIndex"),e.qZA(),e.TgZ(114,"p"),e._uU(115,"The "),e.TgZ(116,"i"),e._uU(117,"autoZIndex"),e.qZA(),e._uU(118," determines whether to automatically manage layering. Its default value is 'false'."),e.qZA(),e.TgZ(119,"h6"),e._uU(120,"BaseZIndex"),e.qZA(),e.TgZ(121,"p"),e._uU(122,"The "),e.TgZ(123,"i"),e._uU(124,"baseZIndex"),e.qZA(),e._uU(125," is base zIndex value to use in layering. Its default value is 0."),e.qZA(),e.TgZ(126,"h6"),e._uU(127,"ShowTransitionOptions and HideTransitionOptions"),e.qZA(),e.TgZ(128,"p"),e._uU(129,"Transition options of the show or hide animation. The default value of "),e.TgZ(130,"i"),e._uU(131,"showTransitionOptions"),e.qZA(),e._uU(132," is '.12s cubic-bezier(0, 0, 0.2, 1)' and the default value of "),e.TgZ(133,"i"),e._uU(134,"hideTransitionOptions"),e.qZA(),e._uU(135," is '.1s linear'."),e.qZA(),e.TgZ(136,"h6"),e._uU(137,"Events"),e.qZA(),e.TgZ(138,"app-code",1),e.IAx(),e._uU(139,"\nimport { PrimeNGConfig, OverlayOptions, OverlayOnBeforeShowEvent, OverlayOnShowEvent, OverlayOnBeforeHideEvent, OverlayOnHideEvent } from 'primeng/api';\nimport { AnimationEvent } from '@angular/animations';\n\nthis.primengConfig.overlayOptions: OverlayOptions = {\n    onBeforeShow: (event?: OverlayOnBeforeShowEvent) => {};    // Callback to invoke before the overlay is shown.\n    onShow: (event?: OverlayOnShowEvent) => {};                // Callback to invoke when the overlay is shown.\n    onBeforeHide: (event?: OverlayOnBeforeHideEvent) => {};    // Callback to invoke before the overlay is hidden.\n    onHide: (event?: OverlayOnHideEvent) => {};                // Callback to invoke when the overlay is hidden.\n    onAnimationStart: (event?: AnimationEvent) => {};          // Callback to invoke when the animation is started.\n    onAnimationDone: (event?: AnimationEvent) => {};           // Callback to invoke when the animation is done.\n};\n"),e.fQ9(),e.qZA(),e.TgZ(140,"h5"),e._uU(141,"Component"),e.qZA(),e.TgZ(142,"p"),e._uU(143,"Overlay is a container to display content in an overlay window. All the options mentioned above can be used as props for this component."),e.qZA(),e.TgZ(144,"div",2)(145,"button",3),e.NdJ("click",function(){return Z.toggle()}),e._uU(146,"Show Overlay"),e.qZA(),e.TgZ(147,"p-overlay",4),e.NdJ("visibleChange",function(A){return Z.overlayVisible=A}),e._uU(148," Content "),e.qZA()(),e.TgZ(149,"h6",5),e._uU(150,"Import"),e.qZA(),e.TgZ(151,"app-code",1),e.IAx(),e._uU(152,"\nimport { OverlayModule } from 'primeng/overlay';\n"),e.fQ9(),e.qZA(),e.TgZ(153,"h6"),e._uU(154,"Getting Started"),e.qZA(),e.TgZ(155,"app-code",6),e.IAx(),e._uU(156,'\n<button (click)="toggle()">Show Overlay</button>\n<p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: \'640px\', direction: \'bottom\', contentStyleClass: \'h-20rem\' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round">\n    Content\n</p-overlay>\n'),e.fQ9(),e.qZA(),e.TgZ(157,"app-code",1),e.IAx(),e._uU(158,"\nimport { Component } from '@angular/core';\n\n@Component({\n    templateUrl: './overlaydemo.html'\n})\nexport class OverlayDemo {\n    overlayVisible: boolean = false;\n\n    toggle() {\n        this.overlayVisible = !this.overlayVisible;\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(159,"h6"),e._uU(160,"Templating"),e.qZA(),e.TgZ(161,"p"),e._uU(162,"Content can be customized with the "),e.TgZ(163,"i"),e._uU(164,"content"),e.qZA(),e._uU(165," template."),e.qZA(),e.TgZ(166,"app-code",6),e.IAx(),e._uU(167,'\n<button (click)="toggle()">Show Overlay</button>\n<p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: \'640px\', direction: \'bottom\', contentStyleClass: \'h-20rem\' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round">\n    <ng-template pTemplate="content" let-option>\n        Content - {{option.mode}}\n    </ng-template>\n</p-overlay>\n'),e.fQ9(),e.qZA()()),2&l&&(e.xp6(147),e.Q6J("visible",Z.overlayVisible)("responsive",e.DdM(2,r)))},dependencies:[t.aV,m.h],encapsulation:2}),n})(),s=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild([{path:"",component:a}]),c.Bz]}),n})(),g=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,s,o.U8,m.a,v.L]}),n})()}}]);
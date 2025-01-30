"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[2042],{7381:(T,g,o)=>{o.d(g,{a:()=>m,h:()=>A});var r=o(6895),n=o(1571);const Z=["code"],e=["*"];let A=(()=>{class i{constructor(l){this.el=l,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return i.\u0275fac=function(l){return new(l||i)(n.Y36(n.SBq))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-code"]],viewQuery:function(l,c){if(1&l&&n.Gf(Z,5),2&l){let f;n.iGM(f=n.CRH())&&(c.codeViewChild=f.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:e,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(l,c){1&l&&(n.F$t(),n.TgZ(0,"pre",0)(1,"code",null,1),n.Hsn(3),n._uU(4,"\n"),n.qZA()()),2&l&&(n.Akn(c.style),n.Tol(c.styleClass),n.Q6J("ngClass","language-"+c.lang))},dependencies:[r.mk],encapsulation:2}),i})(),m=(()=>{class i{}return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[r.ez]}),i})()},2042:(T,g,o)=>{o.r(g),o.d(g,{SelectButtonDemoModule:()=>b});var r=o(6895),n=o(433),Z=o(9859),e=o(1571),A=o(7873),m=o(4619),i=o(485),p=o(7381),l=o(3032);function c(t,s){1&t&&e._UZ(0,"i"),2&t&&e.Tol(s.$implicit.icon)}function f(t,s){1&t&&e._UZ(0,"iframe",19)}let U=(()=>{class t{constructor(){this.value1="off",this.stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}],this.paymentOptions=[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}],this.justifyOptions=[{icon:"pi pi-align-left",justify:"Left"},{icon:"pi pi-align-right",justify:"Right"},{icon:"pi pi-align-center",justify:"Center"},{icon:"pi pi-align-justify",justify:"Justify"}]}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:245,vars:6,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","selectbutton","stackblitz","selectbutton-demo"],[1,"content-section","implementation"],[1,"card"],["optionLabel","label","optionValue","value",3,"options","ngModel","ngModelChange"],["multiple","multiple","optionLabel","name","optionValue","value",3,"options","ngModel","ngModelChange"],["optionLabel","icon",3,"options","ngModel","ngModelChange"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/selectbutton","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-selectbutton-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-selectbutton-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(a,u){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"SelectButton"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"SelectButton is a form component to choose a value from a list of options using button elements."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h5"),e._uU(10,"Single Selection"),e.qZA(),e.TgZ(11,"p-selectButton",5),e.NdJ("ngModelChange",function(d){return u.value1=d}),e.qZA(),e.TgZ(12,"h5"),e._uU(13,"Multiple Selection"),e.qZA(),e.TgZ(14,"p-selectButton",6),e.NdJ("ngModelChange",function(d){return u.value2=d}),e.qZA(),e.TgZ(15,"h5"),e._uU(16,"Custom Template"),e.qZA(),e.TgZ(17,"p-selectButton",7),e.NdJ("ngModelChange",function(d){return u.value3=d}),e.YNc(18,c,1,2,"ng-template"),e.qZA()()(),e.TgZ(19,"div",8)(20,"p-tabView")(21,"p-tabPanel",9)(22,"h5"),e._uU(23,"Import"),e.qZA(),e.TgZ(24,"app-code",10),e.IAx(),e._uU(25,"\nimport {SelectButtonModule} from 'primeng/selectbutton';\n"),e.fQ9(),e.qZA(),e.TgZ(26,"h5"),e._uU(27,"Getting Started"),e.qZA(),e.TgZ(28,"p"),e._uU(29,"SelectButton requires a value to bind and a collection of options."),e.qZA(),e.TgZ(30,"app-code",11),e.IAx(),e._uU(31,'\n<p-selectButton [options]="cities" [(ngModel)]="selectedCity" optionLabel="name"></p-selectButton>\n'),e.fQ9(),e.qZA(),e.TgZ(32,"app-code",10),e.IAx(),e._uU(33,"\ninterface City {\n    name: string,\n    code: string\n}\n\nexport class SelectButtonDemo {\n\n    cities: City[];\n\n    selectedCity: City;\n\n    constructor() {\n        this.cities = [\n            {name: 'New York', code: 'NY'},\n            {name: 'Rome', code: 'RM'},\n            {name: 'London', code: 'LDN'},\n            {name: 'Istanbul', code: 'IST'},\n            {name: 'Paris', code: 'PRS'}\n        ];\n    }\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(34,"h5"),e._uU(35,"Value Binding"),e.qZA(),e.TgZ(36,"p"),e._uU(37,"The option itself is bound to the model by default, use "),e.TgZ(38,"i"),e._uU(39,"optionValue"),e.qZA(),e._uU(40," to customize the property to pass as the value."),e.qZA(),e.TgZ(41,"app-code",11),e.IAx(),e._uU(42,'\n<p-selectButton [options]="cities" [(ngModel)]="selectedCityCode" optionLabel="name" optionValue="code"></p-selectButton>\n'),e.fQ9(),e.qZA(),e.TgZ(43,"app-code",10),e.IAx(),e._uU(44,"\nexport class SelectButtonDemo {\n\n    cities: City[];\n\n    selectedCityCode: string;\n\n    constructor() {\n        this.cities = [\n            {name: 'New York', code: 'NY'},\n            {name: 'Rome', code: 'RM'},\n            {name: 'London', code: 'LDN'},\n            {name: 'Istanbul', code: 'IST'},\n            {name: 'Paris', code: 'PRS'}\n        ];\n    }\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(45,"h5"),e._uU(46,"Selection"),e.qZA(),e.TgZ(47,"p"),e._uU(48,"SelectButtons allows selection of either single or multiple items, this behavior is defined with the "),e.TgZ(49,"i"),e._uU(50,"multiple"),e.qZA(),e._uU(51," property. In single case, model should be a single object reference whereas in multiple case should be an array."),e.qZA(),e.TgZ(52,"app-code",11),e.IAx(),e._uU(53,'\n<p-selectButton [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" [multiple]="true"></p-selectButton>\n'),e.fQ9(),e.qZA(),e.TgZ(54,"app-code",10),e.IAx(),e._uU(55,"\nexport class SelectButtonDemo {\n\n    cities: City[];\n\n    selectedCities: City[];\n\n    constructor() {\n        this.cities = [\n            {name: 'New York', code: 'NY'},\n            {name: 'Rome', code: 'RM'},\n            {name: 'London', code: 'LDN'},\n            {name: 'Istanbul', code: 'IST'},\n            {name: 'Paris', code: 'PRS'}\n        ];\n    }\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(56,"h5"),e._uU(57,"Disabled Options"),e.qZA(),e.TgZ(58,"p"),e._uU(59,"Particular options can be prevented from selection using the "),e.TgZ(60,"i"),e._uU(61,"optionDisabled"),e.qZA(),e._uU(62," property."),e.qZA(),e.TgZ(63,"app-code",11),e.IAx(),e._uU(64,'\n<p-selectButton [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" optionDisabled="inactive"></p-selectButton>\n'),e.fQ9(),e.qZA(),e.TgZ(65,"app-code",10),e.IAx(),e._uU(66,"\nexport class SelectButtonDemo {\n\n    cities: City[];\n\n    selectedCity: City;\n\n    constructor() {\n        this.cities = [\n            {name: 'New York', code: 'NY', inactive: false},\n            {name: 'Rome', code: 'RM', inactive: true},\n            {name: 'London', code: 'LDN', inactive: false},\n            {name: 'Istanbul', code: 'IST', inactive: true},\n            {name: 'Paris', code: 'PRS', inactive: false}\n        ];\n    }\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(67,"h5"),e._uU(68,"Model Driven Forms"),e.qZA(),e.TgZ(69,"p"),e._uU(70,"SelectButton can be used in a model driven form as well."),e.qZA(),e.TgZ(71,"app-code",11),e.IAx(),e._uU(72,'\n<p-selectButton [options]="cities" formControlName="selectedCity"></p-selectButton>\n'),e.fQ9(),e.qZA(),e.TgZ(73,"h5"),e._uU(74,"Custom Content"),e.qZA(),e.TgZ(75,"p"),e._uU(76,"For custom content support define a ng-template where the local ng-template variable refers to an option in the options collection."),e.qZA(),e.TgZ(77,"app-code",11),e.IAx(),e._uU(78,'\n<p-selectButton [options]="justifyOptions" [(ngModel)]="value" optionLabel="icon">\n    <ng-template let-item>\n        <i [class]="item.icon"></i>\n    </ng-template>\n</p-selectButton>\n'),e.fQ9(),e.qZA(),e.TgZ(79,"app-code",10),e.IAx(),e._uU(80,"\nexport class SelectButtonDemo {\n\n    justifyOptions: any[];\n\n    value: any;\n\n    constructor() {    \n        this.justifyOptions = [\n            {icon: 'pi pi-align-left', justify: 'Left'},\n            {icon: 'pi pi-align-right', justify: 'Right'},\n            {icon: 'pi pi-align-center', justify: 'Center'},\n            {icon: 'pi pi-align-justify', justify: 'Justify'}\n        ];\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(81,"h5"),e._uU(82,"Properties"),e.qZA(),e.TgZ(83,"div",12)(84,"table",13)(85,"thead")(86,"tr")(87,"th"),e._uU(88,"Name"),e.qZA(),e.TgZ(89,"th"),e._uU(90,"Type"),e.qZA(),e.TgZ(91,"th"),e._uU(92,"Default"),e.qZA(),e.TgZ(93,"th"),e._uU(94,"Description"),e.qZA()()(),e.TgZ(95,"tbody")(96,"tr")(97,"td"),e._uU(98,"options"),e.qZA(),e.TgZ(99,"td"),e._uU(100,"array"),e.qZA(),e.TgZ(101,"td"),e._uU(102,"null"),e.qZA(),e.TgZ(103,"td"),e._uU(104,"An array of selectitems to display as the available options."),e.qZA()(),e.TgZ(105,"tr")(106,"td"),e._uU(107,"optionLabel"),e.qZA(),e.TgZ(108,"td"),e._uU(109,"string"),e.qZA(),e.TgZ(110,"td"),e._uU(111,"label"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"Name of the label field of an option."),e.qZA()(),e.TgZ(114,"tr")(115,"td"),e._uU(116,"optionValue"),e.qZA(),e.TgZ(117,"td"),e._uU(118,"string"),e.qZA(),e.TgZ(119,"td"),e._uU(120,"value"),e.qZA(),e.TgZ(121,"td"),e._uU(122,"Name of the value field of an option."),e.qZA()(),e.TgZ(123,"tr")(124,"td"),e._uU(125,"optionDisabled"),e.qZA(),e.TgZ(126,"td"),e._uU(127,"string"),e.qZA(),e.TgZ(128,"td"),e._uU(129,"disabled"),e.qZA(),e.TgZ(130,"td"),e._uU(131,"Name of the disabled field of an option."),e.qZA()(),e.TgZ(132,"tr")(133,"td"),e._uU(134,"multiple"),e.qZA(),e.TgZ(135,"td"),e._uU(136,"boolean"),e.qZA(),e.TgZ(137,"td"),e._uU(138,"false"),e.qZA(),e.TgZ(139,"td"),e._uU(140,"When specified, allows selecting multiple values."),e.qZA()(),e.TgZ(141,"tr")(142,"td"),e._uU(143,"tabindex"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"number"),e.qZA(),e.TgZ(146,"td"),e._uU(147,"0"),e.qZA(),e.TgZ(148,"td"),e._uU(149,"Index of the element in tabbing order."),e.qZA()(),e.TgZ(150,"tr")(151,"td"),e._uU(152,"style"),e.qZA(),e.TgZ(153,"td"),e._uU(154,"string"),e.qZA(),e.TgZ(155,"td"),e._uU(156,"null"),e.qZA(),e.TgZ(157,"td"),e._uU(158,"Inline style of the component."),e.qZA()(),e.TgZ(159,"tr")(160,"td"),e._uU(161,"styleClass"),e.qZA(),e.TgZ(162,"td"),e._uU(163,"string"),e.qZA(),e.TgZ(164,"td"),e._uU(165,"null"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"Style class of the component."),e.qZA()(),e.TgZ(168,"tr")(169,"td"),e._uU(170,"ariaLabelledBy"),e.qZA(),e.TgZ(171,"td"),e._uU(172,"string"),e.qZA(),e.TgZ(173,"td"),e._uU(174,"null"),e.qZA(),e.TgZ(175,"td"),e._uU(176,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),e.qZA()(),e.TgZ(177,"tr")(178,"td"),e._uU(179,"disabled"),e.qZA(),e.TgZ(180,"td"),e._uU(181,"boolean"),e.qZA(),e.TgZ(182,"td"),e._uU(183,"false"),e.qZA(),e.TgZ(184,"td"),e._uU(185,"When present, it specifies that the element should be disabled."),e.qZA()(),e.TgZ(186,"tr")(187,"td"),e._uU(188,"dataKey"),e.qZA(),e.TgZ(189,"td"),e._uU(190,"string"),e.qZA(),e.TgZ(191,"td"),e._uU(192,"null"),e.qZA(),e.TgZ(193,"td"),e._uU(194,"A property to uniquely identify a value in options."),e.qZA()()()()(),e.TgZ(195,"h5"),e._uU(196,"Events"),e.qZA(),e.TgZ(197,"div",12)(198,"table",13)(199,"thead")(200,"tr")(201,"th"),e._uU(202,"Name"),e.qZA(),e.TgZ(203,"th"),e._uU(204,"Parameters"),e.qZA(),e.TgZ(205,"th"),e._uU(206,"Description"),e.qZA()()(),e.TgZ(207,"tbody")(208,"tr")(209,"td"),e._uU(210,"onChange"),e.qZA(),e.TgZ(211,"td"),e._uU(212,"event.originalEvent: browser event"),e._UZ(213,"br"),e._uU(214," event.value: single value or an array of values that are selected "),e.qZA(),e.TgZ(215,"td"),e._uU(216,"Callback to invoke when value changes."),e.qZA()(),e.TgZ(217,"tr")(218,"td"),e._uU(219,"onOptionClick"),e.qZA(),e.TgZ(220,"td"),e._uU(221,"event.originalEvent: browser event"),e._UZ(222,"br"),e._uU(223," event.option: SelectItem instance of the clicked button"),e._UZ(224,"br"),e._uU(225," event.index: Index of the clicked button "),e.qZA(),e.TgZ(226,"td"),e._uU(227,"Callback to invoke when a button is clicked."),e.qZA()()()()(),e.TgZ(228,"h5"),e._uU(229,"Dependencies"),e.qZA(),e.TgZ(230,"p"),e._uU(231,"None."),e.qZA()(),e.TgZ(232,"p-tabPanel",14)(233,"a",15)(234,"span"),e._uU(235,"View on GitHub"),e.qZA()(),e.TgZ(236,"a",16)(237,"span"),e._uU(238,"Edit in StackBlitz"),e.qZA()(),e.TgZ(239,"app-code",11),e.IAx(),e._uU(240,'\n<h5>Single Selection</h5>\n<p-selectButton [options]="stateOptions" [(ngModel)]="value1" optionLabel="label" optionValue="value"></p-selectButton>\n\n<h5>Multiple Selection</h5>\n<p-selectButton [options]="paymentOptions" [(ngModel)]="value2" multiple="multiple" optionLabel="name" optionValue="value"></p-selectButton>\n\n<h5>Custom Template</h5>\n<p-selectButton [options]="justifyOptions" [(ngModel)]="value3" optionLabel="icon">\n    <ng-template let-item>\n        <i [class]="item.icon"></i>\n    </ng-template>\n</p-selectButton>\n'),e.fQ9(),e.qZA(),e.TgZ(241,"app-code",10),e.IAx(),e._uU(242,"\nimport {Component} from '@angular/core';\n\n@Component({\n    templateUrl: './selectbuttondemo.html'\n})\nexport class SelectButtonDemo {\n\n    stateOptions: any[];\n\n    paymentOptions: any[];\n\n    justifyOptions: any[];\n\n    value1: string = \"off\";\n\n    value2: number;\n\n    value3: any;\n\n    constructor() {\n        this.stateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];\n\n        this.paymentOptions = [\n            {name: 'Option 1', value: 1},\n            {name: 'Option 2', value: 2},\n            {name: 'Option 3', value: 3}\n        ];\n\n        this.justifyOptions = [\n            {icon: 'pi pi-align-left', justify: 'Left'},\n            {icon: 'pi pi-align-right', justify: 'Right'},\n            {icon: 'pi pi-align-center', justify: 'Center'},\n            {icon: 'pi pi-align-justify', justify: 'Justify'}\n        ];\n    }\n}\n"),e.fQ9(),e.qZA()(),e.TgZ(243,"p-tabPanel",17),e.YNc(244,f,1,0,"ng-template",18),e.qZA()()()),2&a&&(e.xp6(11),e.Q6J("options",u.stateOptions)("ngModel",u.value1),e.xp6(3),e.Q6J("options",u.paymentOptions)("ngModel",u.value2),e.xp6(3),e.Q6J("options",u.justifyOptions)("ngModel",u.value3))},dependencies:[n.JJ,n.On,A.UN,m.xf,m.x4,i.jx,p.h,l.P],encapsulation:2}),t})(),_=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[Z.Bz.forChild([{path:"",component:U}]),Z.Bz]}),t})();var v=o(6352),y=o(1928),q=o(1508);let b=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,_,n.u5,v.Qy,y.hJ,q.LU,p.a,l.L]}),t})()}}]);
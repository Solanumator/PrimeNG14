"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[3853],{7381:(Z,l,n)=>{n.d(l,{a:()=>r,h:()=>m});var i=n(6895),e=n(1571);const d=["code"],g=["*"];let m=(()=>{class u{constructor(s){this.el=s,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return u.\u0275fac=function(s){return new(s||u)(e.Y36(e.SBq))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-code"]],viewQuery:function(s,a){if(1&s&&e.Gf(d,5),2&s){let A;e.iGM(A=e.CRH())&&(a.codeViewChild=A.first)}},inputs:{lang:"lang",style:"style",styleClass:"styleClass"},ngContentSelectors:g,decls:5,vars:5,consts:[[3,"ngClass"],["code",""]],template:function(s,a){1&s&&(e.F$t(),e.TgZ(0,"pre",0)(1,"code",null,1),e.Hsn(3),e._uU(4,"\n"),e.qZA()()),2&s&&(e.Akn(a.style),e.Tol(a.styleClass),e.Q6J("ngClass","language-"+a.lang))},dependencies:[i.mk],encapsulation:2}),u})(),r=(()=>{class u{}return u.\u0275fac=function(s){return new(s||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[i.ez]}),u})()},3853:(Z,l,n)=>{n.r(l),n.d(l,{AutoFocusDemoModule:()=>h});var i=n(6895),e=n(433),d=n(7381),g=n(1508),m=n(5814),r=n(3032),u=n(9859),t=n(1571),s=n(4619),a=n(6440);let A=(()=>{class o{}return o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["autofocusdemo"]],decls:69,vars:1,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","autofocus","stackblitz","autofocus-demo"],[1,"content-section","implementation"],["type","text","pInputText","","pAutoFocus","","placeholder","Automatically focused",3,"autofocus"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/autofocus","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-autofocus-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"]],template:function(c,T){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"AutoFocus"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"AutoFocus manages focus on focusable element on load."),t.qZA()(),t._UZ(6,"app-demoActions",2),t.qZA(),t.TgZ(7,"div",3),t._UZ(8,"input",4),t.qZA(),t.TgZ(9,"div",5)(10,"p-tabView")(11,"p-tabPanel",6)(12,"h5"),t._uU(13,"Import"),t.qZA(),t.TgZ(14,"app-code",7),t.IAx(),t._uU(15,"\nimport {AutoFocusModule} from 'primeng/autofocus';\n"),t.fQ9(),t.qZA(),t.TgZ(16,"h5"),t._uU(17,"Getting Started"),t.qZA(),t.TgZ(18,"p"),t._uU(19,"AutoFocus is applied to any focusable input element on initial load. It's disabled by default and needs to be enabled manually."),t.qZA(),t.TgZ(20,"app-code",8),t.IAx(),t._uU(21,'\n<input pAutoFocus [autofocus]="true" >\n'),t.fQ9(),t.qZA(),t.TgZ(22,"app-code",7),t.IAx(),t._uU(23,"\nexport class AutoFocusDemo { }\n"),t.fQ9(),t.qZA(),t.TgZ(24,"h5"),t._uU(25,"Properties"),t.qZA(),t.TgZ(26,"div",9)(27,"table",10)(28,"thead")(29,"tr")(30,"th"),t._uU(31,"Name"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"Type"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Default"),t.qZA(),t.TgZ(36,"th"),t._uU(37,"Description"),t.qZA()()(),t.TgZ(38,"tbody")(39,"tr")(40,"td"),t._uU(41,"autofocus"),t.qZA(),t.TgZ(42,"td"),t._uU(43,"boolean"),t.qZA(),t.TgZ(44,"td"),t._uU(45,"null"),t.qZA(),t.TgZ(46,"td"),t._uU(47,"When present, it specifies that the component should automatically get focus on load."),t.qZA()()()()(),t.TgZ(48,"h5"),t._uU(49,"Events"),t.qZA(),t.TgZ(50,"p"),t._uU(51,"Directive has no events."),t.qZA(),t.TgZ(52,"h5"),t._uU(53,"Styling"),t.qZA(),t.TgZ(54,"p"),t._uU(55,"Directive does not apply any styling to host."),t.qZA(),t.TgZ(56,"h5"),t._uU(57,"Dependencies"),t.qZA(),t.TgZ(58,"p"),t._uU(59,"None."),t.qZA()(),t.TgZ(60,"p-tabPanel",11)(61,"a",12)(62,"span"),t._uU(63,"View on GitHub"),t.qZA()(),t.TgZ(64,"a",13)(65,"span"),t._uU(66,"Edit in StackBlitz"),t.qZA()(),t.TgZ(67,"app-code",8),t.IAx(),t._uU(68,'\n<input type="text" pInputText pAutoFocus [autofocus]="true" placeholder="Automatically focused" >\n'),t.fQ9(),t.qZA()()()()),2&c&&(t.xp6(8),t.Q6J("autofocus",!0))},dependencies:[d.h,s.xf,s.x4,m.P,a.o,r.P],encapsulation:2}),o})(),f=(()=>{class o{}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild([{path:"",component:A}]),u.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[i.ez,e.u5,d.a,g.LU,m.E,a.j,r.L,f]}),o})()}}]);
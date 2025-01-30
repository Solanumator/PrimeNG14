"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[4795],{7808:(P,Z,p)=>{p.d(Z,{EV:()=>t.EV});var t=p(9064)},9064:(P,Z,p)=>{p.d(Z,{EV:()=>q,FN:()=>E});var t=p(1571),h=p(6895),_=p(8476),f=p(9716),e=p(3421),m=p(7340),C=p(4174);const T=["container"],O=function(a,g,n,i){return{"pi-info-circle":a,"pi-exclamation-triangle":g,"pi-times-circle":n,"pi-check":i}};function M(a,g){if(1&a&&(t.ynx(0),t._UZ(1,"span",6),t.TgZ(2,"div",7)(3,"div",8),t._uU(4),t.qZA(),t.TgZ(5,"div",9),t._uU(6),t.qZA()(),t.BQk()),2&a){const n=t.oxw();t.xp6(1),t.Tol("p-toast-message-icon pi"+(n.message.icon?" "+n.message.icon:"")),t.Q6J("ngClass",t.l5B(5,O,"info"==n.message.severity,"warn"==n.message.severity,"error"==n.message.severity,"success"==n.message.severity)),t.xp6(3),t.Oqu(n.message.summary),t.xp6(2),t.Oqu(n.message.detail)}}function w(a,g){1&a&&t.GkF(0)}function U(a,g){if(1&a){const n=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(l){t.CHM(n);const d=t.oxw();return t.KtG(d.onCloseIconClick(l))})("keydown.enter",function(l){t.CHM(n);const d=t.oxw();return t.KtG(d.onCloseIconClick(l))}),t._UZ(1,"span",11),t.qZA()}}const x=function(a){return[a,"p-toast-message"]},k=function(a,g,n,i){return{showTransformParams:a,hideTransformParams:g,showTransitionParams:n,hideTransitionParams:i}},b=function(a){return{value:"visible",params:a}},A=function(a){return{$implicit:a}};function D(a,g){if(1&a){const n=t.EpF();t.TgZ(0,"p-toastItem",3),t.NdJ("onClose",function(l){t.CHM(n);const d=t.oxw();return t.KtG(d.onMessageClose(l))})("@toastAnimation.start",function(l){t.CHM(n);const d=t.oxw();return t.KtG(d.onAnimationStart(l))})("@toastAnimation.done",function(l){t.CHM(n);const d=t.oxw();return t.KtG(d.onAnimationEnd(l))}),t.qZA()}if(2&a){const n=g.$implicit,i=g.index,l=t.oxw();t.Q6J("message",n)("index",i)("template",l.template)("@toastAnimation",void 0)("showTransformOptions",l.showTransformOptions)("hideTransformOptions",l.hideTransformOptions)("showTransitionOptions",l.showTransitionOptions)("hideTransitionOptions",l.hideTransitionOptions)}}let I=(()=>{class a{constructor(n){this.zone=n,this.onClose=new t.vpe}ngAfterViewInit(){this.initTimeout()}initTimeout(){this.message.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick(n){this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),n.preventDefault()}ngOnDestroy(){this.clearTimeout()}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(t.R0b))},a.\u0275cmp=t.Xpm({type:a,selectors:[["p-toastItem"]],viewQuery:function(n,i){if(1&n&&t.Gf(T,5),2&n){let l;t.iGM(l=t.CRH())&&(i.containerViewChild=l.first)}},hostAttrs:[1,"p-element"],inputs:{message:"message",index:"index",template:"template",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},decls:6,vars:21,consts:[[3,"ngClass","mouseenter","mouseleave"],["container",""],["role","alert","aria-live","assertive","aria-atomic","true",1,"p-toast-message-content",3,"ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","class","p-toast-icon-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[3,"ngClass"],[1,"p-toast-message-text"],[1,"p-toast-summary"],[1,"p-toast-detail"],["type","button","pRipple","",1,"p-toast-icon-close","p-link",3,"click","keydown.enter"],[1,"p-toast-icon-close-icon","pi","pi-times"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0,1),t.NdJ("mouseenter",function(){return i.onMouseEnter()})("mouseleave",function(){return i.onMouseLeave()}),t.TgZ(2,"div",2),t.YNc(3,M,7,10,"ng-container",3),t.YNc(4,w,1,0,"ng-container",4),t.YNc(5,U,2,0,"button",5),t.qZA()()),2&n&&(t.Tol(i.message.styleClass),t.Q6J("ngClass",t.VKq(10,x,"p-toast-message-"+i.message.severity))("@messageState",t.VKq(17,b,t.l5B(12,k,i.showTransformOptions,i.hideTransformOptions,i.showTransitionOptions,i.hideTransitionOptions))),t.uIk("id",i.message.id),t.xp6(2),t.Q6J("ngClass",i.message.contentStyleClass),t.xp6(1),t.Q6J("ngIf",!i.template),t.xp6(1),t.Q6J("ngTemplateOutlet",i.template)("ngTemplateOutletContext",t.VKq(19,A,i.message)),t.xp6(1),t.Q6J("ngIf",!1!==i.message.closable))},dependencies:[h.mk,h.O5,h.tP,C.H],encapsulation:2,data:{animation:[(0,m.X$)("messageState",[(0,m.SB)("visible",(0,m.oB)({transform:"translateY(0)",opacity:1})),(0,m.eR)("void => *",[(0,m.oB)({transform:"{{showTransformParams}}",opacity:0}),(0,m.jt)("{{showTransitionParams}}")]),(0,m.eR)("* => void",[(0,m.jt)("{{hideTransitionParams}}",(0,m.oB)({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0}),a})(),E=(()=>{class a{constructor(n,i,l){this.messageService=n,this.cd=i,this.config=l,this.autoZIndex=!0,this.baseZIndex=0,this.position="top-right",this.preventOpenDuplicates=!1,this.preventDuplicates=!1,this.showTransformOptions="translateY(100%)",this.hideTransformOptions="translateY(-100%)",this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="250ms ease-in",this.onClose=new t.vpe,this.id=(0,f.Th)()}ngOnInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(n=>{if(n)if(n instanceof Array){const i=n.filter(l=>this.canAdd(l));this.add(i)}else this.canAdd(n)&&this.add([n])}),this.clearSubscription=this.messageService.clearObserver.subscribe(n=>{n?this.key===n&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}ngAfterViewInit(){this.breakpoints&&this.createStyle()}add(n){this.messages=this.messages?[...this.messages,...n]:[...n],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...n]:[...n]),this.cd.markForCheck()}canAdd(n){let i=this.key===n.key;return i&&this.preventOpenDuplicates&&(i=!this.containsMessage(this.messages,n)),i&&this.preventDuplicates&&(i=!this.containsMessage(this.messagesArchieve,n)),i}containsMessage(n,i){return!!n&&null!=n.find(l=>l.summary===i.summary&&l.detail==i.detail&&l.severity===i.severity)}ngAfterContentInit(){this.templates.forEach(n=>{n.getType(),this.template=n.template})}onMessageClose(n){this.messages.splice(n.index,1),this.onClose.emit({message:n.message}),this.cd.detectChanges()}onAnimationStart(n){"void"===n.fromState&&(this.containerViewChild.nativeElement.setAttribute(this.id,""),this.autoZIndex&&""===this.containerViewChild.nativeElement.style.zIndex&&f.P9.set("modal",this.containerViewChild.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(n){"void"===n.toState&&this.autoZIndex&&f.gb.isEmpty(this.messages)&&f.P9.clear(this.containerViewChild.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let n="";for(let i in this.breakpoints){let l="";for(let d in this.breakpoints[i])l+=d+":"+this.breakpoints[i][d]+" !important;";n+=`\n                    @media screen and (max-width: ${i}) {\n                        .p-toast[${this.id}] {\n                           ${l}\n                        }\n                    }\n                `}this.styleElement.innerHTML=n}}destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&f.P9.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(_.ez),t.Y36(t.sBO),t.Y36(_.b4))},a.\u0275cmp=t.Xpm({type:a,selectors:[["p-toast"]],contentQueries:function(n,i,l){if(1&n&&t.Suo(l,_.jx,4),2&n){let d;t.iGM(d=t.CRH())&&(i.templates=d)}},viewQuery:function(n,i){if(1&n&&t.Gf(T,5),2&n){let l;t.iGM(l=t.CRH())&&(i.containerViewChild=l.first)}},hostAttrs:[1,"p-element"],inputs:{key:"key",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:"preventOpenDuplicates",preventDuplicates:"preventDuplicates",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},decls:3,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],[3,"message","index","template","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"message","index","template","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0,1),t.YNc(2,D,1,8,"p-toastItem",2),t.qZA()),2&n&&(t.Tol(i.styleClass),t.Q6J("ngClass","p-toast p-component p-toast-"+i.position)("ngStyle",i.style),t.xp6(2),t.Q6J("ngForOf",i.messages))},dependencies:[h.mk,h.sg,h.PC,I],styles:[".p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-toast-icon-close.p-link{cursor:pointer}\n"],encapsulation:2,data:{animation:[(0,m.X$)("toastAnimation",[(0,m.eR)(":enter, :leave",[(0,m.IO)("@*",(0,m.pV)())])])]},changeDetection:0}),a})(),q=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[h.ez,e.T,_.m8]}),a})()},4795:(P,Z,p)=>{p.r(Z),p.d(Z,{GMapDemoModule:()=>z});var t=p(6895),h=p(433),_=p(9859),f=p(8476),e=p(1571);let m=(()=>{class r{constructor(o,s,c,v){this.el=o,this.cd=c,this.zone=v,this.onMapClick=new e.vpe,this.onOverlayClick=new e.vpe,this.onOverlayDblClick=new e.vpe,this.onOverlayDragStart=new e.vpe,this.onOverlayDrag=new e.vpe,this.onOverlayDragEnd=new e.vpe,this.onMapReady=new e.vpe,this.onMapDragEnd=new e.vpe,this.onZoomChanged=new e.vpe,this.differ=s.find([]).create(null)}ngAfterViewChecked(){!this.map&&this.el.nativeElement.offsetParent&&this.initialize()}initialize(){if(this.map=new google.maps.Map(this.el.nativeElement.children[0],this.options),this.onMapReady.emit({map:this.map}),this.overlays)for(let o of this.overlays)o.setMap(this.map),this.bindOverlayEvents(o);this.map.addListener("click",o=>{this.zone.run(()=>{this.onMapClick.emit(o)})}),this.map.addListener("dragend",o=>{this.zone.run(()=>{this.onMapDragEnd.emit(o)})}),this.map.addListener("zoom_changed",o=>{this.zone.run(()=>{this.onZoomChanged.emit(o)})})}bindOverlayEvents(o){o.addListener("click",s=>{this.zone.run(()=>{this.onOverlayClick.emit({originalEvent:s,overlay:o,map:this.map})})}),o.addListener("dblclick",s=>{this.zone.run(()=>{this.onOverlayDblClick.emit({originalEvent:s,overlay:o,map:this.map})})}),o.getDraggable()&&this.bindDragEvents(o)}ngDoCheck(){let o=this.differ.diff(this.overlays);o&&this.map&&(o.forEachRemovedItem(s=>{google.maps.event.clearInstanceListeners(s.item),s.item.setMap(null)}),o.forEachAddedItem(s=>{s.item.setMap(this.map),s.item.addListener("click",c=>{this.zone.run(()=>{this.onOverlayClick.emit({originalEvent:c,overlay:s.item,map:this.map})})}),s.item.getDraggable()&&this.bindDragEvents(s.item)}))}bindDragEvents(o){o.addListener("dragstart",s=>{this.zone.run(()=>{this.onOverlayDragStart.emit({originalEvent:s,overlay:o,map:this.map})})}),o.addListener("drag",s=>{this.zone.run(()=>{this.onOverlayDrag.emit({originalEvent:s,overlay:o,map:this.map})})}),o.addListener("dragend",s=>{this.zone.run(()=>{this.onOverlayDragEnd.emit({originalEvent:s,overlay:o,map:this.map})})})}getMap(){return this.map}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(e.SBq),e.Y36(e.ZZ4),e.Y36(e.sBO),e.Y36(e.R0b))},r.\u0275cmp=e.Xpm({type:r,selectors:[["p-gmap"]],hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",options:"options",overlays:"overlays"},outputs:{onMapClick:"onMapClick",onOverlayClick:"onOverlayClick",onOverlayDblClick:"onOverlayDblClick",onOverlayDragStart:"onOverlayDragStart",onOverlayDrag:"onOverlayDrag",onOverlayDragEnd:"onOverlayDragEnd",onMapReady:"onMapReady",onMapDragEnd:"onMapDragEnd",onZoomChanged:"onZoomChanged"},decls:1,vars:3,consts:[[3,"ngStyle"]],template:function(o,s){1&o&&e._UZ(0,"div",0),2&o&&(e.Tol(s.styleClass),e.Q6J("ngStyle",s.style))},dependencies:[t.PC],encapsulation:2,changeDetection:0}),r})(),C=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[t.ez]}),r})();var T=p(9064),O=p(485),M=p(6440),w=p(6861),U=p(8167),x=p(2863),k=p(4619),b=p(7381),A=p(3032);const D=function(){return{"margin-top":".25em"}};function I(r,u){if(1&r){const o=e.EpF();e.TgZ(0,"div",21)(1,"div",22)(2,"label",23),e._uU(3,"Label"),e.qZA()(),e.TgZ(4,"div",24)(5,"input",25),e.NdJ("ngModelChange",function(c){e.CHM(o);const v=e.oxw();return e.KtG(v.markerTitle=c)}),e.qZA()(),e.TgZ(6,"div",22)(7,"label",26),e._uU(8,"Lat"),e.qZA()(),e.TgZ(9,"div",24),e._UZ(10,"input",27),e.qZA(),e.TgZ(11,"div",22)(12,"label",28),e._uU(13,"Lng"),e.qZA()(),e.TgZ(14,"div",24),e._UZ(15,"input",29),e.qZA(),e.TgZ(16,"div",22)(17,"label",30),e._uU(18,"Drag"),e.qZA()(),e.TgZ(19,"div",24)(20,"p-checkbox",31),e.NdJ("ngModelChange",function(c){e.CHM(o);const v=e.oxw();return e.KtG(v.draggable=c)}),e.qZA()()()}if(2&r){const o=e.oxw();e.xp6(5),e.Q6J("ngModel",o.markerTitle),e.xp6(5),e.Q6J("ngModel",o.selectedPosition.lat()),e.xp6(5),e.Q6J("ngModel",o.selectedPosition.lng()),e.xp6(5),e.Akn(e.DdM(6,D)),e.Q6J("ngModel",o.draggable)}}function E(r,u){if(1&r){const o=e.EpF();e.TgZ(0,"div")(1,"button",32),e.NdJ("click",function(){e.CHM(o);const c=e.oxw();return e.KtG(c.addMarker())}),e.qZA()()}}const q=function(){return{width:"100%",height:"320px","margin-bottom":"1em"}},a=function(){return{width:"300px"}};let g=(()=>{class r{constructor(o){this.messageService=o}ngOnInit(){this.options={center:{lat:36.890257,lng:30.707417},zoom:12},this.initOverlays(),this.infoWindow=new google.maps.InfoWindow}handleMapClick(o){this.dialogVisible=!0,this.selectedPosition=o.latLng}handleOverlayClick(o){if(null!=o.overlay.getTitle){let c=o.overlay.getTitle();this.infoWindow.setContent("<div>"+c+"</div>"),this.infoWindow.open(o.map,o.overlay),o.map.setCenter(o.overlay.getPosition()),this.messageService.add({severity:"info",summary:"Marker Selected",detail:c})}else this.messageService.add({severity:"info",summary:"Shape Selected",detail:""})}addMarker(){this.overlays.push(new google.maps.Marker({position:{lat:this.selectedPosition.lat(),lng:this.selectedPosition.lng()},title:this.markerTitle,draggable:this.draggable})),this.markerTitle=null,this.dialogVisible=!1}handleDragEnd(o){this.messageService.add({severity:"info",summary:"Marker Dragged",detail:o.overlay.getTitle()})}initOverlays(){(!this.overlays||!this.overlays.length)&&(this.overlays=[new google.maps.Marker({position:{lat:36.879466,lng:30.667648},title:"Konyaalti"}),new google.maps.Marker({position:{lat:36.883707,lng:30.689216},title:"Ataturk Park"}),new google.maps.Marker({position:{lat:36.885233,lng:30.702323},title:"Oldtown"}),new google.maps.Polygon({paths:[{lat:36.9177,lng:30.7854},{lat:36.8851,lng:30.7802},{lat:36.8829,lng:30.8111},{lat:36.9177,lng:30.8159}],strokeOpacity:.5,strokeWeight:1,fillColor:"#1976D2",fillOpacity:.35}),new google.maps.Circle({center:{lat:36.90707,lng:30.56533},fillColor:"#1976D2",fillOpacity:.35,strokeWeight:1,radius:1500}),new google.maps.Polyline({path:[{lat:36.86149,lng:30.63743},{lat:36.86341,lng:30.72463}],geodesic:!0,strokeColor:"#FF0000",strokeOpacity:.5,strokeWeight:2})])}zoomIn(o){o.setZoom(o.getZoom()+1)}zoomOut(o){o.setZoom(o.getZoom()-1)}clear(){this.overlays=[]}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(f.ez))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],features:[e._Bn([f.ez])],decls:233,vars:10,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","gmap"],[1,"content-section","implementation"],[1,"card"],[3,"options","overlays","onMapClick","onOverlayClick","onOverlayDragEnd"],["gmap",""],["type","button","pButton","","label","Clear","icon","pi pi-times",2,"margin-right",".25em",3,"click"],["type","button","pButton","","label","Zoom In","icon","pi pi-plus",2,"margin-right",".25em",3,"click"],["type","button","pButton","","label","Zoom Out","icon","pi pi-minus",3,"click"],["showEffect","fade","header","New Location",3,"visible","visibleChange"],["class","grid p-fluid",4,"ngIf"],["pTemplate","footer"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/gmap","target","_blank",1,"btn-viewsource"],[1,"grid","p-fluid"],[1,"col-2"],["for","title"],[1,"col-10"],["type","text","pInputText","","id","title",3,"ngModel","ngModelChange"],["for","lat"],["id","lat","type","text","readonly","","pInputText","",3,"ngModel"],["for","lng"],["id","lng","type","text","readonly","","pInputText","",3,"ngModel"],["for","drg"],["binary","true",3,"ngModel","ngModelChange"],["type","button","pButton","","label","Add Marker","icon","pi pi-plus",3,"click"]],template:function(o,s){if(1&o){const c=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"GMap"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"GMap component provides integration with Google Maps API. This sample demontrates various uses cases like binding, overlays and events. Click the map to add a new item."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3),e._UZ(8,"p-toast"),e.TgZ(9,"div",4)(10,"p-gmap",5,6),e.NdJ("onMapClick",function(y){return s.handleMapClick(y)})("onOverlayClick",function(y){return s.handleOverlayClick(y)})("onOverlayDragEnd",function(y){return s.handleDragEnd(y)}),e.qZA(),e.TgZ(12,"button",7),e.NdJ("click",function(){return s.clear()}),e.qZA(),e.TgZ(13,"button",8),e.NdJ("click",function(){e.CHM(c);const y=e.MAs(11);return e.KtG(s.zoomIn(y.getMap()))}),e.qZA(),e.TgZ(14,"button",9),e.NdJ("click",function(){e.CHM(c);const y=e.MAs(11);return e.KtG(s.zoomOut(y.getMap()))}),e.qZA(),e.TgZ(15,"p-dialog",10),e.NdJ("visibleChange",function(y){return s.dialogVisible=y}),e.YNc(16,I,21,7,"div",11),e.YNc(17,E,2,0,"ng-template",12),e.qZA()()(),e.TgZ(18,"div",13)(19,"p-tabView")(20,"p-tabPanel",14)(21,"h5"),e._uU(22,"Import"),e.qZA(),e.TgZ(23,"app-code",15),e.IAx(),e._uU(24,"\nimport {GMapModule} from 'primeng/gmap';\n"),e.fQ9(),e.qZA(),e.TgZ(25,"h5"),e._uU(26,"Getting Started"),e.qZA(),e.TgZ(27,"p"),e._uU(28,"A map is initialized with options and dimensions. Refer to the google maps api for the list of available options."),e.qZA(),e.TgZ(29,"app-code",16),e.IAx(),e._uU(30,"\n<p-gmap [options]=\"options\" [style]=\"{'width':'100%','height':'320px'}\" ></p-gmap>\n"),e.fQ9(),e.qZA(),e.TgZ(31,"app-code",15),e.IAx(),e._uU(32,"\nexport class MyModel {\n\n    options: any;\n\n    overlays: any[];\n\n    ngOnInit() {\n        this.options = {\n            center: {lat: 36.890257, lng: 30.707417},\n            zoom: 12\n        };\n    }\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(33,"h5"),e._uU(34,"Overlays"),e.qZA(),e.TgZ(35,"p"),e._uU(36,"GMap can display any type of overlay such as markers, polygons and circles. Overlay instances are bound using the overlays property array. Overlays are aware of one-way binding so whenever the array changes, gmap updates itself."),e.qZA(),e.TgZ(37,"app-code",16),e.IAx(),e._uU(38,"\n<p-gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"{'width':'100%','height':'320px'}\" ></p-gmap>\n"),e.fQ9(),e.qZA(),e.TgZ(39,"app-code",15),e.IAx(),e._uU(40,"\nexport class MyModel {\n\n    options: any;\n\n    overlays: any[];\n\n    ngOnInit() {\n        this.options = {\n            center: {lat: 36.890257, lng: 30.707417},\n            zoom: 12\n        };\n\n        this.overlays = [\n            new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:\"Konyaalti\"}),\n            new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:\"Ataturk Park\"}),\n            new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:\"Oldtown\"}),\n            new google.maps.Polygon({paths: [\n                {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}\n            ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\n            }),\n            new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),\n            new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})\n        ];\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(41,"h5"),e._uU(42,"Events"),e.qZA(),e.TgZ(43,"p"),e._uU(44,"GMap provides common callbacks to hook into events including map click, overlay click and overlay dragging."),e.qZA(),e.TgZ(45,"app-code",16),e.IAx(),e._uU(46,'\n<p-gmap [options]="options" [overlays]="overlays" [style]="{\'width\':\'100%\',\'height\':\'320px\'}"\n            (onMapClick)="handleMapClick($event)" (onOverlayClick)="handleOverlayClick($event)"></p-gmap>\n'),e.fQ9(),e.qZA(),e.TgZ(47,"app-code",15),e.IAx(),e._uU(48,"\nexport class MyModel {\n\n    options: any;\n\n    overlays: any[];\n\n    ngOnInit() {\n        this.options = {\n            center: {lat: 36.890257, lng: 30.707417},\n            zoom: 12\n        };\n\n        this.overlays = [\n            new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:\"Konyaalti\"}),\n            new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:\"Ataturk Park\"}),\n            new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:\"Oldtown\"}),\n            new google.maps.Polygon({paths: [\n                {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}\n            ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\n            }),\n            new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),\n            new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})\n        ];\n    }\n\n    handleMapClick(event) {\n        //event: MouseEvent of Google Maps api\n    }\n\n    handleOverlayClick(event) {\n        //event.originalEvent: MouseEvent of Google Maps api\n        //event.overlay: Clicked overlay\n        //event.map: Map instance\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(49,"h5"),e._uU(50,"Google Maps API"),e.qZA(),e.TgZ(51,"p"),e._uU(52,"In case you need to access the map instance directly, use the getMap() method."),e.qZA(),e.TgZ(53,"app-code",16),e.IAx(),e._uU(54,'\n<p-gmap #gmap [options]="options"></p-gmap>\n\n<button type="button" pButton label="Zoom In" icon="pi-search-plus" (click)="zoomIn(gmap.getMap())"></button>\n'),e.fQ9(),e.qZA(),e.TgZ(55,"app-code",15),e.IAx(),e._uU(56,"\nexport class MyModel {\n\n    options: any;\n\n    overlays: any[];\n\n    ngOnInit() {\n        this.options = {\n            center: {lat: 36.890257, lng: 30.707417},\n            zoom: 12\n        };\n    }\n\n    zoomIn(map) {\n        map.setZoom(map.getZoom()+1);\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(57,"p"),e._uU(58,"Another option is to to get the map object directly after init via (onMapReady) event. In the example below, google.maps.Map is used for adjusting map bounds to markers."),e.qZA(),e.TgZ(59,"app-code",16),e.IAx(),e._uU(60,'\n<p-gmap #gmap [options]="options" [overlays]="overlays" [style]="mapStyle"\n    (onMapReady)="setMap($event)"></p-gmap>\n'),e.fQ9(),e.qZA(),e.TgZ(61,"p"),e._uU(62,"Then from your component you would write"),e.qZA(),e.TgZ(63,"app-code",15),e.IAx(),e._uU(64,'\nexport class MyModel {\n\n    options: any;\n\n    overlays: any[];\n\n    map: google.maps.Map;\n\n    setMap(event) {\n        this.map = event.map;\n    }\n\n    ngOnInit() {\n        let bounds = new google.maps.LatLngBounds();\n        this.overlays = [\n            new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),\n            new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),\n            new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),\n        ]\n        // ... extend bounds\n        this.overlays.forEach(marker => {\n            bounds.extend(marker.getPosition());\n        });\n\n        setTimeout(()=> { // map will need some time to load\n            this.map.fitBounds(bounds); // Map object used directly\n        }, 1000);\n    }\n}\n'),e.fQ9(),e.qZA(),e.TgZ(65,"h5"),e._uU(66,"Properties"),e.qZA(),e.TgZ(67,"div",17)(68,"table",18)(69,"thead")(70,"tr")(71,"th"),e._uU(72,"Name"),e.qZA(),e.TgZ(73,"th"),e._uU(74,"Type"),e.qZA(),e.TgZ(75,"th"),e._uU(76,"Default"),e.qZA(),e.TgZ(77,"th"),e._uU(78,"Description"),e.qZA()()(),e.TgZ(79,"tbody")(80,"tr")(81,"td"),e._uU(82,"options"),e.qZA(),e.TgZ(83,"td"),e._uU(84,"any"),e.qZA(),e.TgZ(85,"td"),e._uU(86,"null"),e.qZA(),e.TgZ(87,"td"),e._uU(88,"Google Maps API configuration object."),e.qZA()(),e.TgZ(89,"tr")(90,"td"),e._uU(91,"overlays"),e.qZA(),e.TgZ(92,"td"),e._uU(93,"array"),e.qZA(),e.TgZ(94,"td"),e._uU(95,"null"),e.qZA(),e.TgZ(96,"td"),e._uU(97,"An array of overlays to display."),e.qZA()(),e.TgZ(98,"tr")(99,"td"),e._uU(100,"style"),e.qZA(),e.TgZ(101,"td"),e._uU(102,"string"),e.qZA(),e.TgZ(103,"td"),e._uU(104,"null"),e.qZA(),e.TgZ(105,"td"),e._uU(106,"Inline style of the component."),e.qZA()(),e.TgZ(107,"tr")(108,"td"),e._uU(109,"styleClass"),e.qZA(),e.TgZ(110,"td"),e._uU(111,"string"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"null"),e.qZA(),e.TgZ(114,"td"),e._uU(115,"Style class of the component."),e.qZA()()()()(),e.TgZ(116,"h5"),e._uU(117,"Events"),e.qZA(),e.TgZ(118,"div",17)(119,"table",18)(120,"thead")(121,"tr")(122,"th"),e._uU(123,"Name"),e.qZA(),e.TgZ(124,"th"),e._uU(125,"Parameters"),e.qZA(),e.TgZ(126,"th"),e._uU(127,"Description"),e.qZA()()(),e.TgZ(128,"tbody")(129,"tr")(130,"td"),e._uU(131,"onMapClick"),e.qZA(),e.TgZ(132,"td"),e._uU(133,"event: Google Maps MouseEvent"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"Callback to invoke when map is clicked except markers."),e.qZA()(),e.TgZ(136,"tr")(137,"td"),e._uU(138,"onMapDragEnd"),e.qZA(),e.TgZ(139,"td"),e._uU(140,"originalEvent: Google Maps dragend"),e._UZ(141,"br"),e.qZA(),e.TgZ(142,"td"),e._uU(143,"Callback to invoke when map drag (i.e. pan) has ended."),e.qZA()(),e.TgZ(144,"tr")(145,"td"),e._uU(146,"onMapReady"),e.qZA(),e.TgZ(147,"td"),e._uU(148,"event.map: Google Maps Instance"),e.qZA(),e.TgZ(149,"td"),e._uU(150,"Callback to invoke when the map is ready to be used."),e.qZA()(),e.TgZ(151,"tr")(152,"td"),e._uU(153,"onOverlayClick"),e.qZA(),e.TgZ(154,"td"),e._uU(155,"originalEvent: Google Maps MouseEvent "),e._UZ(156,"br"),e._uU(157," overlay: Clicked overlay "),e._UZ(158,"br"),e._uU(159," map: Map instance "),e._UZ(160,"br"),e.qZA(),e.TgZ(161,"td"),e._uU(162,"Callback to invoke when an overlay is clicked."),e.qZA()(),e.TgZ(163,"tr")(164,"td"),e._uU(165,"onOverlayDblClick"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"originalEvent: Google Maps MouseEvent "),e._UZ(168,"br"),e._uU(169," overlay: Clicked overlay "),e._UZ(170,"br"),e._uU(171," map: Map instance "),e._UZ(172,"br"),e.qZA(),e.TgZ(173,"td"),e._uU(174,"Callback to invoke when an overlay is double clicked."),e.qZA()(),e.TgZ(175,"tr")(176,"td"),e._uU(177,"onOverlayDrag"),e.qZA(),e.TgZ(178,"td"),e._uU(179,"originalEvent: Google Maps MouseEvent "),e._UZ(180,"br"),e._uU(181," overlay: Clicked overlay "),e._UZ(182,"br"),e._uU(183," map: Map instance "),e._UZ(184,"br"),e.qZA(),e.TgZ(185,"td"),e._uU(186,"Callback to invoke when an overlay is being dragged."),e.qZA()(),e.TgZ(187,"tr")(188,"td"),e._uU(189,"onOverlayDragEnd"),e.qZA(),e.TgZ(190,"td"),e._uU(191,"originalEvent: Google Maps MouseEvent "),e._UZ(192,"br"),e._uU(193," overlay: Clicked overlay "),e._UZ(194,"br"),e._uU(195," map: Map instance "),e._UZ(196,"br"),e.qZA(),e.TgZ(197,"td"),e._uU(198,"Callback to invoke when an overlay drag ends."),e.qZA()(),e.TgZ(199,"tr")(200,"td"),e._uU(201,"onOverlayDragStart"),e.qZA(),e.TgZ(202,"td"),e._uU(203,"originalEvent: Google Maps MouseEvent "),e._UZ(204,"br"),e._uU(205," overlay: Clicked overlay "),e._UZ(206,"br"),e._uU(207," map: Map instance "),e._UZ(208,"br"),e.qZA(),e.TgZ(209,"td"),e._uU(210,"Callback to invoke when an overlay drag starts."),e.qZA()(),e.TgZ(211,"tr")(212,"td"),e._uU(213,"onZoomChanged"),e.qZA(),e.TgZ(214,"td"),e._uU(215,"originalEvent: Google Maps zoom_changed"),e.qZA(),e.TgZ(216,"td"),e._uU(217,"Callback to invoke when zoom level has changed."),e.qZA()()()()(),e.TgZ(218,"h5"),e._uU(219,"Dependencies"),e.qZA(),e.TgZ(220,"p"),e._uU(221,"Google Maps API."),e.qZA()(),e.TgZ(222,"p-tabPanel",19)(223,"a",20)(224,"span"),e._uU(225,"View on GitHub"),e.qZA()(),e.TgZ(226,"app-code",16),e.IAx(),e._uU(227,'\n<p-toast [style]="{marginTop: \'80px\'}"></p-toast>\n\n<p-gmap #gmap [style]="{\'width\':\'100%\',\'height\':\'320px\', \'margin-bottom\': \'1em\'}" [options]="options" [overlays]="overlays"\n       (onMapClick)="handleMapClick($event)" (onOverlayClick)="handleOverlayClick($event)" (onOverlayDragEnd)="handleDragEnd($event)"></p-gmap>\n\n<button type="button" pButton label="Clear" icon="pi pi-times" (click)="clear()" style="margin-right:.25em"></button>\n<button type="button" pButton label="Zoom In" icon="pi pi-plus" (click)="zoomIn(gmap.getMap())" style="margin-right:.25em"></button>\n<button type="button" pButton label="Zoom Out" icon="pi pi-minus" (click)="zoomOut(gmap.getMap())"></button>\n\n<p-dialog showEffect="fade" [(visible)]="dialogVisible" header="New Location" [style]="{width: \'300px\'}">>\n    <div class="grid p-fluid" *ngIf="selectedPosition">\n        <div class="col-2"><label for="title">Label</label></div>\n        <div class="col-10"><input type="text" pInputText id="title" [(ngModel)]="markerTitle"></div>\n\n        <div class="col-2"><label for="lat">Lat</label></div>\n        <div class="col-10"><input id="lat" type="text" readonly pInputText [ngModel]="selectedPosition.lat()"></div>\n\n        <div class="col-2"><label for="lng">Lng</label></div>\n        <div class="col-10"><input id="lng" type="text" readonly pInputText [ngModel]="selectedPosition.lng()"></div>\n\n        <div class="col-2"><label for="drg">Drag</label></div>\n        <div class="col-10"><p-checkbox [(ngModel)]="draggable" binary="true" [style]="{\'margin-top\':\'.25em\'}"></p-checkbox></div>\n    </div>\n    <ng-template pTemplate="footer">\n        <div>\n            <button type="button" pButton label="Add Marker" icon="pi-plus" (click)="addMarker()"></button>\n        </div>\n    </ng-template>\n</p-dialog>\n'),e.fQ9(),e.qZA(),e.TgZ(228,"app-code",15),e.IAx(),e._uU(229,"\nexport class GMapDemo implements OnInit {\n\n    options: any;\n\n    overlays: any[];\n\n    dialogVisible: boolean;\n\n    markerTitle: string;\n\n    selectedPosition: any;\n\n    infoWindow: any;\n\n    draggable: boolean;\n\n    constructor(private messageService: MessageService) {}\n\n    ngOnInit() {\n        this.options = {\n            center: {lat: 36.890257, lng: 30.707417},\n            zoom: 12\n        };\n\n        this.initOverlays();\n\n        this.infoWindow = new google.maps.InfoWindow();\n    }\n\n    handleMapClick(event) {\n        this.dialogVisible = true;\n        this.selectedPosition = event.latLng;\n    }\n\n    handleOverlayClick(event) {\n        let isMarker = event.overlay.getTitle != undefined;\n\n        if (isMarker) {\n            let title = event.overlay.getTitle();\n            this.infoWindow.setContent('"),e.TgZ(230,"div"),e._uU(231,"' + title + '"),e.qZA(),e._uU(232,"');\n            this.infoWindow.open(event.map, event.overlay);\n            event.map.setCenter(event.overlay.getPosition());\n\n            this.messageService.add({severity:'info', summary:'Marker Selected', detail: title});\n        }\n        else {\n            this.messageService.add({severity:'info', summary:'Shape Selected', detail: ''});\n        }\n    }\n\n    addMarker() {\n        this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title:this.markerTitle, draggable: this.draggable}));\n        this.markerTitle = null;\n        this.dialogVisible = false;\n    }\n\n    handleDragEnd(event) {\n        this.messageService.add({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});\n    }\n\n    initOverlays() {\n        if (!this.overlays||!this.overlays.length) {\n            this.overlays = [\n                new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:\"Konyaalti\"}),\n                new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:\"Ataturk Park\"}),\n                new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:\"Oldtown\"}),\n                new google.maps.Polygon({paths: [\n                    {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}\n                ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\n                }),\n                new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),\n                new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})\n            ];\n        }\n    }\n\n    zoomIn(map) {\n        map.setZoom(map.getZoom()+1);\n    }\n\n    zoomOut(map) {\n        map.setZoom(map.getZoom()-1);\n    }\n\n    clear() {\n        this.overlays = [];\n    }\n}\n"),e.fQ9(),e.qZA()()()()}2&o&&(e.xp6(10),e.Akn(e.DdM(8,q)),e.Q6J("options",s.options)("overlays",s.overlays),e.xp6(5),e.Akn(e.DdM(9,a)),e.Q6J("visible",s.dialogVisible),e.xp6(1),e.Q6J("ngIf",s.selectedPosition))},dependencies:[t.O5,h.Fj,h.JJ,h.On,m,T.FN,O.jx,M.o,w.XZ,U.V,x.Hq,k.xf,k.x4,b.h,A.P],styles:[".col-2[_ngcontent-%COMP%]{display:flex;align-self:center}"]}),r})(),n=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[_.Bz.forChild([{path:"",component:g}]),_.Bz]}),r})();var i=p(7808),l=p(3568),d=p(8286),G=p(1928),S=p(1508);let z=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[t.ez,h.u5,n,C,i.EV,M.j,l.nD,d.S,G.hJ,S.LU,b.a,A.L]}),r})()}}]);
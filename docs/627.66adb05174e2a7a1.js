"use strict";(self.webpackChunkConsultancyServicesUI=self.webpackChunkConsultancyServicesUI||[]).push([[627],{2627:(z,C,r)=>{r.r(C),r.d(C,{AppliancesCatModule:()=>Q});var d=r(9808),m=r(1083),l=r(8966),e=r(5e3),v=r(7423);let h=(()=>{class t{constructor(i,a){this.dialogRef=i,this.data=a,this.ServiceName="",this.ProfessionalName="",this.ClientMobile="+91 ***** *****",this.ServiceName=a.ServiceName,this.ProfessionalName=a.ProviderName}ngOnInit(){}onNoClick(){this.dialogRef.close()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.so),e.Y36(l.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-confirmation-pop-up"]],decls:20,vars:3,consts:[["mat-dialog-title","",1,""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(i,a){1&i&&(e.TgZ(0,"div"),e.TgZ(1,"div",0),e.TgZ(2,"h2"),e._uU(3,"****** Confirm *********"),e.qZA(),e.qZA(),e.TgZ(4,"div",1),e.TgZ(5,"p"),e._uU(6," Thanks for Giving the Employment to our Professionals. On "),e.TgZ(7,"b"),e._uU(8),e.qZA(),e._uU(9," with "),e.TgZ(10,"b"),e._uU(11),e.qZA(),e._uU(12,", we Reach you at "),e.TgZ(13,"b"),e._uU(14),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"div",2),e.TgZ(16,"button",3),e.NdJ("click",function(){return a.onNoClick()}),e._uU(17,"No Thanks"),e.qZA(),e.TgZ(18,"button",4),e._uU(19,"Ok"),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(8),e.Oqu(a.ServiceName),e.xp6(3),e.Oqu(a.ProfessionalName),e.xp6(3),e.Oqu(a.ClientMobile))},directives:[l.uh,l.xY,l.H8,v.lW,l.ZT],styles:[""]}),t})();var Z=r(8326),f=r(4623),u=r(7322),A=r(7531),g=r(3075),q=r(4107),T=r(508);function y(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"mat-list-option",19),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.oxw().onAddressClick(o)}),e._uU(1),e.qZA()}if(2&t){const i=n.$implicit;e.Q6J("value",i),e.xp6(1),e.hij(" ",i.FullAddress," ")}}function N(t,n){if(1&t&&(e.TgZ(0,"mat-option",20),e._uU(1),e.qZA()),2&t){const i=n.$implicit;e.Q6J("value",i.Id),e.xp6(1),e.hij(" ",i.Name," ")}}let P=(()=>{class t{constructor(i,a,s){this._dialogCloseIconClicked=i,this._openDialog=a,this.data=s,this.RecentAddress=[{FullAddress:"1-1104,parkroad, mangalagiri, Guntur dt 522503",DoorNum:"1-1104",Street:"Parkroad",City:"Mangalagiri",State:"Andhra Pradesh",Pin:"522503",AddressId:1},{FullAddress:"1/c 2-D,AjayNagar, mangalagiri, Guntur dt 522503",DoorNum:"1/c 2-D",Street:"AjayNagar",City:"Mangalagiri",State:"Andhra Pradesh",Pin:"522503",AddressId:2},{FullAddress:"1/c 2-D,AjayNagar, mangalagiri, Guntur dt 522503",DoorNum:"1/c 2-D",Street:"AjayNagar",City:"Mangalagiri",State:"Andhra Pradesh",Pin:"522503",AddressId:3}],this.citys=[{Name:"Andhra Pradesh",Id:1},{Name:"Telangana",Id:2},{Name:"Tamil Nadu",Id:3},{Name:"Karnataka",Id:4}],this.Address="",this.State=0,this.city="",this.LandMark="",this.mobileNum="",this.pinCode=""}ngOnInit(){this.ServiceRequestData=JSON.parse(JSON.stringify(this.data))}onAddressClick(i){this.Address=i.DoorNum,this.State=1,this.city=i.City,this.pinCode=i.Pin,this.LandMark=i.Street}RequestSubmit(){this._openDialog.open(h,{width:"350px",data:{ServiceName:this.ServiceRequestData.ServiceName,ProviderName:this.ServiceRequestData.ProviderName}}).beforeClosed().subscribe(a=>{})}closeConfirmationRequestDetails(){this._dialogCloseIconClicked.close()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.so),e.Y36(l.uw),e.Y36(l.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-confirmation-request-details"]],decls:63,vars:11,consts:[[1,"d-flex","justify-content-end"],[1,"indexing","position-absolute"],["mat-raised-button","",1,"text-danger",3,"click"],[1,"text-center"],[1,"row","justify-content-center"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-10","col-xs-10"],[3,"multiple"],["class","mb-2",3,"value","click",4,"ngFor","ngForOf"],[1,"col-xl-4","col-lg-4","col-md-4","col-sm-12","col-xs-12"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Address","required","",3,"ngModel","ngModelChange"],["required","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","City","required","",3,"ngModel","ngModelChange"],["matInput","","placeholder","Ladmark","required","",3,"ngModel","ngModelChange"],["matInput","","placeholder","Mobile Number","required","",3,"ngModel","ngModelChange"],["matInput","","placeholder","Pin Code","required","",3,"ngModel","ngModelChange"],["mat-button","",1,"bg-info","m-2",3,"click"],["mat-button","",1,"text-warning",3,"click"],[1,"mb-2",3,"value","click"],[3,"value"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"span",2),e.NdJ("click",function(){return a.closeConfirmationRequestDetails()}),e.TgZ(3,"mat-icon"),e._uU(4,"cancel"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"div"),e.TgZ(6,"div"),e.TgZ(7,"div",3),e.TgZ(8,"h1"),e.TgZ(9,"b"),e._uU(10,"Confirm Request Details."),e.qZA(),e.qZA(),e.qZA(),e._UZ(11,"hr"),e.TgZ(12,"div"),e.TgZ(13,"div",4),e.TgZ(14,"div",5),e.TgZ(15,"h3"),e.TgZ(16,"b"),e._uU(17,"Use Recent Address."),e.qZA(),e.qZA(),e.TgZ(18,"mat-selection-list",6),e.YNc(19,y,2,2,"mat-list-option",7),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(20,"hr"),e.TgZ(21,"div"),e.TgZ(22,"div",4),e.TgZ(23,"div",3),e.TgZ(24,"h2"),e.TgZ(25,"b"),e._uU(26,"Service Request Details."),e.qZA(),e.qZA(),e.TgZ(27,"h4"),e._uU(28,"Selected Service was "),e.TgZ(29,"b"),e._uU(30),e.qZA(),e._uU(31," with "),e.TgZ(32,"b"),e._uU(33),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"div",8),e.TgZ(35,"mat-form-field",9),e.TgZ(36,"input",10),e.NdJ("ngModelChange",function(o){return a.Address=o}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(37,"div",8),e.TgZ(38,"mat-form-field",9),e.TgZ(39,"mat-label"),e._uU(40,"Select State"),e.qZA(),e.TgZ(41,"mat-select",11),e.NdJ("ngModelChange",function(o){return a.State=o}),e.YNc(42,N,2,2,"mat-option",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(43,"div",4),e.TgZ(44,"div",8),e.TgZ(45,"mat-form-field",9),e.TgZ(46,"input",13),e.NdJ("ngModelChange",function(o){return a.city=o}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(47,"div",8),e.TgZ(48,"mat-form-field",9),e.TgZ(49,"input",14),e.NdJ("ngModelChange",function(o){return a.LandMark=o}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(50,"div",4),e.TgZ(51,"div",8),e.TgZ(52,"mat-form-field",9),e.TgZ(53,"input",15),e.NdJ("ngModelChange",function(o){return a.mobileNum=o}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(54,"div",8),e.TgZ(55,"mat-form-field",9),e.TgZ(56,"input",16),e.NdJ("ngModelChange",function(o){return a.pinCode=o}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(57,"div",4),e.TgZ(58,"div",3),e.TgZ(59,"button",17),e.NdJ("click",function(){return a.RequestSubmit()}),e._uU(60,"Submit"),e.qZA(),e.TgZ(61,"button",18),e.NdJ("click",function(){return a.closeConfirmationRequestDetails()}),e._uU(62,"Cancle"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(18),e.Q6J("multiple",!1),e.xp6(1),e.Q6J("ngForOf",a.RecentAddress),e.xp6(11),e.Oqu(a.ServiceRequestData.ServiceName),e.xp6(3),e.hij("",a.ServiceRequestData.ProviderName,"."),e.xp6(3),e.Q6J("ngModel",a.Address),e.xp6(5),e.Q6J("ngModel",a.State),e.xp6(1),e.Q6J("ngForOf",a.citys),e.xp6(4),e.Q6J("ngModel",a.city),e.xp6(3),e.Q6J("ngModel",a.LandMark),e.xp6(4),e.Q6J("ngModel",a.mobileNum),e.xp6(3),e.Q6J("ngModel",a.pinCode))},directives:[Z.Hw,f.Ub,d.sg,f.vS,u.KE,A.Nt,g.Fj,g.Q7,g.JJ,g.On,u.hX,q.gD,T.ey,v.lW],styles:[".indexing[_ngcontent-%COMP%]{z-index:99999}"]}),t})();var c=r(9224),_=r(9772),R=r(4834);function U(t,n){1&t&&(e.TgZ(0,"span",16),e.TgZ(1,"mat-icon",17),e._uU(2,"verified_user"),e.qZA(),e.qZA())}function M(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"mat-card",8),e.TgZ(1,"mat-card-header"),e._UZ(2,"img",9),e.TgZ(3,"mat-card-title"),e._uU(4),e.qZA(),e.YNc(5,U,3,0,"span",10),e.TgZ(6,"mat-card-subtitle"),e._uU(7),e.qZA(),e.qZA(),e.TgZ(8,"mat-card-content"),e.TgZ(9,"div",11),e.TgZ(10,"span"),e.TgZ(11,"b"),e._uU(12,"Description :"),e.qZA(),e._uU(13," \xa0"),e.qZA(),e.TgZ(14,"span"),e._uU(15),e.qZA(),e.qZA(),e.TgZ(16,"div",12),e.TgZ(17,"span"),e.TgZ(18,"b"),e._uU(19,"Rating :"),e.qZA(),e._uU(20,"\xa0"),e.qZA(),e.TgZ(21,"span"),e._uU(22),e.qZA(),e.qZA(),e._UZ(23,"mat-divider",13),e.TgZ(24,"mat-card-actions"),e.TgZ(25,"button",14),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.oxw().RequestServiceClick(o.ProviderId,o.ProviderName)}),e._uU(26,"Request Service"),e.qZA(),e.TgZ(27,"button",15),e._uU(28,"Schedule Service"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const i=n.$implicit;e.xp6(2),e.s9C("src",i.image,e.LSH),e.xp6(2),e.hij(" ",i.ProviderName," "),e.xp6(1),e.Q6J("ngIf",i.VerifiedProvider),e.xp6(2),e.hij(" ",i.ProviderDesg," "),e.xp6(8),e.Oqu(i.Description),e.xp6(7),e.hij("\xa0 ",i.Rating," / 10")}}let b=(()=>{class t{constructor(i,a,s){this._dialogCloseIconClicked=i,this._openDialog=a,this.data=s,this.Providers=[{image:"assets/images/blank-profile-picture.png",ProviderName:"Aron Finch",ProviderDesg:"Ac Service / Repair",VerifiedProvider:!1,Description:"Provide you high quality work at any time",Rating:"4.5",ProviderId:1},{image:"assets/images/blank-profile-picture.png",ProviderName:"Maxwell G",ProviderDesg:"Ac Service / Repair",VerifiedProvider:!0,Description:"Provide you high quality work at any time",Rating:"4.5",ProviderId:2},{image:"assets/images/blank-profile-picture.png",ProviderName:"Balu Mechanic Works Balu Mechanic Works",ProviderDesg:"Ac Installation",VerifiedProvider:!0,Description:"Satisfaction is Important.",Rating:"4.5",ProviderId:3},{image:"assets/images/blank-profile-picture.png",ProviderName:"Pant",ProviderDesg:"Washing Mechince",VerifiedProvider:!1,Description:"Provide you high quality work at any time Provide you high quality work at any time Provide you high quality work at any time Provide you high quality work at any time",Rating:"4.5",ProviderId:4},{image:"assets/images/blank-profile-picture.png",ProviderName:"Pavan Somineni",ProviderDesg:"Ac Service / Repair",VerifiedProvider:!0,Description:"Good at work",Rating:"4.5",ProviderId:5},{image:"assets/images/blank-profile-picture.png",ProviderName:"Pavan Somineni",ProviderDesg:"Ac Service / Repair",VerifiedProvider:!0,Description:"Good at work",Rating:"4.5",ProviderId:5},{image:"assets/images/blank-profile-picture.png",ProviderName:"Pavan Somineni",ProviderDesg:"Ac Service / Repair",VerifiedProvider:!0,Description:"Good at work",Rating:"4.5",ProviderId:5},{image:"assets/images/blank-profile-picture.png",ProviderName:"Pavan Somineni",ProviderDesg:"Ac Service / Repair",VerifiedProvider:!0,Description:"Good at work",Rating:"4.5",ProviderId:5},{image:"assets/images/blank-profile-picture.png",ProviderName:"Pavan Somineni",ProviderDesg:"Ac Service / Repair",VerifiedProvider:!0,Description:"Good at work",Rating:"4.5",ProviderId:5},{image:"assets/images/blank-profile-picture.png",ProviderName:"Pavan Somineni",ProviderDesg:"Ac Service / Repair",VerifiedProvider:!0,Description:"Good at work",Rating:"4.5",ProviderId:5},{image:"assets/images/blank-profile-picture.png",ProviderName:"Pavan Somineni",ProviderDesg:"Ac Service / Repair",VerifiedProvider:!0,Description:"Good at work",Rating:"4.5",ProviderId:5}]}ngOnInit(){this.ServiceProviderData=JSON.parse(JSON.stringify(this.data))}closeServiceProvides(){this._dialogCloseIconClicked.close()}RequestServiceClick(i,a){this._openDialog.open(P,{panelClass:"full-screen-dialog",data:{ServiceId:this.ServiceProviderData.ServiceID,CategoryId:this.ServiceProviderData.CategoryID,ServiceName:this.ServiceProviderData.ServiceName,ProviderName:a,ProviderId:i}}).beforeClosed().subscribe(o=>{})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.so),e.Y36(l.uw),e.Y36(l.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-service-providers"]],decls:18,vars:1,consts:[[1,"indexing","position-absolute"],["mat-raised-button","",1,"text-danger",3,"click"],[1,"row"],[1,"col-12","text-center"],[1,"row","justify-content-center"],["appearance","outline",1,"example-form-field","col-xl-4","col-lg-4","col-md-5","col-sm-8","col-xs-8"],["matInput","","type","text","placeholder","Seaarch by Name or Service"],["class","example-card m-2",4,"ngFor","ngForOf"],[1,"example-card","m-2"],["mat-card-avatar","",1,"shadow",3,"src"],["class","text-success",4,"ngIf"],[1,"mb-3"],[1,"d-flex"],["inset",""],["mat-button","",1,"m-1",3,"click"],["mat-button","",1,""],[1,"text-success"],["matTooltip","Verified Professional"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"span",1),e.NdJ("click",function(){return a.closeServiceProvides()}),e.TgZ(2,"mat-icon"),e._uU(3,"cancel"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"div"),e.TgZ(5,"div"),e.TgZ(6,"div",2),e.TgZ(7,"div",3),e.TgZ(8,"h1"),e.TgZ(9,"b"),e._uU(10,"Providers"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(11,"hr"),e.TgZ(12,"div"),e.TgZ(13,"div",4),e.TgZ(14,"mat-form-field",5),e._UZ(15,"input",6),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",2),e.YNc(17,M,29,6,"mat-card",7),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(17),e.Q6J("ngForOf",a.Providers))},directives:[Z.Hw,u.KE,A.Nt,d.sg,c.a8,c.dk,c.kc,c.n5,d.O5,_.gM,c.$j,c.dn,R.d,c.hq,v.lW],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px;max-height:auto}.indexing[_ngcontent-%COMP%]{z-index:99999;right:20px}"]}),t})();var k=r(5284);function x(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"span",10),e.TgZ(1,"button",11),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.oxw().ServiceClick(o.ServiceID,o.CategoryID,o.ServiceName)}),e._uU(2),e.qZA(),e.qZA()}if(2&t){const i=n.$implicit;e.xp6(2),e.Oqu(i.ServiceName)}}let S=(()=>{class t{constructor(i){this._openDialog=i,this.applianceServicesList=[{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:1,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:2,CategoryID:1},{ServiceName:"AC Ins",ServiceID:3,CategoryID:1},{ServiceName:"AC Installation",ServiceID:4,CategoryID:1},{ServiceName:"AC Repair",ServiceID:5,CategoryID:1},{ServiceName:"Washing Mechine",ServiceID:6,CategoryID:1},{ServiceName:"Refrezirator",ServiceID:7,CategoryID:1},{ServiceName:"Coolers",ServiceID:8,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:9,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:10,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:11,CategoryID:1},{ServiceName:"AC Ins",ServiceID:12,CategoryID:1},{ServiceName:"AC Installation",ServiceID:13,CategoryID:1},{ServiceName:"AC Repair",ServiceID:14,CategoryID:1},{ServiceName:"Washing Mechine",ServiceID:15,CategoryID:1},{ServiceName:"Refrezirator",ServiceID:16,CategoryID:1},{ServiceName:"Coolers",ServiceID:17,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:18,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:19,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:20,CategoryID:1},{ServiceName:"AC Ins",ServiceID:21,CategoryID:1},{ServiceName:"AC Installation",ServiceID:22,CategoryID:1},{ServiceName:"AC Repair",ServiceID:23,CategoryID:1},{ServiceName:"Washing Mechine",ServiceID:24,CategoryID:1},{ServiceName:"Refrezirator",ServiceID:25,CategoryID:1},{ServiceName:"Coolers",ServiceID:26,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:27,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:28,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:1,CategoryID:1},{ServiceName:"AC Ins",ServiceID:1,CategoryID:1},{ServiceName:"AC Installation",ServiceID:1,CategoryID:1},{ServiceName:"AC Repair",ServiceID:1,CategoryID:1},{ServiceName:"Washing Mechine",ServiceID:1,CategoryID:1},{ServiceName:"Refrezirator",ServiceID:1,CategoryID:1},{ServiceName:"Coolers",ServiceID:1,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:1,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:1,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:1,CategoryID:1},{ServiceName:"AC Ins",ServiceID:1,CategoryID:1},{ServiceName:"AC Installation",ServiceID:1,CategoryID:1},{ServiceName:"AC Repair",ServiceID:1,CategoryID:1},{ServiceName:"Washing Mechine",ServiceID:1,CategoryID:1},{ServiceName:"Refrezirator",ServiceID:1,CategoryID:1},{ServiceName:"Coolers",ServiceID:1,CategoryID:1},{ServiceName:"AC Installation / Uninstallation Uninstallation",ServiceID:1,CategoryID:1}]}ngOnInit(){}ServiceClick(i,a,s){this._openDialog.open(b,{panelClass:"full-screen-dialog",data:{ServiceID:i,CategoryID:a,ServiceName:s}}).beforeClosed().subscribe(p=>{})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.uw))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-appliances-cat"]],decls:17,vars:4,consts:[[1,"mt-2"],[1,"row"],[1,"col-xl-4","col-lg-4","col-md-4","col-sm-12","col-xs-12","text-center"],[1,"m-0"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"text-center","d-flex","justify-content-center"],[1,"w-60"],[3,"searchType","latitude","longitude"],[1,"container"],["class","m-1 p-0 appliancesServicesButtons",4,"ngFor","ngForOf"],[1,"m-1","p-0","appliancesServicesButtons"],["type","button",1,"btn","btn-outline-secondary","shadow",3,"click"]],template:function(i,a){1&i&&(e.TgZ(0,"div"),e.TgZ(1,"div",0),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"h1",3),e.TgZ(5,"b"),e._uU(6,"on Appliances..."),e.qZA(),e.qZA(),e.qZA(),e._UZ(7,"hr"),e.qZA(),e.TgZ(8,"div"),e.TgZ(9,"div",1),e.TgZ(10,"div",4),e.TgZ(11,"div",5),e.TgZ(12,"span",6),e._UZ(13,"app-geo-location-maps",7),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",8),e.TgZ(15,"div",1),e.YNc(16,x,3,1,"span",9),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(13),e.Q6J("searchType","input")("latitude",a.latitudeUsedInEditModeOnly)("longitude",a.longitudeUsedInEditModeOnly),e.xp6(3),e.Q6J("ngForOf",a.applianceServicesList))},directives:[k.f,d.sg],styles:[".imgfit[_ngcontent-%COMP%]{object-fit:scale-down}.imgfitcss[_ngcontent-%COMP%]{background-size:cover;background-image:url(/assets/images/view-all-services.jpg);background-repeat:no-repeat;height:350px;width:100%;background-size:100% 100%}span[_ngcontent-%COMP%]:nth-child(1)     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px;opacity:.8}.appliancesServicesButtons[_ngcontent-%COMP%]{width:auto;min-width:75px!important;max-width:300px!important}"]}),t})();const J=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"",component:S,children:[{path:"main-view",component:S}]}];let w=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(J)],m.Bz]}),t})();var I=r(2930),D=r(6047);const O=[];let F=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(O)],m.Bz]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,I.q,g.UX,F,g.u5,D.g]]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,w,I.q,j,D.g]]}),t})()}}]);
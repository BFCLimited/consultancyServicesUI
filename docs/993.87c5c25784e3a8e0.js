"use strict";(self.webpackChunkConsultancyServicesUI=self.webpackChunkConsultancyServicesUI||[]).push([[993],{3993:(J,s,a)=>{a.r(s),a.d(s,{ProfessionalsCatModule:()=>B});var _=a(9808),u=a(1083),i=a(3075),t=a(5e3),g=a(8966),p=a(8326),Z=a(2081),c=a(7322),T=a(7531),A=a(7423),d=a(4623);function q(e,n){1&e&&t._uU(0,"Basic Details")}function U(e,n){1&e&&t._uU(0,"Professional Details")}function b(e,n){1&e&&t._uU(0,"Professional Verification")}function h(e,n){1&e&&t._uU(0,"Contact Information")}function C(e,n){1&e&&t._uU(0,"Create Password for login")}function v(e,n){1&e&&t._uU(0,"Done")}function P(e,n){1&e&&t._uU(0,"Basic Details")}function N(e,n){1&e&&t._uU(0,"Professional Details")}function x(e,n){1&e&&t._uU(0,"Professional Verification")}function k(e,n){1&e&&t._uU(0,"Contact Information")}function I(e,n){1&e&&t._uU(0,"Create Password for login")}function R(e,n){1&e&&t._uU(0,"Done")}let f=(()=>{class e{constructor(r,o){this._formBuilder=r,this._dialogCloseIconClicked=o,this.title="newMat",this.isLinear=!0}ngOnInit(){this.firstFormGroup=this._formBuilder.group({name:["",i.kI.required],description:["",i.kI.required]}),this.secondFormGroup=this._formBuilder.group({amount:["",i.kI.required],stock:["",i.kI.required]})}submit(){console.log(this.firstFormGroup.value),console.log(this.secondFormGroup.value)}closeRegistration(){this._dialogCloseIconClicked.close()}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(i.qu),t.Y36(g.so))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-professionals-registration"]],decls:349,vars:24,consts:[[1,"text-end","align-items-center"],["mat-raised-button","",3,"click"],[1,"d-none","d-md-block",3,"linear"],["stepper",""],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],["matInput","","placeholder","First Name","formControlName","name","required",""],["matInput","","placeholder","Last Name","formControlName","description","required",""],["matInput","","placeholder","Gender","formControlName","name","required",""],["matInput","","placeholder","dd/mm/yyyy","formControlName","name","required",""],["matInput","","placeholder","Description","formControlName","name","required",""],["matInput","","placeholder","City","formControlName","name","required",""],["matInput","","placeholder","State","formControlName","name","required",""],["matInput","","placeholder","Country","formControlName","name","required",""],["mat-button","","matStepperNext",""],["matInput","","placeholder","Category","formControlName","amount","required",""],["matInput","","placeholder","Specialist","formControlName","stock","required",""],["matInput","","placeholder","Experience","formControlName","stock","required",""],["matInput","","placeholder","Timings","formControlName","stock","required",""],["matInput","","placeholder","Radius KM","formControlName","stock","required",""],["mat-button","","matStepperPrevious",""],["matInput","","placeholder","Verification Proof","formControlName","amount"],["matInput","","placeholder","ID Number","formControlName","stock"],["matInput","","placeholder","","formControlName","stock","readonly",""],["type","file"],["matInput","","placeholder","Email","formControlName","amount","required",""],["matInput","","placeholder","Primary Number","formControlName","stock","required",""],["matInput","","placeholder","Secondry Number","formControlName","stock"],["matInput","","placeholder","Work Address","formControlName","stock"],["matInput","","placeholder","Password","formControlName","amount","required",""],["matInput","","placeholder","Confirm Password","formControlName","stock","required",""],["mat-button","",3,"click"],[1,"d-block","d-md-none",3,"linear"],["matInput","","placeholder","Gender","formControlName","name"],["matInput","","placeholder","dd/mm/yyyy","formControlName","name"],["matInput","","placeholder","Description","formControlName","name"],["matInput","","placeholder","City","formControlName","name"],["matInput","","placeholder","State","formControlName","name"],["matInput","","placeholder","Country","formControlName","name"],["matInput","","placeholder","Experience","formControlName","stock"],["matInput","","placeholder","Timings","formControlName","stock"],["matInput","","placeholder","Radius KM","formControlName","stock"]],template:function(r,o){if(1&r){const m=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"span",1),t.NdJ("click",function(){return o.closeRegistration()}),t.TgZ(2,"mat-icon"),t._uU(3,"cancel"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(4,"h1"),t._uU(5,"Professional Regisration"),t.qZA(),t.TgZ(6,"h3"),t._uU(7,"Tips : Create a Verification Profile, higher chance to get clients."),t.qZA(),t.TgZ(8,"mat-horizontal-stepper",2,3),t.TgZ(10,"mat-step",4),t.TgZ(11,"form",5),t.YNc(12,q,1,0,"ng-template",6),t.TgZ(13,"mat-form-field"),t.TgZ(14,"mat-label"),t._uU(15,"First Name"),t.qZA(),t._UZ(16,"input",7),t.qZA(),t._UZ(17,"br"),t.TgZ(18,"mat-form-field"),t.TgZ(19,"mat-label"),t._uU(20,"Last Name"),t.qZA(),t._UZ(21,"input",8),t.qZA(),t._UZ(22,"br"),t.TgZ(23,"mat-form-field"),t.TgZ(24,"mat-label"),t._uU(25,"Gender"),t.qZA(),t._UZ(26,"input",9),t.qZA(),t._UZ(27,"br"),t.TgZ(28,"mat-form-field"),t.TgZ(29,"mat-label"),t._uU(30,"DOB (Birth Date)"),t.qZA(),t._UZ(31,"input",10),t.qZA(),t._UZ(32,"br"),t.TgZ(33,"mat-form-field"),t.TgZ(34,"mat-label"),t._uU(35,"Address"),t.qZA(),t.TgZ(36,"textarea",11),t._uU(37,"        "),t.qZA(),t.qZA(),t._UZ(38,"br"),t.TgZ(39,"mat-form-field"),t.TgZ(40,"mat-label"),t._uU(41,"City"),t.qZA(),t._UZ(42,"input",12),t.qZA(),t._UZ(43,"br"),t.TgZ(44,"mat-form-field"),t.TgZ(45,"mat-label"),t._uU(46,"State"),t.qZA(),t._UZ(47,"input",13),t.qZA(),t._UZ(48,"br"),t.TgZ(49,"mat-form-field"),t.TgZ(50,"mat-label"),t._uU(51,"Country"),t.qZA(),t._UZ(52,"input",14),t.qZA(),t.TgZ(53,"div"),t.TgZ(54,"button",15),t._uU(55,"Next"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(56,"mat-step",4),t.TgZ(57,"form",5),t.YNc(58,U,1,0,"ng-template",6),t.TgZ(59,"mat-form-field"),t.TgZ(60,"mat-label"),t._uU(61,"Services Category"),t.qZA(),t._UZ(62,"input",16),t.qZA(),t._UZ(63,"br"),t.TgZ(64,"mat-form-field"),t.TgZ(65,"mat-label"),t._uU(66,"Services Specialist on"),t.qZA(),t._UZ(67,"input",17),t.qZA(),t._UZ(68,"br"),t.TgZ(69,"mat-form-field"),t.TgZ(70,"mat-label"),t._uU(71,"Experience"),t.qZA(),t._UZ(72,"input",18),t.qZA(),t._UZ(73,"br"),t.TgZ(74,"mat-form-field"),t.TgZ(75,"mat-label"),t._uU(76,"Work Timings"),t.qZA(),t._UZ(77,"input",19),t.qZA(),t._UZ(78,"br"),t.TgZ(79,"mat-form-field"),t.TgZ(80,"mat-label"),t._uU(81,"Service Providing Radius (km)"),t.qZA(),t._UZ(82,"input",20),t.qZA(),t._UZ(83,"br"),t.TgZ(84,"div"),t.TgZ(85,"button",21),t._uU(86,"Back"),t.qZA(),t.TgZ(87,"button",15),t._uU(88,"Next"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(89,"mat-step",4),t.TgZ(90,"form",5),t.YNc(91,b,1,0,"ng-template",6),t.TgZ(92,"mat-form-field"),t.TgZ(93,"mat-label"),t._uU(94,"Verification Proof"),t.qZA(),t._UZ(95,"input",22),t.qZA(),t._UZ(96,"br"),t.TgZ(97,"mat-form-field"),t.TgZ(98,"mat-label"),t._uU(99,"Proof Id Number"),t.qZA(),t._UZ(100,"input",23),t.qZA(),t._UZ(101,"br"),t.TgZ(102,"mat-form-field"),t.TgZ(103,"mat-label"),t._uU(104,"Attach Proof"),t.qZA(),t._UZ(105,"input",24),t._UZ(106,"input",25),t.qZA(),t._UZ(107,"br"),t.TgZ(108,"div"),t.TgZ(109,"button",21),t._uU(110,"Back"),t.qZA(),t.TgZ(111,"button",15),t._uU(112,"Next"),t.qZA(),t.TgZ(113,"button",15),t._uU(114,"Skip"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(115,"mat-step",4),t.TgZ(116,"form",5),t.YNc(117,h,1,0,"ng-template",6),t.TgZ(118,"mat-form-field"),t.TgZ(119,"mat-label"),t._uU(120,"Email"),t.qZA(),t._UZ(121,"input",26),t.qZA(),t._UZ(122,"br"),t.TgZ(123,"mat-form-field"),t.TgZ(124,"mat-label"),t._uU(125,"Primary Phone Number"),t.qZA(),t._UZ(126,"input",27),t.qZA(),t._UZ(127,"br"),t.TgZ(128,"mat-form-field"),t.TgZ(129,"mat-label"),t._uU(130,"Secondry Phone Number"),t.qZA(),t._UZ(131,"input",28),t.qZA(),t._UZ(132,"br"),t.TgZ(133,"mat-form-field"),t.TgZ(134,"mat-label"),t._uU(135,"Work Place Address"),t.qZA(),t._UZ(136,"input",29),t.qZA(),t._UZ(137,"br"),t.TgZ(138,"div"),t.TgZ(139,"button",21),t._uU(140,"Back"),t.qZA(),t.TgZ(141,"button",15),t._uU(142,"Next"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(143,"mat-step",4),t.TgZ(144,"form",5),t.YNc(145,C,1,0,"ng-template",6),t.TgZ(146,"mat-form-field"),t.TgZ(147,"mat-label"),t._uU(148,"Password"),t.qZA(),t._UZ(149,"input",30),t.qZA(),t._UZ(150,"br"),t.TgZ(151,"mat-form-field"),t.TgZ(152,"mat-label"),t._uU(153,"Confirm Password"),t.qZA(),t._UZ(154,"input",31),t.qZA(),t._UZ(155,"br"),t.TgZ(156,"div"),t.TgZ(157,"button",21),t._uU(158,"Back"),t.qZA(),t.TgZ(159,"button",15),t._uU(160,"Next"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(161,"mat-step"),t.YNc(162,v,1,0,"ng-template",6),t.TgZ(163,"p"),t._uU(164,"You are now done, Thanks for choosing BFC Service Partner."),t.qZA(),t.TgZ(165,"mat-list"),t.TgZ(166,"mat-list-item"),t.TgZ(167,"strong"),t._uU(168,"Name:"),t.qZA(),t._uU(169),t.qZA(),t.qZA(),t.TgZ(170,"div"),t.TgZ(171,"button",21),t._uU(172,"Back"),t.qZA(),t.TgZ(173,"button",32),t.NdJ("click",function(){return t.CHM(m),t.MAs(9).reset()}),t._uU(174,"Reset"),t.qZA(),t.TgZ(175,"button",32),t.NdJ("click",function(){return o.submit()}),t._uU(176,"Submit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(177,"mat-vertical-stepper",33,3),t.TgZ(179,"mat-step",4),t.TgZ(180,"form",5),t.YNc(181,P,1,0,"ng-template",6),t.TgZ(182,"mat-form-field"),t.TgZ(183,"mat-label"),t._uU(184,"First Name"),t.qZA(),t._UZ(185,"input",7),t.qZA(),t._UZ(186,"br"),t.TgZ(187,"mat-form-field"),t.TgZ(188,"mat-label"),t._uU(189,"Last Name"),t.qZA(),t._UZ(190,"input",8),t.qZA(),t._UZ(191,"br"),t.TgZ(192,"mat-form-field"),t.TgZ(193,"mat-label"),t._uU(194,"Gender"),t.qZA(),t._UZ(195,"input",34),t.qZA(),t._UZ(196,"br"),t.TgZ(197,"mat-form-field"),t.TgZ(198,"mat-label"),t._uU(199,"DOB (Birth Date)"),t.qZA(),t._UZ(200,"input",35),t.qZA(),t._UZ(201,"br"),t.TgZ(202,"mat-form-field"),t.TgZ(203,"mat-label"),t._uU(204,"Address"),t.qZA(),t.TgZ(205,"textarea",36),t._uU(206,"        "),t.qZA(),t.qZA(),t._UZ(207,"br"),t.TgZ(208,"mat-form-field"),t.TgZ(209,"mat-label"),t._uU(210,"City"),t.qZA(),t._UZ(211,"input",37),t.qZA(),t._UZ(212,"br"),t.TgZ(213,"mat-form-field"),t.TgZ(214,"mat-label"),t._uU(215,"State"),t.qZA(),t._UZ(216,"input",38),t.qZA(),t._UZ(217,"br"),t.TgZ(218,"mat-form-field"),t.TgZ(219,"mat-label"),t._uU(220,"Country"),t.qZA(),t._UZ(221,"input",39),t.qZA(),t.TgZ(222,"div"),t.TgZ(223,"button",15),t._uU(224,"Next"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(225,"mat-step",4),t.TgZ(226,"form",5),t.YNc(227,N,1,0,"ng-template",6),t.TgZ(228,"mat-form-field"),t.TgZ(229,"mat-label"),t._uU(230,"Services Category"),t.qZA(),t._UZ(231,"input",16),t.qZA(),t._UZ(232,"br"),t.TgZ(233,"mat-form-field"),t.TgZ(234,"mat-label"),t._uU(235,"Services Specialist on"),t.qZA(),t._UZ(236,"input",17),t.qZA(),t._UZ(237,"br"),t.TgZ(238,"mat-form-field"),t.TgZ(239,"mat-label"),t._uU(240,"Experience"),t.qZA(),t._UZ(241,"input",40),t.qZA(),t._UZ(242,"br"),t.TgZ(243,"mat-form-field"),t.TgZ(244,"mat-label"),t._uU(245,"Work Timings"),t.qZA(),t._UZ(246,"input",41),t.qZA(),t._UZ(247,"br"),t.TgZ(248,"mat-form-field"),t.TgZ(249,"mat-label"),t._uU(250,"Service Providing Radius (km)"),t.qZA(),t._UZ(251,"input",42),t.qZA(),t._UZ(252,"br"),t.TgZ(253,"div"),t.TgZ(254,"button",21),t._uU(255,"Back"),t.qZA(),t.TgZ(256,"button",15),t._uU(257,"Next"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(258,"mat-step",4),t.TgZ(259,"form",5),t.YNc(260,x,1,0,"ng-template",6),t.TgZ(261,"mat-form-field"),t.TgZ(262,"mat-label"),t._uU(263,"Verification Proof"),t.qZA(),t._UZ(264,"input",22),t.qZA(),t._UZ(265,"br"),t.TgZ(266,"mat-form-field"),t.TgZ(267,"mat-label"),t._uU(268,"Proof Id Number"),t.qZA(),t._UZ(269,"input",23),t.qZA(),t._UZ(270,"br"),t.TgZ(271,"mat-form-field"),t.TgZ(272,"mat-label"),t._uU(273,"Attach Proof"),t.qZA(),t._UZ(274,"input",24),t._UZ(275,"input",25),t.qZA(),t._UZ(276,"br"),t.TgZ(277,"div"),t.TgZ(278,"button",21),t._uU(279,"Back"),t.qZA(),t.TgZ(280,"button",15),t._uU(281,"Next"),t.qZA(),t.TgZ(282,"button",15),t._uU(283,"Skip"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(284,"mat-step",4),t.TgZ(285,"form",5),t.YNc(286,k,1,0,"ng-template",6),t.TgZ(287,"mat-form-field"),t.TgZ(288,"mat-label"),t._uU(289,"Email"),t.qZA(),t._UZ(290,"input",26),t.qZA(),t._UZ(291,"br"),t.TgZ(292,"mat-form-field"),t.TgZ(293,"mat-label"),t._uU(294,"Primary Phone Number"),t.qZA(),t._UZ(295,"input",27),t.qZA(),t._UZ(296,"br"),t.TgZ(297,"mat-form-field"),t.TgZ(298,"mat-label"),t._uU(299,"Secondry Phone Number"),t.qZA(),t._UZ(300,"input",28),t.qZA(),t._UZ(301,"br"),t.TgZ(302,"mat-form-field"),t.TgZ(303,"mat-label"),t._uU(304,"Work Place Address"),t.qZA(),t._UZ(305,"input",29),t.qZA(),t._UZ(306,"br"),t.TgZ(307,"div"),t.TgZ(308,"button",21),t._uU(309,"Back"),t.qZA(),t.TgZ(310,"button",15),t._uU(311,"Next"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(312,"mat-step",4),t.TgZ(313,"form",5),t.YNc(314,I,1,0,"ng-template",6),t.TgZ(315,"mat-form-field"),t.TgZ(316,"mat-label"),t._uU(317,"Password"),t.qZA(),t._UZ(318,"input",30),t.qZA(),t._UZ(319,"br"),t.TgZ(320,"mat-form-field"),t.TgZ(321,"mat-label"),t._uU(322,"Confirm Password"),t.qZA(),t._UZ(323,"input",31),t.qZA(),t._UZ(324,"br"),t.TgZ(325,"div"),t.TgZ(326,"button",21),t._uU(327,"Back"),t.qZA(),t.TgZ(328,"button",15),t._uU(329,"Next"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(330,"mat-step"),t.YNc(331,R,1,0,"ng-template",6),t.TgZ(332,"p"),t._uU(333,"You are now done, Thanks for choosing BFC Service Partner."),t.qZA(),t.TgZ(334,"mat-list"),t.TgZ(335,"mat-list-item"),t.TgZ(336,"strong"),t._uU(337,"Name: "),t.qZA(),t._uU(338),t.qZA(),t.qZA(),t.TgZ(339,"div"),t.TgZ(340,"button",21),t._uU(341,"Back"),t.qZA(),t.TgZ(342,"button",32),t.NdJ("click",function(){return t.CHM(m),t.MAs(9).reset()}),t._uU(343,"Reset"),t.qZA(),t.TgZ(344,"button",32),t.NdJ("click",function(){return o.submit()}),t._uU(345,"Submit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(346,"div",0),t.TgZ(347,"button",1),t.NdJ("click",function(){return o.closeRegistration()}),t._uU(348," close "),t.qZA(),t.qZA()}2&r&&(t.xp6(8),t.Q6J("linear",o.isLinear),t.xp6(2),t.Q6J("stepControl",o.firstFormGroup),t.xp6(1),t.Q6J("formGroup",o.firstFormGroup),t.xp6(45),t.Q6J("stepControl",o.secondFormGroup),t.xp6(1),t.Q6J("formGroup",o.secondFormGroup),t.xp6(32),t.Q6J("stepControl",o.secondFormGroup),t.xp6(1),t.Q6J("formGroup",o.secondFormGroup),t.xp6(25),t.Q6J("stepControl",o.secondFormGroup),t.xp6(1),t.Q6J("formGroup",o.secondFormGroup),t.xp6(27),t.Q6J("stepControl",o.secondFormGroup),t.xp6(1),t.Q6J("formGroup",o.secondFormGroup),t.xp6(25),t.hij(" ",o.firstFormGroup.value.name,""),t.xp6(8),t.Q6J("linear",o.isLinear),t.xp6(2),t.Q6J("stepControl",o.firstFormGroup),t.xp6(1),t.Q6J("formGroup",o.firstFormGroup),t.xp6(45),t.Q6J("stepControl",o.secondFormGroup),t.xp6(1),t.Q6J("formGroup",o.secondFormGroup),t.xp6(32),t.Q6J("stepControl",o.secondFormGroup),t.xp6(1),t.Q6J("formGroup",o.secondFormGroup),t.xp6(25),t.Q6J("stepControl",o.secondFormGroup),t.xp6(1),t.Q6J("formGroup",o.secondFormGroup),t.xp6(27),t.Q6J("stepControl",o.secondFormGroup),t.xp6(1),t.Q6J("formGroup",o.secondFormGroup),t.xp6(25),t.hij(" ",o.firstFormGroup.value.name,""))},directives:[p.Hw,Z.Vq,Z.C0,i._Y,i.JL,i.sg,Z.VY,c.KE,c.hX,T.Nt,i.Fj,i.JJ,i.u,i.Q7,A.lW,Z.Ic,Z.fd,d.i$,d.Tg],styles:[""]}),e})();const y=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"",component:(()=>{class e{constructor(r){this._openDialog=r}ngOnInit(){}OpenProfessionalRegistration(){this._openDialog.open(f,{panelClass:"full-screen-dialog"}).beforeClosed().subscribe(o=>{})}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(g.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-professionals-highlights"]],decls:122,vars:0,consts:[[1,"mt-3"],[1,"row"],[1,"col-xl-5","col-lg-6","col-md-8","col-sm-12","col-xs-12","text-center","align-items-center"],[1,"d-none","d-md-block"],[1,"d-block","d-md-none"],[1,"col-xl-7","col-lg-6","col-md-4","col-sm-12","col-xs-12"],[1,"row","d-none","d-md-block"],[1,"col-11","text-xl-end","text-lg-end","text-md-end","text-sm-center","text-xs-center"],["type","button",1,"btn","btn-outline-secondary","shadow",3,"click"],[1,"row","d-block","d-md-none"],[1,"col-12","text-center"],[1,"row","text-center","align-items-center","mt-5","mb-5"],[1,"col-xl-4","col-lg-4","col-md-4","col-sm-12","col-xs-12"],[1,"bg-light","text-center","align-items-center","shadow-lg"],[1,"col-12"],[1,"row","p-4"],[1,"col-xl-3","col-lg-3","col-md-3","col-sm-12","col-xs-12","pt-2"],[1,"maticon"],[1,"col-xl-3","col-lg-3","col-md-3","col-sm-12","col-xs-12","pt-2","bg-secondary","rounded"],[1,"footerBg","p-5","pt-0","pb-0","mt-5"],[1,"row","bg-dark","text-white"],[1,"col-xl-5","col-lg-5","col-md-5","col-sm-12","col-xs-12","m-3"],[1,"shadow-lg","mb-2"],[1,"fa","fa-facebook","text-primary","fontawsomeIcon","align-middle"],[1,"fa","fa-instagram","text-danger","fontawsomeIcon","align-middle"],[1,"fa","fa-twitter","text-info","fontawsomeIcon","align-middle"],[1,"fa","fa-android","text-success","fontawsomeIcon","align-middle"],[1,"fa","fa-info","fontawsomeIcon","text-success","align-middle"],[1,"fa","fa-comment","fontawsomeIcon","text-muted","align-middle"],[1,"fa","fa-phone","fontawsomeIcon","text-warning","align-middle"],[1,"col-12","text-end","text-white"],[1,"fa","fa-copyright","text-danger","align-middle"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"div"),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"h1",3),t.TgZ(5,"b"),t._uU(6,"Welcome! \xa0BFC Consultancy Service Partner."),t.qZA(),t.qZA(),t.TgZ(7,"h4",4),t.TgZ(8,"b"),t._uU(9,"Welcome! \xa0BFC Consultancy Service Partner."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",5),t.TgZ(11,"div",6),t.TgZ(12,"div",7),t.TgZ(13,"button",8),t.NdJ("click",function(){return o.OpenProfessionalRegistration()}),t._uU(14,"Register as Professional"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",9),t.TgZ(16,"div",10),t.TgZ(17,"button",8),t.NdJ("click",function(){return o.OpenProfessionalRegistration()}),t._uU(18,"Register as Professional"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(19,"hr"),t.TgZ(20,"div"),t.TgZ(21,"div",11),t.TgZ(22,"div",12),t.TgZ(23,"span"),t.TgZ(24,"h3"),t.TgZ(25,"b"),t._uU(26,"Professionals"),t.qZA(),t.qZA(),t.TgZ(27,"mat-icon"),t._uU(28,"card_membership"),t.qZA(),t.qZA(),t.TgZ(29,"span"),t.TgZ(30,"h1"),t._uU(31,"10000+"),t.qZA(),t.qZA(),t.TgZ(32,"span"),t.TgZ(33,"h5"),t._uU(34,"A huge Number of Professional on single platform."),t.qZA(),t.qZA(),t.qZA(),t._UZ(35,"hr",4),t.TgZ(36,"div",12),t.TgZ(37,"span"),t.TgZ(38,"h3"),t.TgZ(39,"b"),t._uU(40,"Verified Professionals"),t.qZA(),t.qZA(),t.TgZ(41,"mat-icon"),t._uU(42,"verified_user"),t.qZA(),t.qZA(),t.TgZ(43,"span"),t.TgZ(44,"h1"),t._uU(45,"2000+"),t.qZA(),t.qZA(),t.TgZ(46,"span"),t.TgZ(47,"h5"),t._uU(48,"Verified Professional get Recommended tag on Services & More chance to get Clients."),t.qZA(),t.qZA(),t.qZA(),t._UZ(49,"hr",4),t.TgZ(50,"div",12),t.TgZ(51,"span"),t.TgZ(52,"h3"),t.TgZ(53,"b"),t._uU(54,"Average Earings (Per Month)"),t.qZA(),t.qZA(),t.TgZ(55,"mat-icon"),t._uU(56,"account_balance_wallet"),t.qZA(),t.qZA(),t.TgZ(57,"span"),t.TgZ(58,"h1"),t._uU(59,"62,570/-"),t.qZA(),t.qZA(),t.TgZ(60,"span"),t.TgZ(61,"h5"),t._uU(62,"Verified Professional get Recommended tag on Services & More chance to get Clients."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(63,"div"),t.TgZ(64,"div",13),t.TgZ(65,"div"),t.TgZ(66,"div",1),t.TgZ(67,"div",14),t.TgZ(68,"h1"),t.TgZ(69,"b"),t._uU(70,"Professional Benifits."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(71,"div",15),t.TgZ(72,"div",16),t.TgZ(73,"mat-icon",17),t._uU(74,"security"),t.qZA(),t.TgZ(75,"h3"),t._uU(76,"Accidental / Health Insurance"),t.qZA(),t.qZA(),t.TgZ(77,"div",18),t.TgZ(78,"mat-icon",17),t._uU(79,"account_balance"),t.qZA(),t.TgZ(80,"h3"),t._uU(81,"Incentives / Bonus"),t.qZA(),t.qZA(),t.TgZ(82,"div",16),t.TgZ(83,"mat-icon",17),t._uU(84,"card_giftcard"),t.qZA(),t.TgZ(85,"h3"),t._uU(86,"Gift Packs, voucher, BFC Awards Party Meets"),t.qZA(),t.qZA(),t.TgZ(87,"div",18),t.TgZ(88,"mat-icon",17),t._uU(89,"card_travel"),t.qZA(),t.TgZ(90,"h3"),t._uU(91,"Professional Work kit / Tools"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(92,"div"),t.TgZ(93,"div",19),t.TgZ(94,"div",20),t.TgZ(95,"div",21),t.TgZ(96,"div",22),t._UZ(97,"i",23),t._uU(98," BFC Services FB "),t.qZA(),t.TgZ(99,"div",22),t._UZ(100,"i",24),t._uU(101," BFC Services instagram "),t.qZA(),t.TgZ(102,"div",22),t._UZ(103,"i",25),t._uU(104," Twitter account BFC Services. "),t.qZA(),t.TgZ(105,"div",22),t._UZ(106,"i",26),t._uU(107," Android App BFC Services "),t.qZA(),t.qZA(),t.TgZ(108,"div",21),t.TgZ(109,"div",22),t._UZ(110,"i",27),t._uU(111," About BFC Services. "),t.qZA(),t.TgZ(112,"div",22),t._UZ(113,"i",28),t._uU(114," Expecting FeedBack. "),t.qZA(),t.TgZ(115,"div",22),t._UZ(116,"i",29),t._uU(117," Contact Us "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(118,"div",1),t.TgZ(119,"div",30),t._UZ(120,"i",31),t._uU(121," BFC Service Inc. 2022, All Right Reserved. "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[p.Hw],styles:[".maticon[_ngcontent-%COMP%]{font-size:50px;height:50px;width:50px}.footerBg[_ngcontent-%COMP%]{background:#442901}.fontawsomeIcon[_ngcontent-%COMP%]{font-size:25px;height:25px;width:25px}"]}),e})(),children:[{path:"Registration",component:f}]}];let F=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(y)],u.Bz]}),e})();var G=a(2930);let B=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[_.ez,F,G.q,i.UX]]}),e})()}}]);
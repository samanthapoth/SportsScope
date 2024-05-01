import{a as fe,b as D,c as W,d as F,e as L,f as A,g as j,h as he,i as U,j as _e,k as R,l as b,m as Y}from"./chunk-6VZN2OFB.js";import{$a as $,B as k,C as G,Ca as oe,Da as re,E as I,Ea as ae,F as ie,Fa as q,H as w,I as T,Ia as le,M as u,N as g,Na as se,Oa as M,Pa as me,Qa as ce,Ra as de,Sa as Z,Ta as pe,U as m,Ua as ue,V as y,Va as ge,Wa as ve,Xa as xe,Ya as H,Za as O,_ as f,_a as Ce,aa as d,ea as l,fa as o,ga as X,j as te,ja as P,ka as x,la as c,r as ne,ra as V,sa as s,ta as N,u as z,ua as S,va as B,xa as h,ya as _,za as v}from"./chunk-7YWMIL7N.js";var ye=(()=>{let t=class t{constructor(){this.authService=ie(b)}intercept(n,e){let a=this.authService.user.token,p=n.url.startsWith(R.apiUrl);return a&&p&&(n=n.clone({setHeaders:{Authorization:`Bearer ${a}`}})),e.handle(n)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=k({token:t,factory:t.\u0275fac});let i=t;return i})();var we=(()=>{let t=class t{constructor(n){this.router=n}intercept(n,e){return e.handle(n).pipe(ne(a=>{a.status===401&&this.router.navigate(["login"],{queryParams:{returnUrl:this.router.routerState.snapshot.url}}),R.production||console.error(a);let p=a&&a.error&&a.error.message||a.statusText;return te(()=>p)}))}};t.\u0275fac=function(e){return new(e||t)(I(H))},t.\u0275prov=k({token:t,factory:t.\u0275fac});let i=t;return i})();var Me=(()=>{let t=class t{constructor(n){if(n)throw new Error("Core Module can only be imported to AppModule.")}};t.\u0275fac=function(e){return new(e||t)(I(t,12))},t.\u0275mod=T({type:t}),t.\u0275inj=G({providers:[{provide:Z,useClass:ye,multi:!0},{provide:Z,useClass:we,multi:!0}],imports:[ce]});let i=t;return i})();function Ve(i,t){if(i&1&&(l(0,"div",3)(1,"h4",4),s(2),o(),l(3,"div",5)(4,"div",6)(5,"h6"),s(6,"Your access token is"),o(),s(7),o(),l(8,"div",6)(9,"h6"),s(10,"Token expires at:"),o(),s(11),o()(),l(12,"div",7),s(13," To view all the teams or add/manage teams, please click the "),l(14,"a",8),s(15,"here"),o(),s(16,". "),o()()),i&2){let r=c();m(2),S("Hi ",r.user.username,","),m(5),S(" ",r.user.token," "),m(4),S(" ",r.expiry," ")}}function Ne(i,t){i&1&&(l(0,"div",3)(1,"h4",4),s(2,"You have been logged out"),o(),l(3,"div",5)(4,"div",6),s(5," Please click "),l(6,"a",9),s(7,"here"),o(),s(8," to login. "),o()()())}var be=(()=>{let t=class t{constructor(n){this.expiry=new Date,this.user=n.user;let e=this.user.token;if(e){let a=JSON.parse(atob(e.split(".")[1]));this.expiry=new Date(a.expires*1e3)}}ngOnInit(){}};t.\u0275fac=function(e){return new(e||t)(y(b))},t.\u0275cmp=w({type:t,selectors:[["app-home"]],decls:4,vars:2,consts:[["login",""],[1,"container"],["class","card mt-4 shadow",4,"ngIf","ngIfElse"],[1,"card","mt-4","shadow"],[1,"card-header"],[1,"card-body"],[1,"m-2"],[1,"card-footer","py-3","fs-5"],["routerLink","teams"],["routerLink","login"]],template:function(e,a){if(e&1&&(l(0,"section",1),f(1,Ve,17,3,"div",2),o(),f(2,Ne,9,0,"ng-template",null,0,q)),e&2){let p=V(3);m(),d("ngIf",a.user.username)("ngIfElse",p)}},dependencies:[M,O]});let i=t;return i})();function De(i,t){i&1&&(l(0,"div",11),s(1," Login failed. Please try again. "),o())}var Se=(()=>{let t=class t{constructor(n,e,a){this.route=n,this.router=e,this.authService=a,this.busy=!1,this.username="",this.password="",this.loginError=!1}ngOnInit(){if(this.authService.user.token){let n=this.route.snapshot.queryParams.returnUrl||"";this.router.navigate([n])}}login(){if(!this.username||!this.password)return;this.busy=!0;let n=this.route.snapshot.queryParams.returnUrl||"";this.authService.login(this.username.trim(),this.password).pipe(z(()=>this.busy=!1)).subscribe({next:()=>{this.router.navigate([n])},error:()=>{this.loginError=!0}})}};t.\u0275fac=function(e){return new(e||t)(y(ve),y(H),y(b))},t.\u0275cmp=w({type:t,selectors:[["app-login"]],decls:19,vars:4,consts:[[1,"text-center","mb-4"],[1,"form-signin",3,"ngSubmit"],[1,"form-label-group"],["type","text","id","userName","name","username","placeholder","Username","required","","autofocus","",1,"form-control",3,"ngModelChange","ngModel"],["for","userName"],["type","password","id","inputPassword","name","password","placeholder","Password","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","inputPassword"],["class","mb-3 text-danger",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","me-2",3,"disabled"],[1,"mt-3"],["routerLink","../signup"],[1,"mb-3","text-danger"]],template:function(e,a){e&1&&(l(0,"div",0)(1,"h1"),s(2,"Login to SportsScope"),o()(),l(3,"form",1),x("ngSubmit",function(){return a.login()}),l(4,"div",2)(5,"input",3),v("ngModelChange",function(C){return _(a.username,C)||(a.username=C),C}),o(),l(6,"label",4),s(7,"Username"),o()(),l(8,"div",2)(9,"input",5),v("ngModelChange",function(C){return _(a.password,C)||(a.password=C),C}),o(),l(10,"label",6),s(11,"Password"),o()(),f(12,De,2,0,"div",7),l(13,"button",8),s(14," Sign in "),o(),l(15,"div",9),s(16," If you don't have an account, then please "),l(17,"a",10),s(18," Sign up "),o()()()),e&2&&(m(5),h("ngModel",a.username),m(4),h("ngModel",a.password),m(3),d("ngIf",a.loginError),m(),d("disabled",a.busy))},dependencies:[M,j,D,W,F,U,A,L,O],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.form-signin[_ngcontent-%COMP%]{width:100%;max-width:420px;padding:15px}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{height:3.125rem;padding:.75rem}.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;pointer-events:none;cursor:text;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){padding-top:1.25rem;padding-bottom:.25rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem;font-size:12px;color:#777}@supports (-ms-ime-align: auto){.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:none}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#777}}[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:linear-gradient(to bottom right,#2196f3,#03a9f4,#00bcd4,#009688)}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}"]});let i=t;return i})();function We(i,t){i&1&&(l(0,"div",13),s(1," Sign up failed. Please try again. "),o())}function Fe(i,t){if(i&1){let r=P();l(0,"form",3),x("ngSubmit",function(){u(r);let e=c();return g(e.signup())}),l(1,"div",4)(2,"input",5),v("ngModelChange",function(e){u(r);let a=c();return _(a.username,e)||(a.username=e),g(e)}),o(),l(3,"label",6),s(4,"Username"),o()(),l(5,"div",4)(6,"input",7),v("ngModelChange",function(e){u(r);let a=c();return _(a.password,e)||(a.password=e),g(e)}),o(),l(7,"label",8),s(8,"Password"),o()(),f(9,We,2,0,"div",9),l(10,"button",10),s(11," Sign Up "),o(),l(12,"div",11),s(13," If you don't have an account, then please "),l(14,"a",12),s(15," login "),o(),s(16," using your username and password "),o()()}if(i&2){let r=c();m(2),h("ngModel",r.username),m(4),h("ngModel",r.password),m(3),d("ngIf",r.loginError),m(),d("disabled",r.busy)}}function Le(i,t){i&1&&(l(0,"p",14),s(1,"Success!"),o(),l(2,"p"),s(3," You have signed up a new account. Please go to the "),l(4,"a",12),s(5," login "),o(),s(6," page to sign in the system. "),o())}var Pe=(()=>{let t=class t{constructor(n){this.authService=n,this.busy=!1,this.username="",this.password="",this.loginError=!1,this.signupSuccess=!1}ngOnInit(){}signup(){!this.username||!this.password||(this.busy=!0,this.authService.signup(this.username.trim(),this.password).pipe(z(()=>this.busy=!1)).subscribe({next:()=>{this.signupSuccess=!0},error:()=>{this.signupSuccess=!1,this.loginError=!0}}))}};t.\u0275fac=function(e){return new(e||t)(y(b))},t.\u0275cmp=w({type:t,selectors:[["app-sign-up"]],decls:6,vars:2,consts:[["intro",""],[1,"text-center","mb-4"],["class","form-signin",3,"ngSubmit",4,"ngIf","ngIfElse"],[1,"form-signin",3,"ngSubmit"],[1,"form-label-group"],["type","text","id","userName","name","username","placeholder","Username","required","","autofocus","",1,"form-control",3,"ngModelChange","ngModel"],["for","userName"],["type","password","id","inputPassword","name","password","placeholder","Password","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","inputPassword"],["class","mb-3 text-danger",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","me-2",3,"disabled"],[1,"mt-3"],["routerLink","../login"],[1,"mb-3","text-danger"],[1,"h2","text-success","fw-bold"]],template:function(e,a){if(e&1&&(l(0,"div",1)(1,"h1"),s(2,"Sign Up for SportsScope"),o()(),f(3,Fe,17,4,"form",2)(4,Le,7,0,"ng-template",null,0,q)),e&2){let p=V(5);m(3),d("ngIf",!a.signupSuccess)("ngIfElse",p)}},dependencies:[M,j,D,W,F,U,A,L,O],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.form-signin[_ngcontent-%COMP%]{width:100%;max-width:420px;padding:15px}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{height:3.125rem;padding:.75rem}.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;pointer-events:none;cursor:text;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){padding-top:1.25rem;padding-bottom:.25rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem;font-size:12px;color:#777}@supports (-ms-ime-align: auto){.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:none}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#777}}[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:linear-gradient(to bottom right,#2196f3,#03a9f4,#00bcd4,#009688)}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}"]});let i=t;return i})();var Oe=(()=>{let t=class t{constructor(n){this.http=n,this.apiUrl=R.apiUrl+"games"}getAllGames(){return this.http.get(`${this.apiUrl}/`)}getGame(n){return this.http.get(`${this.apiUrl}/${n}`)}createGame(n){return this.http.post(`${this.apiUrl}/new`,n)}updateGame(n,e){return this.http.put(`${this.apiUrl}/${n}`,e)}deleteGame(n){return this.http.delete(`${this.apiUrl}/${n}`)}};t.\u0275fac=function(e){return new(e||t)(I(de))},t.\u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var je=()=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Ue(i,t){if(i&1){let r=P();l(0,"div",11)(1,"div",12)(2,"span",13),x("click",function(){u(r);let e=c();return g(e.toggleAddEventModal())}),s(3,"\xD7"),o(),l(4,"form",14,0),x("ngSubmit",function(){u(r);let e=V(5),a=c();return a.addEvent(e),g(a.toggleAddEventModal())}),l(6,"input",15),v("ngModelChange",function(e){u(r);let a=c();return _(a.newGame.name,e)||(a.newGame.name=e),g(e)}),o(),l(7,"input",16),v("ngModelChange",function(e){u(r);let a=c();return _(a.newGame.location,e)||(a.newGame.location=e),g(e)}),o(),l(8,"input",17),v("ngModelChange",function(e){u(r);let a=c();return _(a.newGame.home_team,e)||(a.newGame.home_team=e),g(e)}),o(),l(9,"input",18),v("ngModelChange",function(e){u(r);let a=c();return _(a.newGame.away_team,e)||(a.newGame.away_team=e),g(e)}),o(),l(10,"input",19),v("ngModelChange",function(e){u(r);let a=c();return _(a.newGame.date,e)||(a.newGame.date=e),g(e)}),o(),l(11,"input",20),v("ngModelChange",function(e){u(r);let a=c();return _(a.newGame.time,e)||(a.newGame.time=e),g(e)}),o(),l(12,"label")(13,"input",21),v("ngModelChange",function(e){u(r);let a=c();return _(a.newGame.played,e)||(a.newGame.played=e),g(e)}),o(),s(14," Played "),o(),l(15,"input",22),v("ngModelChange",function(e){u(r);let a=c();return _(a.newGame.home_team_score,e)||(a.newGame.home_team_score=e),g(e)}),o(),l(16,"input",23),v("ngModelChange",function(e){u(r);let a=c();return _(a.newGame.away_team_score,e)||(a.newGame.away_team_score=e),g(e)}),o(),l(17,"button",24),s(18,"Add Event"),o()()()()}if(i&2){let r=c();m(6),h("ngModel",r.newGame.name),m(),h("ngModel",r.newGame.location),m(),h("ngModel",r.newGame.home_team),m(),h("ngModel",r.newGame.away_team),m(),h("ngModel",r.newGame.date),m(),h("ngModel",r.newGame.time),m(2),h("ngModel",r.newGame.played),m(2),h("ngModel",r.newGame.home_team_score),d("disabled",!r.newGame.played),m(),h("ngModel",r.newGame.away_team_score),d("disabled",!r.newGame.played)}}function Re(i,t){if(i&1&&(l(0,"div",25),s(1),o()),i&2){let r=t.$implicit;m(),N(r)}}function Be(i,t){if(i&1&&(l(0,"div"),s(1),o()),i&2){let r=c().$implicit;m(),N(r.date)}}function ze(i,t){if(i&1&&(l(0,"div",34),s(1),o()),i&2){let r=c().$implicit;m(),B(" Score: ",r.home_team_score," - ",r.away_team_score," ")}}function qe(i,t){if(i&1&&(l(0,"div",35),s(1),o()),i&2){let r=c().$implicit;m(),S(" Time: ",r.time," ")}}function He(i,t){if(i&1){let r=P();l(0,"div",29),x("click",function(){let e=u(r).$implicit,a=c(2);return g(a.selectEvent(e))}),l(1,"div",30),s(2),o(),l(3,"div",31),s(4),o(),f(5,ze,2,2,"div",32)(6,qe,2,1,"div",33),o()}if(i&2){let r=t.$implicit;m(2),N(r.name),m(2),B(" ",r.home_team," vs ",r.away_team," "),m(),d("ngIf",r.played),m(),d("ngIf",!r.played)}}function Ye(i,t){if(i&1&&(l(0,"div",26),f(1,Be,2,1,"div",27)(2,He,7,5,"div",28),o()),i&2){let r=t.$implicit;m(),d("ngIf",r.date),m(),d("ngForOf",r.events)}}function Je(i,t){if(i&1&&(l(0,"p")(1,"strong"),s(2,"Score:"),o(),s(3),o()),i&2){let r=c(2);m(3),B(" ",r.selectedEvent==null?null:r.selectedEvent.home_team_score," - ",r.selectedEvent==null?null:r.selectedEvent.away_team_score,"")}}function Ke(i,t){i&1&&(l(0,"p")(1,"strong"),s(2,"Status:"),o(),s(3," Scheduled"),o())}function Qe(i,t){if(i&1){let r=P();l(0,"div",36)(1,"div",12)(2,"span",13),x("click",function(){u(r);let e=c();return g(e.closeEventDetails())}),s(3,"\xD7"),o(),l(4,"h2"),s(5),o(),l(6,"p")(7,"strong"),s(8,"Date:"),o(),s(9),re(10,"date"),o(),l(11,"p")(12,"strong"),s(13,"Time:"),o(),s(14),o(),l(15,"p")(16,"strong"),s(17,"Location:"),o(),s(18),o(),l(19,"p")(20,"strong"),s(21,"Teams:"),o(),s(22),o(),f(23,Je,4,2,"p",27)(24,Ke,4,0,"p",27),l(25,"button",3),x("click",function(){u(r);let e=c();return g(e.removeEvent(e.selectedEvent))}),s(26,"Remove Event"),o()()()}if(i&2){let r=c();m(5),N(r.selectedEvent==null?null:r.selectedEvent.name),m(4),S(" ",ae(10,8,r.selectedEvent==null?null:r.selectedEvent.date,"fullDate"),""),m(5),S(" ",r.selectedEvent==null?null:r.selectedEvent.time,""),m(4),S(" ",r.selectedEvent==null?null:r.selectedEvent.location,""),m(4),B(" ",r.selectedEvent==null?null:r.selectedEvent.home_team," vs ",r.selectedEvent==null?null:r.selectedEvent.away_team,""),m(),d("ngIf",r.selectedEvent==null?null:r.selectedEvent.played),m(),d("ngIf",!(r.selectedEvent!=null&&r.selectedEvent.played))}}var ke=(()=>{let t=class t{constructor(n,e){this.cdr=n,this.gamesService=e,this.currentMonth="",this.days=[],this.showEventForm=!1,this.showEventDetails=!1,this.showAddEventModal=!1,this.selectedEvent=null,this.newGame={name:"",location:"",home_team:"",away_team:"",date:"",time:"",played:!1,home_team_score:0,away_team_score:0}}ngOnInit(){this.loadMonth(new Date)}closeEventForm(){this.showEventForm=!1}closeEventDetails(){this.showEventDetails=!1}openEventForm(){this.showEventForm=!0}toggleAddEventModal(){this.showAddEventModal=!this.showAddEventModal}changeMonth(n){let e=new Date(this.currentMonth+" 1");e.setMonth(e.getMonth()+n),this.loadMonth(e),this.cdr.detectChanges()}loadMonth(n){this.currentMonth=n.toLocaleString("default",{month:"long",year:"numeric"});let e=new Date(n.getFullYear(),n.getMonth(),1).getDay(),a=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();this.days=Array(a).fill(null).map((p,C)=>({date:C+1,events:[]}));for(let p=0;p<e;p++)this.days.unshift({date:null,events:[]});this.fetchEvents()}selectEvent(n){console.log("Event selected, attempting to show modal"),this.selectedEvent=n,this.showEventDetails=!0,this.cdr.detectChanges()}fetchEvents(){this.gamesService.getAllGames().subscribe({next:n=>{let e=new Date(this.currentMonth+" 1"),a=e.getDay();this.days.forEach(p=>p.events=[]),n.forEach(p=>{let C=new Date(p.date);if(C.getMonth()===e.getMonth()&&C.getFullYear()===e.getFullYear()){let Q=C.getDate()+a;Q>=0&&Q<this.days.length&&this.days[Q].events.push(p)}})},error:n=>console.error("Error fetching games:",n)})}addEvent(n){n.valid&&this.gamesService.createGame(this.newGame).subscribe({next:()=>{this.fetchEvents(),n.reset()},error:e=>{console.error("Error adding game:",e)}})}removeEvent(n){n&&n._id&&this.gamesService.deleteGame(n._id).subscribe({next:()=>{this.fetchEvents(),this.closeEventDetails()},error:e=>console.error("Error removing game:",e)})}updateEvent(n){if(!this.selectedEvent||!this.selectedEvent._id)return;let e={_id:this.selectedEvent._id,name:n.value.eventName,location:n.value.location,home_team:n.value.home_team,away_team:n.value.away_team,date:n.value.date,time:n.value.time,played:this.selectedEvent.played,home_team_score:n.value.home_team_score||this.selectedEvent.home_team_score,away_team_score:n.value.away_team_score||this.selectedEvent.away_team_score};this.gamesService.updateGame(this.selectedEvent._id,e).subscribe({next:()=>{this.fetchEvents(),this.closeEventDetails()},error:a=>{console.error("Error updating game:",a),this.closeEventDetails()}})}};t.\u0275fac=function(e){return new(e||t)(y(le),y(Oe))},t.\u0275cmp=w({type:t,selectors:[["app-games"]],decls:18,vars:6,consts:[["eventForm","ngForm"],[1,"title-container"],[1,"main-container"],[3,"click"],["class","modal",4,"ngIf"],["id","monthNavigation"],["id","weekdays"],["class","weekday",4,"ngFor","ngForOf"],["id","calendar"],["class","day",4,"ngFor","ngForOf"],["id","eventDescriptionPopup","class","modal",4,"ngIf"],[1,"modal"],[1,"modal-content"],[1,"close",3,"click"],[3,"ngSubmit"],["type","text","id","eventName","name","eventName","placeholder","Event Name","required","",3,"ngModelChange","ngModel"],["type","text","id","location","name","location","placeholder","Location","required","",3,"ngModelChange","ngModel"],["type","text","id","home_team","name","home_team","placeholder","Home Team","required","",3,"ngModelChange","ngModel"],["type","text","id","away_team","name","away_team","placeholder","Away Team","required","",3,"ngModelChange","ngModel"],["type","date","id","date","name","date","required","",3,"ngModelChange","ngModel"],["type","time","id","time","name","time","required","",3,"ngModelChange","ngModel"],["type","checkbox","id","played","name","played",3,"ngModelChange","ngModel"],["type","number","id","home_team_score","name","home_team_score","placeholder","Home Team Score",3,"ngModelChange","ngModel","disabled"],["type","number","id","away_team_score","name","away_team_score","placeholder","Away Team Score",3,"ngModelChange","ngModel","disabled"],["type","submit"],[1,"weekday"],[1,"day"],[4,"ngIf"],["class","event",3,"click",4,"ngFor","ngForOf"],[1,"event",3,"click"],[1,"event-title"],[1,"event-teams"],["class","event-details",4,"ngIf"],["class","event-time",4,"ngIf"],[1,"event-details"],[1,"event-time"],["id","eventDescriptionPopup",1,"modal"]],template:function(e,a){e&1&&(l(0,"div",1),s(1,` Game Calendar
`),o(),l(2,"div",2)(3,"button",3),x("click",function(){return a.toggleAddEventModal()}),s(4,"Add New Game"),o(),f(5,Ue,19,11,"div",4),l(6,"div",5)(7,"button",3),x("click",function(){return a.changeMonth(-1)}),s(8,"\u276E"),o(),l(9,"span"),s(10),o(),l(11,"button",3),x("click",function(){return a.changeMonth(1)}),s(12,"\u276F"),o()(),l(13,"div",6),f(14,Re,2,1,"div",7),o(),l(15,"div",8),f(16,Ye,3,2,"div",9),o()(),f(17,Qe,27,11,"div",10)),e&2&&(m(5),d("ngIf",a.showAddEventModal),m(5),N(a.currentMonth),m(4),d("ngForOf",oe(5,je)),m(2),d("ngForOf",a.days),m(),d("ngIf",a.showEventDetails))},dependencies:[se,M,j,D,he,fe,W,F,U,A,L,me],styles:["body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#f4f4f4;overflow-y:auto}.main-container[_ngcontent-%COMP%]{min-height:100vh;overflow-y:auto;padding-bottom:50px}.title-container[_ngcontent-%COMP%]{margin-bottom:20px;font-size:50px}h1[_ngcontent-%COMP%]{font-size:36px}.author[_ngcontent-%COMP%]{font-size:18px;color:#666}button[_ngcontent-%COMP%]{background-color:#325fc7;color:#fff;padding:10px 20px;border:none;border-radius:4px;cursor:pointer;margin:10px}button[_ngcontent-%COMP%]:hover{background-color:#45a049}#eventDescriptionPopup[_ngcontent-%COMP%]{display:block;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#0006}.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus{color:#000;cursor:pointer}#calendar[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;padding:10px;background-color:#fff;border-radius:8px;margin:20px;max-height:500px;overflow-y:auto}.event-teams[_ngcontent-%COMP%]{color:#555;margin-bottom:2px}.day[_ngcontent-%COMP%]{background-color:#fafafa;border:1px solid #ddd;padding:15px;cursor:pointer;text-align:center}.event[_ngcontent-%COMP%]{background-color:#add8e6;color:#fff;padding:5px;border-radius:3px;margin-top:5px}#weekdays[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,1fr);background-color:#ddd;padding:10px;font-weight:700;text-align:center}#monthNavigation[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:10px 0}#monthNavigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 20px;font-size:24px}.event[_ngcontent-%COMP%]{font-weight:700;color:#00f}.score[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]{font-size:.8em;color:green}.event[_ngcontent-%COMP%]{margin-bottom:10px;padding:5px;background-color:#f8f8f8;border-radius:4px;box-shadow:0 2px 4px #0000001a}.event-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:4px}.event-details[_ngcontent-%COMP%]{font-size:.9em;color:#666;background-color:#eef;padding:4px;border-radius:3px}.weekday[_ngcontent-%COMP%], .day[_ngcontent-%COMP%]{text-align:center}.event[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .3s}.event[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.modal[_ngcontent-%COMP%]{display:block;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#0006}.modal-content[_ngcontent-%COMP%]{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%;max-width:500px}.close[_ngcontent-%COMP%]{color:#aaa;float:right;font-size:28px;font-weight:700}.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus{color:#000;text-decoration:none;cursor:pointer}"]});let i=t;return i})();var Xe=[{path:"",pathMatch:"full",component:be,canMatch:[Y]},{path:"login",component:Se},{path:"signup",component:Pe},{path:"games",component:ke},{path:"teams",loadChildren:()=>import("./chunk-MDRPUSXD.js").then(i=>i.TeamsModule),canMatch:[Y]},{path:"management",loadChildren:()=>import("./chunk-QBAPXU4X.js").then(i=>i.ManagementModule),canMatch:[Y]},{path:"**",redirectTo:""}],Ge=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=T({type:t}),t.\u0275inj=G({imports:[$.forRoot(Xe),$]});let i=t;return i})();function Ze(i,t){if(i&1){let r=P();l(0,"button",13),x("click",function(){u(r);let e=c();return g(e.logout())}),s(1," Logout "),o()}}var Ie=(()=>{let t=class t{constructor(n){this.authService=n,this.username="",this.username=n.user.username}ngOnInit(){}logout(){this.authService.logout()}};t.\u0275fac=function(e){return new(e||t)(y(b))},t.\u0275cmp=w({type:t,selectors:[["app-root"]],decls:21,vars:1,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark","px-3"],["routerLink","",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto"],["routerLinkActive","active",1,"nav-item"],["routerLink","teams",1,"nav-link"],["routerLink","admin",1,"nav-link"],["routerLink","games",1,"nav-link"],[1,"form-inline"],["class","btn btn-outline-success my-2 my-sm-0","type","button",3,"click",4,"ngIf"],[1,"d-flex","flex-column","flex-grow-1","h-100","w-100"],["type","button",1,"btn","btn-outline-success","my-2","my-sm-0",3,"click"]],template:function(e,a){e&1&&(l(0,"header")(1,"nav",0)(2,"a",1),s(3,"SportsScope"),o(),l(4,"button",2),X(5,"span",3),o(),l(6,"div",4)(7,"ul",5)(8,"li",6)(9,"a",7),s(10,"Teams"),o()(),l(11,"li",6)(12,"a",8),s(13,"Admin"),o()(),l(14,"li",6)(15,"a",9),s(16,"Games"),o()()(),l(17,"div",10),f(18,Ze,2,0,"button",11),o()()()(),l(19,"main",12),X(20,"router-outlet"),o()),e&2&&(m(18),d("ngIf",a.username))},dependencies:[M,xe,O,Ce],encapsulation:2});let i=t;return i})();var Te=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=T({type:t,bootstrap:[Ie]}),t.\u0275inj=G({imports:[ge,_e,pe,Me,Ge]});let i=t;return i})();ue().bootstrapModule(Te).catch(i=>console.error(i));

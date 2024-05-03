import{a as pe,b as I,c as L,d as N,e as D,f as F,g as A,h as ge,i as j,j as ue,k as U,l as b,m as H}from"./chunk-F7BLDPX5.js";import{B as k,C as G,Ca as oe,Da as R,E as T,F as ie,Ga as re,H as w,I as V,La as ae,M as c,Ma as M,N as p,Na as le,Oa as se,Pa as Z,Qa as me,Ra as de,Sa as ce,Ta as _e,U as m,Ua as he,V as y,Va as z,Wa as P,Xa as fe,Ya as $,_ as v,aa as h,ea as o,fa as r,ga as Q,j as te,ja as E,ka as x,la as d,r as ne,ra as O,sa as s,ta as B,u as q,ua as W,va as X,xa as g,ya as u,za as _}from"./chunk-T4XZIK7V.js";var ve=(()=>{let i=class i{constructor(){this.authService=ie(b)}intercept(t,e){let n=this.authService.user.token,f=t.url.startsWith(U.apiUrl);return n&&f&&(t=t.clone({setHeaders:{Authorization:`Bearer ${n}`}})),e.handle(t)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=k({token:i,factory:i.\u0275fac});let a=i;return a})();var xe=(()=>{let i=class i{constructor(t){this.router=t}intercept(t,e){return e.handle(t).pipe(ne(n=>{n.status===401&&this.router.navigate(["login"],{queryParams:{returnUrl:this.router.routerState.snapshot.url}}),U.production||console.error(n);let f=n&&n.error&&n.error.message||n.statusText;return te(()=>f)}))}};i.\u0275fac=function(e){return new(e||i)(T(z))},i.\u0275prov=k({token:i,factory:i.\u0275fac});let a=i;return a})();var Ce=(()=>{let i=class i{constructor(t){if(t)throw new Error("Core Module can only be imported to AppModule.")}};i.\u0275fac=function(e){return new(e||i)(T(i,12))},i.\u0275mod=V({type:i}),i.\u0275inj=G({providers:[{provide:Z,useClass:ve,multi:!0},{provide:Z,useClass:xe,multi:!0}],imports:[le]});let a=i;return a})();function Ge(a,i){if(a&1&&(o(0,"div",3)(1,"h4",4),s(2),r(),o(3,"div",5)(4,"div",6)(5,"h6"),s(6,"Your access token is"),r(),s(7),r(),o(8,"div",6)(9,"h6"),s(10,"Token expires at:"),r(),s(11),r()(),o(12,"div",7),s(13," To view all the teams or add/manage teams, please click the "),o(14,"a",8),s(15,"here"),r(),s(16,". "),r()()),a&2){let l=d();m(2),W("Hi ",l.user.username,","),m(5),W(" ",l.user.token," "),m(4),W(" ",l.expiry," ")}}function Te(a,i){a&1&&(o(0,"div",3)(1,"h4",4),s(2,"You have been logged out"),r(),o(3,"div",5)(4,"div",6),s(5," Please click "),o(6,"a",9),s(7,"here"),r(),s(8," to login. "),r()()())}var ye=(()=>{let i=class i{constructor(t){this.expiry=new Date,this.user=t.user;let e=this.user.token;if(e){let n=JSON.parse(atob(e.split(".")[1]));this.expiry=new Date(n.expires*1e3)}}ngOnInit(){}};i.\u0275fac=function(e){return new(e||i)(y(b))},i.\u0275cmp=w({type:i,selectors:[["app-home"]],decls:4,vars:2,consts:[["login",""],[1,"container"],["class","card mt-4 shadow",4,"ngIf","ngIfElse"],[1,"card","mt-4","shadow"],[1,"card-header"],[1,"card-body"],[1,"m-2"],[1,"card-footer","py-3","fs-5"],["routerLink","teams"],["routerLink","login"]],template:function(e,n){if(e&1&&(o(0,"section",1),v(1,Ge,17,3,"div",2),r(),v(2,Te,9,0,"ng-template",null,0,R)),e&2){let f=O(3);m(),h("ngIf",n.user.username)("ngIfElse",f)}},dependencies:[M,P]});let a=i;return a})();function Ve(a,i){a&1&&(o(0,"div",11),s(1," Login failed. Please try again. "),r())}var Me=(()=>{let i=class i{constructor(t,e,n){this.route=t,this.router=e,this.authService=n,this.busy=!1,this.username="",this.password="",this.loginError=!1}ngOnInit(){if(this.authService.user.token){let t=this.route.snapshot.queryParams.returnUrl||"";this.router.navigate([t])}}login(){if(!this.username||!this.password)return;this.busy=!0;let t=this.route.snapshot.queryParams.returnUrl||"";this.authService.login(this.username.trim(),this.password).pipe(q(()=>this.busy=!1)).subscribe({next:()=>{this.router.navigate([t])},error:()=>{this.loginError=!0}})}};i.\u0275fac=function(e){return new(e||i)(y(_e),y(z),y(b))},i.\u0275cmp=w({type:i,selectors:[["app-login"]],decls:20,vars:4,consts:[[1,"text-center","mb-4"],[1,"form-signin",3,"ngSubmit"],[1,"form-label-group"],["type","text","id","userName","name","username","placeholder","Username","required","","autofocus","",1,"form-control",3,"ngModelChange","ngModel"],["for","userName"],["type","password","id","inputPassword","name","password","placeholder","Password","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","inputPassword"],["class","mb-3 text-danger",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","me-2",3,"disabled"],[1,"mt-3"],["routerLink","../signup"],[1,"mb-3","text-danger"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"h1"),s(2,"Login to SportsScope"),r()(),o(3,"form",1),x("ngSubmit",function(){return n.login()}),o(4,"div",2)(5,"input",3),_("ngModelChange",function(C){return u(n.username,C)||(n.username=C),C}),r(),o(6,"label",4),s(7,"Username"),r()(),o(8,"div",2)(9,"input",5),_("ngModelChange",function(C){return u(n.password,C)||(n.password=C),C}),r(),o(10,"label",6),s(11,"Password"),r()(),v(12,Ve,2,0,"div",7),o(13,"button",8),s(14," Sign in "),r(),o(15,"div",9),s(16," If you don't have an account, then please "),o(17,"a",10),s(18," Sign Up"),r(),s(19,". "),r()()),e&2&&(m(5),g("ngModel",n.username),m(4),g("ngModel",n.password),m(3),h("ngIf",n.loginError),m(),h("disabled",n.busy))},dependencies:[M,A,I,L,N,j,F,D,P],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.form-signin[_ngcontent-%COMP%]{width:100%;max-width:420px;padding:15px}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{height:3.125rem;padding:.75rem}.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;pointer-events:none;cursor:text;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){padding-top:1.25rem;padding-bottom:.25rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem;font-size:12px;color:#777}@supports (-ms-ime-align: auto){.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:none}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#777}}[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:linear-gradient(to bottom right,#2196f3,#03a9f4,#00bcd4,#009688)}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}"]});let a=i;return a})();function We(a,i){a&1&&(o(0,"div",13),s(1," Sign up failed. Please try again. "),r())}function Ie(a,i){if(a&1){let l=E();o(0,"form",3),x("ngSubmit",function(){c(l);let e=d();return p(e.signup())}),o(1,"div",4)(2,"input",5),_("ngModelChange",function(e){c(l);let n=d();return u(n.username,e)||(n.username=e),p(e)}),r(),o(3,"label",6),s(4,"Username"),r()(),o(5,"div",4)(6,"input",7),_("ngModelChange",function(e){c(l);let n=d();return u(n.password,e)||(n.password=e),p(e)}),r(),o(7,"label",8),s(8,"Password"),r()(),v(9,We,2,0,"div",9),o(10,"button",10),s(11," Sign Up "),r(),o(12,"div",11),s(13," If you don't have an account, then please "),o(14,"a",12),s(15," Login"),r(),s(16," using your username and password. "),r()()}if(a&2){let l=d();m(2),g("ngModel",l.username),m(4),g("ngModel",l.password),m(3),h("ngIf",l.loginError),m(),h("disabled",l.busy)}}function Le(a,i){a&1&&(o(0,"p",14),s(1,"Success!"),r(),o(2,"p"),s(3," You have signed up a new account. Please go to the "),o(4,"a",12),s(5," login "),r(),s(6," page to sign in the system. "),r())}var be=(()=>{let i=class i{constructor(t){this.authService=t,this.busy=!1,this.username="",this.password="",this.loginError=!1,this.signupSuccess=!1}ngOnInit(){}signup(){!this.username||!this.password||(this.busy=!0,this.authService.signup(this.username.trim(),this.password).pipe(q(()=>this.busy=!1)).subscribe({next:()=>{this.signupSuccess=!0},error:()=>{this.signupSuccess=!1,this.loginError=!0}}))}};i.\u0275fac=function(e){return new(e||i)(y(b))},i.\u0275cmp=w({type:i,selectors:[["app-sign-up"]],decls:6,vars:2,consts:[["intro",""],[1,"text-center","mb-4"],["class","form-signin",3,"ngSubmit",4,"ngIf","ngIfElse"],[1,"form-signin",3,"ngSubmit"],[1,"form-label-group"],["type","text","id","userName","name","username","placeholder","Username","required","","autofocus","",1,"form-control",3,"ngModelChange","ngModel"],["for","userName"],["type","password","id","inputPassword","name","password","placeholder","Password","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","inputPassword"],["class","mb-3 text-danger",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","me-2",3,"disabled"],[1,"mt-3"],["routerLink","../login"],[1,"mb-3","text-danger"],[1,"h2","text-success","fw-bold"]],template:function(e,n){if(e&1&&(o(0,"div",1)(1,"h1"),s(2,"Sign Up for SportsScope"),r()(),v(3,Ie,17,4,"form",2)(4,Le,7,0,"ng-template",null,0,R)),e&2){let f=O(5);m(3),h("ngIf",!n.signupSuccess)("ngIfElse",f)}},dependencies:[M,A,I,L,N,j,F,D,P],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.form-signin[_ngcontent-%COMP%]{width:100%;max-width:420px;padding:15px}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{height:3.125rem;padding:.75rem}.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;pointer-events:none;cursor:text;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){padding-top:1.25rem;padding-bottom:.25rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem;font-size:12px;color:#777}@supports (-ms-ime-align: auto){.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:none}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#777}}[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:linear-gradient(to bottom right,#2196f3,#03a9f4,#00bcd4,#009688)}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}"]});let a=i;return a})();var Se=(()=>{let i=class i{constructor(t){this.http=t,this.apiUrl=U.apiUrl+"games"}getAllGames(){return this.http.get(`${this.apiUrl}/`)}getGame(t){return this.http.get(`${this.apiUrl}/${t}`)}createGame(t){return this.http.post(`${this.apiUrl}/new`,t)}updateGame(t,e){return this.http.put(`${this.apiUrl}/${t}`,e)}deleteGame(t){return this.http.delete(`${this.apiUrl}/${t}`)}};i.\u0275fac=function(e){return new(e||i)(T(se))},i.\u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var De=()=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Fe(a,i){if(a&1){let l=E();o(0,"div",12)(1,"div",13)(2,"span",14),x("click",function(){c(l);let e=d();return p(e.toggleAddEventModal())}),s(3,"\xD7"),r(),o(4,"form",15,0),x("ngSubmit",function(){c(l);let e=O(5),n=d();return n.addEvent(e),p(n.toggleAddEventModal())}),o(6,"input",16),_("ngModelChange",function(e){c(l);let n=d();return u(n.newGame.name,e)||(n.newGame.name=e),p(e)}),r(),o(7,"input",17),_("ngModelChange",function(e){c(l);let n=d();return u(n.newGame.location,e)||(n.newGame.location=e),p(e)}),r(),o(8,"input",18),_("ngModelChange",function(e){c(l);let n=d();return u(n.newGame.home_team,e)||(n.newGame.home_team=e),p(e)}),r(),o(9,"input",19),_("ngModelChange",function(e){c(l);let n=d();return u(n.newGame.away_team,e)||(n.newGame.away_team=e),p(e)}),r(),o(10,"input",20),_("ngModelChange",function(e){c(l);let n=d();return u(n.newGame.date,e)||(n.newGame.date=e),p(e)}),r(),o(11,"input",21),_("ngModelChange",function(e){c(l);let n=d();return u(n.newGame.time,e)||(n.newGame.time=e),p(e)}),r(),o(12,"label")(13,"input",22),_("ngModelChange",function(e){c(l);let n=d();return u(n.newGame.played,e)||(n.newGame.played=e),p(e)}),r(),s(14," Played "),r(),o(15,"input",23),_("ngModelChange",function(e){c(l);let n=d();return u(n.newGame.home_team_score,e)||(n.newGame.home_team_score=e),p(e)}),r(),o(16,"input",24),_("ngModelChange",function(e){c(l);let n=d();return u(n.newGame.away_team_score,e)||(n.newGame.away_team_score=e),p(e)}),r(),o(17,"button",25),s(18,"Add Event"),r()()()()}if(a&2){let l=d();m(6),g("ngModel",l.newGame.name),m(),g("ngModel",l.newGame.location),m(),g("ngModel",l.newGame.home_team),m(),g("ngModel",l.newGame.away_team),m(),g("ngModel",l.newGame.date),m(),g("ngModel",l.newGame.time),m(2),g("ngModel",l.newGame.played),m(2),g("ngModel",l.newGame.home_team_score),h("disabled",!l.newGame.played),m(),g("ngModel",l.newGame.away_team_score),h("disabled",!l.newGame.played)}}function Ae(a,i){if(a&1&&(o(0,"div",26),s(1),r()),a&2){let l=i.$implicit;m(),B(l)}}function je(a,i){if(a&1&&(o(0,"div"),s(1),r()),a&2){let l=d().$implicit;m(),B(l.date)}}function Ue(a,i){if(a&1&&(o(0,"div",35),s(1),r()),a&2){let l=d().$implicit;m(),X(" Score: ",l.home_team_score," - ",l.away_team_score," ")}}function Be(a,i){if(a&1&&(o(0,"div",36),s(1),r()),a&2){let l=d().$implicit;m(),W(" Time: ",l.time," ")}}function qe(a,i){if(a&1){let l=E();o(0,"div",30),x("click",function(){let e=c(l).$implicit,n=d(2);return p(n.selectEvent(e))}),o(1,"div",31),s(2),r(),o(3,"div",32),s(4),r(),v(5,Ue,2,2,"div",33)(6,Be,2,1,"div",34),r()}if(a&2){let l=i.$implicit;m(2),B(l.name),m(2),X(" ",l.home_team," vs ",l.away_team," "),m(),h("ngIf",l.played),m(),h("ngIf",!l.played)}}function Re(a,i){if(a&1&&(o(0,"div",27),v(1,je,2,1,"div",28)(2,qe,7,5,"div",29),r()),a&2){let l=i.$implicit;m(),h("ngIf",l.date),m(),h("ngForOf",l.events)}}function ze(a,i){if(a&1){let l=E();o(0,"div")(1,"p")(2,"strong"),s(3,"Score:"),r(),o(4,"input",45),_("ngModelChange",function(e){c(l);let n=d(2);return u(n.selectedEvent.home_team_score,e)||(n.selectedEvent.home_team_score=e),p(e)}),r(),s(5," - "),o(6,"input",46),_("ngModelChange",function(e){c(l);let n=d(2);return u(n.selectedEvent.away_team_score,e)||(n.selectedEvent.away_team_score=e),p(e)}),r()()()}if(a&2){let l=d(2);m(4),g("ngModel",l.selectedEvent.home_team_score),m(2),g("ngModel",l.selectedEvent.away_team_score)}}function He(a,i){if(a&1){let l=E();o(0,"div",37)(1,"div",13)(2,"span",14),x("click",function(){c(l);let e=d();return p(e.closeEventDetails())}),s(3,"\xD7"),r(),o(4,"form",15,1),x("ngSubmit",function(){c(l);let e=O(5),n=d();return p(n.updateEvent(e.value))}),o(6,"h2"),s(7,"Edit Event Details"),r(),o(8,"p")(9,"strong"),s(10,"Name:"),r(),o(11,"input",38),_("ngModelChange",function(e){c(l);let n=d();return u(n.selectedEvent.name,e)||(n.selectedEvent.name=e),p(e)}),r()(),o(12,"p")(13,"strong"),s(14,"Date:"),r(),o(15,"input",39),_("ngModelChange",function(e){c(l);let n=d();return u(n.selectedEvent.date,e)||(n.selectedEvent.date=e),p(e)}),r()(),o(16,"p")(17,"strong"),s(18,"Time:"),r(),o(19,"input",40),_("ngModelChange",function(e){c(l);let n=d();return u(n.selectedEvent.time,e)||(n.selectedEvent.time=e),p(e)}),r()(),o(20,"p")(21,"strong"),s(22,"Location:"),r(),o(23,"input",41),_("ngModelChange",function(e){c(l);let n=d();return u(n.selectedEvent.location,e)||(n.selectedEvent.location=e),p(e)}),r()(),o(24,"p")(25,"strong"),s(26,"Home Team:"),r(),o(27,"input",42),_("ngModelChange",function(e){c(l);let n=d();return u(n.selectedEvent.home_team,e)||(n.selectedEvent.home_team=e),p(e)}),r()(),o(28,"p")(29,"strong"),s(30,"Away Team:"),r(),o(31,"input",43),_("ngModelChange",function(e){c(l);let n=d();return u(n.selectedEvent.away_team,e)||(n.selectedEvent.away_team=e),p(e)}),r()(),o(32,"p")(33,"strong"),s(34,"Played:"),r(),o(35,"input",44),_("ngModelChange",function(e){c(l);let n=d();return u(n.selectedEvent.played,e)||(n.selectedEvent.played=e),p(e)}),r()(),v(36,ze,7,2,"div",28),o(37,"button",25),s(38,"Save Changes"),r()(),o(39,"button",4),x("click",function(){c(l);let e=d();return p(e.removeEvent(e.selectedEvent))}),s(40,"Remove Event"),r()()()}if(a&2){let l=d();m(11),g("ngModel",l.selectedEvent.name),m(4),g("ngModel",l.selectedEvent.date),m(4),g("ngModel",l.selectedEvent.time),m(4),g("ngModel",l.selectedEvent.location),m(4),g("ngModel",l.selectedEvent.home_team),m(4),g("ngModel",l.selectedEvent.away_team),m(4),g("ngModel",l.selectedEvent.played),m(),h("ngIf",l.selectedEvent.played)}}var Ee=(()=>{let i=class i{constructor(t,e){this.cdr=t,this.gamesService=e,this.currentMonth="",this.days=[],this.showEventForm=!1,this.showEventDetails=!1,this.showAddEventModal=!1,this.selectedEvent={_id:"",name:"",location:"",home_team:"",away_team:"",date:"",time:"",played:!1,home_team_score:0,away_team_score:0},this.newGame={name:"",location:"",home_team:"",away_team:"",date:"",time:"",played:!1,home_team_score:0,away_team_score:0}}ngOnInit(){this.loadMonth(new Date)}closeEventForm(){this.showEventForm=!1}closeEventDetails(){this.showEventDetails=!1}openEventForm(){this.showEventForm=!0}toggleAddEventModal(){this.showAddEventModal=!this.showAddEventModal}changeMonth(t){let e=new Date(this.currentMonth+" 1");e.setMonth(e.getMonth()+t),this.loadMonth(e),this.cdr.detectChanges()}loadMonth(t){this.currentMonth=t.toLocaleString("default",{month:"long",year:"numeric"});let e=new Date(t.getFullYear(),t.getMonth(),1).getDay(),n=new Date(t.getFullYear(),t.getMonth()+1,0).getDate();this.days=Array(n).fill(null).map((f,C)=>({date:C+1,events:[]}));for(let f=0;f<e;f++)this.days.unshift({date:null,events:[]});this.fetchEvents()}selectEvent(t){console.log("Event selected, attempting to show modal"),this.selectedEvent=t,this.showEventDetails=!0,this.cdr.detectChanges()}fetchEvents(){this.gamesService.getAllGames().subscribe({next:t=>{let e=new Date(this.currentMonth+" 1"),n=e.getDay();this.days.forEach(f=>f.events=[]),t.forEach(f=>{let C=new Date(f.date);if(C.getMonth()===e.getMonth()&&C.getFullYear()===e.getFullYear()){let K=C.getDate()+n;K>=0&&K<this.days.length&&this.days[K].events.push(f)}})},error:t=>console.error("Error fetching games:",t)})}addEvent(t){t.valid&&this.gamesService.createGame(this.newGame).subscribe({next:()=>{this.fetchEvents(),t.reset()},error:e=>{console.error("Error adding game:",e)}})}removeEvent(t){t&&t._id&&this.gamesService.deleteGame(t._id).subscribe({next:()=>{this.fetchEvents(),this.closeEventDetails()},error:e=>console.error("Error removing game:",e)})}updateEvent(t){if(!this.selectedEvent||!this.selectedEvent._id)return;let e={_id:this.selectedEvent._id,name:t.eventName,location:t.eventLocation,home_team:t.homeTeam,away_team:t.awayTeam,date:t.eventDate,time:t.eventTime,played:t.played,home_team_score:t.played?t.homeScore:null,away_team_score:t.played?t.awayScore:null};this.gamesService.updateGame(this.selectedEvent._id,e).subscribe({next:()=>{this.fetchEvents(),this.closeEventDetails()},error:n=>{console.error("Error updating game:",n),this.closeEventDetails()}})}};i.\u0275fac=function(e){return new(e||i)(y(re),y(Se))},i.\u0275cmp=w({type:i,selectors:[["app-games"]],decls:18,vars:6,consts:[["eventForm","ngForm"],["updateEventForm","ngForm"],[1,"title-container"],[1,"main-container"],[3,"click"],["class","modal",4,"ngIf"],["id","monthNavigation"],["id","weekdays"],["class","weekday",4,"ngFor","ngForOf"],["id","calendar"],["class","day",4,"ngFor","ngForOf"],["id","eventDescriptionPopup","class","modal",4,"ngIf"],[1,"modal"],[1,"modal-content"],[1,"close",3,"click"],[3,"ngSubmit"],["type","text","id","eventName","name","eventName","placeholder","Event Name","required","",3,"ngModelChange","ngModel"],["type","text","id","location","name","location","placeholder","Location","required","",3,"ngModelChange","ngModel"],["type","text","id","home_team","name","home_team","placeholder","Home Team","required","",3,"ngModelChange","ngModel"],["type","text","id","away_team","name","away_team","placeholder","Away Team","required","",3,"ngModelChange","ngModel"],["type","date","id","date","name","date","required","",3,"ngModelChange","ngModel"],["type","time","id","time","name","time","required","",3,"ngModelChange","ngModel"],["type","checkbox","id","played","name","played",3,"ngModelChange","ngModel"],["type","number","id","home_team_score","name","home_team_score","placeholder","Home Team Score",3,"ngModelChange","ngModel","disabled"],["type","number","id","away_team_score","name","away_team_score","placeholder","Away Team Score",3,"ngModelChange","ngModel","disabled"],["type","submit"],[1,"weekday"],[1,"day"],[4,"ngIf"],["class","event",3,"click",4,"ngFor","ngForOf"],[1,"event",3,"click"],[1,"event-title"],[1,"event-teams"],["class","event-details",4,"ngIf"],["class","event-time",4,"ngIf"],[1,"event-details"],[1,"event-time"],["id","eventDescriptionPopup",1,"modal"],["type","text","name","eventName","required","",3,"ngModelChange","ngModel"],["type","date","name","eventDate","required","",3,"ngModelChange","ngModel"],["type","time","name","eventTime","required","",3,"ngModelChange","ngModel"],["type","text","name","eventLocation","required","",3,"ngModelChange","ngModel"],["type","text","name","homeTeam","required","",3,"ngModelChange","ngModel"],["type","text","name","awayTeam","required","",3,"ngModelChange","ngModel"],["type","checkbox","name","played",3,"ngModelChange","ngModel"],["type","number","name","homeScore","required","",3,"ngModelChange","ngModel"],["type","number","name","awayScore","required","",3,"ngModelChange","ngModel"]],template:function(e,n){e&1&&(o(0,"div",2),s(1,` Game Calendar
`),r(),o(2,"div",3)(3,"button",4),x("click",function(){return n.toggleAddEventModal()}),s(4,"Add New Game"),r(),v(5,Fe,19,11,"div",5),o(6,"div",6)(7,"button",4),x("click",function(){return n.changeMonth(-1)}),s(8,"\u276E"),r(),o(9,"span"),s(10),r(),o(11,"button",4),x("click",function(){return n.changeMonth(1)}),s(12,"\u276F"),r()(),o(13,"div",7),v(14,Ae,2,1,"div",8),r(),o(15,"div",9),v(16,Re,3,2,"div",10),r()(),v(17,He,41,8,"div",11)),e&2&&(m(5),h("ngIf",n.showAddEventModal),m(5),B(n.currentMonth),m(4),h("ngForOf",oe(5,De)),m(2),h("ngForOf",n.days),m(),h("ngIf",n.showEventDetails))},dependencies:[ae,M,A,I,ge,pe,L,N,j,F,D],styles:["body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#f4f4f4;overflow-y:auto}.main-container[_ngcontent-%COMP%]{min-height:100vh;overflow-y:auto;padding-bottom:50px}.title-container[_ngcontent-%COMP%]{margin-bottom:20px;font-size:50px}h1[_ngcontent-%COMP%]{font-size:36px}.author[_ngcontent-%COMP%]{font-size:18px;color:#666}button[_ngcontent-%COMP%]{background-color:#325fc7;color:#fff;padding:10px 20px;border:none;border-radius:4px;cursor:pointer;margin:10px}button[_ngcontent-%COMP%]:hover{background-color:#45a049}#eventDescriptionPopup[_ngcontent-%COMP%]{display:block;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#0006}.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus{color:#000;cursor:pointer}#calendar[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;padding:10px;background-color:#fff;border-radius:8px;margin:20px;max-height:500px;overflow-y:auto}.event-teams[_ngcontent-%COMP%]{color:#555;margin-bottom:2px}.day[_ngcontent-%COMP%]{background-color:#fafafa;border:1px solid #ddd;padding:15px;cursor:pointer;text-align:center}.event[_ngcontent-%COMP%]{background-color:#add8e6;color:#fff;padding:5px;border-radius:3px;margin-top:5px}#weekdays[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,1fr);background-color:#ddd;padding:10px;font-weight:700;text-align:center}#monthNavigation[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:10px 0}#monthNavigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 20px;font-size:24px}.event[_ngcontent-%COMP%]{font-weight:700;color:#00f}.score[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]{font-size:.8em;color:green}.event[_ngcontent-%COMP%]{margin-bottom:10px;padding:5px;background-color:#f8f8f8;border-radius:4px;box-shadow:0 2px 4px #0000001a}.event-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:4px}.event-details[_ngcontent-%COMP%]{font-size:.9em;color:#666;background-color:#eef;padding:4px;border-radius:3px}.weekday[_ngcontent-%COMP%], .day[_ngcontent-%COMP%]{text-align:center}.event[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .3s}.event[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.modal[_ngcontent-%COMP%]{display:block;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#0006}.modal-content[_ngcontent-%COMP%]{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%;max-width:500px}.close[_ngcontent-%COMP%]{color:#aaa;float:right;font-size:28px;font-weight:700}.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus{color:#000;text-decoration:none;cursor:pointer}"]});let a=i;return a})();var Ye=[{path:"",pathMatch:"full",component:ye,canMatch:[H]},{path:"login",component:Me},{path:"signup",component:be},{path:"games",component:Ee},{path:"teams",loadChildren:()=>import("./chunk-DA5R2B6Y.js").then(a=>a.TeamsModule),canMatch:[H]},{path:"management",loadChildren:()=>import("./chunk-M6XO4DPA.js").then(a=>a.ManagementModule),canMatch:[H]},{path:"**",redirectTo:""}],Pe=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=V({type:i}),i.\u0275inj=G({imports:[$.forRoot(Ye),$]});let a=i;return a})();function Je(a,i){if(a&1){let l=E();o(0,"button",13),x("click",function(){c(l);let e=d();return p(e.logout())}),s(1," Logout "),r()}}var Oe=(()=>{let i=class i{constructor(t){this.authService=t,this.username="",this.username=t.user.username}ngOnInit(){}logout(){this.authService.logout()}};i.\u0275fac=function(e){return new(e||i)(y(b))},i.\u0275cmp=w({type:i,selectors:[["app-root"]],decls:21,vars:1,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark","px-3"],["routerLink","",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto"],["routerLinkActive","active",1,"nav-item"],["routerLink","teams",1,"nav-link"],["routerLink","admin",1,"nav-link"],["routerLink","games",1,"nav-link"],[1,"form-inline"],["class","btn btn-outline-success my-2 my-sm-0","type","button",3,"click",4,"ngIf"],[1,"d-flex","flex-column","flex-grow-1","h-100","w-100"],["type","button",1,"btn","btn-outline-success","my-2","my-sm-0",3,"click"]],template:function(e,n){e&1&&(o(0,"header")(1,"nav",0)(2,"a",1),s(3,"SportsScope"),r(),o(4,"button",2),Q(5,"span",3),r(),o(6,"div",4)(7,"ul",5)(8,"li",6)(9,"a",7),s(10,"Teams"),r()(),o(11,"li",6)(12,"a",8),s(13,"Admin"),r()(),o(14,"li",6)(15,"a",9),s(16,"Games"),r()()(),o(17,"div",10),v(18,Je,2,0,"button",11),r()()()(),o(19,"main",12),Q(20,"router-outlet"),r()),e&2&&(m(18),h("ngIf",n.username))},dependencies:[M,he,P,fe],encapsulation:2});let a=i;return a})();var ke=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=V({type:i,bootstrap:[Oe]}),i.\u0275inj=G({imports:[ce,ue,me,Ce,Pe]});let a=i;return a})();de().bootstrapModule(ke).catch(a=>console.error(a));

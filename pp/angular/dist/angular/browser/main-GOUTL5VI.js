import{a as R,b as z,c as N,d as G,e as W,f as j,g as q,h as me,i as H,j as C,k as Y}from"./chunk-7CV37JYQ.js";import{A as P,C as O,D as te,F as b,G as k,Ha as ie,Ia as x,Ja as oe,K as v,Ka as re,L as _,La as K,Ma as ae,Na as se,Oa as le,Pa as ce,Qa as pe,Ra as B,S as m,Sa as w,T as h,Ta as de,Ua as Q,Y as d,_ as p,ca as o,da as r,ea as M,h as Z,ha as S,ia as g,ja as u,p as ee,pa as V,qa as s,ra as U,s as L,sa as T,ta as I,ua as D,va as F,ya as ne,z as E,za as A}from"./chunk-SOGBYFKH.js";var ue=(()=>{let e=class e{constructor(){this.authService=te(C)}intercept(t,n){let a=this.authService.user.token,c=t.url.startsWith(H.apiUrl);return a&&c&&(t=t.clone({setHeaders:{Authorization:`Bearer ${a}`}})),n.handle(t)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=E({token:e,factory:e.\u0275fac});let i=e;return i})();var ge=(()=>{let e=class e{constructor(t){this.router=t}intercept(t,n){return n.handle(t).pipe(ee(a=>{a.status===401&&this.router.navigate(["login"],{queryParams:{returnUrl:this.router.routerState.snapshot.url}}),H.production||console.error(a);let c=a&&a.error&&a.error.message||a.statusText;return Z(()=>c)}))}};e.\u0275fac=function(n){return new(n||e)(O(B))},e.\u0275prov=E({token:e,factory:e.\u0275fac});let i=e;return i})();var fe=(()=>{let e=class e{constructor(t){if(t)throw new Error("Core Module can only be imported to AppModule.")}};e.\u0275fac=function(n){return new(n||e)(O(e,12))},e.\u0275mod=k({type:e}),e.\u0275inj=P({providers:[{provide:K,useClass:ue,multi:!0},{provide:K,useClass:ge,multi:!0}],imports:[oe]});let i=e;return i})();function Se(i,e){if(i&1&&(o(0,"div",3)(1,"h4",4),s(2),r(),o(3,"div",5)(4,"div",6)(5,"h6"),s(6,"Your access token is"),r(),s(7),r(),o(8,"div",6)(9,"h6"),s(10,"Token expires at:"),r(),s(11),r()(),o(12,"div",7),s(13," To view all the events or add/manage events, please click the "),o(14,"a",8),s(15,"here"),r(),s(16,". "),r()()),i&2){let l=u();m(2),T("Hi ",l.user.username,","),m(5),T(" ",l.user.token," "),m(4),T(" ",l.expiry," ")}}function Ee(i,e){i&1&&(o(0,"div",3)(1,"h4",4),s(2,"You have been logged out"),r(),o(3,"div",5)(4,"div",6),s(5," Please click "),o(6,"a",9),s(7,"here"),r(),s(8," to login. "),r()()())}var he=(()=>{let e=class e{constructor(t){this.expiry=new Date,this.user=t.user;let n=this.user.token;if(n){let a=JSON.parse(atob(n.split(".")[1]));this.expiry=new Date(a.expires*1e3)}}ngOnInit(){}};e.\u0275fac=function(n){return new(n||e)(h(C))},e.\u0275cmp=b({type:e,selectors:[["app-home"]],decls:4,vars:2,consts:[["login",""],[1,"container"],["class","card mt-4 shadow",4,"ngIf","ngIfElse"],[1,"card","mt-4","shadow"],[1,"card-header"],[1,"card-body"],[1,"m-2"],[1,"card-footer","py-3","fs-5"],["routerLink","events"],["routerLink","login"]],template:function(n,a){if(n&1&&(o(0,"section",1),d(1,Se,17,3,"div",2),r(),d(2,Ee,9,0,"ng-template",null,0,A)),n&2){let c=V(3);m(),p("ngIf",a.user.username)("ngIfElse",c)}},dependencies:[x,w]});let i=e;return i})();function Pe(i,e){i&1&&(o(0,"div",12),s(1," Login failed. Please try again. "),r())}var _e=(()=>{let e=class e{constructor(t,n,a){this.route=t,this.router=n,this.authService=a,this.busy=!1,this.username="",this.password="",this.loginError=!1}ngOnInit(){if(this.authService.user.token){let t=this.route.snapshot.queryParams.returnUrl||"";this.router.navigate([t])}}login(){if(!this.username||!this.password)return;this.busy=!0;let t=this.route.snapshot.queryParams.returnUrl||"";this.authService.login(this.username.trim(),this.password).pipe(L(()=>this.busy=!1)).subscribe({next:()=>{this.router.navigate([t])},error:()=>{this.loginError=!0}})}};e.\u0275fac=function(n){return new(n||e)(h(ce),h(B),h(C))},e.\u0275cmp=b({type:e,selectors:[["app-login"]],decls:18,vars:4,consts:[[1,"text-center","mb-4"],["src","assets/logo.png","alt","logo","loading","lazy","width","180","height","180",1,"mb-4","rounded-pill"],[1,"form-signin",3,"ngSubmit"],[1,"form-label-group"],["type","text","id","userName","name","username","placeholder","Username","required","","autofocus","",1,"form-control",3,"ngModelChange","ngModel"],["for","userName"],["type","password","id","inputPassword","name","password","placeholder","Password","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","inputPassword"],["class","mb-3 text-danger",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","me-2",3,"disabled"],[1,"mt-3"],["routerLink","../signup"],[1,"mb-3","text-danger"]],template:function(n,a){n&1&&(o(0,"div",0),M(1,"img",1),r(),o(2,"form",2),g("ngSubmit",function(){return a.login()}),o(3,"div",3)(4,"input",4),F("ngModelChange",function(f){return D(a.username,f)||(a.username=f),f}),r(),o(5,"label",5),s(6,"Username"),r()(),o(7,"div",3)(8,"input",6),F("ngModelChange",function(f){return D(a.password,f)||(a.password=f),f}),r(),o(9,"label",7),s(10,"Password"),r()(),d(11,Pe,2,0,"div",8),o(12,"button",9),s(13," Sign in "),r(),o(14,"div",10),s(15," If you don't have an account, then please "),o(16,"a",11),s(17," Sign up "),r()()()),n&2&&(m(4),I("ngModel",a.username),m(4),I("ngModel",a.password),m(3),p("ngIf",a.loginError),m(),p("disabled",a.busy))},dependencies:[x,j,R,z,N,q,W,G,w],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.form-signin[_ngcontent-%COMP%]{width:100%;max-width:420px;padding:15px}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{height:3.125rem;padding:.75rem}.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;pointer-events:none;cursor:text;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){padding-top:1.25rem;padding-bottom:.25rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem;font-size:12px;color:#777}@supports (-ms-ime-align: auto){.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:none}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#777}}[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:linear-gradient(to bottom right,#2196f3,#03a9f4,#00bcd4,#009688)}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}"]});let i=e;return i})();function Oe(i,e){i&1&&(o(0,"div",14),s(1," Sign up failed. Please try again. "),r())}function ke(i,e){if(i&1){let l=S();o(0,"form",4),g("ngSubmit",function(){v(l);let n=u();return _(n.signup())}),o(1,"div",5)(2,"input",6),F("ngModelChange",function(n){v(l);let a=u();return D(a.username,n)||(a.username=n),_(n)}),r(),o(3,"label",7),s(4,"Username"),r()(),o(5,"div",5)(6,"input",8),F("ngModelChange",function(n){v(l);let a=u();return D(a.password,n)||(a.password=n),_(n)}),r(),o(7,"label",9),s(8,"Password"),r()(),d(9,Oe,2,0,"div",10),o(10,"button",11),s(11," Sign Up "),r(),o(12,"div",12),s(13," If you don't have an account, then please "),o(14,"a",13),s(15," login "),r(),s(16," using your username and password "),r()()}if(i&2){let l=u();m(2),I("ngModel",l.username),m(4),I("ngModel",l.password),m(3),p("ngIf",l.loginError),m(),p("disabled",l.busy)}}function Te(i,e){i&1&&(o(0,"p",15),s(1,"Success!"),r(),o(2,"p"),s(3," You have signed up a new account. Please go to the "),o(4,"a",13),s(5," login "),r(),s(6," page to sign in the system. "),r())}var be=(()=>{let e=class e{constructor(t){this.authService=t,this.busy=!1,this.username="",this.password="",this.loginError=!1,this.signupSuccess=!1}ngOnInit(){}signup(){!this.username||!this.password||(this.busy=!0,this.authService.signup(this.username.trim(),this.password).pipe(L(()=>this.busy=!1)).subscribe({next:()=>{this.signupSuccess=!0},error:()=>{this.signupSuccess=!1,this.loginError=!0}}))}};e.\u0275fac=function(n){return new(n||e)(h(C))},e.\u0275cmp=b({type:e,selectors:[["app-sign-up"]],decls:5,vars:2,consts:[["intro",""],[1,"text-center","mb-4"],["src","assets/logo.png","alt","logo","loading","lazy","width","180","height","180",1,"mb-4","rounded-pill"],["class","form-signin",3,"ngSubmit",4,"ngIf","ngIfElse"],[1,"form-signin",3,"ngSubmit"],[1,"form-label-group"],["type","text","id","userName","name","username","placeholder","Username","required","","autofocus","",1,"form-control",3,"ngModelChange","ngModel"],["for","userName"],["type","password","id","inputPassword","name","password","placeholder","Password","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","inputPassword"],["class","mb-3 text-danger",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","me-2",3,"disabled"],[1,"mt-3"],["routerLink","../login"],[1,"mb-3","text-danger"],[1,"h2","text-success","fw-bold"]],template:function(n,a){if(n&1&&(o(0,"div",1),M(1,"img",2),r(),d(2,ke,17,4,"form",3)(3,Te,7,0,"ng-template",null,0,A)),n&2){let c=V(4);m(2),p("ngIf",!a.signupSuccess)("ngIfElse",c)}},dependencies:[x,j,R,z,N,q,W,G,w],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.form-signin[_ngcontent-%COMP%]{width:100%;max-width:420px;padding:15px}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{height:3.125rem;padding:.75rem}.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;pointer-events:none;cursor:text;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){padding-top:1.25rem;padding-bottom:.25rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem;font-size:12px;color:#777}@supports (-ms-ime-align: auto){.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:none}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#777}}[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:linear-gradient(to bottom right,#2196f3,#03a9f4,#00bcd4,#009688)}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}"]});let i=e;return i})();var xe=(()=>{let e=class e{constructor(t){this.http=t,this.baseUrl="http://127.0.0.1:8000/games"}getAllGames(){return this.http.get(`${this.baseUrl}/`)}getGame(t){return this.http.get(`${this.baseUrl}/${t}`)}createGame(t){return this.http.post(`${this.baseUrl}/new`,t)}updateGame(t,n){return this.http.put(`${this.baseUrl}/${t}`,n)}deleteGame(t){return this.http.delete(`${this.baseUrl}/${t}`)}};e.\u0275fac=function(n){return new(n||e)(O(re))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var De=()=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Fe(i,e){if(i&1){let l=S();o(0,"div",9)(1,"div",10)(2,"span",11),g("click",function(){v(l);let n=u();return _(n.closeEventForm())}),s(3,"\xD7"),r(),o(4,"form",12),g("submit",function(n){v(l);let a=u();return _(a.addEvent(n))}),M(5,"input",13)(6,"input",14)(7,"input",15)(8,"input",16)(9,"input",17)(10,"input",18)(11,"input",19)(12,"input",20),o(13,"button",21),s(14,"Add Event"),r()()()()}}function Ne(i,e){if(i&1&&(o(0,"div",22),s(1),r()),i&2){let l=e.$implicit;m(),U(l)}}function Ge(i,e){if(i&1&&(o(0,"div"),s(1),r()),i&2){let l=u().$implicit;m(),U(l.date)}}function je(i,e){if(i&1&&(o(0,"div",26),s(1),r()),i&2){let l=e.$implicit;m(),T(" ",l.name," ")}}function Le(i,e){if(i&1&&(o(0,"div",23),d(1,Ge,2,1,"div",24)(2,je,2,1,"div",25),r()),i&2){let l=e.$implicit;m(),p("ngIf",l.date),m(),p("ngForOf",l.events)}}function Ve(i,e){if(i&1){let l=S();o(0,"div",27)(1,"div",10)(2,"span",11),g("click",function(){v(l);let n=u();return _(n.closeEventDetails())}),s(3,"\xD7"),r(),o(4,"button",1),g("click",function(){v(l);let n=u();return _(n.removeEvent(n.selectedEvent))}),s(5,"Remove"),r()()()}}var Ce=(()=>{let e=class e{constructor(t){this.gamesService=t,this.currentMonth="",this.days=[],this.showEventForm=!1,this.showEventDetails=!1,this.selectedEvent=null}ngOnInit(){this.loadMonth(new Date)}closeEventForm(){this.showEventForm=!1}closeEventDetails(){this.showEventDetails=!1}openEventForm(){this.showEventForm=!0}clearAllEvents(){console.log("Clear all events functionality is not implemented")}changeMonth(t){let n=new Date(this.currentMonth);n.setMonth(n.getMonth()+t),this.loadMonth(n)}loadMonth(t){this.currentMonth=t.toLocaleString("default",{month:"long",year:"numeric"});let n=new Date(t.getFullYear(),t.getMonth(),1).getDay(),a=new Date(t.getFullYear(),t.getMonth()+1,0).getDate();this.days=Array(a).fill(null).map((c,f)=>({date:f+1,events:[]}));for(let c=0;c<n;c++)this.days.unshift({date:null,events:[]});this.fetchEvents(n)}fetchEvents(t){this.gamesService.getAllGames().subscribe({next:n=>{n.forEach(a=>{let f=new Date(a.date).getDate()+t-1;f>=0&&f<this.days.length&&this.days[f].events.push(a)})},error:n=>console.error("Error fetching games:",n)})}addEvent(t){let n={name:t.value.eventName,location:t.value.location,homeTeam:t.value.home_team,awayTeam:t.value.away_team,date:t.value.date,time:t.value.time,played:!1,homeTeamScore:t.value.home_team_score||0,awayTeamScore:t.value.away_team_score||0};this.gamesService.createGame(n).subscribe({next:()=>{this.fetchEvents(new Date().getDay()),this.closeEventForm()},error:a=>{console.error("Error adding game:",a),this.closeEventForm()}})}removeEvent(t){t&&t._id&&this.gamesService.deleteGame(t._id).subscribe({next:()=>{this.fetchEvents(new Date().getDay()),this.closeEventDetails()},error:n=>console.error("Error removing game:",n)})}updateEvent(t){if(!this.selectedEvent||!this.selectedEvent._id)return;let n={_id:this.selectedEvent._id,name:t.value.eventName,location:t.value.location,homeTeam:t.value.home_team,awayTeam:t.value.away_team,date:t.value.date,time:t.value.time,played:this.selectedEvent.played,homeTeamScore:t.value.home_team_score||this.selectedEvent.homeTeamScore,awayTeamScore:t.value.away_team_score||this.selectedEvent.awayTeamScore};this.gamesService.updateGame(this.selectedEvent._id,n).subscribe({next:()=>{this.fetchEvents(new Date().getDay()),this.closeEventDetails()},error:a=>{console.error("Error updating game:",a),this.closeEventDetails()}})}};e.\u0275fac=function(n){return new(n||e)(h(xe))},e.\u0275cmp=b({type:e,selectors:[["app-games"]],decls:18,vars:6,consts:[[1,"title-container"],[3,"click"],["id","eventFormPopup","class","modal",4,"ngIf"],["id","monthNavigation"],["id","weekdays"],["class","weekday",4,"ngFor","ngForOf"],["id","calendar"],["class","day",4,"ngFor","ngForOf"],["id","eventDescriptionPopup","class","modal",4,"ngIf"],["id","eventFormPopup",1,"modal"],[1,"modal-content"],[1,"close",3,"click"],[3,"submit"],["type","text","id","eventName","placeholder","Event Name","required",""],["type","text","id","location","placeholder","Location","required",""],["type","text","id","home_team","placeholder","Home Team","required",""],["type","text","id","away_team","placeholder","Away Team","required",""],["type","date","id","date","name","date","required",""],["type","time","id","time","required",""],["type","number","id","home_team_score","placeholder","Home Team Score"],["type","number","id","away_team_score","placeholder","Away Team Score"],["type","submit"],[1,"weekday"],[1,"day"],[4,"ngIf"],["class","event",4,"ngFor","ngForOf"],[1,"event"],["id","eventDescriptionPopup",1,"modal"]],template:function(n,a){n&1&&(o(0,"div",0)(1,"h1"),s(2,"SportScope Calendar"),r()(),o(3,"button",1),g("click",function(){return a.openEventForm()}),s(4,"Add Event"),r(),d(5,Fe,15,0,"div",2),o(6,"div",3)(7,"button",1),g("click",function(){return a.changeMonth(-1)}),s(8,"\u276E"),r(),o(9,"span"),s(10),r(),o(11,"button",1),g("click",function(){return a.changeMonth(1)}),s(12,"\u276F"),r()(),o(13,"div",4),d(14,Ne,2,1,"div",5),r(),o(15,"div",6),d(16,Le,3,2,"div",7),r(),d(17,Ve,6,0,"div",8)),n&2&&(m(5),p("ngIf",a.showEventForm),m(5),U(a.currentMonth),m(4),p("ngForOf",ne(5,De)),m(2),p("ngForOf",a.days),m(),p("ngIf",a.showEventDetails))},dependencies:[ie,x,j,N,G],styles:["body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#f4f4f4}.title-container[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}h1[_ngcontent-%COMP%]{font-size:36px}.author[_ngcontent-%COMP%]{font-size:18px;color:#666}button[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:10px 20px;border:none;border-radius:4px;cursor:pointer;margin:10px}button[_ngcontent-%COMP%]:hover{background-color:#45a049}#eventFormPopup[_ngcontent-%COMP%], #eventDescriptionPopup[_ngcontent-%COMP%]{display:none;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#0006}.modal-content[_ngcontent-%COMP%]{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%;max-width:500px}.close[_ngcontent-%COMP%]{color:#aaa;float:right;font-size:28px;font-weight:700}.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus{color:#000;cursor:pointer}#calendar[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;padding:10px;background-color:#fff;border-radius:8px;margin:20px}.day[_ngcontent-%COMP%]{background-color:#fafafa;border:1px solid #ddd;padding:15px;cursor:pointer;text-align:center}.event[_ngcontent-%COMP%]{background-color:#add8e6;color:#fff;padding:5px;border-radius:3px;margin-top:5px}#weekdays[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,1fr);background-color:#ddd;padding:10px;font-weight:700;text-align:center}#monthNavigation[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:10px 0}#monthNavigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 20px;font-size:24px}.event[_ngcontent-%COMP%]{font-weight:700;color:#00f}.score[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]{font-size:.8em;color:green}"]});let i=e;return i})();var Ue=[{path:"",pathMatch:"full",component:he,canMatch:[Y]},{path:"login",component:_e},{path:"signup",component:be},{path:"games",component:Ce},{path:"events",loadChildren:()=>import("./chunk-KMSRNOV2.js").then(i=>i.EventsModule),canMatch:[Y]},{path:"management",loadChildren:()=>import("./chunk-LH3DMXAD.js").then(i=>i.ManagementModule),canMatch:[Y]},{path:"**",redirectTo:""}],ye=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=k({type:e}),e.\u0275inj=P({imports:[Q.forRoot(Ue),Q]});let i=e;return i})();function Ae(i,e){if(i&1){let l=S();o(0,"button",13),g("click",function(){v(l);let n=u();return _(n.logout())}),s(1," Logout "),r()}}var Me=(()=>{let e=class e{constructor(t){this.authService=t,this.username="",this.username=t.user.username}ngOnInit(){}logout(){this.authService.logout()}};e.\u0275fac=function(n){return new(n||e)(h(C))},e.\u0275cmp=b({type:e,selectors:[["app-root"]],decls:21,vars:1,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark","px-3"],["routerLink","",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto"],["routerLinkActive","active",1,"nav-item"],["routerLink","events",1,"nav-link"],["routerLink","admin",1,"nav-link"],["routerLink","games",1,"nav-link"],[1,"form-inline"],["class","btn btn-outline-success my-2 my-sm-0","type","button",3,"click",4,"ngIf"],[1,"d-flex","flex-column","flex-grow-1","h-100","w-100"],["type","button",1,"btn","btn-outline-success","my-2","my-sm-0",3,"click"]],template:function(n,a){n&1&&(o(0,"header")(1,"nav",0)(2,"a",1),s(3,"SportsScope"),r(),o(4,"button",2),M(5,"span",3),r(),o(6,"div",4)(7,"ul",5)(8,"li",6)(9,"a",7),s(10,"Teams"),r()(),o(11,"li",6)(12,"a",8),s(13,"Admin"),r()(),o(14,"li",6)(15,"a",9),s(16,"Games"),r()()(),o(17,"div",10),d(18,Ae,2,0,"button",11),r()()()(),o(19,"main",12),M(20,"router-outlet"),r()),n&2&&(m(18),p("ngIf",a.username))},dependencies:[x,pe,w,de],encapsulation:2});let i=e;return i})();var we=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=k({type:e,bootstrap:[Me]}),e.\u0275inj=P({imports:[le,me,ae,fe,ye]});let i=e;return i})();se().bootstrapModule(we).catch(i=>console.error(i));
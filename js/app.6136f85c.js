(function(t){function e(e){for(var i,l,r=e[0],o=e[1],c=e[2],m=0,u=[];m<r.length;m++)l=r[m],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&u.push(s[l][0]),s[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},s={app:0},n=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0061":function(t,e,a){"use strict";var i=a("d17f"),s=a.n(i);s.a},"1b7d":function(t,e,a){t.exports=a.p+"img/sc_logov2_colored.84414cb8.png"},"2c42":function(t,e,a){},"365d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("HeaderComponent")],1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header"),a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",class:{elevated:t.scrollPosition>0},attrs:{id:"sideNav"}},[t._m(0),a("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:function(e){return t.toggleNavbar()}}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:" navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav",class:{"menu-active":t.show,menu:!t.show},attrs:{id:"mainMenu"}},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/"}},[t._v("About")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/timeline"}},[t._v("Experience")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/skills"}},[t._v("Skills")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/interests"}},[t._v("Interests")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/awards"}},[t._v("Awards")])],1)])])])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar-brand js-scroll-trigger"},[i("span",{staticClass:"d-block d-lg-none"},[t._v("SC Kim")]),i("span",{staticClass:"d-none d-lg-block"},[i("a",{attrs:{href:"/"}},[i("img",{staticClass:"img-fluid mx-auto mb-2",attrs:{id:"logo-bg",src:a("aeba"),width:"140",alt:""}})])])])}],o={name:"HeaderComponent",props:{msg:String},data:function(){return{show:!1,scrollPosition:null}},mounted:function(){window.addEventListener("scroll",this.updateScroll)},methods:{toggleNavbar:function(){this.show=!this.show},updateScroll:function(){this.scrollPosition=window.scrollY}},watch:{$route:function(t,e){t!==e&&(this.show=!1)}}},c=o,d=(a("a2f3"),a("2877")),m=Object(d["a"])(c,l,r,!1,null,"2816a01e",null),u=m.exports,f=(a("365d"),a("cd3a"),a("94b2"),{components:{HeaderComponent:u}}),v=f,p=(a("abb7"),Object(d["a"])(v,s,n,!1,null,"0e4b635f",null)),g=p.exports,b=a("9483");Object(b["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("7db0"),a("4160"),a("a630"),a("d81d"),a("fb6a"),a("b64b"),a("3ca3"),a("159b");var C=a("8c4f"),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid p-0"},[i("section",{staticClass:"resume-section p-3 p-lg-5 d-flex align-items-center",attrs:{id:"about"}},[i("div",{staticClass:"w-100"},[i("img",{staticClass:"d-block d-sm-none",attrs:{id:"logo-xs",src:a("1b7d"),alt:""}}),i("h1",{staticClass:"mb-8"},[t._v("Hello from "),i("span",{staticClass:"text-primary"},[t._v("SC Kim")])]),i("div",{staticClass:"subheading mb-5"},[t._v("Malaysia, Kuala Lumpur· "),i("a",{attrs:{href:"mailto:saychunkim@gmail.com"}},[t._v("saychunkim@gmail.com")])]),i("p",{staticClass:"lead mb-5"},[t._v(" 'Bit' Sense of Design along Programming, Full Stack from Front End Development, Learning necessary ingredients. Love Learning New Technologies esp from Open Source Communities ")]),i("div",{staticClass:"social-icons"},[i("a",{attrs:{href:"https://www.linkedin.com/in/say-chun-kim-99607398/",rel:"noopener noreferrer",target:"_blank"}},[i("i",{staticClass:"fab fa-linkedin-in"})]),i("a",{attrs:{href:"https://github.com/SayChunKim",rel:"noopener noreferrer",target:"_blank"}},[i("i",{staticClass:"fab fa-github"})]),i("a",{attrs:{href:"https://twitter.com/saychun_kim",rel:"noopener noreferrer",target:"_blank"}},[i("i",{staticClass:"fab fa-twitter"})]),i("a",{attrs:{href:"https://www.facebook.com/johnny.k.sc",rel:"noopener noreferrer",target:"_blank"}},[i("i",{staticClass:"fab fa-facebook-f"})])])])]),i("hr",{staticClass:"m-0"})])}],w={name:"about"},k=w,y=(a("beb3"),Object(d["a"])(k,h,_,!1,null,"cc29abd8",null)),S=y.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"resume-section p-3 p-lg-5 d-flex align-items-center",attrs:{id:"skills"}},[a("div",{staticClass:"w-100"},[a("h2",{staticClass:"mb-5"},[t._v("Skills")]),a("div",{staticClass:"subheading mb-3"},[t._v("Front-End")]),a("ul",{staticClass:"list-inline dev-icons"},[a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-html5"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-css3-alt"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-js-square"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-vuejs"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-sass"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-less"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-grunt"})])]),a("div",{staticClass:"subheading mb-3"},[t._v("Back-End")]),a("ul",{staticClass:"list-inline dev-icons"},[a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-npm"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-node-js"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-laravel"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-php"})]),a("li",{staticClass:"list-inline-item"},[a("img",{staticClass:"icon",attrs:{src:"https://img.icons8.com/color/480/firebase.png",width:"50px",alt:"firebase"}})])]),a("div",{staticClass:"subheading mb-3"},[t._v("Frameworks")]),a("ul",{staticClass:"list-inline dev-icons"},[a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-wordpress"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-opencart"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-grav"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-android"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-apple"})])]),a("div",{staticClass:"subheading mb-3"},[t._v("Workflow")]),a("ul",{staticClass:"fa-ul mb-0"},[a("li",[a("i",{staticClass:"fa-li fa fa-check"}),t._v(" Mobile-First, Responsive Design ")]),a("li",[a("i",{staticClass:"fa-li fa fa-check"}),t._v(" Cross Browser Testing & Debugging ")]),a("li",[a("i",{staticClass:"fa-li fa fa-check"}),t._v(" Cross Functional Teams ")]),a("li",[a("i",{staticClass:"fa-li fa fa-check"}),t._v(" Agile Development & Scrum ")])])])])}],A={name:"skills"},E=A,O=(a("c00d"),Object(d["a"])(E,x,j,!1,null,"4f8fc6fd",null)),T=O.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"resume-section p-3 p-lg-5\n d-flex align-items-center",attrs:{id:"interests"}},[a("div",{staticClass:"w-100"},[a("h2",{staticClass:"mb-5"},[t._v("Interests")]),a("p",[t._v("Apart from being a mobile & web developer, I enjoy most of my time being indoors because 365 days of summer. Travel almost every continent in world, and Mingle around developer communities, is part of my enjoyment and self-improvement. ")]),a("p",[t._v(" When indoors (like very much), I follow a number of sci-fi and fantasy genre movies and decent anime shows, "),a("strike",[t._v(" I am the one who cooks")]),t._v("I am like to learn cooking, while I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.")],1),a("p",[t._v("Music? Hardbass for life")])])])},G=[],K={name:"interests"},M=K,P=Object(d["a"])(M,D,G,!1,null,null,null),F=P.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"resume-section p-3 p-lg-5 d-flex align-items-center",attrs:{id:"awards"}},[a("div",{staticClass:"w-100"},[a("h2",{staticClass:"mb-5"},[t._v("Awards & Certifications")]),a("ul",{staticClass:"fa-ul mb-0"},[a("li",[a("i",{staticClass:"fa-li fa fa-certificate text-warning"}),t._v(" Google Certified Educator GAfE (2015) ")]),a("li",[a("i",{staticClass:"fa-li fa fa-certificate text-warning"}),t._v(" Developing Android Apps (U853) - Udacity + Google ")]),a("li",[a("i",{staticClass:"fa-li fa fa-certificate text-warning"}),t._v(" UKM Honorarium Award ")]),a("li",[a("i",{staticClass:"fa-li fa fa-certificate text-warning"}),t._v(" Google Developers Group (GDG) Android Study Jam - Android for Beginners ")]),a("li",[a("i",{staticClass:"fa-li fa fa-certificate text-warning"}),t._v(" Google Developers Group (GDG) Android Study Jam - Android Fundamentals ")]),a("li",[a("i",{staticClass:"fa-li fa fa-certificate text-warning"}),t._v(" UKM Developing Android with Firebase ")])])])])}],L={name:"award"},H=L,N=Object(d["a"])(H,I,$,!1,null,null,null),B=N.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{attrs:{id:"timeline"}},[a("h1",[t._v("Experience Timeline")]),a("p",{staticClass:"leader"},[t._v("Going Beyond Usual Resume Style")]),a("div",{staticClass:"demo-card-wrapper"},[a("div",{staticClass:"demo-card demo-card--step1"},[a("div",{staticClass:"head"},[a("div",{staticClass:"number-box"},[a("span",[t._v("01")])]),a("h2",[a("span",{staticClass:"small"},[t._v("Android Recognized Contributor")]),t._v(" XDA-Developers ")])]),a("div",{staticClass:"body"},[a("p",[t._v("Explore, help communities in Android Custom Development, such as ROM, frameworks and OS libraries ")]),a("img",{attrs:{src:"/img/timeline/xda_1.jpg",alt:"XDA Recognized Contributor"}})])]),a("div",{staticClass:"demo-card demo-card--step2"},[a("div",{staticClass:"head"},[a("div",{staticClass:"number-box"},[a("span",[t._v("02")])]),a("h2",[a("span",{staticClass:"small"},[t._v("Intern")]),t._v(" Fusionex International ")])]),a("div",{staticClass:"body"},[a("p",[t._v("Mobile Development Team. Involved in SunwayPals Loyalty Programme (Android & iOS)")]),a("img",{attrs:{src:"/img/timeline/fusionex_1.jpg",alt:"Fusionex Intern"}})])]),a("div",{staticClass:"demo-card demo-card--step3"},[a("div",{staticClass:"head"},[a("div",{staticClass:"number-box"},[a("span",[t._v("03")])]),a("h2",[a("span",{staticClass:"small"},[t._v("Google Student Ambassador (MY)")]),t._v(" Google Student Ambassador ")])]),a("div",{staticClass:"body"},[a("p",[t._v("An interviewed role that acts as liaison between Universities and Google. Learnt skills of event organizing and technical along the period.")]),a("img",{attrs:{src:"/img/timeline/gsa_3.jpg",alt:"GSA"}})])]),a("div",{staticClass:"demo-card demo-card--step4"},[a("div",{staticClass:"head"},[a("div",{staticClass:"number-box"},[a("span",[t._v("04")])]),a("h2",[a("span",{staticClass:"small"},[t._v("Co-Organizer")]),t._v(" Google Developers Group KL ")])]),a("div",{staticClass:"body"},[a("p",[t._v("Event Organizer, Asset Designer. And Technical Speakers for Firebase and PWA")]),a("img",{attrs:{src:"/img/timeline/gdg_4.jpg",alt:"GDG Kuala Lumpur"}})])]),a("div",{staticClass:"demo-card demo-card--step5"},[a("div",{staticClass:"head"},[a("div",{staticClass:"number-box"},[a("span",[t._v("05")])]),a("h2",[a("span",{staticClass:"small"},[t._v("Web/Mobile Freelance Dev")]),t._v(" Multiple companies ")])]),a("div",{staticClass:"body"},[a("p",[t._v("Travelling around, hired for development projects, self-enhancement hacking journey.")]),a("img",{attrs:{src:"/img/timeline/self_4.jpg",alt:"Freelance Slacking"}})])]),a("div",{staticClass:"demo-card demo-card--step6"},[a("div",{staticClass:"head"},[a("div",{staticClass:"number-box"},[a("span",[t._v("06")])]),a("h2",[a("span",{staticClass:"small"},[t._v("Tech Lead (Current)")]),t._v(" Havenice Sdn. Bhd ")])]),a("div",{staticClass:"body"},[a("p",[t._v("Cofounder for Digital Solutions and provide optimal efficiency according client's needs. Have a Nice collaboration is our ideal concept to get things done.")]),a("img",{attrs:{src:"/img/timeline/havenice_6.jpg",alt:"Havenice"}})])])]),a("h5",{staticClass:"leader"},[t._v("And here we are !")])])])}],z={name:"timeline"},R=z,J=(a("0061"),Object(d["a"])(R,W,U,!1,null,"7323fb60",null)),q=J.exports;i["a"].use(C["a"]);var X=[{path:"/",name:"About",component:S,meta:{title:"Welcome / SC Kim",metaTags:[{name:"description",content:"Welcome to SC Kim Portfolio"},{property:"og:description",content:"Welcome to SC Kim Portfolio"}]}},{path:"/timeline",name:"Timeline",component:q,meta:{title:"Timeline / SC Kim",metaTags:[{name:"description",content:"Experience Timeline | SC Kim"},{property:"og:description",content:"Experience Timeline | SC Kim"}]}},{path:"/skills",name:"Skills",component:T,meta:{title:"Skills / SC Kim",metaTags:[{name:"description",content:"Skills | SC Kim"},{property:"og:description",content:"Technical Skills | SC Kim"}]}},{path:"/interests",name:"Interests",component:F,meta:{title:"Interest / SC Kim",metaTags:[{name:"description",content:"Interest | SC Kim"},{property:"og:description",content:"Interest | SC Kim"}]}},{path:"/awards",name:"awards",component:B}],Y=new C["a"]({mode:"history",routes:X});Y.beforeEach((function(t,e,a){var i=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),s=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags})),n=e.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(console.log(n),i&&(document.title=i.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!s)return a();s.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(a){e.setAttribute(a,t[a])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),a()}));var Q=Y;new i["a"]({router:Q,render:function(t){return t(g)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"688d":function(t,e,a){},"94b2":function(t,e,a){},a172:function(t,e,a){},a2f3:function(t,e,a){"use strict";var i=a("688d"),s=a.n(i);s.a},abb7:function(t,e,a){"use strict";var i=a("afbd"),s=a.n(i);s.a},aeba:function(t,e,a){t.exports=a.p+"img/sc_logov2.bd3ed540.png"},afbd:function(t,e,a){},beb3:function(t,e,a){"use strict";var i=a("2c42"),s=a.n(i);s.a},c00d:function(t,e,a){"use strict";var i=a("a172"),s=a.n(i);s.a},cd3a:function(t,e,a){},d17f:function(t,e,a){}});
//# sourceMappingURL=app.6136f85c.js.map
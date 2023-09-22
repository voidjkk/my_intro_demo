(function(){"use strict";var e={279:function(e,n,t){var i=t(963),o=t(252);function l(e,n,t,l,a,r){var s=(0,o.up)("PageSwitchAnimation"),c=(0,o.up)("NavBar"),u=(0,o.up)("router-view"),d=(0,o.up)("PageLoaderAnimation"),v=(0,o.up)("SimpleFooter");return(0,o.wg)(),(0,o.iD)(o.HY,null,[l.PlayOpeningAnima?((0,o.wg)(),(0,o.j4)(s,{key:0})):(0,o.kq)("",!0),(0,o.Wm)(c),(0,o.Wm)(u),(0,o.Wm)(i.uT,{name:"Loading_FadeOut"},{default:(0,o.w5)((function(){return[l.isShowAnimation?((0,o.wg)(),(0,o.j4)(d,{key:0,onAnimationIsOver:n[0]||(n[0]=function(e){return l.isShowAnimation=!1})})):(0,o.kq)("",!0)]})),_:1}),(0,o.Wm)(v)],64)}var a=t(577),r={class:"LoadingBG"},s={class:"LoadingScale"},c={class:"LoadingAnimation"},u=(0,o.uE)('<div class="cube-1" style="top:0;left:0;" data-v-7856e0ce></div><div class="Shadow-1" style="top:20px;left:0;" data-v-7856e0ce></div><div class="cube-2" style="top:25px;left:0;" data-v-7856e0ce></div><div class="Shadow-2" style="top:45px;left:0;" data-v-7856e0ce></div><div class="cube-3" style="top:50px;left:0;" data-v-7856e0ce></div><div class="Shadow-3" style="top:70px;left:0;" data-v-7856e0ce></div><div class="cube-4" style="top:75px;left:0;" data-v-7856e0ce></div><div class="Shadow-4" style="top:95px;left:0;" data-v-7856e0ce></div><div class="cube-5" style="top:75px;left:25px;" data-v-7856e0ce></div><div class="Shadow-5" style="top:95px;left:25px;" data-v-7856e0ce></div><div class="cube-6" style="top:75px;left:50px;" data-v-7856e0ce></div><div class="Shadow-6" style="top:95px;left:50px;" data-v-7856e0ce></div>',12);function d(e,n,t,i,l,d){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",s,[(0,o._)("div",c,[u,(0,o._)("p",null,"Loading ... "+(0,a.zw)(e.Percent)+"%",1)])])])}var v=t(262),p=(0,o.aZ)({name:"PageLoaderAnimation",setup:function(e,n){var t=(0,v.iH)(0),i=30,l=function(){return n.emit("AnimationIsOver",!1)};return(0,o.bv)((function(){document.body.style.overflowY="hidden"})),(0,o.Jd)((function(){document.body.style.overflowY="auto"})),(0,o.m0)((function(){t.value<=100?setTimeout((function(){t.value+=1}),i):l()})),{Percent:t}}}),g=t(744);const f=(0,g.Z)(p,[["render",d],["__scopeId","data-v-7856e0ce"]]);var h=f,m={class:"AnimaScale"};function w(e,n,t,i,l,r){return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",{style:(0,a.j5)(e.ClockWipeEffect),class:"PageSwitchAnimation"},null,4)])}var _=(0,o.aZ)({name:"PageSwitchAnimation",setup:function(){var e=(0,v.iH)(0),n=function(){setInterval((function(){e.value<360&&(e.value+=10)}),25)},t=(0,o.Fl)((function(){return"background:\n      conic-gradient(  \n      transparent 0deg, rgb(5,217,232) ".concat(e.value,"deg ,\n      rgb(1,1,43) calc( ").concat(e.value,"deg + 10deg),\n      rgb(1,1,43) 360deg  );")}));return(0,o.bv)((function(){document.body.style.overflowY="hidden",n()})),(0,o.Jd)((function(){document.body.style.overflowY="auto"})),{ClockWipeEffect:t,ClockWipeRate:n}}});const b=(0,g.Z)(_,[["render",w],["__scopeId","data-v-689e5e00"]]);var y=b,k={class:"NavScale"},C=(0,o._)("div",{class:"CornerDeco1_Btn"},null,-1),x=(0,o._)("div",{class:"CornerDeco2_Btn"},null,-1),S={class:"InnerButton"},A={class:"material-symbols-outlined"},T={class:"InnerButton MusicPlayer"},B=(0,o._)("div",{class:"CornerDeco1_Btn"},null,-1),M=(0,o._)("div",{class:"CornerDeco2_Btn"},null,-1);function D(e,n,t,i,l,r){var s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",{class:(0,a.C_)({FlickingInAnima:e.isShowNavBar,FlickingOutAnima:!e.isShowNavBar})},[(0,o._)("div",k,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.NavBtnData,(function(e){return(0,o.wg)(),(0,o.j4)(s,{key:e.path,to:e.path},{default:(0,o.w5)((function(){return[C,x,(0,o._)("div",S,[(0,o._)("span",A,(0,a.zw)(e.Icon),1),(0,o._)("p",null,(0,a.zw)(e.name),1)])]})),_:2},1032,["to"])})),128))]),(0,o._)("a",{onClick:n[0]||(n[0]=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.BGM_Toggle&&e.BGM_Toggle.apply(e,n)})},[(0,o._)("div",T,[B,M,(0,o._)("div",{class:(0,a.C_)(["material-symbols-outlined",{Hiding:!e.isPlayBGM}])},"volume_up",2),(0,o._)("div",{class:(0,a.C_)(["material-symbols-outlined",{Hiding:e.isPlayBGM}])},"pause",2)])])],2)}var P=t(582),I=t(201),L=t(907),N=(0,L.MT)({state:function(){return{count:1,ShowSwitchingAnimation:!1}},getters:{},mutations:{PlayingAnimation:function(e,n){e.ShowSwitchingAnimation=n}},actions:{},modules:{}}),G=(0,o._)("div",null,null,-1);function j(e,n,t,i,l,a){var r=(0,o.up)("HomeTitle"),s=(0,o.up)("MyInfo");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r),(0,o.Wm)(s),G],64)}var E={class:"TitleScale",ref:"TitleScale"},H={key:0,class:"TypingText"},F=(0,o._)("div",{class:"TypingLine"},null,-1),W={class:"GuideArrow"},R=(0,o._)("svg",{width:"80px",height:"80px",viewBox:"-160 -160 800 800",preserveAspectRatio:"xMidYMid meet"},[(0,o._)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M245.015,490.015L490.03,234.132l-69.802-69.773L490.03,91.46L398.548,0.015L245.015,160.352L91.482,0.015L0,91.46  l69.802,72.899L0,234.132L245.015,490.015z M42.904,91.924l48.099-48.076l154.012,160.831L399.027,43.847l48.099,48.076  L245.015,303.009L42.904,91.924z M91.003,186.52l154.012,160.846L399.027,186.52l48.099,48.076L245.015,445.674L42.904,234.596  L91.003,186.52z"})],-1),Y=[R];function O(e,n,t,i,l,a){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",E,[e.isPlayingAnimation?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",H,"Welcome...")),F],512),(0,o._)("div",W,[(0,o._)("div",{onClick:n[0]||(n[0]=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.GoToContent&&e.GoToContent.apply(e,n)})},Y)])],64)}var Z=(0,o.aZ)({name:"HomeTitle",setup:function(){var e=(0,o.Fl)((function(){return N.state.ShowSwitchingAnimation})),n=(0,v.iH)(),t=function(){var e;window.scrollTo({top:null===(e=n.value)||void 0===e?void 0:e.clientHeight,behavior:"smooth"})};return{GoToContent:t,TitleScale:n,isPlayingAnimation:e}}});const V=(0,g.Z)(Z,[["render",O]]);var q=V,z={class:"Section1Scale"},U={class:"Section1"},J=(0,o._)("div",{class:"CornerDeco1"},null,-1),K=(0,o._)("div",{class:"CornerDeco2"},null,-1),Q={class:"InfoInner"},X=(0,o._)("div",{class:"ArticleText"},"Press here to know more",-1),$={key:0,id:"InfoContent"},ee={class:"InfoContentScale"},ne=["onClick"],te={class:"VerticalArr"},ie={class:"TitleImg"},oe={key:0,class:"ActivedContent"},le={key:0},ae={class:"BriefIntroScale"},re={class:"VerticalArr"},se=(0,o._)("div",{class:"CornerDeco1"},null,-1),ce=(0,o._)("div",{class:"CornerDeco2"},null,-1),ue={class:"TitleImg"},de=(0,o._)("div",{class:"BriefIntro"},[(0,o._)("div",{class:"CornerDeco1"}),(0,o._)("div",{class:"CornerDeco2"}),(0,o._)("ul",null,[(0,o._)("li",null,"I am a software engineer. My goal is being a full-stack developer."),(0,o._)("li",null,"Born in 1990s, Living in Taipei."),(0,o._)("li",null,"Stay curious when learning new things, Embracing new perspectives. ")])],-1),ve=(0,o.uE)('<div class="DecoLine"></div><div class="ArticleScale"><label><div class="TitleWithBar" style="--ProgressBarWidth:95%;"></div><div class="TitleBG"><h3>Experience</h3></div></label><ul class="TimeLine"><li><div class="TL_NodeDeco"></div><div class="LineSpace"></div><div class="ContentSpace"><div class="CornerDeco1"></div><div class="CornerDeco2"></div><h4> ~2019 graduated from YZU</h4><p>I earned a bachelor’s degree in CEMS ( Chemical Engineering &amp; Materials Science ) at Yuan Ze University. </p></div></li><li><div class="TL_NodeDeco"></div><div class="LineSpace"></div><div class="ContentSpace"><div class="CornerDeco1"></div><div class="CornerDeco2"></div><h4>2020 ~ 2022 Cathay United Bank </h4><p> I have about two years of work experience in full-stack developer. <br>In addition to maintaining the core software for the backend of a banking system on Linux, I solve problems related to business logic for salespeople, and query database using SQL. </p></div></li><li><div class="TL_NodeDeco"></div><div class="LineSpace"></div><div class="ContentSpace"><div class="CornerDeco1"></div><div class="CornerDeco2"></div><h4>2023 ~ unknown</h4><p>Keeping learning</p></div></li></ul></div>',2),pe={key:1},ge={class:"NormalArr"},fe=(0,o._)("div",{class:"CornerDeco1"},null,-1),he=(0,o._)("div",{class:"CornerDeco2"},null,-1),me={class:"TitleImg"},we=(0,o.uE)('<div class="ArticleScale"><label><div class="TitleWithBar" style="--ProgressBarWidth:83%;"></div><div class="TitleBG"><h3>Front-end</h3></div></label><ul><li>Experience with Javascript frameworks : Vue.js</li><li>Experience with Vuex</li><li>Experience with integrating the YouTube API by using Axios</li><li>Use jQuery to create dynamic effects</li><li>Could design Infinite Scrolling</li><li>Design web layout with SCSS</li><li>Could make responsive web layout</li></ul></div><div class="ArticleScale"><label><div class="TitleWithBar" style="--ProgressBarWidth:63%;"></div><div class="TitleBG"><h3>Back-end</h3></div></label><ul><li>Have experience in querying large databases</li><li>Optimizing query performance</li><li>Experience with reading shell script</li><li>Could use basic Linux command</li></ul></div><div class="ArticleScale"><label><div class="TitleWithBar" style="--ProgressBarWidth:71%;"></div><div class="TitleBG"><h3>Language</h3></div></label><ul><li>Chinese : native speaker</li><li>English : intermediate</li><li>Japanese : basic</li></ul></div><div class="ArticleScale"><label><div class="TitleWithBar" style="--ProgressBarWidth:51%;"></div><div class="TitleBG"><h3>Other</h3></div></label><ul><li>Have experience in git version control</li><li>Understanding how to use branch / merge command in git</li></ul></div>',4),_e={key:2},be={class:"NormalArr"},ye=(0,o._)("div",{class:"CornerDeco1"},null,-1),ke=(0,o._)("div",{class:"CornerDeco2"},null,-1),Ce={class:"TitleImg"},xe=(0,o.uE)('<div class="ArticleScale"><label><div class="TitleWithBar" style="--ProgressBarWidth:55%;"></div><div class="TitleBG"><h3>Passive</h3></div></label><ul><li>Listening to music</li><li>Playing video games</li><li>Watching animation</li></ul></div><div class="ArticleScale"><label><div class="TitleWithBar" style="--ProgressBarWidth:70%;"></div><div class="TitleBG"><h3>Active</h3></div></label><ul><li>Playing badminton</li><li>Developing skills</li><li>Tasting ramen</li></ul></div><span style="height:300px;"></span>',3),Se=(0,o._)("span",{class:"material-symbols-outlined"},"undo",-1),Ae=[Se],Te=(0,o._)("div",null,null,-1),Be=(0,o._)("div",null,null,-1),Me=(0,o._)("p",null,"CLOSE",-1),De=[Te,Be,Me],Pe={class:"ProgressNum"},Ie=(0,o.uE)('<div class="RotatingSVG_Slow"><svg width="200px" height="200px" viewBox="0px 0px 200 200" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M 147.5 182.27 A 95 95, 0 , 1 1 , 52.5 17.72" stroke="rgb(5,217,232)" stroke-width="2" fill="none" stroke-linejoin="round"></path></svg></div><div class="RotatingSVG_Mid"><svg width="200px" height="200px" viewBox="0px 0px 200 200" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M 180.54 146.5 A 93 93, 0 , 1 0 , 19.46 53.5" stroke="rgb(5,217,232)" stroke-width="2" fill="none" stroke-linejoin="round"></path></svg></div><div class="RotatingSVG_Fast"><svg width="200px" height="200px" viewBox="0px 0px 200 200" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M 183.71 114.76 A 85 85, 0 , 0 0 , 183.71 85.24" stroke="rgb(5,217,232)" stroke-width="5" fill="none" stroke-linejoin="round"></path><path xmlns="http://www.w3.org/2000/svg" d="M 16.29 85.23 A 85 85, 0 , 0 1 , 57.5 26.39" stroke="rgb(5,217,232)" stroke-width="5" fill="none" stroke-linejoin="round"></path></svg></div><div class="RotatingSVG_Mid"><svg width="200px" height="200px" viewBox="0px 0px 200 200" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M 139 167.55 A 78 78, 0 , 0 0 , 139 32.45" stroke="rgb(5,217,232)" stroke-width="5" fill="none" stroke-linejoin="round"></path></svg></div><div class="RotatingSVG_Mid"><svg width="200px" height="200px" viewBox="0px 0px 200 200" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M 165.78 123.94 A 70 70, 0 , 0 0 , 165.78 76.06" stroke="rgb(5,217,232)" stroke-width="3" fill="none" stroke-linejoin="round"></path><path xmlns="http://www.w3.org/2000/svg" d="M 34.22 76.06 A 70 70, 0 , 0 1 , 135 39.38" stroke="rgb(5,217,232)" stroke-width="3" fill="none" stroke-linejoin="round"></path><path xmlns="http://www.w3.org/2000/svg" d="M 157.34 59.85 A 70 70, 0 , 0 0 , 145 46.38" stroke="rgb(5,217,232)" stroke-width="3" fill="none" stroke-linejoin="round"></path></svg></div><div class="RotatingSVG_Fast"><svg width="200px" height="200px" viewBox="0px 0px 200 200" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M 77.77 38.92 A 65 65, 0 , 0 0  , 50.21 58.21" stroke="rgb(5,217,232)" stroke-width="2" fill="none" stroke-linejoin="round"></path><path xmlns="http://www.w3.org/2000/svg" d="M 161.08 122.23 A 65 65, 0 , 0 1  , 132.5 156.3" stroke="rgb(5,217,232)" stroke-width="2" fill="none" stroke-linejoin="round"></path><path xmlns="http://www.w3.org/2000/svg" d="M 111.29 164.01 A 65 65, 0 , 0 1  , 58.22 149.8" stroke="rgb(5,217,232)" stroke-width="2" fill="none" stroke-linejoin="round"></path></svg></div><div class="RotatingSVG_Slow"><svg width="200px" height="200px" viewBox="0px 0px 200 200" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M 79.48 156.38 A 60 60, 0 , 0 0 , 142.43 57.57" stroke="rgb(5,217,232)" stroke-width="4" fill="none" stroke-linejoin="round"></path></svg></div><div class="RotatingSVG_Mid"><svg width="200px" height="200px" viewBox="0px 0px 200 200" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M 81.19 151.68 A 55 55, 0 , 0 1 , 118.81 48.31" stroke="rgb(5,217,232)" stroke-width="2" fill="none" stroke-linejoin="round"></path></svg></div><div class="RotatingSVG_Fast"><svg width="200px" height="200px" viewBox="0px 0px 200 200" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M 90.97 48.79 A 52 52, 0 , 0 1 , 136.77 136.77" stroke="rgb(5,217,232)" stroke-width="2" fill="none" stroke-linejoin="round"></path></svg></div>',9),Le=(0,o._)("div",{class:"Section2"},null,-1);function Ne(e,n,t,l,r,s){var c=(0,o.up)("SectionTitleFrame");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",z,[(0,o._)("div",U,[J,K,(0,o._)("div",Q,[(0,o.Wm)(c,{title_name:"Brief"}),X,e.isShowInfo?((0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("ul",ee,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.Cols,(function(t){return(0,o.wg)(),(0,o.iD)(o.HY,{key:t.id},[(0,o._)("li",{onClick:function(n){return e.PassColNum(t.ColNumber)},class:(0,a.C_)((0,P.pi)((0,P.pi)({},e.GetHoverStyle(t.ColNumber)),{ColStyle:e.CheckingNowColNum(-1)}))},[(0,o.wy)((0,o._)("div",null,[(0,o._)("div",te,[(0,o._)("div",ie,[(0,o._)("i",{class:(0,a.C_)(t.IconData)},null,2)]),(0,o._)("h2",null,(0,a.zw)(t.ColTitle),1)])],512),[[i.F8,e.CheckingNowColNum(-1)]])],10,ne),e.CheckingNowColNum(t.ColNumber)?((0,o.wg)(),(0,o.iD)("div",oe,[e.CheckingNowColNum(1)?((0,o.wg)(),(0,o.iD)("article",le,[(0,o._)("div",ae,[(0,o._)("div",re,[se,ce,(0,o._)("div",ue,[(0,o._)("i",{class:(0,a.C_)(t.IconData)},null,2)]),(0,o._)("h2",null,(0,a.zw)(t.ColTitle),1)]),de]),ve])):(0,o.kq)("",!0),e.CheckingNowColNum(2)?((0,o.wg)(),(0,o.iD)("article",pe,[(0,o._)("div",ge,[fe,he,(0,o._)("div",me,[(0,o._)("i",{class:(0,a.C_)(t.IconData)},null,2)]),(0,o._)("h2",null,(0,a.zw)(t.ColTitle),1)]),we])):(0,o.kq)("",!0),e.CheckingNowColNum(3)?((0,o.wg)(),(0,o.iD)("article",_e,[(0,o._)("div",be,[ye,ke,(0,o._)("div",Ce,[(0,o._)("i",{class:(0,a.C_)(t.IconData)},null,2)]),(0,o._)("h2",null,(0,a.zw)(t.ColTitle),1)]),xe])):(0,o.kq)("",!0),(0,o._)("div",{class:"ReturnBtn",onClick:n[0]||(n[0]=(0,i.iM)((function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.Goback&&e.Goback.apply(e,n)}),["stop"]))},Ae)])):(0,o.kq)("",!0)],64)})),128))]),(0,o._)("div",{onClick:n[1]||(n[1]=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.CancelWindow&&e.CancelWindow.apply(e,n)}),class:"CloseBtn"},De)])):(0,o.kq)("",!0),(0,o._)("div",{class:"SVGFrame",style:(0,a.j5)(e.PressEffect),onMousedown:n[2]||(n[2]=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.CountProgress&&e.CountProgress.apply(e,n)}),onMouseup:n[3]||(n[3]=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.ResetProgress&&e.ResetProgress.apply(e,n)}),onMouseleave:n[4]||(n[4]=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.ResetProgress&&e.ResetProgress.apply(e,n)}),onContextmenu:n[5]||(n[5]=(0,i.iM)((function(){}),["prevent"]))},[(0,o._)("div",Pe,(0,a.zw)(e.PressPercent)+" %",1),Ie],36)])])]),Le],64)}var Ge=t(217),je=(0,o.aZ)({name:"MyInfo",components:{SectionTitleFrame:Ge.Z},setup:function(){var e,n=[{id:"InfoColumn_1",ColTitle:"About",ColNumber:1,IconData:"\tfas fa-user-circle"},{id:"InfoColumn_2",ColTitle:"Skills",ColNumber:2,IconData:"\tfas fa-tools"},{id:"InfoColumn_3",ColTitle:"Hobbies",ColNumber:3,IconData:"\t\tfab fa-xbox"}],t=function(e){return"".concat(e.IconData)},i=(0,v.iH)(0),l=(0,v.iH)(0),a=(0,v.iH)(!1),r=function(n){2!=n.button&&i.value<100&&(e=setInterval((function(){var n=s();i.value+=n,l.value+=n,i.value>=100&&(clearInterval(e),i.value=100,l.value=100,a.value=!0,console.log("open"))}),70))},s=function(){return Math.floor(10*Math.random())},c=function(){a.value=!1},u=function(){i.value>=0&&(clearInterval(e),i.value=0,l.value=0,console.log("歸零"))},d=(0,o.Fl)((function(){return"background:radial-gradient(ellipse at center,\n          rgba(255,255,255,1) 0%  ,\n          rgba(255,255,255,1)   ,\n          rgba(255,255,255,0) ".concat(l.value,"% );")})),p=(0,v.iH)(!1),g=function(){p.value=!0},f=function(){h.value=-1},h=(0,v.iH)(-1),m=function(e){return h.value===e},w=function(e){h.value=e},_=function(e){var n,t="ColHoverStyle_".concat(e);return n={},n[t]=m(-1),n};return(0,o.m0)((function(){console.log(h.value)})),{PressPercent:i,CountProgress:r,ResetProgress:u,timer:e,isShowInfo:a,CancelWindow:c,PressEffect:d,isActive:p,OpenContent:g,Goback:f,CheckingNowColNum:m,PassColNum:w,Cols:n,GetHoverStyle:_,GetColIcon:t}}});const Ee=(0,g.Z)(je,[["render",Ne]]);var He=Ee,Fe=(0,o.aZ)({name:"HomeView",components:{HomeTitle:q,MyInfo:He}});const We=(0,g.Z)(Fe,[["render",j]]);var Re=We,Ye=[{path:"/",name:"Home",component:Re},{path:"/Contact",name:"Contact",component:function(){return t.e(443).then(t.bind(t,816))}}],Oe=(0,I.p7)({history:(0,I.r5)("/my_intro_demo/"),routes:Ye});Oe.beforeEach((function(e,n,t){N.commit("PlayingAnimation",!0),console.log("網站載入"),t()}));var Ze=3e3;Oe.afterEach((function(){window.scrollTo({top:0}),setTimeout((function(){N.commit("PlayingAnimation",!1),console.log("網站切緩完畢+動畫播完"),Ze=950}),Ze)}));var Ve=Oe,qe=t.p+"media/web_bgm.4ec38a59.mp3",ze=(0,o.aZ)({name:"NavBar",setup:function(){var e=Ve.options.routes,n=(0,o.Fl)((function(){return e.map((function(e,n){var t=["home","contact_phone"];return(0,P.pi)((0,P.pi)({},e),{Icon:t[n]})}))})),t=(0,v.iH)(!1),i=new Audio(qe),l=function(){t.value=!t.value,i.volume=.15,t.value?(i.play(),i.loop=!0):i.pause()},a=0,r=(0,v.iH)(!0),s=function(){a<window.scrollY?(r.value=!1,console.log("往下")):(r.value=!0,console.log("往上")),a=window.scrollY};return(0,o.bv)((function(){window.addEventListener("scroll",s)})),(0,o.Jd)((function(){window.removeEventListener("scroll",s)})),{MusicPlayer:i,BGM_Toggle:l,isPlayBGM:t,NavBtnData:n,isShowNavBar:r}}});const Ue=(0,g.Z)(ze,[["render",D]]);var Je=Ue,Ke=function(e){return(0,o.dD)("data-v-8374f0c6"),e=e(),(0,o.Cn)(),e},Qe={class:"footerBG"},Xe=Ke((function(){return(0,o._)("span",{class:"material-symbols-outlined"},"arrow_upward",-1)})),$e=[Xe],en={class:"FooterBtnScale"},nn={class:"FooterButton"},tn=(0,o.uE)('<div class="FooterBtnScale" data-v-8374f0c6><a href="mailto:jack91423@gmail.com" class="FooterIcon" data-v-8374f0c6><i class="fas fa-envelope-square" data-v-8374f0c6></i></a><a href="https://github.com/voidjkk?tab=repositories" target="_blank" class="FooterIcon" data-v-8374f0c6><i class="fab fa-github" data-v-8374f0c6></i></a></div>',1),on=Ke((function(){return(0,o._)("div",{class:"FooterEnd"},"All page made by me",-1)}));function ln(e,n,t,i,l,r){var s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",Qe,[(0,o._)("div",{onClick:n[0]||(n[0]=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.GoToTop&&e.GoToTop.apply(e,n)}),class:"ToTopBtn"},$e),(0,o._)("div",en,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.BtnData,(function(e){return(0,o.wg)(),(0,o.j4)(s,{key:e.path,to:e.path},{default:(0,o.w5)((function(){return[(0,o._)("div",nn,[(0,o._)("p",null,(0,a.zw)(e.name),1)])]})),_:2},1032,["to"])})),128))]),tn]),on],64)}var an=(0,o.aZ)({name:"SimpleFooter",components:{},setup:function(){var e=Ve.options.routes,n=function(){window.scrollTo({top:0,behavior:"smooth"})};return{BtnData:e,GoToTop:n}}});const rn=(0,g.Z)(an,[["render",ln],["__scopeId","data-v-8374f0c6"]]);var sn=rn,cn={name:"App",components:{PageLoaderAnimation:h,PageSwitchAnimation:y,NavBar:Je,SimpleFooter:sn},setup:function(){var e=(0,L.oR)(),n=(0,o.Fl)((function(){return e.state.ShowSwitchingAnimation})),t=(0,v.iH)(!0);return{isShowAnimation:t,PlayOpeningAnima:n}}};const un=(0,g.Z)(cn,[["render",l]]);var dn=un;(0,i.ri)(dn).use(N).use(Ve).mount("#app")},217:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(252),o=t(577),l={class:"TextFrameContainer"},a={class:"TextFrameCenter"},r={class:"TitleStyle"},s=(0,i._)("div",{class:"Frame_R"},null,-1),c=(0,i._)("div",{class:"Frame_L"},null,-1);function u(e,n,t,u,d,v){return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",a,[(0,i._)("span",r,(0,o.zw)(e.title_name_ref),1)]),s,c])}var d=t(262),v=(0,i.aZ)({name:"SectionTitleFrame",props:{title_name:{type:String}},setup:function(e){var n=(0,d.Vh)(e,"title_name");return{title_name_ref:n}}}),p=t(744);const g=(0,p.Z)(v,[["render",u]]);var f=g}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var l=n[i]={exports:{}};return e[i](l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(n,i,o,l){if(!i){var a=1/0;for(u=0;u<e.length;u++){i=e[u][0],o=e[u][1],l=e[u][2];for(var r=!0,s=0;s<i.length;s++)(!1&l||a>=l)&&Object.keys(t.O).every((function(e){return t.O[e](i[s])}))?i.splice(s--,1):(r=!1,l<a&&(a=l));if(r){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[i,o,l]}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,i){return t.f[i](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.8d74cb5e.js"}}(),function(){t.miniCssF=function(e){return"css/about.73c405ad.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="my_intro:";t.l=function(i,o,l,a){if(e[i])e[i].push(o);else{var r,s;if(void 0!==l)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==n+l){r=d;break}}r||(s=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",n+l),r.src=i),e[i]=[o];var v=function(n,t){r.onerror=r.onload=null,clearTimeout(p);var o=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=v.bind(null,r.onerror),r.onload=v.bind(null,r.onload),s&&document.head.appendChild(r)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/my_intro_demo/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,i,o){var l=document.createElement("link");l.rel="stylesheet",l.type="text/css";var a=function(t){if(l.onerror=l.onload=null,"load"===t.type)i();else{var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=r,l.parentNode&&l.parentNode.removeChild(l),o(s)}};return l.onerror=l.onload=a,l.href=n,t?t.parentNode.insertBefore(l,t.nextSibling):document.head.appendChild(l),l},n=function(e,n){for(var t=document.getElementsByTagName("link"),i=0;i<t.length;i++){var o=t[i],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===e||l===n))return o}var a=document.getElementsByTagName("style");for(i=0;i<a.length;i++){o=a[i],l=o.getAttribute("data-href");if(l===e||l===n)return o}},i=function(i){return new Promise((function(o,l){var a=t.miniCssF(i),r=t.p+a;if(n(a,r))return o();e(i,r,null,o,l)}))},o={143:0};t.f.miniCss=function(e,n){var t={443:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=i(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,i){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)i.push(o[2]);else{var l=new Promise((function(t,i){o=e[n]=[t,i]}));i.push(o[2]=l);var a=t.p+t.u(n),r=new Error,s=function(i){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var l=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;r.message="Loading chunk "+n+" failed.\n("+l+": "+a+")",r.name="ChunkLoadError",r.type=l,r.request=a,o[1](r)}};t.l(a,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,i){var o,l,a=i[0],r=i[1],s=i[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(s)var u=s(t)}for(n&&n(i);c<a.length;c++)l=a[c],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(u)},i=self["webpackChunkmy_intro"]=self["webpackChunkmy_intro"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(279)}));i=t.O(i)})();
//# sourceMappingURL=app.4d1589d0.js.map
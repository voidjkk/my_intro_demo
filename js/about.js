"use strict";(self["webpackChunkmy_intro"]=self["webpackChunkmy_intro"]||[]).push([[443],{623:function(n,t,e){e.r(t),e.d(t,{default:function(){return L}});var o=e(252);function a(n,t,e,a,r,c){var i=(0,o.up)("ContactPage");return(0,o.wg)(),(0,o.j4)(i)}var r=e(577),c=function(n){return(0,o.dD)("data-v-0905379a"),n=n(),(0,o.Cn)(),n},i={class:"ContactPageScale"},l={class:"ContactContent"},u={key:0,class:"MessageAlert"},s=c((function(){return(0,o._)("p",null,"Content copied to clipboard !",-1)})),f=c((function(){return(0,o._)("div",{class:"CornerDeco1"},null,-1)})),v=c((function(){return(0,o._)("div",{class:"CornerDeco2"},null,-1)})),p=[s,f,v],d=c((function(){return(0,o._)("div",{class:"CornerDeco1"},null,-1)})),C=c((function(){return(0,o._)("div",{class:"CornerDeco2"},null,-1)})),_=c((function(){return(0,o._)("p",null,"Tap to get contact Information.",-1)})),h={class:"ContactIcons"},w={class:"ShowInfoArea"},m=c((function(){return(0,o._)("div",{class:"CornerDeco1"},null,-1)})),g=c((function(){return(0,o._)("div",{class:"CornerDeco2"},null,-1)})),S={class:"LowerStr"};function k(n,t,e,a,c,s){var f=(0,o.up)("SectionTitleFrame");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",l,[n.isCopied?((0,o.wg)(),(0,o.iD)("div",u,p)):(0,o.kq)("",!0),(0,o.Wm)(f,{title_name:"Contact"}),d,C,_,(0,o._)("div",h,[(0,o._)("i",{class:"fas fa-envelope",onClick:t[0]||(t[0]=function(t){return n.ShowIconInfo("jack91423@gmail.com")})}),(0,o._)("i",{class:"fab fa-github",onClick:t[1]||(t[1]=function(t){return n.ShowIconInfo("https://github.com/voidjkk/my_intro_code")})})]),(0,o._)("div",w,[m,g,(0,o._)("div",{class:(0,r.C_)({ReflashLine:n.isReflash})},null,2),(0,o._)("span",{class:(0,r.C_)(["UpperStr",{ReflashContent:n.isReflash}]),onClick:t[2]||(t[2]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n.SwitchToWeb&&n.SwitchToWeb.apply(n,t)})},(0,r.zw)(n.UpperStr),3),(0,o._)("span",S,(0,r.zw)(n.LowerStr),1)])])])}var b=e(262),I=e(517),T=(0,o.aZ)({name:"ContactPage",components:{SectionTitleFrame:I.Z},setup:function(){var n=(0,b.iH)(""),t=(0,b.iH)(""),e=(0,b.iH)(!1),o=function(o){!0!==e.value&&(e.value=!0,t.value=n.value,n.value=o,setTimeout((function(){e.value=!1}),1300))},a=(0,b.iH)(!1),r=function(){var t=/@*mail/;t.test(n.value)?navigator.clipboard.writeText(n.value).then((function(){l(),console.log("Content copied to clipboard")})).catch((function(){console.error("Failed to copy")})):window.open(n.value,"_blank")},c=function(){a.value=!0},i=function(n,t){var e,o;return function(){for(var r=[],c=0;c<arguments.length;c++)r[c]=arguments[c];o||(o=!0,n(r),clearTimeout(e),e=setTimeout((function(){o=!1,a.value=!1}),t))}},l=i(c,2e3);return{UpperStr:n,LowerStr:t,ShowIconInfo:o,isReflash:e,SwitchToWeb:r,isCopied:a,throttle_click:l,open_alert:c}}}),D=e(744);const y=(0,D.Z)(T,[["render",k],["__scopeId","data-v-0905379a"]]);var R=y,Z=(0,o.aZ)({name:"ContactView",components:{ContactPage:R}});const H=(0,D.Z)(Z,[["render",a]]);var L=H}}]);
//# sourceMappingURL=about.js.map
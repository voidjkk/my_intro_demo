"use strict";(self["webpackChunkmy_intro"]=self["webpackChunkmy_intro"]||[]).push([[798],{798:function(e,n,l){l.r(n),l.d(n,{default:function(){return N}});var o=l(252),t=l(577),r=l(963),a=function(e){return(0,o.dD)("data-v-8a34f892"),e=e(),(0,o.Cn)(),e},u=a((function(){return(0,o._)("div",{class:"NotSupport"},"Sorry, this tool not supported under 768px resolution.",-1)})),i={class:"Wrap"},c={class:"PageContent"},s=a((function(){return(0,o._)("div",{class:"CornerDeco1"},null,-1)})),v=a((function(){return(0,o._)("div",{class:"CornerDeco2"},null,-1)})),d={class:"ColorPickerArea"},f={class:"ColorPickerAreaLeft"},p=a((function(){return(0,o._)("label",null,"Color Picker",-1)})),C={class:"ColorPickerPanel"},g={class:"anchor",ref:"anchor"},_={ref:"PreviewArea",class:"PreviewArea"},h={class:"SelectedColorInfo"},m={class:"ColorPickerBarWrap"},y={ref:"ColorPickerSlider",class:"ColorPickerSlider"},P={class:"CustomizeColor"},S=a((function(){return(0,o._)("label",null,"Find Color :",-1)})),b=a((function(){return(0,o._)("span",null,"R: ",-1)})),w=a((function(){return(0,o._)("span",null,"G: ",-1)})),k=a((function(){return(0,o._)("span",null,"B: ",-1)})),R={class:"ColorPickerAreaRight"},H={class:"ReferenceColor"},D=a((function(){return(0,o._)("div",{class:"DecoLine"},null,-1)})),M={class:"ToolWrap"},x=a((function(){return(0,o._)("label",null,"Pixel Tool",-1)})),L={class:"HorizonWrap"},A={class:"ChoseSize"},z=a((function(){return(0,o._)("label",null,"Size:",-1)})),B=a((function(){return(0,o._)("option",{value:"8"},"8x8",-1)})),E=a((function(){return(0,o._)("option",{value:"16"},"16x16",-1)})),G=a((function(){return(0,o._)("option",{value:"32"},"32x32",-1)})),I=a((function(){return(0,o._)("option",{value:"64"},"64x64",-1)})),W=[B,E,G,I],X=a((function(){return(0,o._)("label",{for:"CustomizeSize"},"Other size:",-1)})),Y={class:"StorageWrap"},V={class:"DefaultColor"},U={class:"ColorStorage"},j={class:"PixelPanelWrap"},q=["width","height"];function F(e,n,l,a,B,E){return(0,o.wg)(),(0,o.iD)(o.HY,null,[u,(0,o._)("div",i,[(0,o._)("div",c,[s,v,(0,o._)("div",d,[(0,o._)("div",f,[p,(0,o._)("div",C,[(0,o._)("div",g,null,512),(0,o._)("canvas",{ref:"PickArea",class:"PickArea",onMousedown:n[0]||(n[0]=function(){for(var n=[],l=0;l<arguments.length;l++)n[l]=arguments[l];return e.DotMove&&e.DotMove.apply(e,n)}),height:"150",width:"400"},null,544),(0,o._)("div",_,null,512)]),(0,o._)("ul",h,[(0,o._)("li",null,(0,t.zw)(e.ShowRGB),1),(0,o._)("li",null,"HEX : "+(0,t.zw)(e.HEX_Data),1),(0,o._)("li",null,(0,t.zw)(e.ShowHSL(0)),1)]),(0,o._)("div",m,[(0,o._)("div",{ref:"ColorPickerBar",class:"ColorPickerBar",onMousedown:n[1]||(n[1]=(0,r.iM)((function(){for(var n=[],l=0;l<arguments.length;l++)n[l]=arguments[l];return e.DragColorSlider&&e.DragColorSlider.apply(e,n)}),["prevent"]))},[(0,o._)("div",y,null,512)],544)]),(0,o._)("div",P,[S,(0,o._)("div",null,[b,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":n[2]||(n[2]=function(n){return e.Cust_R=n}),min:"0",max:"255",placeholder:"0 ~ 255",required:""},null,512),[[r.nr,e.Cust_R]]),w,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":n[3]||(n[3]=function(n){return e.Cust_G=n}),min:"0",max:"255",placeholder:"0 ~ 255",required:""},null,512),[[r.nr,e.Cust_G]]),k,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":n[4]||(n[4]=function(n){return e.Cust_B=n}),min:"0",max:"255",placeholder:"0 ~ 255",required:""},null,512),[[r.nr,e.Cust_B]])]),(0,o._)("button",{onClick:n[5]||(n[5]=function(){for(var n=[],l=0;l<arguments.length;l++)n[l]=arguments[l];return e.SendCustColor&&e.SendCustColor.apply(e,n)})},"Send!")])]),(0,o._)("div",R,[(0,o._)("ul",H,[(0,o._)("li",{style:(0,t.j5)(e.DiffColor(180))},[(0,o._)("span",null,(0,t.zw)(e.ShowHSL(180)),1)],4),(0,o._)("li",{style:(0,t.j5)(e.DiffColor(30))},[(0,o._)("span",null,(0,t.zw)(e.ShowHSL(30)),1)],4),(0,o._)("li",{style:(0,t.j5)(e.DiffColor(-30))},[(0,o._)("span",null,(0,t.zw)(e.ShowHSL(-30)),1)],4)])])]),D,(0,o._)("div",M,[x,(0,o._)("div",L,[(0,o._)("div",A,[z,(0,o._)("div",null,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":n[6]||(n[6]=function(n){return e.EachBitAmount=n}),onfocus:"this.size=4;",onblur:"this.size=0;",onchange:"this.size=1; this.blur();",onChange:n[7]||(n[7]=function(){for(var n=[],l=0;l<arguments.length;l++)n[l]=arguments[l];return e.ReRenderCanvas&&e.ReRenderCanvas.apply(e,n)})},W,544),[[r.bM,e.EachBitAmount,void 0,{number:!0,lazy:!0}]]),X,(0,o.wy)((0,o._)("input",{id:"CustomizeSize",type:"number","onUpdate:modelValue":n[8]||(n[8]=function(n){return e.EachBitAmount=n}),placeholder:"max:80",max:"80",min:"1",onChange:n[9]||(n[9]=function(){for(var n=[],l=0;l<arguments.length;l++)n[l]=arguments[l];return e.ReRenderCanvas&&e.ReRenderCanvas.apply(e,n)})},null,544),[[r.nr,e.EachBitAmount,void 0,{number:!0,lazy:!0}]])])]),(0,o._)("div",Y,[(0,o._)("ul",V,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.DefaultColorArray,(function(l){return(0,o.wg)(),(0,o.iD)("li",{key:l,onMousedown:n[10]||(n[10]=function(n){return e.ClickedDefaultCell(n)}),style:(0,t.j5)(e.SelectedColor(l))},null,36)})),128))]),(0,o._)("ul",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.DefaultColorArray.length,(function(l){return(0,o.wg)(),(0,o.iD)("li",{key:l,onMousedown:n[11]||(n[11]=function(n){return e.PutinColor(n)})},null,32)})),128))])])])]),(0,o._)("div",j,[(0,o._)("canvas",{ref:"PixelPanel",id:"PixelPanel",width:e.CalcCanvasLength,height:e.CalcCanvasLength,onMousedown:n[12]||(n[12]=function(n){return e.Panel_PosClick(n)}),onMousemove:n[13]||(n[13]=function(n){return e.Panel_PosMove(n)}),onMouseup:n[14]||(n[14]=function(n){return e.isMousedownOnPanel=!1}),onMouseleave:n[15]||(n[15]=function(n){return e.isMousedownOnPanel=!1})},null,40,q)])])])],64)}var O=l(262),T=(0,o.aZ)({name:"SimplePixelTool",components:{},setup:function(){var e,n,l,t,r=(0,O.iH)(null),a=(0,O.iH)(null),u=(0,O.iH)(null),i=(0,O.iH)(null),c=(0,O.iH)(null),s=(0,O.iH)(["0","0","0"]),v=(0,O.iH)("#"),d=(0,O.iH)(["0","0","0"]),f=(0,O.iH)(["0","0","0"]),p=1,C=1,g=(0,O.iH)(0),_=(0,O.iH)(0),h=(0,O.iH)(0),m=function(){var o,a,i,c,s;t=null===(o=r.value)||void 0===o?void 0:o.clientWidth,e=null===(a=u.value)||void 0===a?void 0:a.getContext("2d",{willReadFrequently:!0}),n=null===(i=u.value)||void 0===i?void 0:i.clientWidth,l=null===(c=u.value)||void 0===c?void 0:c.clientHeight,e.fillStyle="hsl(0,100% ,50%)",e.fillRect(0,0,n,l),y(e,n,l),E=null===(s=U.value)||void 0===s?void 0:s.getContext("2d"),N()},y=function(e,n,l){var o=e.createLinearGradient(0,0,n,0);o.addColorStop(.01,"rgba(255,255,255,0)"),o.addColorStop(.99,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,1)"),e.fillStyle=o,e.fillRect(0,0,n,l);var t=e.createLinearGradient(0,0,0,l);t.addColorStop(.01,"rgba(0,0,0,0)"),t.addColorStop(1,"rgba(0,0,0,1)"),e.fillStyle=t,e.fillRect(0,0,n,l)},P=function(n){var l,o,t,r,a,c;if(2!=n.button){var s=n.target,v=null===(l=u.value)||void 0===l?void 0:l.getBoundingClientRect().left,d=null===(o=u.value)||void 0===o?void 0:o.getBoundingClientRect().top;if(void 0!==v&&void 0!==d){var f=n.clientX-v,p=n.clientY-d;f<=0&&(f=0),f>=400&&(f=399),p<=0&&(p=0),p>=150&&(p=150),L(e,f,p),null===(t=i.value)||void 0===t||t.style.setProperty("left","".concat(f,"px")),null===(r=i.value)||void 0===r||r.style.setProperty("top","".concat(p,"px"))}if("PickArea"===s.getAttribute("class")){var C=n.offsetX,g=n.offsetY;L(e,C,g),null===(a=i.value)||void 0===a||a.style.setProperty("left","".concat(C,"px")),null===(c=i.value)||void 0===c||c.style.setProperty("top","".concat(g,"px"))}document.addEventListener("mousemove",P),document.addEventListener("mouseup",A)}},S=function(e){v.value="#",e.forEach((function(e){var n=parseInt(e,10).toString(16);parseInt(e,10)<16&&(v.value+="0"),v.value+=n}))},b=function(e,n,l){e/=255,n/=255,l/=255;var o,t=Math.max(e,n,l),r=Math.min(e,n,l),a=0,u=(t+r)/2;if(t==r)a=o=0;else{var i=t-r;switch(o=u>.5?i/(2-t-r):i/(t+r),t){case e:a=(n-l)/i+(n<l?6:0);break;case n:a=(l-e)/i+2;break;case l:a=(e-n)/i+4;break}a/=6}d.value[0]=Math.floor(360*a).toString(),d.value[1]=Math.floor(100*o).toString(),d.value[2]=Math.floor(100*u).toString()},w=function(e){return"HSL : ".concat(H(e)," , ").concat(d.value[1],"% , ").concat(d.value[2],"%")},k=(0,o.Fl)((function(){return"RGB : ".concat(s.value[0]," , ").concat(s.value[1]," , ").concat(s.value[2])})),R=function(e){return"background-color: hsl(".concat(H(e),", ").concat(d.value[1],"% , ").concat(d.value[2],"%);")},H=function(e){var n=(parseInt(d.value[0],10)+e)%360;return n=n<0?n+360:n,n},D=function(){var o,r,u,v,f=M(g.value),p=M(_.value),C=M(h.value);if(x(f.toString(),p.toString(),C.toString()),t){var m=parseInt(d.value[0],10)*t/360;e.fillStyle="hsl(".concat(d.value[0],",100% ,50%)"),e.fillRect(0,0,n,l),y(e,n,l),null===(o=c.value)||void 0===o||o.style.setProperty("background-color","rgb(".concat(s.value[0],",").concat(s.value[1]," ,").concat(s.value[2],")")),null===(r=a.value)||void 0===r||r.style.setProperty("left","".concat(m,"px")),null===(u=i.value)||void 0===u||u.style.setProperty("left","1px"),null===(v=i.value)||void 0===v||v.style.setProperty("top","1px"),I=!1}},M=function(e){return e>255?e=255:(e<0||null===e||void 0===e)&&(e=0),e},x=function(e,n,l){s.value[0]=e,s.value[1]=n,s.value[2]=l,f.value=s.value,S(s.value),b(parseInt(s.value[0],10),parseInt(s.value[1],10),parseInt(s.value[2],10))},L=function(e,n,l){var o,t=e.getImageData(n,l,1,1).data;null===(o=c.value)||void 0===o||o.style.setProperty("background-color","rgb(".concat(t[0],",").concat(t[1]," ,").concat(t[2],")")),x(t[0],t[1],t[2]),p=n,C=l,I=!1},A=function(){document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",A)},z=function(){document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",z)},B=function(o){var u,i;if(2!=o.button){if(void 0!==t){var c=null===(u=r.value)||void 0===u?void 0:u.getBoundingClientRect().left;if(void 0!==c){var s=o.pageX-Math.floor(c);s<=0?s=0:s>=t&&(s=t);var v=s/t*360;null===(i=a.value)||void 0===i||i.style.setProperty("left","".concat(s,"px")),e.fillStyle="hsl(".concat(v,",100% ,50%)"),e.fillRect(0,0,n,l),y(e,n,l),L(e,p,C)}}document.addEventListener("mousemove",B),document.addEventListener("mouseup",z)}};(0,o.bv)((function(){m()}));var E,G=["rgb(0,0,0)","rgb(80,80,80)","rgb(255,255,255)","rgb(255,0,0)","rgb(255,255,0)","rgb(0,80,0)","rgb(0,0,255)"],I=!1,W=function(e){var n=e.target,l=n.style.getPropertyValue("background-color"),o=/[^0-9,]/g,t=l.replace(o,"").split(",");f.value=t,console.log("PickColor :: ".concat(f.value," "))},X=function(e){W(e)},Y=function(e){var n=e.target;!1===I&&(I=!0,n.style.setProperty("background-color","rgb(".concat(f.value[0],",").concat(f.value[1]," ,").concat(f.value[2],")"))),W(e)},V=function(e){return"background-color: ".concat(e,";")},U=(0,O.iH)(null),j=10,q=(0,O.iH)(8),F=(0,o.Fl)((function(){return j*q.value})),T=(0,O.iH)(!1),K=function(e){if(2!=e.button){E.globalAlpha=1;var n=Math.floor((e.offsetX-5)/j),l=Math.floor((e.offsetY-5)/j);T.value=!0,E.fillStyle=" rgb(".concat(f.value[0],",").concat(f.value[1]," ,").concat(f.value[2],") "),E.fillRect(n*j,l*j,j,j),console.log(" click now is "+e.offsetX+" and "+e.offsetY)}},Z=function(e){if(!0===T.value){var n=Math.floor((e.offsetX-5)/j),l=Math.floor((e.offsetY-5)/j);E.fillRect(n*j,l*j,j,j)}},N=function(){E.clearRect(0,0,F,F),E.globalAlpha=.5;for(var e=0;e<q.value;e++)for(var n=0;n<q.value;n++)E.fillStyle=(e+n)%2==0?"black":"white",E.fillRect(e*j,n*j,j,j)};return(0,o.m0)((function(){})),{PickArea:u,PickerWidth:n,PickerHeight:l,anchor:i,DotMove:P,HEX_Data:v,HSL_Data:d,ShowHSL:w,ColorPickerBar:r,DragColorSlider:B,PreviewArea:c,ColorPickerSlider:a,EachBitAmount:q,DefaultColorArray:G,SelectedColor:V,PickColor:W,PutinColor:Y,PixelPanel:U,Panel_PosClick:K,Panel_PosMove:Z,isMousedownOnPanel:T,CalcCanvasLength:F,RGB_Data:s,ClickedDefaultCell:X,ReRenderCanvas:N,ShowRGB:k,DiffColor:R,Cust_R:g,Cust_G:_,Cust_B:h,SendCustColor:D}}}),K=l(744);const Z=(0,K.Z)(T,[["render",F],["__scopeId","data-v-8a34f892"]]);var N=Z}}]);
//# sourceMappingURL=798.js.map
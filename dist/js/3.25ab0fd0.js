(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{45:function(t,e,n){t.exports=n.p+"/images/slide1.2b34b0ae.jpg"},46:function(t,e,n){t.exports=n.p+"/images/slide2.90c44b88.jpg"},47:function(t,e,n){t.exports=n.p+"/images/slide3.629385cb.jpg"},87:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var a=n(7),i=n(8),r=n(10),s=n(9),c=n(11),l=n(0),u=n.n(l),o=n(15),m=n.n(o),h=n(45),f=n.n(h),d=n(46),p=n.n(d),g=n(47),b=n.n(g),k=(n(87),[{src:f.a,url:"https://www.aliyun.com/acts/product-section-2019/new-users?userCode=kjqxfok3"},{src:p.a,url:"https://promotion.aliyun.com/ntms/act/enterprise-discount.html?userCode=kjqxfok3"},{src:b.a,url:"https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=kjqxfok3"}]),y=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(r.a)(this,Object(s.a)(e).call(this,t))).imgWrap=u.a.createRef(),n.state={current:1,delay:!0,bannerWidth:0,imgList:[]},n}return Object(c.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.init()}},{key:"init",value:function(){var t=this;this.setState({imgList:[k[k.length-1]].concat(k,[k[0]])},function(){for(var e=t.imgWrap.current,n=e.offsetWidth,a=e.firstChild,i=0;i<a.children.length;i++){a.children[i].firstChild.style.width="".concat(n,"px")}t.setState({bannerWidth:n},function(){a.style.width="".concat(a.children.length*n,"px")})}),this.timer&&clearInterval(this.timer),this.timer=setInterval(function(){return t.turn(!0)},3500)}},{key:"turn",value:function(t){var e=this,n=this.state,a=n.current,i=n.imgList,r=t?a+1:a-1;this.setState({current:r},function(){(r>=i.length-1||!r)&&setTimeout(function(){e.setState({delay:!1},function(){e.setState({current:r?1:i.length-2}),setTimeout(function(){e.setState({delay:!0})},18)})},300)})}},{key:"render",value:function(){var t=this,e=this.state,n=e.imgList,a=e.delay;return u.a.createElement("div",{className:"banner"},u.a.createElement("div",{className:"banner-text"},u.a.createElement("h2",null,u.a.createElement("span",null,"宴安鸩毒，不可怀也。")),u.a.createElement("h2",null,"不管前方的路有多苦，只要走的方向正确，都比站在原地更接近幸福。")),u.a.createElement("div",{className:"img-list",ref:this.imgWrap},u.a.createElement("ul",{className:m()("slides",{delay:a}),style:this.seat},n.map(function(t,e){return u.a.createElement("li",{key:"img-".concat(e)},u.a.createElement("img",{src:t.src,onClick:function(){return open(t.url,"_blank")}}))})),u.a.createElement("button",{className:"slides-left",onClick:function(){return t.turn()}},"前"),u.a.createElement("button",{className:"slides-right",onClick:function(){return t.turn(!0)}},"后")))}},{key:"seat",get:function(){var t=this.state,e=t.bannerWidth,n=t.current;return{transform:"translateX(-".concat(e*n,"px)")}}}]),e}(u.a.Component);e.default=y}}]);
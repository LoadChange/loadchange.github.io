(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{48:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}n.d(t,"a",function(){return r})},95:function(e,t,n){"use strict";n.r(t);var a=n(48),r=n(7),c=n(8),i=n(10),l=n(9),s=n(11),o=n(0),u=n(42),m=n.n(u),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={list:[]},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("/dist/data/aliyun-config.json").then(function(t){return e.setState(Object(a.a)({},t.data))})}},{key:"render",value:function(){var e=this.state.list;return o.createElement("div",{className:"services content"},o.createElement("div",{className:"about-data"},Array.apply(null,{length:Math.ceil(e.length/3)}).map(function(t,n){return o.createElement("div",{className:"top-grids services-grids",key:"grids-".concat(n)},o.createElement("div",{className:"section group"},Array.apply(null,{length:3}).map(function(t,a){var r=3*n+a;if(r+1>e.length)return null;var c=e[r];return o.createElement("div",{className:"grid_1_of_3 images_1_of_3 top_grid",key:"grids-".concat(n,"-item-").concat(a)},o.createElement("div",{className:"topgrid-desc"},o.createElement("a",{href:c.link,className:"yq-link"},c.title)),o.createElement("div",{className:"yq-pic-wrapper"},o.createElement("a",{href:c.link,className:"yq-pic",style:{backgroundImage:"url(".concat(c.pic,")")},target:"_blank"})))})))})))}}]),t}(o.Component);t.default=f}}]);
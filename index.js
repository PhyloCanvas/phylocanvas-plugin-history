!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("phylocanvas"));else if("function"==typeof define&&define.amd)define(["phylocanvas"],e);else{var r=e("object"==typeof exports?require("phylocanvas"):t.phylocanvas);for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),r(1);var o=r(5),i=n(o);e["default"]=i["default"]},function(t,e,r){var n=r(2);"string"==typeof n&&(n=[[t.id,n,""]]);r(4)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,r){e=t.exports=r(3)(),e.push([t.id,'.phylocanvas-history{position:absolute;top:0;bottom:0;left:0;box-sizing:border-box;width:240px;background:#fff;-webkit-transform:translateX(-240px);transform:translateX(-240px);-webkit-transform-style:preserve-3d;transform-style:preserve-3d;will-change:transform;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;border:1px solid #e7e7e7;border-left:none}.phylocanvas-history--open{-webkit-transform:translateX(0);transform:translateX(0);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.phylocanvas-history-button{border:none;height:24px;line-height:24px;text-align:center;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:#3c7383;color:#fff;box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal;position:absolute;bottom:16px;right:-57px;z-index:1;outline:none;cursor:pointer;border-radius:0 0 2px 2px;font-size:13px;font-family:Helvetica,Arial,sans-serif;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:top left;transform-origin:top left}.phylocanvas-history-snapshots{position:absolute;top:0;bottom:0;left:0;right:0;margin:0;padding:0;overflow-x:hidden;overflow-y:scroll}.phylocanvas-history-snapshot{list-style:none;border-bottom:1px solid #e7e7e7;cursor:pointer;box-sizing:border-box;display:block;position:relative;height:128px}.phylocanvas-history-snapshot:after{content:"";position:absolute;top:0;bottom:0;right:0;width:4px;background-color:transparent;-webkit-transition:background-color .2s cubic-bezier(.4,0,.2,1);transition:background-color .2s cubic-bezier(.4,0,.2,1)}.phylocanvas-history-snapshot--selected:after,.phylocanvas-history-snapshot:hover:after{background-color:#3c7383}.phylocanvas-history-snapshot>img{width:100%;height:128px;-o-object-fit:contain;object-fit:contain}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=f[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(c(n.parts[i],e))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(c(n.parts[i],e));f[n.id]={id:n.id,refs:1,parts:s}}}}function o(t){for(var e=[],r={},n=0;n<t.length;n++){var o=t[n],i=o[0],s=o[1],a=o[2],l=o[3],c={css:s,media:a,sourceMap:l};r[i]?r[i].parts.push(c):e.push(r[i]={id:i,parts:[c]})}return e}function i(t,e){var r=b(),n=g[g.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function l(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function c(t,e){var r,n,o;if(e.singleton){var i=m++;r=y||(y=a(e)),n=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=l(e),n=h.bind(null,r),o=function(){s(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(e),n=u.bind(null,r),o=function(){s(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function p(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function u(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function h(t,e){var r=e.css,n=e.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var f={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},v=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=d(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=v()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=o(t);return n(r,e),function(t){for(var i=[],s=0;s<r.length;s++){var a=r[s],l=f[a.id];l.refs--,i.push(l)}if(t){var c=o(t);n(c,e)}for(var s=0;s<i.length;s++){var l=i[s];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete f[l.id]}}}};var x=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){t(this,"createTree",function(t,e){var r=t.apply(void 0,n(e)),o=s(e,2),i=o[1],a=void 0===i?{}:i;return a.history!==!1&&(r.history=new m(r,a.history||{})),r}),this.History=m}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(l){o=!0,i=l}finally{try{!n&&a["return"]&&a["return"]()}finally{if(o)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();e["default"]=i;var l=r(6),c=l.utils.dom,p=c.addClass,u=c.removeClass,h=l.utils.events,f=h.fireEvent,d=h.addEvent,v=h.killEvent,b="phylocanvas-history-snapshot",y=b+"--selected",m=function(){function t(e,r){var n=this,i=r.parent,s=void 0===i?e.containerElement:i,a=r.zIndex,l=void 0===a?1:a;o(this,t),this.tree=e,this.snapshots=[],this.isOpen=!1,this.parent=s,this.buttonClickHandler=this.toggle.bind(this),this.container=this.createElements(s),this.container.style.zIndex=l,this.tree.addListener("subtree",function(t){var e=t.node;return n.addSnapshot(e)}),this.tree.addListener("loaded",function(){return n.addSnapshot(n.tree.root.id)}),this.tree.addListener("typechanged",function(){return n.addSnapshot(n.tree.root.id)})}return a(t,[{key:"toggle",value:function(){this.isOpen=!this.isOpen,(this.isOpen?p:u)(this.container,"phylocanvas-history--open"),this.parent[(this.isOpen?"add":"remove")+"EventListener"]("click",this.buttonClickHandler),f(this.tree.containerElement,"historytoggle",{isOpen:this.isOpen})}},{key:"createElements",value:function(t){var e=document.createElement("div");e.className="phylocanvas-history",d(e,"click",v),d(e,"contextmenu",v);var r=document.createElement("button");r.className="phylocanvas-history-button",r.innerHTML="History",d(r,"click",this.buttonClickHandler),e.appendChild(r),this.button=r;var n=document.createElement("ul");return n.className="phylocanvas-history-snapshots",e.appendChild(n),this.snapshotList=n,t.appendChild(e),e}},{key:"addSnapshot",value:function(t){if(t){var e=this.tree.treeType,r=!1;if(this.snapshots.forEach(function(n){u(n,y),n.getAttribute("data-tree-root")===t&&n.getAttribute("data-tree-type")===e&&(r=!0,p(n,y))}),!r){var n=this.tree.getPngUrl(),o=document.createElement("li");o.className=b+" "+y,o.setAttribute("data-tree-root",t),o.setAttribute("data-tree-type",this.tree.treeType),o.className=b+" "+y;var i=document.createElement("img");i.src=n,this.snapshots.push(o),o.appendChild(i),this.snapshotList.appendChild(o),d(o,"click",this.goBackTo.bind(this,o))}}}},{key:"clear",value:function(){for(var t=this.snapshots.length;t--;)this.snapshotList.removeChild(this.snapshots[t]);this.snapshots.length=0}},{key:"goBackTo",value:function(t){var e=t.getAttribute("data-tree-root");this.tree.setTreeType(t.getAttribute("data-tree-type"),!0),this.tree.redrawFromBranch(this.tree.originalTree.branches[e]),this.toggle()}}]),t}()},function(e,r){e.exports=t}])});
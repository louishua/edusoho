define("store/1.3.16/store",[],function(e,t,n){!function(e){function t(){try{return u in e&&e[u]}catch(t){return!1}}function r(e){return function(){var t=Array.prototype.slice.call(arguments,0);t.unshift(o),l.appendChild(o),o.addBehavior("#default#userData"),o.load(u);var n=e.apply(a,t);return l.removeChild(o),n}}function i(e){return e.replace(/^d/,"___$&").replace(v,"___")}var o,a={},c=e.document,u="localStorage",f="script";if(a.disabled=!1,a.set=function(){},a.get=function(){},a.remove=function(){},a.clear=function(){},a.transact=function(e,t,n){var r=a.get(e);null==n&&(n=t,t=null),"undefined"==typeof r&&(r=t||{}),n(r),a.set(e,r)},a.getAll=function(){},a.forEach=function(){},a.serialize=function(e){return JSON.stringify(e)},a.deserialize=function(e){if("string"!=typeof e)return void 0;try{return JSON.parse(e)}catch(t){return e||void 0}},t())o=e[u],a.set=function(e,t){return void 0===t?a.remove(e):(o.setItem(e,a.serialize(t)),t)},a.get=function(e){return a.deserialize(o.getItem(e))},a.remove=function(e){o.removeItem(e)},a.clear=function(){o.clear()},a.getAll=function(){var e={};return a.forEach(function(t,n){e[t]=n}),e},a.forEach=function(e){for(var t=0;t<o.length;t++){var n=o.key(t);e(n,a.get(n))}};else if(c.documentElement.addBehavior){var l,d;try{d=new ActiveXObject("htmlfile"),d.open(),d.write("<"+f+">document.w=window</"+f+'><iframe src="/favicon.ico"></iframe>'),d.close(),l=d.w.frames[0].document,o=l.createElement("div")}catch(s){o=c.createElement("div"),l=c.body}var v=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");a.set=r(function(e,t,n){return t=i(t),void 0===n?a.remove(t):(e.setAttribute(t,a.serialize(n)),e.save(u),n)}),a.get=r(function(e,t){return t=i(t),a.deserialize(e.getAttribute(t))}),a.remove=r(function(e,t){t=i(t),e.removeAttribute(t),e.save(u)}),a.clear=r(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(u);for(var n,r=0;n=t[r];r++)e.removeAttribute(n.name);e.save(u)}),a.getAll=function(){var e={};return a.forEach(function(t,n){e[t]=n}),e},a.forEach=r(function(e,t){for(var n,r=e.XMLDocument.documentElement.attributes,i=0;n=r[i];++i)t(n.name,a.deserialize(e.getAttribute(n.name)))})}try{var m="__storejs__";a.set(m,m),a.get(m)!=m&&(a.disabled=!0),a.remove(m)}catch(s){a.disabled=!0}a.enabled=!a.disabled,"undefined"!=typeof n&&n.exports&&this.module!==n?n.exports=a:"function"==typeof define&&define.amd?define(a):e.store=a}(Function("return this")())});
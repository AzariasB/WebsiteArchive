//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,s){e.Backbone=t(e,s,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(s){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var s=t.Backbone;var n=[].slice;e.VERSION="1.2.1";e.$=r;e.noConflict=function(){t.Backbone=s;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,s){return i[e](this[r],t,s)};case 4:return function(t,s,n){return i[e](this[r],t,s,n)};default:return function(){var t=n.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,s){if(i[s])t.prototype[s]=a(e,s,r)})};var h=e.Events={};var u=/\s+/;var l=function(t,e,r,s,n){var a=0,o;if(r&&typeof r==="object"){if(s!==void 0&&"context"in n&&n.context===void 0)n.context=s;for(o=i.keys(r);a<o.length;a++){e=t(e,o[a],r[o[a]],n)}}else if(r&&u.test(r)){for(o=r.split(u);a<o.length;a++){e=t(e,o[a],s,n)}}else{e=t(e,r,s,n)}return e};h.on=function(t,e,i){return c(this,t,e,i)};var c=function(t,e,i,r,s){t._events=l(f,t._events||{},e,i,{context:r,ctx:t,listening:s});if(s){var n=t._listeners||(t._listeners={});n[s.id]=s}return t};h.listenTo=function(t,e,r){if(!t)return this;var s=t._listenId||(t._listenId=i.uniqueId("l"));var n=this._listeningTo||(this._listeningTo={});var a=n[s];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=n[s]={obj:t,objId:s,id:o,listeningTo:n,count:0}}c(t,e,r,this,a);return this};var f=function(t,e,i,r){if(i){var s=t[e]||(t[e]=[]);var n=r.context,a=r.ctx,o=r.listening;if(o)o.count++;s.push({callback:i,context:n,ctx:n||a,listening:o})}return t};h.off=function(t,e,i){if(!this._events)return this;this._events=l(d,this._events,t,e,{context:i,listeners:this._listeners});return this};h.stopListening=function(t,e,r){var s=this._listeningTo;if(!s)return this;var n=t?[t._listenId]:i.keys(s);for(var a=0;a<n.length;a++){var o=s[n[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(s))this._listeningTo=void 0;return this};var d=function(t,e,r,s){if(!t)return;var n=0,a;var o=s.context,h=s.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;n<u.length;n++){a=h[u[n]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;n<l.length;n++){e=l[n];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};h.once=function(t,e,r){var s=l(v,{},t,e,i.bind(this.off,this));return this.on(s,void 0,r)};h.listenToOnce=function(t,e,r){var s=l(v,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,s)};var v=function(t,e,r,s){if(r){var n=t[e]=i.once(function(){s(e,n);r.apply(this,arguments)});n._callback=r}return t};h.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];l(g,this._events,t,void 0,i);return this};var g=function(t,e,i,r){if(t){var s=t[e];var n=t.all;if(s&&n)n=n.slice();if(s)p(s,r);if(n)p(n,[e].concat(r))}return t};var p=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,o);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e);return}};h.bind=h.on;h.unbind=h.off;i.extend(e,h);var m=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(m.prototype,h,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var s;if(typeof t==="object"){s=t;r=e}else{(s={})[t]=e}r||(r={});if(!this._validate(s,r))return false;var n=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(var f in s){e=s[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}n?delete u[f]:u[f]=e}if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var s in t){var n=t[s];if(i.isEqual(e[s],n))continue;r[s]=n}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var s=t.parse?e.parse(i,t):i;if(!e.set(s,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};q(this,t);return this.sync("read",this,t)},save:function(t,e,r){var s;if(t==null||typeof t==="object"){s=t;r=e}else{(s={})[t]=e}r=i.extend({validate:true,parse:true},r);var n=r.wait;if(s&&!n){if(!this.set(s,r))return false}else{if(!this._validate(s,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(n)e=i.extend({},s,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};q(this,r);if(s&&n)this.attributes=i.extend({},h,s);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=s;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var s=t.wait;var n=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(s)n();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{q(this,t);a=this.sync("delete",this,t)}if(!s)n();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||M();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var _={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(m,_,"attributes");var y=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var b={add:true,remove:true,merge:true};var x={add:true,remove:false};i.extend(y.prototype,h,{model:m,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,x))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var s=this._removeModels(t,e);if(!e.silent&&s)this.trigger("update",this,e);return r?s[0]:s},set:function(t,e){e=i.defaults({},e,b);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?t?[t]:[]:t.slice();var s,n,a,o,h;var u=e.at;if(u!=null)u=+u;if(u<0)u+=this.length+1;var l=this.comparator&&u==null&&e.sort!==false;var c=i.isString(this.comparator)?this.comparator:null;var f=[],d=[],v={};var g=e.add,p=e.merge,m=e.remove;var _=!l&&g&&m?[]:false;var y=false;for(var x=0;x<t.length;x++){a=t[x];if(o=this.get(a)){if(m)v[o.cid]=true;if(p&&a!==o){a=this._isModel(a)?a.attributes:a;if(e.parse)a=o.parse(a,e);o.set(a,e);if(l&&!h&&o.hasChanged(c))h=true}t[x]=o}else if(g){n=t[x]=this._prepareModel(a,e);if(!n)continue;f.push(n);this._addReference(n,e)}n=o||n;if(!n)continue;s=this.modelId(n.attributes);if(_&&(n.isNew()||!v[s])){_.push(n);y=y||!this.models[x]||n.cid!==this.models[x].cid}v[s]=true}if(m){for(var x=0;x<this.length;x++){if(!v[(n=this.models[x]).cid])d.push(n)}if(d.length)this._removeModels(d,e)}if(f.length||y){if(l)h=true;this.length+=f.length;if(u!=null){for(var x=0;x<f.length;x++){this.models.splice(u+x,0,f[x])}}else{if(_)this.models.length=0;var w=_||f;for(var x=0;x<w.length;x++){this.models.push(w[x])}}}if(h)this.sort({silent:true});if(!e.silent){var E=u!=null?i.clone(e):e;for(var x=0;x<f.length;x++){if(u!=null)E.index=u+x;(n=f[x]).trigger("add",n,this,E)}if(h||y)this.trigger("sort",this,e);if(f.length||d.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return n.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){var r=i.matches(t);return this[e?"find":"filter"](function(t){return r(t.attributes)})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(i.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(i.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var s=t.reset?"reset":"set";r[s](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};q(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var s=this;var n=e.success;e.success=function(t,e,i){if(r)s.add(t,i);if(n)n.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var s=this.get(t[r]);if(!s)continue;var n=this.indexOf(s);this.models.splice(n,1);this.length--;if(!e.silent){e.index=n;s.trigger("remove",s,this,e)}i.push(s);this._removeReference(s,e)}return i.length?i:false},_isModel:function(t){return t instanceof m},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var s=this.modelId(e.previousAttributes());var n=this.modelId(e.attributes);if(s!==n){if(s!=null)delete this._byId[s];if(n!=null)this._byId[n]=e}}this.trigger.apply(this,arguments)}});var w={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:2,contains:2,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3};o(y,w,"models");var E=["groupBy","countBy","sortBy","indexBy"];i.each(E,function(t){if(!i[t])return;y.prototype[t]=function(e,r){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,r)}});var k=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,I));this._ensureElement();this.initialize.apply(this,arguments)};var S=/^(\S+)\s*(.*)$/;var I=["model","collection","el","id","attributes","className","tagName","events"];i.extend(k.prototype,h,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var s=e.match(S);this.delegate(s[1],s[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,s){var n=T[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:n,dataType:"json"};if(!s.url){a.url=i.result(r,"url")||M()}if(s.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(s.attrs||r.toJSON(s))}if(s.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(s.emulateHTTP&&(n==="PUT"||n==="DELETE"||n==="PATCH")){a.type="POST";if(s.emulateJSON)a.data._method=n;var o=s.beforeSend;s.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",n);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!s.emulateJSON){a.processData=false}var h=s.error;s.error=function(t,e,i){s.textStatus=e;s.errorThrown=i;if(h)h.call(s.context,t,e,i)};var u=s.xhr=e.ajax(i.extend(a,s));r.trigger("request",r,u,s);return u};var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var P=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var H=/\((.*?)\)/g;var $=/(\(\?)?:\w+/g;var A=/\*\w+/g;var C=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(P.prototype,h,{initialize:function(){},route:function(t,r,s){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){s=r;r=""}if(!s)s=this[r];var n=this;e.history.route(t,function(i){var a=n._extractParameters(t,i);if(n.execute(s,a,r)!==false){n.trigger.apply(n,["route:"+r].concat(a));n.trigger("route",r,a);e.history.trigger("route",n,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(C,"\\$&").replace(H,"(?:$1)?").replace($,function(t,e){return e?t:"([^/?]+)"}).replace(A,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];i.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var R=/^[#\/]|\s+$/g;var j=/^\/+|\/+$/g;var O=/#.*$/;N.started=false;i.extend(N.prototype,h,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(R,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window;this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(j,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var s=r.insertBefore(this.iframe,r.firstChild).contentWindow;s.document.open();s.document.close();s.location.hash="#"+this.fragment}var n=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){n("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){n("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(O,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var U=function(t,e){var r=this;var s;if(t&&i.has(t,"constructor")){s=t.constructor}else{s=function(){return r.apply(this,arguments)}}i.extend(s,r,e);var n=function(){this.constructor=s};n.prototype=r.prototype;s.prototype=new n;if(t)i.extend(s.prototype,t);s.__super__=r.prototype;return s};m.extend=y.extend=P.extend=k.extend=N.extend=U;var M=function(){throw new Error('A "url" property or function must be specified')};var q=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});
//# sourceMappingURL=backbone-min.map
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global Backbone, Tools, _, COLOR, P_HEX */

var ChessBox = Backbone.Model.extend({
    defaults: {
        PRESENT: 0,
        WHITEBEGUN: [],
        BLACKBEGUN: [],
        TRACKS: [],
    },
    setCurrent: function (piece) {
        var eaten = this.getCurrent();
        this.set({"PRESENT": piece});
        return eaten;
    },
    getCurrent: function () {
        return this.get("PRESENT");
    },
    getWhiteBegun: function () {
        return this.get("WHITEBEGUN");
    },
    getBlackBegun: function () {
        return this.get("BLACKBEGUN");
    },
    getTracks : function(){
        return this.get("TRACKS");
    },
    removePiece: function () {
        var p = this.getCurrent();
        this.setCurrent(0);
        return p;
    },
    addTrAndBg: function (piece) {
        this.addTrack(piece);
        this.addBegun(piece);
    },
    addTrack: function (piece) {
        this.getTracks().push(piece);
    },
    getBegun: function (color) {
        return Tools.ifWhiteElseIfBlack(color, this.getWhiteBegun(), this.getBlackBegun());
    },
    currentIsBegun: function () {
        return this.getCurrent() &&
                !_.isEmpty(this.getBegun(Tools.getInvertColor(this.getCurrent())));
    },
    addBegun: function (piece) {
        var toPush = Tools.ifWhiteElseIfBlack(piece, this.getWhiteBegun(), this.getBlackBegun());
        toPush && toPush.push(piece);
    },
    getBegunner: function () {
        var present = this.getCurrent();
        if (present && this.currentIsBegun()) {
            return Tools.ifWhiteElseIfBlack(present, this.getBlackBegun(), this.getWhiteBegun());
            return Tools.getPieceColor(present) === COLOR.WHITE ? this.getBlackBegun() : this.getWhiteBegun();
        } else {
            return;
        }
    },
    removeTrAndBg: function (piece) {
        this.removeTrack(piece);
        this.removeBegun(piece);
    },
    removeTrack: function (piece) {
        var self = this;
        _.each(this.getTracks(), function (tracker, index) {
            if (Tools.sameId(tracker, piece)) {
                self.getTracks().split(index, 1);
            }
        });
    },
    reset: function (color) {
        if (!color) {
            this.set({
                WHITEBEGUN: [],
                BLACKBEGUN: [],
                TRACKS: []
            });
        } else {
            if (color === COLOR.BLACK) {
                this.set({
                    BLACKBEGUN: []
                });
                this.resetTrackByColor(COLOR.BLACK);
            } else {
                this.set({
                    WHITEBEGUN: []
                });
                this.resetTrackByColor(COLOR.WHITE);
            }
        }
    },
    resetTrackByColor: function (color) {
        var self = this;
        _.each(this.getTracks(), function (piece, index) {
            if (Tools.sameColor(piece, color)) {
                self.getTracks().splice(index, 1);
            }
        });
    },
    removeBegun: function (piece) {
        var toRemove = Tools.ifWhiteElseIfBlack(piece, this.getWhiteBegun(), this.getBlackBegun());
        _.each(toRemove, function (mPiece, index) {
            if (Tools.sameId(mPiece, piece)) {
                toRemove.splice(index, 1);
            }
        });
        Tools.isWhite(piece) ? (this.set({WHITEBEGUN: toRemove})) : (this.set({BLACKGEBUN: toRemove}));

    },
    isBegunBy: function (begunner) {
        var color = Tools.getPieceColor(begunner);
        return Tools.isWhite(color) ? !_.isEmpty(this.getWhiteBegun()) :
                Tools.isBlack(color) ? !_.isEmpty(this.getBlackBegun()) : undefined;
    },
    kingCanComeHere: function (king) {
        var color = Tools.getPieceColor(king);
        return (this.isEmpty() && Tools.ifWhiteElseIfBlack(king,_.isEmpty(this.getBlackBegun()),_.isEmpty(this.getWhiteBegun())) )
                || ( !this.isEmpty() && !Tools.sameColor(this.getCurrent(), color) &&
                Tools.ifWhiteElseIfBlack(king, _.isEmpty(this.getBlackBegun(), _.isEmpty(this.getWhiteBegun()))) );
    },
    isEmpty: function () {
        return (this.getCurrent() === 0);
    },
    canBeEaten: function (eater) {
        return !this.isEmpty() && !Tools.sameColor(this.getCurrent(), eater);
    },
    containsPiece: function (pieceHex) {
        var present = this.getCurrent();
        return Tools.sameType(pieceHex, present);
    },
    containKing: function (color) {
        var present = this.getCurrent();
        return Tools.sameType(present, P_HEX.KING) && Tools.sameColor(color, present);
    },
    hasATrack: function (piece) {
        var color = Tools.getPieceColor(piece);

        var hasTrack = false;
        _.each(this.getTracks(), function (value) {
            if (Tools.sameId(value, piece) && Tools.sameType(value, piece) && Tools.sameColor(value, piece)) {
                hasTrack = true;
            }
        });
        return hasTrack;
    },
    colorHasTrack : function(color){
        var hasTrack = false;
        _.each(this.getTracks(),function(track){
            if(Tools.sameColor(track,color)){
                hasTrack = true;
            }
        });
        return hasTrack;
    }
});


/* global Backbone, _, PIECES_CHAR, Tools, COLOR, P_HEX */

var Move = Backbone.Model.extend({
    defaults: {
        turn: -1,
        from: 0,
        to: 0,
        piece: PIECES_CHAR.WHITE.PAWN,
        eat: false,
        check: false,
        checkmate: false,
        enPassant: false,
        littleCastling: false,
        bigCastling: false
    },
    getString: function () {
        var piece = Tools.getHtmlName(this.get("piece"));
        var fromAl = Tools.getAlebraFromPosition(this.get("from"));
        var toAl = Tools.getAlebraFromPosition(this.get("to"));
        return piece + " " + fromAl + this.getMiddleString() + toAl +
                (this.getEndString() ? this.getEndString() : "");
    },
    getMiddleString: function () {
        if (this.get("eat")) {
            return "x";
        } else if (this.get("check")) {
            return "+";
        } else if (this.get("checkmate")) {
            return "#";
        } else if (this.get("littleCastling")) {
            return " 0-0 ";
        } else if (this.get("bigCastling")) {
            return " 0-0-0 ";
        } else {
            return "-";
        }
    },
    getEndString: function () {
        if (this.get("enPassant")) {
            return " e.p. ";
        } 
    }
});


var Eaten = Backbone.Model.extend({
    defaults: {
        turn: -1,
        lastPosition: 0,
        piece: PIECES_CHAR.WHITE.PAWN
    },
    getString: function () {
        return Tools.getHtmlName(this.get("piece"));
    }
});


var Moves = Backbone.Collection.extend({
    model: Move,
    kingMoved: {
        white: false,
        black: false
    },
    rookMoved: {
        left: {
            white: false,
            black: false
        },
        right: {
            white: false,
            black: false
        }
    },
    addMove: function (move) {
        var piece = move.get("piece");
        if (Tools.sameType(piece, P_HEX.KING)) {
            this.updateKingMoved(piece);
        } else if (Tools.sameType(piece, P_HEX.ROOK)) {
            this.updateRookMoved(move);
        }
        this.add(move);
    },
    getMove: function (index) {
        return this.at(index);
    },
    getLastMove: function () {
        return this.at(this.length - 1);
    },
    removeLastMove: function () {
        return this.pop();
    },
    updateKingMoved: function (piece) {
        var color = Tools.getPieceColor(piece);
        color === COLOR.WHITE ? (this.whiteKingMoved = true) :
                color === COLOR.BLACK ? (this.blackKingMoved = true) : "";
    },
    updateRookMoved: function (move) {
        var from = parseInt(move.get("from"));
        var color = Tools.getPieceColor(parseInt(move.get("piece")));
        if (Tools.isAtLeftBorder(from)) {
            color === COLOR.WHITE ? (this.rookMoved.left.white = true) :
                    color === COLOR.BLACK ? (this.rookMoved.left.black = true) : undefined;
        } else if (Tools.isAtRightBorder(from)) {
            color === COLOR.WHITE ? (this.rookMoved.right.white = true) :
                    color === COLOR.BLACK ? (this.rookMoved.right.black = true) : undefined;
        }
    },
    myKingMoved: function (piece) {
        var color = Tools.getPieceColor(piece);
        return Tools.ifWhiteElseIfBlack(piece,this.whiteKingMoved,this.blackKingMoved);
    },
    myLeftRookMoved: function (piece) {
        var color = Tools.getPieceColor(piece);
        return Tools.ifWhiteElseIfBlack(piece,this.rookMoved.left.white,this.rookMoved.left.black);
    },
    myRightRookMoved: function (piece) {
        var color = Tools.getPieceColor(piece);
        return Tools.ifWhiteElseIfBlack(piece,this.rookMoved.right.white,this.rookMoved.right.black);
    }
});

var Eatens = Backbone.Collection.extend({
    model: Eaten,
    addEaten: function (eat) {
        this.add(eat);
    },
    getLast: function () {
        return this.at(this.length - 1);
    },
    removeLastEat: function () {
        return this.pop();
    }
});

var MoveView = Backbone.View.extend({
    el: '#lst_coups',
    moves: new Moves(),
    intitialize: function () {

    },
    addMove: function (moveObject) {
        this.moves.addMove(moveObject);
        this.renderLast();
    },
    renderLast: function () {
        var lastMove = this.moves.getLastMove();
        var $p = $("<p/>", {
            html: lastMove.getString()
        });
        this.$el.prepend($p);
    },
    rollBack: function () {
        this.$el.children().first().remove();
        return this.moves.removeLastMove();
    }
});

var EatenView = Backbone.View.extend({
    el: '#eaten',
    eatens: new Eatens(),
    addEaten: function (eatObject) {
        this.eatens.addEaten(eatObject);
        this.renderLast();
    },
    renderLast: function () {
        var lastEat = this.eatens.getLast();
        var $p = $("<p/>", {
            html: lastEat.getString()
        });
        this.$el.append($p);
    },
    rollBack: function () {
        this.$el.children().first().remove();
        return this.eatens.removeLastEat();
    }
});


/* global Backbone, Tools, COLOR, _, ChessBox, P_HEX, Gen */

var debug = false;
var ChessBoard = Backbone.Collection.extend({
    model: ChessBox,
    whiteKingBegunTrack: [],
    blackKingBegunTrack: [],
    whitePin: [],
    blackPin: [],
    createBoard : function (genOption,random) {
        this.addPieces(genOption,random);
        this.updateAll();
    },
    blackIsChess: function () {
        return !_.isEmpty(this.blackKingBegunTrack) ? this.blackKingBegunTrack : false;
    },
    whiteIsChess: function () {
        return !_.isEmpty(this.whiteKingBegunTrack) ? this.whiteKingBegunTrack : false;
    },
    blackIsPin: function () {
        return !_.isEmpty(this.blackPin) ? this.blackPin : false;
    },
    whiteIsPin: function () {
        return !_.isEmpty(this.whitePin) ? this.whitePin : false;
    },
    myKingIsChess: function (piece) {
        return Tools.ifWhiteElseIfBlack(piece, this.whiteIsChess(), this.blackIsChess());
    },
    myKingIsPin: function (piece) {
        return Tools.ifWhiteElseIfBlack(piece, this.whiteIsPin(), this.blackIsPin());
    },
    addPieces: function (option,random) {

        /**
         * 
         * Choix de l'option de génération ici
         */
        var board = Gen.genBoard(option,random),
                self = this;

        _.each(board, function (piece, index) {
            self.addPiece(index, piece);
        });
    },
    addPiece: function (div_id, piece_code) {
        var mchessBox = new ChessBox({id: div_id});
        if (!_.isUndefined(piece_code)) {
            mchessBox.setCurrent(piece_code);
        }
        this.add(mchessBox);

        return div_id + 1;
    },
    removePiece: function (index) {
        return this.at(index).removePiece();
    },
    getTracksOf: function (piece_code) {
        var tracks = this.filter(function (value) {
            var to_return = false;
            _.each(value.get("TRACKS"), function (track) {
                if (Tools.sameId(track, piece_code) && Tools.sameColor(track, piece_code)) {
                    to_return = true;
                }
            });
            return to_return;
        });
        return tracks;
    },
    moveFromTo: function (from, to, reverse) {
        reverse = reverse || false;
        var origin = this.at(from);
        var destination = this.at(to);
        if (!_.isUndefined(destination) && (!reverse && destination.hasATrack(origin.getCurrent()) || reverse)) {
            var piece = origin.removePiece();
            var eaten = destination.setCurrent(piece);
            return new Move({
                from: from,
                to: to,
                piece: piece,
                eat: eaten
                        // check: false,
                        //checkmate: false,
                        // enPassant: false,
                        // littleCastling: false,
                        // bigCastling: false
            });
        }
        return;
    },
    resetTracks: function (color) {
        if (!color) {
            this.each(function (value) {
                value.reset();
            });
        } else {
            this.each(function (chessBox) {
                if (!_.isEmpty(chessBox.getBegun(color))) {
                    chessBox.reset(color);
                }
            });
        }

    },
    resetBeguns: function () {
        this.whiteKingBegunTrack = [];
        this.blackKingBegunTrack = [];
    },
    resetPin: function () {
        this.whitePin = [];
        this.blackPin = [];
    },
    updateAll: function (firstColor) {
        firstColor = firstColor || COLOR.WHITE;
        var self = this;

        var secondUpdate = {};
        this.resetTracks();
        this.resetBeguns();
        this.resetPin();


        this.each(function (value, index) {
            if (value.getCurrent()) {
                var piece = value.getCurrent();
                if (Tools.sameColor(piece, firstColor)) {
                    var begunPin = self.updatePiece(value.getCurrent(), index);
                    if (Tools.containPinOrBegun(begunPin)) {
                        self.updateKingBegunAndPin(Tools.getInvertColor(firstColor), begunPin);
                    }
                } else {
                    secondUpdate[index] = value;
                }
            }
        });
        _.each(secondUpdate, function (value, index) {
            var begunPin = self.updatePiece(value.getCurrent(), parseInt(index));
            if (Tools.containPinOrBegun(begunPin)) {
                self.updateKingBegunAndPin(firstColor, begunPin);
            }
        });

    },
    updateKingBegunAndPin: function (color, begunPin) {
        var begun = begunPin.begun;
        var pin = begunPin.pin;
        if (color === COLOR.WHITE) {
            !_.isEmpty(begun) && this.whiteKingBegunTrack.push(begun);
            !_.isEmpty(pin) && this.whitePin.push(pin);
        } else {
            !_.isEmpty(begun) && this.blackKingBegunTrack.push(begun);
            !_.isEmpty(pin) && this.blackPin.push(pin);
        }
    },
    findColorKing: function (color) {
        for (var i in this.models) {
            var box = this.at(i);
            if (box.containKing(color)) {
                return i;
            }
        }
        return -1;

    },
    kingCannotMove: function (color) {
        var kingIndex = this.findColorKing(color);
        if (kingIndex >= 0) {
            var king = this.at(kingIndex).getCurrent();
            return !this.kingHasTrack(king);
        }
        return false;
    },
    canProtectKing: function (color) {
        var tracks = this.myKingIsChess(color);
        var canProtect = false;
        if (Tools.pieceCanProtect(tracks)) {
            _.each(tracks[0], function (box) {
                if (box.colorHasTrack(color)) {
                    canProtect = true;
                }
            });
        }
        return canProtect;
    },
    kingHasTrack: function (king) {
        var hasTrack = false;
        this.each(function (box) {
            if (box.hasATrack(king)) {
                hasTrack = true;
            }
        });
        return hasTrack;
    },
    colorCantMove: function (color) {
        var canMove = false;
        this.each(function (box) {
            if (box.colorHasTrack(color)) {
                canMove = true;
            }
        });
        return !canMove;
    },
    onlyTwoLeft: function () {
        var totalNumber = 0;
        this.each(function (box) {
            if (!box.isEmpty()) {
                totalNumber++;
            }
        });
        return totalNumber === 2;
    },
    /*
     * All the functions that update the chessboard
     */


    /**
     * 
     * @param {int} piece_code The number/code of the current piece to update
     * @param {int} index The position on the board of the piece (the origin, not the destionation)
     * @returns {undefined}
     */
    updatePiece: function (piece_code, index) {
        var type = Tools.getPieceType(piece_code),
                tracks = this.myKingIsChess(piece_code),
                begunPin;
        if (Tools.pieceCanProtect(tracks) || Tools.sameType(type, P_HEX.KING)) {
            switch (type) {
                case P_HEX.KING:
                    begunPin = this.updateKing(piece_code, index);
                    break;
                case P_HEX.QUEEN :
                    begunPin = this.updateQueen(piece_code, index);
                    break;
                case P_HEX.ROOK :
                    begunPin = this.updateRook(piece_code, index);
                    break;
                case P_HEX.KNIGHT:
                    begunPin = this.updateKnight(piece_code, index);
                    break;
                case P_HEX.BISHOP :
                    begunPin = this.updateBishop(piece_code, index);
                    break;
                case P_HEX.PAWN :
                    begunPin = this.updatePawn(piece_code, index);
                    break;
            }
        }
        return begunPin;
    },
    updateKing: function (kingPiece, index) {
        var color = Tools.getPieceColor(kingPiece);
        var self = this;
        var possDirection = [-1, 1, -7, 7, -8, 8, -9, 9];
        _.each(possDirection, function (value) {
            self.kingConditions(kingPiece, parseInt(index), value, color);
        });
        return;

    },
    kingConditions: function (king, index, incrementation, color) {
        var dIndex = index + incrementation;
        var ennemies = {},
                invertColor;
        if (Tools.isValidIndex(dIndex) && !(Tools.isAtLeftBorder(index) && Tools.turnLeft(incrementation)
                || Tools.isAtRightBorder(index) && Tools.turnRight(incrementation))) {
            var newPos = this.at(dIndex);
            if (newPos) {
                if (color === COLOR.BLACK) {
                    ennemies = newPos.getWhiteBegun();
                    invertColor = COLOR.WHITE;
                } else {
                    ennemies = newPos.getBlackBegun();
                    invertColor = COLOR.BLACK;
                }
                if ((newPos.canBeEaten(king) || newPos.isEmpty()) && _.isEmpty(ennemies)) {
                    newPos.addTrAndBg(king);
                    return newPos;
                }
            }
        }
        return;
    },
    updateQueen: function (queenPiece, index) {
        var trackToKing1 = this.updateRook(queenPiece, index);
        var trackToKing2 = this.updateBishop(queenPiece, index);
        if (!_.isEmpty(trackToKing1)) {
            return trackToKing1;
        } else if (!_.isEmpty(trackToKing2)) {
            return trackToKing2;
        } else {
            return;
        }
    },
    updateRook: function (rookPiece, index) {
        var directions = [-1, 1, -8, 8];
        var self = this;
        var iGotTheKing = [];
        _.each(directions, function (dir) {
            var res = self.checkDiagonal(rookPiece, index, dir);
            if (!_.isEmpty(res) && res && res.begun && res.pin
                    && (!_.isEmpty(res.begun) || !_.isEmpty(res.pin))) {
                iGotTheKing = res;
            }
        });
        return iGotTheKing;
    },
    updateKnight: function (knightPiece, index) {
        var possibilities = [];
        var self = this;
        var kingInTarget = {begun: [], pin: []};

        switch (Tools.getPositionFromLeft(index)) {
            case 0:
                possibilities = [index - 15, index - 6, index + 10, index + 17];
                break;
            case 1:
                possibilities = [index - 17, index - 15, index - 6, index + 10, index + 15, index + 17];
                break;
            case 6:
                possibilities = [index - 17, index - 15, index - 10, index + 6, index + 15, index + 17];
                break;
            case 7:
                possibilities = [index - 17, index - 10, index + 6, index + 15];
                break;
            default:
                possibilities = [index - 17, index - 15, index - 10, index - 6, index + 6, index + 10, index + 15, index + 17];
                break;
        }

        _.each(possibilities, function (value) {
            if (value >= 0) {
                var mBox = self.at(value);
                if (!_.isUndefined(mBox) && (mBox.isEmpty() || mBox.canBeEaten(knightPiece))) {
                    var pin = self.myKingIsPin(knightPiece);
                    //If the piece is pinned, it can't move (the knigth can hardly move)
                    var imPin = Tools.pieceIsPin(pin, self.at(index));
                    var tracks = self.myKingIsChess(knightPiece);
                    if (imPin) {
                        Tools.addIfSame(pin, mBox, knightPiece);
                    } else if (tracks && tracks[0]) {
                        Tools.addIfSame(tracks[0], mBox, knightPiece);
                    } else {
                        mBox.addTrAndBg(knightPiece);
                        var invertColor = Tools.getInvertColor(knightPiece);
                        //On met le roi en échec
                        if (mBox.containKing(invertColor)) {
                            //On ajoute donc soit même comme étant une menace au roi
                            kingInTarget.begun.push(self.at(index));
                        }
                    }
                }
            }
        });
        return  kingInTarget;

    },
    updateBishop: function (bishopPiece, index) {
        var directions = [-9, 9, -7, 7];
        var self = this;
        var iGotTheKing = {};

        _.each(directions, function (dir) {
            var begunPin = self.checkDiagonal(bishopPiece, index, dir);
            if (_.isEmpty(iGotTheKing) && begunPin && begunPin.begun && begunPin.pin
                    && (!_.isEmpty(begunPin.begun) || !_.isEmpty(begunPin.pin))) {
                iGotTheKing = begunPin;
            }
        });
        return iGotTheKing;
    },
    updatePawn: function (pawnPiece, index) {
        var kingInTarget = [],
                tracks = this.myKingIsChess(pawnPiece),
                pin = this.myKingIsPin(pawnPiece),
                imPin = Tools.pieceIsPin(pin, this.at(index));

        var color = Tools.getPieceColor(pawnPiece),
                pGauche = 7,
                pDevant = 8,
                pDroite = 9;
        if (color === COLOR.BLACK) {
            pDevant = -pDevant,
                    pDroite = -pDroite,
                    pGauche = -pGauche;
        }

        //Ils ne peuvent qu'avancer (ou aller en diagonale)

        var devant = Tools.isValidIndex(index + pDevant) && this.at(index + pDevant);
        if (devant && devant.isEmpty()) {
            if (imPin) {
                Tools.addIfSame(imPin, devant, pawnPiece, "addTrack");
            } else if (tracks) {
                Tools.addIfSame(tracks, devant, pawnPiece, "addTrack");
            } else {
                devant.addTrack(pawnPiece);
            }
        }

        if (this.isAtStart(pawnPiece, index)) {
            var devant2 = this.at(index + pDevant * 2);
            if (!_.isUndefined(devant2) && devant.isEmpty() && devant2.isEmpty()) {
                if (imPin) {
                    Tools.addIfSame(imPin, devant2, pawnPiece, "addTrack");
                } else if (tracks && tracks[0]) {
                    Tools.addIfSame(tracks[0], devant2, pawnPiece, "addTrack");
                } else {
                    devant2.addTrack(pawnPiece);

                }
            }
        }


        var droite = Tools.isValidIndex(index + pDroite) && this.at(index + pDroite);
        if (droite) {
            !Tools.isAtRightBorder(index) && droite.addBegun(pawnPiece);

            if (!Tools.isAtRightBorder(index) && !_.isUndefined(droite) && droite.canBeEaten(pawnPiece)) {
                if (imPin) {
                    Tools.addIfSame(imPin, droite, pawnPiece, "addTrack");
                } else if (tracks && tracks[0]) {
                    Tools.addIfSame(tracks[0], droite, pawnPiece, "addTrack");
                } else {
                    droite.addTrack(pawnPiece);
                    var invertColor = Tools.getInvertColor(pawnPiece);
                    if (droite.containKing(invertColor)) {
                        //Le roi est mis en échecc par le pion
                        kingInTarget.push(this.at(index));
                    }
                }
            }
        }


        var gauche = Tools.isValidIndex(index + pGauche) && this.at(index + pGauche);
        if (gauche) {
            !Tools.isAtLeftBorder(index) && gauche.addBegun(pawnPiece);

            if (!Tools.isAtLeftBorder(index) && !_.isUndefined(gauche) && gauche.canBeEaten(pawnPiece)) {
                if (imPin) {
                    Tools.addIfSame(imPin, droite, pawnPiece, "addTrack");
                } else if (tracks && tracks[0]) {
                    Tools.addIfSame(tracks[0], gauche, pawnPiece, gauche.addTrack);
                } else {
                    gauche.addTrack(pawnPiece);
                    var invertColor = Tools.getInvertColor(pawnPiece);
                    if (gauche.containKing(invertColor)) {
                        kingInTarget.push(this.at(index));
                    }
                }
            }
        }
        return !_.isEmpty(kingInTarget) ? {'begun': kingInTarget} : undefined;
    },
    /**
     * Works only for pawns
     *
     * @param {Number} piece_code the Code of the piece you want to know if it is at the start or not
     * @param {Number} index the position in itself of the piece.
     * @returns {Boolean} return if the index given and the color of the piece correspond to the start's place.
     */
    isAtStart: function (piece_code, index) {
        var color = Tools.getPieceColor(piece_code);
        var type = Tools.getPieceType(piece_code);
        if (type === P_HEX.PAWN &&
                ((color === COLOR.WHITE && (index >= 8 && index <= 15)) ||
                        (color === COLOR.BLACK && (index >= 48 && index <= 55)))) {
            return true;
        } else {
            return false;
        }
    },
    checkDiagonal: function (piece, indexStart, incrementation) {
        //If there are two tracks to the king, moving a piece won't resolve the problem
        var dIndex = indexStart + incrementation,
                pathToKing = [this.at(indexStart)],
                pinPath = [this.at(indexStart)],
                kingFound = false,
                tracks = this.myKingIsChess(piece),
                pin = this.myKingIsPin(piece),
                imPin = Tools.pieceIsPin(pin, this.at(indexStart)),
                direction = this.at(dIndex),
                firstCollision = false,
                kingPin = false;
        if (!(Tools.isAtRightBorder(indexStart) && Tools.turnRight(incrementation)
                || Tools.isAtLeftBorder(indexStart) && Tools.turnLeft(incrementation))) {
            while (!_.isUndefined(direction) && dIndex >= 0 && dIndex <= 64) {

                // For "pin"
                pinPath.push(direction);

                //For "chess"
                if (!kingFound) {
                    pathToKing.push(direction);
                }

                //Exit if encountring an ennemy
                if (!direction.isEmpty()) {
                    if (!Tools.sameColor(direction.getCurrent(), piece)) {
                        if (imPin) {
                            Tools.addIfSame(imPin, direction, piece);
                        } else if (tracks && tracks[0]) {
                            Tools.addIfSame(tracks[0], direction, piece);
                        } else {
                            !firstCollision && direction.addTrAndBg(piece);
                        }

                        var invertColor = Tools.getInvertColor(piece);
                        if (direction.containKing(invertColor)) {
                            kingPin = true;
                            pinPath.pop();
                            if (!firstCollision) {
                                pathToKing.pop();
                                kingFound = true;
                            }
                        }
                        //Si on a déjà eu une collision, ou que l'on croise un pion de la même couleur
                        // On ne vas pas chercher plus loin pour le clouage
                    } else {
                        //On ajoute une "menace" pour le que le roi ne puisse pas manger cette pièce
                        !firstCollision && direction.addBegun(piece);
                    }

                    if (firstCollision || Tools.sameColor(direction.getCurrent(), piece)) {
                        break;
                    } else {
                        firstCollision = true;
                    }
                }

                //Exit if is at border
                if ((Tools.isAtRightBorder(direction.id) && Tools.turnRight(incrementation) ||
                        Tools.isAtLeftBorder(direction.id) && Tools.turnLeft(incrementation))) {

                    if (imPin) {
                        Tools.addIfSame(imPin, direction, piece);
                    } else if (tracks && tracks[0]) {
                        Tools.addIfSame(tracks[0], direction, piece);
                    } else {
                        !firstCollision && direction.addTrAndBg(piece);
                        firstCollision && direction.addBegun(piece);
                    }
                    break;
                }

                //Default = adding tracks, or "obligatory" tracks if king in chess
                if (imPin) {
                    Tools.addIfSame(imPin, direction, piece);
                } else if (tracks && tracks[0]) {
                    Tools.addIfSame(tracks[0], direction, piece);
                } else {
                    !firstCollision && direction.addTrAndBg(piece);
                    firstCollision && direction.isEmpty() && direction.addBegun(piece);
                }

                dIndex += incrementation;
                direction = this.at(dIndex);
            }
        }
        if (!kingFound) {
            pathToKing = [];
        }
        if (!kingPin) {
            pinPath = [];
        }

        return {
            'begun': pathToKing,
            'pin': pinPath
        };
    },
    updateMoves: function (from, destination, eaten) {
        var oldPos = Tools.getAlebraFromPosition(from);
        var newPos = Tools.getAlebraFromPosition(destination);
        var nameAlg = "&#" + Tools.getHtmlName(this.at(destination).getCurrent());
        var liaison = eaten ? "x" : "-";
        var move = nameAlg + " " + oldPos + liaison + newPos;
        this.moves.addMovements(move);
    },
    updateEatenPiece: function (eaten) {
        var code = Tools.getHtmlName(eaten);
        this.eatController.addEaten("&#" + code);
    }
});


/* global Tools, P_HEX, COLOR */

var enPassant = {
    events: {
        'firstClick': 'proposeEnPassant',
        'secondClick': 'validEnPassant'
    },
    proposeEnPassant: function (chess, event) {
        var pieceSelect = event.case.getCurrent();
        if (Tools.sameType(pieceSelect, P_HEX.PAWN)) {
            var indexSelect = parseInt(event.indexCase);
            var lastMove = chess.moves.moves.getLastMove();
            if (lastMove) {
                var dest = parseInt(lastMove.get('to'));
                var difference = Math.abs(lastMove.get('from') - dest);
                if (Tools.sameType(P_HEX.PAWN, lastMove.get('piece')) && difference === 16
                        && ((!Tools.isAtLeftBorder(dest) && indexSelect === (dest - 1))
                                || (!Tools.isAtRightBorder(dest) && indexSelect === (dest + 1)))
                        ) {
                    //Possibilité de faire un 'en passant'
                    var turn = event.turn;
                    var board = chess.board;
                    var incr = 8;
                    if (Tools.isBlack(turn)) {
                        incr = -incr;
                    }
                    //Ajouter un 'en passant' plus loin
                    board.chessBoard.at(dest + incr).addTrAndBg(pieceSelect);
                }
            }
        }
        return;
    },
    validEnPassant: function (chess, event, move) {
        //Manger il faut qu'il s'agisse d'un pion, et qu'il n'y ai personne dans la case en question
        if (Tools.sameType(move.get('piece'), P_HEX.PAWN) && !move.get('eat')) {
            var lastMove = chess.moves.moves.getLastMove();
            if (lastMove) {
                var origin = parseInt(move.get('from'));
                var now = parseInt(move.get('to'));
                var lastTo = parseInt(lastMove.get('to'));
                if (Tools.sameColumn(lastTo, now)
                        && !Tools.sameColumn(lastTo, origin)) {
                    //On peut manger la pièce en question ! (l'enlever du jeu)
                    move.set({
                        eat: chess.board.chessBoard.removePiece(lastMove.get('to')),
                        enPassant: true
                    });
                }
            }
        }
        return move;
    }
};

var castling = {
    events: {
        'firstClick': 'proposeCastling',
        'secondClick': 'confirmCastling'
    },
    positionsCastling: {
        white: {
            left: [1, 2],
            right: [6, 5, 4]
        },
        black: {
            left: [57, 58],
            right: [62, 61, 60]
        }
    },
    proposeCastling: function (chess, event) {
        var selected = event.case.getCurrent();
        var color = event.turn;
        if (Tools.sameType(selected, P_HEX.KING) && !chess.moves.moves.myKingMoved(color)
                && !event.case.currentIsBegun()
                ) {
            var chosenColor = Tools.ifWhiteElseIfBlack(color, this.positionsCastling.white, this.positionsCastling.black)

            !chess.moves.moves.myRightRookMoved(color)
                    && this.castlingPossible(chess, chosenColor.right, color) &&
                    this.updateForCastling(chess, chosenColor.right, event.case.getCurrent());

            !chess.moves.moves.myLeftRookMoved(color) &&
                    this.castlingPossible(chess, chosenColor.left, color) &&
                    this.updateForCastling(chess, chosenColor.left, event.case.getCurrent());
        }

    },
    confirmCastling: function (chess, event, move) {
        var moved = move.get('piece'),
                from = parseInt(move.get('from')),
                to = parseInt(move.get('to')),
                difference = to - from;
        //Le roi a fait un roque
        if (Tools.sameType(moved, P_HEX.KING) && Math.abs(difference) >= 2) {
            var rookOrigin,
                    rookDestination,
                    moveName;
            if (difference > 0) {
                //grand roque
                rookOrigin = to + 2;
                rookDestination = to - 1;
                moveName = {
                    'bigCastling': true
                };
            } else {
                //petit roque
                rookOrigin = to - 1;
                rookDestination = to + 1;
                moveName = {
                    'littleCastling': true
                };
            }
            var rook = chess.board.chessBoard.removePiece(rookOrigin);
            chess.board.chessBoard.at(rookDestination).setCurrent(rook);
            move.set(moveName);
        }
        return move;
    },
    castlingPossible: function (chess, positions, color) {
        for (var pos in positions) {
            var index = positions[pos];
            var box = chess.board.chessBoard.at(index);
            if (positions.length === 3 && pos === 0 && !box.isEmpty()) {
                return false;
            } else if (!box.isEmpty() || box.isBegunBy(Tools.getInvertColor(color))) {
                return false;
            }
        }
        return true;
    },
    updateForCastling: function (chess, positions, piece) {
        var kingIndex = positions.length === 2 ? positions[0] : positions[1];
        chess.board.chessBoard.at(kingIndex).addTrack(piece);
    }
};

var pawnTransform = {
    init: function () {
        var self = this;
        $('.modal-close').on('click', function () {
            $('#newpiece').modal('hide');
            self.changePawn(this);
        });
    },
    events: {
        'secondClick': 'transformPawn'
    },
    transformPawn: function (chess, event, move) {
        this.chess = chess;
        this.event = event;
        var piece = event.case.getCurrent();
        if (Tools.sameType(piece, P_HEX.PAWN) && Tools.isOnHisLastLine(piece, event.indexCase)) {
            //Le pion est arrivé sur sa dernière case, on doit le transformer
            $('#newpiece').modal({
                keyboard: false
            });
        }
        return move;
    },
    changePawn: function (target) {
        var nwType = $(target).data('hex');
        var pawn = this.event.case.getCurrent();
        var nwPiece = Tools.changeType(pawn, nwType);
        this.chess.board.chessBoard.at(this.event.indexCase).setCurrent(nwPiece);
        this.chess.board.chessBoard.updateAll(this.event.turn);
        this.chess.board.renderPieces();
        this.chess.board.hilightChessKing(this.event.turn);
    }
};

var mat = {
    events: {
        'afterUpdate': 'checkForMat'
    },
    checkForMat: function (chess, event, move) {
        /**
         * Mat signifie : à la find de mon tour, l'autre roi :
         *  - Est en échec
         *  - Toutes les cases autour sont menacées, ou contiennent un allié
         *  - Les 'begun' listes ne peuvent pas être protégées
         * 
         */
        var color = Tools.getInvertColor(event.turn);
        if (chess.board.chessBoard.myKingIsChess(color)
                && chess.board.chessBoard.kingCannotMove(color)
                && !chess.board.chessBoard.canProtectKing(color)) {
            this.cinematiqueCheckMate(Tools.getInvertColor(color));
        }
        return move;
    },
    cinematiqueCheckMate: function (colorWin) {
        $("#patOrMat").html("Les vainqueurs sont les : <strong>" + Tools.getColorName(colorWin) + "s</strong> !");
        $("#winner").modal();
    }
};

var pat = {
    events: {
        'afterUpdate': 'checkForPat'
    },
    checkForPat: function (chess, event, move) {
        /**
         * Pat signifie, à la fin de mon tour, l'autre roi :
         * - N'est pas en échec
         * - Est le seul à pouvoir bouger
         * - A toutes les cases autour de lui menacées
         * - Il n'y a plus que deux pièces sur le jeu
         */

        var color = Tools.getInvertColor(event.turn);
        if (!chess.board.chessBoard.myKingIsChess(color)
                && chess.board.chessBoard.kingCannotMove(color)
                && chess.board.chessBoard.colorCantMove(color)
                || chess.board.chessBoard.onlyTwoLeft()) {
            this.cinematiqueCheckPat();
        }
        return move;

    },
    cinematiqueCheckPat: function () {
        $("#patOrMat").html("Pat ! Egalité ! Aucun vainqueurs !");
        $("#winner").modal();
    }
};
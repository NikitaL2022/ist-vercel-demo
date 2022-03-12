import{s as e,r as t,$ as i,y as o,R as n,x as a,w as l}from"./a3aab9e6.js";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let r,s,c=/(url\()([^)]*)(\))/g,h=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function d(e,t){if(e&&h.test(e))return e;if("//"===e)return e;if(void 0===r){r=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",r="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),r)try{return new URL(e,t).href}catch(t){return e}return s||(s=document.implementation.createHTMLDocument("temp"),s.base=s.createElement("base"),s.head.appendChild(s.base),s.anchor=s.createElement("a"),s.body.appendChild(s.anchor)),s.base.href=t,s.anchor.href=e,s.anchor.href||e}function p(e,t){return e.replace(c,(function(e,i,o,n){return i+"'"+d(o.replace(/["']/g,""),t)+"'"+n}))}function m(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const u=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const f=u&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})();let g=window.Polymer&&window.Polymer.rootPath||m(document.baseURI||window.location.href),v=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,b=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,y=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,z=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,x=window.Polymer&&window.Polymer.legacyOptimizations||!1,_=window.Polymer&&window.Polymer.legacyWarnings||!1,w=window.Polymer&&window.Polymer.syncInitialRender||!1,k=window.Polymer&&window.Polymer.legacyUndefined||!1,M=window.Polymer&&window.Polymer.orderedComputed||!1,H=window.Polymer&&window.Polymer.removeNestedTemplates||!1,C=window.Polymer&&window.Polymer.fastDomIf||!1,V=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,L=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,S=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,E=0;const T=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=E++;return function(o){let n=o.__mixinSet;if(n&&n[i])return o;let a=t,l=a.get(o);if(!l){l=e(o),a.set(o,l);let t=Object.create(l.__mixinSet||n||null);t[i]=!0,l.__mixinSet=t}return l}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let A={},P={};function O(e,t){A[e]=P[e.toLowerCase()]=t}function I(e){return A[e]||P[e.toLowerCase()]}class R extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=I(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,o){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=d(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=m(t)}return this.__assetpath}register(e){if(e=e||this.id){if(y&&void 0!==I(e))throw O(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,O(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}R.prototype.modules=A,customElements.define("dom-module",R);function $(e){return R.import(e)}function N(e){const t=p((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function F(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...D(t[e]));return i}function D(e){const t=$(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...q(t));const i=t.querySelector("template");i&&e.push(...B(i,t.assetpath)),t._styles=e}return t._styles}function B(e,t){if(!e._styles){const i=[],o=e.content.querySelectorAll("style");for(let e=0;e<o.length;e++){let n=o[e],a=n.getAttribute("include");a&&i.push(...F(a).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(n.textContent=p(n.textContent,t)),i.push(n)}e._styles=i}return e._styles}function q(e){const t=[],i=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<i.length;e++){let o=i[e];if(o.import){const e=o.import,i=o.hasAttribute("shady-unscoped");if(i&&!e._unscopedStyle){const t=N(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=N(e));t.push(i?e._unscopedStyle:e._style)}}return t}function j(e){let t=$(e);if(t&&void 0===t._cssText){let e=function(e){let t="",i=q(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),i=t.querySelector("template");i&&(e+=function(e,t){let i="";const o=B(e,t);for(let e=0;e<o.length;e++){let t=o[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const U=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/;function K(e){return e.indexOf(".")>=0}function Y(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function W(e,t){return 0===e.indexOf(t+".")}function J(e,t){return 0===t.indexOf(e+".")}function G(e,t,i){return t+i.slice(e.length)}function X(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let o=e[i].toString().split(".");for(let e=0;e<o.length;e++)t.push(o[e])}return t.join(".")}return e}function Z(e){return Array.isArray(e)?X(e).split("."):e.toString().split(".")}function Q(e,t,i){let o=e,n=Z(t);for(let e=0;e<n.length;e++){if(!o)return;o=o[n[e]]}return i&&(i.path=n.join(".")),o}function ee(e,t,i){let o=e,n=Z(t),a=n[n.length-1];if(n.length>1){for(let e=0;e<n.length-1;e++){if(o=o[n[e]],!o)return}o[a]=i}else o[t]=i;return n.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const te={},ie=/-[a-z]/g,oe=/([A-Z])/g;function ne(e){return te[e]||(te[e]=e.indexOf("-")<0?e:e.replace(ie,(e=>e[1].toUpperCase())))}function ae(e){return te[e]||(te[e]=e.replace(oe,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let le=0,re=0,se=[],ce=0,he=!1,de=document.createTextNode("");new window.MutationObserver((function(){he=!1;const e=se.length;for(let t=0;t<e;t++){let e=se[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}se.splice(0,e),re+=e})).observe(de,{characterData:!0});const pe={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},me={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},ue={run:e=>(he||(he=!0,de.textContent=ce++),se.push(e),le++),cancel(e){const t=e-re;if(t>=0){if(!se[t])throw new Error("invalid async handle: "+e);se[t]=null}}},fe=ue,ge=T((e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let o=this.__data[e],n=this._shouldPropertyChange(e,t,o);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=o),this.__data[e]=t,this.__dataPending[e]=t),n}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,fe.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i)),this.__dataCounter--}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,o){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,o)}_attributeToProperty(e,t,i){if(!this.__serializing){const o=this.__dataAttributes,n=o&&o[e]||e;this[n]=this._deserializeValue(t,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const o=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=U(e)),void 0===o?e.removeAttribute(i):e.setAttribute(i,o)}_serializeValue(e){return"boolean"==typeof e?e?"":void 0:null!=e?e.toString():void 0}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),ve={};let be=HTMLElement.prototype;for(;be;){let e=Object.getOwnPropertyNames(be);for(let t=0;t<e.length;t++)ve[e[t]]=!0;be=Object.getPrototypeOf(be)}const ye=T((e=>{const t=ge(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(ne(e[t]))}static attributeNameForProperty(e){return ae(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){if("object"==typeof e){if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}}return super._serializeValue(e)}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!ve[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),ze={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let xe=!1,_e=!1;function we(e){(function(){if(!xe){xe=!0;const e=document.createElement("textarea");e.placeholder="a",_e=e.placeholder===e.textContent}return _e})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function ke(e){let t=e.getAttribute("is");if(t&&ze[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function Me(e,t){let i=t.parentInfo&&Me(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,o=0;e;e=e.nextSibling)if(t.parentIndex===o++)return e}function He(e,t,i,o){o.id&&(t[o.id]=i)}function Ce(e,t,i){if(i.events&&i.events.length)for(let o,n=0,a=i.events;n<a.length&&(o=a[n]);n++)e._addMethodEventListenerToNode(t,o.name,o.value,e)}function Ve(e,t,i,o){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=o)}const Le=T((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(t),i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let o=!1,n=e;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(t.hasInsertionPoint=!0):o=this._parseTemplateNestedTemplate(n,t,i)||o,we(n),n.firstChild&&this._parseTemplateChildNodes(n,t,i),n.hasAttributes&&n.hasAttributes()&&(o=this._parseTemplateNodeAttributes(n,t,i)||o),o||i.noted}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let o,n=e.firstChild,a=0;n;n=o){if("template"==n.localName&&(n=ke(n)),o=n.nextSibling,n.nodeType===Node.TEXT_NODE){let i=o;for(;i&&i.nodeType===Node.TEXT_NODE;)n.textContent+=i.textContent,o=i.nextSibling,e.removeChild(i),i=o;if(t.stripWhiteSpace&&!n.textContent.trim()){e.removeChild(n);continue}}let l={parentIndex:a,parentInfo:i};this._parseTemplateNode(n,t,l)&&(l.infoIndex=t.nodeInfoList.push(l)-1),n.parentNode&&a++}}static _parseTemplateNestedTemplate(e,t,i){let o=e,n=this._parseTemplate(o,t);return(n.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,i){let o=!1,n=Array.from(e.attributes);for(let a,l=n.length-1;a=n[l];l--)o=this._parseTemplateNodeAttribute(e,t,i,a.name,a.value)||o;return o}static _parseTemplateNodeAttribute(e,t,i,o,n){return"on-"===o.slice(0,3)?(e.removeAttribute(o),i.events=i.events||[],i.events.push({name:o.slice(3),value:n}),!0):"id"===o&&(i.id=n,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let i=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,o=t.content||e.content,n=document.importNode(o,!0);n.__noInsertionPoint=!t.hasInsertionPoint;let a=n.nodeList=new Array(i.length);n.$={};for(let e,o=0,l=i.length;o<l&&(e=i[o]);o++){let i=a[o]=Me(n,e);He(0,n.$,i,e),Ve(0,i,e,t),Ce(this,i,e)}return n=n,n}_addMethodEventListenerToNode(e,t,i,o){let n=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(o=o||e,0,i);return this._addEventListenerToNode(e,t,n),n}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Se=0;const Ee=[],Te={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ae=/[A-Z]/;function Pe(e,t,i){let o=e[t];if(o){if(!e.hasOwnProperty(t)&&(o=e[t]=Object.create(e[t]),i))for(let e in o){let t=o[e],i=o[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}else o=e[t]={};return o}function Oe(e,t,i,o,n,a){if(t){let l=!1;const r=Se++;for(let s in i){let c=t[n?Y(s):s];if(c)for(let t,h=0,d=c.length;h<d&&(t=c[h]);h++)t.info&&t.info.lastRun===r||n&&!Re(s,t.trigger)||(t.info&&(t.info.lastRun=r),t.fn(e,s,i,o,t.info,n,a),l=!0)}return l}return!1}function Ie(e,t,i,o,n,a,l,r){let s=!1,c=t[l?Y(o):o];if(c)for(let t,h=0,d=c.length;h<d&&(t=c[h]);h++)t.info&&t.info.lastRun===i||l&&!Re(o,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,o,n,a,t.info,l,r),s=!0);return s}function Re(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!W(i,e))||!(!t.wildcard||!J(i,e))}return!0}function $e(e,t,i,o,n){let a="string"==typeof n.method?e[n.method]:n.method,l=n.property;a?a.call(e,e.__data[l],o[l]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function Ne(e,t,i){let o=Y(t);if(o!==t){return Fe(e,ae(o)+"-changed",i[t],t),!0}return!1}function Fe(e,t,i,o){let n={value:i,queueProperty:!0};o&&(n.path=o),U(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function De(e,t,i,o,n,a){let l=(a?Y(t):t)!=t?t:null,r=l?Q(e,l):e.__data[t];l&&void 0===r&&(r=i[t]),Fe(e,n.eventName,r,l)}function Be(e,t,i,o,n){let a=e.__data[t];v&&(a=v(a,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,a)}function qe(e,t,i,o){let n=e[Te.COMPUTE];if(n)if(M){Se++;const a=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[Te.COMPUTE];let o,{counts:n,ready:a,total:l}=function(e){const t=e.__computeInfo,i={},o=e[Te.COMPUTE],n=[];let a=0;for(let e in t){const o=t[e];a+=i[e]=o.args.filter((e=>!e.literal)).length+(o.dynamicFn?1:0)}for(let e in o)t[e]||n.push(e);return{counts:i,ready:n,total:a}}(e);for(;o=a.shift();){t.set(o,t.size);const e=i[o];e&&e.forEach((e=>{const t=e.info.methodInfo;--l,0==--n[t]&&a.push(t)}))}if(0!==l){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),l=[];for(let e in t)Ue(e,n,l,a,o);let r;for(;r=l.shift();)Ke(e,"",t,i,r)&&Ue(r.methodInfo,n,l,a,o);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;Oe(e,n,a,i,o);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}const je=(e,t,i)=>{let o=0,n=t.length-1,a=-1;for(;o<=n;){const l=o+n>>1,r=i.get(t[l].methodInfo)-i.get(e.methodInfo);if(r<0)o=l+1;else{if(!(r>0)){a=l;break}n=l-1}}a<0&&(a=n+1),t.splice(a,0,e)},Ue=(e,t,i,o,n)=>{const a=t[n?Y(e):e];if(a)for(let t=0;t<a.length;t++){const l=a[t];l.info.lastRun===Se||n&&!Re(e,l.trigger)||(l.info.lastRun=Se,je(l.info,i,o))}};function Ke(e,t,i,o,n){let a=Qe(e,t,i,o,n);if(a===Ee)return!1;let l=n.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[l]?e._setPendingProperty(l,a,!0):(e[l]=a,!1)}function Ye(e,t,i,o,n,a,l){i.bindings=i.bindings||[];let r={kind:o,target:n,parts:a,literal:l,isCompound:1!==a.length};if(i.bindings.push(r),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(r)){let{event:e,negate:t}=r.parts[0];r.listenerEvent=e||ae(n)+"-changed",r.listenerNegate=t}let s=t.nodeInfoList.length;for(let i=0;i<r.parts.length;i++){let o=r.parts[i];o.compoundIndex=i,We(e,t,r,o,s)}}function We(e,t,i,o,n){if(!o.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let a=o.dependencies,l={index:n,binding:i,part:o,evaluator:e};for(let i=0;i<a.length;i++){let o=a[i];"string"==typeof o&&(o=nt(o),o.wildcard=!0),e._addTemplatePropertyEffect(t,o.rootProperty,{fn:Je,info:l,trigger:o})}}}function Je(e,t,i,o,n,a,l){let r=l[n.index],s=n.binding,c=n.part;if(a&&c.source&&t.length>c.source.length&&"property"==s.kind&&!s.isCompound&&r.__isPropertyEffectsClient&&r.__dataHasAccessor&&r.__dataHasAccessor[s.target]){let o=i[t];t=G(c.source,s.target,t),r._setPendingPropertyOrPath(t,o,!1,!0)&&e._enqueueClient(r)}else{let l=n.evaluator._evaluateBinding(e,c,t,i,o,a);l!==Ee&&function(e,t,i,o,n){n=function(e,t,i,o){if(i.isCompound){let n=e.__dataCompoundStorage[i.target];n[o.compoundIndex]=t,t=n.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,n,i,o),v&&(n=v(n,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,n,i.target);else{let o=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[o]?t[Te.READ_ONLY]&&t[Te.READ_ONLY][o]||t._setPendingProperty(o,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,o,n)}}(e,r,s,c,l)}}function Ge(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),o=t.parts,n=new Array(o.length);for(let e=0;e<o.length;e++)n[e]=o[e].literal;let a=t.target;i[a]=n,t.literal&&"property"==t.kind&&("className"===a&&(e=U(e)),e[a]=t.literal)}}function Xe(e,t,i){if(i.listenerEvent){let o=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,o,n){let a,l=e.detail,r=l&&l.path;r?(o=G(i,o,r),a=l&&l.value):a=e.currentTarget[i],a=n?!a:a,t[Te.READ_ONLY]&&t[Te.READ_ONLY][o]||!t._setPendingPropertyOrPath(o,a,!0,Boolean(r))||l&&l.queueProperty||t._invalidateProperties()}(e,t,i.target,o.source,o.negate)}))}}function Ze(e,t,i,o,n,a){a=t.static||a&&("object"!=typeof a||a[t.methodName]);let l={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:a};for(let n,a=0;a<t.args.length&&(n=t.args[a]);a++)n.literal||e._addPropertyEffect(n.rootProperty,i,{fn:o,info:l,trigger:n});return a&&e._addPropertyEffect(t.methodName,i,{fn:o,info:l}),l}function Qe(e,t,i,o,n){let a=e._methodHost||e,l=a[n.methodName];if(l){let o=e._marshalArgs(n.args,t,i);return o===Ee?Ee:l.apply(a,o)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const et=[],tt=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function it(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function ot(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:et};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let i=nt(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function nt(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},o=t[0];switch("-"===o&&(o=t[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=Y(t),i.structured=K(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function at(e,t,i){let o=Q(e,i);return void 0===o&&(o=t[i]),o}function lt(e,t,i,o){const n={indexSplices:o};k&&!e._overrideLegacyUndefined&&(t.splices=n),e.notifyPath(i+".splices",n),e.notifyPath(i+".length",t.length),k&&!e._overrideLegacyUndefined&&(n.indexSplices=[])}function rt(e,t,i,o,n,a){lt(e,t,i,[{index:o,addedCount:n,removed:a,object:t,type:"splice"}])}const st=T((e=>{const t=Le(ye(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Te}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ct.length){let e=ct[ct.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Te.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==Te.READ_ONLY);let o=Pe(this,t,!0)[e];o||(o=this[t][e]=[]),o.push(i)}_removePropertyEffect(e,t,i){let o=Pe(this,t,!0)[e],n=o.indexOf(i);n>=0&&o.splice(n,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Te.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Te.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Te.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Te.COMPUTE)}_setPendingPropertyOrPath(e,t,i,o){if(o||Y(Array.isArray(e)?e[0]:e)!==e){if(!o){let i=Q(this,e);if(!(e=ee(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let o=e.__dataLinkedPaths;if(o){let n;for(let a in o){let l=o[a];J(a,t)?(n=G(a,l,t),e._setPendingPropertyOrPath(n,i,!0,!0)):J(l,t)&&(n=G(l,a,t),e._setPendingPropertyOrPath(n,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=U(e)),e[t]=i)}_setPendingProperty(e,t,i){let o=this.__dataHasPaths&&K(e),n=o?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,n[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),o?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(o||this[Te.NOTIFY]&&this[Te.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[Te.READ_ONLY]&&this[Te.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let o,n=this.__dataHasPaths;this.__dataHasPaths=!1,qe(this,t,i,n),o=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,i,n),this._flushClients(),Oe(this,this[Te.REFLECT],t,i,n),Oe(this,this[Te.OBSERVE],t,i,n),o&&function(e,t,i,o,n){let a,l,r=e[Te.NOTIFY],s=Se++;for(let l in t)t[l]&&(r&&Ie(e,r,s,l,i,o,n)||n&&Ne(e,l,i))&&(a=!0);a&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}(this,o,t,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[Te.PROPAGATE]&&Oe(this,this[Te.PROPAGATE],e,t,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,i)}_runEffectsForTemplate(e,t,i,o){const n=(t,o)=>{Oe(this,e.propertyEffects,t,i,o,e.nodeList);for(let n=e.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,t,i,o)};e.runEffects?e.runEffects(n,t,o):n(t,o)}linkPaths(e,t){e=X(e),t=X(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=X(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};lt(this,Q(this,e,i),i.path,t)}get(e,t){return Q(t||this,e)}set(e,t,i){i?ee(i,e,t):this[Te.READ_ONLY]&&this[Te.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},o=Q(this,e,i),n=o.length,a=o.push(...t);return t.length&&rt(this,o,i.path,n,t.length,[]),a}pop(e){let t={path:""},i=Q(this,e,t),o=Boolean(i.length),n=i.pop();return o&&rt(this,i,t.path,i.length,0,[n]),n}splice(e,t,i,...o){let n,a={path:""},l=Q(this,e,a);return t<0?t=l.length-Math.floor(-t):t&&(t=Math.floor(t)),n=2===arguments.length?l.splice(t):l.splice(t,i,...o),(o.length||n.length)&&rt(this,l,a.path,t,o.length,n),n}shift(e){let t={path:""},i=Q(this,e,t),o=Boolean(i.length),n=i.shift();return o&&rt(this,i,t.path,0,0,[n]),n}unshift(e,...t){let i={path:""},o=Q(this,e,i),n=o.unshift(...t);return t.length&&rt(this,o,i.path,0,t.length,[]),n}notifyPath(e,t){let i;if(1==arguments.length){let o={path:""};t=Q(this,e,o),i=o.path}else i=Array.isArray(e)?X(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,Te.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let o={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,Te.OBSERVE,{fn:$e,info:o,trigger:{name:e}}),i&&this._addPropertyEffect(t,Te.OBSERVE,{fn:$e,info:o,trigger:{name:t}})}_createMethodObserver(e,t){let i=ot(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");Ze(this,i,Te.OBSERVE,Qe,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Te.NOTIFY,{fn:De,info:{eventName:ae(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,Te.REFLECT,{fn:Be,info:{attrName:t}})}_createComputedProperty(e,t,i){let o=ot(t);if(!o)throw new Error("Malformed computed expression '"+t+"'");const n=Ze(this,o,Te.COMPUTE,Ke,e,i);Pe(this,"__computeInfo")[e]=n}_marshalArgs(e,t,i){const o=this.__data,n=[];for(let a=0,l=e.length;a<l;a++){let{name:l,structured:r,wildcard:s,value:c,literal:h}=e[a];if(!h)if(s){const e=J(l,t),n=at(o,i,e?t:l);c={path:e?t:l,value:n,base:e?Q(o,l):n}}else c=r?at(o,i,l):o[l];if(k&&!this._overrideLegacyUndefined&&void 0===c&&e.length>1)return Ee;n[a]=c}return n}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),o=this.__preBoundTemplateInfo==i;if(!o)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t)if(i=Object.create(i),i.wasPreBound=o,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,o=t.lastChild;i.parent=t,t.lastChild=i,i.previousSibling=o,o?o.nextSibling=i:t.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let o=e.propertyEffects=e.propertyEffects||{};(o[t]=o[t]||[]).push(i)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),ct.push(this);let i=super._stampTemplate(e,t);if(ct.pop(),t.nodeList=i.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=i.firstChild;t;t=t.nextSibling)e.push(t)}return i.templateInfo=t,function(e,t){let{nodeList:i,nodeInfoList:o}=t;if(o.length)for(let t=0;t<o.length;t++){let n=o[t],a=i[t],l=n.bindings;if(l)for(let t=0;t<l.length;t++){let i=l[t];Ge(a,i),Xe(a,e,i)}a.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:i,nextSibling:o,parent:n}=t;i?i.nextSibling=o:n&&(n.firstChild=o),o?o.previousSibling=i:n&&(n.lastChild=i),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];U(U(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,i,o){let n=t._parseTemplateNode.call(this,e,i,o);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=it(t)||" ",Ye(this,i,o,"text","textContent",t),n=!0)}return n}static _parseTemplateNodeAttribute(e,i,o,n,a){let l=this._parseBindings(a,i);if(l){let t=n,a="property";Ae.test(n)?a="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),a="attribute");let r=it(l);return r&&"attribute"==a&&("class"==n&&e.hasAttribute("class")&&(r+=" "+e.getAttribute(n)),e.setAttribute(n,r)),"attribute"==a&&"disable-upgrade$"==t&&e.setAttribute(n,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===a&&(n=ne(n)),Ye(this,i,o,a,n,l,r),!0}return t._parseTemplateNodeAttribute.call(this,e,i,o,n,a)}static _parseTemplateNestedTemplate(e,i,o){let n=t._parseTemplateNestedTemplate.call(this,e,i,o);const a=e.parentNode,l=o.templateInfo,r="dom-if"===a.localName,s="dom-repeat"===a.localName;H&&(r||s)&&(a.removeChild(e),(o=o.parentInfo).templateInfo=l,o.noted=!0,n=!1);let c=l.hostProps;if(C&&r)c&&(i.hostProps=Object.assign(i.hostProps||{},c),H||(o.parentInfo.noted=!0));else{let e="{";for(let t in c){Ye(this,i,o,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return n}static _parseBindings(e,t){let i,o=[],n=0;for(;null!==(i=tt.exec(e));){i.index>n&&o.push({literal:e.slice(n,i.index)});let a=i[1][0],l=Boolean(i[2]),r=i[3].trim(),s=!1,c="",h=-1;"{"==a&&(h=r.indexOf("::"))>0&&(c=r.substring(h+2),r=r.substring(0,h),s=!0);let d=ot(r),p=[];if(d){let{args:e,methodName:i}=d;for(let t=0;t<e.length;t++){let i=e[t];i.literal||p.push(i)}let o=t.dynamicFns;(o&&o[i]||d.static)&&(p.push(i),d.dynamicFn=!0)}else p.push(r);o.push({source:r,mode:a,negate:l,customEvent:s,signature:d,dependencies:p,event:c}),n=tt.lastIndex}if(n&&n<e.length){let t=e.substring(n);t&&o.push({literal:t})}return o.length?o:null}static _evaluateBinding(e,t,i,o,n,a){let l;return l=t.signature?Qe(e,i,o,0,t.signature):i!=t.source?Q(e,t.source):a&&K(i)?Q(e,i):e.__data[i],t.negate&&(l=!l),l}}})),ct=[];const ht=T((e=>{const t=ge(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof n?t:null}function o(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let i in e){const o=e[i];t[i]="function"==typeof o?{type:o}:o}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=o(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,o(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n})),dt=window.ShadyCSS&&window.ShadyCSS.cssBuild,pt=T((e=>{const t=ht(st(e));function i(e,t,i,o){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,o)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,o[i.observer]),e._addPropertyToAttributeMap(t)}function o(e,t,i,o){if(!dt){const n=t.content.querySelectorAll("style"),a=B(t),l=function(e){let t=$(e);return t?q(t):[]}(i),r=t.content.firstElementChild;for(let i=0;i<l.length;i++){let n=l[i];n.textContent=e._processStyleText(n.textContent,o),t.content.insertBefore(n,r)}let s=0;for(let t=0;t<a.length;t++){let i=a[t],l=n[s];l!==i?(i=i.cloneNode(!0),l.parentNode.insertBefore(i,l)):s++,i.textContent=e._processStyleText(i.textContent,o)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i),S&&dt&&f){const i=t.content.querySelectorAll("style");if(i){let t="";Array.from(i).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):x||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let o=0;o<e.length;o++)i._createMethodObserver(e[o],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!y||z)&&(t=R.import(e,"template"),y&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=m(e.url);else{const e=R.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=g,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let o=t[i];"value"in o&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=o)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return p(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;o(this,t,e,i?d(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=U(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),w&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=d(this.importPath)),d(e,t)}static _parseTemplateContent(e,i,o){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,o)}static _addTemplatePropertyEffect(e,i,o){return!_||i in this._properties||o.info.part.signature&&o.info.part.signature.static||o.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,i,o)}}}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class mt{constructor(e){this.value=e.toString()}toString(){return this.value}}function ut(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof mt)return function(e){if(e instanceof mt)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const ft=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce(((t,i,o)=>t+ut(i)+e[o+1]),e[0]),i},gt=pt(HTMLElement),vt=!(window.ShadyDOM&&window.ShadyDOM.inUse);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let bt,yt;function zt(e){bt=(!e||!e.shimcssproperties)&&(vt||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(yt=window.ShadyCSS.cssBuild);const xt=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?bt=window.ShadyCSS.nativeCss:window.ShadyCSS?(zt(window.ShadyCSS),window.ShadyCSS=void 0):zt(window.WebComponents&&window.WebComponents.flags);const _t=bt;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class wt{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function kt(e){return Mt(function(e){let t=new wt;t.start=0,t.end=e.length;let i=t;for(let o=0,n=e.length;o<n;o++)if(e[o]===Vt){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;i=new wt,i.start=o+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[o]===Lt&&(i.end=o+1,i=i.parent||t);return t}(e=e.replace(St.comments,"").replace(St.port,"")),e)}function Mt(e,t){let i=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let o=e.previous?e.previous.end:e.parent.start;i=t.substring(o,e.start-1),i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(i),i=i.replace(St.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let n=e.parsedSelector=e.selector=i.trim();e.atRule=0===n.indexOf(At),e.atRule?0===n.indexOf(Tt)?e.type=Ct.MEDIA_RULE:n.match(St.keyframesRule)&&(e.type=Ct.KEYFRAMES_RULE,e.keyframesName=e.selector.split(St.multipleSpaces).pop()):0===n.indexOf(Et)?e.type=Ct.MIXIN_RULE:e.type=Ct.STYLE_RULE}let o=e.rules;if(o)for(let e,i=0,n=o.length;i<n&&(e=o[i]);i++)Mt(e,t);return e}function Ht(e,t,i=""){let o="";if(e.cssText||e.rules){let i=e.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(Et)}(i))for(let e,n=0,a=i.length;n<a&&(e=i[n]);n++)o=Ht(e,t,o);else o=t?e.cssText:function(e){return function(e){return e.replace(St.mixinApply,"").replace(St.varApply,"")}(e=function(e){return e.replace(St.customProp,"").replace(St.mixinProp,"")}(e))}(e.cssText),o=o.trim(),o&&(o="  "+o+"\n")}return o&&(e.selector&&(i+=e.selector+" "+Vt+"\n"),i+=o,e.selector&&(i+=Lt+"\n\n")),i}const Ct={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Vt="{",Lt="}",St={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Et="--",Tt="@media",At="@",Pt=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Ot=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,It=/@media\s(.*)/,Rt=new Set;function $t(e){const t=e.textContent;if(!Rt.has(t)){Rt.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function Nt(e){return e.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ft(e,t){return e?("string"==typeof e&&(e=kt(e)),t&&Bt(e,t),Ht(e,_t)):""}function Dt(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=kt(e.textContent)),e.__cssRules||null}function Bt(e,t,i,o){if(!e)return;let n=!1,a=e.type;if(o&&a===Ct.MEDIA_RULE){let t=e.selector.match(It);t&&(window.matchMedia(t[1]).matches||(n=!0))}a===Ct.STYLE_RULE?t(e):i&&a===Ct.KEYFRAMES_RULE?i(e):a===Ct.MIXIN_RULE&&(n=!0);let l=e.rules;if(l&&!n)for(let e,n=0,a=l.length;n<a&&(e=l[n]);n++)Bt(e,t,i,o)}function qt(e,t){let i=e.indexOf("var(");if(-1===i)return t(e,"","","");let o=function(e,t){let i=0;for(let o=t,n=e.length;o<n;o++)if("("===e[o])i++;else if(")"===e[o]&&0==--i)return o;return-1}(e,i+3),n=e.substring(i+4,o),a=e.substring(0,i),l=qt(e.substring(o+1),t),r=n.indexOf(",");return-1===r?t(a,n.trim(),"",l):t(a,n.substring(0,r).trim(),n.substring(r+1).trim(),l)}window.ShadyDOM&&window.ShadyDOM.wrap;function jt(e){if(void 0!==yt)return yt;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),e.__cssBuild=t}}return e.__cssBuild||""}function Ut(e){return""!==jt(e)}function Kt(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function Yt(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Wt=/;\s*/m,Jt=/^\s*(initial)|(inherit)\s*$/,Gt=/\s*!important/;class Xt{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Zt=null;class Qt{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Xt}detectMixin(e){return function(e){const t=Ot.test(e)||Pt.test(e);return Ot.lastIndex=0,Pt.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const o=i[e];Nt(o)?vt||($t(o),o.parentNode.removeChild(o)):(t.push(o.textContent),o.parentNode.removeChild(o))}return t.join("").trim()}(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=Dt(e);return this.transformRules(i,t),e.textContent=Ft(i),i}transformCustomStyle(e){let t=Dt(e);return Bt(t,(e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)})),e.textContent=Ft(t),t}transformRules(e,t){this._currentElement=t,Bt(e,(e=>{this.transformRule(e)})),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(Pt,((e,i,o,n)=>this._produceCssProperties(e,i,o,n,t))),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let o=!1;return Bt(t,(t=>{o=o||t===e,o||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))})),i}_consumeCssProperties(e,t){let i=null;for(;i=Ot.exec(e);){let o=i[0],n=i[1],a=i.index,l=a+o.indexOf("@apply"),r=a+o.length,s=e.slice(0,l),c=e.slice(r),h=t?this._fallbacksFromPreviousRules(t):{};Object.assign(h,this._cssTextToMap(s));let d=this._atApplyToCssProperties(n,h);e=`${s}${d}${c}`,Ot.lastIndex=a+d.length}return e}_atApplyToCssProperties(e,t){e=e.replace(Wt,"");let i=[],o=this._map.get(e);if(o||(this._map.set(e,{}),o=this._map.get(e)),o){let n,a,l;this._currentElement&&(o.dependants[this._currentElement]=!0);const r=o.properties;for(n in r)l=t&&t[n],a=[n,": var(",e,"_-_",n],l&&a.push(",",l.replace(Gt,"")),a.push(")"),Gt.test(r[n])&&a.push(" !important"),i.push(a.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=Jt.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,o,n=e.split(";"),a={};for(let e,l,r=0;r<n.length;r++)e=n[r],e&&(l=e.split(":"),l.length>1&&(i=l[0].trim(),o=l.slice(1).join(":"),t&&(o=this._replaceInitialOrInherit(i,o)),a[i]=o));return a}_invalidateMixinEntry(e){if(Zt)for(let t in e.dependants)t!==this._currentElement&&Zt(t)}_produceCssProperties(e,t,i,o,n){if(i&&qt(i,((e,t)=>{t&&this._map.get(t)&&(o=`@apply ${t};`)})),!o)return e;let a=this._consumeCssProperties(""+o,n),l=e.slice(0,e.indexOf("--")),r=this._cssTextToMap(a,!0),s=r,c=this._map.get(t),h=c&&c.properties;h?s=Object.assign(Object.create(h),r):this._map.set(t,s);let d,p,m=[],u=!1;for(d in s)p=r[d],void 0===p&&(p="initial"),h&&!(d in h)&&(u=!0),m.push(`${t}_-_${d}: ${p}`);return u&&this._invalidateMixinEntry(c),c&&(c.properties=s),i&&(l=`${e};${l}`),`${l}${m.join("; ")};`}}Qt.prototype.detectMixin=Qt.prototype.detectMixin,Qt.prototype.transformStyle=Qt.prototype.transformStyle,Qt.prototype.transformCustomStyle=Qt.prototype.transformCustomStyle,Qt.prototype.transformRules=Qt.prototype.transformRules,Qt.prototype.transformRule=Qt.prototype.transformRule,Qt.prototype.transformTemplate=Qt.prototype.transformTemplate,Qt.prototype._separator="_-_",Object.defineProperty(Qt.prototype,"invalidCallback",{get:()=>Zt,set(e){Zt=e}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ei={},ti="_applyShimCurrentVersion",ii="_applyShimNextVersion",oi="_applyShimValidatingVersion",ni=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ai(e){let t=ei[e];t&&function(e){e[ti]=e[ti]||0,e[oi]=e[oi]||0,e[ii]=(e[ii]||0)+1}(t)}function li(e){return e[ti]===e[ii]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ri,si=null,ci=window.HTMLImports&&window.HTMLImports.whenReady||null;function hi(e){requestAnimationFrame((function(){ci?ci(e):(si||(si=new Promise((e=>{ri=e})),"complete"===document.readyState?ri():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&ri()}))),si.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const di="__shadyCSSCachedStyle";let pi=null,mi=null;class ui{constructor(){this.customStyles=[],this.enqueued=!1,hi((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}enqueueDocumentValidation(){!this.enqueued&&mi&&(this.enqueued=!0,hi(mi))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[di])return e[di];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[di])continue;const o=this.getStyleForCustomStyle(i);if(o){const e=o.__appliedElement||o;pi&&pi(e),i[di]=e}}return e}}ui.prototype.addCustomStyle=ui.prototype.addCustomStyle,ui.prototype.getStyleForCustomStyle=ui.prototype.getStyleForCustomStyle,ui.prototype.processStyles=ui.prototype.processStyles,Object.defineProperties(ui.prototype,{transformCallback:{get:()=>pi,set(e){pi=e}},validateCallback:{get:()=>mi,set(e){let t=!1;mi||(t=!0),mi=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const fi=new Qt;class gi{constructor(){this.customStyleInterface=null,fi.invalidCallback=ai}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{fi.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame((()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()}))})}prepareTemplate(e,t){if(this.ensure(),Ut(e))return;ei[t]=e;let i=fi.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],o=this.customStyleInterface.getStyleForCustomStyle(i);o&&fi.transformCustomStyle(o)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&Kt(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,i="",o="";return t?t.indexOf("-")>-1?i=t:(o=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,o=e.extends),{is:i,typeExtension:o}}(e),i=ei[t];if((!i||!Ut(i))&&i&&!li(i)){(function(e){return!li(e)&&e[oi]===e[ii]})(i)||(this.prepareTemplate(i,t),function(e){e[oi]=e[ii],e._validating||(e._validating=!0,ni.then((function(){e[ti]=e[ii],e._validating=!1})))}(i));let o=e.shadowRoot;if(o){let e=o.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=Ft(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new gi;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,o){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>Yt(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:_t,nativeShadow:vt,cssBuild:yt,disableRuntime:xt},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=fi;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class vi{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,bi.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),bi.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof vi?e._cancelAsync():e=new vi,e.setConfig(t,i),e}}let bi=new Set;const yi=function(e){bi.add(e)},zi=function(){const e=Boolean(bi.size);return bi.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let xi="string"==typeof document.head.style.touchAction,_i="__polymerGestures",wi="__polymerGesturesHandled",ki="__polymerGesturesTouchAction",Mi=["mousedown","mousemove","mouseup","click"],Hi=[0,1,4,2],Ci=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Vi(e){return Mi.indexOf(e)>-1}let Li=!1;function Si(e){if(!Vi(e)&&"touchend"!==e)return xi&&Li&&b?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){Li=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Ei=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Ti=[],Ai={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Pi={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Oi(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let o=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<o.length;e++)t.push(o[e])}}return t}let Ii=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[wi]={skip:!0},"click"===e.type)){let t=!1,o=Bi(e);for(let e=0;e<o.length;e++){if(o[e].nodeType===Node.ELEMENT_NODE)if("label"===o[e].localName)Ti.push(o[e]);else if(i=o[e],Ai[i.localName]){let i=Oi(o[e]);for(let e=0;e<i.length;e++)t=t||Ti.indexOf(i[e])>-1}if(o[e]===Ni.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Ri(e){let t=Ei?["click"]:Mi;for(let i,o=0;o<t.length;o++)i=t[o],e?(Ti.length=0,document.addEventListener(i,Ii,!0)):document.removeEventListener(i,Ii,!0)}function $i(e){let t=e.type;if(!Vi(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Ci&&(t=Hi[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let Ni={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Fi(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function Di(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){Ni.mouse.mouseIgnoreJob||Ri(!0),Ni.mouse.target=Bi(e)[0],Ni.mouse.mouseIgnoreJob=vi.debounce(Ni.mouse.mouseIgnoreJob,pe.after(2500),(function(){Ri(),Ni.mouse.target=null,Ni.mouse.mouseIgnoreJob=null}))}),!!Li&&{passive:!0});const Bi=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],qi={},ji=[];function Ui(e){const t=Bi(e);return t.length>0?t[0]:e.target}function Ki(e){let t,i=e.type,o=e.currentTarget.__polymerGestures;if(!o)return;let n=o[i];if(n){if(!e[wi]&&(e[wi]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(Ni.touch.id=t.identifier),Ni.touch.id!==t.identifier)return;xi||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)Ni.touch.x=t.clientX,Ni.touch.y=t.clientY,Ni.touch.scrollDecided=!1;else if("touchmove"===i){if(Ni.touch.scrollDecided)return;Ni.touch.scrollDecided=!0;let i=function(e){let t="auto",i=Bi(e);for(let e,o=0;o<i.length;o++)if(e=i[o],e[ki]){t=e[ki];break}return t}(e),o=!1,n=Math.abs(Ni.touch.x-t.clientX),a=Math.abs(Ni.touch.y-t.clientY);e.cancelable&&("none"===i?o=!0:"pan-x"===i?o=a>n:"pan-y"===i&&(o=n>a)),o?e.preventDefault():Zi("track")}}(e)}if(t=e[wi],!t.skip){for(let i,o=0;o<ji.length;o++)i=ji[o],n[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let o,a=0;a<ji.length;a++)o=ji[a],n[o.name]&&!t[o.name]&&(t[o.name]=!0,o[i](e))}}}function Yi(e,t,i){return!!qi[t]&&(function(e,t,i){let o=qi[t],n=o.deps,a=o.name,l=e[_i];l||(e[_i]=l={});for(let t,i,o=0;o<n.length;o++)t=n[o],Ei&&Vi(t)&&"click"!==t||(i=l[t],i||(l[t]=i={_count:0}),0===i._count&&e.addEventListener(t,Ki,Si(t)),i[a]=(i[a]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),o.touchAction&&Gi(e,o.touchAction)}(e,t,i),!0)}function Wi(e,t,i){return!!qi[t]&&(function(e,t,i){let o=qi[t],n=o.deps,a=o.name,l=e[_i];if(l)for(let t,i,o=0;o<n.length;o++)t=n[o],i=l[t],i&&i[a]&&(i[a]=(i[a]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,Ki,Si(t)));e.removeEventListener(t,i)}(e,t,i),!0)}function Ji(e){ji.push(e);for(let t=0;t<e.emits.length;t++)qi[e.emits[t]]=e}function Gi(e,t){xi&&e instanceof HTMLElement&&ue.run((()=>{e.style.touchAction=t})),e[ki]=t}function Xi(e,t,i){let o=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=i,U(e).dispatchEvent(o),o.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Zi(e){let t=function(e){for(let t,i=0;i<ji.length;i++){t=ji[i];for(let i,o=0;o<t.emits.length;o++)if(i=t.emits[o],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function Qi(e,t,i,o){t&&Xi(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:o,prevent:function(e){return Zi(e)}})}function eo(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let o=Math.abs(e.x-t),n=Math.abs(e.y-i);return o>=5||n>=5}function to(e,t,i){if(!t)return;let o,n=e.moves[e.moves.length-2],a=e.moves[e.moves.length-1],l=a.x-e.x,r=a.y-e.y,s=0;n&&(o=a.x-n.x,s=a.y-n.y),Xi(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:l,dy:r,ddx:o,ddy:s,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),o=i;for(;o&&o.shadowRoot&&!window.ShadyDOM;){let n=o;if(o=o.shadowRoot.elementFromPoint(e,t),n===o)break;o&&(i=o)}return i}(i.clientX,i.clientY)}})}function io(e,t,i){let o=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),a=Ui(i||t);!a||Pi[a.localName]&&a.hasAttribute("disabled")||(isNaN(o)||isNaN(n)||o<=25&&n<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=Ui(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),o=e.pageX,n=e.pageY;return!(o>=i.left&&o<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(t))&&(e.prevent||Xi(a,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Ji({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Di(this.info)},mousedown:function(e){if(!$i(e))return;let t=Ui(e),i=this;Fi(this.info,(function(e){$i(e)||(Qi("up",t,e),Di(i.info))}),(function(e){$i(e)&&Qi("up",t,e),Di(i.info)})),Qi("down",t,e)},touchstart:function(e){Qi("down",Ui(e),e.changedTouches[0],e)},touchend:function(e){Qi("up",Ui(e),e.changedTouches[0],e)}}),Ji({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Di(this.info)},mousedown:function(e){if(!$i(e))return;let t=Ui(e),i=this,o=function(e){let o=e.clientX,n=e.clientY;eo(i.info,o,n)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&Zi("tap"),i.info.addMove({x:o,y:n}),$i(e)||(i.info.state="end",Di(i.info)),t&&to(i.info,t,e),i.info.started=!0)};Fi(this.info,o,(function(e){i.info.started&&o(e),Di(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Ui(e),i=e.changedTouches[0],o=i.clientX,n=i.clientY;eo(this.info,o,n)&&("start"===this.info.state&&Zi("tap"),this.info.addMove({x:o,y:n}),to(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Ui(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),to(this.info,t,i))}}),Ji({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){$i(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){$i(e)&&io(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){io(this.info,e.changedTouches[0],e)}});const oo=T((e=>class extends e{_addEventListenerToNode(e,t,i){Yi(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){Wi(e,t,i)||super._removeEventListenerFromNode(e,t,i)}})),no=/:host\(:dir\((ltr|rtl)\)\)/g,ao=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,lo=/:dir\((?:ltr|rtl)\)/,ro=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),so=[];
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let co=null,ho="";function po(){ho=document.documentElement.getAttribute("dir")}function mo(e){if(!e.__autoDirOptOut){e.setAttribute("dir",ho)}}function uo(){po(),ho=document.documentElement.getAttribute("dir");for(let e=0;e<so.length;e++)mo(so[e])}const fo=T((e=>{ro||co||(po(),co=new MutationObserver(uo),co.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=ye(e);class i extends t{static _processStyleText(e,i){return e=t._processStyleText.call(this,e,i),!ro&&lo.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(no,':host([dir="$1"])'),t=t.replace(ao,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(co&&co.takeRecords().length&&uo(),so.push(this),mo(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=so.indexOf(this);e>-1&&so.splice(e,1)}}}return i.__activateDir=!1,i}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let go=!1,vo=[],bo=[];function yo(){go=!0,requestAnimationFrame((function(){go=!1,function(e){for(;e.length;)zo(e.shift())}(vo),setTimeout((function(){!function(e){for(let t=0,i=e.length;t<i;t++)zo(e.shift())}(bo)}))}))}function zo(e){const t=e[0],i=e[1],o=e[2];try{i.apply(t,o)}catch(e){setTimeout((()=>{throw e}))}}function xo(e,t,i){go||yo(),bo.push([e,t,i])}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function _o(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function wo(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?_o():window.addEventListener("DOMContentLoaded",_o);function ko(e,t,i,o,n,a){let l,r=0,s=0,c=Math.min(i-t,a-n);if(0==t&&0==n&&(r=function(e,t,i){for(let o=0;o<i;o++)if(!Ho(e[o],t[o]))return o;return i}(e,o,c)),i==e.length&&a==o.length&&(s=function(e,t,i){let o=e.length,n=t.length,a=0;for(;a<i&&Ho(e[--o],t[--n]);)a++;return a}(e,o,c-r)),n+=r,a-=s,(i-=s)-(t+=r)==0&&a-n==0)return[];if(t==i){for(l=wo(t,[],0);n<a;)l.removed.push(o[n++]);return[l]}if(n==a)return[wo(t,[],i-t)];let h=function(e){let t=e.length-1,i=e[0].length-1,o=e[t][i],n=[];for(;t>0||i>0;){if(0==t){n.push(2),i--;continue}if(0==i){n.push(3),t--;continue}let a,l=e[t-1][i-1],r=e[t-1][i],s=e[t][i-1];a=r<s?r<l?r:l:s<l?s:l,a==l?(l==o?n.push(0):(n.push(1),o=l),t--,i--):a==r?(n.push(3),t--,o=r):(n.push(2),i--,o=s)}return n.reverse(),n}(function(e,t,i,o,n,a){let l=a-n+1,r=i-t+1,s=new Array(l);for(let e=0;e<l;e++)s[e]=new Array(r),s[e][0]=e;for(let e=0;e<r;e++)s[0][e]=e;for(let i=1;i<l;i++)for(let a=1;a<r;a++)if(Ho(e[t+a-1],o[n+i-1]))s[i][a]=s[i-1][a-1];else{let e=s[i-1][a]+1,t=s[i][a-1]+1;s[i][a]=e<t?e:t}return s}(e,t,i,o,n,a));l=void 0;let d=[],p=t,m=n;for(let e=0;e<h.length;e++)switch(h[e]){case 0:l&&(d.push(l),l=void 0),p++,m++;break;case 1:l||(l=wo(p,[],0)),l.addedCount++,p++,l.removed.push(o[m]),m++;break;case 2:l||(l=wo(p,[],0)),l.addedCount++,p++;break;case 3:l||(l=wo(p,[],0)),l.removed.push(o[m]),m++}return l&&d.push(l),d}function Mo(e,t){return ko(e,0,e.length,t,0,t.length)}function Ho(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Co(e){return"slot"===e.localName}let Vo=class{static getFlattenedNodes(e){const t=U(e);return Co(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map((e=>Co(e)?U(e=e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Co(this._target)?this._listenSlots([this._target]):U(this._target).children&&(this._listenSlots(U(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Co(this._target)?this._unlistenSlots([this._target]):U(this._target).children&&(this._unlistenSlots(U(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,ue.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=Mo(t,this._effectiveNodes);for(let t,o=0;o<i.length&&(t=i[o]);o++)for(let i,o=0;o<t.removed.length&&(i=t.removed[o]);o++)e.removedNodes.push(i);for(let o,n=0;n<i.length&&(o=i[n]);n++)for(let i=o.index;i<o.index+o.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let o=!1;return(e.addedNodes.length||e.removedNodes.length)&&(o=!0,this.callback.call(this._target,e)),o}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];Co(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];Co(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Lo=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=zi()}while(e||t)},So=Element.prototype,Eo=So.matches||So.matchesSelector||So.mozMatchesSelector||So.msMatchesSelector||So.oMatchesSelector||So.webkitMatchesSelector,To=function(e,t){return Eo.call(e,t)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Ao{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Vo(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(U(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=U(t).parentNode||U(t).host;return t===this.node}getOwnerRoot(){return U(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?U(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=U(this.node).assignedSlot;for(;t;)e.push(t),t=U(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return U(i).importNode(e,t)}getEffectiveChildNodes(){return Vo.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let o,n=0,a=t.length;n<a&&(o=t[n]);n++)o.nodeType===Node.ELEMENT_NODE&&To(o,e)&&i.push(o);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function Po(e,t){for(let i=0;i<t.length;i++){let o=t[i];Object.defineProperty(e,o,{get:function(){return this.node[o]},configurable:!0})}}class Oo{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Ao.prototype.cloneNode,Ao.prototype.appendChild,Ao.prototype.insertBefore,Ao.prototype.removeChild,Ao.prototype.replaceChild,Ao.prototype.setAttribute,Ao.prototype.removeAttribute,Ao.prototype.querySelector,Ao.prototype.querySelectorAll,Ao.prototype.parentNode,Ao.prototype.firstChild,Ao.prototype.lastChild,Ao.prototype.nextSibling,Ao.prototype.previousSibling,Ao.prototype.firstElementChild,Ao.prototype.lastElementChild,Ao.prototype.nextElementSibling,Ao.prototype.previousElementSibling,Ao.prototype.childNodes,Ao.prototype.children,Ao.prototype.classList,Ao.prototype.textContent,Ao.prototype.innerHTML;let Io=Ao;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Ao.prototype).forEach((t=>{"activeElement"!=t&&(e.prototype[t]=Ao.prototype[t])})),Po(e.prototype,["classList"]),Io=e,Object.defineProperties(Oo.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&Ro(e).getOwnerRoot(),i=this.path;for(let e=0;e<i.length;e++){const o=i[e];if(Ro(o).getOwnerRoot()===t)return o}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let i=0;i<t.length;i++){let o=t[i];e[o]=function(){return this.node[o].apply(this.node,arguments)}}}(Ao.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),Po(Ao.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let i=0;i<t.length;i++){let o=t[i];Object.defineProperty(e,o,{get:function(){return this.node[o]},set:function(e){this.node[o]=e},configurable:!0})}}(Ao.prototype,["textContent","innerHTML","className"]);const Ro=function(e){if((e=e||document)instanceof Io)return e;if(e instanceof Oo)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Oo(e):new Io(e),e.__domApi=t),t},$o=window.ShadyDOM,No=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Fo(e,t){return U(e).getRootNode()===t}
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const Do=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};T((e=>{const t=pt(e);let i=Do(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,i,o){"disable-upgrade"==e?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,U(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,i,o)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}}));let Bo=window.ShadyCSS;const qo=T((e=>{const t=oo(pt(e)),i=dt?t:fo(t),o=Do(i),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class a extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,i){(this.__dataAttributes&&this.__dataAttributes[e]||"disable-upgrade"===e)&&this.attributeChangedCallback(e,t,i,null)}setAttribute(e,t){if(L&&!this._legacyForceObservedAttributes){const i=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,i,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(L&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return L&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):o.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,i,o){t!==i&&("disable-upgrade"==e?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,U(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,i,o),this.attributeChanged(e,t,i)))}attributeChanged(e,t,i){}_initializeProperties(){if(x&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),L&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,i=e.length;t<i;t++){const i=e[t];this.__attributeReaction(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let o,n=0;n<i.length&&(o=i[n]);n++){let i=Object.getOwnPropertyDescriptor(t,o);i&&Object.defineProperty(e,o,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let o=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});o.detail=t;let n=i.node||this;return U(n).dispatchEvent(o),o}listen(e,t,i){e=e||this;let o=this.__boundListeners||(this.__boundListeners=new WeakMap),n=o.get(e);n||(n={},o.set(e,n));let a=t+i;n[a]||(n[a]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let o=this.__boundListeners&&this.__boundListeners.get(e),n=t+i,a=o&&o[n];a&&(this._removeEventListenerFromNode(e,t,a),o[n]=null)}setScrollDirection(e,t){Gi(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=U(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Ro(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Ro(this).getEffectiveChildNodes()}queryDistributedElements(e){return Ro(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,o=0;i=e[o];o++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Ro(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){const t=this;return t!==e&&U(t).contains(e)&&U(t).getRootNode()===U(e).getRootNode()}isLocalDescendant(e){return this.root===U(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!$o||!No)return null;if(!$o.handlesDynamicScoping)return null;const i=No.ScopingShim;if(!i)return null;const o=i.scopeForNode(e),n=U(e).getRootNode(),a=e=>{if(!Fo(e,n))return;const t=Array.from($o.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const a=t[e];if(!Fo(a,n))continue;const l=i.currentScopeForNode(a);l!==o&&(""!==l&&i.unscopeNode(a,l),i.scopeNode(a,o))}};if(a(e),t){const t=new MutationObserver((e=>{for(let t=0;t<e.length;t++){const i=e[t];for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&a(t)}}}));return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return Bo.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=vi.debounce(this._debouncers[e],i>0?pe.after(i):ue,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?pe.run(e.bind(this),t):~ue.run(e.bind(this))}cancelAsync(e){e<0?ue.cancel(~e):pe.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return To(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(U(i).setAttribute(e,""),!0):(U(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,o){o=o||this,this.transform("translate3d("+e+","+t+","+i+")",o)}arrayDelete(e,t){let i;if(Array.isArray(e)){if(i=e.indexOf(t),i>=0)return e.splice(i,1)}else{if(i=Q(this,e).indexOf(t),i>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return a.prototype.is="",a})),jo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Uo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Ko=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Uo);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Yo(e,t){return Zo({},qo(t),e)}function Wo(e,t,i,o){!function(e,t,i){const o=e._noAccessors,n=Object.getOwnPropertyNames(e);for(let a=0;a<n.length;a++){let l=n[a];if(!(l in i))if(o)t[l]=e[l];else{let i=Object.getOwnPropertyDescriptor(e,l);i&&(i.configurable=!0,Object.defineProperty(t,l,i))}}}(t,e,o);for(let e in jo)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function Jo(e,t,i){t=t||[];for(let o=e.length-1;o>=0;o--){let n=e[o];n?Array.isArray(n)?Jo(n,t):t.indexOf(n)<0&&(!i||i.indexOf(n)<0)&&t.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return t}function Go(e,t){for(const i in t){const o=e[i],n=t[i];e[i]=!("value"in n)&&o&&"value"in o?Object.assign({value:o.value},n):n}}const Xo=qo(HTMLElement);function Zo(e,t,i){let o;const n={};class a extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(o)for(let e,t=0;t<o.length;t++)e=o[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(o)for(let e=0;e<o.length;e++)Go(t,o[e].properties);return Go(t,e.properties),t}static get observers(){let t=[];if(o)for(let e,i=0;i<o.length;i++)e=o[i],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=n.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=a.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),x&&l(e);const t=Object.getPrototypeOf(this);let i=n.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=n.registered,i)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=n.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=n.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=n.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=n.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=n.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let o=n.attributeChanged;if(o)for(let n=0;n<o.length;n++)o[n].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;o=Jo(i,null,e),a.prototype.behaviors=e?e.concat(i):o}const l=t=>{o&&function(e,t,i){for(let o=0;o<t.length;o++)Wo(e,t[o],i,Ko)}(t,o,n),Wo(t,e,n,Uo)};return x||l(a.prototype),a.generatedFrom=e,a}const Qo=function(e){let t;return t="function"==typeof e?e:Qo.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function en(e,t,i,o,n){let a;n&&(a="object"==typeof i&&null!==i,a&&(o=e.__dataTemp[t]));let l=o!==i&&(o==o||i==i);return a&&l&&(e.__dataTemp[t]=i),l}Qo.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(Xo):Xo;return i=Zo(e,i,e.behaviors),i.is=i.prototype.is=e.is,i};const tn=T((e=>class extends e{_shouldPropertyChange(e,t,i){return en(this,e,t,i,!0)}})),on=T((e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return en(this,e,t,i,this.mutableData)}}));tn._mutablePropertyChange=en;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let nn=null;function an(){return nn}an.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:an,writable:!0}});const ln=st(an),rn=tn(ln);const sn=st(class{});function cn(e,t){for(let i=0;i<t.length;i++){let o=t[i];if(Boolean(e)!=Boolean(o.__hideTemplateChildren__))if(o.nodeType===Node.TEXT_NODE)e?(o.__polymerTextContent__=o.textContent,o.textContent=""):o.textContent=o.__polymerTextContent__;else if("slot"===o.localName)if(e)o.__polymerReplaced__=document.createComment("hidden-slot"),U(U(o).parentNode).replaceChild(o.__polymerReplaced__,o);else{const e=o.__polymerReplaced__;e&&U(U(e).parentNode).replaceChild(o,e)}else o.style&&(e?(o.__polymerDisplay__=o.style.display,o.style.display="none"):o.style.display=o.__polymerDisplay__);o.__hideTemplateChildren__=e,o._showHideChildren&&o._showHideChildren(e)}}class hn extends sn{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,(e=>{e.model=this,i(e)}));else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(e,t,i)}}_showHideChildren(e){cn(e,this.children)}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}hn.prototype.__dataHost,hn.prototype.__templatizeOptions,hn.prototype._methodHost,hn.prototype.__templatizeOwner,hn.prototype.__hostProps;const dn=tn(hn);function pn(e){let t=e.__dataHost;return t&&t._methodHost||t}function mn(e,t,i){let o=i.mutableData?dn:hn;vn.mixin&&(o=vn.mixin(o));let n=class extends o{};return n.prototype.__templatizeOptions=i,n.prototype._bindTemplate(e),function(e,t,i,o){let n=i.hostProps||{};for(let t in o.instanceProps){delete n[t];let i=o.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:gn(t,i)})}if(o.forwardHostProp&&t.__dataHost)for(let t in n)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(n,e,t,i),n}function un(e,t,i,o){let n=i.forwardHostProp;if(n&&t.hasHostProps){const a="template"==e.localName;let l=t.templatizeTemplateClass;if(!l){if(a){let e=i.mutableData?rn:ln;class o extends e{}l=t.templatizeTemplateClass=o}else{const i=e.constructor;class o extends i{}l=t.templatizeTemplateClass=o}let r=t.hostProps;for(let e in r)l.prototype._addPropertyEffect("_host_"+e,l.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:fn(e,n)}),l.prototype._createNotifyingProperty("_host_"+e);_&&o&&function(e,t,i){const o=i.constructor._properties,{propertyEffects:n}=e,{instanceProps:a}=t;for(let e in n)if(!(o[e]||a&&a[e])){const t=n[e];for(let i=0;i<t.length;i++){const{part:o}=t[i].info;if(!o.signature||!o.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,i,o)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),a)!function(e,t){nn=e,Object.setPrototypeOf(e,t.prototype),new t,nn=null}(e,l),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,l.prototype);const i=t.hostProps;for(let t in i)if(t="_host_"+t,t in e){const i=e[t];delete e[t],e.__data[t]=i}}}}function fn(e,t){return function(e,i,o){t.call(e.__templatizeOwner,i.substring("_host_".length),o[i])}}function gn(e,t){return function(e,i,o){t.call(e.__templatizeOwner,e,i,o[i])}}function vn(e,t,i){if(y&&!pn(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let o=(t?t.constructor:hn)._parseTemplate(e),n=o.templatizeInstanceClass;n||(n=mn(e,o,i),o.templatizeInstanceClass=n);const a=pn(e);un(e,o,i,a);let l=class extends n{};return l.prototype._methodHost=a,l.prototype.__dataHost=e,l.prototype.__templatizeOwner=t,l.prototype.__hostProps=o.hostProps,l=l,l}function bn(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=U(t).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const yn={templatize(e,t){this._templatizerTemplate=e,this.ctor=vn(e,this,{mutableData:Boolean(t),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(e){return new this.ctor(e)},modelForElement(e){return bn(this._templatizerTemplate,e)}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let zn=!1;function xn(){if(x&&!u){if(!zn){zn=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _n=oo(on(st(HTMLElement)));customElements.define("dom-bind",class extends _n{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),y)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,o){this.mutableData=!0}connectedCallback(){xn()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){U(U(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver((()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()}));return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const wn=on(gt);class kn extends wn{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!V,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),xn()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=U(U(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=vn(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(e,t){let i=this.__instances;for(let o,n=0;n<i.length&&(o=i[n]);n++)o.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if((o=this.as)===(n=t)||W(o,n)||J(o,n)){let o=e[this.itemsIndexAs];t==this.as&&(this.items[o]=i);let n=G(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,t);this.notifyPath(n,i)}var o,n}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=vi.debounce(this.__renderDebouncer,t>0?pe.after(t):ue,e.bind(this)),yi(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Lo()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),i=this.__calculateLimit(t.length);this.__updateInstances(e,i,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame((()=>this.__continueChunking()))),this._setRenderedItemCount(this.__instances.length),V&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return this.__filterFn&&(t=t.filter(((t,i,o)=>this.__filterFn(e[t],i,o)))),this.__sortFn&&t.sort(((t,i)=>this.__sortFn(e[t],e[i]))),t}__calculateLimit(e){let t=e;const i=this.__instances.length;if(this.initialCount){let o;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),o=Math.max(t-i,0),this.__chunkCount=o||1):(o=Math.min(Math.max(e-i,0),this.__chunkCount),t=Math.min(i+o,e)),this.__shouldMeasureChunk=o===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,i){const o=this.__itemsIdxToInstIdx={};let n;for(n=0;n<t;n++){let t=this.__instances[n],a=i[n],l=e[a];o[a]=n,t?(t._setPendingProperty(this.as,l),t._setPendingProperty(this.indexAs,n),t._setPendingProperty(this.itemsIndexAs,a),t._flushProperties()):this.__insertInstance(l,n,a)}for(let e=this.__instances.length-1;e>=n;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=U(t.root);for(let e=0;e<t.children.length;e++){let o=t.children[e];i.appendChild(o)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,i){let o={};return o[this.as]=e,o[this.indexAs]=t,o[this.itemsIndexAs]=i,new this.__ctor(o)}__insertInstance(e,t,i){const o=this.__stampInstance(e,t,i);let n=this.__instances[t+1],a=n?n.children[0]:this;return U(U(this).parentNode).insertBefore(o.root,a),this.__instances[t]=o,o}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),o=i.indexOf("."),n=o<0?i:i.substring(0,o);if(n==parseInt(n,10)){let e=o<0?"":i.substring(o+1);this.__handleObservedPaths(e);let a=this.__itemsIdxToInstIdx[n],l=this.__instances[a];if(l){let i=this.as+(e?"."+e:"");l._setPendingPropertyOrPath(i,t,!1,!0),l._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return bn(this.template,e)}}customElements.define(kn.is,kn);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Mn extends gt{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=vi.debounce(this.__renderDebouncer,ue,(()=>this.__render())),yi(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=U(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||U(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),xn()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:U(e).querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!U(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=U(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(U(this).previousSibling!==t[t.length-1])for(let i,o=0;o<t.length&&(i=t[o]);o++)U(e).insertBefore(i,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){Lo()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),V&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const Hn=C?class extends Mn{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(y&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=t._bindTemplate(this.__template,!0);i.runEffects=(e,t,i)=>{let o=this.__syncInfo;if(this.if)o&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(o.changedProps,t)),e(t,i);else if(this.__instance)if(o||(o=this.__syncInfo={runEffects:e,changedProps:{}}),i)for(const e in t){const t=Y(e);o.changedProps[t]=this.__dataHost[t]}else Object.assign(o.changedProps,t)},this.__instance=t._stampTemplate(this.__template,i),U(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,cn(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends Mn{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=vn(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Y(e)]=!0))}})),this.__instance=new this.__ctor,U(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=U(e[0]).parentNode;if(t){t=U(t);for(let i,o=0;o<e.length&&(i=e[o]);o++)t.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define(Hn.is,Hn);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Cn=T((e=>{let t=pt(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],o=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),o){let e=Mo(i,o);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let o=e[i];t.forEach(((e,i)=>{e<o.index||(e>=o.index+o.removed.length?t.set(i,e+o.addedCount-o.removed.length):t.set(i,-1))}));for(let e=0;e<o.addedCount;e++){let i=o.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach(((e,o)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(o)):i++}))}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)}))}else this.__selectedMap.forEach((e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)}))}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach(((i,o)=>{t==e++&&this.deselect(o)}))}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})),Vn=Cn(gt);class Ln extends Vn{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Ln.is,Ln);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Sn=new ui;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){Sn.processStyles(),Kt(e,t)},styleElement(e){Sn.processStyles()},styleDocument(e){Sn.processStyles(),Kt(document.body,e)},getComputedStyleValue:(e,t)=>Yt(e,t),flushCustomStyles(){},nativeCss:_t,nativeShadow:vt,cssBuild:yt,disableRuntime:xt}),window.ShadyCSS.CustomStyleInterface=Sn;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const En=window.ShadyCSS.CustomStyleInterface;class Tn extends HTMLElement{constructor(){super(),this._style=null,En.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=j(t[e]);return i}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let An;window.customElements.define("custom-style",Tn),An=tn._mutablePropertyChange;const Pn={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,i){return An(this,e,t,i,this.mutableData)}},On=qo(HTMLElement).prototype;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({is:"iron-request",hostAttributes:{hidden:!0},properties:{xhr:{type:Object,notify:!0,readOnly:!0,value:function(){return new XMLHttpRequest}},response:{type:Object,notify:!0,readOnly:!0,value:function(){return null}},status:{type:Number,notify:!0,readOnly:!0,value:0},statusText:{type:String,notify:!0,readOnly:!0,value:""},completes:{type:Object,readOnly:!0,notify:!0,value:function(){return new Promise(function(e,t){this.resolveCompletes=e,this.rejectCompletes=t}.bind(this))}},progress:{type:Object,notify:!0,readOnly:!0,value:function(){return{}}},aborted:{type:Boolean,notify:!0,readOnly:!0,value:!1},errored:{type:Boolean,notify:!0,readOnly:!0,value:!1},timedOut:{type:Boolean,notify:!0,readOnly:!0,value:!1}},get succeeded(){if(this.errored||this.aborted||this.timedOut)return!1;var e=this.xhr.status||0;return 0===e||e>=200&&e<300},send:function(e){var t=this.xhr;if(t.readyState>0)return null;t.addEventListener("progress",function(e){this._setProgress({lengthComputable:e.lengthComputable,loaded:e.loaded,total:e.total}),this.fire("iron-request-progress-changed",{value:this.progress})}.bind(this)),t.addEventListener("error",function(t){this._setErrored(!0),this._updateStatus();var i=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(i)}.bind(this)),t.addEventListener("timeout",function(t){this._setTimedOut(!0),this._updateStatus();var i=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(i)}.bind(this)),t.addEventListener("abort",function(){this._setAborted(!0),this._updateStatus();var t=new Error("Request aborted."),i=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(i)}.bind(this)),t.addEventListener("loadend",function(){if(this._updateStatus(),this._setResponse(this.parseResponse()),this.succeeded)this.resolveCompletes(this);else{var t=new Error("The request failed with status code: "+this.xhr.status),i=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(i)}}.bind(this)),this.url=e.url;var i=!1!==e.async;t.open(e.method||"GET",e.url,i);var o={json:"application/json",text:"text/plain",html:"text/html",xml:"application/xml",arraybuffer:"application/octet-stream"}[e.handleAs],n=e.headers||Object.create(null),a=Object.create(null);for(var l in n)a[l.toLowerCase()]=n[l];if(n=a,o&&!n.accept&&(n.accept=o),Object.keys(n).forEach((function(e){/[A-Z]/.test(e)&&On._error("Headers must be lower case, got",e),t.setRequestHeader(e,n[e])}),this),i){t.timeout=e.timeout;var r=e.handleAs;!e.jsonPrefix&&r||(r="text"),t.responseType=t._responseType=r,e.jsonPrefix&&(t._jsonPrefix=e.jsonPrefix)}t.withCredentials=!!e.withCredentials;var s=this._encodeBodyObject(e.body,n["content-type"]);return t.send(s),this.completes},parseResponse:function(){var e=this.xhr,t=e.responseType||e._responseType,i=!this.xhr.responseType,o=e._jsonPrefix&&e._jsonPrefix.length||0;try{switch(t){case"json":if(i||void 0===e.response)try{return JSON.parse(e.responseText)}catch(t){return console.warn("Failed to parse JSON sent from "+e.responseURL),null}return e.response;case"xml":return e.responseXML;case"blob":case"document":case"arraybuffer":return e.response;default:if(o)try{return JSON.parse(e.responseText.substring(o))}catch(t){return console.warn("Failed to parse JSON sent from "+e.responseURL),null}return e.responseText}}catch(e){this.rejectCompletes(new Error("Could not parse response. "+e.message))}},abort:function(){this._setAborted(!0),this.xhr.abort()},_encodeBodyObject:function(e,t){if("string"==typeof e)return e;var i=e;switch(t){case"application/json":return JSON.stringify(i);case"application/x-www-form-urlencoded":return this._wwwFormUrlEncode(i)}return e},_wwwFormUrlEncode:function(e){if(!e)return"";var t=[];return Object.keys(e).forEach((function(i){t.push(this._wwwFormUrlEncodePiece(i)+"="+this._wwwFormUrlEncodePiece(e[i]))}),this),t.join("&")},_wwwFormUrlEncodePiece:function(e){return null!=e&&e.toString?encodeURIComponent(e.toString().replace(/\r?\n/g,"\r\n")).replace(/%20/g,"+"):""},_updateStatus:function(){this._setStatus(this.xhr.status),this._setStatusText(void 0===this.xhr.statusText?"":this.xhr.statusText)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({is:"iron-ajax",hostAttributes:{hidden:!0},properties:{url:{type:String},params:{type:Object,value:function(){return{}}},method:{type:String,value:"GET"},headers:{type:Object,value:function(){return{}}},contentType:{type:String,value:null},body:{type:Object,value:null},sync:{type:Boolean,value:!1},handleAs:{type:String,value:"json"},withCredentials:{type:Boolean,value:!1},timeout:{type:Number,value:0},auto:{type:Boolean,value:!1},verbose:{type:Boolean,value:!1},lastRequest:{type:Object,notify:!0,readOnly:!0},lastProgress:{type:Object,notify:!0,readOnly:!0},loading:{type:Boolean,notify:!0,readOnly:!0},lastResponse:{type:Object,notify:!0,readOnly:!0},lastError:{type:Object,notify:!0,readOnly:!0},activeRequests:{type:Array,notify:!0,readOnly:!0,value:function(){return[]}},debounceDuration:{type:Number,value:0,notify:!0},jsonPrefix:{type:String,value:""},bubbles:{type:Boolean,value:!1},rejectWithRequest:{type:Boolean,value:!1},_boundHandleResponse:{type:Function,value:function(){return this._handleResponse.bind(this)}}},observers:["_requestOptionsChanged(url, method, params.*, headers, contentType, body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)"],created:function(){this._boundOnProgressChanged=this._onProgressChanged.bind(this)},get queryString(){var e,t,i=[];for(e in this.params)if(t=this.params[e],e=window.encodeURIComponent(e),Array.isArray(t))for(var o=0;o<t.length;o++)i.push(e+"="+window.encodeURIComponent(t[o]));else null!==t?i.push(e+"="+window.encodeURIComponent(t)):i.push(e);return i.join("&")},get requestUrl(){var e=this.queryString,t=this.url||"";if(e){var i=t.indexOf("?")>=0?"&":"?";return t+i+e}return t},get requestHeaders(){var e,t={},i=this.contentType;if(null==i&&"string"==typeof this.body&&(i="application/x-www-form-urlencoded"),i&&(t["content-type"]=i),"object"==typeof this.headers)for(e in this.headers)t[e]=this.headers[e].toString();return t},_onProgressChanged:function(e){this._setLastProgress(e.detail.value)},toRequestOptions:function(){return{url:this.requestUrl||"",method:this.method,headers:this.requestHeaders,body:this.body,async:!this.sync,handleAs:this.handleAs,jsonPrefix:this.jsonPrefix,withCredentials:this.withCredentials,timeout:this.timeout,rejectWithRequest:this.rejectWithRequest}},generateRequest:function(){var e=document.createElement("iron-request"),t=this.toRequestOptions();return this.push("activeRequests",e),e.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this,e)).then(this._discardRequest.bind(this,e)),this.fire("iron-ajax-presend",{request:e,options:t},{bubbles:this.bubbles,cancelable:!0}).defaultPrevented?(e.abort(),e.rejectCompletes(e),e):(this.lastRequest&&this.lastRequest.removeEventListener("iron-request-progress-changed",this._boundOnProgressChanged),e.addEventListener("iron-request-progress-changed",this._boundOnProgressChanged),e.send(t),this._setLastProgress(null),this._setLastRequest(e),this._setLoading(!0),this.fire("request",{request:e,options:t},{bubbles:this.bubbles,composed:!0}),this.fire("iron-ajax-request",{request:e,options:t},{bubbles:this.bubbles,composed:!0}),e)},_handleResponse:function(e){e===this.lastRequest&&(this._setLastResponse(e.response),this._setLastError(null),this._setLoading(!1)),this.fire("response",e,{bubbles:this.bubbles,composed:!0}),this.fire("iron-ajax-response",e,{bubbles:this.bubbles,composed:!0})},_handleError:function(e,t){this.verbose&&On._error(t),e===this.lastRequest&&(this._setLastError({request:e,error:t,status:e.xhr.status,statusText:e.xhr.statusText,response:e.xhr.response}),this._setLastResponse(null),this._setLoading(!1)),this.fire("iron-ajax-error",{request:e,error:t},{bubbles:this.bubbles,composed:!0}),this.fire("error",{request:e,error:t},{bubbles:this.bubbles,composed:!0})},_discardRequest:function(e){var t=this.activeRequests.indexOf(e);t>-1&&this.splice("activeRequests",t,1)},_requestOptionsChanged:function(){this.debounce("generate-request",(function(){null!=this.url&&this.auto&&this.generateRequest()}),this.debounceDuration)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const In={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}},Rn={},$n=ft`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/$n.setAttribute("style","display: none;"),document.head.appendChild($n.content);var Nn=document.createElement("style");Nn.textContent="[hidden] { display: none !important; }",document.head.appendChild(Nn),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({_template:ft`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: var(--app-drawer-content-padding, 120px 0);

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){xo(this,(function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener("keydown",this._tabKeydownHandler.bind(this)),this.listen(this,"track","_track"),this.setScrollDirection("y")})),this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":return void this._setPosition(this._isRTL()?"right":"left");case"end":return void this._setPosition(this._isRTL()?"left":"right")}this._setPosition(this.align)},_escKeydownHandler:function(e){27===e.keyCode&&(e.preventDefault(),this.close())},_track:function(e){if(!this.persistent&&!this.disableSwipe)switch(e.preventDefault(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackMove(e);break;case"end":this._trackEnd(e)}},_trackStart:function(e){this._drawerState=this._DRAWER_STATE.TRACKING;var t=this.$.contentContainer.getBoundingClientRect();this._savedWidth=t.width,"left"===this.position?this._translateOffset=t.left:this._translateOffset=t.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility="visible"},_trackMove:function(e){this._translateDrawer(e.detail.dx+this._translateOffset),this._trackDetails.push({dx:e.detail.dx,timeStamp:Date.now()})},_trackEnd:function(e){var t=e.detail.dx+this._translateOffset,i=this.getWidth(),o="left"===this.position?t>=0||t<=-i:t<=0||t>=i;if(!o){var n=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(e,n),this._drawerState===this._DRAWER_STATE.FLINGING)return}var a=i/2;e.detail.dx<-a?this.opened="right"===this.position:e.detail.dx>a&&(this.opened="left"===this.position),o?this.debounce("_resetDrawerState",this._resetDrawerState):this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=""},_calculateVelocity:function(e,t){for(var i,o=Date.now(),n=o-100,a=0,l=t.length-1;a<=l;){var r=a+l>>1,s=t[r];s.timeStamp>=n?(i=s,l=r-1):a=r+1}return i?(e.detail.dx-i.dx)/(o-i.timeStamp||1):0},_flingDrawer:function(e,t){var i=this._calculateVelocity(e,t);if(!(Math.abs(i)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var o,n=e.detail.dx+this._translateOffset,a=this.getWidth(),l="left"===this.position,r=i>0;o=!r&&l?-(n+a):r&&!l?a-n:-n,r?(i=Math.max(i,this._MIN_TRANSITION_VELOCITY),this.opened="left"===this.position):(i=Math.min(i,-this._MIN_TRANSITION_VELOCITY),this.opened="right"===this.position);var s=this._FLING_INITIAL_SLOPE*o/i;this._styleTransitionDuration(s),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce("_resetDrawerState",this._resetDrawerState,s)}},_styleTransitionDuration:function(e){this.style.transitionDuration=e+"ms",this.$.contentContainer.style.transitionDuration=e+"ms",this.$.scrim.style.transitionDuration=e+"ms"},_styleTransitionTimingFunction:function(e){this.$.contentContainer.style.transitionTimingFunction=e,this.$.scrim.style.transitionTimingFunction=e},_translateDrawer:function(e){var t=this.getWidth();"left"===this.position?(e=Math.max(-t,Math.min(e,0)),this.$.scrim.style.opacity=1+e/t):(e=Math.max(0,Math.min(e,t)),this.$.scrim.style.opacity=1-e/t),this.translate3d(e+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="",this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var e=this._drawerState;e===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(""),this.style.visibility=""),this._savedWidth=null,this.opened?this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._drawerState=this._DRAWER_STATE.CLOSED,e!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow=""),e!==this._DRAWER_STATE.INIT&&this.fire("app-drawer-transitioned"))},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var e=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(","),t=Ro(this).querySelectorAll(e);t.length>0?(this._firstTabStop=t[0],this._lastTabStop=t[t.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var i=this.getAttribute("tabindex");i&&parseInt(i,10)>-1?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(e){if(!this.noFocusTrap){this._drawerState===this._DRAWER_STATE.OPENED&&9===e.keyCode&&(e.shiftKey?this._firstTabStop&&Ro(e).localTarget===this._firstTabStop&&(e.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&Ro(e).localTarget===this._lastTabStop&&(e.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(e,t){this.toggleClass("visible",e&&!t,this.$.scrim),this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var Fn=new Set;const Dn={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Fn.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():u||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Ro(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(Fn.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Fn.delete(this):Fn.add(this)}},Bn=[Dn,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(e){Ro(e).path[0]!==this&&(this.resetLayout(),e.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var e=this._updateLayoutStates.bind(this);this._layoutDebouncer=vi.debounce(this._layoutDebouncer,me,e),yi(this._layoutDebouncer),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var e=this;requestAnimationFrame((function(){e.fire("app-reset-layout")}))},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this)}}];
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({_template:ft`
    <style>
      :host {
        display: block;
        /**
         * Force app-drawer-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements.
         */
        position: relative;
        z-index: 0;
      }

      :host ::slotted([slot=drawer]) {
        z-index: 1;
      }

      :host([fullbleed]) {
        @apply --layout-fit;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
        height: 100%;
        transition: var(--app-drawer-layout-content-transition, none);
      }

      #contentContainer[drawer-position=left] {
        margin-left: var(--app-drawer-width, 256px);
      }

      #contentContainer[drawer-position=right] {
        margin-right: var(--app-drawer-width, 256px);
      }
    </style>

    <slot id="drawerSlot" name="drawer"></slot>

    <div id="contentContainer" drawer-position\$="[[_drawerPosition]]">
      <slot></slot>
    </div>

    <iron-media-query query="[[_computeMediaQuery(forceNarrow, responsiveWidth)]]" on-query-matches-changed="_onQueryMatchesChanged"></iron-media-query>
`,is:"app-drawer-layout",behaviors:[Bn],properties:{forceNarrow:{type:Boolean,value:!1},responsiveWidth:{type:String,value:"640px"},narrow:{type:Boolean,reflectToAttribute:!0,readOnly:!0,notify:!0},openedWhenNarrow:{type:Boolean,value:!1},_drawerPosition:{type:String}},listeners:{click:"_clickHandler"},observers:["_narrowChanged(narrow)"],get drawer(){return Ro(this.$.drawerSlot).getDistributedNodes()[0]},attached:function(){var e=this.drawer;e&&e.setAttribute("no-transition","")},_clickHandler:function(e){var t=Ro(e).localTarget;if(t&&t.hasAttribute("drawer-toggle")){var i=this.drawer;i&&!i.persistent&&i.toggle()}},_updateLayoutStates:function(){var e=this.drawer;this.isAttached&&e&&(this._drawerPosition=this.narrow?null:e.position,this._drawerNeedsReset&&(this.narrow?(e.opened=this.openedWhenNarrow,e.persistent=!1):e.opened=e.persistent=!0,e.hasAttribute("no-transition")&&xo(this,(function(){e.removeAttribute("no-transition")})),this._drawerNeedsReset=!1))},_narrowChanged:function(){this._drawerNeedsReset=!0,this.resetLayout()},_onQueryMatchesChanged:function(e){this._setNarrow(e.detail.value)},_computeMediaQuery:function(e,t){return e?"(min-width: 0px)":"(max-width: "+t+")"}});
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const qn=document.createElement("template");qn.setAttribute("style","display: none;"),qn.innerHTML='<dom-module id="app-grid-style">\n  <template>\n    <style>\n      :host {\n        /**\n         * The width for the expandible item is:\n         * ((100% - subPixelAdjustment) / columns * itemColumns - gutter\n         *\n         * - subPixelAdjustment: 0.1px (Required for IE 11)\n         * - gutter: var(--app-grid-gutter)\n         * - columns: var(--app-grid-columns)\n         * - itemColumn: var(--app-grid-expandible-item-columns)\n         */\n        --app-grid-expandible-item: {\n          -webkit-flex-basis: calc((100% - 0.1px) / var(--app-grid-columns, 1) * var(--app-grid-expandible-item-columns, 1) - var(--app-grid-gutter, 0px)) !important;\n          flex-basis: calc((100% - 0.1px) / var(--app-grid-columns, 1) * var(--app-grid-expandible-item-columns, 1) - var(--app-grid-gutter, 0px)) !important;\n          max-width: calc((100% - 0.1px) / var(--app-grid-columns, 1) * var(--app-grid-expandible-item-columns, 1) - var(--app-grid-gutter, 0px)) !important;\n        };\n      }\n\n      .app-grid {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n\n        padding-top: var(--app-grid-gutter, 0px);\n        padding-left: var(--app-grid-gutter, 0px);\n        box-sizing: border-box;\n      }\n\n      .app-grid > * {\n        /* Required for IE 10 */\n        -ms-flex: 1 1 100%;\n        -webkit-flex: 1;\n        flex: 1;\n\n        /* The width for an item is: (100% - subPixelAdjustment - gutter * columns) / columns */\n        -webkit-flex-basis: calc((100% - 0.1px - (var(--app-grid-gutter, 0px) * var(--app-grid-columns, 1))) / var(--app-grid-columns, 1));\n        flex-basis: calc((100% - 0.1px - (var(--app-grid-gutter, 0px) * var(--app-grid-columns, 1))) / var(--app-grid-columns, 1));\n\n        max-width: calc((100% - 0.1px - (var(--app-grid-gutter, 0px) * var(--app-grid-columns, 1))) / var(--app-grid-columns, 1));\n        margin-bottom: var(--app-grid-gutter, 0px);\n        margin-right: var(--app-grid-gutter, 0px);\n        height: var(--app-grid-item-height);\n        box-sizing: border-box;\n      }\n\n      .app-grid[has-aspect-ratio] > * {\n        position: relative;\n      }\n\n      .app-grid[has-aspect-ratio] > *::before {\n        display: block;\n        content: "";\n        padding-top: var(--app-grid-item-height, 100%);\n      }\n\n      .app-grid[has-aspect-ratio] > * > * {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(qn.content);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const jn=[{properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[e]:Ro(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}},{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(e){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(e,t){var i=Rn[e];if(!i)throw new ReferenceError(this._getUndefinedMsg(e));var o=this._boundEffect(i,t||{});return o.setUp(),o},_effectsChanged:function(e,t,i){this._tearDownEffects(),e&&i&&(e.split(" ").forEach((function(e){var i;""!==e&&((i=Rn[e])?this._effects.push(this._boundEffect(i,t[e])):console.warn(this._getUndefinedMsg(e)))}),this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(e,t){t=t||{};var i=parseFloat(t.startsAt||0),o=parseFloat(t.endsAt||1),n=o-i,a=function(){},l=0===i&&1===o?e.run:function(t,o){e.run.call(this,Math.max(0,(t-i)/n),o)};return{setUp:e.setUp?e.setUp.bind(this,t):a,run:e.run?l.bind(this):a,tearDown:e.tearDown?e.tearDown.bind(this):a}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach((function(e){!1!==e.setUp()&&this._effectsRunFn.push(e.run)}),this))},_tearDownEffects:function(){this._effects&&this._effects.forEach((function(e){e.tearDown()})),this._effectsRunFn=[],this._effects=[]},_runEffects:function(e,t){this._effectsRunFn&&this._effectsRunFn.forEach((function(i){i(e,t)}))},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var e=this._clampedScrollTop;this._updateScrollState(e),this.threshold>0&&this._setThresholdTriggered(e>=this.threshold)}},_getDOMRef:function(e){console.warn("_getDOMRef","`"+e+"` is undefined")},_getUndefinedMsg:function(e){return"Scroll effect `"+e+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+e+".html ?"}}];
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({_template:ft`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[jn,Bn],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var e,t=Ro(this.$.slot).getDistributedNodes(),i=0;e=t[i];i++)if(e.nodeType===Node.ELEMENT_NODE){if(e.hasAttribute("sticky")){this._stickyElRef=e;break}this._stickyElRef||(this._stickyElRef=e)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var e=this._clampedScrollTop,t=0===this._height||0===e,i=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,t||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),t?this._updateScrollState(e,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=i}},_updateScrollState:function(e,t){if(0!==this._height){var i=0,o=0,n=this._top;this._lastScrollTop;var a=this._maxHeaderTop,l=e-this._lastScrollTop,r=Math.abs(l),s=e>this._lastScrollTop,c=performance.now();if(this._mayMove()&&(o=this._clamp(this.reveals?n+l:e,0,a)),e>=this._dHeight&&(o=this.condenses&&!this.fixed?Math.max(this._dHeight,o):o,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&r<100&&((c-this._initTimestamp>300||this._wasScrollingDown!==s)&&(this._initScrollTop=e,this._initTimestamp=c),e>=a))if(Math.abs(this._initScrollTop-e)>30||r>10){s&&e>=a?o=a:!s&&e>=this._dHeight&&(o=this.condenses&&!this.fixed?this._dHeight:0);var h=l/(c-this._lastTimestamp);this.style.transitionDuration=this._clamp((o-n)/h,0,300)+"ms"}else o=this._top;i=0===this._dHeight?e>0?1:0:o/this._dHeight,t||(this._lastScrollTop=e,this._top=o,this._wasScrollingDown=s,this._lastTimestamp=c),(t||i!==this._progress||n!==o||0===e)&&(this._progress=i,this._runEffects(i,o),this._transformHeader(o))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(e){this.translate3d(0,-e+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&e>=this._stickyElTop?Math.min(e,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),Ro(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(e){switch(e){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return Ro(this).querySelector("[main-title]");case"condensedTitle":return Ro(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({_template:ft`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[Bn],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return Ro(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var e=this.header;if(this.isAttached&&e){this.$.wrapper.classList.remove("initializing"),e.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var t=e.offsetHeight;this.hasScrollingRegion?(e.style.left="",e.style.right=""):requestAnimationFrame(function(){var t=this.getBoundingClientRect(),i=document.documentElement.clientWidth-t.right;e.style.left=t.left+"px",e.style.right=i+"px"}.bind(this));var i=this.$.contentContainer.style;e.fixed&&!e.condenses&&this.hasScrollingRegion?(i.marginTop=t+"px",i.paddingTop=""):(i.paddingTop=t+"px",i.marginTop="")}}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({_template:ft`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({_template:ft`
    <style>
      :host {
        position: relative;
        display: block;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
        height: 100%;
      }

      #backgroundFrontLayer {
        min-height: 100%;
        pointer-events: none;
        background-size: cover;
        @apply --app-box-background-front-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled]) #backgroundFrontLayer {
        transition: none !important;
      }
    </style>

    <div id="background">
      <div id="backgroundFrontLayer">
        <slot name="background"></slot>
      </div>
    </div>
    <div id="contentContainer">
      <slot></slot>
    </div>
`,is:"app-box",behaviors:[jn,Dn],listeners:{"iron-resize":"_resizeHandler"},_progress:0,attached:function(){this.resetLayout()},_debounceRaf:function(e){var t=this;this._raf&&window.cancelAnimationFrame(this._raf),this._raf=window.requestAnimationFrame((function(){t._raf=null,e.call(t)}))},resetLayout:function(){this._debounceRaf((function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var e=this._clampedScrollTop,t=this.disabled;this.disabled=!0,this._elementTop=this._getElementTop(),this._elementHeight=this.offsetHeight,this._cachedScrollTargetHeight=this._scrollTargetHeight,this._setUpEffect(),this._updateScrollState(e),this.disabled=t}}))},_getElementTop:function(){for(var e=this,t=0;e&&e!==this.scrollTarget;)t+=e.offsetTop,e=e.offsetParent;return t},_updateScrollState:function(e){if(this.isOnScreen()){var t=this._elementTop-e;this._progress=1-(t+this._elementHeight)/this._cachedScrollTargetHeight,this._runEffects(this._progress,e)}},isOnScreen:function(){return this._elementTop<this._scrollTop+this._cachedScrollTargetHeight&&this._elementTop+this._elementHeight>this._scrollTop},_resizeHandler:function(){this.resetLayout()},_getDOMRef:function(e){return"background"===e?this.$.background:"backgroundFrontLayer"===e?this.$.backgroundFrontLayer:void 0},getScrollState:function(){return{progress:this._progress}}}),
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 *
 * `simple-colors-shared-styles`
 * @element simple-colors-shared-styles
 * a shared set of styles for `simple-colors`
 *
 *

 * @demo ./demo/index.html
 */
window.SimpleColorsSharedStyles={},window.SimpleColorsSharedStyles.instance=null;class Un extends e{static get styles(){return[t`html{--simple-colors-default-theme-accent-1:#ffffff;--simple-colors-default-theme-accent-2:#eeeeee;--simple-colors-default-theme-accent-3:#dddddd;--simple-colors-default-theme-accent-4:#cccccc;--simple-colors-default-theme-accent-5:#bbbbbb;--simple-colors-default-theme-accent-6:#999999;--simple-colors-default-theme-accent-7:#666666;--simple-colors-default-theme-accent-8:#444444;--simple-colors-default-theme-accent-9:#333333;--simple-colors-default-theme-accent-10:#222222;--simple-colors-default-theme-accent-11:#111111;--simple-colors-default-theme-accent-12:#000000;--simple-colors-default-theme-grey-1:#ffffff;--simple-colors-default-theme-grey-2:#eeeeee;--simple-colors-default-theme-grey-3:#dddddd;--simple-colors-default-theme-grey-4:#cccccc;--simple-colors-default-theme-grey-5:#bbbbbb;--simple-colors-default-theme-grey-6:#999999;--simple-colors-default-theme-grey-7:#666666;--simple-colors-default-theme-grey-8:#444444;--simple-colors-default-theme-grey-9:#333333;--simple-colors-default-theme-grey-10:#222222;--simple-colors-default-theme-grey-11:#111111;--simple-colors-default-theme-grey-12:#000000;--simple-colors-default-theme-red-1:#ffdddd;--simple-colors-default-theme-red-2:#ffaeae;--simple-colors-default-theme-red-3:#ff8f8f;--simple-colors-default-theme-red-4:#ff7474;--simple-colors-default-theme-red-5:#fd5151;--simple-colors-default-theme-red-6:#ff2222;--simple-colors-default-theme-red-7:#ee0000;--simple-colors-default-theme-red-8:#ac0000;--simple-colors-default-theme-red-9:#850000;--simple-colors-default-theme-red-10:#670000;--simple-colors-default-theme-red-11:#520000;--simple-colors-default-theme-red-12:#3f0000;--simple-colors-default-theme-pink-1:#ffe6f1;--simple-colors-default-theme-pink-2:#ffa5cf;--simple-colors-default-theme-pink-3:#ff87c0;--simple-colors-default-theme-pink-4:#ff73b5;--simple-colors-default-theme-pink-5:#fd60aa;--simple-colors-default-theme-pink-6:#ff3996;--simple-colors-default-theme-pink-7:#da004e;--simple-colors-default-theme-pink-8:#b80042;--simple-colors-default-theme-pink-9:#980036;--simple-colors-default-theme-pink-10:#78002b;--simple-colors-default-theme-pink-11:#5a0020;--simple-colors-default-theme-pink-12:#440019;--simple-colors-default-theme-purple-1:#fce6ff;--simple-colors-default-theme-purple-2:#f4affd;--simple-colors-default-theme-purple-3:#f394ff;--simple-colors-default-theme-purple-4:#f07cff;--simple-colors-default-theme-purple-5:#ed61ff;--simple-colors-default-theme-purple-6:#e200ff;--simple-colors-default-theme-purple-7:#a500ba;--simple-colors-default-theme-purple-8:#8a009b;--simple-colors-default-theme-purple-9:#6c0079;--simple-colors-default-theme-purple-10:#490052;--simple-colors-default-theme-purple-11:#33003a;--simple-colors-default-theme-purple-12:#200025;--simple-colors-default-theme-deep-purple-1:#f3e4ff;--simple-colors-default-theme-deep-purple-2:#ddacff;--simple-colors-default-theme-deep-purple-3:#c97eff;--simple-colors-default-theme-deep-purple-4:#bb63f9;--simple-colors-default-theme-deep-purple-5:#b44aff;--simple-colors-default-theme-deep-purple-6:#a931ff;--simple-colors-default-theme-deep-purple-7:#7e00d8;--simple-colors-default-theme-deep-purple-8:#5d009f;--simple-colors-default-theme-deep-purple-9:#4c0081;--simple-colors-default-theme-deep-purple-10:#3a0063;--simple-colors-default-theme-deep-purple-11:#2a0049;--simple-colors-default-theme-deep-purple-12:#1d0033;--simple-colors-default-theme-indigo-1:#e5ddff;--simple-colors-default-theme-indigo-2:#c3b2ff;--simple-colors-default-theme-indigo-3:#af97ff;--simple-colors-default-theme-indigo-4:#9e82ff;--simple-colors-default-theme-indigo-5:#9373ff;--simple-colors-default-theme-indigo-6:#835fff;--simple-colors-default-theme-indigo-7:#3a00ff;--simple-colors-default-theme-indigo-8:#2801b0;--simple-colors-default-theme-indigo-9:#20008c;--simple-colors-default-theme-indigo-10:#160063;--simple-colors-default-theme-indigo-11:#100049;--simple-colors-default-theme-indigo-12:#0a0030;--simple-colors-default-theme-blue-1:#e2ecff;--simple-colors-default-theme-blue-2:#acc9ff;--simple-colors-default-theme-blue-3:#95baff;--simple-colors-default-theme-blue-4:#74a5ff;--simple-colors-default-theme-blue-5:#5892fd;--simple-colors-default-theme-blue-6:#4083ff;--simple-colors-default-theme-blue-7:#0059ff;--simple-colors-default-theme-blue-8:#0041bb;--simple-colors-default-theme-blue-9:#003494;--simple-colors-default-theme-blue-10:#002569;--simple-colors-default-theme-blue-11:#001947;--simple-colors-default-theme-blue-12:#001333;--simple-colors-default-theme-light-blue-1:#cde8ff;--simple-colors-default-theme-light-blue-2:#a1d1ff;--simple-colors-default-theme-light-blue-3:#92c9ff;--simple-colors-default-theme-light-blue-4:#65b3ff;--simple-colors-default-theme-light-blue-5:#58adff;--simple-colors-default-theme-light-blue-6:#41a1ff;--simple-colors-default-theme-light-blue-7:#007ffc;--simple-colors-default-theme-light-blue-8:#0066ca;--simple-colors-default-theme-light-blue-9:#0055a8;--simple-colors-default-theme-light-blue-10:#003f7d;--simple-colors-default-theme-light-blue-11:#002850;--simple-colors-default-theme-light-blue-12:#001b36;--simple-colors-default-theme-cyan-1:#ccf3fd;--simple-colors-default-theme-cyan-2:#9beaff;--simple-colors-default-theme-cyan-3:#77e2ff;--simple-colors-default-theme-cyan-4:#33d4ff;--simple-colors-default-theme-cyan-5:#1ccfff;--simple-colors-default-theme-cyan-6:#00c9ff;--simple-colors-default-theme-cyan-7:#009dc7;--simple-colors-default-theme-cyan-8:#007999;--simple-colors-default-theme-cyan-9:#005970;--simple-colors-default-theme-cyan-10:#003f50;--simple-colors-default-theme-cyan-11:#002c38;--simple-colors-default-theme-cyan-12:#001a20;--simple-colors-default-theme-teal-1:#d4ffee;--simple-colors-default-theme-teal-2:#98ffd7;--simple-colors-default-theme-teal-3:#79ffcb;--simple-colors-default-theme-teal-4:#56ffbd;--simple-colors-default-theme-teal-5:#29ffac;--simple-colors-default-theme-teal-6:#00ff9c;--simple-colors-default-theme-teal-7:#009d75;--simple-colors-default-theme-teal-8:#007658;--simple-colors-default-theme-teal-9:#004e3a;--simple-colors-default-theme-teal-10:#003829;--simple-colors-default-theme-teal-11:#002a20;--simple-colors-default-theme-teal-12:#001b14;--simple-colors-default-theme-green-1:#e1ffeb;--simple-colors-default-theme-green-2:#acffc9;--simple-colors-default-theme-green-3:#79ffa7;--simple-colors-default-theme-green-4:#49ff88;--simple-colors-default-theme-green-5:#24ff70;--simple-colors-default-theme-green-6:#00f961;--simple-colors-default-theme-green-7:#008c37;--simple-colors-default-theme-green-8:#00762e;--simple-colors-default-theme-green-9:#005a23;--simple-colors-default-theme-green-10:#003d18;--simple-colors-default-theme-green-11:#002a11;--simple-colors-default-theme-green-12:#001d0c;--simple-colors-default-theme-light-green-1:#ebffdb;--simple-colors-default-theme-light-green-2:#c7ff9b;--simple-colors-default-theme-light-green-3:#b1ff75;--simple-colors-default-theme-light-green-4:#a1fd5a;--simple-colors-default-theme-light-green-5:#8efd38;--simple-colors-default-theme-light-green-6:#6fff00;--simple-colors-default-theme-light-green-7:#429d00;--simple-colors-default-theme-light-green-8:#357f00;--simple-colors-default-theme-light-green-9:#296100;--simple-colors-default-theme-light-green-10:#1b3f00;--simple-colors-default-theme-light-green-11:#143000;--simple-colors-default-theme-light-green-12:#0d2000;--simple-colors-default-theme-lime-1:#f1ffd2;--simple-colors-default-theme-lime-2:#dfff9b;--simple-colors-default-theme-lime-3:#d4ff77;--simple-colors-default-theme-lime-4:#caff58;--simple-colors-default-theme-lime-5:#bdff2d;--simple-colors-default-theme-lime-6:#aeff00;--simple-colors-default-theme-lime-7:#649900;--simple-colors-default-theme-lime-8:#4d7600;--simple-colors-default-theme-lime-9:#3b5a00;--simple-colors-default-theme-lime-10:#293f00;--simple-colors-default-theme-lime-11:#223400;--simple-colors-default-theme-lime-12:#182400;--simple-colors-default-theme-yellow-1:#ffffd5;--simple-colors-default-theme-yellow-2:#ffffac;--simple-colors-default-theme-yellow-3:#ffff90;--simple-colors-default-theme-yellow-4:#ffff7c;--simple-colors-default-theme-yellow-5:#ffff3a;--simple-colors-default-theme-yellow-6:#f6f600;--simple-colors-default-theme-yellow-7:#929100;--simple-colors-default-theme-yellow-8:#787700;--simple-colors-default-theme-yellow-9:#585700;--simple-colors-default-theme-yellow-10:#454400;--simple-colors-default-theme-yellow-11:#303000;--simple-colors-default-theme-yellow-12:#242400;--simple-colors-default-theme-amber-1:#fff2d4;--simple-colors-default-theme-amber-2:#ffdf92;--simple-colors-default-theme-amber-3:#ffd677;--simple-colors-default-theme-amber-4:#ffcf5e;--simple-colors-default-theme-amber-5:#ffc235;--simple-colors-default-theme-amber-6:#ffc500;--simple-colors-default-theme-amber-7:#b28900;--simple-colors-default-theme-amber-8:#876800;--simple-colors-default-theme-amber-9:#614b00;--simple-colors-default-theme-amber-10:#413200;--simple-colors-default-theme-amber-11:#302500;--simple-colors-default-theme-amber-12:#221a00;--simple-colors-default-theme-orange-1:#ffebd7;--simple-colors-default-theme-orange-2:#ffca92;--simple-colors-default-theme-orange-3:#ffbd75;--simple-colors-default-theme-orange-4:#ffb05c;--simple-colors-default-theme-orange-5:#ff9e36;--simple-colors-default-theme-orange-6:#ff9625;--simple-colors-default-theme-orange-7:#e56a00;--simple-colors-default-theme-orange-8:#ae5100;--simple-colors-default-theme-orange-9:#833d00;--simple-colors-default-theme-orange-10:#612d00;--simple-colors-default-theme-orange-11:#3d1c00;--simple-colors-default-theme-orange-12:#2c1400;--simple-colors-default-theme-deep-orange-1:#ffe7e0;--simple-colors-default-theme-deep-orange-2:#ffb299;--simple-colors-default-theme-deep-orange-3:#ffa588;--simple-colors-default-theme-deep-orange-4:#ff8a64;--simple-colors-default-theme-deep-orange-5:#ff7649;--simple-colors-default-theme-deep-orange-6:#ff6c3c;--simple-colors-default-theme-deep-orange-7:#f53100;--simple-colors-default-theme-deep-orange-8:#b92500;--simple-colors-default-theme-deep-orange-9:#8a1c00;--simple-colors-default-theme-deep-orange-10:#561100;--simple-colors-default-theme-deep-orange-11:#3a0c00;--simple-colors-default-theme-deep-orange-12:#240700;--simple-colors-default-theme-brown-1:#f0e2de;--simple-colors-default-theme-brown-2:#e5b8aa;--simple-colors-default-theme-brown-3:#c59485;--simple-colors-default-theme-brown-4:#b68373;--simple-colors-default-theme-brown-5:#ac7868;--simple-colors-default-theme-brown-6:#a47060;--simple-colors-default-theme-brown-7:#85574a;--simple-colors-default-theme-brown-8:#724539;--simple-colors-default-theme-brown-9:#5b3328;--simple-colors-default-theme-brown-10:#3b1e15;--simple-colors-default-theme-brown-11:#2c140e;--simple-colors-default-theme-brown-12:#200e09;--simple-colors-default-theme-blue-grey-1:#e7eff1;--simple-colors-default-theme-blue-grey-2:#b1c5ce;--simple-colors-default-theme-blue-grey-3:#9badb6;--simple-colors-default-theme-blue-grey-4:#8d9fa7;--simple-colors-default-theme-blue-grey-5:#7a8f98;--simple-colors-default-theme-blue-grey-6:#718892;--simple-colors-default-theme-blue-grey-7:#56707c;--simple-colors-default-theme-blue-grey-8:#40535b;--simple-colors-default-theme-blue-grey-9:#2f3e45;--simple-colors-default-theme-blue-grey-10:#1e282c;--simple-colors-default-theme-blue-grey-11:#182023;--simple-colors-default-theme-blue-grey-12:#0f1518;--simple-colors-fixed-theme-accent-1:#ffffff;--simple-colors-fixed-theme-accent-2:#eeeeee;--simple-colors-fixed-theme-accent-3:#dddddd;--simple-colors-fixed-theme-accent-4:#cccccc;--simple-colors-fixed-theme-accent-5:#bbbbbb;--simple-colors-fixed-theme-accent-6:#999999;--simple-colors-fixed-theme-accent-7:#666666;--simple-colors-fixed-theme-accent-8:#444444;--simple-colors-fixed-theme-accent-9:#333333;--simple-colors-fixed-theme-accent-10:#222222;--simple-colors-fixed-theme-accent-11:#111111;--simple-colors-fixed-theme-accent-12:#000000;--simple-colors-fixed-theme-grey-1:#ffffff;--simple-colors-fixed-theme-grey-2:#eeeeee;--simple-colors-fixed-theme-grey-3:#dddddd;--simple-colors-fixed-theme-grey-4:#cccccc;--simple-colors-fixed-theme-grey-5:#bbbbbb;--simple-colors-fixed-theme-grey-6:#999999;--simple-colors-fixed-theme-grey-7:#666666;--simple-colors-fixed-theme-grey-8:#444444;--simple-colors-fixed-theme-grey-9:#333333;--simple-colors-fixed-theme-grey-10:#222222;--simple-colors-fixed-theme-grey-11:#111111;--simple-colors-fixed-theme-grey-12:#000000;--simple-colors-fixed-theme-red-1:#ffdddd;--simple-colors-fixed-theme-red-2:#ffaeae;--simple-colors-fixed-theme-red-3:#ff8f8f;--simple-colors-fixed-theme-red-4:#ff7474;--simple-colors-fixed-theme-red-5:#fd5151;--simple-colors-fixed-theme-red-6:#ff2222;--simple-colors-fixed-theme-red-7:#ee0000;--simple-colors-fixed-theme-red-8:#ac0000;--simple-colors-fixed-theme-red-9:#850000;--simple-colors-fixed-theme-red-10:#670000;--simple-colors-fixed-theme-red-11:#520000;--simple-colors-fixed-theme-red-12:#3f0000;--simple-colors-fixed-theme-pink-1:#ffe6f1;--simple-colors-fixed-theme-pink-2:#ffa5cf;--simple-colors-fixed-theme-pink-3:#ff87c0;--simple-colors-fixed-theme-pink-4:#ff73b5;--simple-colors-fixed-theme-pink-5:#fd60aa;--simple-colors-fixed-theme-pink-6:#ff3996;--simple-colors-fixed-theme-pink-7:#da004e;--simple-colors-fixed-theme-pink-8:#b80042;--simple-colors-fixed-theme-pink-9:#980036;--simple-colors-fixed-theme-pink-10:#78002b;--simple-colors-fixed-theme-pink-11:#5a0020;--simple-colors-fixed-theme-pink-12:#440019;--simple-colors-fixed-theme-purple-1:#fce6ff;--simple-colors-fixed-theme-purple-2:#f4affd;--simple-colors-fixed-theme-purple-3:#f394ff;--simple-colors-fixed-theme-purple-4:#f07cff;--simple-colors-fixed-theme-purple-5:#ed61ff;--simple-colors-fixed-theme-purple-6:#e200ff;--simple-colors-fixed-theme-purple-7:#a500ba;--simple-colors-fixed-theme-purple-8:#8a009b;--simple-colors-fixed-theme-purple-9:#6c0079;--simple-colors-fixed-theme-purple-10:#490052;--simple-colors-fixed-theme-purple-11:#33003a;--simple-colors-fixed-theme-purple-12:#200025;--simple-colors-fixed-theme-deep-purple-1:#f3e4ff;--simple-colors-fixed-theme-deep-purple-2:#ddacff;--simple-colors-fixed-theme-deep-purple-3:#c97eff;--simple-colors-fixed-theme-deep-purple-4:#bb63f9;--simple-colors-fixed-theme-deep-purple-5:#b44aff;--simple-colors-fixed-theme-deep-purple-6:#a931ff;--simple-colors-fixed-theme-deep-purple-7:#7e00d8;--simple-colors-fixed-theme-deep-purple-8:#5d009f;--simple-colors-fixed-theme-deep-purple-9:#4c0081;--simple-colors-fixed-theme-deep-purple-10:#3a0063;--simple-colors-fixed-theme-deep-purple-11:#2a0049;--simple-colors-fixed-theme-deep-purple-12:#1d0033;--simple-colors-fixed-theme-indigo-1:#e5ddff;--simple-colors-fixed-theme-indigo-2:#c3b2ff;--simple-colors-fixed-theme-indigo-3:#af97ff;--simple-colors-fixed-theme-indigo-4:#9e82ff;--simple-colors-fixed-theme-indigo-5:#9373ff;--simple-colors-fixed-theme-indigo-6:#835fff;--simple-colors-fixed-theme-indigo-7:#3a00ff;--simple-colors-fixed-theme-indigo-8:#2801b0;--simple-colors-fixed-theme-indigo-9:#20008c;--simple-colors-fixed-theme-indigo-10:#160063;--simple-colors-fixed-theme-indigo-11:#100049;--simple-colors-fixed-theme-indigo-12:#0a0030;--simple-colors-fixed-theme-blue-1:#e2ecff;--simple-colors-fixed-theme-blue-2:#acc9ff;--simple-colors-fixed-theme-blue-3:#95baff;--simple-colors-fixed-theme-blue-4:#74a5ff;--simple-colors-fixed-theme-blue-5:#5892fd;--simple-colors-fixed-theme-blue-6:#4083ff;--simple-colors-fixed-theme-blue-7:#0059ff;--simple-colors-fixed-theme-blue-8:#0041bb;--simple-colors-fixed-theme-blue-9:#003494;--simple-colors-fixed-theme-blue-10:#002569;--simple-colors-fixed-theme-blue-11:#001947;--simple-colors-fixed-theme-blue-12:#001333;--simple-colors-fixed-theme-light-blue-1:#cde8ff;--simple-colors-fixed-theme-light-blue-2:#a1d1ff;--simple-colors-fixed-theme-light-blue-3:#92c9ff;--simple-colors-fixed-theme-light-blue-4:#65b3ff;--simple-colors-fixed-theme-light-blue-5:#58adff;--simple-colors-fixed-theme-light-blue-6:#41a1ff;--simple-colors-fixed-theme-light-blue-7:#007ffc;--simple-colors-fixed-theme-light-blue-8:#0066ca;--simple-colors-fixed-theme-light-blue-9:#0055a8;--simple-colors-fixed-theme-light-blue-10:#003f7d;--simple-colors-fixed-theme-light-blue-11:#002850;--simple-colors-fixed-theme-light-blue-12:#001b36;--simple-colors-fixed-theme-cyan-1:#ccf3fd;--simple-colors-fixed-theme-cyan-2:#9beaff;--simple-colors-fixed-theme-cyan-3:#77e2ff;--simple-colors-fixed-theme-cyan-4:#33d4ff;--simple-colors-fixed-theme-cyan-5:#1ccfff;--simple-colors-fixed-theme-cyan-6:#00c9ff;--simple-colors-fixed-theme-cyan-7:#009dc7;--simple-colors-fixed-theme-cyan-8:#007999;--simple-colors-fixed-theme-cyan-9:#005970;--simple-colors-fixed-theme-cyan-10:#003f50;--simple-colors-fixed-theme-cyan-11:#002c38;--simple-colors-fixed-theme-cyan-12:#001a20;--simple-colors-fixed-theme-teal-1:#d4ffee;--simple-colors-fixed-theme-teal-2:#98ffd7;--simple-colors-fixed-theme-teal-3:#79ffcb;--simple-colors-fixed-theme-teal-4:#56ffbd;--simple-colors-fixed-theme-teal-5:#29ffac;--simple-colors-fixed-theme-teal-6:#00ff9c;--simple-colors-fixed-theme-teal-7:#009d75;--simple-colors-fixed-theme-teal-8:#007658;--simple-colors-fixed-theme-teal-9:#004e3a;--simple-colors-fixed-theme-teal-10:#003829;--simple-colors-fixed-theme-teal-11:#002a20;--simple-colors-fixed-theme-teal-12:#001b14;--simple-colors-fixed-theme-green-1:#e1ffeb;--simple-colors-fixed-theme-green-2:#acffc9;--simple-colors-fixed-theme-green-3:#79ffa7;--simple-colors-fixed-theme-green-4:#49ff88;--simple-colors-fixed-theme-green-5:#24ff70;--simple-colors-fixed-theme-green-6:#00f961;--simple-colors-fixed-theme-green-7:#008c37;--simple-colors-fixed-theme-green-8:#00762e;--simple-colors-fixed-theme-green-9:#005a23;--simple-colors-fixed-theme-green-10:#003d18;--simple-colors-fixed-theme-green-11:#002a11;--simple-colors-fixed-theme-green-12:#001d0c;--simple-colors-fixed-theme-light-green-1:#ebffdb;--simple-colors-fixed-theme-light-green-2:#c7ff9b;--simple-colors-fixed-theme-light-green-3:#b1ff75;--simple-colors-fixed-theme-light-green-4:#a1fd5a;--simple-colors-fixed-theme-light-green-5:#8efd38;--simple-colors-fixed-theme-light-green-6:#6fff00;--simple-colors-fixed-theme-light-green-7:#429d00;--simple-colors-fixed-theme-light-green-8:#357f00;--simple-colors-fixed-theme-light-green-9:#296100;--simple-colors-fixed-theme-light-green-10:#1b3f00;--simple-colors-fixed-theme-light-green-11:#143000;--simple-colors-fixed-theme-light-green-12:#0d2000;--simple-colors-fixed-theme-lime-1:#f1ffd2;--simple-colors-fixed-theme-lime-2:#dfff9b;--simple-colors-fixed-theme-lime-3:#d4ff77;--simple-colors-fixed-theme-lime-4:#caff58;--simple-colors-fixed-theme-lime-5:#bdff2d;--simple-colors-fixed-theme-lime-6:#aeff00;--simple-colors-fixed-theme-lime-7:#649900;--simple-colors-fixed-theme-lime-8:#4d7600;--simple-colors-fixed-theme-lime-9:#3b5a00;--simple-colors-fixed-theme-lime-10:#293f00;--simple-colors-fixed-theme-lime-11:#223400;--simple-colors-fixed-theme-lime-12:#182400;--simple-colors-fixed-theme-yellow-1:#ffffd5;--simple-colors-fixed-theme-yellow-2:#ffffac;--simple-colors-fixed-theme-yellow-3:#ffff90;--simple-colors-fixed-theme-yellow-4:#ffff7c;--simple-colors-fixed-theme-yellow-5:#ffff3a;--simple-colors-fixed-theme-yellow-6:#f6f600;--simple-colors-fixed-theme-yellow-7:#929100;--simple-colors-fixed-theme-yellow-8:#787700;--simple-colors-fixed-theme-yellow-9:#585700;--simple-colors-fixed-theme-yellow-10:#454400;--simple-colors-fixed-theme-yellow-11:#303000;--simple-colors-fixed-theme-yellow-12:#242400;--simple-colors-fixed-theme-amber-1:#fff2d4;--simple-colors-fixed-theme-amber-2:#ffdf92;--simple-colors-fixed-theme-amber-3:#ffd677;--simple-colors-fixed-theme-amber-4:#ffcf5e;--simple-colors-fixed-theme-amber-5:#ffc235;--simple-colors-fixed-theme-amber-6:#ffc500;--simple-colors-fixed-theme-amber-7:#b28900;--simple-colors-fixed-theme-amber-8:#876800;--simple-colors-fixed-theme-amber-9:#614b00;--simple-colors-fixed-theme-amber-10:#413200;--simple-colors-fixed-theme-amber-11:#302500;--simple-colors-fixed-theme-amber-12:#221a00;--simple-colors-fixed-theme-orange-1:#ffebd7;--simple-colors-fixed-theme-orange-2:#ffca92;--simple-colors-fixed-theme-orange-3:#ffbd75;--simple-colors-fixed-theme-orange-4:#ffb05c;--simple-colors-fixed-theme-orange-5:#ff9e36;--simple-colors-fixed-theme-orange-6:#ff9625;--simple-colors-fixed-theme-orange-7:#e56a00;--simple-colors-fixed-theme-orange-8:#ae5100;--simple-colors-fixed-theme-orange-9:#833d00;--simple-colors-fixed-theme-orange-10:#612d00;--simple-colors-fixed-theme-orange-11:#3d1c00;--simple-colors-fixed-theme-orange-12:#2c1400;--simple-colors-fixed-theme-deep-orange-1:#ffe7e0;--simple-colors-fixed-theme-deep-orange-2:#ffb299;--simple-colors-fixed-theme-deep-orange-3:#ffa588;--simple-colors-fixed-theme-deep-orange-4:#ff8a64;--simple-colors-fixed-theme-deep-orange-5:#ff7649;--simple-colors-fixed-theme-deep-orange-6:#ff6c3c;--simple-colors-fixed-theme-deep-orange-7:#f53100;--simple-colors-fixed-theme-deep-orange-8:#b92500;--simple-colors-fixed-theme-deep-orange-9:#8a1c00;--simple-colors-fixed-theme-deep-orange-10:#561100;--simple-colors-fixed-theme-deep-orange-11:#3a0c00;--simple-colors-fixed-theme-deep-orange-12:#240700;--simple-colors-fixed-theme-brown-1:#f0e2de;--simple-colors-fixed-theme-brown-2:#e5b8aa;--simple-colors-fixed-theme-brown-3:#c59485;--simple-colors-fixed-theme-brown-4:#b68373;--simple-colors-fixed-theme-brown-5:#ac7868;--simple-colors-fixed-theme-brown-6:#a47060;--simple-colors-fixed-theme-brown-7:#85574a;--simple-colors-fixed-theme-brown-8:#724539;--simple-colors-fixed-theme-brown-9:#5b3328;--simple-colors-fixed-theme-brown-10:#3b1e15;--simple-colors-fixed-theme-brown-11:#2c140e;--simple-colors-fixed-theme-brown-12:#200e09;--simple-colors-fixed-theme-blue-grey-1:#e7eff1;--simple-colors-fixed-theme-blue-grey-2:#b1c5ce;--simple-colors-fixed-theme-blue-grey-3:#9badb6;--simple-colors-fixed-theme-blue-grey-4:#8d9fa7;--simple-colors-fixed-theme-blue-grey-5:#7a8f98;--simple-colors-fixed-theme-blue-grey-6:#718892;--simple-colors-fixed-theme-blue-grey-7:#56707c;--simple-colors-fixed-theme-blue-grey-8:#40535b;--simple-colors-fixed-theme-blue-grey-9:#2f3e45;--simple-colors-fixed-theme-blue-grey-10:#1e282c;--simple-colors-fixed-theme-blue-grey-11:#182023;--simple-colors-fixed-theme-blue-grey-12:#0f1518}`]}render(){return i``}static get properties(){return{...super.properties,colors:{attribute:"colors",type:Object},contrasts:{attribute:"contrasts",type:Object}}}constructor(){super(),this.colors={grey:["#ffffff","#eeeeee","#dddddd","#cccccc","#bbbbbb","#999999","#666666","#444444","#333333","#222222","#111111","#000000"],red:["#ffdddd","#ffaeae","#ff8f8f","#ff7474","#fd5151","#ff2222","#ee0000","#ac0000","#850000","#670000","#520000","#3f0000"],pink:["#ffe6f1","#ffa5cf","#ff87c0","#ff73b5","#fd60aa","#ff3996","#da004e","#b80042","#980036","#78002b","#5a0020","#440019"],purple:["#fce6ff","#f4affd","#f394ff","#f07cff","#ed61ff","#e200ff","#a500ba","#8a009b","#6c0079","#490052","#33003a","#200025"],"deep-purple":["#f3e4ff","#ddacff","#c97eff","#bb63f9","#b44aff","#a931ff","#7e00d8","#5d009f","#4c0081","#3a0063","#2a0049","#1d0033"],indigo:["#e5ddff","#c3b2ff","#af97ff","#9e82ff","#9373ff","#835fff","#3a00ff","#2801b0","#20008c","#160063","#100049","#0a0030"],blue:["#e2ecff","#acc9ff","#95baff","#74a5ff","#5892fd","#4083ff","#0059ff","#0041bb","#003494","#002569","#001947","#001333"],"light-blue":["#cde8ff","#a1d1ff","#92c9ff","#65b3ff","#58adff","#41a1ff","#007ffc","#0066ca","#0055a8","#003f7d","#002850","#001b36"],cyan:["#ddf8ff","#9beaff","#77e2ff","#33d4ff","#1ccfff","#00c9ff","#009dc7","#007999","#005970","#003f50","#002c38","#001a20"],teal:["#d9fff0","#98ffd7","#79ffcb","#56ffbd","#29ffac","#00ff9c","#009d75","#007658","#004e3a","#003829","#002a20","#001b14"],green:["#e1ffeb","#acffc9","#79ffa7","#49ff88","#24ff70","#00f961","#008c37","#00762e","#005a23","#003d18","#002a11","#001d0c"],"light-green":["#ebffdb","#c7ff9b","#b1ff75","#a1fd5a","#8efd38","#6fff00","#429d00","#357f00","#296100","#1b3f00","#143000","#0d2000"],lime:["#f1ffd2","#dfff9b","#d4ff77","#caff58","#bdff2d","#aeff00","#649900","#4d7600","#3b5a00","#293f00","#223400","#182400"],yellow:["#ffffd5","#ffffac","#ffff90","#ffff7c","#ffff3a","#f6f600","#929100","#787700","#585700","#454400","#303000","#242400"],amber:["#fff2d4","#ffdf92","#ffd677","#ffcf5e","#ffc235","#ffc500","#b28900","#876800","#614b00","#413200","#302500","#221a00"],orange:["#ffebd7","#ffca92","#ffbd75","#ffb05c","#ff9e36","#ff9625","#e56a00","#ae5100","#833d00","#612d00","#3d1c00","#2c1400"],"deep-orange":["#ffe7e0","#ffb299","#ffa588","#ff8a64","#ff7649","#ff6c3c","#f53100","#b92500","#8a1c00","#561100","#3a0c00","#240700"],brown:["#f0e2de","#e5b8aa","#c59485","#b68373","#ac7868","#a47060","#85574a","#724539","#5b3328","#3b1e15","#2c140e","#200e09"],"blue-grey":["#e7eff1","#b1c5ce","#9badb6","#8d9fa7","#7a8f98","#718892","#56707c","#40535b","#2f3e45","#1e282c","#182023","#0f1518"]},this.contrasts={greyColor:{aaLarge:[{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:10,max:12},{min:1,max:3},{min:1,max:5},{min:1,max:6},{min:1,max:6},{min:1,max:6},{min:1,max:6}],aa:[{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:8,max:12},{min:11,max:12},{min:1,max:2},{min:1,max:7},{min:1,max:7},{min:1,max:6},{min:1,max:6},{min:1,max:6}]},colorColor:{aaLarge:[{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:9,max:12},{min:10,max:12},{min:11,max:12},{min:1,max:2},{min:1,max:3},{min:1,max:4},{min:1,max:5},{min:1,max:6},{min:1,max:6}],aa:[{min:8,max:12},{min:8,max:12},{min:9,max:12},{min:9,max:12},{min:11,max:12},{min:12,max:12},{min:1,max:1},{min:1,max:2},{min:1,max:4},{min:1,max:4},{min:1,max:5},{min:1,max:5}]}}}static get tag(){return"simple-colors-shared-styles"}getColorInfo(e){let t=e.replace(/(simple-colors-)?(-text)?(-border)?/g,"").split("-theme-"),i=t.length>0?t[0]:"default",o=t.length>0?t[1].split("-"):t[0].split("-");return{theme:i,color:o.length>1?o.slice(1,o.length-1).join("-"):"grey",shade:o.length>1?o[o.length-1]:"1"}}makeVariable(e="grey",t=1,i="default"){return["--simple-colors",i,"theme",e,t].join("-")}getContrastingShades(e,t,i,o){let n="grey"===t||"grey"===o?"greyColor":"colorColor",a=e?"aaLarge":"aa",l=parseInt(i),r=this.contrasts[n][a][l];return Array(r.max-r.min+1).fill().map(((e,t)=>r.min+t))}getContrastingColors(e,t,i){let o={};return Object.keys(this.colors).forEach((n=>{o[n]=this.getContrastingShades(i,e,t,n)})),o.color}isContrastCompliant(e,t,i,o,n){let a="grey"===t||"grey"===o?"greyColor":"colorColor",l=e?"aaLarge":"aa",r=parseInt(i)+1,s=this.contrasts[a][l][r];return n>=s.min&&ontrastShade>=s.max}indexToShade(e){return parseInt(e)+1}shadeToIndex(e){return parseInt(e)-1}}window.customElements.define(Un.tag,Un),window.SimpleColorsSharedStyles.requestAvailability=()=>(null==window.SimpleColorsSharedStyles.instance&&(window.SimpleColorsSharedStyles.instance=document.createElement("simple-colors-shared-styles"),window.SimpleColorsSharedStyles.colors=window.SimpleColorsSharedStyles.instance.colors,window.SimpleColorsSharedStyles.contrasts=window.SimpleColorsSharedStyles.instance.contrasts,window.SimpleColorsSharedStyles.stylesheet=document.createElement("style"),window.SimpleColorsSharedStyles.stylesheet.innerHTML=`${Un.styles[0].cssText}`,document.head.appendChild(window.SimpleColorsSharedStyles.stylesheet)),window.SimpleColorsSharedStyles.instance);const Kn=window.SimpleColorsSharedStyles.requestAvailability(),Yn=t`.sr-only{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}`
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */;class Wn extends(function(e){return class extends e{static get styles(){let e=t("");return super.styles&&(e=super.styles),[e,Yn,t`:host([dark]){--simple-colors-default-theme-accent-1:#000000;--simple-colors-default-theme-accent-2:#111111;--simple-colors-default-theme-accent-3:#222222;--simple-colors-default-theme-accent-4:#333333;--simple-colors-default-theme-accent-5:#444444;--simple-colors-default-theme-accent-6:#666666;--simple-colors-default-theme-accent-7:#999999;--simple-colors-default-theme-accent-8:#bbbbbb;--simple-colors-default-theme-accent-9:#cccccc;--simple-colors-default-theme-accent-10:#dddddd;--simple-colors-default-theme-accent-11:#eeeeee;--simple-colors-default-theme-accent-12:#ffffff;--simple-colors-default-theme-grey-1:#000000;--simple-colors-default-theme-grey-2:#111111;--simple-colors-default-theme-grey-3:#222222;--simple-colors-default-theme-grey-4:#333333;--simple-colors-default-theme-grey-5:#444444;--simple-colors-default-theme-grey-6:#666666;--simple-colors-default-theme-grey-7:#999999;--simple-colors-default-theme-grey-8:#bbbbbb;--simple-colors-default-theme-grey-9:#cccccc;--simple-colors-default-theme-grey-10:#dddddd;--simple-colors-default-theme-grey-11:#eeeeee;--simple-colors-default-theme-grey-12:#ffffff;--simple-colors-default-theme-red-1:#3f0000;--simple-colors-default-theme-red-2:#520000;--simple-colors-default-theme-red-3:#670000;--simple-colors-default-theme-red-4:#850000;--simple-colors-default-theme-red-5:#ac0000;--simple-colors-default-theme-red-6:#ee0000;--simple-colors-default-theme-red-7:#ff2222;--simple-colors-default-theme-red-8:#fd5151;--simple-colors-default-theme-red-9:#ff7474;--simple-colors-default-theme-red-10:#ff8f8f;--simple-colors-default-theme-red-11:#ffaeae;--simple-colors-default-theme-red-12:#ffdddd;--simple-colors-default-theme-pink-1:#440019;--simple-colors-default-theme-pink-2:#5a0020;--simple-colors-default-theme-pink-3:#78002b;--simple-colors-default-theme-pink-4:#980036;--simple-colors-default-theme-pink-5:#b80042;--simple-colors-default-theme-pink-6:#da004e;--simple-colors-default-theme-pink-7:#ff3996;--simple-colors-default-theme-pink-8:#fd60aa;--simple-colors-default-theme-pink-9:#ff73b5;--simple-colors-default-theme-pink-10:#ff87c0;--simple-colors-default-theme-pink-11:#ffa5cf;--simple-colors-default-theme-pink-12:#ffe6f1;--simple-colors-default-theme-purple-1:#200025;--simple-colors-default-theme-purple-2:#33003a;--simple-colors-default-theme-purple-3:#490052;--simple-colors-default-theme-purple-4:#6c0079;--simple-colors-default-theme-purple-5:#8a009b;--simple-colors-default-theme-purple-6:#a500ba;--simple-colors-default-theme-purple-7:#e200ff;--simple-colors-default-theme-purple-8:#ed61ff;--simple-colors-default-theme-purple-9:#f07cff;--simple-colors-default-theme-purple-10:#f394ff;--simple-colors-default-theme-purple-11:#f4affd;--simple-colors-default-theme-purple-12:#fce6ff;--simple-colors-default-theme-deep-purple-1:#1d0033;--simple-colors-default-theme-deep-purple-2:#2a0049;--simple-colors-default-theme-deep-purple-3:#3a0063;--simple-colors-default-theme-deep-purple-4:#4c0081;--simple-colors-default-theme-deep-purple-5:#5d009f;--simple-colors-default-theme-deep-purple-6:#7e00d8;--simple-colors-default-theme-deep-purple-7:#a931ff;--simple-colors-default-theme-deep-purple-8:#b44aff;--simple-colors-default-theme-deep-purple-9:#bb63f9;--simple-colors-default-theme-deep-purple-10:#c97eff;--simple-colors-default-theme-deep-purple-11:#ddacff;--simple-colors-default-theme-deep-purple-12:#f3e4ff;--simple-colors-default-theme-indigo-1:#0a0030;--simple-colors-default-theme-indigo-2:#100049;--simple-colors-default-theme-indigo-3:#160063;--simple-colors-default-theme-indigo-4:#20008c;--simple-colors-default-theme-indigo-5:#2801b0;--simple-colors-default-theme-indigo-6:#3a00ff;--simple-colors-default-theme-indigo-7:#835fff;--simple-colors-default-theme-indigo-8:#9373ff;--simple-colors-default-theme-indigo-9:#9e82ff;--simple-colors-default-theme-indigo-10:#af97ff;--simple-colors-default-theme-indigo-11:#c3b2ff;--simple-colors-default-theme-indigo-12:#e5ddff;--simple-colors-default-theme-blue-1:#001333;--simple-colors-default-theme-blue-2:#001947;--simple-colors-default-theme-blue-3:#002569;--simple-colors-default-theme-blue-4:#003494;--simple-colors-default-theme-blue-5:#0041bb;--simple-colors-default-theme-blue-6:#0059ff;--simple-colors-default-theme-blue-7:#4083ff;--simple-colors-default-theme-blue-8:#5892fd;--simple-colors-default-theme-blue-9:#74a5ff;--simple-colors-default-theme-blue-10:#95baff;--simple-colors-default-theme-blue-11:#acc9ff;--simple-colors-default-theme-blue-12:#e2ecff;--simple-colors-default-theme-light-blue-1:#001b36;--simple-colors-default-theme-light-blue-2:#002850;--simple-colors-default-theme-light-blue-3:#003f7d;--simple-colors-default-theme-light-blue-4:#0055a8;--simple-colors-default-theme-light-blue-5:#0066ca;--simple-colors-default-theme-light-blue-6:#007ffc;--simple-colors-default-theme-light-blue-7:#41a1ff;--simple-colors-default-theme-light-blue-8:#58adff;--simple-colors-default-theme-light-blue-9:#65b3ff;--simple-colors-default-theme-light-blue-10:#92c9ff;--simple-colors-default-theme-light-blue-11:#a1d1ff;--simple-colors-default-theme-light-blue-12:#cde8ff;--simple-colors-default-theme-cyan-1:#001a20;--simple-colors-default-theme-cyan-2:#002c38;--simple-colors-default-theme-cyan-3:#003f50;--simple-colors-default-theme-cyan-4:#005970;--simple-colors-default-theme-cyan-5:#007999;--simple-colors-default-theme-cyan-6:#009dc7;--simple-colors-default-theme-cyan-7:#00c9ff;--simple-colors-default-theme-cyan-8:#1ccfff;--simple-colors-default-theme-cyan-9:#33d4ff;--simple-colors-default-theme-cyan-10:#77e2ff;--simple-colors-default-theme-cyan-11:#9beaff;--simple-colors-default-theme-cyan-12:#ddf8ff;--simple-colors-default-theme-teal-1:#001b14;--simple-colors-default-theme-teal-2:#002a20;--simple-colors-default-theme-teal-3:#003829;--simple-colors-default-theme-teal-4:#004e3a;--simple-colors-default-theme-teal-5:#007658;--simple-colors-default-theme-teal-6:#009d75;--simple-colors-default-theme-teal-7:#00ff9c;--simple-colors-default-theme-teal-8:#29ffac;--simple-colors-default-theme-teal-9:#56ffbd;--simple-colors-default-theme-teal-10:#79ffcb;--simple-colors-default-theme-teal-11:#98ffd7;--simple-colors-default-theme-teal-12:#d9fff0;--simple-colors-default-theme-green-1:#001d0c;--simple-colors-default-theme-green-2:#002a11;--simple-colors-default-theme-green-3:#003d18;--simple-colors-default-theme-green-4:#005a23;--simple-colors-default-theme-green-5:#00762e;--simple-colors-default-theme-green-6:#008c37;--simple-colors-default-theme-green-7:#00f961;--simple-colors-default-theme-green-8:#24ff70;--simple-colors-default-theme-green-9:#49ff88;--simple-colors-default-theme-green-10:#79ffa7;--simple-colors-default-theme-green-11:#acffc9;--simple-colors-default-theme-green-12:#e1ffeb;--simple-colors-default-theme-light-green-1:#0d2000;--simple-colors-default-theme-light-green-2:#143000;--simple-colors-default-theme-light-green-3:#1b3f00;--simple-colors-default-theme-light-green-4:#296100;--simple-colors-default-theme-light-green-5:#357f00;--simple-colors-default-theme-light-green-6:#429d00;--simple-colors-default-theme-light-green-7:#6fff00;--simple-colors-default-theme-light-green-8:#8efd38;--simple-colors-default-theme-light-green-9:#a1fd5a;--simple-colors-default-theme-light-green-10:#b1ff75;--simple-colors-default-theme-light-green-11:#c7ff9b;--simple-colors-default-theme-light-green-12:#ebffdb;--simple-colors-default-theme-lime-1:#182400;--simple-colors-default-theme-lime-2:#223400;--simple-colors-default-theme-lime-3:#293f00;--simple-colors-default-theme-lime-4:#3b5a00;--simple-colors-default-theme-lime-5:#4d7600;--simple-colors-default-theme-lime-6:#649900;--simple-colors-default-theme-lime-7:#aeff00;--simple-colors-default-theme-lime-8:#bdff2d;--simple-colors-default-theme-lime-9:#caff58;--simple-colors-default-theme-lime-10:#d4ff77;--simple-colors-default-theme-lime-11:#dfff9b;--simple-colors-default-theme-lime-12:#f1ffd2;--simple-colors-default-theme-yellow-1:#242400;--simple-colors-default-theme-yellow-2:#303000;--simple-colors-default-theme-yellow-3:#454400;--simple-colors-default-theme-yellow-4:#585700;--simple-colors-default-theme-yellow-5:#787700;--simple-colors-default-theme-yellow-6:#929100;--simple-colors-default-theme-yellow-7:#f6f600;--simple-colors-default-theme-yellow-8:#ffff3a;--simple-colors-default-theme-yellow-9:#ffff7c;--simple-colors-default-theme-yellow-10:#ffff90;--simple-colors-default-theme-yellow-11:#ffffac;--simple-colors-default-theme-yellow-12:#ffffd5;--simple-colors-default-theme-amber-1:#221a00;--simple-colors-default-theme-amber-2:#302500;--simple-colors-default-theme-amber-3:#413200;--simple-colors-default-theme-amber-4:#614b00;--simple-colors-default-theme-amber-5:#876800;--simple-colors-default-theme-amber-6:#b28900;--simple-colors-default-theme-amber-7:#ffc500;--simple-colors-default-theme-amber-8:#ffc235;--simple-colors-default-theme-amber-9:#ffcf5e;--simple-colors-default-theme-amber-10:#ffd677;--simple-colors-default-theme-amber-11:#ffdf92;--simple-colors-default-theme-amber-12:#fff2d4;--simple-colors-default-theme-orange-1:#2c1400;--simple-colors-default-theme-orange-2:#3d1c00;--simple-colors-default-theme-orange-3:#612d00;--simple-colors-default-theme-orange-4:#833d00;--simple-colors-default-theme-orange-5:#ae5100;--simple-colors-default-theme-orange-6:#e56a00;--simple-colors-default-theme-orange-7:#ff9625;--simple-colors-default-theme-orange-8:#ff9e36;--simple-colors-default-theme-orange-9:#ffb05c;--simple-colors-default-theme-orange-10:#ffbd75;--simple-colors-default-theme-orange-11:#ffca92;--simple-colors-default-theme-orange-12:#ffebd7;--simple-colors-default-theme-deep-orange-1:#240700;--simple-colors-default-theme-deep-orange-2:#3a0c00;--simple-colors-default-theme-deep-orange-3:#561100;--simple-colors-default-theme-deep-orange-4:#8a1c00;--simple-colors-default-theme-deep-orange-5:#b92500;--simple-colors-default-theme-deep-orange-6:#f53100;--simple-colors-default-theme-deep-orange-7:#ff6c3c;--simple-colors-default-theme-deep-orange-8:#ff7649;--simple-colors-default-theme-deep-orange-9:#ff8a64;--simple-colors-default-theme-deep-orange-10:#ffa588;--simple-colors-default-theme-deep-orange-11:#ffb299;--simple-colors-default-theme-deep-orange-12:#ffe7e0;--simple-colors-default-theme-brown-1:#200e09;--simple-colors-default-theme-brown-2:#2c140e;--simple-colors-default-theme-brown-3:#3b1e15;--simple-colors-default-theme-brown-4:#5b3328;--simple-colors-default-theme-brown-5:#724539;--simple-colors-default-theme-brown-6:#85574a;--simple-colors-default-theme-brown-7:#a47060;--simple-colors-default-theme-brown-8:#ac7868;--simple-colors-default-theme-brown-9:#b68373;--simple-colors-default-theme-brown-10:#c59485;--simple-colors-default-theme-brown-11:#e5b8aa;--simple-colors-default-theme-brown-12:#f0e2de;--simple-colors-default-theme-blue-grey-1:#0f1518;--simple-colors-default-theme-blue-grey-2:#182023;--simple-colors-default-theme-blue-grey-3:#1e282c;--simple-colors-default-theme-blue-grey-4:#2f3e45;--simple-colors-default-theme-blue-grey-5:#40535b;--simple-colors-default-theme-blue-grey-6:#56707c;--simple-colors-default-theme-blue-grey-7:#718892;--simple-colors-default-theme-blue-grey-8:#7a8f98;--simple-colors-default-theme-blue-grey-9:#8d9fa7;--simple-colors-default-theme-blue-grey-10:#9badb6;--simple-colors-default-theme-blue-grey-11:#b1c5ce;--simple-colors-default-theme-blue-grey-12:#e7eff1}:host{accent-color:var(--simple-colors-default-theme-accent-7)}:host([accent-color=grey]){--simple-colors-default-theme-accent-1:#ffffff;--simple-colors-default-theme-accent-2:#eeeeee;--simple-colors-default-theme-accent-3:#dddddd;--simple-colors-default-theme-accent-4:#cccccc;--simple-colors-default-theme-accent-5:#bbbbbb;--simple-colors-default-theme-accent-6:#999999;--simple-colors-default-theme-accent-7:#666666;--simple-colors-default-theme-accent-8:#444444;--simple-colors-default-theme-accent-9:#333333;--simple-colors-default-theme-accent-10:#222222;--simple-colors-default-theme-accent-11:#111111;--simple-colors-default-theme-accent-12:#000000;--simple-colors-fixed-theme-accent-1:#ffffff;--simple-colors-fixed-theme-accent-2:#eeeeee;--simple-colors-fixed-theme-accent-3:#dddddd;--simple-colors-fixed-theme-accent-4:#cccccc;--simple-colors-fixed-theme-accent-5:#bbbbbb;--simple-colors-fixed-theme-accent-6:#999999;--simple-colors-fixed-theme-accent-7:#666666;--simple-colors-fixed-theme-accent-8:#444444;--simple-colors-fixed-theme-accent-9:#333333;--simple-colors-fixed-theme-accent-10:#222222;--simple-colors-fixed-theme-accent-11:#111111;--simple-colors-fixed-theme-accent-12:#000000}:host([dark][accent-color=grey]){--simple-colors-default-theme-accent-1:#000000;--simple-colors-default-theme-accent-2:#111111;--simple-colors-default-theme-accent-3:#222222;--simple-colors-default-theme-accent-4:#333333;--simple-colors-default-theme-accent-5:#444444;--simple-colors-default-theme-accent-6:#666666;--simple-colors-default-theme-accent-7:#999999;--simple-colors-default-theme-accent-8:#bbbbbb;--simple-colors-default-theme-accent-9:#cccccc;--simple-colors-default-theme-accent-10:#dddddd;--simple-colors-default-theme-accent-11:#eeeeee;--simple-colors-default-theme-accent-12:#ffffff}:host([accent-color=red]){--simple-colors-default-theme-accent-1:#ffdddd;--simple-colors-default-theme-accent-2:#ffaeae;--simple-colors-default-theme-accent-3:#ff8f8f;--simple-colors-default-theme-accent-4:#ff7474;--simple-colors-default-theme-accent-5:#fd5151;--simple-colors-default-theme-accent-6:#ff2222;--simple-colors-default-theme-accent-7:#ee0000;--simple-colors-default-theme-accent-8:#ac0000;--simple-colors-default-theme-accent-9:#850000;--simple-colors-default-theme-accent-10:#670000;--simple-colors-default-theme-accent-11:#520000;--simple-colors-default-theme-accent-12:#3f0000;--simple-colors-fixed-theme-accent-1:#ffdddd;--simple-colors-fixed-theme-accent-2:#ffaeae;--simple-colors-fixed-theme-accent-3:#ff8f8f;--simple-colors-fixed-theme-accent-4:#ff7474;--simple-colors-fixed-theme-accent-5:#fd5151;--simple-colors-fixed-theme-accent-6:#ff2222;--simple-colors-fixed-theme-accent-7:#ee0000;--simple-colors-fixed-theme-accent-8:#ac0000;--simple-colors-fixed-theme-accent-9:#850000;--simple-colors-fixed-theme-accent-10:#670000;--simple-colors-fixed-theme-accent-11:#520000;--simple-colors-fixed-theme-accent-12:#3f0000}:host([dark][accent-color=red]){--simple-colors-default-theme-accent-1:#3f0000;--simple-colors-default-theme-accent-2:#520000;--simple-colors-default-theme-accent-3:#670000;--simple-colors-default-theme-accent-4:#850000;--simple-colors-default-theme-accent-5:#ac0000;--simple-colors-default-theme-accent-6:#ee0000;--simple-colors-default-theme-accent-7:#ff2222;--simple-colors-default-theme-accent-8:#fd5151;--simple-colors-default-theme-accent-9:#ff7474;--simple-colors-default-theme-accent-10:#ff8f8f;--simple-colors-default-theme-accent-11:#ffaeae;--simple-colors-default-theme-accent-12:#ffdddd}:host([accent-color=pink]){--simple-colors-default-theme-accent-1:#ffe6f1;--simple-colors-default-theme-accent-2:#ffa5cf;--simple-colors-default-theme-accent-3:#ff87c0;--simple-colors-default-theme-accent-4:#ff73b5;--simple-colors-default-theme-accent-5:#fd60aa;--simple-colors-default-theme-accent-6:#ff3996;--simple-colors-default-theme-accent-7:#da004e;--simple-colors-default-theme-accent-8:#b80042;--simple-colors-default-theme-accent-9:#980036;--simple-colors-default-theme-accent-10:#78002b;--simple-colors-default-theme-accent-11:#5a0020;--simple-colors-default-theme-accent-12:#440019;--simple-colors-fixed-theme-accent-1:#ffe6f1;--simple-colors-fixed-theme-accent-2:#ffa5cf;--simple-colors-fixed-theme-accent-3:#ff87c0;--simple-colors-fixed-theme-accent-4:#ff73b5;--simple-colors-fixed-theme-accent-5:#fd60aa;--simple-colors-fixed-theme-accent-6:#ff3996;--simple-colors-fixed-theme-accent-7:#da004e;--simple-colors-fixed-theme-accent-8:#b80042;--simple-colors-fixed-theme-accent-9:#980036;--simple-colors-fixed-theme-accent-10:#78002b;--simple-colors-fixed-theme-accent-11:#5a0020;--simple-colors-fixed-theme-accent-12:#440019}:host([dark][accent-color=pink]){--simple-colors-default-theme-accent-1:#440019;--simple-colors-default-theme-accent-2:#5a0020;--simple-colors-default-theme-accent-3:#78002b;--simple-colors-default-theme-accent-4:#980036;--simple-colors-default-theme-accent-5:#b80042;--simple-colors-default-theme-accent-6:#da004e;--simple-colors-default-theme-accent-7:#ff3996;--simple-colors-default-theme-accent-8:#fd60aa;--simple-colors-default-theme-accent-9:#ff73b5;--simple-colors-default-theme-accent-10:#ff87c0;--simple-colors-default-theme-accent-11:#ffa5cf;--simple-colors-default-theme-accent-12:#ffe6f1}:host([accent-color=purple]){--simple-colors-default-theme-accent-1:#fce6ff;--simple-colors-default-theme-accent-2:#f4affd;--simple-colors-default-theme-accent-3:#f394ff;--simple-colors-default-theme-accent-4:#f07cff;--simple-colors-default-theme-accent-5:#ed61ff;--simple-colors-default-theme-accent-6:#e200ff;--simple-colors-default-theme-accent-7:#a500ba;--simple-colors-default-theme-accent-8:#8a009b;--simple-colors-default-theme-accent-9:#6c0079;--simple-colors-default-theme-accent-10:#490052;--simple-colors-default-theme-accent-11:#33003a;--simple-colors-default-theme-accent-12:#200025;--simple-colors-fixed-theme-accent-1:#fce6ff;--simple-colors-fixed-theme-accent-2:#f4affd;--simple-colors-fixed-theme-accent-3:#f394ff;--simple-colors-fixed-theme-accent-4:#f07cff;--simple-colors-fixed-theme-accent-5:#ed61ff;--simple-colors-fixed-theme-accent-6:#e200ff;--simple-colors-fixed-theme-accent-7:#a500ba;--simple-colors-fixed-theme-accent-8:#8a009b;--simple-colors-fixed-theme-accent-9:#6c0079;--simple-colors-fixed-theme-accent-10:#490052;--simple-colors-fixed-theme-accent-11:#33003a;--simple-colors-fixed-theme-accent-12:#200025}:host([dark][accent-color=purple]){--simple-colors-default-theme-accent-1:#200025;--simple-colors-default-theme-accent-2:#33003a;--simple-colors-default-theme-accent-3:#490052;--simple-colors-default-theme-accent-4:#6c0079;--simple-colors-default-theme-accent-5:#8a009b;--simple-colors-default-theme-accent-6:#a500ba;--simple-colors-default-theme-accent-7:#e200ff;--simple-colors-default-theme-accent-8:#ed61ff;--simple-colors-default-theme-accent-9:#f07cff;--simple-colors-default-theme-accent-10:#f394ff;--simple-colors-default-theme-accent-11:#f4affd;--simple-colors-default-theme-accent-12:#fce6ff}:host([accent-color=deep-purple]){--simple-colors-default-theme-accent-1:#f3e4ff;--simple-colors-default-theme-accent-2:#ddacff;--simple-colors-default-theme-accent-3:#c97eff;--simple-colors-default-theme-accent-4:#bb63f9;--simple-colors-default-theme-accent-5:#b44aff;--simple-colors-default-theme-accent-6:#a931ff;--simple-colors-default-theme-accent-7:#7e00d8;--simple-colors-default-theme-accent-8:#5d009f;--simple-colors-default-theme-accent-9:#4c0081;--simple-colors-default-theme-accent-10:#3a0063;--simple-colors-default-theme-accent-11:#2a0049;--simple-colors-default-theme-accent-12:#1d0033;--simple-colors-fixed-theme-accent-1:#f3e4ff;--simple-colors-fixed-theme-accent-2:#ddacff;--simple-colors-fixed-theme-accent-3:#c97eff;--simple-colors-fixed-theme-accent-4:#bb63f9;--simple-colors-fixed-theme-accent-5:#b44aff;--simple-colors-fixed-theme-accent-6:#a931ff;--simple-colors-fixed-theme-accent-7:#7e00d8;--simple-colors-fixed-theme-accent-8:#5d009f;--simple-colors-fixed-theme-accent-9:#4c0081;--simple-colors-fixed-theme-accent-10:#3a0063;--simple-colors-fixed-theme-accent-11:#2a0049;--simple-colors-fixed-theme-accent-12:#1d0033}:host([dark][accent-color=deep-purple]){--simple-colors-default-theme-accent-1:#1d0033;--simple-colors-default-theme-accent-2:#2a0049;--simple-colors-default-theme-accent-3:#3a0063;--simple-colors-default-theme-accent-4:#4c0081;--simple-colors-default-theme-accent-5:#5d009f;--simple-colors-default-theme-accent-6:#7e00d8;--simple-colors-default-theme-accent-7:#a931ff;--simple-colors-default-theme-accent-8:#b44aff;--simple-colors-default-theme-accent-9:#bb63f9;--simple-colors-default-theme-accent-10:#c97eff;--simple-colors-default-theme-accent-11:#ddacff;--simple-colors-default-theme-accent-12:#f3e4ff}:host([accent-color=indigo]){--simple-colors-default-theme-accent-1:#e5ddff;--simple-colors-default-theme-accent-2:#c3b2ff;--simple-colors-default-theme-accent-3:#af97ff;--simple-colors-default-theme-accent-4:#9e82ff;--simple-colors-default-theme-accent-5:#9373ff;--simple-colors-default-theme-accent-6:#835fff;--simple-colors-default-theme-accent-7:#3a00ff;--simple-colors-default-theme-accent-8:#2801b0;--simple-colors-default-theme-accent-9:#20008c;--simple-colors-default-theme-accent-10:#160063;--simple-colors-default-theme-accent-11:#100049;--simple-colors-default-theme-accent-12:#0a0030;--simple-colors-fixed-theme-accent-1:#e5ddff;--simple-colors-fixed-theme-accent-2:#c3b2ff;--simple-colors-fixed-theme-accent-3:#af97ff;--simple-colors-fixed-theme-accent-4:#9e82ff;--simple-colors-fixed-theme-accent-5:#9373ff;--simple-colors-fixed-theme-accent-6:#835fff;--simple-colors-fixed-theme-accent-7:#3a00ff;--simple-colors-fixed-theme-accent-8:#2801b0;--simple-colors-fixed-theme-accent-9:#20008c;--simple-colors-fixed-theme-accent-10:#160063;--simple-colors-fixed-theme-accent-11:#100049;--simple-colors-fixed-theme-accent-12:#0a0030}:host([dark][accent-color=indigo]){--simple-colors-default-theme-accent-1:#0a0030;--simple-colors-default-theme-accent-2:#100049;--simple-colors-default-theme-accent-3:#160063;--simple-colors-default-theme-accent-4:#20008c;--simple-colors-default-theme-accent-5:#2801b0;--simple-colors-default-theme-accent-6:#3a00ff;--simple-colors-default-theme-accent-7:#835fff;--simple-colors-default-theme-accent-8:#9373ff;--simple-colors-default-theme-accent-9:#9e82ff;--simple-colors-default-theme-accent-10:#af97ff;--simple-colors-default-theme-accent-11:#c3b2ff;--simple-colors-default-theme-accent-12:#e5ddff}:host([accent-color=blue]){--simple-colors-default-theme-accent-1:#e2ecff;--simple-colors-default-theme-accent-2:#acc9ff;--simple-colors-default-theme-accent-3:#95baff;--simple-colors-default-theme-accent-4:#74a5ff;--simple-colors-default-theme-accent-5:#5892fd;--simple-colors-default-theme-accent-6:#4083ff;--simple-colors-default-theme-accent-7:#0059ff;--simple-colors-default-theme-accent-8:#0041bb;--simple-colors-default-theme-accent-9:#003494;--simple-colors-default-theme-accent-10:#002569;--simple-colors-default-theme-accent-11:#001947;--simple-colors-default-theme-accent-12:#001333;--simple-colors-fixed-theme-accent-1:#e2ecff;--simple-colors-fixed-theme-accent-2:#acc9ff;--simple-colors-fixed-theme-accent-3:#95baff;--simple-colors-fixed-theme-accent-4:#74a5ff;--simple-colors-fixed-theme-accent-5:#5892fd;--simple-colors-fixed-theme-accent-6:#4083ff;--simple-colors-fixed-theme-accent-7:#0059ff;--simple-colors-fixed-theme-accent-8:#0041bb;--simple-colors-fixed-theme-accent-9:#003494;--simple-colors-fixed-theme-accent-10:#002569;--simple-colors-fixed-theme-accent-11:#001947;--simple-colors-fixed-theme-accent-12:#001333}:host([dark][accent-color=blue]){--simple-colors-default-theme-accent-1:#001333;--simple-colors-default-theme-accent-2:#001947;--simple-colors-default-theme-accent-3:#002569;--simple-colors-default-theme-accent-4:#003494;--simple-colors-default-theme-accent-5:#0041bb;--simple-colors-default-theme-accent-6:#0059ff;--simple-colors-default-theme-accent-7:#4083ff;--simple-colors-default-theme-accent-8:#5892fd;--simple-colors-default-theme-accent-9:#74a5ff;--simple-colors-default-theme-accent-10:#95baff;--simple-colors-default-theme-accent-11:#acc9ff;--simple-colors-default-theme-accent-12:#e2ecff}:host([accent-color=light-blue]){--simple-colors-default-theme-accent-1:#cde8ff;--simple-colors-default-theme-accent-2:#a1d1ff;--simple-colors-default-theme-accent-3:#92c9ff;--simple-colors-default-theme-accent-4:#65b3ff;--simple-colors-default-theme-accent-5:#58adff;--simple-colors-default-theme-accent-6:#41a1ff;--simple-colors-default-theme-accent-7:#007ffc;--simple-colors-default-theme-accent-8:#0066ca;--simple-colors-default-theme-accent-9:#0055a8;--simple-colors-default-theme-accent-10:#003f7d;--simple-colors-default-theme-accent-11:#002850;--simple-colors-default-theme-accent-12:#001b36;--simple-colors-fixed-theme-accent-1:#cde8ff;--simple-colors-fixed-theme-accent-2:#a1d1ff;--simple-colors-fixed-theme-accent-3:#92c9ff;--simple-colors-fixed-theme-accent-4:#65b3ff;--simple-colors-fixed-theme-accent-5:#58adff;--simple-colors-fixed-theme-accent-6:#41a1ff;--simple-colors-fixed-theme-accent-7:#007ffc;--simple-colors-fixed-theme-accent-8:#0066ca;--simple-colors-fixed-theme-accent-9:#0055a8;--simple-colors-fixed-theme-accent-10:#003f7d;--simple-colors-fixed-theme-accent-11:#002850;--simple-colors-fixed-theme-accent-12:#001b36}:host([dark][accent-color=light-blue]){--simple-colors-default-theme-accent-1:#001b36;--simple-colors-default-theme-accent-2:#002850;--simple-colors-default-theme-accent-3:#003f7d;--simple-colors-default-theme-accent-4:#0055a8;--simple-colors-default-theme-accent-5:#0066ca;--simple-colors-default-theme-accent-6:#007ffc;--simple-colors-default-theme-accent-7:#41a1ff;--simple-colors-default-theme-accent-8:#58adff;--simple-colors-default-theme-accent-9:#65b3ff;--simple-colors-default-theme-accent-10:#92c9ff;--simple-colors-default-theme-accent-11:#a1d1ff;--simple-colors-default-theme-accent-12:#cde8ff}:host([accent-color=cyan]){--simple-colors-default-theme-accent-1:#ddf8ff;--simple-colors-default-theme-accent-2:#9beaff;--simple-colors-default-theme-accent-3:#77e2ff;--simple-colors-default-theme-accent-4:#33d4ff;--simple-colors-default-theme-accent-5:#1ccfff;--simple-colors-default-theme-accent-6:#00c9ff;--simple-colors-default-theme-accent-7:#009dc7;--simple-colors-default-theme-accent-8:#007999;--simple-colors-default-theme-accent-9:#005970;--simple-colors-default-theme-accent-10:#003f50;--simple-colors-default-theme-accent-11:#002c38;--simple-colors-default-theme-accent-12:#001a20;--simple-colors-fixed-theme-accent-1:#ddf8ff;--simple-colors-fixed-theme-accent-2:#9beaff;--simple-colors-fixed-theme-accent-3:#77e2ff;--simple-colors-fixed-theme-accent-4:#33d4ff;--simple-colors-fixed-theme-accent-5:#1ccfff;--simple-colors-fixed-theme-accent-6:#00c9ff;--simple-colors-fixed-theme-accent-7:#009dc7;--simple-colors-fixed-theme-accent-8:#007999;--simple-colors-fixed-theme-accent-9:#005970;--simple-colors-fixed-theme-accent-10:#003f50;--simple-colors-fixed-theme-accent-11:#002c38;--simple-colors-fixed-theme-accent-12:#001a20}:host([dark][accent-color=cyan]){--simple-colors-default-theme-accent-1:#001a20;--simple-colors-default-theme-accent-2:#002c38;--simple-colors-default-theme-accent-3:#003f50;--simple-colors-default-theme-accent-4:#005970;--simple-colors-default-theme-accent-5:#007999;--simple-colors-default-theme-accent-6:#009dc7;--simple-colors-default-theme-accent-7:#00c9ff;--simple-colors-default-theme-accent-8:#1ccfff;--simple-colors-default-theme-accent-9:#33d4ff;--simple-colors-default-theme-accent-10:#77e2ff;--simple-colors-default-theme-accent-11:#9beaff;--simple-colors-default-theme-accent-12:#ddf8ff}:host([accent-color=teal]){--simple-colors-default-theme-accent-1:#d9fff0;--simple-colors-default-theme-accent-2:#98ffd7;--simple-colors-default-theme-accent-3:#79ffcb;--simple-colors-default-theme-accent-4:#56ffbd;--simple-colors-default-theme-accent-5:#29ffac;--simple-colors-default-theme-accent-6:#00ff9c;--simple-colors-default-theme-accent-7:#009d75;--simple-colors-default-theme-accent-8:#007658;--simple-colors-default-theme-accent-9:#004e3a;--simple-colors-default-theme-accent-10:#003829;--simple-colors-default-theme-accent-11:#002a20;--simple-colors-default-theme-accent-12:#001b14;--simple-colors-fixed-theme-accent-1:#d9fff0;--simple-colors-fixed-theme-accent-2:#98ffd7;--simple-colors-fixed-theme-accent-3:#79ffcb;--simple-colors-fixed-theme-accent-4:#56ffbd;--simple-colors-fixed-theme-accent-5:#29ffac;--simple-colors-fixed-theme-accent-6:#00ff9c;--simple-colors-fixed-theme-accent-7:#009d75;--simple-colors-fixed-theme-accent-8:#007658;--simple-colors-fixed-theme-accent-9:#004e3a;--simple-colors-fixed-theme-accent-10:#003829;--simple-colors-fixed-theme-accent-11:#002a20;--simple-colors-fixed-theme-accent-12:#001b14}:host([dark][accent-color=teal]){--simple-colors-default-theme-accent-1:#001b14;--simple-colors-default-theme-accent-2:#002a20;--simple-colors-default-theme-accent-3:#003829;--simple-colors-default-theme-accent-4:#004e3a;--simple-colors-default-theme-accent-5:#007658;--simple-colors-default-theme-accent-6:#009d75;--simple-colors-default-theme-accent-7:#00ff9c;--simple-colors-default-theme-accent-8:#29ffac;--simple-colors-default-theme-accent-9:#56ffbd;--simple-colors-default-theme-accent-10:#79ffcb;--simple-colors-default-theme-accent-11:#98ffd7;--simple-colors-default-theme-accent-12:#d9fff0}:host([accent-color=green]){--simple-colors-default-theme-accent-1:#e1ffeb;--simple-colors-default-theme-accent-2:#acffc9;--simple-colors-default-theme-accent-3:#79ffa7;--simple-colors-default-theme-accent-4:#49ff88;--simple-colors-default-theme-accent-5:#24ff70;--simple-colors-default-theme-accent-6:#00f961;--simple-colors-default-theme-accent-7:#008c37;--simple-colors-default-theme-accent-8:#00762e;--simple-colors-default-theme-accent-9:#005a23;--simple-colors-default-theme-accent-10:#003d18;--simple-colors-default-theme-accent-11:#002a11;--simple-colors-default-theme-accent-12:#001d0c;--simple-colors-fixed-theme-accent-1:#e1ffeb;--simple-colors-fixed-theme-accent-2:#acffc9;--simple-colors-fixed-theme-accent-3:#79ffa7;--simple-colors-fixed-theme-accent-4:#49ff88;--simple-colors-fixed-theme-accent-5:#24ff70;--simple-colors-fixed-theme-accent-6:#00f961;--simple-colors-fixed-theme-accent-7:#008c37;--simple-colors-fixed-theme-accent-8:#00762e;--simple-colors-fixed-theme-accent-9:#005a23;--simple-colors-fixed-theme-accent-10:#003d18;--simple-colors-fixed-theme-accent-11:#002a11;--simple-colors-fixed-theme-accent-12:#001d0c}:host([dark][accent-color=green]){--simple-colors-default-theme-accent-1:#001d0c;--simple-colors-default-theme-accent-2:#002a11;--simple-colors-default-theme-accent-3:#003d18;--simple-colors-default-theme-accent-4:#005a23;--simple-colors-default-theme-accent-5:#00762e;--simple-colors-default-theme-accent-6:#008c37;--simple-colors-default-theme-accent-7:#00f961;--simple-colors-default-theme-accent-8:#24ff70;--simple-colors-default-theme-accent-9:#49ff88;--simple-colors-default-theme-accent-10:#79ffa7;--simple-colors-default-theme-accent-11:#acffc9;--simple-colors-default-theme-accent-12:#e1ffeb}:host([accent-color=light-green]){--simple-colors-default-theme-accent-1:#ebffdb;--simple-colors-default-theme-accent-2:#c7ff9b;--simple-colors-default-theme-accent-3:#b1ff75;--simple-colors-default-theme-accent-4:#a1fd5a;--simple-colors-default-theme-accent-5:#8efd38;--simple-colors-default-theme-accent-6:#6fff00;--simple-colors-default-theme-accent-7:#429d00;--simple-colors-default-theme-accent-8:#357f00;--simple-colors-default-theme-accent-9:#296100;--simple-colors-default-theme-accent-10:#1b3f00;--simple-colors-default-theme-accent-11:#143000;--simple-colors-default-theme-accent-12:#0d2000;--simple-colors-fixed-theme-accent-1:#ebffdb;--simple-colors-fixed-theme-accent-2:#c7ff9b;--simple-colors-fixed-theme-accent-3:#b1ff75;--simple-colors-fixed-theme-accent-4:#a1fd5a;--simple-colors-fixed-theme-accent-5:#8efd38;--simple-colors-fixed-theme-accent-6:#6fff00;--simple-colors-fixed-theme-accent-7:#429d00;--simple-colors-fixed-theme-accent-8:#357f00;--simple-colors-fixed-theme-accent-9:#296100;--simple-colors-fixed-theme-accent-10:#1b3f00;--simple-colors-fixed-theme-accent-11:#143000;--simple-colors-fixed-theme-accent-12:#0d2000}:host([dark][accent-color=light-green]){--simple-colors-default-theme-accent-1:#0d2000;--simple-colors-default-theme-accent-2:#143000;--simple-colors-default-theme-accent-3:#1b3f00;--simple-colors-default-theme-accent-4:#296100;--simple-colors-default-theme-accent-5:#357f00;--simple-colors-default-theme-accent-6:#429d00;--simple-colors-default-theme-accent-7:#6fff00;--simple-colors-default-theme-accent-8:#8efd38;--simple-colors-default-theme-accent-9:#a1fd5a;--simple-colors-default-theme-accent-10:#b1ff75;--simple-colors-default-theme-accent-11:#c7ff9b;--simple-colors-default-theme-accent-12:#ebffdb}:host([accent-color=lime]){--simple-colors-default-theme-accent-1:#f1ffd2;--simple-colors-default-theme-accent-2:#dfff9b;--simple-colors-default-theme-accent-3:#d4ff77;--simple-colors-default-theme-accent-4:#caff58;--simple-colors-default-theme-accent-5:#bdff2d;--simple-colors-default-theme-accent-6:#aeff00;--simple-colors-default-theme-accent-7:#649900;--simple-colors-default-theme-accent-8:#4d7600;--simple-colors-default-theme-accent-9:#3b5a00;--simple-colors-default-theme-accent-10:#293f00;--simple-colors-default-theme-accent-11:#223400;--simple-colors-default-theme-accent-12:#182400;--simple-colors-fixed-theme-accent-1:#f1ffd2;--simple-colors-fixed-theme-accent-2:#dfff9b;--simple-colors-fixed-theme-accent-3:#d4ff77;--simple-colors-fixed-theme-accent-4:#caff58;--simple-colors-fixed-theme-accent-5:#bdff2d;--simple-colors-fixed-theme-accent-6:#aeff00;--simple-colors-fixed-theme-accent-7:#649900;--simple-colors-fixed-theme-accent-8:#4d7600;--simple-colors-fixed-theme-accent-9:#3b5a00;--simple-colors-fixed-theme-accent-10:#293f00;--simple-colors-fixed-theme-accent-11:#223400;--simple-colors-fixed-theme-accent-12:#182400}:host([dark][accent-color=lime]){--simple-colors-default-theme-accent-1:#182400;--simple-colors-default-theme-accent-2:#223400;--simple-colors-default-theme-accent-3:#293f00;--simple-colors-default-theme-accent-4:#3b5a00;--simple-colors-default-theme-accent-5:#4d7600;--simple-colors-default-theme-accent-6:#649900;--simple-colors-default-theme-accent-7:#aeff00;--simple-colors-default-theme-accent-8:#bdff2d;--simple-colors-default-theme-accent-9:#caff58;--simple-colors-default-theme-accent-10:#d4ff77;--simple-colors-default-theme-accent-11:#dfff9b;--simple-colors-default-theme-accent-12:#f1ffd2}:host([accent-color=yellow]){--simple-colors-default-theme-accent-1:#ffffd5;--simple-colors-default-theme-accent-2:#ffffac;--simple-colors-default-theme-accent-3:#ffff90;--simple-colors-default-theme-accent-4:#ffff7c;--simple-colors-default-theme-accent-5:#ffff3a;--simple-colors-default-theme-accent-6:#f6f600;--simple-colors-default-theme-accent-7:#929100;--simple-colors-default-theme-accent-8:#787700;--simple-colors-default-theme-accent-9:#585700;--simple-colors-default-theme-accent-10:#454400;--simple-colors-default-theme-accent-11:#303000;--simple-colors-default-theme-accent-12:#242400;--simple-colors-fixed-theme-accent-1:#ffffd5;--simple-colors-fixed-theme-accent-2:#ffffac;--simple-colors-fixed-theme-accent-3:#ffff90;--simple-colors-fixed-theme-accent-4:#ffff7c;--simple-colors-fixed-theme-accent-5:#ffff3a;--simple-colors-fixed-theme-accent-6:#f6f600;--simple-colors-fixed-theme-accent-7:#929100;--simple-colors-fixed-theme-accent-8:#787700;--simple-colors-fixed-theme-accent-9:#585700;--simple-colors-fixed-theme-accent-10:#454400;--simple-colors-fixed-theme-accent-11:#303000;--simple-colors-fixed-theme-accent-12:#242400}:host([dark][accent-color=yellow]){--simple-colors-default-theme-accent-1:#242400;--simple-colors-default-theme-accent-2:#303000;--simple-colors-default-theme-accent-3:#454400;--simple-colors-default-theme-accent-4:#585700;--simple-colors-default-theme-accent-5:#787700;--simple-colors-default-theme-accent-6:#929100;--simple-colors-default-theme-accent-7:#f6f600;--simple-colors-default-theme-accent-8:#ffff3a;--simple-colors-default-theme-accent-9:#ffff7c;--simple-colors-default-theme-accent-10:#ffff90;--simple-colors-default-theme-accent-11:#ffffac;--simple-colors-default-theme-accent-12:#ffffd5}:host([accent-color=amber]){--simple-colors-default-theme-accent-1:#fff2d4;--simple-colors-default-theme-accent-2:#ffdf92;--simple-colors-default-theme-accent-3:#ffd677;--simple-colors-default-theme-accent-4:#ffcf5e;--simple-colors-default-theme-accent-5:#ffc235;--simple-colors-default-theme-accent-6:#ffc500;--simple-colors-default-theme-accent-7:#b28900;--simple-colors-default-theme-accent-8:#876800;--simple-colors-default-theme-accent-9:#614b00;--simple-colors-default-theme-accent-10:#413200;--simple-colors-default-theme-accent-11:#302500;--simple-colors-default-theme-accent-12:#221a00;--simple-colors-fixed-theme-accent-1:#fff2d4;--simple-colors-fixed-theme-accent-2:#ffdf92;--simple-colors-fixed-theme-accent-3:#ffd677;--simple-colors-fixed-theme-accent-4:#ffcf5e;--simple-colors-fixed-theme-accent-5:#ffc235;--simple-colors-fixed-theme-accent-6:#ffc500;--simple-colors-fixed-theme-accent-7:#b28900;--simple-colors-fixed-theme-accent-8:#876800;--simple-colors-fixed-theme-accent-9:#614b00;--simple-colors-fixed-theme-accent-10:#413200;--simple-colors-fixed-theme-accent-11:#302500;--simple-colors-fixed-theme-accent-12:#221a00}:host([dark][accent-color=amber]){--simple-colors-default-theme-accent-1:#221a00;--simple-colors-default-theme-accent-2:#302500;--simple-colors-default-theme-accent-3:#413200;--simple-colors-default-theme-accent-4:#614b00;--simple-colors-default-theme-accent-5:#876800;--simple-colors-default-theme-accent-6:#b28900;--simple-colors-default-theme-accent-7:#ffc500;--simple-colors-default-theme-accent-8:#ffc235;--simple-colors-default-theme-accent-9:#ffcf5e;--simple-colors-default-theme-accent-10:#ffd677;--simple-colors-default-theme-accent-11:#ffdf92;--simple-colors-default-theme-accent-12:#fff2d4}:host([accent-color=orange]){--simple-colors-default-theme-accent-1:#ffebd7;--simple-colors-default-theme-accent-2:#ffca92;--simple-colors-default-theme-accent-3:#ffbd75;--simple-colors-default-theme-accent-4:#ffb05c;--simple-colors-default-theme-accent-5:#ff9e36;--simple-colors-default-theme-accent-6:#ff9625;--simple-colors-default-theme-accent-7:#e56a00;--simple-colors-default-theme-accent-8:#ae5100;--simple-colors-default-theme-accent-9:#833d00;--simple-colors-default-theme-accent-10:#612d00;--simple-colors-default-theme-accent-11:#3d1c00;--simple-colors-default-theme-accent-12:#2c1400;--simple-colors-fixed-theme-accent-1:#ffebd7;--simple-colors-fixed-theme-accent-2:#ffca92;--simple-colors-fixed-theme-accent-3:#ffbd75;--simple-colors-fixed-theme-accent-4:#ffb05c;--simple-colors-fixed-theme-accent-5:#ff9e36;--simple-colors-fixed-theme-accent-6:#ff9625;--simple-colors-fixed-theme-accent-7:#e56a00;--simple-colors-fixed-theme-accent-8:#ae5100;--simple-colors-fixed-theme-accent-9:#833d00;--simple-colors-fixed-theme-accent-10:#612d00;--simple-colors-fixed-theme-accent-11:#3d1c00;--simple-colors-fixed-theme-accent-12:#2c1400}:host([dark][accent-color=orange]){--simple-colors-default-theme-accent-1:#2c1400;--simple-colors-default-theme-accent-2:#3d1c00;--simple-colors-default-theme-accent-3:#612d00;--simple-colors-default-theme-accent-4:#833d00;--simple-colors-default-theme-accent-5:#ae5100;--simple-colors-default-theme-accent-6:#e56a00;--simple-colors-default-theme-accent-7:#ff9625;--simple-colors-default-theme-accent-8:#ff9e36;--simple-colors-default-theme-accent-9:#ffb05c;--simple-colors-default-theme-accent-10:#ffbd75;--simple-colors-default-theme-accent-11:#ffca92;--simple-colors-default-theme-accent-12:#ffebd7}:host([accent-color=deep-orange]){--simple-colors-default-theme-accent-1:#ffe7e0;--simple-colors-default-theme-accent-2:#ffb299;--simple-colors-default-theme-accent-3:#ffa588;--simple-colors-default-theme-accent-4:#ff8a64;--simple-colors-default-theme-accent-5:#ff7649;--simple-colors-default-theme-accent-6:#ff6c3c;--simple-colors-default-theme-accent-7:#f53100;--simple-colors-default-theme-accent-8:#b92500;--simple-colors-default-theme-accent-9:#8a1c00;--simple-colors-default-theme-accent-10:#561100;--simple-colors-default-theme-accent-11:#3a0c00;--simple-colors-default-theme-accent-12:#240700;--simple-colors-fixed-theme-accent-1:#ffe7e0;--simple-colors-fixed-theme-accent-2:#ffb299;--simple-colors-fixed-theme-accent-3:#ffa588;--simple-colors-fixed-theme-accent-4:#ff8a64;--simple-colors-fixed-theme-accent-5:#ff7649;--simple-colors-fixed-theme-accent-6:#ff6c3c;--simple-colors-fixed-theme-accent-7:#f53100;--simple-colors-fixed-theme-accent-8:#b92500;--simple-colors-fixed-theme-accent-9:#8a1c00;--simple-colors-fixed-theme-accent-10:#561100;--simple-colors-fixed-theme-accent-11:#3a0c00;--simple-colors-fixed-theme-accent-12:#240700}:host([dark][accent-color=deep-orange]){--simple-colors-default-theme-accent-1:#240700;--simple-colors-default-theme-accent-2:#3a0c00;--simple-colors-default-theme-accent-3:#561100;--simple-colors-default-theme-accent-4:#8a1c00;--simple-colors-default-theme-accent-5:#b92500;--simple-colors-default-theme-accent-6:#f53100;--simple-colors-default-theme-accent-7:#ff6c3c;--simple-colors-default-theme-accent-8:#ff7649;--simple-colors-default-theme-accent-9:#ff8a64;--simple-colors-default-theme-accent-10:#ffa588;--simple-colors-default-theme-accent-11:#ffb299;--simple-colors-default-theme-accent-12:#ffe7e0}:host([accent-color=brown]){--simple-colors-default-theme-accent-1:#f0e2de;--simple-colors-default-theme-accent-2:#e5b8aa;--simple-colors-default-theme-accent-3:#c59485;--simple-colors-default-theme-accent-4:#b68373;--simple-colors-default-theme-accent-5:#ac7868;--simple-colors-default-theme-accent-6:#a47060;--simple-colors-default-theme-accent-7:#85574a;--simple-colors-default-theme-accent-8:#724539;--simple-colors-default-theme-accent-9:#5b3328;--simple-colors-default-theme-accent-10:#3b1e15;--simple-colors-default-theme-accent-11:#2c140e;--simple-colors-default-theme-accent-12:#200e09;--simple-colors-fixed-theme-accent-1:#f0e2de;--simple-colors-fixed-theme-accent-2:#e5b8aa;--simple-colors-fixed-theme-accent-3:#c59485;--simple-colors-fixed-theme-accent-4:#b68373;--simple-colors-fixed-theme-accent-5:#ac7868;--simple-colors-fixed-theme-accent-6:#a47060;--simple-colors-fixed-theme-accent-7:#85574a;--simple-colors-fixed-theme-accent-8:#724539;--simple-colors-fixed-theme-accent-9:#5b3328;--simple-colors-fixed-theme-accent-10:#3b1e15;--simple-colors-fixed-theme-accent-11:#2c140e;--simple-colors-fixed-theme-accent-12:#200e09}:host([dark][accent-color=brown]){--simple-colors-default-theme-accent-1:#200e09;--simple-colors-default-theme-accent-2:#2c140e;--simple-colors-default-theme-accent-3:#3b1e15;--simple-colors-default-theme-accent-4:#5b3328;--simple-colors-default-theme-accent-5:#724539;--simple-colors-default-theme-accent-6:#85574a;--simple-colors-default-theme-accent-7:#a47060;--simple-colors-default-theme-accent-8:#ac7868;--simple-colors-default-theme-accent-9:#b68373;--simple-colors-default-theme-accent-10:#c59485;--simple-colors-default-theme-accent-11:#e5b8aa;--simple-colors-default-theme-accent-12:#f0e2de}:host([accent-color=blue-grey]){--simple-colors-default-theme-accent-1:#e7eff1;--simple-colors-default-theme-accent-2:#b1c5ce;--simple-colors-default-theme-accent-3:#9badb6;--simple-colors-default-theme-accent-4:#8d9fa7;--simple-colors-default-theme-accent-5:#7a8f98;--simple-colors-default-theme-accent-6:#718892;--simple-colors-default-theme-accent-7:#56707c;--simple-colors-default-theme-accent-8:#40535b;--simple-colors-default-theme-accent-9:#2f3e45;--simple-colors-default-theme-accent-10:#1e282c;--simple-colors-default-theme-accent-11:#182023;--simple-colors-default-theme-accent-12:#0f1518;--simple-colors-fixed-theme-accent-1:#e7eff1;--simple-colors-fixed-theme-accent-2:#b1c5ce;--simple-colors-fixed-theme-accent-3:#9badb6;--simple-colors-fixed-theme-accent-4:#8d9fa7;--simple-colors-fixed-theme-accent-5:#7a8f98;--simple-colors-fixed-theme-accent-6:#718892;--simple-colors-fixed-theme-accent-7:#56707c;--simple-colors-fixed-theme-accent-8:#40535b;--simple-colors-fixed-theme-accent-9:#2f3e45;--simple-colors-fixed-theme-accent-10:#1e282c;--simple-colors-fixed-theme-accent-11:#182023;--simple-colors-fixed-theme-accent-12:#0f1518}:host([dark][accent-color=blue-grey]){--simple-colors-default-theme-accent-1:#0f1518;--simple-colors-default-theme-accent-2:#182023;--simple-colors-default-theme-accent-3:#1e282c;--simple-colors-default-theme-accent-4:#2f3e45;--simple-colors-default-theme-accent-5:#40535b;--simple-colors-default-theme-accent-6:#56707c;--simple-colors-default-theme-accent-7:#718892;--simple-colors-default-theme-accent-8:#7a8f98;--simple-colors-default-theme-accent-9:#8d9fa7;--simple-colors-default-theme-accent-10:#9badb6;--simple-colors-default-theme-accent-11:#b1c5ce;--simple-colors-default-theme-accent-12:#e7eff1}`]}render(){return i` <slot></slot>`}static get properties(){return{...super.properties,accentColor:{attribute:"accent-color",type:String,reflect:!0},dark:{name:"dark",type:Boolean,reflect:!0}}}constructor(){super(),this.accentColor="grey",this.dark=!1,this.colors=Kn.colors}static get tag(){return"simple-colors"}invertShade(e){return Kn.invertShade(e)}getColorInfo(e){return Kn.getColorInfo(e)}makeVariable(e="grey",t=1,i="default"){return Kn.makeVariable("grey",1,"default")}getContrastingColors(e,t,i){return Kn.getContrastingColors(e,t,i)}getContrastingShades(e,t,i,o){return Kn.getContrastingShades(e,t,i,o)}isContrastCompliant(e,t,i,o,n){return Kn.isContrastCompliant(e,t,i,o,n)}}}(e)){}window.customElements.define(Wn.tag,Wn);class Jn extends Wn{static get tag(){return"simple-toast-el"}static get styles(){return[...super.styles,t`:host{display:none;justify-content:center;position:fixed;min-width:100px;text-align:center;color:var(--simple-colors-default-theme-accent-1,#fff);background-color:var(--simple-colors-default-theme-accent-12,#000);border-radius:var(--simple-toast-border-radius,2px);border:var(--simple-toast-border,none);font-size:var(--simple-toast-font-size,1em);font-family:var(--simple-toast-font-family,sans-serif)}:host(.show){display:flex}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:var(--simple-toast-bottom,40px);opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:var(--simple-toast-bottom,40px);opacity:1}}@-webkit-keyframes fadeout{from{bottom:var(--simple-toast-bottom,40px);opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:var(--simple-toast-bottom,40px);opacity:1}to{bottom:0;opacity:0}}`]}static get properties(){return{...super.properties,text:{type:String},duration:{type:Number},opened:{type:Boolean}}}constructor(){super(),this.text="",this.duration=3e3,this.opened=!1,this.addEventListener("animationend",(e=>{"fadeout"==e.animationName&&(this.opened=!1)}))}updated(e){super.updated(e),e.forEach(((e,t)=>{"opened"===t&&(this.dispatchEvent(new CustomEvent("opened-changed",{detail:{value:this[t]}})),this[t]?this.show(this.text):this.hide()),"duration"===t&&this[t]&&(this.style.animation="fadein 0.2s, fadeout 0.2s "+this[t]/1e3+"s")}))}render(){return i`<span><span>${this.text}</span><slot></slot></span>`}firstUpdated(e){super.updated(e),this.style.setProperty("aria-live","assertive"),this.style.setProperty("role","alert"),this.style.setProperty("aria-atomic","true"),this.style.setProperty("aria-relevant","all")}hide(){this.classList.remove("show")}show(e=""){this.text=e,this.classList.add("show")}}customElements.define(Jn.tag,Jn),
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
window.SimpleToast=window.SimpleToast||{},window.SimpleToast.requestAvailability=()=>(window.SimpleToast.instance||(window.SimpleToast.instance=document.createElement("simple-toast"),document.body.appendChild(window.SimpleToast.instance)),window.SimpleToast.instance),window.SimpleToast.requestAvailability();class Gn extends Wn{static get styles(){return[...super.styles,t`:host{display:block}:host([hidden]){display:none}simple-toast-el{box-shadow:0 2px 5px 0 rgba(0,0,0,.26);width:var(--simple-toast-width,auto);color:var(--simple-toast-color,var(--simple-colors-default-theme-accent-1,#fff));background-color:var(--simple-toast-bg,var(--simple-colors-default-theme-accent-12,#000));top:var(--simple-toast-top);margin:var(--simple-toast-margin,8px);padding:var(--simple-toast-padding,16px);left:var(--simple-toast-left,36px);bottom:var(--simple-toast-bottom,36px);right:var(--simple-toast-right);border:var(--simple-toast-border);z-index:var(--simple-toast-z-index,1000);font-size:var(--simple-toast-font-size)}button{margin-left:8px}`]}render(){return i` <simple-toast-el id="toast" accent-color="${this.accentColor}" ?dark="${this.dark}" text="${this.text}" duration="${this.duration}" ?opened="${this.opened}" @opened-changed="${this.openedChanged}" .class="${this.classStyle}"> <slot></slot> <button .hidden="${!this.closeButton}" @click="${this.hide}"> ${this.closeText} </button> </simple-toast-el>`}static get properties(){return{...super.properties,opened:{type:Boolean,reflect:!0},text:{type:String},classStyle:{type:String,attribute:"class-style"},closeText:{type:String,attribute:"close-text"},duration:{type:Number},eventCallback:{type:String,attribute:"event-callback"},closeButton:{type:Boolean,reflect:!0,attribute:"close-button"}}}static get tag(){return"simple-toast"}constructor(){super(),this.setDefaultToast()}connectedCallback(){super.connectedCallback(),window.addEventListener("simple-toast-hide",this.hideSimpleToast.bind(this)),window.addEventListener("simple-toast-show",this.showSimpleToast.bind(this))}disconnectedCallback(){window.removeEventListener("simple-toast-hide",this.hideSimpleToast.bind(this)),window.removeEventListener("simple-toast-show",this.showSimpleToast.bind(this)),super.disconnectedCallback()}hideSimpleToast(e){this.hide()}openedChanged(e){this.opened=e.detail.value}setDefaultToast(){for(this.opened=!1,this.text="Saved",this.classStyle="",this.closeText="Close",this.duration=3e3,this.accentColor="grey",this.dark=!1,this.eventCallback=null,this.closeButton=!0;null!==this.firstChild;)this.removeChild(this.firstChild)}showSimpleToast(e){this.setDefaultToast(),e.detail.duration&&(this.duration=e.detail.duration),e.detail.text&&(this.text=e.detail.text),e.detail.classStyle&&(this.classStyle=e.detail.classStyle),e.detail.closeText&&(this.closeText=e.detail.closeText),e.detail.closeButton&&(this.closeButton=e.detail.closeButton),e.detail.eventCallback&&(this.eventCallback=e.detail.eventCallback),e.detail.slot&&this.appendChild(e.detail.slot),e.detail.accentColor&&(this.accentColor=e.detail.accentColor),e.detail.dark&&(this.dark=e.detail.dark),this.show()}show(e){this.opened=!0}hide(e){if(this.eventCallback){const e=new CustomEvent(this.eventCallback,{bubbles:!0,cancelable:!0,detail:!0,composed:!0});this.dispatchEvent(e)}this.opened=!1}}window.customElements.define(Gn.tag,Gn),String.prototype.replaceAll||(String.prototype.replaceAll=function(e,t){return this.split(e).join(t)});class Xn extends HTMLElement{static get tag(){return"simple-iconset"}constructor(){super(),this.iconsets={},this.iconlist=[],this.manifest={},this.needsHydrated=[]}registerManifest(e){(e||[]).forEach((e=>{this.manifest[e.name]||(this.manifest[e.name]=e.icons||[],this.manifest[e.name].forEach((t=>{this.iconlist.push(`${e.name}:${t}`)})))}))}registerIconset(e,t={}){if("object"==typeof t?this.iconsets[e]={...t}:"string"==typeof t&&(this.iconsets[e]=t),this.needsHydrated.length>0){let e=[];this.needsHydrated.forEach(((t,i)=>{"function"==typeof t.setSrcByIcon&&t.setSrcByIcon(this)&&e.push(i)})),e.reverse().forEach((e=>{this.needsHydrated.splice(e,1)}))}}getIcon(e,t){let i=e.replaceAll("/","-").split(":");if(1===i.length&&(i=["icons",e]),2==i.length&&this.iconsets[i[0]]){if("string"!=typeof this.iconsets[i[0]]&&this.iconsets[i[0]][i[1]]&&"function"!=typeof this.iconsets[i[0]][i[1]])return this.iconsets[i[0]][i[1]];if(i[1])return`${this.iconsets[i[0]]}${i[1]}.svg`}return t!==this&&t&&this.needsHydrated.push(t),null}}customElements.define(Xn.tag,Xn),window.SimpleIconset=window.SimpleIconset||{},window.SimpleIconset.requestAvailability=()=>(null==window.SimpleIconset.instance&&(window.SimpleIconset.instance=document.createElement("simple-iconset")),document.body.appendChild(window.SimpleIconset.instance),window.SimpleIconset.instance);const Zn=window.SimpleIconset.requestAvailability();var Qn=Object.freeze({__proto__:null,SimpleIconset:Xn,SimpleIconsetStore:Zn});Zn.registerManifest([{name:"av",icons:["add-to-queue","airplay","album","art-track","av-timer","branding-watermark","call-to-action","closed-caption","equalizer","explicit","fast-forward","fast-rewind","featured-play-list","featured-video","fiber-dvr","fiber-manual-record","fiber-new","fiber-pin","fiber-smart-record","forward-10","forward-30","forward-5","games","hd","hearing","high-quality","library-add","library-books","library-music","loop","mic-none","mic-off","mic","movie","music-video","new-releases","not-interested","note","pause-circle-filled","pause-circle-outline","pause","play-arrow","play-circle-filled","play-circle-outline","playlist-add-check","playlist-add","playlist-play","queue-music","queue-play-next","queue","radio","recent-actors","remove-from-queue","repeat-one","repeat","replay-10","replay-30","replay-5","replay","shuffle","skip-next","skip-previous","slow-motion-video","snooze","sort-by-alpha","stop","subscriptions","subtitles","surround-sound","video-call","video-label","video-library","videocam-off","videocam","volume-down","volume-mute","volume-off","volume-up","web-asset","web"]},{name:"communication",icons:["business","call-end","call-made","call-merge","call-missed-outgoing","call-missed","call-received","call-split","call","chat-bubble-outline","chat-bubble","chat","clear-all","comment","contact-mail","contact-phone","contacts","dialer-sip","dialpad","email","forum","import-contacts","import-export","invert-colors-off","live-help","location-off","location-on","mail-outline","message","no-sim","phone","phonelink-erase","phonelink-lock","phonelink-ring","phonelink-setup","portable-wifi-off","present-to-all","ring-volume","rss-feed","screen-share","speaker-phone","stay-current-landscape","stay-current-portrait","stay-primary-landscape","stay-primary-portrait","stop-screen-share","swap-calls","textsms","voicemail","vpn-key"]},{name:"device",icons:["access-alarm","access-alarms","access-time","add-alarm","airplanemode-active","airplanemode-inactive","battery-20","battery-30","battery-50","battery-60","battery-80","battery-90","battery-alert","battery-charging-20","battery-charging-30","battery-charging-50","battery-charging-60","battery-charging-80","battery-charging-90","battery-charging-full","battery-full","battery-std","battery-unknown","bluetooth-connected","bluetooth-disabled","bluetooth-searching","bluetooth","brightness-auto","brightness-high","brightness-low","brightness-medium","data-usage","developer-mode","devices","dvr","gps-fixed","gps-not-fixed","gps-off","graphic-eq","location-disabled","location-searching","network-cell","network-wifi","nfc","screen-lock-landscape","screen-lock-portrait","screen-lock-rotation","screen-rotation","sd-storage","settings-system-daydream","signal-cellular-0-bar","signal-cellular-1-bar","signal-cellular-2-bar","signal-cellular-3-bar","signal-cellular-4-bar","signal-cellular-connected-no-internet-0-bar","signal-cellular-connected-no-internet-1-bar","signal-cellular-connected-no-internet-2-bar","signal-cellular-connected-no-internet-3-bar","signal-cellular-connected-no-internet-4-bar","signal-cellular-no-sim","signal-cellular-null","signal-cellular-off","signal-wifi-0-bar","signal-wifi-1-bar-lock","signal-wifi-1-bar","signal-wifi-2-bar-lock","signal-wifi-2-bar","signal-wifi-3-bar-lock","signal-wifi-3-bar","signal-wifi-4-bar-lock","signal-wifi-4-bar","signal-wifi-off","storage","usb","wallpaper","widgets","wifi-lock","wifi-tethering"]},{name:"editor",icons:["attach-file","attach-money","border-all","border-bottom","border-clear","border-color","border-horizontal","border-inner","border-left","border-outer","border-right","border-style","border-top","border-vertical","bubble-chart","drag-handle","format-align-center","format-align-justify","format-align-left","format-align-right","format-bold","format-clear","format-color-fill","format-color-reset","format-color-text","format-indent-decrease","format-indent-increase","format-italic","format-line-spacing","format-list-bulleted","format-list-numbered","format-page-break","format-paint","format-quote","format-shapes","format-size","format-strikethrough","format-textdirection-l-to-r","format-textdirection-r-to-l","format-underlined","functions","highlight","insert-chart","insert-comment","insert-drive-file","insert-emoticon","insert-invitation","insert-link","insert-photo","linear-scale","merge-type","mode-comment","mode-edit","monetization-on","money-off","multiline-chart","pie-chart-outlined","pie-chart","publish","short-text","show-chart","space-bar","strikethrough-s","text-fields","title","vertical-align-bottom","vertical-align-center","vertical-align-top","wrap-text"]},{name:"elmsln-custom",icons:[]},{name:"hardware",icons:["cast-connected","cast","computer","desktop-mac","desktop-windows","developer-board","device-hub","devices-other","dock","gamepad","headset-mic","headset","keyboard-arrow-down","keyboard-arrow-left","keyboard-arrow-right","keyboard-arrow-up","keyboard-backspace","keyboard-capslock","keyboard-hide","keyboard-return","keyboard-tab","keyboard-voice","keyboard","laptop-chromebook","laptop-mac","laptop-windows","laptop","memory","mouse","phone-android","phone-iphone","phonelink-off","phonelink","power-input","router","scanner","security","sim-card","smartphone","speaker-group","speaker","tablet-android","tablet-mac","tablet","toys","tv","videogame-asset","watch"]},{name:"icons",icons:["3d-rotation","accessibility","accessible","account-balance-wallet","account-balance","account-box","account-circle","add-alert","add-box","add-circle-outline","add-circle","add-shopping-cart","add","alarm-add","alarm-off","alarm-on","alarm","all-out","android","announcement","apps","archive","arrow-back","arrow-downward","arrow-drop-down-circle","arrow-drop-down","arrow-drop-up","arrow-forward","arrow-upward","aspect-ratio","assessment","assignment-ind","assignment-late","assignment-return","assignment-returned","assignment-turned-in","assignment","attachment","autorenew","backspace","backup","block","book","bookmark-border","bookmark","bug-report","build","cached","camera-enhance","cancel","card-giftcard","card-membership","card-travel","change-history","check-box-outline-blank","check-box","check-circle","check","chevron-left","chevron-right","chrome-reader-mode","class","clear","close","cloud-circle","cloud-done","cloud-download","cloud-off","cloud-queue","cloud-upload","cloud","code","compare-arrows","content-copy","content-cut","content-paste","copyright","create-new-folder","create","credit-card","dashboard","date-range","delete-forever","delete-sweep","delete","description","dns","done-all","done","donut-large","donut-small","drafts","eject","error-outline","error","euro-symbol","event-seat","event","exit-to-app","expand-less","expand-more","explore","extension","face","favorite-border","favorite","feedback","file-download","file-upload","filter-list","find-in-page","find-replace","fingerprint","first-page","flag","flight-land","flight-takeoff","flip-to-back","flip-to-front","folder-open","folder-shared","folder","font-download","forward","fullscreen-exit","fullscreen","g-translate","gavel","gesture","get-app","gif","grade","group-work","help-outline","help","highlight-off","history","home","hourglass-empty","hourglass-full","http","https","important-devices","inbox","indeterminate-check-box","info-outline","info","input","invert-colors","label-outline","label","language","last-page","launch","lightbulb-outline","line-style","line-weight","link","list","lock-open","lock-outline","lock","low-priority","loyalty","mail","markunread-mailbox","markunread","menu","more-horiz","more-vert","motorcycle","move-to-inbox","next-week","note-add","offline-pin","opacity","open-in-browser","open-in-new","open-with","pageview","pan-tool","payment","perm-camera-mic","perm-contact-calendar","perm-data-setting","perm-device-information","perm-identity","perm-media","perm-phone-msg","perm-scan-wifi","pets","picture-in-picture-alt","picture-in-picture","play-for-work","polymer","power-settings-new","pregnant-woman","print","query-builder","question-answer","radio-button-checked","radio-button-unchecked","receipt","record-voice-over","redeem","redo","refresh","remove-circle-outline","remove-circle","remove-shopping-cart","remove","reorder","reply-all","reply","report-problem","report","restore-page","restore","room","rounded-corner","rowing","save","schedule","search","select-all","send","settings-applications","settings-backup-restore","settings-bluetooth","settings-brightness","settings-cell","settings-ethernet","settings-input-antenna","settings-input-component","settings-input-composite","settings-input-hdmi","settings-input-svideo","settings-overscan","settings-phone","settings-power","settings-remote","settings-voice","settings","shop-two","shop","shopping-basket","shopping-cart","sort","speaker-notes-off","speaker-notes","spellcheck","star-border","star-half","star","stars","store","subdirectory-arrow-left","subdirectory-arrow-right","subject","supervisor-account","swap-horiz","swap-vert","swap-vertical-circle","system-update-alt","tab-unselected","tab","text-format","theaters","thumb-down","thumb-up","thumbs-up-down","timeline","toc","today","toll","touch-app","track-changes","translate","trending-down","trending-flat","trending-up","turned-in-not","turned-in","unarchive","undo","unfold-less","unfold-more","update","verified-user","view-agenda","view-array","view-carousel","view-column","view-day","view-headline","view-list","view-module","view-quilt","view-stream","view-week","visibility-off","visibility","warning","watch-later","weekend","work","youtube-searched-for","zoom-in","zoom-out"]},{name:"image",icons:["add-a-photo","add-to-photos","adjust","assistant-photo","assistant","audiotrack","blur-circular","blur-linear","blur-off","blur-on","brightness-1","brightness-2","brightness-3","brightness-4","brightness-5","brightness-6","brightness-7","broken-image","brush","burst-mode","camera-alt","camera-front","camera-rear","camera-roll","camera","center-focus-strong","center-focus-weak","collections-bookmark","collections","color-lens","colorize","compare","control-point-duplicate","control-point","crop-16-9","crop-3-2","crop-5-4","crop-7-5","crop-din","crop-free","crop-landscape","crop-original","crop-portrait","crop-rotate","crop-square","crop","dehaze","details","edit","exposure-neg-1","exposure-neg-2","exposure-plus-1","exposure-plus-2","exposure-zero","exposure","filter-1","filter-2","filter-3","filter-4","filter-5","filter-6","filter-7","filter-8","filter-9-plus","filter-9","filter-b-and-w","filter-center-focus","filter-drama","filter-frames","filter-hdr","filter-none","filter-tilt-shift","filter-vintage","filter","flare","flash-auto","flash-off","flash-on","flip","gradient","grain","grid-off","grid-on","hdr-off","hdr-on","hdr-strong","hdr-weak","healing","image-aspect-ratio","image","iso","landscape","leak-add","leak-remove","lens","linked-camera","looks-3","looks-4","looks-5","looks-6","looks-one","looks-two","looks","loupe","monochrome-photos","movie-creation","movie-filter","music-note","nature-people","nature","navigate-before","navigate-next","palette","panorama-fish-eye","panorama-horizontal","panorama-vertical","panorama-wide-angle","panorama","photo-album","photo-camera","photo-filter","photo-library","photo-size-select-actual","photo-size-select-large","photo-size-select-small","photo","picture-as-pdf","portrait","remove-red-eye","rotate-90-degrees-ccw","rotate-left","rotate-right","slideshow","straighten","style","switch-camera","switch-video","tag-faces","texture","timelapse","timer-10","timer-3","timer-off","timer","tonality","transform","tune","view-comfy","view-compact","vignette","wb-auto","wb-cloudy","wb-incandescent","wb-iridescent","wb-sunny"]},{name:"loading",icons:["bars"]},{name:"maps",icons:["add-location","beenhere","directions-bike","directions-boat","directions-bus","directions-car","directions-railway","directions-run","directions-subway","directions-transit","directions-walk","directions","edit-location","ev-station","flight","hotel","layers-clear","layers","local-activity","local-airport","local-atm","local-bar","local-cafe","local-car-wash","local-convenience-store","local-dining","local-drink","local-florist","local-gas-station","local-grocery-store","local-hospital","local-hotel","local-laundry-service","local-library","local-mall","local-movies","local-offer","local-parking","local-pharmacy","local-phone","local-pizza","local-play","local-post-office","local-printshop","local-see","local-shipping","local-taxi","map","my-location","navigation","near-me","person-pin-circle","person-pin","pin-drop","place","rate-review","restaurant-menu","restaurant","satellite","store-mall-directory","streetview","subway","terrain","traffic","train","tram","transfer-within-a-station","zoom-out-map"]},{name:"notification",icons:["adb","airline-seat-flat-angled","airline-seat-flat","airline-seat-individual-suite","airline-seat-legroom-extra","airline-seat-legroom-normal","airline-seat-legroom-reduced","airline-seat-recline-extra","airline-seat-recline-normal","bluetooth-audio","confirmation-number","disc-full","do-not-disturb-alt","do-not-disturb-off","do-not-disturb-on","do-not-disturb","drive-eta","enhanced-encryption","event-available","event-busy","event-note","folder-special","live-tv","mms","more","network-check","network-locked","no-encryption","ondemand-video","personal-video","phone-bluetooth-speaker","phone-forwarded","phone-in-talk","phone-locked","phone-missed","phone-paused","power","priority-high","rv-hookup","sd-card","sim-card-alert","sms-failed","sms","sync-disabled","sync-problem","sync","system-update","tap-and-play","time-to-leave","vibration","voice-chat","vpn-lock","wc","wifi"]},{name:"places",icons:["ac-unit","airport-shuttle","all-inclusive","beach-access","business-center","casino","child-care","child-friendly","fitness-center","free-breakfast","golf-course","hot-tub","kitchen","pool","room-service","rv-hookup","smoke-free","smoking-rooms","spa"]},{name:"social",icons:["cake","domain","group-add","group","location-city","mood-bad","mood","notifications-active","notifications-none","notifications-off","notifications-paused","notifications","pages","party-mode","people-outline","people","person-add","person-outline","person","plus-one","poll","public","school","sentiment-dissatisfied","sentiment-neutral","sentiment-satisfied","sentiment-very-dissatisfied","sentiment-very-satisfied","share","whatshot"]}]);const ea=new URL(new URL("80a22f65.js",import.meta.url).href,import.meta.url).href+"/../";["av","communication","device","editor","elmsln-custom","hardware","icons","image","maps","notification","places","social","loading"].forEach((e=>{Zn.registerIconset(e,`${ea}svgs/${e}/`)})),Zn.registerIconset("flags",`${ea}../../../flag-icon-css/flags/4x3/`),Zn.registerIconset("flags1x1",`${ea}../../../flag-icon-css/flags/1x1/`);
/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
const ta=function(e){return class extends e{static get styles(){return[super.styles||[],t`:host{display:inline-flex;align-items:center;justify-content:center;position:relative;vertical-align:middle;height:var(--simple-icon-height,24px);width:var(--simple-icon-width,24px);color:var(--simple-icon-color,currentColor)}:host([dir=rtl]) svg{direction:rtl}:host([hidden]){display:none}#svg-polyfill{background-color:var(--simple-icon-color,currentColor);height:var(--simple-icon-height,24px);width:var(--simple-icon-width,24px)}svg{height:var(--simple-icon-height,24px);width:var(--simple-icon-width,24px);max-height:var(--simple-icon-height,24px);max-width:var(--simple-icon-width,24px);filter:var(--simple-icon-color, initial);pointer-events:none}feFlood{flood-color:var(--simple-icon-color,currentColor)}`]}render(){return this.useSafariPolyfill?i` <div id="svg-polyfill" style="mask:${this.safariMask};-webkit-mask:${this.safariMask}"></div> `:o`
        <svg xmlns="http://www.w3.org/2000/svg" part="simple-icon-svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
          <filter
            color-interpolation-filters="sRGB"
            x="0"
            y="0"
            height="24px"
            width="24px"
          >
            ${this.feFlood}
            <feComposite operator="in" in="COLOR" in2="SourceAlpha" />
          </filter>
          <image
            xlink:href=""
            width="24px"
            height="24px"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
          ></image>
        </svg>
      `}get feFlood(){return this.noColorize?"":o`<feFlood result="COLOR"/>`}static get properties(){return{...super.properties,dir:{type:String,reflect:!0},src:{type:String},noColorize:{type:Boolean,attribute:"no-colorize"},icon:{type:String,attribute:"icon",reflect:!0}}}constructor(){super(),this.noColorize=!1,this.dir=this.documentDir}get documentDir(){return document.body.getAttribute("xml:dir")||document.body.getAttribute("dir")||document.documentElement.getAttribute("xml:dir")||document.documentElement.getAttribute("dir")||"ltr"}get useSafariPolyfill(){return navigator.userAgent.indexOf("Safari")>-1}get safariMask(){return this.src&&this.useSafariPolyfill?`url(${this.src}) no-repeat center / contain`:""}firstUpdated(e){if(super.firstUpdated&&super.firstUpdated(e),this.useSafariPolyfill)return;const t="f-"+Math.random().toString().slice(2,10);this.shadowRoot.querySelector("image").style.filter=`url(#${t})`,this.shadowRoot.querySelector("filter").setAttribute("id",t)}setSrcByIcon(e){return this.src=Zn.getIcon(this.icon,e),this.src}updated(e){super.updated&&super.updated(e),e.forEach(((e,t)=>{"icon"===t&&(this[t]?this.setSrcByIcon(this):this.src=null),"src"===t&&this[t]&&!this.useSafariPolyfill&&this.shadowRoot.querySelector("image").setAttribute("xlink:href",`${this[t]}`)}))}}};class ia extends(ta(e)){static get tag(){return"simple-icon-lite"}}customElements.define(ia.tag,ia);
/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
const oa=function(e){return class extends e{constructor(){super(),this.ariaLabelledby="",this.controls="",this.disabled=!1,this.form="",this.label="",this.fieldName="",this.type="",this.value="",this.icon=""}static get styles(){return[super.styles||[],t`:host([hidden]){display:none}:host([icon=""]) simple-icon-lite{display:none}:host{display:inline-flex;align-items:center;justify-content:center;position:relative;vertical-align:middle;border-radius:var(--simple-icon-button-border-radius,50%);background-color:var(--simple-icon-button-background-color,transparent);padding:0;margin:0;color:inherit}button{color:inherit;cursor:pointer;opacity:var(--simple-icon-button-opacity,1);border:var(--simple-icon-button-border,0);border-radius:var(--simple-icon-button-border-radius,50%);background-color:var(--simple-icon-button-background-color,transparent);padding:var(--simple-icon-button-padding,0);margin:0;width:100%;height:100%}button[aria-pressed]{opacity:var(--simple-icon-button-toggled-opacity,1);--simple-icon-button-border:var(
              --simple-icon-toggled-button-border
            );--simple-icon-color:var(--simple-icon-button-toggled-color);--simple-icon-button-background-color:var(
              --simple-icon-button-toggled-background-color
            )}button:focus,button:hover{opacity:var(--simple-icon-button-focus-opacity,.8);--simple-icon-button-border:var(--simple-icon-button-focus-border);--simple-icon-color:var(--simple-icon-button-focus-color);--simple-icon-button-background-color:var(
              --simple-icon-button-focus-background-color
            )}button:disabled,button[disabled]{opacity:var(--simple-icon-button-disabled-opacity,.5);--simple-icon-button-border:var(
              --simple-icon-button-disabled-border
            );--simple-icon-color:var(--simple-icon-button-disabled-color);--simple-icon-button-background-color:var(
              --simple-icon-button-disabled-background-color
            );cursor:not-allowed}simple-icon-lite{color:inherit;height:calc(var(--simple-icon-height,24px) - 2 * var(--simple-icon-button-padding,0px));width:calc(var(--simple-icon-width,24px) - 2 * var(--simple-icon-button-padding,0px))}`]}render(){return i` <button ?autofocus="${this.autofocus}" aria-labelledby="${this.ariaLabelledby}" .aria-pressed="${this.toggles||this.toggled?"true":this.toggles?"false":void 0}" controls="${this.controls}" part="button" ?disabled="${this.disabled}" form="${this.form}" label="${this.label}" aria-label="${this.label}" name="${this.fieldName}" .type="${this.type}" value="${this.value}"> <simple-icon-lite icon="${this.icon}" part="icon"></simple-icon-lite> <slot></slot> </button> `}static get properties(){return{...super.properties,autofocus:{attribute:"autofocus",type:Boolean},ariaLabelledby:{attribute:"aria-labelledby",type:String},controls:{attribute:"controls",type:String},disabled:{attribute:"disabled",type:Boolean},fieldName:{attribute:"field-name",type:String},form:{attribute:"form",type:String},icon:{type:String,reflect:!0},label:{attribute:"label",type:String},type:{attribute:"type",type:String},value:{attribute:"value",type:String,reflect:!0},toggles:{attribute:"toggles",type:Boolean,reflect:!0},toggled:{attribute:"toggled",type:Boolean,reflect:!0}}}}};class na extends(oa(e)){static get tag(){return"simple-icon-button-lite"}constructor(){super(),this.type="button"}}function aa(e,t,i,o=20,n=0){let a=[];if(n>=o)return a;const l=e=>{const a=e.assignedNodes().filter((e=>1===e.nodeType));return a.length>0?aa(a[0].parentElement,t,i,o,n+1):[]},r=Array.from(e.children||[]);for(const e of r)t(e)||(i(e)&&a.push(e),null!=e.shadowRoot?a.push(...aa(e.shadowRoot,t,i,o,n+1)):"SLOT"===e.tagName?a.push(...l(e)):a.push(...aa(e,t,i,o,n+1)));return a}function la(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&"false"!==e.getAttribute("aria-hidden")||"none"===e.style.display||"0"===e.style.opacity||"hidden"===e.style.visibility||"collapse"===e.style.visibility}function ra(e){return"-1"!==e.getAttribute("tabindex")&&!la(e)&&!function(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&"false"!==e.getAttribute("aria-disabled")}(e)&&(e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement)}customElements.define(na.tag,na);const sa=new Map;const ca=document.createElement("template");ca.innerHTML='\n\t<div id="start"></div>\n\t<div id="backup"></div>\n\t<slot></slot>\n\t<div id="end"></div>\n';class ha extends HTMLElement{constructor(){super(),this.debounceId=Math.random().toString(),this._focused=!1;const e=this.attachShadow({mode:"open"});e.appendChild(ca.content.cloneNode(!0)),this.$backup=e.querySelector("#backup"),this.$start=e.querySelector("#start"),this.$end=e.querySelector("#end"),this.focusLastElement=this.focusLastElement.bind(this),this.focusFirstElement=this.focusFirstElement.bind(this),this.onFocusIn=this.onFocusIn.bind(this),this.onFocusOut=this.onFocusOut.bind(this)}static get observedAttributes(){return["inactive"]}get inactive(){return this.hasAttribute("inactive")}set inactive(e){e?this.setAttribute("inactive",""):this.removeAttribute("inactive")}get focused(){return this._focused}connectedCallback(){this.$start.addEventListener("focus",this.focusLastElement),this.$end.addEventListener("focus",this.focusFirstElement),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.render()}disconnectedCallback(){this.$start.removeEventListener("focus",this.focusLastElement),this.$end.removeEventListener("focus",this.focusFirstElement),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut)}attributeChangedCallback(){this.render()}focusFirstElement(){this.trapFocus()}focusLastElement(){this.trapFocus(!0)}getFocusableElements(){return aa(this,la,ra)}trapFocus(e){if(this.inactive)return;let t=this.getFocusableElements();t.length>0?(e?t[t.length-1].focus():t[0].focus(),this.$backup.setAttribute("tabindex","-1")):(this.$backup.setAttribute("tabindex","0"),this.$backup.focus())}onFocusIn(){this.updateFocused(!0)}onFocusOut(){this.updateFocused(!1)}updateFocused(e){!function(e,t,i){const o=sa.get(i);null!=o&&window.clearTimeout(o),sa.set(i,window.setTimeout((()=>{e(),sa.delete(i)}),t))}((()=>{this.focused!==e&&(this._focused=e,this.render())}),0,this.debounceId)}render(){this.$start.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.$end.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.focused?this.setAttribute("focused",""):this.removeAttribute("focused")}}function da(e){return Number(e.getAttribute("data-dialog-count"))||0}function pa(e,t){e.setAttribute("data-dialog-count",t.toString())}function ma(e=document.activeElement){return null!=e&&null!=e.shadowRoot&&null!=e.shadowRoot.activeElement?ma(e.shadowRoot.activeElement):e}window.customElements.define("focus-trap",ha);const ua=document.createElement("template");ua.innerHTML='\n  <style>*{box-sizing:border-box}:host{padding:var(--dialog-container-padding,5vw 24px);z-index:var(--dialog-z-index,12345678);outline:none}#backdrop,:host{position:fixed;top:0;left:0;bottom:0;right:0}:host,:host([center]) #dialog{overflow-x:var(--dialog-overflow-x,hidden);overflow-y:var(--dialog-overflow-y,auto);overscroll-behavior:contain;-webkit-overflow-scrolling:touch}:host([center]){display:flex;align-items:center;justify-content:center;overflow:hidden}:host([center]) #dialog{max-height:var(--dialog-max-height,100%)}:host(:not(:defined)),:host(:not([open])){display:none}#backdrop{background:var(--dialog-backdrop-bg,rgba(0,0,0,.6));animation:fadeIn var(--dialog-animation-duration,.1s) var(--dialog-animation-easing,ease-out);z-index:-1}#dialog{animation:scaleIn var(--dialog-animation-duration,.1s) var(--dialog-animation-easing,ease-out);border-radius:var(--dialog-border-radius,12px);box-shadow:var(--dialog-box-shadow,0 2px 10px -5px rgba(0,0,0,.6));max-width:var(--dialog-max-width,700px);width:var(--dialog-width,100%);padding:var(--dialog-padding,24px);max-height:var(--dialog-max-height,unset);height:var(--dialog-height,auto);color:var(--dialog-color,currentColor);background:var(--dialog-bg,#fff);z-index:1;position:relative;display:flex;flex-direction:column;margin:0 auto;border:none}::slotted(article),article{flex-grow:1;overflow-y:auto;-webkit-overflow-scrolling:touch}::slotted(footer),::slotted(header),footer,header{flex-shrink:0}@keyframes scaleIn{0%{transform:scale(.9) translateY(30px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}</style>\n  <div id="backdrop" part="backdrop"></div>\n  <focus-trap id="dialog" part="dialog">\n    <slot></slot>\n  </focus-trap>\n';class fa extends HTMLElement{constructor(){super(),this.$scrollContainer=document.documentElement,this.$previousActiveElement=null;const e=this.attachShadow({mode:"open"});e.appendChild(ua.content.cloneNode(!0)),this.$dialog=e.querySelector("#dialog"),this.$backdrop=e.querySelector("#backdrop"),this.onBackdropClick=this.onBackdropClick.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.setAttribute("aria-modal","true"),this.$dialog.setAttribute("role","alertdialog")}static get observedAttributes(){return["open","center"]}get open(){return this.hasAttribute("open")}set open(e){e?this.setAttribute("open",""):this.removeAttribute("open")}get center(){return this.hasAttribute("center")}set center(e){e?this.setAttribute("center",""):this.removeAttribute("center")}connectedCallback(){this.$backdrop.addEventListener("click",this.onBackdropClick)}disconnectedCallback(){this.$backdrop.removeEventListener("click",this.onBackdropClick),this.open&&this.didClose()}show(){this.open=!0}close(e){this.result=e,this.open=!1}onBackdropClick(){this.assertClosing()&&this.close()}onKeyDown(e){if("Escape"===e.code)this.assertClosing()&&(this.close(),e.stopImmediatePropagation())}assertClosing(){return this.dispatchEvent(new CustomEvent("closing",{cancelable:!0}))}didOpen(){this.$previousActiveElement=ma(document.activeElement),requestAnimationFrame((()=>{this.$dialog.focusFirstElement()})),this.tabIndex=0,this.$scrollContainer.style.overflow="hidden",this.addEventListener("keydown",this.onKeyDown,{capture:!0,passive:!0}),pa(this.$scrollContainer,da(this.$scrollContainer)+1),this.dispatchEvent(new CustomEvent("open"))}didClose(){this.removeEventListener("keydown",this.onKeyDown,{capture:!0}),pa(this.$scrollContainer,Math.max(0,da(this.$scrollContainer)-1)),da(this.$scrollContainer)<=0&&(this.$scrollContainer.style.overflow=""),this.tabIndex=-1,null!=this.$previousActiveElement&&(this.$previousActiveElement.focus(),this.$previousActiveElement=null),this.dispatchEvent(new CustomEvent("close",{detail:this.result}))}attributeChangedCallback(e,t,i){if("open"===e)this.open?this.didOpen():this.didClose()}}customElements.define("web-dialog",fa);
/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
const ga=["--simple-modal-resize","--simple-modal-width","--simple-modal-z-index","--simple-modal-height","--simple-modal-min-width","--simple-modal-min-height","--simple-modal-max-width","--simple-modal-max-height","--simple-modal-titlebar-color","--simple-modal-titlebar-height","--simple-modal-titlebar-line-height","--simple-modal-titlebar-background","--simple-modal-titlebar-padding","--simple-modal-header-color","--simple-modal-header-background","--simple-modal-header-padding","--simple-modal-content-container-color","--simple-modal-content-container-background","--simple-modal-content-padding","--simple-modal-buttons-color","--simple-modal-buttons-background","--simple-modal-buttons-padding","--simple-modal-button-color","--simple-modal-button-background"];class va extends e{static get styles(){return[t`:host{display:block}:host([hidden]){display:none}:host web-dialog ::slotted(*){font-size:14px}#titlebar{margin-top:0;padding:var(--simple-modal-titlebar-padding,0 16px);display:flex;align-items:center;justify-content:space-between;color:var(--simple-modal-titlebar-color,#444);background-color:var(--simple-modal-titlebar-background,#ddd);border-radius:0;height:var(--simple-modal-titlebar-height,unset);line-height:var(--simple-modal-titlebar-line-height,unset)}#headerbar{margin:0;padding:var(--simple-modal-header-padding,0 16px);color:var(--simple-modal-header-color,#222);background-color:var(--simple-modal-header-background,#ccc)}h2{margin-right:8px;padding:0;margin:0;flex:auto;font-size:18px;line-height:18px}#close{top:0;border:var(--simple-modal-titlebar-button-border,none);padding:var(--simple-modal-titlebar-button-padding,10px 0);min-width:unset;text-transform:none;color:var(--simple-modal-titlebar-color,#444);background-color:transparent}#close:focus{opacity:.7;outline:var(--simple-modal-titlebar-button-outline,2px dotted grey);outline-offset:var(--simple-modal-titlebar-button-outline-offset,2px)}#close simple-icon-lite{--simple-icon-height:var(--simple-modal-titlebar-icon-height, 16px);--simple-icon-width:var(--simple-modal-titlebar-icon-width, 16px);color:var(--simple-modal-titlebar-color,#444)}#simple-modal-content{flex-grow:1;padding:var(--simple-modal-content-padding,8px 16px);margin:0;color:var(--simple-modal-content-container-color,#222);background-color:var(--simple-modal-content-container-background,#fff)}.buttons{padding:0;padding:var(--simple-modal-buttons-padding,0);margin:0;color:var(--simple-modal-buttons-color,#00f);background-color:var(--simple-modal-buttons-background,#fff)}.buttons ::slotted(*){padding:0;margin:0;color:var(--simple-modal-button-color,--simple-modal-buttons-color);background-color:var(--simple-modal-button-background,--simple-modal-buttons-background)}web-dialog{--dialog-border-radius:var(--simple-modal-border-radius, 2px);z-index:var(--simple-modal-z-index,1)!important;padding:0}web-dialog::part(dialog){border:1px solid var(--simple-modal-border-color,#222);min-height:var(--simple-modal-min-height,unset);min-width:var(--simple-modal-min-width,unset);z-index:var(--simple-modal-z-index,1000);resize:var(--simple-modal-resize,unset);padding:0;--dialog-height:var(--simple-modal-height, auto);--dialog-width:var(--simple-modal-width, 75vw);--dialog-max-width:var(--simple-modal-max-width, 100vw);--dialog-max-height:var(--simple-modal-max-height, 100vh)}web-dialog.style-scope.simple-modal{display:none!important}web-dialog[open].style-scope.simple-modal{display:flex!important;position:fixed!important;margin:auto}:host([resize=horizontal]) web-dialog[open].style-scope.simple-modal,:host([resize=none]) web-dialog[open].style-scope.simple-modal{top:calc(50% - var(--simple-modal-height,auto)/ 2)}:host([resize=none]) web-dialog[open].style-scope.simple-modal,:host([resize=vertical]) web-dialog[open].style-scope.simple-modal{left:calc(50% - var(--simple-modal-width,75vw)/ 2)}`]}render(){return i`<web-dialog id="dialog" center role="dialog" part="dialog" aria-describedby="simple-modal-content" aria-label="${this._getAriaLabel(this.title)}" aria-labelledby="${this._getAriaLabelledby(this.title)}" aria-modal="true" ?open="${this.opened}" @open="${this.open}" @close="${this.close}"> <div id="titlebar" part="titlebar"> <h2 id="simple-modal-title" ?hidden="${!this.title}" part="title"> ${this.title} </h2> <div></div> <simple-icon-button-lite id="close" dark icon="${this.closeIcon}" @click="${this.close}" label="${this.closeLabel}" part="close"> </simple-icon-button-lite> </div> <div id="headerbar" part="headerbar"><slot name="header"></slot></div> <div id="simple-modal-content" part="content"> <slot name="content"></slot> </div> <slot name="custom" part="custom"></slot> <div class="buttons" part="buttons"> <slot name="buttons"></slot> </div> </web-dialog>`}static get properties(){return{...super.properties,title:{type:String},opened:{type:Boolean,reflect:!0},closeLabel:{attribute:"close-label",type:String},closeIcon:{type:String,attribute:"close-icon"},invokedBy:{type:Object},modal:{type:Boolean},mode:{type:String,reflect:!0}}}static get tag(){return"simple-modal"}constructor(){super(),this.title="",this.opened=!1,this.closeLabel="Close",this.closeIcon="close",this.modal=!1}updated(e){e.forEach(((e,t)=>{"opened"==t&&this._openedChanged(this[t])}))}connectedCallback(){super.connectedCallback(),setTimeout((()=>{window.addEventListener("simple-modal-hide",this.close.bind(this)),window.addEventListener("simple-modal-show",this.showEvent.bind(this))}),0)}disconnectedCallback(){window.removeEventListener("simple-modal-hide",this.close.bind(this)),window.removeEventListener("simple-modal-show",this.showEvent.bind(this)),super.disconnectedCallback()}showEvent(e){window.dispatchEvent(new CustomEvent("simple-toast-hide",{bubbles:!0,composed:!0,cancelable:!1,detail:!1})),this.opened?(this.innerHTML="",setTimeout((()=>{this.show(e.detail.title,e.detail.mode,e.detail.elements,e.detail.invokedBy,e.detail.id,e.detail.modalClass,e.detail.styles,e.detail.clone,e.detail.modal)}),0)):this.show(e.detail.title,e.detail.mode,e.detail.elements,e.detail.invokedBy,e.detail.id,e.detail.modalClass,e.detail.styles,e.detail.clone,e.detail.modal)}show(e,t,i,o,n=null,a=null,l=null,r=!1,s=!1){let c;this.invokedBy=o,this.modal=s,this.title=e,this.mode=t;let h=["header","content","buttons","custom"];for(var d in n?this.setAttribute("id",n):this.removeAttribute("id"),this.setAttribute("style",""),l&&ga.forEach((e=>{this.style.setProperty(e,l[e]||"inherit")})),a?this.setAttribute("class",a):this.removeAttribute("class"),h)i[h[d]]&&(c=r?i[h[d]].cloneNode(!0):i[h[d]],c.setAttribute("slot",h[d]),this.appendChild(c));this.opened=!0}close(){this.opened=!1,window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&(this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.position="relative")}open(){this.opened=!0,window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&(this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.position="fixed",this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.top=0,this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.bottom=0,this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.left=0,this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.right=0)}_openedChanged(e){if(void 0===e||e){if(e){this.querySelectorAll("[dialog-dismiss]").forEach((e=>{e.addEventListener("click",(e=>{const t=new CustomEvent("simple-modal-dismissed",{bubbles:!0,composed:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(t),this.close()}))})),this.querySelectorAll("[dialog-confirm]").forEach((e=>{e.addEventListener("click",(e=>{const t=new CustomEvent("simple-modal-confirmed",{composed:!0,bubbles:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(t),this.close()}))}));const e=new CustomEvent("simple-modal-opened",{bubbles:!0,composed:!0,cancelable:!0,detail:{opened:!0,invokedBy:this.invokedBy}});this.dispatchEvent(e)}}else{for(this.title="";null!==this.firstChild;)this.removeChild(this.firstChild);this.invokedBy&&setTimeout((()=>{this.invokedBy.focus()}),500);const e=new CustomEvent("simple-modal-closed",{bubbles:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(e)}}_getAriaLabelledby(e){return e?"simple-modal-title":null}_getAriaLabel(e){return e?null:"Modal Dialog"}}window.customElements.define(va.tag,va),window.SimpleModal=window.SimpleModal||{},window.SimpleModal.requestAvailability=()=>(window.SimpleModal.instance||(window.SimpleModal.instance=document.createElement("simple-modal"),document.body.appendChild(window.SimpleModal.instance)),window.SimpleModal.instance),window.SimpleModal.requestAvailability();
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ba=Qo({_template:ft`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){ba.instance||(ba.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),this.timeout)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});ba.instance=null,ba.requestAvailability=function(){ba.instance||(ba.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(ba.instance):document.addEventListener("load",(function(){document.body.appendChild(ba.instance)}))};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class ya{constructor(e){ya[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return ya.types[e]&&ya.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=ya.types[t]=ya.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=ya.types[this.type];return e?Object.keys(e).map((function(e){return za[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}ya[" "]=function(){},ya.types={};var za=ya.types;Qo({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var o=new ya({type:e,key:t});return void 0!==i&&i!==o.value?o.value=i:this.value!==o.value&&(this.value=o.value),o},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new ya({type:this.type,key:e}).value}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
let xa=null;const _a={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){xa=new ya({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return xa&&xa.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return void 0===e&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
if(Qo({_template:ft`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[_a],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){ba.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Ro(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Ro(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else if("number"===this.inputElement.type)e=/[0-9.,e-]/;return e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,i=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&i)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(i)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=_a.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}}),!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const wa=ft`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;wa.setAttribute("style","display: none;"),document.head.appendChild(wa.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ka={attached:function(){this.fire("addon-attached")},update:function(e){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Qo({_template:ft`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[ka],properties:{_charCounterStr:{type:String,value:"0"}},update:function(e){if(e.inputElement){e.value=e.value||"";var t=e.value.toString().length.toString();e.inputElement.hasAttribute("maxlength")&&(t+="/"+e.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ma=ft`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;Ma.setAttribute("style","display: none;"),document.head.appendChild(Ma.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ha=ft`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;Ha.setAttribute("style","display: none;"),document.head.appendChild(Ha.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ca=ft`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;Ca.setAttribute("style","display: none;"),document.head.appendChild(Ca.content),Qo({_template:ft`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return ne(this.attrForValue)},get _inputElement(){return Ro(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(e){this._addons||(this._addons=[]);var t=e.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(e){this._handleValueAndAutoValidate(e.target)},_onValueChanged:function(e){var t=e.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value||""===t.value)||this._handleValueAndAutoValidate(e.target)},_handleValue:function(e){var t=this._inputElementValue;t||0===t||"number"===e.type&&!e.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:e,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(e){var t;this.autoValidate&&e&&(t=e.validate?e.validate(this._inputElementValue):e.checkValidity(),this.invalid=!t);this._handleValue(e)},_onIronInputValidate:function(e){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(e){for(var t,i=0;t=this._addons[i];i++)t.update(e)},_computeInputContentClass:function(e,t,i,o,n){var a="input-content";if(e)n&&(a+=" label-is-hidden"),o&&(a+=" is-invalid");else{var l=this.querySelector("label");t||n?(a+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",o?a+=" is-invalid":i&&(a+=" label-is-highlighted")):(l&&(this.$.labelAndInputContainer.style.position="relative"),o&&(a+=" is-invalid"))}return i&&(a+=" focused"),a},_computeUnderlineClass:function(e,t){var i="underline";return t?i+=" is-invalid":e&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(e,t){var i="add-on-content";return t?i+=" is-invalid":e&&(i+=" is-highlighted"),i}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({_template:ft`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[ka],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(e){this._setInvalid(e.invalid)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var Va={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},La={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Sa={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},Ea=/[a-z0-9*]/,Ta=/U\+/,Aa=/^arrow/,Pa=/^space(bar)?/,Oa=/^escape$/;function Ia(e,t){var i="";if(e){var o=e.toLowerCase();" "===o||Pa.test(o)?i="space":Oa.test(o)?i="esc":1==o.length?t&&!Ea.test(o)||(i=o):i=Aa.test(o)?o.replace("arrow",""):"multiply"==o?"*":o}return i}function Ra(e,t){return e.key?Ia(e.key,t):e.detail&&e.detail.key?Ia(e.detail.key,t):(i=e.keyIdentifier,o="",i&&(i in Va?o=Va[i]:Ta.test(i)?(i=parseInt(i.replace("U+","0x"),16),o=String.fromCharCode(i).toLowerCase()):o=i.toLowerCase()),o||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):La[e]),t}(e.keyCode)||"");var i,o}function $a(e,t){return Ra(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Na(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var i=t.split(":"),o=i[0],n=i[1];return o in Sa?(e[Sa[o]]=!0,e.hasModifiers=!0):(e.key=o,e.event=n||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}const Fa={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=Na(t),o=0;o<i.length;++o)if($a(i[o],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var i=e[0].hasModifiers;return i===t[0].hasModifiers?0:i?-1:1}))},_addKeyBinding:function(e,t){Na(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],i=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,i,o;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],i=e[1],o=e[2],t.removeEventListener(i,o)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var o=e[i][0],n=e[i][1];if($a(o,t)&&(this._triggerKeyHandler(o,n,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var o=Object.create(e);o.keyboardEvent=i;var n=new CustomEvent(e.event,{detail:o,cancelable:!0});this[t].call(this,n),n.defaultPrevented&&i.preventDefault()}},Da={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}},Ba={NextLabelID:1,NextAddonID:1,NextInputID:1},qa={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!gt&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(e,t){return e=e?e+" "+t:t},_onAddonAttached:function(e){var t=Ro(e).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var i="paper-input-add-on-"+Ba.NextAddonID++;t.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(e){Da._focusBlurHandler.call(this,e),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(e){try{var t=this.inputElement.selectionStart;this.value=e,this.inputElement.selectionStart=t,this.inputElement.selectionEnd=t}catch(t){this.value=e}},_computeAlwaysFloatLabel:function(e,t){return t||e},_updateAriaLabelledBy:function(){var e,t=Ro(this.root).querySelector("label");t?(t.id?e=t.id:(e="paper-input-label-"+Ba.NextLabelID++,t.id=e),this._ariaLabelledBy=e):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+Ba.NextInputID++)},_onChange:function(e){this.shadowRoot&&this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var e=document.activeElement;e instanceof HTMLElement&&e!==document.body&&e!==document.documentElement||this._focusableElement.focus()}}},ja=[Da,Fa,qa];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({is:"paper-input",_template:ft`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[ja,In],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class Ua{constructor(e){this.selection=[],this.selectCallback=e}get(){return this.multi?this.selection.slice():this.selection[0]}clear(e){this.selection.slice().forEach((function(t){(!e||e.indexOf(t)<0)&&this.setItemSelected(t,!1)}),this)}isSelected(e){return this.selection.indexOf(e)>=0}setItemSelected(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var i=this.selection.indexOf(e);i>=0&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(e,t)}}select(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))}toggle(e){this.setItemSelected(e,!this.isSelected(e))}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ka={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new Ua(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&Ro(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=Ro(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return null==e?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(!this.attrForSelected)return Number(e);for(var t,i=0;t=this.items[i];i++)if(this._valueForItem(t)==e)return i},_indexToValue:function(e){if(!this.attrForSelected)return e;var t=this.items[e];return t?this._valueForItem(t):void 0},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return-1===t?null:t}var i=e[ne(this.attrForSelected)];return null!=i?i:e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return Ro(e).observeNodes((function(e){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})}))},_activateHandler:function(e){for(var t=e.target,i=this.items;t&&t!=this;){var o=i.indexOf(t);if(o>=0){var n=this._indexToValue(o);return void this._itemActivate(n,t)}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}},Ya={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(e){this.multi?this._toggleSelected(e):this.selected=e},multiChanged:function(e){this._selection.multi=e,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map((function(e){return this._indexToValue(this.indexOf(e))}),this).filter((function(e){return null!=e}),this)):Ka._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(e){e=e||[];var t=(this._valuesToItems(e)||[]).filter((function(e){return null!=e}));this._selection.clear(t);for(var i=0;i<t.length;i++)this._selection.setItemSelected(t[i],!0);this.fallbackSelection&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))},_selectionChange:function(){var e=this._selection.get();this.multi?(this._setSelectedItems(e),this._setSelectedItem(e.length?e[0]:null)):null!=e?(this._setSelectedItems([e]),this._setSelectedItem(e)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(e){var t=this.selectedValues.indexOf(e);t<0?this.push("selectedValues",e):this.splice("selectedValues",t,1)},_valuesToItems:function(e){return null==e?null:e.map((function(e){return this._valueToItem(e)}),this)}},Wa={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(e){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var t=this._valueToItem(e);t&&t.hasAttribute("disabled")||(this._setFocusedItem(t),Ya.select.apply(this,arguments))},_resetTabindices:function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach((function(t){t.setAttribute("tabindex",t===e?"0":"-1"),t.setAttribute("aria-selected",this._selection.isSelected(t))}),this)},_updateMultiselectable:function(e){e?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(e){if(-1===this._MODIFIER_KEYS.indexOf(e.key)){this.cancelDebouncer("_clearSearchText");for(var t,i=this._searchText||"",o=(i+=(e.key&&1==e.key.length?e.key:String.fromCharCode(e.keyCode)).toLocaleLowerCase()).length,n=0;t=this.items[n];n++)if(!t.hasAttribute("disabled")){var a=this.attrForItemTitle||"textContent",l=(t[a]||t.getAttribute(a)||"").trim();if(!(l.length<o)&&l.slice(0,o).toLocaleLowerCase()==i){this._setFocusedItem(t);break}}this._searchText=i,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),i=1;i<e+1;i++){var o=this.items[(t-i+e)%e];if(!o.hasAttribute("disabled")){var n=Ro(o).getOwnerRoot()||document;if(this._setFocusedItem(o),Ro(n).activeElement==o)return}}},_focusNext:function(){for(var e=this.items.length,t=Number(this.indexOf(this.focusedItem)),i=1;i<e+1;i++){var o=this.items[(t+i)%e];if(!o.hasAttribute("disabled")){var n=Ro(o).getOwnerRoot()||document;if(this._setFocusedItem(o),Ro(n).activeElement==o)return}}},_applySelection:function(e,t){t?e.setAttribute("aria-selected","true"):e.setAttribute("aria-selected","false"),Ka._applySelection.apply(this,arguments)},_focusedItemChanged:function(e,t){t&&t.setAttribute("tabindex","-1"),!e||e.hasAttribute("disabled")||this.disabled||(e.setAttribute("tabindex","0"),e.focus())},_onIronItemsChanged:function(e){e.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");Wa._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),Wa._shiftTabPressed=!1}),1)},_onFocus:function(e){if(!Wa._shiftTabPressed){var t=Ro(e).rootTarget;(t===this||void 0===t.tabIndex||this.isLightDescendant(t))&&(this._defaultFocusAsync=this.async((function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),e?this._setFocusedItem(e):this.items[0]&&this._focusNext()})))}},_onUpKey:function(e){this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onEscKey:function(e){var t=this.focusedItem;t&&t.blur()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down esc")||this._focusWithKeyboardEvent(e),e.stopPropagation()},_activateHandler:function(e){Ka._activateHandler.call(this,e),e.stopPropagation()},_disabledChanged:function(e){e?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)},_shiftTabPressed:!1};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({_template:ft`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[[[Ka,Ya],Fa,Wa]],hostAttributes:{role:"listbox"}});var Ja=document.createElement("div");Ja.setAttribute("style","display: none;");const Ga=t`.red{background-color:#f44336}.red-text{color:#f44336}.red.lighten-5{background-color:#ffebee}.red-text.text-lighten-5{color:#ffebee}.red.lighten-4{background-color:#ffcdd2}.red-text.text-lighten-4{color:#ffcdd2}.red.lighten-3{background-color:#ef9a9a}.red-text.text-lighten-3{color:#ef9a9a}.red.lighten-2{background-color:#e57373}.red-text.text-lighten-2{color:#e57373}.red.lighten-1{background-color:#ef5350}.red-text.text-lighten-1{color:#ef5350}.red.darken-1{background-color:#e53935}.red-text.text-darken-1{color:#e53935}.red.darken-2{background-color:#d32f2f}.red-text.text-darken-2{color:#d32f2f}.red.darken-3{background-color:#c62828}.red-text.text-darken-3{color:#c62828}.red.darken-4{background-color:#b71c1c}.red-text.text-darken-4{color:#b71c1c}.red.accent-1{background-color:#ff8a80}.red-text.text-accent-1{color:#ff8a80}.red.accent-2{background-color:#ff5252}.red-text.text-accent-2{color:#ff5252}.red.accent-3{background-color:#ff1744}.red-text.text-accent-3{color:#ff1744}.red.accent-4{background-color:#d50000}.red-text.text-accent-4{color:#d50000}.pink{background-color:#e91e63}.pink-text{color:#e91e63}.pink.lighten-5{background-color:#fce4ec}.pink-text.text-lighten-5{color:#fce4ec}.pink.lighten-4{background-color:#f8bbd0}.pink-text.text-lighten-4{color:#f8bbd0}.pink.lighten-3{background-color:#f48fb1}.pink-text.text-lighten-3{color:#f48fb1}.pink.lighten-2{background-color:#f06292}.pink-text.text-lighten-2{color:#f06292}.pink.lighten-1{background-color:#ec407a}.pink-text.text-lighten-1{color:#ec407a}.pink.darken-1{background-color:#d81b60}.pink-text.text-darken-1{color:#d81b60}.pink.darken-2{background-color:#c2185b}.pink-text.text-darken-2{color:#c2185b}.pink.darken-3{background-color:#ad1457}.pink-text.text-darken-3{color:#ad1457}.pink.darken-4{background-color:#880e4f}.pink-text.text-darken-4{color:#880e4f}.pink.accent-1{background-color:#ff80ab}.pink-text.text-accent-1{color:#ff80ab}.pink.accent-2{background-color:#ff4081}.pink-text.text-accent-2{color:#ff4081}.pink.accent-3{background-color:#f50057}.pink-text.text-accent-3{color:#f50057}.pink.accent-4{background-color:#c51162}.pink-text.text-accent-4{color:#c51162}.purple{background-color:#9c27b0}.purple-text{color:#9c27b0}.purple.lighten-5{background-color:#f3e5f5}.purple-text.text-lighten-5{color:#f3e5f5}.purple.lighten-4{background-color:#e1bee7}.purple-text.text-lighten-4{color:#e1bee7}.purple.lighten-3{background-color:#ce93d8}.purple-text.text-lighten-3{color:#ce93d8}.purple.lighten-2{background-color:#ba68c8}.purple-text.text-lighten-2{color:#ba68c8}.purple.lighten-1{background-color:#ab47bc}.purple-text.text-lighten-1{color:#ab47bc}.purple.darken-1{background-color:#8e24aa}.purple-text.text-darken-1{color:#8e24aa}.purple.darken-2{background-color:#7b1fa2}.purple-text.text-darken-2{color:#7b1fa2}.purple.darken-3{background-color:#6a1b9a}.purple-text.text-darken-3{color:#6a1b9a}.purple.darken-4{background-color:#4a148c}.purple-text.text-darken-4{color:#4a148c}.purple.accent-1{background-color:#ea80fc}.purple-text.text-accent-1{color:#ea80fc}.purple.accent-2{background-color:#e040fb}.purple-text.text-accent-2{color:#e040fb}.purple.accent-3{background-color:#d500f9}.purple-text.text-accent-3{color:#d500f9}.purple.accent-4{background-color:#a0f}.purple-text.text-accent-4{color:#a0f}.deep-purple{background-color:#673ab7}.deep-purple-text{color:#673ab7}.deep-purple.lighten-5{background-color:#ede7f6}.deep-purple-text.text-lighten-5{color:#ede7f6}.deep-purple.lighten-4{background-color:#d1c4e9}.deep-purple-text.text-lighten-4{color:#d1c4e9}.deep-purple.lighten-3{background-color:#b39ddb}.deep-purple-text.text-lighten-3{color:#b39ddb}.deep-purple.lighten-2{background-color:#9575cd}.deep-purple-text.text-lighten-2{color:#9575cd}.deep-purple.lighten-1{background-color:#7e57c2}.deep-purple-text.text-lighten-1{color:#7e57c2}.deep-purple.darken-1{background-color:#5e35b1}.deep-purple-text.text-darken-1{color:#5e35b1}.deep-purple.darken-2{background-color:#512da8}.deep-purple-text.text-darken-2{color:#512da8}.deep-purple.darken-3{background-color:#4527a0}.deep-purple-text.text-darken-3{color:#4527a0}.deep-purple.darken-4{background-color:#311b92}.deep-purple-text.text-darken-4{color:#311b92}.deep-purple.accent-1{background-color:#b388ff}.deep-purple-text.text-accent-1{color:#b388ff}.deep-purple.accent-2{background-color:#7c4dff}.deep-purple-text.text-accent-2{color:#7c4dff}.deep-purple.accent-3{background-color:#651fff}.deep-purple-text.text-accent-3{color:#651fff}.deep-purple.accent-4{background-color:#6200ea}.deep-purple-text.text-accent-4{color:#6200ea}.indigo{background-color:#3f51b5}.indigo-text{color:#3f51b5}.indigo.lighten-5{background-color:#e8eaf6}.indigo-text.text-lighten-5{color:#e8eaf6}.indigo.lighten-4{background-color:#c5cae9}.indigo-text.text-lighten-4{color:#c5cae9}.indigo.lighten-3{background-color:#9fa8da}.indigo-text.text-lighten-3{color:#9fa8da}.indigo.lighten-2{background-color:#7986cb}.indigo-text.text-lighten-2{color:#7986cb}.indigo.lighten-1{background-color:#5c6bc0}.indigo-text.text-lighten-1{color:#5c6bc0}.indigo.darken-1{background-color:#3949ab}.indigo-text.text-darken-1{color:#3949ab}.indigo.darken-2{background-color:#303f9f}.indigo-text.text-darken-2{color:#303f9f}.indigo.darken-3{background-color:#283593}.indigo-text.text-darken-3{color:#283593}.indigo.darken-4{background-color:#1a237e}.indigo-text.text-darken-4{color:#1a237e}.indigo.accent-1{background-color:#8c9eff}.indigo-text.text-accent-1{color:#8c9eff}.indigo.accent-2{background-color:#536dfe}.indigo-text.text-accent-2{color:#536dfe}.indigo.accent-3{background-color:#3d5afe}.indigo-text.text-accent-3{color:#3d5afe}.indigo.accent-4{background-color:#304ffe}.indigo-text.text-accent-4{color:#304ffe}.blue{background-color:#2196f3}.blue-text{color:#2196f3}.blue.lighten-5{background-color:#e3f2fd}.blue-text.text-lighten-5{color:#e3f2fd}.blue.lighten-4{background-color:#bbdefb}.blue-text.text-lighten-4{color:#bbdefb}.blue.lighten-3{background-color:#90caf9}.blue-text.text-lighten-3{color:#90caf9}.blue.lighten-2{background-color:#64b5f6}.blue-text.text-lighten-2{color:#64b5f6}.blue.lighten-1{background-color:#42a5f5}.blue-text.text-lighten-1{color:#42a5f5}.blue.darken-1{background-color:#1e88e5}.blue-text.text-darken-1{color:#1e88e5}.blue.darken-2{background-color:#1976d2}.blue-text.text-darken-2{color:#1976d2}.blue.darken-3{background-color:#1565c0}.blue-text.text-darken-3{color:#1565c0}.blue.darken-4{background-color:#0d47a1}.blue-text.text-darken-4{color:#0d47a1}.blue.accent-1{background-color:#82b1ff}.blue-text.text-accent-1{color:#82b1ff}.blue.accent-2{background-color:#448aff}.blue-text.text-accent-2{color:#448aff}.blue.accent-3{background-color:#2979ff}.blue-text.text-accent-3{color:#2979ff}.blue.accent-4{background-color:#2962ff}.blue-text.text-accent-4{color:#2962ff}.light-blue{background-color:#03a9f4}.light-blue-text{color:#03a9f4}.light-blue.lighten-5{background-color:#e1f5fe}.light-blue-text.text-lighten-5{color:#e1f5fe}.light-blue.lighten-4{background-color:#b3e5fc}.light-blue-text.text-lighten-4{color:#b3e5fc}.light-blue.lighten-3{background-color:#81d4fa}.light-blue-text.text-lighten-3{color:#81d4fa}.light-blue.lighten-2{background-color:#4fc3f7}.light-blue-text.text-lighten-2{color:#4fc3f7}.light-blue.lighten-1{background-color:#29b6f6}.light-blue-text.text-lighten-1{color:#29b6f6}.light-blue.darken-1{background-color:#039be5}.light-blue-text.text-darken-1{color:#039be5}.light-blue.darken-2{background-color:#0288d1}.light-blue-text.text-darken-2{color:#0288d1}.light-blue.darken-3{background-color:#0277bd}.light-blue-text.text-darken-3{color:#0277bd}.light-blue.darken-4{background-color:#01579b}.light-blue-text.text-darken-4{color:#01579b}.light-blue.accent-1{background-color:#80d8ff}.light-blue-text.text-accent-1{color:#80d8ff}.light-blue.accent-2{background-color:#40c4ff}.light-blue-text.text-accent-2{color:#40c4ff}.light-blue.accent-3{background-color:#00b0ff}.light-blue-text.text-accent-3{color:#00b0ff}.light-blue.accent-4{background-color:#0091ea}.light-blue-text.text-accent-4{color:#0091ea}.cyan{background-color:#00bcd4}.cyan-text{color:#00bcd4}.cyan.lighten-5{background-color:#e0f7fa}.cyan-text.text-lighten-5{color:#e0f7fa}.cyan.lighten-4{background-color:#b2ebf2}.cyan-text.text-lighten-4{color:#b2ebf2}.cyan.lighten-3{background-color:#80deea}.cyan-text.text-lighten-3{color:#80deea}.cyan.lighten-2{background-color:#4dd0e1}.cyan-text.text-lighten-2{color:#4dd0e1}.cyan.lighten-1{background-color:#26c6da}.cyan-text.text-lighten-1{color:#26c6da}.cyan.darken-1{background-color:#00acc1}.cyan-text.text-darken-1{color:#00acc1}.cyan.darken-2{background-color:#0097a7}.cyan-text.text-darken-2{color:#0097a7}.cyan.darken-3{background-color:#00838f}.cyan-text.text-darken-3{color:#00838f}.cyan.darken-4{background-color:#006064}.cyan-text.text-darken-4{color:#006064}.cyan.accent-1{background-color:#84ffff}.cyan-text.text-accent-1{color:#84ffff}.cyan.accent-2{background-color:#18ffff}.cyan-text.text-accent-2{color:#18ffff}.cyan.accent-3{background-color:#00e5ff}.cyan-text.text-accent-3{color:#00e5ff}.cyan.accent-4{background-color:#00b8d4}.cyan-text.text-accent-4{color:#00b8d4}.teal{background-color:#009688}.teal-text{color:#009688}.teal.lighten-5{background-color:#e0f2f1}.teal-text.text-lighten-5{color:#e0f2f1}.teal.lighten-4{background-color:#b2dfdb}.teal-text.text-lighten-4{color:#b2dfdb}.teal.lighten-3{background-color:#80cbc4}.teal-text.text-lighten-3{color:#80cbc4}.teal.lighten-2{background-color:#4db6ac}.teal-text.text-lighten-2{color:#4db6ac}.teal.lighten-1{background-color:#26a69a}.teal-text.text-lighten-1{color:#26a69a}.teal.darken-1{background-color:#00897b}.teal-text.text-darken-1{color:#00897b}.teal.darken-2{background-color:#00796b}.teal-text.text-darken-2{color:#00796b}.teal.darken-3{background-color:#00695c}.teal-text.text-darken-3{color:#00695c}.teal.darken-4{background-color:#004d40}.teal-text.text-darken-4{color:#004d40}.teal.accent-1{background-color:#a7ffeb}.teal-text.text-accent-1{color:#a7ffeb}.teal.accent-2{background-color:#64ffda}.teal-text.text-accent-2{color:#64ffda}.teal.accent-3{background-color:#1de9b6}.teal-text.text-accent-3{color:#1de9b6}.teal.accent-4{background-color:#00bfa5}.teal-text.text-accent-4{color:#00bfa5}.green{background-color:#4caf50}.green-text{color:#4caf50}.green.lighten-5{background-color:#e8f5e9}.green-text.text-lighten-5{color:#e8f5e9}.green.lighten-4{background-color:#c8e6c9}.green-text.text-lighten-4{color:#c8e6c9}.green.lighten-3{background-color:#a5d6a7}.green-text.text-lighten-3{color:#a5d6a7}.green.lighten-2{background-color:#81c784}.green-text.text-lighten-2{color:#81c784}.green.lighten-1{background-color:#66bb6a}.green-text.text-lighten-1{color:#66bb6a}.green.darken-1{background-color:#43a047}.green-text.text-darken-1{color:#43a047}.green.darken-2{background-color:#388e3c}.green-text.text-darken-2{color:#388e3c}.green.darken-3{background-color:#2e7d32}.green-text.text-darken-3{color:#2e7d32}.green.darken-4{background-color:#1b5e20}.green-text.text-darken-4{color:#1b5e20}.green.accent-1{background-color:#b9f6ca}.green-text.text-accent-1{color:#b9f6ca}.green.accent-2{background-color:#69f0ae}.green-text.text-accent-2{color:#69f0ae}.green.accent-3{background-color:#00e676}.green-text.text-accent-3{color:#00e676}.green.accent-4{background-color:#00c853}.green-text.text-accent-4{color:#00c853}.light-green{background-color:#8bc34a}.light-green-text{color:#8bc34a}.light-green.lighten-5{background-color:#f1f8e9}.light-green-text.text-lighten-5{color:#f1f8e9}.light-green.lighten-4{background-color:#dcedc8}.light-green-text.text-lighten-4{color:#dcedc8}.light-green.lighten-3{background-color:#c5e1a5}.light-green-text.text-lighten-3{color:#c5e1a5}.light-green.lighten-2{background-color:#aed581}.light-green-text.text-lighten-2{color:#aed581}.light-green.lighten-1{background-color:#9ccc65}.light-green-text.text-lighten-1{color:#9ccc65}.light-green.darken-1{background-color:#7cb342}.light-green-text.text-darken-1{color:#7cb342}.light-green.darken-2{background-color:#689f38}.light-green-text.text-darken-2{color:#689f38}.light-green.darken-3{background-color:#558b2f}.light-green-text.text-darken-3{color:#558b2f}.light-green.darken-4{background-color:#33691e}.light-green-text.text-darken-4{color:#33691e}.light-green.accent-1{background-color:#ccff90}.light-green-text.text-accent-1{color:#ccff90}.light-green.accent-2{background-color:#b2ff59}.light-green-text.text-accent-2{color:#b2ff59}.light-green.accent-3{background-color:#76ff03}.light-green-text.text-accent-3{color:#76ff03}.light-green.accent-4{background-color:#64dd17}.light-green-text.text-accent-4{color:#64dd17}.lime{background-color:#cddc39}.lime-text{color:#cddc39}.lime.lighten-5{background-color:#f9fbe7}.lime-text.text-lighten-5{color:#f9fbe7}.lime.lighten-4{background-color:#f0f4c3}.lime-text.text-lighten-4{color:#f0f4c3}.lime.lighten-3{background-color:#e6ee9c}.lime-text.text-lighten-3{color:#e6ee9c}.lime.lighten-2{background-color:#dce775}.lime-text.text-lighten-2{color:#dce775}.lime.lighten-1{background-color:#d4e157}.lime-text.text-lighten-1{color:#d4e157}.lime.darken-1{background-color:#c0ca33}.lime-text.text-darken-1{color:#c0ca33}.lime.darken-2{background-color:#afb42b}.lime-text.text-darken-2{color:#afb42b}.lime.darken-3{background-color:#9e9d24}.lime-text.text-darken-3{color:#9e9d24}.lime.darken-4{background-color:#827717}.lime-text.text-darken-4{color:#827717}.lime.accent-1{background-color:#f4ff81}.lime-text.text-accent-1{color:#f4ff81}.lime.accent-2{background-color:#eeff41}.lime-text.text-accent-2{color:#eeff41}.lime.accent-3{background-color:#c6ff00}.lime-text.text-accent-3{color:#c6ff00}.lime.accent-4{background-color:#aeea00}.lime-text.text-accent-4{color:#aeea00}.yellow{background-color:#ffeb3b}.yellow-text{color:#ffeb3b}.yellow.lighten-5{background-color:#fffde7}.yellow-text.text-lighten-5{color:#fffde7}.yellow.lighten-4{background-color:#fff9c4}.yellow-text.text-lighten-4{color:#fff9c4}.yellow.lighten-3{background-color:#fff59d}.yellow-text.text-lighten-3{color:#fff59d}.yellow.lighten-2{background-color:#fff176}.yellow-text.text-lighten-2{color:#fff176}.yellow.lighten-1{background-color:#ffee58}.yellow-text.text-lighten-1{color:#ffee58}.yellow.darken-1{background-color:#fdd835}.yellow-text.text-darken-1{color:#fdd835}.yellow.darken-2{background-color:#fbc02d}.yellow-text.text-darken-2{color:#fbc02d}.yellow.darken-3{background-color:#f9a825}.yellow-text.text-darken-3{color:#f9a825}.yellow.darken-4{background-color:#f57f17}.yellow-text.text-darken-4{color:#f57f17}.yellow.accent-1{background-color:#ffff8d}.yellow-text.text-accent-1{color:#ffff8d}.yellow.accent-2{background-color:#ff0}.yellow-text.text-accent-2{color:#ff0}.yellow.accent-3{background-color:#ffea00}.yellow-text.text-accent-3{color:#ffea00}.yellow.accent-4{background-color:#ffd600}.yellow-text.text-accent-4{color:#ffd600}.amber{background-color:#ffc107}.amber-text{color:#ffc107}.amber.lighten-5{background-color:#fff8e1}.amber-text.text-lighten-5{color:#fff8e1}.amber.lighten-4{background-color:#ffecb3}.amber-text.text-lighten-4{color:#ffecb3}.amber.lighten-3{background-color:#ffe082}.amber-text.text-lighten-3{color:#ffe082}.amber.lighten-2{background-color:#ffd54f}.amber-text.text-lighten-2{color:#ffd54f}.amber.lighten-1{background-color:#ffca28}.amber-text.text-lighten-1{color:#ffca28}.amber.darken-1{background-color:#ffb300}.amber-text.text-darken-1{color:#ffb300}.amber.darken-2{background-color:#ffa000}.amber-text.text-darken-2{color:#ffa000}.amber.darken-3{background-color:#ff8f00}.amber-text.text-darken-3{color:#ff8f00}.amber.darken-4{background-color:#ff6f00}.amber-text.text-darken-4{color:#ff6f00}.amber.accent-1{background-color:#ffe57f}.amber-text.text-accent-1{color:#ffe57f}.amber.accent-2{background-color:#ffd740}.amber-text.text-accent-2{color:#ffd740}.amber.accent-3{background-color:#ffc400}.amber-text.text-accent-3{color:#ffc400}.amber.accent-4{background-color:#ffab00}.amber-text.text-accent-4{color:#ffab00}.orange{background-color:#ff9800}.orange-text{color:#ff9800}.orange.lighten-5{background-color:#fff3e0}.orange-text.text-lighten-5{color:#fff3e0}.orange.lighten-4{background-color:#ffe0b2}.orange-text.text-lighten-4{color:#ffe0b2}.orange.lighten-3{background-color:#ffcc80}.orange-text.text-lighten-3{color:#ffcc80}.orange.lighten-2{background-color:#ffb74d}.orange-text.text-lighten-2{color:#ffb74d}.orange.lighten-1{background-color:#ffa726}.orange-text.text-lighten-1{color:#ffa726}.orange.darken-1{background-color:#fb8c00}.orange-text.text-darken-1{color:#fb8c00}.orange.darken-2{background-color:#f57c00}.orange-text.text-darken-2{color:#f57c00}.orange.darken-3{background-color:#ef6c00}.orange-text.text-darken-3{color:#ef6c00}.orange.darken-4{background-color:#e65100}.orange-text.text-darken-4{color:#e65100}.orange.accent-1{background-color:#ffd180}.orange-text.text-accent-1{color:#ffd180}.orange.accent-2{background-color:#ffab40}.orange-text.text-accent-2{color:#ffab40}.orange.accent-3{background-color:#ff9100}.orange-text.text-accent-3{color:#ff9100}.orange.accent-4{background-color:#ff6d00}.orange-text.text-accent-4{color:#ff6d00}.deep-orange{background-color:#ff5722}.deep-orange-text{color:#ff5722}.deep-orange.lighten-5{background-color:#fbe9e7}.deep-orange-text.text-lighten-5{color:#fbe9e7}.deep-orange.lighten-4{background-color:#ffccbc}.deep-orange-text.text-lighten-4{color:#ffccbc}.deep-orange.lighten-3{background-color:#ffab91}.deep-orange-text.text-lighten-3{color:#ffab91}.deep-orange.lighten-2{background-color:#ff8a65}.deep-orange-text.text-lighten-2{color:#ff8a65}.deep-orange.lighten-1{background-color:#ff7043}.deep-orange-text.text-lighten-1{color:#ff7043}.deep-orange.darken-1{background-color:#f4511e}.deep-orange-text.text-darken-1{color:#f4511e}.deep-orange.darken-2{background-color:#e64a19}.deep-orange-text.text-darken-2{color:#e64a19}.deep-orange.darken-3{background-color:#d84315}.deep-orange-text.text-darken-3{color:#d84315}.deep-orange.darken-4{background-color:#bf360c}.deep-orange-text.text-darken-4{color:#bf360c}.deep-orange.accent-1{background-color:#ff9e80}.deep-orange-text.text-accent-1{color:#ff9e80}.deep-orange.accent-2{background-color:#ff6e40}.deep-orange-text.text-accent-2{color:#ff6e40}.deep-orange.accent-3{background-color:#ff3d00}.deep-orange-text.text-accent-3{color:#ff3d00}.deep-orange.accent-4{background-color:#dd2c00}.deep-orange-text.text-accent-4{color:#dd2c00}.brown{background-color:#795548}.brown-text{color:#795548}.brown.lighten-5{background-color:#efebe9}.brown-text.text-lighten-5{color:#efebe9}.brown.lighten-4{background-color:#d7ccc8}.brown-text.text-lighten-4{color:#d7ccc8}.brown.lighten-3{background-color:#bcaaa4}.brown-text.text-lighten-3{color:#bcaaa4}.brown.lighten-2{background-color:#a1887f}.brown-text.text-lighten-2{color:#a1887f}.brown.lighten-1{background-color:#8d6e63}.brown-text.text-lighten-1{color:#8d6e63}.brown.darken-1{background-color:#6d4c41}.brown-text.text-darken-1{color:#6d4c41}.brown.darken-2{background-color:#5d4037}.brown-text.text-darken-2{color:#5d4037}.brown.darken-3{background-color:#4e342e}.brown-text.text-darken-3{color:#4e342e}.brown.darken-4{background-color:#3e2723}.brown-text.text-darken-4{color:#3e2723}.blue-grey{background-color:#607d8b}.blue-grey-text{color:#607d8b}.blue-grey.lighten-5{background-color:#eceff1}.blue-grey-text.text-lighten-5{color:#eceff1}.blue-grey.lighten-4{background-color:#cfd8dc}.blue-grey-text.text-lighten-4{color:#cfd8dc}.blue-grey.lighten-3{background-color:#b0bec5}.blue-grey-text.text-lighten-3{color:#b0bec5}.blue-grey.lighten-2{background-color:#90a4ae}.blue-grey-text.text-lighten-2{color:#90a4ae}.blue-grey.lighten-1{background-color:#78909c}.blue-grey-text.text-lighten-1{color:#78909c}.blue-grey.darken-1{background-color:#546e7a}.blue-grey-text.text-darken-1{color:#546e7a}.blue-grey.darken-2{background-color:#455a64}.blue-grey-text.text-darken-2{color:#455a64}.blue-grey.darken-3{background-color:#37474f}.blue-grey-text.text-darken-3{color:#37474f}.blue-grey.darken-4{background-color:#263238}.blue-grey-text.text-darken-4{color:#263238}.grey{background-color:#9e9e9e}.grey-text{color:#9e9e9e}.grey.lighten-5{background-color:#fafafa}.grey-text.text-lighten-5{color:#fafafa}.grey.lighten-4{background-color:#f5f5f5}.grey-text.text-lighten-4{color:#f5f5f5}.grey.lighten-3{background-color:#eee}.grey-text.text-lighten-3{color:#eee}.grey.lighten-2{background-color:#e0e0e0}.grey-text.text-lighten-2{color:#e0e0e0}.grey.lighten-1{background-color:#bdbdbd}.grey-text.text-lighten-1{color:#bdbdbd}.grey.darken-1{background-color:#757575}.grey-text.text-darken-1{color:#757575}.grey.darken-2{background-color:#616161}.grey-text.text-darken-2{color:#616161}.grey.darken-3{background-color:#424242}.grey-text.text-darken-3{color:#424242}.grey.darken-4{background-color:#212121}.grey-text.text-darken-4{color:#212121}.black{background-color:#000}.black-text{color:#000}.white{background-color:#fff}.white-text{color:#fff}.transparent{background-color:transparent}.transparent-text{color:transparent}.indigo-outline{outline-color:#3f51b5}.blue-outline{outline-color:#2962ff}.amber-outline{outline-color:#ffab00}.green-border{outline-color:#4caf50}.teal-outline{outline-color:#00bfa5}.yellow-outline{outline-color:#ffd600}.grey-outline{outline-color:#212121}.cyan-outline{outline-color:#00b8d4}.orange-outline{outline-color:#ff6d00}.red-outline{outline-color:#d50000}.deep-orange-outline{outline-color:#dd2c00}.lime-outline{outline-color:#aeea00}.pink-outline{outline-color:#c51162}.purple-outline{outline-color:#a0f}.light-green-outline{outline-color:#64dd17}.light-blue-outline{outline-color:#01579b}.white-outline{outline-color:#fff}.indigo-border{border-color:#3f51b5}.blue-border{border-color:#2196f3}.amber-border{border-color:#ffc107}.green-border{border-color:#4caf50}.teal-border{border-color:#009688}.yellow-border{border-color:#ffeb3b}.grey-border{border-color:#9e9e9e}.cyan-border{border-color:#00bcd4}.orange-border{border-color:#ff9800}.red-border{border-color:#f44336}.deep-orange-border{border-color:#ff5722}.lime-border{border-color:#cddc39}.pink-border{border-color:#e91e63}.purple-border{border-color:#9c27b0}.light-green-border{border-color:#8bc34a}.light-blue-border{border-color:#03a9f4}.white-border{border-color:#fff}.accessible-indigo-text{color:#1a237e}.accessible-green-text{color:#1b5e20}.accessible-purple-text{color:#581663}.accessible-cyan-text{color:#006064}.accessible-blue-text{color:#085390}.accessible-deep-orange-text{color:#a72700}.accessible-red-text{color:#a41309}.accessible-amber-text{color:#833900}.accessible-teal-text{color:#00554d}.accessible-orange-text{color:#653c00}.accessible-yellow-text{color:#463f00}.accessible-lime-text{color:#474d0e}.accessible-light-blue-text{color:#025277}.accessible-light-green-text{color:#3c571d}.accessible-pink-text{color:#9d0f3f}.accessible-grey-text{color:#212121}`;Ja.innerHTML='<dom-module id="materializecss-styles-colors">\n  <template>\n    <custom-style>\n    <style is="custom-style">\n    .red {\n      background-color: #F44336;\n    }\n    \n    .red-text {\n      color: #F44336;\n    }\n    \n    .red.lighten-5 {\n      background-color: #FFEBEE;\n    }\n    \n    .red-text.text-lighten-5 {\n      color: #FFEBEE;\n    }\n    \n    .red.lighten-4 {\n      background-color: #FFCDD2;\n    }\n    \n    .red-text.text-lighten-4 {\n      color: #FFCDD2;\n    }\n    \n    .red.lighten-3 {\n      background-color: #EF9A9A;\n    }\n    \n    .red-text.text-lighten-3 {\n      color: #EF9A9A;\n    }\n    \n    .red.lighten-2 {\n      background-color: #E57373;\n    }\n    \n    .red-text.text-lighten-2 {\n      color: #E57373;\n    }\n    \n    .red.lighten-1 {\n      background-color: #EF5350;\n    }\n    \n    .red-text.text-lighten-1 {\n      color: #EF5350;\n    }\n    \n    .red.darken-1 {\n      background-color: #E53935;\n    }\n    \n    .red-text.text-darken-1 {\n      color: #E53935;\n    }\n    \n    .red.darken-2 {\n      background-color: #D32F2F;\n    }\n    \n    .red-text.text-darken-2 {\n      color: #D32F2F;\n    }\n    \n    .red.darken-3 {\n      background-color: #C62828;\n    }\n    \n    .red-text.text-darken-3 {\n      color: #C62828;\n    }\n    \n    .red.darken-4 {\n      background-color: #B71C1C;\n    }\n    \n    .red-text.text-darken-4 {\n      color: #B71C1C;\n    }\n    \n    .red.accent-1 {\n      background-color: #FF8A80;\n    }\n    \n    .red-text.text-accent-1 {\n      color: #FF8A80;\n    }\n    \n    .red.accent-2 {\n      background-color: #FF5252;\n    }\n    \n    .red-text.text-accent-2 {\n      color: #FF5252;\n    }\n    \n    .red.accent-3 {\n      background-color: #FF1744;\n    }\n    \n    .red-text.text-accent-3 {\n      color: #FF1744;\n    }\n    \n    .red.accent-4 {\n      background-color: #D50000;\n    }\n    \n    .red-text.text-accent-4 {\n      color: #D50000;\n    }\n    \n    .pink {\n      background-color: #e91e63;\n    }\n    \n    .pink-text {\n      color: #e91e63;\n    }\n    \n    .pink.lighten-5 {\n      background-color: #fce4ec;\n    }\n    \n    .pink-text.text-lighten-5 {\n      color: #fce4ec;\n    }\n    \n    .pink.lighten-4 {\n      background-color: #f8bbd0;\n    }\n    \n    .pink-text.text-lighten-4 {\n      color: #f8bbd0;\n    }\n    \n    .pink.lighten-3 {\n      background-color: #f48fb1;\n    }\n    \n    .pink-text.text-lighten-3 {\n      color: #f48fb1;\n    }\n    \n    .pink.lighten-2 {\n      background-color: #f06292;\n    }\n    \n    .pink-text.text-lighten-2 {\n      color: #f06292;\n    }\n    \n    .pink.lighten-1 {\n      background-color: #ec407a;\n    }\n    \n    .pink-text.text-lighten-1 {\n      color: #ec407a;\n    }\n    \n    .pink.darken-1 {\n      background-color: #d81b60;\n    }\n    \n    .pink-text.text-darken-1 {\n      color: #d81b60;\n    }\n    \n    .pink.darken-2 {\n      background-color: #c2185b;\n    }\n    \n    .pink-text.text-darken-2 {\n      color: #c2185b;\n    }\n    \n    .pink.darken-3 {\n      background-color: #ad1457;\n    }\n    \n    .pink-text.text-darken-3 {\n      color: #ad1457;\n    }\n    \n    .pink.darken-4 {\n      background-color: #880e4f;\n    }\n    \n    .pink-text.text-darken-4 {\n      color: #880e4f;\n    }\n    \n    .pink.accent-1 {\n      background-color: #ff80ab;\n    }\n    \n    .pink-text.text-accent-1 {\n      color: #ff80ab;\n    }\n    \n    .pink.accent-2 {\n      background-color: #ff4081;\n    }\n    \n    .pink-text.text-accent-2 {\n      color: #ff4081;\n    }\n    \n    .pink.accent-3 {\n      background-color: #f50057;\n    }\n    \n    .pink-text.text-accent-3 {\n      color: #f50057;\n    }\n    \n    .pink.accent-4 {\n      background-color: #c51162;\n    }\n    \n    .pink-text.text-accent-4 {\n      color: #c51162;\n    }\n    \n    .purple {\n      background-color: #9c27b0;\n    }\n    \n    .purple-text {\n      color: #9c27b0;\n    }\n    \n    .purple.lighten-5 {\n      background-color: #f3e5f5;\n    }\n    \n    .purple-text.text-lighten-5 {\n      color: #f3e5f5;\n    }\n    \n    .purple.lighten-4 {\n      background-color: #e1bee7;\n    }\n    \n    .purple-text.text-lighten-4 {\n      color: #e1bee7;\n    }\n    \n    .purple.lighten-3 {\n      background-color: #ce93d8;\n    }\n    \n    .purple-text.text-lighten-3 {\n      color: #ce93d8;\n    }\n    \n    .purple.lighten-2 {\n      background-color: #ba68c8;\n    }\n    \n    .purple-text.text-lighten-2 {\n      color: #ba68c8;\n    }\n    \n    .purple.lighten-1 {\n      background-color: #ab47bc;\n    }\n    \n    .purple-text.text-lighten-1 {\n      color: #ab47bc;\n    }\n    \n    .purple.darken-1 {\n      background-color: #8e24aa;\n    }\n    \n    .purple-text.text-darken-1 {\n      color: #8e24aa;\n    }\n    \n    .purple.darken-2 {\n      background-color: #7b1fa2;\n    }\n    \n    .purple-text.text-darken-2 {\n      color: #7b1fa2;\n    }\n    \n    .purple.darken-3 {\n      background-color: #6a1b9a;\n    }\n    \n    .purple-text.text-darken-3 {\n      color: #6a1b9a;\n    }\n    \n    .purple.darken-4 {\n      background-color: #4a148c;\n    }\n    \n    .purple-text.text-darken-4 {\n      color: #4a148c;\n    }\n    \n    .purple.accent-1 {\n      background-color: #ea80fc;\n    }\n    \n    .purple-text.text-accent-1 {\n      color: #ea80fc;\n    }\n    \n    .purple.accent-2 {\n      background-color: #e040fb;\n    }\n    \n    .purple-text.text-accent-2 {\n      color: #e040fb;\n    }\n    \n    .purple.accent-3 {\n      background-color: #d500f9;\n    }\n    \n    .purple-text.text-accent-3 {\n      color: #d500f9;\n    }\n    \n    .purple.accent-4 {\n      background-color: #aa00ff;\n    }\n    \n    .purple-text.text-accent-4 {\n      color: #aa00ff;\n    }\n    \n    .deep-purple {\n      background-color: #673ab7;\n    }\n    \n    .deep-purple-text {\n      color: #673ab7;\n    }\n    \n    .deep-purple.lighten-5 {\n      background-color: #ede7f6;\n    }\n    \n    .deep-purple-text.text-lighten-5 {\n      color: #ede7f6;\n    }\n    \n    .deep-purple.lighten-4 {\n      background-color: #d1c4e9;\n    }\n    \n    .deep-purple-text.text-lighten-4 {\n      color: #d1c4e9;\n    }\n    \n    .deep-purple.lighten-3 {\n      background-color: #b39ddb;\n    }\n    \n    .deep-purple-text.text-lighten-3 {\n      color: #b39ddb;\n    }\n    \n    .deep-purple.lighten-2 {\n      background-color: #9575cd;\n    }\n    \n    .deep-purple-text.text-lighten-2 {\n      color: #9575cd;\n    }\n    \n    .deep-purple.lighten-1 {\n      background-color: #7e57c2;\n    }\n    \n    .deep-purple-text.text-lighten-1 {\n      color: #7e57c2;\n    }\n    \n    .deep-purple.darken-1 {\n      background-color: #5e35b1;\n    }\n    \n    .deep-purple-text.text-darken-1 {\n      color: #5e35b1;\n    }\n    \n    .deep-purple.darken-2 {\n      background-color: #512da8;\n    }\n    \n    .deep-purple-text.text-darken-2 {\n      color: #512da8;\n    }\n    \n    .deep-purple.darken-3 {\n      background-color: #4527a0;\n    }\n    \n    .deep-purple-text.text-darken-3 {\n      color: #4527a0;\n    }\n    \n    .deep-purple.darken-4 {\n      background-color: #311b92;\n    }\n    \n    .deep-purple-text.text-darken-4 {\n      color: #311b92;\n    }\n    \n    .deep-purple.accent-1 {\n      background-color: #b388ff;\n    }\n    \n    .deep-purple-text.text-accent-1 {\n      color: #b388ff;\n    }\n    \n    .deep-purple.accent-2 {\n      background-color: #7c4dff;\n    }\n    \n    .deep-purple-text.text-accent-2 {\n      color: #7c4dff;\n    }\n    \n    .deep-purple.accent-3 {\n      background-color: #651fff;\n    }\n    \n    .deep-purple-text.text-accent-3 {\n      color: #651fff;\n    }\n    \n    .deep-purple.accent-4 {\n      background-color: #6200ea;\n    }\n    \n    .deep-purple-text.text-accent-4 {\n      color: #6200ea;\n    }\n    \n    .indigo {\n      background-color: #3f51b5;\n    }\n    \n    .indigo-text {\n      color: #3f51b5;\n    }\n    \n    .indigo.lighten-5 {\n      background-color: #e8eaf6;\n    }\n    \n    .indigo-text.text-lighten-5 {\n      color: #e8eaf6;\n    }\n    \n    .indigo.lighten-4 {\n      background-color: #c5cae9;\n    }\n    \n    .indigo-text.text-lighten-4 {\n      color: #c5cae9;\n    }\n    \n    .indigo.lighten-3 {\n      background-color: #9fa8da;\n    }\n    \n    .indigo-text.text-lighten-3 {\n      color: #9fa8da;\n    }\n    \n    .indigo.lighten-2 {\n      background-color: #7986cb;\n    }\n    \n    .indigo-text.text-lighten-2 {\n      color: #7986cb;\n    }\n    \n    .indigo.lighten-1 {\n      background-color: #5c6bc0;\n    }\n    \n    .indigo-text.text-lighten-1 {\n      color: #5c6bc0;\n    }\n    \n    .indigo.darken-1 {\n      background-color: #3949ab;\n    }\n    \n    .indigo-text.text-darken-1 {\n      color: #3949ab;\n    }\n    \n    .indigo.darken-2 {\n      background-color: #303f9f;\n    }\n    \n    .indigo-text.text-darken-2 {\n      color: #303f9f;\n    }\n    \n    .indigo.darken-3 {\n      background-color: #283593;\n    }\n    \n    .indigo-text.text-darken-3 {\n      color: #283593;\n    }\n    \n    .indigo.darken-4 {\n      background-color: #1a237e;\n    }\n    \n    .indigo-text.text-darken-4 {\n      color: #1a237e;\n    }\n    \n    .indigo.accent-1 {\n      background-color: #8c9eff;\n    }\n    \n    .indigo-text.text-accent-1 {\n      color: #8c9eff;\n    }\n    \n    .indigo.accent-2 {\n      background-color: #536dfe;\n    }\n    \n    .indigo-text.text-accent-2 {\n      color: #536dfe;\n    }\n    \n    .indigo.accent-3 {\n      background-color: #3d5afe;\n    }\n    \n    .indigo-text.text-accent-3 {\n      color: #3d5afe;\n    }\n    \n    .indigo.accent-4 {\n      background-color: #304ffe;\n    }\n    \n    .indigo-text.text-accent-4 {\n      color: #304ffe;\n    }\n    \n    .blue {\n      background-color: #2196F3;\n    }\n    \n    .blue-text {\n      color: #2196F3;\n    }\n    \n    .blue.lighten-5 {\n      background-color: #E3F2FD;\n    }\n    \n    .blue-text.text-lighten-5 {\n      color: #E3F2FD;\n    }\n    \n    .blue.lighten-4 {\n      background-color: #BBDEFB;\n    }\n    \n    .blue-text.text-lighten-4 {\n      color: #BBDEFB;\n    }\n    \n    .blue.lighten-3 {\n      background-color: #90CAF9;\n    }\n    \n    .blue-text.text-lighten-3 {\n      color: #90CAF9;\n    }\n    \n    .blue.lighten-2 {\n      background-color: #64B5F6;\n    }\n    \n    .blue-text.text-lighten-2 {\n      color: #64B5F6;\n    }\n    \n    .blue.lighten-1 {\n      background-color: #42A5F5;\n    }\n    \n    .blue-text.text-lighten-1 {\n      color: #42A5F5;\n    }\n    \n    .blue.darken-1 {\n      background-color: #1E88E5;\n    }\n    \n    .blue-text.text-darken-1 {\n      color: #1E88E5;\n    }\n    \n    .blue.darken-2 {\n      background-color: #1976D2;\n    }\n    \n    .blue-text.text-darken-2 {\n      color: #1976D2;\n    }\n    \n    .blue.darken-3 {\n      background-color: #1565C0;\n    }\n    \n    .blue-text.text-darken-3 {\n      color: #1565C0;\n    }\n    \n    .blue.darken-4 {\n      background-color: #0D47A1;\n    }\n    \n    .blue-text.text-darken-4 {\n      color: #0D47A1;\n    }\n    \n    .blue.accent-1 {\n      background-color: #82B1FF;\n    }\n    \n    .blue-text.text-accent-1 {\n      color: #82B1FF;\n    }\n    \n    .blue.accent-2 {\n      background-color: #448AFF;\n    }\n    \n    .blue-text.text-accent-2 {\n      color: #448AFF;\n    }\n    \n    .blue.accent-3 {\n      background-color: #2979FF;\n    }\n    \n    .blue-text.text-accent-3 {\n      color: #2979FF;\n    }\n    \n    .blue.accent-4 {\n      background-color: #2962FF;\n    }\n    \n    .blue-text.text-accent-4 {\n      color: #2962FF;\n    }\n    \n    .light-blue {\n      background-color: #03a9f4;\n    }\n    \n    .light-blue-text {\n      color: #03a9f4;\n    }\n    \n    .light-blue.lighten-5 {\n      background-color: #e1f5fe;\n    }\n    \n    .light-blue-text.text-lighten-5 {\n      color: #e1f5fe;\n    }\n    \n    .light-blue.lighten-4 {\n      background-color: #b3e5fc;\n    }\n    \n    .light-blue-text.text-lighten-4 {\n      color: #b3e5fc;\n    }\n    \n    .light-blue.lighten-3 {\n      background-color: #81d4fa;\n    }\n    \n    .light-blue-text.text-lighten-3 {\n      color: #81d4fa;\n    }\n    \n    .light-blue.lighten-2 {\n      background-color: #4fc3f7;\n    }\n    \n    .light-blue-text.text-lighten-2 {\n      color: #4fc3f7;\n    }\n    \n    .light-blue.lighten-1 {\n      background-color: #29b6f6;\n    }\n    \n    .light-blue-text.text-lighten-1 {\n      color: #29b6f6;\n    }\n    \n    .light-blue.darken-1 {\n      background-color: #039be5;\n    }\n    \n    .light-blue-text.text-darken-1 {\n      color: #039be5;\n    }\n    \n    .light-blue.darken-2 {\n      background-color: #0288d1;\n    }\n    \n    .light-blue-text.text-darken-2 {\n      color: #0288d1;\n    }\n    \n    .light-blue.darken-3 {\n      background-color: #0277bd;\n    }\n    \n    .light-blue-text.text-darken-3 {\n      color: #0277bd;\n    }\n    \n    .light-blue.darken-4 {\n      background-color: #01579b;\n    }\n    \n    .light-blue-text.text-darken-4 {\n      color: #01579b;\n    }\n    \n    .light-blue.accent-1 {\n      background-color: #80d8ff;\n    }\n    \n    .light-blue-text.text-accent-1 {\n      color: #80d8ff;\n    }\n    \n    .light-blue.accent-2 {\n      background-color: #40c4ff;\n    }\n    \n    .light-blue-text.text-accent-2 {\n      color: #40c4ff;\n    }\n    \n    .light-blue.accent-3 {\n      background-color: #00b0ff;\n    }\n    \n    .light-blue-text.text-accent-3 {\n      color: #00b0ff;\n    }\n    \n    .light-blue.accent-4 {\n      background-color: #0091ea;\n    }\n    \n    .light-blue-text.text-accent-4 {\n      color: #0091ea;\n    }\n    \n    .cyan {\n      background-color: #00bcd4;\n    }\n    \n    .cyan-text {\n      color: #00bcd4;\n    }\n    \n    .cyan.lighten-5 {\n      background-color: #e0f7fa;\n    }\n    \n    .cyan-text.text-lighten-5 {\n      color: #e0f7fa;\n    }\n    \n    .cyan.lighten-4 {\n      background-color: #b2ebf2;\n    }\n    \n    .cyan-text.text-lighten-4 {\n      color: #b2ebf2;\n    }\n    \n    .cyan.lighten-3 {\n      background-color: #80deea;\n    }\n    \n    .cyan-text.text-lighten-3 {\n      color: #80deea;\n    }\n    \n    .cyan.lighten-2 {\n      background-color: #4dd0e1;\n    }\n    \n    .cyan-text.text-lighten-2 {\n      color: #4dd0e1;\n    }\n    \n    .cyan.lighten-1 {\n      background-color: #26c6da;\n    }\n    \n    .cyan-text.text-lighten-1 {\n      color: #26c6da;\n    }\n    \n    .cyan.darken-1 {\n      background-color: #00acc1;\n    }\n    \n    .cyan-text.text-darken-1 {\n      color: #00acc1;\n    }\n    \n    .cyan.darken-2 {\n      background-color: #0097a7;\n    }\n    \n    .cyan-text.text-darken-2 {\n      color: #0097a7;\n    }\n    \n    .cyan.darken-3 {\n      background-color: #00838f;\n    }\n    \n    .cyan-text.text-darken-3 {\n      color: #00838f;\n    }\n    \n    .cyan.darken-4 {\n      background-color: #006064;\n    }\n    \n    .cyan-text.text-darken-4 {\n      color: #006064;\n    }\n    \n    .cyan.accent-1 {\n      background-color: #84ffff;\n    }\n    \n    .cyan-text.text-accent-1 {\n      color: #84ffff;\n    }\n    \n    .cyan.accent-2 {\n      background-color: #18ffff;\n    }\n    \n    .cyan-text.text-accent-2 {\n      color: #18ffff;\n    }\n    \n    .cyan.accent-3 {\n      background-color: #00e5ff;\n    }\n    \n    .cyan-text.text-accent-3 {\n      color: #00e5ff;\n    }\n    \n    .cyan.accent-4 {\n      background-color: #00b8d4;\n    }\n    \n    .cyan-text.text-accent-4 {\n      color: #00b8d4;\n    }\n    \n    .teal {\n      background-color: #009688;\n    }\n    \n    .teal-text {\n      color: #009688;\n    }\n    \n    .teal.lighten-5 {\n      background-color: #e0f2f1;\n    }\n    \n    .teal-text.text-lighten-5 {\n      color: #e0f2f1;\n    }\n    \n    .teal.lighten-4 {\n      background-color: #b2dfdb;\n    }\n    \n    .teal-text.text-lighten-4 {\n      color: #b2dfdb;\n    }\n    \n    .teal.lighten-3 {\n      background-color: #80cbc4;\n    }\n    \n    .teal-text.text-lighten-3 {\n      color: #80cbc4;\n    }\n    \n    .teal.lighten-2 {\n      background-color: #4db6ac;\n    }\n    \n    .teal-text.text-lighten-2 {\n      color: #4db6ac;\n    }\n    \n    .teal.lighten-1 {\n      background-color: #26a69a;\n    }\n    \n    .teal-text.text-lighten-1 {\n      color: #26a69a;\n    }\n    \n    .teal.darken-1 {\n      background-color: #00897b;\n    }\n    \n    .teal-text.text-darken-1 {\n      color: #00897b;\n    }\n    \n    .teal.darken-2 {\n      background-color: #00796b;\n    }\n    \n    .teal-text.text-darken-2 {\n      color: #00796b;\n    }\n    \n    .teal.darken-3 {\n      background-color: #00695c;\n    }\n    \n    .teal-text.text-darken-3 {\n      color: #00695c;\n    }\n    \n    .teal.darken-4 {\n      background-color: #004d40;\n    }\n    \n    .teal-text.text-darken-4 {\n      color: #004d40;\n    }\n    \n    .teal.accent-1 {\n      background-color: #a7ffeb;\n    }\n    \n    .teal-text.text-accent-1 {\n      color: #a7ffeb;\n    }\n    \n    .teal.accent-2 {\n      background-color: #64ffda;\n    }\n    \n    .teal-text.text-accent-2 {\n      color: #64ffda;\n    }\n    \n    .teal.accent-3 {\n      background-color: #1de9b6;\n    }\n    \n    .teal-text.text-accent-3 {\n      color: #1de9b6;\n    }\n    \n    .teal.accent-4 {\n      background-color: #00bfa5;\n    }\n    \n    .teal-text.text-accent-4 {\n      color: #00bfa5;\n    }\n    \n    .green {\n      background-color: #4CAF50;\n    }\n    \n    .green-text {\n      color: #4CAF50;\n    }\n    \n    .green.lighten-5 {\n      background-color: #E8F5E9;\n    }\n    \n    .green-text.text-lighten-5 {\n      color: #E8F5E9;\n    }\n    \n    .green.lighten-4 {\n      background-color: #C8E6C9;\n    }\n    \n    .green-text.text-lighten-4 {\n      color: #C8E6C9;\n    }\n    \n    .green.lighten-3 {\n      background-color: #A5D6A7;\n    }\n    \n    .green-text.text-lighten-3 {\n      color: #A5D6A7;\n    }\n    \n    .green.lighten-2 {\n      background-color: #81C784;\n    }\n    \n    .green-text.text-lighten-2 {\n      color: #81C784;\n    }\n    \n    .green.lighten-1 {\n      background-color: #66BB6A;\n    }\n    \n    .green-text.text-lighten-1 {\n      color: #66BB6A;\n    }\n    \n    .green.darken-1 {\n      background-color: #43A047;\n    }\n    \n    .green-text.text-darken-1 {\n      color: #43A047;\n    }\n    \n    .green.darken-2 {\n      background-color: #388E3C;\n    }\n    \n    .green-text.text-darken-2 {\n      color: #388E3C;\n    }\n    \n    .green.darken-3 {\n      background-color: #2E7D32;\n    }\n    \n    .green-text.text-darken-3 {\n      color: #2E7D32;\n    }\n    \n    .green.darken-4 {\n      background-color: #1B5E20;\n    }\n    \n    .green-text.text-darken-4 {\n      color: #1B5E20;\n    }\n    \n    .green.accent-1 {\n      background-color: #B9F6CA;\n    }\n    \n    .green-text.text-accent-1 {\n      color: #B9F6CA;\n    }\n    \n    .green.accent-2 {\n      background-color: #69F0AE;\n    }\n    \n    .green-text.text-accent-2 {\n      color: #69F0AE;\n    }\n    \n    .green.accent-3 {\n      background-color: #00E676;\n    }\n    \n    .green-text.text-accent-3 {\n      color: #00E676;\n    }\n    \n    .green.accent-4 {\n      background-color: #00C853;\n    }\n    \n    .green-text.text-accent-4 {\n      color: #00C853;\n    }\n    \n    .light-green {\n      background-color: #8bc34a;\n    }\n    \n    .light-green-text {\n      color: #8bc34a;\n    }\n    \n    .light-green.lighten-5 {\n      background-color: #f1f8e9;\n    }\n    \n    .light-green-text.text-lighten-5 {\n      color: #f1f8e9;\n    }\n    \n    .light-green.lighten-4 {\n      background-color: #dcedc8;\n    }\n    \n    .light-green-text.text-lighten-4 {\n      color: #dcedc8;\n    }\n    \n    .light-green.lighten-3 {\n      background-color: #c5e1a5;\n    }\n    \n    .light-green-text.text-lighten-3 {\n      color: #c5e1a5;\n    }\n    \n    .light-green.lighten-2 {\n      background-color: #aed581;\n    }\n    \n    .light-green-text.text-lighten-2 {\n      color: #aed581;\n    }\n    \n    .light-green.lighten-1 {\n      background-color: #9ccc65;\n    }\n    \n    .light-green-text.text-lighten-1 {\n      color: #9ccc65;\n    }\n    \n    .light-green.darken-1 {\n      background-color: #7cb342;\n    }\n    \n    .light-green-text.text-darken-1 {\n      color: #7cb342;\n    }\n    \n    .light-green.darken-2 {\n      background-color: #689f38;\n    }\n    \n    .light-green-text.text-darken-2 {\n      color: #689f38;\n    }\n    \n    .light-green.darken-3 {\n      background-color: #558b2f;\n    }\n    \n    .light-green-text.text-darken-3 {\n      color: #558b2f;\n    }\n    \n    .light-green.darken-4 {\n      background-color: #33691e;\n    }\n    \n    .light-green-text.text-darken-4 {\n      color: #33691e;\n    }\n    \n    .light-green.accent-1 {\n      background-color: #ccff90;\n    }\n    \n    .light-green-text.text-accent-1 {\n      color: #ccff90;\n    }\n    \n    .light-green.accent-2 {\n      background-color: #b2ff59;\n    }\n    \n    .light-green-text.text-accent-2 {\n      color: #b2ff59;\n    }\n    \n    .light-green.accent-3 {\n      background-color: #76ff03;\n    }\n    \n    .light-green-text.text-accent-3 {\n      color: #76ff03;\n    }\n    \n    .light-green.accent-4 {\n      background-color: #64dd17;\n    }\n    \n    .light-green-text.text-accent-4 {\n      color: #64dd17;\n    }\n    \n    .lime {\n      background-color: #cddc39;\n    }\n    \n    .lime-text {\n      color: #cddc39;\n    }\n    \n    .lime.lighten-5 {\n      background-color: #f9fbe7;\n    }\n    \n    .lime-text.text-lighten-5 {\n      color: #f9fbe7;\n    }\n    \n    .lime.lighten-4 {\n      background-color: #f0f4c3;\n    }\n    \n    .lime-text.text-lighten-4 {\n      color: #f0f4c3;\n    }\n    \n    .lime.lighten-3 {\n      background-color: #e6ee9c;\n    }\n    \n    .lime-text.text-lighten-3 {\n      color: #e6ee9c;\n    }\n    \n    .lime.lighten-2 {\n      background-color: #dce775;\n    }\n    \n    .lime-text.text-lighten-2 {\n      color: #dce775;\n    }\n    \n    .lime.lighten-1 {\n      background-color: #d4e157;\n    }\n    \n    .lime-text.text-lighten-1 {\n      color: #d4e157;\n    }\n    \n    .lime.darken-1 {\n      background-color: #c0ca33;\n    }\n    \n    .lime-text.text-darken-1 {\n      color: #c0ca33;\n    }\n    \n    .lime.darken-2 {\n      background-color: #afb42b;\n    }\n    \n    .lime-text.text-darken-2 {\n      color: #afb42b;\n    }\n    \n    .lime.darken-3 {\n      background-color: #9e9d24;\n    }\n    \n    .lime-text.text-darken-3 {\n      color: #9e9d24;\n    }\n    \n    .lime.darken-4 {\n      background-color: #827717;\n    }\n    \n    .lime-text.text-darken-4 {\n      color: #827717;\n    }\n    \n    .lime.accent-1 {\n      background-color: #f4ff81;\n    }\n    \n    .lime-text.text-accent-1 {\n      color: #f4ff81;\n    }\n    \n    .lime.accent-2 {\n      background-color: #eeff41;\n    }\n    \n    .lime-text.text-accent-2 {\n      color: #eeff41;\n    }\n    \n    .lime.accent-3 {\n      background-color: #c6ff00;\n    }\n    \n    .lime-text.text-accent-3 {\n      color: #c6ff00;\n    }\n    \n    .lime.accent-4 {\n      background-color: #aeea00;\n    }\n    \n    .lime-text.text-accent-4 {\n      color: #aeea00;\n    }\n    \n    .yellow {\n      background-color: #ffeb3b;\n    }\n    \n    .yellow-text {\n      color: #ffeb3b;\n    }\n    \n    .yellow.lighten-5 {\n      background-color: #fffde7;\n    }\n    \n    .yellow-text.text-lighten-5 {\n      color: #fffde7;\n    }\n    \n    .yellow.lighten-4 {\n      background-color: #fff9c4;\n    }\n    \n    .yellow-text.text-lighten-4 {\n      color: #fff9c4;\n    }\n    \n    .yellow.lighten-3 {\n      background-color: #fff59d;\n    }\n    \n    .yellow-text.text-lighten-3 {\n      color: #fff59d;\n    }\n    \n    .yellow.lighten-2 {\n      background-color: #fff176;\n    }\n    \n    .yellow-text.text-lighten-2 {\n      color: #fff176;\n    }\n    \n    .yellow.lighten-1 {\n      background-color: #ffee58;\n    }\n    \n    .yellow-text.text-lighten-1 {\n      color: #ffee58;\n    }\n    \n    .yellow.darken-1 {\n      background-color: #fdd835;\n    }\n    \n    .yellow-text.text-darken-1 {\n      color: #fdd835;\n    }\n    \n    .yellow.darken-2 {\n      background-color: #fbc02d;\n    }\n    \n    .yellow-text.text-darken-2 {\n      color: #fbc02d;\n    }\n    \n    .yellow.darken-3 {\n      background-color: #f9a825;\n    }\n    \n    .yellow-text.text-darken-3 {\n      color: #f9a825;\n    }\n    \n    .yellow.darken-4 {\n      background-color: #f57f17;\n    }\n    \n    .yellow-text.text-darken-4 {\n      color: #f57f17;\n    }\n    \n    .yellow.accent-1 {\n      background-color: #ffff8d;\n    }\n    \n    .yellow-text.text-accent-1 {\n      color: #ffff8d;\n    }\n    \n    .yellow.accent-2 {\n      background-color: #ffff00;\n    }\n    \n    .yellow-text.text-accent-2 {\n      color: #ffff00;\n    }\n    \n    .yellow.accent-3 {\n      background-color: #ffea00;\n    }\n    \n    .yellow-text.text-accent-3 {\n      color: #ffea00;\n    }\n    \n    .yellow.accent-4 {\n      background-color: #ffd600;\n    }\n    \n    .yellow-text.text-accent-4 {\n      color: #ffd600;\n    }\n    \n    .amber {\n      background-color: #ffc107;\n    }\n    \n    .amber-text {\n      color: #ffc107;\n    }\n    \n    .amber.lighten-5 {\n      background-color: #fff8e1;\n    }\n    \n    .amber-text.text-lighten-5 {\n      color: #fff8e1;\n    }\n    \n    .amber.lighten-4 {\n      background-color: #ffecb3;\n    }\n    \n    .amber-text.text-lighten-4 {\n      color: #ffecb3;\n    }\n    \n    .amber.lighten-3 {\n      background-color: #ffe082;\n    }\n    \n    .amber-text.text-lighten-3 {\n      color: #ffe082;\n    }\n    \n    .amber.lighten-2 {\n      background-color: #ffd54f;\n    }\n    \n    .amber-text.text-lighten-2 {\n      color: #ffd54f;\n    }\n    \n    .amber.lighten-1 {\n      background-color: #ffca28;\n    }\n    \n    .amber-text.text-lighten-1 {\n      color: #ffca28;\n    }\n    \n    .amber.darken-1 {\n      background-color: #ffb300;\n    }\n    \n    .amber-text.text-darken-1 {\n      color: #ffb300;\n    }\n    \n    .amber.darken-2 {\n      background-color: #ffa000;\n    }\n    \n    .amber-text.text-darken-2 {\n      color: #ffa000;\n    }\n    \n    .amber.darken-3 {\n      background-color: #ff8f00;\n    }\n    \n    .amber-text.text-darken-3 {\n      color: #ff8f00;\n    }\n    \n    .amber.darken-4 {\n      background-color: #ff6f00;\n    }\n    \n    .amber-text.text-darken-4 {\n      color: #ff6f00;\n    }\n    \n    .amber.accent-1 {\n      background-color: #ffe57f;\n    }\n    \n    .amber-text.text-accent-1 {\n      color: #ffe57f;\n    }\n    \n    .amber.accent-2 {\n      background-color: #ffd740;\n    }\n    \n    .amber-text.text-accent-2 {\n      color: #ffd740;\n    }\n    \n    .amber.accent-3 {\n      background-color: #ffc400;\n    }\n    \n    .amber-text.text-accent-3 {\n      color: #ffc400;\n    }\n    \n    .amber.accent-4 {\n      background-color: #ffab00;\n    }\n    \n    .amber-text.text-accent-4 {\n      color: #ffab00;\n    }\n    \n    .orange {\n      background-color: #ff9800;\n    }\n    \n    .orange-text {\n      color: #ff9800;\n    }\n    \n    .orange.lighten-5 {\n      background-color: #fff3e0;\n    }\n    \n    .orange-text.text-lighten-5 {\n      color: #fff3e0;\n    }\n    \n    .orange.lighten-4 {\n      background-color: #ffe0b2;\n    }\n    \n    .orange-text.text-lighten-4 {\n      color: #ffe0b2;\n    }\n    \n    .orange.lighten-3 {\n      background-color: #ffcc80;\n    }\n    \n    .orange-text.text-lighten-3 {\n      color: #ffcc80;\n    }\n    \n    .orange.lighten-2 {\n      background-color: #ffb74d;\n    }\n    \n    .orange-text.text-lighten-2 {\n      color: #ffb74d;\n    }\n    \n    .orange.lighten-1 {\n      background-color: #ffa726;\n    }\n    \n    .orange-text.text-lighten-1 {\n      color: #ffa726;\n    }\n    \n    .orange.darken-1 {\n      background-color: #fb8c00;\n    }\n    \n    .orange-text.text-darken-1 {\n      color: #fb8c00;\n    }\n    \n    .orange.darken-2 {\n      background-color: #f57c00;\n    }\n    \n    .orange-text.text-darken-2 {\n      color: #f57c00;\n    }\n    \n    .orange.darken-3 {\n      background-color: #ef6c00;\n    }\n    \n    .orange-text.text-darken-3 {\n      color: #ef6c00;\n    }\n    \n    .orange.darken-4 {\n      background-color: #e65100;\n    }\n    \n    .orange-text.text-darken-4 {\n      color: #e65100;\n    }\n    \n    .orange.accent-1 {\n      background-color: #ffd180;\n    }\n    \n    .orange-text.text-accent-1 {\n      color: #ffd180;\n    }\n    \n    .orange.accent-2 {\n      background-color: #ffab40;\n    }\n    \n    .orange-text.text-accent-2 {\n      color: #ffab40;\n    }\n    \n    .orange.accent-3 {\n      background-color: #ff9100;\n    }\n    \n    .orange-text.text-accent-3 {\n      color: #ff9100;\n    }\n    \n    .orange.accent-4 {\n      background-color: #ff6d00;\n    }\n    \n    .orange-text.text-accent-4 {\n      color: #ff6d00;\n    }\n    \n    .deep-orange {\n      background-color: #ff5722;\n    }\n    \n    .deep-orange-text {\n      color: #ff5722;\n    }\n    \n    .deep-orange.lighten-5 {\n      background-color: #fbe9e7;\n    }\n    \n    .deep-orange-text.text-lighten-5 {\n      color: #fbe9e7;\n    }\n    \n    .deep-orange.lighten-4 {\n      background-color: #ffccbc;\n    }\n    \n    .deep-orange-text.text-lighten-4 {\n      color: #ffccbc;\n    }\n    \n    .deep-orange.lighten-3 {\n      background-color: #ffab91;\n    }\n    \n    .deep-orange-text.text-lighten-3 {\n      color: #ffab91;\n    }\n    \n    .deep-orange.lighten-2 {\n      background-color: #ff8a65;\n    }\n    \n    .deep-orange-text.text-lighten-2 {\n      color: #ff8a65;\n    }\n    \n    .deep-orange.lighten-1 {\n      background-color: #ff7043;\n    }\n    \n    .deep-orange-text.text-lighten-1 {\n      color: #ff7043;\n    }\n    \n    .deep-orange.darken-1 {\n      background-color: #f4511e;\n    }\n    \n    .deep-orange-text.text-darken-1 {\n      color: #f4511e;\n    }\n    \n    .deep-orange.darken-2 {\n      background-color: #e64a19;\n    }\n    \n    .deep-orange-text.text-darken-2 {\n      color: #e64a19;\n    }\n    \n    .deep-orange.darken-3 {\n      background-color: #d84315;\n    }\n    \n    .deep-orange-text.text-darken-3 {\n      color: #d84315;\n    }\n    \n    .deep-orange.darken-4 {\n      background-color: #bf360c;\n    }\n    \n    .deep-orange-text.text-darken-4 {\n      color: #bf360c;\n    }\n    \n    .deep-orange.accent-1 {\n      background-color: #ff9e80;\n    }\n    \n    .deep-orange-text.text-accent-1 {\n      color: #ff9e80;\n    }\n    \n    .deep-orange.accent-2 {\n      background-color: #ff6e40;\n    }\n    \n    .deep-orange-text.text-accent-2 {\n      color: #ff6e40;\n    }\n    \n    .deep-orange.accent-3 {\n      background-color: #ff3d00;\n    }\n    \n    .deep-orange-text.text-accent-3 {\n      color: #ff3d00;\n    }\n    \n    .deep-orange.accent-4 {\n      background-color: #dd2c00;\n    }\n    \n    .deep-orange-text.text-accent-4 {\n      color: #dd2c00;\n    }\n    \n    .brown {\n      background-color: #795548;\n    }\n    \n    .brown-text {\n      color: #795548;\n    }\n    \n    .brown.lighten-5 {\n      background-color: #efebe9;\n    }\n    \n    .brown-text.text-lighten-5 {\n      color: #efebe9;\n    }\n    \n    .brown.lighten-4 {\n      background-color: #d7ccc8;\n    }\n    \n    .brown-text.text-lighten-4 {\n      color: #d7ccc8;\n    }\n    \n    .brown.lighten-3 {\n      background-color: #bcaaa4;\n    }\n    \n    .brown-text.text-lighten-3 {\n      color: #bcaaa4;\n    }\n    \n    .brown.lighten-2 {\n      background-color: #a1887f;\n    }\n    \n    .brown-text.text-lighten-2 {\n      color: #a1887f;\n    }\n    \n    .brown.lighten-1 {\n      background-color: #8d6e63;\n    }\n    \n    .brown-text.text-lighten-1 {\n      color: #8d6e63;\n    }\n    \n    .brown.darken-1 {\n      background-color: #6d4c41;\n    }\n    \n    .brown-text.text-darken-1 {\n      color: #6d4c41;\n    }\n    \n    .brown.darken-2 {\n      background-color: #5d4037;\n    }\n    \n    .brown-text.text-darken-2 {\n      color: #5d4037;\n    }\n    \n    .brown.darken-3 {\n      background-color: #4e342e;\n    }\n    \n    .brown-text.text-darken-3 {\n      color: #4e342e;\n    }\n    \n    .brown.darken-4 {\n      background-color: #3e2723;\n    }\n    \n    .brown-text.text-darken-4 {\n      color: #3e2723;\n    }\n    \n    .blue-grey {\n      background-color: #607d8b;\n    }\n    \n    .blue-grey-text {\n      color: #607d8b;\n    }\n    \n    .blue-grey.lighten-5 {\n      background-color: #eceff1;\n    }\n    \n    .blue-grey-text.text-lighten-5 {\n      color: #eceff1;\n    }\n    \n    .blue-grey.lighten-4 {\n      background-color: #cfd8dc;\n    }\n    \n    .blue-grey-text.text-lighten-4 {\n      color: #cfd8dc;\n    }\n    \n    .blue-grey.lighten-3 {\n      background-color: #b0bec5;\n    }\n    \n    .blue-grey-text.text-lighten-3 {\n      color: #b0bec5;\n    }\n    \n    .blue-grey.lighten-2 {\n      background-color: #90a4ae;\n    }\n    \n    .blue-grey-text.text-lighten-2 {\n      color: #90a4ae;\n    }\n    \n    .blue-grey.lighten-1 {\n      background-color: #78909c;\n    }\n    \n    .blue-grey-text.text-lighten-1 {\n      color: #78909c;\n    }\n    \n    .blue-grey.darken-1 {\n      background-color: #546e7a;\n    }\n    \n    .blue-grey-text.text-darken-1 {\n      color: #546e7a;\n    }\n    \n    .blue-grey.darken-2 {\n      background-color: #455a64;\n    }\n    \n    .blue-grey-text.text-darken-2 {\n      color: #455a64;\n    }\n    \n    .blue-grey.darken-3 {\n      background-color: #37474f;\n    }\n    \n    .blue-grey-text.text-darken-3 {\n      color: #37474f;\n    }\n    \n    .blue-grey.darken-4 {\n      background-color: #263238;\n    }\n    \n    .blue-grey-text.text-darken-4 {\n      color: #263238;\n    }\n    \n    .grey {\n      background-color: #9e9e9e;\n    }\n    \n    .grey-text {\n      color: #9e9e9e;\n    }\n    \n    .grey.lighten-5 {\n      background-color: #fafafa;\n    }\n    \n    .grey-text.text-lighten-5 {\n      color: #fafafa;\n    }\n    \n    .grey.lighten-4 {\n      background-color: #f5f5f5;\n    }\n    \n    .grey-text.text-lighten-4 {\n      color: #f5f5f5;\n    }\n    \n    .grey.lighten-3 {\n      background-color: #eeeeee;\n    }\n    \n    .grey-text.text-lighten-3 {\n      color: #eeeeee;\n    }\n    \n    .grey.lighten-2 {\n      background-color: #e0e0e0;\n    }\n    \n    .grey-text.text-lighten-2 {\n      color: #e0e0e0;\n    }\n    \n    .grey.lighten-1 {\n      background-color: #bdbdbd;\n    }\n    \n    .grey-text.text-lighten-1 {\n      color: #bdbdbd;\n    }\n    \n    .grey.darken-1 {\n      background-color: #757575;\n    }\n    \n    .grey-text.text-darken-1 {\n      color: #757575;\n    }\n    \n    .grey.darken-2 {\n      background-color: #616161;\n    }\n    \n    .grey-text.text-darken-2 {\n      color: #616161;\n    }\n    \n    .grey.darken-3 {\n      background-color: #424242;\n    }\n    \n    .grey-text.text-darken-3 {\n      color: #424242;\n    }\n    \n    .grey.darken-4 {\n      background-color: #212121;\n    }\n    \n    .grey-text.text-darken-4 {\n      color: #212121;\n    }\n    \n    .black {\n      background-color: #000000;\n    }\n    \n    .black-text {\n      color: #000000;\n    }\n    \n    .white {\n      background-color: #FFFFFF;\n    }\n    \n    .white-text {\n      color: #FFFFFF;\n    }\n    \n    .transparent {\n      background-color: transparent;\n    }\n    \n    .transparent-text {\n      color: transparent;\n    }\n    \n    /* Materialize Outline classes */\n    .indigo-outline {\n      outline-color: #3f51b5;\n    }\n    .blue-outline {\n      outline-color: #2962ff;\n    }\n    .amber-outline {\n      outline-color: #ffab00;\n    }\n    .green-border {\n      outline-color: #4caf50;\n    }\n    .teal-outline {\n      outline-color: #00bfa5;\n    }\n    .yellow-outline {\n      outline-color: #ffd600;\n    }\n    .grey-outline {\n      outline-color: #212121;\n    }\n    .cyan-outline {\n      outline-color: #00b8d4;\n    }\n    .orange-outline {\n      outline-color: #ff6d00;\n    }\n    .red-outline {\n      outline-color: #d50000;\n    }\n    .deep-orange-outline {\n      outline-color: #dd2c00;\n    }\n    .lime-outline {\n      outline-color: #aeea00;\n    }\n    .pink-outline {\n      outline-color: #c51162;\n    }\n    .purple-outline {\n      outline-color: #aa00ff;\n    }\n    .light-green-outline {\n      outline-color: #64dd17;\n    }\n    .light-blue-outline {\n      outline-color: #01579b;\n    }\n    .white-outline {\n      outline-color: #ffffff;\n    }\n    \n    /* Materialize Border classes */\n    .indigo-border {\n      border-color: #3f51b5;\n    }\n    .blue-border {\n      border-color: #2196F3;\n    }\n    .amber-border {\n      border-color: #ffc107;\n    }\n    .green-border {\n      border-color: #4caf50;\n    }\n    .teal-border {\n      border-color: #009688;\n    }\n    .yellow-border {\n      border-color: #ffeb3b;\n    }\n    .grey-border {\n      border-color: #9e9e9e;\n    }\n    .cyan-border {\n      border-color: #00bcd4;\n    }\n    .orange-border {\n      border-color: #ff9800;\n    }\n    .red-border {\n      border-color: #f44336;\n    }\n    .deep-orange-border {\n      border-color: #ff5722;\n    }\n    .lime-border {\n      border-color: #cddc39;\n    }\n    .pink-border {\n      border-color: #e91e63;\n    }\n    .purple-border {\n      border-color: #9c27b0;\n    }\n    .light-green-border {\n      border-color: #8bc34a;\n    }\n    .light-blue-border {\n      border-color: #03a9f4;\n    }\n    .white-border {\n      border-color: #ffffff;\n    }\n    /* Materialize accessible text variants */\n    .accessible-indigo-text {\n      color: #1a237e;\n    }\n    .accessible-green-text {\n      color: #1b5e20;\n    }\n    .accessible-purple-text {\n      color: #581663;\n    }\n    .accessible-cyan-text {\n      color: #006064;\n    }\n    .accessible-blue-text {\n      color: #085390;\n    }\n    .accessible-deep-orange-text {\n      color: #a72700;\n    }\n    .accessible-red-text {\n      color: #a41309;\n    }\n    .accessible-amber-text {\n      color: #833900;\n    }\n    .accessible-teal-text {\n      color: #00554d;\n    }\n    .accessible-orange-text {\n      color: #653c00;\n    }\n    .accessible-yellow-text {\n      color: #463f00;\n    }\n    .accessible-lime-text {\n      color: #474d0e;\n    }\n    .accessible-light-blue-text {\n      color: #025277;\n    }\n    .accessible-light-green-text {\n      color: #3c571d;\n    }\n    .accessible-pink-text {\n      color: #9d0f3f;\n    }\n    .accessible-grey-text {\n      color: #212121;\n    }\n    </style>\n    </custom-style>\n  </template>\n</dom-module>',document.head.appendChild(Ja),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({_template:ft`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:On.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Ro(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Ro(this.root).appendChild(this._img))}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new ya({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var i=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(i){var o=Ro(e.root||e);return o.insertBefore(i,o.childNodes[0]),e._svgIcon=i}return null},removeIcon:function(e){e._svgIcon&&(Ro(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return Ro(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,i){if(e){var o=e.cloneNode(!0),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),a=o.getAttribute("viewBox")||"0 0 "+t+" "+t,l="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&o.hasAttribute("mirror-in-rtl")&&(l+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),n.setAttribute("viewBox",a),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),n.style.cssText=l,n.appendChild(o).removeAttribute("id"),n}return null}});
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Xa=ft`<iron-iconset-svg name="av" size="24">
<svg><defs>
<g id="add-to-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z"></path></g>
<g id="airplay"><path d="M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="album"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></g>
<g id="art-track"><path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"></path></g>
<g id="av-timer"><path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"></path></g>
<g id="branding-watermark"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z"></path></g>
<g id="call-to-action"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"></path></g>
<g id="closed-caption"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"></path></g>
<g id="equalizer"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path></g>
<g id="explicit"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"></path></g>
<g id="fast-forward"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path></g>
<g id="fast-rewind"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path></g>
<g id="featured-play-list"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"></path></g>
<g id="featured-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"></path></g>
<g id="fiber-dvr"><path d="M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z"></path></g>
<g id="fiber-manual-record"><circle cx="12" cy="12" r="8"></circle></g>
<g id="fiber-new"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"></path></g>
<g id="fiber-pin"><path d="M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z"></path></g>
<g id="fiber-smart-record"><g><circle cx="9" cy="12" r="8"></circle><path d="M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"></path></g></g>
<g id="forward-10"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="forward-30"><path d="M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z"></path></g>
<g id="forward-5"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z"></path></g>
<g id="games"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></g>
<g id="hd"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path></g>
<g id="hearing"><path d="M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"></path></g>
<g id="high-quality"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"></path></g>
<g id="library-add"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="library-books"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path></g>
<g id="library-music"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path></g>
<g id="loop"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></g>
<g id="mic"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-none"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-off"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path></g>
<g id="movie"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path></g>
<g id="music-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"></path></g>
<g id="new-releases"><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="not-interested"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></g>
<g id="note"><path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"></path></g>
<g id="pause"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></g>
<g id="pause-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path></g>
<g id="pause-circle-outline"><path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path></g>
<g id="play-arrow"><path d="M8 5v14l11-7z"></path></g>
<g id="play-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></g>
<g id="play-circle-outline"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="playlist-add"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path></g>
<g id="playlist-add-check"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"></path></g>
<g id="playlist-play"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"></path></g>
<g id="queue"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="queue-music"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"></path></g>
<g id="queue-play-next"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"></path></g>
<g id="radio"><path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"></path></g>
<g id="recent-actors"><path d="M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"></path></g>
<g id="remove-from-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z"></path></g>
<g id="repeat"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path></g>
<g id="repeat-one"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"></path></g>
<g id="replay"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></g>
<g id="replay-10"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-30"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-5"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z"></path></g>
<g id="shuffle"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"></path></g>
<g id="skip-next"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></g>
<g id="skip-previous"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></g>
<g id="slow-motion-video"><path d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"></path></g>
<g id="snooze"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z"></path></g>
<g id="sort-by-alpha"><path d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"></path></g>
<g id="stop"><path d="M6 6h12v12H6z"></path></g>
<g id="subscriptions"><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"></path></g>
<g id="subtitles"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"></path></g>
<g id="surround-sound"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="video-call"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path></g>
<g id="video-label"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"></path></g>
<g id="video-library"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g>
<g id="videocam"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></g>
<g id="videocam-off"><path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"></path></g>
<g id="volume-down"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"></path></g>
<g id="volume-mute"><path d="M7 9v6h4l5 5V4l-5 5H7z"></path></g>
<g id="volume-off"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></g>
<g id="volume-up"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g>
<g id="web"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></g>
<g id="web-asset"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Xa.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Za=ft`<iron-iconset-svg name="communication" size="24">
<svg><defs>
<g id="business"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></g>
<g id="call"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></g>
<g id="call-end"><path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"></path></g>
<g id="call-made"><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"></path></g>
<g id="call-merge"><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"></path></g>
<g id="call-missed"><path d="M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z"></path></g>
<g id="call-missed-outgoing"><path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"></path></g>
<g id="call-received"><path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"></path></g>
<g id="call-split"><path d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z"></path></g>
<g id="chat"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"></path></g>
<g id="chat-bubble"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path></g>
<g id="chat-bubble-outline"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path></g>
<g id="clear-all"><path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"></path></g>
<g id="comment"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path></g>
<g id="contact-mail"><path d="M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z"></path></g>
<g id="contact-phone"><path d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"></path></g>
<g id="contacts"><path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"></path></g>
<g id="dialer-sip"><path d="M17 3h-1v5h1V3zm-2 2h-2V4h2V3h-3v3h2v1h-2v1h3V5zm3-2v5h1V6h2V3h-3zm2 2h-1V4h1v1zm0 10.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"></path></g>
<g id="dialpad"><path d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="email"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="forum"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="import-contacts"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path></g>
<g id="import-export"><path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"></path></g>
<g id="invert-colors-off"><path d="M20.65 20.87l-2.35-2.35-6.3-6.29-3.56-3.57-1.42-1.41L4.27 4.5 3 5.77l2.78 2.78c-2.55 3.14-2.36 7.76.56 10.69C7.9 20.8 9.95 21.58 12 21.58c1.79 0 3.57-.59 5.03-1.78l2.7 2.7L21 21.23l-.35-.36zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59c0-1.32.43-2.57 1.21-3.6L12 14.77v4.82zM12 5.1v4.58l7.25 7.26c1.37-2.96.84-6.57-1.6-9.01L12 2.27l-3.7 3.7 1.41 1.41L12 5.1z"></path></g>
<g id="live-help"><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="location-off"><path d="M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7-1.98 0-3.76.83-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z"></path></g>
<g id="location-on"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="mail-outline"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></g>
<g id="message"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path></g>
<g id="no-sim"><path d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"></path></g>
<g id="phone"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></g>
<g id="phonelink-erase"><path d="M13 8.2l-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"></path></g>
<g id="phonelink-lock"><path d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8.2 10V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3zm-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V11z"></path></g>
<g id="phonelink-ring"><path d="M20.1 7.7l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3zM14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H4V4h10v16z"></path></g>
<g id="phonelink-setup"><path d="M11.8 12.5v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.3-.2H7c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.3-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.2-.1.3-.1.4l1 1.7c.1.1.2.2.3.1l1.4-.4c.3.2.6.4.9.5l.2 1.3c-.1.1.1.2.2.2h2c.1 0 .2-.1.3-.2l.2-1.3c.3-.1.6-.3.9-.5l1.3.5c.1 0 .2 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.9zM8 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"></path></g>
<g id="portable-wifi-off"><path d="M17.56 14.24c.28-.69.44-1.45.44-2.24 0-3.31-2.69-6-6-6-.79 0-1.55.16-2.24.44l1.62 1.62c.2-.03.41-.06.62-.06 2.21 0 4 1.79 4 4 0 .21-.02.42-.05.63l1.61 1.61zM12 4c4.42 0 8 3.58 8 8 0 1.35-.35 2.62-.95 3.74l1.47 1.47C21.46 15.69 22 13.91 22 12c0-5.52-4.48-10-10-10-1.91 0-3.69.55-5.21 1.47l1.46 1.46C9.37 4.34 10.65 4 12 4zM3.27 2.5L2 3.77l2.1 2.1C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02.01.01 7.51 7.51L21 20.23 4.27 3.5l-1-1z"></path></g>
<g id="present-to-all"><path d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z"></path></g>
<g id="ring-volume"><path d="M23.71 16.67C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.66 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.27-.11-.52-.29-.7zM21.16 6.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM13 2h-2v5h2V2zM6.4 9.81L7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55z"></path></g>
<g id="rss-feed"><circle cx="6.18" cy="17.82" r="2.18"></circle><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path></g>
<g id="screen-share"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z"></path></g>
<g id="speaker-phone"><path d="M7 7.07L8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07zM12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1zm2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13zM15 20H9v-8h6v8z"></path></g>
<g id="stay-current-landscape"><path d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"></path></g>
<g id="stay-current-portrait"><path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="stay-primary-landscape"><path d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"></path></g>
<g id="stay-primary-portrait"><path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="stop-screen-share"><path d="M21.22 18.02l2 2H24v-2h-2.78zm.77-2l.01-10c0-1.11-.9-2-2-2H7.22l5.23 5.23c.18-.04.36-.07.55-.1V7.02l4 3.73-1.58 1.47 5.54 5.54c.61-.33 1.03-.99 1.03-1.74zM2.39 1.73L1.11 3l1.54 1.54c-.4.36-.65.89-.65 1.48v10c0 1.1.89 2 2 2H0v2h18.13l2.71 2.71 1.27-1.27L2.39 1.73zM7 15.02c.31-1.48.92-2.95 2.07-4.06l1.59 1.59c-1.54.38-2.7 1.18-3.66 2.47z"></path></g>
<g id="swap-calls"><path d="M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z"></path></g>
<g id="textsms"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"></path></g>
<g id="voicemail"><path d="M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5 2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6zm-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8 9 9.57 9 11.5 7.43 15 5.5 15zm13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8 22 9.57 22 11.5 20.43 15 18.5 15z"></path></g>
<g id="vpn-key"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Za.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Qa=ft`<iron-iconset-svg name="device" size="24">
<svg><defs>
<g id="access-alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="access-alarms"><path d="M22 5.7l-4.6-3.9-1.3 1.5 4.6 3.9L22 5.7zM7.9 3.4L6.6 1.9 2 5.7l1.3 1.5 4.6-3.8zM12.5 8H11v6l4.7 2.9.8-1.2-4-2.4V8zM12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"></path></g>
<g id="access-time"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="add-alarm"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="airplanemode-active"><path d="M10.18 9"></path><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></g>
<g id="airplanemode-inactive"><path d="M13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v3.68l7.83 7.83L21 16v-2l-8-5zM3 5.27l4.99 4.99L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-3.73L18.73 21 20 19.73 4.27 4 3 5.27z"></path></g>
<g id="battery-20"><path d="M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z"></path><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z"></path></g>
<g id="battery-30"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z"></path><path d="M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z"></path></g>
<g id="battery-50"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V13h10V5.33z"></path><path d="M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13H7z"></path></g>
<g id="battery-60"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z"></path><path d="M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z"></path></g>
<g id="battery-80"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h10V5.33z"></path><path d="M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9H7z"></path></g>
<g id="battery-90"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33z"></path><path d="M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7z"></path></g>
<g id="battery-alert"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z"></path></g>
<g id="battery-charging-20"><path d="M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z"></path><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"></path></g>
<g id="battery-charging-30"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v9.17h2L13 7v5.5h2l-1.07 2H17V5.33C17 4.6 16.4 4 15.67 4z"></path><path d="M11 20v-5.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07L11 20z"></path></g>
<g id="battery-charging-50"><path d="M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z"></path><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z"></path></g>
<g id="battery-charging-60"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h3.87L13 7v4h4V5.33C17 4.6 16.4 4 15.67 4z"></path><path d="M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11h-4v1.5z"></path></g>
<g id="battery-charging-80"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z"></path><path d="M13 12.5h2L11 20v-5.5H9L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4v3.5z"></path></g>
<g id="battery-charging-90"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z"></path><path d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z"></path></g>
<g id="battery-charging-full"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"></path></g>
<g id="battery-full"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"></path></g>
<g id="battery-std"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"></path></g>
<g id="battery-unknown"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zm-2.72 13.95h-1.9v-1.9h1.9v1.9zm1.35-5.26s-.38.42-.67.71c-.48.48-.83 1.15-.83 1.6h-1.6c0-.83.46-1.52.93-2l.93-.94c.27-.27.44-.65.44-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.7 1.69z"></path></g>
<g id="bluetooth"><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"></path></g>
<g id="bluetooth-connected"><path d="M7 12l-2-2-2 2 2 2 2-2zm10.71-4.29L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88zM19 10l-2 2 2 2 2-2-2-2z"></path></g>
<g id="bluetooth-disabled"><path d="M13 5.83l1.88 1.88-1.6 1.6 1.41 1.41 3.02-3.02L12 2h-1v5.03l2 2v-3.2zM5.41 4L4 5.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l4.29-4.29 2.3 2.29L20 18.59 5.41 4zM13 18.17v-3.76l1.88 1.88L13 18.17z"></path></g>
<g id="bluetooth-searching"><path d="M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z"></path></g>
<g id="brightness-auto"><path d="M10.85 12.65h2.3L12 9l-1.15 3.65zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9h-1.9z"></path></g>
<g id="brightness-high"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></g>
<g id="brightness-low"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></g>
<g id="brightness-medium"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></g>
<g id="data-usage"><path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"></path></g>
<g id="developer-mode"><path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"></path></g>
<g id="devices"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></g>
<g id="dvr"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z"></path></g>
<g id="gps-fixed"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="gps-not-fixed"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="gps-off"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z"></path></g>
<g id="graphic-eq"><path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"></path></g>
<g id="location-disabled"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z"></path></g>
<g id="location-searching"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="network-cell"><path fill-opacity=".3" d="M2 22h20V2z"></path><path d="M17 7L2 22h15z"></path></g>
<g id="network-wifi"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path><path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z"></path></g>
<g id="nfc"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM18 6h-5c-1.1 0-2 .9-2 2v2.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12V6z"></path></g>
<g id="screen-lock-landscape"><path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1z"></path></g>
<g id="screen-lock-portrait"><path d="M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"></path></g>
<g id="screen-lock-rotation"><path d="M23.25 12.77l-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75c-.59-.59-1.54-.59-2.12 0L2.75 7.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM8.47 20.48C5.2 18.94 2.86 15.76 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82-1.33 1.33zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5C21 1.12 19.88 0 18.5 0S16 1.12 16 2.5V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4v-.5z"></path></g>
<g id="screen-rotation"><path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"></path></g>
<g id="sd-storage"><path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"></path></g>
<g id="settings-system-daydream"><path d="M9 16h6.5c1.38 0 2.5-1.12 2.5-2.5S16.88 11 15.5 11h-.05c-.24-1.69-1.69-3-3.45-3-1.4 0-2.6.83-3.16 2.02h-.16C7.17 10.18 6 11.45 6 13c0 1.66 1.34 3 3 3zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="signal-cellular-0-bar"><path fill-opacity=".3" d="M2 22h20V2z"></path></g>
<g id="signal-cellular-1-bar"><path fill-opacity=".3" d="M2 22h20V2z"></path><path d="M12 12L2 22h10z"></path></g>
<g id="signal-cellular-2-bar"><path fill-opacity=".3" d="M2 22h20V2z"></path><path d="M14 10L2 22h12z"></path></g>
<g id="signal-cellular-3-bar"><path fill-opacity=".3" d="M2 22h20V2z"></path><path d="M17 7L2 22h15z"></path></g>
<g id="signal-cellular-4-bar"><path d="M2 22h20V2z"></path></g>
<g id="signal-cellular-connected-no-internet-0-bar"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"></path><path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z"></path></g>
<g id="signal-cellular-connected-no-internet-1-bar"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"></path><path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z"></path></g>
<g id="signal-cellular-connected-no-internet-2-bar"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"></path><path d="M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z"></path></g>
<g id="signal-cellular-connected-no-internet-3-bar"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"></path><path d="M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z"></path></g>
<g id="signal-cellular-connected-no-internet-4-bar"><path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"></path></g>
<g id="signal-cellular-no-sim"><path d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"></path></g>
<g id="signal-cellular-null"><path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"></path></g>
<g id="signal-cellular-off"><path d="M21 1l-8.59 8.59L21 18.18V1zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z"></path></g>
<g id="signal-wifi-0-bar"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path></g>
<g id="signal-wifi-1-bar"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path><path d="M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z"></path></g>
<g id="signal-wifi-1-bar-lock"><path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z"></path><path d="M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z" opacity=".3"></path><path d="M6.7 14.9l5.3 6.6 3.5-4.3v-2.6c0-.2 0-.5.1-.7-.9-.5-2.2-.9-3.6-.9-3 0-5.1 1.7-5.3 1.9z"></path></g>
<g id="signal-wifi-2-bar"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path><path d="M4.79 12.52l7.2 8.98H12l.01-.01 7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z"></path></g>
<g id="signal-wifi-2-bar-lock"><path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z"></path><path d="M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z" opacity=".3"></path><path d="M4.8 12.5l7.2 9 3.5-4.4v-2.6c0-1.3.5-2.5 1.4-3.4C15.6 10.5 14 10 12 10c-4.1 0-6.8 2.2-7.2 2.5z"></path></g>
<g id="signal-wifi-3-bar"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path><path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z"></path></g>
<g id="signal-wifi-3-bar-lock"><path opacity=".3" d="M12 3C5.3 3 .8 6.7.4 7l3.2 3.9L12 21.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7.3-.1.5-.2.8-.2.3-.1.6-.1.9-.1.4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4z"></path><path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-10 5.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7C17.3 9 14.9 8 12 8c-4.8 0-8 2.6-8.5 2.9"></path></g>
<g id="signal-wifi-4-bar"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path></g>
<g id="signal-wifi-4-bar-lock"><path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.4v-2.6z"></path></g>
<g id="signal-wifi-off"><path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"></path></g>
<g id="storage"><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"></path></g>
<g id="usb"><path d="M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95 0 1.22.99 2.2 2.2 2.2 1.21 0 2.2-.98 2.2-2.2 0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z"></path></g>
<g id="wallpaper"><path d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z"></path></g>
<g id="widgets"><path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"></path></g>
<g id="wifi-lock"><path d="M20.5 9.5c.28 0 .55.04.81.08L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l12 16 3.5-4.67V14.5c0-2.76 2.24-5 5-5zM23 16v-1.5c0-1.38-1.12-2.5-2.5-2.5S18 13.12 18 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z"></path></g>
<g id="wifi-tethering"><path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Qa.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const el=ft`<iron-iconset-svg name="editor" size="24">
<svg><defs>
<g id="attach-file"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></g>
<g id="attach-money"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path></g>
<g id="border-all"><path d="M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"></path></g>
<g id="border-bottom"><path d="M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z"></path></g>
<g id="border-clear"><path d="M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z"></path></g>
<g id="border-color"><path d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z"></path><path fill-opacity=".36" d="M0 20h24v4H0z"></path></g>
<g id="border-horizontal"><path d="M3 21h2v-2H3v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zm4 4h2v-2H7v2zM5 3H3v2h2V3zm4 0H7v2h2V3zm8 0h-2v2h2V3zm-4 4h-2v2h2V7zm0-4h-2v2h2V3zm6 14h2v-2h-2v2zm-8 4h2v-2h-2v2zm-8-8h18v-2H3v2zM19 3v2h2V3h-2zm0 6h2V7h-2v2zm-8 8h2v-2h-2v2zm4 4h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="border-inner"><path d="M3 21h2v-2H3v2zm4 0h2v-2H7v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm12 0h-2v2h2V3zm2 6h2V7h-2v2zm0-6v2h2V3h-2zm-4 18h2v-2h-2v2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3zm6 18h2v-2h-2v2zm0-4h2v-2h-2v2z"></path></g>
<g id="border-left"><path d="M11 21h2v-2h-2v2zm0-4h2v-2h-2v2zm0-12h2V3h-2v2zm0 4h2V7h-2v2zm0 4h2v-2h-2v2zm-4 8h2v-2H7v2zM7 5h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2V3H3v18zM19 9h2V7h-2v2zm-4 12h2v-2h-2v2zm4-4h2v-2h-2v2zm0-14v2h2V3h-2zm0 10h2v-2h-2v2zm0 8h2v-2h-2v2zm-4-8h2v-2h-2v2zm0-8h2V3h-2v2z"></path></g>
<g id="border-outer"><path d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z"></path></g>
<g id="border-right"><path d="M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z"></path></g>
<g id="border-style"><path d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z"></path></g>
<g id="border-top"><path d="M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z"></path></g>
<g id="border-vertical"><path d="M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z"></path></g>
<g id="bubble-chart"><circle cx="7.2" cy="14.4" r="3.2"></circle><circle cx="14.8" cy="18" r="2"></circle><circle cx="15.2" cy="8.8" r="4.8"></circle></g>
<g id="drag-handle"><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"></path></g>
<g id="format-align-center"><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"></path></g>
<g id="format-align-justify"><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"></path></g>
<g id="format-align-left"><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></path></g>
<g id="format-align-right"><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"></path></g>
<g id="format-bold"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path></g>
<g id="format-clear"><path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"></path></g>
<g id="format-color-fill"><path d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"></path><path fill-opacity=".36" d="M0 20h24v4H0z"></path></g>
<g id="format-color-reset"><path d="M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31zm-.88 3.12L12.5 12.5 5.27 5.27 4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.96-1.5l2.63 2.63 1.27-1.27-2.74-2.74z"></path></g>
<g id="format-color-text"><path fill-opacity=".36" d="M0 20h24v4H0z"></path><path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"></path></g>
<g id="format-indent-decrease"><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"></path></g>
<g id="format-indent-increase"><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"></path></g>
<g id="format-italic"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"></path></g>
<g id="format-line-spacing"><path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"></path></g>
<g id="format-list-bulleted"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"></path></g>
<g id="format-list-numbered"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"></path></g>
<g id="format-paint"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"></path></g>
<g id="format-quote"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></g>
<g id="format-shapes"><path d="M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"></path></g>
<g id="format-size"><path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"></path></g>
<g id="format-strikethrough"><path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"></path></g>
<g id="format-textdirection-l-to-r"><path d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z"></path></g>
<g id="format-textdirection-r-to-l"><path d="M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z"></path></g>
<g id="format-underlined"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"></path></g>
<g id="functions"><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"></path></g>
<g id="highlight"><path d="M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z"></path></g>
<g id="insert-chart"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="insert-comment"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path></g>
<g id="insert-drive-file"><path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"></path></g>
<g id="insert-emoticon"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="insert-invitation"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="insert-link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="insert-photo"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></g>
<g id="linear-scale"><path d="M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z"></path></g>
<g id="merge-type"><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"></path></g>
<g id="mode-comment"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"></path></g>
<g id="mode-edit"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="monetization-on"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path></g>
<g id="money-off"><path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06L4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z"></path></g>
<g id="multiline-chart"><path d="M22 6.92l-1.41-1.41-2.85 3.21C15.68 6.4 12.83 5 9.61 5 6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-4-4L2 16.99l1.5 1.5 6-6.01 4 4 4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 6.92z"></path></g>
<g id="pie-chart"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"></path></g>
<g id="pie-chart-outlined"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z"></path></g>
<g id="publish"><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"></path></g>
<g id="short-text"><path d="M4 9h16v2H4zm0 4h10v2H4z"></path></g>
<g id="show-chart"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"></path></g>
<g id="space-bar"><path d="M18 9v4H6V9H4v6h16V9z"></path></g>
<g id="strikethrough-s"><path d="M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43.25.55.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13-.29.09-.53.21-.72.36-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51.21.17.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75-.14-.31-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58.16.45.37.85.65 1.21.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21z"></path></g>
<g id="text-fields"><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"></path></g>
<g id="title"><path d="M5 4v3h5.5v12h3V7H19V4z"></path></g>
<g id="vertical-align-bottom"><path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"></path></g>
<g id="vertical-align-center"><path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"></path></g>
<g id="vertical-align-top"><path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"></path></g>
<g id="wrap-text"><path d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(el.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const tl=ft`<iron-iconset-svg name="hardware" size="24">
<svg><defs>
<g id="cast"><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"></path></g>
<g id="cast-connected"><path d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="computer"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path></g>
<g id="desktop-mac"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"></path></g>
<g id="desktop-windows"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"></path></g>
<g id="developer-board"><path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"></path></g>
<g id="device-hub"><path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"></path></g>
<g id="devices-other"><path d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z"></path></g>
<g id="dock"><path d="M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z"></path></g>
<g id="gamepad"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></g>
<g id="headset"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"></path></g>
<g id="headset-mic"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z"></path></g>
<g id="keyboard"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"></path></g>
<g id="keyboard-arrow-down"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></g>
<g id="keyboard-arrow-left"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></g>
<g id="keyboard-arrow-right"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></g>
<g id="keyboard-arrow-up"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></g>
<g id="keyboard-backspace"><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"></path></g>
<g id="keyboard-capslock"><path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z"></path></g>
<g id="keyboard-hide"><path d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 3h2v2h-2V6zm0 3h2v2h-2V9zM8 6h2v2H8V6zm0 3h2v2H8V9zm-1 2H5V9h2v2zm0-3H5V6h2v2zm9 7H8v-2h8v2zm0-4h-2V9h2v2zm0-3h-2V6h2v2zm3 3h-2V9h2v2zm0-3h-2V6h2v2zm-7 15l4-4H8l4 4z"></path></g>
<g id="keyboard-return"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></g>
<g id="keyboard-tab"><path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"></path></g>
<g id="keyboard-voice"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="laptop"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path></g>
<g id="laptop-chromebook"><path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"></path></g>
<g id="laptop-mac"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="laptop-windows"><path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"></path></g>
<g id="memory"><path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path></g>
<g id="mouse"><path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"></path></g>
<g id="phone-android"><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"></path></g>
<g id="phone-iphone"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path></g>
<g id="phonelink"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></g>
<g id="phonelink-off"><path d="M22 6V4H6.82l2 2H22zM1.92 1.65L.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.27-1.27L3.89 3.62 1.92 1.65zM4 6.27L14.73 17H4V6.27zM23 8h-6c-.55 0-1 .45-1 1v4.18l2 2V10h4v7h-2.18l3 3H23c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z"></path></g>
<g id="power-input"><path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"></path></g>
<g id="router"><path d="M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z"></path></g>
<g id="scanner"><path d="M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z"></path></g>
<g id="security"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></g>
<g id="sim-card"><path d="M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z"></path></g>
<g id="smartphone"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="speaker"><path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="speaker-group"><path d="M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM14 3c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path><circle cx="14" cy="12.5" r="2.5"></circle><path d="M6 5H4v16c0 1.1.89 2 2 2h10v-2H6V5z"></path></g>
<g id="tablet"><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"></path></g>
<g id="tablet-android"><path d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"></path></g>
<g id="tablet-mac"><path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"></path></g>
<g id="toys"><path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z"></path></g>
<g id="tv"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path></g>
<g id="videogame-asset"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="watch"><path d="M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(tl.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const il=ft`<iron-iconset-svg name="image" size="24">
<svg><defs>
<g id="add-a-photo"><path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"></path></g>
<g id="add-to-photos"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="adjust"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"></path></g>
<g id="assistant"><path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z"></path></g>
<g id="assistant-photo"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="audiotrack"><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"></path></g>
<g id="blur-circular"><path d="M10 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-3-3c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm3 6c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-4c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></g>
<g id="blur-linear"><path d="M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"></path></g>
<g id="blur-off"><path d="M14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-.2 4.48l.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28zM14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm11 7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 13.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM2.5 5.27l3.78 3.78L6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47 0 .83.67 1.5 1.5 1.5.74 0 1.36-.54 1.47-1.25l2.81 2.81c-.09-.03-.18-.06-.28-.06-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l3.78 3.78L20 20.23 3.77 4 2.5 5.27zM10 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm11-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 11c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"></path></g>
<g id="blur-on"><path d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="brightness-1"><circle cx="12" cy="12" r="10"></circle></g>
<g id="brightness-2"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></g>
<g id="brightness-3"><path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"></path></g>
<g id="brightness-4"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></g>
<g id="brightness-5"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></g>
<g id="brightness-6"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></g>
<g id="brightness-7"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></g>
<g id="broken-image"><path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"></path></g>
<g id="brush"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></g>
<g id="burst-mode"><path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z"></path></g>
<g id="camera"><path d="M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"></path></g>
<g id="camera-alt"><circle cx="12" cy="12" r="3.2"></circle><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></g>
<g id="camera-front"><path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8zm5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2z"></path></g>
<g id="camera-rear"><path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z"></path></g>
<g id="camera-roll"><path d="M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z"></path></g>
<g id="center-focus-strong"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"></path></g>
<g id="center-focus-weak"><path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="collections"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path></g>
<g id="collections-bookmark"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z"></path></g>
<g id="color-lens"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="colorize"><path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"></path></g>
<g id="compare"><path d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="control-point"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="control-point-duplicate"><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></g>
<g id="crop"><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"></path></g>
<g id="crop-16-9"><path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"></path></g>
<g id="crop-3-2"><path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z"></path></g>
<g id="crop-5-4"><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"></path></g>
<g id="crop-7-5"><path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"></path></g>
<g id="crop-din"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path></g>
<g id="crop-free"><path d="M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="crop-landscape"><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"></path></g>
<g id="crop-original"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"></path></g>
<g id="crop-portrait"><path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"></path></g>
<g id="crop-rotate"><path d="M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z"></path></g>
<g id="crop-square"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"></path></g>
<g id="dehaze"><path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"></path></g>
<g id="details"><path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"></path></g>
<g id="edit"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="exposure"><path d="M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z"></path></g>
<g id="exposure-neg-1"><path d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z"></path></g>
<g id="exposure-neg-2"><path d="M15.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71h-5.95zM2 11v2h8v-2H2z"></path></g>
<g id="exposure-plus-1"><path d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z"></path></g>
<g id="exposure-plus-2"><path d="M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z"></path></g>
<g id="exposure-zero"><path d="M16.14 12.5c0 1-.1 1.85-.3 2.55-.2.7-.48 1.27-.83 1.7-.36.44-.79.75-1.3.95-.51.2-1.07.3-1.7.3-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95-.36-.44-.65-1.01-.85-1.7-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19-.32 0-.61.06-.86.18s-.47.31-.64.58c-.17.27-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19c.33 0 .62-.06.87-.19s.46-.33.63-.61c.17-.28.3-.64.39-1.09.09-.45.13-.99.13-1.62v-2.66z"></path></g>
<g id="filter"><path d="M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path></g>
<g id="filter-1"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path></g>
<g id="filter-2"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z"></path></g>
<g id="filter-3"><path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-4v2h4v2h-2v2h2v2h-4v2h4c1.1 0 2-.89 2-2z"></path></g>
<g id="filter-4"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path></g>
<g id="filter-5"><path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-2c0-1.11-.9-2-2-2h-2V7h4V5h-6v6h4v2h-4v2h4c1.1 0 2-.89 2-2z"></path></g>
<g id="filter-6"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2z"></path></g>
<g id="filter-7"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2l4-8V5h-6v2h4l-4 8h2z"></path></g>
<g id="filter-8"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z"></path></g>
<g id="filter-9"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM15 5h-2c-1.1 0-2 .89-2 2v2c0 1.11.9 2 2 2h2v2h-4v2h4c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2zm0 4h-2V7h2v2z"></path></g>
<g id="filter-9-plus"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 7V8c0-1.11-.9-2-2-2h-1c-1.1 0-2 .89-2 2v1c0 1.11.9 2 2 2h1v1H9v2h3c1.1 0 2-.89 2-2zm-3-3V8h1v1h-1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z"></path></g>
<g id="filter-b-and-w"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h7v14z"></path></g>
<g id="filter-center-focus"><path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="filter-drama"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"></path></g>
<g id="filter-frames"><path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12"></path></g>
<g id="filter-hdr"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path></g>
<g id="filter-none"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path></g>
<g id="filter-tilt-shift"><path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z"></path></g>
<g id="filter-vintage"><path d="M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-1.79-1.03-4.07-1.11-6 0-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-1.92-1.11-4.2-1.03-6 0 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19 1.79 1.03 4.07 1.11 6 0 .28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54 1.92 1.11 4.2 1.03 6 0-.01-2.07-1.08-4.08-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></g>
<g id="flare"><path d="M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z"></path></g>
<g id="flash-auto"><path d="M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z"></path></g>
<g id="flash-off"><path d="M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z"></path></g>
<g id="flash-on"><path d="M7 2v11h3v9l7-12h-4l4-8z"></path></g>
<g id="flip"><path d="M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z"></path></g>
<g id="gradient"><path d="M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"></path></g>
<g id="grain"><path d="M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="grid-off"><path d="M8 4v1.45l2 2V4h4v4h-3.45l2 2H14v1.45l2 2V10h4v4h-3.45l2 2H20v1.45l2 2V4c0-1.1-.9-2-2-2H4.55l2 2H8zm8 0h4v4h-4V4zM1.27 1.27L0 2.55l2 2V20c0 1.1.9 2 2 2h15.46l2 2 1.27-1.27L1.27 1.27zM10 12.55L11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.54V20zm2 0v-1.46L17.46 20H16z"></path></g>
<g id="grid-on"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"></path></g>
<g id="hdr-off"><path d="M17.5 15v-2h1.1l.9 2H21l-.9-2.1c.5-.2.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5H16v4.9l1.1 1.1h.4zm0-4.5h2v1h-2v-1zm-4.5 0v.4l1.5 1.5v-1.9c0-.8-.7-1.5-1.5-1.5h-1.9l1.5 1.5h.4zm-3.5-1l-7-7-1.1 1L6.9 9h-.4v2h-2V9H3v6h1.5v-2.5h2V15H8v-4.9l1.5 1.5V15h3.4l7.6 7.6 1.1-1.1-12.1-12z"></path></g>
<g id="hdr-on"><path d="M21 11.5v-1c0-.8-.7-1.5-1.5-1.5H16v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5v2zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5h-2v-3h2v3z"></path></g>
<g id="hdr-strong"><path d="M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="hdr-weak"><path d="M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12-2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></g>
<g id="healing"><path d="M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z"></path></g>
<g id="image"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></g>
<g id="image-aspect-ratio"><path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"></path></g>
<g id="iso"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z"></path></g>
<g id="landscape"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path></g>
<g id="leak-add"><path d="M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 18h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zm8 0h3v-3c-1.66 0-3 1.34-3 3zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z"></path></g>
<g id="leak-remove"><path d="M10 3H8c0 .37-.04.72-.12 1.06l1.59 1.59C9.81 4.84 10 3.94 10 3zM3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97C7.14 11.24 5.16 12 3 12v2c2.71 0 5.19-.99 7.11-2.62l2.5 2.5C10.99 15.81 10 18.29 10 21h2c0-2.16.76-4.14 2.03-5.69l1.43 1.43C14.55 17.91 14 19.39 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21 21 19.73 4.27 3 3 4.27zM14 3h-2c0 1.5-.37 2.91-1.02 4.16l1.46 1.46C13.42 6.98 14 5.06 14 3zm5.94 13.12c.34-.08.69-.12 1.06-.12v-2c-.94 0-1.84.19-2.66.52l1.6 1.6zm-4.56-4.56l1.46 1.46C18.09 12.37 19.5 12 21 12v-2c-2.06 0-3.98.58-5.62 1.56z"></path></g>
<g id="lens"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path></g>
<g id="linked-camera"><circle cx="12" cy="14" r="3.2"></circle><path d="M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6v1.33M16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33V6"></path><path d="M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-5zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></g>
<g id="looks"><path d="M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="looks-3"><path d="M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15c0 1.11-.9 2-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4c1.1 0 2 .89 2 2v1.5z"></path></g>
<g id="looks-4"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z"></path></g>
<g id="looks-5"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2H9v-2h4v-2H9V7h6v2z"></path></g>
<g id="looks-6"><path d="M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2V9c0-1.11.9-2 2-2h4v2z"></path></g>
<g id="looks-one"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"></path></g>
<g id="looks-two"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.11-.9 2-2 2h-2v2h4v2H9v-4c0-1.11.9-2 2-2h2V9H9V7h4c1.1 0 2 .89 2 2v2z"></path></g>
<g id="loupe"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="monochrome-photos"><path d="M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z"></path></g>
<g id="movie-creation"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path></g>
<g id="movie-filter"><path d="M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z"></path></g>
<g id="music-note"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></g>
<g id="nature"><path d="M13 16.12c3.47-.41 6.17-3.36 6.17-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88z"></path></g>
<g id="nature-people"><path d="M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z"></path></g>
<g id="navigate-before"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="navigate-next"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="palette"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="panorama"><path d="M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z"></path></g>
<g id="panorama-fish-eye"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="panorama-horizontal"><path d="M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16-2.72 0-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7c-3.09 0-6.18-.55-9.12-1.64-.11-.04-.22-.06-.31-.06-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64 3.09 0 6.18.55 9.12 1.64.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63z"></path></g>
<g id="panorama-vertical"><path d="M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12 0-3.09.55-6.18 1.64-9.12.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12c0 3.09-.55 6.18-1.64 9.12-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31zM6.54 20c.77-2.6 1.16-5.28 1.16-8 0-2.72-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8 0 2.72.39 5.4 1.16 8H6.54z"></path></g>
<g id="panorama-wide-angle"><path d="M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36 0 1.78-.24 3.58-.71 5.36-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12c0-1.78.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z"></path></g>
<g id="photo"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></g>
<g id="photo-album"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.86L18 19H6z"></path></g>
<g id="photo-camera"><circle cx="12" cy="12" r="3.2"></circle><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></g>
<g id="photo-filter"><path d="M19.02 10v9H5V5h9V3H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2zM17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z"></path></g>
<g id="photo-library"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path></g>
<g id="photo-size-select-actual"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"></path></g>
<g id="photo-size-select-large"><path d="M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8l2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z"></path></g>
<g id="photo-size-select-small"><path d="M23 15h-2v2h2v-2zm0-4h-2v2h2v-2zm0 8h-2v2c1 0 2-1 2-2zM15 3h-2v2h2V3zm8 4h-2v2h2V7zm-2-4v2h2c0-1-1-2-2-2zM3 21h8v-6H1v4c0 1.1.9 2 2 2zM3 7H1v2h2V7zm12 12h-2v2h2v-2zm4-16h-2v2h2V3zm0 16h-2v2h2v-2zM3 3C2 3 1 4 1 5h2V3zm0 8H1v2h2v-2zm8-8H9v2h2V3zM7 3H5v2h2V3z"></path></g>
<g id="picture-as-pdf"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"></path></g>
<g id="portrait"><path d="M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path></g>
<g id="remove-red-eye"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="rotate-90-degrees-ccw"><path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"></path></g>
<g id="rotate-left"><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"></path></g>
<g id="rotate-right"><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"></path></g>
<g id="slideshow"><path d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path></g>
<g id="straighten"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"></path></g>
<g id="style"><path d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"></path></g>
<g id="switch-camera"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"></path></g>
<g id="switch-video"><path d="M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"></path></g>
<g id="tag-faces"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="texture"><path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"></path></g>
<g id="timelapse"><path d="M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="timer"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="timer-10"><path d="M0 7.72V9.4l3-1V18h2V6h-.25L0 7.72zm23.78 6.65c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39 0-.14.03-.28.09-.41.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59C21.49 9.07 21 9 20.46 9c-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.69.23.96c.15.28.36.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02zm-9.96-7.32c-.34-.4-.75-.7-1.23-.88-.47-.18-1.01-.27-1.59-.27-.58 0-1.11.09-1.59.27-.48.18-.89.47-1.23.88-.34.41-.6.93-.79 1.59-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39.19.66.45 1.19.8 1.6.34.41.75.71 1.23.89.48.18 1.01.28 1.59.28.59 0 1.12-.09 1.59-.28.48-.18.88-.48 1.22-.89.34-.41.6-.94.78-1.6.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39-.18-.66-.44-1.19-.78-1.59zm-.92 6.17c0 .6-.04 1.11-.12 1.53-.08.42-.2.76-.36 1.02-.16.26-.36.45-.59.57-.23.12-.51.18-.82.18-.3 0-.58-.06-.82-.18s-.44-.31-.6-.57c-.16-.26-.29-.6-.38-1.02-.09-.42-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52.09-.41.21-.74.38-1 .16-.25.36-.43.6-.55.24-.11.51-.17.81-.17.31 0 .58.06.81.17.24.11.44.29.6.55.16.25.29.58.37.99.08.41.13.92.13 1.52v2.51z"></path></g>
<g id="timer-3"><path d="M11.61 12.97c-.16-.24-.36-.46-.62-.65-.25-.19-.56-.35-.93-.48.3-.14.57-.3.8-.5.23-.2.42-.41.57-.64.15-.23.27-.46.34-.71.08-.24.11-.49.11-.73 0-.55-.09-1.04-.28-1.46-.18-.42-.44-.77-.78-1.06-.33-.28-.73-.5-1.2-.64-.45-.13-.97-.2-1.53-.2-.55 0-1.06.08-1.52.24-.47.17-.87.4-1.2.69-.33.29-.6.63-.78 1.03-.2.39-.29.83-.29 1.29h1.98c0-.26.05-.49.14-.69.09-.2.22-.38.38-.52.17-.14.36-.25.58-.33.22-.08.46-.12.73-.12.61 0 1.06.16 1.36.47.3.31.44.75.44 1.32 0 .27-.04.52-.12.74-.08.22-.21.41-.38.57-.17.16-.38.28-.63.37-.25.09-.55.13-.89.13H6.72v1.57H7.9c.34 0 .64.04.91.11.27.08.5.19.69.35.19.16.34.36.44.61.1.24.16.54.16.87 0 .62-.18 1.09-.53 1.42-.35.33-.84.49-1.45.49-.29 0-.56-.04-.8-.13-.24-.08-.44-.2-.61-.36-.17-.16-.3-.34-.39-.56-.09-.22-.14-.46-.14-.72H4.19c0 .55.11 1.03.32 1.45.21.42.5.77.86 1.05s.77.49 1.24.63.96.21 1.48.21c.57 0 1.09-.08 1.58-.23.49-.15.91-.38 1.26-.68.36-.3.64-.66.84-1.1.2-.43.3-.93.3-1.48 0-.29-.04-.58-.11-.86-.08-.25-.19-.51-.35-.76zm9.26 1.4c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39s.03-.28.09-.41c.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59-.43-.15-.92-.22-1.46-.22-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.68.23.96c.15.28.37.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02z"></path></g>
<g id="timer-off"><path d="M19.04 4.55l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.83 0-3.53.55-4.95 1.48l1.46 1.46C9.53 6.35 10.73 6 12 6c3.87 0 7 3.13 7 7 0 1.27-.35 2.47-.94 3.49l1.45 1.45C20.45 16.53 21 14.83 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42-1.41-1.42zM15 1H9v2h6V1zm-4 8.44l2 2V8h-2v1.44zM3.02 4L1.75 5.27 4.5 8.03C3.55 9.45 3 11.16 3 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.27-1.27-7.71-7.71L3.02 4zM12 20c-3.87 0-7-3.13-7-7 0-1.28.35-2.48.95-3.52l9.56 9.56c-1.03.61-2.23.96-3.51.96z"></path></g>
<g id="tonality"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"></path></g>
<g id="transform"><path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z"></path></g>
<g id="tune"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></g>
<g id="view-comfy"><path d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z"></path></g>
<g id="view-compact"><path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"></path></g>
<g id="vignette"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z"></path></g>
<g id="wb-auto"><path d="M6.85 12.65h2.3L8 9l-1.15 3.65zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-11.7 9l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9h-1.9z"></path></g>
<g id="wb-cloudy"><path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path></g>
<g id="wb-incandescent"><path d="M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z"></path></g>
<g id="wb-iridescent"><path d="M5 14.5h14v-6H5v6zM11 .55V3.5h2V.55h-2zm8.04 2.5l-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 22.45V19.5h-2v2.95h2zm7.45-3.91l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79-1.41 1.41zm1.41 15.49l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z"></path></g>
<g id="wb-sunny"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(il.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ol=ft`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(ol.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const nl=ft`<iron-iconset-svg name="maps" size="24">
<svg><defs>
<g id="add-location"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z"></path></g>
<g id="beenhere"><path d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"></path></g>
<g id="directions"><path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path></g>
<g id="directions-bike"><path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"></path></g>
<g id="directions-boat"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"></path></g>
<g id="directions-bus"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"></path></g>
<g id="directions-car"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></g>
<g id="directions-railway"><path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z"></path></g>
<g id="directions-run"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"></path></g>
<g id="directions-subway"><path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"></path></g>
<g id="directions-transit"><path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"></path></g>
<g id="directions-walk"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"></path></g>
<g id="edit-location"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z"></path></g>
<g id="ev-station"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z"></path></g>
<g id="flight"><path d="M10.18 9"></path><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></g>
<g id="hotel"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path></g>
<g id="layers"><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"></path></g>
<g id="layers-clear"><path d="M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z"></path></g>
<g id="local-activity"><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"></path></g>
<g id="local-airport"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></g>
<g id="local-atm"><path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"></path></g>
<g id="local-bar"><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"></path></g>
<g id="local-cafe"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"></path></g>
<g id="local-car-wash"><path d="M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z"></path></g>
<g id="local-convenience-store"><path d="M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z"></path></g>
<g id="local-dining"><path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path></g>
<g id="local-drink"><path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"></path></g>
<g id="local-florist"><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"></path></g>
<g id="local-gas-station"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="local-grocery-store"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="local-hospital"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"></path></g>
<g id="local-hotel"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path></g>
<g id="local-laundry-service"><path d="M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></g>
<g id="local-library"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></g>
<g id="local-mall"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"></path></g>
<g id="local-movies"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="local-offer"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path></g>
<g id="local-parking"><path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"></path></g>
<g id="local-pharmacy"><path d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"></path></g>
<g id="local-phone"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></g>
<g id="local-pizza"><path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="local-play"><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"></path></g>
<g id="local-post-office"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="local-printshop"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="local-see"><circle cx="12" cy="12" r="3.2"></circle><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></g>
<g id="local-shipping"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="local-taxi"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></g>
<g id="map"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"></path></g>
<g id="my-location"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="navigation"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></g>
<g id="near-me"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"></path></g>
<g id="person-pin"><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"></path></g>
<g id="person-pin-circle"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15z"></path></g>
<g id="pin-drop"><path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z"></path></g>
<g id="place"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rate-review"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"></path></g>
<g id="restaurant"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"></path></g>
<g id="restaurant-menu"><path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path></g>
<g id="satellite"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z"></path></g>
<g id="store-mall-directory"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="streetview"><path d="M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z"></path><circle cx="18" cy="6" r="5"></circle><path d="M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z"></path></g>
<g id="subway"><circle cx="15.5" cy="16" r="1"></circle><circle cx="8.5" cy="16" r="1"></circle><path d="M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z"></path></g>
<g id="terrain"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path></g>
<g id="traffic"><path d="M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2 0 1.1-.89 2-2 2z"></path></g>
<g id="train"><path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="tram"><path d="M19 16.94V8.5c0-2.79-2.61-3.4-6.01-3.49l.76-1.51H17V2H7v1.5h4.75l-.76 1.52C7.86 5.11 5 5.73 5 8.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06zm-7 1.56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z"></path></g>
<g id="transfer-within-a-station"><path d="M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5 19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75"></path></g>
<g id="zoom-out-map"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(nl.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const al=ft`<iron-iconset-svg name="notification" size="24">
<svg><defs>
<g id="adb"><path d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="airline-seat-flat"><path d="M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9c1.16-1.19 1.14-3.08-.04-4.24-1.19-1.16-3.08-1.14-4.24.04-1.16 1.19-1.14 3.08.04 4.24 1.19 1.16 3.08 1.14 4.24-.04z"></path></g>
<g id="airline-seat-flat-angled"><path d="M22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66 8.56 3.09c2.1.76 3.18 3.06 2.41 5.15zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm5.8-1.94c1.49-.72 2.12-2.51 1.41-4C7.99 4.71 6.2 4.08 4.7 4.8c-1.49.71-2.12 2.5-1.4 4 .71 1.49 2.5 2.12 4 1.4z"></path></g>
<g id="airline-seat-individual-suite"><path d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z"></path></g>
<g id="airline-seat-legroom-extra"><path d="M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98c-.34-.68-1.03-1.12-1.79-1.12L11 9V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7 3.72-1.7c.77-.36 1.1-1.3.7-2.06z"></path></g>
<g id="airline-seat-legroom-normal"><path d="M5 12V3H3v9c0 2.76 2.24 5 5 5h6v-2H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v7h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"></path></g>
<g id="airline-seat-legroom-reduced"><path d="M19.97 19.2c.18.96-.55 1.8-1.47 1.8H14v-3l1-4H9c-1.65 0-3-1.35-3-3V3h6v6h5c1.1 0 2 .9 2 2l-2 7h1.44c.73 0 1.39.49 1.53 1.2zM5 12V3H3v9c0 2.76 2.24 5 5 5h4v-2H8c-1.66 0-3-1.34-3-3z"></path></g>
<g id="airline-seat-recline-extra"><path d="M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79.63-.9 1.88-1.12 2.79-.49.9.64 1.12 1.88.49 2.79-.64.9-1.88 1.12-2.79.49zM16 19H8.93c-1.48 0-2.74-1.08-2.96-2.54L4 7H2l1.99 9.76C4.37 19.2 6.47 21 8.94 21H16v-2zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38-.32-.09-.66-.12-.99-.06h-.02c-1.23.22-2.05 1.39-1.84 2.61l1.35 5.92C7.16 16.98 8.39 18 9.83 18h6.85l3.82 3 1.5-1.5-5.77-4.5z"></path></g>
<g id="airline-seat-recline-normal"><path d="M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z"></path></g>
<g id="bluetooth-audio"><path d="M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z"></path></g>
<g id="confirmation-number"><path d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"></path></g>
<g id="disc-full"><path d="M20 16h2v-2h-2v2zm0-9v5h2V7h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="do-not-disturb"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></g>
<g id="do-not-disturb-alt"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8 1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z"></path></g>
<g id="do-not-disturb-off"><path d="M17 11v2h-1.46l4.68 4.68C21.34 16.07 22 14.11 22 12c0-5.52-4.48-10-10-10-2.11 0-4.07.66-5.68 1.78L13.54 11H17zM2.27 2.27L1 3.54l2.78 2.78C2.66 7.93 2 9.89 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.27-1.27L11 11 2.27 2.27zM7 13v-2h1.46l2 2H7z"></path></g>
<g id="do-not-disturb-on"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="drive-eta"><path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"></path></g>
<g id="enhanced-encryption"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"></path></g>
<g id="event-available"><path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"></path></g>
<g id="event-busy"><path d="M9.31 17l2.44-2.44L14.19 17l1.06-1.06-2.44-2.44 2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06 2.44 2.44-2.44 2.44L9.31 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"></path></g>
<g id="event-note"><path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"></path></g>
<g id="folder-special"><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2.06 11L15 15.28 12.06 17l.78-3.33-2.59-2.24 3.41-.29L15 8l1.34 3.14 3.41.29-2.59 2.24.78 3.33z"></path></g>
<g id="live-tv"><path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"></path></g>
<g id="mms"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z"></path></g>
<g id="more"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="network-check"><path d="M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c2.88-2.88 6.79-4.08 10.53-3.62l1.19-2.68C9.89 3.84 4.74 5.27 1 9zm20 2l2-2c-1.64-1.64-3.55-2.82-5.59-3.57l-.53 2.82c1.5.62 2.9 1.53 4.12 2.75zm-4 4l2-2c-.8-.8-1.7-1.42-2.66-1.89l-.55 2.92c.42.27.83.59 1.21.97zM5 13l2 2c1.13-1.13 2.56-1.79 4.03-2l1.28-2.88c-2.63-.08-5.3.87-7.31 2.88z"></path></g>
<g id="network-locked"><path d="M19.5 10c.17 0 .33.03.5.05V1L1 20h13v-3c0-.89.39-1.68 1-2.23v-.27c0-2.48 2.02-4.5 4.5-4.5zm2.5 6v-1.5c0-1.38-1.12-2.5-2.5-2.5S17 13.12 17 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z"></path></g>
<g id="no-encryption"><path d="M21 21.78L4.22 5 3 6.22l2.04 2.04C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12c.23 0 .45-.05.66-.12L19.78 23 21 21.78zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H9.66L20 18.34V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.56 0-4.64 1.93-4.94 4.4L8.9 7.24V6z"></path></g>
<g id="ondemand-video"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"></path></g>
<g id="personal-video"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z"></path></g>
<g id="phone-bluetooth-speaker"><path d="M14.71 9.5L17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79l.71.71zM18 2.91l.94.94-.94.94V2.91zm0 4.3l.94.94-.94.94V7.21zm2 8.29c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"></path></g>
<g id="phone-forwarded"><path d="M18 11l5-5-5-5v3h-4v4h4v3zm2 4.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"></path></g>
<g id="phone-in-talk"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"></path></g>
<g id="phone-locked"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM20 4v-.5C20 2.12 18.88 1 17.5 1S15 2.12 15 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4z"></path></g>
<g id="phone-missed"><path d="M6.5 5.5L12 11l7-7-1-1-6 6-4.5-4.5H11V3H5v6h1.5V5.5zm17.21 11.17C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73 1.6 0 3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.12-.52-.3-.7z"></path></g>
<g id="phone-paused"><path d="M17 3h-2v7h2V3zm3 12.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 3v7h2V3h-2z"></path></g>
<g id="power"><path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"></path></g>
<g id="priority-high"><circle cx="12" cy="19" r="2"></circle><path d="M10 3h4v12h-4z"></path></g>
<g id="rv-hookup"><path d="M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z"></path></g>
<g id="sd-card"><path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"></path></g>
<g id="sim-card-alert"><path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z"></path></g>
<g id="sms"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"></path></g>
<g id="sms-failed"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="sync"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></g>
<g id="sync-disabled"><path d="M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33zm-7.14-.94l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64L20 4z"></path></g>
<g id="sync-problem"><path d="M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z"></path></g>
<g id="system-update"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z"></path></g>
<g id="tap-and-play"><path d="M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4v3h3c0-1.66-1.34-3-3-3zm0-8v2c4.97 0 9 4.03 9 9h2c0-6.08-4.92-11-11-11zM17 1.01L7 1c-1.1 0-2 .9-2 2v7.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"></path></g>
<g id="time-to-leave"><path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"></path></g>
<g id="vibration"><path d="M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z"></path></g>
<g id="voice-chat"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-3.2V14H6V6h8v3.2L18 6v8z"></path></g>
<g id="vpn-lock"><path d="M22 4v-.5C22 2.12 20.88 1 19.5 1S17 2.12 17 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4zm-2.28 8c.04.33.08.66.08 1 0 2.08-.8 3.97-2.1 5.39-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H7v-2h2c.55 0 1-.45 1-1V8h2c1.1 0 2-.9 2-2V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03zM10 20.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 16v1c0 1.1.9 2 2 2v1.93z"></path></g>
<g id="wc"><path d="M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z"></path></g>
<g id="wifi"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(al.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ll=ft`<iron-iconset-svg name="places" size="24">
<svg><defs>
<g id="ac-unit"><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"></path></g>
<g id="airport-shuttle"><path d="M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"></path></g>
<g id="all-inclusive"><path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"></path></g>
<g id="beach-access"><path d="M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"></path></g>
<g id="business-center"><path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"></path></g>
<g id="casino"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"></path></g>
<g id="child-care"><circle cx="14.5" cy="10.5" r="1.25"></circle><circle cx="9.5" cy="10.5" r="1.25"></circle><path d="M22.94 12.66c.04-.21.06-.43.06-.66s-.02-.45-.06-.66c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17-.04.21-.06.43-.06.66s.02.45.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c.76 1.77 2.49 3 4.5 3s3.74-1.23 4.5-3h-9z"></path></g>
<g id="child-friendly"><path d="M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z"></path></g>
<g id="fitness-center"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"></path></g>
<g id="free-breakfast"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"></path></g>
<g id="golf-course"><circle cx="19.5" cy="19.5" r="1.5"></circle><path d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z"></path></g>
<g id="hot-tub"><circle cx="7" cy="6" r="2"></circle><path d="M11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-.35-14.14l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm-4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z"></path></g>
<g id="kitchen"><path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"></path></g>
<g id="pool"><path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z"></path><circle cx="16.5" cy="5.5" r="2.5"></circle></g>
<g id="room-service"><path d="M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z"></path></g>
<g id="rv-hookup"><path d="M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z"></path></g>
<g id="smoke-free"><path d="M2 6l6.99 7H2v3h9.99l7 7 1.26-1.25-17-17zm18.5 7H22v3h-1.5zM18 13h1.5v3H18zm.85-8.12c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.92c0-2.23-1.28-4.15-3.15-5.04zM14.5 8.7h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.59c0-1.8-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75V2c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35zm2.5 7.23V13h-2.93z"></path></g>
<g id="smoking-rooms"><path d="M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03zm-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16z"></path></g>
<g id="spa"><path d="M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61zm10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64z"></path><path d="M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(ll.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const rl=ft`<iron-iconset-svg name="social" size="24">
<svg><defs>
<g id="cake"><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"></path></g>
<g id="domain"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></g>
<g id="group"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
<g id="group-add"><path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"></path></g>
<g id="location-city"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path></g>
<g id="mood"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="mood-bad"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path></g>
<g id="notifications"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></g>
<g id="notifications-active"><path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path></g>
<g id="notifications-none"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path></g>
<g id="notifications-off"><path d="M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"></path></g>
<g id="notifications-paused"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z"></path></g>
<g id="pages"><path d="M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"></path></g>
<g id="party-mode"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z"></path></g>
<g id="people"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
<g id="people-outline"><path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></g>
<g id="person"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
<g id="person-add"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
<g id="person-outline"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="plus-one"><path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"></path></g>
<g id="poll"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="public"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></g>
<g id="school"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></g>
<g id="sentiment-dissatisfied"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"></path></g>
<g id="sentiment-neutral"><path d="M9 14h6v1.5H9z"></path><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="sentiment-satisfied"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z"></path></g>
<g id="sentiment-very-dissatisfied"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path></g>
<g id="sentiment-very-satisfied"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="share"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></g>
<g id="whatshot"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(rl.content);var sl=document.createElement("div");sl.setAttribute("style","display: none;"),sl.innerHTML='<iron-iconset-svg size="30" name="lrn">\n  <svg viewBox="0 0 30 30" preserveAspectRatio="xMidYMid meet">\n    <defs>\n      \x3c!-- explore --\x3e\n      <g id="compass">\n        <g id="explore">\n          <g id="outline">\n            <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path>\n          </g>\n        </g>\n      </g>\n\n      \x3c!-- save --\x3e\n      <g id="save">\n        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>\n      </g>\n      \x3c!-- cancel --\x3e\n      <g id="cancel">\n        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>\n      </g>\n      \x3c!-- done --\x3e\n      <g id="done">\n        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z">\n      </path></g>\n      \x3c!-- input --\x3e\n      <g id="input">\n        <path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path>\n      </g>\n      \x3c!-- local-library --\x3e\n      <g id="resources">\n        <path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path>\n      </g>\n      \x3c!-- info-outline --\x3e\n      <g id="syllabus">\n        <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>\n      </g>\n      \x3c!-- mode-edit --\x3e\n      <g id="edit">\n        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>\n      </g>\n      \x3c!-- accessibility --\x3e\n      <g id="accessibility">\n        <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path>\n      </g>\n      \x3c!-- share --\x3e\n      <g id="share">\n        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>\n      </g>\n      \x3c!-- more-vert --\x3e\n      <g id="more-vert">\n        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>\n      </g>\n\n      \x3c!-- about --\x3e\n      <g id="about">\n        <g>\n          <path d="M14.4,6.2c1,0,1.9,0.1,2.6,0.4c0.8,0.2,1.4,0.6,1.8,1L24,6.4l0.2,0.3L21.8,17c-0.1,0.3-0.2,0.8-0.3,1.3s-0.2,0.9-0.2,1.2\n          c0,0.6,0.1,1.1,0.4,1.3c0.3,0.2,0.8,0.4,1.5,0.4c0.3,0,0.7-0.1,1.1-0.2c0.4-0.1,0.7-0.2,0.9-0.3L25,22.1c-1.1,0.4-2,0.8-2.6,1\n          c-0.7,0.2-1.4,0.3-2.3,0.3c-1.1,0-2.1-0.2-2.7-0.7c-0.7-0.5-1.2-1-1.4-1.7h-0.1c-0.4,0.3-0.8,0.6-1.1,0.9\n          c-0.4,0.3-0.8,0.6-1.3,0.8c-0.5,0.2-1,0.4-1.5,0.6c-0.5,0.2-1.1,0.2-1.7,0.2c-1.9,0-3.4-0.6-4.4-1.7c-1-1.1-1.5-2.7-1.5-4.7\n          c0-1.5,0.3-3,0.8-4.3c0.5-1.3,1.3-2.5,2.2-3.5c0.9-1,2-1.8,3.2-2.4C11.7,6.5,13,6.2,14.4,6.2 M12.8,21.1c0.5,0,1-0.2,1.5-0.5\n          c0.5-0.3,0.9-0.7,1.3-1.1l2.1-9.1c0-0.2,0-0.5-0.1-0.9c-0.1-0.3-0.2-0.6-0.4-0.9c-0.2-0.3-0.5-0.5-0.8-0.7\n          c-0.3-0.2-0.7-0.2-1.2-0.2c-0.7,0-1.4,0.3-2,0.8c-0.6,0.5-1.2,1.2-1.6,2.1c-0.5,0.9-0.8,1.9-1.1,3c-0.3,1.2-0.4,2.3-0.4,3.5\n          c0,0.5,0,1.1,0.1,1.5c0.1,0.5,0.2,0.9,0.4,1.2c0.2,0.3,0.5,0.6,0.8,0.8C11.9,21,12.3,21.1,12.8,21.1 M25.4,20.6L25.4,20.6\n           M14.4,4.2c-1.7,0-3.3,0.4-4.8,1.1C8.2,5.9,6.9,6.9,5.8,8.1c-1.1,1.2-1.9,2.6-2.6,4.1c-0.6,1.6-1,3.3-1,5.1c0,2.5,0.7,4.5,2,6\n          c1.4,1.6,3.4,2.4,5.9,2.4c0.8,0,1.6-0.1,2.3-0.3c0.6-0.2,1.2-0.4,1.8-0.7c0.4-0.2,0.8-0.5,1.2-0.7c0.2,0.2,0.5,0.4,0.8,0.6\n          c1,0.7,2.3,1,3.8,1c1.1,0,2.1-0.2,2.9-0.5c0.7-0.2,1.6-0.6,2.7-1c0.6-0.2,1.1-0.8,1.2-1.4l0.3-1.4c0.1-0.2,0.1-0.4,0.1-0.6\n          c0-1.1-0.9-2-2-2c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.3,0-0.5,0.1-0.7,0.2c0,0-0.2,0.1-0.7,0.2\n          c-0.2,0.1-0.4,0.1-0.5,0.1c0-0.1,0-0.3,0.1-0.5c0.1-0.5,0.2-0.9,0.3-1.2l2.5-10.3c0.2-0.6,0-1.3-0.4-1.8l-0.2-0.3\n          c-0.4-0.4-0.9-0.7-1.5-0.7c-0.1,0-0.3,0-0.4,0l-4.3,0.9c-0.5-0.3-1.1-0.5-1.7-0.7C16.7,4.3,15.6,4.2,14.4,4.2L14.4,4.2z\n           M12.8,19.1c-0.2,0-0.3,0-0.3,0c0,0,0,0,0-0.1c0-0.1-0.1-0.2-0.2-0.5c-0.1-0.3-0.1-0.7-0.1-1.2c0-1,0.1-2.1,0.3-3.1\n          c0.2-1,0.5-1.8,0.9-2.5c0.4-0.7,0.8-1.2,1.2-1.5c0.3-0.3,0.6-0.3,0.7-0.3c0.2,0,0.3,0,0.4,0c0,0,0,0,0,0.1c0,0.1,0,0.2,0,0.3\n          l-1.9,8.2c-0.2,0.2-0.4,0.3-0.6,0.5C13.1,19.1,12.9,19.1,12.8,19.1L12.8,19.1z"></path>\n        </g>\n      </g>\n      \x3c!-- plus --\x3e\n      <g id="plus">\n        \x3c!-- add --\x3e\n        <g id="add">\n          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>\n        </g>\n      </g>\n      \x3c!-- apps --\x3e\n      <g id="apps">\n        <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>\n      </g>\n      \x3c!-- network --\x3e\n      <g id="network">\n        <path d="M22.6,12.2L24,13c0.4,0.2,0.9,0.2,1.3,0l2.1-1.2c0.4-0.2,0.6-0.6,0.6-1.1V8.3c0-0.5-0.2-0.9-0.6-1.1L25.2,6\n          c-0.4-0.2-0.9-0.2-1.3,0l-2.1,1.2c-0.4,0.2-0.6,0.6-0.6,1.1v1.6c0,0.5-0.2,0.9-0.6,1.1l-3,1.8c-0.4,0.2-0.9,0.2-1.3,0l0,0\n          c-0.4-0.2-0.6-0.6-0.6-1.1V8c0-0.5,0.2-0.9,0.6-1.1l1.4-0.8c0.4-0.2,0.6-0.6,0.6-1.1V2.6c0-0.5-0.2-0.9-0.6-1.1l-2.1-1.2\n          c-0.4-0.2-0.9-0.2-1.3,0l-2.1,1.2c-0.4,0.2-0.6,0.6-0.6,1.1V5c0,0.5,0.2,0.9,0.6,1.1l1.4,0.8c0.4,0.2,0.6,0.6,0.6,1.1v3.7\n          c0,0.5-0.2,0.9-0.6,1.1h0c-0.4,0.2-0.9,0.2-1.3,0l-3-1.8C9,10.8,8.7,10.4,8.7,9.9V8.3c0-0.5-0.2-0.9-0.6-1.1L6,6\n          C5.6,5.8,5.1,5.8,4.8,6L2.7,7.2C2.3,7.5,2,7.9,2,8.3v2.4c0,0.5,0.2,0.9,0.6,1.1L4.8,13c0.4,0.2,0.9,0.2,1.3,0l1.4-0.8\n          c0.4-0.2,0.9-0.2,1.3,0l3,1.8c0.4,0.2,0.6,0.6,0.6,1.1v0c0,0.5-0.2,0.9-0.6,1.1l-3,1.8c-0.4,0.2-0.9,0.2-1.3,0L6,17.1\n          c-0.4-0.2-0.9-0.2-1.3,0l-2.1,1.2c-0.4,0.2-0.6,0.6-0.6,1.1v2.4c0,0.5,0.2,0.9,0.6,1.1l2.1,1.2c0.4,0.2,0.9,0.2,1.3,0l2.1-1.2\n          c0.4-0.2,0.6-0.6,0.6-1.1v-1.6c0-0.5,0.2-0.9,0.6-1.1l3-1.7c0.4-0.2,0.9-0.2,1.3,0l0,0c0.4,0.2,0.6,0.6,0.6,1.1V22\n          c0,0.5-0.2,0.9-0.6,1.1l-1.4,0.8c-0.4,0.2-0.6,0.6-0.6,1.1v2.4c0,0.5,0.2,0.9,0.6,1.1l2.1,1.2c0.4,0.2,0.9,0.2,1.3,0l2.1-1.2\n          c0.4-0.2,0.6-0.6,0.6-1.1V25c0-0.5-0.2-0.9-0.6-1.1l-1.4-0.8c-0.4-0.2-0.6-0.6-0.6-1.1v-3.5c0-0.5,0.2-0.9,0.6-1.1l0,0\n          c0.4-0.2,0.9-0.2,1.3,0l3,1.7c0.4,0.2,0.6,0.6,0.6,1.1v1.6c0,0.5,0.2,0.9,0.6,1.1l2.1,1.2c0.4,0.2,0.9,0.2,1.3,0l2.1-1.2\n          c0.4-0.2,0.6-0.6,0.6-1.1v-2.4c0-0.5-0.2-0.9-0.6-1.1l-2.1-1.2c-0.4-0.2-0.9-0.2-1.3,0l-1.4,0.8c-0.4,0.2-0.9,0.2-1.3,0l-3-1.7\n          c-0.4-0.2-0.6-0.6-0.6-1.1v0c0-0.5,0.2-0.9,0.6-1.1l3-1.7C21.7,12,22.2,12,22.6,12.2z M7.4,10.3c0,0.2-0.1,0.5-0.3,0.6l-0.4,0.2\n          l-0.9,0.5c-0.2,0.1-0.5,0.1-0.7,0l-1.3-0.7c-0.2-0.1-0.3-0.3-0.3-0.6V8.8c0-0.2,0.1-0.5,0.3-0.6l1.3-0.7c0.2-0.1,0.5-0.1,0.7,0\n          L7,8.2c0.2,0.1,0.3,0.3,0.3,0.6v1.1V10.3z M26.6,19.9v1.5c0,0.2-0.1,0.5-0.3,0.6l-1.3,0.7c-0.2,0.1-0.5,0.1-0.7,0L23,22\n          c-0.2-0.1-0.3-0.3-0.3-0.6v-1.1v-0.4c0-0.2,0.1-0.5,0.3-0.6l0.4-0.2l0.9-0.5c0.2-0.1,0.5-0.1,0.7,0l1.3,0.7\n          C26.4,19.4,26.6,19.6,26.6,19.9z M23,8.2l1.3-0.7c0.2-0.1,0.5-0.1,0.7,0l1.3,0.7c0.2,0.1,0.3,0.3,0.3,0.6v1.5\n          c0,0.2-0.1,0.5-0.3,0.6l-1.3,0.7c-0.2,0.1-0.5,0.1-0.7,0l-1-0.6L23,10.9c-0.2-0.1-0.3-0.3-0.3-0.6V9.9V8.8\n          C22.6,8.6,22.8,8.3,23,8.2z M13.4,2.5l1.3-0.7c0.2-0.1,0.5-0.1,0.7,0l1.3,0.7C16.8,2.6,17,2.8,17,3.1v1.5c0,0.2-0.1,0.5-0.3,0.6\n          l-0.9,0.5l-0.4,0.2c-0.2,0.1-0.5,0.1-0.7,0l-0.4-0.2l-0.9-0.5C13.2,5,13,4.8,13,4.6V3.1C13,2.8,13.2,2.6,13.4,2.5z M7.4,20.3v1.1\n          c0,0.2-0.1,0.5-0.3,0.6l-1.3,0.7c-0.2,0.1-0.5,0.1-0.7,0L3.8,22c-0.2-0.1-0.3-0.3-0.3-0.6v-1.5c0-0.2,0.1-0.5,0.3-0.6l1.3-0.7\n          c0.2-0.1,0.5-0.1,0.7,0l0.9,0.5L7,19.3c0.2,0.1,0.3,0.3,0.3,0.6V20.3z M16.6,27.5l-1.3,0.7c-0.2,0.1-0.5,0.1-0.7,0l-1.3-0.7\n          c-0.2-0.1-0.3-0.3-0.3-0.6v-1.5c0-0.2,0.1-0.5,0.3-0.6l0.9-0.5l0.4-0.2c0.2-0.1,0.5-0.1,0.7,0l0.4,0.2l0.9,0.5\n          c0.2,0.1,0.3,0.3,0.3,0.6v1.5C17,27.2,16.8,27.4,16.6,27.5z"></path>\n      </g>\n      \x3c!-- arrow-left --\x3e\n      <g id="arrow-left">\n        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>\n      </g>\n      \x3c!-- arrow-right --\x3e\n      <g id="arrow-right">\n        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>\n      </g>\n      \x3c!-- studio-assignment-list --\x3e\n      \x3c!-- canban --\x3e\n      \x3c!-- columns --\x3e\n      <g id="studio-assignment-list">\n        <g id="canban">\n          <g id="columns">\n            <path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path>\n          </g>\n        </g>\n      </g>\n      \x3c!-- assignment --\x3e\n      <g id="assignment">\n        <g id="assignments">\n          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>\n        </g>\n      </g>\n      \x3c!-- beaker --\x3e\n      <g id="lab">\n        <g id="labs">\n          <g id="beaker">\n            <g>\n              <path d="M17.8,10.1c0,0-0.1,0-0.1,0l-1.1-0.3c-0.4-0.1-0.9-0.1-1.3,0l-0.4,0.1c-0.6,0.2-1.2,0.2-1.7,0l-1.1-0.3\n          c-0.2-0.1-0.3-0.3-0.3-0.5c0.1-0.2,0.3-0.3,0.5-0.3l1.1,0.3c0.4,0.1,0.9,0.1,1.3,0L15.1,9c0.6-0.2,1.2-0.2,1.8,0l1.1,0.3\n          c0.2,0.1,0.3,0.3,0.3,0.5C18.1,10,18,10.1,17.8,10.1z"></path>\n            </g>\n            <g>\n              <path d="M23,27.6H7c-0.9,0-1.8-0.5-2.3-1.2c-0.5-0.8-0.6-1.8-0.2-2.6l6.4-14.6c0.1-0.2,0.1-0.3,0.1-0.5V5.1c0-0.7-0.6-1.2-1.2-1.2\n          H9c-0.4,0-0.8-0.3-0.8-0.8S8.5,2.4,9,2.4h0.7c1.5,0,2.8,1.2,2.8,2.8v3.6c0,0.4-0.1,0.8-0.2,1.1L5.8,24.4c-0.2,0.4-0.1,0.8,0.1,1.2\n          c0.2,0.4,0.6,0.6,1,0.6H23c0.4,0,0.8-0.2,1-0.6c0.2-0.4,0.3-0.8,0.1-1.2L17.8,9.8c-0.2-0.4-0.2-0.7-0.2-1.1V5.1\n          c0-1.5,1.2-2.8,2.8-2.8H21c0.4,0,0.8,0.3,0.8,0.8S21.5,3.9,21,3.9h-0.7c-0.7,0-1.2,0.6-1.2,1.2v3.6c0,0.2,0,0.3,0.1,0.5l6.4,14.6\n          c0.4,0.9,0.3,1.8-0.2,2.6C24.8,27.2,24,27.6,23,27.6z"></path>\n            </g>\n            <g>\n              <path d="M13.6,22c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8s1.8,0.8,1.8,1.8C15.4,21.2,14.6,22,13.6,22z M13.6,19.2\n          c-0.6,0-1,0.5-1,1s0.5,1,1,1c0.6,0,1-0.5,1-1S14.2,19.2,13.6,19.2z"></path>\n            </g>\n            <g>\n              <path d="M17,17.7c-0.6,0-1.2-0.5-1.2-1.2c0-0.6,0.5-1.2,1.2-1.2c0.6,0,1.2,0.5,1.2,1.2C18.2,17.1,17.7,17.7,17,17.7z M17,16.1\n          c-0.2,0-0.4,0.2-0.4,0.4c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4C17.5,16.3,17.3,16.1,17,16.1z"></path>\n            </g>\n            <g>\n              <path d="M15.1,14.4c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C16.2,13.9,15.7,14.4,15.1,14.4z M15.1,13\n          c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3S15.3,13,15.1,13z"></path>\n            </g>\n          </g>\n        </g>\n      </g>\n      \x3c!-- grades --\x3e\n      <g id="grades">\n        <path d="M0 0h24v24H0z" fill="none"></path>\n        <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path>\n      </g>\n      \x3c!-- notifications --\x3e\n      <g id="notifications">\n        <g id="comment">\n          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>\n        </g>\n      </g>\n      \x3c!-- inbox --\x3e\n      <g id="inbox">\n        <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path>\n      </g>\n      \x3c!-- letter --\x3e\n      <g id="letter">\n        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>\n      </g>\n      \x3c!-- user --\x3e\n      <g id="user">\n        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>\n      </g>\n      \x3c!-- calendar --\x3e\n      <g id="calendar">\n        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>\n      </g>\n      \x3c!-- palette --\x3e\n      \x3c!-- studio --\x3e\n      \x3c!-- cle --\x3e\n      <g id="palette">\n        <g id="studio">\n          <g id="cle">\n            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>\n          </g>\n        </g>\n      </g>\n      \x3c!-- blog --\x3e\n      \x3c!-- blogs --\x3e\n      <g id="blog">\n        <g id="blogs">\n          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"></path>\n        </g>\n      </g>\n      \x3c!-- editorial --\x3e\n      \x3c!-- write --\x3e\n          <g id="editorial">\n            <g id="write">\n              <g>\n                <path d="M27.5,10.8c0-0.2-0.1-0.4-0.2-0.6l-2.7-2.7c-0.3-0.3-0.8-0.3-1.1,0l-1.6,1.6c0,0,0,0,0,0c0,0,0,0,0,0l-9.2,9.2\n          c-0.1,0.1-0.2,0.3-0.2,0.5l-0.3,3c0,0.2,0.1,0.5,0.2,0.6c0.2,0.2,0.4,0.2,0.6,0.2c0,0,0.1,0,0.1,0l3-0.3c0.2,0,0.4-0.1,0.5-0.2\n          l9.2-9.2c0,0,0,0,0,0c0,0,0,0,0,0l1.6-1.6C27.4,11.2,27.5,11,27.5,10.8z M25.6,10.8l-0.5,0.5l-1.6-1.6L24,9.2L25.6,10.8z\n           M15.5,20.9L13.8,21l0.2-1.7l8.5-8.5l1.6,1.6L15.5,20.9z"></path>\n                <g>\n                  <path class="st0" d="M6,11.3h10.2c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8H6c-0.4,0-0.8-0.4-0.8-0.8\n            C5.2,11.7,5.6,11.3,6,11.3z"></path>\n                  <path class="st0" d="M24,9.2l1.6,1.6l-0.5,0.5l-1.6-1.6L24,9.2z"></path>\n                  <path d="M18.5,25.7H4.1V4.3h10.6l0,4.2h3.8v2.8l1.6-1.6V8.5c0-0.4-0.1-0.8-0.4-1.1l-3.8-4.2c-0.3-0.3-0.7-0.5-1.2-0.5H4.1\n            c-0.9,0-1.6,0.7-1.6,1.6v21.4c0,0.9,0.7,1.6,1.6,1.6h14.4c0.9,0,1.6-0.7,1.6-1.6v-6.1l-1.6,1.6V25.7z"></path>\n                  <path d="M6,12.9h10.2c0.4,0,0.8-0.4,0.8-0.8c0-0.4-0.4-0.8-0.8-0.8H6c-0.4,0-0.8,0.4-0.8,0.8C5.2,12.5,5.6,12.9,6,12.9z"></path>\n                  <path d="M6,19.3c-0.4,0-0.8,0.4-0.8,0.8c0,0.4,0.4,0.8,0.8,0.8h5.3l0.2-1.6H6z"></path>\n                  <path d="M6,15.3c-0.4,0-0.8,0.4-0.8,0.8c0,0.4,0.4,0.8,0.8,0.8h6.9l1.6-1.6H6z"></path>\n                  <rect x="23.4" y="9.9" transform="matrix(0.7072 0.707 -0.707 0.7072 14.4298 -14.3524)" class="st1" width="2.2" height="0.7"></rect>\n                </g>\n              </g>\n            </g>\n          </g>\n      \x3c!-- bookmark --\x3e\n      <g id="bookmark">\n        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path>\n      </g>\n      \x3c!-- bookmark-border --\x3e\n      <g id="bookmark-outline">\n        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path>\n      </g>\n      \x3c!-- chevron-down --\x3e\n      <g id="chevron-down">\n        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>\n      </g>\n      \x3c!-- chevron-left --\x3e\n      <g id="chevron-left">\n        <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>\n      </g>\n      \x3c!-- chevron-right --\x3e\n      <g id="chevron-right">\n        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>\n      </g>\n      \x3c!-- online --\x3e\n      \x3c!-- cis --\x3e\n      <g id="cis">\n        <g id="online">\n          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path>\n        </g>\n      </g>\n      \x3c!-- close --\x3e\n      <g id="close">\n        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>\n      </g>\n      \x3c!-- collab --\x3e\n      <g id="collab">\n        <path d="M0 0h24v24H0z" fill="none"></path>\n        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>\n      </g>\n      \x3c!-- comply --\x3e\n      \x3c!-- ecd --\x3e\n      <g id="ecd">\n        <g id="comply">\n          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>\n        </g>\n      </g>\n      \x3c!-- mooc --\x3e\n      \x3c!-- content-outline --\x3e\n      <g id="mooc">\n        <g id="courses">\n          <g id="content-outline">\n            <g id="book">\n            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path>\n            </g>\n          </g>\n        </g>\n      </g>\n      \x3c!-- content --\x3e\n      <g id="content">\n        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path>\n      </g>\n      \x3c!-- dino --\x3e\n      <g id="dino">\n        <g>\n          <circle cx="19" cy="6.3" r="0.6"></circle>\n          <path d="M27.6,4.7c-1.5-1.5-7.2-2.3-10.5-1.5c-1.7,0.4-3.6,2.6-3.6,4.9c0,0.4,0,0.8,0,1.1c0,1.5,0,2.3-0.5,2.8\n          c-0.4,0.4-0.9,0.7-1.5,1c-0.6,0.4-1.2,0.7-1.6,1.2c-1.3,1.6-2.4,2.1-3.8,1.6c-1.5-0.5-1.6-2.2-1.5-4.7c0-1,0-2-0.2-2.8\n          C4.3,8.1,4.1,8,3.9,7.9C3.7,7.9,3.4,8,3.3,8.2c-1.6,3-2.2,8,0.5,11.9c1,1.5,2.4,2.7,4.1,3.6C8,23.9,8.1,24,8.3,24l0,1\n          c0,0.1-0.1,1,0.5,1.5c0.3,0.3,0.7,0.5,1.1,0.5c0,0,0,0,0,0c1.3,0,1.8-1,1.9-1.5l0.2-0.8l0.2,0.4c0.2,0.5,0.7,1.3,1.6,1.3\n          c0,0,0.1,0,0.1,0c0.1,0,0.3,0,0.4,0c1.3-0.3,1.3-1.6,1.3-2l0-0.9c0.7-0.3,1.7-1,2.6-2.8c0.5-1.1,0.7-2.2,0.8-3.2\n          c0.2,0.1,0.4,0.1,0.6,0.1c0.5,0,1-0.2,1.4-0.7c0.3-0.3,0.3-0.7,0.3-1.1c-0.1-0.7-0.7-1.1-0.8-1.1l-1.4-1c0.2-0.9,0.5-1.4,0.6-1.7\n          c0.8,0.1,2.5,0.2,3.5-0.1c0.9-0.2,1.4-1,1.7-1.7c0.1,0,0.2,0.1,0.2,0.1c0.2,0,0.4-0.1,0.5-0.2C26.4,9.5,29.1,6.3,27.6,4.7z\n           M14.8,23.6l0,0.8c0,0.8-0.2,1.1-0.7,1.1c-0.1,0-0.1,0-0.2,0c-0.6,0-0.9-0.7-0.9-0.7l-0.3-0.6l-0.1-0.1l0.3,0\n          c0.5-0.1,1-0.2,1.5-0.4C14.6,23.6,14.7,23.6,14.8,23.6C14.8,23.6,14.8,23.5,14.8,23.6L14.8,23.6z M20.1,15.4\n          c0.1,0.1,0.4,0.3,0.4,0.6c0,0.1,0,0.2-0.1,0.4c-0.4,0.6-1,0.3-1,0.3l-0.3-0.1l-0.3-0.1c0-0.1,0-0.2,0-0.3c0,0,0,0,0,0\n          c0-0.2,0-0.3,0-0.3l-0.1-1.1l0,0c0,0,0-0.1,0.1-0.2c0,0,0,0,0-0.1l0.1,0L20.1,15.4z M25.5,9.1C25.5,9.1,25.5,9.2,25.5,9.1l-0.6-0.8\n          l0,0l-0.5-0.7c-0.1-0.1-0.3-0.2-0.4-0.1l-1.4,0.9l-0.8-1.2c-0.1-0.1-0.3-0.2-0.4-0.1l-1.9,1.1c-0.1,0.1-0.2,0.3-0.1,0.4\n          c0.1,0.1,0.3,0.2,0.4,0.1l1.7-1L22.3,9c0.1,0.1,0.3,0.2,0.4,0.1l1.4-0.9l0.3,0.5l0,0L24.6,9c0,0.1-0.1,0.2-0.1,0.4\n          c-0.2,0.6-0.6,1.4-1.3,1.6c-1.2,0.3-3.6,0-3.6,0l-0.2,0l-0.1,0.1c-0.3,0.4-0.7,1.3-1,2.7c-0.1,0.2-0.1,0.4-0.1,0.5\n          c0,0.2-0.1,0.3-0.1,0.3l0,0l0.1,1.2c0,0,0,0.1,0,0.3c0,0.1,0,0.3,0,0.5c0,1-0.1,2.4-0.7,3.7c-0.9,1.8-1.8,2.2-2.4,2.5l-0.2,0.1\n          c-0.1,0.1-0.2,0.1-0.3,0.1c-0.6,0.2-1.2,0.4-1.8,0.5c-0.2,0-0.3,0.1-0.5,0.1c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0l0-0.1l0.1-0.2\n          l0.5-1.9c0-0.2-0.1-0.3-0.2-0.4c-0.2,0-0.3,0.1-0.4,0.2l-0.5,2.1c0,0,0,0,0,0c0,0,0,0,0,0l-0.1,0.5l-0.1,0.5l-0.3,1\n          c0,0-0.2,0.8-1.1,0.8c0,0,0,0,0,0c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.2-0.3-0.7-0.2-0.9l0-1l0-0.5l0-0.5v0l0-0.9c0-0.2-0.2-0.3-0.3-0.3\n          c-0.2,0-0.3,0.1-0.3,0.3l0,0.7l0,0.2l0,0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.2-0.1c-1.6-0.9-2.8-2-3.7-3.4\n          c-2.4-3.6-1.8-7.8-0.8-10.1c0,0.5,0,1,0,1.6c0,2.2-0.1,4.9,2.1,5.6c2.6,0.8,4.3-1.3,4.8-1.9c0.3-0.3,0.8-0.6,1.3-0.9\n          c0.6-0.3,1.2-0.7,1.7-1.1c0.8-0.8,0.8-2,0.7-3.4c0-0.4,0-0.7,0-1.1c0-1.9,1.6-3.7,2.9-4c3.2-0.8,8.5,0.1,9.7,1.2\n          C27.7,6.1,26.3,8.1,25.5,9.1z"></path>\n          <path d="M16.8,15.2l-1.5-1.6c-0.1-0.1-0.3-0.1-0.4,0c-0.1,0.1-0.1,0.3,0,0.4l1.5,1.6c0,0,0.2,0.2,0.2,0.5c0,0.1-0.1,0.3-0.2,0.4\n          c-0.5,0.5-0.9,0.2-1,0.2l-2.7-1.6c-0.1-0.1-0.3,0-0.4,0.1c-0.1,0.1,0,0.3,0.1,0.4l2.7,1.6c0.1,0.1,0.4,0.2,0.6,0.2\n          c0.3,0,0.7-0.1,1.1-0.5c0.3-0.3,0.4-0.6,0.4-0.8C17.3,15.6,16.9,15.2,16.8,15.2z"></path>\n        </g>\n      </g>\n      \x3c!-- discuss --\x3e\n      \x3c!-- speechballoons --\x3e\n      <g id="speechballoons">\n        <g id="discuss">\n          <g>\n            <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>\n          </g>\n        </g>\n      </g>\n      \x3c!-- dotgrid --\x3e\n      <g id="dotgrid">\n        <g>\n          <g>\n            <path d="M4.2,8C2.1,8,0.4,6.3,0.4,4.2s1.7-3.8,3.8-3.8S8,2.1,8,4.2S6.3,8,4.2,8z M4.2,2.2c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2\n            S5.3,2.2,4.2,2.2z"></path>\n          </g>\n          <g>\n            <path d="M15,8c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S17.1,8,15,8z M15,2.2c-1.1,0-2,0.9-2,2s0.9,2,2,2\n            c1.1,0,2-0.9,2-2S16.1,2.2,15,2.2z"></path>\n          </g>\n          <g>\n            <path d="M25.8,8C23.7,8,22,6.3,22,4.2s1.7-3.8,3.8-3.8s3.8,1.7,3.8,3.8S27.9,8,25.8,8z M25.8,2.2c-1.1,0-2,0.9-2,2s0.9,2,2,2\n            c1.1,0,2-0.9,2-2S26.9,2.2,25.8,2.2z"></path>\n          </g>\n          <g>\n            <path d="M4.2,18.8c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8S8,12.9,8,15C8,17.1,6.3,18.8,4.2,18.8z M4.2,13c-1.1,0-2,0.9-2,2\n            c0,1.1,0.9,2,2,2s2-0.9,2-2C6.2,13.9,5.3,13,4.2,13z"></path>\n          </g>\n          <g>\n            <path d="M15,18.8c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C18.8,17.1,17.1,18.8,15,18.8z M15,13\n            c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C17,13.9,16.1,13,15,13z"></path>\n          </g>\n          <g>\n            <path d="M25.8,18.8c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8s3.8,1.7,3.8,3.8C29.6,17.1,27.9,18.8,25.8,18.8z M25.8,13\n            c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C27.8,13.9,26.9,13,25.8,13z"></path>\n          </g>\n          <g>\n            <path d="M4.2,29.6c-2.1,0-3.8-1.7-3.8-3.8S2.1,22,4.2,22S8,23.7,8,25.8S6.3,29.6,4.2,29.6z M4.2,23.8c-1.1,0-2,0.9-2,2\n            c0,1.1,0.9,2,2,2s2-0.9,2-2C6.2,24.7,5.3,23.8,4.2,23.8z"></path>\n          </g>\n          <g>\n            <path d="M15,29.6c-2.1,0-3.8-1.7-3.8-3.8S12.9,22,15,22c2.1,0,3.8,1.7,3.8,3.8S17.1,29.6,15,29.6z M15,23.8c-1.1,0-2,0.9-2,2\n            c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C17,24.7,16.1,23.8,15,23.8z"></path>\n          </g>\n          <g>\n            <path d="M25.8,29.6c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8s3.8,1.7,3.8,3.8S27.9,29.6,25.8,29.6z M25.8,23.8c-1.1,0-2,0.9-2,2\n            c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C27.8,24.7,26.9,23.8,25.8,23.8z"></path>\n          </g>\n        </g>\n      </g>\n      \x3c!-- download --\x3e\n      \x3c!-- file-download --\x3e\n      <g id="download">\n        <g id="file-download">\n          <g>\n            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>\n          </g>\n        </g>\n      </g>\n      \x3c!-- edit --\x3e\n      <g id="edit">\n        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>\n      </g>\n      \x3c!-- media --\x3e\n      \x3c!-- elmsmedia --\x3e\n      <g id="media">\n        <g id="elmsmedia">\n          <path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path>\n        </g>\n      </g>\n      \x3c!-- play --\x3e\n      <g id="play">\n        <path d="M8 5v14l11-7z"></path>\n        </g>\n        \x3c!-- replay --\x3e\n      <g id="replay">\n        <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path>\n        </g>\n      \x3c!-- gear --\x3e\n      \x3c!-- settings --\x3e\n      <g id="gear">\n        <g id="settings">\n          <g>\n            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>\n          </g>\n        </g>\n      </g>\n      \x3c!-- assessment --\x3e\n      <g id="assessment">\n        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>\n      </g>\n      \x3c!-- help --\x3e\n      <g id="help">\n        <g>\n          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>\n        </g>\n      </g>\n      \x3c!-- hidden --\x3e\n      \x3c!-- view-off --\x3e\n      <g id="hidden">\n        <g id="view-off">\n          <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"></path>\n          <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>\n        </g>\n      </g>\n      \x3c!-- icor --\x3e\n      \x3c!-- interact --\x3e\n      <g id="icor">\n        <g id="interact">\n          <path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path>\n        </g>\n      </g>\n      \x3c!-- info --\x3e\n      <g id="info">\n        <g>\n          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>\n        </g>\n        <g>\n          <g>\n            <path d="M18.4,21.4l-0.2,0.9c-0.7,0.3-1.2,0.5-1.6,0.6c-0.4,0.1-0.9,0.2-1.4,0.2c-0.8,0-1.5-0.2-1.9-0.6c-0.5-0.4-0.7-0.9-0.7-1.5\n            c0-0.2,0-0.5,0.1-0.7c0-0.3,0.1-0.5,0.2-0.9l0.9-3c0.1-0.3,0.1-0.6,0.2-0.8c0.1-0.3,0.1-0.5,0.1-0.7c0-0.4-0.1-0.7-0.2-0.8\n            c-0.2-0.2-0.5-0.2-0.9-0.2c-0.2,0-0.5,0-0.7,0.1c-0.2,0.1-0.4,0.1-0.6,0.2l0.2-0.9c0.6-0.2,1.1-0.4,1.6-0.6c0.5-0.2,1-0.2,1.5-0.2\n            c0.8,0,1.5,0.2,1.9,0.6c0.4,0.4,0.7,0.9,0.7,1.6c0,0.1,0,0.4,0,0.7c0,0.3-0.1,0.6-0.2,0.9l-0.9,3c-0.1,0.2-0.1,0.5-0.2,0.8\n            c-0.1,0.3-0.1,0.5-0.1,0.7c0,0.4,0.1,0.7,0.3,0.8c0.2,0.1,0.5,0.2,0.9,0.2c0.2,0,0.4,0,0.7-0.1C18.1,21.6,18.3,21.5,18.4,21.4z\n             M18.6,8.7c0,0.5-0.2,1-0.6,1.4c-0.4,0.4-0.9,0.6-1.4,0.6c-0.6,0-1-0.2-1.4-0.6c-0.4-0.4-0.6-0.8-0.6-1.4c0-0.5,0.2-1,0.6-1.4\n            C15.5,7,16,6.8,16.6,6.8c0.6,0,1,0.2,1.4,0.6C18.4,7.7,18.6,8.2,18.6,8.7z"></path>\n          </g>\n        </g>\n      </g>\n      \x3c!-- page --\x3e\n      <g id="page">\n        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path>\n      </g>\n      \x3c!-- pdf --\x3e\n      <g id="pdf">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"></path>\n      </g>\n      \x3c!-- cpr --\x3e\n      \x3c!-- people --\x3e\n      <g id="cpr">\n        <g id="people">\n          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>\n        </g>\n      </g>\n      \x3c!-- quiz --\x3e\n      <g id="quiz">\n        <g>\n          <g id="choice3">\n            <path d="M25.8,22.7v4.4h-8.9l-2.2-2.2l2.2-2.2H25.8 M26.1,20.7h-9.4c-0.4,0-0.9,0.2-1.2,0.5L13,23.8c-0.6,0.6-0.6,1.7,0,2.3\n          l2.5,2.6c0.3,0.3,0.7,0.5,1.2,0.5h9.4c0.9,0,1.7-0.7,1.7-1.7v-5.1C27.8,21.5,27,20.7,26.1,20.7L26.1,20.7z"></path>\n          </g>\n          <g id="choice2">\n            <path d="M25.8,12.8v4.4h-8.9L14.7,15l2.2-2.2H25.8 M26.1,10.8h-9.4c-0.4,0-0.9,0.2-1.2,0.5L13,13.8c-0.6,0.6-0.6,1.7,0,2.3l2.5,2.6\n          c0.3,0.3,0.7,0.5,1.2,0.5h9.4c0.9,0,1.7-0.7,1.7-1.7v-5.1C27.8,11.5,27,10.8,26.1,10.8L26.1,10.8z"></path>\n          </g>\n          <g id="choice1">\n            <path d="M25.8,2.8v4.4h-8.9l-2.2-2.2l2.2-2.2H25.8 M26.1,0.8h-9.4c-0.4,0-0.9,0.2-1.2,0.5L13,3.9c-0.6,0.6-0.6,1.7,0,2.3l2.5,2.6\n          c0.3,0.3,0.7,0.5,1.2,0.5h9.4c0.9,0,1.7-0.7,1.7-1.7V2.5C27.8,1.6,27,0.8,26.1,0.8L26.1,0.8z"></path>\n          </g>\n          <g>\n            <path d="M5.5,28.9c-0.4,0-0.8-0.1-1.1-0.2c-0.3-0.1-0.7-0.3-0.9-0.5c-0.3-0.2-0.4-0.5-0.6-0.8c-0.1-0.3-0.2-0.7-0.2-1.1\n          c0-0.5,0.1-1.1,0.3-1.5c0.2-0.5,0.5-0.9,0.9-1.3c0.4-0.4,0.8-0.7,1.3-0.9s1.1-0.3,1.6-0.3c0.3,0,0.7,0,1.1,0.1\n          c0.4,0.1,0.6,0.2,0.8,0.3L9,22.3h0.4l-0.5,2.3H8.5c-0.1-0.7-0.2-1.2-0.5-1.5c-0.3-0.4-0.7-0.5-1.2-0.5c-0.3,0-0.7,0.1-1,0.3\n          c-0.3,0.2-0.6,0.5-0.8,1c-0.2,0.4-0.3,0.8-0.4,1.2c-0.1,0.5-0.1,0.9-0.1,1.3c0,0.6,0.1,1.1,0.4,1.4s0.7,0.5,1.2,0.5\n          c0.4,0,0.8-0.1,1.2-0.4c0.4-0.2,0.7-0.6,1.1-1l0.3,0.2c-0.1,0.2-0.3,0.5-0.5,0.7c-0.2,0.2-0.4,0.4-0.7,0.6\n          c-0.3,0.2-0.6,0.3-0.8,0.4C6.3,28.8,6,28.9,5.5,28.9z"></path>\n          </g>\n          <g>\n            <path d="M6.9,12.4c0.8,0,1.3,0.1,1.7,0.3c0.4,0.2,0.5,0.5,0.5,0.9c0,0.3-0.1,0.5-0.2,0.7c-0.1,0.2-0.3,0.4-0.5,0.5\n          c-0.2,0.1-0.4,0.3-0.7,0.3c-0.2,0.1-0.5,0.2-0.8,0.2l0,0.1c0.2,0,0.4,0.1,0.6,0.1c0.2,0.1,0.4,0.2,0.5,0.3c0.2,0.1,0.3,0.2,0.4,0.4\n          c0.1,0.2,0.1,0.4,0.1,0.6c0,0.7-0.3,1.2-0.8,1.5c-0.5,0.3-1.4,0.5-2.4,0.5H2.1l0.1-0.3c0.1,0,0.2,0,0.3,0s0.3,0,0.3-0.1\n          c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.3l1-4.4c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.2-0.3\n          c-0.1-0.1-0.3-0.1-0.6-0.2l0.1-0.3H6.9z M7,16.7c0-0.3-0.1-0.6-0.3-0.8s-0.5-0.3-1-0.3c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0\n          L4.8,18c0,0.1,0.1,0.2,0.2,0.3c0.2,0.1,0.3,0.1,0.5,0.1c0.4,0,0.7-0.2,1-0.5C6.9,17.6,7,17.2,7,16.7z M7.4,13.6\n          c0-0.3-0.1-0.5-0.3-0.6c-0.2-0.1-0.4-0.2-0.7-0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0l-0.6,2.4h0.3c0.5,0,0.9-0.1,1.2-0.4\n          S7.4,14.1,7.4,13.6z"></path>\n          </g>\n          <g>\n            <path d="M5.6,8.8l0.1-0.3c0.3,0,0.5-0.1,0.7-0.1c0.2-0.1,0.3-0.1,0.3-0.2c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0-0.1L6.4,6.7H4.2\n          C4.1,6.8,4,6.9,3.9,7.1S3.7,7.5,3.7,7.6C3.5,7.8,3.5,7.9,3.5,8s0,0.1,0,0.1c0,0.1,0.1,0.2,0.2,0.2C3.8,8.4,4,8.5,4.3,8.5L4.2,8.8\n          H1.5l0.1-0.3c0.1,0,0.2,0,0.3,0c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.2-0.2,0.4-0.3C2.7,8,2.8,7.9,2.9,7.7c0.6-0.9,1.2-1.8,1.7-2.6\n          c0.5-0.8,1.1-1.7,1.8-2.7h0.9c0.2,1.3,0.4,2.4,0.6,3.3s0.3,1.6,0.4,2.2c0,0.1,0,0.2,0.1,0.2s0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.3,0.1\n          s0.2,0,0.3,0L9,8.8H5.6z M6.3,6.3L5.9,4L4.5,6.3H6.3z"></path>\n          </g>\n        </g>\n      </g>\n      \x3c!-- support --\x3e\n      <g id="support">\n        <path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>\n      </g>\n      \x3c!-- teacher --\x3e\n      \x3c!-- instructor --\x3e\n      <g id="teacher">\n        <g id="instructor">\n          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>\n        </g>\n      </g>\n      \x3c!-- tour --\x3e\n      <g id="tour">\n        <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"></path>\n      </g>\n      \x3c!-- visible --\x3e\n      <g id="visible">\n        \x3c!-- view --\x3e\n        <g id="view">\n          <g>\n            <g>\n              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>\n            </g>\n          </g>\n\n    </g></g></defs>\n  </svg>\n</iron-iconset-svg>',document.head.appendChild(sl);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class cl extends(ta(Wn)){static get tag(){return"simple-icon"}static get styles(){return[...super.styles,t`feFlood{flood-color:var(--simple-icon-color,var(--simple-colors-default-theme-accent-8,#000))}feFlood.contrast-1{flood-color:var(--simple-icon-color,var(--simple-colors-default-theme-accent-9,#000))}feFlood.contrast-2{flood-color:var(--simple-icon-color,var(--simple-colors-default-theme-accent-10,#000))}feFlood.contrast-3{flood-color:var(--simple-icon-color,var(--simple-colors-default-theme-accent-11,#000))}feFlood.contrast-4{flood-color:var(--simple-icon-color,var(--simple-colors-default-theme-accent-12,#000))}`]}get feFlood(){return this.noColorize?"":o`<feFlood class="contrast-${this.contrast}" result="COLOR" />`}get useSafariPolyfill(){return!1}static get properties(){return{...super.properties,contrast:{type:Number,attribute:"contrast",reflect:!0}}}constructor(){super(),this.contrast=0}}customElements.define(cl.tag,cl);
/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class hl extends(oa(Wn)){static get tag(){return"simple-icon-button"}constructor(){super(),this.accentColor="grey",this.contrast=4,this.dark=!1}render(){return i` <button ?autofocus="${this.autofocus}" .aria-labelledby="${this.ariaLabelledby}" .aria-pressed="${this.toggles||this.toggled?"true":this.toggles?"false":void 0}" controls="${this.controls}" part="button" ?disabled="${this.disabled}" form="${this.form}" label="${this.label}" aria-label="${this.label}" name="${this.fieldName}" .type="${this.type}" value="${this.value}"> <simple-icon part="icon" icon="${this.icon}" accent-color="${this.accentColor}" contrast="${this.contrast}" ?dark="${this.dark}"></simple-icon> </button> `}static get properties(){return{...super.properties,contrast:{type:Number,reflect:!0}}}}customElements.define(hl.tag,hl),["courseicons","hax","lrn","mdextra","mdi-social","editable-table","drawing","paper-audio-icons"].forEach((e=>{Zn.registerIconset(e,`${new URL(new URL("69681bc7.js",import.meta.url).href,import.meta.url).href}/../svgs/${e}/`)})),Promise.resolve().then((function(){return Qn})).then((()=>{window.Drupal&&window.Drupal.settings&&window.Drupal.settings.basePath&&window.SimpleIconset.requestAvailability().registerIconset("elmsln-custom-icons",`${Drupal.settings.basePath}sites/all/libraries/_my_libraries/elmsln-custom-icons/`)}));
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{H:dl}=n,pl=(e,t)=>{var i,o;return void 0===t?void 0!==(null===(i=e)||void 0===i?void 0:i._$litType$):(null===(o=e)||void 0===o?void 0:o._$litType$)===t},ml=()=>document.createComment(""),ul=(e,t,i)=>{var o;const n=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=n.insertBefore(ml(),a),o=n.insertBefore(ml(),a);i=new dl(t,o,e,e.options)}else{const t=i._$AB.nextSibling,l=i._$AM,r=l!==e;if(r){let t;null===(o=i._$AQ)||void 0===o||o.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==l._$AU&&i._$AP(t)}if(t!==a||r){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;n.insertBefore(e,a),e=t}}}return i},fl={},gl=(e,t=fl)=>e._$AH=t,vl=e=>e._$AH,bl=(yl=class extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(e){super(e),this.tt=new WeakMap}render(e){return[e]}update(e,[t]){if(pl(this.it)&&(!pl(t)||this.it.strings!==t.strings)){const t=vl(e).pop();let i=this.tt.get(this.it.strings);if(void 0===i){const e=document.createDocumentFragment();i=a(l,e),i.setConnected(!1),this.tt.set(this.it.strings,i)}gl(i,[t]),ul(i,void 0,t)}if(pl(t)){if(!pl(this.it)||this.it.strings!==t.strings){const i=this.tt.get(t.strings);if(void 0!==i){const t=vl(i).pop();e._$AR(),ul(e,void 0,t),gl(e,[t])}}this.it=t}else this.it=void 0;return this.render(t)}},(...e)=>({_$litDirective$:yl,values:e}));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yl;class zl extends(function(e){return class extends e{static get styles(){return[t`:host{display:var(--simple-picker-display,inline-flex);align-items:center;color:var(--simple-picker-color,currentColor);font-family:var(--simple-picker-font-family,inherit);font-size:var(--simple-picker-font-size,inherit);--simple-picker-height:calc(
              var(--simple-picker-option-size, 24px) +
                var(--simple-picker-sample-padding, 2px) * 2 +
                var(--simple-picker-border-width, 1px) * 2
            );min-height:var(--simple-picker-height);max-height:var(--simple-picker-height)}:host([block-label]){display:block;margin:0 0 15px;max-height:unset}:host([disabled]){--simple-picker-color:var(--simple-picker-color-disabled, #888);--simple-picker-background-color:var(
              --simple-picker-background-color-disabled,
              #e8e8e8
            );cursor:not-allowed;pointer-events:none}[disabled]{cursor:not-allowed;pointer-events:none!important}:host([hidden]){display:none}div{margin:unset;padding:unset}label:not([hidden]){display:flex;align-items:center;padding-right:5px;font-family:var(--simple-picker-font-family,inherit);color:var(--simple-picker-label-color,var(--simple-picker-color,currentColor))}:host([block-label]) label:not([hidden]){display:block;padding-right:0;color:var(--simple-picker-float-label-color,var(--simple-picker-color-disabled,#888));transition:all .5s;max-height:unset}:host([block-label]:focus-within) label,:host([block-label]:hover) label{color:var(--simple-picker-float-label-active-color,var(--simple-picker-color,currentColor));transition:all .5s}#sample,.rows{margin:0;padding:0}#listbox{cursor:pointer;position:relative;flex:1 0 auto;min-height:var(--simple-picker-height);max-height:var(--simple-picker-height)}#sample{display:flex;flex:1 0 auto;justify-content:space-between;align-items:center;min-height:calc(var(--simple-picker-height - 2 * var(--simple-picker-sample-padding,2px)) - 2 * var(--simple-picker-border-width,1px));max-height:calc(var(--simple-picker-height - 2 * var(--simple-picker-sample-padding,2px)) - 2 * var(--simple-picker-border-width,1px));padding:var(--simple-picker-sample-padding,2px);border-radius:var(--simple-picker-border-radius,2px);color:var(--simple-picker-sample-color,currentColor);background-color:var(--simple-picker-background-color,#f0f0f0);border-width:var(--simple-picker-border-width,1px);border-style:var(--simple-picker-border-style,solid);border-color:var(--simple-picker-border-color,var(--simple-picker-color-disabled,#888))}:host([hide-sample]) #sample{width:var(--simple-picker-option-size);overflow:visible}:host(:not([disabled]):focus-within) #sample{border-width:var(--simple-picker-focus-border-width,var(--simple-picker-border-width,1px));border-style:var(--simple-picker-focus-border-style,var(--simple-picker-border-style,solid));border-color:var(--simple-picker-focus-border-color,var(--simple-picker-border-color,var(--simple-picker-color-disabled,#888)));transition:all .5s}:host(:not([disabled]):focus-within) #listbox{border-width:var(--simple-picker-listbox-border-width,var(--simple-picker-border-width,1px));border-style:var(--simple-picker-listbox-border-width,var(--simple-picker-border-style,solid));border-color:var(--simple-picker-listbox-border-width,var(--simple-picker-border-color,var(--simple-picker-color-disabled,#888)))}:host(:not([disabled])) #listbox:focus-within,:host(:not([disabled]):focus-within) #listbox{outline:var(--simple-picker-listbox-outline,unset)}#icon{width:var(--simple-picker-icon-size,16px);height:var(--simple-picker-icon-size,16px);--simple-icon-width:var(--simple-picker-icon-size, 16px);--simple-icon-height:var(--simple-picker-icon-size, 16px);transform:var(--simple-picker-icon-transform,rotate(0));transition:transform .25s}:host([hide-option-labels]) #icon{margin-left:calc(-.125 * var(--simple-picker-icon-size,16px))}:host([expanded]) #icon{transform:var(--simple-picker-expanded-icon-transform,rotate(0));transition:transform .25s}#collapse{display:none;width:100%;position:absolute;top:var(--simple-picker-options-top);z-index:2;transition:z-index 0s}:host([expanded]:not([disabled])) #collapse{display:block;position:unset;background-color:var(--simple-picker-options-background-color,#fff)}.rows{display:block;position:absolute;z-index:1000;top:calc(var(--simple-picker-option-size,24px) + 2 * var(--simple-picker-options-border-width));border-width:var(--simple-picker-options-border-width,var(--simple-picker-border-width,1px));border-style:var(--simple-picker-options-border-style,var(--simple-picker-border-style,solid));border-color:var(--simple-picker-options-border-color,var(--simple-picker-border-color,var(--simple-picker-color-disabled,#888)));background-color:var(--simple-picker-options-background-color,#fff);max-height:var(--simple-picker-options-max-height,250px);overflow-y:auto;border:var(--simple-picker-options-border);transition:z-index 0s}.rows:focus-within{border:var(--simple-picker-options-focus-border,var(--simple-picker-options-border))}:host([align-right]) #collapse .rows{left:unset;right:calc(var(--simple-picker-options-border-width,var(--simple-picker-border-width,1px)) * 2)}:host([justify]) #collapse .rows{left:0;right:0}.row{display:flex;align-items:stretch;justify-content:space-between}simple-picker-option{z-index:1;flex:1 1 auto;justify-content:flex-start;max-height:unset;min-height:var(--simple-picker-option-size,24px);min-width:var(--simple-picker-option-size,24px);line-height:var(--simple-picker-option-size,24px);color:var(--simple-picker-color,currentColor);background-color:var(--simple-picker-options-background-color,#fff);transition:max-height 2s;transition:z-index 0s}simple-picker-option[selected]{z-index:50;color:var(--simple-picker-color,currentColor);background-color:var(--simple-picker-option-selected-background-color,var(--simple-picker-options-background-color,#fff))}simple-picker-option[active]{z-index:100;cursor:pointer;color:var(--simple-picker-color,currentColor);background-color:var(--simple-picker-option-active-background-color,#adf)}#sample simple-picker-option{color:var(--simple-picker-color,currentColor);background-color:var(--simple-picker-sample-background-color,transparent);--simple-picker-option-padding:var(
                --simple-picker-sample-padding,
                2px
              ) 0;border:none}:host([hide-sample]) #sample simple-picker-option{position:absolute;left:-9999px;overflow:hidden;width:0;height:0}:host(:focus-within) #sample simple-picker-option,:host(:hover) #sample simple-picker-option{--simple-picker-color:var(
              --simple-picker-color-active,
              var(--simple-picker-color, currentColor)
            )}:host(:not([expanded])) #collapse simple-picker-option{max-height:0;transition:max-height 1.5s}@media screen and (max-width:600px){:host{position:static}#collapse{top:0;margin-top:0;position:relative}.rows{position:absolute}}`]}render(){return i` <label id="listLabel" for="listbox" .hidden="${!this.label||""===this.label.trim()}" part="label"> ${this.label&&""!==this.label.trim()?this.label.trim():""} </label> <div id="listbox" .aria-activedescendant="${this.__activeDesc}" .aria-labelledby="${this.ariaLabelledby}" .disabled="${this.disabled||!this.__options}" part="input" role="option-input" tabindex="0" @click="${this._handleListboxClick}" @mousedown="${this._handleListboxMousedown}" @keydown="${this._handleListboxKeydown}"> <div id="sample" part="sample"> <simple-picker-option ?hide-option-labels="${this.hideOptionLabels}" ?title-as-html="${this.titleAsHtml}" .icon="${!!this.__selectedOption&&this.__selectedOption.icon}" .label="${!!this.__selectedOption&&this.__selectedOption.alt}" part="sample-option" .style="${!!this.__selectedOption&&this.__selectedOption.style}" aria-hidden="true"> </simple-picker-option> <simple-icon-lite id="icon" aria-hidden="true" icon="arrow-drop-down"></simple-icon-lite> </div> <div id="collapse" part="listbox"> <div class="rows" part="listbox-rows"> ${bl(this.expanded&&this.__options?this._renderOptions(this.__options):l)} </div> </div> </div>`}static get properties(){return{...super.properties,allowNull:{type:Boolean,reflect:!0,attribute:"allow-null"},alignRight:{type:Boolean,reflect:!0,attribute:"align-right"},ariaLabelledby:{type:String,attribute:"aria-labelledby"},blockLabel:{type:Boolean,reflect:!0,attribute:"block-label"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},expanded:{type:Boolean,reflect:!0,attribute:"expanded"},hideOptionLabels:{type:Boolean,reflect:!0,attribute:"hide-option-labels"},hideNullOption:{type:Boolean,reflect:!0,attribute:"hide-null-option"},hideSample:{type:Boolean,reflect:!0,attribute:"hide-sample"},justify:{type:Boolean,reflect:!0,attribute:"justify"},label:{type:String},options:{type:Array},titleAsHtml:{type:Boolean,attribute:"title-as-html"},value:{type:String,reflect:!0},__activeDesc:{type:String},__options:{type:Array},__selectedOption:{type:Object},__ready:{type:Boolean}}}static get tag(){return"simple-picker"}constructor(){super(),import("./a2aa14c0.js"),this.tag=zl.tag,this.allowNull=!1,this.alignRight=!1,this.ariaLabelledby=null,this.blockLabel=!1,this.disabled=!1,this.expanded=!1,this.hideOptionLabels=!1,this.hideSample=!1,this.label=null,this.__ready=!1,this.options=[],this.titleAsHtml=!1,this.value=null,this.__activeDesc="option-0-0",this.__hasLabel=!0,this.__selectedOption={},this.addEventListener("blur",(function(e){this.expanded=!1}));let e=zl.properties;for(let t in e)e.hasOwnProperty(t)&&(this.hasAttribute(t)?this[t]=this.getAttribute(t):(t.reflect&&this.setAttribute(t,e[t].value),this[t]=e[t].value))}get hideNull(){return!this.allowNull||this.hideNullOption}_renderOptions(e){return i`${(e||[]).map(((e,t)=>i` <div class="row" ?hidden="${!this._isRowHidden(e)}"> ${Array.isArray(e)?this._renderRow(e,t):l} </div> `))}`}_isRowHidden(e){return!Array.isArray(e)||e.filter((e=>!!e.value||!this.hideNull)).length<1}_renderRow(e,t){return i`${(e||[]).map(((e,o)=>i` <simple-picker-option @option-focus="${this._handleOptionFocus}" @set-selected-option="${this._handleSetSelectedOption}" ?active="${`${this.__activeDesc}`==`option-${t}-${o}`}" ?hide-option-labels="${this.hideOptionLabels}" ?hidden="${this.hideNull&&!e.value}" ?selected="${this.value===e.value}" ?title-as-html="${this.titleAsHtml}" .data="${this.data}" .icon="${e.icon}" .id="option-${t}-${o}" .label="${e.alt}" .style="${e.style}" aria-selected="${this.value===e.value?"true":"false"}" role="option" tabindex="-1" value="${e.value}"> </simple-picker-option> `))}`}updated(e){e.forEach(((e,t)=>{"value"===t&&this._valueChanged(e),"options"===t&&this._optionsChanged(e)})),this.dispatchEvent(new CustomEvent("changed",{detail:this}))}_getOption(e,t){if(void 0!==e&&null!=t){let i=t.split("-");return e[i[1]][i[2]]}return null}_goToOption(e,t){let o=i` option-${e}-${t} `,n=this.shadowRoot.querySelector("#"+o),a=this.shadowRoot.querySelector("#"+this.__activeDesc);null!==n&&(n.tabindex=0,n.focus(),a.tabindex=-1)}_handleListboxClick(e){this.disabled||(this.dispatchEvent(new CustomEvent("click",{detail:this})),this._toggleListbox())}_handleListboxMousedown(e){this.disabled||this.dispatchEvent(new CustomEvent("mousedown",{detail:this}))}_handleListboxKeydown(e){if(this.disabled)return;this.dispatchEvent(new CustomEvent("keydown",{detail:this}));let t=this.__activeDesc.split("-"),i=parseInt(t[1]),o=parseInt(t[2]);if(32===e.keyCode)e.preventDefault(),this._toggleListbox();else if(this.expanded&&[9,35,36,38,40].includes(e.keyCode))if(e.preventDefault(),35===e.keyCode){let e=(this.options||[]).length-1,t=this.options[e].length-1;this._goToOption(e,t)}else 36===e.keyCode?this._goToOption(0,0):38===e.keyCode?o>0?this._goToOption(i,o-1):i>0&&this._goToOption(i-1,this.options[i-1].length-1):40===e.keyCode&&(o<this.options[i].length-1?this._goToOption(i,o+1):i<(this.options||[]).length-1&&this._goToOption(i+1,[0]))}_handleOptionFocus(e){this._setActiveOption(e.detail.id)}_setActiveOption(e){this.__activeDesc=e,this.dispatchEvent(new CustomEvent("option-focus",{detail:this}))}_valueChanged(e){this._setSelectedOption(),this.dispatchEvent(new CustomEvent("value-changed",{detail:this}))}_optionsChanged(e){this.__ready=(this.options||[]).length>0,this.__ready&&this._setSelectedOption()}_setSelectedOption(){if(this.__selectedOption&&this.__selectedOption.value===this.value)return;let e=!this.allowNull&&(this.options||[]).length>0&&this.options[0].length>0?this.options[0][0].value:null;if(this.options&&this.options.length>0){this.__options="string"==typeof this.options?JSON.parse(this.options):this.options,this.__activeDesc=this.allowNull?"option-0-0":null;for(var t=0;t<this.__options.length;t++){let o=!1;for(var i=0;i<this.__options[t].length;i++)null!==this.value&&null===this.__activeDesc&&(this.__activeDesc=`option-${t}-${i}`),`${this.__options[t][i].value}`==`${this.value}`&&(this.__activeDesc=`option-${t}-${i}`,e=this.__options[t][i],i=this.__options[t].length,o=!0);o&&(t=(this.__options||[]).length)}null===e&&(this.value=null),this.__selectedOption=e}this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:this}))}_toggleListbox(e=!this.expanded){if(this.disabled)return;let t=this.shadowRoot.querySelector("#"+this.__activeDesc);this.expanded=e,e?(null!==t&&t.focus(),this.dispatchEvent(new CustomEvent("expand",{detail:this}))):(null!==t&&(this.value=t.value),this.dispatchEvent(new CustomEvent("collapse",{detail:this})))}setOptions(e){this.set("options",[[]]),this.set("options",e)}disconnectedCallback(){this.removeEventListener("blur",(function(e){this.expanded=!1})),super.disconnectedCallback()}}}(e)){}window.customElements.define(zl.tag,zl);class xl extends e{static get styles(){return[t`:host{display:block;--simple-picker-border-width:0;--simple-picker-options-border-width:1px;--simple-picker-options-border-color:var(
            --simple-fields-accent-color
          );--simple-picker-background-color:rgba(255, 255, 255, 0)}:host([hidden]){display:none}`]}render(){return i` <simple-fields-container id="menu" .error-message="${this.errorMessage}" .label="${this.label}"> <simple-picker id="picker" slot="field" value="${this.value}" @expand="${this._onOpen}" @collapse="${this.onClose}" @changed="${this._dropDownChanged}"> </simple-picker> </simple-fields-container> <slot id="content" hidden></slot> `}static get tag(){return"dropdown-select"}constructor(){super(),this.label="Select an option.",this.options=[[]],this.opened=!1,this.setOptions(),this.observer.observe(this,{attributes:!1,childList:!0,subtree:!1}),Promise.resolve().then((function(){return Sl}))}disconnectedCallback(){this.observer.disconnect(),super.disconnectedCallback()}static get properties(){return{errorMessage:{attribute:"error-message",type:String},label:{type:String},opened:{type:Boolean},options:{type:Array},selectedItem:{attribute:"selected-item",type:Object},selectedItemIndex:{attribute:"selected-item-index",type:Number},selectedItemLabel:{attribute:"selected-item-label",type:String},value:{type:String,reflect:!0}}}get observer(){return new MutationObserver((()=>this.setOptions()))}setOptions(){let e=[];this.querySelectorAll("paper-item").forEach(((t,i)=>{e.push([{alt:t.innerHTML,style:t.getAttribute("style")||void 0,icon:t.querySelector("[icon]")?t.querySelector("[icon]").getAttribute("icon"):void 0,value:t.getAttribute("value")||t.getAttribute("id")||i}])})),e===[]&&(e=[[]]),this.options=e}updated(e){let t=this.shadowRoot&&this.shadowRoot.querySelector("#picker")?this.shadowRoot.querySelector("#picker"):void 0;e.forEach(((e,i)=>{"value"===i&&this._valueChanged(this.value,e),"options"===i&&this.options!==e&&(t.options=this.options)})),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}_onOpen(){this.opened=!0,this.dispatchEvent(new CustomEvent("open",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}_onClose(){this.opened=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}_dropDownChanged(e){let t=this.shadowRoot&&this.shadowRoot.querySelector("#picker")?this.shadowRoot.querySelector("#picker"):void 0;this.value=t.value}_valueChanged(e,t){let i=null,o=null,n=-1;this.selectedItem=this.value,this.options.forEach((e=>e.forEach((e=>{this.value===e.value&&(i=e.alt||e.value,o=n++)})))),this.selectedItemLabel=i,this.selectedItemIndex=o,void 0!==t&&(this.dispatchEvent(new CustomEvent("value-changed",{bubbles:!0,cancelable:!0,composed:!0,target:this,detail:{value:e,oldValue:t}})),this.dispatchEvent(new CustomEvent("dropdown-select-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:this})))}}window.customElements.define(xl.tag,xl);
/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class _l extends e{static get styles(){return[t`:host{display:block;position:absolute;outline:0;z-index:1002;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:default}#tooltip{display:block;outline:0;font-size:var(--simple-tooltip-font-size,10px);line-height:1;background-color:var(--simple-tooltip-background,#616161);color:var(--simple-tooltip-text-color,#fff);padding:8px;border-radius:var(--simple-tooltip-border-radius,2px);width:var(--simple-tooltip-width)}@keyframes keyFrameScaleUp{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes keyFrameScaleDown{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes keyFrameFadeInOpacity{0%{opacity:0}100%{opacity:var(--simple-tooltip-opacity,.9)}}@keyframes keyFrameFadeOutOpacity{0%{opacity:var(--simple-tooltip-opacity,.9)}100%{opacity:0}}@keyframes keyFrameSlideDownIn{0%{transform:translateY(-2000px);opacity:0}10%{opacity:.2}100%{transform:translateY(0);opacity:var(--simple-tooltip-opacity,.9)}}@keyframes keyFrameSlideDownOut{0%{transform:translateY(0);opacity:var(--simple-tooltip-opacity,.9)}10%{opacity:.2}100%{transform:translateY(-2000px);opacity:0}}.fade-in-animation{opacity:0;animation-delay:var(--simple-tooltip-delay-in,500ms);animation-name:keyFrameFadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in,500ms);animation-fill-mode:forwards}.fade-out-animation{opacity:var(--simple-tooltip-opacity,.9);animation-delay:var(--simple-tooltip-delay-out,0ms);animation-name:keyFrameFadeOutOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out,500ms);animation-fill-mode:forwards}.scale-up-animation{transform:scale(0);opacity:var(--simple-tooltip-opacity,.9);animation-delay:var(--simple-tooltip-delay-in,500ms);animation-name:keyFrameScaleUp;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in,500ms);animation-fill-mode:forwards}.scale-down-animation{transform:scale(1);opacity:var(--simple-tooltip-opacity,.9);animation-delay:var(--simple-tooltip-delay-out,500ms);animation-name:keyFrameScaleDown;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out,500ms);animation-fill-mode:forwards}.slide-down-animation{transform:translateY(-2000px);opacity:0;animation-delay:var(--simple-tooltip-delay-out,500ms);animation-name:keyFrameSlideDownIn;animation-iteration-count:1;animation-timing-function:cubic-bezier(0,0,.2,1);animation-duration:var(--simple-tooltip-duration-out,500ms);animation-fill-mode:forwards}.slide-down-animation-out{transform:translateY(0);opacity:var(--simple-tooltip-opacity,.9);animation-delay:var(--simple-tooltip-delay-out,500ms);animation-name:keyFrameSlideDownOut;animation-iteration-count:1;animation-timing-function:cubic-bezier(.4,0,1,1);animation-duration:var(--simple-tooltip-duration-out,500ms);animation-fill-mode:forwards}.cancel-animation{animation-delay:-30s!important}.hidden{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}`]}render(){return i` <div id="tooltip" class="hidden" @animationend="${this._onAnimationEnd}"> <slot></slot> </div>`}static get properties(){return{...super.properties,for:{type:String},manualMode:{type:Boolean,attribute:"manual-mode"},position:{type:String},fitToVisibleBounds:{type:Boolean,attribute:"fit-to-visible-bounds"},offset:{type:Number},marginTop:{type:Number,attribute:"margin-top"},animationDelay:{type:Number,attribute:"animation-delay"},animationEntry:{type:String,attribute:"animation-entry"},animationExit:{type:String,attribute:"animation-exit"},_showing:{type:Boolean}}}static get tag(){return"simple-tooltip"}constructor(){super(),this.manualMode=!1,this.position="bottom",this.fitToVisibleBounds=!1,this.offset=14,this.marginTop=14,this.animationEntry="",this.animationExit="",this.animationConfig={entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]},setTimeout((()=>{this.addEventListener("webkitAnimationEnd",this._onAnimationEnd.bind(this)),this.addEventListener("mouseenter",this.hide.bind(this))}),0)}get target(){var e=this.parentNode,t=this.getRootNode();return this.for?t.querySelector("#"+this.for):e.nodeType==Node.DOCUMENT_FRAGMENT_NODE?t.host:e}disconnectedCallback(){this.manualMode||this._removeListeners(),super.disconnectedCallback()}playAnimation(e){"entry"===e?this.show():"exit"===e&&this.hide()}cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.add("cancel-animation")}show(){if(!this._showing){if(""===this.textContent.trim()){for(var e=!0,t=this.children,i=0;i<t.length;i++)if(""!==t[i].textContent.trim()){e=!1;break}if(e)return}this._showing=!0,this.shadowRoot.querySelector("#tooltip").classList.remove("hidden"),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("entry"))}}hide(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0,clearTimeout(this.__debounceCancel),this.__debounceCancel=setTimeout((()=>{this._cancelAnimation()}),5e3)}}updatePosition(){if(this._target&&this.offsetParent){var e=this.offset;14!=this.marginTop&&14==this.offset&&(e=this.marginTop);var t,i,o=this.offsetParent.getBoundingClientRect(),n=this._target.getBoundingClientRect(),a=this.getBoundingClientRect(),l=(n.width-a.width)/2,r=(n.height-a.height)/2,s=n.left-o.left,c=n.top-o.top;switch(this.position){case"top":t=s+l,i=c-a.height-e;break;case"bottom":t=s+l,i=c+n.height+e;break;case"left":t=s-a.width-e,i=c+r;break;case"right":t=s+n.width+e,i=c+r}this.fitToVisibleBounds?(o.left+t+a.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,t)+"px",this.style.right="auto"),o.top+i+a.height>window.innerHeight?(this.style.bottom=o.height-c+e+"px",this.style.top="auto"):(this.style.top=Math.max(-o.top,i)+"px",this.style.bottom="auto")):(this.style.left=t+"px",this.style.top=i+"px")}}_addListeners(){this._target&&(this._target.addEventListener("mouseenter",this.show.bind(this)),this._target.addEventListener("focus",this.show.bind(this)),this._target.addEventListener("mouseleave",this.hide.bind(this)),this._target.addEventListener("blur",this.hide.bind(this)),this._target.addEventListener("tap",this.hide.bind(this)))}_findTarget(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()}_manualModeChanged(){this.manualMode?this._removeListeners():this._addListeners()}_cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add("hidden")}_onAnimationFinish(){this._showing&&(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("exit")))}_onAnimationEnd(){this._animationPlaying=!1,this._showing||(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.add("hidden"))}_getAnimationType(e){if("entry"===e&&""!==this.animationEntry)return this.animationEntry;if("exit"===e&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[e]&&"string"==typeof this.animationConfig[e][0].name){if(this.animationConfig[e][0].timing&&this.animationConfig[e][0].timing.delay&&0!==this.animationConfig[e][0].timing.delay){var t=this.animationConfig[e][0].timing.delay;"entry"===e?document.documentElement.style.setProperty("--simple-tooltip-delay-in",t+"ms"):"exit"===e&&document.documentElement.style.setProperty("--simple-tooltip-delay-out",t+"ms")}return this.animationConfig[e][0].name}}_removeListeners(){this._target&&(this._target.removeEventListener("mouseover",this.show.bind(this)),this._target.removeEventListener("focusin",this.show.bind(this)),this._target.removeEventListener("mouseout",this.hide.bind(this)),this._target.removeEventListener("focusout",this.hide.bind(this)),this._target.removeEventListener("click",this.hide.bind(this)))}firstUpdated(e){this.setAttribute("role","tooltip"),this.setAttribute("tabindex",-1),this._findTarget()}updated(e){e.forEach(((e,t)=>{"for"==t&&this._findTarget(this[t],e),"manualMode"==t&&this._manualModeChanged(this[t],e),"animationDelay"==t&&this._delayChange(this[t],e)}))}_delayChange(e){500!==e&&document.documentElement.style.setProperty("--simple-tooltip-delay-in",e+"ms")}}customElements.define(_l.tag,_l);
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class wl extends e{static get styles(){return[Ga,t`:host{display:block;--lrnsys-button-height:48px}:host([raised]){border:2px solid #000}:host([disabled]){pointer-events:none}simple-icon.white-text{--simple-colors-default-theme-accent-12:white}a{text-decoration:none;display:block;color:var(--lrnsys-button-link-color,#000);display:flex}button{padding:0;margin:0;min-width:.16px;height:inherit;-webkit-justify-content:flex-start;justify-content:flex-start;align-items:center;width:100%;text-transform:unset;border-radius:unset;display:flex;background-color:transparent;border:none;cursor:pointer}button:hover{cursor:pointer}:host([no-padding]) button div.inner{padding:0}button simple-icon{--simple-icon-height:var(--lrnsys-button-height);margin:0 4px}button simple-icon:first-child{margin:0 4px 0 0}button simple-icon:last-child{margin:0 0 0 4px}button div.inner{height:var(--lrnsys-button-height);line-height:var(--lrnsys-button-height);display:flex;padding:0 16px}button span.label{height:var(--lrnsys-button-height);line-height:var(--lrnsys-button-height)}.no-margin{margin:0!important}.no-right-padding{padding-right:0!important}.no-left-padding{padding-left:0!important}`]}constructor(){super(),this.href=null,this.target=null,this.label="",this.icon="",this.alt="",this.iconClass="",this.buttonClass="",this.color="",this.textColor="",this.focusState=!1,this.disabled=!1,setTimeout((()=>{this.addEventListener("mousedown",this.tapEventOn.bind(this)),this.addEventListener("mouseover",this.tapEventOn.bind(this)),this.addEventListener("focusin",this.tapEventOn.bind(this)),this.addEventListener("focusout",this.tapEventOff.bind(this)),this.addEventListener("mouseout",this.tapEventOff.bind(this))}),0)}firstUpdated(e){this.updated(e)}updated(e){e.forEach(((e,t)=>{this.shadowRoot&&["href","target"].includes(t)&&(this[t]?this.shadowRoot.querySelector("#lrnsys-button-link")[t]=this[t]:this.shadowRoot.querySelector("#lrnsys-button-link").removeAttribute(t))}))}render(){return i` <a tabindex="-1" id="lrnsys-button-link" part="lrnsys-button-link" ?disabled="${this.disabled}"> <button id="button" title="${this.alt}" class="${this.buttonClass} ${this.color} ${this.textColor}" part="lrnsys-button-button" ?disabled="${this.disabled}" @focus-changed="${this.focusToggle}"> <div class="inner ${this.innerClass}" part="lrnsys-button-inner-div"> <slot name="prefix"></slot> <simple-icon icon="${this.icon}" id="icon" ?dark="${this.dark}" accent-color="grey" contrast="4" class="${this.iconClass}" part="lrnsys-button-icon" ?hidden="${!this.icon}"></simple-icon> <span class="label" part="lrnsys-button-label" ?hidden="${!this.label}"> ${this.label} </span> <slot></slot> </div> </button> </a> <simple-tooltip for="lrnsys-button-link" part="lrnsys-button-tooltip" animation-delay="0" ?hidden="${!this.alt}">${this.alt}</simple-tooltip> `}static get tag(){return"lrnsys-button"}static get properties(){return{href:{type:String,reflect:!0},raised:{type:Boolean,reflect:!0},label:{type:String},target:{type:String},icon:{type:String,reflect:!0},hoverClass:{type:String,reflect:!0,attribute:"hover-class"},buttonClass:{type:String,attribute:"button-class"},iconClass:{type:String,attribute:"icon-class"},innerClass:{type:String,attribute:"inner-class"},color:{type:String,reflect:!0},textColor:{type:String,attribute:"text-color"},alt:{type:String},disabled:{type:Boolean},dark:{type:Boolean,reflect:!0},focusState:{type:Boolean,attribute:"focus-state"}}}tapEventOn(e){void 0===this.hoverClass||this.disabled||this.hoverClass.split(" ").forEach(((e,t)=>{""!=e&&(this.shadowRoot.querySelector("#button").classList.add(e),-1!=e.indexOf("-")&&this.shadowRoot.querySelector("#icon").classList.add(e))}))}tapEventOff(e){void 0===this.hoverClass||this.disabled||this.hoverClass.split(" ").forEach(((e,t)=>{""!=e&&(this.shadowRoot.querySelector("#button").classList.remove(e),-1!=e.indexOf("-")&&this.shadowRoot.querySelector("#icon").classList.remove(e))}))}focusToggle(e){void 0===this.hoverClass||this.disabled||this.hoverClass.split(" ").forEach(((e,t)=>{""!=e&&(this.focusState?(this.shadowRoot.querySelector("#button").classList.remove(e),-1!=e.indexOf("-")&&this.shadowRoot.querySelector("#icon").classList.remove(e)):(this.shadowRoot.querySelector("#button").classList.add(e),-1!=e.indexOf("-")&&this.shadowRoot.querySelector("#icon").classList.add(e)))}));this.focusState=!this.focusState}}window.customElements.define(wl.tag,wl);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class kl extends(Yo([yn,Pn],gt)){static get template(){return ft` <div id="dom"><slot></slot></div> `}static get tag(){return"grafitto-filter"}static get properties(){return{...super.properties,items:{type:Array,value:[]},like:{type:String,value:""},where:{type:String,value:"name"},caseSensitive:{type:Boolean,value:!1,reflectToAttribute:!0},as:{type:String,value:"items"},filtered:{type:Array,computed:"_computeFiltered(items, where, like, caseSensitive)",observer:"_onFilter",notify:!0},f:{type:Function,notify:!0}}}static get observers(){return["_populateUserTemplate(filtered)"]}filter(){this.where=""}_computeFiltered(e,t,i,o){var n=null;n=o?new RegExp(i):new RegExp(i,"i");var a=[];if(this.f){var l=this.f.bind(this);a=e.filter(l)}else{var r=this._decomposeWhere.bind(this);a=e.filter((function(e){if("object"==typeof e){var i=r(t,e);return void 0===i&&""!=t&&console.warn("grafitto-filter was unable to find a property in '"+t+"'"),n.test(i)}return"string"==typeof e?n.test(e):"number"==typeof e?n.test(e.toString()):void 0}))}return a}_populateUserTemplate(e){this.ctor?this.__clone[this.as]=e:(this._userTemplate=this.querySelector("template"),this._userTemplate||console.warn("grafitto-filter requires a template to be provided in light-dom"),this.templatize(this._userTemplate),this.__clone=this.stamp(null),this.__clone[this.as]=e,this.appendChild(this.__clone.root))}_decomposeWhere(e,t){return e.split(".").reduce((function(e,t){return e&&e[t]}),t)}_onFilter(){this.dispatchEvent(new CustomEvent("filter",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))}}window.customElements.define(kl.tag,kl);const Ml=[t`:host{visibility:visible;box-sizing:border-box;display:block;margin:0 0 var(--simple-fields-margin,16px);padding:0;font-size:var(--simple-fields-font-size);font-family:var(--simple-fields-font-family,sans-serif);line-height:var(--simple-fields-line-height);font-size:var(--simple-fields-detail-font-size,12px);font-family:var(--simple-fields-detail-font-family,sans-serif);line-height:var(--simple-fields-detail-line-height,130%);background-color:var(--simple-fields-background-color,#fff);color:var(--simple-fields-color,currentColor);margin:0 0 var(--simple-fields-field-margin,var(--simple-fields-margin,16px));--simple-picker-options-border:1px solid var(
          --simple-fields-button-border-color,
          var(--simple-fields-border-color, #999)
        );--simple-picker-options-focus-border:1px solid var(--simple-fields-accent-color, #3f51b5)}::slotted([slot=field]){--simple-picker-options-left:0;--simple-picker-options-right:0;--simple-picker-options-border:1px var(
          --simple-fields-button-border-color,
          var(--simple-fields-border-color, #999)
        ) solid;--simple-picker-options-focus-border:1px var(--simple-fields-accent-color, #3f51b5) solid}:host [hidden],:host([hidden]),:host([type=hidden]){display:none!important}ul[role=listbox]{z-index:2;opacity:0;margin:0;padding:0;top:100%;background-color:var(--simple-fields-background-color,#fff);color:var(--simple-fields-color,currentColor);border:1px var(--simple-fields-button-border-color,var(--simple-fields-border-color,#999)) solid;overflow:auto}ul[role=listbox].focus,ul[role=listbox]:focus,ul[role=listbox]:focus-within{border-color:var(--simple-fields-accent-color,#3f51b5)}:host([disabled]),[disabled]{pointer-events:none!important}`],Hl=[t`:host .label-main:after{content:var(--simple-fields-label-flag, "")}:host(:focus-within) .label-main,:host([focused]) .label-main{color:var(--simple-fields-accent-color,#3f51b5);transition:color .3s ease-in-out}.inline{--simple-fields-radio-option-display:flex;--simple-fields-radio-option-flex-wrap:wrap}label{margin:0}.inline label,.option label{margin:0 var(--simple-fields-margin-small,8px) 0 0;flex:0 1 var(--simple-fields-label-width,auto)}.field,.field-main>div,.inline label,.option label,::slotted([slot=field]){font-size:var(--simple-fields-font-size,16px);text-align:var(--simple-fields-text-align);font-family:var(--simple-fields-font-family,sans-serif);line-height:var(--simple-fields-line-height,22px)}`];t`simple-toolbar-button::part(tooltip),simple-tooltip{text-transform:var(--simple-fields-tooltip-text-transform,unset);font-family:var(--simple-fields-detail-font-family,var(--simple-fields-font-family,sans-serif));font-size:var(--simple-fields-tooltip-font-size,var(--simple-fields-detail-font-size,12px));line-height:var(--simple-fields-tooltip-line-height,var(--simple-fields-detail-line-height,22px));border-radius:var(--simple-fields-border-radius,var(--simple-fields-tooltip-border-radius,2px))}`;t`button,button[aria-selected],simple-toolbar-button::part(button),simple-toolbar-menu::part(button){color:var(--simple-fields-button-color,var(--simple-fields-color));background-color:var(--simple-fields-button-background-color,var(--simple-fields-background-color));border-width:1px;border-style:solid;border-color:var(--simple-fields-button-border-color,var(--simple-fields-border-color,#999));opacity:var(--simple-fields-button-focus-opacity,1);font-family:var(--simple-fields-button-font-family,var(--simple-fields-font-family,sans-serif));font-size:var(--simple-fields-button-font-size,14px);line-height:var(--simple-fields-button-line-height 22px);text-transform:var(--simple-fields-button-text-transform,unset);border-radius:var(--simple-fields-border-radius,2px);padding:var(--simple-fields-button-padding-sm,1px) var(--simple-fields-button-padding,2px);min-height:calc(24px + 2 * var(--simple-fields-button-padding-sm,2px) + 2px)}simple-toolbar-menu-item>simple-toolbar-button::part(button){border-color:transparent;border-radius:0!important}simple-toolbar-button.danger::part(button),simple-toolbar-menu.danger::part(button){background-color:var(--simple-fields-button-danger-color,var(--simple-fields-error-color,#b40000));color:var(--simple-fields-button-danger-background-color,#fff)}button[aria-pressed=true],button[aria-selected=true],simple-toolbar-button[toggled]::part(button){color:var(--simple-fields-button-toggled-color,var(--simple-fields-accent-color,#3f51b5));background-color:var(--simple-fields-button-toggled-background-color,unset);border-color:var(--simple-fields-button-toggled-border-color,var(--simple-fields-color,currentColor));opacity:var(--simple-fields-button-toggled-opacity,1)}simple-toolbar-menu-item>simple-toolbar-button.danger:focus-within::part(button[aria-pressed=true]),simple-toolbar-menu-item>simple-toolbar-button.danger:hover::part(button[aria-pressed=true]){background-color:var(--simple-fields-button-danger-color,var(--simple-fields-error-color,#b40000));color:var(--simple-fields-button-danger-background-color,#fff);border-color:var(--simple-fields-button-danger-focus-color,#8a0000)}button:focus,button:hover,button[aria-selected=false]:not([disabled]):focus,button[aria-selected=false]:not([disabled]):hover,simple-toolbar-button:focus-within::part(button),simple-toolbar-button:hover::part(button),simple-toolbar-menu-item>simple-toolbar-button:focus-within::part(button),simple-toolbar-menu-item>simple-toolbar-button:hover::part(button),simple-toolbar-menu:focus-within::part(button),simple-toolbar-menu:hover::part(button){color:var(--simple-fields-button-focus-color,unset);background-color:var(--simple-fields-button-focus-background-color,var(--simple-fields-accent-color-light,#d9eaff));border-color:var(--simple-fields-button-focus-border-color,var(--simple-fields-accent-color,#3f51b5));opacity:var(--simple-fields-button-focus-opacity,1);text-decoration:var(--simple-fields-button-focus-text-decoration,unset)}simple-toolbar-menu-item>simple-toolbar-button.danger:focus-within::part(button),simple-toolbar-menu-item>simple-toolbar-button.danger:hover::part(button),simple-toolbar-menu.danger:focus-within::part(button),simple-toolbar-menu.danger:hover::part(button){background-color:var(--simple-fields-button-danger-focus-color,#8a0000);color:var(--simple-fields-button-danger-background-color,#fff);border-color:var(--simple-fields-button-danger-focus-color,#8a0000)}button:disabled,button[disabled],simple-toolbar-button[disabled],simple-toolbar-menu[disabled]{color:var(--simple-fields-button-disabled-color,unset);background-color:var(--simple-fields-button-disabled-background-color,unset);border-color:var(--simple-fields-button-disabled-border-color,unset);opacity:var(--simple-fields-button-disabled-opacity,var(--simple-fields-disabled-opacity,.7))}`;const Cl=[t`[part=error-desc],[part=error-meta],[part=field-desc]{color:var(--simple-fields-meta-color);font-size:var(--simple-fields-meta-font-size,10px);line-height:var(--simple-fields-meta-line-height,110%);opacity:var(--simple-fields-meta-opacity,unset);text-transform:none}:host:hover [part=error-desc],:host:hover [part=error-meta],:host:hover [part=field-desc],:host:hover-within [part=error-desc],:host:hover-within [part=error-meta]{color:var(--simple-fields-focus-meta-color);opacity:var(--simple-fields-focus-meta-opacity,unset)}`];t`fieldset{padding:var(--simple-fields-margin-small,8px) var(--simple-fields-margin,16px);margin:var(--simple-fields-margin-small,8px) 0 var(--simple-fields-margin,16px);border-width:1px;border-style:solid;border-color:var(--simple-fields-fieldset-border-color,var(--simple-fields-border-color-light,#ccc));border-radius:var(--simple-fields-border-radius,2px);transition:all .3s ease-in-out;max-width:calc(100% - 2 * var(--simple-fields-margin,16px) - 2px)}:host(:last-of-type){margin-bottom:0}[part=legend]{font-family:var(--simple-fields-font-family,sans-serif);font-size:var(--simple-fields-legend-font-size,var(--simple-fields-font-size,16px));line-height:var(--simple-fields-line-height,22px);text-transform:var(--simple-fields-legend-text-transform,unset)}:host([error]) [part=legend]{color:var(--simple-fields-error-color,#b40000);transition:all .3s ease-in-out}`;const Vl=function(e){return class extends e{static get tag(){return"simple-fields-container"}static get styles(){return[...Ml,...Hl,...Cl,t`:host{display:block}:host([error]){color:var(--simple-fields-error-color,#b40000);transition:color .3s ease-in-out}:host([disabled]){color:var(--simple-fields-disabled-color,#999)}#field-bottom,.field-main.inline,.field-main>div{display:flex;align-items:stretch;justify-content:flex-start}*{flex:1 1 auto}#fieldmeta{text-align:right}.field,::slotted([slot=field]){width:auto;border:none;color:var(--simple-fields-color,currentColor);background-color:var(--simple-fields-background-color,transparent);transition:opacity ease-in-out;flex:1 0 auto}::slotted([slot=field]:focus){outline:0}::slotted([type=checkbox][slot=field]:focus),::slotted([type=checkbox][slot=radio]:focus),:host[inline] ::slotted([slot=field]:focus){outline:unset}.field-main.inline .field,.field-main.inline ::slotted([slot=field]){min-width:var(--simple-fields-detail-line-height,22px);height:var(--simple-fields-detail-line-height,22px);margin:0 var(--simple-fields-margin-small,8px) 0 0}.field[disabled],:host([readonly]) ::slotted([slot=field]){opacity:var(--simple-fields-disabled-opacity,.7);transition:opacity ease-in-out}.field[disabled],.field[readonly],:host([disabled]) ::slotted([slot=field]),:host([readonly]) ::slotted([slot=field]){cursor:not-allowed;pointer-events:none}.border-bottom{height:0}:host([disabled]) .border-bottom{border-bottom:var(--simple-fields-border-bottom-disabled-size,var(--simple-fields-border-bottom-size,1px)) dashed var(--simple-fields-border-color,#999)}.border-bottom.blur{border-bottom:var(--simple-fields-border-bottom-size,1px) solid var(--simple-fields-border-color,#999);width:100%}.border-bottom.focus{margin:-1px auto 0;width:0;border-bottom:var(--simple-fields-border-bottom-focus-size,2px) solid var(--simple-fields-accent-color,#3f51b5);transition:width .5s ease-in-out}:host(:focus-within) .border-bottom.focus{width:100%;transition:width .5s ease-in-out}:host([type=checkbox]) .border-bottom,:host([type=color]) .border-bottom,:host([type=file]) .border-bottom,:host([type=radio]) .border-bottom,:host([type=range]) .border-bottom{display:none}::slotted(label:focus),::slotted(label:focus-within),::slotted(label:hover){color:var(--simple-fields-accent-color,#3f51b5);transition:background-color .3s ease-in-out}::slotted(input){padding:0}::slotted(textarea[slot=field]){margin:0;transition:height .5s ease-in-out;box-sizing:border-box;vertical-align:bottom}::slotted(fieldset[slot=field]){margin:0;padding:0;border:none;font-size:var(--simple-fields-font-size,16px);font-family:var(--simple-fields-font-family,sans-serif);line-height:var(--simple-fields-line-height,22px);display:var(--simple-fields-radio-option-display,block);flex-wrap:var(--simple-fields-radio-option-flex-wrap,wrap);transition:color .3s ease-in-out}::slotted(fieldset[slot=field]:focus),::slotted(fieldset[slot=field]:focus-within),::slotted(fieldset[slot=field]:hover){color:var(--simple-fields-accent-color,#3f51b5)}`]}render(){return i` ${this.fieldMainTemplate} ${this.fieldBottom} `}static get properties(){return{autovalidate:{type:Boolean},counter:{type:String},description:{type:String},disabled:{type:Boolean,reflect:!0},defaultErrorMessage:{type:String},defaultRequiredMessage:{type:String},error:{type:Boolean,reflect:!0},errorMessage:{type:String},hidden:{type:Boolean,reflect:!0},field:{type:Object},id:{type:String,reflect:!0},inline:{type:Boolean,reflect:!0},label:{type:String},minchecked:{type:Number},maxchecked:{type:Number},maxwords:{type:Number},name:{type:String,reflect:!0},numberMessage:{type:String},pattern:{type:String},patternMessage:{type:String},prefix:{type:String},readonly:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},requiredMessage:{type:String},suffix:{type:String},type:{type:String},validTypes:{type:Array},isSimpleFieldType:{type:Boolean,reflect:!0,attribute:"is-simple-field-type"},value:{type:Object},__delayedFocus:{type:Boolean}}}constructor(){super(),this.isSimpleFieldType=!0,this.counter="none",this.autovalidate=!1,this.disabled=!1,this.hidden=!1,this.error=!1,this.id=this._generateUUID(),this.inline=!1,this.blockList=!1,this.validTypes=["checkbox","color","date","datetime-local","email","file","fieldset","hidden","month","number","password","radio","range","search","select","tel","text","textarea","time","url","week"],this._observeAndListen(),this.addEventListener("click",this.focus)}disconnectedCallback(){this.removeEventListener("click",this.focus),super.disconnectedCallback()}autoGrow(e=this.field){this.field&&(this.field.style.height="auto",this.field.style.height=`${this.field.scrollHeight}px`,this.field.style.overflowY="hidden")}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),this._updateField()}updated(e){let t=!1;e.forEach(((e,i)=>{"error"===i&&this.error!==e&&(t=!0),"errorMessage"===i&&this.errorMessage!==e&&(t=!0),"error"===i&&this.field&&this.field.setAttribute("aria-invalid",this.error?"true":"false")})),t&&this._fireErrorChanged()}get descriptionTemplate(){return i` <div id="description" part="field-desc"> <slot name="description"></slot> ${this.description} </div> `}get errorTemplate(){return i` <div id="error-message" ?hidden="${!this.error}" role="alert" part="error-msg"> ${this.errorMessage} </div> `}get fieldBottom(){return i` <div class="border-bottom blur"></div> <div class="border-bottom focus"></div> <div id="field-bottom" part="field-bottom"> <div id="error-desc" part="field-bottom-inner"> ${this.descriptionTemplate} ${this.errorTemplate} </div> ${this.fieldMeta} </div> `}get fieldId(){return`${this.id||"field"}.input`}get fieldMainTemplate(){return i` <div class="${this.inline||["checkbox","color","radio"].includes(this.type||"text")?"field-main inline":"field-main"}" part="field-main"> ${this.labelTemplate} <div part="field-inner"> ${this.prefixTemplate} <slot name="field"></slot> ${this.suffixTemplate} </div> </div> `}get fieldMeta(){return i` <div id="fieldmeta" aria-live="polite" part="field-meta"> <slot name="field-meta"></slot> </div> `}get hasFieldset(){return"fieldset"===this.type}get labelTemplate(){return i` <label id="${this.fieldId}-label" for="${this.fieldId}" class="label-main" ?hidden="${"fieldset"===this.type}" part="label"> <slot name="label-prefix"></slot> <slot name="label"></slot> ${this.label}${this.error||this.required?"*":""} </label> `}get multicheck(){return this.hasFieldset&&this.field.querySelector("input[type=checkbox]")}get numberError(){let e=!!this._getFieldValue()&&this._getFieldValue().length,t="select"===this.type?this.min:!!this.multicheck&&this.minchecked,i="select"===this.type?this.max:!!this.multicheck&&this.maxchecked;return i&&e&&i<e?i-e:!!(t&&e&&t>e)&&t-e}get numeric(){return["date","month","week","time","datetime-local","number","range"].includes(this.type)}get patternError(){return this.pattern&&""!==this.pattern&&this._getFieldValue()&&(this.field.multiple?this._getFieldValue().filter((e=>!e.match(this.pattern))):!this._getFieldValue().match(this.pattern))}get prefixTemplate(){return i` <slot name="prefix"></slot> ${this.prefix} `}get requiredError(){return!this._getFieldValue()&&this.required}get slottedFieldObserver(){return new MutationObserver(this._updateField)}get suffixTemplate(){return i` <slot name="suffix"></slot> ${this.suffix} `}focus(){this.field?(this.field.focus(),this.__delayedFocus=!1):this.__delayedFocus=!0}select(){!this.field||"text"!==this.type&&"textarea"!==this.type||this.field.select()}setRangeText(e,t,i,o){!this.field||"text"!==this.type&&"textarea"!==this.type||this.field.setRangeText(e,t,i,o)}setSelectionRange(e,t,i){!this.field||"text"!==this.type&&"textarea"!==this.type||this.field.setSelectionRange(e,t,i)}stepDown(e=1){this.field&&this.numeric&&this.field.stepDown()}stepUp(e=1){this.field&&this.numeric&&this.field.stepUp()}validate(){let e=this.field.querySelector("legend");return this.requiredError?(this.error=!0,this.errorMessage=this.requiredMessage||"required"):this.numberError?(this.error=!0,this.errorMessage=this.numberMessage||(this.numberError>0?`select ${this.numberError} more`:`select ${0-this.numberError} fewer`)):this.patternError&&(this.error=!0,this.errorMessage=this.patternMessage||"invalid format"),this.hasFieldset&&e&&(e.innerHTML=e.innerHTML.replace(/\**\s*$/,this.error?"*":""),e.style.color=this.error?"var(--simple-fields-error-color, #b40000)":""),!this.error}_fireErrorChanged(){this.dispatchEvent(new CustomEvent("error-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}_generateUUID(){return"ss-s-s-s-sss".replace(/s/g,Math.floor(65536*(1+Math.random())).toString(16).substring(1))}_getFieldsetValue(){let e,t;return this.field.querySelector("input[type=radio]")?(e=this.field.querySelector("input:checked"),t=e?e.value:void 0):this.field.querySelector("input[type=checkbox]")&&(t=[],e=this.field.querySelectorAll("input:checked"),e.forEach((e=>t.push(e.value)))),t}_getFieldValue(){let e;return this.field&&(e=this.hasFieldset?this._getFieldsetValue():"checkbox"===this.type||"radio"===this.type?!!this.field.checked:"select"===this.type?this.multiple?Object.keys(this.field.selectedOptions).map((e=>this.field.selectedOptions[e].value)):this.field.selectedOptions[0].value:this.field.value),e}_getValidType(e){return"datetime"===e&&this.validTypes.includes(e)?"datetime-local":this.validTypes.includes(e)?e:"text"}_handleFieldChange(){"text"!==this.type&&"textarea"!==this.type||this._updateCount(),this.autovalidate&&this.validate(),this.value=this._getFieldValue(),"textarea"===this.type&&this.autoGrow()}_observeAndListen(e=!0){e?(this.slottedFieldObserver.observe(this,{attributeFilter:["disabled","readonly","required","slot"],childlist:!0}),this._updateField(),this.addEventListener("click",this.focus),this.addEventListener("focusout",this._onFocusout),this.addEventListener("focusin",this._onFocusin)):(this.slottedFieldObserver.disconnect(),this.removeEventListener("click",this.focus),this.removeEventListener("focusout",this._onFocusout),this.removeEventListener("focusin",this._onFocusin))}_onFocusin(){this.error=!1}_onFocusout(){this.autovalidate&&this.validate()}_updateField(){let e=this.field;if(this.field=this.querySelector&&this.querySelector("[slot=field]")?this.querySelector("[slot=field]"):void 0,this.id=`${this.fieldId||""}-wrapper`,this.field){let e=this.field.tagName.toLowerCase(),t=this.field.getAttribute("type")||"text";if(this.type=this._getValidType("input"===e?t:e),this.required=this.field.required,this.disabled=this.field.disabled,this.readonly=this.field.readonly,this.field.setAttribute("aria-describedby","field-bottom"),this.addEventListener("change",this._handleFieldChange),this.addEventListener("input",this._handleFieldChange),"select"===this.type&&(this.multiple=this.field.multiple),"textarea"===this.type&&(this.field.getAttribute("rows")||this.field.setAttribute("rows",1),this.field.addEventListener("keydown",(e=>e.stopPropagation()))),"fieldset"===this.type){let e=this.querySelector("legend");e&&(e.style.fontSize="var(--simple-fields-detail-font-size, 12px)",e.style.fontFamily="var(--simple-fields-detail-font-family, sans-serif)",e.style.lineHeight="var(--simple-fields-detail-line-height, 22px)",e.style.paddingInlineStart=0,e.style.paddingInlineEnd=0),this.querySelectorAll("label, input").forEach((e=>e.style.marginRight="var(--simple-fields-margin, 16px)")),this.querySelectorAll("label input").forEach((e=>e.style.marginLeft="calc(0 - var(--simple-fields-margin, 16px))"))}}else this.disabled=!1,this.readonly=!1,this.required=!1,this.type=void 0,e&&("textarea"===e.tagName.toLowerCase()&&e.addEventListener("keydown",(e=>e.stopPropagation())),e.removeEventListener("change",this._handleFieldChange),e.removeEventListener("input",this._handleFieldChange));this.field&&this.__delayedFocus&&this.focus()}_updateCount(){let e="",t="[\\w\\-\\']+",i=new RegExp(t,"gim"),o=this.field.getAttribute("maxlength")||this.maxlength||!1,n=this.maxwords||!1,a="word"===this.counter?n:o,l=new RegExp(`.{0,${o||1}}`,"g"),r=new RegExp(`(${t}\\W*){0,${n||1}}`,"g"),s=e=>((this.field||{}).value||"").match(e),c=()=>this.field.value?this.field.value.length:0,h=()=>this.field&&this.field.value&&s(i)?s(i).length:0,d=(e,t,i)=>{e&&t&&t<e&&this.field.value.match(i)&&(this.field.value=s(i)[0].trim())};d(c(),o,l),d(h(),n,r),e="word"===this.counter?h():c(),"none"!==this.counter&&this.shadowRoot&&this.shadowRoot.querySelector("#fieldmeta")&&(this.shadowRoot.querySelector("#fieldmeta").innerHTML=a?`${e}/${a}`:e)}}};class Ll extends(Vl(e)){}window.customElements.define(Ll.tag,Ll);var Sl=Object.freeze({__proto__:null,SimpleFieldsContainer:Ll,SimpleFieldsContainerBehaviors:Vl});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Qo({_template:ft`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        border: 1px solid;
        padding: 2px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        overflow: hidden;
      }

      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
        @apply --iron-autogrow-textarea;
      }

      .fit {
        @apply --layout-fit;
      }

      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        /* see comments in template */
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        @apply --iron-autogrow-textarea;
      }

      textarea::-webkit-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea::-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-ms-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }
    </style>

    <!-- the mirror sizes the input/textarea so it grows with typing -->
    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->
    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>

    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->
    <div class="textarea-container fit">
      <textarea id="textarea" name$="[[name]]" aria-label$="[[label]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" autocapitalize$="[[autocapitalize]]" inputmode$="[[inputmode]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" disabled$="[[disabled]]" rows$="[[rows]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]"></textarea>
    </div>
`,is:"iron-autogrow-textarea",behaviors:[_a,Da],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},autocapitalize:{type:String,value:"none"},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(e){this.$.textarea.selectionStart=e},set selectionEnd(e){this.$.textarea.selectionEnd=e},attached:function(){navigator.userAgent.match(/iP(?:[oa]d|hone)/)&&!navigator.userAgent.match(/OS 1[3456789]/)&&(this.$.textarea.style.marginLeft="-3px")},validate:function(){var e=this.$.textarea.validity.valid;return e&&(this.required&&""===this.value?e=!1:this.hasValidator()&&(e=_a.validate.call(this,this.value))),this.invalid=!e,this.fire("iron-input-validate"),e},_bindValueChanged:function(e){this.value=e},_valueChanged:function(e){var t=this.textarea;t&&(t.value!==e&&(t.value=e||0===e?e:""),this.bindValue=e,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(e){var t=Ro(e).path;this.value=t?t[0].value:e.target.value},_constrain:function(e){var t;for(e=e||[""],t=this.maxRows>0&&e.length>this.maxRows?e.slice(0,this.maxRows):e.slice(0);this.rows>0&&t.length<this.rows;)t.push("");return t.join("<br/>")+"&#160;"},_valueForMirror:function(){var e=this.textarea;if(e)return this.tokens=e&&e.value?e.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({_template:ft`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container no-label-float$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <iron-autogrow-textarea class="paper-input-input" slot="input" id$="[[_inputId]]" aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator$="[[validator]]" disabled$="[[disabled]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" autocapitalize$="[[autocapitalize]]" rows$="[[rows]]" max-rows$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
`,is:"paper-textarea",behaviors:[ja,In],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(e){this.$.input.textarea.selectionStart=e},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(e){this.$.input.textarea.selectionEnd=e},_ariaLabelledByChanged:function(e){this._focusableElement.setAttribute("aria-labelledby",e)},_ariaDescribedByChanged:function(e){this._focusableElement.setAttribute("aria-describedby",e)},get _focusableElement(){return this.inputElement.textarea}});class El extends(Yo([In,_a],gt)){static get template(){return ft`
      <style>
        :host {
          display: block;
        }
      </style>
      <slot name="controls"></slot> <slot name="textarea"></slot>
      <slot name="footer"></slot>
    `}static get tag(){return"mtz-marked-editor"}static get properties(){return{...super.properties,autofocus:Boolean,readonly:Boolean,textareaSelector:{type:String,value:"textarea"},__textarea:Object}}constructor(){super(),this.addEventListener("register-control",this.__bindControlToEditor.bind(this))}connectedCallback(){super.connectedCallback(),this.__textarea=this.queryDistributedElements('[slot="textarea"]')[0]}queryDistributedElements(e){let t=Vo.getFlattenedNodes(this),i=[];for(let o,n=0,a=t.length;n<a&&(o=t[n]);n++)o.nodeType===Node.ELEMENT_NODE&&Pl(o,e)&&i.push(o);return i}disconnectedCallback(){this.removeEventListener("register-control",this.__bindControlToEditor),super.disconnectedCallback()}getTextarea(){return this.__textarea}getLines(){return this.getContent().split(/(?=\n|\r\n)$/gm)}getContent(){return void 0!==this.getTextarea()?this.getTextarea().value:""}setContent(e){this.getTextarea().value=e}getSelection(e=this.getTextarea()){const t=e.selectionStart,i=e.selectionEnd;return{start:t,end:i,length:i-t,text:e.value.substring(t,i)}}setSelection(e,t,i=this.getTextarea()){i.selectionStart=e,i.selectionEnd=t}replaceSelection(e,t=this.getTextarea(),i=this.getSelection()){const o=t.value;t.value=`${o.substr(0,i.start)}${e}${o.substr(i.end,o.length)}`}__bindControlToEditor(e){e.stopPropagation(),e.target.__editor=this}}window.customElements.define(El.tag,El);const Tl=Element.prototype,Al=Tl.matches||Tl.matchesSelector||Tl.mozMatchesSelector||Tl.msMatchesSelector||Tl.oMatchesSelector||Tl.webkitMatchesSelector,Pl=function(e,t){return Al.call(e,t)};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({is:"iron-a11y-keys",behaviors:[Fa],properties:{target:{type:Object,observer:"_targetChanged"},keys:{type:String,reflectToAttribute:!0,observer:"_keysChanged"}},attached:function(){this.target||(this.target=this.parentNode)},_targetChanged:function(e){this.keyEventTarget=e},_keysChanged:function(){this.removeOwnKeyBindings(),this.addOwnKeyBinding(this.keys,"_fireKeysPressed")},_fireKeysPressed:function(e){this.fire("keys-pressed",e.detail,{})}});const Ol=function(e){return class extends e{static get properties(){return{...super.properties,__editor:Object}}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("register-control",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))}}};class Il extends(Ol(function(e){return class extends e{static get properties(){return{...super.properties,syntaxPrefix:String}}_handleCommand(e){e.preventDefault(),e.stopPropagation();const t=this.__editor,i=t.getSelection(),o=t.getLines(),n=o.length>1?o[1].match(/(\n|\r\n)/)[0]:"",a=[];let l=0;o.every((e=>(l+=e.length,l+1<i.start||(a.push({start:l-e.length,end:l,length:e.length,text:e.trimLeft()}),l<i.end))));const r=a[0],s=r.text.startsWith(this.syntaxPrefix);let c=0;a.forEach((e=>{s&&e.text.startsWith(this.syntaxPrefix)?e.text=e.text.slice(this.syntaxPrefix.length,e.end):s||(e.text=`${this.syntaxPrefix}${e.text}`),c+=this.syntaxPrefix.length}));const h=a[a.length-1];t.setSelection(r.start,h.end),1===a.length&&a[0].start>0&&(r.text=`${n}${r.text}`,r.start+=n.length),t.replaceSelection(a.map((e=>e.text)).join(n)),t.setSelection(r.start,h.end+(s?-1:1)*c),t.getTextarea().focus()}}}(gt))){static get template(){return ft`
      <style>
        :host {
          display: inline-block;
        }
      </style>

      <simple-icon-button
        icon="[[icon]]"
        noink="[[noink]]"
        on-click="_handleCommand"
        alt="[[title]]"
      ></simple-icon-button>

      <iron-a11y-keys
        keys="[[keys]]"
        on-keys-pressed="_handleCommand"
        target="[[__editor]]"
      ></iron-a11y-keys>
    `}static get tag(){return"mtz-marked-control-generic-line"}static get properties(){return{...super.properties,title:String,icon:String,keys:String,noink:Boolean}}}window.customElements.define(Il.tag,Il);class Rl extends(Ol(function(e){return class extends e{static get properties(){return{...super.properties,syntaxPrefix:String,syntaxSuffix:{type:String,value:""}}}_handleCommand(e){e.preventDefault(),e.stopPropagation();let t=0;const i=this.__editor,o=i.getSelection(),n=i.getContent();n.substr(o.start-this.syntaxPrefix.length,this.syntaxPrefix.length)===this.syntaxPrefix&&n.substr(o.end,this.syntaxSuffix.length)===this.syntaxSuffix?(i.setSelection(o.start-this.syntaxPrefix.length,o.end+this.syntaxSuffix.length),i.replaceSelection(o.text),t=o.start-this.syntaxPrefix.length):(i.replaceSelection(`${this.syntaxPrefix}${o.text}${this.syntaxSuffix}`),t=o.start+this.syntaxSuffix.length),i.setSelection(t,t+o.text.length),i.getTextarea().focus()}}}(gt))){static get template(){return ft`
      <style>
        :host {
          display: inline-block;
        }
      </style>

      <simple-icon-button
        icon="[[icon]]"
        noink="[[noink]]"
        on-click="_handleCommand"
        alt="[[title]]"
      ></simple-icon-button>

      <iron-a11y-keys
        keys="[[keys]]"
        on-keys-pressed="_handleCommand"
        target="[[__editor]]"
      ></iron-a11y-keys>
    `}static get tag(){return"mtz-marked-control-generic-wrap"}static get properties(){return{...super.properties,title:String,icon:String,keys:String,noink:Boolean}}}window.customElements.define(Rl.tag,Rl);class $l extends(Ol(gt)){static get template(){return ft`
      <style>
        :host {
          display: inline-block;
        }
      </style>

      <simple-icon-button
        icon="[[icon]]"
        noink="[[noink]]"
        on-click="_handleCommand"
        alt="[[title]]"
      ></simple-icon-button>

      <iron-a11y-keys
        keys="[[keys]]"
        on-keys-pressed="_handleCommand"
        target="[[__editor]]"
      ></iron-a11y-keys>
    `}static get tag(){return"mtz-marked-control-link"}static get properties(){return{...super.properties,title:String,icon:String,keys:String,noink:Boolean}}_handleCommand(e){e.preventDefault(),e.stopPropagation();const t=this.__editor,i=t.getSelection(),o=new RegExp("\\[(.*)\\]\\((.*)\\)"),n=i.text.match(o);let a,l;if(n){a=n[1],l=n[2];const e=l||a;t.replaceSelection(e),t.setSelection(i.start,i.end-(i.length-e.length))}else{if(this._isLink(i)){if(a=prompt("What text would you like to display?"),!a)return;l=i.text}else{if(l=prompt("What link would you like to use?"),!l)return;a=i.text}if(l.startsWith("http://"))return void alert("Links must be https://");const e=o[Symbol.replace]("[]()",`[${a}](${l})`);t.replaceSelection(e),t.setSelection(i.start,i.end+(e.length-i.length))}}_isLink(e){return e.text.startsWith("https://")}}window.customElements.define($l.tag,$l),
/**
 * Copyright 2021 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
window.I18NManagerStore=window.I18NManagerStore||{},window.I18NManagerStore.requestAvailability=()=>(window.I18NManagerStore.instance||(window.I18NManagerStore.instance=document.createElement("i18n-manager"),document.body.appendChild(window.I18NManagerStore.instance)),window.I18NManagerStore.instance);const Nl=window.I18NManagerStore.requestAvailability();class Fl extends HTMLElement{constructor(){super(),this.fetchTargets={},this.elements=[],this.locales=new Set([]),this.lang=this.documentLang,this.dir=this.documentDir}get documentLang(){return document.body.getAttribute("xml:lang")||document.body.getAttribute("lang")||document.documentElement.getAttribute("xml:lang")||document.documentElement.getAttribute("lang")||navigator.language||"en"}get documentDir(){return document.body.getAttribute("xml:dir")||document.body.getAttribute("dir")||document.documentElement.getAttribute("xml:dir")||document.documentElement.getAttribute("dir")||"ltr"}connectedCallback(){this.__ready=!0,window.addEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this)),window.addEventListener("languagechange",this.changeLanguageEvent.bind(this))}disconnectedCallback(){window.removeEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this)),window.removeEventListener("languagechange",this.changeLanguageEvent.bind(this))}changeLanguageEvent(e){this.lang=e.detail}registerLocalizationEvent(e){let t=this.detailNormalize(e.detail);t.namespace&&t.localesPath&&t.locales&&this.registerLocalization(t)}detailNormalize(e){if(!e.namespace&&e.context&&(e.namespace=e.context.tagName.toLowerCase()),!e.updateCallback&&e.context&&(e.context.requestUpdate?e.updateCallback="requestUpdate":e.context.render&&(e.updateCallback="render")),!e.localesPath&&e.basePath&&(e.localesPath=`${decodeURIComponent(e.basePath)}/../locales`),e.context&&e.namespace){e.context.t&&(e.context._t={...e.context.t});let t=this.elements.filter((t=>{if(t.namespace==e.namespace&&t.localesPath&&t.locales)return!0}));t&&t.length&&t[0]&&(e.localesPath=t[0].localesPath,e.locales=t[0].locales)}return e}registerLocalization(e){(!e.context&&0===this.elements.filter((t=>t.namespace===e.namespace)).length||0===this.elements.filter((t=>t.context===e.context)).length)&&(e=this.detailNormalize(e),this.elements.push(e),e.locales.forEach(this.locales.add,this.locales),this.lang&&this.__ready&&e.locales.includes(this.lang)&&(clearTimeout(this._debounce),this._debounce=setTimeout((()=>{this.updateLanguage(this.lang)}),0)))}static get tag(){return"i18n-manager"}async loadNamespaceFile(e,t=this.lang){const i=t.split("-");let o=this.elements.filter((o=>o.namespace===e&&(o.locales.includes(t)||o.locales.includes(i[0]))));if(o&&1===o.length){const e=o[0];var n="";return e.locales.includes(t)?n=`${e.localesPath}/${e.namespace}.${t}.json`:e.locales.includes(i[0])&&(n=`${e.localesPath}/${e.namespace}.${i[0]}.json`),""==n?{}:(this.fetchTargets[n]||(this.fetchTargets[n]=await fetch(n).then((e=>!(!e||!e.json)&&e.json()))),this.fetchTargets[n])}}async updateLanguage(e){if(e){const n=e.split("-"),a=this.elements.filter((t=>t.locales.includes(e)||t.locales.includes(n[0]))),l=this.elements.filter((t=>!t.locales.includes(e)&&!t.locales.includes(n[0])));if(0!==l.length)for(var t in l){let e=l[t];e.context&&(e.context.t={...e.context._t},e.updateCallback&&e.context[e.updateCallback]())}for(var t in a){let l=a[t];var i="";if(l.locales.includes(e)?i=`${l.localesPath}/${l.namespace}.${e}.json`:l.locales.includes(n[0])&&(i=`${l.localesPath}/${l.namespace}.${n[0]}.json`),this.fetchTargets[i]){if(l.context){let e=this.fetchTargets[i];for(var o in e)l.context.t[o]=e[o];l.context.t={...l.context.t},l.updateCallback&&l.context[l.updateCallback]()}}else if(this.fetchTargets[i]=await fetch(i).then((e=>!(!e||!e.json)&&e.json())),l.context){for(var o in this.fetchTargets[i])l.context.t[o]=this.fetchTargets[i][o];l.context.t={...l.context.t},l.updateCallback&&l.context&&l.context[l.updateCallback]()}}}}static get observedAttributes(){return["lang","dir"]}attributeChangedCallback(e,t,i){"lang"!==e&&"dir"!==e||this.dispatchEvent(new CustomEvent(`${e}-changed`,{detail:{value:i}})),"lang"===e&&i&&this.__ready&&this.updateLanguage(i)}get lang(){return this.getAttribute("lang")}set lang(e){e?this.setAttribute("lang",e):this.removeAttribute("lang")}get dir(){return this.getAttribute("dir")}set dir(e){e?this.setAttribute("dir",e):this.removeAttribute("dir")}}customElements.define(Fl.tag,Fl);class Dl extends(function(e){return class extends e{constructor(){super(),this.t=this.t||{}}static get properties(){return{...super.properties,t:{type:Object}}}registerLocalization(e){e.namespace||(e.namespace=e.context.tagName.toLowerCase()),e.updateCallback||(e.context.requestUpdate?e.updateCallback="requestUpdate":e.context.render&&(e.updateCallback="render")),!e.localesPath&&e.basePath&&(e.localesPath=`${decodeURIComponent(e.basePath)}/../locales`),Nl.registerLocalization(e)}}}(e)){static get styles(){return[t`:host{display:block}:host:after{content:attr(words-text);position:var(--word-count-position,relative);display:var(--word-count-display,flex);flex-direction:var(--word-count-flex-direction,row-reverse);margin:var(--word-count-margin,12px);font-size:var(--word-count-font-size,10px);transition:var(--word-count-transition,.3s font-size,color ease);line-height:var(--word-count-line-height,16px);color:var(--word-count-color,#888)}:host(:active):after,:host(:focus):after,:host(:hover):after{font-size:var(--word-count-font-size-hover,12px);font-weight:var(--word-count-font-weight-hover,bold);color:var(--word-count-color-hover,#000)}.screen-reader-text{border:0;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;margin:-1px;width:1px;overflow:hidden;position:absolute!important;word-wrap:normal!important}`]}render(){return i` <slot></slot> <div class="screen-reader-text">${this.wordsPrefix}: ${this.words}</div> `}static get tag(){return"word-count"}constructor(){super(),this.wordsPrefix="Word count",this.t={wordsPrefix:this.wordsPrefix},this.registerLocalization({context:this,basePath:import.meta.url,locales:["es","fr","ja"]})}connectedCallback(){super.connectedCallback(),this.__observer=new MutationObserver(this._updateWords.bind(this)),this.__observer.observe(this,{attributes:!0,characterData:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.__observer.disconnect(),super.disconnectedCallback()}update(e){super.update(e),e.has("t")&&(this.wordsPrefix=this.t.wordsPrefix),e.has("wordsPrefix")&&(this.t={wordsPrefix:this.wordsPrefix},this.setAttribute("words-text",`${this.wordsPrefix}: ${this.words}`)),e.has("words")&&this.setAttribute("words-text",`${this.wordsPrefix}: ${this.words}`)}static get properties(){return{...super.properties,words:{type:Number},wordsPrefix:{type:String,attribute:"words-prefix"}}}_updateWords(e){""!==this.textContent?this.words=parseInt(this.textContent.split(/\s+/g).length-1):this.words=0}}window.customElements.define(Dl.tag,Dl);
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class Bl{constructor(){this.imports={},this.webpack=!1,this.import=(e,t,i=!1)=>this.load(e,t,i),this.load=(e,t,i=!1)=>{let o=this.imports[e],n=!i&&this.webpack&&this.webpack[e];return new Promise(n||o?(t,i)=>{t(this.imports[e])}:(i,o)=>{const n=document.createElement("script");n.src=t,n.setAttribute("data-name",e),this.imports[e]=t,n.onload=()=>{i(this.imports[e]),this.imports[e]=!0,setTimeout((()=>{const i=new CustomEvent(`es-bridge-${e}-loaded`,{bubbles:!0,cancelable:!0,detail:{name:e,location:t}});document.dispatchEvent(i)}),100)},n.onerror=()=>{o(new Error(`Failed to load ${e} script with location ${t}.`)),delete this.imports[e],this.imports[e]=!1},document.documentElement.appendChild(n)})}}}window.ESGlobalBridge=window.ESGlobalBridge||{},window.ESGlobalBridge.requestAvailability=()=>(window.ESGlobalBridge.instance||(window.ESGlobalBridge.instance=new Bl),window.ESGlobalBridge.instance),window.ESGlobalBridge.requestAvailability(),function(){function e(e){if(e)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=o;else if(l){var t=new ArrayBuffer(68);this.buffer8=new Uint8Array(t),this.blocks=new Uint32Array(t)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=0,this.finalized=this.hashed=!1,this.first=!0}var t="object"==typeof window?window:{},i=!t.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;i&&(t=global);var o,n=!t.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,a="function"==typeof define&&define.amd,l=!t.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,r="0123456789abcdef".split(""),s=[128,32768,8388608,-2147483648],c=[0,8,16,24],h=["hex","array","digest","buffer","arrayBuffer"],d=[];if(l){var p=new ArrayBuffer(68);o=new Uint8Array(p),d=new Uint32Array(p)}var m=function(t){return function(i){return new e(!0).update(i)[t]()}},u=function(e){var t=require("crypto"),i=require("buffer").Buffer;return function(o){if("string"==typeof o)return t.createHash("md5").update(o,"utf8").digest("hex");if(o.constructor===ArrayBuffer)o=new Uint8Array(o);else if(void 0===o.length)return e(o);return t.createHash("md5").update(new i(o)).digest("hex")}};e.prototype.update=function(e){if(!this.finalized){var i="string"!=typeof e;i&&e.constructor==t.ArrayBuffer&&(e=new Uint8Array(e));for(var o,n,a=0,r=e.length||0,s=this.blocks,h=this.buffer8;r>a;){if(this.hashed&&(this.hashed=!1,s[0]=s[16],s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),i)if(l)for(n=this.start;r>a&&64>n;++a)h[n++]=e[a];else for(n=this.start;r>a&&64>n;++a)s[n>>2]|=e[a]<<c[3&n++];else if(l)for(n=this.start;r>a&&64>n;++a)128>(o=e.charCodeAt(a))?h[n++]=o:2048>o?(h[n++]=192|o>>6,h[n++]=128|63&o):55296>o||o>=57344?(h[n++]=224|o>>12,h[n++]=128|o>>6&63,h[n++]=128|63&o):(o=65536+((1023&o)<<10|1023&e.charCodeAt(++a)),h[n++]=240|o>>18,h[n++]=128|o>>12&63,h[n++]=128|o>>6&63,h[n++]=128|63&o);else for(n=this.start;r>a&&64>n;++a)128>(o=e.charCodeAt(a))?s[n>>2]|=o<<c[3&n++]:2048>o?(s[n>>2]|=(192|o>>6)<<c[3&n++],s[n>>2]|=(128|63&o)<<c[3&n++]):55296>o||o>=57344?(s[n>>2]|=(224|o>>12)<<c[3&n++],s[n>>2]|=(128|o>>6&63)<<c[3&n++],s[n>>2]|=(128|63&o)<<c[3&n++]):(o=65536+((1023&o)<<10|1023&e.charCodeAt(++a)),s[n>>2]|=(240|o>>18)<<c[3&n++],s[n>>2]|=(128|o>>12&63)<<c[3&n++],s[n>>2]|=(128|o>>6&63)<<c[3&n++],s[n>>2]|=(128|63&o)<<c[3&n++]);this.lastByteIndex=n,this.bytes+=n-this.start,n>=64?(this.start=n-64,this.hash(),this.hashed=!0):this.start=n}return this}},e.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[t>>2]|=s[3&t],t>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,this.hash()}},e.prototype.hash=function(){var e,t,i,o,n,a,l=this.blocks;this.first?t=((t=((e=((e=l[0]-680876937)<<7|e>>>25)-271733879<<0)^(i=((i=(-271733879^(o=((o=(-1732584194^2004318071&e)+l[1]-117830708)<<12|o>>>20)+e<<0)&(-271733879^e))+l[2]-1126478375)<<17|i>>>15)+o<<0)&(o^e))+l[3]-1316259209)<<22|t>>>10)+i<<0:(e=this.h0,t=this.h1,i=this.h2,t=((t+=((e=((e+=((o=this.h3)^t&(i^o))+l[0]-680876936)<<7|e>>>25)+t<<0)^(i=((i+=(t^(o=((o+=(i^e&(t^i))+l[1]-389564586)<<12|o>>>20)+e<<0)&(e^t))+l[2]+606105819)<<17|i>>>15)+o<<0)&(o^e))+l[3]-1044525330)<<22|t>>>10)+i<<0),t=((t+=((e=((e+=(o^t&(i^o))+l[4]-176418897)<<7|e>>>25)+t<<0)^(i=((i+=(t^(o=((o+=(i^e&(t^i))+l[5]+1200080426)<<12|o>>>20)+e<<0)&(e^t))+l[6]-1473231341)<<17|i>>>15)+o<<0)&(o^e))+l[7]-45705983)<<22|t>>>10)+i<<0,t=((t+=((e=((e+=(o^t&(i^o))+l[8]+1770035416)<<7|e>>>25)+t<<0)^(i=((i+=(t^(o=((o+=(i^e&(t^i))+l[9]-1958414417)<<12|o>>>20)+e<<0)&(e^t))+l[10]-42063)<<17|i>>>15)+o<<0)&(o^e))+l[11]-1990404162)<<22|t>>>10)+i<<0,t=((t+=((e=((e+=(o^t&(i^o))+l[12]+1804603682)<<7|e>>>25)+t<<0)^(i=((i+=(t^(o=((o+=(i^e&(t^i))+l[13]-40341101)<<12|o>>>20)+e<<0)&(e^t))+l[14]-1502002290)<<17|i>>>15)+o<<0)&(o^e))+l[15]+1236535329)<<22|t>>>10)+i<<0,t=((t+=((o=((o+=(t^i&((e=((e+=(i^o&(t^i))+l[1]-165796510)<<5|e>>>27)+t<<0)^t))+l[6]-1069501632)<<9|o>>>23)+e<<0)^e&((i=((i+=(e^t&(o^e))+l[11]+643717713)<<14|i>>>18)+o<<0)^o))+l[0]-373897302)<<20|t>>>12)+i<<0,t=((t+=((o=((o+=(t^i&((e=((e+=(i^o&(t^i))+l[5]-701558691)<<5|e>>>27)+t<<0)^t))+l[10]+38016083)<<9|o>>>23)+e<<0)^e&((i=((i+=(e^t&(o^e))+l[15]-660478335)<<14|i>>>18)+o<<0)^o))+l[4]-405537848)<<20|t>>>12)+i<<0,t=((t+=((o=((o+=(t^i&((e=((e+=(i^o&(t^i))+l[9]+568446438)<<5|e>>>27)+t<<0)^t))+l[14]-1019803690)<<9|o>>>23)+e<<0)^e&((i=((i+=(e^t&(o^e))+l[3]-187363961)<<14|i>>>18)+o<<0)^o))+l[8]+1163531501)<<20|t>>>12)+i<<0,t=((t+=((o=((o+=(t^i&((e=((e+=(i^o&(t^i))+l[13]-1444681467)<<5|e>>>27)+t<<0)^t))+l[2]-51403784)<<9|o>>>23)+e<<0)^e&((i=((i+=(e^t&(o^e))+l[7]+1735328473)<<14|i>>>18)+o<<0)^o))+l[12]-1926607734)<<20|t>>>12)+i<<0,t=((t+=((a=(o=((o+=((n=t^i)^(e=((e+=(n^o)+l[5]-378558)<<4|e>>>28)+t<<0))+l[8]-2022574463)<<11|o>>>21)+e<<0)^e)^(i=((i+=(a^t)+l[11]+1839030562)<<16|i>>>16)+o<<0))+l[14]-35309556)<<23|t>>>9)+i<<0,t=((t+=((a=(o=((o+=((n=t^i)^(e=((e+=(n^o)+l[1]-1530992060)<<4|e>>>28)+t<<0))+l[4]+1272893353)<<11|o>>>21)+e<<0)^e)^(i=((i+=(a^t)+l[7]-155497632)<<16|i>>>16)+o<<0))+l[10]-1094730640)<<23|t>>>9)+i<<0,t=((t+=((a=(o=((o+=((n=t^i)^(e=((e+=(n^o)+l[13]+681279174)<<4|e>>>28)+t<<0))+l[0]-358537222)<<11|o>>>21)+e<<0)^e)^(i=((i+=(a^t)+l[3]-722521979)<<16|i>>>16)+o<<0))+l[6]+76029189)<<23|t>>>9)+i<<0,t=((t+=((a=(o=((o+=((n=t^i)^(e=((e+=(n^o)+l[9]-640364487)<<4|e>>>28)+t<<0))+l[12]-421815835)<<11|o>>>21)+e<<0)^e)^(i=((i+=(a^t)+l[15]+530742520)<<16|i>>>16)+o<<0))+l[2]-995338651)<<23|t>>>9)+i<<0,t=((t+=((o=((o+=(t^((e=((e+=(i^(t|~o))+l[0]-198630844)<<6|e>>>26)+t<<0)|~i))+l[7]+1126891415)<<10|o>>>22)+e<<0)^((i=((i+=(e^(o|~t))+l[14]-1416354905)<<15|i>>>17)+o<<0)|~e))+l[5]-57434055)<<21|t>>>11)+i<<0,t=((t+=((o=((o+=(t^((e=((e+=(i^(t|~o))+l[12]+1700485571)<<6|e>>>26)+t<<0)|~i))+l[3]-1894986606)<<10|o>>>22)+e<<0)^((i=((i+=(e^(o|~t))+l[10]-1051523)<<15|i>>>17)+o<<0)|~e))+l[1]-2054922799)<<21|t>>>11)+i<<0,t=((t+=((o=((o+=(t^((e=((e+=(i^(t|~o))+l[8]+1873313359)<<6|e>>>26)+t<<0)|~i))+l[15]-30611744)<<10|o>>>22)+e<<0)^((i=((i+=(e^(o|~t))+l[6]-1560198380)<<15|i>>>17)+o<<0)|~e))+l[13]+1309151649)<<21|t>>>11)+i<<0,t=((t+=((o=((o+=(t^((e=((e+=(i^(t|~o))+l[4]-145523070)<<6|e>>>26)+t<<0)|~i))+l[11]-1120210379)<<10|o>>>22)+e<<0)^((i=((i+=(e^(o|~t))+l[2]+718787259)<<15|i>>>17)+o<<0)|~e))+l[9]-343485551)<<21|t>>>11)+i<<0,this.first?(this.h0=e+1732584193<<0,this.h1=t-271733879<<0,this.h2=i-1732584194<<0,this.h3=o+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+i<<0,this.h3=this.h3+o<<0)},e.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,i=this.h2,o=this.h3;return r[e>>4&15]+r[15&e]+r[e>>12&15]+r[e>>8&15]+r[e>>20&15]+r[e>>16&15]+r[e>>28&15]+r[e>>24&15]+r[t>>4&15]+r[15&t]+r[t>>12&15]+r[t>>8&15]+r[t>>20&15]+r[t>>16&15]+r[t>>28&15]+r[t>>24&15]+r[i>>4&15]+r[15&i]+r[i>>12&15]+r[i>>8&15]+r[i>>20&15]+r[i>>16&15]+r[i>>28&15]+r[i>>24&15]+r[o>>4&15]+r[15&o]+r[o>>12&15]+r[o>>8&15]+r[o>>20&15]+r[o>>16&15]+r[o>>28&15]+r[o>>24&15]},e.prototype.toString=e.prototype.hex,e.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,i=this.h2,o=this.h3;return[255&e,e>>8&255,e>>16&255,e>>24&255,255&t,t>>8&255,t>>16&255,t>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255,255&o,o>>8&255,o>>16&255,o>>24&255]},e.prototype.array=e.prototype.digest,e.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),t=new Uint32Array(e);return t[0]=this.h0,t[1]=this.h1,t[2]=this.h2,t[3]=this.h3,e},e.prototype.buffer=e.prototype.arrayBuffer;var f=function(){var t=m("hex");i&&(t=u(t)),t.create=function(){return new e},t.update=function(e){return t.create().update(e)};for(var o=0;o<h.length;++o){var n=h[o];t[n]=m(n)}return t}();n?module.exports=f:(t.md5=f,a&&define((function(){return f})))}();class ql extends e{static get styles(){return[t`:host{display:inline-block;box-sizing:border-box;position:relative;width:var(--paper-avatar-width,40px);height:var(--paper-avatar-width,40px);border-radius:50%;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--paper-avatar-text-color,#fff);background-color:var(--paper-avatar-color,var(--paper-avatar-calculated-bg,#000))}:host>*{pointer-events:none}img{width:var(--paper-avatar-width,40px);height:var(--paper-avatar-width,40px)}#img,#jdenticon,#label{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;border-radius:50%}#label{overflow:hidden;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-ms-flex-align:center;align-items:center;--simple-icon-width:calc(var(--paper-avatar-width, 40px) * 0.9);--simple-icon-height:calc(var(--paper-avatar-width, 40px) * 0.9)}#label[hidden]{display:none}#label span{display:block;width:100%;font-weight:400;color:var(--paper-avatar-text-color,#fff);text-transform:capitalize;font-family:Roboto,Noto,sans-serif;-webkit-font-smoothing:antialiased;text-align:center;font-size:calc(var(--paper-avatar-width,40px) * .7);opacity:.8}#label span[two-chars]{font-size:calc(var(--paper-avatar-width,40px) * .5)}#label simple-icon-lite{margin:0 auto;opacity:.8}#jdenticon{width:var(--paper-avatar-width,40px);height:var(--paper-avatar-width,40px)}#jdenticon *{fill:var(--paper-avatar-text-color,#fff);opacity:.8}:host #jdenticon ::slotted(*){fill:var(--paper-avatar-text-color,#fff);opacity:.8}`]}static get tag(){return"paper-avatar"}render(){return i` <svg id="jdenticon" width="40" height="40"><slot></slot></svg> <div id="label" title="${this.label}" ?hidden="${this.jdenticonExists&&this.jdenticon}"> ${this.icon?i` <simple-icon-lite icon="${this.icon}"></simple-icon-lite> `:i` <span ?two-chars="${this.twoChars}">${this._label(this.label)} </span> `} </div> ${this.src?i` <img id="img" loading="lazy" .src="${this.src||""}" @load="${this._onImgLoad}" @error="${this._onImgError}" aria-hidden="true"> `:""} `}constructor(){super(),this.dark=!1,this.label=null,this.src=null,this.jdenticonExists=!1,this.twoChars=!1,this.jdenticon=!1}updated(e){e.forEach(((e,t)=>{"label"==t&&this._observerLabel(this[t])}))}static get properties(){return{accentColor:{type:String,attribute:"accent-color"},dark:{type:Boolean},icon:{type:String},src:{type:String},label:{type:String},jdenticonExists:{type:Boolean},twoChars:{type:Boolean,attribute:"two-chars"},colors:{type:Array},jdenticon:{type:Boolean}}}_observerLabel(e){e&&(this.jdenticonExists&&this.jdenticon&&(this.shadowRoot.querySelector("#label").hidden=!0,window.jdenticon.update(this.shadowRoot.querySelector("#jdenticon"),window.md5(e))),this.accentColor||this.style.setProperty("--paper-avatar-calculated-bg",this._parseColor(e)))}firstUpdated(e){const t=new URL(new URL("e0b011ec.js",import.meta.url).href,import.meta.url).href;window.addEventListener("es-bridge-jdenticon-loaded",this._jdenticonLoaded.bind(this)),window.ESGlobalBridge.requestAvailability().load("jdenticon",t)}disconnectedCallback(){window.removeEventListener("es-bridge-jdenticon-loaded",this._jdenticonLoaded.bind(this)),super.disconnectedCallback()}_jdenticonLoaded(e){this.jdenticonExists=!0,this._observerLabel(this.label)}_label(e){if(!e)return"";if(this.twoChars){if(this.label.indexOf(" ")>-1){var t=this.label.match(/\b(\w)/g);return t[0]+t[1]}return e.substring(0,2)}return e.charAt(0)}_onImgLoad(e){e.currentTarget.hidden=!1}_onImgError(e){e.currentTarget.hidden=!0}_parseColor(e){for(var t=this.colors?this.colors:["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#795548","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#9E9E9E","#607D8B"],i=0,o=0;o<e.length;o++)i+=e.charCodeAt(o)<<5;return i>=t.length?t[i%t.length]:t[i]}}window.customElements.define(ql.tag,ql);
/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class jl extends Wn{static get styles(){return[...super.styles,t`:host{display:block;margin:0;padding:0}:host([hidden]){display:none}paper-avatar{border-radius:var(--lrndesign-avatar-border-radius,50%);max-height:var(--lrndesign-avatar-width,40px);--paper-avatar-width:var(--lrndesign-avatar-width, 40px);--paper-avatar-color:var(
            --simple-colors-default-theme-accent-8,
            #444
          );--paper-avatar-text-color:var(
            --simple-colors-default-theme-grey-1,
            #fff
          )}:host([invert]) paper-avatar{--paper-avatar-color:var(--simple-colors-default-theme-grey-1, #fff);--paper-avatar-text-color:var(
            --simple-colors-default-theme-accent-8,
            #444
          )}`]}render(){return i` <paper-avatar accent-color="${this.accentColor}" ?allow-grey="${this.allowGrey}" ?dark="${this.dark}" .label="${this.label||""}" .icon="${this.icon||""}" .src="${this.src||""}" ?two-chars="${this.twoChars}" ?jdenticon="${this.jdenticon}"></paper-avatar>`}static get haxProperties(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Avatar",description:"Visualize a user account either with an image, icon, initials, or as abstract art.",icon:"image:collections",color:"yellow",groups:["Media","Image"],handles:[{type:"image",source:"image"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"accentColor",title:"Accent Color",description:"Pick an accent color.",inputMethod:"colorpicker"},{property:"dark",title:"Dark",description:"Use dark text (and light background) for avatar.",inputMethod:"boolean"},{property:"icon",title:"Icon",description:"Optional: Pick an icon for avatar.",inputMethod:"iconpicker"},{property:"src",title:"Image Source",description:"Optional: Upload an image for avatar.",inputMethod:"haxupload"},{property:"label",title:"Two-character initials",description:"Label used to create initials or unique Jdenticon.",inputMethod:"textfield"},{property:"twoChars",title:"Two-character initials",description:"When no Jdenticon, image, or icon, use two-character for initials.",inputMethod:"boolean"},{property:"jdenticon",title:"Jdenticon",description:"Optional: Unique icon design based on label.",inputMethod:"boolean"}],advanced:[{property:"allowGrey",title:"Allow Grey",description:"Allows grey if set. Otherwise a color will be assigned",inputMethod:"boolean"}]}}}static get properties(){return{...super.properties,allowGrey:{type:Boolean,attribute:"allow-grey"},icon:{type:String},invert:{type:Boolean,attribute:"invert",reflect:!0},label:{type:String},src:{type:String},twoChars:{type:Boolean,attribute:"two-chars"},color:{type:String},jdenticon:{type:Boolean}}}static get tag(){return"lrndesign-avatar"}constructor(){super(),this.allowGrey=!1,this.dark=!1,this.twoChars=!1,this.jdenticon=!1,this.label="|"}_getAccentColor(){if(this.colors&&!this.allowGrey&&(!this.accentColor||"grey"===this.accentColor)){let e=(this.color||"").replace("-text","");if(e&&this.colors[e])this.accentColor=e;else{let t=this.label||this.icon,i=t&&t.charCodeAt(0)?t.charCodeAt(0):Math.floor(16*Math.random()),o=Object.keys(this.colors);e=o[i%16+1],this.accentColor=o[i%16+1]||o[Math.floor(Math.random()*this.colors.length)]}}}updated(e){super.updated&&super.updated(e),e.forEach(((e,t)=>{"color"!=t&&"label"!=t&&"icon"!=t||this._getAccentColor()}))}}customElements.define(jl.tag,jl),function(e){var t={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:u,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:u,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:u,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,text:/^[^\n]+/};function i(e){this.tokens=[],this.tokens.links={},this.options=e||g.defaults,this.rules=t.normal,this.options.gfm&&(this.options.tables?this.rules=t.tables:this.rules=t.gfm)}t._label=/(?:\\[\[\]]|[^\[\]])+/,t._title=/(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/,t.def=h(t.def).replace("label",t._label).replace("title",t._title).getRegex(),t.bullet=/(?:[*+-]|\d+\.)/,t.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,t.item=h(t.item,"gm").replace(/bull/g,t.bullet).getRegex(),t.list=h(t.list).replace(/bull/g,t.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+t.def.source+")").getRegex(),t._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",t.html=h(t.html).replace("comment",/<!--[\s\S]*?-->/).replace("closed",/<(tag)[\s\S]+?<\/\1>/).replace("closing",/<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/).replace(/tag/g,t._tag).getRegex(),t.paragraph=h(t.paragraph).replace("hr",t.hr).replace("heading",t.heading).replace("lheading",t.lheading).replace("tag","<"+t._tag).getRegex(),t.blockquote=h(t.blockquote).replace("paragraph",t.paragraph).getRegex(),t.normal=f({},t),t.gfm=f({},t.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),t.gfm.paragraph=h(t.paragraph).replace("(?!","(?!"+t.gfm.fences.source.replace("\\1","\\2")+"|"+t.list.source.replace("\\1","\\3")+"|").getRegex(),t.tables=f({},t.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),i.rules=t,i.lex=function(e,t){return new i(t).lex(e)},i.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},i.prototype.token=function(e,i){var o,n,a,l,r,s,c,h,d,p,m;for(e=e.replace(/^ +$/gm,"");e;)if((a=this.rules.newline.exec(e))&&(e=e.substring(a[0].length),a[0].length>1&&this.tokens.push({type:"space"})),a=this.rules.code.exec(e))e=e.substring(a[0].length),a=a[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?a:a.replace(/\n+$/,"")});else if(a=this.rules.fences.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"code",lang:a[2],text:a[3]||""});else if(a=this.rules.heading.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"heading",depth:a[1].length,text:a[2]});else if(i&&(a=this.rules.nptable.exec(e))){for(e=e.substring(a[0].length),s={type:"table",header:a[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3].replace(/\n$/,"").split("\n")},h=0;h<s.align.length;h++)/^ *-+: *$/.test(s.align[h])?s.align[h]="right":/^ *:-+: *$/.test(s.align[h])?s.align[h]="center":/^ *:-+ *$/.test(s.align[h])?s.align[h]="left":s.align[h]=null;for(h=0;h<s.cells.length;h++)s.cells[h]=s.cells[h].split(/ *\| */);this.tokens.push(s)}else if(a=this.rules.hr.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"hr"});else if(a=this.rules.blockquote.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"blockquote_start"}),a=a[0].replace(/^ *> ?/gm,""),this.token(a,i),this.tokens.push({type:"blockquote_end"});else if(a=this.rules.list.exec(e)){for(e=e.substring(a[0].length),m=(l=a[2]).length>1,this.tokens.push({type:"list_start",ordered:m,start:m?+l:""}),o=!1,p=(a=a[0].match(this.rules.item)).length,h=0;h<p;h++)c=(s=a[h]).length,~(s=s.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(c-=s.length,s=this.options.pedantic?s.replace(/^ {1,4}/gm,""):s.replace(new RegExp("^ {1,"+c+"}","gm"),"")),this.options.smartLists&&h!==p-1&&(l===(r=t.bullet.exec(a[h+1])[0])||l.length>1&&r.length>1||(e=a.slice(h+1).join("\n")+e,h=p-1)),n=o||/\n\n(?!\s*$)/.test(s),h!==p-1&&(o="\n"===s.charAt(s.length-1),n||(n=o)),this.tokens.push({type:n?"loose_item_start":"list_item_start"}),this.token(s,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(a=this.rules.html.exec(e))e=e.substring(a[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===a[1]||"script"===a[1]||"style"===a[1]),text:a[0]});else if(i&&(a=this.rules.def.exec(e)))e=e.substring(a[0].length),a[3]&&(a[3]=a[3].substring(1,a[3].length-1)),d=a[1].toLowerCase(),this.tokens.links[d]||(this.tokens.links[d]={href:a[2],title:a[3]});else if(i&&(a=this.rules.table.exec(e))){for(e=e.substring(a[0].length),s={type:"table",header:a[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3].replace(/(?: *\| *)?\n$/,"").split("\n")},h=0;h<s.align.length;h++)/^ *-+: *$/.test(s.align[h])?s.align[h]="right":/^ *:-+: *$/.test(s.align[h])?s.align[h]="center":/^ *:-+ *$/.test(s.align[h])?s.align[h]="left":s.align[h]=null;for(h=0;h<s.cells.length;h++)s.cells[h]=s.cells[h].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(s)}else if(a=this.rules.lheading.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"heading",depth:"="===a[2]?1:2,text:a[1]});else if(i&&(a=this.rules.paragraph.exec(e)))e=e.substring(a[0].length),this.tokens.push({type:"paragraph",text:"\n"===a[1].charAt(a[1].length-1)?a[1].slice(0,-1):a[1]});else if(a=this.rules.text.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"text",text:a[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var o={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:u,tag:/^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:u,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};function n(e,t){if(this.options=t||g.defaults,this.links=e,this.rules=o.normal,this.renderer=this.options.renderer||new a,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=o.breaks:this.rules=o.gfm:this.options.pedantic&&(this.rules=o.pedantic)}function a(e){this.options=e||{}}function l(){}function r(e){this.tokens=[],this.token=null,this.options=e||g.defaults,this.options.renderer=this.options.renderer||new a,this.renderer=this.options.renderer,this.renderer.options=this.options}function s(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}function h(e,t){return e=e.source,t=t||"",{replace:function(t,i){return i=(i=i.source||i).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,i),this},getRegex:function(){return new RegExp(e,t)}}}function d(e,t){return p[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?p[" "+e]=e+"/":p[" "+e]=e.replace(/[^/]*$/,"")),e=p[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}o._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,o._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,o.autolink=h(o.autolink).replace("scheme",o._scheme).replace("email",o._email).getRegex(),o._inside=/(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,o._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,o.link=h(o.link).replace("inside",o._inside).replace("href",o._href).getRegex(),o.reflink=h(o.reflink).replace("inside",o._inside).getRegex(),o.normal=f({},o),o.pedantic=f({},o.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),o.gfm=f({},o.normal,{escape:h(o.escape).replace("])","~|])").getRegex(),url:h(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",o._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:h(o.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),o.breaks=f({},o.gfm,{br:h(o.br).replace("{2,}","*").getRegex(),text:h(o.gfm.text).replace("{2,}","*").getRegex()}),n.rules=o,n.output=function(e,t,i){return new n(t,i).output(e)},n.prototype.output=function(e){for(var t,i,o,n,a="";e;)if(n=this.rules.escape.exec(e))e=e.substring(n[0].length),a+=n[1];else if(n=this.rules.autolink.exec(e))e=e.substring(n[0].length),o="@"===n[2]?"mailto:"+(i=s(this.mangle(n[1]))):i=s(n[1]),a+=this.renderer.link(o,null,i);else if(this.inLink||!(n=this.rules.url.exec(e))){if(n=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(n[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(n[0])&&(this.inLink=!1),e=e.substring(n[0].length),a+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):s(n[0]):n[0];else if(n=this.rules.link.exec(e))e=e.substring(n[0].length),this.inLink=!0,a+=this.outputLink(n,{href:n[2],title:n[3]}),this.inLink=!1;else if((n=this.rules.reflink.exec(e))||(n=this.rules.nolink.exec(e))){if(e=e.substring(n[0].length),t=(n[2]||n[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){a+=n[0].charAt(0),e=n[0].substring(1)+e;continue}this.inLink=!0,a+=this.outputLink(n,t),this.inLink=!1}else if(n=this.rules.strong.exec(e))e=e.substring(n[0].length),a+=this.renderer.strong(this.output(n[2]||n[1]));else if(n=this.rules.em.exec(e))e=e.substring(n[0].length),a+=this.renderer.em(this.output(n[2]||n[1]));else if(n=this.rules.code.exec(e))e=e.substring(n[0].length),a+=this.renderer.codespan(s(n[2].trim(),!0));else if(n=this.rules.br.exec(e))e=e.substring(n[0].length),a+=this.renderer.br();else if(n=this.rules.del.exec(e))e=e.substring(n[0].length),a+=this.renderer.del(this.output(n[1]));else if(n=this.rules.text.exec(e))e=e.substring(n[0].length),a+=this.renderer.text(s(this.smartypants(n[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else n[0]=this.rules._backpedal.exec(n[0])[0],e=e.substring(n[0].length),"@"===n[2]?o="mailto:"+(i=s(n[0])):(i=s(n[0]),o="www."===n[1]?"http://"+i:i),a+=this.renderer.link(o,null,i);return a},n.prototype.outputLink=function(e,t){var i=s(t.href),o=t.title?s(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(i,o,this.output(e[1])):this.renderer.image(i,o,s(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,i="",o=e.length,n=0;n<o;n++)t=e.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),i+="&#"+t+";";return i},a.prototype.code=function(e,t,i){if(this.options.highlight){var o=this.options.highlight(e,t);null!=o&&o!==e&&(i=!0,e=o)}return t?'<pre><code class="'+this.options.langPrefix+s(t,!0)+'">'+(i?e:s(e,!0))+"\n</code></pre>\n":"<pre><code>"+(i?e:s(e,!0))+"\n</code></pre>"},a.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},a.prototype.html=function(e){return e},a.prototype.heading=function(e,t,i){return"<h"+t+' id="'+this.options.headerPrefix+i.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},a.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},a.prototype.list=function(e,t,i){var o=t?"ol":"ul";return"<"+o+(t&&1!==i?' start="'+i+'"':"")+">\n"+e+"</"+o+">\n"},a.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},a.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},a.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},a.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},a.prototype.tablecell=function(e,t){var i=t.header?"th":"td";return(t.align?"<"+i+' style="text-align:'+t.align+'">':"<"+i+">")+e+"</"+i+">\n"},a.prototype.strong=function(e){return"<strong>"+e+"</strong>"},a.prototype.em=function(e){return"<em>"+e+"</em>"},a.prototype.codespan=function(e){return"<code>"+e+"</code>"},a.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},a.prototype.del=function(e){return"<del>"+e+"</del>"},a.prototype.link=function(e,t,i){if(this.options.sanitize){try{var o=decodeURIComponent(c(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return i}if(0===o.indexOf("javascript:")||0===o.indexOf("vbscript:")||0===o.indexOf("data:"))return i}this.options.baseUrl&&!m.test(e)&&(e=d(this.options.baseUrl,e));var n='<a href="'+e+'"';return t&&(n+=' title="'+t+'"'),n+=">"+i+"</a>"},a.prototype.image=function(e,t,i){this.options.baseUrl&&!m.test(e)&&(e=d(this.options.baseUrl,e));var o='<img src="'+e+'" alt="'+i+'"';return t&&(o+=' title="'+t+'"'),o+=this.options.xhtml?"/>":">"},a.prototype.text=function(e){return e},l.prototype.strong=l.prototype.em=l.prototype.codespan=l.prototype.del=l.prototype.text=function(e){return e},l.prototype.link=l.prototype.image=function(e,t,i){return""+i},l.prototype.br=function(){return""},r.parse=function(e,t){return new r(t).parse(e)},r.prototype.parse=function(e){this.inline=new n(e.links,this.options),this.inlineText=new n(e.links,f({},this.options,{renderer:new l})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},r.prototype.next=function(){return this.token=this.tokens.pop()},r.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},r.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},r.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,c(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,i,o,n="",a="";for(i="",e=0;e<this.token.header.length;e++)i+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(n+=this.renderer.tablerow(i),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],i="",o=0;o<t.length;o++)i+=this.renderer.tablecell(this.inline.output(t[o]),{header:!1,align:this.token.align[o]});a+=this.renderer.tablerow(i)}return this.renderer.table(n,a);case"blockquote_start":for(a="";"blockquote_end"!==this.next().type;)a+=this.tok();return this.renderer.blockquote(a);case"list_start":a="";for(var l=this.token.ordered,r=this.token.start;"list_end"!==this.next().type;)a+=this.tok();return this.renderer.list(a,l,r);case"list_item_start":for(a="";"list_item_end"!==this.next().type;)a+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(a);case"loose_item_start":for(a="";"list_item_end"!==this.next().type;)a+=this.tok();return this.renderer.listitem(a);case"html":var s=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(s);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var p={},m=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function u(){}function f(e){for(var t,i,o=1;o<arguments.length;o++)for(i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}function g(e,t,o){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(o||"function"==typeof t){o||(o=t,t=null);var n,a,l=(t=f({},g.defaults,t||{})).highlight,c=0;try{n=i.lex(e,t)}catch(e){return o(e)}a=n.length;var h=function(e){if(e)return t.highlight=l,o(e);var i;try{i=r.parse(n,t)}catch(t){e=t}return t.highlight=l,e?o(e):o(null,i)};if(!l||l.length<3)return h();if(delete t.highlight,!a)return h();for(;c<n.length;c++)!function(e){"code"!==e.type?--a||h():l(e.text,e.lang,(function(t,i){return t?h(t):null==i||i===e.text?--a||h():(e.text=i,e.escaped=!0,void(--a||h()))}))}(n[c])}else try{return t&&(t=f({},g.defaults,t)),r.parse(i.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||g.defaults).silent)return"<p>An error occurred:</p><pre>"+s(e.message+"",!0)+"</pre>";throw e}}u.exec=u,g.options=g.setOptions=function(e){return f(g.defaults,e),g},g.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new a,xhtml:!1,baseUrl:null},g.Parser=r,g.parser=r.parse,g.Renderer=a,g.TextRenderer=l,g.Lexer=i,g.lexer=i.lex,g.InlineLexer=n,g.inlineLexer=n.output,g.parse=g,"undefined"!=typeof module&&"object"==typeof exports?module.exports=g:"function"==typeof define&&define.amd?define((function(){return g})):e.marked=g}("undefined"!=typeof window?window:global);var Ul=Object.freeze({__proto__:null});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/window.marked||(window.marked=Ul)
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/,Qo({_template:ft`
    <style>
      :host {
        display: block;
      }
    </style>
    <slot name="markdown-html">
      <div id="content"></div>
    </slot>
  `,is:"marked-element",properties:{markdown:{type:String,value:null},breaks:{type:Boolean,value:!1},pedantic:{type:Boolean,value:!1},renderer:{type:Function,value:null},sanitize:{type:Boolean,value:!1},sanitizer:{type:Function,value:null},disableRemoteSanitization:{type:Boolean,value:!1},smartypants:{type:Boolean,value:!1},callback:{type:Function,value:null},xhr:{type:Object,notify:!0,readOnly:!0}},observers:["render(markdown, breaks, pedantic, renderer, sanitize, sanitizer, smartypants, callback)"],ready:function(){this.markdown||(this._markdownElement=Ro(this).querySelector('[type="text/markdown"]'),this._markdownElement&&(this._markdownElement.src&&this._request(this._markdownElement.src),""!==this._markdownElement.textContent.trim()&&(this.markdown=this._unindent(this._markdownElement.textContent)),new MutationObserver(this._onScriptAttributeChanged.bind(this)).observe(this._markdownElement,{attributes:!0})))},attached:function(){this._attached=!0,this._outputElement=this.outputElement,this.render()},detached:function(){this._attached=!1},unindent:function(e){return this._unindent(e)},get outputElement(){return Ro(this).queryDistributedElements('[slot="markdown-html"]')[0]||this.$.content},render:function(){if(this._attached)if(this.markdown){var e=new marked.Renderer;this.renderer&&this.renderer(e);var t={renderer:e,highlight:this._highlight.bind(this),breaks:this.breaks,sanitize:this.sanitize,sanitizer:this.sanitizer,pedantic:this.pedantic,smartypants:this.smartypants};Ro(this._outputElement).innerHTML=marked(this.markdown,t,this.callback),this.fire("marked-render-complete",{},{composed:!0})}else Ro(this._outputElement).innerHTML=""},_highlight:function(e,t){return this.fire("syntax-highlight",{code:e,lang:t},{composed:!0}).detail.code||e},_unindent:function(e){if(!e)return e;var t=e.replace(/\t/g,"  ").split("\n"),i=t.reduce((function(e,t){if(/^\s*$/.test(t))return e;var i=t.match(/^(\s*)/)[0].length;return null===e||i<e?i:e}),null);return t.map((function(e){return e.substr(i)})).join("\n")},_request:function(e){this._setXhr(new XMLHttpRequest);var t=this.xhr;if(t.readyState>0)return null;t.addEventListener("error",this._handleError.bind(this)),t.addEventListener("loadend",function(e){var t=this.xhr.status||0;0===t||t>=200&&t<300?(this.sanitize=!this.disableRemoteSanitization,this.markdown=e.target.response):this._handleError(e),this.fire("marked-loadend",e)}.bind(this)),t.open("GET",e),t.setRequestHeader("Accept","text/markdown"),t.send()},_handleError:function(e){this.fire("marked-request-error",e,{cancelable:!0}).defaultPrevented||(this.markdown="Failed loading markdown source")},_onScriptAttributeChanged:function(e){"src"===e[0].attributeName&&this._request(this._markdownElement.src)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Qo({_template:ft`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      iron-icon {
        --iron-icon-width: var(--paper-badge-icon-width, 12px);
        --iron-icon-height: var(--paper-badge-icon-height, 12px);
      }

      .badge {
        @apply --layout;
        @apply --layout-center-center;
        @apply --paper-font-common-base;

        font-weight: normal;
        font-size: 11px;
        border-radius: 50%;
        margin-left: var(--paper-badge-margin-left, 0px);
        margin-bottom: var(--paper-badge-margin-bottom, 0px);
        width: var(--paper-badge-width, 20px);
        height: var(--paper-badge-height, 20px);
        background-color: var(--paper-badge-background, var(--accent-color));
        opacity: var(--paper-badge-opacity, 1.0);
        color: var(--paper-badge-text-color, white);

        @apply --paper-badge;
      }
    </style>

    <div class="badge">
      <iron-icon hidden\$="{{!_computeIsIconBadge(icon)}}" icon="{{icon}}"></iron-icon>
      <span id="badge-text" hidden\$="{{_computeIsIconBadge(icon)}}">{{label}}</span>
    </div>
  `,is:"paper-badge",hostAttributes:{role:"status",tabindex:0},behaviors:[Dn],listeners:{"iron-resize":"updatePosition"},properties:{for:{type:String,observer:"_forChanged"},label:{type:String,observer:"_labelChanged"},icon:{type:String,value:""},_boundNotifyResize:{type:Function,value:function(){return this.notifyResize.bind(this)}},_boundUpdateTarget:{type:Function,value:function(){return this._updateTarget.bind(this)}}},attached:function(){requestAnimationFrame(this._boundUpdateTarget)},attributeChanged:function(e){"hidden"===e&&this.updatePosition()},_forChanged:function(){this.isAttached&&this._updateTarget()},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_updateTarget:function(){this._target=this.target,requestAnimationFrame(this._boundNotifyResize)},_computeIsIconBadge:function(e){return e.length>0},get target(){var e=Ro(this).parentNode,t=Ro(this).getOwnerRoot();return this.for?Ro(t).querySelector("#"+this.for):e.nodeType==Node.DOCUMENT_FRAGMENT_NODE?t.host:e},updatePosition:function(){if(this._target&&this.offsetParent){var e=this.offsetParent.getBoundingClientRect(),t=this._target.getBoundingClientRect(),i=this.getBoundingClientRect();this.style.left=t.left-e.left+(t.width-i.width/2)+"px",this.style.top=t.top-e.top-i.height/2+"px"}}});
/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.github.io/LICENSE.txt
 */
class Kl extends e{render(){return i` ${this.output} `}static get tag(){return"moment-element"}static get properties(){return{datetime:{type:String},inputFormat:{type:String,attribute:"input-format"},outputFormat:{type:String,attribute:"output-format"},from:{type:String},to:{type:String},output:{type:String},libraryLoaded:{type:Boolean}}}constructor(){super(),this.datetime=new Date,this.inputFormat="",this.outputFormat="",this.from="",this.to="";const e=new URL(new URL("94b58ab3.js",import.meta.url).href,import.meta.url).href;window.addEventListener("es-bridge-moment-loaded",this._momentLoaded.bind(this)),window.ESGlobalBridge.requestAvailability().load("moment",e)}updated(e){e.forEach(((e,t)=>{if(["output"].includes(t)){let e=`${t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}-changed`;this.dispatchEvent(new CustomEvent(e,{detail:{value:this[t]}}))}["datetime","inputFormat","outputFormat","from","to","libraryLoaded"].includes(t)&&(this.output=this._computeOutput(this.datetime,this.inputFormat,this.outputFormat,this.from,this.to,this.libraryLoaded))}))}disconnectedCallback(){window.removeEventListener("es-bridge-moment-loaded",this._momentLoaded.bind(this)),super.disconnectedCallback()}_momentLoaded(){this.libraryLoaded=!0}_computeOutput(e,t,i,o,n,a){if(a){var l=t?moment(e,t):moment(e);return i?l=l.format(i):o?l="now"===o?l.fromNow():l.from(moment(o)):n&&(l="now"===n?l.toNow():l.to(moment(n))),l}}}window.customElements.define(Kl.tag,Kl);
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class Yl extends gt{constructor(){super()}static get template(){return ft`
      <style include="materializecss-styles-colors">
        :host {
          display: block;
          padding: 10px 10px 10px 0px;
        }
        :host([disabled]) {
          opacity: 0.5;
          background-color: #cccccc;
          pointer-events: none;
        }
        :host(:focus),
        :host(:hover) {
          z-index: 2;
        }
        :host(:focus) .comment-outer,
        :host(:hover) .comment-outer {
          border: 1px #0277bd solid;
        }
        :host [hidden] {
          display: none;
        }
        .comment-outer {
          display: table;
          width: 100%;
          border: 1px #ddd solid;
          color: #444;
        }
        .comment-outer.new-comment {
          border: 1px #d81b60 dashed;
          color: #000;
        }
        .comment-inner {
          display: table-row;
        }
        .comment-avatar {
          padding: 0 7px;
          width: 40px;
        }

        @media (max-width: 800px) {
          .comment-depth,
          .comment-avatar,
          .comment-content {
            padding: 0;
          }
        }
        .comment-depth,
        .comment-avatar,
        .comment-content {
          padding-top: 8px;
          padding-bottom: 8px;
          display: table-cell;
          vertical-align: top;
        }
        .comment-content {
          padding-right: 7px;
          max-width: 300px;
        }
        h1,
        h2,
        h3,
        h4 {
          text-align: left;
          font-size: 20px;
          line-height: 20px;
        }
        h1.comment-heading,
        h2.comment-heading,
        h3.comment-heading,
        h4.comment-heading {
          margin-top: 7px;
          position: sticky;
        }
        p {
          font-size: 14px;
          line-height: 18px;
          text-align: left;
        }
        #editcomment {
          background-color: white;
          padding: 4px;
        }
        marked-element {
          line-height: 16px;
          font-size: 14.4px;
          max-height: 500px;
          overflow-y: auto;
        }
        .nowrap-me marked-element:hover {
          box-shadow: -1px 0 0 0 black inset;
          cursor: pointer;
        }
        .nowrap-me marked-element ::slotted(#content p.marked-element) {
          height: 32px;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 35px;
        }
        .nowrap-me marked-element ::slotted(#content p.marked-element:after) {
          content: "see more";
          position: absolute;
          bottom: 65px;
          right: 17px;
          color: #1976d2;
        }
        .comment-depth-1 {
          width: 0;
        }
        .comment-depth-2 {
          width: 54px;
          border-right: 3px solid #ccc;
        }
        .comment-depth-3,
        .comment-depth-4,
        .comment-depth-5,
        .comment-depth-6,
        .comment-depth-7,
        .comment-depth-8,
        .comment-depth-9 {
          width: 108px;
          border-right: 3px solid #ccc;
        }
        @media (max-width: 1000px) {
          .comment-depth-2,
          .comment-depth-3,
          .comment-depth-4,
          .comment-depth-5,
          .comment-depth-6,
          .comment-depth-7,
          .comment-depth-8,
          .comment-depth-9 {
            width: 54px;
          }
        }
        @media (max-width: 800px) {
          .comment-depth-2,
          .comment-depth-3,
          .comment-depth-4,
          .comment-depth-5,
          .comment-depth-6,
          .comment-depth-7,
          .comment-depth-8,
          .comment-depth-9 {
            width: 27px;
          }
        }
        @media (max-width: 700px) {
          .comment-depth-2,
          .comment-depth-3,
          .comment-depth-4,
          .comment-depth-5,
          .comment-depth-6,
          .comment-depth-7,
          .comment-depth-8,
          .comment-depth-9 {
            width: 8px;
          }
        }
        .center {
          padding: 0;
        }
        .circle {
          border-radius: 50% !important;
        }
        .comment-actions {
          margin: 0;
          padding: 0;
          display: block;
          border-top: 1px solid #ddd;
        }
        .comment-actions lrnsys-button {
          display: inline-flex;
          --lrnsys-button-height: 30px;
          padding: 1px;
        }
        @media (max-width: 800px) {
          .comment-actions lrnsys-button span {
            display: none;
          }
        }
        .comment-actions .comment-actions-group {
          margin: 0;
          padding: 0;
          display: block;
        }
        .comment-actions .comment-actions-group.left-actions {
          float: left;
        }
        .comment-actions .comment-actions-group.right-actions {
          float: right;
        }
        moment-element {
          float: right;
          font-size: 90%;
          font-style: italic;
          font-weight: normal;
        }
        paper-badge {
          display: flex;
          float: right;
        }
        .like-icon-color {
          color: #2196f3;
        }
        .element-invisible {
          position: absolute;
          left: -9999px;
          top: 0;
          width: 0;
          height: 0;
          overflow: hidden;
        }
      </style>
      <div class$="comment-outer [[commentNew]]">
        <div class="comment-inner">
          <div
            class$="comment-depth comment-depth-[[comment.attributes.threadDepth]] grey lighten-3"
          ></div>
          <div class="comment-avatar">
            <lrndesign-avatar
              id="avatar"
              label="[[comment.relationships.author.data.name]]"
              src="[[comment.relationships.author.data.avatar]]"
              class="float-left ferpa-protect"
            ></lrndesign-avatar>
            <simple-tooltip
              for="avatar"
              animation-delay="0"
              class="ferpa-protect"
              >[[displayName]]</simple-tooltip
            >
            <template
              is="dom-if"
              if="[[comment.relationships.author.data.visual.icon]]"
            >
              <paper-badge
                icon="[[comment.relationships.author.data.visual.icon]]"
                for="papercard"
                label="[[comment.relationships.author.data.visual.label]]"
              >
              </paper-badge>
            </template>
          </div>
          <div class="comment-content">
            <div class="comment-body">
              <div id="bodyarea" class="nowrap-me">
                <h4 class="ferpa-protect comment-heading">
                  <span class="element-invisible">At </span
                  ><moment-element
                    datetime$="[[comment.attributes.created]]"
                    output-format="MMM DD[,] YYYY"
                  ></moment-element>
                  [[comment.relationships.author.data.display_name]]
                  <span class="element-invisible"
                    >[[comment.relationships.author.data.visual.label]]</span
                  >
                  said:
                </h4>
                <marked-element
                  smartypants
                  id="renderedcomment"
                  markdown="[[comment.attributes.body]]"
                >
                  <word-count
                    class="markdown-html-slot"
                    slot="markdown-html"
                  ></word-count>
                </marked-element>
              </div>
              <mtz-marked-editor id="commenteditor" hidden>
                <div slot="controls">
                  <mtz-marked-control-generic-wrap
                    icon="editor:format-bold"
                    title="Bold"
                    syntax-prefix="**"
                    syntax-suffix="**"
                    keys="ctrl+b"
                  ></mtz-marked-control-generic-wrap>
                  <mtz-marked-control-generic-wrap
                    icon="editor:format-italic"
                    title="Italic"
                    syntax-prefix="_"
                    syntax-suffix="_"
                    keys="ctrl+i"
                  ></mtz-marked-control-generic-wrap>
                  <mtz-marked-control-generic-line
                    icon="editor:format-size"
                    title="Heading 3"
                    syntax-prefix="### "
                  ></mtz-marked-control-generic-line>
                  <mtz-marked-control-generic-line
                    icon="editor:format-list-numbered"
                    title="Ordered List"
                    syntax-prefix="1. "
                  ></mtz-marked-control-generic-line>
                  <mtz-marked-control-generic-line
                    icon="editor:format-list-bulleted"
                    title="Unordered List"
                    syntax-prefix="- "
                  ></mtz-marked-control-generic-line>
                  <mtz-marked-control-link
                    icon="editor:insert-link"
                    title="Link"
                  ></mtz-marked-control-link>
                </div>
                <paper-textarea
                  char-counter
                  autofocus
                  id="editcomment"
                  label="Comment"
                  value="{{comment.attributes.body}}"
                  slot="textarea"
                ></paper-textarea>
              </mtz-marked-editor>
            </div>
            <div class="comment-actions">
              <div class="comment-actions-group left-actions">
                <lrnsys-button
                  on-click="actionHandler"
                  id="reply"
                  no-padding
                  data-commentid="[[comment.id]]"
                  icon="reply"
                  hover-class="[[hoverClass]]"
                  icon-class="grey-text no-margin"
                  hidden$="[[!comment.actions.reply]]"
                  label="Reply"
                ></lrnsys-button>
              </div>
              <div class="comment-actions-group right-actions">
                <lrnsys-button
                  on-click="actionHandler"
                  id="edit"
                  data-commentid="[[comment.id]]"
                  icon="create"
                  no-padding
                  hover-class="[[hoverClass]]"
                  icon-class="grey-text no-margin"
                  hidden$="[[!comment.actions.edit]]"
                  label="Edit"
                ></lrnsys-button>
                <lrnsys-button
                  on-click="actionHandler"
                  id="delete"
                  no-padding
                  data-commentid="[[comment.id]]"
                  icon="delete-forever"
                  hover-class="[[hoverClass]]"
                  icon-class="grey-text no-margin"
                  hidden$="[[!comment.actions.delete]]"
                  label="Delete"
                ></lrnsys-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}static get tag(){return"lrnsys-comment"}static get properties(){return{comment:{type:Object,notify:!0,observer:"_commentLoaded"},displayName:{type:String,notify:!0,computed:"_generateName(comment.relationships.author.data.display_name, comment.relationships.author.data.visual)"},commentNew:{type:String,notify:!0,computed:"_isCommentNew(comment.relationships.author.data.visual)"},hoverClass:{type:String,reflectToAttribute:!0},editform:{type:Boolean,notify:!0,observer:"_editTrigger",reflectToAttribute:!0},disabled:{type:Boolean,notify:!0,reflectToAttribute:!0}}}connectedCallback(){super.connectedCallback(),this.shadowRoot.querySelector("#bodyarea").addEventListener("click",this.bodyToggle.bind(this)),this.shadowRoot.querySelector("#bodyarea").addEventListener("dblclick",this.bodyToggleOn.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.shadowRoot.querySelector("#bodyarea").removeEventListener("click",this.bodyToggle.bind(this)),this.shadowRoot.querySelector("#bodyarea").removeEventListener("dblclick",this.bodyToggleOn.bind(this))}_generateName(e,t){return void 0!==t&&!1!==t.label?e+" ("+t.label+")":e}_isCommentNew(e){return void 0!==e&&!1!==e.label?"new-comment":""}_commentLoaded(e){this.editform=this.comment.metadata.editing,this.disabled=this.comment.metadata.disabled,this.blockFirstState=!0}actionHandler(e){var t=e.target;null==t.dataCommentid||t.disabled||("reply"==t.id?this.dispatchEvent(new CustomEvent("comment-reply",{bubbles:!0,cancelable:!0,composed:!0,detail:{comment:this.comment,target:t}})):"like"==t.id?(this.shadowRoot.querySelector("#like").classList.toggle("like-icon-color"),this.dispatchEvent(new CustomEvent("comment-like",{bubbles:!0,cancelable:!0,composed:!0,detail:{comment:this.comment,target:t}}))):"edit"==t.id?this.editform=!this.editform:"delete"==t.id&&this.dispatchEvent(new CustomEvent("comment-delete-dialog",{bubbles:!0,cancelable:!0,composed:!0,detail:{comment:this.comment,target:t}})))}_editTrigger(e){void 0!==this.comment&&this.comment.actions.edit&&setTimeout((()=>{this.shadowRoot.querySelector("#renderedcomment").hidden=this.editform,this.shadowRoot.querySelector("#commenteditor").hidden=!this.editform,this.editform?(this.shadowRoot.querySelector("#edit").icon="save",this.shadowRoot.querySelector("#edit").label="Save",this.shadowRoot.querySelector("#reply").disabled=!0,this.shadowRoot.querySelector("#editcomment").focus(),this.dispatchEvent(new CustomEvent("comment-editing",{bubbles:!0,cancelable:!0,composed:!0,detail:{comment:this.comment}})),this.blockFirstState=!1):(this.blockFirstState?this.blockFirstState=!1:this.dispatchEvent(new CustomEvent("comment-save",{bubbles:!0,cancelable:!0,composed:!0,detail:{comment:this.comment}})),this.shadowRoot.querySelector("#edit").icon="create",this.shadowRoot.querySelector("#edit").label="Edit",this.shadowRoot.querySelector("#reply").disabled=!1)}),0)}bodyToggle(e){this.shadowRoot.querySelector("#bodyarea").classList.remove("nowrap-me")}bodyToggleOn(e){this.shadowRoot.querySelector("#bodyarea").classList.toggle("nowrap-me")}}window.customElements.define(Yl.tag,Yl);class Wl extends gt{static get template(){return ft`
      <style>
        :host {
          display: block;
        }
        app-toolbar {
          padding: 0;
        }
        app-toolbar > *:not(:last-child) {
          margin-right: 10px;
        }
        lrnsys-button {
          font-size: 12px;
        }
        .comment-button {
          --lrnsys-button-height: unset;
        }
        .comment-button::part(lrnsys-button-inner-div) {
          padding: 0;
        }
      </style>
      <!-- Load all comments on load of element -->
      <iron-ajax
        auto
        url="[[sourcePath]]"
        handle-as="json"
        method="[[opsRequestMethod.list]]"
        last-response="{{comments}}"
      ></iron-ajax>
      <!-- Create stub-comment -->
      <iron-ajax
        id="ajaxcreatestub"
        url="[[createStubUrl]]"
        method="[[opsRequestMethod.create]]"
        body="[[activeComment.id]]"
        on-response="_updateReply"
        handle-as="json"
        last-response="{{newComment}}"
      ></iron-ajax>
      <!-- Update comment -->
      <iron-ajax
        id="ajaxupdaterequest"
        url="[[reqUrl]]"
        method="[[opsRequestMethod.update]]"
        body="[[activeComment]]"
        content-type="application/json"
        handle-as="json"
        on-response="_handleUpdateResponse"
      ></iron-ajax>
      <!-- Delete comment -->
      <iron-ajax
        id="ajaxdeleterequest"
        url="[[reqUrl]]"
        method="[[opsRequestMethod.delete]]"
        body="[[activeComment]]"
        content-type="application/json"
        handle-as="json"
        on-response="_handleDeleteResponse"
      ></iron-ajax>
      <!-- Like comment -->
      <iron-ajax
        id="ajaxlikerequest"
        url="[[reqUrl]]"
        method="[[opsRequestMethod.like]]"
        body="[[activeComment]]"
        content-type="application/json"
        handle-as="json"
        on-response="_handleLikeResponse"
      ></iron-ajax>
      <app-toolbar>
        <lrnsys-button
          icon="add"
          class="comment-button"
          raised
          on-click="handleTopReply"
          id="leavecomment"
          hover-class="blue white-text"
          label="Add Comment"
        ></lrnsys-button>
        <paper-input
          label="Filter comments by text"
          id="filtercomments"
          aria-controls="filteredcomments"
          value=""
          always-float-label=""
        ></paper-input>
      </app-toolbar>
      <grafitto-filter
        id="filteredcomments"
        items$="[[_toArray(comments.data)]]"
        where="attributes.body"
        as="filtered"
        like=""
      >
        <template>
          <template
            is="dom-repeat"
            id="commentlist"
            items="[[filtered]]"
            as="item"
          >
            <lrnsys-comment
              comment="{{item}}"
              hover-class="blue white-text"
            ></lrnsys-comment>
          </template>
        </template>
      </grafitto-filter>
    `}static get tag(){return"lrnsys-comment-list"}static get properties(){return{csrfToken:{type:String},opsRequestMethod:{type:Object,value:{list:"GET",create:"POST",update:"PUT",delete:"DELETE",like:"PATCH"}},activeComment:{type:Object,notify:!0},newComment:{type:Object,notify:!0},comments:{type:Object,notify:!0},sourcePath:{type:String,notify:!0},commentOpsBase:{type:String,notify:!0},createStubUrl:{type:String,notify:!0},reqUrl:{type:String,notify:!0,computed:"_computeCommentOpsUrl(activeComment, commentOpsBase, csrfToken)"}}}connectedCallback(){super.connectedCallback(),this.shadowRoot.querySelector("#filtercomments").addEventListener("value-changed",(e=>{this.shadowRoot.querySelector("#filteredcomments").like=e.target.value}))}disconnectedCallback(){this.shadowRoot.querySelector("#filtercomments").removeEventListener("value-changed",(e=>{this.shadowRoot.querySelector("#filteredcomments").like=e.target.value})),super.disconnectedCallback()}_computeCommentOpsUrl(e,t,i){if(void 0!==e)return t+"/"+e.id+"?token="+i}handleLike(e){this.activeComment=e.detail.comment,this.shadowRoot.querySelector("#ajaxlikerequest").generateRequest()}constructor(){super(),window.SimpleModal.requestAvailability(),setTimeout((()=>{this.addEventListener("comment-save",this.handleSave.bind(this)),this.addEventListener("comment-editing",this.handleEditing.bind(this)),this.addEventListener("comment-reply",this.handleReply.bind(this)),this.addEventListener("comment-like",this.handleLike.bind(this)),this.addEventListener("comment-delete-dialog",this.handleDeleteDialog.bind(this))}),0)}_handleLikeResponse(e){}handleDeleteDialog(e){this.activeComment=e.detail.comment;let t=document.createElement("p"),i=document.createTextNode("Are you sure you want to delete your comment? This cannot be undone.");t.appendChild(i);let o=document.createElement("div");o.classList.add("buttons");let n=document.createElement("button");n.setAttribute("dialog-dismiss","dialog-dismiss"),n.style.padding="16px",n.style.margin="16px",i=document.createTextNode("Keep comment"),n.appendChild(i);let a=document.createElement("button");a.setAttribute("dialog-confirm","dialog-confirm"),a.setAttribute("autofocus","autofocus"),a.addEventListener("click",this._handleDeleteConfirm.bind(this)),a.style.color="white",a.style.backgroundColor="red",a.style.padding="16px",a.style.margin="16px",i=document.createTextNode("Delete the comment"),a.appendChild(i),o.appendChild(a),o.appendChild(n);const l=new CustomEvent("simple-modal-show",{bubbles:!0,composed:!0,cancelable:!0,detail:{title:"Delete comment",elements:{content:t,buttons:o},styles:{"--simple-modal-width":"15vw","--simple-modal-max-width":"15vw","--simple-modal-z-index":"100000000","--simple-modal-min-height":"10vh"},invokedBy:e.detail.target,clone:!1}});this.dispatchEvent(l)}handleEditing(e){const t=new CustomEvent("simple-toast-show",{bubbles:!0,composed:!0,cancelable:!0,detail:{text:"Be awesome to each other",duration:4e3}});this.dispatchEvent(t)}handleTopReply(e){this.set("newComment",[]),this.set("activeComment",[]),this.shadowRoot.querySelector("#ajaxcreatestub").generateRequest()}handleReply(e){this.set("newComment",[]),this.activeComment=e.detail.comment,this.shadowRoot.querySelector("#ajaxcreatestub").generateRequest()}_updateReply(e){var t=this.activeComment,i=this.comments.data;if(this.newComment=this.newComment.data,0==i.length)i.push(this.newComment);else if(void 0===t.id)i.push(this.newComment);else for(var o=0;o<i.length;o++)i[o].id==t.id&&i.splice(o+1,0,this.newComment);this.activeComment=this.newComment,this.set("comments.data",[]),this.set("comments.data",i),this.notifyPath("comments.data")}_handleDeleteConfirm(e){this.shadowRoot.querySelector("#ajaxdeleterequest").generateRequest()}_handleDeleteResponse(e){for(var t=this.activeComment,i=this.comments.data,o=0;o<i.length;o++)if(i[o].id==t.id){i.splice(o,1),this.set("activeComment",[]),this.set("comments.data",[]),this.set("comments.data",i),this.notifyPath("comments.data");const e=new CustomEvent("simple-toast-show",{bubbles:!0,composed:!0,cancelable:!0,detail:{text:"Comment deleted",duration:4e3}});return this.dispatchEvent(e),!0}}handleSave(e){this.activeComment=e.detail.comment,this.shadowRoot.querySelector("#ajaxupdaterequest").generateRequest()}_handleUpdateResponse(e){const t=new CustomEvent("simple-toast-show",{bubbles:!0,composed:!0,cancelable:!0,detail:{text:"Comment saved!",duration:4e3}});this.dispatchEvent(t)}_toArray(e){return null==e?[]:Object.keys(e).map((function(t){return e[t]}))}}window.customElements.define(Wl.tag,Wl);export{Wl as LrnsysCommentList};

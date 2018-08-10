!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("presentation-dom"),require("presentation-decorator"),require("presentation-mediator"),require("augmentedjs-next"),require("presentation-models"),require("presentation-view")):"function"==typeof define&&define.amd?define("presentation-components",["presentation-dom","presentation-decorator","presentation-mediator","augmentedjs-next","presentation-models","presentation-view"],t):"object"==typeof exports?exports["presentation-components"]=t(require("presentation-dom"),require("presentation-decorator"),require("presentation-mediator"),require("augmentedjs-next"),require("presentation-models"),require("presentation-view")):e["presentation-components"]=t(e["presentation-dom"],e["presentation-decorator"],e["presentation-mediator"],e.Augmented,e["presentation-models"],e["presentation-view"])}(this,function(e,t,s,i,n,r){return function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/",s(s.s=6)}([function(t,s){t.exports=e},function(e,s){e.exports=t},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(s(16)),n=(o(s(0)),o(s(17))),r=s(1);function o(e){return e&&e.__esModule?e:{default:e}}t.default=class extends r.DecoratorView{constructor(e){super(e),this.isInitalized=!1,this._menuItems=[],this.title="",this.model?this.model.clear():this.model=new n.default,e&&(e.data&&i.default.isObject(e.data)&&this.model.set(e.data),e.title&&i.default.isString(e.title)&&(this.title=e.title),e.menuItems&&i.default.isObject(e.menuItems)&&(this._menuItems=e.menuItems)),this.el&&this.name&&(this.isInitalized=!0)}addItem(e,t,s,i,n){n?this.addSpacer():this._menuItems.push({id:e,click:t,icon:s,title:i,spacer:!1})}addSpacer(){this._menuItems.push({id:null,click:null,icon:null,title:null,spacer:!0})}get menuItems(){return this._menuItems}set menuItems(e){this._menuItems=e}clearMenuItems(){this._menuItems.length=0}select(e){return getItem(e)}getItem(e){const t=this._menuItems.length;let s=0;for(s=0;s<t;s++)if(this._menuItems[s].id&&this._menuItems[s].id===e)return this._menuItems[s];return null}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(1),n=function(e){return e&&e.__esModule?e:{default:e}}(s(0));t.default=class extends i.DecoratorView{constructor(e){super(e),this.name||(this.name="dialog"),e&&e.title?this._title=e.title:this._title="",e&&e.body?this._body=e.body:this._body="",e&&e.style?this._style=e.style:this._style="form",e&&e.buttons?this._buttons=e.buttons:this._buttons={}}set title(e){this._title=e}get title(){return this._title}set style(e){this._style=e}get style(){return this._style}set buttons(e){this._buttons=e}get buttons(){return this._buttons}_template(){return`<div class="blur"><dialog class="${this._style}"><h1>${this._title}</h1>${this._body}${this._getButtonGroup()}</dialog></div>`}set body(e){this._body=e}get body(){return this._body}_getButtonGroup(){let e='<div class="buttonGroup">',t=0,s=Object.keys(this._buttons),i=s?s.length:0;for(t=0;t<i;t++)e+=`<button data-${this.name}="${this._buttons[s[t]]}" data-click="${this._buttons[s[t]]}">${s[t]}</button>`;return e+"</div>"}render(){return this.el&&(n.default.setValue(this.el,this._template()),this.delegateEvents(),this.trigger("open")),this}cancel(e){this.close(e)}open(e){this.render()}close(e){this.trigger("close"),n.default.empty(this.el,!0)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((e,t)=>{let s="";if(e&&t&&0!==t.length){const i=t.length;let n=0;for(n=0;n<i;n++)t[n].spacer?s+='<div class="spacer"></div>':s=s+'<div id="'+t[n].id+'" data-'+e+'="'+t[n].id+'" data-click="'+t[n].click+'">'+(t[n].icon?'<i class="material-icons md-dark">'+t[n].icon+"</i>":"")+t[n].title+"</div>"}return s})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((e,t)=>{let s="";if(e&&t&&0!==t.length){const i=t.length;let n=0;for(n=0;n<i;n++)t[n].spacer?s+='<li class="spacer"></li>':s=s+'<li id="'+t[n].id+'" data-'+e+'="'+t[n].id+'" data-click="'+t[n].click+'">'+(t[n].icon?'<i class="material-icons md-dark">'+t[n].icon+"</i>":"")+t[n].title+"</li>"}return s})},function(e,t,s){"use strict";var i=y(s(7)),n=y(s(8)),r=y(s(3)),o=y(s(9)),l=y(s(10)),u=y(s(11)),a=y(s(12)),d=y(s(13)),c=y(s(15)),h=y(s(18)),f=y(s(19)),m=y(s(20)),_=y(s(21)),p=y(s(22)),b=y(s(24));function y(e){return e&&e.__esModule?e:{default:e}}e.exports.Article=i.default,e.exports.Card=n.default,e.exports.DialogView=r.default,e.exports.ConfirmationDialogView=o.default,e.exports.AlertDialogView=l.default,e.exports.Footer=u.default,e.exports.Header=a.default,e.exports.Manager=d.default,e.exports.HamburgerMenu=c.default,e.exports.Menu=h.default,e.exports.NavigationMenu=f.default,e.exports.NotificationCenter=m.default,e.exports.Notification=_.default,e.exports.Splash=p.default,e.exports.Toolbar=b.default},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(1),n=function(e){return e&&e.__esModule?e:{default:e}}(s(0));const r="article";t.default=class extends i.DecoratorView{constructor(e){e||(e={}),e.name||(e.name=r),e.tagName=r,super(e),e&&e.header?this._header=e.header:this._header="",e&&e.headerEl?this._headerEl=e.headerEl:this._headerEl="",e&&e.headerStyle?this._headerStyle=e.headerStyle:this._headerStyle="",e&&e.body?this._body=e.body:this._body="",e&&e.footer?this._footer=e.footer:this._footer="",e&&e.footerEl?this._footerEl=e.footerEl:this._footerEl="",e&&e.footerStyle?this._footerStyle=e.footerStyle:this._footerStyle="",e&&e.sections?this._sections=e.sections:this._sections=[]}set header(e){this._header=e}get header(){return this._header}set footer(e){this._footer=e}get footer(){return this._footer}set body(e){this._body=e}get body(){return this._body}set sections(e){e&&Array.isArray(e)&&(this._sections=e)}get sections(){return this._sections}_formatSections(){const e=this._sections.length;let t="",s=0;for(s=0;s<e;s++)t+=this._formatSection(this._sections[s]);return t}_formatSection(e){let t="";if(e&&(e.body||e.id||e.class)){const s=e.class?` class="${e.class}"`:"";t=`<section${e.id?` id="${e.id}"`:""}${s}>${e.body?e.body:""}</section>`}return t}addSection(e){this._sections.push(e)}clearSections(){this._sections.splice(0,this._sections.length)}render(){return this.el&&(n.default.setValue(this.el,this._template()),this.delegateEvents()),this}_template(){let e="";if(this._header){let t="",s="";this._headerEl&&(t=` id="${this._headerEl}"`),this._headerStyle&&(s=` class="${this._headerStyle}"`),e=`<header${t}${s}>${this._header}</header>`}let t="";if(this._footer){let e="",s="";this._footerEl&&(e=` id="${this._footerEl}"`),this._footerStyle&&(s=` class="${this._footerStyle}"`),t=`<footer${e}${s}>${this._footer}</footer>`}let s="";return this._body&&(s=this._bodyEl?`<div id="${this._bodyEl}">${this._body}</div>`:`${this._body}`),`${e}${s}${this._formatSections()}${t}`}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(1),n=function(e){return e&&e.__esModule?e:{default:e}}(s(0));t.default=class extends i.DecoratorView{constructor(e){e||(e={}),e.name||(e.name="card"),e.style?e.style=`card ${e.style}`:e.style="card",super(e),e&&e.body?this._body=e.body:this._body=""}set style(e){this._style=e}get style(){return this._style}_template(){return this._body}set body(e){this._body=e}get body(){return this._body}render(){return this.el&&(n.default.setValue(this.el,this._template()),this.delegateEvents()),this}remove(){return this.removeTemplate(this.el,!0),super.remove()}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(s(3));t.default=class extends i.default{constructor(e){e||(e={}),e.buttons||(e.buttons={}),e.buttons.yes="yes",e.buttons.no="no",e.style="alert",super(e)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(s(3));t.default=class extends i.default{constructor(e){e||(e={}),e.buttons||(e.buttons={}),e.buttons.cancel="cancel",e.style="alert",super(e)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(1);t.default=class extends i.DecoratorView{constructor(e){super(e),e&&e.body?this._body=e.body:this._body=""}set body(e){this._body=e}get body(){return this._body}render(){return this.el&&(Dom.setValue(this.el,this._template()),this.delegateEvents()),this}remove(){return this.removeTemplate(this.el,!0),super.remove()}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(1),n=function(e){return e&&e.__esModule?e:{default:e}}(s(0));t.default=class extends i.DecoratorView{constructor(e){super(e),e&&e.title?this._title=e.title:this._title="",e&&e.subTitle?this._subTitle=e.subTitle:this._subTitle=""}set title(e){this._title=e}get title(){return this._title}set subTitle(e){this._subTitle=e}get subTitle(){return this._subTitle}render(){return n.default.setValue(this.el,`${this.template}${this.title?"<h1>"+this.title+"</h1>":""}${this.subTitle?"<h2>"+this.subTitle+"</h2>":""}`),this.delegateEvents(),this.syncAllBoundElements(),this}remove(){return this.removeTemplate(this.el,!0),super.remove()}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(14);t.default=class extends i.Mediator{constructor(e){super(e)}manageComponent(e){return this.observeColleagueAndTrigger(e,e.name,e.name)}unmanageComponent(e){return this.dismissColleagueTrigger(e,e.name,e.name)}}},function(e,t){e.exports=s},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(s(4)),n=o(s(0)),r=o(s(2));function o(e){return e&&e.__esModule?e:{default:e}}const l=(e,t,s)=>`\n    <section class="material-design-hamburger" data-${e}="hamburgerClickRegion">\n      <div class="material-design-hamburger__icon" data-${e}="hamburgerIcon" data-click="toggle">\n        <i class="material-icons md-light">menu</i>\n      </div>\n    </section>\n    <section class="menu menu--off" data-${e}="hamburgerMenu">\n      <div>${t}</div>\n      ${(0,i.default)(e,s)}\n    </section>\n  `;t.default=class extends r.default{constructor(e){super(e)}render(){if(this.isInitalized&&(this.template=null,this.el)){const e=n.default.selector(this.el);e&&(n.default.addClass(e,"wrapper"),e.setAttribute(`data-${this.name}`,"hamburger"),e.innerHTML=l(this.name,this.title,this.menuItems)),this.delegateEvents(),this.syncAllBoundElements()}return this}toggle(){if(!this.modal){const e=this.boundElement("hamburgerMenu");this.boundElement("hamburgerClickRegion").classList.toggle("model"),e.classList.toggle("menu--on")}}}},function(e,t){e.exports=i},function(e,t){e.exports=n},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(s(2)),n=o(s(0)),r=o(s(5));function o(e){return e&&e.__esModule?e:{default:e}}const l=(e,t)=>`<i class="material-icons md-dark">more_vert</i><ul>${(0,r.default)(e,t)}</ul>`;t.default=class extends i.default{constructor(e){e||(e={}),e.tagName||(e.tagName="nav"),super(e)}render(){if(!this.isInitalized)return this;if(this.template=null,!this.el)return this;{const e=n.default.selector(this.el);e&&(n.default.addClass(e,"tools"),e.setAttribute("data-"+this.name,"menu"),e.innerHTML=l(this.name,this.menuItems))}return this.delegateEvents(),this.syncAllBoundElements(),this}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(s(2)),n=o(s(0)),r=o(s(5));function o(e){return e&&e.__esModule?e:{default:e}}t.default=class extends i.default{constructor(e){e||(e={}),e.tagName||(e.tagName="nav"),e.style?e.style=`${option.style} navigation`:e.style="navigation",super(e)}render(){if(this.isInitalized&&(this.template=null,this.el)){const e=n.default.selector(this.el);e&&(n.default.addClass(e,"navigation"),e.setAttribute("data-"+this.name,"navigation-menu"),e.innerHTML=(0,r.default)(this.name,this.menuItems)),this.delegateEvents(),this.syncAllBoundElements()}return this}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(s(2)),n=o(s(0)),r=o(s(4));function o(e){return e&&e.__esModule?e:{default:e}}t.default=class extends i.default{constructor(e){super(e)}get notifications(){return this.menuItems}set notifications(e){this.menuItems=e}showNotification(){}hideNotification(){}clearNotifications(){this.clearMenuItems()}render(){if(this.template=null,this.el){const e=n.default.selector(this.el);e&&(n.default.addClass(e,"notify"),e.setAttribute("data-"+this.name,"notify"),e.innerHTML=`<ul>${(0,r.default)(this.name,this.menuItems)}</ul>`),this.delegateEvents(),this.syncAllBoundElements()}return this}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(s(3));t.default=class extends i.default{constructor(e){e||(e={}),e.buttons||(e.buttons={}),e.style?e.style=`${e.style} notify`:e.style="notify",e.name||(e.name="notify"),e.tagName="div",e.timeOut?this.timeOut=e.timeOut:this.timeOut=2e3,super(e)}_template(){return`${this._title?"<h1>"+this._title+"</h1>":""}${this._body}`}render(){const e=this,t=this.timeOut;return setTimeout(function(){const s=e.el;s.classList.add("slide"),setTimeout(function(){e.remove(),s.remove()},t)},2*t),super.render()}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(23);t.default=class extends i.View{constructor(e){e||(e={}),e.name||(e.name="splash"),e.style?e.style=`${e.style} splash`:e.style="splash",e.title||(e.title="Untitled"),e.figureStyle||(e.figureStyle="logo_large"),e.template||(e.template=`\n        ${e.title?"<h1>"+e.title+"</h1>":""}\n        ${e.subTitle?"<h2>"+e.subTitle+"</h2>":""}\n        ${e.subSubTitle?"<h3>"+e.subSubTitle+"</h3>":""}\n        <figure class="${e.figureStyle}"></figure>\n      `),super(e),e.timeOut?this.timeOut=e.timeOut:this.timeOut=2e3}render(){const e=this,t=this.timeOut;return setTimeout(function(){const s=e.el;s.classList.add("fade"),setTimeout(function(){e.remove(),s.remove()},t)},2*t),super.render()}}},function(e,t){e.exports=r},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(s(2)),n=o(s(0)),r=o(s(4));function o(e){return e&&e.__esModule?e:{default:e}}t.default=class extends i.default{constructor(e){super(e)}render(){if(!this.isInitalized)return this;if(this.template=null,!this.el)return this;{const e=n.default.selector(this.el);e&&(n.default.addClass(e,"toolbar"),e.setAttribute("data-"+this.name,"toolbar"),e.innerHTML=(0,r.default)(this.name,this.menuItems))}return this.delegateEvents(),this.syncAllBoundElements(),this}}}])});
//# sourceMappingURL=presentation-components.js.map
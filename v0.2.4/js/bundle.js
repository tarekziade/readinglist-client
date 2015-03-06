!function e(t,r,n){function i(a,o){if(!r[a]){if(!t[a]){var l="function"==typeof require&&require;if(!o&&l)return l(a,!0);if(s)return s(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[a]={exports:{}};t[a][0].call(u.exports,function(e){var r=t[a][1][e];return i(r?r:e)},u,u.exports,e,t,r,n)}return r[a].exports}for(var s="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(e){(function(t){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e};e("babel/polyfill");var n=r(e("react/addons")),i=r(e("./api")),s=r(e("./content")),a=e("./flux"),o=a.AuthStore,l=a.ArticleStore,c=a.stores,u=r(e("./components/App")),d="https://readinglist.dev.mozaws.net/v1",h="https://readable-proxy.herokuapp.com/api/get",p=t.env.CLIENT_DEVICE_IDENTIFIER||"readinglist-client",f=!1,m=new i(d,{clientIdentifier:p,debug:f}),g=new s(h,{debug:f});c.register({authStore:new o(m,{debug:f}),articleStore:new l(m,g,{clientIdentifier:p,debug:f})}),n.render(n.createElement(u,null),document.querySelector("#app"))}).call(this,e("_process"))},{"./api":4,"./components/App":7,"./content":16,"./flux":17,_process:2,"babel/polyfill":"babel/polyfill","react/addons":"react/addons"}],2:[function(e,t){function r(){if(!a){a=!0;for(var e,t=s.length;t;){e=s,s=[];for(var r=-1;++r<t;)e[r]();t=s.length}a=!1}}function n(){}var i=t.exports={},s=[],a=!1;i.nextTick=function(e){s.push(e),a||setTimeout(r,0)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.on=n,i.addListener=n,i.once=n,i.off=n,i.removeListener=n,i.removeAllListeners=n,i.emit=n,i.binding=function(){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],3:[function(e,t){t.exports=[{added_by:"niko",title:"Reframing Accessibility for the Web",url:"http://alistapart.com/article/reframing-accessibility-for-the-web"},{added_by:"niko",title:"Roadmap for 2015",url:"http://www.openwebrtc.io/blog/2015/1/15/roadmap-for-2015"},{added_by:"niko",title:"W3C Updates General Document License",url:"http://www.w3.org/blog/2015/02/w3c-updates-general-document-license/"},{added_by:"niko",title:"15 Best Node.js Tools for 2015",url:"http://codegeekz.com/15-best-nodejs-tools-for-2015/"},{added_by:"niko",title:"AngularJS vs. React",url:"http://blog.backand.com/angularjs-vs-react/"},{added_by:"niko",title:"You Don't Like Google's Go Because You Are Small",url:"http://tmikov.blogspot.com/2015/02/you-dont-like-googles-go-because-you.html"},{added_by:"niko",title:"How to set up a modern web app and stay sane",url:"http://khmylov.com/blog/2015/02/build-web-app-and-survive/"},{added_by:"niko",title:"The Joel Test Updated For Programmers",url:"http://simpleprogrammer.com/2015/02/16/joel-test-programmers-simple-programmer-test/"},{added_by:"niko",title:"20 Best Free IDEs and Editors for Programmers",url:"http://devzum.com/2015/02/17/20-best-free-ides-and-editors-for-programmers/"},{added_by:"niko",title:"A Monadic Approach to Error Handling in Collection Pipelines",url:"https://michaelfeathers.silvrback.com/a-monadic-approach-to-error-handling-in-collection-pipelines"},{added_by:"niko",title:"How NativeScript Works",url:"http://developer.telerik.com/featured/nativescript-works/"},{added_by:"niko",title:"How to Build an API Service in 30 Minutes with Express.js: JavaScript, HTML5, CSS3 Conference",url:"http://fluentconf.com/javascript-html-2015/public/schedule/detail/39040?cmp=tw-web-confsched-info-fl15_sessions"},{added_by:"niko",title:"Web Designers And Web Developers, These Resources Are For You",url:"http://www.designyourway.net/blog/resources/web-designers-and-web-developers-these-resources-are-for-you/"},{added_by:"niko",title:"Node.js and JavaScript Flow (part 2) - Fibers and Generators",url:"http://blog.vullum.io/nodejs-javascript-flow-fibers-generators/"}]},{}],4:[function(e,t,r){(function(t){"use strict";var n=function(e){return e&&e.__esModule?e["default"]:e},i=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=n(e("./batch")),o=n(e("rest")),l=n(e("rest/interceptor/pathPrefix")),c=n(e("rest/interceptor/mime")),u=n(e("rest/interceptor/errorCode")),d=n(e("rest/interceptor/defaultRequest")),h=n(e("rest/interceptor/hateoas")),p=n(e("rest/interceptor")),f=/^#persistent:(true|false);auth:([a-f0-9]{64})$/,m=r.AUTH_TOKEN_KEYNAME="readinglist:auth:token",g=r.MAX_ITEMS_PER_PAGE=t.env.MAX_ITEMS_PER_PAGE||10,b=r.ArticleConstants=Object.freeze({sort:{ADDED_ON_DESC:"-added_on",LAST_MODIFIED_DESC:"-last_modified",TITLE_ASC:"title"}}),v=r.authInterceptor=p({request:function(e){var t=function(){return e.apply(this,arguments)};return t.toString=function(){return e.toString()},t}(function(e,t){var r=e.headers||(e.headers={}),n=t.authTokenGetter();return n&&(r.Authorization="Bearer "+t.authTokenGetter()),e})}),E=function(){function e(t){var r=void 0===arguments[1]?{}:arguments[1];s(this,e),this.baseUrl=t,this.clientIdentifier=r.clientIdentifier||"readinglist-client",this.debug=!!r.debug,this.client=r.client||this.createClient(),this.window=r.window||window,this._authToken=null,this._nextPageUrl=null,this._totalRecords=0}return i(e,null,{defaultFilters:{get:function(){return{_limit:g,_sort:b.sort.LAST_MODIFIED_DESC,archived:!1,unread:!0}},configurable:!0},totalRecords:{get:function(){return this._totalRecords||0},configurable:!0},_wrap:{value:function(e){var t=this;return e["catch"](function(e){if(!e.entity||"loaderror"===e.error)throw new Error("Server is unreachable. Are you offline?");throw Object.assign(new Error,e.entity)}).then(function(e){var r=e.headers||{};return r["Next-Page"]&&(t._nextPageUrl=r["Next-Page"]),r["Total-Records"]&&(t._totalRecords=parseInt(r["Total-Records"],10)),t.debug&&console.info("API response",e),e.entity})},writable:!0,configurable:!0},createClient:{value:function(){var e=this;return o.wrap(l,{prefix:this.baseUrl}).wrap(u,{code:400}).wrap(d,{headers:{"Requested-With":this.clientIdentifier}}).wrap(c,{mime:"application/json;encoding=UTF-8"}).wrap(h).wrap(v,{authTokenGetter:function(){return e._authToken}})},writable:!0,configurable:!0},hello:{value:function(){return this._wrap(this.client({path:"/"}))},writable:!0,configurable:!0},signinToFxA:{value:function(){var e=void 0===arguments[0]?{persistent:!1}:arguments[0],t=this.window.location,r=encodeURIComponent(t.protocol+"//"+t.hostname+":"+t.port+t.pathname+("#persistent:"+e.persistent+";auth:"));this.window.location=""+this.baseUrl+"/fxa-oauth/login?redirect="+r+"#"},writable:!0,configurable:!0},checkAuth:{value:function(){var e=this.window.sessionStorage.getItem(m);if(e||(e=this.window.localStorage.getItem(m)),e)return this.setAuthToken(e);var t=f.exec(this.window.location.hash);return t?(this.window.location.hash="",this.setAuthToken(t[2],"true"===t[1])):null},writable:!0,configurable:!0},setAuthToken:{value:function(e){var t=void 0===arguments[1]?!1:arguments[1];return this._authToken=e,e?(this.window.sessionStorage.setItem(m,e),t&&this.window.localStorage.setItem(m,e)):(this.window.sessionStorage.removeItem(m),this.window.localStorage.removeItem(m)),e},writable:!0,configurable:!0},signout:{value:function(){this.setAuthToken(null)},writable:!0,configurable:!0},createArticle:{value:function(){var e=void 0===arguments[0]?{}:arguments[0];return this._wrap(this.client({method:"POST",path:"/articles",entity:e}))},writable:!0,configurable:!0},listArticles:{value:function(){var e=void 0===arguments[0]?{}:arguments[0];return this._nextPageUrl=null,this._wrap(this.client({path:"/articles",params:Object.assign(this.defaultFilters,e)})).then(function(e){return e.items})},writable:!0,configurable:!0},hasNext:{value:function(){return!!this._nextPageUrl},writable:!0,configurable:!0},listNext:{value:function(){if(!this.hasNext())return new Promise(function(e,t){t(new Error("No next articles page."))});var e=this._nextPageUrl;return this._nextPageUrl=null,this._wrap(this.client({path:e})).then(function(e){return e.items})},writable:!0,configurable:!0},getArticle:{value:function(){var e=void 0===arguments[0]?{}:arguments[0];return this._wrap(this.client({path:"/articles/"+e.id}))},writable:!0,configurable:!0},updateArticle:{value:function(){var e=void 0===arguments[0]?{}:arguments[0];return this._wrap(this.client({method:"PATCH",path:"/articles/"+e.id,entity:e}))},writable:!0,configurable:!0},deleteArticle:{value:function(){var e=void 0===arguments[0]?{}:arguments[0];return this._wrap(this.client({method:"DELETE",path:"/articles/"+e.id}))},writable:!0,configurable:!0},createBatch:{value:function(){var e=void 0===arguments[0]?{}:arguments[0];return new a(this,e)},writable:!0,configurable:!0},batch:{value:function(e){return this._wrap(this.client({method:"POST",path:"/batch",entity:e}))},writable:!0,configurable:!0}}),e}();r["default"]=E,Object.defineProperty(r,"__esModule",{value:!0})}).call(this,e("_process"))},{"./batch":5,_process:2,rest:"rest","rest/interceptor":"rest/interceptor","rest/interceptor/defaultRequest":"rest/interceptor/defaultRequest","rest/interceptor/errorCode":"rest/interceptor/errorCode","rest/interceptor/hateoas":"rest/interceptor/hateoas","rest/interceptor/mime":"rest/interceptor/mime","rest/interceptor/pathPrefix":"rest/interceptor/pathPrefix"}],5:[function(e,t){"use strict";var r=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},n=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(t){var r=void 0===arguments[1]?{}:arguments[1];if(i(this,e),"object"!=typeof t)throw new Error("Invalid API instance.");this.api=t,this.defaults=Object.assign({},r),this.requests=[]}return n(e,null,{createArticle:{value:function(){for(var e,t=arguments.length,n=Array(t),i=0;t>i;i++)n[i]=arguments[i];return this.requests=(e=this.requests).concat.apply(e,r(n.map(function(e){return{method:"POST",path:"/articles",body:e}}))),this},writable:!0,configurable:!0},toQuery:{value:function(){return{defaults:this.defaults,requests:this.requests}},writable:!0,configurable:!0},process:{value:function(){return this.api.batch(this.toQuery())},writable:!0,configurable:!0}}),e}();t.exports=s},{}],6:[function(e,t){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},n=r(e("react/addons"));t.exports=n.createClass({displayName:"Alert",render:function(){return n.createElement("div",{className:"alert alert-warning"},n.createElement("p",null,n.createElement("strong",null,this.props.title)),n.createElement("div",null,this.props.children))}})},{"react/addons":"react/addons"}],7:[function(e,t){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(e("react/addons")),s=r(e("docbrown")),a=e("../flux"),o=a.ArticleActions,l=a.stores,c=r(e("./Alert")),u=r(e("./ArticleForm")),d=r(e("./ArticleList")),h=r(e("./Auth")),p=r(e("./Viewer"));t.exports=i.createClass({displayName:"App",mixins:[s.storeMixin(l.getter("articleStore"))],componentDidMount:function(){o.list()},renderError:function(){return this.state.error?i.createElement(c,null,this.state.error.message):void 0},render:function(){return i.createElement("div",{className:"container-fluid"},i.createElement("h1",null,i.createElement("a",{href:"./"},"Readinglist")),this.renderError(),i.createElement("div",{className:"row"},i.createElement("div",{className:"col-sm-4"},i.createElement(h,null),i.createElement(d,{articles:this.state.articles,filters:this.state.filters,selectedId:this.state.current&&this.state.current.id,hasNext:this.state.hasNext,totalRecords:this.state.totalRecords})),i.createElement("div",{className:"col-sm-8"},i.createElement(u,{show:this.state.edit,current:this.state.current}),this.state.current?i.createElement(p,n({contents:this.state.currentContents},this.state.current)):null)))}})},{"../flux":17,"./Alert":6,"./ArticleForm":9,"./ArticleList":10,"./Auth":11,"./Viewer":15,docbrown:"docbrown","react/addons":"react/addons"}],8:[function(e,t){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},n=e("react/addons"),i=r(n),s=e("../flux").ArticleActions,a=n.addons,o=r(e("./Button")),l=i.createClass({displayName:"EditButton",render:function(){return i.createElement(o,{className:"btn-edit",kind:"default",size:"xs",title:"Edit",onClick:this.props.onClick,icon:"pencil"})}}),c=i.createClass({displayName:"DeleteButton",render:function(){return i.createElement(o,{className:"btn-delete",kind:"danger",size:"xs",icon:"trash",title:"Delete",onClick:this.props.onClick,disabled:this.props.checked})}}),u=i.createClass({displayName:"MarkAsReadButton",onClick:function(){s[this.props.unread?"markAsRead":"markAsUnread"]({id:this.props.id})},render:function(){return i.createElement(o,{className:"btn-mark-as-read",kind:"default",size:"xs",title:"Mark as "+(this.props.unread?"read":"unread"),icon:this.props.unread?"eye-close":"eye-open",onClick:this.onClick})}}),d=i.createClass({displayName:"ArchiveButton",render:function(){return i.createElement(o,{className:"btn-archive",kind:"default",title:"Archive",size:"xs",icon:"save-file",onClick:this.props.onClick})}});t.exports=i.createClass({displayName:"ArticleEntry",mixins:[a.PureRenderMixin],callAction:function(e){var t=this,r=void 0===arguments[1]?{}:arguments[1];return function(n){n.preventDefault(),(!r.confirm||confirm("Are you sure?"))&&s[e](t.props)}},_formattedAddedOn:function(){return new Date(this.props.added_on).toLocaleString()},render:function(){return i.createElement("div",{className:"ArticleEntry row"},i.createElement("h4",{className:"ArticleEntry__h4 col-md-12"},i.createElement("a",{href:this.props.url,onClick:this.callAction("open")},this.props.title),i.createElement("sup",null,this.props.unread?"unread":"")),i.createElement("p",{className:"ArticleEntry__info col-md-8"},"Added by "+this.props.added_by+" on "+this._formattedAddedOn()),i.createElement("div",{className:"ArticleEntry__actions col-md-4 text-right",role:"group","aria-label":"Actions"},i.createElement("div",{className:"btn-group"},i.createElement(d,{onClick:this.callAction("archive")}),i.createElement(u,{id:this.props.id,unread:this.props.unread}),i.createElement(l,{onClick:this.callAction("edit")}),i.createElement(c,{onClick:this.callAction("delete",{confirm:!0})}))))}})},{"../flux":17,"./Button":12,"react/addons":"react/addons"}],9:[function(e,t){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},n=r(e("react/addons")),i=e("../flux").ArticleActions,s=r(e("./Button")),a=r(e("./Panel")),o=n.createClass({displayName:"CloseButton",handleClick:function(){i.cancelEdit()},render:function(){return n.createElement(s,{kind:"default",size:"xs",icon:"remove",title:"Close this form",onClick:this.handleClick})}});t.exports=n.createClass({displayName:"ArticleForm",mixins:[n.addons.LinkedStateMixin],getInitialState:function(){return{title:"",url:""}},componentWillReceiveProps:function(e){var t=e.current||this.getInitialState();this.setState({title:t.title,url:t.url})},handleSubmit:function(e){e.preventDefault();var t=Object.assign({id:this.props.current&&this.props.current.id},{title:this.state.title,url:this.state.url,added_by:"niko"});this.props.current?i.update(t):i.create(t),this.setState(this.getInitialState())},_getVerb:function(){return this.props.current?"Update":"Add"},render:function(){return this.props.show?n.createElement(a,{title:""+this._getVerb()+" an article",actionButtons:[n.createElement(o,null)]},n.createElement("form",{method:"post",onSubmit:this.handleSubmit},n.createElement("div",{className:"form-group"},n.createElement("input",{className:"form-control",type:"text",placeholder:"Title",valueLink:this.linkState("title")})),n.createElement("div",{className:"form-group"},n.createElement("input",{className:"form-control",type:"url",placeholder:"http://",valueLink:this.linkState("url"),disabled:!!this.props.current})),n.createElement(s,{kind:"default",label:this._getVerb()}))):null}})},{"../flux":17,"./Button":12,"./Panel":14,"react/addons":"react/addons"}],10:[function(e,t){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},n=function(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0})},i=e("react/addons"),s=r(i),a=i.addons,o=e("../flux").ArticleActions,l=e("../api").ArticleConstants,c=r(e("./ArticleEntry")),u=r(e("./Button")),d=r(e("./Panel")),h=s.createClass({displayName:"AddButton",handleAddClick:function(){o.add()},render:function(){return s.createElement(u,{className:"btn-add",kind:"default",title:"Add an article",size:"xs",icon:"plus",onClick:this.handleAddClick})}}),p=s.createClass({displayName:"ImportButton",handleImportSampleClick:function(){o["import"]()},render:function(){return s.createElement(u,{className:"btn-import",kind:"info",title:"Import sample articles",size:"xs",icon:"download-alt",onClick:this.handleImportSampleClick})}}),f=s.createClass({displayName:"NextPageButton",handleNextClick:function(){o.listNext()},render:function(){return s.createElement(u,{kind:"info",size:"sm",icon:"chevron-right",onClick:this.handleNextClick,label:"Next"})}}),m=s.createClass({displayName:"PanelTitle",render:function(){return s.createElement("span",null,"Articles",this.props.totalRecords?s.createElement("span",{className:"badge"},this.props.totalRecords):null)}}),g=s.createClass({displayName:"FilterToggler",render:function(){var e=this;return s.createElement("div",{className:"btn-group list-filter-toggler",role:"group"},this.props.choices.map(function(t,r){return s.createElement(u,{key:r,label:t.label,size:"xs",kind:e.props.valueCheck===t.value?"info":"default",icon:t.icon||"",onClick:e.props.changeHandler(t.value)})}))}}),b=s.createClass({displayName:"Filters",statics:{unreadChoices:[{label:"Read",value:!1},{label:"Unread",value:!0}],archivedChoices:[{label:"Default",value:!1},{label:"Archived",value:!0}],sortChoices:[{label:"Last modified",value:l.sort.LAST_MODIFIED_DESC,icon:"sort-by-order-alt"},{label:"Date added",value:l.sort.ADDED_ON_DESC,icon:"sort-by-order-alt"},{label:"Title",value:l.sort.TITLE_ASC,icon:"sort-by-alphabet"}]},filterClickHandler:function(e){return function(t){return function(){return o.list(n({},e,t))}}},sortClickHandler:function(e){return function(){return o.list({_sort:e})}},render:function(){return s.createElement("div",{className:"list-filters text-center"},s.createElement(g,{choices:b.unreadChoices,valueCheck:this.props.filters.unread,changeHandler:this.filterClickHandler("unread")}),s.createElement(g,{choices:b.archivedChoices,valueCheck:this.props.filters.archived,changeHandler:this.filterClickHandler("archived")}),s.createElement(g,{choices:b.sortChoices,valueCheck:this.props.filters._sort,changeHandler:this.sortClickHandler}))}});t.exports=s.createClass({displayName:"ArticleList",mixins:[a.PureRenderMixin],getDefaultProps:function(){return{filters:{}}},render:function(){var e=this,t=[s.createElement(h,null)];return this.props.articles.length||t.push(s.createElement(p,null)),s.createElement(d,{title:s.createElement(m,{totalRecords:this.props.totalRecords}),bodyWrap:!1,actionButtons:t},s.createElement(b,{filters:this.props.filters}),s.createElement("ul",{className:"list-group"},this.props.articles.map(function(t){var r=a.classSet({"list-group-item":!0,active:t.id===e.props.selectedId});return s.createElement("li",{key:t.id,className:r},s.createElement(c,t))})),this.props.hasNext?s.createElement("p",{className:"list-pages text-right"},s.createElement(f,null)):null,this.props.articles.length?null:s.createElement("p",{className:"list-empty text-center"},"The list is empty."))}})},{"../api":4,"../flux":17,"./ArticleEntry":8,"./Button":12,"./Panel":14,"react/addons":"react/addons"}],11:[function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e["default"]:e},i=n(e("react/addons")),s=n(e("docbrown")),a=e("../flux"),o=a.AuthActions,l=a.stores,c=n(e("./Panel")),u=n(e("./Button")),d=r.SignIn=i.createClass({displayName:"SignIn",handleSubmit:function(e){e.preventDefault(),o.signin({persistent:this.refs.remember.getDOMNode().checked})},render:function(){return i.createElement("form",{className:"form-inline",onSubmit:this.handleSubmit},i.createElement("p",null,i.createElement(u,{kind:"info",type:"submit",label:"Sign in your Firefox Account"})," or ",i.createElement("a",{href:"https://accounts.firefox.com/signup",target:"_blank"},"Sign up for one"),"."),i.createElement("div",{className:"checkbox"},i.createElement("label",null,i.createElement("input",{ref:"remember",type:"checkbox"})," Remember me")))}}),h=r.UserInfo=i.createClass({displayName:"UserInfo",handleSignoutClick:function(){o.signout()},render:function(){return i.createElement("div",null,i.createElement("p",null,"You're signed in."),i.createElement(u,{kind:"danger",label:"Sign out",onClick:this.handleSignoutClick}))}});r["default"]=i.createClass({displayName:"Auth",mixins:[s.storeMixin(l.getter("authStore"))],componentDidMount:function(){o.checkAuth()},render:function(){return i.createElement(c,{title:"Authentication"},this.state.authToken?i.createElement(h,this.state):i.createElement(d,null))}}),Object.defineProperty(r,"__esModule",{value:!0})},{"../flux":17,"./Button":12,"./Panel":14,docbrown:"docbrown","react/addons":"react/addons"}],12:[function(e,t){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},n=e("react/addons"),i=r(n),s=n.addons,a=r(e("./Icon"));t.exports=i.createClass({displayName:"Button",mixins:[s.PureRenderMixin],getDefaultProps:function(){return{className:"btn",kind:"default",type:"button",size:"md",primary:!1,submit:!1}},render:function(){var e=this.props.className.split(" ").reduce(function(e,t){return e[t]=!0,e},{btn:!0});this.props.kind&&(e["btn-"+this.props.kind]=!0),this.props.size&&(e["btn-"+this.props.size]=!0);var t=Object.assign({},this.props,{className:i.addons.classSet(e)});return i.createElement("button",t,this.props.icon?i.createElement(a,{type:this.props.icon}):null,this.props.label?i.createElement("span",null,this.props.label):null)}})},{"./Icon":13,"react/addons":"react/addons"}],13:[function(e,t){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},n=r(e("react/addons"));t.exports=n.createClass({displayName:"Icon",render:function(){return n.createElement("span",{className:"glyphicon glyphicon-"+this.props.type,"aria-hidden":"true"})}})},{"react/addons":"react/addons"}],14:[function(e,t){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},n=r(e("react/addons"));t.exports=n.createClass({displayName:"Panel",getDefaultProps:function(){return{bodyWrap:!0,actionButtons:[]}},renderPanelBody:function(){return this.props.bodyWrap?n.createElement("div",{className:"panel-body"},this.props.children):this.props.children},renderActionButtons:function(){return n.createElement("div",{className:"panel-actions col-md-3 text-right"},this.props.actionButtons.reduce(function(e,t,r){return e["b"+r]=t,e},{}))},render:function(){return n.createElement("div",{className:"panel panel-default"},n.createElement("div",{className:"panel-heading"},n.createElement("div",{className:"row"},n.createElement("h3",{className:"panel-title col-md-9"},this.props.title),this.renderActionButtons())),this.renderPanelBody())}})},{"react/addons":"react/addons"}],15:[function(e,t){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},n=e("react/addons"),i=r(n),s=n.addons,a=e("../flux").ArticleActions,o=r(e("./Button")),l=r(e("./Panel")),c=i.createClass({displayName:"CloseButton",render:function(){return i.createElement(o,{kind:"default",size:"xs",icon:"remove",title:"Close",className:"btn-close",onClick:this.props.onClick})}}),u=i.createClass({displayName:"MarkAsReadButton",render:function(){return i.createElement(o,{className:"btn-mark-as-read",kind:"default",title:"Mark as read",size:"xs",icon:"ok",onClick:this.props.onClick})}});t.exports=i.createClass({displayName:"Viewer",mixins:[s.PureRenderMixin],getInitialState:function(){return{title:null,url:null,contents:null}},getDefaultProps:function(){return{contents:"Loading…"}},handleCloseClick:function(){a.close()},handleMarkAsReadClick:function(){a.markAsRead({id:this.props.id})},_loadFromProps:function(e){this.setState({title:e.title,url:e.url,contents:e.contents})},componentDidMount:function(){this._loadFromProps(this.props)},componentWillReceiveProps:function(e){this._loadFromProps(e)},render:function(){return i.createElement(l,{title:this.props.title,actionButtons:[i.createElement(u,{onClick:this.handleMarkAsReadClick}),i.createElement(c,{onClick:this.handleCloseClick})]},this.state.contents?i.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.contents}}):null)}})},{"../flux":17,"./Button":12,"./Panel":14,"react/addons":"react/addons"}],16:[function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e["default"]:e},i=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=n(e("rest")),o=n(e("rest/interceptor/mime")),l=n(e("rest/interceptor/errorCode")),c=r.DEFAULT_STORAGE_KEY_PREFIX="readinglist:article:",u=function(){function e(t){var r=void 0===arguments[1]?{debug:!1}:arguments[1];s(this,e),this.proxyServerUrl=t,this.client=r.client||this.createClient(),this.storage=r.storage||localStorage,this.keyPrefix=r.keyPrefix||c,this.debug=!!r.debug}return i(e,null,{createClient:{value:function(){return a.wrap(o,{mime:"application/json;encoding=UTF-8"}).wrap(l,{code:400})},writable:!0,configurable:!0},fetch:{value:function(e){var t=this;return this.client({path:this.proxyServerUrl,params:{url:e.url,sanitize:"yes"}}).then(function(r){var n=r&&r.entity&&r.entity.content;return t.save(e,n),n})["catch"](function(r){throw t.debug&&console.error("fetch() request error: ",r),new Error("Unable to fetch contents for "+e.title)})},writable:!0,configurable:!0},load:{value:function(e){return this.has(e)?Promise.resolve(this.storage.getItem(this.keyPrefix+e.id)):this.fetch(e)},writable:!0,configurable:!0},has:{value:function(e){return this.storage.hasOwnProperty(this.keyPrefix+e.id)},writable:!0,configurable:!0},drop:{value:function(e){this.storage.removeItem(this.keyPrefix+e.id)},writable:!0,configurable:!0},save:{value:function(e,t){"string"==typeof t&&t.length&&this.storage.setItem(this.keyPrefix+e.id,t)},writable:!0,configurable:!0}}),e}();r["default"]=u,Object.defineProperty(r,"__esModule",{value:!0})},{rest:"rest","rest/interceptor/errorCode":"rest/interceptor/errorCode","rest/interceptor/mime":"rest/interceptor/mime"}],17:[function(e,t,r){"use strict";function n(){var e={};return{clear:function(){e={}},register:function(t){for(var r in t){if(this.has(r))throw new Error("Store "+r+" is already registered.");e[r]=t[r]}},has:function(t){return e.hasOwnProperty(t)},get:function(t){if(this.has(t))return e[t];throw new Error("No '"+t+"' store registered.")},getter:function(e){var t=this;return function(){return t.get(e)}}}}{var i=function(e){return e&&e.__esModule?e["default"]:e},s=i(e("docbrown")),a=i(e("../data/samples.json")),o=(e("./api").ArticleConstants,r.Dispatcher=s.createDispatcher()),l=r.AuthActions=s.createActions(o,["signin","signout","checkAuth"]),c=(r.AuthStore=s.createStore({actions:[l],initialize:function(e){var t=void 0===arguments[1]?{debug:!1}:arguments[1];this.api=e,this.debug=!!t.debug,this.debug&&this.subscribe(function(e){console.info("AuthStore state changed",e)})},getInitialState:function(){return{authToken:null}},signin:function(e){this.api.signinToFxA(e)},checkAuth:function(){this.setState({authToken:this.api.checkAuth()})},signout:function(){this.api.signout(),this.setState(this.getInitialState())}}),r.ArticleActions=s.createActions(o,["add","create","edit","cancelEdit","get","update","delete","list","listNext","import","open","close","markAsRead","archive"]));r.ArticleStore=s.createStore({actions:[c],initialize:function(e,t){var r=void 0===arguments[2]?{debug:!1}:arguments[2];this.api=e,this.contentManager=t,this.debug=!!r.debug,this.debug&&this.subscribe(function(e){console.info("ArticleStore state changed",e)}),this.clientIdentifier=r.clientIdentifier||"readinglist-client"},getInitialState:function(){return{articles:[],current:null,currentContents:null,edit:!1,error:null,errorType:null,filters:this.api.defaultFilters,hasNext:!1,totalRecords:0}},updateArticleList:function(e){var t=e.filter(function(e){return!e.deleted});this.setState({articles:t,hasNext:this.api.hasNext(),totalRecords:this.api.totalRecords})},resetError:function(){this.setState({error:null,errType:null})},setError:function(e){var t=void 0===arguments[1]?null:arguments[1];this.setState({error:e,errType:t})},add:function(){this.setState({edit:!0,current:null})},create:function(e){return this.resetError(),this.api.createArticle(e)},createSuccess:function(){c.list()},createError:function(e){this.setError(e,"create")},edit:function(e){this.setState({edit:!0,current:e})},cancelEdit:function(){this.setState({edit:!1})},get:function(e){return this.resetError(),this.api.getArticle(e)},getSuccess:function(e){this.setState({current:e})},getError:function(e){this.setError(e,"get")},update:function(e){return this.setState({edit:!1}),this.resetError(),this.api.updateArticle(e)},updateError:function(e){this.setError(e,"update")},updateSuccess:function(e){this.setState({edit:!1,current:e}),c.list()},"delete":function(e){return this.resetError(),this.api.deleteArticle(e)},deleteSuccess:function(e){var t=this.state.current||{};t.id===e.id&&this.setState({current:null,edit:!1}),this.contentManager.drop(e),c.list()},deleteError:function(e){this.setError(e,"delete")},list:function(){var e=void 0===arguments[0]?{}:arguments[0];return this.resetError(),this.setState({filters:Object.assign({},this.state.filters,e)}),this.api.listArticles(this.state.filters)},listSuccess:function(e){this.updateArticleList(e)},listError:function(e){this.setError(e,"list")},listNext:function(){return this.resetError(),this.api.listNext()},listNextSuccess:function(e){this.updateArticleList(e)},listNextError:function(e){this.setError(e,"listNext")},"import":function(){this.resetError();var e=this.api.createBatch();return e.createArticle.apply(e,a).process()},importSuccess:function(e){var t=this;e.responses.forEach(function(e){t.debug&&console.log("imported",e.body.title,"HTTP",e.status)}),c.list()},importError:function(e){this.setError(e,"import")},open:function(e){return this.resetError(),this.setState({edit:!1,current:e,currentContents:null}),this.contentManager.load(e)},openSuccess:function(e){this.setState({currentContents:e})},openError:function(e){this.setError(e,"open")},close:function(){this.setState({current:null,currentContents:null})},markAsRead:function(e){return this.api.updateArticle({id:e.id,unread:!1,marked_read_by:this.clientIdentifier,marked_read_on:(new Date).getTime()})},markAsReadSuccess:function(){c.list()},markAsReadError:function(e){this.setError(e,"markAsRead")},archive:function(e){return this.api.updateArticle({id:e.id,archived:!0})},archiveSuccess:function(){c.list()},archiveError:function(e){this.setError(e,"archive")}}),r.stores=new n}Object.defineProperty(r,"__esModule",{value:!0})},{"../data/samples.json":3,"./api":4,docbrown:"docbrown"}]},{},[1]);
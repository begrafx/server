!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/js/",r(r.s=341)}({156:function(e,r,n){n.p=OC.linkTo("files_sharing","js/dist/"),n.nc=btoa(OC.requestToken),window.OCP.Collaboration.registerType("file",{action:function(){return new Promise((function(e,r){OC.dialogs.filepicker(t("files_sharing","Link to a file"),(function(t){OC.Files.getClient().getFileInfo(t).then((function(t,r){e(r.id)})).fail((function(){r(new Error("Cannot get fileinfo"))}))}),!1,null,!1,OC.dialogs.FILEPICKER_TYPE_CHOOSE,"",{allowDirectoryChooser:!0})}))},typeString:t("files_sharing","Link to a file"),typeIconClass:"icon-files-dark"})},17:function(e,t,r){"use strict";var n,a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),s=[];function o(e){for(var t=-1,r=0;r<s.length;r++)if(s[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},n=[],a=0;a<e.length;a++){var i=e[a],l=t.base?i[0]+t.base:i[0],c=r[l]||0,d="".concat(l," ").concat(c);r[l]=c+1;var u=o(d),h={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(s[u].references++,s[u].updater(h)):s.push({identifier:d,updater:C(h,t),references:1}),n.push(d)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=r.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,r,n){var a=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var i=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function f(e,t,r){var n=r.css,a=r.media,i=r.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,m=0;function C(e,t){var r,n,a;if(t.singleton){var i=m++;r=p||(p=c(t)),n=h.bind(null,r,i,!1),a=h.bind(null,r,i,!0)}else r=c(t),n=f.bind(null,r,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var a=o(r[n]);s[a].references--}for(var i=l(e,t),c=0;c<r.length;c++){var d=o(r[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}r=i}}}},18:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e.exports=function(e){var t=n(e,4),r=t[1],a=t[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),o="/*# ".concat(s," */"),l=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[r].concat(l).concat([o]).join("\n")}return[r].join("\n")}},19:function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);n&&a[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},208:function(e,t,r){"use strict";var n=r(18),a=r.n(n),i=r(19),s=r.n(i)()(a.a);s.push([e.i,"div.crumb span.icon-shared,div.crumb span.icon-public{display:inline-block;cursor:pointer;opacity:0.2;margin-right:6px}div.crumb span.icon-shared.shared,div.crumb span.icon-public.shared{opacity:0.7}\n","",{"version":3,"sources":["webpack://./apps/files_sharing/src/style/sharebreadcrumb.scss"],"names":[],"mappings":"AAsBA,sDAEC,oBAAqB,CACrB,cAAe,CACf,WAAY,CACZ,gBAAiB,CACjB,oEAIA,WAAY","sourcesContent":["/**\n * @copyright 2016 Christoph Wurst <christoph@winzerhof-wurst.at>\n *\n * @author 2016 Christoph Wurst <christoph@winzerhof-wurst.at>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program.  If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\ndiv.crumb span.icon-shared,\ndiv.crumb span.icon-public {\n\tdisplay: inline-block;\n\tcursor: pointer;\n\topacity: 0.2;\n\tmargin-right: 6px;\n}\n\ndiv.crumb span.icon-shared.shared,\ndiv.crumb span.icon-public.shared {\n\topacity: 0.7;\n}\n"],"sourceRoot":""}]),t.a=s},272:function(e,t){!function(){"use strict";var e=OC.Backbone.View.extend({tagName:"span",events:{click:"_onClick"},_dirInfo:void 0,render:function(e){if(this._dirInfo=e.dirInfo||null,null===this._dirInfo||"/"===this._dirInfo.path&&""===this._dirInfo.name)this.$el.removeClass("shared icon-public icon-shared"),this.$el.hide();else{var t=e.dirInfo&&e.dirInfo.shareTypes&&e.dirInfo.shareTypes.length>0;this.$el.removeClass("shared icon-public icon-shared"),t?(this.$el.addClass("shared"),-1!==e.dirInfo.shareTypes.indexOf(OC.Share.SHARE_TYPE_LINK)?this.$el.addClass("icon-public"):this.$el.addClass("icon-shared")):this.$el.addClass("icon-shared"),this.$el.show(),this.delegateEvents()}return this},_onClick:function(e){e.preventDefault();var t=new OCA.Files.FileInfoModel(this._dirInfo),r=this;t.on("change",(function(){r.render({dirInfo:r._dirInfo})}));var n=t.attributes.path+"/"+t.attributes.name;OCA.Files.Sidebar.open(n),OCA.Files.Sidebar.setActiveTab("sharing")}});OCA.Sharing.ShareBreadCrumbView=e}()},341:function(e,r,n){"use strict";n.r(r);var a=n(48),i=n.n(a);_.extend(OC.Files.Client,{PROPERTY_SHARE_TYPES:"{"+OC.Files.Client.NS_OWNCLOUD+"}share-types",PROPERTY_OWNER_ID:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-id",PROPERTY_OWNER_DISPLAY_NAME:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-display-name"}),OCA.Sharing||(OCA.Sharing={}),OCA.Sharing.Util={_REMOTE_OWNER_REGEXP:new RegExp("^(([^@]*)@(([^@^/\\s]*)@)?)((https://)?[^[\\s/]*)([/](.*))?$"),attach:function(e){if(OC.Share&&"trashbin"!==e.id&&"files.public"!==e.id){var r=e.fileActions,n=e._createRow;e._createRow=function(e){var t=n.apply(this,arguments),a=OCA.Sharing.Util.getSharePermissions(e);return 0===e.permissions&&(delete r.actions.all.Comment,delete r.actions.all.Details,delete r.actions.all.Goto),t.attr("data-share-permissions",a),e.shareOwner&&(t.attr("data-share-owner",e.shareOwner),t.attr("data-share-owner-id",e.shareOwnerId),"shared-root"===e.mountType&&t.attr("data-permissions",e.permissions|OC.PERMISSION_UPDATE)),e.recipientData&&!_.isEmpty(e.recipientData)&&t.attr("data-share-recipient-data",JSON.stringify(e.recipientData)),e.shareTypes&&t.attr("data-share-types",e.shareTypes.join(",")),t};var a=e.elementToFile;e.elementToFile=function(e){var t=a.apply(this,arguments);if(t.sharePermissions=e.attr("data-share-permissions")||void 0,t.shareOwner=e.attr("data-share-owner")||void 0,t.shareOwnerId=e.attr("data-share-owner-id")||void 0,e.attr("data-share-types")&&(t.shareTypes=e.attr("data-share-types").split(",")),e.attr("data-expiration")){var r=parseInt(e.attr("data-expiration"));t.shares=[],t.shares.push({expiration:r})}return t};var i=e._getWebdavProperties;e._getWebdavProperties=function(){var e=i.apply(this,arguments);return e.push(OC.Files.Client.PROPERTY_OWNER_ID),e.push(OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME),e.push(OC.Files.Client.PROPERTY_SHARE_TYPES),e},e.filesClient.addFileInfoParser((function(e){var t={},r=e.propStat[0].properties,n=r[OC.Files.Client.PROPERTY_PERMISSIONS];n&&n.indexOf("S")>=0&&(t.shareOwner=r[OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME],t.shareOwnerId=r[OC.Files.Client.PROPERTY_OWNER_ID]);var a=r[OC.Files.Client.PROPERTY_SHARE_TYPES];return a&&(t.shareTypes=_.chain(a).filter((function(e){return e.namespaceURI===OC.Files.Client.NS_OWNCLOUD&&"share-type"===e.nodeName.split(":")[1]})).map((function(e){return parseInt(e.textContent||e.text,10)})).value()),t})),e.$el.on("fileActionsReady",(function(e){var t=e.$files;_.each(t,(function(e){var t=$(e),r=t.attr("data-share-types")||"",n=t.attr("data-share-owner");if(r||n){var a=!1,i=!1;_.each(r.split(",")||[],(function(e){(e=parseInt(e,10))===OC.Share.SHARE_TYPE_LINK||e===OC.Share.SHARE_TYPE_EMAIL?a=!0:(e===OC.Share.SHARE_TYPE_USER||e===OC.Share.SHARE_TYPE_GROUP||e===OC.Share.SHARE_TYPE_REMOTE||e===OC.Share.SHARE_TYPE_CIRCLE||e===OC.Share.SHARE_TYPE_ROOM||e===OC.Share.SHARE_TYPE_DECK)&&(i=!0)})),OCA.Sharing.Util._updateFileActionIcon(t,i,a)}}))})),e.$el.on("changeDirectory",(function(){OCA.Sharing.sharesLoaded=!1})),r.registerAction({name:"Share",displayName:function(e){if(e&&e.$file){var r=parseInt(e.$file.data("share-types"),10),n=e.$file.data("share-owner-id");if(r>=0||n)return t("files_sharing","Shared")}return t("files_sharing","Share")},altText:t("files_sharing","Share"),mime:"all",order:-150,permissions:OC.PERMISSION_ALL,iconClass:function(e,t){var r=parseInt(t.$file.data("share-types"),10);return r===OC.Share.SHARE_TYPE_EMAIL||r===OC.Share.SHARE_TYPE_LINK?"icon-public":"icon-shared"},icon:function(e,t){var r=t.$file.data("share-owner-id");if(r)return OC.generateUrl("/avatar/".concat(r,"/32"))},type:OCA.Files.FileActions.TYPE_INLINE,actionHandler:function(t,r){var n=parseInt(r.$file.data("share-permissions"),10);(isNaN(n)||n>0)&&e.showDetailsView(t,"sharing")},render:function(e,t,n){return 0!=(parseInt(n.$file.data("permissions"),10)&OC.PERMISSION_SHARE)||n.$file.attr("data-share-owner")?r._defaultRenderAction.call(r,e,t,n):null}});var s=new OCA.Sharing.ShareBreadCrumbView;e.registerBreadCrumbDetailView(s)}},_updateFileListDataAttributes:function(e,t,r){if("files"!==e.id)if(_.pluck(r.get("shares"),"share_with_displayname").length){var n=_.mapObject(r.get("shares"),(function(e){return{shareWith:e.share_with,shareWithDisplayName:e.share_with_displayname}}));t.attr("data-share-recipient-data",JSON.stringify(n))}else t.removeAttr("data-share-recipient-data")},_updateFileActionIcon:function(e,t,r){return!!(t||r||e.attr("data-share-recipient-data")||e.attr("data-share-owner"))&&(OCA.Sharing.Util._markFileAsShared(e,!0,r),!0)},_markFileAsShared:function(e,r,n){var a,i,s,o,l=e.find('.fileactions .action[data-action="Share"]'),c=e.data("type"),d=l.find(".icon"),u=e.attr("data-share-owner-id"),h=e.attr("data-share-owner"),f=e.attr("data-mounttype"),p="icon-shared";l.removeClass("shared-style"),"dir"===c&&(r||n||u)?(o=void 0!==f&&"shared-root"!==f&&"shared"!==f?OC.MimeType.getIconUrl("dir-"+f):n?OC.MimeType.getIconUrl("dir-public"):OC.MimeType.getIconUrl("dir-shared"),e.find(".filename .thumbnail").css("background-image","url("+o+")"),e.attr("data-icon",o)):"dir"===c&&("true"===e.attr("data-e2eencrypted")?(o=OC.MimeType.getIconUrl("dir-encrypted"),e.attr("data-icon",o)):f&&0===f.indexOf("external")?(o=OC.MimeType.getIconUrl("dir-external"),e.attr("data-icon",o)):(o=OC.MimeType.getIconUrl("dir"),e.removeAttr("data-icon")),e.find(".filename .thumbnail").css("background-image","url("+o+")")),r||u?(i=e.data("share-recipient-data"),l.addClass("shared-style"),s="<span>"+t("files_sharing","Shared")+"</span>",u?(a=t("files_sharing","Shared by"),s=OCA.Sharing.Util._formatRemoteShare(u,h,a)):i&&(s=OCA.Sharing.Util._formatShareList(i)),l.html(s).prepend(d),(u||i)&&(l.find(".avatar").each((function(){$(this).avatar($(this).data("username"),32)})),l.find("span[title]").tooltip({placement:"top"}))):l.html('<span class="hidden-visually">'+t("files_sharing","Shared")+"</span>").prepend(d),n&&(p="icon-public"),d.removeClass("icon-shared icon-public").addClass(p)},_formatRemoteShare:function(e,t,r){var n=OCA.Sharing.Util._REMOTE_OWNER_REGEXP.exec(e);if(console.error(n),!n||!n[7])return'<span class="avatar" data-username="'+i()(e)+'" title="'+r+" "+i()(t)+'"></span><span class="hidden-visually">'+r+" "+i()(t)+"</span> ";var a=n[2],s=n[4],o=n[5],l=n[6],c=n[8]?n[7]:"",d=r+" "+a;s&&(d+="@"+s),o&&(d+="@"+o.replace(l,"")+c);var u='<span class="remoteAddress" title="'+i()(d)+'">';return u+='<span class="username">'+i()(a)+"</span>",s&&(u+='<span class="userDomain">@'+i()(s)+"</span>"),u+="</span> "},_formatShareList:function(e){var r=this;return(e=_.toArray(e)).sort((function(e,t){return e.shareWithDisplayName.localeCompare(t.shareWithDisplayName)})),$.map(e,(function(e){return r._formatRemoteShare(e.shareWith,e.shareWithDisplayName,t("files_sharing","Shared with"))}))},markFileAsShared:function(e,r,n){var a,i,s,o,l=e.find('.fileactions .action[data-action="Share"]'),c=e.data("type"),d=l.find(".icon"),u=e.attr("data-share-owner-id"),h=e.attr("data-share-owner"),f=e.attr("data-mounttype"),p="icon-shared";l.removeClass("shared-style"),"dir"===c&&(r||n||u)?(o=void 0!==f&&"shared-root"!==f&&"shared"!==f?OC.MimeType.getIconUrl("dir-"+f):n?OC.MimeType.getIconUrl("dir-public"):OC.MimeType.getIconUrl("dir-shared"),e.find(".filename .thumbnail").css("background-image","url("+o+")"),e.attr("data-icon",o)):"dir"===c&&("true"===e.attr("data-e2eencrypted")?(o=OC.MimeType.getIconUrl("dir-encrypted"),e.attr("data-icon",o)):f&&0===f.indexOf("external")?(o=OC.MimeType.getIconUrl("dir-external"),e.attr("data-icon",o)):(o=OC.MimeType.getIconUrl("dir"),e.removeAttr("data-icon")),e.find(".filename .thumbnail").css("background-image","url("+o+")")),r||u?(i=e.data("share-recipient-data"),l.addClass("shared-style"),s="<span>"+t("files_sharing","Shared")+"</span>",u?(a=t("files_sharing","Shared by"),s=this._formatRemoteShare(u,h,a)):i&&(s=this._formatShareList(i)),l.html(s).prepend(d),(u||i)&&(l.find(".avatar").each((function(){$(this).avatar($(this).data("username"),32)})),l.find("span[title]").tooltip({placement:"top"}))):l.html('<span class="hidden-visually">'+t("files_sharing","Shared")+"</span>").prepend(d),n&&(p="icon-public"),d.removeClass("icon-shared icon-public").addClass(p)},getSharePermissions:function(e){return e.sharePermissions}},OC.Plugins.register("OCA.Files.FileList",OCA.Sharing.Util);n(272);var s=n(17),o=n.n(s),l=n(208),c={insert:"head",singleton:!1};o()(l.a,c),l.a.locals,n(156);n.p=OC.linkTo("files_sharing","js/dist/"),n.nc=btoa(OC.requestToken),window.OCA.Sharing=OCA.Sharing},48:function(e,t,r){"use strict";var n=/["'&<>]/;e.exports=function(e){var t,r=""+e,a=n.exec(r);if(!a)return r;var i="",s=0,o=0;for(s=a.index;s<r.length;s++){switch(r.charCodeAt(s)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==s&&(i+=r.substring(o,s)),o=s+1,i+=t}return o!==s?i+r.substring(o,s):i}}});
//# sourceMappingURL=additionalScripts.js.map
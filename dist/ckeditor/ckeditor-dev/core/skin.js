﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function h(){return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1]||"skins/"+CKEDITOR.skinName.split(",")[0]+"/")}function l(a){var b=CKEDITOR.skin["ua_"+a],f=CKEDITOR.env;if(b)for(var b=b.split(",").sort(function(a,b){return a>b?-1:1}),c=0,d;c<b.length;c++)if(d=b[c],f.ie&&(d.replace(/^ie/,"")==f.version||f.quirks&&"iequirks"==d)&&(d="ie"),f[d]){a+="_"+b[c];break}return CKEDITOR.getUrl(h()+a+".css")}function m(a,b){n[a]||(CKEDITOR.document.appendStyleSheet(l(a)),n[a]=1);b&&b()}function p(a){var b=
a.getById(q);b||(b=a.getHead().append("style"),b.setAttribute("id",q),b.setAttribute("type","text/css"));return b}function k(a,b,f){var c,d,e;if(CKEDITOR.env.webkit)for(b=b.split("}").slice(0,-1),d=0;d<b.length;d++)b[d]=b[d].split("{");for(var g=0;g<a.length;g++)if(CKEDITOR.env.webkit)for(d=0;d<b.length;d++){e=b[d][1];for(c=0;c<f.length;c++)e=e.replace(f[c][0],f[c][1]);a[g].$.sheet.addRule(b[d][0],e)}else{e=b;for(c=0;c<f.length;c++)e=e.replace(f[c][0],f[c][1]);CKEDITOR.env.ie&&11>CKEDITOR.env.version?
a[g].$.styleSheet.cssText+=e:a[g].$.innerHTML+=e}}var n={};CKEDITOR.skin={path:h,loadPart:function(a,b){CKEDITOR.skin.name!=CKEDITOR.skinName.split(",")[0]?CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(h()+"skin.js"),function(){m(a,b)}):m(a,b)},getPath:function(a){return CKEDITOR.getUrl(l(a))},icons:{},addIcon:function(a,b,f,c){a=a.toLowerCase();this.icons[a]||(this.icons[a]={path:b,offset:f||0,bgsize:c||"16px"})},getIconStyle:function(a,b,f,c,d){var e;a&&(a=a.toLowerCase(),b&&(e=this.icons[a+"-rtl"]),
e||(e=this.icons[a]));a=f||e&&e.path||"";c=c||e&&e.offset;d=d||e&&e.bgsize||"16px";a&&(a=a.replace(/'/g,"\\'"));return a&&"background-image:url('"+CKEDITOR.getUrl(a)+"');background-position:0 "+c+"px;background-size:"+d+";"}};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{getUiColor:function(){return this.uiColor},setUiColor:function(a){var b=p(CKEDITOR.document);return(this.setUiColor=function(a){this.uiColor=a;var c=CKEDITOR.skin.chameleon,d="",e="";"function"==typeof c&&(d=c(this,"editor"),e=
c(this,"panel"));a=[[r,a]];k([b],d,a);k(t,e,a)}).call(this,a)}});var q="cke_ui_color",t=[],r=/\$color/g;CKEDITOR.on("instanceLoaded",function(a){if(!CKEDITOR.env.ie||!CKEDITOR.env.quirks){var b=a.editor;a=function(a){a=(a.data[0]||a.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument();if(!a.getById("cke_ui_color")){a=p(a);t.push(a);var c=b.getUiColor();c&&k([a],CKEDITOR.skin.chameleon(b,"panel"),[[r,c]])}};b.on("panelShow",a);b.on("menuShow",a);b.config.uiColor&&b.setUiColor(b.config.uiColor)}})})();
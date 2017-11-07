/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.htmlParser.basicWriter=CKEDITOR.tools.createClass({$:function(){this._={output:[]}},proto:{openTag:function(a){this._.output.push("\x3c",a)},openTagClose:function(a,b){b?this._.output.push(" /\x3e"):this._.output.push("\x3e")},attribute:function(a,b){"string"==typeof b&&(b=CKEDITOR.tools.htmlEncodeAttr(b));this._.output.push(" ",a,'\x3d"',b,'"')},closeTag:function(a){this._.output.push("\x3c/",a,"\x3e")},text:function(a){this._.output.push(a)},comment:function(a){this._.output.push("\x3c!--",
a,"--\x3e")},write:function(a){this._.output.push(a)},reset:function(){this._.output=[];this._.indent=!1},getHtml:function(a){var b=this._.output.join("");a&&this.reset();return b}}});
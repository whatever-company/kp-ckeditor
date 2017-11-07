/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.keystrokeHandler=function(a){if(a.keystrokeHandler)return a.keystrokeHandler;this.keystrokes={};this.blockedKeystrokes={};this._={editor:a};return this};
(function(){var a,f=function(b){b=b.data;var c=b.getKeystroke(),d=this.keystrokes[c],e=this._.editor;a=!1===e.fire("key",{keyCode:c,domEvent:b});a||(d&&(a=!1!==e.execCommand(d,{from:"keystrokeHandler"})),a||(a=!!this.blockedKeystrokes[c]));a&&b.preventDefault(!0);return!a},g=function(b){a&&(a=!1,b.data.preventDefault(!0))};CKEDITOR.keystrokeHandler.prototype={attach:function(a){a.on("keydown",f,this);if(CKEDITOR.env.gecko&&CKEDITOR.env.mac)a.on("keypress",g,this)}}})();
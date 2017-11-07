/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.ui=function(a){if(a.ui)return a.ui;this.items={};this.instances={};this.editor=a;this._={handlers:{}};return this};
CKEDITOR.ui.prototype={add:function(a,c,b){b.name=a.toLowerCase();var d=this.items[a]={type:c,command:b.command||null,args:Array.prototype.slice.call(arguments,2)};CKEDITOR.tools.extend(d,b)},get:function(a){return this.instances[a]},create:function(a){var c=this.items[a],b=c&&this._.handlers[c.type],d=c&&c.command&&this.editor.getCommand(c.command),b=b&&b.create.apply(this,c.args);this.instances[a]=b;d&&d.uiItems.push(b);b&&!b.type&&(b.type=c.type);return b},addHandler:function(a,c){this._.handlers[a]=
c},space:function(a){return CKEDITOR.document.getById(this.spaceId(a))},spaceId:function(a){return this.editor.id+"_"+a}};CKEDITOR.event.implementOn(CKEDITOR.ui);
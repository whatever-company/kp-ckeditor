/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dom.text=function(a,b){"string"==typeof a&&(a=(b?b.$:document).createTextNode(a));this.$=a};CKEDITOR.dom.text.prototype=new CKEDITOR.dom.node;
CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype,{type:CKEDITOR.NODE_TEXT,getLength:function(){return this.$.nodeValue.length},getText:function(){return this.$.nodeValue},setText:function(a){this.$.nodeValue=a},split:function(a){var b=this.$.parentNode,e=b.childNodes.length,f=this.getLength(),d=this.getDocument(),c=new CKEDITOR.dom.text(this.$.splitText(a),d);b.childNodes.length==e&&(a>=f?(c=d.createText(""),c.insertAfter(this)):(a=d.createText(""),a.insertAfter(c),a.remove()));return c},substring:function(a,
b){return"number"!=typeof b?this.$.nodeValue.substr(a):this.$.nodeValue.substring(a,b)}});
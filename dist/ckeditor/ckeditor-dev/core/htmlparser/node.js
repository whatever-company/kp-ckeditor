﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){CKEDITOR.htmlParser.node=function(){};CKEDITOR.htmlParser.node.prototype={remove:function(){var a=this.parent.children,c=CKEDITOR.tools.indexOf(a,this),b=this.previous,d=this.next;b&&(b.next=d);d&&(d.previous=b);a.splice(c,1);this.parent=null},replaceWith:function(a){var c=this.parent.children,b=CKEDITOR.tools.indexOf(c,this),d=a.previous=this.previous,e=a.next=this.next;d&&(d.next=a);e&&(e.previous=a);c[b]=a;a.parent=this.parent;this.parent=null},insertAfter:function(a){var c=a.parent.children,
b=CKEDITOR.tools.indexOf(c,a),d=a.next;c.splice(b+1,0,this);this.next=a.next;this.previous=a;a.next=this;d&&(d.previous=this);this.parent=a.parent},insertBefore:function(a){var c=a.parent.children,b=CKEDITOR.tools.indexOf(c,a);c.splice(b,0,this);this.next=a;(this.previous=a.previous)&&(a.previous.next=this);a.previous=this;this.parent=a.parent},getAscendant:function(a){var c="function"==typeof a?a:"string"==typeof a?function(b){return b.name==a}:function(b){return b.name in a},b=this.parent;for(;b&&
b.type==CKEDITOR.NODE_ELEMENT;){if(c(b))return b;b=b.parent}return null},wrapWith:function(a){this.replaceWith(a);a.add(this);return a},getIndex:function(){return CKEDITOR.tools.indexOf(this.parent.children,this)},getFilterContext:function(a){return a||{}}}})();
﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function l(a,b,d){var f=a.serializable,c=b[d?"endContainer":"startContainer"],g=d?"endOffset":"startOffset",e=f?b.document.getById(a.startNode):a.startNode;a=f?b.document.getById(a.endNode):a.endNode;c.equals(e.getPrevious())?(b.startOffset=b.startOffset-c.getLength()-a.getPrevious().getLength(),c=a.getNext()):c.equals(a.getPrevious())&&(b.startOffset-=c.getLength(),c=a.getNext());c.equals(e.getParent())&&b[g]++;c.equals(a.getParent())&&b[g]++;b[d?"endContainer":"startContainer"]=c;return b}
CKEDITOR.dom.rangeList=function(a){if(a instanceof CKEDITOR.dom.rangeList)return a;a?a instanceof CKEDITOR.dom.range&&(a=[a]):a=[];return CKEDITOR.tools.extend(a,m)};var m={createIterator:function(){var a=this,b=CKEDITOR.dom.walker.bookmark(),d=[],f;return{getNextRange:function(c){f=void 0===f?0:f+1;var g=a[f];if(g&&1<a.length){if(!f)for(var e=a.length-1;0<=e;e--)d.unshift(a[e].createBookmark(!0));if(c)for(var h=0;a[f+h+1];){var k=g.document;c=0;e=k.getById(d[h].endNode);for(k=k.getById(d[h+1].startNode);;){e=
e.getNextSourceNode(!1);if(k.equals(e))c=1;else if(b(e)||e.type==CKEDITOR.NODE_ELEMENT&&e.isBlockBoundary())continue;break}if(!c)break;h++}for(g.moveToBookmark(d.shift());h--;)e=a[++f],e.moveToBookmark(d.shift()),g.setEnd(e.endContainer,e.endOffset)}return g}}},createBookmarks:function(a){for(var b=[],d,f=0;f<this.length;f++){b.push(d=this[f].createBookmark(a,!0));for(var c=f+1;c<this.length;c++)this[c]=l(d,this[c]),this[c]=l(d,this[c],!0)}return b},createBookmarks2:function(a){for(var b=[],d=0;d<
this.length;d++)b.push(this[d].createBookmark2(a));return b},moveToBookmarks:function(a){for(var b=0;b<this.length;b++)this[b].moveToBookmark(a[b])}}})();
﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function w(d){function f(b){for(var e=c.startContainer,a=c.endContainer;e&&!e.getParent().equals(b);)e=e.getParent();for(;a&&!a.getParent().equals(b);)a=a.getParent();if(!e||!a)return!1;for(var g=e,e=[],k=!1;!k;)g.equals(a)&&(k=!0),e.push(g),g=g.getNext();if(1>e.length)return!1;g=b.getParents(!0);for(a=0;a<g.length;a++)if(g[a].getName&&p[g[a].getName()]){b=g[a];break}for(var g=l.isIndent?1:-1,a=e[0],e=e[e.length-1],k=CKEDITOR.plugins.list.listToArray(b,q),h=k[e.getCustomData("listarray_index")].indent,
a=a.getCustomData("listarray_index");a<=e.getCustomData("listarray_index");a++)if(k[a].indent+=g,0<g){var n=k[a].parent;k[a].parent=new CKEDITOR.dom.element(n.getName(),n.getDocument())}for(a=e.getCustomData("listarray_index")+1;a<k.length&&k[a].indent>h;a++)k[a].indent+=g;e=CKEDITOR.plugins.list.arrayToList(k,q,null,d.config.enterMode,b.getDirection());if(!l.isIndent){var f;if((f=b.getParent())&&f.is("li"))for(var g=e.listNode.getChildren(),r=[],m,a=g.count()-1;0<=a;a--)(m=g.getItem(a))&&m.is&&m.is("li")&&
r.push(m)}e&&e.listNode.replace(b);if(r&&r.length)for(a=0;a<r.length;a++){for(m=b=r[a];(m=m.getNext())&&m.is&&m.getName()in p;)CKEDITOR.env.needsNbspFiller&&!b.getFirst(x)&&b.append(c.document.createText(" ")),b.append(m);b.insertAfter(f)}e&&d.fire("contentDomInvalidated");return!0}for(var l=this,q=this.database,p=this.context,c,n=d.getSelection(),n=(n&&n.getRanges()).createIterator();c=n.getNextRange();){for(var b=c.getCommonAncestor();b&&(b.type!=CKEDITOR.NODE_ELEMENT||!p[b.getName()]);){if(d.editable().equals(b)){b=
!1;break}b=b.getParent()}b||(b=c.startPath().contains(p))&&c.setEndAt(b,CKEDITOR.POSITION_BEFORE_END);if(!b){var h=c.getEnclosedNode();h&&h.type==CKEDITOR.NODE_ELEMENT&&h.getName()in p&&(c.setStartAt(h,CKEDITOR.POSITION_AFTER_START),c.setEndAt(h,CKEDITOR.POSITION_BEFORE_END),b=h)}b&&c.startContainer.type==CKEDITOR.NODE_ELEMENT&&c.startContainer.getName()in p&&(h=new CKEDITOR.dom.walker(c),h.evaluator=t,c.startContainer=h.next());b&&c.endContainer.type==CKEDITOR.NODE_ELEMENT&&c.endContainer.getName()in
p&&(h=new CKEDITOR.dom.walker(c),h.evaluator=t,c.endContainer=h.previous());if(b)return f(b)}return 0}function t(d){return d.type==CKEDITOR.NODE_ELEMENT&&d.is("li")}function x(d){return y(d)&&z(d)}var y=CKEDITOR.dom.walker.whitespaces(!0),z=CKEDITOR.dom.walker.bookmark(!1,!0),u=CKEDITOR.TRISTATE_DISABLED,v=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indentlist",{requires:"indent",init:function(d){function f(d){l.specificDefinition.apply(this,arguments);this.requiredContent=["ul","ol"];d.on("key",
function(f){var c=d.elementPath();if("wysiwyg"==d.mode&&f.data.keyCode==this.indentKey&&c){var n=this.getContext(c);!n||this.isIndent&&CKEDITOR.plugins.indentList.firstItemInPath(this.context,c,n)||(d.execCommand(this.relatedGlobal),f.cancel())}},this);this.jobs[this.isIndent?10:30]={refresh:this.isIndent?function(d,c){var f=this.getContext(c),b=CKEDITOR.plugins.indentList.firstItemInPath(this.context,c,f);return f&&this.isIndent&&!b?v:u}:function(d,c){return!this.getContext(c)||this.isIndent?u:v},
exec:CKEDITOR.tools.bind(w,this)}}var l=CKEDITOR.plugins.indent;l.registerCommands(d,{indentlist:new f(d,"indentlist",!0),outdentlist:new f(d,"outdentlist")});CKEDITOR.tools.extend(f.prototype,l.specificDefinition.prototype,{context:{ol:1,ul:1}})}});CKEDITOR.plugins.indentList={};CKEDITOR.plugins.indentList.firstItemInPath=function(d,f,l){var q=f.contains(t);l||(l=f.contains(d));return l&&q&&q.equals(l.getFirst(t))}})();
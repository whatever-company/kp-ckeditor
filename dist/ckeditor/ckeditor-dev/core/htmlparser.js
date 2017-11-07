/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.htmlParser=function(){this._={htmlPartsRegex:/<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\x3e)|(?:([^\/\s>]+)((?:\s+[\w\-:.]+(?:\s*=\s*?(?:(?:"[^"]*")|(?:'[^']*')|[^\s"'\/>]+))?)*)[\S\s]*?(\/?)>))/g}};
(function(){var l=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,m={checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1};CKEDITOR.htmlParser.prototype={onTagOpen:function(){},onTagClose:function(){},onText:function(){},onCDATA:function(){},onComment:function(){},parse:function(f){for(var b,a,d=0,c;b=this._.htmlPartsRegex.exec(f);){a=b.index;if(a>d)if(d=f.substring(d,a),c)c.push(d);else this.onText(d);
d=this._.htmlPartsRegex.lastIndex;if(a=b[1])if(a=a.toLowerCase(),c&&CKEDITOR.dtd.$cdata[a]&&(this.onCDATA(c.join("")),c=null),!c){this.onTagClose(a);continue}if(c)c.push(b[0]);else if(a=b[3]){if(a=a.toLowerCase(),!/="/.test(a)){var h={},e,k=b[4];b=!!b[5];if(k)for(;e=l.exec(k);){var g=e[1].toLowerCase();e=e[2]||e[3]||e[4]||"";h[g]=!e&&m[g]?g:CKEDITOR.tools.htmlDecodeAttr(e)}this.onTagOpen(a,h,b);!c&&CKEDITOR.dtd.$cdata[a]&&(c=[])}}else if(a=b[2])this.onComment(a)}if(f.length>d)this.onText(f.substring(d,
f.length))}}})();
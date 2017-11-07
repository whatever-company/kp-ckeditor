/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins=new CKEDITOR.resourceManager("plugins/","plugin");
CKEDITOR.plugins.load=CKEDITOR.tools.override(CKEDITOR.plugins.load,function(c){var g={};return function(d,b,n){var h={},m=function(d){c.call(this,d,function(c){CKEDITOR.tools.extend(h,c);var d=[],e;for(e in c){var a=c[e],f=a&&a.requires;if(!g[e]){if(a.icons)for(var k=a.icons.split(","),l=k.length;l--;)CKEDITOR.skin.addIcon(k[l],a.path+"icons/"+(CKEDITOR.env.hidpi&&a.hidpi?"hidpi/":"")+k[l]+".png");g[e]=1}if(f)for(f.split&&(f=f.split(",")),a=0;a<f.length;a++)h[f[a]]||d.push(f[a])}if(d.length)m.call(this,
d);else{for(e in h)a=h[e],a.onLoad&&!a.onLoad._called&&(!1===a.onLoad()&&delete h[e],a.onLoad._called=1);b&&b.call(n||window,h)}},this)};m.call(this,d)}});CKEDITOR.plugins.setLang=function(c,g,d){var b=this.get(c);c=b.langEntries||(b.langEntries={});b=b.lang||(b.lang=[]);b.split&&(b=b.split(","));-1==CKEDITOR.tools.indexOf(b,g)&&b.push(g);c[g]=d};
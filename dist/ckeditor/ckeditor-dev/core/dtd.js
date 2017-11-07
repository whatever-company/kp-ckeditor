﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dtd=function(){var d=CKEDITOR.tools.extend,e=function(a,b){for(var d=CKEDITOR.tools.clone(a),c=1;c<arguments.length;c++){b=arguments[c];for(var e in b)delete d[e]}return d},a={},b={},g={address:1,article:1,aside:1,blockquote:1,details:1,div:1,dl:1,fieldset:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,hr:1,main:1,menu:1,nav:1,ol:1,p:1,pre:1,section:1,table:1,ul:1},h={command:1,link:1,meta:1,noscript:1,script:1,style:1},c={},f={"#":1},k={center:1,dir:1,noframes:1};
d(a,{a:1,abbr:1,area:1,audio:1,b:1,bdi:1,bdo:1,br:1,button:1,canvas:1,cite:1,code:1,command:1,datalist:1,del:1,dfn:1,em:1,embed:1,i:1,iframe:1,img:1,input:1,ins:1,kbd:1,keygen:1,label:1,map:1,mark:1,meter:1,noscript:1,object:1,output:1,progress:1,q:1,ruby:1,s:1,samp:1,script:1,select:1,small:1,span:1,strong:1,sub:1,sup:1,textarea:1,time:1,u:1,"var":1,video:1,wbr:1},f,{acronym:1,applet:1,basefont:1,big:1,font:1,isindex:1,strike:1,style:1,tt:1});d(b,g,a,k);e={a:e(a,{a:1,button:1}),abbr:a,address:b,
area:c,article:b,aside:b,audio:d({source:1,track:1},b),b:a,base:c,bdi:a,bdo:a,blockquote:b,body:b,br:c,button:e(a,{a:1,button:1}),canvas:a,caption:b,cite:a,code:a,col:c,colgroup:{col:1},command:c,datalist:d({option:1},a),dd:b,del:a,details:d({summary:1},b),dfn:a,div:b,dl:{dt:1,dd:1},dt:b,em:a,embed:c,fieldset:d({legend:1},b),figcaption:b,figure:d({figcaption:1},b),footer:b,form:b,h1:a,h2:a,h3:a,h4:a,h5:a,h6:a,head:d({title:1,base:1},h),header:b,hgroup:{h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},hr:c,html:d({head:1,
body:1},b,h),i:a,iframe:f,img:c,input:c,ins:a,kbd:a,keygen:c,label:a,legend:a,li:b,link:c,main:b,map:b,mark:a,menu:d({li:1},b),meta:c,meter:e(a,{meter:1}),nav:b,noscript:d({link:1,meta:1,style:1},a),object:d({param:1},a),ol:{li:1},optgroup:{option:1},option:f,output:a,p:a,param:c,pre:a,progress:e(a,{progress:1}),q:a,rp:a,rt:a,ruby:d({rp:1,rt:1},a),s:a,samp:a,script:f,section:b,select:{optgroup:1,option:1},small:a,source:c,span:a,strong:a,style:f,sub:a,summary:d({h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},a),
sup:a,table:{caption:1,colgroup:1,thead:1,tfoot:1,tbody:1,tr:1},tbody:{tr:1},td:b,textarea:f,tfoot:{tr:1},th:b,thead:{tr:1},time:e(a,{time:1}),title:f,tr:{th:1,td:1},track:c,u:a,ul:{li:1},"var":a,video:d({source:1,track:1},b),wbr:c,acronym:a,applet:d({param:1},b),basefont:c,big:a,center:b,dialog:c,dir:{li:1},font:a,isindex:c,noframes:b,strike:a,tt:a};d(e,{$block:d({audio:1,dd:1,dt:1,figcaption:1,li:1,video:1},g,k),$blockLimit:{article:1,aside:1,audio:1,body:1,caption:1,details:1,dir:1,div:1,dl:1,
fieldset:1,figcaption:1,figure:1,footer:1,form:1,header:1,hgroup:1,main:1,menu:1,nav:1,ol:1,section:1,table:1,td:1,th:1,tr:1,ul:1,video:1},$cdata:{script:1,style:1},$editable:{address:1,article:1,aside:1,blockquote:1,body:1,details:1,div:1,fieldset:1,figcaption:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,main:1,nav:1,p:1,pre:1,section:1},$empty:{area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,
track:1,wbr:1},$inline:a,$list:{dl:1,ol:1,ul:1},$listItem:{dd:1,dt:1,li:1},$nonBodyContent:d({body:1,head:1,html:1},e.head),$nonEditable:{applet:1,audio:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,param:1,script:1,textarea:1,video:1},$object:{applet:1,audio:1,button:1,hr:1,iframe:1,img:1,input:1,object:1,select:1,table:1,textarea:1,video:1},$removeEmpty:{abbr:1,acronym:1,b:1,bdi:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,mark:1,meter:1,output:1,q:1,ruby:1,
s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,time:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},$transparent:{a:1,audio:1,canvas:1,del:1,ins:1,map:1,noscript:1,object:1,video:1},$intermediate:{caption:1,colgroup:1,dd:1,dt:1,figcaption:1,legend:1,li:1,optgroup:1,option:1,rp:1,rt:1,summary:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1}});return e}();
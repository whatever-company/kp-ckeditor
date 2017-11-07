/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){var d=/{([^}]+)}/g;CKEDITOR.template=function(b){this.source=String(b)};CKEDITOR.template.prototype.output=function(b,c){var a=this.source.replace(d,function(c,a){return void 0!==b[a]?b[a]:c});return c?c.push(a):a}})();
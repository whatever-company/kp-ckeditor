/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.VERBOSITY_WARN=1;CKEDITOR.VERBOSITY_ERROR=2;CKEDITOR.verbosity=CKEDITOR.VERBOSITY_WARN|CKEDITOR.VERBOSITY_ERROR;CKEDITOR.warn=function(a,b){CKEDITOR.verbosity&CKEDITOR.VERBOSITY_WARN&&CKEDITOR.fire("log",{type:"warn",errorCode:a,additionalData:b})};CKEDITOR.error=function(a,b){CKEDITOR.verbosity&CKEDITOR.VERBOSITY_ERROR&&CKEDITOR.fire("log",{type:"error",errorCode:a,additionalData:b})};
CKEDITOR.on("log",function(a){if(window.console&&window.console.log){var b=console[a.data.type]?a.data.type:"log",c=a.data.errorCode;if(a=a.data.additionalData)console[b]("[CKEDITOR] Error code: "+c+".",a);else console[b]("[CKEDITOR] Error code: "+c+".");console[b]("[CKEDITOR] For more information about this error go to http://docs.ckeditor.com/#!/guide/dev_errors-section-"+c)}},null,null,999);
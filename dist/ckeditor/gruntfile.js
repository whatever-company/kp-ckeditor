﻿module.exports=function(a){a.registerTask("default",["jshint:git","jscs:git"]);var b="lang/** plugins/*/lib/** plugins/**/lang/** plugins/uicolor/yui/** plugins/htmlwriter/samples/assets/outputforflash/** samples/toolbarconfigurator/lib/** tests/adapters/jquery/_assets/** tests/core/dom/_assets/** tests/core/selection/_helpers/rangy.js tests/plugins/pastefromword/generated/_lib/q.js".split(" ");a.initConfig({pkg:a.file.readJSON("package.json"),jshint:{options:{ignores:b}},jscs:{options:{excludeFiles:b}},
plugin:{externalDir:"../ckeditor-plugins/",installationDir:"plugins/"},imagemin:{plugins:{files:[{expand:!0,cwd:".",src:["plugins/*/images/**/*.{png,jpg,gif}"]}]},skins:{files:[{expand:!0,cwd:".",src:["skins/*/images/**/*.{png,jpg,gif}"]}]},samples:{files:[{expand:!0,cwd:".",src:["samples/**/*.{png,jpg,gif}","plugins/*/samples/**/*.{png,jpg,gif}"]}]}}});a.loadTasks("dev/tasks");a.loadNpmTasks("grunt-contrib-imagemin");a.registerTask("images","Optimizes images which are not processed later by the CKBuilder (i.e. icons).",
["imagemin"])};
"use strict";

module.exports = function () {
	return {
		options: {
			plugins: {
				autogrow: 1,
				basicstyles: 1,
				blockquote: 1,
				clipboard: 1,
				colorbutton: 1,
				colordialog: 1,
				divarea: 1,
				enterkey: 1,
				entities: 1,
				floatingspace: 1,
				format: 1,
				horizontalrule: 1,
				image2: 1,
				indentlist: 1,
				justify: 1,
				link: 1,
				list: 1,
				pastefromword: 1,
				pastetext: 1,
				quicktable: 1,
				removeformat: 1,
				table: 1,
				tabletools: 1,
				toolbar: 1,
				undo: 1
			},

			pluginPaths: [{
				src: '<%= paths.npm %>ckeditor-quicktable',
				dest: 'quicktable'
			}]
		}
	};
};

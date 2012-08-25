(function(window, undefined) {
	// Useful whitespace regEx available throughout texthelperjs.
	var regSpace     = /\s+/g,
	    regTrimLeft  = /^\s+/,
	    regTrimRight = /\s+$/,
	    regTrimBoth  = /(^\s+|\s+$)/g,
	    regTrimLarge = /[\t\n\r]/g;

	var texthelper = {
		version: '0',

		truncate: function(text, len, omission) {

		},

		excerpt: function(text, interest, radius) {

		},

		highLight: function(text, keyWord) {

		},

		wordWrap: function(text, lineWidth) {

		},

		htmlEscape: function(text) {

		},

		html: function(text) {

		}
	};

	// Make texthelper available throughout the global namespace.
	window.texthelper = texthelper;
})(window);
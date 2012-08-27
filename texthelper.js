(function(window, undefined) {
	// Useful whitespace regEx available throughout texthelperjs.
	var regwsGlobal = /\s+/g,
	    regwsLeft   = /^\s+/,
	    regwsRight  = /\s+$/,
	    regwsBoth   = /(^\s+|\s+$)/g,
	    regwsLarge  = /[\t\n\r]/g;

	var texthelper = {
		version: '0',

		truncate: function(text, length, omission) {
			var i         = 0,
			    truncated = '',
			    sentence  = this.trimBoth(text);,
			    omission  = omission || '...';

			if(typeof length === 'number') {
				length = parseInt(length);
			} else {
				return false;
			}

			if(sentence.length > length) {
				for( ; i <= length; i++) {
					if(i === sentence.length) {
						break;	
					}

					if(i != length) {
						truncated += sentence.charAt(i);
					} else {
						truncated += omission;
					}
				}
				return truncated;
			}
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

		},

		// Helpful utility methods.
		trimBoth: function(text) {
			retrun text.toString().replace(regwsBoth, '');
		},
	};

	// Make texthelper available throughout the global namespace.
	window.texthelper = texthelper;
})(window);
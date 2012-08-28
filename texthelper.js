(function(window, undefined) {
	// Useful whitespace regEx available throughout texthelperjs.
	var regwsGlobal = /\s+/g,
	    regwsLeft   = /^\s+/,
	    regwsRight  = /\s+$/,
	    regwsBoth   = /(^\s+|\s+$)/g,
	    regwsLarge  = /[\t\n\r]/g;

	var texthelper = {
		version: '1.0',

		truncate: function(text, length, omission) {
			var i         = 0,
			    truncated = '',
			    sentence  = this.trimBoth(text),
			    omission  = this.trimBoth(omission) || '...';

			if(typeof length === 'number') {
				length = parseInt(length);
			} else {
				return text;
			}

			if(sentence.length > length) {
				for( ; i <= length; i++) {
					if(i === sentence.length) {
						break;	
					}

					if(i != length) {
						truncated += sentence.charAt(i);
					} else {
						truncated = this.trimBoth(truncated);
						truncated += omission;
					}
				}
				return this.trimBoth(truncated);
			}
		},

		excerpt: function(text, interest, radius	) {
			var i         = 1,
                text      = this.trimBoth(text),
			    excerpt   = '',
			    radius    = radius || 10,
			    intStart  = text.indexOf(interest),
			    excLength = interest.length + radius * 2,
			    excLeft   = '',
			    excRight  = '';

			if(intStart > -1) {
			    for( ; i <= radius; i++) {
			    	excLeft  += text.charAt((intStart - (radius + 1)) + i);
			    	excRight += text.charAt((intStart + interest.length - 1) + i);
			    }

			    excerpt += excLeft + interest + excRight;
			    return this.trimBoth(excerpt);
			}

			return text;
		},

		highlight: function(text, keyword, className) {
			var regEx     = new RegExp(keyword, "g"),
				sameChars = 0,
				openTag   = "",
				closeTag  = "",
				className = this.trimBoth(className) || "",
				text 	  = this.trimBoth(text),
				keyword   = this.trimBoth(keyword);

			if(className.length > 0){
				openTag = "<span class='"+className+"'>";
				closeTag = "</span>";
			}
			else{
				openTag = "<mark>";
				closeTag = "</mark>";
			}
			text = text.replace(regEx, openTag+keyword+closeTag);
			return text;
		},

		wordWrap: function(text, lineWidth) {
			var text  	   = text,
				i 	  	   = lineWidth,
				textLength = text.length,
				editedText = text,
				difference = 0;
			if(lineWidth > 0){
				for( ; i < textLength; i++){
					if(text.charAt(i) == " "){
						difference = editedText.length - textLength;
						test = editedText.split("");
						test.splice(i+difference, 0, "<br/>");
						editedText = test.join("");
						i += lineWidth;
					}
				}
				return editedText;
			}
			else{
				return editedText;
			}
		},

		htmlEscape: function(text) {
			var text = this.trimBoth(text);
			return text = text.replace(/(<|>|&|"|')/g, function(match) {
				switch (match) {
					case '<':
						return match = '&lt;';
					case '>':
						return match = '&gt;';
					case '&':
						return match = '&amp;';
					case '"': 
						return match = '&quot;';
					case "'":
						return match = '&apos;';
				}
			});
		},

		htmlGenerate: function(name, attributes, contents) {
			var autoclose = ['img', 'iframe', 'br'],
				tag 	  = "<" + name;
				contents  = contents ? contents : "";

			for(key in attributes){
        		tag += " " + key + "='" + attributes[key] + "'";
	        }

	        if(autoclose.indexOf(name) >= 0){
	            tag += " />"
	        } else {
	            tag += ">" + contents + "</" + name + ">";
	        }
	        return tag;
		},

		// Helpful utility methods.
		trimBoth: function(text) {
			return text != undefined ? text.toString().replace(regwsBoth, '') : false;
		}
	};

	// Make texthelper available throughout the global namespace.
	window.texthelper = window._text = texthelper;
})(window);
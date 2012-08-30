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
			var truncated = '',
			sentence      = this.trimBoth(text),
			append 		  = ( omission == null ) ? "..." : omission;
			if(length > 0){
				truncated = text.substring(0, length-1) + append 
			}
			else if(length < 0){
				truncated = append + text.substring(length*-1, sentence.length)
			}
			else{
				truncated = sentence;
			}
			return truncated;
		},

		excerpt: function(text, interest, radius	) {
			var index     = 0,
			text          = this.trimBoth(text),
			excerpt       = '',
			radius        = radius || 10
			keyword       = interest
			start	      = 0,
			stop	      = 0;

			index = text.indexOf(keyword);
			start = index-radius >= 0? index-radius: 0;
			stop = index+keyword.length+radius < text.length? index+keyword.length+radius: text.length;
			excerpt = text.substring(start, stop);
			return excerpt;
		},

		highlight: function(text, keyword, className) {
			var regEx     = new RegExp(keyword, "g"),
			sameChars     = 0,
			openTag       = "",
			closeTag      = "",
			className     = this.trimBoth(className) || "",
			text 	      = this.trimBoth(text),
			keyword       = this.trimBoth(keyword);

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
			var text   = text,
			i	   = lineWidth,
			textLength = text.length,
			editedText = text,
			difference = 0;
			if(lineWidth > 0){
				for( ; i < textLength; i++){
					if(text.charAt(i) == " "){
						difference = editedText.length - textLength;
						test = editedText.split("");
						test.splice(i+difference, 0, "<br>");
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
			var autoclose = ['img','iframe'],
			tag 	      = "<" + name;
			contents      = contents ? contents : "";

			for(key in attributes){
				if(attributes.hasOwnProperty(key)){
					tag += " " + key + "='" + attributes[key] + "'";
				}
			}

			if(autoclose.indexOf(name) >= 0){
				tag += " />"
			} 
			else {
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
(function(window, undefined) {
// Useful whitespace regEx available throughout texthelperjs.
	var regwsGlobal = /\s+/g,
	regwsLeft   = /^\s+/,
	regwsRight  = /\s+$/,
	regwsBoth   = /(^\s+|\s+$)/g,
	regwsLarge  = /[\t\n\r]/g;

	var texthelper = {
		version: '0.2',

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
			var text      = this.trimBoth(text),
			excerpt       = '',
			radius        = radius || 10;

			var index = text.indexOf(interest);
			var start = index-radius >= 0? index-radius: 0;
			var stop = index+interest.length+radius < text.length? index+interest.length+radius: text.length;
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
			i	       = lineWidth,
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
					tag += " " + key + "='" + attributes[key] + "'";
			}

			if(autoclose.indexOf(name) >= 0){
				tag += " />"
			} 
			else {
				tag += ">" + contents + "</" + name + ">";
			}
			return tag;
		},
		wordFilter: function(content){
			var content = content;
			for(key in this.blacklist){
				var regEx = new RegExp(key, "g");
				if(content.indexOf(key)!= -1){
					content = content.replace(regEx, this.blacklist[key]);
				}
			}
			return content;
		},
		blacklist: {
			add: function(filterContent){
				for(key in filterContent){
					this[key] = filterContent[key];
				}
			},
			remove: function(word){
                if(word in this){
                    delete this[word];
                }
		   	}	
		},
		// Helpful utility methods.
		trimBoth: function(text) {
			return text != undefined ? text.toString().replace(regwsBoth, '') : false;
		}
	};

	// Make texthelper available throughout the global namespace.
	window.texthelper = window._text = texthelper;
})(window);
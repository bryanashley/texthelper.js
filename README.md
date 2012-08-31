# Texthelper.js V.0.2 #

Texthelper.js is a library of useful texthelper functions for filtering, formatting and transforming strings and manipulating an html view.

# Features #
* Truncate: Takes a string and a maximum length and an optional omission, cuts the string off at the maximum length and appends the omission (if provided) to the end of the string. Returns the newly truncated string.
* Excerpt: Extracts an excerpt from text that matches the first instance of phrase. The radius option expands the excerpt on each side of the first occurrence of phrase by the number of characters defined in radius
* Highlight: Takes a string, a word within that string, and an optional class name and highlights every occurrence of that word within the string with either a span tag with the class name if provided, otherwise uses the html5 mark tag.
* wordWrap: Takes a string and a line width, this method then breaks the line at the first white space that does not exceed line width.
* htmlEscape: This method takes a provided string and breaks any html into html_escape characters
* htmlGenerate: This methods use allows for the creation of html tags and allows for applying attributes and contents to the generated tag
* blacklist: This object is used by wordFilter. It contains any words to blacklist and there replacement words. blacklist has two methods; add and delete. Add allows you to pass through a JSON object of words to blacklist and their corresponding replacement words. Remove simply takes the word you would like to remove off the blacklist and removes it from the object. 
* wordFilter: This method will take a string, and filter out any word that exists in the blacklist object and replace them with their corresponding replacement words.

# Using Texthelper.js - A code sample#
# Truncate: #
    texthelper.truncate("This is an example", 5);
    returns: "This..."
    texthelper.truncate("This is an example", 5, "!");
    returns: "This!"
# Excerpt: #
    texthelper.excerpt("This is an example", "an", 5);
    returns: "s is an exam"
    texthelper.excerpt("The quick brown fox jumps over the lazy dog", "fox", 6);
    returns: "brown fox jumps"
# Highlight: #
    texthelper.highlight("This is an example. A code example helps learn how to use a function properly.", "example");
    returns: "This is an <mark>example</mark>. A code <mark>example</mark> helps learn how to use a function properly."
    texthelper.highlight("This is an example.", "example", "highlight");
    returns: "This is an <span class='highlight''>example</span>."
# wordWrap: #
    texthelper.wordWrap("This is an example.", 5);
    returns: "This is<br/> an example."
# htmlEscape: #
    texthelper.htmlEscape("<div> Example html content <br /> </div>");
    returns: "&lt;div&gt; Example html content &lt;br /&gt; &lt;/div&gt;"
# htmlGenerate: #
    texthelper.htmlGenerate("div", {class: "content", id: "123", style: "float: left;"}, "<h1> Main Content</h1>");
    returns: "<div class='content' id='123' style='float: left;'><h1> Main Content</h1></div>"
    texthelper.htmlGenerate("img", {src: "http://t1.gstatic.com/images?q=tbn:ANd9GcRI-OasQdJqJbQqMNLpKa99tlPvLLGyju-Z7nYM0reVe4dnfVkBOg&t=1"});
    returns: "<img src='http://t1.gstatic.com/images?q=tbn:ANd9GcRI-OasQdJqJbQqMNLpKa99tlPvLLGyju-Z7nYM0reVe4dnfVkBOg&t=1' />"
# wordFilter and blacklist #
    texthelper.blacklist.add({test: "t**t", blah: "b**h"});
    texthelper.wordFilter("This is a test, blah blah blah, im still testing");
    returns: "This is a t**t, b**h b**h b**h, im still t**ting"
    texthelper.blacklist.remove("blah");
    texthelper.wordFilter("This is a test, blah blah blah, im still testing");
    returns: "This is a t**t, blah blah blah, im still t**ting"


# Copyright and Licensing #
Copyright (c) 2012 Bryan Ashley and Mike Bonds, released under the MIT license.

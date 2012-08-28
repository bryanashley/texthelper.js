# Texthelper.js V.1.0 #

Texthelper.js is a library of useful texthelper functions for filtering, formatting and transforming strings and manipulating an html view.

# Features #
* Truncate: Takes a string and a maximum length and an optional omission, cuts the string off at the maximum length and appends the omission (if provided) to the end of the string. Returns the newly truncated string.
* Excerpt: Takes a string, a section of that string and a radius, at the first occurrence of the section the function selects that occurrence with the supplied radius amount of characters to either side of the section.
* Highlight: Takes a string, a word within that string, and an optional class name and highlights every occurrence of that word within the string with either a span tag with the class name if provided, otherwise uses the html5 mark tag.
* wordWrap: Takes a string and a line width, this method then breaks the line at the first white space that does not exceed line width.
* htmlEscape: This method takes a provided string and breaks any html into html_escape characters
* htmlGenerate: This methods use allows for the creation of html tags and allows for applying attributes and contents to the generated tag

# Using Texthelper.js - A code sample#
# Truncate: #
    Texthelper.truncate("This is an example", 5);
    returns: "This..."
    Texthelper.truncate("This is an example", 5, "!");
    returns: "This!"
# Excerpt: #
    Texthelper.excerpt("This is an example", "an", 5);
    returns: "s is an exam"
    Texthelper.excerpt("The quick brown fox jumps over the lazy dog", "fox", 6);
    returns: "brown fox jumps"
# Highlight: #
    Texthelper.highlight("This is an example. A code example helps learn how to use a function properly.", "example");
    returns: "This is an <mark>example</mark>. A code <mark>example</mark> helps learn how to use a function properly."
    Texthelper.highlight("This is an example.", "example", "highlight");
    returns: "This is an <span class='highlight''>example</span>."
# wordWrap: #
    Texthelper.wordWrap("This is an example.", 5);
    returns: "This is<br/> an example."
# htmlEscape: #
    Texthelper.htmlEscape("<div> Example html content <br /> </div>");
    returns: "&lt;div&gt; Example html content &lt;br /&gt; &lt;/div&gt;"
# htmlGenerate: #
    Texthelper.htmlGenerate("div", {class: "content", id: "123", style: "float: left;"}, "<h1> Main Content</h1>");
    returns: "<div class='content' id='123' style='float: left;'><h1> Main Content</h1></div>"
    Texthelper.htmlGenerate("img", {src: "http://t1.gstatic.com/images?q=tbn:ANd9GcRI-OasQdJqJbQqMNLpKa99tlPvLLGyju-Z7nYM0reVe4dnfVkBOg&t=1"});
    returns: "<img src='http://t1.gstatic.com/images?q=tbn:ANd9GcRI-OasQdJqJbQqMNLpKa99tlPvLLGyju-Z7nYM0reVe4dnfVkBOg&t=1' />"

    

# Copyright and Licensing #
Copyright (c) 2012 Bryan Ashley and Mike Bonds, released under the MIT license.

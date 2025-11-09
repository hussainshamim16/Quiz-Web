let questions = [
  // HTML 
  {
    name: "html",
    questions: [
      {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
          "Hyper Text Preprocessor",
          "Hyper Text Multiple Language",
          "Hyper Text Markup Language",
          "Hyper Tool Multi Language"
        ]
      },
      {
        numb: 2,
        question: "What is the correct file extension for HTML files?",
        answer: ".html",
        options: [".ht", ".html", ".hml", ".web"]
      },
      {
        numb: 3,
        question: "Which HTML tag is used to define a paragraph?",
        answer: "<p>",
        options: ["<p>", "<para>", "<pg>", "<paragraph>"]
      },
      {
        numb: 4,
        question: "Which tag is used to define the largest heading?",
        answer: "<h1>",
        options: ["<h6>", "<head>", "<h1>", "<heading>"]
      },
      {
        numb: 5,
        question: "Which tag is used to create a hyperlink?",
        answer: "<a>",
        options: ["<a>", "<link>", "<href>", "<url>"]
      },
      {
        numb: 6,
        question: "Which HTML element is used to display an image?",
        answer: "<img>",
        options: ["<src>", "<img>", "<image>", "<pic>"]
      },
      {
        numb: 7,
        question: "What attribute specifies the URL of the image in <img> tag?",
        answer: "src",
        options: ["link", "src", "href", "url"]
      },
      {
        numb: 8,
        question: "Which tag is used for inserting a line break?",
        answer: "<br>",
        options: ["<break>", "<lb>", "<br>", "<line>"]
      },
      {
        numb: 9,
        question: "Which HTML element is used for bold text?",
        answer: "<b>",
        options: ["<bold>", "<b>", "<strong>", "<big>"]
      },
      {
        numb: 10,
        question: "Which tag is used to display italic text?",
        answer: "<i>",
        options: ["<italic>", "<em>", "<i>", "<it>"]
      },
      {
        numb: 11,
        question: "Which attribute is used to open a link in a new tab?",
        answer: "target='_blank'",
        options: [
          "window='_blank'",
          "target='_blank'",
          "new='_tab'",
          "open='new'"
        ]
      },
      {
        numb: 12,
        question: "Which tag is used to create an unordered list?",
        answer: "<ul>",
        options: ["<ul>", "<ol>", "<li>", "<list>"]
      },
      {
        numb: 13,
        question: "Which tag is used to create an ordered list?",
        answer: "<ol>",
        options: ["<ul>", "<li>", "<numlist>", "<ol>"]
      },
      {
        numb: 14,
        question: "Which tag defines a list item?",
        answer: "<li>",
        options: ["<list>", "<li>", "<item>", "<ul>"]
      },
      {
        numb: 15,
        question: "What tag is used for inserting a horizontal line?",
        answer: "<hr>",
        options: ["<line>", "<br>", "<hr>", "<hl>"]
      },
      {
        numb: 16,
        question: "What does the <title> tag do?",
        answer: "It sets the title of the webpage in the browser tab",
        options: [
          "Displays text inside the page",
          "Sets the title in the browser tab",
          "Adds a heading to the page",
          "None of the above"
        ]
      },
      {
        numb: 17,
        question: "Which tag defines the document’s body?",
        answer: "<body>",
        options: ["<body>", "<main>", "<section>", "<div>"]
      },
      {
        numb: 18,
        question: "Which HTML element is used to play video files?",
        answer: "<video>",
        options: ["<movie>", "<video>", "<media>", "<player>"]
      },
      {
        numb: 19,
        question: "Which HTML element is used to play audio files?",
        answer: "<audio>",
        options: ["<sound>", "<music>", "<audio>", "<play>"]
      },
      {
        numb: 20,
        question: "Which attribute specifies alternate text for an image?",
        answer: "alt",
        options: ["alt", "title", "caption", "name"]
      },
      {
        numb: 21,
        question: "What is the root element of an HTML document?",
        answer: "<html>",
        options: ["<head>", "<html>", "<body>", "<root>"]
      },
      {
        numb: 22,
        question: "Which element contains meta information about the document?",
        answer: "<head>",
        options: ["<meta>", "<head>", "<info>", "<data>"]
      },
      {
        numb: 23,
        question: "What does the <meta> tag provide?",
        answer: "Metadata about the HTML document",
        options: [
          "Text content",
          "Images",
          "Metadata about the HTML document",
          "Page footer"
        ]
      },
      {
        numb: 24,
        question: "Which tag is used to define a form?",
        answer: "<form>",
        options: ["<form>", "<input>", "<data>", "<submit>"]
      },
      {
        numb: 25,
        question: "Which tag is used for input fields?",
        answer: "<input>",
        options: ["<text>", "<input>", "<field>", "<data>"]
      },
      {
        numb: 26,
        question: "Which tag creates a dropdown list?",
        answer: "<select>",
        options: ["<dropdown>", "<list>", "<select>", "<option>"]
      },
      {
        numb: 27,
        question: "Which tag defines options in a dropdown?",
        answer: "<option>",
        options: ["<list>", "<value>", "<option>", "<select>"]
      },
      {
        numb: 28,
        question: "Which tag defines a clickable button?",
        answer: "<button>",
        options: ["<press>", "<button>", "<submit>", "<click>"]
      },
      {
        numb: 29,
        question: "Which HTML tag defines a table?",
        answer: "<table>",
        options: ["<tbl>", "<table>", "<tr>", "<tab>"]
      },
      {
        numb: 30,
        question: "Which tag defines a table row?",
        answer: "<tr>",
        options: ["<td>", "<row>", "<tr>", "<table>"]
      },
      {
        numb: 31,
        question: "Which tag defines a table cell?",
        answer: "<td>",
        options: ["<tr>", "<th>", "<td>", "<cell>"]
      },
      {
        numb: 32,
        question: "Which tag defines a table header?",
        answer: "<th>",
        options: ["<header>", "<th>", "<head>", "<title>"]
      },
      {
        numb: 33,
        question: "Which tag is used to group block elements?",
        answer: "<div>",
        options: ["<div>", "<span>", "<section>", "<main>"]
      },
      {
        numb: 34,
        question: "Which tag is used for inline grouping?",
        answer: "<span>",
        options: ["<div>", "<span>", "<p>", "<section>"]
      },
      {
        numb: 35,
        question: "Which HTML element is used to define navigation links?",
        answer: "<nav>",
        options: ["<navigate>", "<menu>", "<nav>", "<header>"]
      },
      {
        numb: 36,
        question: "Which HTML element defines a footer for a page?",
        answer: "<footer>",
        options: ["<bottom>", "<end>", "<footer>", "<section>"]
      },
      {
        numb: 37,
        question: "Which HTML5 element defines article content",
        answer: "<article>",
        options: ["<content>", "<post>", "<article>", "<section>"]
      },
      {
        numb: 38,
        question: "Which tag is used for defining sections in a document?",
        answer: "<section>",
        options: ["<block>", "<part>", "<section>", "<div>"]
      },
      {
        numb: 39,
        question: "Which attribute is used to specify inline CSS styles?",
        answer: "style",
        options: ["style", "css", "design", "font"]
      },
      {
        numb: 40,
        question: "What is the correct HTML for inserting a comment?",
        answer: "<!-- This is a comment -->",
        options: [
          "// This is a comment",
          "# This is a comment",
          "<comment>This is a comment</comment>",
          "<!-- This is a comment -->"
        ]
      }
    ]
  },
  // CSS
  {
    name: "css",
    questions: [
      {
        numb: 1,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        options: [
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets"
        ]
      },
      {
        numb: 2,
        question: "Which HTML tag is used to link an external CSS file?",
        answer: "<link>",
        options: ["<style>", "<css>", "<script>", "<link>"]
      },
      {
        numb: 3,
        question: "Which HTML tag is used to define internal CSS?",
        answer: "<style>",
        options: ["<css>", "<script>", "<style>", "<link>"]
      },
      {
        numb: 4,
        question: "Which property is used to change text color?",
        answer: "color",
        options: ["font-color", "color", "text-color", "foreground"]
      },
      {
        numb: 5,
        question: "Which property changes the background color?",
        answer: "background-color",
        options: ["bgcolor", "background", "background-color", "color"]
      },
      {
        numb: 6,
        question: "Which property controls the text size?",
        answer: "font-size",
        options: ["text-size", "font-style", "font-size", "size"]
      },
      {
        numb: 7,
        question: "Which property makes text bold?",
        answer: "font-weight",
        options: ["font-weight", "bold", "text-bold", "font-style"]
      },
      {
        numb: 8,
        question: "How do you add comments in CSS?",
        answer: "/* comment */",
        options: [
          "// comment",
          "<!-- comment -->",
          "/* comment */",
          "# comment"
        ]
      },
      {
        numb: 9,
        question: "Which property is used to change font style?",
        answer: "font-style",
        options: ["text-style", "style", "font-style", "font"]
      },
      {
        numb: 10,
        question: "Which CSS property changes the font family?",
        answer: "font-family",
        options: ["font-type", "font-family", "font-style", "text-family"]
      },
      {
        numb: 11,
        question: "Which property is used to center text?",
        answer: "text-align",
        options: ["text-align", "align", "center", "align-text"]
      },
      {
        numb: 12,
        question: "Which property adds space inside an element?",
        answer: "padding",
        options: ["margin", "padding", "border", "space"]
      },
      {
        numb: 13,
        question: "Which property adds space outside an element?",
        answer: "margin",
        options: ["space", "padding", "margin", "border"]
      },
      {
        numb: 14,
        question: "Which property is used to set borders?",
        answer: "border",
        options: ["border", "outline", "frame", "edge"]
      },
      {
        numb: 15,
        question: "Which CSS property changes the text to uppercase?",
        answer: "text-transform",
        options: ["text-style", "text-case", "transform", "text-transform"]
      },
      {
        numb: 16,
        question: "Which property is used to add shadow to text?",
        answer: "text-shadow",
        options: ["content-shadow", "text-shadow", "shadow", "word-shadow"]
      },
      {
        numb: 17,
        question: "Which property adds shadow to a box?",
        answer: "box-shadow",
        options: ["text-shadow", "drop-shadow", "box-shadow", "shadow"]
      },
      {
        numb: 18,
        question: "Which property controls the height of an element?",
        answer: "height",
        options: ["size", "width", "dimension", "height"]
      },
      {
        numb: 19,
        question: "Which property controls the width of an element?",
        answer: "width",
        options: ["size", "width", "length", "area"]
      },
      {
        numb: 20,
        question: "Which property sets the space between lines of text?",
        answer: "line-height",
        options: ["line-height", "line-space", "text-spacing", "spacing"]
      },
      {
        numb: 21,
        question: "Which property is used to make corners rounded?",
        answer: "border-radius",
        options: ["border-curve", "corner-radius", "border-radius", "round"]
      },
      {
        numb: 22,
        question: "Which property controls element visibility?",
        answer: "visibility",
        options: ["hidden", "display", "visibility", "show"]
      },
      {
        numb: 23,
        question: "Which property hides an element completely?",
        answer: "display: none",
        options: [
          "visibility: hidden",
          "opacity: 0",
          "display: none",
          "hidden: true"
        ]
      },
      {
        numb: 24,
        question: "Which CSS property is used for layout control?",
        answer: "display",
        options: ["display", "position", "float", "layout"]
      },
      {
        numb: 25,
        question: "Which value of display makes a container flexible?",
        answer: "flex",
        options: ["block", "grid", "flex", "inline"]
      },
      {
        numb: 26,
        question: "Which CSS property is used to position elements?",
        answer: "position",
        options: ["display","position", "float",  "layout"]
      },
      {
        numb: 27,
        question: "Which values can the position property take?",
        answer: "static, relative, absolute, fixed, sticky",
        options: [
          "block, inline, flex, grid",
          "top, left, right, bottom",
          "static, relative, absolute, fixed, sticky",
          "none of these"
        ]
      },
      {
        numb: 28,
        question: "Which property moves an element to the left ",
        answer: "left",
        options: ["left", "right", "top", "bottom"]
      },
      {
        numb: 29,
        question: "Which property is used to clear floats?",
        answer: "clear",
        options: ["float", "clear", "overflow", "block"]
      },
      {
        numb: 30,
        question: "Which property is used to change the cursor style?",
        answer: "cursor",
        options: ["pointer", "cursor", "hover", "mouse"]
      },
      {
        numb: 31,
        question: "Which CSS property controls element stacking order?",
        answer: "z-index",
        options: ["z-order", "index",  "order","z-index"]
      },
      {
        numb: 32,
        question: "Which property changes the transparency of an element?",
        answer: "opacity",
        options: ["alpha", "filter", "opacity", "transparency"]
      },
      {
        numb: 33,
        question: "Which function is used to define colors in RGBA format?",
        answer: "rgba()",
        options: ["color()","rgba()", "rgb()", "opacity()"]
      },
      {
        numb: 34,
        question: "Which property controls overflow content?",
        answer: "overflow",
        options: ["scroll", "clip", "overflow", "hidden"]
      },
      {
        numb: 35,
        question: "Which property defines the grid container?",
        answer: "display: grid",
        options: ["display: flex", "grid-template",  "display: grid","grid"]
      },
      {
        numb: 36,
        question: "Which property defines the number of columns in a grid?",
        answer: "grid-template-columns",
        options: [
          "grid-columns",
          "grid-template-columns",
          "grid-structure",
          "column-count"
        ]
      },
      {
        numb: 37,
        question: "Which property aligns items horizontally in flexbox?",
        answer: "justify-content",
        options: [
          "align-items",
          "justify-content",
          "align-content",
          "align-center"
        ]
      },
      {
        numb: 38,
        question: "Which property aligns items vertically in flexbox?",
        answer: "align-items",
        options: [
          "align-items",
          "justify-content",
          "align-content",
          "vertical-align"
        ]
      },
      {
        numb: 39,
        question: "Which CSS rule is used to create media queries?",
        answer: "@media",
        options: ["@rule", "@screen", "@query", "@media"]
      },
      {
        numb: 40,
        question: "Which property is used to animate transitions smoothly?",
        answer: "transition",
        options: ["animate", "transform", "transition", "timing"]
      }
    ]
  },
  // JAVASCRIPT
  {
    name: "javascript",
    questions: [
      {
        numb: 1,
        question: "What does JS stand for?",
        answer: "JavaScript",
        options: ["JavaSystem", "JavaScript", "JustScript", "JSoft"]
      },
      {
        numb: 2,
        question: "Who invented JavaScript?",
        answer: "Brendan Eich",
        options: ["Dennis Ritchie", "James Gosling", "Brendan Eich", "Bjarne Stroustrup"]
      },
      {
        numb: 3,
        question: "In which year was JavaScript created?",
        answer: "1995",
        options: ["1990", "1995", "2000", "2005"]
      },
      {
        numb: 4,
        question: "Which company developed JavaScript?",
        answer: "Netscape",
        options: ["Microsoft", "Sun Microsystems", "IBM", "Netscape"]
      },
      {
        numb: 5,
        question: "Which HTML tag is used to include JavaScript code?",
        answer: "<script>",
        options: [" <js> ", " <script> ", " <javascript> ", " <code> "]
      },
      {
        numb: 6,
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "<script>",
        options: [" <js> ",  " <scripting> ", " <javascript> "," <script> ",]
      },
      {
        numb: 7,
        question: "How do you write 'Hello World' in an alert box?",
        answer: "alert('Hello World');",
        options: ["alert('Hello World');", "msg('Hello World');", "alertBox('Hello World');", "prompt('Hello World');"]
      },
      {
        numb: 8,
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: ["function = myFunction()", "function:myFunction()", "function myFunction()", "create myFunction()"]
      },
      {
        numb: 9,
        question: "How do you call a function named 'myFunction'?",
        answer: "myFunction()",
        options: ["call myFunction()",  "run myFunction", "execute myFunction","myFunction()"]
      },
      {
        numb: 10,
        question: "Which operator is used to assign a value to a variable?",
        answer: "=",
        options: ["-", "=", "==", "+"]
      },
      {
        numb: 11,
        question: "Which operator is used to compare two values?",
        answer: "==",
        options: ["=",  "===", "!=","==",]
      },
      {
        numb: 12,
        question: "Which operator checks both value and type equality?",
        answer: "===",
        options: ["=", "==", "===", "!=="]
      },
      {
        numb: 13,
        question: "How do you write a single-line comment in JavaScript?",
        answer: "// This is a comment",
        options: ["<!-- comment -->", "/* comment */", "// comment", "** comment **"]
      },
      {
        numb: 14,
        question: "How do you write a multi-line comment in JavaScript?",
        answer: "/* comment */",
        options: ["// comment //", "/* comment */", "<!-- comment -->", "** comment **"]
      },
      {
        numb: 15,
        question: "Which keyword is used to declare a variable?",
        answer: "var, let, or const",
        options: ["var", "let", "const", "var, let, or const"]
      },
      {
        numb: 16,
        question: "What is the correct syntax to print something in the console?",
        answer: "console.log()",
        options: ["log.console()", "console.log()", "print.console()", "output.log()"]
      },
      {
        numb: 17,
        question: "Which data type is NOT primitive in JavaScript?",
        answer: "Object",
        options: ["String", "Number", "Boolean", "Object",]
      },
      {
        numb: 18,
        question: "What is the result of 2 + '2' in JavaScript?",
        answer: "'22'",
        options: ["4", "22", "'22'", "Error"]
      },
      {
        numb: 19,
        question: "Which keyword is used to create a constant variable?",
        answer: "const",
        options: ["constant","var", "const",  "let"]
      },
      {
        numb: 20,
        question: "What will typeof null return?",
        answer: "object",
        options: ["object","null", "undefined",  "number"]
      },
      {
        numb: 21,
        question: "Which symbol is used for comments in JavaScript?",
        answer: "//",
        options: [" <!----> ", "//", "/* */", "#"]
      },
      {
        numb: 22,
        question: "How do you create an array in JavaScript?",
        answer: "let arr = [1, 2, 3];",
        options: ["let arr = (1,2,3)",  "let arr = {1,2,3}", "arr = 1,2,3","let arr = [1,2,3];"]
      },
      {
        numb: 23,
        question: "How do you create an object in JavaScript?",
        answer: "let obj = {name: 'Ali', age: 20};",
        options: ["let obj = (name='Ali', age=20)", "let obj = {name: 'Ali', age: 20};", "object obj = {name: 'Ali'}", "create obj {name: 'Ali'}"]
      },
      {
        numb: 24,
        question: "Which built-in method joins all elements of an array into a string?",
        answer: "join()",
        options: ["concat()", "join()", "push()", "map()"]
      },
      {
        numb: 25,
        question: "Which function is used to parse a string to integer?",
        answer: "parseInt()",
        options: ["Number()",  "parseFloat()", "toInteger()","parseInt()"]
      },
      {
        numb: 26,
        question: "Which function converts JSON string into JavaScript object?",
        answer: "JSON.parse()",
        options: ["JSON.stringify()", "JSON.convert()", "JSON.parse()", "parse.JSON()"]
      },
      {
        numb: 27,
        question: "Which function converts a JavaScript object into a JSON string?",
        answer: "JSON.stringify()",
        options: ["JSON.parse()", "JSON.convert()", "JSON.stringify()", "JSON.objectify()"]
      },
      {
        numb: 28,
        question: "Which keyword is used to define a class in JavaScript?",
        answer: "class",
        options: ["object", "class", "function", "constructor"]
      },
      {
        numb: 29,
        question: "How do you create a new object from a class?",
        answer: "let obj = new MyClass();",
        options: ["let obj = class MyClass();", "obj = new MyClass;", "let obj = new MyClass();", "create obj MyClass()"]
      },
      {
        numb: 30,
        question: "Which symbol is used to access object properties?",
        answer: ". (dot)",
        options: [". (dot)", "#", "@", "/"]
      },
      {
        numb: 31,
        question: "Which loop is used to iterate over object properties?",
        answer: "for...in",
        options: ["for", "forEach", "for...of", "for...in"]
      },
      {
        numb: 32,
        question: "Which loop is used to iterate over arrays?",
        answer: "for...of",
        options: ["for...of", "for...in", "while", "loop()"]
      },
      {
        numb: 33,
        question: "Which statement is used to handle errors in JavaScript?",
        answer: "try...catch",
        options: ["throw", "try...catch", "catch()", "handleError()"]
      },
      {
        numb: 34,
        question: "Which method is used to remove the last element from an array?",
        answer: "pop()",
        options: ["remove()", "delete()", "pop()", "splice()"]
      },
      {
        numb: 35,
        question: "Which method is used to add an element at the end of an array?",
        answer: "push()",
        options: ["add()", "push()", "append()", "concat()"]
      },
      {
        numb: 36,
        question: "Which method is used to execute a function after a delay?",
        answer: "setTimeout()",
        options: ["delay()", "setTimeout()", "setInterval()", "after()"]
      },
      {
        numb: 37,
        question: "Which method executes a function repeatedly at intervals?",
        answer: "setInterval()",
        options: ["setTimeout()", "setRepeat()", "setInterval()", "repeat()"]
      },
      {
        numb: 38,
        question: "What keyword is used to export a module in JavaScript?",
        answer: "export",
        options: ["export", "module", "send", "require"]
      },
      {
        numb: 39,
        question: "What keyword is used to import a module in JavaScript?",
        answer: "import",
        options: ["require", "get", "import", "include"]
      },
      {
        numb: 40,
        question: "Which modern JS feature allows asynchronous code execution?",
        answer: "async/await",
        options: ["async/await", "sync", "await", "delay"]
      }
    ]
  }
];


export { questions }

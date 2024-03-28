It is possible to style HTML elements that
have specific attributes or attribute values.

 
The [attribute] selector is used to select elements with a specified attribute.
eg:

a[target] {
  background-color: yellow;
}
<body>
<a href="https://www.w3schools.com">w3schools.com</a>
<a href="http://www.disney.com" target="_blank">disney.com</a>
<a href="http://www.wikipedia.org" target="_top">wikipedia.org</a>
</body>
The above  example selects all <a> elements with a target attribute:


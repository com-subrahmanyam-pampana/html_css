A CSS pseudo-element is used to style specified parts of an element.

For example, it can be used to:

    Style the first letter, or line, of an element
    Insert content before, or after, the content of an element

Syntax:
selector::pseudo-element {
  property: value;
}
Eg:
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}
First latter of the para will be in diffrent color
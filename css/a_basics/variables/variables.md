# Custom properties (CSS variables or cascading variables):
1.These are the  entities defined by CSS authors that represent specific values to be reused throughout a document. 
2.They are set using the 
(i). @property at-rule or 
(ii).by custom property syntax (e.g., --primary-color: blue;)

3.Custom properties are accessed using the CSS var() function (e.g., color: var(--primary-color);)

# Uses:
1. Custom properties allow a value to be defined in one place, then referenced in multiple other places so that it's easier to work with. 
2.Another benefit is readability and semantics.
For example, --main-text-color is easier to understand than the hexadecimal color #00ff00

# Notes
1.Custom properties must be within a selector and start with two dashes (--).

--main-color: red; /*This is invalid as it is outside the selector*/
body {
  /* Totally fine */
  --mainColor: red;
  --main-color: red;
}


# Mobile Tab Selection 2

This branch is used to test a new approach to switch between the 
episode catalogue and the selected episode. 

It accomplishes this by using the subsequent sibling selector `~` and a hidden checkbox.
This approach is ideal because its behaviour is restricted to the `@media` rule inside `CSS` 
and does not interfere with the pages normal flow when switching back to a larger screen size.

This CSS-only 'hack' to switch between tabs, was adapted and inspired by Alexander Sandberg and 
his article titled ["Creating a website theme switcher with CSS only"](https://alexandersandberg.com/articles/creating-a-website-theme-switcher-with-css-only/).

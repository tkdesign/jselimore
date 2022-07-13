# JS Elimore
#### Make Easy For Ellipsis Text

JavaScript Elimore is a vanilla JS version of jQuery Elimore plugin that help you to make ellipsis text for multiple line of text with view or more button. You can trim how long the character will show.

---

## Usage

1. Include jselimore.js and jselimore.css in your project files
2. Call the jsElimore
### Default options
```
jsElimore(selector).init();
```
### Show Text Only Without Hidden Button.
```
jsElimore(selector, {maxLength:200}).init();
```
---

## Options

```
maxLength:130, // int (default value is 130)
moreText : "More View", // string
```
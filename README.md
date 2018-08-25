# css-overlay-snippet

**A live CSS debugging stylesheet**

This is a code snippet that can be pasted into the web browser after loading any site that will add an overlay where you can type CSS styles that will also be applied to thr page loaded in the browser.

## About

This is intended for people debugging or troubleshooting CSS on live websites who may not have access to experiment with the CSS on the site they are troubleshooting.

This snippet also saves your current text to the browser's `localStorage`, so the styles you have written on one page will persist even after a reload (and pasting the snippet back into the console to bring the overlay back).

## How to use

This snippet works by copying the JavaScript code from [index.js](index.js) and entering it into your browser's JavaScript Console. A small, transparent overlay will appear at the bottom of the browser's viewport. Moving the mouse over this overlay will enlarge it, and if you click inside the overlay you are able to type to edit the text.

```js
// CSS Overlay Snippet
(() => {
  let overlay_styles = document.createElement('style')
  let virtual_stylesheet = document.createElement('style')
  let textarea = document.createElement('textarea');

  overlay_styles.textContent = `
    [data-css=overlay] {
      box-sizing: border-box;
      margin: 0;
      padding: 1em;
      width: 100%;
      height: 100px;
      position: fixed;
      bottom: 0;
      right: 0;
      font-size: 18pt;
      font-family: 'Fira Code', monospace;
      color: black !important;
      background: white !important;
      opacity: .3;
      z-index: 99999;
      transition: height .2s ease-in-out, opacity .2s ease-in-out;
    }
    [data-css=overlay]:hover {
      opacity: .8;
      height: 80%;
    }
  `
  textarea.dataset.css = 'overlay'
  textarea.addEventListener(
    'input', 
    e => localStorage.css_overlay = virtual_stylesheet.innerHTML = textarea.value
  )
  if (localStorage.css_overlay) {

    textarea.value = localStorage.css_overlay

  }

  document.head.appendChild(overlay_styles)
  document.head.appendChild(virtual_stylesheet)
  document.body.appendChild(textarea)

})()
```

> TIP: Once you have pasted a snippet into your browser's JS console, you can press the up arrow on your keyboard (`&uarr;`) to view the history of past commands you have entered.
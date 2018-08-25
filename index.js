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
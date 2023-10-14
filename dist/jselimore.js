var jsElimore = function jsElimore(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  if (!document.querySelector('style#elimore-styles')) {
    var style = document.createElement('style');
    style.id = 'elimore-styles';
    style.innerText = " .elimore-hide { display: none; } .elimore_show { cursor: pointer; } ";
    document.head.appendChild(style);
  }
  var el = context.querySelector(selector);
  var options = {
    maxLength: 130,
    moreText: "..."
  };
  var ellipsis = function ellipsis() {
    var fullTxt = el.innerText;
    var fullHtml = el.innerHTML;
    var text_one = fullTxt.slice(0, options.maxLength);
    var more_btn = document.createElement('a');
    more_btn.classList.add('elimore_show');
    more_btn.textContent = options.moreText;
    more_btn.addEventListener('click', _toggle_ellipsis);
    el.innerHTML = "\n      <span class=\"elimore_preview\">".concat(text_one, "</span>\n      <span class=\"elimore_trim elimore-hide\">").concat(fullHtml, "</span>\n    ");
    el.appendChild(more_btn);
  };
  var _toggle_ellipsis = function _toggle_ellipsis() {
    el.querySelector(".elimore_preview").classList.toggle("elimore-hide");
    el.querySelector(".elimore_trim").classList.toggle("elimore-hide");
    el.querySelector(".elimore_show").classList.toggle("elimore-hide");
  };
  ellipsis();
  return {
    options: options,
    ellipsis: ellipsis,
    _toggle_ellipsis: _toggle_ellipsis
  };
};
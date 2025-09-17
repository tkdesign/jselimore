function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var jsElimore = function jsElimore(selector) {
  var newOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var defaultOptions = {
    maxLength: 130,
    moreText: "..."
  };
  var options = _extends({}, defaultOptions, newOptions);
  if (!document.querySelector('style#elimore-styles')) {
    var style = document.createElement('style');
    style.id = 'elimore-styles';
    style.textContent = " .elimore-hide { display: none; } .elimore_show { cursor: pointer; } ";
    document.head.appendChild(style);
  }
  var el = context.querySelector(selector);
  var _ellipsis = function _ellipsis() {
    if (!el) {
      return;
    }
    var fullTxt = el.textContent;
    if (fullTxt === undefined || !fullTxt.length) {
      return;
    }
    var fullHtml = el.innerHTML;
    var text_one = fullTxt.slice(0, options.maxLength);
    var more_btn = document.createElement('a');
    more_btn.classList.add('elimore_show');
    more_btn.textContent = options.moreText;
    more_btn.addEventListener('click', _toggle_ellipsis);
    el.innerHTML = "\n      <span class=\"elimore_preview\">".concat(text_one, "</span>\n      <span class=\"elimore_trim elimore-hide\">").concat(fullHtml, "</span>\n    ");
    el.appendChild(more_btn);
  };
  var rebuild = function rebuild() {
    if (!el) {
      return;
    }
    var trimSpan = el.querySelector(".elimore_trim");
    if (trimSpan) {
      var trimSpanContent = trimSpan.innerHTML;
      el.innerHTML = "";
      el.innerHTML = trimSpanContent;
      _ellipsis();
    }
  };
  var _toggle_ellipsis = function _toggle_ellipsis() {
    if (!el) {
      return;
    }
    el.querySelector(".elimore_preview").classList.toggle("elimore-hide");
    el.querySelector(".elimore_trim").classList.toggle("elimore-hide");
    el.querySelector(".elimore_show").classList.toggle("elimore-hide");
  };
  _ellipsis();
  return {
    options: options,
    rebuild: rebuild
  };
};
if (typeof module !== 'undefined') {
  module.exports = jsElimore;
}
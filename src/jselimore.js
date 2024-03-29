const jsElimore = (selector, newOptions = {}, context = document) => {

  const defaultOptions = {
    maxLength: 130,
    moreText: "...",
  };
  const options = Object.assign({}, defaultOptions, newOptions);

  if (!document.querySelector('style#elimore-styles')) {
    const style = document.createElement('style');
    style.id = 'elimore-styles';
    style.textContent = ` .elimore-hide { display: none; } .elimore_show { cursor: pointer; } `;
    document.head.appendChild(style);
  }

  const el = context.querySelector(selector);

  const _ellipsis = () => {
    if (!el) {
      return;
    }
    const fullTxt = el.textContent;
    if (fullTxt === undefined || !fullTxt.length) {
      return;
    }
    const fullHtml = el.innerHTML;
    const text_one = fullTxt.slice(0, options.maxLength);

    const more_btn = document.createElement('a');
    more_btn.classList.add('elimore_show');
    more_btn.textContent = options.moreText;
    more_btn.addEventListener('click', _toggle_ellipsis);

    el.innerHTML = `
      <span class="elimore_preview">${text_one}</span>
      <span class="elimore_trim elimore-hide">${fullHtml}</span>
    `;

    el.appendChild(more_btn);
  };

  const rebuild = () => {
    if (!el) {
      return;
    }
    const trimSpan = el.querySelector(".elimore_trim");
    if (trimSpan) {
      const trimSpanContent = trimSpan.innerHTML;
      el.innerHTML = "";
      el.innerHTML = trimSpanContent;
      _ellipsis();
    }
  };

  const _toggle_ellipsis = () => {
    if(!el) {
      return;
    }
    el.querySelector(".elimore_preview").classList.toggle("elimore-hide");
    el.querySelector(".elimore_trim").classList.toggle("elimore-hide");
    el.querySelector(".elimore_show").classList.toggle("elimore-hide");
  };

  _ellipsis();

  return {
    options,
    rebuild
  };
};

if (typeof module !== 'undefined') {
  module.exports = jsElimore;
}
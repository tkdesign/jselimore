const jsElimore = (selector, newOptions = {}, context = document) => {

  const defaultOptions = {
    maxLength: 130,
    moreText: "...",
  };
  const options = Object.assign({}, defaultOptions, newOptions);

  if (!document.querySelector('style#elimore-styles')) {
    const style = document.createElement('style');
    style.id = 'elimore-styles';
    style.innerText = ` .elimore-hide { display: none; } .elimore_show { cursor: pointer; } `;
    document.head.appendChild(style);
  }

  const el = context.querySelector(selector);

  const ellipsis = () => {
    const fullTxt = el.innerText;
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

  const _toggle_ellipsis = () => {
    el.querySelector(".elimore_preview").classList.toggle("elimore-hide");
    el.querySelector(".elimore_trim").classList.toggle("elimore-hide");
    el.querySelector(".elimore_show").classList.toggle("elimore-hide");
  };

  ellipsis();

  return {
    options,
    ellipsis,
    _toggle_ellipsis,
  };
};

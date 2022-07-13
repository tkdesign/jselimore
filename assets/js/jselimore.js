const jsElimore = function (selector, context = document) {
    let el = context.querySelector(selector);
    const options = {
        maxLength: 130,
        moreText: "More View",
    };

    return {
        options,
        init(newOptions) {
            this.lengthText = el.innerText.length;
            Object.assign(this.options, newOptions);
            if (this.lengthText >= this.options.maxLength) {
                this.ellipsis();
            }
            return this;
        },
        ellipsis(opts) {
            let fullTxt = el.innerText,
                fullHtml = el.innerHTML,
                text_one = fullTxt.substr(0, this.options.maxLength),
                more_btn = '<a href="javascript:;" class="elimore_show">' + this.options.moreText + '</a>';
            el.innerHTML = '';
            el.insertAdjacentHTML('afterBegin', '<span class="elimore_preview">' + text_one + '</span><span class="elimore_trim elimore-hide">' + fullHtml + '</span>' + more_btn);
            this._toggle_ellipsis();
        },
        _toggle_ellipsis() {
            let show_btn = el.querySelector('.elimore_show');
            show_btn.addEventListener('click', function (evt) {
                evt.preventDefault();
                evt.stopImmediatePropagation();
                el.querySelector('.elimore_preview').classList.toggle('elimore-hide');
                el.querySelector('.elimore_trim').classList.toggle('elimore-hide');
                el.querySelector('.elimore_show').classList.toggle('elimore-hide');
                return false;
            });
        },
    }
};
(function () {
    var fontSizeAdjustHeight = function (arg) {
        var dom = arg.dom;
        var size = arg.fontSize || '';
        var limitHeight = arg.limitHeight;
        var limitLine = arg.limitLine;
        var limitH;
        if (!dom) {
            console.error('fontSizeAdjustHeight: not set dom');
            return;
        }
        if (!limitHeight && !limitLine) {
            console.error('fontSizeAdjustHeight: not set limitHeight or limitLineHeight');
            return;
        }
        if (limitHeight && limitLine) {
            console.error('fontSizeAdjustHeight: only set one of limitHeight or limitLineHeight');
            return;
        }
        var style = window.getComputedStyle(dom);

        if (!size) {
            size = style.fontSize.replace('px', '');
        }
        if (limitLine) {
            limitH = limitLine * lineHeight(dom);
        }
        if (limitHeight) {
            limitH = limitHeight;
        }
        console.log(dom.offsetHeight, limitH);

        render(dom.offsetHeight);

        function render(h) {
            if (h > limitH && size > 12) {
                size--;
                dom.style.fontSize = size + 'px';
                var style = window.getComputedStyle(dom);
                var newHeight = parseFloat(style.height.replace('px', ''));
                return render(newHeight);
            } else {
                dom.style.opacity = 1;
            }
        }
    }

    var fontSizeAdjustWidth = function (arg) {
        var dom = arg.dom;
        var size = arg.fontSize || '';
        var limitWidth = arg.limitWidth;
        var limitH;
        if (!dom) {
            console.error('fontSizeAdjustWidth: not set dom');
            return;
        }
        if (!limitWidth) {
            console.error('fontSizeAdjustWidth: not set limitWidth');
            return;
        }
        var style = window.getComputedStyle(dom);

        if (!size) {
            size = style.fontSize.replace('px', '');
        }
        if (limitWidth) {
            limitH = limitWidth;
        }
        console.log(dom.offsetWidth, limitH);

        render(dom.offsetWidth);

        function render(h) {
            if (h > limitH && size > 12) {
                size--;
                dom.style.fontSize = size + 'px';
                var style = window.getComputedStyle(dom);
                var newWidth = parseFloat(style.width.replace('px', ''));
                return render(newWidth);
            } else {
                dom.style.opacity = 1;
            }
        }
    }
    window.fontSizeAdjustWidth = fontSizeAdjustWidth;
    window.fontSizeAdjustHeight = fontSizeAdjustHeight;
})();

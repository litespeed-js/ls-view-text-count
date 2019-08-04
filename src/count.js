(function (window) {
    "use strict";

    window.ls.view.add(
        {
            selector: 'data-ls-text-count',
            repeat: false,
            controller: function (element) {
                let counter = document.createElement('span');

                counter.className = 'ls-view-text-count';

                element.parentNode.insertBefore(counter, element.nextSibling);

                var count = function () {
                    let max = parseInt(element.getAttribute('maxlength'));
                    
                    if (0 <= max) {
                        counter.textContent = (max - element.value.length).toString() + ' / ' + max;
                    }
                    else {
                        let words = (element.value !== '') ? element.value.trim().split(' ').length : 0;
                        counter.textContent = words + ' words and ' + element.value.length.toString() + ' chars';
                    }
                };

                element.addEventListener('keyup', count);
                element.addEventListener('change', count);
                element.addEventListener('cut', count);
                element.addEventListener('paste', count);
                element.addEventListener('drop', count);

                count();
            }
        }
    );

})(window);
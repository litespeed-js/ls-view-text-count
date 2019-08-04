// __tests__/displayUser-test.js
'use strict';

require('litespeed.js');
require('ls-view-text-count');

test('counter with maxlength', () => {
    expect(function () {
        document.body.innerHTML = `
            <input type="text" value="Hello World!" maxlength="20" data-ls-text-count />
        `;

        window.ls.run(window);

        return document.body.innerHTML.trim();
    }()).toEqual('<input type="text" value="Hello World!" maxlength="20"><span class="ls-view-text-count">8 / 20</span>');
});

test('counter without maxlength', () => {
    expect(function () {
        document.body.innerHTML = `
            <input type="text" value="Hello World!" data-ls-text-count />
        `;

        window.ls.run(window);

        return document.body.innerHTML.trim();
    }()).toEqual('<input type="text" value="Hello World!"><span class="ls-view-text-count">2 words and 12 chars</span>');
});
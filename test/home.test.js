import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Box from "../src/components/box";

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('should renders homepage', () => {
    act(() => {
        render(<Box />, container);
    });
    expect(
        container.querySelector(".linkToPage").getAttribute("href").toEqual("https://goodboost.org/good-boost-sessions")
    )
});

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from '../controls/Controls'

// Test away!

// ### Controls Component

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

test("provide buttons to toggle the `closed` and `locked` states", async() =>{
    const wrapper = rtl.render(<Controls />);
    const button = wrapper.container.lastElementChild.querySelector('button')
    
    rtl.act(() => {
        expect(rtl.fireEvent.click(button)).toBeTruthy();
    })

    expect(button.className).toBe('toggle-btn');
    expect(wrapper).toBeTruthy();
})

test("buttons' text changes to reflect the state the door will be in if clicked", async() => {
    const wrapper = rtl.render(<Controls />);
    const button = wrapper.container.lastElementChild.querySelector('button');

    rtl.act(() =>{
        rtl.fireEvent.click(button)
    })
    expect(button.textContent).toBe('Lock Gate' || 'Unlock Gate')
})

test("the closed toggle button is disabled if the gate is locked", async() => {
    const wrapper = rtl.render(<Controls />);
    const button = wrapper.container.lastElementChild.querySelectorAll('button')[1];

    rtl.act(() =>{
        rtl.fireEvent.click(button)
    })
    expect(button.disabled).not.toBeTruthy()
})

test("the locked toggle button is disabled if the gate is open", async() => {
    const wrapper = rtl.render(<Controls />);
    const button = wrapper.container.lastElementChild.querySelectorAll('button')[0];

    rtl.act(() =>{
        rtl.fireEvent.click(button)
    })
    expect(button.disabled).toBeTruthy();
})
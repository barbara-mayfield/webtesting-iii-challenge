import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';
import Controls from '../controls/Controls'

// ### Display Component

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

// Test away!

afterEach(rtl.cleanup);

test("Display component gate open/closed, locked/unlocked", async() => {
    const wrapperDisplay = rtl.render(<Display />);
    const wrapperControls = rtl.render(<Controls/>);
    const locked = wrapperDisplay.getByText(/locked/i)
    const unlocked = wrapperDisplay.getByText(/unlocked/i)
    const open = wrapperDisplay.getByText(/open/i)
    const closed = wrapperDisplay.getByText(/close/i)
    
    expect(unlocked).toBeInTheDocument();
    expect(open).toBeInTheDocument();
    
    rtl.act(() => {
        rtl.fireEvent.click(wrapperControls.queryByText(/Lock Gate/i));
        rtl.fireEvent.click(wrapperControls.queryByText(/Close Gate/i));
    })

    expect(locked).toBeVisible()
    expect(closed).toBeVisible()
})
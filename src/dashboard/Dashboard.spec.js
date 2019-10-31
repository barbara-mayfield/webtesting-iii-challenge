import React from 'react';
import * as rtl from '@testing-library/react'

import Dashboard from './Dashboard'

//### Dashboard

// - shows the controls and display
// Test away

test("Displays controls and display", () => {
    const wrapper = rtl.render(<Dashboard />)
    expect(wrapper.baseElement).toMatchSnapshot()
})

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Hamburger from '../header/Hamburger.vue';

// Mock the dependencies
const useNav = {
  openNav: jest.fn(),
};
const useBackdrop = {
  openBackdrop: jest.fn(),
};

describe('AppHeader', () => {
  it('should open navigation and backdrop when the button is clicked', async () => {
    const wrapper = mount(Hamburger);

    // Find the button and click it
    const button = wrapper.find('button');
    await button.trigger('click');

    // Check if openNav and openBackdrop were called
    expect(wrapper.vm.$useNav.openNav).toHaveBeenCalled();
    expect(wrapper.vm.$useBackdrop.openBackdrop).toHaveBeenCalled();
  });
});

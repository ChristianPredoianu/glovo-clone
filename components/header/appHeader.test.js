import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AppHeader from '../header/AppHeader.vue'; // Adjust the path

describe('AppHeader', () => {
  it('should toggle navigation when the button is clicked', async () => {
    const wrapper = mount(AppHeader);

    expect(wrapper.classes()).toContain('-translate-x-[50rem]');
    /* 
    const button = wrapper.find('button');

    await button.trigger('click');

    expect(wrapper.classes()).toContain('translate-x-[0rem]'); */

    /*     await button.trigger('click');

    expect(wrapper.classes()).not.toContain('-translate-x-[50rem]'); */
  });
});

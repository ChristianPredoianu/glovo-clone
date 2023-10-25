/*  import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AppHeader from '../header/AppHeader.vue';

describe('AppHeader', () => {
  it('should toggle navigation when the button is clicked', async () => {
    const wrapper = mount(AppHeader);

    expect(wrapper.vm.isNavOpen).toBe(false);

    const button = wrapper.find('button');
    await button.trigger('click');

    expect(wrapper.vm.isNavOpen).toBe(true);

    const navListDiv = wrapper.find('.nav-list-div');
    expect(navListDiv.classes()).toContain('translate-x-[0rem]');

    await button.trigger('click');

    expect(wrapper.vm.isNavOpen).toBe(false);
    expect(navListDiv.classes()).toContain('-translate-x-[50rem]');
  });
});
 
 */

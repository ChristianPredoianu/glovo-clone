// Hamburger.test.ts
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import Hamburger from '../header/Hamburger.vue';

describe('Hamburger Component Test', () => {
  it('renders the Hamburger button', async () => {
    const wrapper = mount(Hamburger);

    /*    const button = wrapper.find('button');
    expect(button).not.toBeNull();  */
    /*  const button = wrapper.find('button');
    expect(button).not.toBeNull(); */
  });

  /*   it('opens the navigation when the button is clicked', async () => {

    const { container } = mount(Hamburger);


    await render(Hamburger, container);


    const button = container.querySelector('.block button');

 
    button.click();



    const navigation = container.querySelector('.your-navigation-element-selector');
    expect(navigation).not.toBeNull();
  }); */
});

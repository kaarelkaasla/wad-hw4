import {mount} from "@vue/test-utils";
import Footer from "../../src/components/Footer";

describe('Footer', () => {
    const wrapper = mount(Footer);

    it('Changes "open" property to true when button is clicked', () => {
        wrapper.find('span').trigger('click');
        expect(wrapper.vm.$data.open).toBe(true)
    })
});
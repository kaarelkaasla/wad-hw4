import {mount} from '@vue/test-utils';
import List from '../../src/components/List.vue';

describe('List', () => {
    const wrapper = mount(List);
    it('Checks if empty List component displays "Add your first Todo task"', () => {
        expect(wrapper.html()).toContain("Add your first Todo task");
    })
});
import {mount} from '@vue/test-utils';
import List from '../../src/components/List.vue';

describe('List', () => {
    const testData = [
        {
            id: 1,
            title: 'Foo',
            done: false
        }, {
            id: 2,
            title: 'Bar',
            done: true
        }];

    it('Checks if empty List component displays "Add your first Todo task"', () => {
        const wrapper = mount(List);
        expect(wrapper.html()).toContain("Add your first Todo task");
    });

    it('Updates the item correctly when marked as done', () => {
        const wrapper = mount(List, {
            propsData: {
                list: testData
            }
        });

        for (let i = 0; i < wrapper.props().list.length; i++) {
            let before = wrapper.props().list[i].done;
            wrapper.find('.list-item:nth-of-type(' + (i + 1) + ') span').trigger('click');
            expect(wrapper.props().list[i].done).toBe(!before);
        }
    })
});
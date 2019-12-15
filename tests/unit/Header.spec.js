import {mount} from '@vue/test-utils';
import Header from '../../src/components/Header.vue';

describe('Header', () => {
    const wrapper = mount(Header);
    it('Checks if the Header component displays the correct date', () => {
        let today = new Date();

        let date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date);

        let day = today.getDay();
        let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        expect(wrapper.html()).toContain(dayNames[day].toUpperCase());

        let month = today.getMonth();
        let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        expect(wrapper.html()).toContain(monthNames[month].substring(0, 3).toUpperCase())

        let year = today.getFullYear();
        expect(wrapper.html()).toContain(year)
    });
});
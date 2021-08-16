import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './view/form';
import currencyUI from './view/currency';

document.addEventListener('DOMContentLoaded', () => {

    initApp();

    formUI.form.addEventListener('submit', (e) => {
        e.preventDefault();
        onFormSubmit();
    });

    async function initApp() {
        await locations.init();
        formUI.setAutocompleteData(locations.shortCitiesList);
    }

    async function onFormSubmit() {
        const origin = locations.getCityCodeByKey(formUI.originValue),
            destination = locations.getCityCodeByKey(formUI.destinationValue),
            depart_date = formUI.departDateValue,
            return_date = formUI.returnDateValue,
            currency = currencyUI.currencyValue;
        console.log(origin, destination, depart_date, return_date);

        await locations.fetchTickets({
            origin, 
            destination, 
            depart_date, 
            return_date, 
            currency,
        })
    }
})
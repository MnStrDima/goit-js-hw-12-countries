import './styles.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import 'material-design-icons/iconfont/material-icons.css';

import { CountriesQuery } from './js/CountriesDetails';

// const refs = {
//   input: document.querySelector('.main__input'),
//   section: document.querySelector('.template__container'),
// };

const queryCountry = new CountriesQuery({
  input: '.main__input',
  section: '.template__container',
});

queryCountry.init();

// refs.input.focus();
// refs.input.addEventListener('input', debounce(onInput, 500));

// function render(htmlString, delay = 250) {
//   setTimeout(() => {
//     refs.section.innerHTML = htmlString;
//   }, delay);
// }

// function createCountriesListMarkup(country) {
//   render(countryQueryList(country));
//   onNotify(
//     'This is a list of countries you could be looking for.',
//     'info',
//     'Choose one!',
//   );
// }

// function createOneCountryMarkup(country) {
//   render(countryQuery(country));
//   onNotify(
//     'Your request have been succesfully done! This is country you have searched.',
//     'info',
//     'Congratulations!',
//   );
// }

// function onDataReceived(data) {
//   if (data.status === 404) {
//     onNotify(`${data.message}`, 'error', data.status);
//     return;
//   }
//   if (data.hasOwnProperty('name')) {
//     createOneCountryMarkup(data);
//     return;
//   }
//   if (data.length > 10) {
//     onNotify(
//       `Too many countries found: ${data.length}. Please enter a more specific query!`,
//       'error',
//       'ERROR',
//     );
//     return;
//   }
//   if (data.length === 1) {
//     createOneCountryMarkup(data[0]);
//     return;
//   }
//   createCountriesListMarkup(data);
// }

// function onInput(event) {
//   const countryName = event.target.value.trim();
//   if (countryName === '') {
//     return;
//   }
//   fetchCountries(countryName).then(onDataReceived).catch(console.log);
// }

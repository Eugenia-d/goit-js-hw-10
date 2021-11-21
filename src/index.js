import './css/styles.css';
import _ from 'lodash';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchBox = document.getElementById('search-box');

searchBox.addEventListener(
  'input',
  _.debounce(event => {
    const search = event.target.value.trim();

    fetchCountries(search)
      .then(data => {
        onDataReceived(data);
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops there is no country with that name');
      });
  }, DEBOUNCE_DELAY),
);

const onDataReceived = array => {
  if (array.length && array.length > 1) {
    renderList(array);
  } else if (array.length == 1) {
    renderCountry;
  }
};

const renderList = array => {
  console.log('rendering list: ', array);
};

const renderCountry = data => {
  console.log('rendering country: ', data);
};

import './test.css';
import Tooltip from './ui-js/tooltip';
import Dropdown from './ui-js/dropdown';
import Tabs from './ui-js/tabs';
import Snackbar from './ui-js/snackbar';

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown =>{
    const instance = new Dropdown(dropdown);
    instance.init();
})

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();
const button = document.querySelector('button');
button.addEventListener('click', () => {
 snackbar.show('you clicked me');
});
console.log('index.js file');

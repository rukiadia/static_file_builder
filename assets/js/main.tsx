import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ListComponentsWrap from './ListComponentWrapper';

const partiesWrapper = document.querySelector('#wrapper');

if (partiesWrapper) {
    ReactDOM.render(<ListComponentsWrap/>, partiesWrapper);
}

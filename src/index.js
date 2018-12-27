import React from 'react';
import ReactDOM from 'react-dom';
import { withI18n } from 'react-i18next';
import './i18n';

import App from './App.jsx';

const LocalizedApp = withI18n()(App);

ReactDOM.render(<LocalizedApp />, document.getElementById('root'));
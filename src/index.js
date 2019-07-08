import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'emerald-ui/lib/styles.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Progressbar from 'emerald-ui/lib/Progressbar';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Suspense fallback={<Progressbar continuos />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

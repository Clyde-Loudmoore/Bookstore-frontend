import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from 'ui/containers/theme';
import { GlobalStyles } from './ui/containers/GlobalStyles';
import App from './App';

import store from './store';
import reportWebVitals from './reportWebVitals';

import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();

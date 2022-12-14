import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favorites-context';
//import {createRoot} from 'react-dom/client';


/* const container = document.createElement('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
 */


ReactDOM.render(
<FavoritesContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</FavoritesContextProvider>,
document.getElementById('root'));

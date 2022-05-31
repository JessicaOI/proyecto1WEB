
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import Carrusel from './components/Carrusel.jsx';

const App = () =>{
    return(
        <>
            <Carrusel/>
        
        </>
    )

}

const root = ReactDOMClient.createRoot(
    document.getElementById('app')
);

root.render(
    <App />
)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import esriConfig from "@arcgis/core/config";

esriConfig.apiKey = "AAPKf1599745e9024d9396b3bddbe87b3a1fr2B9HbZYST87PjBwi8Ig6bkG-vuFsNpX-s_GqLw1_DKD4dzf8fjD0cizqg-Hl8IG";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

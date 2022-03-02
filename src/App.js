import './App.css';
import 'cross-fetch/polyfill';
import React from "react";
import Search from "./components/Search";
import Map from "./components/Map";


function App() {
    return (
        <div className={'app d-flex'}>
            <Map />
            <Search />
        </div>
    );
}

export default App;

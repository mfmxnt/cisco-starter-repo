import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="One"></Exhibit>
                <Exhibit name="Two"></Exhibit>
                <Exhibit name="Three"></Exhibit>
                <IPContainer ipv6={false} /> {/* Display IPv4 address */}
                <IPContainer ipv6={true} />  {/* Display IPv6 address */}
            </div>
        );
    }
}

export default App;

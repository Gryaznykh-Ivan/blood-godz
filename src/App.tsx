import React from 'react'; 

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Index from './pages/Home';
import Premium from './pages/Premium';
import Lobby from './pages/Lobby';
import Group from './pages/Group';
import Skins from './pages/Skins';
import Top from './pages/Top';

export default function App() {
    return (
        <div className="relative font-sans flex flex-col min-h-screen bg-mainBlack overflow-hidden">
            <Header />
            <div className="flex-grow">
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/lobby" component={Lobby} />
                    <Route path="/top" component={Top} />
                    <Route path="/premium" component={Premium} />
                    <Route path="/group" component={Group} />
                    <Route path="/skins" component={Skins} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
};
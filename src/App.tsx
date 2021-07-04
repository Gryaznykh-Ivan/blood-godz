import React from 'react'; 

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages';
import Premium from './pages/Premium/Premium';
import Lobby from './pages/Lobby/Lobby';
import Group from './pages/Group/Group';
import Skins from './pages/Skins/Skins';
import MarketSkins from './pages/Market/Skins';
import MarketHacks from './pages/Market/Hacks';
import MarketHack from './pages/Market/Hack';
import Top from './pages/Top/Top';
import PrivacyPolicy from './pages/General/PrivacyPolicy';
import MiniGames from './pages/MiniGames/MiniGames';




export default function App() {
    return (
        <div className="relative font-sans flex flex-col min-h-screen bg-mainBlack overflow-hidden">
            <Header />
            <div className="flex-grow">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/lobby" component={Lobby} />
                    <Route path="/top" component={Top} />
                    <Route path="/premium" component={Premium} />
                    <Route path="/group" component={Group} />
                    <Route path="/skins" component={Skins} />
                    <Route path="/market/hacks/:id" component={MarketHack} />
                    <Route path="/market/skins" component={MarketSkins} />
                    <Route path="/market/hacks" component={MarketHacks} />
                    <Route path="/mini-games" component={MiniGames} />
                    <Route path="/privacy-policy" component={PrivacyPolicy} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
};
import React from 'react'; 

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Index from './pages/Home';
import Premium from './pages/Premium';
import Setting from './pages/Setting';
import Personal from './pages/Personal';

import SideBar from './components/SideBar/SideBar';
import Faq from './pages/Faq';
import Contacts from './pages/Contacts';
import Lobby from './pages/Lobby';

export default function App() {
    return (
        <div className="font-sans flex flex-col min-h-screen bg-mainBlack">
            <Header />
            <div className="flex-grow container mx-auto">
                <Switch>
                    <Route exact path="/" component={ Index } />
                    <Route path="/premium" component={ Premium } />
                    <Route path="/setting" component={ Setting } />
                    <Route path="/faq" component={ Faq } />
                    <Route path="/personal" component={ Personal } />
                    <Route path="/contacts" component={ Contacts } />
                    <Route path="/lobby" component={ Lobby } />
                </Switch>
            </div>
            <SideBar />
            <Footer />
        </div>
    );
};
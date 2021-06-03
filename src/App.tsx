import React from 'react'; 

import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';

import Index from './pages/index';
import Premium from './pages/premium';

export default function App() {
    return (
        <div className="w-full h-screen bg-mainBlack pt-24">
            <div className="flex flex-col h-full ">
                <div className="flex-1 container mx-auto">
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/premium" component={Premium} />
                    </Switch>
                </div>
                <Footer/>
            </div>
        </div>
    );
};
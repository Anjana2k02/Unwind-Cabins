import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import LoginPopup from './components/LoginPopup/LoginPopup';
import CabinCards from './components/Cabincards/Cabincards';
import Inspiration from './components/Inspiration/Inspiration';
import Experience from './components/Experience/Experience';
import Findcabin from './components/FindCabin/Findcabin';
import Faq from './components/FAQ/Faq';
import Video from './components/Video/Video';
import Footer from './components/Footer/Footer';
import Escape from './components/Escape/Escape';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
            <div className="app">
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <CabinCards/>
                <Inspiration/>
                <Experience/>
                <Video/>
                <Findcabin/>
                <Faq/>
                <Escape/>
                
                <Footer/>
            </div>
            
            
        </>
    );
};

export default App;

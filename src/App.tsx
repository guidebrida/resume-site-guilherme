import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Router>
            <div className="App">
                <Header />
                <Footer />
                <div className="content">
                    <Routes>
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>

            </div>
        </Router>
    );
};

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('welcome')}</h1>
            <p>{t('app_description')}</p>
        </>
    );
};

export default App;

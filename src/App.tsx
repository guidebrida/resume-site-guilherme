import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Curriculum from './components/Curriculum/Curriculum';
import Footer from './components/Footer/Footer';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/resume" element={<Curriculum />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

const Home: React.FC = () => {
    const { t, i18n } = useTranslation();

    const videoUrl =
        i18n.language === 'pt'
            ? 'https://youtu.be/NvF5KFt9-7o'
            : 'https://youtu.be/NvF5KFt9-7o';

    const skills = [
        'Java', 'Spring Boot', 'Angular', 'React', 'SQL',
        'PostgreSQL', 'Kotlin', 'Git', 'REST APIs', 'Apache Kafka',
        'JWT', 'Ionic', 'Ant Design', 'C++'
    ];

    return (
        <>
            <h1>{t('MSG_GUILHERME')}</h1>
            <div className="skills">
                {skills.map(skill => (
                    <span key={skill} className="badge">{skill}</span>
                ))}
            </div>
            <div className="about-me">
                <h2>{t('about_me_title')}</h2>
                <p>{t('about_me_description')}</p>
            </div>

            <div className="presentation">
                <div className="react-player-wrapper">
                    <ReactPlayer
                        url={videoUrl}
                        className="react-player"
                        controls
                    />
                </div>
                <p>
                    <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                    </a>
                </p>
            </div>
        </>
    );
};

export default App;

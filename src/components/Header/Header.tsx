import React, { useState } from 'react';
import { Breadcrumb, Button, Layout, Menu, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Header.css';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const changeLanguage = (checked: boolean) => {
        i18n.changeLanguage(checked ? 'en' : 'pt');
    };

    const options = [
        { label: <Link to="/">{t('home')}</Link>, key: 'home' },
        { label: <Link to="/projects">{t('projects')}</Link>, key: 'projects' },
        { label: <Link to="/resume">{t('curriculum')}</Link>, key: 'curriculum' }
    ];

    return (
        <Layout>
            <AntHeader className="header-container">
                <Menu mode="horizontal" items={options} className="menu" />
                <div className="language-button-container">
                    <Button type="link" onClick={showModal} className="black-text-button">
                        {t('language-selector-button')}
                    </Button>
                </div>
            </AntHeader>
            <Modal
                title={t('language-selector-button')}
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Menu>
                    <Menu.Item key="en" onClick={() => changeLanguage(true)}>
                        English
                    </Menu.Item>
                    <Menu.Item key="pt" onClick={() => changeLanguage(false)}>
                        Português
                    </Menu.Item>
                </Menu>
            </Modal>
        </Layout>
    );
};

export default Header;

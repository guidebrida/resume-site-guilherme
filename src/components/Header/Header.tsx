import React, { useState } from 'react';
import { Menu, Modal, Button, Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Header.css';

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

    return (
        <div className="header-container">
            <div className="header-content">
                <Menu mode="horizontal" className="header-menu">
                    <Menu.Item key="home">
                        <Link to="/">{t('home')}</Link>
                    </Menu.Item>
                    <Menu.Item key="contact">
                        <Link to="/contact">{t('contact')}</Link>
                    </Menu.Item>
                    <Menu.Item key="projects">
                        {t('projects')}
                    </Menu.Item>
                    <Menu.Item key="curriculum">
                        <Link to={"/resume"}>{t('curriculum')}</Link>
                    </Menu.Item>
                </Menu>
                <Button onClick={showModal}>
                    {t('language-selector-button')}
                </Button>
                <Modal
                    title={t('language-selector-button')}
                    visible={isModalVisible}
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
            </div>
        </div>
    );
};

export default Header;

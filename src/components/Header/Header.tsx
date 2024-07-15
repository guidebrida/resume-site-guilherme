import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const menu = (
        <Menu>
            <Menu.Item key="en" onClick={() => changeLanguage('en')}>
                English
            </Menu.Item>
            <Menu.Item key="pt" onClick={() => changeLanguage('pt')}>
                Português
            </Menu.Item>
        </Menu>
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', alignItems: 'center', backgroundColor: '#f0f2f5', borderBottom: '1px solid #e8e8e8' }}>
            <Menu mode="horizontal" style={{ flex: 1 }}>
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
                    {t('curriculum')}
                </Menu.Item>
            </Menu>
            <Dropdown overlay={menu} placement="bottomRight">
                <Button>
                    {t('language')} <DownOutlined />
                </Button>
            </Dropdown>
        </div>
    );
};

export default Header;

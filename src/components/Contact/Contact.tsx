// src/components/Contact.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('contact_information')}</h2>
            <p>{t('insert_details')}</p>
        </div>
    );
};

export default Contact;

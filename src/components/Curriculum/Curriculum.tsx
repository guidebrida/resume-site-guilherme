import React from 'react';
import { Timeline, Collapse, Image, Button } from 'antd';
import { CaretRightOutlined, DownloadOutlined  } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import internPhoto from '../../images/estagio contratação.jpg';

const { Panel } = Collapse;

const Curriculum: React.FC = () => {
    const { t, i18n } = useTranslation();

    const handleDownload = (fileName: string) => {
        const fileId = fileName === 'resume-en.pdf' ? '1nXYiuuYYoRpQPPZw7ZVIJmS1GMHeQwtJ' : '1OBsdONzhI18nT0-Yim6A4bxuJZsPl4OI';
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        window.open(downloadUrl, '_blank');
    };

    const resumeFileName = i18n.language === 'en' ? 'resume-en.pdf' : 'resume-pt.pdf';

    return (
        <div className="curriculum">
            <h2>{t('curriculum')}</h2>
            <Timeline mode="left">
                <Timeline.Item label={t('software-enginner')}>
                    <Collapse ghost>
                        <Panel header={<div>{t('job-description')} <CaretRightOutlined/></div>} key="1" showArrow={false}>
                            <p>{t('MSG_SOFTW_1')}</p>
                            <p>{t('MSG_SOFTW_2')}</p>
                            <p>{t('MSG_SOFTW_3')}</p>
                            <p>{t('MSG_SOFTW_4')}</p>
                        </Panel>
                    </Collapse>
                </Timeline.Item>

                <Timeline.Item label={t('MSG_SOFTWARE-ENGINNER-JR')}>
                    <Collapse ghost>
                        <Panel header={<div>{t('job-description')} <CaretRightOutlined/></div>} key="2" showArrow={false}>
                            <p>{t('MSG_SOFTW_1')}</p>
                            <p>{t('MSG_SOFTW_3')}</p>
                            <p>{t('MSG_SOFTW_4')}</p>
                        </Panel>
                    </Collapse>
                </Timeline.Item>

                <Timeline.Item label={t('internship-xp')}>
                    <Collapse ghost>
                        <Panel header={<div>{t('job-description')} <CaretRightOutlined/></div>} key="3" showArrow={false}>
                            <p>{t('MSG_INTERN_1')}</p>
                            <p>{t('MSG_INTERN_2')}</p>
                            <p>{t('MSG_INTERN_3')}</p>
                            <p>{t('MSG_INTERN_4')}</p>
                            <div style={{width: '60%', height: 'auto', marginBottom: '10px'}}><Image
                                src={internPhoto}
                                alt="Internship"
                            /></div>
                        </Panel>
                    </Collapse>
                </Timeline.Item>

                <Timeline.Item label={t('MSG_COMPUTER_TECHNICIAN')}>
                    <Collapse ghost>
                        <Panel header={<div>{t('job-description')} <CaretRightOutlined/></div>} key="4" showArrow={false}>
                            <p>{t('MSG_IT_1')}</p>
                            <p>{t('MSG_IT_2')}</p>
                            <p>{t('MSG_IT_3')}</p>
                        </Panel>
                    </Collapse>
                </Timeline.Item>
            </Timeline>


            <div className="resume-buttons">
                <Button
                    type="primary"
                    onClick={() => handleDownload(resumeFileName)}>
                    {t('download-resume')}
                    <DownloadOutlined className="download-icon" />
                </Button>
            </div>
        </div>
    );
};

export default Curriculum;

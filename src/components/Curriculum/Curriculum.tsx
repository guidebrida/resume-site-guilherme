import React from 'react';
import {Timeline, Collapse, Image} from 'antd';
import {CaretRightOutlined} from '@ant-design/icons';
import {useTranslation} from 'react-i18next';
import internPhoto from '../../images/estagio contratação.jpg';

const {Panel} = Collapse;

const Curriculum: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="curriculum">
            <h2>{t('curriculum')}</h2>
            <Timeline mode="left">
                <Timeline.Item label={t('software-enginner')}>
                    <Collapse ghost>
                        <Panel header={<div>{t('job-description')} <CaretRightOutlined/></div>} key="1"
                               showArrow={false}>
                            <p>{t('MSG_SOFTW_1')}</p>
                            <p>{t('MSG_SOFTW_2')}</p>
                            <p>{t('MSG_SOFTW_3')}</p>
                            <p>{t('MSG_SOFTW_4')}</p>
                        </Panel>
                    </Collapse>
                </Timeline.Item>

                <Timeline.Item label={t('MSG_SOFTWARE-ENGINNER-JR')}>
                    <Collapse ghost>
                        <Panel header={<div>{t('job-description')} <CaretRightOutlined/></div>} key="2"
                               showArrow={false}>
                            <p>{t('MSG_SOFTW_1')}</p>
                            <p>{t('MSG_SOFTW_3')}</p>
                            <p>{t('MSG_SOFTW_4')}</p>
                        </Panel>
                    </Collapse>
                </Timeline.Item>

                <Timeline.Item label={t('internship-xp')}>
                    <Collapse ghost>
                        <Panel header={<div>{t('job-description')} <CaretRightOutlined/></div>} key="3"
                               showArrow={false}>
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
                        <Panel header={<div>{t('job-description')} <CaretRightOutlined/></div>} key="3"
                               showArrow={false}>
                            <p>{t('MSG_IT_1')}</p>
                            <p>{t('MSG_IT_2')}</p>
                            <p>{t('MSG_IT_3')}</p>
                        </Panel>
                    </Collapse>
                </Timeline.Item>
            </Timeline>
        </div>
    );
};

export default Curriculum;

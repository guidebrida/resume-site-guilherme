import React from 'react';
import { Timeline, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Panel } = Collapse;

const Curriculum: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="curriculum">
            <h2>{t('curriculum')}</h2>
            <Timeline mode="alternate">
                <Timeline.Item label={t('software-engineer-xp')}>
                    {t('software-engineer')}
                    <Collapse ghost>
                        <Panel header={t('job-description')} key="1" showArrow={false} extra={<CaretRightOutlined />}>
                                <p>• Criação de aplicações web e mobile utilizando tecnologias como Java, JDBC, Spring JavaEE, SQL, Angular, Kotlin, Kafka e Ionic.</p>
                                <p>• Apoio a novos membros da equipe, promovendo o crescimento coletivo e o trabalho em equipe.</p>
                                <p>• Uso de metodologias ágeis como Scrum e Kanban para garantir eficiência e qualidade no desenvolvimento.</p>
                        </Panel>
                    </Collapse>
                </Timeline.Item>

                <Timeline.Item label={t('junior-software-engineer-xp')}>
                    {t('junior-software-engineer')}
                    <Collapse ghost>
                        <Panel header={t('job-description')} key="2" showArrow={false} extra={<CaretRightOutlined />}>
                            <p>{t('junior-software-engineer-details')}</p>
                        </Panel>
                    </Collapse>
                </Timeline.Item>

                <Timeline.Item label={t('internship-xp')}>
                    {t('internship')}
                    <Collapse ghost>
                        <Panel header={t('job-description')} key="3" showArrow={false} extra={<CaretRightOutlined />}>
                            <p>{t('internship-details')}</p>
                        </Panel>
                    </Collapse>
                </Timeline.Item>

                <Timeline.Item label="2023-09-01">{t('event-4')}</Timeline.Item>
            </Timeline>
        </div>
    );
};

export default Curriculum;

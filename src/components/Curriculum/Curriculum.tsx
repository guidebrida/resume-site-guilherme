import React from 'react';
import {Timeline, Collapse} from 'antd';
import {CaretRightOutlined} from '@ant-design/icons';
import {useTranslation} from 'react-i18next';

const {Panel} = Collapse;

const Curriculum: React.FC = () => {

    const {t} = useTranslation();


    return (
        <div className="curriculum">
            <h2>Curriculum</h2>
            <Timeline mode="alternate">
                <Timeline.Item label={t('software-enginner-xp')}>{t('software-enginner')}</Timeline.Item>
                <Collapse ghost>
                    <Panel header={t('job-description')} key="1" showArrow={false} extra={<CaretRightOutlined/>}>
                        <Panel header="Description" key="1" showArrow={true} extra={<CaretRightOutlined/>}>
                            <p>Details of Event 3...</p>
                        </Panel>
                    </Panel>
                </Collapse>
                <Timeline.Item label="2023-09-01">Event 4</Timeline.Item>
            </Timeline>
        </div>
    );
};

export default Curriculum;

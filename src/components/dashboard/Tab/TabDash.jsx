import React from 'react';
import { Tab, TabList, Tabs } from 'react-tabs';
import TabPanel from 'react-tabs/lib/components/TabPanel';
import 'react-tabs/style/react-tabs.css';
import styles from '../../../styles/TabDash.module.css';
import BotSetting from '../BotSetting';
import BotStatistics from '../BotStatistics';
import BotStatus from '../BotStatus';

function TabDash() {
    return (
        <div className="main-container">
            <Tabs className=" px-2 lg:px-0">
                <TabList className="flex flex-col lg:flex-row">
                    <Tab className={`${styles.tabbtn} col-span-12 lg:col-span-4`}>Bot status</Tab>
                    <Tab className={`${styles.tabbtn} col-span-12 lg:col-span-4`}>Bot Settings</Tab>
                    <Tab className={`${styles.tabbtn} col-span-12 lg:col-span-4`}>
                        Bot Statistics
                    </Tab>
                </TabList>
                <TabPanel>
                    <BotStatus />
                </TabPanel>
                <TabPanel>
                    <BotSetting />
                </TabPanel>
                <TabPanel>
                    <BotStatistics />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default TabDash;

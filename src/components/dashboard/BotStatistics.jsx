import React from 'react';
import styles from '../../styles/BotStatistics.module.css';
import LineChart from './Chart/LineChart';

function BotStatistics() {
    return (
        <div className={`${styles.BotStatistics} py-9 lg:p-9 mt-8 rounded-lg `}>
            <div className="main-container">
                <h1 className="font-montserrat font-bold text-2xl mb-6">Stats</h1>
                <div className="stats-container grid grid-cols-12 space-y-8">
                    <div className="top-chart-part col-span-12 grid grid-cols-12 space-x-0 lg:space-x-4 space-y-6">
                        {/* left side line chart */}
                        <div className="col-span-12 lg:col-span-9 rounded-lg">
                            <LineChart />
                        </div>
                        {/* right side chart for hit rate and visitors */}
                        <div className="col-span-12 lg:col-span-3 flex flex-col justify-between space-y-4 rounded-lg">
                            {/* hit rate and visitors */}
                            <div className="hitrate-deal p-6 bg-[#010003] shadow-lg min-h-[50%] -mt-6 rounded-lg mb-5 lg:mb-0">
                                <p>this is hit rate and deal</p>
                            </div>
                            {/* visitors */}
                            <div className="visitor p-6 bg-[#0d0a12] min-h-[50%] rounded-lg my-5 lg:my-0">
                                <p>this is visitors graph</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-chart-part col-span-12 grid grid-cols-12 space-x-0 lg:space-x-6 ">
                        {/* avg sales */}
                        <div className="avg-total-sale bg-[#0c0912] col-span-12 lg:col-span-6 p-4 rounded-lg my-5 lg:my-0">
                            <h6 className="font-semibold text-sm">Average Total Sales</h6>
                        </div>
                        {/* sales report */}
                        <div className="sales-report bg-[#0c0912] col-span-12 lg:col-span-6 p-4 rounded-lg ">
                            <h6 className="font-semibold text-sm">Sales Report</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BotStatistics;

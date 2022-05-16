/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import {
    CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title,
    Tooltip
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart() {
    // const [chart, setChart] = useState({});
    // const baseUrl = 'https://api.coinranking.com/v2/coins';
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const apiKey = 'coinranking41b29f0e96142d5d790d1a8ae4a4aaa259db663eafd092e6';

    // useEffect(() => {
    //     const fetchCoins = async () => {
    //         await fetch(`${proxyUrl}${baseUrl}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'x-access-token': `${apiKey}`,
    //                 'Access-Control-Allow-Origin': '*',
    //             },
    //         })
    //             .then((response) => {
    //                 if (response.ok) {
    //                     response.json().then((json) => {
    //                         console.log(json.data);
    //                         setChart(json.data);
    //                     });
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     };
    //     fetchCoins();
    // }, [baseUrl, proxyUrl, apiKey]);

    // console.log('chart', chart);
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
            label: 'Marketing sales',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Cases sales',
            data: [4, 9, 10, 2, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
        ],
    };
    

    const options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                // beginAtZero: true,
                title: {
                  display: true,
                  text: 'Sales Figures',
                }
              },
          
          },
        legend: {
            labels: {
                fontSize: 25,
            },
        },
    };
    return (
        <div className='bg-[#0d0a14] p-4'>
            <Line data={data} options={options} height={400} />
        </div>
    );
}

export default LineChart;

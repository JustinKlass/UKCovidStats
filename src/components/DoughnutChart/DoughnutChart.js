import React, { useState, useEffect } from 'react';
import {Doughnut} from 'react-chartjs-2';
import Axios from 'axios';
import axios from 'axios';
const data = {
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };
const DoughnutChart = (props) => {
    const [chartData, setChartData] = useState({});
    const getURLs = () => {
        console.log(props)

        const englandRequest = axios.get(props.urls.englandUrl);
        const walesRequest = axios.get(props.urls.walesUrl);
        const scotlandRequest = axios.get(props.urls.scotlandUrl);
        const NIRequest = axios.get(props.urls.NIUrl);
        axios.all([englandRequest, walesRequest, scotlandRequest, NIRequest]).then(axios.spread((...responses) => {
            const englandData = responses[0]
            const walesData = responses[1]
            const scotlandData = responses[2]
            const NIData = responses[3]
            console.log(NIData)

            setChartData({labels: [
                'England',
                'Wales',
                'Scotland',
                'Northern Ireland'
              ],
              datasets: [{
                data: [englandData.data.data[0].cumCasesByPublishDate, walesData.data.data[0].cumCasesByPublishDate, scotlandData.data.data[0].cumCasesByPublishDate, NIData.data.data[0].cumCasesByPublishDate],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#D3D3D3'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#D3D3D3'
                ]
              }]})

        })).catch((errors) => {
            console.log(errors);
        })
    }

    useEffect(() => {
        getURLs()
    }, [])

    return(
        <div style={{height: '700px', width: '50%'}}>
            <Doughnut data={chartData} />
        </div>
    )
}

export default DoughnutChart
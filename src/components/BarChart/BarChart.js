import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
import Axios from 'axios';
import moment from 'moment';

const BarChart = (props) => {
    const [barData, setBarData] = useState({});
    const getData = () => {
      // console.log(props)

        let weekDates = [];
        let caseNums = [];
        Axios.get(props.url).then((response) => {
            console.log(response.data);

            const week = response.data.data.slice(0, 7);

            weekDates = week.map(day => moment(day.date).format("l"))
            caseNums = week.map(day => day.newCases)
            // console.log(weekDates);

            setBarData({
                labels: weekDates,
                datasets: [
                  {
                    label: "# of New Cases in the U.K. in the past week",
                    data: caseNums,
                    borderWidth: 4,
                    backgroundColor: ['rgba(18,46,78, 0.7)'],
                    borderColor: [
                        '#122E4E'
                    ],
                    
                  }
                ]
              }
            )
    
          }).catch((error) => {
            console.log(error);
          })
    }

      useEffect(() => {
          getData()
      }, [])

    return (
        <div className='barChartContainer'style={{height: '600px', width: '55%'}}>
            <Bar 
                data={barData} options={{responsive: true}}
            />
            {/* <h1>{props.url}</h1> */}
        </div>
    )
}

export default BarChart

import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import LineChart from '../../components/LineChart/LineChart';
import Statistics from '../../components/Statistics/Statistics';

import './Wales.css'
const Wales = () => {
   
    const [walesDataUrl, setWalesDataUrl] = useState('https://api.coronavirus.data.gov.uk/v1/data?' +
                                                   'filters=areaType=nation;areaName=wales&' +
                                                   'structure={"date":"date","newCases":"newCasesByPublishDate","cumCasesByPublishDate": "cumCasesByPublishDate", "cumDeaths28DaysByPublishDate": "cumDeaths28DaysByPublishDate"}');

    return(
        <div id='container'>
            <Header area={'Wales'}/>

            <div className='rowDiv'>
                <LineChart url={walesDataUrl} name={'Wales'}/>
                <Statistics url={walesDataUrl}/>
            </div>
            {/* <div className='footer'>

            </div> */}
        </div>
    )
}

export default Wales
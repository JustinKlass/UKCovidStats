import React, { useState } from 'react';
import './England.css'
import Header from '../../components/Header/Header'
import LineChart from '../../components/LineChart/LineChart';
import Statistics from '../../components/Statistics/Statistics';

const England = () => {
   
    const [englandDataUrl, setEnglandDataUrl] = useState('https://api.coronavirus.data.gov.uk/v1/data?' +
                                                   'filters=areaType=nation;areaName=england&' +
                                                   'structure={"date":"date","newCases":"newCasesByPublishDate","cumCasesByPublishDate": "cumCasesByPublishDate", "cumDeaths28DaysByPublishDate": "cumDeaths28DaysByPublishDate"}');

    return(
        <div id='container'>
            <Header area={'England'}/>

            <div className='rowDiv'>
                <LineChart url={englandDataUrl} name={'the U.K.'}/>
                <Statistics url={englandDataUrl}/>
            </div>
    </div>
    )
}

export default England
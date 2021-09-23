import React, { useState } from 'react';
import './Scotland.css'
import Header from '../../components/Header/Header'
import LineChart from '../../components/LineChart/LineChart';
import Statistics from '../../components/Statistics/Statistics';


const Scotland = () => {
    const [scotlandDataUrl, setScotlandDataUrl] = useState('https://api.coronavirus.data.gov.uk/v1/data?' +
                                                   'filters=areaType=nation;areaName=scotland&' +
                                                   'structure={"date":"date","newCases":"newCasesByPublishDate","cumCasesByPublishDate": "cumCasesByPublishDate", "cumDeaths28DaysByPublishDate": "cumDeaths28DaysByPublishDate"}');
    return(
        <div id='container'>
            <Header area={"Scotland"}/>

            <div className='rowDiv'>
                <LineChart url={scotlandDataUrl} name={'Scotland'}/>
                <Statistics url={scotlandDataUrl}/>
            </div>
    </div>
    )
}

export default Scotland
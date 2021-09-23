import React, { useState } from 'react';
import './NorthernIreland'
import Header from '../../components/Header/Header'
import LineChart from '../../components/LineChart/LineChart';
import Statistics from '../../components/Statistics/Statistics';

const NorthernIreland = () => {
   
    const [NIDataUrl, setNIDataUrl] = useState('https://api.coronavirus.data.gov.uk/v1/data?' +
                                                   'filters=areaType=nation;areaName=northern Ireland&' +
                                                   'structure={"date":"date","newCases":"newCasesByPublishDate","cumCasesByPublishDate": "cumCasesByPublishDate", "cumDeaths28DaysByPublishDate": "cumDeaths28DaysByPublishDate"}');

    return(
        <div id='container'>
            <Header area={"Northern Ireland"}/>

            <div className='rowDiv'>
                <LineChart url={NIDataUrl} name={'Northern Ireland'}/>
                <Statistics url={NIDataUrl}/>
            </div>
    </div>
    )
}

export default NorthernIreland
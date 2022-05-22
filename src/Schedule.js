import React from "react"
import styled from "styled-components"
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Time from "./Time";


export default function Schedule ({movieId}){

    movieId = useParams();

    const [scheduleData, setScheduleData] = useState([])
    const [timeData, setTimeData] = useState([])

    useEffect (() => {
        const promise = axios.get (`https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes`)

        promise.then (request =>{
            setScheduleData(request.data.days)
            
            
        })    
    },[] )



    

    return (
            <>
            <SelectTime> Selecione o horário</SelectTime>

            {scheduleData.map((days,index)=> 

                <Date
                scheduleId={days.id}
                weekday={days.weekday}
                date={days.date}
                key={index}
                >{days.weekday} - {days.date} 

                    <Time
                    showtimes={days.showtimes}
                    > 
                    </Time>
                    
                    
                    
                    

                </Date>)}
            
            </>


    )

}


const SelectTime =styled.h1`
width: 100%;
height:110px;
display:flex;
align-items:center;
justify-content: center;
font-size: 24px;
`

const Date = styled.div`
padding: 8px;
`


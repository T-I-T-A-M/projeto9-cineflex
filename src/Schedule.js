import styled from "styled-components"
import axios from "axios";
import { useParams } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import Time from "./Time";



export default function Schedule (){

    const { movieId } = useParams()

    const [scheduleData, setScheduleData] = useState([])
    const [data, setData] = useState([])

    useEffect (() => {
        const promise = axios.get (`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)

        promise.then (request =>{
            setScheduleData(request.data.days)
            setData(request.data)
            
            
        })    
    },[] )



    

    return (
            <>
            <SelectTime> Selecione o horário</SelectTime>

            {scheduleData.map((props,index)=> 

                <Date
                scheduleId={props.id}
                weekday={props.weekday}
                date={props.date}
                key={index}
                >{props.weekday} - {props.date} 

                    
                    <Time
                    showtimes={props.showtimes}
                    > 
                    </Time>
                    
                    
                    
                    

                </Date>)}
            
            <Footer>
                <MovieImage src={data.posterURL}></MovieImage>
                <MovieName> {data.title} </MovieName>
            </Footer>
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
const Footer = styled.div`
position:relative;
bottom:0px;
background-color: #DFE6ED;
width:100%;
height:117px;
display:flex;
align-items: center;
justify-content: flex-start;
`

const MovieImage = styled.img `
background-color: #FFFFFF;
padding:8px;
width:64px;
height:89px;
`

const MovieName = styled.div`
font-size:26px
`

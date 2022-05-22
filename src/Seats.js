import styled from "styled-components"
import axios from "axios";
import { useParams } from 'react-router-dom';
import { React, useState, useEffect } from 'react';


export default function Seats (){

    const { sessionId } = useParams()

    const [seatsData, setSeatsData] = useState([])



    useEffect (() => {
        const promise = axios.get (`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)

        promise.then (request =>{
            setSeatsData(request.data.seats)
            
            
        })    
    },[] ) 


    return (
        <>
        <SelectSeats> Selecione o(s) assento(s) </SelectSeats>
        <RenderSeats>
            {seatsData.map ((props,index) =>
            <RenderSeat
            
            
            >
            {props.name}
                 
            </RenderSeat>
            
            )}



        </RenderSeats>
        </>



    )

}

const SelectSeats = styled.h1 `
width: 100%;
height:110px;
display:flex;
align-items:center;
justify-content: center;
font-size: 24px;
`



const RenderSeats = styled.div`
display:flex;
flex-wrap: wrap;
width: 100%;
`

const RenderSeat = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin: 4px;
margin-bottom: 18px;
width:26px;
height:26px;
border-radius: 50px;
border: #808F9D solid 1px;
color: #000000;
background: #C3CFD9;
`


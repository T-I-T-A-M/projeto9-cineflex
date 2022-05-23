import styled from "styled-components"
import axios from "axios";
import { useParams } from 'react-router-dom';
import { React, useState, useEffect } from 'react';


export default function Seats (){

    const { sessionId } = useParams()

    const [seatsData, setSeatsData] = useState([])
    const [selectedSeat, setSelectedSeat] = useState([])
    let tempSeat =[]

    function selectSeat (seat) {
        console.log(seat)
        
        
        const index = selectedSeat.indexOf(seat)
        console.log(index)

        if (selectedSeat.includes(seat)){
            console.log("removendo repetido")
            selectedSeat.splice(index,1)
        } else {
            tempSeat= [...selectedSeat,seat]
            setSelectedSeat(tempSeat)
        }
 
        console.log(tempSeat)
        console.log(selectedSeat)
    }



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
            props.isAvailable ?
            <RenderSeat
                id={props.id}
                name={props.id}
                onClick={() => selectSeat(props.id)}
                isAvailable={!props.isAvailable}
            >
            {props.name}</RenderSeat>
             :
            <RenderUnavailableSeat
            onClick= {() => props.isAvailable=!props.isAvailable}
            >
                {props.name}
                
            </RenderUnavailableSeat>
            
            
            )}



        </RenderSeats>
        <Legends>
            <LegendIconSelected>
                <LegendText>Selecionado</LegendText>
            </LegendIconSelected>
            <LegendIconAvailable>
                <LegendText>Disponível</LegendText>
            </LegendIconAvailable>
            <LegendIconUnavailable>
                <LegendText>Indisponível</LegendText>
            </LegendIconUnavailable>
        </Legends>

        <Form>
            <FormText>Nome do comprador:</FormText>
            <FormInput placeholder={"zzzz"}></FormInput>
            <FormText>CPF do comprador:</FormText>
            <FormInput placeholder={"zzzz"}></FormInput>
        </Form>



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
border: #7B8B99 solid 1px;
color: #000000;
background: #C3CFD9;
cursor:pointer;
`
const RenderUnavailableSeat = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin: 4px;
margin-bottom: 18px;
width:26px;
height:26px;
border-radius: 50px;
border: #F7C52B solid 1px;
color: #000000;
background: #FBE192;
`

const Legends = styled.div`
display:flex;
width:100%;
height: 30px;
justify-content: space-around;
align-items: center;
`

const LegendIconSelected = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin: 4px;
margin-bottom: 18px;
width:26px;
height:26px;
border-radius: 50px;
border: #1AAE9E solid 1px;
color: #000000;
background: #8DD7CF
`

const LegendIconAvailable = styled.div`
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

const LegendIconUnavailable = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin: 4px;
margin-bottom: 18px;
width:26px;
height:26px;
border-radius: 50px;
border: #F7C52B solid 1px;
color: #000000;
background: #FBE192;
`

const LegendText = styled.div`
margin-top: 55px;
`

const Form = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 95%;
margin-top: 35px;
`

const FormText = styled.p`
font-size: 18px;
color: #293845;
`

const FormInput=styled.input`
border: solid 1px #D4D4D4;
display:flex;
justify-content: center;
align-items: center;
padding: 4px;
color: #AFAFAF;
width: 100%;
height: 48px;
box-sizing: border-box;
`
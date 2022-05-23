import styled from "styled-components"
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { React, useState, useEffect } from 'react';

export default function Seats (){

    const { sessionId } = useParams()

    const [sessionData, setSessionData] = useState([])
    const [movieData, setMovieData] = useState([])
    const [seatsData, setSeatsData] = useState([])
    const [selectedSeat, setSelectedSeat] = useState([])
    const [buyerName, setBuyerName] = useState("")
    const [buyerCPF,setBuyerCPF] =useState("")
    const [select, setSelected] =useState(false)

    const [hour, setHour] = useState("")
    const [date, setDate] = useState("")
    const [movie, setMovie] = useState("")


    

    let tempSeat =[]

    function selectSeat (seat) {
        const index = selectedSeat.indexOf(seat)

        if (selectedSeat.includes(seat)){
            selectedSeat.splice(index,1)
            return setSelected(!select)
        } else {
            tempSeat= [...selectedSeat,seat]
            setSelectedSeat(tempSeat)
            return setSelected(!select)
        }

    }


    function alertAlreadySelected() {
        alert ("Esse assento não está disponível")
    }

    function Book() {
        console.log(selectedSeat, buyerCPF, buyerName)

        
            const post = axios.post (`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`,
            {ids: selectedSeat,
            name:buyerName,
            cpf:buyerCPF}
            )
            



            post.then(() => 
            console.log("deu certo")

            

            )

        
    }



    useEffect (() => {
        const promise = axios.get (`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)

        promise.then (request =>{
            setSeatsData(request.data.seats)
            
            
        })    
    },[] ) 


    return (
        <Main>
        <SelectSeats> Selecione o(s) assento(s) </SelectSeats>
        <RenderSeats>
            {seatsData.map ((props,index) =>
            props.isAvailable ?
            <RenderSeat
                id={props.id}
                name={props.name}
                onClick={() => selectSeat(props.id)}
                key={index}
                select={select}
                isAvailable={props.isAvailable}
                

            >
            {props.name}</RenderSeat>
             :
            <RenderUnavailableSeat
                key={index}
                onClick= {() => alertAlreadySelected()}
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
            <FormInput placeholder={"Digite seu nome..."}
            value={buyerName}
            onChange ={(e) => setBuyerName(e.target.value)}
            
            ></FormInput>
            <FormText>CPF do comprador:</FormText>
            <FormInput placeholder={"Digite seu CPF..."}
            value={buyerCPF}
            onChange ={(e) => setBuyerCPF(e.target.value)}
            
            
            ></FormInput>
        </Form>
            
        <Link to={`/sucess`}>
        <BookSeat
        onClick={ () => Book()}
     
        >Reservar Assento(os)</BookSeat>
        
        </Link>
        </Main>
        



    )

}

const Main =styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


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
background-color: ${props => props.isAvailable ? ( props.select ? "#8DD7CF" : "#C3CFD9") : "black" } ;
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
cursor: not-allowed;
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
background: #8DD7CF;
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

const BookSeat =styled.div`
width:225px;
height:42px;
background-color: #E8833A;
color:white;
margin-bottom: 23px;
margin-top: 23px;
border-radius:3px;
display:flex;
justify-content: center;
align-items: center;
`
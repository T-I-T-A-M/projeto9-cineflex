import React from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';

export default function Sucess ( {
    
    date,
    movie,
    buyerCPF,
    buyerName,
    selectedSeat} ){


    return (
        <Main>
            <SucessRequest> Pedido feito com sucesso!</SucessRequest>
            <Movie>
                {movie} {date}
                Nome do Filme
                Dia e Data
            </Movie>
            
                <bold>Ingressos</bold>
                {selectedSeat.map ((assento)=>
                <Tickets>
                "Assento" assento
                </Tickets> )}
            
            <Buyer>
                <bold>Comprador</bold>
                Nome: {buyerName}
                CPF: {buyerCPF}

            </Buyer>
            <Home> Voltar pra Home</Home>
            </Main>
    )
}

const Main = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const SucessRequest = styled.div`
width:100%;
height: 110px;
display:flex;
justify-content: center;
align-items: center;
`
const Movie = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

const Tickets = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

const Buyer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

const Home = styled.div `
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



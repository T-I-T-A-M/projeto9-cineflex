import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sucess ( {
    
    date,
    movie,
    hour,
    buyerCPF,
    buyerName,
    seatName} ){


    return (
        <Main>
            <SucessRequest> Pedido feito com sucesso!</SucessRequest>
            <Movie>
                <H1>Filme e Sessão</H1>
                <div>{movie}</div>
                <div>{date} {hour}</div>
            </Movie>
                <Tickets>
                <H1>Ingressos</H1>
                {seatName.map ((assento)=>
                
                <div>Assento {assento}</div>
                )}
                </Tickets>
            
            <Buyer>
                <H1> Comprador </H1>
               <BuyerData> 
                <div> Nome: {buyerName} </div>
                <div> CPF: {buyerCPF}</div>
                </BuyerData>
            </Buyer>
            <Link to={`/`}>
            <Home> Voltar pra Home</Home>
            </Link>
            </Main>
    )
}

const Main = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
width:100%;

`
const H1 = styled.div`
font-weight: bold;
font-size:24px;
margin-top:8px;
margin-bottom:8px;
color: #293845;
width:100%;
`




const SucessRequest = styled.div`
width:140px;
height: 110px;
display:flex;
justify-content: center;
align-items: center;
color: #247A6B;
font-size:24px;
`
const Movie = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width:100%;
margin-bottom: 20px;

div {
    font-size:22px;


}
`

const Tickets = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
font-size:22px;
width:100%;
margin-bottom:20px;
`

const Buyer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width:100%;
margin-bottom:20px;
`
const BuyerData=styled.div`
display:flex;
flex-direction: column;

div{
    font-size:22px;
}
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



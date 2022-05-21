import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from "react"
import Movie from "./Movie"

export default function Home () {

const [moviesData, setMoviesData] =useState([])

    


useEffect (() => {
const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

promise.then(request => {
    setMoviesData([...request.data])
    
})

},[]);





    
    return (
        <>
        <Main>
            <SelectMovie> Selecione o Filme</SelectMovie>
            <Movies>
                {moviesData.map((movie,index) => 
                
                <Movie 
                movieId={movie.id}
                title={movie.title}
                url={movie.posterURL}
                overview={movie.overview}
                releaseDate={movie.releaseDate}
                key={index}
                >
                    


                </Movie>
                    ) }
                    
            </Movies>

        </Main>
        

        </>


    )
}

const Main = styled.div `
width:100%;
height:100%;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
box-sizing: border-box;
`

const SelectMovie = styled.h1 `
width: 100%;
height:110px;
display:flex;
align-items:center;
justify-content: center;
font-size: 24px;
`
const Movies = styled.ul `
display:flex;
align-items: center;
justify-content: center;
flex-wrap:wrap;
`
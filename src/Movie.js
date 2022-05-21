import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom';


export default function Movie ({ movieId, title, url, overview, releaseDate, index } ) {







return (
<>
    <Main
    movieId={movieId}
    title={title}
    overview={overview}
    releaseDate={releaseDate}
    key={index}
    
    >


        <MovieImg src={url}></MovieImg>
            
    </Main>
    
</>
    



)



}



const Main = styled.li `
display:flex;
justify-content: center;
align-items: center;
width: 145px;
height: 209px;
box-sizing: border-box;
padding:8px;
box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.1);
border-radius: 3px;
margin: 18px;
`

const MovieImg = styled.img`
width: 129px;
height: 193px;
`
import React from "react"
import styled from "styled-components"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Schedule ({movieId}){

    movieId = useParams();

    const [scheduledata, setScheduleData] =react.useState([])

    useEffect (() => {
        const promise = axios.get (`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)

        promise.then (request =>{
            setScheduleData(...request.data)
        }
            )



    },[] )


    return (



    )

}
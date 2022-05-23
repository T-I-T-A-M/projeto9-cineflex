import styled from "styled-components"
import { Link } from 'react-router-dom';


export default function Time ({ showtimes }) {





    return(
        <TimeBlock>
            {showtimes.map((props,index) =>

                <Link to={`/assentos/${props.id}`}>
                    <Main
                    sessionTime={props.name}
                    sessionId={props.id}
                    key={index}
                    >
                    {props.name}
                    
                    
                    </Main>
                </Link> )
                }

        </TimeBlock>
    )


}


const TimeBlock = styled.div`
display:flex;
`

const Main = styled.div`
width: 83px;
height:43px;
background-color: #E8833A;
color:white;
margin-bottom: 23px;
margin-top: 23px;
margin-right: 8px;
border-radius:3px;
display:flex;
justify-content: center;
align-items: center;
`

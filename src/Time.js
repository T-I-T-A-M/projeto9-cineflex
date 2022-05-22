import styled from "styled-components"

export default function Time ({ showtimes }) {





    return(
        <TimeBlock>
            {showtimes.map((showtime,index) =>
                <Main
                time={showtime.name}
                timeId={showtime.id}
                key={index}
                >
                {showtime.name}
                
                
                </Main> )
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

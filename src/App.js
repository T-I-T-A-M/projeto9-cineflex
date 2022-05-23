import Navbar from "./Navbar"
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Schedule from "./Schedule"
import Seats from "./Seats"
import Sucess from "./Sucess"
import { useState } from "react"

export default function App() {

    const [hour, setHour] = useState("")
    const [date, setDate] = useState("")
    const [movie, setMovie] = useState("")
    const [buyerCPF, setBuyerCPF] =useState("")
    const [buyerName, setBuyerName] =useState("")
    const [selectedSeat, setSelectedSeat] =useState([])




    return (
        <>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="/sessoes/:movieId" element = {<Schedule />} />
                <Route path="/assentos/:sessionId" element = {<Seats />} />
                <Route path="/sucess" element ={<Sucess
                hour={hour}
                date={date}
                movie={movie}
                buyerCPF={buyerCPF}
                buyerName={buyerName}
                selectedSeat={selectedSeat}

                />} />

            </Routes>
        </BrowserRouter>

        </>

    )
}
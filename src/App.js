import Navbar from "./Navbar"
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Schedule from "./Schedule"
import Seats from "./Seats"

export default function App() {


    return (
        <>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="/sessoes/:movieId" element = {<Schedule />} />
                <Route path="/assentos/:sessionId" element = {<Seats />} />
            </Routes>
        </BrowserRouter>

        </>

    )
}
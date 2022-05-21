import Navbar from "./Navbar"
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Schedule from "./Schedule"


export default function App() {


    return (
        <>
        <Navbar />
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/sessoes/:`${id}`" element = {<Schedule />} />
        </Routes>
        </BrowserRouter>

        </>

    )
}
import React from "react"
import Travel from "./components/Travel"
import data from "./data"
import Nav from "./components/Nav"

export default function App() {
    const TravelData = data.map(item => {
        return (
            <Travel 
            item = {item}
            key = {item.id} 
            
            />
        )
    })
    return (
        <div className="container">
             <Nav />
            {TravelData}
        </div>
    )
}
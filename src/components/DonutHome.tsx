import { useState, useEffect } from "react";
import { getAllDonuts } from "../services/DonutService"
import { Link } from "react-router-dom";

export function DonutHome() {
    const [donuts, setDonuts] = useState<any[]>([]);

    useEffect( () => {
        getAllDonuts().then(data => setDonuts(data.results));
    },[])

    return (
        <div>
            <h1>Donuts</h1>
            <ul>
            {  donuts !== undefined && 
                donuts?.map( donut => <li key={donut.id}><Link to={`/donuts/${donut.id}`}>{donut.name}</Link></li>)
            }
            </ul>
        </div>
    )
}
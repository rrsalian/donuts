import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { getDonut } from "../services/DonutDetails";

export function DonutDetails () {
    const id = useParams().id;

    const [donut, setDonut] = useState<any>();

    useEffect( () => {
        getDonut(+id!).then(data => setDonut(data));
    },[id])

    return (
        <div>
            <h1>Donut</h1>
                <h2>Name: {donut?.name}</h2>
                <h2>Calories: {donut?.calories} </h2>
                Extras:
                <ul>
                    {
                        donut?.extras.map((extra: any) => <li>{extra}</li>)
                    }
                </ul>
            
        </div>
    )
}
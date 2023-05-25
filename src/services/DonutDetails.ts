import axios from "axios";

export function getDonut(id: number): Promise<any> {    
    return axios
        .get<any>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`)
        .then(response => response.data);
}
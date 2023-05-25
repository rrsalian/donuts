import axios from "axios";

export function getAllDonuts(): Promise<any> {
    return axios
        .get<any>('https://grandcircusco.github.io/demo-apis/donuts.json')
        .then(response => response.data);
}
import axios from "axios";
import { IPerson } from "../../types/types";


export const fetchPerson = async (id: string, setPerson: (person: IPerson) => void ) => {
    try {
        const response = await axios.get<IPerson>(`http://localhost:4998/persons/${id}`)
        console.log('per', response.data)
        setPerson( response.data )
    } catch (e) {
        console.error
    }
}
import axios from "axios";
import { iContact, teamData } from "../types/interface";


const url = "https://backend.getlinked.ai/hackathon"


// contact
export const contactUs = async (data : iContact) => {
    return await axios.post(`${url}/contact-form`, data)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
} 


// register
export const registerTeam = async (data : teamData) => {
    return await axios.post(`${url}/registration`, data)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
}


import axios from "axios";
import { BASE_URl } from "./Constants";

const instance = axios.create({
    baseURL: BASE_URl,

});


export default instance
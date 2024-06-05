import axios from "axios";
const useAxios = ()=>{
    const dataGet = axios.create({baseURL:"http://localhost:8012/api/"})
    return dataGet;
}
export default useAxios;
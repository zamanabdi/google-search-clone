import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key:'AIzaSyBvmAtSWy6mT0mqWRTrA23GBgljUIyCx48',
    cx:'44903e0a8a8324db1'
}

export const fetchDataFromApi = async(payload) => {
   const {data} = await axios.get(BASE_URL,{
    params:{...params,...payload}
   });
   return data;
};

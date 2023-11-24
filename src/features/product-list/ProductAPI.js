// A mock function to mimic making an async request for data
import axios from "axios";
export function fetchCount(amount = 1) {
  return new Promise(async (resolve) =>{
    const response = await axios.post('http://') 
    const data = await response.json()
    resolve({data})
  }
  );
}

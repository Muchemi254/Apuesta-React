/*import axios from "axios";

async function getData() {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
    params: {
      league: "39",
      season: "2023",
    },
    headers: {
      "X-RapidAPI-Key": "a030dda9b5msh5e55e21a12d0abcp1bc6fejsn640ee70d267f",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}
export default getData; // Export the function so you can use it in other modules

 */

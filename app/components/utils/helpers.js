// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";
// NYT API
const authKey = "5c4953b3d9a64372a9b2d64f55d8d089";
// Helper Functions
const helpers = {
  runQuery: (searchTerm) => {
    console.log("We have a search term passed into query: " + searchTerm);
    // NYTimes search query.
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm;
    return axios.get(queryURL).then((response) => {
      console.log(response);

      if(response.data.response.docs[0]) {
      	return response.data.response.docs;
      } else {
      	return "";
      }
    });
  },

  // Todo: eventually add delete item that calls on delete in server.js.

  // Hit server to get saved articles.
  getSaved: () => {
  	return axios.get("/api/saved");
  },

  saveArticle: (title) => {
  	return axios.post("/api/saved", { title: title });
  }

};
// Export the helpers function.
export default helpers;

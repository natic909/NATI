function loadDoc(){
    

    // Make a request for a user with a given ID
    axios.get('https://httpbin.org/get')
      .then(function (response) {
        // handle success
      document.getElementById("demo").innerHTML= JSON.stringify(response);
      console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      
    
    

}
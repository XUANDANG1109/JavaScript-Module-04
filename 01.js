async function getTVMazeInfo(appID) {
    let json_response;
    try {
        const response  = await fetch("https://api.tvmaze.com/search/shows?q=" + appID);
        json_response   = await response.json();
    } 
    catch (error) {
        console.log(error.message);
    }
    
    return json_response;
}


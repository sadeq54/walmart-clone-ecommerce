import { Result } from "@/types/searchTypes";

 function  fetchSearch(searchTerm :string ) {
    const username = process.env.OXYLABS_USERNAME
    const password = process.env.OXYLABS_PASSWORD

    const newUrl = new URL(`https://www.walmart.com/search?q=${searchTerm}`)

    const body  = {
        sources:"universal_ecommerce",
        url:newUrl.toString(),
        geo_location:"United States",
        parse:true,
    }

    const response =  fetch("https://realtime.oxylabs.io/v1/queries", {
        
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
        },
        next:{
            revalidate: 60 * 60, // thats means that the next will cash the data for quick access for 1 hour
        }
    
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.results.length === 0) return null
       
    const results : Result = data.results[0]
    return results
    })
    .catch((error) => {
        console.error("Error:", error);
    });
    return response

    
}
 
export default fetchSearch
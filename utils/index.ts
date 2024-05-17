

export const getCars = async () => {
    const headers = {
        "X-RapidAPI-Key": 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA' || "",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
    const resp = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`, {headers: headers})
    const result = resp.json()
    
    return result
}
import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = "AIzaSyCzHZmnhkfzK6ChbKL_veX4FYRXXCusLzw"

const useFetchData = (query, id) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = "";

                if (query) {
                    url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=40`
                } else if (id) {
                    url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`
                }
                
                const response = await axios.get(url)
                const data = await response.data 
                setData(data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, [query, id])

    return data;
}

export default useFetchData
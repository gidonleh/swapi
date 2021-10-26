import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        axios.get('https://swapi.dev/api/films/').
        then(res=> {
            console.log(res.data);
            setMovies(res.data.results)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            {console.log(movies)}
        </div>
    )
}

export default DataFetching;

import React, {useEffect, useState} from 'react';
import axios from "axios";


function Homepage() {
const [redditArticles, setRedditArticles] = useState(null);

    useEffect( ()=> {
        async function fetchData() {
            try {
                const result = await axios.get("https://www.reddit.com/hot.json?limit=15");
                console.log(result);
                setRedditArticles(result.data.data.children)

            } catch (e) {
                console.error(e);
            }
        };
        fetchData();

    }, [endPoint])

    // fetchData();
    return (
        <>
            <h1>Homepagina</h1>
            {redditArticles &&
                <>
                    <p>`Title: {redditArticles[0].data.title}`</p>
                </>
            }
        </>
    );
}

export default Homepage;
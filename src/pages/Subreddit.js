import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Subreddit = () => {
    const { subreddit_id } = useParams();

    console.log(subreddit_id)

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${subreddit_id}/about.json`);
                // setRedditPage(result)
                console.log(result);

            } catch (e) {
                console.error(e);
            }
        };
        fetchData();

    }, [])

    return (
        <>
            <h1>Subreddit</h1>
            <p>Subreddit: {subreddit_id} </p>
        </>
    );
}

export default Subreddit;
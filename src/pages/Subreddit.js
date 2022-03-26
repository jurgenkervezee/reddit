import React from 'react';
import {useParams} from "react-router-dom";

function Subreddit() {
    const { pageId } = useParams();


    return (
        <>
            <h1>Subreddit</h1>
            <p>Subreddit: {pageId}</p>
        </>
    );
}

export default Subreddit;
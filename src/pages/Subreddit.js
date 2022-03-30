import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import axios from "axios";

const Subreddit = () => {
    const {subreddit_id} = useParams();
    const [subreddit, setSubreddit] = useState(null);
    const history = useHistory();
    console.log(subreddit_id)

    function handleClick() {
        history.push("/");
    }


    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${subreddit_id}/about.json`);
                console.log(result);
                setSubreddit(result.data.data)

            } catch (e) {
                console.error(e);
            }
        };
        fetchData();

    }, [subreddit_id])

    return (
        <>  {subreddit &&
            <>
                <div>
                    <h1>{subreddit.display_name_prefixed}</h1>
                    <p>Subreddit specification</p>
                </div>
                <div>
                    <h4>Title</h4>
                    <a href={`https://www.reddit.com${subreddit.url}`}>{subreddit.display_name}</a>
                    <h4>Description</h4>
                    <p>{subreddit.public_description}</p>
                    <h4>Number of subscribers</h4>
                    <p>{subreddit.subscribers}</p>
                </div>
                <footer>
                    <a onClick={handleClick}>
                        Take me back
                    </a>
                </footer>
            </>
        }
        </>
    );
}

export default Subreddit;
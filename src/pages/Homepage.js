import React, {useEffect, useState} from 'react';
import axios from "axios";
import RedditArticle from "../components/RedditArticle";
// import {Link} from "react-router-dom";


function Homepage() {
    const [redditArticles, setRedditArticles] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get("https://www.reddit.com/hot.json?limit=15");
                console.log(result);
                setRedditArticles(result.data.data.children)
                // console.log(redditArticles);

            } catch (e) {
                console.error(e);
            }
        };
        fetchData();

    }, [])

    return (
        <>
            <h1>Homepagina</h1>
            {redditArticles &&
                <>
                    {redditArticles.map((article) => {
                        return (
                            <RedditArticle
                                key={`${article.data.id}-${article.data.date}`}
                                link={article.data.subreddit}
                                title={article.data.title}
                                category={article.data.subreddit_name_prefixed}
                                comments={article.data.num_comments}
                                ups={article.data.ups}
                            />

                        )
                    })}
                    }
                </>
            }
        </>
    );
}

export default Homepage;
import React, {useEffect, useState} from 'react';
import axios from "axios";
import RedditArticle from "../components/RedditArticle";
// import {Link} from "react-router-dom";
import logo from '../assets/logo.png'


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
            <header>
                <div className="nav-container">
                <ul className="nav-links">
                    <li>HOTTEST POSTS</li>
                    <li>REDDIT</li>
                    <li>MEMES</li>
                </ul>
                </div>
                <div className="logo-container">
                <img className="reddit-logo"
                    src={logo}
                    alt="reddit-logo"
                    // className="reddit-logo"
                />
                </div>
            </header>
            <div className="outer-container">
            <div className="inner-container">

                <div className="title-header">
                    <h2>Hottest posts</h2>
                </div>
                <div className="sub-title-header">
                    <p>on reddit right now</p>
                </div>

                <div className="tile-section">
                {redditArticles &&
                    <>

                        {redditArticles.map((article) => {
                            return (
                                <RedditArticle
                                    key={`${article.data.id}-${article.data.date}`}
                                    externallink={article.data.permalink}
                                    link={article.data.subreddit}
                                    title={article.data.title}
                                    category={article.data.subreddit_name_prefixed}
                                    comments={article.data.num_comments}
                                    ups={article.data.ups}
                                />

                            )
                        })}

                    </>
                }

                </div>
            </div>
            </div>
        </>
    );
}

export default Homepage;
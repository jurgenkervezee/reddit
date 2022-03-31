import React from "react";
import {Link} from "react-router-dom";

function RedditArticle({externallink, link, title, category, comments, ups}){

    console.log(link);
    return(
        <>
            <div className="reddit-tile">

                <a className="tile-title-link"
                   href={`https://www.reddit.com${externallink}`}
                >
                    {title}</a><br/>


                <Link to={`/subreddit/${link}`}>{category}</Link>
                <div>
                    Comments: {comments}
                </div>
                <div>
                    Ups: {ups}
                </div>
            </div>
        </>

    );
}
export default RedditArticle;
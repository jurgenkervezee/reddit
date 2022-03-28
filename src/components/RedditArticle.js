import React from "react";
import {Link} from "react-router-dom";

function RedditArticle({link, title, category, comments, ups}){

    console.log(link);
    return(
        <>
            <article>
                <Link to={`/subreddit/${link}`}>{title}</Link>

                <div>
                    {category}
                </div>
                <div>
                    Comments: {comments}
                </div>
                <div>
                    Ups: {ups}
                </div>
            </article>
        </>

    );
}
export default RedditArticle;
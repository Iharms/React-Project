import React from "react";
import axios from "axios";

interface ICommentData {
  commentId: string;
  author: string;
  created: number;
  karma: number;
  body: string;
}

interface ICommentsData {
  comments: ICommentData[]
}

export function useCommentsData(subreddit: string, postId: string) {
  const [ commentsData, setCommentsData ] = React.useState<ICommentsData>({ comments: [] });

  React.useEffect(() => {
    axios.get(`https://api.reddit.com/r/${ subreddit }/comments/${ postId }`)
      .then((response) => {
        const result: ICommentsData = { comments: [] };
        for (let comment of response.data[1].data.children) {
          result.comments.push({
            commentId: comment.data.id,
            author: comment.data.author,
            created: comment.data.created,
            karma: comment.data.score,
            body: comment.data.body
          })
        }
        setCommentsData(result);
      })
      .catch(console.log)
  }, [])

  return [ commentsData ];
}

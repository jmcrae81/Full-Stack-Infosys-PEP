import {useState} from "react";

const CommentComponent = (props) => {
  return(
    <>
      <ul>
        {props.comments.map(comment => (
          <li>
            <div>{comment.commentText} <i>---{comment.commentAuthor}</i></div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentComponent;

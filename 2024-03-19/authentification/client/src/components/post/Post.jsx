import { useState } from "react";
import "./Post.css";
import Comments from "../comments/Comments.jsx";

const Post = ({ data }) => {
  const [viewComments, setViewComments] = useState(false);

  return (
    <div className="post">
      <div className="user">
        <div className="user-photo">
          <img src={"http://localhost:3000/uploads/" + data.author.photo} />
        </div>
        <div className="user-name">{data.author.user_name}</div>
      </div>
      <div className="photo">
        <img src={"http://localhost:3000/uploads/" + data.photo} />
      </div>
      <div className="description">
        <div className="user-name">{data.author.user_name}</div>
        <div className="description-text">{data.description}</div>
      </div>
      {/* Rodyti komentarus */}
      {/* cia keiciam steita      */}

      <div onClick={() => setViewComments(true)}>
        <span>View all Comments</span>
        {viewComments && <Comments setViewComments={setViewComments} />}
      </div>
    </div>
  );
};

{
  /* {stateas && } 
 <Comments />; */
}
export default Post;

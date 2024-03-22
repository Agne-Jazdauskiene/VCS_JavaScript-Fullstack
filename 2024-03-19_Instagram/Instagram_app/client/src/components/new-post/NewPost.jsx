import { useState } from "react";
import style from "./NewPost.module.css";
import axios from "axios";

//ismeta zinute del error'o
const NewPost = ({ setShowNewPost }) => {
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    //LAIKINAS SPRENDIMAS
    formData.append("author", "65f95dc7b6f7f14efe7fe9d9");

    axios
      .post("http://localhost:3000/posts/", formData)
      .then((resp) => setShowNewPost(false))
      .catch((err) => setMessage(err.message));
  };

  return (
    <div className={style.newPost}>
      {/* priskiriam onclick eventa */}
      <div className={style.close} onClick={() => setShowNewPost(false)}>
        <i className="bi bi-x"></i>
      </div>
      <div className={style.modal}>
        <h2>Create new post</h2>

        <form onSubmit={handleSubmit}>
          {message && <div className="alert alert-danger">{message}</div>}
          <div className="mb-3">
            <input type="file" name="photo" className="form-control" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" name="description"></textarea>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;

import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Comments.module.css";
// import axios from "axios";

const Comments = ({ setViewComments }) => {
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    //LAIKINAS SPRENDIMAS
    formData.append("author", "65f95dc7b6f7f14efe7fe9d9");

    // axios
    //   .post("http://localhost:3000/posts/", formData)
    //   .then((resp) => setViewComments(false))
    //   .catch((err) => setMessage(err.message));
  };

  return (
    <div className={style.comments}>
      {/* <div className={style.module}></div> */}
      <div className={style.close} onClick={() => setViewComments(false)}>
        <i className="bi bi-x"></i>
      </div>
      <div className={style.modal}>
        <h2>View all Comments</h2>

        <form onSubmit={handleSubmit}>
          {/* {message && <div className="alert alert-danger">{message}</div>} */}
          {/* <div className="mb-3">
            <input type="file" name="photo" className="form-control" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" name="description"></textarea>
          </div> */}
          {/* <button className="btn btn-primary">Submit</button> */}
        </form>
      </div>
    </div>
  );
};

export default Comments;

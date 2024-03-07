import { useState } from "react";

const NewPost = ({ setReload }) => {
  const [post, setPost] = useState();

  const handleSubmit = (e) => {
    // Standartinio veikimo sustabdymas
    e.preventDefault();

    const formData = new FormData(e.target);

    const localData = localStorage.getItem("data");

    if (localData) {
      // Papildymas
      let convertedData = JSON.parse(localData);
      convertedData.push(convertedData);
      localStorage.setItem("posts", JSON.stringify(data));
    } else {
      // Pridėjimas
      localStorage.setItem("posts", JSON.stringify([post]));
    }

    setReload((prev) => !prev);
  };

  return (
    <>
      <h3>New Post</h3>
      <form className=" mb-5 col-8" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Post Title</label>
          <input
            type="text"
            className="form-control rounded-pill mb-3"
            name="title"
            // State'o task reikšmės pakeitimas
            // onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div>
          <p className="mb-0">Post Category</p>
          <input
            type="text"
            className="form-control rounded-pill mb-3"
            name="category"
            // State'o task reikšmės pakeitimas
            // onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div>
          <p className="mb-0">Post Image</p>
          <input
            type="text"
            className="form-control rounded-pill mb-3"
            name="photo"
            // State'o task reikšmės pakeitimas
            // onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div>
          <p className="mb-0">Post Content</p>
          <input
            type="text"
            className="form-control rounded-pill mb-3"
            name="content"
            // State'o task reikšmės pakeitimas
            // onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div>
          <p className="mb-0">Post Author</p>
          <input
            type="text"
            className="form-control rounded-pill mb-3"
            name="author"
            // State'o task reikšmės pakeitimas
            // onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div>
          <p className="mb-0">Post Author Role</p>
          <input
            type="text"
            className="form-control rounded-pill mb-3"
            name="role"
            // State'o task reikšmės pakeitimas
            // onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div>
          <p className="mb-0">Post Author Image</p>
          <input
            type="text"
            className="form-control rounded-pill mb-3"
            name="authorImage"
            // State'o task reikšmės pakeitimas
            // onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <button className="btn btn-warning rounded-pill text-light">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default NewPost;

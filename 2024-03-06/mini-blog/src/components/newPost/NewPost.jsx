import { useState } from "react";

const NewPost = ({ setReload }) => {
  const [post, setPost] = useState();

  const handleSubmit = (e) => {
    // Standartinio veikimo sustabdymas
    e.preventDefault();

    let data = localStorage.getItem("posts");

    if (data) {
      // Atnaujinimas
      data = JSON.parse(data);
      data.push(post);
      localStorage.setItem("posts", JSON.stringify(data));
    } else {
      // Pridėjimas
      localStorage.setItem("posts", JSON.stringify([post]));
    }

    // setReload((prev) => !prev);
  };

  return (
    <>
      <h3>New Post</h3>
      <form className=" mb-5 col-8" onSubmit={handleSubmit}>
        <div>
          <div>
            <p className="mb-0">Post Title</p>
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
              name="authorRole"
              // State'o task reikšmės pakeitimas
              // onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div>
            <p className="mb-0">Post Author Image</p>
            <input
              type="text"
              className="form-control rounded-pill mb-3"
              name="authorPhoto"
              // State'o task reikšmės pakeitimas
              // onChange={(e) => setTask(e.target.value)}
            />
          </div>

          <button className="btn btn-warning rounded-pill text-light">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPost;

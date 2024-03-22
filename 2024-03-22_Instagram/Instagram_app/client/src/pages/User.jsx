import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserProfile from "../components/user-profile/UserProfile.jsx";
import UserPosts from "../components/user-posts/UserPosts.jsx";
// komponentas userprofile

const User = () => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((resp) => {
        console.log(resp);
        setData(resp.data);
      })
      .catch((err) => setMessage(err.message));
  }, []);
  return (
    <>
      {data && (
        <>
          <UserProfile data={data} />
          <UserPosts data={data.posts} />
        </>
      )}
    </>
  );
};

export default User;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import UserProfile from "../components/user-profile/UserProfile.jsx";

// const User = ({ showProfile }) => {
//   const [data, setData] = useState([]);
//   const [id] = useParams();

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/users/" + id)
//       .then((resp) => setData(resp.data));
//   }, []);

//   return (
//     <>
//       <h1>User Puslapis</h1>
//       <UserProfile data={data} />
//     </>
//   );
// };

// export default User;

// const User = ({ showProfile }) => {
//   const [data, setUserData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/user/65f95dc7b6f7f14efe7fe9d9")
//       .then((resp) => setUserData(resp.data));
//   }, [showProfile]);

//   return;
//   <>
//     <h1>User Puslapis</h1>
//     {data.map((userProfile) => (
//       <UserProfile data={userProfile} key={userProfile._id} />
//     ))}
//   </>;
// };

// export default User;

// http://localhost:5173/user/65f95dc7b6f7f14efe7fe9d9

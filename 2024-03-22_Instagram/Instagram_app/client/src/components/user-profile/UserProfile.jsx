import styles from "./UserProfile.module.css";

const UserProfile = ({ data }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.photo}>
        <img src={"http://localhost:3000/uploads/" + data.photo} />
      </div>
      <div className={styles.info}>
        <div className={styles.userName}>{data.user_name}</div>
        <div className={styles.postsCount}>
          <strong>{data.postCount}</strong>
          <span>posts</span>
        </div>
        <div className={styles.bio}>{data.bio}</div>
      </div>
    </div>
  );
};

export default UserProfile;

// import style from "./UserProfile.module.css";

// const UserProfile = ({ data }) => {
//   return (
//     <div className={style.userProfile}>
//       <div className={style.userContainer}>
//         <img
//           src={"http://localhost:3000/uploads/" + data.photo}
//           className={style.userPhoto}
//         />
//       </div>

//       <div className={style.info}>
//         <strong className={style.userName}>{data.user_name}</strong>
//         <div className={style.bio}>{data.bio}</div>
//       </div>

//       <div className={style.allPosts}></div>
//     </div>
//   );
// };

// export default UserProfile;

import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  console.log(css);
  return (
    <div className={css.userCard}>
      <div className={css.userCardWrap}>
        <img className={css.userAvatar} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <ul className={css.userInfo}>
        <li className={css.userStats}>
          <span>Followers</span>
          <span className={css.statsQuantity}>{followers}</span>
        </li>
        <li className={css.userStats}>
          <span>Views</span>
          <span className={css.statsQuantity}>{views}</span>
        </li>
        <li className={css.userStats}>
          <span>Likes</span>
          <span className={css.statsQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

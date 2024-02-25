import FriendListItem from "./FriendListItem";

const FriendList = ({ friendsData }) => {
  return (
    <ul>
      {friendsData.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

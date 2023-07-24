import Friend from "./Friend";
export default function FriendList({
  friend,
  onHandleDelete,
  onSelection,
  selectFriend,
}) {
  return (
    <ul>
      {friend.map((friend) => (
        <Friend
          friendObj={friend}
          key={friend.id}
          onHandleDelete={onHandleDelete}
          onSelection={onSelection}
          selectFriend={selectFriend}
        />
      ))}
    </ul>
  );
}

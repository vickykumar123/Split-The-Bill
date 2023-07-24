import { useState } from "react";
import FriendList from "./Components/FriendList";
import Button from "./Components/Button";
import FormSplitBill from "./Components/FormSplitBill";
import FormAddFriends from "./Components/FormAddFriends";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [addFriend, setAddFriend] = useState(initialFriends); // handling the new friends in the List
  const [addFriendClick, setAddFriendClick] = useState(false); //handling  Add friend Click
  const [selectFriend, setSeletedFriend] = useState(null); //handling selected friends

  function handleAddFriendClick() {
    setAddFriendClick(!addFriendClick);
  }

  // Adding friend to the list.
  function handleAddFriend(friend) {
    setAddFriend([...addFriend, friend]);
    setAddFriendClick(false);
  }

  function handleDelete(id) {
    setAddFriend(addFriend.filter((friends) => friends.id !== id));
  }
  function handleSeletedFriend(friend) {
    // setSeletedFriend(friend);

    //Used optionalChaining because curFriend.id will become "null" so there won't be comparation in Friend Component
    //for Closing
    // here we are passing the object
    setSeletedFriend((curFriend) =>
      curFriend?.id === friend.id ? null : friend
    );
    setAddFriendClick(false);
  }

  function handleSplit(value) {
    console.log(value);

    // Modifying the balance
    setAddFriend(
      addFriend.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: selectFriend.balance + value }
          : friend
      )
    );
  }
  return (
    <>
      <h1>Split The Bill 💸</h1>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friend={addFriend}
            onHandleDelete={handleDelete}
            onSelection={handleSeletedFriend}
            selectFriend={selectFriend}
          />
          {addFriendClick && (
            <FormAddFriends onHandleFriend={handleAddFriend} />
          )}
          <Button onClick={handleAddFriendClick}>
            {addFriendClick ? "Close" : "Add Friend"}
          </Button>
        </div>
        {selectFriend && (
          <FormSplitBill selectFriend={selectFriend} onSplit={handleSplit} />
        )}
      </div>
    </>
  );
}

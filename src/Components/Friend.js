import Button from "./Button";
export default function Friend({
  friendObj,
  onHandleDelete,
  onSelection,
  selectFriend,
}) {
  //Used optionalChaining because curFriend.id will become "null" so there won't be comparation in Friend Component
  const isSelected = selectFriend?.id === friendObj.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friendObj.image} alt={friendObj.name} />
      <h3>{friendObj.name}</h3>
      {friendObj.balance < 0 && (
        <p className="red">
          You owe {friendObj.name} ${Math.abs(friendObj.balance)}
        </p>
      )}
      {friendObj.balance > 0 && (
        <p className="green">
          {friendObj.name} owe you ${Math.abs(friendObj.balance)}
        </p>
      )}
      {friendObj.balance === 0 && (
        <p>You and {friendObj.name} are owe evenly</p>
      )}
      <Button onClick={() => onSelection(friendObj)}>
        {isSelected ? "Close" : "Select"}
      </Button>
      <button className="delete" onClick={() => onHandleDelete(friendObj.id)}>
        Delete Friend
      </button>
    </li>
  );
}

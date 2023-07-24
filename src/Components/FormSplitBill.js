import { useState } from "react";
import Button from "./Button";
export default function FormSplitBill({ selectFriend, onSplit }) {
  const [bill, setBill] = useState("");
  const [paidByYou, setPaidByYou] = useState("");
  const paidByFriend = bill ? bill - paidByYou : "";
  const [whoPayTheBill, setWhoPayTheBill] = useState("user");

  function handlePaidByYou(e) {
    setPaidByYou(
      Number(e.target.value) > bill ? paidByYou : Number(e.target.value)
    );
  }

  function handleSplitSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByYou) return;

    onSplit(whoPayTheBill === "user" ? paidByFriend : -paidByYou);
    setBill("");
    setPaidByYou("");
  }
  return (
    <form className="form-split-bill" onSubmit={handleSplitSubmit}>
      <h2>Split a Bill with {selectFriend.name}</h2>
      <label>💵 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧔🏻Your expense</label>
      <input type="text" value={paidByYou} onChange={handlePaidByYou} />

      <label>🧑‍🤝‍🧑 {selectFriend.name}'s expense</label>
      <input type="text" value={paidByFriend} disabled />

      <label>🤑 Who will pay the Bill?</label>
      <select
        value={whoPayTheBill}
        onChange={(e) => setWhoPayTheBill(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

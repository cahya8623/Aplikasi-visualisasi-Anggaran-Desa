import { useState } from "react";

export default function Coba2() {
  const [input, setInput] = useState<string>("");
  const [submit, setSubmit] = useState<string[]>([]);
  const [editData, setEditData] = useState(null);

  function onClickSubmit() {
    if (input.trim() === "") return;

    if (editData != null) {
      const newData = [...submit];
      newData[editData] = input;
      setSubmit(newData);
    } else {
      setSubmit((prev) => [...prev, input]);
    }
    setInput("");
  }

  function onClickEdit(item, index) {
    setInput(item);
    setEditData(index);
  }

  console.log(submit);

  return (
    <div className="vh-100">
      <p>{input}</p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button onClick={onClickSubmit}>Simpan</button>

      <ul>
        {submit.map((item, index) => (
          <li key={item}>
            {item}{" "}
            <button onClick={() => onClickEdit(item, index)}>edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

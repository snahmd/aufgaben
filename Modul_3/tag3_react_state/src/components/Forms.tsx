import { useState } from "react";

function Forms() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(email);
  };

  return (
    <form
      action=""
      className="border border-white flex flex-col m-4 px-72 py-4 gap-4"
    >
      <input
        className="text-slate-600 p-2"
        onChange={handleNameChange}
        type="text"
        id="name"
        name="name"
        placeholder="Vorname"
      />
      <input
        className="text-slate-600 p-2"
        onChange={(e) => {
          setSurname(e.target.value);
        }}
        type="text"
        id="surname"
        name="surname"
        placeholder="Nachname"
      />
      <input
        className="text-slate-600 p-2"
        onChange={handleEmail}
        type="email"
        id="email"
        name="email"
        placeholder="E-Mail"
      />
      <label className="text-center" htmlFor="name">
        Vorname: {name}
      </label>
      <label className="text-center" htmlFor="surname">
        Nachname: {surname}
      </label>
      <label className="text-center" htmlFor="email">
        E-Mail: {email}
      </label>
    </form>
  );
}

export default Forms;

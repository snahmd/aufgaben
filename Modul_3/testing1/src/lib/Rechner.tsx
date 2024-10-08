import { useState } from "react";

export function getRechner(
  service: number,
  rechnungsbetrag: number,
  person: number
) {
  const totalTip = rechnungsbetrag * service;
  const gesamtSumme = rechnungsbetrag + totalTip;
  const proPerson = gesamtSumme / person;
  return [totalTip, gesamtSumme, proPerson];
}

const Rechner = () => {
  const [submit, setSubmit] = useState(false);
  const [rechnungsbetrag, setRechnungsbetrag] = useState<number | undefined>(
    undefined
  );
  const [person, setPerson] = useState<number | undefined>(undefined);
  const [service, setService] = useState<number | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmit(true);
  };
  const handleBackButton = () => {
    setSubmit(false);
    setRechnungsbetrag(undefined);
    setPerson(undefined);
    setService(undefined);
  };

  if (submit) {
    const result = getRechner(service, rechnungsbetrag, person);
    const totalTip = result[0];
    const gesamtSumme = result[1];
    const proPerson = result[2];

    return (
      <div className="flex flex-col justify-center items-center">
        <h1>Trinkgeldrechner</h1>
        <div className="flex flex-col justify-center items-center gap-2 border border-white p-4 mt-8">
          <h2>Total Tip: {totalTip}</h2>
          <h2>Der Preis pro Person ist: {proPerson}</h2>
          <h2>Gesamtsumme beträgt: {gesamtSumme}</h2>
        </div>
        <button
          onClick={handleBackButton}
          className="border border-white p-2 my-4"
        >
          Neuer Rechner
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Trinkgeldrechner</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col justify-center items-center gap-2 border border-white p-4 mt-8 "
      >
        <label htmlFor="rechnungsbetrag">Wie hoch war die Rechnung?</label>
        <input
          className="text-black"
          type="number"
          id="rechnungsbetrag"
          placeholder="  €"
          value={rechnungsbetrag}
          onChange={(e) => setRechnungsbetrag(parseInt(e.target.value))}
        />
        <label htmlFor="prozent">
          Wie viele Menschen teilen sich die Rechnung?
        </label>
        <input
          className="text-black"
          type="number"
          id="person"
          placeholder="  1-2-3 oder ..."
          value={person}
          onChange={(e) => setPerson(parseInt(e.target.value))}
        />
        <select
          className="text-black"
          name="service"
          id="service"
          value={service}
          onChange={(e) => setService(parseFloat(e.target.value))}
        >
          <option value="0.3">30% - Hervorragend</option>
          <option value="0.2">20% - Gut</option>
          <option value="0.15">15% - OK</option>
          <option value="0.1">10% - Nicht so gut</option>
        </select>
        <button className="border border-white p-2 my-4">Berechnen</button>
      </form>
      <div></div>
    </div>
  );
};

export default Rechner;

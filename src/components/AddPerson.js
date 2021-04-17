import { useState } from "react";

const AddPerson = ({ onAdd }) => {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [checkFlag, setCheckFlag] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!FName) {
      alert("Please add a person");
      return;
    }

    onAdd({ FName, LName });

    setFName("");
    setLName("");
    setCheckFlag(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Firstname</label>
        <input
          type="text"
          placeholder="Input fName"
          value={FName}
          onChange={(e) => setFName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Lastname</label>
        <input
          type="text"
          placeholder="Input lName"
          value={LName}
          onChange={(e) => setLName(e.target.value)}
        />
      </div>
      <div className="form-control-check">
        <label>Set Flag</label>
        <input
          type="checkbox"
          checked={checkFlag}
          value={checkFlag}
          onChange={(e) => setCheckFlag(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Person" />
    </form>
  );
};

export default AddPerson;

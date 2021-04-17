import { useState, useEffect } from "react";
import Header from "./components/Header";
import Persons from "./components/Persons";
import AddPerson from "./components/AddPerson";

const App = () => {
  const [showAddPerson, setShowAddPerson] = useState(false);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const getPersons = async () => {
      const personsFromServer = await fetchPersons();
      setPersons(personsFromServer);
    };
    getPersons();
  }, []);

  const fetchPersons = async () => {
    const res = await fetch("https://localhost:5001/api/persons");
    const data = await res.json();

    return data;
  };

  const fetchPerson = async (id) => {
    const res = await fetch(`https://localhost:5001/api/persons/${id}`);
    const data = await res.json();

    return data;
  };

  // Add Person
  const addPerson = async (person) => {
    console.log(person);
    const res = await fetch("https://localhost:5001/api/persons", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(person),
    });

    const data = await res.json();

    setPersons([...persons, data]);
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newPerson = { id, ...person }
    // setPersons([...persons, newPerson])
  };

  // Delete Person
  const deletePerson = async (id) => {
    await fetch(`https://localhost:5001/api/persons/${id}`, {
      method: "DELETE",
    });

    setPersons(persons.filter((person) => person.id !== id));
  };

  // Toggle checkFlag
  const toggleReminder = async (id) => {
    const personToToggle = await fetchPerson(id);
    const updPerson = {
      ...personToToggle,
      checkFlag: !personToToggle.checkFlag,
    };

    // console.log(updPerson);

    const res = await fetch(`https://localhost:5001/api/persons/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updPerson),
    });

    const data = await res.json();

    setPersons(
      persons.map((person) =>
        person.id === id ? { ...person, checkFlag: data.checkFlag } : person
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddPerson(!showAddPerson)}
        showAdd={showAddPerson}
      />

      {showAddPerson && <AddPerson onAdd={addPerson} />}
      {persons.length > 0 ? (
        <Persons
          persons={persons}
          onDelete={deletePerson}
          onToggle={toggleReminder}
        />
      ) : (
        "No Persons To Show"
      )}
    </div>
  );
};

export default App;

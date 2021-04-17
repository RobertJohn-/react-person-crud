import Person from "./Person";
const Persons = ({ persons, onDelete, onToggle }) => {
  return (
    <>
      {persons.map((person) => (
        <Person key={person.id} person={person} 
        onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  );
};

export default Persons;

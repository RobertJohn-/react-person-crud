import { FaTimes } from 'react-icons/fa'
const Person = ({ person, onDelete, onToggle }) => {

    return (
        <div className={`person ${person.checkFlag ? 'checkFlag' : ''}`} onDoubleClick={() =>
        onToggle(person.id)}>
            <h3>{ person.fName } { person.lName }
            <FaTimes
                style={{ color: "red", cursor: "pointer"}}
                onClick={() => onDelete(person.id)}
            />
            </h3>
            <p>{ person.age }</p>
        </div>
    )
}

export default Person

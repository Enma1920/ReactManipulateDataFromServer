import { DeleteButton } from "./DeleteButton";

export const Numbers = ({ persons, newFilter, handleChangePersonsValue }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((person) => person.name.includes(newFilter))
          .map((person, i) => (
            <li key={i}>
              {person.name} {person.number}
              <DeleteButton id={person.id} name={person.name} persons={persons} handleChangePersonsValue={handleChangePersonsValue}  />
            </li>
          ))}
      </ul>
    </div>
  );
};

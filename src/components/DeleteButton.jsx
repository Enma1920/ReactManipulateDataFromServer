import personService from "../services/personService";

export const DeleteButton = ({ id, name, persons, handleChangePersonsValue }) => {

  const deletePerson = async(id, name, persons, handlleChangePersonsValue)=>{
    if(window.confirm(`Delete ${name}?`)){
        await personService.deletePerson(id);
        handlleChangePersonsValue(persons.filter(person=>person.id !== id));
        alert(`Person ${name} has been deleted`)
    }
  };
  return <button onClick={()=>deletePerson(id, name, persons, handleChangePersonsValue)}>Delete</button>;
};

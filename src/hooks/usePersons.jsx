import { useEffect, useState } from "react";
import personService from "../services/personService";

export const usePersons = () => {
  const [persons, setPersons] = useState([]);

  const handleChangePersonsValue = (newValue) => {
    setPersons(newValue);
  };

  useEffect(() => {
    personService.getPersons().then((data) => {
      handleChangePersonsValue(data);
    });
  }, []);
  const createPerson = (newPerson) => {
    personService.create(newPerson);
  };

  const handleUpdatePerson = (id, newNumber, name) => {
    const personExists = persons.some((person) => person.id === id);
    if (personExists) {
      const confirmed = window.confirm(
        `User ${name} is already in the phone book. Do you want to replace your existing number?`,
      );
      if (confirmed) {
        personService
          .update(id, { number: newNumber, name: name })
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : updatedPerson,
              ),
            );
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  const handleDeletePerson = async(id, name, persons, handlleChangePersonsValue)=>{
    if(window.confirm(`Delete ${name}?`)){
        await personService.deletePerson(id);
        handlleChangePersonsValue(persons.filter(person=>person.id !== id));
        alert(`Person ${name} has been deleted`)
    }
  };

  return {
    persons,
    handleChangePersonsValue,
    handleDeletePerson,
    handleUpdatePerson,
    createPerson,
  };
};

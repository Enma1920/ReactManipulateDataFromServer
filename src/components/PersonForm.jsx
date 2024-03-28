import { usePersons } from '../hooks';
export const PersonForm = ({ newName, setNewName, newNumber, handleNewNumber, persons, setPersons }) => {
    const { handleUpdatePerson } = usePersons();
    const { createPerson } = usePersons();
    const addNewPerson = (event) => {
        event.preventDefault();
		if (!persons.some(person => (person.name === newName))) {
			const newPerson = {
				id: Date.now().toString(),
				name: newName,
				number: newNumber
			}
            createPerson(newPerson);
			setPersons([...persons, newPerson]);

		} else {
            const existingPerson = persons.find(person => person.name === newName);
			if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
                handleUpdatePerson(existingPerson.id, newNumber, existingPerson.newName);
            }
		}
	};

    return (
        <div>
            <h2>Add a New Person:</h2>
                <form onSubmit={ addNewPerson }>
                    <div>
                        <label htmlFor="new-Name">Name: </label>
                        <input id="new-Name" value={ newName } onChange={ setNewName } />
                        <br /><br />
                        <label htmlFor="new-Number">Number: </label>
                        <input id="new-Number" value={ newNumber } onChange={ handleNewNumber } />
                    </div>
                    <br /><br />
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
        </div>
    );

}
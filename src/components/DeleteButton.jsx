import { usePersons } from "../hooks/usePersons";

export const DeleteButton = ({ id }) => {
  const { handleDeletePerson } = usePersons();
  const handleDelete = () => {
    handleDeletePerson(id);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

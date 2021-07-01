import React, { useState } from 'react';

const ContactForm = ({ setPersons, persons }) => {
  const [newName, setNewName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = { name: newName };
    setPersons([...persons, newPerson]);
    setNewName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="py-4 font-bold">
        Add Contact
      </label>
      <div className="my-4" />
      <div className="flex justify-center items-center space-x-10 mx-8">
        <div>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">
            add
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
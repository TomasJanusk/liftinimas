import Form from "./Form";
import ContactTableRow from "./ContactTableRow";
import { useState } from "react";

const ContactTable = () => {
  const [openForm, setOpenForm] = useState(false);
  const [contacts, setContacts] = useState([]);
  const handleSave = (formData) => {
    setContacts((prevData) => {
      return [...prevData, formData];
    });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setOpenForm(true)}
      >
        Nauja Zinute
      </button>
      {openForm && <Form onSave={handleSave} />}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Vardas</th>
            <th>Pavarde</th>
            <th>El.pastas</th>
            <th>Zinute</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((message) => (
            <ContactTableRow
              name={message.name}
              surname={message.surname}
              email={message.email}
              message={message.message}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ContactTable;

import ContactTable from "../contactTable/ContactTable";

const Contact = (props) => {
  return (
    <>
      <div>
        <h3>Labas</h3>
        <p>{props.date}</p>
      </div>
      <ContactTable />
    </>
  );
};
export default Contact;

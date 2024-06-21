const ContactTableRow = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.message}</td>
    </tr>
  );
};
export default ContactTableRow;

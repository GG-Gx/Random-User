// components/Contact.js
const Contact = ({ user }) => {
  return (
    <div>
      <p>Name: {user.name.first} {user.name.last}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default Contact;

// components/User.js
const User = ({ user }) => {
  return (
    <div>
      <img src={user.picture.large} alt={user.name.first} />
      <p>Name: {user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default User;

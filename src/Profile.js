import { useParams } from 'react-router-dom';

const Profile = () => {
  const { userName } = useParams();

  return (
    <div>
      <h1>{userName}</h1>
      <div>
        <h2>{userName}'s page</h2>
        <p>Profile page content</p>
      </div>
    </div>
  );
};

export default Profile;
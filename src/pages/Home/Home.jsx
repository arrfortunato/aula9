import { List } from '../../components';
import { users } from '../../data';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate(`/details/${item.id}`);
  };

  return (
    <div>
      <h1>Home</h1>
      <List items={users} onItemClick={handleItemClick} />
    </div>
  );
};

export default Home;

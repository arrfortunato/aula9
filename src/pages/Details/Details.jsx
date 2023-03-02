import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { users } from '../../data';

const Details = () => {
  const parameters = useParams();

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const { id } = parameters;

    const result = users.find((user) => user.id === id);

    if (!result) {
      setUser(null);
      return;
    }

    setUser(result);
  }, [parameters]);

  return (
    <div>
      <h1>Details</h1>
      {user === undefined && (
        <div>
          <p>Carregando...</p>
        </div>
      )}
      {user === null && (
        <div>
          <h2>Usuário não encontrado.</h2>
        </div>
      )}
      {user && (
        <div>
          <img src={user.image.src} alt={user.image.alt} />
          <h2>{user.name}</h2>
          <p>{user.description}</p>
        </div>
      )}
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Details;

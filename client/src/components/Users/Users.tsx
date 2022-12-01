import React, { useEffect, useState } from "react";
import "./Users.scss";

type Props = {};

interface UserDto {
  id: number;
  username: string;
}

const Users: React.FC = (props: Props) => {
  const [users, setUsers] = useState<UserDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <p>Chargement...</p>}
      {!isLoading && (
        <ul className="users-list">
          {users.map((user) => (
            <li className="users-list__user" key={`user-${user.id}`}>
              {user.username}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Users;

import { useEffect, useState } from "react";

type User = {
  id: number;
  car: string;
  car_model: string;
  price: string;
};

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API when component mounts
    fetch("https://fakestoreapi.com/products") // sample API
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.cars);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="grid justify-center">
        <h1>Cars List</h1>
        {users.map((user, index) => (
          <div
            className="w-[80%] grid gap-2 p-2 cursor-pointer"
            key={user.id || index}
          >
            <p className="hover:text-blue-600">car: {user.car}</p>
            <p className="hover:text-blue-600">Model: {user.car_model}</p>
            <p className="hover:text-blue-600">price:{user.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;

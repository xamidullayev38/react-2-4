import { use, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import RoleModal from "../components/RoleModal";

function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Abdulaziz Ochilov",
      phone: "+998 97 888 10 27",
      role: "admin",
    },
    {
      id: 2,
      name: "Ergashev Islom",
      phone: "+998 97 888 12 35",
      role: "yetkazuvchi",
    },
    {
      id: 3,
      name: "Samidullayev Bahodir",
      phone: "+998 93 234 10 23",
      role: "foydalanuvchi",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
  };
  const removeUser = (user) => {
    setUsers((prev) => prev.filter((el) => el.id !== user.id));
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const saveRole = (newRole) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === selectedUser.id ? { ...u, role: newRole } : u))
    );
    closeModal();
  };

  return (
    <div>
      <h3 className="fw-bold">Foydalanuvchilar</h3>
      <p className="text-warning">Rollarni biriktirishingiz mumkin</p>

      <table className="table align-middle mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>To‘liq ismi</th>
            <th>Telefon raqami</th>
            <th>Roli</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td className="text-end">
                <button
                  className="btn btn-link"
                  onClick={() => openModal(user)}
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => removeUser(user)}
                  className="btn btn-link text-danger"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <RoleModal user={selectedUser} onClose={closeModal} onSave={saveRole} />
      )}
    </div>
  );
}

export default Users;

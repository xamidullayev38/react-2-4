import { useState } from "react";

function RoleModal({ user, onClose, onSave }) {
  const [role, setRole] = useState(user.role);

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ background: "rgba(0,0,0,0.4)", zIndex: 1000 }}
    >
      <div
        className="bg-white p-4 rounded"
        style={{ width: "420px" }}
      >
        <h5 className="fw-bold mb-4 text-center">
          Foydalanuvchi uchun rol tanlang
        </h5>

        <select
          className="form-select mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">admin</option>
          <option value="yetkazuvchi">yetkazuvchi</option>
          <option value="foydalanuvchi">foydalanuvchi</option>
        </select>

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-danger px-4"
            onClick={onClose}
          >
            Bekor qilish
          </button>

          <button
            className="btn btn-warning px-4"
            onClick={() => onSave(role)}
          >
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleModal;

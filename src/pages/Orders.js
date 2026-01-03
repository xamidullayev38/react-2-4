function Orders() {
  const orders = [
    {
      id: 1,
      name: "Abdulaziz Ochilov",
      food: "Osh",
      price: 20000,
      count: 2,
      phone: "+998 97 888 10 27",
      comment: "Lorem ipsum",
    },
    {
      id: 2,
      name: "Ergashev Islom",
      food: "Osh",
      price: 20000,
      count: 1,
      phone: "+998 97 888 12 35",
      comment: "...",
    },
    {
      id: 3,
      name: "Samidullayev Bahodir",
      food: "Manti",
      price: 5000,
      count: 10,
      phone: "+998 93 234 10 23",
      comment: "...",
    },
    {
      id: 4,
      name: "To‘ramurodov Shosislom",
      food: "Big Lavash",
      price: 24000,
      count: 3,
      phone: "+998 90 375 67 15",
      comment: "...",
    },
  ];

  const totalSum = orders.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <div>
      <h3 className="fw-bold">Arizalar</h3>
      <p className="text-muted">
        Yetib kelgan arizalarni kuzatishingiz mumkin
      </p>

      <div className="table-responsive mt-4">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>To‘liq ismi</th>
              <th>Taom nomi</th>
              <th>Narxi</th>
              <th>Soni</th>
              <th>Umumiy narx</th>
              <th>Telefon raqami</th>
              <th>Izoh</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.food}</td>
                <td>{item.price.toLocaleString()} so‘m</td>
                <td>{item.count}</td>
                <td className="fw-semibold">
                  {(item.price * item.count).toLocaleString()} so‘m
                </td>
                <td>{item.phone}</td>
                <td>{item.comment}</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="5" className="fw-bold">
                Jami
              </td>
              <td colSpan="3" className="fw-bold text-end">
                {totalSum.toLocaleString()} so‘m
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Orders;

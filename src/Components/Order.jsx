import React, { Fragment, useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { globalContext } from '../App';

function Order() {
  const menuContext = useContext(globalContext);

  // const handleTotal = () => {
  //   globalContext.totalOrderAmount();
  // };

  // const handleDelete = (id) => {
  //   menuContext.removeOrderItem(id);
  // };

  // const handleIncrease = (id) => {
  //   menuContext.increaseItem(id);
  //   console.log(handleIncrease);
  // };

  return (
    <>
      <h3>Pedido</h3>
      {menuContext.items.order.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>

          <section>
            <button type="button" onClick={() => menuContext.removeOrderItem(item.id)}>Delete</button>
            <button type="button" onClick={() => menuContext.increaseItem(item.id)}>+</button>
            <button type="button">-</button>
          </section>
        </div>

      ))}
      <h3>
        Total:
        {' '}
        {/* {handleTotal} */}
      </h3>
    </>
  );
}

export default Order;

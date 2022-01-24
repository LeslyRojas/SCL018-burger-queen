// const [dishes, setDishes] = useState(false);
// const menuOption () {
//   if (setDishes.filter('breakfast')) {
//     return menu.breakfast;
//   }
// };
// const menuOption = (item) => {
//   switch (item) {
//     case 'breakfast':
//       setDishes(menu.includes(() => item.category === 'breakfast'));
//       break;
//     case 'hamburgers':
//       setDishes(menu.includes(() => item.category === 'hamburgers'));
//       break;
//     case 'sidedish':
//       setDishes(menu.includes(() => item.category === 'sidedish'));
//       break;
//     case 'drinks':
//       setDishes(menu.includes(() => item.category === 'drinks'));
//       break;
//     default:
//       break;
//   }
// };
//   return (
//     <div>
//       <button type="button" onClick={menuOption('breakfast')}>DESAYUNO</button>
//       <button type="button" onClick={menuOption('hamburgers')}>HAMBURGUESAS</button>
//       <button type="button" onClick={menuOption('sidedish')}>ACOMPAÑAMIENTOS</button>
//       <button type="button" onClick={menuOption('drinks')}>BEBIDAS</button>
//       <hr />
//       {dishes && dishes.map(() => <Food key={menu.id} name={menu.name} />)}
//     </div>
//   );

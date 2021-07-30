// import { useEffect, useState } from 'react';
// import productApi from './api/productApi';

import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Todos from "./components/Todos/Todos";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   const fetchProductList = async () => {
  //     try {
  //       const params = { _page: 1, _limit: 10 };
  //       const response = await productApi.getAll(params);
  //       setProductList(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchProductList();
  // }, []);

  // const listItems = productList.map((product) =>
  //   <li key={product.id}>
  //     {product.name}
  //   </li>
  // );

  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider></AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>

    </div>
  );
}

export default App;

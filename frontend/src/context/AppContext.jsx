import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const AppContext = createContext();

const API = "http://localhost:5000";

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [singleOrder, setSingleOrder] = useState(null);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `${API}/api/users/me`,
          {
            withCredentials: true
          }
        );

        setUser(data);
      } catch (err) {
        setUser(null);
      } finally {
        setUserLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const addToCart = (product) => {
    console.log("clicked", product);

    const {data} = axios.post('')
    
    const exists = cart.find(
      (item) => item._id === product._id
    );

    let newCart;

    if (exists) {
      newCart = cart.map((item) =>
        item._id === product._id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );
    } else {
      newCart = [
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ];
    }

    setCart(newCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter(
      (item) => item._id !== id
    );

    setCart(newCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );
  };
  const updateQuantity = (id, state) => {
  const newCart = cart.map(item => {
    if (item._id === id) {
      return {
        ...item,
        quantity: state === 'plus'
          ? item.quantity + 1
          : Math.max(1, item.quantity - 1)
      }
    }
    return item
  })
  setCart(newCart)
  localStorage.setItem('cart', JSON.stringify(newCart))
}

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  if (userLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-pink-600 text-xl">
        Loading...
      </div>
    );
  }



  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        singleOrder,
        setSingleOrder,
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
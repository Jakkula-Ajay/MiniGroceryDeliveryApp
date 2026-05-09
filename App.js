import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import CartProvider from "./src/context/CartContext";
import AuthProvider from "./src/context/AuthContext";
const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <AppNavigator />
      </CartProvider>
    </AuthProvider>
  );
};
export default App; 
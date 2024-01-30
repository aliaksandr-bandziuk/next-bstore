'use client';

// this component is used to wrap the entire app with the redux store
// important fo use client directive
import React from "react";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </PersistGate>
    </Provider>
  )
}

export default Layout
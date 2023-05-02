import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnMount:false,//başka componete gidip tekrar ilgili sayfaya geldiğimizde fetch edilmesini engeller
      refetchOnWindowFocus:false,//başka sekmeye geçip uygulamamızın old. sekmeye tekrar geçince fetch işlemini engeller
    }
  }
}
);

root.render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <AuthProvider>
      <App />
      </AuthProvider>
    </ChakraProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

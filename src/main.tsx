import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StoreProvider } from "@/provider/storeProvider.tsx";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <StoreProvider>
        <main className="dark text-foreground bg-background">
          <App />
        </main>
      </StoreProvider>
    </NextUIProvider>
  </React.StrictMode>
);

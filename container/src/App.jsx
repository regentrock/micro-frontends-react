import React, { Suspense } from "react";
import "./App.css";

const Cardapio = React.lazy(() => import("cardapio/Cardapio"));
const Pedido = React.lazy(() => import("pedido/Pedido"));

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Sistema de Pedidos</h1>

      <div className="micros">
        <Suspense fallback={<p>Carregando Cardápio...</p>}>
          <div className="micro">
            <Cardapio />
          </div>
        </Suspense>

        <Suspense fallback={<p>Carregando Pedido...</p>}>
          <div className="micro">
            <Pedido />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

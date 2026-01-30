import React, { useEffect, useState } from "react";
import "./app.css";

export default function App() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    function handler(event) {
      setItens((prev) => [...prev, event.detail]);
    }

    window.addEventListener("adicionar-pedido", handler);

    return () => {
      window.removeEventListener("adicionar-pedido", handler);
    };
  }, []);

  function limparPedido() {
    setItens([]);
  }

  return (
    <div className="pedido-container">
      <h2>🧾 Pedido</h2>

      {itens.length === 0 ? (
        <p className="pedido-vazio">Nenhum item no pedido</p>
      ) : (
        <>
          <ul className="pedido-lista">
            {itens.map((item, index) => (
              <li key={index} className="pedido-item">
                <span>{item.nome}</span>
              </li>
            ))}
          </ul>

          <div className="pedido-footer">
            <button className="btn-limpar" onClick={limparPedido}>
              Limpar pedido
            </button>
          </div>
        </>
      )}
    </div>
  );
}

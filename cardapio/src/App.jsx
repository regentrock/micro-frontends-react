import React from "react";
import "./app.css";

const pratos = [
  { id: 1, nome: "Hambúrguer", descricao: "Hambúrguer artesanal" },
  { id: 2, nome: "Pizza", descricao: "Pizza de calabresa" },
  { id: 3, nome: "Lasanha", descricao: "Lasanha à bolonhesa" },
];

export default function App() {
  function adicionarAoPedido(prato) {
    window.dispatchEvent(
      new CustomEvent("adicionar-pedido", { detail: prato })
    );
  }

  return (
    <div className="cardapio-container">
      <h2>🍽️ Cardápio</h2>

      {pratos.map((prato) => (
        <div className="card-item" key={prato.id} style={{ marginBottom: 12 }}>
          <strong>{prato.nome}</strong>
          <p>{prato.descricao}</p>
          <button onClick={() => adicionarAoPedido(prato)}>
            Adicionar ao pedido
          </button>
        </div>
      ))}
    </div>
  );
}

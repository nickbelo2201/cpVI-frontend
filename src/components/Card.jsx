import React from "react";

const Card = ({ nome, marca, ano, preco, imagem }) => {
  return (
    <article className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
      <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
      <div className="p-4 text-white">
        <p className="text-xs uppercase text-amber-500">{marca}</p>
        <h3 className="text-lg font-semibold">{nome}</h3>
        <p className="text-sm text-gray-400">Ano {ano}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold">R$ {preco}/dia</span>
          <button className="bg-amber-500 text-black text-sm font-medium px-3 py-1.5 rounded-md hover:bg-amber-400">
            Alugar
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
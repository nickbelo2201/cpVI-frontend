import React from "react";
import { Link } from "react-router-dom";

const diferenciais = [
  { titulo: "Frota exclusiva", texto: "Marcas como Porsche, BMW, Mercedes e Audi." },
  { titulo: "Seguro completo", texto: "Cobertura total durante toda a locação." },
  { titulo: "Entrega no local", texto: "Levamos o carro até você, sem burocracia." },
];

const Home = () => {
  return (
    <section className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Dirija o <span className="text-amber-500">extraordinário</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Locação de carros importados com atendimento premium, entrega no local e total segurança.
        </p>
        <Link
          to="/carros"
          className="inline-block mt-8 bg-amber-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-amber-400"
        >
          Ver frota
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24 grid gap-6 md:grid-cols-3">
        {diferenciais.map((d) => (
          <div key={d.titulo} className="bg-gray-900 rounded-xl p-6">
            <h3 className="font-semibold text-amber-500">{d.titulo}</h3>
            <p className="mt-2 text-sm text-gray-400">{d.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
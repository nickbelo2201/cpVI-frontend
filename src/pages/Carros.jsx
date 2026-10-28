import React from "react";
import Card from "../components/Card";

const carros = [
  { id: 1, nome: "911 Carrera", marca: "Porsche", ano: 2023, preco: "2.500", imagem: "https://placehold.co/600x400?text=Porsche+911" },
  { id: 2, nome: "M4 Competition", marca: "BMW", ano: 2023, preco: "1.800", imagem: "https://placehold.co/600x400?text=BMW+M4" },
  { id: 3, nome: "AMG GT", marca: "Mercedes-Benz", ano: 2022, preco: "2.200", imagem: "https://placehold.co/600x400?text=Mercedes+AMG+GT" },
  { id: 4, nome: "R8 V10", marca: "Audi", ano: 2022, preco: "2.400", imagem: "https://placehold.co/600x400?text=Audi+R8" },
  { id: 5, nome: "Huracán", marca: "Lamborghini", ano: 2021, preco: "4.500", imagem: "https://placehold.co/600x400?text=Lamborghini+Huracan" },
  { id: 6, nome: "F8 Tributo", marca: "Ferrari", ano: 2021, preco: "5.000", imagem: "https://placehold.co/600x400?text=Ferrari+F8" },
];

const Carros = () => {
  return (
    <section className="bg-gray-950 text-white min-h-[70vh]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">
          Nossa <span className="text-amber-500">frota</span>
        </h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carros.map((carro) => (
            <Card key={carro.id} {...carro} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carros;
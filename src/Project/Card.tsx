import React from "react";
import PurchaseButton from "./PurchaseButton";

export type products = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: Rating;
};

interface Rating {
  rate: number;
  count: number;
}

interface productProps {
  userProducts: products[];
  setUserProducts: React.Dispatch<React.SetStateAction<products[]>>;
  product: products;
}

export default function Card({
  product,
}: productProps) {

  return (
    <div
      className="sm:w-[30%] w-full shadow-lg rounded-[10px] hover:scale-[1.02] mb-4 mt-4 border-b-2 border-transparent transition-all duration-300 ease-in-out hover:border-b-blue-900 text-[0.8rem] hover:bg-cyan-200 hover:shadow-lg"
      key={product.id}
    >
      <div className="flex gap-3 p-2">
        <img
          className="w-[40%] h-[135px] rounded-4xl"
          src={product.image}
          alt={product.title}
        />
        <div className="sm:flex sm:flex-col">
          <h2 className="font-bold sm:text-[0.9rem] text-xl text-blue-900 mt-3">
            {product.title}
          </h2>
          <div className="flex flex-wrap gap-5 mt-3">
            <h3 className="font-serif font-bold">{product.category}</h3>
            <h3 className="font-sans font-medium hover:text-green-600 duration-150 cursor-default">
              Price : ${product.price}
            </h3>
            <h3 className="font-sans font-medium hover:text-blue-800 duration-150 cursor-default">
              Purchased : {product.rating.count}
            </h3>
            <h3 className="font-sans font-medium hover:text-red-900 duration-150 cursor-default">
              Rating : {product.rating.rate}
            </h3>
          </div>
        </div>
      </div>
      <div className="grid gap-4 w-full p-3.5 font-sans font-medium text-gray-700">
        <h2 className="sm:text-[0.750rem] text-[0.930rem]">
          <b className="font-bold text-black sm:text-[0.750rem]">Description</b>
          : {product.description}
        </h2>
        <div className="flex justify-center">
          <PurchaseButton />
        </div>
      </div>
    </div>
  );
}

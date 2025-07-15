import React from "react";
// import PurchaseButton from "./PurchaseButton";
import Card, { type products } from "./Card";

// type products = {
//   //   [x: string]: any;
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   category: string;
//   rating: Rating;
// };

// interface Rating {
//   rate: number;
//   count: number;
// }

export default function ProductsContainer() {
  const [userProducts, setUserProducts] = React.useState<products[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setUserProducts(data);
      })
      .catch((e) => {
        console.log("Errer fetching Users:", e);
      });
  }, []);

  const filteredProducts = userProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search here..."
          className="p-2 outline-none hover:border-b-2 ml-2 w-[40%] mb-4 font-bold text-gray-900"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex flex-wrap justify-center gap-5">
          {(searchTerm ? filteredProducts : userProducts).length > 0 ? (
            (searchTerm ? filteredProducts : userProducts).map((product) => (
              <>
                <Card
                  key={product.id}
                  product={product}
                  userProducts={userProducts}
                  setUserProducts={setUserProducts}
                />
              </>
            ))
          ) : (
            <p className="text-gray-500 italic text-center w-full">
              No products found
            </p>
          )}
        </div>
      </div>
    </>
  );
}

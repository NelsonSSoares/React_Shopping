import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { api } from "../../services/api";
import type { Product } from "../../types/products";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  function handleAddCartItem(product: Product) {
    toast.success("Produto adicionado ao carrinho!",{
      style:{
        borderRadius: 10,
        backgroundColor: "#121212",
        color: "#fff",
      }
    });
    addItemCart(product);
  }

  return (  
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          PRODUTOS EM ALTA
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section key={product.id} className="w-full ">
              <Link to={`/product/${product.id}`}>
              <img
                className="w-full rounded-lg max-h-70 mb-2 "
                src={product.cover}
                alt={product.title}
              />
              <p className="font-medium mt-1 mb-2">{product.title}</p>
              </Link>
              <div className="flex gap-3 items-center">
                <strong className="text-zinc700/90">
                R$ {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 })}</strong>
                <button onClick={()=> handleAddCartItem(product)} className="bg-zinc-900 p-1 rounded">
                  <BsCartPlus className="cursor-pointer" size={20} color="#fff" />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

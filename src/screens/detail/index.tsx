import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import type { Product } from "../../types/products";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const { addItemCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      console.log(response.data);

      setProduct(response.data);
    }
    getProduct();
  }, [id]);

  function handleItem(product: Product) {
      toast.success("Produto adicionado ao carrinho!", {
          style: {
              borderRadius: 10,
              backgroundColor: "#121212",
              color: "#fff",
            },
        });
        addItemCart(product);
        navigate(`/cart`)
  }
  return (
    <main className="w-full max-w-7xl px-4 mx-auto my-8">
      {product && (
        <section className="w-full">
          <div className="flex flex-col lg:flex-row">
            <img
              className="flex-1 w-full max-h-72 object-contain"
              src={product.cover}
              alt={product.title}
            />
            <div className="flex-1">
              <p className="font-bold text-2xl mt-4 mb-2">{product.title}</p>
              <p className="my-4">{product.description}</p>
              <strong className="text-zinc700/90 text-xl">
                R${" "}
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                })}
              </strong>
              <button
                onClick={() => handleItem(product)}
                className="bg-zinc-900 p-1 rounded ml-3 cursor-pointer"
              >
                <BsCartPlus size={20} color="#FFF" />
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

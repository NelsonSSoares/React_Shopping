export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho</h1>
      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          src="https://http2.mlstatic.com/D_Q_NP_745876-MLA100007413481_122025-F.webp"
          alt="Product logo"
          className="w-28"
        />
        <strong>Preço: R$ 1000</strong>
        <div
          className="flex items-center justify-center gap-3"
        >
          <button className="bg-slate-600 text-white font-medium items-center justify-center px-2">
            -
          </button>
          2
          <button className="bg-slate-600 text-white font-medium items-center justify-center px-2">
            +
          </button>
        </div>
        <strong className="float-right">
          SubTotal: R$ 2000
        </strong>
      </section>
      <p className="font-bold mt-4">Total: R$ 2000</p>
    </div>
  );
}

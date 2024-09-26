function CardPayment() {
  return (
    <button className="flex justify-center items-center py-3 rounded-lg text-white bg-dark-green hover:bg-very-dark-blue">
      <div className="flex items-center justify-center">
        <img className="pr-4" src="/icon-cart.svg" alt="" />
        <span className="text-sm font-bold">Add to Cart</span>
      </div>
    </button>
  );
}

export default CardPayment;

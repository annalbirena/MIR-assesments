import CardPayment from "./CardPayment";

function Card() {
  return (
    <article className="max-w-md m-5 rounded-3xl overflow-hidden bg-white text-center text-desaturated-blue">
      <div>
        <img src="/illustration-hero.svg" alt="music avatar image" />
      </div>
      <div className="px-6 py-10 sm:p-12 flex flex-col gap-5">
        <h1 className="text-3xl font-extrabold text-dark-blue">
          Order Summary
        </h1>
        <p className="text-base">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <CardPayment />
        <div className="flex flex-col">
          <button className="text-white font-bold text-md rounded-xl bg-bright-blue pt-4 pb-4 shadow-2xl hover:bg-purple">
            Proceed to Payment
          </button>
          <button className="text-desaturated-blue font-bold text-md rounded-xl pt-4 pb-4 hover:text-dark-blue">
            Cancel Order
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;

import CardPayment from "./CardPayment";

function Card() {
  return (
    <article className="m-4 sm:flex bg-white max-w-xl sm:h-450 rounded-lg overflow-hidden">
      <div className="photo h-64 sm:w-2/4 sm:h-full"></div>

      <div className="p-7 gap-4 flex flex-col justify-between sm:w-2/4">
        <h2 className="text-sm tracking-widest text-dark-grayish-blue">
          PERFUME
        </h2>
        <h1 className="title-font font-extrabold text-4xl leading-8 text-very-dark-blue">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-sm leading-6 text-dark-grayish-blue">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center">
          <span className="title-font pr-4 text-4xl font-extrabold text-dark-green">
            $149.99
          </span>
          <span className="text-sm text-dark-grayish-blue line-through">
            $169.99
          </span>
        </div>
        <CardPayment />
      </div>
    </article>
  );
}

export default Card;

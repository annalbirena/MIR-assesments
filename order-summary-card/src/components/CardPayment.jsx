function CardPayment() {
  return (
    <div className="flex justify-between items-center p-5 rounded-xl bg-very-pale-blue ">
      <div className="flex">
        <img className="pr-4" src="/icon-music.svg" alt="icon music" />

        <div className="flex flex-col text-left">
          <span className="font-bold text-dark-blue">Annual Plan</span>
          <span>$59.99/year</span>
        </div>
      </div>
      <a
        className="text-sm font-bold text-bright-blue underline hover:no-underline hover:text-purple"
        href="#"
      >
        Change
      </a>
    </div>
  );
}

export default CardPayment;

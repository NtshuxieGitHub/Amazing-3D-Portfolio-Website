import { clientReviews } from "../constants";

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">My Client Reviews</h3>

      <dir className="client-container">
        {clientReviews.map((client) => (
          <div key={client.id} className="client-review">
            <div>
              <p className="text-white font-light">{client.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-12 h-12 rounded-full"
                  />

                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">
                      {client.name}
                    </p>

                    <p className="text-white-500 md:text-base text-sm">
                      {client.position}
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <img
                      key={idx}
                      src="/assets/star.png"
                      alt="star"
                      className="w-5 h-5 object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </dir>
    </section>
  );
};

export default Clients;

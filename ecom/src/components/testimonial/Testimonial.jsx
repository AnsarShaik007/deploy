const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span>customers</span> are saying
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-black bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BxnJvfe-jW3MSctMfM3mkkVk5RbhE4Khfg&s"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  alias sequi neque iste eveniet ut eos libero aut. Dolorum
                  voluptates nobis magni necessitatibus deleniti voluptatem
                  suscipit deserunt fugiat cumque saepe.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-black mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Nitya
                </h2>
                <p className="text-gray-500">Developer</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-black bg-gray-100"
                  src="data:image/jpeg;base64,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"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos consectetur possimus ea impedit magnam, aperiam
                  accusamus ipsum esse quaerat quod! Dicta suscipit nam beatae!
                  Explicabo officiis quos reiciendis nulla velit?
                </p>
                <span className="inline-block h-1 w-10 rounded bg-black mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Ansar Shaik
                </h2>
                <p className="text-gray-500">Manager</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-black bg-gray-100"
                  src="data:image/jpeg;base64,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"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores beatae inventore saepe officiis. Quas, dolor optio
                  sint autem iure quidem veniam, eveniet nemo, veritatis illum
                  perferendis minima. Cupiditate, veritatis optio.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-black mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  {" "}
                  Shaik
                </h2>
                <p className="text-gray-500">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

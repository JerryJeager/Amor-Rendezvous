const Contact = () => {
  return (
    <section className="font-comfortaa text-wine py-8 px-[5%]">
      <h2 className="font-bold text-xl lg:text-3xl text-center">
        Have questions or suggestions?
      </h2>
      <p className="italic text-sm max-w-[300px] mx-auto mt-2 text-center">
        Reach out to the developer. I value your feedback and I am here to
        ensure your experience with Amor Rendezvous is exceptional.
      </p>

      <form className="mt-2 bg-wine rounded-lg p-4 w-full lg:w-fit mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          <div>
            <label className="flex flex-col gap-2">
              <span className="text-white">Name</span>
              <input
                type="text"
                placeholder="Your Name"
                className="outline-none p-2 rounded-md"
                required
              />
            </label>
            <label className="flex flex-col gap-2 mt-2">
              <span className="text-white">Email</span>
              <input
                type="email"
                placeholder="Enter a valid email"
                required
                className="outline-none p-2 rounded-md"
              />
            </label>
          </div>
          <div>
            <label>
              <textarea
                placeholder="Message"
                className="p-2 outline-none w-full  h-full rounded-md"
                required
              ></textarea>
            </label>
          </div>
        </div>
        <button type="button" className="w-[120px] mt-2 mx-auto p-1 text-center bg-appBg bg-center bg-cover text-wine">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;

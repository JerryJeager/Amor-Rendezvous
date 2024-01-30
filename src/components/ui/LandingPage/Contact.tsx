import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const notify = (content: string) => toast(content);
  const [state, handleSubmit] = useForm("mjvngdpe");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const showToast = () => {
    if (state.succeeded) {
      notify("Thanks for your Feedback!");
    }
  };
  const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      await handleSubmit(e);
      showToast();
    } catch (error) {
      notify("Error in sending message")
    } finally {
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <section className="font-comfortaa text-wine py-8 px-[5%]">
      <h2 className="font-bold text-xl lg:text-3xl text-center">
        Have questions or suggestions?
      </h2>
      <p className="italic text-sm max-w-[300px] mx-auto mt-2 text-center">
        Reach out to the developer. I value your feedback and I am here to
        ensure your experience with Amor Rendezvous is exceptional.
      </p>

      <form
        onSubmit={(e) => submitMessage(e)}
        className="mt-2 bg-wine rounded-lg p-4 w-full lg:w-fit mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div>
            <label className="flex flex-col gap-2">
              <span className="text-white">Name</span>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="outline-none p-2 rounded-md"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </label>
            <label className="flex flex-col gap-2 mt-2">
              <span className="text-white">Email</span>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter a valid email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none p-2 rounded-md"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </label>
          </div>
          <div>
            <label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="p-2 outline-none w-full  h-full rounded-md"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-[120px] mt-2 mx-auto p-1 text-center bg-appBg bg-center bg-cover text-wine"
        >
          Send
        </button>
      </form>
      <Toaster />
    </section>
  );
};

export default Contact;

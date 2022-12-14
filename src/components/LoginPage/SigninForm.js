import { useState } from "react";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [slot, setSlot] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !slot) {
      setError("Please fill all the fields");
    } else {
      setError("");
      const data = {
        user: email,
        slot: slot,
        month: new Date().toLocaleString("default", { month: "long" }),
        year: new Date().toLocaleString("default", { year: "numeric" }),
      };
      await fetch("http://35.182.246.164:8000/api/payment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.error) {
            setError(JSON.stringify(res.error));
          } else {
            setError(JSON.stringify(res.message));
          }
        })
        .catch((err) => setError(err));
      setSuccess("Form submitted successfully");
    }
  };

  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-indigo-600">
                Welcome back!
              </h1>

              <form className="mt-12" action="" method="POST">
                <div className="relative">
                  <input
                    id="signin-email"
                    name="email"
                    type="text"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="john@doe.com"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email address
                  </label>
                </div>
                <div className="mt-10 relative">
                  <select
                    onChange={(e) => {
                      setSlot(e.target.value);
                    }}
                    value={slot}
                    className=" text-center form-select appearance-none h-10 w-full border-b-2 border-gray-300 text-gray-600 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    aria-label="Default select example"
                  >
                    <option>Select a slot</option>
                    <option>6-7AM</option>
                    <option>7-8AM</option>
                    <option>8-9AM</option>
                    <option>5-6PM</option>
                  </select>
                </div>
                <div className="mt-10 relative">
                  <h5 className=" text-indigo-600">
                    You are booking slot for{" "}
                    <span className="font-bold">
                      {new Date().toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </h5>
                </div>
                {error && (
                  <div className="mt-2 relative">
                    <h5 className=" text-red-600">{error}</h5>
                  </div>
                )}

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="mt-20 px-8 py-4 uppercase rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                >
                  Pay 500 Rs
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;

import { useState } from "react";
import * as EmailValidator from "email-validator";
const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [message, setMessage] = useState(null);
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !age || !gender) {
      setError("Please fill all the fields");
    } else if (!EmailValidator.validate(email)) {
      setError("Please enter a valid email ! ");
    } else if (age < 18 || age > 65) {
      setError("You are not eligible for the session ! ");
    } else {
      setError("");

      const data = {
        name: name,
        email: email,
        age: age,
        gender: gender,
      };
      await fetch("http://35.182.246.164:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            setError(JSON.stringify(data.error));
          }
          setMessage(data.message);
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
                Register Now
              </h1>

              <form className="mt-12" action="" method="POST">
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="text"
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
                  <input
                    id="age"
                    type="number"
                    name="age"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="Age"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                  <label
                    htmlFor="age"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Your Age
                  </label>
                </div>
                <div className="mt-10 relative">
                  <select
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    value={gender}
                    className="form-select appearance-none h-10 w-full border-b-2 border-gray-300 text-gray-600 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    aria-label="Default select example"
                  >
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* {message && (
                  <div className="mt-2 relative">
                    <h5 className=" text-green-600">{message}</h5>
                  </div>
                )}
                {error && (
                  <div className="mt-2 relative">
                    <h5 className=" text-green-600">{error}</h5>
                  </div>
                )} */}

                <button
                  type="submit"
                  onClick={handleRegister}
                  className="mt-2 px-8 py-4 uppercase rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

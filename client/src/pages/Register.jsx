import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { registerInfo, updateRegisterInfo } = useContext(AuthContext);

  return (
    <>
      <div className="flex justify-center items-center">
        <form
          action=""
          className="flex flex-col h-screen pt-[10%] w-[50vw] text-black"
        >
          <div className="w-full text-start mb-10">
            <h2 className="text-5xl text-white">Register</h2>
          </div>
          <input
            className="mb-4 h-10 rounded-xl p-5"
            type="text"
            placeholder="Name"
            onChange={(e) =>
              updateRegisterInfo({ ...registerInfo, name: e.target.value })
            }
          />
          <input
            className="mb-4 h-10 rounded-xl p-5"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              updateRegisterInfo({ ...registerInfo, email: e.target.value })
            }
          />
          <input
            className="mb-4 h-10 rounded-xl p-5"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              updateRegisterInfo({ ...registerInfo, password: e.target.value })
            }
          />
          <button
            className="mb-4 h-12 rounded-xl text-xl bg-blue-600 text-white"
            type="submit"
          >
            Register
          </button>
          <span className="h-24 bg-red-200 text-red-700 p-5 rounded-xl">
            An Error occured
          </span>
        </form>
      </div>
    </>
  );
};

export default Register;

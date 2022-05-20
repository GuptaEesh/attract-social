import React from "react";
import { useState } from "react";
import { Button, Input, InputPass, InputSimple } from "../index";
import { login } from "../../features";
import { useAuth } from "../../hooks";
import { SmallLoader } from "../atoms";
const Login = ({ toggleLogin }) => {
  const [loginData, setLoginData] = useState(null);
  const {
    state: { error, loading },
    dispatchAuth,
  } = useAuth();
  const { username, password } = loginData ?? { username: "", password: null };

  const guestLogin = (e) => {
    e.preventDefault();
    setLoginData({ username: "test420", password: "2131!Qaeri" });
  };

  const inputHandler = (e) => {
    setLoginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatchAuth(login(loginData));
    setLoginData(null);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex bg-white flex-col rounded p-8 gap-4 w-80"
    >
      <InputSimple
        title="Username"
        inputType="text"
        inputName="username"
        inputClass="p-1 w-full"
        inputValue={username ?? ""}
        inputFunc={inputHandler}
        inputPlaceHolder="username..."
      />
      <InputPass
        title="Password"
        inputType="password"
        inputName="password"
        inputClass="p-1 w-full "
        inputValue={password ?? ""}
        inputFunc={inputHandler}
        inputPlaceHolder="password..."
      />
      {error.length ? (
        <span className="flex font-medium items-center justify-center text-error">
          {error}
        </span>
      ) : (
        <span className="opacity-0">Validate</span>
      )}
      <Button
        btnType="font-bold rounded p-1 bg-indigo700 hover:bg-indigo600 text-white"
        btnText="Fill-in test credentials"
        btnFunc={guestLogin}
      />
      <span className="flex flex-col">
        New Here?
        <Button
          btnText="Register Here &gt;"
          btnType="rounded py-0.5 border-2 border-modeColorText700 text-modeColorText900 px-1 font-bold"
          btnFunc={toggleLogin}
        />
      </span>
      {loading ? (
        <div className="flex flex-col self-center font-bold p-1">
          <SmallLoader />
        </div>
      ) : (
        <Input
          inputType="submit"
          inputClass="rounded cursor-pointer p-1 bg-indigo700 text-white hover:bg-indigo600 font-bold"
          inputValue="Login"
        />
      )}
    </form>
  );
};

export { Login };

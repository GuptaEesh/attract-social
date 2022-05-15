import React from 'react'
import { Button, Input, InputPass, InputSimple } from "../index";
const Login = ({toggleLogin}) => {
  return (
    
    
        <form
        //   onSubmit={submitHandler}
          className="flex bg-white flex-col rounded p-8 gap-4 w-80"
        >
          <InputSimple
            title="Email"
            inputType="email"
            inputName="email"
            inputClass="p-1 w-full"
            // inputValue={email ?? ""}
            // inputFunc={inputHandler}
            inputPlaceHolder="email..."
          />
          <InputPass
            title="Password"
            inputType="password"
            inputName="password"
            inputClass="p-1 w-full "
            // inputValue={password ?? ""}
            // inputFunc={inputHandler}
            inputPlaceHolder="password..."
          />
          {/* {error ? (
            <span className="flex font-medium items-center justify-center text-lg bg-light_background text-error">
              Wrong Credentials
            </span>
          ) : (
            <span className="opacity-0">Validate</span>
          )} */}
          <Button
            btnType="font-bold rounded p-1 bg-indigo700 hover:bg-indigo600 text-white"
            btnText="Fill-in test credentials"
            // btnFunc={guestLogin}
          />
          <span className="flex flex-col">
            New Here?
          <Button btnText="Register Here &gt;" btnType="rounded py-0.5 border-2 border-modeColorText700 text-modeColorText900 px-1 font-bold" btnFunc={toggleLogin} />
          </span>
          <Input
            inputType="submit"
            inputClass="rounded cursor-pointer p-1 bg-indigo700 text-white hover:bg-indigo600 font-bold"
            inputValue="Login"
          />
        </form>
  
  )
}

export {Login}

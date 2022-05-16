
import { Input, InputPass, InputSimple } from "../../index";
import { PassChecker } from "./password-checker";
import { Button, SmallLoader } from "../../atoms";
import { useState } from "react";
import { useAuth } from "../../../hooks";
import { handlePass, signup } from "../../../features";

export function SignUp({toggleLogin}) {

  const [formData,setFormData]=useState({});
  const {state:{error,loading},dispatchAuth}=useAuth();
  
  const inputHandler=(e)=>{
    setFormData(prevData=>({...prevData,[e.target.name]:e.target.value}))
  }
  const {name,username,email,password,confirmPass}=formData;
  const requiredFormData={name,username,email,password}
  const submitHandler=(e)=>{
    e.preventDefault();
    password!==confirmPass ? dispatchAuth(handlePass()) : dispatchAuth(signup(requiredFormData));
  }
  return (
  
        <form
          onSubmit={submitHandler}
          className="flex bg-white flex-col rounded p-8 gap-4 w-80"
        >
          <InputSimple
            title="Name"
            inputName="name"
            inputClass="p-1 w-full"
            inputPlaceHolder="name..."
            inputType="text"
            inputValue={name ?? ""}
            inputFunc={inputHandler}
          />
          <InputSimple
            title="UserName"
            inputName="username"
            inputClass="p-1 w-full"
            inputPlaceHolder="username..."
            inputType="text"
            inputValue={username ?? ""}
            inputFunc={inputHandler}
          />
          <InputSimple
            title="Email"
            inputName="email"
            inputClass="p-1 w-full"
            inputPlaceHolder="email..."
            inputType="email"
            inputValue={email ?? ""}
            inputFunc={inputHandler}
          />
          <InputPass
            title="Password"
            inputName="password"
            inputValue={password ?? ""}
            inputFunc={inputHandler}
            inputClass="p-1 w-full"
            inputPlaceHolder="password..."
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
          />
          <InputPass
            title="Repeat Password"
            inputName="confirmPass"
            inputValue={confirmPass ?? ""}
            inputFunc={inputHandler}
            inputClass="p-1 w-full"
            inputPlaceHolder="confirm password.."
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
          />
          <PassChecker pass={password ?? ""} confirmPass={confirmPass ?? ""} />
          {error.length ? (
            <span className="bg-light_background text-error">{error}</span>
          ) : (
            <span className=" invisible	">Good to go!</span>
          )}
          <span className="flex flex-col text-heading">
            Already a customer?
          <Button btnText="Log in here &gt;" btnFunc={toggleLogin} btnType="rounded py-0.5 px-1 pointer border-2 border-modeColorText700 font-bold" />   
          </span>
          {
          loading?
          (<div className='flex flex-col self-center font-bold p-1'>
            <SmallLoader />
          </div>)
          :
          (<Input
            inputType="submit"
            inputClass="rounded cursor-pointer p-1 bg-indigo700 hover:bg-indigo600 text-white font-bold"
          />)
          }
          
        </form>
      
   
  
)}

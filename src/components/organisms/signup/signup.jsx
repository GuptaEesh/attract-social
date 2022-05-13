
import { Input, InputPass, InputSimple } from "../../index";
import { PassChecker } from "./password-checker";
import { Button } from "../../atoms";

export function SignUp({toggleLogin}) {

  return (
  
        <form
          // onSubmit={submitHandler}
          className="flex bg-white flex-col rounded p-8 gap-4 w-80"
        >
          {" "}
          <InputSimple
            title="Name"
            inputName="name"
            inputClass="p-1 w-full"
            inputPlaceHolder="name..."
            inputType="text"
            // inputValue={name}
            // inputFunc={inputHandler}
          />
          <InputSimple
            title="Email"
            inputName="email"
            inputClass="p-1 w-full"
            inputPlaceHolder="email..."
            inputType="email"
            // inputValue={email}
            // inputFunc={inputHandler}
          />
          <InputPass
            title="Password"
            inputName="password"
            // inputValue={password}
            // inputFunc={inputHandler}
            inputClass="p-1 w-full"
            inputPlaceHolder="password..."
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
          />
          <InputPass
            title="Repeat Password"
            inputName="confirmPass"
            // inputValue={confirmPass}
            // inputFunc={inputHandler}
            inputClass="p-1 w-full"
            inputPlaceHolder="confirm password.."
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
          />
          <PassChecker pass={"123"} confirmPass={"123"} />
          {/* {error ? (
            <span className="bg-light_background text-error">{message}</span>
          ) : (
            <span className=" invisible	">Good to go!</span>
          )} */}
          <span className="flex flex-col text-heading">
            Already a customer?
          <Button btnText="Log in here &gt;" btnFunc={toggleLogin} btnType="rounded py-0.5 px-1 pointer border-2 border-modeColorText700 font-bold" />   
            
         
          </span>
          <Input
            inputType="submit"
            inputClass="rounded p-1 bg-indigo700 text-white font-bold"
          />
        </form>
      
   
  
)}

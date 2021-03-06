import { useState } from "react";

import { Input } from "../../atoms";
import { BsEyeFill, BsEyeSlash } from "../../../icons";
export function InputPass({
  title: name,
  inputClass,
  inputPlaceHolder,
  inputValue,
  inputFunc,
  inputName,
  pattern,
}) {
  const [visibility, setVisibility] = useState(false);
  return (
    <label className="flex flex-col ">
      <span className="text-heading">{name}</span>
      <div className="w-full relative flex items-center">
        <Input
          inputClass={inputClass}
          inputType={visibility ? "text" : "password"}
          inputPlaceHolder={inputPlaceHolder}
          pattern={pattern}
          inputValue={inputValue}
          inputFunc={inputFunc}
          inputName={inputName}
        />
        {visibility ? (
          <BsEyeSlash
            onClick={() => setVisibility(!visibility)}
            className="absolute cursor-pointer right-1 text-primary"
          />
        ) : (
          <BsEyeFill
            onClick={() => setVisibility(!visibility)}
            className="absolute cursor-pointer right-1 text-primary"
          />
        )}
      </div>
    </label>
  );
}

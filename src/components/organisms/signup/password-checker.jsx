import React from "react";
export function PassChecker({ pass = "", confirmPass = "" }) {
  return (
    <div className="flex p-2 flex-col bg-modeColorText900 rounded-md">
      <h2 className="text-sm text-modeColor font-bold">Password Checks</h2>
      {
        <p
          className={ 
            pass.match(/[0-9]/) || confirmPass.match(/[0-9]/)
              ? "text-modeColorText300 line-through text-sm"
              : "text-modeColorText300 font-bold text-sm"
          }
        >
          Need atleast one number
        </p>
      }
      {
        <p
          className={
            pass.match(/[a-z]/) || confirmPass.match(/[a-z]/)
              ? " line-through text-sm text-modeColorText300"
              : "font-bold text-sm text-modeColorText300"
          }
        >
          Need atleast one small alphabet
        </p>
      }
      {
        <p
          className={ 
            pass.match(/[A-Z]/) || confirmPass.match(/[A-Z]/)
              ? " line-through text-sm text-modeColorText300"
              : "font-bold text-sm text-modeColorText300"
          }
        >
          Need atleast one capital alphabet
        </p>
      }
      {
        <p
          className={
            pass.length >= 8 || confirmPass.length >= 8
              ? " line-through text-sm text-modeColorText300"
              : "font-bold text-sm text-modeColorText300"
          }
        >
          Atleast 8 characters long
        </p>
      }
      {
        <p
          className={ 
            pass.match(/[-’/`~!#*$@_%+=.,^&(){}[]|;:”<>?\\]/) ||
            confirmPass.match(/[-’/`~!#*$@_%+=.,^&(){}[]|;:”<>?\\]/)
              ? " line-through text-sm text-modeColorText300"
              : "font-bold text-sm text-modeColorText300"
          }
        >
          Need atleast one special character
        </p>
      }
    </div>
  );
}

import React from "react";
import { useLocation } from "react-router-dom";
import { appRoutes } from "../../utils";
import { Filters } from "./filters";
import { SuggestedPeople } from "./suggested-people";
const FilterBar = () => {
  const location = useLocation();
  const routeCheck = location.pathname === appRoutes.home;
  return (
    <div className="lg:w-[19.5vw] md:sticky lg:absolute bg-modeColorText700 lg:shadow-none sticky h-fit md:h-fit lg:h-[100vh] mt-20 right-0 md:shadow-md shadow-md order-1 md:order-1 lg:order-2">
      <section className="flex flex-col h-full gap-2">
        {routeCheck && <Filters />}
        <fieldset className="p-1 m-1 mt-6 hidden md:hidden lg:block">
          <legend className="font-bold my-2 text-center text-white">
            You might know
          </legend>
          <SuggestedPeople />
        </fieldset>
      </section>
    </div>
  );
};

export { FilterBar };

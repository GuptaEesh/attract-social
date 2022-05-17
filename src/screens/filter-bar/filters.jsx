import React from "react";
import { Button, Input } from "../../components";
import {
  clearFiltersHandler,
  sortByDateHandler,
  trendHandler,
} from "../../features";
import { usePosts } from "../../hooks";
import { BiTrendingUp } from "../../icons";
const Filters = () => {
  const {
    state: { sortByDate, trending },
    dispatchPosts,
  } = usePosts();
  const trendSetter = () => dispatchPosts(trendHandler());
  const clearFilters = () => dispatchPosts(clearFiltersHandler());
  return (
    <div className="flex flex-row md:flex-row md:justify-around p-2 lg:flex-col gap-8  m-2">
      <Button
        btnFunc={clearFilters}
        btnText="Clear Filters"
        btnType="hover:bg-indigo900 hover:text-white p-2 font-bold m-2 rounded-md transition-all duration-300 ease-in "
      />
      <section className="flex flex-col md:flex-row md:gap-4 lg:flex-col gap-2">
        <fieldset className="flex border-2 p-4 items-center flex-col gap-4">
          <legend className="text-xl leading-5">Sort By Date</legend>
          <div className="mt-2 flex w-full justify-around gap-4">
            <label className="flex gap-2 items-center">
              <Input
                checkStatus={sortByDate === "OLDEST"}
                inputName="date-sort"
                inputType="radio"
                inputFunc={() => dispatchPosts(sortByDateHandler("OLDEST"))}
              />
              <span className="font-bold">Oldest</span>
            </label>
            <label className="flex gap-2 items-center">
              <Input
                checkStatus={sortByDate === "LATEST"}
                inputName="date-sort"
                inputType="radio"
                inputFunc={() => dispatchPosts(sortByDateHandler("LATEST"))}
              />
              <span className="font-bold">Latest</span>
            </label>
          </div>
        </fieldset>

        {trending ? (
          <div
            onClick={trendSetter}
            className="flex text-white justify-center p-3 mx-4 rounded bg-indigo900 hover:bg-indigo700 cursor-pointer sm:w-auto items-center space-x-2"
          >
            <p className="text-base leading-4">Normal Feed</p>
          </div>
        ) : (
          <div
            onClick={trendSetter}
            className="flex text-white justify-center p-3 mx-4 rounded bg-indigo900 hover:bg-indigo700 cursor-pointer sm:w-auto items-center space-x-2"
          >
            <BiTrendingUp />
            <p className="text-base leading-4">Trending</p>
          </div>
        )}
      </section>
    </div>
  );
};

export { Filters };

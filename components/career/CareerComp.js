"use client";
import React, { useState } from "react";
import Title from "../common/Title";
import Card from "./Card";
import { jobData } from "@/config/utils";
import Input from "../common/Input";

const CareerComp = () => {
  const [jobs, setJobs] = useState(jobData);
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  //   const filterFunc = (searchText, filter1, filter2, filter3) => {};

  const filterJobs = (searchText, location, type, name) => {
    const filteredJobs = jobData.filter((job) => {
      // Filter by search text
      if (
        searchText &&
        (!job.name.toLowerCase().includes(searchText.toLowerCase()) &&  
        !job.type.toLowerCase().includes(searchText.toLowerCase()) && 
        !job.location.toLowerCase().includes(searchText.toLowerCase()) )
      ) {
        return false;
      }
      // Filter by location
      if (location && job.location !== location) {
        return false;
      }
      // Filter by type
      if (type && job.type !== type) {
        return false;
      }
      // Filter by name
      if (name && job.name !== name) {
        return false;
      }
      return true;
    });

    setJobs(filteredJobs);
  };

  return (
    <React.Fragment>
      <div className="m-[40px]">
        <Title title={"Career"} />

        <div className="flex ">
          <div className="w-[436px]">
            <div>FIlter</div>

            <div>
              <label
                for="search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">

                <input
                  type="search"
                  id="search"
                  class="block w-full p-4 ps-10 text-sm rounded-lg  border-2 border-gray-200 focus-visible:border-2 focus:border-[#8B90B6]"
                  placeholder="Search"
                //   required
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    filterJobs(e.target.value, location, type, name);
                  }}
                />
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* <Input
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                filterJobs(e.target.value, location, type, name);
              }}
            /> */}

            <div className="my-6">
            <label for="countries_multiple" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Location</label>
              <select
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  filterJobs(searchText, e.target.value, type, name);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">All Locations</option>
                <option value="Pune">Pune</option>
                <option value="Bangluru">Bangluru</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
            <div className="w-full my-6">
            <label for="countries_multiple" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Job Type</label>
              <select
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  filterJobs(searchText, location, e.target.value, name);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">All Types</option>
                <option value="Fulltime">Fulltime</option>
                <option value="Part time">Part time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div className="my-6">
            <label for="countries_multiple" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Job Name</label>
              <select
                value={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setName(e.target.value);
                  filterJobs(searchText, location, type, e.target.value);
                }}
              >
                <option value="">All Names</option>
                {jobData.map((job) => (
                  <option key={job.name} value={job.name}>
                    {job.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="ml-[8%]">
            {jobs.map((job, ind) => (
              <React.Fragment key={ind}>
                <div className="mb-10">
                  <Card job={job} />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CareerComp;

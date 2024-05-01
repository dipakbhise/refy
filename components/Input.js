import React from "react";

const Input = (props) => {
  return (
    <React.Fragment>
          <div className="w-full">
            <div class="relative mt-6 mb-2 w-full">
              <input
                type={"text"}
                required
                // value={blogData.title}
                name="title"
                // onChange={handleOnChange}
                id="owner"
                class="w-full block px-2.5 pb-2.5 pt-4 text-sm border text-[#8B90B6] bg-transparent rounded-[3px] border-1 border-[#8B90B6] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...props}
              />
              <label
                for="owner"
                class="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#8B90B6] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                {props.title}
              </label>
            </div>
          </div>
    </React.Fragment>
  );
};

export default Input;

'use client'
import Link from "next/link";
import React from "react";
import { navMenu, socialMediaIcons } from "../../config/utils";
import styles from './styles.module.css'

const Navbar = () => {

  return (
    <>
    <div className="p-[20px]">
      <nav className={`bg-white p-[30px] rounded-[50px] shadow-2xl margin-[20px] h-[3rem] flex items-center text-white sticky top-0 z-10 ${styles.hey}`}>
        <div className="flex justify-between items-center ml-2 w-full">
          <Link href={"/"} className="flex items-center text-black"><img className="w-[40px] h-[40px] mr-1" src={"https://s3-alpha-sig.figma.com/img/74fd/3b91/f55d5366aef70d9f86e85f54d30c005e?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ByMtAVqsuhXeA5zAzm3aUFQedwzyo9BkeyxAxBRiY9HK0Uh8lPKVeDB-yOAfT4L0-~70BLLpfXNCfIIdZlnn0zvNNuSm83BZgK8qXCM6NRC461Aof7OGP0siSyo12U1Jcsc1pjqeG2-kj8XodCkh3k90FXrcqWeUcNx~99FhZ4CRpf53zHLtCyusGIXToXCy7ObQ2boyKCEReekP01UTfPQ2yXdkDlvaICK3rfSkX6093lEfUkhmtNefHFPzfikXApgr~VdsPWhiUR-4O1bEztZKNuUsUYm0dGpyKUSNFQ2u0uznM6OkQ05kroiF-9OCNSWV~RfpucRXBWRfY1bI2g__"} />AB Dummy Pte. Ltd</Link>

          <div className="flex items-center justify-around">
            {navMenu.map((item, index) => (
              <div className="mr-4" key={index}>
                <Link href={item.url}  rel="noopener noreferrer" className="text-black">{item.name}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Bottom Menu */}

        {/* <div className="bg-gradient-to-r from-[#2e2e99] to-[#6868eb] h-[3rem] w-full text-white fixed bottom-2 flex justify-around items-center lg:hidden rounded-[40px] font-extrabold">
          <div>
            <Link href={"/"}>Home</Link>
          </div>
          <div>
            <Link href={"/"}>Orders</Link>
          </div>
          <div>
            <Link href={"/"}>Offers</Link>
          </div>
          <div>
            <Link href={"/"}>Accounts</Link>
          </div>
        </div> */}
      </nav>
      </div>
    </>
  );
};

export default Navbar;

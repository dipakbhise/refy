'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navMenu } from "../../config/utils";
import styles from './styles.module.css';
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'],weight: ["400", "500", "600", "700", "800", "900"], });

const Navbar = () => {

  const[routeName, setRouteName]=useState("")

  useEffect(()=>{
    const pathname = window.location.pathname;
    const routeName = pathname.substring(1); // Removes the leading slash
    setRouteName(routeName);

  },[])


  return (
    <>
    <div className="p-[40px]">
      <nav className={`bg-white p-[40px] rounded-[50px] shadow-2xl margin-[20px] h-[3rem] flex items-center text-white sticky top-0 z-10 ${styles.hey}`}>
        <div className="flex justify-between items-center ml-2 w-full">
          <Link href={"/"} className="flex items-center text-black text-[20px] font-bold"><img className="w-[80px] h-[80px]" src={"https://s3-alpha-sig.figma.com/img/74fd/3b91/f55d5366aef70d9f86e85f54d30c005e?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ByMtAVqsuhXeA5zAzm3aUFQedwzyo9BkeyxAxBRiY9HK0Uh8lPKVeDB-yOAfT4L0-~70BLLpfXNCfIIdZlnn0zvNNuSm83BZgK8qXCM6NRC461Aof7OGP0siSyo12U1Jcsc1pjqeG2-kj8XodCkh3k90FXrcqWeUcNx~99FhZ4CRpf53zHLtCyusGIXToXCy7ObQ2boyKCEReekP01UTfPQ2yXdkDlvaICK3rfSkX6093lEfUkhmtNefHFPzfikXApgr~VdsPWhiUR-4O1bEztZKNuUsUYm0dGpyKUSNFQ2u0uznM6OkQ05kroiF-9OCNSWV~RfpucRXBWRfY1bI2g__"} />AB Dummy Pte. Ltd</Link>

          <div className="flex items-center justify-around">
            {navMenu.map((item, index) => (
              <div  key={index}>
                <Link href={item.url}  rel="noopener noreferrer" className={`text-[#333333] flex items-center hover:bg-[#18b0e91a] px-[20px] py-[10px] ${navMenu.length != index+1 && "mr-2"} rounded-3xl hover:border-[#18b0e94d]  border-2 hover:border-2 ${routeName== item.value ? "border-[#18b0e94d] bg-[#18b0e91a]" : "border-white" } ${poppins.className}`}>{item.name}
                {item.id==4 && <Image src={"/cart.svg"} width={25.52} height={27.63} className="ml-2"/>}
                </Link>
                
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

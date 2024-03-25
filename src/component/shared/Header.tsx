import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2">
        <div className="text-white text-xl font-semibold hover:scale-110 duration-200 transition-all scale-100 px-3 py-2 rounded-2xl">
          <h2>AI kane logo diyen best hobe</h2>
        </div>
        <ul className="flex items-center justify-between gap-6 text-slate-900">
          <li className="cursor-pointer  hover:bg-sky-600 text-white px-6 py-2 rounded-full">
            {" "}
            Home
          </li>
          <Link href={"/products"}>
            {" "}
            <li className="cursor-pointer  hover:bg-sky-600 text-white px-6 py-2 rounded-full">
              {" "}
              products{" "}
            </li>
          </Link>
          <li className="cursor-pointer  hover:bg-sky-600 text-white px-6 py-2 rounded-full">
            {" "}
            About{" "}
          </li>
          <Link href={"/dashboard/all-product"}>
            {" "}
            <li className="cursor-pointer  hover:bg-sky-600 text-white px-6 py-2 rounded-full">
              {" "}
              Dashobard{" "}
            </li>
          </Link>
        </ul>
      </nav>
      ;
    </div>
  );
};

export default Header;

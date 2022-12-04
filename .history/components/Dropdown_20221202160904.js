import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IoShirt } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { MdCrib } from "react-icons/md";
import { GiHandBag, GiPillow, GiShirt } from "react-icons/gi";
import { IoIosShirt } from "react-icons/io";

const MenuItem = (category) => {
  return (
    <div className="px-1 py-1 ">
      <Menu.Item>
        {({ active }) => (
          <Link
            href={`/products?category=${category}`}
            className={`${
              active ? "bg-orange-300 text-white" : "text-gray-900"
            } group flex w-full items-center capitalize rounded-md px-2 py-2 text-sm`}
          >
            {active ? (
              <GiShirt className="mr-2 h-4 w-4" aria-hidden="true" />
            ) : (
              <GiShirt
                className="mr-2 h-4 w-4 text-orange-500"
                aria-hidden="true"
              />
            )}
            {category}
          </Link>
        )}
      </Menu.Item>
    </div>
  );
};

export default function Dropdown({ categories }) {
  console.log(categories);
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-full justify-center space-x-2 rounded-lg text-[17px] font-medium text-textColor flex items-center">
            <p>Our Products</p>
            <BiChevronDown className="text-2xl" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {categories.map((category, index) => (
              <MenuItem key={index} category={category} />
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

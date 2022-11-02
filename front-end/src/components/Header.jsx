import { useCallback, useState } from "react";
import { BiSearch, BiUserCircle, BiCart } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";

import { Link } from "react-router-dom";

export function Header() {
  const [toggleInput, setToggleInput] = useState(false);

  const handleToggleInput = useCallback(() => {
    setToggleInput(!toggleInput);
  }, [toggleInput]);

  return (
    <header className="w-full bg-green-500">
      <div className="container mx-auto">
        <div className="relative flex justify-between items-center px-4 py-4">
          <div>
            <Link
              to="/"
              className="text-white text-2xl font-semibold tracking-wider"
            >
              iFruits
            </Link>
          </div>

          <div className="flex gap-2 bg-green-600 px-4 rounded-full">
            <div>
              <BiSearch
                onClick={handleToggleInput}
                className="fill-white text-3xl cursor-pointer"
              />
              {toggleInput ? (
                <div className="absolute flex justify-center items-center w-full h-full right-0 top-0 px-4 py-2 bg-green-500">
                  <div className="w-full flex items-center border-2 rounded border-green-300 bg-white">
                    <input
                      type="text"
                      className="h-full w-full px-2 py-1 focus:outline-none tracking-wide text-green-900 bg-transparent"
                    />

                    <button onClick={handleToggleInput}>
                      <GrFormClose className="text-2xl cursor-pointer" />
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
            <div>
              <BiUserCircle className="fill-white text-3xl cursor-pointer" />
            </div>
            <div className="relative w-11 h-8">
              <Link to="/carrinho" content="0" className="after:bg-green-600 after:border-2 after:rounded-full after:border-none after:w-6 after:h-6 after:absolute after:-top-2 after:-right-1 after:content-[attr(content)] after:flex after:items-center after:justify-center after:text-white">
                <BiCart
                className="fill-white text-3xl cursor-pointer"
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

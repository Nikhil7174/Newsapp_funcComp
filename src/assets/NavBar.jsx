import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar flex justify-between items-center p-auto fixed top-0 left-0 right-0 shadow-md w-full bg-gray-200/80  backdrop-blur-md lg:bg-white">
          <div className="flex justify-center items-center lg:order-2">
            <div className="hamburger inline-block p-4 cursor-pointer lg:hidden">
              <div className="line h-0.5 w-6 my-1 bg-black"></div>
              <div className="line h-0.5 w-6 my-1 bg-black"></div>
              <div className="line h-0.5 w-6 my-1 bg-black"></div>
            </div>
            <div className="search lg:hidden">
              <img src="/search.svg" className="w-6" alt="" />
            </div>
          </div>
          <div className="logo text-center lg:order-1 flex">
            <div className="p-4 w-32 font-sans flex items-center lg:mt-[-5px] justify-center ">
              <img src="/icons8-canvas-student-32.png" alt="" />
              NewsApp
            </div>
            <div className="features absolute lg:static w-fit lg:w-auto bg-gray-200 lg:bg-white inset-0 lg:flex lg:mx-4 lg:space-x-4 -translate-x-96 lg:translate-x-0 lg:justify-center lg:p-[1rem] ">
              <a href="/business">
                <div className="fitem cursor-pointer hover:underline hover:underline-offset-4">
                  Business
                </div>
              </a>
              <a href="/entertainment">
                <div className="fitem cursor-pointer hover:underline hover:underline-offset-4">
                  Entertainment
                </div>
              </a>
              {/* <a href="/general">
                <div className="fitem cursor-pointer hover:underline hover:underline-offset-4">
                  General
                </div>
              </a> */}
              <a href="/health">
                <div className="fitem cursor-pointer hover:underline hover:underline-offset-4">
                  Health
                </div>
              </a>
              <a href="/science">
                <div className="fitem cursor-pointer hover:underline hover:underline-offset-4">
                  Science
                </div>
              </a>
              <a href="/sports">
                <div className="fitem cursor-pointer hover:underline hover:underline-offset-4">
                  Sports
                </div>
              </a>
              <a href="/technology">
                <div className="fitem cursor-pointer hover:underline hover:underline-offset-4">
                  Technology
                </div>
              </a>
            </div>
          </div>
          <div className="cart text-center lg:order-3 flex">
            <div className="search hidden lg:flex ">
              All Microsoft
              <img src="/search.svg" className="w-10 px-2 mx-2" alt="" />
            </div>
            <div className="flex">
              <img
                src="/iconmonstr-shopping-cart-thin.svg"
                className="w-5 mx-2"
                alt=""
              />
              <img src="/account.svg" className="w-6 mx-2" alt="" />
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;

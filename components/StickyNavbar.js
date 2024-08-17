"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { Navbar, Typography, Button, IconButton, Collapse } from "@material-tailwind/react";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleToggleNav = () => {
    setOpenNav(!openNav);
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link href="#" className="flex items-center text-white">Home</Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link href="#" className="flex items-center text-white">Activities</Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link href="#" className="flex items-center text-white">Download QR</Link>
      </Typography>
    </ul>
  );

  return (
    <div className="w-full mx-auto">
      <Navbar className="sticky top-0 z-10 bg-transparent text-white shadow-xl">
        <div className="flex items-center justify-between px-4 py-2 lg:px-8 lg:py-4">
          <Typography as="a" href="#" className="mr-4 cursor-pointer text-2xl py-1.5 font-medium">
            Sheena Seeds
          </Typography>
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex">{navList}</div>
            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-x-2">
              <Link href="#">
                <Button variant="text" size="sm" className="text-white">
                  <span>About Us</span>
                </Button>
              </Link>
              <Link href="#">
                <Button variant="text" size="sm">
                  <span>Recent Updates</span>
                </Button>
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 lg:hidden"
              ripple={false}
              onClick={handleToggleNav}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Granim from 'granim/lib/Granim';
import StickyNavbar from '@/components/StickyNavbar';
import Logo from '@/components/Logo';
import Hero1 from '@/components/Hero1';

export default function Home() {
  useEffect(() => {
    const granimInstance = new Granim({
      element: '#canvas-basic',
      direction: 'diagonal',
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ['#0448b4', '#00b541'],
            ['#00b541', '#0448b4'],
          ],
        },
      },
    });

    return () => {
      granimInstance.destroy(); 
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-screen">
        <canvas id="canvas-basic" className="absolute inset-0 w-full h-full" />
        <motion.div
          className="flex justify-center items-center h-screen w-screen pb-10 bg-gradient-to-br flex-col"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <StickyNavbar />
          <motion.div
            className="w-full h-full flex justify-center items-center"
            initial={{ opacity: 0.1, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
          >
            <Logo />
          </motion.div>
        </motion.div>
      </div>
      <Hero1 />
    </>
  );
}

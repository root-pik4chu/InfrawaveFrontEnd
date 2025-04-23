"use client"

import 'lenis/dist/lenis.css'
import Image from "next/image";
import FlipCardsGrid from "./components/FlipCards";
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from 'lenis'
import { useEffect } from 'react';
import HomePage from './Pages/HomePage';
import FiveProjectSlider from './Pages/FiveProjectSlider';

import Container  from './Pages/Container';
import NewCardContainer from './myCodeSideCardStack/NewCardContainer';
import Text from './Pages/Text';
import FollowText from './components/FollowText';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {

    // !--------do not touch this code--------------------------------
    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
      smoothTouch: false, 
      wheelMultiplier: 1.3, 
      touchMultiplier: 2.0,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); 
    });
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
    // !---------------------------------------------------------------

  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="w-full bg-zinc-950 text-white">
      {/* <h1>Hello World</h1> */}
     
      {/* <StackingCard /> */}
      <div className="w-full h-screen bg-zinc-950"></div>
      {/* <NewCardContainer /> */}
      <FollowText />
      <Text />
      <Container />
      <HomePage />
      <FiveProjectSlider />
      <FlipCardsGrid />
     

    </div>
  );
}
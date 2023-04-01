"use client"

import { useState, useEffect } from "react";

const DaysCounter = () => {
  const countDownDate = new Date("April 30, 2023 00:00:00").getTime();
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const timeLeft = countDownDate - now;

      if (timeLeft < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };
    const updateTimeLeft = () => {
      setRemainingTime(calculateTimeLeft());

      const timeoutId = setTimeout(() => {
        updateTimeLeft();
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    };

    updateTimeLeft();
  }, [countDownDate]);

  return (
    <section className="text-white grid grid-cols-4 gap-5">
      <div className="flex flex-col items-center">
        <span className="font-light text-xl dateNumbers text-white">
          {remainingTime.days}
        </span>
        <span className="font-extralight text-[#efab43] text-xs dateText">
          Days
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-light text-xl dateNumbers text-white">
          {remainingTime.hours}
        </span>
        <span className="font-extralight text-[#efab43] text-xs dateText">
          Hrs
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-light text-xl dateNumbers text-white">
          {remainingTime.minutes}
        </span>
        <span className="font-extralight text-[#efab43] text-xs dateText">
          Mins
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-light text-xl dateNumbers text-white">
          {remainingTime.seconds}
        </span>
        <span className="font-extralight text-[#efab43] text-xs dateText">
          Secs
        </span>
      </div>
    </section>
  );
};

export default DaysCounter;

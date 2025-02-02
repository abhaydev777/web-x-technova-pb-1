import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set default target date to 1 month from now if none provided
      const target = targetDate ? new Date(targetDate).getTime() : new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
      const now = new Date().getTime();
      const difference = target - now;

      // Don't allow negative values
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0, 
          minutes: 0,
          seconds: 0
        };
      }

      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'), 
        seconds: String(seconds).padStart(2, '0')
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-8 p-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-center w-full max-w-4xl">
        <div className="bg-zinc-800/50 backdrop-blur-sm p-3 md:p-6 rounded-2xl border border-zinc-700">
          <div className="text-2xl md:text-5xl font-mono font-bold text-orange-500 break-words">{timeLeft.days}</div>
          <div className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-1 md:mt-2">Days</div>
        </div>
        <div className="bg-zinc-800/50 backdrop-blur-sm p-3 md:p-6 rounded-2xl border border-zinc-700">
          <div className="text-2xl md:text-5xl font-mono font-bold text-orange-500 break-words">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-1 md:mt-2">Hours</div>
        </div>
        <div className="bg-zinc-800/50 backdrop-blur-sm p-3 md:p-6 rounded-2xl border border-zinc-700">
          <div className="text-2xl md:text-5xl font-mono font-bold text-orange-500 break-words">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-1 md:mt-2">Minutes</div>
        </div>
        <div className="bg-zinc-800/50 backdrop-blur-sm p-3 md:p-6 rounded-2xl border border-zinc-700">
          <div className="text-2xl md:text-5xl font-mono font-bold text-orange-500 break-words">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mt-1 md:mt-2">Seconds</div>
        </div>
      </div>
      <div className="text-sm md:text-lg text-gray-400 animate-pulse text-center break-words">
        T-Minus {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </div>
    </div>
  );
};

export default Countdown;
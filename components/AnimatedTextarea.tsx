"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  placeholders: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function AnimatedTextarea({
  placeholders,
  value,
  onChange,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
    <div className="relative w-full">
      <textarea
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full text-black px-4 py-3 bg-gray-100 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-[#23A654] 
        transition-all resize-none"
      />

      {!value && (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute left-4 top-3 pointer-events-none text-gray-400"
        >
          {placeholders[index]}
        </motion.span>
      )}
    </div>
  );
}
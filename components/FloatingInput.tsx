"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FloatingInputProps {
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  error?: string;
  register?: any;
  multiline?: boolean;
  rows?: number;
}

export default function FloatingInput({
  label,
  type = "text",
  name,
  required = false,
  error,
  register,
  multiline = false,
  rows = 1,
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const baseInputClasses = `
    w-full px-6 py-4 rounded-xl border-2 transition-all duration-300
    bg-ivory text-charcoal font-sans text-base
    focus:outline-none
    ${error ? 'border-red-400' : isFocused ? 'border-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]' : 'border-gold/20'}
    ${multiline ? 'resize-none' : ''}
  `;

  const labelClasses = `
    absolute left-6 transition-all duration-300 pointer-events-none
    ${isFocused || hasValue
      ? 'top-2 text-xs text-gold'
      : 'top-4 text-base text-charcoal/60'
    }
  `;

  const handleChange = (e: any) => {
    setHasValue(e.target.value.length > 0);
  };

  return (
    <div className="relative">
      <motion.label
        initial={false}
        animate={{
          scale: isFocused || hasValue ? 0.85 : 1,
        }}
        className={labelClasses}
      >
        {label}{required && " *"}
      </motion.label>
      
      {multiline ? (
        <textarea
          {...register}
          name={name}
          rows={rows}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          className={baseInputClasses}
        />
      ) : (
        <input
          {...register}
          type={type}
          name={name}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          className={baseInputClasses}
        />
      )}

      {/* Error message with fade-in */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-red-500 text-sm mt-2 ml-2"
        >
          {error}
        </motion.p>
      )}

      {/* Glow effect when focused */}
      {isFocused && !error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 rounded-xl bg-gold/5 pointer-events-none"
        />
      )}
    </div>
  );
}

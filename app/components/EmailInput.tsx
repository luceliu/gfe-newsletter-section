"use client";

import { useState, ChangeEvent } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };

  const invalidFormatMsg = "Please enter a valid email address.";
  const emailRequiredMsg = "Email address is required.";

  return (
    <div className="space-y-2 tablet:w-[334px]">
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        className={`w-full text-neutral-900 px-3 py-2 border ${
          isValid ? "border-gray-300" : "border-red-500"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
        aria-invalid={!isValid}
        aria-describedby="email-error"
        required
      />
      {!isValid && (
        <p id="email-error" className="text-sm text-red-600">
          {email ? invalidFormatMsg : emailRequiredMsg}
        </p>
      )}
    </div>
  );
}

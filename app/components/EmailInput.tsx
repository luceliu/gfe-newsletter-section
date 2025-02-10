"use client";

import { useState, ChangeEvent } from "react";

type EmailInputProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  isEmailValid: boolean;
  setIsEmailValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EmailInput({
  email,
  setEmail,
  isEmailValid,
  setIsEmailValid,
}: EmailInputProps) {
  const [hasUserTyped, setHasUserTyped] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!hasUserTyped) {
      setHasUserTyped(true); // Mark that the user has started typing
    }

    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  const invalidFormatMsg = "Please enter a valid email address.";
  const emailRequiredMsg = "Email address is required.";

  return (
    <div className="space-y-2 tablet:w-[334px]">
      <label htmlFor="email" className="text-neutral-900">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        autoComplete="email"
        onChange={handleEmailChange}
        placeholder="Enter your email"
        className={`w-full text-neutral-900 px-3 py-2 border ${
          isEmailValid || !hasUserTyped ? "border-gray-300" : "border-red-500"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
        aria-invalid={!isEmailValid}
        aria-describedby="email-error"
        required
      />
      {!isEmailValid && hasUserTyped && (
        <p id="email-error" className="text-sm text-red-600">
          {email ? invalidFormatMsg : emailRequiredMsg}
        </p>
      )}
    </div>
  );
}

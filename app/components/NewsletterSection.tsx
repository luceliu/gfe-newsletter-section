"use client";

import { useEffect, useState } from "react";
import FeatureListItem from "./FeatureListItem";
import EmailInput from "./EmailInput";
import Image from "next/image";

export default function NewsletterSection() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailVal, setEmailVal] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const handleSubscribeClick = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/projects/challenges/newsletter",
        {
          method: "POST",
          body: JSON.stringify({ email: emailVal }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching data:", error.message);
        setError(error.message);
      } else {
        console.error("An unknown error occurred:", error);
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col bg-white m-4 p-4 w-screen rounded 
    tablet:rounded-md 
    desktop:px-16 desktop:py-24 desktop:flex-row desktop:items-center desktop:max-h-screen"
    >
      <div className="desktop:w-[50%]">
        <h1
          className="font-semibold text-3xl my-4 text-neutral-900 
        tablet:text-5xl desktop:w-[592px]"
        >
          Get the finest curated abstracts delivered weekly to your inbox
        </h1>
        <div className="my-8 desktop:my-16">
          <FeatureListItem>
            Exclusive access to new abstract images and collections
          </FeatureListItem>
          <FeatureListItem>
            Unlock special promotions only for subscribers
          </FeatureListItem>
          <FeatureListItem>
            Regular doses of artistic inspiration
          </FeatureListItem>
        </div>
        <div className="flex flex-col tablet:flex-row">
          <div className="flex flex-col">
            <EmailInput
              email={emailVal}
              setEmail={setEmailVal}
              isEmailValid={isEmailValid}
              setIsEmailValid={setIsEmailValid}
            />
            <p className="text-neutral-600 my-2">
              We only send you the best! No spam.
            </p>
          </div>
          <button
            className="px-3.5 py-2.5 my-2 rounded bg-indigo-700 hover:bg-indigo-800 
      active:ring-4 active:ring-indigo-50 disabled:bg-neutral-100 disabled:text-neutral-400
      tablet:w-[98px] tablet:h-[40px] flex items-center justify-center tablet:my-0 tablet:mx-4
      "
            onClick={handleSubscribeClick}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div
        className="min-w-[311px] my-4 tablet:my-16 flex flex-grow 
      desktop:flex-grow-0 desktop:w-[592px] desktop:h-[608px]"
      >
        <Image
          src="/abstract.png"
          alt="abstract wallpapers sample"
          width={592}
          height={608}
          layout="responsive"
        />
      </div>
    </div>
  );
}

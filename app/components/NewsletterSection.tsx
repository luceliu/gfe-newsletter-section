"use client";

import { useState, FormEvent } from "react";
import FeatureListItem from "./FeatureListItem";
import EmailInput from "./EmailInput";
import Image from "next/image";
import Notification from "./Notification";

export default function NewsletterSection() {
  const [loading, setLoading] = useState(false);
  const [emailVal, setEmailVal] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState<boolean>(false);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] =
    useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState(
    "Failed to subscribe. Please ensure your email is correct or try again later."
  );

  const handleSubscriptionSubmission = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/projects/challenges/newsletter",
        {
          method: "POST",
          body: JSON.stringify({ email: emailVal }),
        }
      );
      if (response.ok) {
        setIsSubmissionSuccessful(true);
        setNotificationMessage(
          "Subscription successful! Please check your email to confirm."
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching data:", error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    } finally {
      setLoading(false);
      setIsEmailSubmitted(true);
    }
  };

  return (
    <>
      {isEmailSubmitted && (
        <Notification
          success={isSubmissionSuccessful}
          message={notificationMessage}
        />
      )}
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
          <form onSubmit={handleSubscriptionSubmission}>
            <div className="flex flex-col tablet:flex-row">
              {/* <form onSubmit={handleSubscriptionSubmission}> */}
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
                type="submit"
                className="px-3.5 py-2.5 my-2 rounded bg-indigo-700 hover:bg-indigo-800 
      active:ring-4 active:ring-indigo-50 disabled:bg-neutral-100 disabled:text-neutral-400
      tablet:w-[98px] tablet:h-[40px] flex items-center justify-center tablet:my-0 tablet:mx-4 tablet:mt-8
      "
                disabled={!isEmailValid || loading}
                // onClick={handleSubscriptionSubmission}
              >
                {loading ? "Loading" : "Subscribe"}
              </button>
            </div>
          </form>
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
            priority={true}
          />
        </div>
      </div>
    </>
  );
}

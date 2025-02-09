import * as React from "react";
import FeatureListItem from "./FeatureListItem";
import EmailInput from "./EmailInput";
import Image from "next/image";

export interface INewsletterSectionProps {}

export default function NewsletterSection(props: INewsletterSectionProps) {
  return (
    <div className="flex flex-col bg-white m-4 p-4 w-screen rounded tablet:rounded-md">
      <h1 className="font-semibold text-3xl my-4 text-neutral-900 tablet:text-5xl">
        Get the finest curated abstracts delivered weekly to your inbox
      </h1>

      <div className="my-8">
        <FeatureListItem>
          Exclusive access to new abstract images and collections
        </FeatureListItem>
        <FeatureListItem>
          Unlock special promotions only for subscribers
        </FeatureListItem>
        <FeatureListItem>Regular doses of artistic inspiration</FeatureListItem>
      </div>
      <EmailInput />
      <p className="text-neutral-600 my-2">
        We only send you the best! No spam.
      </p>
      <button
        className="px-3.5 py-2.5 my-2 rounded bg-indigo-700 hover:bg-indigo-800 
      active:ring-4 active:ring-indigo-50 disabled:bg-neutral-100 disabled:text-neutral-400
      tablet:w-[98px]
      "
      >
        Subscribe
      </button>
      <div className="min-w-[311px] my-4">
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

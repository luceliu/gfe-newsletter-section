import * as React from "react";
import FeatureListItem from "./FeatureListItem";

export interface INewsletterSectionProps {}

export default function NewsletterSection(props: INewsletterSectionProps) {
  return (
    <div className="bg-white m-4 p-4">
      <h1 className="font-semibold text-3xl">
        Get the finest curated abstracts delivered weekly to your inbox
      </h1>

      <FeatureListItem>
        Exclusive access to new abstract images and collections
      </FeatureListItem>
      <FeatureListItem>
        Unlock special promotions only for subscribers
      </FeatureListItem>
      <FeatureListItem>Regular doses of artistic inspiration</FeatureListItem>
    </div>
  );
}

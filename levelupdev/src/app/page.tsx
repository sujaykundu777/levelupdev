import React from "react";
import TopNav from "./components/topNav";
import JoinCommunityWidget from "./components/communityWidget";

export default function Home() {
  return (
    <div>
      <TopNav />
      <div className="pt-8">
        <JoinCommunityWidget src="https://nas.io/checkout-widget?communityCode=LEVEL_UP_6&communitySlug=%2Flevel-up-dev&buttonText=Join%20as%20member&buttonTextColorHex=%23000&buttonBgColorHex=%23fccb1d&widgetTheme=light&backgroundColorHex=%23fff" />
      </div>
    </div>
  );
}

// landing-page.jsx
import { BannerSlider } from "./banner-slider";
import UndergraduateAdmissions from "@/components/main/UndergraduateAdmissions";
import Section from "@/layout.jsx/section";
import SetUsApart from "@/components/main/SetUsApart";
import ExploreMajorSections from "@/components/main/ExploreMajorSections";
import StudentLife from "@/components/main/StudentLife";
import LatestNews from "@/components/main/LatestNews";
import { GradientBackground } from "@/components/ui/gradient-background";

export default function LandingPage() {
  return (
    <>
      <BannerSlider />

      <Section animate className="checkBackground">
        <UndergraduateAdmissions />
      </Section>

      <GradientBackground className="gradientOne">
        <SetUsApart />
      </GradientBackground>

      <ExploreMajorSections />

      <Section className="background-gradient-white">
        <StudentLife />
      </Section>

      <Section animate className="checkBackground">
        <LatestNews />
      </Section>
    </>
  );
}

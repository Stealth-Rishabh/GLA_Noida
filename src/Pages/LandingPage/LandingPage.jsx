import { BannerSlider } from "./banner-slider";
import UndergraduateAdmissions from "@/components/main/UndergraduateAdmissions";
import Section from "@/layout.jsx/section";
import SetUsApart from "@/components/main/SetUsApart";
import ExploreMajorSections from "@/components/main/ExploreMajorSections";
import StudentLife from "@/components/main/StudentLife";
import LatestNews from "@/components/main/LatestNews";

export default function LandingPage() {
  return (
    <>
      <BannerSlider />
      <Section className="background-gradient-white">
        <UndergraduateAdmissions />
      </Section>
      <Section className="background-gradient">
        <SetUsApart />
      </Section>
      <ExploreMajorSections />
      <Section className="background-gradient-white">
        <StudentLife />
      </Section>
      <Section>
        <LatestNews />
      </Section>
    </>
  );
}

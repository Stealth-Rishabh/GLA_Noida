import { BannerSlider } from "./banner-slider";
import UndergraduateAdmissions from "@/components/main/UndergraduateAdmissions";
import Section from "@/layout.jsx/section";
import SetUsApart from "@/components/main/SetUsApart";
import ExploreMajorSections from "@/components/main/ExploreMajorSections";
import StudentLife from "@/components/main/StudentLife";

export default function LandingPage() {
  return (
    <>
      <BannerSlider />
      <Section>
        <UndergraduateAdmissions />
      </Section>
      <Section className="background-gradient">
        <SetUsApart />
      </Section>
      <ExploreMajorSections />
      <Section>
        <StudentLife />
      </Section>
    </>
  );
}

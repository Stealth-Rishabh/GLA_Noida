// landing-page.jsx
import { BannerSlider } from "./banner-slider";
import UndergraduateAdmissions from "@/components/main/UndergraduateAdmissions";
import Section from "@/layout.jsx/section";
import SetUsApart from "@/components/main/SetUsApart";
import ExploreMajorSections from "@/components/main/ExploreMajorSections";
import StudentLife from "@/components/main/StudentLife";
import LatestNews from "@/components/main/LatestNews";
import { GradientBackground } from "@/components/ui/gradient-background";
import CampusShowcase from "@/components/main/CampusShowcase";
import LegacySection from "@/components/main/legacy-section";
import GridBackground from "@/components/ui/GridBackground";
import RankingSection from "@/components/main/Ranking";
import { AdmissionQuery } from "@/components/main/AdmissionQuery";
import FiveYearPlanSection from "@/components/main/fiveYearPlan";
import { useEffect, useState } from "react";
import Seo from '@/components/SEO/Seo';

export default function LandingPage() {
  const [utmParams, setUtmParams] = useState({
    source: "",
    medium: "",
    campaign: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setUtmParams({
      source: urlParams.get("utm_source") || "",
      medium: urlParams.get("utm_medium") || "",
      campaign: urlParams.get("utm_campaign") || "",
    });
  }, []);

  return (
    <>
      <Seo
        title="GLA Noida Campus - Best Private University, Ranked #1 in UP"
        description="BTech College in Noida - GLA University, Ranked #1 in UP by Dainik Jagran, offers top management and tech courses."
        keywords={['BTech College in Noida', 'GLA University Noida Campus']}
        // ogTitle="GLA University - Leading Higher Education Institution"
        // ogDescription="GLA University offers world-class education and research opportunities. Learn more about our programs and vibrant campus life."
        // ogImage="https://www.example.com/images/gla-og-image.jpg" // Replace with actual image URL
        // ogType="website"
        // twitterCard="summary_large_image"
        // twitterSite="@glauniversity" // Replace with actual Twitter handle
        canonicalUrl="" // Replace with actual base URL
      />
      <AdmissionQuery utmParams={utmParams} />
      <BannerSlider />

      <GridBackground>
        <LegacySection />
      </GridBackground>

      {/* <Section className="">bg-[#ffde00] */}
      <Section className="background-gradient-yellow-light">
        <RankingSection />
      </Section>

      <GridBackground>
        <FiveYearPlanSection />
      </GridBackground>

      <Section animate>
        <UndergraduateAdmissions />
      </Section>

      <GradientBackground className="gradientOne">
        <SetUsApart />
      </GradientBackground>

      {/* <ExploreMajorSections /> */}

      <Section className="background-gradient-white">
        <StudentLife />
      </Section>

      <Section animate className="background-gradient-yellow-light">
        <LatestNews />
      </Section>
      <GridBackground>
        <CampusShowcase />
      </GridBackground>
    </>
  );
}

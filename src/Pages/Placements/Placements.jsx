import Banner from "@/components/main/Banner";
import Seo from '@/components/SEO/Seo';
import placementBanner from "@/assets/placement/placementBanner.webp";
import PremiumAchievementShowcase from "@/Pages/Placements/premium-achievement-showcase";
//import PlacementStats from "@/Pages/Placements/PlacementStats";
//import PlacementCharts from "@/Pages/Placements/PlacementCharts";
import placementData from "@/Pages/Placements/placementData";
import PlacementStats from "@/Pages/Placements/PlacementStats";
import GridBackground from "@/components/ui/GridBackground";

export default function Placements() {
  return (
    <>
      <Seo
        title="GLA Greater Noida Placements | Top Recruiters & Packages"
        description="Explore placement success at GLA Greater Noida. Top companies, high packages and strong industry connections ensure bright futures for BTech and MBA students."
        //keywords={['GLA University placements', 'campus placements', 'top recruiters GLA', 'job opportunities GLA', 'career services', 'student placement record']}
        // ogTitle="GLA University Placements - Launch Your Career"
        // ogDescription="Explore the successful placement history at GLA University. We connect our students with leading companies for excellent career opportunities."
        // ogImage="https://www.example.com/images/gla-placements-og.jpg" // Replace with actual image URL
        canonicalUrl="/placements" // Replace with actual URL
      />
      <div>
        <Banner
          title="Our Top Placements"
          image={placementBanner}
          imageAlt="Our Top Placements"
        />
      </div>
      <GridBackground>
        <PremiumAchievementShowcase data={placementData} />
        {/* <PlacementStats /> */}
        {/* <PlacementCharts data={placementData} /> */}
        <PlacementStats data={placementData} />
      </GridBackground>
    </>
  );
}

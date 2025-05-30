import Banner from "@/components/main/Banner";
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

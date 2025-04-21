"use client";

import bannnerImage from "@/assets/banner/banner_image.png";
import bannerImageRes from "@/assets/banner/banner_image_res.webp";

/**
 * BannerSlider Component
 *
 * A responsive, auto-advancing image slider with navigation controls
 * and call-to-action buttons.
 */
export function BannerSlider() {
  return (
    <div className="relative h-auto md:h-screen w-full">
      <div className="relative w-full h-full">
        <img
          src={
            window.innerWidth < 768
              ? bannerImageRes
              : bannnerImage || "/placeholder.svg"
          }
          alt="GLA University Banner"
          className="w-full h-auto md:h-full object-cover"
        />
      </div>
    </div>
  );
}

import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterSite,
  twitterCreator,
  canonicalUrl,
  children,
}) => {
  const metaKeywords =
    keywords && Array.isArray(keywords) ? keywords.join(", ") : keywords;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}

      {/* Open Graph tags */}
      {/* {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogType && <meta property="og:type" content={ogType} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />} */}

      {/* Twitter Card tags */}
      {/* {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {ogTitle && <meta name="twitter:title" content={ogTitle} />}
      {ogDescription && (
        <meta name="twitter:description" content={ogDescription} />
      )}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && (
        <meta name="twitter:creator" content={twitterCreator} />
      )} */}

      {/* Canonical URL */}
      <link rel="canonical" href={"https://noida.gla.ac.in" + canonicalUrl} />

      {/* Other tags */}
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* For older browsers */}
      {title && <meta name="application-name" content={title} />}
      {description && (
        <meta name="msapplication-tooltip" content={description} />
      )}
      {canonicalUrl && (
        <meta name="msapplication-starturl" content={canonicalUrl} />
      )}

      {children}
    </Helmet>
  );
};

export default Seo;

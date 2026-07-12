export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Radisson Day Night Spa",
    url: "https://radissondaynightspa.com",
    image: "https://radissondaynightspa.com/logo.png",
    telephone: "+91XXXXXXXXXX",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "YOUR STREET ADDRESS",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.7196",
      longitude: "75.8577",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "23:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/yourpage",
      "https://www.facebook.com/yourpage",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

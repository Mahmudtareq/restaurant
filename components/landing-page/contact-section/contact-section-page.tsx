import React from "react";
import ContactSection from "./contact-section";

const ContactSectionPage = () => {
  const openHours = [
    { day: "Sat–Thu", time: "11 AM – 11 PM" },
    { day: "Fri", time: "1 PM – 11 PM" },
  ];

  const locations = [
    {
      city: "New York, NY",
      address: "125 Spring Street, Soho",
      openHours: "Open: 11 AM – 11 PM",
      phone: "+12125550123",
    },
    {
      city: "Los Angeles, CA",
      address: "8425 Melrose Avenue, West Hollywood",
      openHours: "Open: 11 AM – 11 PM",
      phone: "+13105550123",
    },
  ];
  return (
    <div className="">
      <ContactSection
        image="/images/contact-section/contact-hero-image.svg"
        openHours={openHours}
        locations={locations}
        heading="For reservations, orders, or event inquiries, reach out or visit any of our locations."
        buttonLabel="Book a Table"
      />
    </div>
  );
};

export default ContactSectionPage;

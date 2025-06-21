import React from "react";
import ContactMain from "../components/contact/ContactMain";
import { useActiveSection } from "../store/ActiveSection";

const Contact: React.FC = () => {
  const { sectionsRefs } = useActiveSection();

  return (
    <section
      id="contact"
      ref={(el) => {
        if (sectionsRefs.current) {
          sectionsRefs.current.contact = el;
        }
      }}
    >
      <ContactMain />
    </section>
  );
};

export default Contact;

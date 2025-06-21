import React from "react";
import Tag from "./Tag";
import Title from "./Title";
import ContactBlock from "./ContactBlock";

const ContactMain: React.FC = () => {
  return <div className="pt-14 lg:pt-28 mb-20">
    <Tag/>
    <Title/>
    <ContactBlock/>
  </div>;
};

export default ContactMain;

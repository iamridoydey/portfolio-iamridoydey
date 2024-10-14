import React from "react";
import Tag from "./Tag";
import Title from "./Title";
import ContactBlock from "./ContactBlock";

const ContactMain: React.FC = () => {
  return <div className="pt-28 min-h-[100vh] mb-20 lg:mb-0 ">
    <Tag/>
    <Title/>
    <ContactBlock/>
  </div>;
};

export default ContactMain;

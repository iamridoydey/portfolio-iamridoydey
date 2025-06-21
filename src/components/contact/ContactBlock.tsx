import React from "react";
import SendEmail from "./SendEmail";
import ManualContact from "./ManualContact";

const ContactBlock: React.FC = () => {
  return (
    <div className="max-w-[1200px] m-auto sm:px-8 px-6 flex flex-col lg:flex-row gap-6 lg:gap-20 justify-center lg:justify-between">
      <ManualContact />
      <SendEmail />
    </div>
  );
};

export default ContactBlock;

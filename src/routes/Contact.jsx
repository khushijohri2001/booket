import React, { useEffect } from "react";
import { socialMediaLinksData } from "../utils/social-media-link-data";
import { contactImg } from "../assets";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="px-20 py-14 border-rose-300 ">
      <div
        className="flex flex-col items-center justify-between gap-8"
      >
        <div className="flex flex-col items-center justify-center gap-6 max-sm:gap-4">
          <h2 className="font-playfairDisplay font-extrabold text-6xl mb-4 text-center max-sm:text-4xl">Contact</h2>
          <p className="text-center text-xl">
            Get in touch with me via email or social media.
          </p>

          <a
            href="mailto:khushi.johri01@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-rose-900 underline underline-offset-4"
          >
            khushi.johri01@gmail.com
          </a>

          <div>
            <ul className="flex flex-row gap-5 flex-wrap max-sm:mt-8">
              {socialMediaLinksData.map(({ id, icon, link }) => (
                <a href={link} className="hover:scale-110" key={id}>
                  {icon}
                </a>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <img src={contactImg} alt="Hero Img 2" className="w-96 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

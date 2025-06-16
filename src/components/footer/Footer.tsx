import Image from "next/image";
import footerData from "./Footer.constant";

const Footer = () => (
  <footer className="w-full bg-gradient-to-b from-[#f7f7f8] to-white pt-[120px] pb-[120px] px-4 md:px-20 border-t border-gray-100">
    <div className="max-w-5xl mx-auto flex flex-col gap-12">
      <div className="flex flex-col items-center md:items-start">
        <Image
          width={226}
          height={63}
          src="/supreme-images/Supreme.svg"
          alt="logo"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap:8 md:gap-28 text-sm">
        {footerData.map((section) => (
          <div key={section.title} className="mt-8">
            <div className="font-normal uppercase mb-4 text-black text-lg">
              {section.title}
            </div>
            <ul className="space-y-4 text-gray-600 text-sm font-normal">
              {section.links.map((item) => (
                <li key={item}>
                  <a href={`/${section.title}/${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-xs text-gray-500 gap-2">
        <span>@2025. All Rights Reserved.</span>
        <span className="md:block hidden">
          Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;

"use client";
import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from "react";
const Filters = () => {
  const [active, setActive] = useState("");
  const searchParms = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = '';
    
    if(active === link) {
      setActive('');

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        keysToRemove: ['category'],
      })
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        key: 'category',
        value: link.toLowerCase(),
      })
    }
    
    router.push(newUrl, { scroll: false });
  }
  const links = ["all","naruto", "demon slayer", "one piece", "spy x family", "jujutsu kaisen"];
  return (
    <ul className="text-white-800 body-text flex w-full max-w-full gap-2 flex-wrap justify-center py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          className={` ${
            active === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
          onClick={() => {
            handleFilter(link);
          }}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;

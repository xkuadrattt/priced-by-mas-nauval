import React from "react";
import listStyleOk from "../assets/img/oke.png";
import listStyleNotOk from "../assets/img/notoke.png";
import data from "../data/data";

const Pricing = function () {
  const fontColor = "#000000";
  const roundedEl = {
    firstChild:
      "[&>div:first-child]:rounded-tl-xl [&>div:first-child]:rounded-bl-xl [&>div:first-child]:rounded-br-xl",
    secondChild:
      "[&>div:nth-child(2)]:rounded-br-xl [&>div:nth-child(2)]:rounded-bl-xl",
    thirdChild:
      "[&>div:last-child]:rounded-tr-xl [&>div:last-child]:rounded-bl-xl [&>div:last-child]:rounded-br-xl",
  };
  const recomended = (
    <div className="commend absolute -top-[3rem] w-full bg-acsent left-0 right-0 py-[1rem]  text-center -z-1 rounded-t-lg">
      <p className="uppercase text-white text-[.75rem] font-bold">recomended</p>
    </div>
  );
  const subs = "/month";

  const sectionPrice = data.map(function (price) {
    return (
      <div
        key={price.pricing}
        className="pricing p-4 sm:p-8 flex flex-col gap-[2rem] bg-white"
      >
        {price.recomend && recomended}
        <div>
          <h3 className="font-bold text-acsent capitalize">{price.category}</h3>
          <p className={`text-[#000000]/60`}>
            <span className={`text-[2.5rem] text-acsent font-bold capitalize`}>
              {price.pricing}&nbsp;
            </span>
            {price.pricing == "custom" ? "" : subs}
          </p>
          <p className={`text-[${fontColor}]/60 md:h-[5rem]`}>{price.desc}</p>
        </div>
        <button className="block py-2 w-full text-white bg-primary hover:bg-primary/95 rounded-lg">
          Get Started
        </button>
        <div className="font-medium">
          <h4 className={`text-[${fontColor}]/60`}>Features</h4>
          <ul
            className={`[&>li]:text-[#000000]/60 [&>li]:my-[.5rem] [&>li]:py-[0.25rem] [&>li]:px-[1.75rem]`}
          >
            {price.features.map(function ({ availabe, content }, i) {
              return (
                <li
                  key={i}
                  style={{
                    background: `url(${
                      availabe ? listStyleOk : listStyleNotOk
                    }) no-repeat left center`,
                    listStyle: "none",
                    verticalAlign: "middle",
                  }}
                >
                  {content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <section
      className={`flex flex-col md:flex-row gap-[2rem] pb-[3rem] mt-[4rem] [&>div:first-child]:mb-[3rem] [&>div:first-child]:md:mb-0  ${roundedEl.firstChild} ${roundedEl.secondChild} ${roundedEl.thirdChild} relative [&>div]:relative`}
    >
      {sectionPrice}
    </section>
  );
};

export default Pricing;

// import React from "react";

export default function Footer() {
  const foot = [
    "E-commerce",
    "Address: something something",
    "Contact: +8655213***",
  ];

  const mid_foot = ["Instagram", "Telegram", "Youtube", "Facebook"];

  const end_foot = ["Terms & conditions", "Policy", "Expertise"];

  return (
    <>
      <main className="sticky sm:text-[1rem] text-[0.6rem] gap-9 font-bold font-serif flex bg-cyan-300 p-5 sm:gap-70 justify-center">
        <div className="grid gap-2">
          {foot.map((item) => {
            return <li>{item}</li>;
          })}
        </div>
        <div className="grid gap-2">
          {mid_foot.map((item) => {
            return <li>{item}</li>;
          })}
        </div>
        <div className="grid gap-2">
          {end_foot.map((item) => {
            return <li>{item}</li>;
          })}
        </div>
      </main>
      <div className="sticky text-center bg-blue-600">
        Copy right &copy; www.E-commerce.com | All rights reserved.
      </div>
    </>
  );
}

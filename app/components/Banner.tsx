import React from "react";

const Banner = () => {
  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            What Really Powers the Web?
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Uncovering the fundamentals of the web — how HTML, CSS, JavaScript,
            protocols, and performance come together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;

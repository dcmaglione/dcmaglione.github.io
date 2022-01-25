import React from 'react';
import { experience } from '../data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="m-auto my-20 pt-36 pb-20 bg-gray-900 text-white"
    >
      <h1 className="flex justify-center mb-10 font-sans sm:text-5xl text-4xl font-semibold title-font text-white">
        Experience
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {experience.map((experience, index) => (
          <div key={index}>
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <div className="inline-flex items-center">
                <img
                  alt="experience"
                  src={experience.image}
                  className="w-12 rounded-none flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="text-lg title-font font-medium text-white">
                    {experience.position}
                  </span>
                  <span className="text-gray-500 text-sm uppercase">
                    {experience.company}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

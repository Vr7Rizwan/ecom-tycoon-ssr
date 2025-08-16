"use client";
import React, { useState } from "react";
import { ReactNode } from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Zap,
  Coffee,
  Briefcase,
} from "lucide-react";

export interface Benefit {
  icon: ReactNode; // accepts JSX like <Heart />
  title: string;
  description: string;
}
// ✅ JobCategory (string union type)
export type JobCategory =
  | "All"
  | "Development"
  | "Design"
  | "Marketing"
  | "Operations";
// ✅ JobOpening interface
export interface JobOpening {
  title: string;
  category: JobCategory;
  location: string;
  type: string; // e.g., "Full-time", "Part-time"
  salary: string; // formatted salary string
  description: string;
  requirements: string[];
}
const CareersClient = ({
  benefits,
  jobCategories,
  jobOpenings,
}: {
  benefits: Benefit[];
  jobCategories: JobCategory[];
  jobOpenings: JobOpening[];
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredJobs =
    selectedCategory === "All"
      ? jobOpenings
      : jobOpenings.filter((job) => job.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="w-[90%] mx-auto py-7 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <em>
              Join Our <span className="text-primaryColor">Amazing Team</span>
            </em>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Build your career with us and help shape the future of technology.
            We're always looking for talented individuals who share our passion
            for innovation.
          </p>
        </div>

        {/* Culture Section */}
        <div className="mb-20 border-gray-200 border-1 hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-900 dark:bg-gray-800 transition all duration-500 hover:scale-[1.02]">
          <div className="rounded-2xl p-8 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <em>Why Work With Us?</em>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              We believe that great work comes from great people in a great
              environment. Our culture is built on trust, innovation, and mutual
              respect, where every team member has the opportunity to grow,
              learn, and make a meaningful impact.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <em>
                Our <span className="text-primaryColor">Benefits</span>
              </em>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We take care of our team with comprehensive benefits and perks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 border-gray-200 border-1 hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-900 dark:bg-gray-800 transition-all duration-500"
              >
                <div className="p-4 bg-secondaryColor rounded-xl text-black w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <em>
                Open <span className="text-primaryColor">Positions</span>
              </em>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our current job openings and find the perfect role for you
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {jobCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-500 ${
                    selectedCategory === category
                      ? "bg-primaryColor text-white shadow-lg"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border-gray-200 border-1 hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-900 dark:bg-gray-800 hover:scale-[1.02]"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-[#2bbcd7] to-[#f2e108] text-black text-sm font-semibold rounded-full">
                        {job.category}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Requirements:
                      </h4>
                      <div className="space-y-2">
                        {job.requirements.map((req, ridx) => (
                          <div key={ridx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-[#2bbcd7] to-[#f2e108] rounded-full" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {req}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href="mailto:info@ecom-tycoon.com"
                    className="bg-primaryColor hover:bg-secondaryColor hover:text-black text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-500 whitespace-nowrap cursor-pointer"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border-gray-200 border-1 hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-900 dark:bg-gray-800 hover:scale-[1.02]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              <em>
                Don't See Your{" "}
                <span className="text-primaryColor">Dream Role</span>?
              </em>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              We're always interested in meeting talented individuals. Send us
              your resume and tell us how you'd like to contribute to our team.
            </p>
            <a
              href="mailto:info@ecom-tycoon.com?subject=Resume%20Submission"
              className="bg-primaryColor hover:bg-secondaryColor hover:text-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersClient;

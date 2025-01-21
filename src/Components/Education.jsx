"use client";
import React from "react";
import { IconBackpack, IconBooks, IconSchool } from "@tabler/icons-react";

export function EducationList() {
  const education = [
    {
      cgpa: 8.4,
      course: "BTech, CSE",
      college: {
        name: "Omdayal group of institutions",
        year: "2022-2026",
        board: "MAKAUT",
      },
    },
    {
      cgpa: 89,
      course: "H.S. Exam",
      college: {
        name: "Uluberia High School",
        year: "2020-2022",
        board: "WBCHSE",
      },
    },
    {
      cgpa: 66,
      course: "Secondary Education",
      college: {
        name: "Uluberia High School",
        year: "2019-2020",
        board: "WBBSE",
      },
    },
  ];

  const icons = [
    <IconSchool size={32} key="0" />,
    <IconBooks size={32} key="1" />,
    <IconBackpack size={32} key="2" />,
  ];

  return (
    <div className="flex flex-wrap justify-between">
      {education.map((edu, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg p-6 w-[100%] sm:w-[32%] shadow-md text-center mb-10 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)] hover:shadow-gray-600 cursor-pointer transition-all duration-300 ease-linear"
        >
          <div className="mb-4">{icons[index]}</div>
          <h3 className="text-lg font-medium mb-2">{edu.course}</h3>
          <p className="text-sm font-medium mb-1">{edu.college.name}</p>
          <p className="text-sm mb-1">{edu.college.year}</p>
          <p className="text-sm mb-1">Board: {edu.college.board}</p>
          <p className="text-sm text-gray-600">CGPA: {edu.cgpa}</p>
        </div>
      ))}
    </div>
  );
}

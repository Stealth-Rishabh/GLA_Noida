// Admission Steps Data
export const admissionSteps = [
  {
    title: "Complete Online Application",
    description:
      "Fill out the online application form with your personal information, academic background, and program preferences.",
    note: "Application fee of $50 is required and can be paid online.",
    deadline: "Rolling admissions",
  },
  {
    title: "Submit Required Documents",
    description:
      "Upload all required documents including academic transcripts, letters of recommendation, statement of purpose, and identification documents.",
    deadline: "Within 2 weeks of application submission",
  },
  {
    title: "Entrance Examination",
    description:
      "Take the required entrance examination for your chosen program. Dates and venues will be communicated via email.",
    note: "Some programs may waive the entrance exam requirement based on previous academic performance.",
    deadline: "Check examination schedule on portal",
  },
  {
    title: "Interview Process",
    description:
      "Shortlisted candidates will be invited for an interview with the admissions committee. This may be conducted in person or virtually.",
    deadline: "Scheduled within 3 weeks of document verification",
  },
  {
    title: "Admission Decision",
    description:
      "Receive your admission decision via email. If accepted, you will receive instructions on how to confirm your enrollment and pay the tuition deposit.",
    deadline: "Within 2 weeks of interview completion",
  },
];

// Programs Data
export const programs = [
  {
    name: "Undergraduate Programs",
    duration: "4 years (8 semesters)",
    academicRequirements: [
      "High school diploma or equivalent with minimum GPA of 3.0 on a 4.0 scale",
      "Standardized test scores (SAT/ACT) - minimum SAT score of 1200 or ACT score of 25",
      "Proficiency in English (TOEFL score of 80+ or IELTS score of 6.5+ for international students)",
      "Completion of prerequisite courses in relevant subjects",
    ],
    additionalRequirements: [
      "Two letters of recommendation from academic sources",
      "Personal statement (500-750 words)",
      "Extracurricular activities and leadership experience",
      "Portfolio (required for specific programs like Fine Arts, Architecture, etc.)",
    ],
    specialNotes:
      "Early decision applicants receive priority consideration for merit-based scholarships.",
  },
  {
    name: "Graduate Programs",
    duration: "2 years (4 semesters)",
    academicRequirements: [
      "Bachelor's degree from an accredited institution with minimum GPA of 3.2 on a 4.0 scale",
      "GRE/GMAT scores (program-specific requirements)",
      "Proficiency in English (TOEFL score of 90+ or IELTS score of 7.0+ for international students)",
      "Relevant undergraduate coursework or prerequisites",
    ],
    additionalRequirements: [
      "Three letters of recommendation",
      "Statement of purpose outlining research interests and career goals",
      "Resume/CV detailing relevant work experience",
      "Interview (for selected candidates)",
      "Research proposal (for PhD applicants)",
    ],
    specialNotes:
      "Part-time enrollment options available for working professionals in select programs.",
  },
];

// Fee Structure Data
export const feeStructure = [
  {
    program: "Bachelor of Arts",
    tuitionFee: 25000,
    applicationFee: 50,
    developmentFee: 1500,
    total: 26550,
  },
  {
    program: "Bachelor of Science",
    tuitionFee: 28000,
    applicationFee: 50,
    developmentFee: 1800,
    total: 29850,
  },
  {
    program: "Bachelor of Business Administration",
    tuitionFee: 27000,
    applicationFee: 50,
    developmentFee: 1600,
    total: 28650,
  },
  {
    program: "Master of Arts",
    tuitionFee: 32000,
    applicationFee: 75,
    developmentFee: 2000,
    total: 34075,
  },
  {
    program: "Master of Science",
    tuitionFee: 35000,
    applicationFee: 75,
    developmentFee: 2200,
    total: 37275,
  },
  {
    program: "PhD Programs",
    tuitionFee: 38000,
    applicationFee: 100,
    developmentFee: 2500,
    total: 40600,
  },
];

// Scholarships Data
export const scholarships = [
  {
    name: "Academic Excellence Scholarship",
    coverage: "Up to 75% tuition waiver",
    description:
      "Awarded to students with exceptional academic achievements and demonstrated leadership potential.",
    eligibility: [
      "Minimum GPA of 3.8 on a 4.0 scale",
      "Top 5% of graduating class",
      "Outstanding standardized test scores",
      "Demonstrated leadership in extracurricular activities",
    ],
    deadline: "March 1 for Fall, October 1 for Spring",
  },
  {
    name: "Need-Based Financial Aid",
    coverage: "Up to 50% tuition waiver",
    description:
      "Designed to support students with demonstrated financial need to ensure access to quality education regardless of economic background.",
    eligibility: [
      "Demonstrated financial need based on family income",
      "Minimum GPA of 3.0 on a 4.0 scale",
      "Full-time enrollment status",
      "Satisfactory academic progress throughout the program",
    ],
    deadline: "Rolling basis (apply early for best consideration)",
  },
  {
    name: "Diversity & Inclusion Scholarship",
    coverage: "Up to 60% tuition waiver",
    description:
      "Promotes diversity in our student body by supporting students from underrepresented backgrounds.",
    eligibility: [
      "Member of an underrepresented group in higher education",
      "Minimum GPA of 3.2 on a 4.0 scale",
      "Demonstrated commitment to diversity and inclusion initiatives",
      "Leadership potential and community involvement",
    ],
    deadline: "April 15 for Fall, November 15 for Spring",
  },
  {
    name: "International Student Scholarship",
    coverage: "Up to 40% tuition waiver",
    description:
      "Supports outstanding international students who bring global perspectives to our campus community.",
    eligibility: [
      "International student status",
      "Minimum GPA of 3.5 on a 4.0 scale",
      "Exceptional English proficiency test scores",
      "Demonstrated financial need (optional)",
      "Contribution to campus internationalization",
    ],
    deadline: "February 1 for Fall, September 1 for Spring",
  },
];

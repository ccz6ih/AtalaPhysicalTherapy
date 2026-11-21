export type TeamMember = {
  slug: string;
  name: string;
  credentials?: string;
  role: string;
  photo: string;
  portrait: string;
  bio: string[];
  education?: string[];
  knowsAbout?: string[];
};

const U = "/wp-content/uploads";

/** Bios carried over from the Elementor team popups on /our-team/. */
export const team: TeamMember[] = [
  {
    slug: "terri-brusseau-kraus",
    name: "Terri Brusseau Kraus",
    credentials: "PT, MPT, CCET",
    role: "President and Lead Therapist",
    photo: `${U}/2023/03/TerriKraus.png`,
    portrait: `${U}/2022/11/TerriBrusseau2-1.png`,
    bio: [
      "Terri is the owner and Lead Physical Therapist at Atala. She earned her Master’s of Physical Therapy degree from Chapman University and also has a Bachelor’s of Science degree in Business and Advertising. She has over 25 years of experience in private outpatient orthopedics. Terri emphasizes manual techniques, along with core stabilization and efficient exercise programs, to achieve outstanding results. She believes in treating the individual as a whole; as well as addressing the specific needs of the patient. Terri has training in Maitland, Mulligan, McConnell, and Jackson Techniques. She has certificates from the International Academy of Orthopedic Medicine (IAOM) in manual therapy and continues to update her skills annually.",
      "Terri has a wealth of hands-on experience with a variety of patients. She has trained in Krav Maga for over seven years and understands the importance of body alignment and maximizing body efficiency, strength, and endurance. Terri firmly believes a positive mindset is a large factor in a complete recovery.",
    ],
    education: ["Chapman University"],
    knowsAbout: ["Manual therapy", "Maitland technique", "Mulligan technique", "McConnell technique", "Core stabilization", "Orthopedic physical therapy"],
  },
  {
    slug: "jason-bandong",
    name: "Jason Bandong",
    credentials: "PT, DPT",
    role: "Physical Therapist",
    photo: `${U}/2023/03/JasonBadong.png`,
    portrait: `${U}/2022/11/JasonBandong2.png`,
    bio: [
      "Jason is one of Atala’s primary Physical Therapists. He has many years working within the health industry as a trainer, sports coach, exercise specialist, and now physical therapist. After graduating with honors from California State University, San Marcos with his Bachelor of Science in Kinesiology, he went on to earn his Doctor of Physical Therapy degree with honors from the University of St. Augustine for Health Sciences. Jason emphasizes manual therapy techniques, myofascial decompression/cupping, movement analysis, corrective movement patterns, and utilizing a full-body approach to treatment.",
      "Jason’s previous time as a former collegiate Track and Field athlete and former high school (sprints) coach allows him to properly analyze and correct patients’ running, jogging, and walking technique. He actively strength trains with a powerlifting approach and understands how lifting technique and mechanics are of utmost importance. Jason’s goal is to use his caring and compassionate nature combined with his clinical knowledge to guide his patients to living healthier, moving more efficiently, and staying in a pain free zone.",
    ],
    education: ["California State University San Marcos", "University of St. Augustine for Health Sciences"],
    knowsAbout: ["Manual therapy", "Myofascial decompression", "Cupping", "Running gait analysis", "Corrective exercise", "Strength training"],
  },
  {
    slug: "laurel-jensen",
    name: "Laurel Jensen",
    role: "Exercise Specialist",
    photo: `${U}/2023/03/Laurel-Jensen-1.png`,
    portrait: `${U}/2022/11/LaurelJenson2.png`,
    bio: [
      "Laurel is our amazing Exercise Specialist. She is a southern California native and having been in water more than out of water for most of her life, she would grow gills if she could. Her education began at the University of California San Diego where she studied Environmental Sciences as well as competed as a collegiate athlete for the women’s water polo team. Her athletic skills acted as a launching pad into international pools where she developed a love for holistic fitness, nutrition, and total body healing. Laurel is a certified group fitness instructor who is eager to learn how to best serve others on their way back to health in all areas of their life.",
    ],
    education: ["University of California San Diego"],
  },
  {
    slug: "julie-centanni",
    name: "Julie Centanni",
    role: "Office Manager",
    photo: `${U}/2023/03/JulieCentanni-1.png`,
    portrait: `${U}/2022/11/JulieCentanni3.png`,
    bio: [
      "Julie is our incredible Office Manager. She is a Midwesterner at heart and a big fan of all things sports. She has a Master’s in Health, Exercise, and Sports Science and has a passion for helping others live their best quality of life.",
      "As Office Manager, Julie oversees insurance verification, billing, and scheduling of all patients. Not only does she manage the business side of things, she also supervises the gym and assists with all Atala marketing campaigns. Julie takes the time to make sure your entire experience at Atala is as organized and efficient as possible.",
    ],
  },
];

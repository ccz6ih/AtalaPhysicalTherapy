export type ConditionRegion = {
  id: string;
  name: string;
  nonSurgical: string[];
  postSurgical: string[];
  service: string;
};

/** Carried over verbatim from /conditions-we-treat/ (Elementor tabs). */
export const conditionRegions: ConditionRegion[] = [
  {
    id: "spine",
    name: "Spine",
    service: "/back-neck-rehabilitation/",
    nonSurgical: ["Sciatica", "Herniated disc", "General spine sprain/strain", "Stenosis", "Spondylolisthesis", "Posture dysfunction", "Scoliosis", "Core deconditioning resulting in instability", "Facet syndrome", "Osteoarthritis", "Radiculopathy", "Spinal cord injury", "Lower back pain", "Neck pain / stiffness"],
    postSurgical: ["Microdiscectomy", "Laminectomy", "Fusion", "Disc replacement", "Hardware fixation for stabilization"],
  },
  {
    id: "shoulder",
    name: "Shoulder",
    service: "/orthopedic-physical-therapy/",
    nonSurgical: ["Rotator cuff tendinitis", "Biceps tendinitis", "Labral tear", "Chronic dislocations/subluxations", "AC/SC sprain", "Bursitis", "Frozen shoulder (adhesive capsulitis)", "General shoulder pain", "Degenerative conditions of the shoulder", "Acromioclavicular (AC) joint arthritis", "Shoulder instability", "Shoulder impingement syndrome", "Shoulder separation", "Snapping scapula syndrome"],
    postSurgical: ["Burners and stingers", "Fracture of the collarbone (clavicle)", "Proximal humerus fracture (broken shoulder)", "Rotator cuff tears", "SLAP tear (superior labrum from anterior to posterior)", "Total shoulder replacement"],
  },
  {
    id: "knee",
    name: "Knee",
    service: "/pre-and-post-surgical-rehabilitation/",
    nonSurgical: ["Meniscus sprains/tears", "Ligamentous sprains (ACL/PCL/LCL/MCL)", "Patellar pathology: tendonitis, tracking issues, chondromalacia", "IT band syndrome (iliotibial band): “runner’s knee”"],
    postSurgical: ["Meniscectomy", "Ligament repair (ACL/PCL/MCL/LCL)", "Arthroscopic debridement", "Total/partial knee replacement", "Tendon repair", "Traumatic fractures resulting in hardware fixation"],
  },
  {
    id: "hip",
    name: "Hip & pelvis",
    service: "/orthopedic-physical-therapy/",
    nonSurgical: ["Hip impingement", "Hip instability", "Hip arthritis", "Rotated or elevated hip", "Sciatica", "Sacroiliac pathology", "Bursitis", "Labral sprain / tear", "Hip flexor tendinitis/strain", "Adductor (groin) tendinitis/strain", "Upper hamstring tendinitis/strain"],
    postSurgical: ["Labral repairs", "Total hip replacement", "Tendon repair", "Arthroscopic hip debridement", "Traumatic fractures resulting in hardware fixation"],
  },
  {
    id: "foot-ankle",
    name: "Foot & ankle",
    service: "/sports-rehabilitation/",
    nonSurgical: ["Plantar fasciitis", "Ankle sprain", "High ankle sprain (syndesmosis ligament injury)", "“Shin splints”", "Tendonitis: Achilles, posterior tibialis, anterior tibialis", "Achilles tendon injuries", "Hallux rigidus (stiff big toe)", "Stress fractures of the foot and ankle"],
    postSurgical: ["Bunionectomy", "Bone spur removal", "Traumatic fractures resulting in hardware fixation", "Ankle fusion", "ATFL repair", "Achilles rupture repair", "Jones fracture", "Lisfranc (midfoot) fracture-dislocation", "Lateral ankle reconstruction, Brostrom repair"],
  },
  {
    id: "elbow-wrist-hand",
    name: "Elbow, wrist & hand",
    service: "/industrial-medicine-workers-compensation/",
    nonSurgical: ["Tennis elbow (lateral epicondylitis)", "Golfer’s elbow (medial epicondylitis)", "Carpal tunnel syndrome", "Ulnar nerve pathology", "Bicep/tricep/forearm tendinitis", "Elbow/wrist/hand sprain", "Joint dislocations"],
    postSurgical: ["Tendon rupture repair", "Post traumatic fracture internal fixation", "Nerve relocation", "Carpal tunnel release", "Trigger finger release"],
  },
  {
    id: "balance",
    name: "Balance",
    service: "/orthopedic-physical-therapy/",
    nonSurgical: ["Dizziness", "Vertigo", "Weakness"],
    postSurgical: [],
  },
];

export const boutiqueApproach = [
  {
    title: "Personalized attention",
    items: ["Extended one-on-one sessions with your dedicated therapist", "Careful consideration of your lifestyle, goals, and activities", "Treatment plans adapted to your progress and feedback", "Direct communication with your therapist throughout your recovery journey"],
  },
  {
    title: "Comprehensive care",
    items: ["Thorough movement pattern analysis", "Advanced manual therapy techniques", "Targeted exercise prescription", "Lifestyle and activity modification strategies", "Home exercise program development"],
  },
  {
    title: "Whole-body focus",
    items: ["Assessment of contributing factors beyond the injury site", "Integration of posture and movement habits", "Consideration of work and recreational activities", "Balance of strength, flexibility, and stability"],
  },
  {
    title: "Education and empowerment",
    items: ["Clear explanation of your condition and treatment approach", "Understanding of movement patterns and body mechanics", "Tools and techniques for preventing future injuries", "Strategies for maintaining long-term results"],
  },
];

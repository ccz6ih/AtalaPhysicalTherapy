/**
 * Activity pages — physical therapy for the sports Carlsbad actually plays.
 * URL: /physical-therapy-for-<slug>/
 *
 * Local places are named descriptively (where patients surf, golf and run).
 * Atala is not affiliated with any of them; don't imply a partnership.
 */

export type Activity = {
  slug: string;
  name: string; // "Surfers"
  sport: string; // "surfing"
  h1: string;
  title: string;
  description: string;
  answer: string;
  hero: { src: string; alt: string };
  local: { heading: string; text: string; places: { name: string; note: string }[]; image: { src: string; alt: string } };
  stat: { figure: string; text: string; source: number };
  injuries: { name: string; text: string; guide?: string }[];
  screen: { title: string; text: string }[];
  plan: { title: string; text: string }[];
  habits: string[];
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  service: string;
  updated: string;
};

const U = "/wp-content/uploads";

export const activities: Activity[] = [
  {
    slug: "surfers",
    name: "Surfers",
    sport: "surfing",
    h1: "Physical Therapy for Surfers in Carlsbad",
    title: "Physical Therapy for Surfers in Carlsbad, CA | Atala PT",
    description:
      "Surfer's shoulder, low back pain from paddling, stiff pop-ups. One-on-one physical therapy for Carlsbad surfers that gets you back in the lineup and keeps you there.",
    answer:
      "Most surfing injuries don't come from wipeouts. They build up from paddling: hours of shoulder rotation and arched-back posture that the body isn't strong enough to repeat. We treat the injury, then build the shoulder, upper back and hips you need to paddle out, pop up and surf more sessions without the ache.",
    hero: { src: `${U}/2026/11/surfer-shoulder-pain-carlsbad-beach.jpg`, alt: "Surfer in a rash guard holding his sore shoulder at the beach" },
    local: {
      heading: "From Tamarack to Ponto",
      text: "Carlsbad's breaks reward a lot of paddling. Long walks along the sand, rip currents to cross and winter swells that mean long hold-downs. We build your rehab around the sessions you actually surf.",
      places: [
        { name: "Tamarack", note: "The everyday break for a lot of our patients: lots of paddling for a few waves" },
        { name: "Warm Water Jetty", note: "Punchy, powerful takeoffs that ask a lot of the shoulders and back" },
        { name: "Terramar", note: "Reef and point setups where pop-up speed and hip mobility matter" },
        { name: "Ponto", note: "Beach break with long paddle-outs on bigger days" },
      ],
      image: { src: `${U}/2025/02/AdobeStock_333807706.jpeg`, alt: "Waves rolling into a North County beach below a coastal bluff" },
    },
    stat: {
      figure: "37%",
      text: "of gradual-onset surfing injuries in a systematic review were caused by paddling, the single most common mechanism. The back and shoulder were the most often affected areas.",
      source: 0,
    },
    injuries: [
      { name: "Surfer's shoulder", text: "Pain on the outside or front of the shoulder from paddling. Surfers with shoulder pain often show reduced external rotation strength and range.", guide: "shoulder-impingement" },
      { name: "Rotator cuff strain", text: "Overloaded cuff tendons after a big swell or a run of long sessions.", guide: "rotator-cuff" },
      { name: "Low back pain", text: "Sustained arched-back paddling posture and twisting turns load the lumbar spine.", guide: "low-back-pain" },
      { name: "Neck pain", text: "Holding the head up to watch the horizon for an hour at a time.", guide: "neck-pain" },
      { name: "Knee sprains and meniscus tears", text: "Torque on the front knee during turns and awkward landings.", guide: "meniscus-tear" },
      { name: "Ankle sprains", text: "Rolled ankles on the reef, rocks or a bad landing.", guide: "ankle-sprain" },
    ],
    screen: [
      { title: "Shoulder rotation", text: "External and internal rotation strength and range on both sides, the pattern most linked with surfer's shoulder." },
      { title: "Upper back extension", text: "How well your mid-back extends so your low back and neck don't do all the work while paddling." },
      { title: "Pop-up mechanics", text: "Hip, ankle and wrist mobility plus the speed of getting from prone to standing." },
      { title: "Hip rotation and single-leg control", text: "What your turns and landings need from the hips and knees." },
    ],
    plan: [
      { title: "Calm the injury", text: "Treat what hurts, adjust your sessions instead of stopping completely, and start loading the area safely." },
      { title: "Build paddle strength", text: "Rotator cuff, shoulder blade and upper-back endurance in our gym, progressed toward the volume you surf." },
      { title: "Restore the pop-up", text: "Mobility and power for a fast, clean pop-up, plus rotational strength for turns." },
      { title: "Back in the water", text: "A graded return to longer and bigger sessions and a short routine to do before you paddle out." },
    ],
    habits: [
      "Warm up the shoulders and upper back on the sand before you paddle out",
      "Build session length gradually after time out of the water",
      "Keep a couple of days a week of strength work for the cuff and upper back",
      "Swap in a longer or higher-volume board while you rebuild",
    ],
    faqs: [
      { q: "Can I keep surfing during physical therapy?", a: "Often, yes. We usually adjust session length, board and conditions rather than taking you out of the water completely." },
      { q: "Why does my shoulder hurt after paddling?", a: "Paddling repeats the same shoulder motion thousands of times per session. When the rotator cuff and shoulder blade muscles can't keep up, the tendons become irritated. Strengthening is usually the fix." },
      { q: "Do you work with competitive surfers?", a: "We work with surfers at every level, from weekend longboarders to competitive surfers, and tailor the program to your surfing." },
      { q: "Do I need a referral?", a: "No. California allows direct access, so you can book an evaluation without a physician referral." },
    ],
    sources: [
      {
        label: "Chronic and Gradual-Onset Injuries and Conditions in the Sport of Surfing: A Systematic Review. Sports. 2021;9(2):23.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7911480/",
      },
      {
        label: "The Surfer's Shoulder: A Systematic Review of Current Literature and Potential Pathophysiological Explanations of Chronic Shoulder Complaints in Wave Surfers. Sports Med Open. 2021;7(1):2.",
        url: "https://pubmed.ncbi.nlm.nih.gov/33409808/",
      },
    ],
    service: "/sports-rehabilitation/",
    updated: "2026-11-21",
  },
  {
    slug: "golfers",
    name: "Golfers",
    sport: "golf",
    h1: "Physical Therapy for Golfers in Carlsbad",
    title: "Physical Therapy for Golfers in Carlsbad, CA | Atala PT",
    description:
      "Low back pain, golfer's elbow, stiff hips and a shrinking backswing. One-on-one physical therapy for Carlsbad golfers who want to play pain-free and hit it further.",
    answer:
      "The lower back is the most commonly injured area in golfers at every level. The swing asks the spine to rotate fast and hard, and when the hips and upper back are stiff, the low back takes up the slack. We treat the pain, then restore the hip and trunk rotation and strength that let you swing freely.",
    hero: { src: `${U}/2026/11/golfer-low-back-pain-on-course.jpg`, alt: "Golfer holding his lower back on the course" },
    local: {
      heading: "From Aviara to La Costa",
      text: "Carlsbad has some of the best golf in Southern California, a short drive from our clinic. Rounds here are long and hilly, and the weather means you can play all year. That's great for your game, and hard on a back that isn't ready for it.",
      places: [
        { name: "Aviara", note: "Rolling terrain above Batiquitos Lagoon with plenty of uneven lies" },
        { name: "La Costa", note: "Two championship courses and lots of walking" },
        { name: "The Crossings", note: "Canyon holes and big elevation changes" },
        { name: "Practice range", note: "Long range sessions are a common trigger for back and elbow pain" },
      ],
      image: { src: `${U}/2025/02/AdobeStock_451456830.jpeg`, alt: "Rainbow over a Carlsbad lagoon and the coast highway" },
    },
    stat: {
      figure: "#1",
      text: "The lower back was the most commonly injured area across elite, semi-elite and recreational golfers in a 2024 systematic review of more than 10,000 golfers.",
      source: 0,
    },
    injuries: [
      { name: "Low back pain", text: "The most common golf injury, linked with how the trunk, hips and pelvis rotate during the swing.", guide: "low-back-pain" },
      { name: "Golfer's and tennis elbow", text: "Tendon pain on the inside or outside of the elbow from impact, grip and range volume.", guide: "tennis-elbow" },
      { name: "Shoulder pain", text: "Lead-shoulder irritation at the top of the backswing and in the follow-through.", guide: "shoulder-impingement" },
      { name: "Hip pain and stiffness", text: "Limited hip rotation that shortens the backswing and pushes load onto the spine." },
      { name: "Neck pain", text: "Holding the head still over the ball while the body rotates underneath.", guide: "neck-pain" },
      { name: "Wrist and hand pain", text: "Fat shots, roots and hard ground stress the lead wrist." },
    ],
    screen: [
      { title: "Hip rotation", text: "Lead and trail hip internal rotation, the motion most often missing in golfers with back pain." },
      { title: "Thoracic rotation", text: "How far your upper back turns independently of your pelvis." },
      { title: "Trunk and glute strength", text: "Whether you can create and stop rotation without overloading the low back." },
      { title: "Balance in your setup", text: "Single-leg stability and control through the finish." },
    ],
    plan: [
      { title: "Settle the pain", text: "Hands-on treatment, short-game and putting plans to keep you playing, and a reduced range schedule." },
      { title: "Unlock rotation", text: "Hip and upper-back mobility so the turn comes from the right places." },
      { title: "Build the engine", text: "Strength and power for the glutes and trunk in our gym, with rotational work progressed toward swing speed." },
      { title: "Back to 18 holes", text: "A graded return from half swings to full rounds, plus a five-minute warm-up for the first tee." },
    ],
    habits: [
      "Warm up before the first tee, not just a few practice swings",
      "Break up range sessions and finish with short-game work",
      "Keep two short strength sessions a week through the season",
      "Walk the course when you can; it helps conditioning",
    ],
    faqs: [
      { q: "Can physical therapy improve my golf swing?", a: "We don't coach the swing; your pro does. We restore the mobility, strength and control your body needs to make the swing your pro is teaching. Many golfers find that better hip and upper-back rotation changes what they can do." },
      { q: "Should I stop playing golf with back pain?", a: "Not always. Putting, chipping and shorter sessions are often fine while we work on the cause. We'll tell you what's sensible at your first visit." },
      { q: "Do you treat golfer's elbow?", a: "Yes. Elbow tendon pain responds well to a progressive loading program, along with changes to grip and practice volume." },
      { q: "Can I come in after a hip or knee replacement to get back to golf?", a: "Yes. Getting back on the course is one of the most common goals we work toward after joint replacement." },
    ],
    sources: [
      {
        label: "Garrett JM, et al. Injury Profiles of Elite, Semielite, and Recreational Golfers, and Their Associated Risk Factors: A Systematic Review. J Strength Cond Res. 2024;38(6):1157–1176.",
        url: "https://research.usc.edu.au/esploro/outputs/journalArticle/Injury-Profiles-of-Elite-Semielite-and/991043596802621",
      },
      {
        label: "Low back pain and golf: A review of biomechanical risk factors. Sports Med Health Sci. 2020;2(1):10–18.",
        url: "https://pubmed.ncbi.nlm.nih.gov/35783335/",
      },
    ],
    service: "/sports-rehabilitation/",
    updated: "2026-11-21",
  },
  {
    slug: "runners",
    name: "Runners",
    sport: "running",
    h1: "Physical Therapy for Runners in Carlsbad",
    title: "Physical Therapy for Runners in Carlsbad, CA | Atala PT",
    description:
      "Runner's knee, Achilles pain, plantar fasciitis and shin splints. One-on-one physical therapy for Carlsbad runners, from the seawall to the Carlsbad 5000 start line.",
    answer:
      "Most running injuries come from doing a bit too much, too soon, rather than from bad luck or bad form. We find which tissue is complaining, keep you running at a level it can handle, and build the strength that lets you add miles, speed and races without breaking down.",
    hero: { src: `${U}/2026/11/marathon-runners-kinesiology-tape-knees.jpg`, alt: "Runners at a race start, one with kinesiology tape on both knees" },
    local: {
      heading: "From the seawall to the Carlsbad 5000",
      text: "Our runners train on the coast highway, the seawall and the lagoon trails, and every spring a lot of them line up for the Carlsbad 5000 on Carlsbad Boulevard, the race known as the “World's Fastest 5K.” We plan your rehab around your race calendar.",
      places: [
        { name: "Carlsbad 5000", note: "A fast, flat spring 5K on Carlsbad Boulevard, run since 1986" },
        { name: "Seawall and coast highway", note: "Flat, fast and cambered, so it's easy to pile on miles" },
        { name: "Batiquitos Lagoon trail", note: "Soft dirt and gentle hills for easier days" },
        { name: "Lake Calavera", note: "Steep trail climbs and descents that load the calves and knees" },
      ],
      image: { src: `${U}/2025/02/AdobeStock_512646600.jpeg`, alt: "Aerial view of the North County coastline and the coast highway" },
    },
    stat: {
      figure: "17.8",
      text: "injuries per 1,000 hours of running in novice runners, compared with 7.7 in recreational runners, in a meta-analysis. New runners and runners coming back from a break are most at risk.",
      source: 0,
    },
    injuries: [
      { name: "Runner's knee", text: "Pain around or behind the kneecap, especially on hills, stairs and after sitting.", guide: "runners-knee" },
      { name: "Achilles tendinopathy", text: "Morning stiffness and pain in the tendon after mileage or speed increases.", guide: "achilles-tendinopathy" },
      { name: "Plantar fasciitis", text: "Sharp heel pain with the first steps of the day.", guide: "plantar-fasciitis" },
      { name: "Shin splints", text: "Aching along the inside of the shin that builds with mileage. Pain that keeps getting worse needs checking for a stress fracture." },
      { name: "Ankle sprains", text: "Rolled ankles on trails and curbs.", guide: "ankle-sprain" },
      { name: "Hip and low back pain", text: "Often linked to hip strength and how training load is spread through the week.", guide: "low-back-pain" },
    ],
    screen: [
      { title: "Training load", text: "Weekly mileage, intensity and recent changes: usually the biggest clue to what went wrong." },
      { title: "Calf and hip strength", text: "Single-leg calf raises and hip strength tests compared side to side." },
      { title: "Running assessment", text: "We watch you run and look for anything that loads the painful tissue." },
      { title: "Single-leg control and hopping", text: "Whether you're ready for the impact and spring that running needs." },
    ],
    plan: [
      { title: "Keep you running", text: "Set a pain-guided running level, add cross-training and treat the irritated tissue." },
      { title: "Build strength", text: "Calf, quad and hip strength in our gym. These are the strongest protection against most running injuries." },
      { title: "Add spring", text: "Hopping, bounding and faster running so tendons are ready for race pace." },
      { title: "Race-ready", text: "A graded return to your full training plan, built backward from your next race." },
    ],
    habits: [
      "Increase weekly mileage gradually, and avoid jumping both volume and intensity at once",
      "Strength train twice a week, even in race season",
      "Treat sleep and easy days as part of training",
      "Rotate shoes and terrain rather than changing everything at once",
    ],
    faqs: [
      { q: "Do I have to stop running?", a: "Usually not. Most runners keep running at a reduced level with a clear rule for how much pain is acceptable. Stopping completely often makes the return harder." },
      { q: "Can you help me get ready for the Carlsbad 5000 or a marathon?", a: "Yes. We'll plan your rehab around your race date and build in a taper that keeps the injury quiet." },
      { q: "Should I get a gait analysis or new shoes?", a: "Shoes and form can matter, but training load and strength usually matter more. We assess all three and only change what's needed." },
      { q: "Do I need a referral to see a physical therapist?", a: "No. California allows direct access, so you can book an evaluation without a physician referral." },
    ],
    sources: [
      {
        label: "Videbæk S, et al. Incidence of Running-Related Injuries Per 1000 h of running in Different Types of Runners: A Systematic Review and Meta-Analysis. Sports Med. 2015;45(7):1017–1026.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25951917/",
      },
    ],
    service: "/sports-rehabilitation/",
    updated: "2026-11-21",
  },
];

export const activityPath = (slug: string) => `/physical-therapy-for-${slug}/`;
export const getActivity = (slug: string) => {
  const a = activities.find((x) => x.slug === slug);
  if (!a) throw new Error(`Unknown activity ${slug}`);
  return a;
};

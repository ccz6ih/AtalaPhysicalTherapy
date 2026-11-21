import type { Guide } from "./guides";

/**
 * Second batch of condition guides (added Nov 2026). Same writing rules as guides.ts:
 * answer first, plain language, no outcome promises, red flags always included,
 * sources are clinical practice guidelines or peer-reviewed trials.
 */

const U = "/wp-content/uploads";

export const moreGuides: Guide[] = [
  {
    slug: "ankle-sprain",
    region: "foot-ankle",
    name: "Ankle sprain",
    h1: "Ankle Sprain Physical Therapy in Carlsbad, CA",
    title: "Ankle Sprain Physical Therapy in Carlsbad, CA | Atala PT",
    description:
      "How long a sprained ankle takes to heal, when to start moving it, and how physical therapy prevents the next sprain. One-on-one ankle rehab in Carlsbad — no referral needed.",
    answer:
      "A sprained ankle is a stretch or tear of the ligaments on the outside of the ankle, usually from rolling the foot inward. Most heal well, but many people go on to sprain the same ankle again. Physical therapy gets you walking normally sooner, then rebuilds the balance and strength that protect the ankle from the next one.",
    image: { src: `${U}/2022/11/at-physiotherapist.jpg`, alt: "Physical therapist guiding a patient through a lower-leg exercise" },
    whatItIs: [
      "Most ankle sprains are lateral sprains: the foot rolls under, and the ligaments on the outside of the ankle are overstretched or torn. They range from a mild stretch to a complete tear of one or more ligaments.",
      "The ligaments usually heal. The bigger problem is what is left behind: weaker muscles around the ankle and slower balance reactions. That is why a first sprain so often turns into a second and third, a pattern called chronic ankle instability, where the ankle feels like it might give way.",
    ],
    symptoms: [
      "Pain and swelling on the outside of the ankle",
      "Bruising that may track down toward the toes",
      "Pain putting weight on the foot, especially on uneven ground",
      "Stiffness, particularly bending the ankle up",
      "A feeling that the ankle is loose or might give way",
    ],
    causes: [
      "Landing on someone's foot or the edge of a curb",
      "Cutting and pivoting sports: soccer, basketball, volleyball, pickleball",
      "Trail running, hiking and walking on sand or uneven ground",
      "A previous sprain that was never fully rehabilitated",
    ],
    howPTHelps: [
      "The physical therapy clinical practice guideline for ankle sprains supports early, protected weight bearing and exercise rather than long periods of immobilization, and recommends balance and strength training to lower the risk of spraining the ankle again.",
      "We grade the sprain, rule out signs that need an X-ray, then progress you from protected walking to hopping, cutting and landing. You leave with a balance program you can keep doing at home.",
    ],
    treatments: [
      "Swelling control and protected weight bearing early on",
      "Joint mobilization to restore ankle bend (dorsiflexion)",
      "Progressive balance and single-leg control training",
      "Calf, foot and hip strengthening",
      "Hop, cut and landing drills before return to sport",
      "Bracing or taping advice for higher-risk activities",
    ],
    plan: [
      { title: "Protect and calm", text: "Manage swelling, start walking with support as tolerated and keep the ankle gently moving." },
      { title: "Restore motion", text: "Hands-on work and exercises to get the ankle bending fully again so you walk without a limp." },
      { title: "Rebuild control", text: "Balance, calf strength and hip control, progressing from stable floors to foam, sand and single-leg work." },
      { title: "Return and prevent", text: "Running, hopping and sport-specific drills, then a short maintenance program to cut the risk of re-injury." },
    ],
    selfCare: [
      "Keep the ankle elevated and use compression for swelling in the first days",
      "Walk as pain allows rather than staying completely off the foot",
      "Trace the alphabet with your toes a few times a day to keep motion",
      "Start practising standing on one leg as soon as you can do it safely",
    ],
    redFlags: [
      "You could not take four steps right after the injury, or still can't",
      "Tenderness directly on the bony knobs of the ankle or the outer edge of the foot (an X-ray may be needed)",
      "Numbness, coldness or color change in the foot",
      "A pop at the back of the ankle with weakness pushing off (possible Achilles rupture)",
    ],
    faqs: [
      { q: "How long does a sprained ankle take to heal?", a: "Mild sprains often feel much better within a couple of weeks, while more severe sprains can take several weeks to months. Ligament tissue keeps remodeling for longer than the pain lasts, which is why finishing your balance and strength work matters." },
      { q: "Should I keep my sprained ankle immobilized?", a: "For most sprains, no. Early protected movement and walking as tolerated generally lead to a faster return than long immobilization. Severe sprains may need a short period in a brace or boot." },
      { q: "Why do I keep spraining the same ankle?", a: "After a sprain, the ankle's balance reactions and the muscles that protect it are often weaker. Without targeted training, the ankle stays vulnerable. That's the main thing physical therapy fixes." },
      { q: "Do I need a referral to see a physical therapist for an ankle sprain?", a: "No. California allows direct access, so you can book an evaluation at Atala without a physician referral." },
    ],
    related: ["achilles-tendinopathy", "plantar-fasciitis", "runners-knee"],
    service: "/sports-rehabilitation/",
    sources: [
      {
        label: "Martin RL, et al. Ankle Stability and Movement Coordination Impairments: Lateral Ankle Ligament Sprains Revision 2021. JOSPT. 2021;51(4):CPG1–CPG80.",
        url: "https://www.jospt.org/doi/10.2519/jospt.2021.0302",
      },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "achilles-tendinopathy",
    region: "foot-ankle",
    name: "Achilles tendinopathy",
    h1: "Achilles Tendinopathy Physical Therapy in Carlsbad, CA",
    title: "Achilles Tendinopathy Treatment in Carlsbad, CA | Atala PT",
    description:
      "Why the Achilles gets sore, why rest alone rarely fixes it, and how a progressive loading program gets runners back. One-on-one Achilles rehab in Carlsbad.",
    answer:
      "Achilles tendinopathy is pain and stiffness in the tendon at the back of the ankle, usually from loading it more than it was ready for. Complete rest tends to make the tendon weaker, not better. The most effective treatment is a gradual, structured strengthening program that teaches the tendon to tolerate load again.",
    image: { src: `${U}/2023/01/full-body-healthy-young-woman-sprinting-outdoors-in-the-city.jpg`, alt: "Runner sprinting on a sunny street" },
    whatItIs: [
      "The Achilles tendon connects the calf muscles to the heel and stores and releases energy every time you walk, run or jump. When the load on it rises faster than it can adapt, the tendon becomes painful and irritable. The most common form affects the middle of the tendon, a few centimeters above the heel; another form affects the point where it attaches to the heel bone.",
      "“Tendinopathy” is used rather than “tendinitis” because the problem is mainly a change in how the tendon tolerates load, not ongoing inflammation. That's why anti-inflammatories and rest give short-term relief but rarely solve it.",
    ],
    symptoms: [
      "Pain and stiffness in the Achilles first thing in the morning or after sitting",
      "Pain that eases as you warm up, then returns after activity",
      "Tenderness or a thickened, sore spot when you squeeze the tendon",
      "Pain with hopping, running uphill or climbing stairs",
    ],
    causes: [
      "A sudden increase in running mileage, speed work or hills",
      "Returning to sport after time off",
      "Weak calf muscles or limited ankle movement",
      "Changes in footwear, such as switching to much flatter shoes",
      "It is also common in people who aren't athletes, particularly in middle age",
    ],
    howPTHelps: [
      "The physical therapy clinical practice guideline for midportion Achilles tendinopathy recommends progressive tendon-loading exercise as a core treatment and advises against complete rest.",
      "We find your current tolerable load, set a running or activity level you can keep doing, and progress calf strength week by week. Pain is monitored, not avoided completely, so the tendon keeps adapting.",
    ],
    treatments: [
      "Progressive calf and tendon loading (slow heavy and eccentric work)",
      "Running and activity modification instead of stopping completely",
      "Ankle and foot mobility work where movement is limited",
      "Hip and knee strength to share load up the chain",
      "Hopping and plyometric progressions before full return",
      "Footwear and training-load guidance",
    ],
    plan: [
      { title: "Settle the tendon", text: "Adjust training to a level the tendon tolerates and start isometric and slow calf loading." },
      { title: "Build strength", text: "Heavier, slower calf work, single-leg progressions and mobility where needed." },
      { title: "Add spring", text: "Hopping, skipping and faster loading so the tendon is ready for running and jumping again." },
      { title: "Back to full training", text: "A graded return-to-run plan and a weekly maintenance routine to keep it from coming back." },
    ],
    selfCare: [
      "Reduce, don't stop: keep the activities that cause only mild pain that settles by the next morning",
      "Avoid stretching the tendon hard over a step while it is irritable",
      "Track morning stiffness; it's a useful guide to how the tendon is coping",
      "Hold off on hill sprints and speed work until strength is back",
    ],
    redFlags: [
      "A sudden pop or feeling of being kicked in the back of the leg (possible rupture) — get seen the same day",
      "Inability to rise onto your toes on the affected leg",
      "Achilles pain after starting a fluoroquinolone antibiotic — contact your physician",
      "Significant swelling, redness and heat around the tendon",
    ],
    faqs: [
      { q: "How long does Achilles tendinopathy take to heal?", a: "Tendons adapt slowly. Many people notice meaningful improvement within six to twelve weeks of consistent loading, but full recovery can take several months. Sticking with the program matters more than any single treatment." },
      { q: "Can I keep running with Achilles tendinopathy?", a: "Often, yes, at a reduced level. A common rule is that pain during running should stay mild and should settle by the next morning. We'll set a running plan around that." },
      { q: "Is stretching good for Achilles pain?", a: "Not always. Aggressive stretching can compress and irritate the tendon, especially where it attaches to the heel. Strengthening is usually more helpful." },
      { q: "Do I need an ultrasound or MRI?", a: "Usually not. The diagnosis is clinical, and imaging changes in the tendon don't track closely with pain. Imaging is used when a tear is suspected or recovery stalls." },
    ],
    related: ["plantar-fasciitis", "ankle-sprain", "runners-knee"],
    service: "/sports-rehabilitation/",
    sources: [
      {
        label: "Chimenti RL, et al. Achilles Pain, Stiffness, and Muscle Power Deficits: Midportion Achilles Tendinopathy Revision – 2024. JOSPT. 2024;54(12):CPG1–CPG32.",
        url: "https://www.jospt.org/doi/10.2519/jospt.2024.0302",
      },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "meniscus-tear",
    region: "knee",
    name: "Meniscus tear",
    h1: "Meniscus Tear Physical Therapy in Carlsbad, CA",
    title: "Meniscus Tear Physical Therapy in Carlsbad, CA | Atala PT",
    description:
      "Do you need surgery for a torn meniscus? What the research says, how physical therapy helps, and when a tear needs a surgeon. Knee rehab in Carlsbad, no referral needed.",
    answer:
      "The meniscus is a C-shaped cushion of cartilage inside the knee, and tears are very common, especially after 40. Many tears, particularly the gradual, wear-related kind, respond as well to a structured exercise program as to arthroscopic surgery. A tear that locks the knee is different and needs a surgical opinion.",
    image: { src: `${U}/2023/01/muscular-sportsman-exercising-on-trx-straps-in-gym.jpg`, alt: "Man doing a supported strength exercise with suspension straps" },
    whatItIs: [
      "Each knee has two menisci that spread load between the thigh bone and shin bone. A meniscus can tear suddenly, usually with a twist on a bent knee in sport, or gradually, as the cartilage becomes less resilient with age.",
      "Degenerative tears are so common that they often show up on MRI in people with no knee pain at all. That doesn't mean they never matter, but a tear on a scan isn't automatically the reason a knee hurts, or a reason for surgery.",
    ],
    symptoms: [
      "Pain along the inside or outside joint line of the knee",
      "Swelling, often developing over a day after an injury",
      "Pain with twisting, deep squatting or kneeling",
      "Catching or clicking",
      "True locking, where the knee gets stuck and won't straighten",
    ],
    causes: [
      "Twisting on a planted foot in sport — soccer, basketball, skiing, pickleball",
      "Deep squatting or lifting from a squat",
      "Gradual, age-related change in the cartilage",
      "Often occurs together with an ACL injury",
    ],
    howPTHelps: [
      "In a randomized trial of middle-aged adults with degenerative meniscal tears, 12 weeks of supervised exercise therapy produced knee function similar to arthroscopic partial meniscectomy at two years, with greater thigh strength early on.",
      "We check for signs of a mechanical block, calm the swelling, restore full straightening and bending, and build the quadriceps and hip strength that take load off the joint. If you've had meniscus surgery, we follow your surgeon's protocol, which varies a lot depending on whether the meniscus was trimmed or repaired.",
    ],
    treatments: [
      "Swelling management and restoring full knee extension",
      "Progressive quadriceps, hamstring and hip strengthening",
      "Neuromuscular and balance training",
      "Activity modification for deep squatting and twisting",
      "Return-to-sport testing for athletes",
      "Post-operative rehab after meniscectomy or meniscus repair",
    ],
    plan: [
      { title: "Settle the knee", text: "Reduce swelling, regain full straightening and keep you walking normally." },
      { title: "Build strength", text: "Progressive leg and hip strength in our gym, with exercises chosen to avoid painful twisting early on." },
      { title: "Restore control", text: "Balance, step-downs, single-leg work and gradual return to squatting and pivoting." },
      { title: "Back to activity", text: "Sport- and job-specific drills, testing before return, and a plan to protect the knee long term." },
    ],
    selfCare: [
      "Keep moving the knee through a comfortable range several times a day",
      "Avoid deep squats and twisting on the knee while it's irritable",
      "Use ice and elevation for swelling",
      "Stationary cycling is often a comfortable way to stay active",
    ],
    redFlags: [
      "The knee locks and won't fully straighten",
      "Rapid, large swelling within a couple of hours of an injury",
      "The knee gives way repeatedly",
      "Calf pain, swelling and warmth, especially after surgery (possible blood clot) — seek urgent care",
    ],
    faqs: [
      { q: "Do I need surgery for a torn meniscus?", a: "Not always. For degenerative tears without locking, exercise therapy is commonly recommended first, and research shows similar results to surgery for many people. Large traumatic tears in younger, active people, or tears that lock the knee, may need a surgical opinion." },
      { q: "Can a meniscus tear heal on its own?", a: "The outer edge of the meniscus has a blood supply and can heal; the inner part generally doesn't. But many people become pain-free and fully active even when the tear itself is still visible on MRI." },
      { q: "How long is physical therapy for a meniscus tear?", a: "Non-surgical programs often run around 8 to 12 weeks. After a meniscus repair, rehab is longer and follows your surgeon's restrictions." },
      { q: "Is it OK to walk on a torn meniscus?", a: "Usually, yes, as pain allows. If the knee is locking or giving way, get it assessed before increasing activity." },
    ],
    related: ["acl-reconstruction-rehab", "knee-replacement-rehab", "runners-knee"],
    service: "/non-surgical-injury-rehabilitation/",
    sources: [
      {
        label: "Logerstedt DS, et al. Knee Pain and Mobility Impairments: Meniscal and Articular Cartilage Lesions Revision 2018. JOSPT. 2018;48(2):A1–A50.",
        url: "https://www.jospt.org/doi/10.2519/jospt.2018.0301",
      },
      {
        label: "Kise NJ, et al. Exercise therapy versus arthroscopic partial meniscectomy for degenerative meniscal tear in middle aged patients: randomised controlled trial with two year follow-up. BMJ. 2016;354:i3740.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27440192/",
      },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "carpal-tunnel-syndrome",
    region: "elbow-wrist-hand",
    name: "Carpal tunnel syndrome",
    h1: "Carpal Tunnel Syndrome Physical Therapy in Carlsbad, CA",
    title: "Carpal Tunnel Physical Therapy in Carlsbad, CA | Atala PT",
    description:
      "What causes numb, tingling fingers, how splinting and therapy help mild to moderate carpal tunnel syndrome, and when to see a surgeon. Hand therapy in Carlsbad.",
    answer:
      "Carpal tunnel syndrome is pressure on the median nerve where it passes through the wrist, causing numbness and tingling in the thumb, index and middle fingers. Mild to moderate cases are usually treated first without surgery: night splinting, activity changes and targeted exercises. Constant numbness or thumb weakness needs prompt medical review.",
    image: { src: `${U}/2022/11/physiotherapy.jpg`, alt: "Physical therapist assessing a patient's arm and wrist" },
    whatItIs: [
      "The carpal tunnel is a narrow passage at the front of the wrist formed by the wrist bones and a tough ligament. The median nerve and nine tendons share that space. When pressure in the tunnel rises — from swelling, wrist position or repetitive load — the nerve becomes irritated.",
      "It is the most common nerve compression problem in the arm. Symptoms typically start at night or with sustained gripping, and early on they come and go.",
    ],
    symptoms: [
      "Numbness or tingling in the thumb, index, middle and half of the ring finger",
      "Symptoms that wake you at night and ease when you shake your hand",
      "Tingling while driving, holding a phone or reading",
      "Dropping things or clumsiness with fine tasks",
      "In longer-standing cases, weakness or wasting at the base of the thumb",
    ],
    causes: [
      "Repetitive or forceful gripping and sustained bent-wrist positions",
      "Pregnancy, diabetes, thyroid conditions and rheumatoid arthritis",
      "Vibrating tools",
      "Wrist fractures or arthritis that narrow the tunnel",
    ],
    howPTHelps: [
      "The physical therapy clinical practice guideline for carpal tunnel syndrome supports conservative care for mild to moderate cases, including night splinting in a neutral wrist position, patient education and manual therapy, and recommends referral for symptoms that are severe or not improving.",
      "We confirm the pattern fits carpal tunnel rather than a pinched nerve in the neck, check sensation and strength, and set up splinting, nerve and tendon gliding, and changes to the tasks that provoke symptoms.",
    ],
    treatments: [
      "Neutral-wrist night splint fitting and wear schedule",
      "Nerve and tendon gliding exercises",
      "Manual therapy to the wrist, forearm and neck",
      "Workstation, tool and grip modifications",
      "Strength and dexterity work as symptoms settle",
      "Rehab after carpal tunnel release surgery",
    ],
    plan: [
      { title: "Calm the nerve", text: "Night splinting and changes to the positions and tasks that bring on tingling." },
      { title: "Restore glide", text: "Gentle nerve and tendon gliding plus hands-on work for the wrist, forearm and neck." },
      { title: "Build tolerance", text: "Grip, forearm and shoulder strength so daily tasks stop provoking symptoms." },
      { title: "Stay ahead of it", text: "A home routine, workstation setup and clear signs that mean it's time to see a surgeon." },
    ],
    selfCare: [
      "Keep your wrist straight at night; a neutral splint helps",
      "Take short breaks from gripping and typing to shake out and stretch the hands",
      "Avoid leaning on the heel of the hand or bending the wrist for long periods",
      "Lighten your grip on tools, steering wheels and phones",
    ],
    redFlags: [
      "Constant numbness that never goes away",
      "Wasting or weakness of the muscles at the base of the thumb",
      "Symptoms in both hands with neck pain, balance problems or leg symptoms",
      "Sudden symptoms after a wrist injury or with significant swelling",
    ],
    faqs: [
      { q: "Can carpal tunnel get better without surgery?", a: "Mild to moderate cases often improve with splinting, activity changes and therapy. If symptoms are severe, constant or show nerve damage on testing, surgery is often recommended." },
      { q: "Is it carpal tunnel or a pinched nerve in my neck?", a: "They can feel similar. Carpal tunnel affects specific fingers and is often worse at night; a nerve root in the neck tends to involve neck pain and a different pattern. We test both at your first visit." },
      { q: "Should I wear a wrist brace during the day?", a: "Night splinting has the best support. Daytime splinting can help during specific provoking tasks but shouldn't replace movement." },
      { q: "Do you treat carpal tunnel from work?", a: "Yes. We see work-related hand and wrist problems, including workers' compensation cases." },
    ],
    related: ["tennis-elbow", "neck-pain"],
    service: "/industrial-medicine-workers-compensation/",
    sources: [
      {
        label: "Erickson M, et al. Hand Pain and Sensory Deficits: Carpal Tunnel Syndrome. JOSPT. 2019;49(5):CPG1–CPG85.",
        url: "https://www.jospt.org/doi/10.2519/jospt.2019.0301",
      },
      {
        label: "Erickson M, et al. Hand Pain and Sensory Deficits: Carpal Tunnel Syndrome Revision 2026. JOSPT. 2026;56(4):CPG1–CPG79.",
        url: "https://www.jospt.org/doi/10.2519/jospt.2026.0301",
      },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "spinal-stenosis",
    region: "spine",
    name: "Spinal stenosis",
    h1: "Spinal Stenosis Physical Therapy in Carlsbad, CA",
    title: "Spinal Stenosis Physical Therapy in Carlsbad, CA | Atala PT",
    description:
      "Why legs ache and tire when you walk, why leaning forward helps, and what research shows about physical therapy versus surgery for lumbar spinal stenosis. Carlsbad, CA.",
    answer:
      "Lumbar spinal stenosis is narrowing of the spaces around the nerves in the lower back, most common after 50. It typically causes leg aching, heaviness or tingling with standing and walking that eases when you sit or lean forward. In a randomized trial, a structured physical therapy program gave results similar to surgery for many patients.",
    image: { src: `${U}/2022/12/5M3A7984-scaled.jpg`, alt: "Atala therapist working with a patient on a treatment table" },
    whatItIs: [
      "With age, discs lose height, joints thicken and ligaments stiffen. Together these can narrow the central canal or the openings where nerves leave the spine. Standing upright and arching backward narrows those spaces further; bending forward opens them.",
      "That's why people with stenosis often find they can walk further leaning on a shopping cart, or cycle comfortably but struggle to stand in line.",
    ],
    symptoms: [
      "Aching, heaviness, cramping or tingling in the buttocks and legs with standing or walking",
      "Relief within minutes of sitting down or bending forward",
      "Walking distance shrinking over time",
      "Low back stiffness, especially in the morning",
      "Leg weakness or a sense of unsteadiness",
    ],
    causes: [
      "Age-related disc and joint changes (most common)",
      "Thickened ligaments inside the spinal canal",
      "Spondylolisthesis (one vertebra slipping forward on another)",
      "Previous spine surgery or injury",
    ],
    howPTHelps: [
      "In a randomized trial of surgical candidates aged 50 and older, physical therapy produced improvements in physical function at two years similar to decompression surgery, though many patients in the therapy group later crossed over to surgery.",
      "Treatment focuses on flexion-based exercise, hip and trunk strength, walking and cycling tolerance, and hands-on work to the spine and hips. Our aim is to extend how far and how long you can walk comfortably.",
    ],
    treatments: [
      "Flexion-based mobility and exercise",
      "Hip mobility and strengthening",
      "Manual therapy for the spine and hips",
      "Graded walking and stationary cycling programs",
      "Balance training to reduce fall risk",
      "Rehab after decompression or fusion surgery",
    ],
    plan: [
      { title: "Find relief positions", text: "Identify the postures and movements that open the spine and ease leg symptoms." },
      { title: "Restore movement", text: "Hands-on work and mobility for the spine and hips, which often stiffen alongside stenosis." },
      { title: "Build capacity", text: "Strength and conditioning — cycling, walking intervals, trunk and hip work — to push walking tolerance further." },
      { title: "Keep going", text: "A long-term routine and pacing strategies so you can keep doing the walks, rounds and errands you care about." },
    ],
    selfCare: [
      "Break up long periods of standing; a foot on a step or a slight forward lean can help",
      "Try a stationary bike, which keeps you active in a spine-friendly position",
      "Walk in intervals: walk, sit briefly, walk again",
      "Avoid prolonged arching backward",
    ],
    redFlags: [
      "Numbness in the groin or inner thighs, or new bladder or bowel problems — go to the emergency room",
      "Progressive leg weakness or foot drop",
      "Frequent falls",
      "Leg pain with walking that also comes with cold feet or pain that doesn't ease with sitting (may be a circulation problem — see your physician)",
    ],
    faqs: [
      { q: "Can physical therapy help spinal stenosis?", a: "Yes, for many people. Physical therapy can improve walking tolerance, strength and function. In one randomized trial, results at two years were similar to surgery for many participants, though some later chose surgery." },
      { q: "What exercises should I avoid with spinal stenosis?", a: "Positions that arch the back for long periods often provoke symptoms. That doesn't mean avoiding movement — it means choosing exercises that suit your pattern, which we work out at your evaluation." },
      { q: "Will spinal stenosis get worse?", a: "Not necessarily. Many people stay stable for years, and symptoms can improve with treatment even though the narrowing on imaging doesn't change." },
      { q: "Do you treat people after spine surgery?", a: "Yes. We provide rehab after decompression and fusion, following your surgeon's restrictions." },
    ],
    related: ["sciatica", "low-back-pain", "herniated-disc"],
    service: "/back-neck-rehabilitation/",
    sources: [
      {
        label: "Delitto A, et al. Surgery versus nonsurgical treatment of lumbar spinal stenosis: a randomized trial. Ann Intern Med. 2015;162(7):465–473.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25844995/",
      },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "shoulder-impingement",
    region: "shoulder",
    name: "Shoulder impingement",
    h1: "Shoulder Impingement Physical Therapy in Carlsbad, CA",
    title: "Shoulder Impingement Treatment in Carlsbad, CA | Atala PT",
    description:
      "Pain reaching overhead or sleeping on your shoulder? Why exercise is the first-line treatment for shoulder impingement, and what research says about surgery. Carlsbad PT.",
    answer:
      "Shoulder impingement — now often called subacromial or rotator cuff–related shoulder pain — is pain on the outside of the shoulder when lifting the arm, reaching overhead or lying on that side. Exercise therapy is the recommended first-line treatment. A placebo-controlled surgical trial found decompression surgery offered no clinically important benefit over a sham procedure.",
    image: { src: `${U}/2023/02/Depositphotos_33446783_XL-scaled.jpg`, alt: "Therapist applying kinesiology tape to a patient's shoulder" },
    whatItIs: [
      "“Impingement” was named after the idea that the rotator cuff tendons get pinched under the bony roof of the shoulder (the acromion). We now understand the pain usually comes from the rotator cuff tendons and the bursa becoming overloaded and sensitive, rather than from bone pressing on tendon.",
      "That distinction matters for treatment. Shaving bone away doesn't address tendon capacity; progressive strengthening does.",
    ],
    symptoms: [
      "Pain on the outside of the upper arm, sometimes down toward the elbow",
      "A painful arc when lifting the arm out to the side or overhead",
      "Pain lying on the affected shoulder at night",
      "Pain reaching behind your back or putting on a jacket",
      "Weakness lifting or holding the arm away from the body",
    ],
    causes: [
      "Repetitive overhead work, lifting or sport: surfing, swimming, tennis, pickleball, volleyball",
      "A sudden increase in training or a new job task",
      "Rotator cuff and shoulder blade muscle weakness",
      "Age-related tendon changes, most common after 40",
    ],
    howPTHelps: [
      "An umbrella review of systematic reviews made a strong recommendation for exercise therapy as the first-line treatment for subacromial shoulder pain.",
      "We assess shoulder and shoulder-blade movement, strength and the neck, then build a progressive program — starting with what you can do comfortably and loading the cuff steadily toward the overhead and sport demands you need.",
    ],
    treatments: [
      "Progressive rotator cuff and shoulder blade strengthening",
      "Manual therapy for the shoulder, upper back and neck",
      "Posture and movement retraining for overhead tasks",
      "Activity and sleep-position modification",
      "Sport-specific progressions (paddling, serving, throwing)",
      "Taping for short-term symptom relief",
    ],
    plan: [
      { title: "Settle the shoulder", text: "Modify the painful tasks, improve sleep positions and start gentle isometric and range-of-motion work." },
      { title: "Build the cuff", text: "Progressive strength for the rotator cuff and shoulder blade muscles in our gym." },
      { title: "Load overhead", text: "Gradually reintroduce overhead lifting, reaching and sport-specific movements." },
      { title: "Return and maintain", text: "Back to full work and sport with a short routine that keeps the shoulder strong." },
    ],
    selfCare: [
      "Keep using the arm below shoulder height; complete rest tends to weaken the cuff",
      "Sleep on the other side or on your back with a pillow under the sore arm",
      "Avoid repeated overhead reaching while it's irritable",
      "Light, frequent movement beats occasional big efforts",
    ],
    redFlags: [
      "Sudden inability to lift the arm after a fall or injury (possible tendon tear)",
      "Shoulder pain with chest pain, shortness of breath or sweating — call 911",
      "Fever, redness and heat around the shoulder",
      "Shoulder pain with unexplained weight loss or a history of cancer",
    ],
    faqs: [
      { q: "Do I need surgery for shoulder impingement?", a: "Most people don't. Exercise therapy is the first-line treatment, and a large placebo-controlled trial found that subacromial decompression surgery gave no clinically important benefit over a placebo procedure." },
      { q: "How long does shoulder impingement take to heal?", a: "Many people improve noticeably within 6 to 12 weeks of consistent exercise, though tendons can take a few months to fully adapt." },
      { q: "Will a cortisone shot fix it?", a: "Injections can reduce pain in the short term and may help you exercise, but they don't rebuild tendon strength. Exercise is still the core of treatment." },
      { q: "Is impingement the same as a rotator cuff tear?", a: "Not exactly. Impingement-type pain usually involves irritated, overloaded tendons; a tear is structural damage. They can overlap, and we screen for signs of a significant tear." },
    ],
    related: ["rotator-cuff", "frozen-shoulder", "neck-pain"],
    service: "/orthopedic-physical-therapy/",
    sources: [
      {
        label: "Pieters L, et al. An Update of Systematic Reviews Examining the Effectiveness of Conservative Physical Therapy Interventions for Subacromial Shoulder Pain. JOSPT. 2020;50(3):131–141.",
        url: "https://pubmed.ncbi.nlm.nih.gov/31726927/",
      },
      {
        label: "Beard DJ, et al. Arthroscopic subacromial decompression for subacromial shoulder pain (CSAW): a multicentre, pragmatic, parallel group, placebo-controlled, three-group, randomised surgical trial. Lancet. 2018;391(10118):329–338.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29169668/",
      },
      {
        label: "Desmeules F, et al. Rotator Cuff Tendinopathy Diagnosis, Nonsurgical Medical Care, and Rehabilitation: A Clinical Practice Guideline. JOSPT. 2025;55(4):235–274.",
        url: "https://www.orthopt.org/uploads/content_files/files/Rotator_Cuff_CPG.pdf",
      },
    ],
    updated: "2026-11-21",
  },
];

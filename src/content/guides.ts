/**
 * In-depth condition guides — the pages built to earn search traffic.
 * URL: /conditions-we-treat/<slug>/
 *
 * Writing rules: answer first, plain language, no promises about outcomes,
 * red flags always included, sources are published clinical practice guidelines
 * or peer-reviewed reviews. Set `reviewedBy` once a licensed therapist at Atala
 * has read the page — the "Clinically reviewed by" line only shows when it is set.
 */

export type Guide = {
  slug: string;
  region: "spine" | "shoulder" | "knee" | "hip" | "foot-ankle" | "elbow-wrist-hand";
  name: string;
  h1: string;
  title: string;
  description: string;
  answer: string;
  image: { src: string; alt: string };
  whatItIs: string[];
  symptoms: string[];
  causes: string[];
  howPTHelps: string[];
  treatments: string[];
  plan: { title: string; text: string }[];
  selfCare: string[];
  redFlags: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  service: string;
  sources: { label: string; url: string }[];
  reviewedBy?: string;
  updated: string;
};

const U = "/wp-content/uploads";

const LBP_CPG = {
  label: "George SZ, et al. Interventions for the Management of Acute and Chronic Low Back Pain: Revision 2021. JOSPT. 2021;51(11):CPG1–CPG60.",
  url: "https://www.jospt.org/doi/10.2519/jospt.2021.0304",
};
const IMAGING = {
  label: "Brinjikji W, et al. Systematic literature review of imaging features of spinal degeneration in asymptomatic populations. AJNR. 2015;36(4):811–816.",
  url: "https://pubmed.ncbi.nlm.nih.gov/25430861/",
};

export const guides: Guide[] = [
  {
    slug: "sciatica",
    region: "spine",
    name: "Sciatica",
    h1: "Sciatica Physical Therapy in Carlsbad, CA",
    title: "Sciatica Physical Therapy in Carlsbad, CA | Atala PT",
    description: "What causes sciatica, how long it lasts, and how physical therapy relieves leg pain without surgery. One-on-one sciatica treatment in Carlsbad — no referral needed.",
    answer:
      "Sciatica is pain that travels from the low back or buttock down the leg, usually because a nerve root in the lower spine is irritated. Most people improve without surgery. Physical therapy helps by finding the positions and movements that calm the nerve, then rebuilding the strength and mobility that keep it from flaring again.",
    image: { src: `${U}/2022/12/5M3A8001-2-scaled.jpg`, alt: "Therapist explaining the lower spine to a patient with sciatica" },
    whatItIs: [
      "“Sciatica” describes a pattern of symptoms rather than a single diagnosis. The sciatic nerve is formed by nerve roots that leave the lower spine, and when one of those roots is compressed or inflamed, pain can travel along the nerve’s path — through the buttock, down the back of the thigh and sometimes into the calf and foot.",
      "The most common cause is a bulging or herniated lumbar disc. Narrowing around the nerve (stenosis), a slipped vertebra (spondylolisthesis) or tight, irritated tissue in the buttock can produce similar symptoms. Part of your first visit is working out which of these fits your story.",
    ],
    symptoms: [
      "Pain that runs from the low back or buttock down one leg, often below the knee",
      "Burning, electric or shooting pain, sometimes worse than the back pain itself",
      "Numbness or pins and needles in the leg or foot",
      "Pain that changes with sitting, bending, coughing or sneezing",
      "Leg weakness, such as difficulty rising onto the toes or lifting the foot",
    ],
    causes: [
      "Lumbar disc bulge or herniation",
      "Spinal stenosis (narrowing around the nerves), more common after 50",
      "Spondylolisthesis",
      "Long periods of sitting, repetitive bending and lifting, or a sudden twist",
    ],
    howPTHelps: [
      "Clinical practice guidelines for low back pain with leg pain recommend staying active and using exercise and manual therapy rather than bed rest. Physical therapy is often the first treatment physicians recommend before considering injections or surgery.",
      "At your evaluation we test how your leg symptoms respond to specific movements. Many people have a “directional preference” — a movement that pulls the pain back toward the spine, which is a good sign the nerve is calming down. We build your early plan around that response.",
    ],
    treatments: [
      "Repeated-movement and position-based exercises matched to your response",
      "Hands-on joint and soft tissue work to ease guarding and restore movement",
      "Nerve mobility (gentle “flossing”) exercises once symptoms settle",
      "Core, hip and leg strengthening so the spine handles load again",
      "Coaching on sitting, sleeping, driving and lifting while you heal",
    ],
    plan: [
      { title: "Calm the nerve", text: "Find positions that reduce leg pain, cut back the aggravating ones and keep you moving. Hands-on treatment eases muscle guarding." },
      { title: "Restore movement", text: "As leg symptoms retreat toward the back, we add mobility and nerve-gliding work and get you walking more comfortably." },
      { title: "Rebuild capacity", text: "Progressive strength for the trunk, hips and legs in our semi-private gym, so bending, lifting and long drives stop being triggers." },
      { title: "Back to your life", text: "We rehearse the things you care about — surfing, golf, picking up kids — and leave you with a plan for flare-ups." },
    ],
    selfCare: [
      "Keep moving: short, frequent walks usually beat lying down",
      "Change position often; avoid long stretches of slumped sitting",
      "Notice which positions ease the leg pain and which make it travel further — tell your therapist",
      "Use heat or ice for comfort, whichever you prefer",
    ],
    redFlags: [
      "Numbness in the groin or inner thighs (“saddle” area), or new trouble controlling your bladder or bowels — go to the emergency room",
      "Weakness in the leg or foot that is getting worse",
      "Symptoms in both legs at once",
      "Back pain with fever, unexplained weight loss, or a history of cancer",
    ],
    faqs: [
      { q: "How long does sciatica last?", a: "Many episodes improve substantially over several weeks with conservative care, though some take longer. Leg pain that is gradually moving back toward the spine is usually a sign of recovery." },
      { q: "Do I need an MRI before physical therapy?", a: "Usually not. Imaging is generally reserved for red-flag symptoms, worsening weakness, or pain that doesn’t improve with conservative care. Disc changes also show up on MRIs of many people with no pain at all, so a scan doesn’t always explain symptoms." },
      { q: "Should I stretch my hamstrings for sciatica?", a: "Not always. Aggressive hamstring stretching can irritate an already sensitive nerve. We test how your symptoms respond first and choose movements that help rather than provoke." },
      { q: "Can I see a physical therapist for sciatica without a referral?", a: "Yes. California allows direct access, so you can book an evaluation at Atala without a physician referral." },
    ],
    related: ["herniated-disc", "low-back-pain", "hip-replacement-rehab"],
    service: "/back-neck-rehabilitation/",
    sources: [LBP_CPG, IMAGING],
    updated: "2026-11-21",
  },
  {
    slug: "low-back-pain",
    region: "spine",
    name: "Low back pain",
    h1: "Low Back Pain Physical Therapy in Carlsbad, CA",
    title: "Low Back Pain Treatment & Physical Therapy in Carlsbad | Atala PT",
    description: "Why low back pain happens, when to worry, and how one-on-one physical therapy in Carlsbad gets you moving again — hands-on care, exercise and a plan built around your life.",
    answer:
      "Most low back pain is not caused by serious damage, and most episodes improve with the right activity. Physical therapy shortens recovery and lowers the chance of it coming back by combining hands-on treatment, exercise you’ll actually do, and changes to how you sit, lift and move.",
    image: { src: `${U}/2023/01/senior-wife-supporting-husband-feel-sudden-back-pain-muscles-tension-injury-at-home.jpg`, alt: "Man holding his lower back in pain at home" },
    whatItIs: [
      "Low back pain is pain between the bottom of the ribs and the top of the legs. It is one of the most common reasons adults see a clinician, and in most cases it is classed as “non-specific” — meaning no single structure can be blamed and nothing dangerous is going on.",
      "That’s good news. It means the pain is something we can change with movement, load and time, rather than something that needs fixing with a scalpel.",
    ],
    symptoms: [
      "Aching or sharp pain across the low back, sometimes into the buttocks",
      "Stiffness getting out of bed or after sitting",
      "Pain bending forward, lifting or twisting",
      "Muscle spasm or a “stuck” feeling",
    ],
    causes: [
      "Sudden lifts or awkward twists",
      "Long hours sitting, driving or at a desk",
      "Weak or deconditioned trunk and hip muscles",
      "Stress, poor sleep and inactivity, which all raise sensitivity to pain",
    ],
    howPTHelps: [
      "Current physical therapy guidelines recommend exercise for both acute and chronic low back pain, with manual therapy used alongside it rather than on its own. Education — understanding that hurt doesn’t always mean harm — is part of the treatment.",
      "Because we see one patient at a time, your visits aren’t spent on a hot pack in a crowded room. We spend them finding what loads your back comfortably and building from there.",
    ],
    treatments: [
      "Joint mobilization and soft tissue work to reduce pain and stiffness",
      "Specific trunk muscle activation and general strengthening",
      "Movement retraining for bending, lifting and getting up and down",
      "Workstation, driving and sleep-position advice",
      "A home program short enough to fit your day",
    ],
    plan: [
      { title: "Settle the pain", text: "Hands-on treatment and gentle movement to break the spasm-guarding cycle. You leave the first visit with things to do, not things to avoid." },
      { title: "Move with confidence", text: "We retrain bending, sitting and getting up so everyday movement stops feeling risky." },
      { title: "Get strong", text: "Progressive strength work in the gym — trunk, hips and legs — matched to your goals." },
      { title: "Stay well", text: "A plan for flare-ups and a routine you can keep, so you’re not back in six months." },
    ],
    selfCare: [
      "Stay as active as pain allows — rest in bed tends to slow recovery",
      "Walk little and often",
      "Break up sitting every 30 to 45 minutes",
      "Use heat for comfort; it often eases spasm",
    ],
    redFlags: [
      "Numbness in the saddle area or new bladder or bowel changes — go to the emergency room",
      "Progressive leg weakness",
      "Pain after a significant fall or accident",
      "Fever, unexplained weight loss, a history of cancer, or pain that is constant and worse at night",
    ],
    faqs: [
      { q: "Is it better to rest or move with back pain?", a: "Move. Guidelines recommend staying active within comfortable limits; prolonged bed rest generally slows recovery." },
      { q: "Do I need an X-ray or MRI?", a: "Not usually. Without red flags, imaging rarely changes treatment, and age-related changes appear on scans of many people who have no pain." },
      { q: "How many physical therapy visits will I need?", a: "It depends on how long you’ve had pain and what you need to get back to. After your evaluation your therapist will explain the plan and how often we expect to see you." },
      { q: "Is physical therapy better than a chiropractor for back pain?", a: "They overlap — both can use hands-on techniques. Physical therapy puts more emphasis on exercise, strength and teaching you to manage your back yourself." },
    ],
    related: ["sciatica", "herniated-disc", "neck-pain"],
    service: "/back-neck-rehabilitation/",
    sources: [LBP_CPG, IMAGING],
    updated: "2026-11-21",
  },
  {
    slug: "herniated-disc",
    region: "spine",
    name: "Herniated disc",
    h1: "Herniated Disc Physical Therapy in Carlsbad, CA",
    title: "Herniated Disc Treatment Without Surgery | Physical Therapy Carlsbad | Atala PT",
    description: "A herniated or bulging disc doesn’t automatically mean surgery. Learn how discs heal, what physical therapy does, and when to see a surgeon. Carlsbad, CA.",
    answer:
      "A herniated disc happens when the soft center of a spinal disc pushes through its outer layer and can irritate a nearby nerve. Many herniations shrink on their own over time, and most people recover without surgery. Physical therapy manages pain while that happens and rebuilds the strength to protect your back afterward.",
    image: { src: `${U}/2022/12/5M3A8005-scaled.jpg`, alt: "Therapist using a spine model to explain a disc herniation" },
    whatItIs: [
      "Spinal discs are shock absorbers between the vertebrae, with a tough outer ring and a gel-like center. A “bulge” or “herniation” means some of that center has pushed outward. In the low back this can cause sciatica; in the neck it can send pain, tingling or weakness into the arm.",
      "Disc findings are extremely common on MRI — including in people with no pain at all — so the scan is only part of the picture. How your symptoms behave matters more than how the disc looks.",
    ],
    symptoms: [
      "Back or neck pain, often with pain radiating into a leg or arm",
      "Numbness, tingling or weakness in the limb",
      "Pain that worsens with sitting, bending, coughing or sneezing",
      "Relief in certain positions, such as standing or lying",
    ],
    causes: [
      "Age-related changes in the disc",
      "Repetitive bending and lifting, or a single heavy lift",
      "Long periods of sitting and driving",
      "Smoking and general deconditioning",
    ],
    howPTHelps: [
      "Systematic reviews have found that a meaningful share of lumbar disc herniations regress on their own, which is one reason conservative care is usually tried first. Our job is to keep you moving and comfortable while your body does that work.",
      "We use your symptom response to guide exercise choice, add hands-on treatment, and progressively strengthen your trunk and hips. If you’ve already had surgery, we handle post-operative rehab too.",
    ],
    treatments: [
      "Directional-preference exercises (movements that centralize your pain)",
      "Manual therapy for joint stiffness and muscle guarding",
      "Nerve mobility exercises",
      "Progressive core, hip and leg strengthening",
      "Post-surgical rehab after microdiscectomy, laminectomy, fusion or disc replacement",
    ],
    plan: [
      { title: "Reduce irritation", text: "Find the positions and movements that ease your limb symptoms and adjust daily habits that keep aggravating the disc." },
      { title: "Restore motion", text: "Gentle mobility and nerve-gliding work as pain settles, plus hands-on treatment." },
      { title: "Load it up", text: "Progressive strength training so bending, lifting and sitting become comfortable again." },
      { title: "Protect it", text: "Technique coaching for your sport and work, and a plan for flare-ups." },
    ],
    selfCare: [
      "Keep walking — it’s one of the best-tolerated activities",
      "Avoid long periods of slumped sitting; use a lumbar roll in the car",
      "Note which movements send symptoms further down the limb and limit those for now",
    ],
    redFlags: [
      "Saddle numbness or bladder/bowel changes — emergency care",
      "Rapidly worsening weakness or foot drop",
      "Symptoms in both legs or both arms, or clumsiness in the hands and trouble with balance (possible spinal cord involvement)",
    ],
    faqs: [
      { q: "Can a herniated disc heal on its own?", a: "Often, yes. Many herniations get smaller over time, and symptoms frequently improve before that shows up on imaging." },
      { q: "When is surgery needed for a herniated disc?", a: "Surgery is usually considered for progressive nerve weakness, red-flag symptoms, or significant pain that hasn’t improved with a good trial of conservative care. We’ll tell you honestly if we think you should see a surgeon." },
      { q: "Is it safe to exercise with a herniated disc?", a: "The right exercise is safe and helpful. The key is choosing movements based on how your symptoms respond — that’s what your evaluation is for." },
    ],
    related: ["sciatica", "low-back-pain", "neck-pain"],
    service: "/back-neck-rehabilitation/",
    sources: [
      LBP_CPG,
      { label: "Chiu CC, et al. The probability of spontaneous regression of lumbar herniated disc: a systematic review. Clin Rehabil. 2015;29(2):184–195.", url: "https://pubmed.ncbi.nlm.nih.gov/25009200/" },
      IMAGING,
    ],
    updated: "2026-11-21",
  },
  {
    slug: "neck-pain",
    region: "spine",
    name: "Neck pain",
    h1: "Neck Pain Physical Therapy in Carlsbad, CA",
    title: "Neck Pain & Stiffness Physical Therapy in Carlsbad, CA | Atala PT",
    description: "Stiff neck, headaches, pain into the shoulder blade or arm? How physical therapy treats neck pain with hands-on care, exercise and posture coaching in Carlsbad.",
    answer:
      "Most neck pain comes from irritated joints, muscles and nerves rather than serious injury, and it responds well to a mix of hands-on treatment and specific exercise. Physical therapy eases the pain, restores your range of motion and strengthens the muscles that hold your head up all day.",
    image: { src: `${U}/2023/03/massage-of-neck-and-shoulders.jpg`, alt: "Hands-on treatment for neck and shoulder pain" },
    whatItIs: [
      "Neck pain can stay in the neck, spread to the shoulder blades, cause headaches, or travel into the arm if a nerve is involved. It often follows long hours at a desk or on a phone, poor sleep positions, a strain while training, or a car accident.",
      "Our evaluation sorts out which pattern you have — stiffness, a nerve-related pattern, headache, or whiplash — because each is treated differently.",
    ],
    symptoms: [
      "Stiffness and pain turning or tilting your head",
      "Pain between the shoulder blades",
      "Headaches that start at the base of the skull",
      "Pain, tingling or numbness into the arm or hand",
    ],
    causes: [
      "Sustained desk, laptop and phone postures",
      "Sleeping awkwardly or on an unsupportive pillow",
      "Whiplash from a car accident",
      "Overhead training, paddling or heavy lifting",
      "Age-related joint and disc changes",
    ],
    howPTHelps: [
      "The physical therapy guideline for neck pain recommends combining manual therapy with exercise, matched to the type of neck pain you have. Hands-on treatment relieves pain in the short term; exercise makes the improvement last.",
      "We also look below the neck. Your upper back and shoulder blades often drive neck strain, and they respond quickly to the right work.",
    ],
    treatments: [
      "Cervical and thoracic joint mobilization and soft tissue work",
      "Deep neck flexor and shoulder blade strengthening",
      "Nerve mobility exercises for arm symptoms",
      "Desk, screen and sleep setup coaching",
      "Graded return to training, surfing and overhead activity",
    ],
    plan: [
      { title: "Ease the pain", text: "Hands-on treatment to the neck and upper back plus gentle range-of-motion work you can repeat at home." },
      { title: "Restore control", text: "Activate the deep neck and shoulder blade muscles that support your head." },
      { title: "Build endurance", text: "Strength and endurance so you can work, drive and train without the neck fatiguing." },
      { title: "Keep it", text: "Workspace and habit changes plus a short routine for when it tightens up again." },
    ],
    selfCare: [
      "Raise your screen to eye level and take a short movement break every 30 to 45 minutes",
      "Gentle range-of-motion movements through the day beat holding still",
      "Use a pillow that keeps your neck level with your body",
      "Heat often helps muscle tension",
    ],
    redFlags: [
      "Neck pain after significant trauma, such as a fall or car accident — get medical imaging first",
      "Clumsy hands, trouble walking or balance changes",
      "Progressive arm weakness",
      "Neck pain with fever, severe headache, dizziness, double vision or trouble swallowing or speaking — seek urgent care",
    ],
    faqs: [
      { q: "Can physical therapy help neck pain headaches?", a: "Yes, for headaches that start in the neck (cervicogenic headaches). Manual therapy combined with neck and upper back exercise is a common, well-supported approach." },
      { q: "Is neck cracking safe?", a: "Gentle mobilization is our usual approach and is well tolerated. We discuss options with you, and we don’t use techniques you aren’t comfortable with." },
      { q: "How do I sleep with neck pain?", a: "Most people do best on their back or side with a pillow that keeps the neck level. Stomach sleeping tends to aggravate neck pain." },
    ],
    related: ["low-back-pain", "rotator-cuff", "herniated-disc"],
    service: "/back-neck-rehabilitation/",
    sources: [
      { label: "Blanpied PR, et al. Neck Pain: Revision 2017. JOSPT. 2017;47(7):A1–A83.", url: "https://www.jospt.org/doi/10.2519/jospt.2017.0302" },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "rotator-cuff",
    region: "shoulder",
    name: "Rotator cuff injuries",
    h1: "Rotator Cuff Physical Therapy in Carlsbad, CA",
    title: "Rotator Cuff Tear & Tendinitis Physical Therapy in Carlsbad | Atala PT",
    description: "Shoulder pain reaching overhead or sleeping on your side? How physical therapy treats rotator cuff tendinopathy and tears — with or without surgery — in Carlsbad, CA.",
    answer:
      "Rotator cuff problems range from irritated tendons to partial or full tears. Many — including many degenerative tears — improve with a structured strengthening program, without surgery. When surgery is needed, physical therapy before and after it protects the repair and restores full use of the arm.",
    image: { src: `${U}/2025/01/o-6.jpg`, alt: "Therapist guiding a patient through rotator cuff exercise" },
    whatItIs: [
      "The rotator cuff is four small muscles whose tendons wrap the ball of the shoulder and keep it centered as your arm moves. Overuse, age-related wear or a fall can irritate those tendons (tendinopathy) or tear them.",
      "Pain on the outside of the upper arm, especially reaching overhead or behind your back, is the classic sign. Night pain lying on that side is common.",
    ],
    symptoms: [
      "Pain on the front or side of the shoulder, often into the upper arm",
      "Pain lifting the arm overhead or reaching behind the back",
      "Night pain lying on the affected side",
      "Weakness lifting or rotating the arm",
    ],
    causes: [
      "Repetitive overhead work, paddling, throwing, swimming or racquet sports",
      "Age-related tendon changes, common after 40",
      "A fall onto an outstretched arm or a sudden heavy lift",
      "Poor shoulder blade control and upper back stiffness",
    ],
    howPTHelps: [
      "A large multicenter study found that most people with atraumatic full-thickness rotator cuff tears who completed a physical therapy program did well and avoided surgery over the following two years. Exercise-based rehab is a reasonable first step for many shoulders.",
      "After rotator cuff repair, physical therapy follows your surgeon’s protocol — protecting the repair early, restoring motion, then rebuilding strength over several months.",
    ],
    treatments: [
      "Progressive rotator cuff and shoulder blade strengthening",
      "Manual therapy to the shoulder, upper back and ribs",
      "Load management for training, surfing and work",
      "Sleep-position and daily-activity modifications",
      "Post-operative protocols in coordination with your surgeon",
    ],
    plan: [
      { title: "Calm it down", text: "Reduce aggravating loads, ease night pain and restore comfortable motion with hands-on treatment." },
      { title: "Restore control", text: "Shoulder blade and cuff exercises so the arm moves well before it moves heavy." },
      { title: "Build strength", text: "Progressive loading in the gym toward the strength your life and sport require." },
      { title: "Return to overhead", text: "Paddling, serving, lifting or reaching the top shelf, built back in stages." },
    ],
    selfCare: [
      "Keep the shoulder moving in pain-free ranges — avoid immobilizing it",
      "Sleep with a pillow hugged to the chest to support the arm",
      "Cut back, but don’t stop, the activities that aggravate it",
    ],
    redFlags: [
      "Sudden inability to lift the arm after a fall or injury — see an orthopedic doctor promptly",
      "Shoulder pain with chest pain, shortness of breath or sweating — call 911",
      "A visible deformity after a fall",
    ],
    faqs: [
      { q: "Can a rotator cuff tear heal without surgery?", a: "Torn tendon doesn’t typically reattach on its own, but many people regain pain-free function by strengthening the remaining cuff and surrounding muscles. Acute traumatic tears in younger, active people are more likely to need a surgical opinion." },
      { q: "How long is rotator cuff surgery recovery?", a: "Recovery after repair usually takes several months, progressing from protection to motion to strengthening. Your surgeon’s protocol sets the pace, and we follow it closely." },
      { q: "Should I keep working out with a sore rotator cuff?", a: "Usually yes, with changes. We’ll show you what to modify so you keep training while the shoulder recovers." },
    ],
    related: ["frozen-shoulder", "neck-pain", "tennis-elbow"],
    service: "/orthopedic-physical-therapy/",
    sources: [
      { label: "Kuhn JE, et al. Effectiveness of physical therapy in treating atraumatic full-thickness rotator cuff tears: a multicenter prospective cohort study. J Shoulder Elbow Surg. 2013;22(10):1371–1379.", url: "https://pubmed.ncbi.nlm.nih.gov/23540577/" },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "frozen-shoulder",
    region: "shoulder",
    name: "Frozen shoulder",
    h1: "Frozen Shoulder Physical Therapy in Carlsbad, CA",
    title: "Frozen Shoulder (Adhesive Capsulitis) Physical Therapy in Carlsbad | Atala PT",
    description: "Frozen shoulder explained: the stages, how long it lasts and how physical therapy restores motion without overdoing it. One-on-one care in Carlsbad, CA.",
    answer:
      "Frozen shoulder (adhesive capsulitis) is a painful stiffening of the shoulder joint capsule that slowly limits how far the arm can move. It tends to progress through stages and often improves over a year or more. Physical therapy, matched to how irritable your shoulder is, eases pain and restores motion faster and more completely.",
    image: { src: `${U}/2023/01/senior-stretching-exercise-training-rehabilitation-physiotherapy-treatment-sport.jpg`, alt: "Guided shoulder mobility exercise" },
    whatItIs: [
      "In frozen shoulder the capsule around the joint becomes inflamed and then thickens and tightens. Both active and passive movement are lost — not just “it hurts to lift,” but “it won’t go there even when someone else moves it.” Turning the arm outward is usually limited most.",
      "It’s most common between about 40 and 65, more common in women, and more likely in people with diabetes or thyroid disease.",
    ],
    symptoms: [
      "Gradual onset of deep shoulder pain, often worse at night",
      "Progressive stiffness reaching overhead, out to the side or behind the back",
      "Trouble with hair, bra clasps, seat belts and back pockets",
      "Pain that eases over time while stiffness remains",
    ],
    causes: [
      "Often no clear trigger (“primary” frozen shoulder)",
      "Following a period of shoulder immobilization, injury or surgery",
      "Diabetes and thyroid disease raise risk",
    ],
    howPTHelps: [
      "The physical therapy guideline for adhesive capsulitis describes it as a staged condition and recommends matching stretching intensity to how irritable the shoulder is. Too much, too early can flare a painful shoulder; too little lets stiffness set in.",
      "We adjust as you move through the stages: gentle, pain-relieving work early, then more assertive mobilization and stretching as the shoulder calms. Some people also benefit from a corticosteroid injection from their physician early on, which we can coordinate around.",
    ],
    treatments: [
      "Joint mobilization graded to your irritability",
      "Range-of-motion and stretching programs you can do daily",
      "Shoulder blade and rotator cuff strengthening as motion returns",
      "Heat and other modalities for comfort",
      "Coordination with your physician about injections when appropriate",
    ],
    plan: [
      { title: "Painful stage", text: "Calm the joint with gentle motion and hands-on techniques; protect sleep and daily function." },
      { title: "Stiff stage", text: "More assertive mobilization and a daily stretching routine to win back range." },
      { title: "Thawing", text: "Strength and control through your new range so the gains stick." },
      { title: "Full function", text: "Overhead reach, sport and lifting restored, with a maintenance routine." },
    ],
    selfCare: [
      "Keep moving gently every day within tolerable discomfort",
      "Pendulum swings and table slides are a good start",
      "Warmth before stretching often helps",
      "Don’t force painful end-range stretches in the early stage",
    ],
    redFlags: [
      "Shoulder pain with chest pain, shortness of breath or sweating — call 911",
      "Shoulder stiffness after a fall with a visible deformity",
      "Fever with a hot, swollen joint",
    ],
    faqs: [
      { q: "How long does frozen shoulder last?", a: "It commonly lasts a year or more, and some people are left with mild stiffness. Physical therapy aims to reduce pain sooner and restore as much motion as possible." },
      { q: "Should I push through the pain to stretch it?", a: "Not in the early, painful stage. Stretching intensity should match how irritable the shoulder is — that’s exactly what we monitor at each visit." },
      { q: "Can frozen shoulder happen in the other shoulder?", a: "Yes, it can affect the opposite shoulder later, which is a recognized risk factor. Recurrence in the same shoulder is uncommon." },
    ],
    related: ["rotator-cuff", "neck-pain"],
    service: "/orthopedic-physical-therapy/",
    sources: [
      { label: "Kelley MJ, et al. Shoulder Pain and Mobility Deficits: Adhesive Capsulitis. JOSPT. 2013;43(5):A1–A31.", url: "https://www.jospt.org/doi/10.2519/jospt.2013.0302" },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "acl-reconstruction-rehab",
    region: "knee",
    name: "ACL reconstruction rehab",
    h1: "ACL Reconstruction Rehab & Physical Therapy in Carlsbad, CA",
    title: "ACL Tear & ACL Surgery Rehab in Carlsbad, CA | Atala PT",
    description: "ACL rehab done one-on-one: prehab before surgery, a phase-by-phase recovery plan, and criteria-based return to sport. Physical therapy in Carlsbad, CA.",
    answer:
      "Recovering from an ACL reconstruction is a long, structured process — typically nine months or more before returning to cutting and pivoting sports. The best outcomes come from prehab before surgery, early work to restore full knee straightening and quad control, and a return to sport based on testing, not just the calendar.",
    image: { src: `${U}/2023/03/Depositphotos_189860708_XL-scaled.jpg`, alt: "Athlete training during knee rehabilitation" },
    whatItIs: [
      "The anterior cruciate ligament (ACL) stabilizes the knee during cutting, landing and pivoting. Tears usually happen without contact — a plant-and-turn in soccer, basketball, skiing or volleyball.",
      "Not every ACL tear needs surgery, especially for people who don’t play pivoting sports. For those who do, reconstruction is common, and rehab determines how well the knee performs afterward.",
    ],
    symptoms: [
      "A pop at the time of injury, followed by swelling within hours",
      "The knee giving way during turning or pivoting",
      "Loss of full knee straightening or bending",
      "Quad weakness and difficulty with stairs or single-leg tasks",
    ],
    causes: [
      "Non-contact cutting, pivoting and awkward landings",
      "Direct blows to the knee",
      "Fatigue, poor landing mechanics and hip/knee control deficits raise risk",
    ],
    howPTHelps: [
      "Physical therapy guidelines for knee ligament injuries support supervised, progressive rehab with early emphasis on regaining full extension and quadriceps strength, and objective testing before return to sport.",
      "We start before surgery when we can: reducing swelling, restoring motion and strengthening the quad makes the post-operative period smoother. After surgery we work closely with your surgeon’s protocol.",
    ],
    treatments: [
      "Prehab: swelling control, full extension and quad activation",
      "Early post-op motion, gait training and swelling management",
      "Progressive strength, balance and neuromuscular training",
      "Running, jumping, landing and cutting progressions",
      "Strength and hop testing before return to sport",
    ],
    plan: [
      { title: "Prehab", text: "Calm the knee, restore motion and build quad strength before surgery." },
      { title: "Early recovery", text: "Protect the graft, regain full straightening, wake up the quad and walk normally." },
      { title: "Strength", text: "Progressive gym work for the whole leg, balance and control." },
      { title: "Return to sport", text: "Running, jumping and cutting progressions, then objective testing before you go back." },
    ],
    selfCare: [
      "Prioritize getting the knee fully straight early — it matters more than bending",
      "Elevate and ice for swelling as directed",
      "Do your quad sets daily; they’re small but important",
    ],
    redFlags: [
      "Calf pain, swelling or redness after surgery (possible blood clot) — contact your surgeon or seek urgent care",
      "Fever, wound redness or drainage",
      "A new giving-way episode with swelling",
    ],
    faqs: [
      { q: "How long after ACL surgery can I return to sports?", a: "Return to cutting and pivoting sports usually takes at least nine months and should be based on strength and movement testing, not time alone." },
      { q: "Do I need surgery for an ACL tear?", a: "Not always. People who don’t do pivoting sports sometimes do well with rehab alone. Your surgeon and therapist can help you weigh it." },
      { q: "When does physical therapy start after ACL surgery?", a: "Usually within days of surgery, following your surgeon’s instructions." },
    ],
    related: ["knee-replacement-rehab", "runners-knee"],
    service: "/pre-and-post-surgical-rehabilitation/",
    sources: [
      { label: "Logerstedt DS, et al. Knee Stability and Movement Coordination Impairments: Knee Ligament Sprain Revision 2017. JOSPT. 2017;47(11):A1–A47.", url: "https://www.jospt.org/doi/10.2519/jospt.2017.0303" },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "knee-replacement-rehab",
    region: "knee",
    name: "Knee replacement rehab",
    h1: "Knee Replacement Rehab & Physical Therapy in Carlsbad, CA",
    title: "Total Knee Replacement Physical Therapy in Carlsbad, CA | Atala PT",
    description: "What to expect after a total or partial knee replacement, why the first weeks matter for range of motion, and how one-on-one outpatient PT in Carlsbad gets you walking, golfing and hiking again.",
    answer:
      "After a knee replacement, physical therapy is what turns a new joint into a knee that bends, straightens and carries you comfortably. The early weeks focus on swelling, range of motion and walking; later weeks rebuild strength for stairs, golf, hiking and travel.",
    image: { src: `${U}/2025/02/woman-wearing-knee-brace-or-orthosis-after-leg-surgery-working-out-in-the-park.jpg`, alt: "Woman exercising outdoors after knee surgery" },
    whatItIs: [
      "Total and partial knee replacements resurface a worn joint, usually because of osteoarthritis. Surgery removes the arthritic surfaces; rehab restores the motion and strength the knee lost before and after the operation.",
      "Starting physical therapy before surgery (prehab) can make the recovery feel more manageable, and we’re happy to see you then too.",
    ],
    symptoms: [
      "Swelling, warmth and stiffness in the weeks after surgery",
      "Difficulty fully straightening or bending the knee",
      "Quad weakness and a limp",
      "Trouble with stairs, getting in and out of the car, and sleep",
    ],
    causes: [
      "Knee osteoarthritis",
      "Post-traumatic arthritis after old injuries",
      "Inflammatory arthritis",
    ],
    howPTHelps: [
      "The physical therapy guideline for total knee arthroplasty supports early, progressive rehabilitation that combines motion, strengthening and functional training.",
      "Our one-on-one setting matters here: knee replacement rehab involves hands-on work, close monitoring of swelling, and steady progression — not a sheet of exercises and a busy floor.",
    ],
    treatments: [
      "Range-of-motion work toward full straightening and functional bending",
      "Swelling management",
      "Quadriceps and hip strengthening",
      "Gait training, stairs and transfers",
      "Balance work and return to golf, hiking, pickleball and travel",
    ],
    plan: [
      { title: "Prehab", text: "Strength and motion before surgery, plus a home set up for recovery." },
      { title: "Early motion", text: "Swelling control, range of motion and walking with less support." },
      { title: "Strength and stairs", text: "Progressive leg strength, balance and confident stairs." },
      { title: "Back to living", text: "Golf, beach walks, hiking and travel, rebuilt deliberately." },
    ],
    selfCare: [
      "Do your range-of-motion exercises several times a day — consistency beats intensity",
      "Elevate and ice for swelling",
      "Walk little and often rather than one long walk",
    ],
    redFlags: [
      "Calf pain or swelling, or shortness of breath — seek urgent care",
      "Fever, increasing redness, wound drainage or a sudden increase in pain",
    ],
    faqs: [
      { q: "How long is physical therapy after a knee replacement?", a: "Many people do several weeks to a few months of outpatient therapy, depending on how their motion and strength progress. We’ll tell you what we expect after your first visit." },
      { q: "How much should my knee bend after a replacement?", a: "Getting the knee fully straight and bending enough for stairs, sitting and getting in a car are the key early goals. Your surgeon and therapist will track your numbers." },
      { q: "Is it normal for the knee to stay swollen for weeks?", a: "Yes, some swelling commonly lasts for weeks to months. We’ll help you manage it so it doesn’t limit your progress." },
    ],
    related: ["acl-reconstruction-rehab", "hip-replacement-rehab", "runners-knee"],
    service: "/pre-and-post-surgical-rehabilitation/",
    sources: [
      { label: "Jette DU, et al. Physical Therapist Management of Total Knee Arthroplasty. Physical Therapy. 2020;100(9):1603–1631.", url: "https://pubmed.ncbi.nlm.nih.gov/32542403/" },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "runners-knee",
    region: "knee",
    name: "Runner’s knee",
    h1: "Runner’s Knee (Patellofemoral Pain) Physical Therapy in Carlsbad, CA",
    title: "Runner’s Knee & Patellofemoral Pain Treatment in Carlsbad | Atala PT",
    description: "Pain around the kneecap on stairs, squats or long runs? How physical therapy treats runner’s knee and IT band pain with hip and knee strengthening and smarter training in Carlsbad.",
    answer:
      "Runner’s knee — patellofemoral pain — is pain around or behind the kneecap that flares with stairs, squats, sitting and running. It’s rarely a sign of damage. Combined hip and knee strengthening, smart load management and, for runners, small form changes are the most effective treatment.",
    image: { src: `${U}/2023/02/athlete-runner-knee-injury-run.jpg`, alt: "Runner holding a sore knee" },
    whatItIs: [
      "Patellofemoral pain describes pain where the kneecap glides on the thigh bone. It’s common in runners, cyclists, hikers and anyone who has recently increased squatting, stairs or mileage.",
      "IT band syndrome — pain on the outside of the knee in runners and cyclists — is a related overuse problem, and many of the same principles apply.",
    ],
    symptoms: [
      "Dull ache around or behind the kneecap",
      "Pain on stairs (especially down), squatting, kneeling or running downhill",
      "Pain after sitting with the knees bent (“movie-goer’s knee”)",
      "Outer knee pain during runs or rides (IT band)",
    ],
    causes: [
      "A recent jump in mileage, hills or training intensity",
      "Weak hip and thigh muscles",
      "Running form and footwear factors",
      "Not enough recovery between hard sessions",
    ],
    howPTHelps: [
      "The patellofemoral pain guideline recommends exercise therapy — especially combined hip and knee strengthening — as the core treatment, with patellar taping, foot orthoses and gait retraining as helpful additions for some people.",
      "For runners training for the Carlsbad 5000 or a coastal half, we adjust your training load rather than just telling you to stop.",
    ],
    treatments: [
      "Progressive hip and knee strengthening",
      "Load management and training-plan adjustments",
      "Running gait analysis and cueing",
      "Taping for short-term pain relief",
      "Soft tissue work for the quads, hips and IT band region",
    ],
    plan: [
      { title: "Settle the knee", text: "Adjust your training and daily loads so the knee calms down without losing fitness." },
      { title: "Build strength", text: "Hip and knee strength progressions that make stairs and squats easier." },
      { title: "Fix the mechanics", text: "Gait analysis and simple form cues; footwear advice." },
      { title: "Return to running", text: "A graded return-to-run plan with clear rules for progressing." },
    ],
    selfCare: [
      "Cut volume and hills temporarily rather than stopping completely",
      "Avoid long periods of sitting with knees deeply bent",
      "Start simple strength work for the hips and thighs",
    ],
    redFlags: [
      "Significant swelling, locking or the knee giving way",
      "Pain after a twisting injury or fall",
      "Night pain or pain that doesn’t change with activity",
    ],
    faqs: [
      { q: "Can I keep running with runner’s knee?", a: "Often yes, with less volume and fewer hills while you strengthen. We’ll set clear rules so you know how much is OK." },
      { q: "Do I need new shoes or orthotics?", a: "Sometimes. Foot orthoses can help some people in the short term; we’ll look at your footwear and mechanics before recommending anything." },
      { q: "How long does patellofemoral pain take to improve?", a: "It varies. Many people notice changes within several weeks of consistent strengthening and load adjustments." },
    ],
    related: ["acl-reconstruction-rehab", "plantar-fasciitis", "knee-replacement-rehab"],
    service: "/sports-rehabilitation/",
    sources: [
      { label: "Willy RW, et al. Patellofemoral Pain. JOSPT. 2019;49(9):CPG1–CPG95.", url: "https://www.jospt.org/doi/10.2519/jospt.2019.0302" },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "hip-replacement-rehab",
    region: "hip",
    name: "Hip replacement rehab",
    h1: "Hip Replacement Rehab & Physical Therapy in Carlsbad, CA",
    title: "Total Hip Replacement Physical Therapy in Carlsbad, CA | Atala PT",
    description: "Recovering from a total hip replacement: what to expect, why strength and gait training matter, and how one-on-one physical therapy in Carlsbad gets you back to walking, golf and travel.",
    answer:
      "After a hip replacement, physical therapy restores a normal walking pattern, rebuilds hip strength and gets you back to stairs, driving, golf and long beach walks. Your surgeon’s precautions shape the early weeks; we follow them closely and progress from there.",
    image: { src: `${U}/2025/02/man-using-crutches-after-surgery.jpg`, alt: "Man walking with crutches after hip surgery" },
    whatItIs: [
      "A total hip replacement swaps an arthritic hip joint for a prosthetic ball and socket. Pain relief is often dramatic, but the muscles around the hip are usually weak from years of protecting it — and that’s what rehab addresses.",
      "Movement precautions vary with the surgical approach (anterior, posterior or lateral). We follow the specific instructions your surgeon gives you.",
    ],
    symptoms: [
      "A limp or reliance on a cane or walker",
      "Hip and thigh weakness, especially standing on one leg",
      "Stiffness and swelling in the early weeks",
      "Difficulty with stairs, socks, shoes and getting in and out of the car",
    ],
    causes: [
      "Hip osteoarthritis",
      "Hip fracture",
      "Avascular necrosis and inflammatory arthritis",
    ],
    howPTHelps: [
      "Strengthening and functional training are central to recovering after hip replacement, and many people benefit from starting before surgery. Guidelines for hip osteoarthritis also support exercise and manual therapy for people still deciding about surgery.",
      "We focus on the things that make life easier: a normal gait, confident stairs, getting up from low seats and returning to the activities you had the surgery for.",
    ],
    treatments: [
      "Gait training and weaning off walking aids",
      "Hip and core strengthening",
      "Balance and single-leg control",
      "Range of motion within your surgeon’s precautions",
      "Return to golf, hiking, pickleball and travel",
    ],
    plan: [
      { title: "Prehab", text: "Strength and mobility before surgery, plus practice with walking aids and transfers." },
      { title: "Walk well", text: "Protect the new joint, manage swelling and restore a confident gait." },
      { title: "Strength and balance", text: "Progressive hip strength and single-leg control in the gym." },
      { title: "Back to it", text: "Golf swings, longer walks, hikes and travel built back deliberately." },
    ],
    selfCare: [
      "Follow your surgeon’s movement precautions exactly",
      "Walk little and often",
      "Keep up the exercises from your surgeon or hospital therapist",
    ],
    redFlags: [
      "Calf pain or swelling, chest pain or shortness of breath — seek urgent care",
      "Fever, wound redness or drainage",
      "Sudden severe pain, a pop, or a change in leg length or position (possible dislocation)",
    ],
    faqs: [
      { q: "How long is recovery after a hip replacement?", a: "Many people walk without aids within weeks and continue improving for months. Your outpatient therapy length depends on your strength, gait and goals." },
      { q: "Can I play golf after a hip replacement?", a: "Many people return to golf after hip replacement. Your surgeon will advise on timing; we’ll build the strength and rotation for it." },
      { q: "Do I need physical therapy before hip surgery?", a: "It isn’t required, but prehab can make the early recovery easier and gives you a head start on strength." },
    ],
    related: ["knee-replacement-rehab", "sciatica", "low-back-pain"],
    service: "/pre-and-post-surgical-rehabilitation/",
    sources: [
      { label: "Cibulka MT, et al. Hip Pain and Mobility Deficits — Hip Osteoarthritis: Revision 2017. JOSPT. 2017;47(6):A1–A37.", url: "https://www.jospt.org/doi/10.2519/jospt.2017.0301" },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "plantar-fasciitis",
    region: "foot-ankle",
    name: "Plantar fasciitis",
    h1: "Plantar Fasciitis Physical Therapy in Carlsbad, CA",
    title: "Plantar Fasciitis & Heel Pain Treatment in Carlsbad, CA | Atala PT",
    description: "Heel pain with your first steps in the morning? How physical therapy treats plantar fasciitis with manual therapy, stretching, taping and strengthening in Carlsbad, CA.",
    answer:
      "Plantar fasciitis causes sharp heel pain that’s usually worst with the first steps in the morning or after sitting. Most people get better with conservative care. Physical therapy combines hands-on treatment, targeted stretching, taping and strengthening to calm the heel and keep you on your feet.",
    image: { src: `${U}/2025/02/athlete-drinking-water-while-resting-from-workout.jpg`, alt: "Runner resting after a workout" },
    whatItIs: [
      "The plantar fascia is a thick band of tissue running from the heel to the toes that supports the arch. When it’s overloaded, the attachment at the heel becomes painful and sensitive.",
      "It’s common in runners, people who stand all day, and after a sudden increase in walking — think a new beach-walk habit or a long trip.",
    ],
    symptoms: [
      "Sharp pain at the bottom of the heel with the first steps of the day",
      "Pain after standing up from sitting",
      "Pain that eases with warm-up but returns after long periods on your feet",
      "Tenderness on the inside of the heel",
    ],
    causes: [
      "A jump in running, walking or standing",
      "Tight calves and limited ankle motion",
      "Unsupportive footwear or walking barefoot on hard floors",
      "Weight gain and long hours standing",
    ],
    howPTHelps: [
      "The 2023 heel pain guideline recommends manual therapy, plantar fascia–specific and calf stretching, taping, and foot orthoses as part of a combined approach for plantar heel pain.",
      "We pair those with strength work for the foot and calf so the fascia can handle load again — and we look at your shoes and your week to find what’s overloading it.",
    ],
    treatments: [
      "Manual therapy to the foot, ankle and calf",
      "Plantar fascia and calf stretching",
      "Taping for short-term relief",
      "Progressive foot and calf strengthening",
      "Footwear, orthotic and activity guidance",
    ],
    plan: [
      { title: "Calm the heel", text: "Hands-on treatment, taping and stretching to ease morning pain." },
      { title: "Reduce overload", text: "Footwear, standing and training adjustments that give the fascia a break." },
      { title: "Strengthen", text: "Progressive calf and foot strength so the fascia tolerates load." },
      { title: "Return", text: "Back to running, hiking and long days on your feet." },
    ],
    selfCare: [
      "Stretch your calf and the bottom of your foot before getting out of bed",
      "Wear supportive shoes around the house instead of going barefoot",
      "Temporarily cut back long runs and walks rather than stopping completely",
      "Roll the arch gently on a ball or frozen water bottle",
    ],
    redFlags: [
      "Heel pain after a fall or landing from height",
      "Numbness, burning or tingling in the foot",
      "Heel swelling, redness and warmth, or fever",
    ],
    faqs: [
      { q: "How long does plantar fasciitis last?", a: "It often improves over a few months with consistent treatment, though some cases take longer. Starting care early tends to help." },
      { q: "Do I need custom orthotics for plantar fasciitis?", a: "Not necessarily. Prefabricated or custom orthoses can help when combined with other treatment. We’ll advise based on your feet and footwear." },
      { q: "Should I stop running?", a: "Usually you can keep running with changes to volume and surfaces while you treat it. We’ll help you decide." },
    ],
    related: ["runners-knee", "acl-reconstruction-rehab"],
    service: "/non-surgical-injury-rehabilitation/",
    sources: [
      { label: "Koc TA Jr, et al. Heel Pain — Plantar Fasciitis: Revision 2023. JOSPT. 2023;53(12):CPG1–CPG39.", url: "https://www.jospt.org/doi/10.2519/jospt.2023.0303" },
    ],
    updated: "2026-11-21",
  },
  {
    slug: "tennis-elbow",
    region: "elbow-wrist-hand",
    name: "Tennis elbow",
    h1: "Tennis Elbow Physical Therapy in Carlsbad, CA",
    title: "Tennis Elbow (Lateral Epicondylitis) Treatment in Carlsbad | Atala PT",
    description: "Outer elbow pain gripping, lifting or typing? How physical therapy treats tennis elbow with progressive tendon loading and hands-on care — for players, golfers and desk workers in Carlsbad.",
    answer:
      "Tennis elbow (lateral elbow tendinopathy) is pain on the outside of the elbow when you grip, lift or twist. You don’t need to play tennis to get it. Progressive strengthening of the forearm tendons, hands-on treatment and changes to how you load the arm are the foundation of recovery.",
    image: { src: `${U}/2025/02/nice-young-female-getting-professional-treatment-with-pain-in-hand-in-wellness-center.jpg`, alt: "Patient receiving treatment for arm and hand pain" },
    whatItIs: [
      "Tennis elbow is an overload problem of the tendons that extend the wrist and fingers, where they attach on the outside of the elbow. Golfer’s elbow is the same idea on the inside of the elbow.",
      "It’s common between about 35 and 55, in racquet sports and golf, and in people who use a mouse, tools or their grip for hours a day.",
    ],
    symptoms: [
      "Pain on the outside of the elbow, sometimes into the forearm",
      "Pain gripping, shaking hands, lifting a coffee cup or turning a doorknob",
      "Weak grip",
      "Pain with backhands, typing or using tools",
    ],
    causes: [
      "Repetitive gripping and wrist extension",
      "Racquet sports, golf and pickleball",
      "Computer, tool and manual work",
      "Sudden increases in activity",
    ],
    howPTHelps: [
      "The 2022 lateral elbow pain guideline was written because, although tennis elbow is often described as self-limiting, recurrence is high and it can keep people off work — which is why effective non-surgical treatment matters.",
      "We use progressive tendon loading, hands-on treatment to the elbow, wrist and neck, and practical changes to your grip, equipment and workstation.",
    ],
    treatments: [
      "Progressive isometric, eccentric and strength exercises for the forearm",
      "Manual therapy to the elbow, wrist and upper quarter",
      "Activity, grip and equipment modification",
      "Counterforce bracing when helpful",
      "Return to racquet sports and golf",
    ],
    plan: [
      { title: "Calm it", text: "Reduce aggravating grip loads and start pain-relieving isometric work." },
      { title: "Load it", text: "Progressive forearm and grip strengthening — the core of recovery." },
      { title: "Fix the cause", text: "Technique, equipment, grip and workstation changes." },
      { title: "Return", text: "Back to the court, course and workbench without the flare-ups." },
    ],
    selfCare: [
      "Lift with your palm up where possible",
      "Use thicker grips and take breaks from repetitive gripping",
      "Keep doing light, pain-tolerable activity rather than resting completely",
    ],
    redFlags: [
      "Elbow pain after a fall with swelling or deformity",
      "Numbness or tingling into the hand",
      "A hot, swollen elbow with fever",
    ],
    faqs: [
      { q: "How long does tennis elbow take to heal?", a: "It can take months, and it can recur. Consistent progressive loading tends to produce the most lasting results." },
      { q: "Are cortisone shots good for tennis elbow?", a: "They can relieve pain in the short term, but evidence suggests they may not help — and may be worse — in the longer term compared with exercise-based care. Discuss with your physician." },
      { q: "Should I wear a tennis elbow strap?", a: "A counterforce brace helps some people in the short term. It’s an addition to treatment, not a replacement for strengthening." },
    ],
    related: ["rotator-cuff", "neck-pain"],
    service: "/industrial-medicine-workers-compensation/",
    sources: [
      { label: "Lucado AM, et al. Lateral Elbow Pain and Muscle Function Impairments. JOSPT. 2022;52(12):CPG1–CPG111.", url: "https://www.jospt.org/doi/10.2519/jospt.2022.0302" },
    ],
    updated: "2026-11-21",
  },
];

export const getGuide = (slug: string) => {
  const g = guides.find((x) => x.slug === slug);
  if (!g) throw new Error(`Unknown guide ${slug}`);
  return g;
};

export const guidePath = (slug: string) => `/conditions-we-treat/${slug}/`;

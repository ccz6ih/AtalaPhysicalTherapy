/**
 * Service pages. Copy is carried over from the WordPress pages so existing
 * rankings keep their on-page content; layout is new.
 */

export type Block =
  | { p: string }
  | { list: string[] }
  | { defs: { term: string; text: string }[] }
  | { steps: { title: string; text: string }[] }
  | { quote: string };

export type ServiceSection = { heading: string; blocks: Block[]; image?: Img };
export type Img = { src: string; alt: string; w: number; h: number };

export type Service = {
  slug: string;
  path: string;
  name: string;
  shortName: string;
  h1: string;
  summary: string;
  cardText: string;
  hero: Img;
  taglines: string[];
  sections: ServiceSection[];
  why: ServiceSection;
  faqs?: { q: string; a: string }[];
};

const U = "/wp-content/uploads";

export const images = {
  teamGym: { src: `${U}/2022/12/5M3A8070-2-scaled.jpg`, alt: "The Atala Physical Therapy team in the clinic gym", w: 1714, h: 2400 },
  spineTeach: { src: `${U}/2022/12/5M3A8001-2-scaled.jpg`, alt: "Terri explains the spine to a patient on the treatment table", w: 1715, h: 2400 },
  spineTeachWide: { src: `${U}/2022/12/5M3A8005-scaled.jpg`, alt: "Therapist using a spine model to explain a patient's back pain", w: 2400, h: 1714 },
  jasonTreat: { src: `${U}/2022/12/5M3A7984-scaled.jpg`, alt: "Jason Bandong, DPT, treating a patient's leg in a private room", w: 2400, h: 1714 },
  privateRoom: { src: `${U}/2022/12/5M3A7547-2-scaled.jpg`, alt: "A private treatment room at Atala Physical Therapy", w: 2400, h: 1715 },
  chartTeach: { src: `${U}/2022/12/5M3A8037-2-scaled.jpg`, alt: "Therapist walking a patient through an anatomy chart", w: 1600, h: 2400 },
  blogTeach: { src: `${U}/2022/12/5M3A7799.jpg`, alt: "Hands-on treatment at Atala Physical Therapy", w: 2400, h: 1714 },
  gymTeam: { src: `${U}/2022/11/HomePage.jpg`, alt: "Patients training in the Atala semi-private gym", w: 1200, h: 477 },
  trx: { src: `${U}/2023/02/atala-1.png`, alt: "Patient doing suspension training in the Atala gym", w: 500, h: 500 },
  gymCoaching: { src: `${U}/2023/02/atala-3.png`, alt: "Therapist coaching patients through exercises in the gym", w: 500, h: 500 },
  logoWall: { src: `${U}/2023/02/atala-4.png`, alt: "Atala Physical Therapy logo on the clinic wall", w: 500, h: 500 },
  frontDesk: { src: `${U}/2023/02/unnamed-scaled.jpg`, alt: "The Atala front desk in Carlsbad", w: 2400, h: 1800 },
  frontDeskTall: { src: `${U}/2023/02/unnamed-1-scaled.jpg`, alt: "The welcoming front desk at Atala Physical Therapy", w: 1800, h: 2400 },
  building: { src: `${U}/2023/03/IMG_3933-scaled.jpg`, alt: "Atala Physical Therapy entrance at 3222 Grey Hawk Court, Carlsbad", w: 1800, h: 2400 },
  teamSelfie: { src: `${U}/2025/01/o-7.jpg`, alt: "The Atala team together at the clinic", w: 1000, h: 750 },
  treatment: { src: `${U}/2025/01/o-6.jpg`, alt: "Therapist guiding a patient through shoulder exercise", w: 750, h: 1000 },
  terriPortrait: { src: `${U}/2023/02/Facetune_28-08-2022-16-03-49.jpg`, alt: "Terri Brusseau Kraus, PT, MPT, owner of Atala Physical Therapy", w: 1199, h: 1595 },
};

export const services: Service[] = [
  {
    slug: "orthopedic-physical-therapy",
    path: "/orthopedic-physical-therapy/",
    name: "Orthopedic Physical Therapy",
    shortName: "Orthopedic",
    h1: "Orthopedic Physical Therapy Specialists in Carlsbad, CA | Atala PT",
    summary:
      "Most orthopedic injuries we see in Carlsbad stem from repetitive movement patterns – whether it's from surfing at Tamarack, golfing at Aviara, or training for the Carlsbad 5000.",
    cardText:
      "Acute injuries, chronic overuse, sprains, strains and recovery after a cast comes off. We restore mobility, strength and stability with manual therapy and targeted exercise.",
    hero: { src: `${U}/2023/01/AdobeStock_175991477-scaled.jpeg`, alt: "Physical therapist assessing a patient's knee", w: 2400, h: 1600 },
    taglines: ["Personalized Recovery Plans", "Advanced Orthopedic Care", "Life Without Pain", "Carlsbad Trusted Physical Therapy", "Results Through Experience"],
    sections: [
      {
        heading: "Understanding Orthopedic Physical Therapy",
        image: images.spineTeach,
        blocks: [
          { p: "Most orthopedic injuries are caused by a repeated movement pattern that places continued stress on a tissue over a period of time. While there are single-incidence injuries, the majority of cases manifest over time as pain, inflammation, stiffness, weakness, and tissue damage." },
          { p: "Orthopedic Physical Therapy is a type of treatment that can help you recover from a wide range of musculoskeletal conditions and injuries, including those related to bones, muscles, tendons, ligaments, and joints. Here are a few reasons why you might need orthopedic physical therapy:" },
          {
            defs: [
              { term: "You've recently had surgery", text: "If you've had an orthopedic surgery, such as a joint replacement, physical therapy can help you regain strength, mobility, and flexibility in the affected area." },
              { term: "You're dealing with chronic pain", text: "If you're dealing with chronic pain related to a musculoskeletal condition, such as arthritis, physical therapy can help you manage your pain and improve your overall quality of life." },
              { term: "You're recovering from an injury", text: "If you've suffered an injury, such as a sprain, strain, or fracture, physical therapy can help you regain strength, mobility, and function in the affected area." },
              { term: "You want to improve your athletic performance", text: "If you're an athlete looking to improve your performance, physical therapy can help you increase your strength, flexibility, and endurance, and reduce your risk of injury." },
            ],
          },
        ],
      },
      {
        heading: "We Understand Your Needs",
        blocks: [
          { p: "At Atala Physical Therapy, we understand that orthopedic injuries can be a real pain (literally!) and it can hold you back from living life to the fullest. But don't worry, we're here to help you say goodbye to aches, pains, and stiffness caused by orthopedic injuries, so you can get back to doing what you love." },
          { p: "We know how it feels to experience that sudden twinge or pop, and we know how overwhelming it can be to deal with pain, inflammation, stiffness, weakness, and tissue damage. That's why our team of expert therapists are dedicated to provide you with personalized care to address your specific needs and goals. We use a combination of traditional and cutting-edge methods to reduce pain, inflammation, and stiffness, and help you regain strength, flexibility, and stability in the affected area." },
          { p: "Our team of expert therapists will work with you to develop a personalized treatment plan that addresses your specific needs and helps you recover quickly. We use a combination of traditional methods such as manual therapy, ice, and compression therapy to reduce pain and swelling, and restore joint mobility and strength with manual mobilization and therapeutic exercises. We also use cutting-edge modality treatments such as ultrasound and electric stimulation to speed up the healing process. We promise it won't be boring; we'll make sure to inject some humor and fun into the process!" },
        ],
      },
      {
        heading: "How Atala Does Orthopedic Physical Therapy",
        image: images.jasonTreat,
        blocks: [
          { p: "At Atala Physical Therapy, we use a combination of traditional and cutting-edge methods to provide comprehensive orthopedic physical therapy. Here's how we do it:" },
          {
            steps: [
              { title: "Initial evaluation", text: "We start with an initial evaluation of the patient's condition and medical history. This involves a physical examination and assessment of the affected area to determine the nature and extent of the injury or condition." },
              { title: "Treatment planning", text: "After the initial evaluation, we work with the patient to develop a personalized treatment plan that addresses their specific needs and goals." },
              { title: "Manual therapy", text: "We use a variety of manual therapy techniques, such as soft tissue mobilization, joint mobilization, and manual stretching, to reduce pain, inflammation, and stiffness and improve joint mobility." },
              { title: "Therapeutic exercises", text: "We also use therapeutic exercises to help patients regain strength, flexibility, and stability in the affected area. These exercises are tailored to the patient's condition and goals and may include stretching, strengthening, and balance exercises." },
              { title: "Modality treatments", text: "We use modality treatments such as ultrasound, electrical stimulation, and mechanical spinal traction to speed up the healing process." },
              { title: "Follow-up", text: "We provide follow-up care to monitor the patient's progress and make any necessary adjustments to their treatment plan." },
              { title: "Patient education", text: "We also educate patients about their condition, treatment plan, and how to manage it effectively." },
            ],
          },
        ],
      },
    ],
    why: {
      heading: "Why choose us?",
      image: { src: `${U}/2023/01/group-of-young-multiethnic-friends-beach-summer.jpg`, alt: "Friends enjoying an active day at the beach", w: 2000, h: 1335 },
      blocks: [
        { p: "Atala takes a more individualized approach to treatment where the therapist can focus on the patient's specific needs, such as their lifestyle, daily activities, and work schedule to tailor the treatment program better. This ensures that the patient gets the best possible care and that their treatment is tailored to their specific needs and goals, resulting in a more effective and efficient recovery." },
        { p: "We help you kick orthopedic injuries to the curb and get you back to living your best life! Whether you're dealing with pain, inflammation, stiffness, or weakness caused by a repeated movement pattern, we're here to help you bounce back and do the things you love." },
        { p: "Our team of expert therapists will work with you to develop a personalized treatment plan that's as unique as you are. We'll use a combination of traditional methods such as manual therapy, ice, and compression therapy to reduce pain and swelling, and restore joint mobility and strength with manual mobilization and therapeutic exercises. We'll also use cutting-edge modality treatments such as ultrasound and electric stimulation to speed up the healing process." },
        { p: "Don't let orthopedic injuries slow you down any longer! We'll help you get back to your best self, whether you're an athlete looking to improve performance or just someone looking to get back to their normal routine. With our expert care, you'll be ready to take on the world in no time! So come on in, let's have some fun, and get you back in the game!" },
      ],
    },
  },
  {
    slug: "non-surgical-injury-rehabilitation",
    path: "/non-surgical-injury-rehabilitation/",
    name: "Non-Surgical Injury Rehabilitation",
    shortName: "Non-Surgical",
    h1: "Non-Surgical Injury Rehabilitation in Carlsbad, CA | Atala PT",
    summary:
      "From tennis elbow developed at Poinsettia Community Park to lower back pain from long beach walks, many injuries can be successfully treated without surgery.",
    cardText:
      "Tendonitis, plantar fasciitis, impingement, low back pain, sciatica. We find the faulty mechanics behind the pain and correct them, often without surgery.",
    hero: { src: `${U}/2022/11/physiotherapy.jpg`, alt: "Therapist treating a patient's shoulder without surgery", w: 2000, h: 1333 },
    taglines: ["Recover. Rebuild. Thrive.", "You Deserve Healing", "Science-Backed Recovery", "Carlsbad Trusted Physical Therapy", "Therapy That Works"],
    sections: [
      {
        heading: "Understanding Non-Surgical Injury Rehabilitation",
        image: images.spineTeach,
        blocks: [
          { p: "Non-surgical injury rehabilitation is a form of physical therapy that aims to help patients recover from injuries without the need for surgical intervention. It involves a variety of treatments and exercises that are tailored to the specific needs of the patient and can be used to address a wide range of injuries, such as tendonitis, plantar fasciitis, shoulder impingement, lower back pain, hip impingement, hip bursitis, patellofemoral pain syndrome, and cervical radiculopathy." },
          { p: "During an initial evaluation, a therapist will give a complete working diagnosis and identify the faulty biomechanics surrounding the issue. Then, the therapist will develop a personalized treatment plan that incorporates various strategies and techniques to correct those faults and address the pain, discomfort and dysfunction. This can include modalities such as manual therapy, ice, and compression therapy, as well as exercises to help restore joint mobility and strength." },
          { p: "Non-surgical injury rehabilitation can be beneficial for those who want to avoid surgery, or for those who have exhausted surgical options without success. It can also be beneficial for those who want to improve their overall health and quality of life, through a combination of weight loss, healthy eating habits, and healthy exercise habits. With the help of a physical therapist, patients can overcome their injuries, and return to their normal routine in a safe and effective way." },
        ],
      },
      {
        heading: "We Understand Your Needs",
        blocks: [
          { p: "Non-surgical injury rehabilitation is like a superhero for your aches and pains! It's a way to help you recover from injuries without going under the knife." },
          { p: "Think of it like a detective solving the mystery of your pain. Our physical therapists will evaluate your injury, figure out what's causing it, and come up with a personalized plan to fix it. This plan can include a variety of different treatments, such as manual therapy to loosen up tight muscles and joints, ice to reduce inflammation, and compression therapy to keep everything in place." },
          { p: "But that's not all, our therapists will also give you specific exercises to do at home, to help your injury heal faster and to prevent it from happening again. And the best part is, you'll be under the guidance of an expert at all times, so you can rest easy knowing that you're in good hands." },
          { p: "Non-surgical injury rehabilitation is not just effective, it's also a much more enjoyable experience than having surgery. You get to work one-on-one with a therapist, who will cheer you on and keep you motivated throughout the healing process. And at the end, you'll be back to doing what you love, pain-free!" },
        ],
      },
      {
        heading: "How Atala Does Non-Surgical Injury Rehabilitation",
        image: images.privateRoom,
        blocks: [
          { p: "At Atala Physical Therapy, we take a holistic approach to non-surgical injury rehabilitation. Our team of experienced therapists will start by conducting a thorough evaluation of your injury to determine the root cause. We'll take into account your medical history, current symptoms, and any functional limitations you may have." },
          { p: "Once we have a clear understanding of your injury, we'll work with you to create a personalized treatment plan that addresses the underlying issues and corrects any faulty biomechanics. This plan can include a combination of manual therapy techniques, such as soft tissue mobilization, joint mobilization, and stretching, to reduce pain and improve mobility." },
          { p: "We also incorporate exercise therapy as a key component of our treatment plan, to help you regain strength and stability. We'll provide you with specific exercises that are tailored to your individual needs and that you can do at home or at the gym." },
          { p: "In addition to manual therapy and exercise, we also use various modalities, such as ultrasound, electrical stimulation, and mechanical traction, to assist in the healing process." },
          { p: "At Atala Physical Therapy, we understand that every patient is unique, and we take the time to understand each individual's needs and goals. We work closely with each patient, providing education and guidance throughout their recovery journey and ensuring the best possible outcome." },
        ],
      },
    ],
    why: {
      heading: "Why choose Atala?",
      image: { src: `${U}/2023/02/Depositphotos_33446783_XL-scaled.jpg`, alt: "Active adult enjoying pain-free movement outdoors", w: 2400, h: 1600 },
      blocks: [
        { p: "At Atala Physical Therapy, we're the best choice for non-surgical injury rehab in Carlsbad, California. Our experienced therapists create personalized treatment plans tailored to your individual goals and lifestyle. We'll get you back to doing the things you love quickly and effectively using a combination of hands-on techniques, cutting-edge modalities, and a positive and motivating environment. Trust us to provide the highest quality care and track your progress every step of the way. Say goodbye to pain and hello to healing at Atala Physical Therapy. Here are a few reasons why you should choose Atala for non-surgical injury rehabilitation:" },
        {
          defs: [
            { term: "Personalized treatment plans", text: "We take the time to understand your unique needs and create a treatment plan tailored to your individual goals and lifestyle." },
            { term: "Experienced therapists", text: "Our therapists are experts in their field and have the knowledge and skills to help you recover quickly and effectively." },
            { term: "Hands-on approach", text: "We use a combination of manual therapy techniques and exercise therapy to help you achieve optimal results." },
            { term: "Cutting-edge modalities", text: "We use the latest modalities, such as ultrasound and electrical stimulation, to speed up the healing process and improve your outcomes." },
            { term: "Convenient location", text: "Atala Physical Therapy is located in Carlsbad, California, making it easily accessible for individuals living in the surrounding areas." },
          ],
        },
      ],
    },
  },
  {
    slug: "pre-and-post-surgical-rehabilitation",
    path: "/pre-and-post-surgical-rehabilitation/",
    name: "Pre & Post-Surgical Rehabilitation",
    shortName: "Pre & Post-Surgical",
    h1: "Pre & Post-Surgical Rehabilitation Services in Carlsbad, CA | Atala PT",
    summary:
      "From weekend warriors at South Ponto Beach to golfers at La Costa Resort, we treat all orthopedic surgeries in our Carlsbad community.",
    cardText:
      "Joint replacements, ACL and meniscus repairs, rotator cuff and labrum repairs. Prehab before surgery, then a plan built with your surgeon after.",
    hero: { src: `${U}/2022/12/Depositphotos_19543787_XL-scaled.jpg`, alt: "Patient recovering after knee surgery with a physical therapist", w: 2400, h: 2347 },
    taglines: ["Personalized Recovery Plans", "Prehab, Not Just Rehab", "Life Without Pain", "Carlsbad Trusted Physical Therapy", "Results Through Experience"],
    sections: [
      {
        heading: "Understanding Pre and Post-Surgical Rehabilitation",
        image: images.chartTeach,
        blocks: [
          { p: "Pre and Post-Surgical Rehabilitation is a specialized type of physical therapy that is designed to help patients recover and regain their strength and function following surgery. The goal of pre and post-surgical rehabilitation is to help patients achieve the best possible outcomes and return to their normal activities as quickly and safely as possible." },
          { p: "Pre-surgical rehabilitation is typically recommended for patients who are preparing for an upcoming surgery. This type of therapy can help to improve the patient's overall health and fitness, as well as prepare their body for the surgery. This can include exercises to improve strength, flexibility, and range of motion, as well as education on how to care for oneself post-surgery." },
          { p: "Post-surgical rehabilitation is typically recommended for patients who have recently undergone surgery. This type of therapy can help to reduce pain, inflammation, and swelling, as well as restore strength, flexibility, and range of motion. Therapy may include exercises to help patients regain their ability to move and perform daily activities, as well as education on how to care for oneself post-surgery." },
          { p: "At Atala Physical therapy, we work closely with surgeons and other healthcare professionals to ensure that our patients receive the best possible care. Our therapists are experts in their field and have the knowledge and skills to help patients recover quickly and effectively." },
        ],
      },
      {
        heading: "We Understand Your Needs",
        blocks: [
          { p: "At Atala Physical Therapy, we understand that surgery can be a daunting experience. But don't worry, we're here to guide you through every step of the way! Our team of expert therapists specialize in pre and post-surgical rehabilitation and are dedicated to helping you achieve the best possible outcomes from your surgery." },
          { p: "One of the key benefits of choosing Atala for pre and post-surgical rehabilitation is our personalized approach. We work closely with your surgeon to understand the specific requirements of your surgery and create a treatment plan that is tailored to your individual needs. This ensures that your recovery is as smooth and efficient as possible." },
          { p: "Our therapists are experts in their field and have the knowledge and skills to help you recover quickly and effectively. We use a combination of manual therapy techniques, exercise therapy and modalities such as ultrasound and electrical stimulation to help you achieve optimal results." },
          { p: "Another benefit of choosing Atala is our convenient location in Carlsbad, California. This makes it easily accessible for individuals living in the surrounding areas." },
          { p: "We also provide a positive and motivating environment where patients can feel comfortable and confident during their recovery journey. Our therapists are passionate about helping their patients achieve their goals and getting back to doing the things they love." },
          { p: "At Atala, we are committed to providing the highest quality of care and ensuring that every patient's course of treatment is followed through and results are tracked. We understand that surgery can be a big step and we want to make sure that you have the best possible experience and outcomes." },
        ],
      },
      {
        heading: "How Atala Does Pre and Post-Surgical Rehabilitation",
        image: images.treatment,
        blocks: [
          { p: "Our team of experienced therapists will work closely with your surgeon to ensure that you get the best possible outcomes and a full return to function. We know that every surgery and every patient is unique, which is why we create personalized treatment plans that are tailored to your specific needs." },
          {
            steps: [
              { title: "Before surgery", text: "We'll work with you to pre-habilitate the injury and ensure that you have maximum range of motion and strength going into the operation. This will help maximize your outcomes after the surgery and get you back to your normal routine as soon as possible." },
              { title: "After surgery", text: "We'll work with you to help you regain your strength, flexibility, and range of motion. We'll use a combination of manual therapy techniques, therapeutic exercises, and modality treatments such as ultrasound and electrical stimulation to assist in the healing process." },
              { title: "Through the hard parts", text: "We understand that the healing process can be tough, which is why we provide a positive and motivating environment where you can feel comfortable and confident during your recovery journey. We'll be with you every step of the way, cheering you on and helping you achieve your goals." },
            ],
          },
          { p: "At Atala Physical Therapy, we're dedicated to getting you back to doing what you love, and our Pre and Post-Surgical Rehabilitation program is an essential part of that journey. So, whether you're an athlete looking to get back in the game or just someone looking to get back to their normal routine, we've got you covered!" },
        ],
      },
    ],
    why: {
      heading: "Why choose Atala?",
      image: { src: `${U}/2023/02/doctor-consulting-with-patient-back-problems-physical-therapy-concept.jpg`, alt: "Therapist consulting with a patient before surgery", w: 2000, h: 1324 },
      blocks: [
        {
          defs: [
            { term: "We're Surgery Gurus", text: "Our team of experienced therapists have extensive knowledge and experience in pre and post-surgical rehabilitation, ensuring that you receive the best possible care." },
            { term: "Prehab, Not Just Rehab", text: "We believe in the power of prehabilitation before surgery. By preparing your body before the procedure, we can maximize your outcomes and help you recover faster." },
            { term: "Fitness for Surgery", text: "We work closely with your surgeon to ensure that you are in the best possible condition before your operation, reducing the risk of complications and helping you recover more quickly." },
            { term: "Recovery Roadmap", text: "We create a personalized treatment plan for each patient, taking into account your individual goals and lifestyle." },
            { term: "Modality Marvels", text: "We use cutting-edge modalities such as ultrasound and electrical stimulation to assist in healing and reduce pain." },
            { term: "Comfy and Convenient", text: "Our clinic is located in the beautiful city of Carlsbad, California, making it easily accessible for individuals living in the surrounding areas." },
            { term: "Positive Vibes Only", text: "Our therapists provide a positive and motivating environment, where patients can feel comfortable and confident during their recovery journey." },
          ],
        },
        { p: "At Atala Physical Therapy, we are dedicated to helping our patients achieve the best possible outcomes and get back to doing the things they love. With our expert care, you'll be ready to tackle anything that comes your way." },
      ],
    },
  },
  {
    slug: "sports-rehabilitation",
    path: "/sports-rehabilitation/",
    name: "Sports Rehabilitation & Athletic Recovery",
    shortName: "Sports Rehab",
    h1: "Sports Rehabilitation & Athletic Recovery | Atala PT Carlsbad",
    summary:
      "When working with athletes of all ages and levels, we effectively apply our knowledge of evidence-based Physical Therapy with manual techniques to rehab sports injuries.",
    cardText:
      "Surfers, runners, golfers, lifters and weekend warriors. Sport-specific rehab, return-to-play progressions and performance training to keep you in the game.",
    hero: { src: `${U}/2023/03/Depositphotos_189860708_XL-scaled.jpg`, alt: "Athlete working with a physical therapist on return to sport", w: 1600, h: 2400 },
    taglines: ["Peak Performance Starts Here", "Move Better", "Play Harder", "Your Recovery. Your Goals. Our Expertise", "Carlsbad Trusted Physical Therapy"],
    sections: [
      {
        heading: "Understanding Sports Rehabilitation",
        image: images.trx,
        blocks: [
          { p: "Sports Rehabilitation is a form of physical therapy that is specifically designed to help athletes recover from injuries and improve their performance. At Atala, it involves a combination of manual therapy, targeted exercises, and other techniques to help athletes regain strength, flexibility, and range of motion in the affected area. The goal of sports rehabilitation is to help athletes return to their sport as quickly and safely as possible, while also reducing the risk of re-injury. Additionally, sports rehabilitation can also help prevent injuries by identifying and addressing muscle imbalances, poor posture and other issues that can lead to injury. It is important to note that sports rehabilitation is not just for professional athletes, but it can also be very beneficial for recreational athletes, fitness enthusiasts and anyone who wants to improve their physical performance." },
          { p: "When working with athletes of all ages and levels, we effectively apply our knowledge of evidence-based physical therapy, total body and manual techniques to rehab your sports injury; and in the rehab process, we also strive to prevent the occurrence of future injuries. We do not practice cookie cutter PT. We also incorporate sport-specific movements into your therapeutic exercise to best prepare the neuromuscular system for return to sport. Our advantage in sports rehab lies in our experience. At Atala, we have treated athletes from all sports, at all levels, as well as weekend warriors, and age group athletes. We want to help you reach your highest peak of performance!" },
        ],
      },
      {
        heading: "We Understand Your Needs",
        blocks: [
          { p: "Sports rehabilitation is often used for injury recovery and prevention, to improve performance, and to help individuals return to their sport or activity. Some other reasons people may do sports rehabilitation include:" },
          { list: ["Improving flexibility and range of motion", "Building strength and endurance", "Improving balance and coordination", "Addressing muscle imbalances", "Correcting poor posture or movement patterns", "Enhancing overall fitness and health", "Reducing risk of future injuries"] },
          { p: "It's important for individuals to work with a qualified physical therapist – that's all we have at Atala! We design you a personalized program to address your specific needs and goals. Additionally, we creatively encourage consistent adherence to your rehabilitation program, appropriate follow-up appointments, and honest communication with your therapist for your most successful recovery." },
        ],
      },
      {
        heading: "Performance Training & Injury Prevention",
        image: images.gymCoaching,
        blocks: [
          { p: "In addition to rehabbing an injury, the physical therapists at Atala can help you return to your previous level of athletic performance or even achieve a competitive edge with performance training. We have considerable experience working with high school, college, and professional athletes in helping them achieve their competitive ambitions. We also have extensive experience working with weekend warriors in all age groups. For those seeking to increase their power and speed or reduce their risk of injury, this program is designed to help you achieve your goals." },
          { p: "After surgery, we'll work with you to help decrease your swelling, regain your strength, flexibility, and range of motion. We'll use a combination of manual therapy techniques, therapeutic exercises, and modality treatments such as ultrasound and electrical stimulation to assist in your healing process." },
          { p: "At Atala Physical Therapy, we're dedicated to getting you back to doing what you love. So, whether you're an athlete looking to enhance peak performance or an individual seeking to better your daily routine, Atala will help you achieve your goals!" },
        ],
      },
    ],
    why: {
      heading: "Why Choose Atala?",
      image: { src: `${U}/2023/01/massage-therapy-for-back.jpg`, alt: "Hands-on manual therapy for an athlete's back", w: 2000, h: 1333 },
      blocks: [
        { p: "Manual hands-on care with a complete wellness approach." },
        {
          defs: [
            { term: "We're Surgery Gurus", text: "Our team of experienced therapists has extensive knowledge and experience in pre and post-surgical rehabilitation, ensuring that you receive the best possible care." },
            { term: "Prehab, Not Just Rehab", text: "We believe in the power of prehabilitation before surgery. By preparing your body before the procedure, we can maximize your outcomes and help you recover faster." },
            { term: "Recovery Roadmap", text: "We create a personalized treatment plan for each patient, taking into account your individual goals and lifestyle." },
            { term: "Modality Marvels", text: "We take the time to use appropriate modalities such as ultrasound and electrical stimulation, proven to assist in healing and reduce your pain." },
            { term: "Comfy and Convenient", text: "Our boutique clinic with private rooms and a semi-private gym." },
            { term: "Positive Vibes Only", text: "Our therapists provide a positive and motivating environment, where patients can feel comfortable and confident during their recovery journey." },
          ],
        },
        { p: "At Atala Physical Therapy, we are dedicated to helping our patients achieve the best possible outcomes and get back to doing the things they love. With our expert care, you'll be ready to tackle anything that comes your way." },
      ],
    },
  },
  {
    slug: "back-neck-rehabilitation",
    path: "/back-neck-rehabilitation/",
    name: "Back & Neck Rehabilitation",
    shortName: "Back & Neck",
    h1: "Comprehensive Back & Neck Rehabilitation in Carlsbad, CA | Atala PT",
    summary:
      "Our skilled therapists use a combination of manual therapy techniques and targeted exercises to help you recover from disk herniations, sciatica, and arthritic pain.",
    cardText:
      "Disc herniations, sciatica, stenosis, arthritic pain, strains and sprains. Manual therapy plus the exercises and posture habits that keep the pain from coming back.",
    hero: { src: `${U}/2023/03/massage-of-neck-and-shoulders.jpg`, alt: "Manual therapy for neck and shoulder pain", w: 2000, h: 1333 },
    taglines: ["Personalized Recovery Plans", "Advanced Orthopedic Care", "Life Without Pain", "Carlsbad Trusted Physical Therapy", "Results Through Experience"],
    sections: [
      {
        heading: "Understanding Back & Neck Rehabilitation",
        image: images.spineTeachWide,
        blocks: [
          { p: "When it comes to back and neck pain, it can feel like a real pain in the… well, you know. But don't worry because Atala Physical Therapy is here to help you get back on track! Our team of experts are dedicated to helping you understand your injury and the pain you're experiencing so that we can develop a personalized treatment plan that's right for you. But don't just take our word for it – here are a few things you should know about back and neck rehabilitation with Atala Physical Therapy:" },
          { p: "We know that every injury is unique, and that's why we take the time to get to know you and your specific needs. We'll work with you to determine what's causing your pain and create a treatment plan that targets the root of the problem." },
          { p: "Whether you're dealing with a chronic condition or a recent injury, our physical therapists will use various techniques to help you feel better. We'll work with you on exercises to strengthen your muscles, stretching to increase your flexibility, and hands-on therapy to alleviate pain." },
          { p: "Rehabilitation is not just about getting rid of the pain but also preventing future injuries. That's why we'll teach you how to move correctly so that you can avoid reinjuring yourself in the future." },
          { p: "At Atala Physical Therapy, we're not just about physical therapy but also about fun and excitement! We believe that the best way to recover from an injury is to stay engaged and motivated, which is why we make sure our patients have a great time during their therapy sessions." },
          { p: "We are located in Carlsbad, CA, and getting here is effortless. The surrounding cities are also very close by, making it very convenient for you to come to our location." },
        ],
      },
      {
        heading: "We Understand Your Needs",
        blocks: [
          { p: "At Atala Physical Therapy, our experienced therapists specialize in the treatment of back and neck conditions and have a deep understanding of the musculoskeletal system." },
          { list: [
            "We use a combination of manual therapy techniques and therapeutic exercises to target the specific needs of each patient.",
            "Our goal is to not only alleviate pain but to also improve function and prevent future injury.",
            "We will work with you to create an individualized treatment plan that takes into consideration your specific goals, medical history, and current condition.",
            "Our therapists will also provide education on proper posture, body mechanics, and self-care techniques to help you manage your condition and prevent future injury.",
            "We may also incorporate modalities such as ultrasound, and electrical stimulation to aid healing.",
          ] },
          { p: "It's important to understand that physical therapy for back and neck conditions may take time and commitment. But, with our guidance and support, you can achieve lasting pain relief and improved function." },
        ],
      },
      {
        heading: "How Atala Does Physical Therapy for Back and Neck Conditions",
        image: { src: `${U}/2023/01/excited-man-cleaning-house.jpg`, alt: "Man happily vacuuming at home, pain-free", w: 2000, h: 1305 },
        blocks: [
          { quote: "We even make vacuuming exciting!" },
          { p: "At Atala Physical Therapy, we understand that dealing with back and neck pain can be a real pain in the…well, you know. But don't worry, we've got your back (and neck)! Our expert team of physical therapists are here to help you get back to your normal routine in no time." },
          { p: "One of the great things about our approach to back and neck rehabilitation is that we customize our treatment plans to fit each individual patient. So whether you're dealing with a herniated disc or chronic neck pain, we'll work with you to create a plan that's tailored to your specific needs." },
          { p: "But it's not all about the serious stuff – we like to have a little bit of fun too! Our state-of-the-art facility is equipped with the latest technology and equipment, so you can be sure you're getting the best possible care. Plus, our therapists are known for their friendly and upbeat attitudes, so you can rest assured that your therapy sessions will be a pleasant and enjoyable experience." },
          { p: "But what really sets us apart is our commitment to educating our patients about their conditions and empowering them to take an active role in their own recovery. We'll teach you exercises and stretches that you can do at home to speed up your recovery, and provide you with all the information you need to stay informed and in control." },
        ],
      },
    ],
    why: {
      heading: "Why choose Atala?",
      image: { src: `${U}/2023/01/back-view-of-beautiful-woman-with-electrodes-on-neck-during-electrotherapy-in-clinic.jpg`, alt: "Electrical stimulation therapy for neck pain", w: 2000, h: 1335 },
      blocks: [
        { quote: "Why is Atala Physical Therapy like a chiropractor but better? Because it's not just a crack, it's a whole new way of life!" },
        { p: "Our team of highly trained and experienced therapists will have you feeling like a whole new person in no time. We'll work with you to create a personalized treatment plan that's tailored to your specific needs, whether you're recovering from a sports injury or dealing with chronic pain." },
        { p: "One of the things that sets us apart is our state-of-the-art equipment. We've got everything from top-of-the-line machines to the latest in cutting-edge technology, which means you'll be able to recover faster and more effectively." },
        { p: "We'll also make sure to keep things fun and engaging during your sessions. Sure, we'll work hard to help you heal, but we'll also make sure you're laughing and having a good time. After all, we want you to look forward to your therapy sessions, not dread them." },
        { p: "We believe that the secret to success is a combination of advanced techniques, state-of-the-art equipment, and a dash of humor. So when you're ready to say goodbye to back and neck pain, give us a call and let's get started on making you feel like your old self again!" },
      ],
    },
  },
  {
    slug: "industrial-medicine-workers-compensation",
    path: "/industrial-medicine-workers-compensation/",
    name: "Industrial Medicine & Workers' Compensation Rehabilitation",
    shortName: "Workers' Comp",
    h1: "Industrial Medicine & Workers' Compensation Rehabilitation | Atala PT",
    summary:
      "Whether you're dealing with a repetitive use injury, like carpal tunnel syndrome, or a neck or shoulder injury, we've got your back – we'll even treat your back!",
    cardText:
      "Repetitive-use injuries, carpal tunnel, neck, shoulder and back injuries on the job. We coordinate with your employer and insurer and focus on a safe return to work.",
    hero: { src: `${U}/2023/01/work-injury-claim-application-form-information-concept.jpg`, alt: "Workers' compensation claim paperwork", w: 2000, h: 1335 },
    taglines: ["Back to Work, Safely", "Advanced Orthopedic Care", "Life Without Pain", "Carlsbad Trusted Physical Therapy", "Results Through Experience"],
    sections: [
      {
        heading: "Understanding Industrial Medicine / Workers' Compensation",
        image: images.frontDesk,
        blocks: [
          { p: "When it comes to industrial medicine and workers compensation, there are a few key things to keep in mind. First and foremost, it's important to understand that these types of injuries and conditions are often caused by the repetitive motions and stress of a specific job or occupation. This means that they require specialized treatment and rehabilitation in order to fully heal and prevent recurrence." },
          { p: "Another important thing to know is that the recovery process for industrial medicine and workers compensation injuries may be more complex and time-consuming than for other types of injuries. This is because it's not just about treating the physical injury, but also about addressing any underlying issues that may have contributed to the injury in the first place." },
          { p: "At Atala Physical Therapy, we understand the unique needs of industrial medicine and workers compensation patients. Our team of expert therapists will work closely with you to develop a personalized treatment plan that addresses your specific needs and helps you recover quickly. Whether you're dealing with a repetitive use injury, carpal tunnel syndrome, or a shoulder injury, we've got your back and will work closely with you to help you get back to work and back to your normal routine." },
        ],
      },
      {
        heading: "We Understand Your Needs",
        blocks: [
          { p: "At Atala Physical Therapy, we understand the unique needs and concerns of workers who have been injured on the job. Our team of expert therapists are trained and experienced in providing physical therapy treatment for work-related injuries and conditions. Here are a few things that we do to help our patients recover and return to work as quickly as possible:" },
          { list: [
            "We work closely with the patient's employer and insurance company to ensure that the treatment plan is tailored to the patient's specific job duties and requirements.",
            "We provide comprehensive evaluations and assessments to determine the cause and extent of the injury, and to identify any risk factors that may contribute to future injuries.",
            "We develop and implement individualized treatment plans that focus on reducing pain, improving function, and preventing re-injury.",
            "We use a variety of evidence-based treatment techniques, including manual therapy, exercises, modalities, and education to help the patient achieve their goals.",
            "We provide education and training on ergonomics, injury prevention, and self-care to help the patient return to work safely and prevent future injuries.",
          ] },
          { p: "At Atala Physical therapy, we also make sure that the therapy process is as fun and enjoyable as possible. We do this by incorporating fun exercises, giving light jokes during sessions, and providing a comfortable atmosphere for the patients." },
          { quote: "Why did the delivery driver go to physical therapy? His back was always in a \"truck.\"" },
        ],
      },
      {
        heading: "How Atala Does Physical Therapy for Industrial Medicine / Workers' Compensation",
        image: { src: `${U}/2023/01/AdobeStock_64426273-scaled.jpeg`, alt: "Office workers dressed as superheroes", w: 2400, h: 1668 },
        blocks: [
          { p: "Our team of expert therapists are like the superheroes of industrial medicine, ready to save the day with their superpowers of manual therapy, exercise, and education. We'll work with you to develop a personalized treatment plan that addresses your specific needs, and helps you recover quickly." },
          { p: "And let's face it, getting injured on the job can be a real drag. But at Atala, we like to make the best of a bad situation. That's why we offer a \"Willy Wonka's Chocolate Factory\" of modalities, including ultrasound, and electrical stimulation. We want to make sure your therapy experience is as sweet as possible!" },
          { p: "So if you're dealing with a repetitive use injury, carpal tunnel syndrome, or a shoulder injury, don't let it hold you back. Come see us at Atala Physical Therapy, where we'll have you back to work in no time. And who knows, you might even leave with a few new jokes to tell your coworkers about your \"work injury\"!" },
        ],
      },
    ],
    why: {
      heading: "Why choose Atala?",
      image: { src: `${U}/2023/01/excited-colleagues-enjoying-funny-competition-in-office.jpg`, alt: "Coworkers back at work and having fun", w: 2000, h: 1333 },
      blocks: [
        { quote: "Why is Atala Physical Therapy like a chiropractor but better? Because it's not just a crack, it's a whole new way of life!" },
        { p: "Our team of highly trained and experienced therapists will have you feeling like a whole new person in no time. We'll work with you to create a personalized treatment plan that's tailored to your specific needs, whether you're recovering from a sports injury or dealing with chronic pain." },
        { p: "One of the things that sets us apart is our state-of-the-art equipment. We've got everything from top-of-the-line machines to the latest in cutting-edge technology, which means you'll be able to recover faster and more effectively." },
        { p: "We'll also make sure to keep things fun and engaging during your sessions. Sure, we'll work hard to help you heal, but we'll also make sure you're laughing and having a good time. After all, we want you to look forward to your therapy sessions, not dread them." },
      ],
    },
  },
];

export const getService = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service ${slug}`);
  return s;
};

/** Services-page overview copy (from /services/) — richer, Carlsbad-specific summaries. */
export const servicesOverview: { slug: string; title: string; paragraphs: string[]; image: Img }[] = [
  {
    slug: "orthopedic-physical-therapy",
    title: "Orthopedic Physical Therapy",
    image: { src: `${U}/2022/12/5M3A8005-scaled.jpg`, alt: "Therapist explaining a spine model to a patient", w: 2400, h: 1714 },
    paragraphs: [
      "Most orthopedic injuries we see in Carlsbad stem from repetitive movement patterns – whether it's from surfing at Tamarack, golfing at Aviara, or training for the Carlsbad 5000. These continued stress patterns on tissues over time can lead to chronic conditions.",
      "Single-incident injuries range from sprains and strains to fractures and dislocations. These acute events can occur during beach volleyball matches, trail runs at Lake Calavera, work-related activities, or daily life in our active coastal community.",
      "At Atala, we take a comprehensive approach to your recovery. We work to reduce pain and swelling using proven methods like manual therapy, ice, and compression therapy. But symptom relief is just the beginning. Our thorough treatment process includes restoring joint mobility through manual mobilizations and targeted therapeutic exercises. We focus on rebuilding strength and stability through proper posture, ergonomics, and customized exercise programs. Using current treatment modalities – including ultrasound, electric stimulation, ice, and heat – we promote optimal healing. When beneficial, we incorporate functional taping and kinesiotape to support your recovery journey.",
    ],
  },
  {
    slug: "non-surgical-injury-rehabilitation",
    title: "Non-Surgical Injury Rehabilitation",
    image: { src: `${U}/2023/02/athlete-runner-knee-injury-run.jpg`, alt: "Runner holding a sore knee", w: 2000, h: 1334 },
    paragraphs: [
      "From tennis elbow developed at Poinsettia Community Park to lower back pain from long beach walks, many injuries can be successfully treated without surgery. Common conditions we treat include tendonitis, plantar fasciitis, shoulder impingement, lower back pain, hip impingement, hip bursitis, patellofemoral pain syndrome, and cervical radiculopathy – helping you return to your active Carlsbad lifestyle without surgical intervention.",
      "Your journey at Atala begins with a comprehensive evaluation, where we develop a complete working diagnosis and identify the underlying biomechanical factors affecting your movement. Your personalized treatment plan incorporates proven strategies to correct biomechanical issues, improve posture, and enhance ergonomics – addressing both your immediate pain and long-term function. Whether you're a surfer at Tamarack or a golf enthusiast at Aviara, Atala's whole-body awareness approach ensures we treat not just the symptoms, but the entire kinetic chain for lasting results.",
    ],
  },
  {
    slug: "pre-and-post-surgical-rehabilitation",
    title: "Pre and Post-Surgical Rehabilitation",
    image: { src: `${U}/2023/01/senior-stretching-exercise-training-rehabilitation-physiotherapy-treatment-sport.jpg`, alt: "Older adult doing guided rehabilitation exercise", w: 2000, h: 1714 },
    paragraphs: [
      "From weekend warriors at South Ponto Beach to golfers at La Costa Resort, we treat all orthopedic surgeries in our Carlsbad community. Our expertise covers total joint replacements, hip and shoulder labrum repairs, knee ligament reconstructions, rotator cuff repairs, meniscus repairs, AC joint reconstructions, elbow reconstructions, and foot and ankle reconstructions – ensuring you can return to enjoying our active coastal lifestyle.",
      "Working hand-in-hand with your surgeon, we create personalized rehabilitation plans for optimal outcomes and complete functional recovery. Your journey often begins before surgery with pre-habilitation, maximizing your range of motion and strength for better surgical outcomes. We believe in comprehensive patient education, ensuring you fully understand your condition and recovery path. Whether you're planning to return to surfing at Tamarack or hiking Lake Calavera trails, our team at Atala is committed to getting you back to the activities you love.",
    ],
  },
  {
    slug: "sports-rehabilitation",
    title: "Sports Rehabilitation",
    image: { src: `${U}/2022/12/adult-athlete-stretching-the-muscles-of-his-legs-quadriceps-and-calves-to-avoid-serious-injury-.jpg`, alt: "Athlete stretching quadriceps and calves", w: 2000, h: 1333 },
    paragraphs: [
      "When working with athletes of all ages and levels, we effectively apply our knowledge of evidence-based Physical Therapy with manual techniques to rehab sports injuries; and in the rehab process, we strive to prevent the occurrence of future injuries. We do not practice cookie-cutter PT! We incorporate sport-specific movements into your therapeutic exercise to best prepare your neuromuscular system for a healthier return to sport. Our advantage in sports rehab lies in our experience. At Atala, we have treated athletes from all sports, at all levels, as well as weekend warriors from adolescents to seniors.",
    ],
  },
  {
    slug: "sports-rehabilitation",
    title: "Performance Training & Injury Prevention",
    image: { src: `${U}/2023/01/muscular-sportsman-exercising-on-trx-straps-in-gym.jpg`, alt: "Athlete training on suspension straps", w: 2000, h: 1333 },
    paragraphs: [
      "In addition to rehabbing an injury, the physical therapists at Atala can help you return to your previous level of athletic performance or even achieve a competitive edge with performance training. We have considerable experience working with high school, college, and professional athletes in helping them achieve their competitive ambitions. We also have extensive experience working with weekend warriors in all age groups. For those seeking to increase their power and speed or reduce their risk of injury, this program is designed to help you achieve your goals.",
    ],
  },
];

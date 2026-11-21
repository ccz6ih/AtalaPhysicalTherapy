/**
 * Reviews shown on the WordPress site.
 * - googleReviews: the Google reviews that the Trustindex widget displayed (5 stars each).
 * - patientLetters: thank-you notes from the /reviews/ page.
 * - wallOfFame: the illustrated patient cards from the homepage slider.
 *
 * To add a new Google review, paste it into googleReviews — the review count,
 * schema and carousels all update automatically.
 */

export type Review = { author: string; text: string; rating: 5 | 4 | 3 | 2 | 1; source: "Google" };

/** Trustindex reported "Excellent — based on 16 reviews" on Google. Update when the profile grows. */
export const googleSummary = { count: 16, rating: 5.0 };

export const googleReviews: Review[] = [
  { author: "Leighanne S.", rating: 5, source: "Google", text: "Teri knew exactly what was causing my discomfort and started immediately to get me comfortable by explaining what she was going to do. What a relief to work with a knowledgeable, informative, and very kind person and staff! Laurel, Julie, and Jason are awesome… and BoBo the best." },
  { author: "Judith Goldfinch", rating: 5, source: "Google", text: "From the moment I first walked into Atala PT I felt confident that my body was in for a treat. Everybody embraces you as a valuable client/patient. Terri, the owner, calls her business a boutique PT and so it is! Check it out, you’ll be glad you did!!" },
  { author: "Allison Miller", rating: 5, source: "Google", text: "I have had such a great experience at Atala Physical Therapy! After suffering with right hip pain when I was sleeping on my right side for a year I finally decided to seek help and was SO fortunate to find Terri! She was so good at looking at the big picture and me as a whole and what could be contributing to my problem. She made recommendations I was able to implement right away that made a positive difference. She is always timely, never rushed, also personable, professional and truly caring! Jason was wonderful with assisting me with exercises and the entire office has a very good vibe! If you are having chronic pain or orthopedic problems I would definitely go and see Terri! I can’t thank their team enough!" },
  { author: "Brian Flannery", rating: 5, source: "Google", text: "As the result of an automobile accident I ended up with a wrenched left shoulder, back and neck. Terri was among the approved therapists under my health care system. Her warm, enthusiastic, positive approach and professional treatment over six sessions provided the relief I sorely needed. She and her welcoming staff have my highest recommendation." },
  { author: "Justin Hai", rating: 5, source: "Google", text: "A caring and thoughtful clinic, where the owner and team have excellent diagnosis skills and treatments. This is a quiet clinic, with private treatment rooms and they are maniacal about cleaning, even before COVID.... I highly recommend all the therapists and exercise specialists at Atala..." },
  { author: "Robin Sachs", rating: 5, source: "Google", text: "I have needed physical therapy several times over the past few years. Atala Physical Therapy is by far the best. They have excellent customer service and they are the very best at working with me to go over what I need to do to get back into a pain-free life. I highly recommend Terri, Illsong, and everyone there." },
  { author: "Ellen Owen", rating: 5, source: "Google", text: "ATALA physical therapy know what they’re doing. Terri, Jason and Laurel are awesome and helped me with my injury and after 2 treatments I felt better. I look forward to more visits and getting back to walking again. ATALA is awesome!!!" },
  { author: "Laurel Stanford", rating: 5, source: "Google", text: "Very impressed with this PT. Very experienced and caring staff who are genuinely interested in good outcomes. Staying COVID safe too with proper protocols so I always feel safe." },
  { author: "Nancy Williams", rating: 5, source: "Google", text: "Absolutely the best physical therapy ever! Terri, Jason and staff are great." },
];

export const patientLetters: { author: string; text: string }[] = [
  { author: "A grateful patient, DW", text: "Dear Terri, Julie, Laurel and Jason, I’ve enjoyed working with each of you and especially your leader, Terri. I’ve met many therapists in my profession as a healer and health consultant to many patients. My work has taken me to most of the major rehab centers in the US and I never met anyone equal to your clinic, Terri. Thank you all for your work." },
  { author: "KR", text: "Jason and Melissa were super effective in driving a recovery plan to get me well quick from a shoulder injury. They drove confidence they understood my injury and the work required to get well. On top of that they were very personable and professional. I went to PT for a back injury a few years prior, and Atala’s level of care was far superior. I hope to never see them again ;)" },
  { author: "DS", text: "Terri and the crew have been fantastic. They are very caring and knowledgeable as well as a lot of fun, which if you’ve ever been to physical therapy then you know they’re pretty damned boring. They run a very clean operation and were hyper cleaning the facility months before the Covid outbreak. I highly recommend Atala PT, and no I’m not a paid spokesperson." },
  { author: "Stephanie and Jr", text: "To the Atala Team, my Shoulder and Knee Thank you! I’m back to normal thanks to your expertise. We are grateful for all you have done for us." },
  { author: "ME", text: "Thank you Atala PT! Each of you has helped this body of mine to keep moving in the right direction." },
  { author: "Kathy Anderson", text: "Thanks for helping the move toward the “straight and narrow.”" },
];

const S = "/wp-content/uploads/summit";
/** Photos cropped from the illustrated patient cards (originals stay at /wp-content/uploads/2022/12/*-Final-*). */
export const wallOfFame: { src: string; name: string; quote: string; card: string }[] = [
  { src: `${S}/jenn.jpg`, card: "/wp-content/uploads/2022/12/Jenn-Final-01-01.png", name: "Jenn", quote: "After spinal fusion surgery and years of pain, I never dreamed I would ever complete a mud run. Thank you Terri for all that you have done!" },
  { src: `${S}/lee.jpg`, card: "/wp-content/uploads/2022/12/Lee-Final-01.png", name: "Lee", quote: "Thank you Atala for help keeping me running into my 70's even with my Parkinson's diagnosis." },
  { src: `${S}/jake.jpg`, card: "/wp-content/uploads/2022/12/Jake-Final-01.png", name: "Jake", quote: "Thanks for fixing me up and enabling me to surf again – totally awesome!" },
  { src: `${S}/stephanie.jpg`, card: "/wp-content/uploads/2022/12/Stephanie-Final-01.png", name: "Stephanie", quote: "Thank you for putting color back in my life!" },
  { src: `${S}/cole.jpg`, card: "/wp-content/uploads/2022/12/Cole-Final-01.png", name: "Cole", quote: "Thanks Atala for keeping my Ironman dreams alive. I couldn't have done it without you." },
  { src: `${S}/larry.jpg`, card: "/wp-content/uploads/2022/12/Larry-Final-01.png", name: "Larry", quote: "You all turned a challenging difficult experience into a positive team effort recovery program. Thank you so much for getting me back on the dirt trail!" },
  { src: `${S}/jim.jpg`, card: "/wp-content/uploads/2022/12/Jim-Final-01.png", name: "Jim", quote: "Thank you, Atala for getting me back on my feet and back on my Harley. You guys are the best!" },
  { src: `${S}/diego.jpg`, card: "/wp-content/uploads/2022/12/Diego-Final-01.png", name: "Diego", quote: "Thanks to Atala – I was able to walk across the graduation stage pain free!" },
  { src: `${S}/justin.jpg`, card: "/wp-content/uploads/2022/12/Justin-Final-01.png", name: "Justin", quote: "Thank you for getting me back into the fight!" },
  { src: `${S}/ron.jpg`, card: "/wp-content/uploads/2022/12/Ron-Final-01.png", name: "Ron", quote: "Repaired and back in the air! And in the water, on the bike and on the course. Atala's the best rehab for all my addictions." },
  { src: `${S}/emily.jpg`, card: "/wp-content/uploads/2022/12/Emily-Final-01.png", name: "Emily", quote: "Thank you for keeping me on my edges!" },
  { src: `${S}/leanne.jpg`, card: "/wp-content/uploads/2022/12/LeAnne-Final-01.png", name: "LeAnne", quote: "Thank you Terri and team for helping me reach this highest peak!" },
  { src: `${S}/gigi.jpg`, card: "/wp-content/uploads/2022/12/Gigi-Final-01.png", name: "Gigi", quote: "Thank you Atala for helping me conquer my fear of heights." },
  { src: `${S}/sabine.jpg`, card: "/wp-content/uploads/2022/12/Sabine-Final-01.png", name: "Sabine", quote: "Thank you Atala... She deserved it... Don't mess with my PT!" },
  { src: `${S}/mark.jpg`, card: "/wp-content/uploads/2022/12/Mark-Final-01.png", name: "Mark", quote: "All in, all the time – Oorah." },
  { src: `${S}/bruce.jpg`, card: "/wp-content/uploads/2022/12/Bruce-Final-scaled.jpg", name: "Bruce", quote: "Thanks for fixing me up! I used to be afraid of snakes..." },
  { src: `${S}/unnamed.jpg`, card: "/wp-content/uploads/2022/12/Unnamed-Final-01.png", name: "A professional skateboarder", quote: "Terri's going to kill me!!" },
];

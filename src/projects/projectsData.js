import studyscape from '../images/studyscape.png';
import bitewise from '../images/bitewise.png';
import spellbuddy from '../images/spellbuddy.png';
import image from '../images/iPhone 12 Pro.png'
import image1 from '../images/iPhone 12 Pro-1.png';
import image2 from '../images/iPhone 12 Pro-2.png';
import image3 from '../images/iPhone 12 Pro-3.png';
import image4 from '../images/iPhone 12 Pro-4.png';
import image5 from '../images/iPhone 12 Pro-5.png';
import image6 from '../images/iPhone 12 Pro-6.png';
import image7 from '../images/iPhone 12 Pro-7.png';
import image8 from '../images/iPhone 12 Pro-8.png';
import image9 from '../images/iPhone 12 Pro-9.png';
import image10 from '../images/iPhone 12 Pro-10.png';
import image11 from '../images/iPhone 12 Pro-11.png';
import image12 from '../images/iPhone 12 Pro-12.png';
import image13 from '../images/iPhone 12 Pro-13.png';
import bwlofipic from '../images/Low-fidelity Prototype.png';
import bwstyleguide from '../images/Style Guideline (4).png';
import userpersonapic from '../images/userpersona.png';
import empathymap from '../images/empathymap.png';
import affinitydiagram from '../images/affinitydiagram.png';
import studyscapeui from '../images/studyscapeuikit.png';
import sblofipic from '../images/sblofiwireframe.png';
import sbuikit from '../images/sbuikit.png';
import sbscreens from '../images/sbhifiwireframes.png';
import sbempathymap from '../images/sbempathymap.png';
import sbinfoarch1 from '../images/sbinfoarch1.png';
import sbinfoarch2 from '../images/sbinfoarch2.png';
import sbuserpersona from '../images/sbuserpersona.png';
import sbumldiagram from '../images/sbumldiagram.png';
import sbuserflow from '../images/sbuserflow.png';
import studyuserpersona from '../images/study-userpersona.jpg';
import studyjourneymap from '../images/study-journeymap.jpg';
import studyuserflow from '../images/studyuserflow.jpg';
import lofipic from '../images/lofistudy.jpg';
import hifipic from '../images/hifistudy.jpg';

const projects = {
  0: { 
    image: bitewise,
    title: "Bitewise",
    subtitle: "UI/UX Design & Design Thinking", 
    description: "Bitewise is a one spot application that helps individuals with dietary restrictions build a community, find restaurants, products and friends. An all-in-one mobile application that helps build a community for those with dietary restrictions and helps them find restaurants, products and friends!",
    role: "UI/UX Designer, Researcher",
    background: "Designed a user-centric app prototype focusing on dietary restrictions to assist with restaurant navigation, products and friends. Utilized Figma and Balsamiq for UI/UX design, creating responsive and visually appealing interfaces. Conducted extensive user research, including surveys and interviews, to inform design decisions. Integrated primary and secondary research insights to address user pain points and enhance overall functionality. The project emphasized accessibility, user engagement, and ease of use.",
    goals: [
      { text: <ul><li>To create an application that helps build a community</li></ul>},
      { text: <ul><li>Find safe restaurants and products</li></ul>},
      { text: <ul><li>Share experiences and find individuals with similar struggles</li></ul>}
    ],
    problem: "Individuals with dietary restrictions face significant challenges in identifying safe dining options, accessing suitable recipes, and communicating their needs effectively, leading to social isolation and compromised well-being.",
    userProblems: [
    { text: <ul><li>Users struggle to find restaurants that can accommodate their specific dietary needs, leading to limited dining out experiences and potential health risks.</li></ul>},
    { text: <ul><li>Finding recipes that cater to various dietary restrictions while still being appealing and nutritious is a challenge for many users.</li></ul>},
    { text: <ul><li>Users find it difficult to identify and purchase food products that align with their dietary restrictions, often resulting in longer shopping trips and uncertainty about product safety.</li></ul>},
    { text: <ul><li>The complexities of managing dietary restrictions can deter individuals from participating in social events involving food, impacting personal relationships and quality of life.</li></ul>},
    { text: <ul><li>Current apps and services often fail to provide the personalized experience needed to cater to the wide range of dietary restrictions, preferences, and lifestyles.</li></ul>},
    ],
    solution: "Based on the all the information collected through research and findings, I figured that an application will require following functionality to mitigate the struggles of finding products and restaurants with a dietary restriction.",
    ourSolutions: [
      { text: <ul><li>Users can select their dietary restrictions and preferences to customize their content feed, improving the relevancy of meal ideas and recipes.</li></ul>},
      { text: <ul><li>Enable creators to post meal ideas with specified ingredients, dietary alternatives, and restrictions, enriching the variety and quality of content.</li></ul>},
      { text: <ul><li>A Pinterest-style feed showcasing meals, recipes, and dining options tailored to the user's dietary needs and preferences.</li></ul>},
      { text: <ul><li>Barcode Scanner to scan ingredients in groceries or menu items, providing instant information on potential allergens or dietary restrictions.</li></ul>},
      { text: <ul><li>A feature to find nearby restaurants with filters for dietary needs (vegan, gluten-free, halal, etc.), open status, ratings, prices, and specific cuisines, similar to Uber Eats.</li></ul>},
      { text: <ul><li> Like Instagram, users can upload images of meals, tag ingredients, dietary restrictions, locations, and other creators or establishments, enhancing content sharing and discovery.</li></ul>},
    ],
    researchGoals: "Below are the areas I’d like to explore during the user research. I want to understand...",
    methodologies: "Secondary research on top products related to plant maintenance to determine the gap in the market...",
    userInterviews: [
       { text: <ul><li>Diverse Dietary Restrictions: Participants have various dietary restrictions, including religious (Halal), lactose intolerance, and veganism. This diversity underscores the need for a flexible and inclusive approach in the digital solution.</li></ul>},
       { text: <ul><li>Eating Habits and Preferences: Daily meals and preferences vary significantly, reflecting personal tastes, cultural backgrounds, and dietary restrictions. The solution must offer personalized options.</li></ul>},
       { text: <ul><li>Challenges with Dining Out: Finding restaurants that cater to specific dietary needs is a common challenge, often requiring extensive questioning about menu options and ingredients, leading to discomfort.</li></ul>},
       { text: <ul><li>Cooking and Meal Prep: Cooking at home is preferred due to control over ingredients, though it comes with its own set of challenges, including meal planning and finding suitable recipes.</li></ul>},
       { text: <ul><li>Grocery Shopping: Identifying products that meet dietary needs can be tedious. There's a desire for an easier way to find and select suitable groceries.</li></ul>},
       { text: <ul><li>Social and Emotional Impact: Dietary restrictions impact social interactions and emotional well-being, with experiences of isolation, inconvenience, and even bullying.</li></ul>},
       { text: <ul><li>Digital Tools and Wish List: There's a gap in the market for comprehensive apps that cater to various dietary restrictions. Desired features include restaurant finders, recipe suggestions, ingredient substitutes, and social platforms.</li></ul>},
    ],
    research: [
      { text: <ul><li> Food allergies, involving the immune system, are currently incurable, necessitating complete avoidance of allergens to prevent life-threatening reactions.</li></ul>},
      { text: <ul><li>Anaphylaxis: A severe, rapid onset allergic reaction that can be fatal, highlighting the importance of carrying epinephrine auto-injectors.</li></ul>},
      { text: <ul><li>Allergic reactions can manifest in various ways (skin, respiratory, gastrointestinal, cardiovascular) and may occur minutes to hours post-exposure.</li></ul>},
      { text: <ul><li>Canada's Priority Allergens: Include peanuts, tree nuts, sesame, milk, eggs, fish, crustaceans, molluscs, soy, wheat, triticale, and mustard.</li></ul>},
      { text: <ul><li>Dietary restrictions stem from religious practices, health issues (e.g., allergies, celiac disease), and ethical considerations (e.g., veganism).</li></ul>},
      { text: <ul><li>Can also stem from health improvements, ethical beliefs, and religious or cultural practices drive adherence despite challenges.</li></ul>},
    ],
    competitiveResearch: "Since the space of dietary restriction and food allergy Food Scanners is already pretty satuared, I wanted to explore what apps were currently successful and where theres room for improvement.",
    competition: [
      { text: <ul><li>Fig - Food scanner</li></ul>},
      { text: <ul><li>Sift - Bad UI and just a food scanner</li></ul>},
      { text: <ul><li>Chef's Plate - Subscription and recipe delivery focused</li></ul>},
    ],
    userPersona: "Based on the data collected I created a persona representing a new plant parent who cares deeply...",
    userpersonapic: userpersonapic,
    empathymap: empathymap,
    affinitydiagram: affinitydiagram,
    lofiPic: bwlofipic,
    prototypeLink: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fja2L9fPbM38G95BWeY4Czp%2FBiteWise%3Fnode-id%3D24-24%26t%3DR97mnjkbCaetfxHU-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D24%253A24',
    usabilityTesting: "I conducted usability testing with potential users to identify any usability issues and improve the design. I collected the following feedback:",
    feedback: [
      { text: <ul><li>"The QR code thing is smart. It helps me know about allergies or food restrictions when I'm out, making it easier to eat safely.”</li></ul>},
      { text: <ul><li>“This would help with wayfinding recipes and also building a community with people that have similar restrictions and allergies. I would definitely use it to see what people are saying about restaurants that I’ve been wanting to try.”</li></ul>},
      { text: <ul><li>“As someone who doesn’t know many cuisines, I think I would get confused with what the meal is just based on the picture.”</li></ul>},
    ],
    conclusion: "Tackling this project expanded my insight into the unique challenges of managing food allergies, building upon my experience with finding Halal options and dietary alternatives. It highlighted the critical concerns of cross-contamination and the search for safe dietary substitutes, pushing me to develop empathetic, user-centric solutions.",
    styleguideline: bwstyleguide, 
    images: [image, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13],
    imageClass: 'small-image',
    figma:"https://www.figma.com/proto/ja2L9fPbM38G95BWeY4Czp/BiteWise?node-id=0%3A1"
  },
  1:{
  image: spellbuddy,
  title: "Spellbuddy",
  subtitle: "UI/UX Design & Development",
  description: "Spellbuddy is a standalone application designed to help users quickly find and correct spelling mistakes in their text documents and web files. The application is user-friendly, operates swiftly, and allows users to add their own words to avoid mistakes. Ideal for writers, it saves time and ensures writing is clear and accurate.",
  role: "UI/UX Designer and Software Developer",
  background: "Developed a robust spell-checking application prototype aimed at enhancing document quality for writers. Utilized Figma for UI/UX design and Java/Swing for development, creating an intuitive and efficient user experience. Conducted user research to understand the needs and preferences of writers and content creators.  ",
  goals: [
    { text: <ul><li>Enhance document quality by providing efficient spell-checking tools.</li></ul> },
    { text: <ul><li>Create an easy-to-use and responsive application for writers.</li></ul>},
    { text: <ul><li>Offer customization options for users to add and manage their own dictionary.</li></ul>}
  ],
  problem: "Many writers struggle with spelling errors, and existing tools can be inadequate for detailed, standalone spell-checking. There is a need for a specialized application that focuses solely on spelling accuracy and provides robust error correction options.",
  userProblems: [
    { text: <ul><li>Difficulty in identifying and correcting spelling mistakes efficiently.</li></ul>},
    { text: <ul><li>Lack of standalone spell-checking tools that are both powerful and user-friendly.</li></ul>},
    { text: <ul><li>Need for customizable dictionaries to handle specific terminologies and names.</li></ul>},
    { text: <ul><li>Inconvenience in managing large documents manually for spelling accuracy.</li></ul>}
  ],
  solution: "Developed an application prototype that addresses these challenges by providing efficient and customizable spell-checking tools, along with options for manual edits, ignoring specific suggestions, and auto-corrections based on user preferences.",
  ourSolutions: [
    { text: <ul><li>Standalone spell-checking application for text documents and web files.</li></ul>},
    { text: <ul><li>Customizable user dictionary for personalized vocabulary management.</li></ul>},
    { text: <ul><li>Fast and accurate spell-checking with manual correction options.</li></ul>},
    { text: <ul><li>User-friendly interface designed for ease of use and efficiency.</li></ul>},
    { text: <ul><li>Comprehensive error tracking and progress reporting features.</li></ul>}
  ],
  researchGoals: "To understand the needs and preferences of writers regarding spell-checking and to design a solution that enhances the writing experience by improving spelling accuracy and efficiency.",
  methodologies: "Conducted user research through surveys and interviews with writers to gather insights on their spelling habits and challenges. Analyzed the data to identify common pain points and opportunities for improvement.",
  userInterviews: [
    { text: <ul><li>Writers need efficient tools to identify and correct spelling mistakes.</li></ul>},
    { text: <ul><li>Common challenges include managing large documents and customizing spell-checking settings.</li></ul>},
    { text: <ul><li>Customizable dictionaries are highly valued for managing specific terminologies.</li></ul>},
    { text: <ul><li>A user-friendly interface is essential for maintaining workflow efficiency.</li></ul>}
  ],
  research: [
    { text: <ul><li>Standalone spell-checking tools enhance efficiency by focusing solely on spelling accuracy.</li></ul>},
    { text: <ul><li>Customizable dictionaries improve usability and relevance for different users.</li></ul>},
    { text: <ul><li>Fast and responsive applications are crucial for maintaining writing productivity.</li></ul>},
    { text: <ul><li>Detailed error tracking and reporting improve the overall writing process.</li></ul>}
  ],
  competitiveResearch: "Analyzed existing spell-checking tools to identify strengths and weaknesses, and to determine areas for improvement in Spellbuddy.",
  competition: [
    { text: <ul><li>Microsoft Word: Integrated spell checker but lacks standalone functionality.</li></ul>},
    { text: <ul><li>Grammarly: Comprehensive grammar and spell-checking tool but requires internet access and a subscription for full features.</li></ul>},
    { text: <ul><li>Apache OpenOffice: Free alternative with spell-checking capabilities but less user-friendly interface.</li></ul>}
  ],
  userPersona: "Created a persona representing a typical writer who requires efficient and accurate spell-checking tools to improve their document quality.",
  userpersonapic: sbuserpersona,
  empathymap: sbempathymap,
  useScenario: "Created a persona representing a typical writer who requires efficient and accurate spell-checking tools to improve their document quality.",
  lofiPic: sblofipic,
  styleguideline: sbuikit,
  umldiagram: sbumldiagram,
  infoarch: [sbinfoarch1, sbinfoarch2],
  hifiWireframes: sbscreens,
  userflow: sbuserflow,
  github: 'https://github.com/joudlahham/spellbuddy',
  prototypeLink: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9f0OJV6muuMAzTD8tgseKD%2FSpellBuddy%3Ft%3DfVuO9c8EEg0NiP9P-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26node-id%3D1-2%26starting-point-node-id%3D1%253A2",
  usabilityTesting: "Conducted usability testing with writers to identify any issues and improve the design. Collected feedback to refine the application and enhance its effectiveness.",
  feedback: [
    { text: <ul><li>"The spell-checking process is fast and intuitive."</li></ul>},
    { text: <ul><li>"I appreciate the customizable dictionary feature for managing specific terms."</li></ul>},
    { text: <ul><li>"The error tracking and progress reporting tools are very helpful."</li></ul>}
  ],
  keyLearnings: [
    { text: <ul><li>Understanding user needs and preferences is crucial for designing effective tools.</li></ul>},
    { text: <ul><li>Customization options significantly improve user satisfaction and usability.</li></ul>},
    { text: <ul><li>Fast and efficient applications maintain productivity and workflow.</li></ul>},
    { text: <ul><li>Iterative design and user testing are essential for refining solutions and improving user experience.</li></ul>},
    { text: <ul><li>Collaborative feedback leads to more effective and user-centered solutions.</li></ul>}
  ]
},
  2: {
    title: "Studyscape",
    image: studyscape,
    subtitle: "UX/UI Design & Development",
    description: "A virtual productivity hub designed to elevate students' at-home learning experience. With features like a customizable calendar, a Pomodoro timer, and task prioritization tools, it aims to enhance focus and organization. The project encapsulates a thoughtful design process, intuitive UX/UI, and smart integrations, fostering a conducive environment for academic success.",
    role: "UX/UI Design, Full-Stack Development, Research",
    background: "Created a comprehensive prototype for a productivity app aimed at students. Utilized Figma for UI/UX design, ensuring an intuitive and engaging user interface. Conducted extensive user research, including surveys and interviews, to gather insights on student study habits and challenges. Implemented features based on research findings to enhance usability and effectiveness.",
    goals: [
      { text: <ul><li>Enhance students' study habits and academic performance.</li></ul> },
      { text: <ul><li>Provide tools for effective time management and task tracking.</li></ul>},
      { text: <ul><li>Create personalized study plans to cater to individual needs.</li></ul>}
    ],
    problem: "Students often struggle with managing their time effectively, staying organized, and maintaining productive study habits, leading to stress and suboptimal academic performance.",
    userProblems: [
      { text: <ul><li>Difficulty in managing time and balancing academic workload with other responsibilities.</li></ul>},
      { text: <ul><li>Challenges in staying organized and keeping track of assignments, deadlines, and study materials.</li></ul>},
      { text: <ul><li>Lack of motivation and consistent study habits, leading to procrastination and last-minute cramming.</li></ul>},
      { text: <ul><li>Need for personalized study plans that cater to individual learning styles and goals.</li></ul>},
      { text: <ul><li>Limited access to effective study resources and tools that support diverse academic needs.</li></ul>}
    ],
    solution: "Developed an app prototype that addresses these challenges by providing features like time management tools, task tracking, and personalized study plans to improve productivity and academic performance.",
    ourSolutions: [
      { text: <ul><li>Customizable study schedules and reminders to help students manage their time effectively.</li></ul>},
      { text:<ul><li>Task tracking features to keep track of assignments, deadlines, and study materials.</li></ul>},
      { text:<ul><li>Personalized study plans based on individual learning styles and goals.</li></ul>},
      { text:<ul><li>Motivational tools and resources to encourage consistent study habits and reduce procrastination.</li></ul>},
      { text:<ul><li>Access to a library of study resources and tools tailored to various academic needs.</li></ul>}
    ],
    researchGoals: "To understand the study habits, challenges, and needs of students in order to design a solution that enhances their productivity and academic performance.",
    methodologies: "Conducted surveys and interviews with students to gather insights on their study habits and challenges. Analyzed the data to identify common pain points and opportunities for improvement.",
    userInterviews: [
      { text: <ul><li>Diverse study habits and preferences among students, reflecting different learning styles and academic goals.</li></ul>},
      { text: <ul><li>Common challenges include time management, staying organized, and maintaining motivation.</li></ul>},
      { text: <ul><li>Desire for personalized study plans and tools that cater to individual needs and learning styles.</li></ul>},
      { text: <ul><li>Need for effective task tracking and reminder systems to stay on top of assignments and deadlines.</li></ul>},
      { text: <ul><li>Importance of motivational tools and resources to reduce procrastination and encourage consistent study habits.</li></ul>}
    ],
    research: [
      { text: <ul><li>Time management is a critical factor in academic success, with effective time management strategies leading to improved performance and reduced stress.</li></ul>},
      { text: <ul><li>Organizational skills are essential for keeping track of assignments, deadlines, and study materials, contributing to better academic outcomes.</li></ul>},
      { text: <ul><li>Personalized study plans that cater to individual learning styles and goals are more effective than generic study plans.</li></ul>},
      { text: <ul><li>Motivation and consistent study habits are key to academic success, with tools and resources that support these factors being highly valued by students.</li></ul>}
    ],
    competitiveResearch: "Analyzed existing productivity tools and apps for students to identify strengths and weaknesses, and to determine areas for improvement in StudyScape.",
    competition: [
      { text: <ul><li>Trello - Excellent for task tracking but lacks personalized study plans.</li></ul>},
      { text: <ul><li>Notion - Highly customizable but can be overwhelming for new users.</li></ul>},
      { text: <ul><li>Forest - Great for motivation but limited in terms of comprehensive productivity features.</li></ul>},
    ],
    userPersona: "Created a persona representing a typical student who struggles with time management, organization, and maintaining productive study habits.",
    userpersonapic: studyuserpersona,
    journeymap: studyjourneymap,
    userflow: studyuserflow,
    lofiPic: [lofipic, hifipic],
    styleguideline: studyscapeui,
    prototypeLink: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FniX8ulJiWqH4jagZgx7bY9%2FGood-Copy%3Fnode-id%3D7-37%26t%3DpnJwh8SxD0F3v7YV-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D7%253A37",
    github: "https://github.com/joudlahham/studyscape",
    usabilityTesting: "Conducted usability testing with students to identify any usability issues and improve the design. Collected feedback to refine the app and enhance its effectiveness.",
    feedback: [
      { text: <ul><li>"The customizable study schedules and reminders are very helpful for managing my time effectively."</li></ul>},
      { text: <ul><li>"I love the task tracking features. They help me stay organized and keep track of my assignments and deadlines."</li></ul>},
      { text: <ul><li>"The personalized study plans are a game-changer. They cater to my learning style and help me stay motivated."</li></ul>},
    ],
    keyLearnings: [
      { text: <ul><li>Understanding the diverse needs and preferences of students is crucial for designing effective productivity tools.</li></ul>},
      { text: <ul><li>Personalization is key to creating study plans and tools that cater to individual learning styles and goals."</li></ul>},
      { text: <ul><li>Combining motivational tools with time management and task tracking features enhances productivity and academic performance.</li></ul>},
      { text: <ul><li>Iterative design and user testing are essential for refining solutions and improving user experience.</li></ul>},
      { text: <ul><li>Collaborative feedback from students and stakeholders leads to more effective and user-centered solutions.</li></ul>},
    ]
  },
}

export default projects;

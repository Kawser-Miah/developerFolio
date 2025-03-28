/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kawser Miah",
  title: "Hi all, I'm Kawser",
  subTitle: emoji("I am a passionate 📱 Mobile Application Developer specializing in Flutter, with a strong focus on creating efficient and user-friendly applications. Experienced in working with various Flutter packages to enhance app functionality ⚙️. Currently pursuing Computer Science and Engineering 🎓 at Green University of Bangladesh. Also, keen on writing technical articles ✍️, sharing insights, and contributing to the developer community 🌐."),
  resumeLink:
    "https://drive.google.com/file/d/1H3XT5qH6iXtgLKEapnCoZm2dol_LvW8X/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kawser-Miah",
  linkedin: "https://www.linkedin.com/in/md-kawser-ahmed-b2a250304/",
  gmail: "kawsermiah658@gmail.com",
//  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://web.facebook.com/md.kawser.ahmed.762580/",
//  medium: "https://medium.com/@saadpasta",

//  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
//   Instagram, Twitter and Kaggle are also supported in the links!
//   To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FLUTTER DEVELOPER EXPLORING MOBILE TECHNOLOGIES",
  skills: [
    emoji("⚡ Develop efficient and user-friendly mobile applications using Flutter"),
    emoji("⚡ Implement structured state management solutions like Bloc"),
    emoji("⚡ Work with MySQL and SQLite for seamless database management"),
    emoji("⚡ Write technical articles to share insights and help the developer community")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fa-brands fa-flutter"
    },

//    {
//      skillName: "html-5",
//      fontAwesomeClassname: "fab fa-html5"
//    },
//    {
//      skillName: "css3",
//      fontAwesomeClassname: "fab fa-css3-alt"
//    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fa-brands fa-dart-lang"
    },
//    {
//      skillName: "JavaScript",
//      fontAwesomeClassname: "fab fa-js"
//    },
//    {
//      skillName: "reactjs",
//      fontAwesomeClassname: "fab fa-react"
//    },
    {
      skillName: "C Programming",
      fontAwesomeClassname: "fa-solid fa-c"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fa-brands fa-java"
    },
//    {
//      skillName: "npm",
//      fontAwesomeClassname: "fab fa-npm"
//    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
//    {
//      skillName: "aws",
//      fontAwesomeClassname: "fab fa-aws"
//    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
//    {
//      skillName: "python",
//      fontAwesomeClassname: "fab fa-python"
//    },
//    {
//      skillName: "docker",
//      fontAwesomeClassname: "fab fa-docker"
//    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
  {
      schoolName: "Green University of Bangladesh",
      logo: require("./assets/images/gubLogo.png"), // Replace with your university's logo
      subHeader: "Bachelor of Science in Computer Science and Engineering",
      duration: "Ongoing",
      desc: "Gaining knowledge in software development, networking, database management, and algorithms.",
          descBullets: [
            "Studied programming languages: Java and C",
            "Explored Software Engineering, Computer Networking, and Data Communication",
            "Worked with MySQL for database management",
            "Gained a solid understanding of algorithms and data structures"
          ]
    },
//    {
//      schoolName: "Harvard University",
//      logo: require("./assets/images/harvardLogo.png"),
//      subHeader: "Master of Science in Computer Science",
//      duration: "September 2017 - April 2019",
//      desc: "Participated in the research of XXX and published 3 papers.",
//      descBullets: [
//        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//      ]
//    },
//    {
//      schoolName: "Stanford University",
//      logo: require("./assets/images/stanfordLogo.png"),
//      subHeader: "Bachelor of Science in Computer Science",
//      duration: "September 2013 - April 2017",
//      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
//      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
//    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter Development", // Mobile app development with Flutter
      progressPercentage: "90%"
    },
    {
      Stack: "Database Management (MySQL, SQLite)", // Working with databases
      progressPercentage: "75%"
    },
    {
      Stack: "Programming (Dart, C, Java)", // General programming proficiency
      progressPercentage: "70%"
    },
    {
      Stack: "Technical Writing", // Writing articles about Flutter and development
      progressPercentage: "80%"
    }
  ],

  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
  {
      role: "Flutter App Developer",
      company: "eBooster: English Learning App (Offered by Coseries)",


      companylogo: require("./assets/images/eboosterLogo.png"),
      date: "January 2024 - Present",
      desc: "Worked on enhancing eBooster, an English learning app for grammar, vocabulary, and IELTS preparation.",
      descBullets: [
        "Developed Gamification & Quiz Practice for vocabulary and grammar",
        "Redesigned grammar page for better UX/UI",
        "Added a 'Read Vocabulary' tracking tab",
        "Implemented Database Migration and Page Progress Tracker",
        "Modified SharedPreferences for optimized data storage",
        "Used Flutter Bloc for state management",
        "Integrated SQLite (Floor package) for local data storage",
        "Followed Clean Architecture for better code maintainability"
      ]
    },
//    {
//      role: "Software Engineer",
//      company: "Facebook",
//      companylogo: require("./assets/images/facebookLogo.png"),
//      date: "June 2018 – Present",
//      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//      descBullets: [
//        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//      ]
//    },
//    {
//      role: "Front-End Developer",
//      company: "Quora",
//      companylogo: require("./assets/images/quoraLogo.png"),
//      date: "May 2017 – May 2018",
//      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//    },
//    {
//      role: "Software Engineer Intern",
//      company: "Airbnb",
//      companylogo: require("./assets/images/airbnbLogo.png"),
//      date: "Jan 2015 – Sep 2015",
//      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS I HAVE DEVELOPED AND CONTRIBUTED TO",
  projects: [
  {
        image: require("./assets/images/deenhubLogo.png"),
        projectName: "DeenHub – Islamic App",
        projectDesc: "An all-in-one Islamic app featuring Hadith, prayer times, duas, tasbih counter, and more.",
        footerLink: [
          {
            name: "Google Play Store",
            url: "https://play.google.com/store/apps/details?id=your_deenhub_package_name"
          }
        ]
      },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
 "Passionate about coding and sharing knowledge, I write to empower others to build amazing Flutter apps and learn new techniques.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://coseries.com/flutter-speech-to-text/",
      title: "Flutter Speech to Text: Enhance Your App’s Functionality",
      description:
        "The Flutter Speech to Text capability, enabled by the speech_to_text package, provides developers with a straightforward way to add speech recognition functionality to their Flutter apps. This package not only simplifies the process of converting speech to text but also empowers developers to create innovative applications that respond to user voice inputs. In this article, we’ll explore how to leverage this package to build voice-enabled Flutter apps using Flutter Speech to Text."
    },
    {
      url: "https://coseries.com/flutter-cachemanager/",
      title: "Flutter CacheManager: Efficient data caching for your flutter Application",
      description:
        "The Flutter CacheManager package is an essential tool for developers looking to implement efficient and reliable caching in their Flutter applications. By caching data such as images, files, or any other network resource, this package significantly improves app performance and user experience. It is particularly useful for apps that require offline support or need to minimize network requests."
    },
    {
      url: "https://coseries.com/dart-json-utf-8-decode/",
      title: "Dart JSON UTF-8 Decode: A Comprehensive Guide",
      description:
            "Dart JSON UTF-8 Decode is an essential technique for efficiently handling JSON data, especially when transferring data between servers and applications. Dart, the programming language behind Flutter, offers powerful tools to decode JSON, including support for UTF-8 encoded data. In this article, we will explore how to decode JSON data in Dart using UTF-8 encoding. You’ll learn through practical examples and gain insights into addressing common challenges, helping you master the concept of Dart JSON UTF-8 Decode effectively."
     },
     {
       url: "https://coseries.com/flutter-substrings/",
       title: "Flutter Substrings: Efficient String Manipulation Techniques",
       description:"Flutter Substrings are essential in displaying and managing text in your Flutter applications. One of the common operations you may need is manipulating parts of a string, which can be efficiently achieved using substring techniques. This article will explore various ways to work with substrings in Flutter, including extracting, modifying, and formatting strings."
     }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8801646023803",
  email_address: "kawsermiah658@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

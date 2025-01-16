import React, { useState } from "react";
import "./RecommendedCoursesPage.css";
import { useNavigate } from "react-router-dom";

const RecommendedCoursesPage = () => {
  const fields = [
  {
    name: "Computer Science",
    subfields: [
      {
        name: "Programming Basics",
        resources: [
          { title: "CS50's Introduction to Computer Science", link: "https://cs50.harvard.edu/x/" },
          { title: "Learn Python - FreeCodeCamp", link: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
          { title: "JavaScript Basics - The Net Ninja", link: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT" },
        ],
      },
      {
        name: "Data Structures",
        resources: [
          { title: "Introduction to Data Structures by NPTEL", link: "https://nptel.ac.in/courses/106/105/106105171/" },
          { title: "Data Structures - FreeCodeCamp", link: "https://www.youtube.com/watch?v=RBSGKlAvoiM" },
        ],
      },
      {
        name: "Algorithms",
        resources: [
          { title: "Introduction to Algorithms by MIT", link: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/" },
          { title: "Algorithms - FreeCodeCamp", link: "https://www.youtube.com/watch?v=8hly31xKli0" },
        ],
      },
      {
        name: "Operating Systems",
        resources: [
          { title: "Operating Systems: Three Easy Pieces", link: "https://pages.cs.wisc.edu/~remzi/OSTEP/" },
          { title: "Operating Systems - NPTEL", link: "https://nptel.ac.in/courses/106/105/106105171/" },
        ],
      },
      {
        name: "Databases",
        resources: [
          { title: "Database Management Systems by Stanford", link: "https://www.youtube.com/playlist?list=PL3F6C4BCE2AA89C74" },
          { title: "SQL Basics - FreeCodeCamp", link: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
        ],
      },
      {
        name: "Networking",
        resources: [
          { title: "Computer Networking by NPTEL", link: "https://nptel.ac.in/courses/106/105/106105171/" },
          { title: "Computer Networking - FreeCodeCamp", link: "https://www.youtube.com/watch?v=3QhU9jd03aY" },
        ],
      },
      {
        name: "Cybersecurity",
        resources: [
          { title: "Cybersecurity Basics by edX", link: "https://www.edx.org/course/cybersecurity-fundamentals" },
          { title: "Cybersecurity - FreeCodeCamp", link: "https://www.youtube.com/watch?v=IAI4CYYFw94" },
        ],
      },
      {
        name: "AI and Machine Learning",
        resources: [
          { title: "CS50's Introduction to Artificial Intelligence with Python", link: "https://cs50.harvard.edu/ai/" },
          { title: "Machine Learning by Andrew Ng (Coursera)", link: "https://www.coursera.org/learn/machine-learning" },
        ],
      },
      {
        name: "Web Development",
        resources: [
          { title: "The Odin Project - Web Development", link: "https://www.theodinproject.com/paths/full-stack-javascript" },
          { title: "Web Development - FreeCodeCamp", link: "https://www.youtube.com/watch?v=3JluqTojuME" },
        ],
      },
      {
        name: "Mobile Development",
        resources: [
          { title: "Flutter - Official Documentation", link: "https://flutter.dev/docs" },
          { title: "React Native - Official Documentation", link: "https://reactnative.dev/docs/getting-started" },
        ],
      },
      {
        name: "Cloud Computing",
        resources: [
          { title: "AWS Certified Solutions Architect - Full Course", link: "https://www.youtube.com/watch?v=Ia-UEYYR44s" },
          { title: "Google Cloud - Coursera", link: "https://www.coursera.org/professional-certificates/google-cloud" },
        ],
      },
      {
        name: "Big Data",
        resources: [
          { title: "Big Data Analysis with Hadoop and Spark", link: "https://www.youtube.com/watch?v=K23g3d-vyA4" },
          { title: "Introduction to Big Data - Coursera", link: "https://www.coursera.org/learn/big-data" },
        ],
      },
      {
        name: "Blockchain",
        resources: [
          { title: "Blockchain Basics - edX", link: "https://www.edx.org/course/blockchain-for-business" },
          { title: "Blockchain - FreeCodeCamp", link: "https://www.youtube.com/watch?v=SSo_EIwHSd4" },
        ],
      },
      {
        name: "Game Development",
        resources: [
          { title: "Game Development with Unity - Coursera", link: "https://www.coursera.org/specializations/unity-game-development" },
          { title: "Unreal Engine - Official Documentation", link: "https://docs.unrealengine.com/" },
        ],
      },
      {
        name: "Software Testing",
        resources: [
          { title: "Software Testing by NPTEL", link: "https://nptel.ac.in/courses/106/106/106106233/" },
          { title: "Software Testing - FreeCodeCamp", link: "https://www.youtube.com/watch?v=Y68hxITSTyA" },
        ],
      },
      {
        name: "DevOps",
        resources: [
          { title: "DevOps for Beginners - Udemy", link: "https://www.udemy.com/course/learn-devops-the-complete-guide/" },
          { title: "DevOps - FreeCodeCamp", link: "https://www.youtube.com/watch?v=0W-Vf0d5vYQ" },
        ],
      },
      {
        name: "IoT",
        resources: [
          { title: "Internet of Things - Coursera", link: "https://www.coursera.org/learn/internet-of-things" },
          { title: "IoT Development - FreeCodeCamp", link: "https://www.youtube.com/watch?v=gpIjpWzpXjM" },
        ],
      },
      {
        name: "Embedded Systems",
        resources: [
          { title: "Introduction to Embedded Systems - edX", link: "https://www.edx.org/course/introduction-to-embedded-systems" },
          { title: "Embedded Systems - FreeCodeCamp", link: "https://www.youtube.com/watch?v=U5pUu6ZyK9E" },
        ],
      },
      {
        name: "Natural Language Processing",
        resources: [
          { title: "NLP Specialization - Coursera", link: "https://www.coursera.org/specializations/natural-language-processing" },
          { title: "NLP - FreeCodeCamp", link: "https://www.youtube.com/watch?v=8mQW4fjlZGk" },
        ],
      },
      {
        name: "Computer Vision",
        resources: [
          { title: "Introduction to Computer Vision - edX", link: "https://www.edx.org/course/computer-vision" },
          { title: "Computer Vision with OpenCV - FreeCodeCamp", link: "https://www.youtube.com/watch?v=oXlwWbU8l2o" },
        ],
      },
      {
        name: "Quantum Computing",
        resources: [
          { title: "Introduction to Quantum Computing - Coursera", link: "https://www.coursera.org/learn/quantum-computing" },
          { title: "Quantum Computing - FreeCodeCamp", link: "https://www.youtube.com/watch?v=JhHMJCUmq28" },
        ],
      },
    ],
  },

  {
    name: "English",
    subfields: [
      {
        name: "Literature Analysis",
        resources: [
          { title: "Introduction to Literature - Alison", link: "https://alison.com/course/introduction-to-literature" },
          { title: "Literary Devices - YouTube", link: "https://www.youtube.com/watch?v=UWI-3ODfNOo" },
        ],
      },
      {
        name: "Grammar Essentials",
        resources: [
          { title: "English Grammar - Grammarly Blog", link: "https://www.grammarly.com/blog/grammar/" },
          { title: "Basic English Grammar - YouTube", link: "https://www.youtube.com/watch?v=K0fknNW3u0g" },
        ],
      },
      {
        name: "Creative Writing",
        resources: [
          { title: "Creative Writing Course - Wesleyan", link: "https://www.coursera.org/specializations/creative-writing" },
          { title: "Creative Writing Tips - YouTube", link: "https://www.youtube.com/watch?v=HME6dkTbdws" },
        ],
      },
      {
        name: "Public Speaking",
        resources: [
          { title: "Public Speaking - Coursera", link: "https://www.coursera.org/learn/public-speaking" },
          { title: "How to Speak Confidently - TEDx", link: "https://www.youtube.com/watch?v=fiB3xje4v78" },
        ],
      },
      {
        name: "Poetry Writing",
        resources: [
          { title: "Poetry Writing Course - FutureLearn", link: "https://www.futurelearn.com/courses/poetry-writing" },
          { title: "How to Write Poetry - YouTube", link: "https://www.youtube.com/watch?v=YfHRpdTkq0I" },
        ],
      },
      {
        name: "Essay Writing",
        resources: [
          { title: "Essay Writing Guide - Purdue OWL", link: "https://owl.purdue.edu/owl/general_writing/the_writing_process/essay_writing.html" },
          { title: "How to Write an Essay - YouTube", link: "https://www.youtube.com/watch?v=JfktYbBiVuE" },
        ],
      },
      {
        name: "Business English",
        resources: [
          { title: "Business English - Alison", link: "https://alison.com/course/business-english" },
          { title: "Business English Communication - YouTube", link: "https://www.youtube.com/watch?v=5TGg5kkdVKs" },
        ],
      },
      {
        name: "Shakespeare Studies",
        resources: [
          { title: "Shakespeare's Life and Work - YouTube", link: "https://www.youtube.com/watch?v=gPnU8e72Zgo" },
          { title: "Shakespeare in 60 Minutes - BBC", link: "https://www.youtube.com/watch?v=MyhlIbz_F04" },
        ],
      },
      {
        name: "Modern Literature",
        resources: [
          { title: "Modern Literary Theory - NPTEL", link: "https://nptel.ac.in/courses/109/106/109106171/" },
          { title: "Modern Literature - YouTube", link: "https://www.youtube.com/watch?v=G_mIkhzMzKM" },
        ],
      },
      {
        name: "Editing Techniques",
        resources: [
          { title: "Editing Skills - Coursera", link: "https://www.coursera.org/learn/editorial-skills" },
          { title: "How to Edit Your Writing - YouTube", link: "https://www.youtube.com/watch?v=QAZIQgcn50w" },
        ],
      },
      {
        name: "Journalism",
        resources: [
          { title: "Introduction to Journalism - Alison", link: "https://alison.com/course/introduction-to-journalism" },
          { title: "Journalism Basics - YouTube", link: "https://www.youtube.com/watch?v=k7UwPqQH4bw" },
        ],
      },
      {
        name: "Academic Writing",
        resources: [
          { title: "Academic Writing - Coursera", link: "https://www.coursera.org/learn/academic-writing" },
          { title: "How to Write Academic Papers - YouTube", link: "https://www.youtube.com/watch?v=qg-J1yQJ9Sg" },
        ],
      },
      {
        name: "Debate Skills",
        resources: [
          { title: "Debate Skills - Coursera", link: "https://www.coursera.org/learn/debate" },
          { title: "Debate Skills - YouTube", link: "https://www.youtube.com/watch?v=2W4d3XDbdbQ" },
        ],
      },
      {
        name: "Presentation Skills",
        resources: [
          { title: "Presentation Skills - Alison", link: "https://alison.com/course/presentation-skills" },
          { title: "How to Improve Presentation Skills - YouTube", link: "https://www.youtube.com/watch?v=Zb5xH6kp0M8" },
        ],
      },
      {
        name: "Drama Studies",
        resources: [
          { title: "Introduction to Drama Studies - NPTEL", link: "https://nptel.ac.in/courses/109/106/109106105/" },
          { title: "Drama Studies - YouTube", link: "https://www.youtube.com/watch?v=6r4g3ip9jJ4" },
        ],
      },
      {
        name: "Pronunciation",
        resources: [
          { title: "Pronunciation Tips - YouTube", link: "https://www.youtube.com/watch?v=VjxtVtyyfjA" },
          { title: "English Pronunciation - BBC", link: "https://www.bbc.co.uk/learningenglish/english/features/pronunciation" },
        ],
      },
      {
        name: "Vocabulary Building",
        resources: [
          { title: "Vocabulary Building - YouTube", link: "https://www.youtube.com/watch?v=H0wK9AgnMx0" },
          { title: "English Vocabulary Builder - Alison", link: "https://alison.com/course/english-vocabulary-builder" },
        ],
      },
      {
        name: "Interpersonal Communication",
        resources: [
          { title: "Effective Interpersonal Communication - Coursera", link: "https://www.coursera.org/learn/interpersonal-communication" },
          { title: "Interpersonal Communication Skills - YouTube", link: "https://www.youtube.com/watch?v=n6gkANrkXT8" },
        ],
      },
      {
        name: "Children's Literature",
        resources: [
          { title: "Children's Literature - University of Cambridge", link: "https://www.cambridge.org/engage/api-gateway/cl/article-details/6059f0d7b7a4bb001c7e722f" },
          { title: "Children's Literature - YouTube", link: "https://www.youtube.com/watch?v=s9PVcfY8lTk" },
        ],
      },
      {
        name: "Classic Novels",
        resources: [
          { title: "Classic Novels - YouTube", link: "https://www.youtube.com/watch?v=7_1Vx_Ur0jc" },
          { title: "Classic Literature - Study.com", link: "https://study.com/academy/topic/classic-literature.html" },
        ],
      },
      {
        name: "Technical Writing",
        resources: [
          { title: "Technical Writing - Coursera", link: "https://www.coursera.org/learn/technical-writing" },
          { title: "Technical Writing Tutorial - YouTube", link: "https://www.youtube.com/watch?v=VAuFy96KhCU" },
        ],
      },
    ],
  },
{
  "name": "Mathematics",
  "subfields": [
    {
      "name": "Arithmetic",
      "resources": [
        { "title": "Introduction to Arithmetic - YouTube", "link": "https://www.youtube.com/watch?v=abc123" },
        { "title": "Basic Arithmetic - Coursera", "link": "https://www.coursera.org/learn/basic-arithmetic" }
      ]
    },
    {
      "name": "Algebra",
      "resources": [
        { "title": "Algebra Basics - YouTube", "link": "https://www.youtube.com/watch?v=xyz456" },
        { "title": "Algebra for Beginners - Khan Academy", "link": "https://www.khanacademy.org/math/algebra" }
      ]
    },
    {
      "name": "Geometry",
      "resources": [
        { "title": "Geometry Fundamentals - YouTube", "link": "https://www.youtube.com/watch?v=def789" },
        { "title": "Geometry 101 - Coursera", "link": "https://www.coursera.org/learn/geometry-101" }
      ]
    },
    {
      "name": "Trigonometry",
      "resources": [
        { "title": "Trigonometry Basics - YouTube", "link": "https://www.youtube.com/watch?v=ghi012" },
        { "title": "Trigonometry 101 - Khan Academy", "link": "https://www.khanacademy.org/math/trigonometry" }
      ]
    },
    {
      "name": "Calculus",
      "resources": [
        { "title": "Calculus for Beginners - YouTube", "link": "https://www.youtube.com/watch?v=jkl345" },
        { "title": "Introduction to Calculus - Coursera", "link": "https://www.coursera.org/learn/introduction-to-calculus" }
      ]
    },
    {
      "name": "Linear Algebra",
      "resources": [
        { "title": "Linear Algebra Basics - YouTube", "link": "https://www.youtube.com/watch?v=lmn678" },
        { "title": "Linear Algebra - Khan Academy", "link": "https://www.khanacademy.org/math/linear-algebra" }
      ]
    },
    {
      "name": "Discrete Mathematics",
      "resources": [
        { "title": "Discrete Math Overview - YouTube", "link": "https://www.youtube.com/watch?v=opq901" },
        { "title": "Discrete Mathematics - Coursera", "link": "https://www.coursera.org/learn/discrete-mathematics" }
      ]
    },
    {
      "name": "Statistics",
      "resources": [
        { "title": "Statistics for Beginners - YouTube", "link": "https://www.youtube.com/watch?v=rst234" },
        { "title": "Statistics 101 - Khan Academy", "link": "https://www.khanacademy.org/math/statistics-probability" }
      ]
    },
    {
      "name": "Probability",
      "resources": [
        { "title": "Introduction to Probability - YouTube", "link": "https://www.youtube.com/watch?v=uvw567" },
        { "title": "Probability Theory - Coursera", "link": "https://www.coursera.org/learn/probability-theory" }
      ]
    },
    {
      "name": "Complex Numbers",
      "resources": [
        { "title": "Complex Numbers Explained - YouTube", "link": "https://www.youtube.com/watch?v=xyz890" },
        { "title": "Complex Numbers - Khan Academy", "link": "https://www.khanacademy.org/math/trigonometry" }
      ]
    },
    {
      "name": "Vector Calculus",
      "resources": [
        { "title": "Vector Calculus - YouTube", "link": "https://www.youtube.com/watch?v=abc567" },
        { "title": "Vector Calculus - Coursera", "link": "https://www.coursera.org/learn/vector-calculus" }
      ]
    },
    {
      "name": "Set Theory",
      "resources": [
        { "title": "Introduction to Set Theory - YouTube", "link": "https://www.youtube.com/watch?v=def890" },
        { "title": "Set Theory - Khan Academy", "link": "https://www.khanacademy.org/math/set-theory" }
      ]
    },
    {
      "name": "Topology",
      "resources": [
        { "title": "Topology Basics - YouTube", "link": "https://www.youtube.com/watch?v=ghi234" },
        { "title": "Introduction to Topology - Coursera", "link": "https://www.coursera.org/learn/topology" }
      ]
    },
    {
      "name": "Number Theory",
      "resources": [
        { "title": "Number Theory Basics - YouTube", "link": "https://www.youtube.com/watch?v=jkl567" },
        { "title": "Number Theory - Khan Academy", "link": "https://www.khanacademy.org/math/number-theory" }
      ]
    },
    {
      "name": "Differential Equations",
      "resources": [
        { "title": "Differential Equations Overview - YouTube", "link": "https://www.youtube.com/watch?v=lmn012" },
        { "title": "Introduction to Differential Equations - Coursera", "link": "https://www.coursera.org/learn/differential-equations" }
      ]
    },
    {
      "name": "Graph Theory",
      "resources": [
        { "title": "Graph Theory Basics - YouTube", "link": "https://www.youtube.com/watch?v=opq345" },
        { "title": "Graph Theory - Coursera", "link": "https://www.coursera.org/learn/graph-theory" }
      ]
    },
    {
      "name": "Abstract Algebra",
      "resources": [
        { "title": "Abstract Algebra - YouTube", "link": "https://www.youtube.com/watch?v=rst678" },
        { "title": "Abstract Algebra - Khan Academy", "link": "https://www.khanacademy.org/math/abstract-algebra" }
      ]
    },
    {
      "name": "Mathematical Logic",
      "resources": [
        { "title": "Mathematical Logic - YouTube", "link": "https://www.youtube.com/watch?v=uvw123" },
        { "title": "Logic in Mathematics - Coursera", "link": "https://www.coursera.org/learn/mathematical-logic" }
      ]
    },
    {
      "name": "Numerical Methods",
      "resources": [
        { "title": "Numerical Methods Basics - YouTube", "link": "https://www.youtube.com/watch?v=xyz456" },
        { "title": "Numerical Methods - Khan Academy", "link": "https://www.khanacademy.org/math/numerical-methods" }
      ]
    },
    {
      "name": "Combinatorics",
      "resources": [
        { "title": "Combinatorics Basics - YouTube", "link": "https://www.youtube.com/watch?v=def678" },
        { "title": "Combinatorics - Coursera", "link": "https://www.coursera.org/learn/combinatorics" }
      ]
    },
    {
      "name": "Game Theory",
      "resources": [
        { "title": "Introduction to Game Theory - YouTube", "link": "https://www.youtube.com/watch?v=ghi901" },
        { "title": "Game Theory Basics - Coursera", "link": "https://www.coursera.org/learn/game-theory" }
      ]
    }
  ]
},
{
  "name": "Science",
  "subfields": [
    {
      "name": "Physics Basics",
      "resources": [
        { "title": "Introduction to Physics - YouTube", "link": "https://www.youtube.com/watch?v=abc123" },
        { "title": "Physics 101 - Coursera", "link": "https://www.coursera.org/learn/physics-101" }
      ]
    },
    {
      "name": "Chemistry Basics",
      "resources": [
        { "title": "Introduction to Chemistry - YouTube", "link": "https://www.youtube.com/watch?v=xyz123" },
        { "title": "Chemistry 101 - Khan Academy", "link": "https://www.khanacademy.org/science/chemistry" }
      ]
    },
    {
      "name": "Biology Basics",
      "resources": [
        { "title": "Introduction to Biology - YouTube", "link": "https://www.youtube.com/watch?v=lmn234" },
        { "title": "Biology 101 - Coursera", "link": "https://www.coursera.org/learn/biology-101" }
      ]
    },
    {
      "name": "Astrophysics",
      "resources": [
        { "title": "Introduction to Astrophysics - YouTube", "link": "https://www.youtube.com/watch?v=abc456" },
        { "title": "Astrophysics 101 - Coursera", "link": "https://www.coursera.org/learn/astrophysics" }
      ]
    },
    {
      "name": "Quantum Physics",
      "resources": [
        { "title": "Introduction to Quantum Physics - YouTube", "link": "https://www.youtube.com/watch?v=xyz789" },
        { "title": "Quantum Physics for Beginners - Khan Academy", "link": "https://www.khanacademy.org/science/physics" }
      ]
    },
    {
      "name": "Organic Chemistry",
      "resources": [
        { "title": "Organic Chemistry Basics - YouTube", "link": "https://www.youtube.com/watch?v=def234" },
        { "title": "Organic Chemistry 101 - Coursera", "link": "https://www.coursera.org/learn/organic-chemistry" }
      ]
    },
    {
      "name": "Inorganic Chemistry",
      "resources": [
        { "title": "Inorganic Chemistry Basics - YouTube", "link": "https://www.youtube.com/watch?v=ghi345" },
        { "title": "Inorganic Chemistry 101 - Coursera", "link": "https://www.coursera.org/learn/inorganic-chemistry" }
      ]
    },
    {
      "name": "Biotechnology",
      "resources": [
        { "title": "Biotechnology Overview - YouTube", "link": "https://www.youtube.com/watch?v=jkl567" },
        { "title": "Introduction to Biotechnology - Coursera", "link": "https://www.coursera.org/learn/biotechnology" }
      ]
    },
    {
      "name": "Microbiology",
      "resources": [
        { "title": "Microbiology Basics - YouTube", "link": "https://www.youtube.com/watch?v=opq678" },
        { "title": "Microbiology 101 - Coursera", "link": "https://www.coursera.org/learn/microbiology" }
      ]
    },
    {
      "name": "Environmental Science",
      "resources": [
        { "title": "Introduction to Environmental Science - YouTube", "link": "https://www.youtube.com/watch?v=rst789" },
        { "title": "Environmental Science 101 - Coursera", "link": "https://www.coursera.org/learn/environmental-science" }
      ]
    }
  ]
},
{
  "name": "History",
  "subfields": [
    {
      "name": "Ancient Civilizations",
      "resources": [
        { "title": "Ancient Civilizations Overview - YouTube", "link": "https://www.youtube.com/watch?v=xyz123" },
        { "title": "Introduction to Ancient Civilizations - Coursera", "link": "https://www.coursera.org/learn/ancient-civilizations" }
      ]
    },
    {
      "name": "Medieval History",
      "resources": [
        { "title": "Medieval History 101 - YouTube", "link": "https://www.youtube.com/watch?v=abc456" },
        { "title": "Medieval History Course - edX", "link": "https://www.edx.org/course/medieval-history" }
      ]
    },
    {
      "name": "Modern History",
      "resources": [
        { "title": "Modern History Explained - YouTube", "link": "https://www.youtube.com/watch?v=def789" },
        { "title": "The Modern World - FutureLearn", "link": "https://www.futurelearn.com/courses/modern-world" }
      ]
    },
    {
      "name": "World Wars",
      "resources": [
        { "title": "World War I - History Channel", "link": "https://www.history.com/topics/world-war-i" },
        { "title": "World War II Overview - YouTube", "link": "https://www.youtube.com/watch?v=ghi101" }
      ]
    },
    {
      "name": "Indian History",
      "resources": [
        { "title": "Indian History Overview - YouTube", "link": "https://www.youtube.com/watch?v=jkl234" },
        { "title": "History of India - National Geographic", "link": "https://www.nationalgeographic.com/history" }
      ]
    }
  ]
},
{
  "name": "Commerce",
  "subfields": [
    {
      "name": "Accounting Basics",
      "resources": [
        { "title": "Introduction to Accounting - Coursera", "link": "https://www.coursera.org/learn/accounting-basics" },
        { "title": "Accounting Fundamentals - YouTube", "link": "https://www.youtube.com/watch?v=mno567" }
      ]
    },
    {
      "name": "Business Studies",
      "resources": [
        { "title": "Business 101 - edX", "link": "https://www.edx.org/course/business-101" },
        { "title": "Fundamentals of Business - YouTube", "link": "https://www.youtube.com/watch?v=pqr678" }
      ]
    },
    {
      "name": "Economics",
      "resources": [
        { "title": "Principles of Economics - Khan Academy", "link": "https://www.khanacademy.org/economics" },
        { "title": "Economics Explained - YouTube", "link": "https://www.youtube.com/watch?v=stu890" }
      ]
    },
    {
      "name": "Marketing",
      "resources": [
        { "title": "Marketing Basics - Coursera", "link": "https://www.coursera.org/learn/marketing-basics" },
        { "title": "Digital Marketing - YouTube", "link": "https://www.youtube.com/watch?v=vwx123" }
      ]
    },
    {
      "name": "Finance",
      "resources": [
        { "title": "Introduction to Finance - edX", "link": "https://www.edx.org/course/introduction-to-finance" },
        { "title": "Financial Management - YouTube", "link": "https://www.youtube.com/watch?v=yza456" }
      ]
    }
  ]
},
{
  "name": "Physics",
  "subfields": [
    {
      "name": "Mechanics",
      "resources": [
        { "title": "Introduction to Mechanics - YouTube", "link": "https://www.youtube.com/watch?v=xyz123" },
        { "title": "Fundamentals of Mechanics - Coursera", "link": "https://www.coursera.org/learn/mechanics" }
      ]
    },
    {
      "name": "Optics",
      "resources": [
        { "title": "Optics Basics - YouTube", "link": "https://www.youtube.com/watch?v=abc456" },
        { "title": "Optics Course - edX", "link": "https://www.edx.org/course/optics" }
      ]
    },
    {
      "name": "Thermodynamics",
      "resources": [
        { "title": "Thermodynamics Explained - YouTube", "link": "https://www.youtube.com/watch?v=def789" },
        { "title": "Thermodynamics - MIT OpenCourseWare", "link": "https://ocw.mit.edu/courses/physics/8-333-thermal-physics-fall-2016/" }
      ]
    },
    {
      "name": "Electromagnetism",
      "resources": [
        { "title": "Electromagnetism 101 - YouTube", "link": "https://www.youtube.com/watch?v=ghi101" },
        { "title": "Electromagnetism Fundamentals - Khan Academy", "link": "https://www.khanacademy.org/science/physics" }
      ]
    },
    {
      "name": "Quantum Mechanics",
      "resources": [
        { "title": "Quantum Mechanics Basics - edX", "link": "https://www.edx.org/course/quantum-mechanics" },
        { "title": "Introduction to Quantum Mechanics - Coursera", "link": "https://www.coursera.org/learn/quantum-mechanics" }
      ]
    }
  ]
},
{
  "name": "Chemistry",
  "subfields": [
    {
      "name": "Organic Chemistry",
      "resources": [
        { "title": "Organic Chemistry Basics - YouTube", "link": "https://www.youtube.com/watch?v=jkl234" },
        { "title": "Organic Chemistry 101 - Coursera", "link": "https://www.coursera.org/learn/organic-chemistry" }
      ]
    },
    {
      "name": "Inorganic Chemistry",
      "resources": [
        { "title": "Introduction to Inorganic Chemistry - YouTube", "link": "https://www.youtube.com/watch?v=mno567" },
        { "title": "Inorganic Chemistry Basics - edX", "link": "https://www.edx.org/course/inorganic-chemistry" }
      ]
    },
    {
      "name": "Physical Chemistry",
      "resources": [
        { "title": "Physical Chemistry Fundamentals - YouTube", "link": "https://www.youtube.com/watch?v=pqr678" },
        { "title": "Physical Chemistry Course - Coursera", "link": "https://www.coursera.org/learn/physical-chemistry" }
      ]
    },
    {
      "name": "Analytical Chemistry",
      "resources": [
        { "title": "Analytical Chemistry Overview - edX", "link": "https://www.edx.org/course/analytical-chemistry" },
        { "title": "Introduction to Analytical Chemistry - YouTube", "link": "https://www.youtube.com/watch?v=stu890" }
      ]
    },
    {
      "name": "Biochemistry",
      "resources": [
        { "title": "Introduction to Biochemistry - Coursera", "link": "https://www.coursera.org/learn/biochemistry" },
        { "title": "Biochemistry 101 - YouTube", "link": "https://www.youtube.com/watch?v=vwx123" }
      ]
    }
  ]
},
{
  "name": "Biology",
  "subfields": [
    {
      "name": "Cell Biology",
      "resources": [
        { "title": "Introduction to Cell Biology - edX", "link": "https://www.edx.org/course/cell-biology" },
        { "title": "Cell Biology Explained - YouTube", "link": "https://www.youtube.com/watch?v=abc234" }
      ]
    },
    {
      "name": "Genetics",
      "resources": [
        { "title": "Introduction to Genetics - YouTube", "link": "https://www.youtube.com/watch?v=def345" },
        { "title": "Genetics 101 - Coursera", "link": "https://www.coursera.org/learn/genetics" }
      ]
    },
    {
      "name": "Microbiology",
      "resources": [
        { "title": "Microbiology Basics - YouTube", "link": "https://www.youtube.com/watch?v=ghi456" },
        { "title": "Microbiology Course - edX", "link": "https://www.edx.org/course/microbiology" }
      ]
    },
    {
      "name": "Zoology",
      "resources": [
        { "title": "Zoology Basics - YouTube", "link": "https://www.youtube.com/watch?v=jkl567" },
        { "title": "Introduction to Zoology - Coursera", "link": "https://www.coursera.org/learn/zoology" }
      ]
    },
    {
      "name": "Botany",
      "resources": [
        { "title": "Botany Basics - YouTube", "link": "https://www.youtube.com/watch?v=mno678" },
        { "title": "Botany Course - edX", "link": "https://www.edx.org/course/botany" }
      ]
    }
  ]
},

  {
    "name": "Law",
    "subfields": [
      {
        "name": "Constitutional Law",
        "resources": [
          { "title": "Constitutional Law Basics - YouTube", "link": "https://www.youtube.com/watch?v=xyz123" },
          { "title": "Constitutional Law - Coursera", "link": "https://www.coursera.org/learn/constitutional-law" }
        ]
      },
      {
        "name": "Criminal Law",
        "resources": [
          { "title": "Introduction to Criminal Law - YouTube", "link": "https://www.youtube.com/watch?v=abc456" },
          { "title": "Criminal Law 101 - edX", "link": "https://www.edx.org/course/criminal-law" }
        ]
      },
      {
        "name": "Corporate Law",
        "resources": [
          { "title": "Corporate Law Basics - YouTube", "link": "https://www.youtube.com/watch?v=def789" },
          { "title": "Corporate Law Course - Coursera", "link": "https://www.coursera.org/learn/corporate-law" }
        ]
      }
    ]
  },
  {
    "name": "Engineering",
    "subfields": [
      {
        "name": "Civil Engineering",
        "resources": [
          { "title": "Civil Engineering Basics - YouTube", "link": "https://www.youtube.com/watch?v=ghi012" },
          { "title": "Introduction to Civil Engineering - Coursera", "link": "https://www.coursera.org/learn/civil-engineering" }
        ]
      },
      {
        "name": "Mechanical Engineering",
        "resources": [
          { "title": "Mechanical Engineering Concepts - YouTube", "link": "https://www.youtube.com/watch?v=jkl345" },
          { "title": "Mechanical Engineering - edX", "link": "https://www.edx.org/course/mechanical-engineering" }
        ]
      },
      {
        "name": "Electrical Engineering",
        "resources": [
          { "title": "Electrical Engineering Basics - YouTube", "link": "https://www.youtube.com/watch?v=mno678" },
          { "title": "Introduction to Electrical Engineering - Coursera", "link": "https://www.coursera.org/learn/electrical-engineering" }
        ]
      }
    ]
  },
  {
    "name": "Psychology",
    "subfields": [
      {
        "name": "Cognitive Psychology",
        "resources": [
          { "title": "Cognitive Psychology Explained - YouTube", "link": "https://www.youtube.com/watch?v=pqr910" },
          { "title": "Cognitive Psychology 101 - edX", "link": "https://www.edx.org/course/cognitive-psychology" }
        ]
      },
      {
        "name": "Behavioral Psychology",
        "resources": [
          { "title": "Behavioral Psychology Overview - YouTube", "link": "https://www.youtube.com/watch?v=stu112" },
          { "title": "Behavioral Psychology - Coursera", "link": "https://www.coursera.org/learn/behavioral-psychology" }
        ]
      },
      {
        "name": "Clinical Psychology",
        "resources": [
          { "title": "Clinical Psychology Basics - YouTube", "link": "https://www.youtube.com/watch?v=vwx213" },
          { "title": "Clinical Psychology - edX", "link": "https://www.edx.org/course/clinical-psychology" }
        ]
      }
    ]
  },
  {
    "name": "Business Management",
    "subfields": [
      {
        "name": "Principles of Management",
        "resources": [
          { "title": "Principles of Management - YouTube", "link": "https://www.youtube.com/watch?v=abc345" },
          { "title": "Management Basics - edX", "link": "https://www.edx.org/course/principles-of-management" }
        ]
      },
      {
        "name": "Financial Management",
        "resources": [
          { "title": "Financial Management Overview - YouTube", "link": "https://www.youtube.com/watch?v=def678" },
          { "title": "Financial Management 101 - Coursera", "link": "https://www.coursera.org/learn/financial-management" }
        ]
      },
      {
        "name": "Marketing Management",
        "resources": [
          { "title": "Marketing Management Concepts - YouTube", "link": "https://www.youtube.com/watch?v=ghi901" },
          { "title": "Marketing Management - edX", "link": "https://www.edx.org/course/marketing-management" }
        ]
      }
    ]
  },
  {
    "name": "Arts",
    "subfields": [
      {
        "name": "Painting",
        "resources": [
          { "title": "Painting Basics - YouTube", "link": "https://www.youtube.com/watch?v=abc112" },
          { "title": "Introduction to Painting - edX", "link": "https://www.edx.org/course/painting" }
        ]
      },
      {
        "name": "Photography",
        "resources": [
          { "title": "Photography 101 - YouTube", "link": "https://www.youtube.com/watch?v=def334" },
          { "title": "Photography Basics - Coursera", "link": "https://www.coursera.org/learn/photography" }
        ]
      },
      {
        "name": "Digital Art",
        "resources": [
          { "title": "Digital Art Techniques - YouTube", "link": "https://www.youtube.com/watch?v=ghi556" },
          { "title": "Digital Art - edX", "link": "https://www.edx.org/course/digital-art" }
        ]
      }
    ]
  }



];


  const [selectedField, setSelectedField] = useState(null);
  const [selectedSubfield, setSelectedSubfield] = useState(null);

  const handleFieldClick = (field) => {
    setSelectedField(field);
    setSelectedSubfield(null);
  };

  const handleSubfieldClick = (subfield) => {
    setSelectedSubfield(subfield);
  };
  const navigate = useNavigate();

  return (
    <div className="courses-container">
      <header className="courses-header">
        <img src="logo.png" alt="AI Student Logo" className="logo" />
        <h1 className="title">EDU-STUDENT SPARK Learning Platform</h1>
        <div className="profile">
          <img
            src="profile-icon.png"
            alt="Profile Icon"
            className="profile-icon"
            onClick={() => navigate("/profile")} // Navigate to the profile page
          />
        </div>
      </header>

      <div className="courses-content">
        {!selectedField && (
          <div>
            <h2>Fields</h2>
            <div className="fields-grid">
              {fields.map((field) => (
                <div key={field.name} onClick={() => handleFieldClick(field)} className="field-card">
                  <h3>{field.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedField && !selectedSubfield && (
          <div>
            <h2>{selectedField.name}</h2>
            <button onClick={() => setSelectedField(null)} className="back-button">Back</button>
            <div className="subfields-grid">
              {selectedField.subfields.map((subfield) => (
                <div key={subfield.name} onClick={() => handleSubfieldClick(subfield)} className="subfield-card">
                  <p>{subfield.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedSubfield && (
          <div>
            <h2>{selectedSubfield.name}</h2>
            <button onClick={() => setSelectedSubfield(null)} className="back-button">Back</button>
            <ul className="resources-list">
              {selectedSubfield.resources.map((resource, index) => (
                <li key={index} className="resource-item">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <footer className="courses-footer">
        <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RecommendedCoursesPage;

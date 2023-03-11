import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mysql,
    git,
    tableau,
    figma,
    docker,
    mutual,
    usf,
    oracle,
    expense_tracker,
    tweet_sentiment_analysis,
    f1_analysis,
    breast_cancer_prediction,
    threejs,
    github,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: mysql,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Information Technology Intern",
      company_name: "Mutual of Omaha",
      icon: mutual,
      iconBg: "#383E56",
      date: "May 2022 - Aug 2022, Feb 2023 - Present",
      points: [
        "Implemented a file validation feature using Vue.js and Spring Boot, to confirm that files are sourced from the correct file share repository in a batch application, thereby restricting users to upload the accurate file.",
        "Conducted a comprehensive analysis on usage history of health information data repository utilizing SQL, Python, and Tableau to uncover valuable insights on crucial stakeholders across different departments.",
        "Collaborated with the data engineering team to optimize a batch application responsible for transferring data ingested by Informatica processes into Teradata views via API, resulting in a 20% improvement in efficiency.",
        "Created and optimized complex SQL queries that extract data from multiple Teradata tables and generate reports based on business user requirements, resulting in a 25% reduction in report preparation time.",
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company_name: "University of South Florida",
      icon: usf,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Present",
      points: [
        "Assisted Professor in 'Big Data' course, devoting over 20 hours per week to help prepare course material for modules such as Hadoop, Map Reduce, Apache Spark, PySpark, Hive, Pig, Impala, Cassandra, Databricks, and Datastax. Responsible for grading exams and assignments.",
        "Utilized Databricks platform to implement various Machine Learning algorithms using PySpark, Ray, Modin, and Dask.",
        "Provided one-on-one support to students to clarify course-related questions as needed.",
      ],
    },
    {
      title: "Senior Engineer",
      company_name: "Oracle",
      icon: oracle,
      iconBg: "#383E56",
      date: "July 2021 - Aug 2021",
      points: [
        "Developed a search module using Oracle REST Data Services that queried across various types of healthcare data, based on FHIR standards, enabling business users to perform deep searches efficiently.",
      ],
    },
    {
      title: "Associate Engineer",
      company_name: "Oracle",
      icon: oracle,
      iconBg: "#E6DEDD",
      date: "July 2018 - June 2021",
      points: [
        "Developed and deployed a web application using JavaScript and RESTful Web Services, consolidating industry seller content, marketing materials, and customer presentations. Enhanced user experience by incorporating personalization features in the user profile, resulting in a 15% increase in user engagement.",
        "Led a team of 2 to implement a feature using Angular, NodeJS, and RESTful Web Services, which enabled the seller content to be available in multiple languages for business users.",
        "Designed and implemented a maintenance module that tracks usage details of an application, enabling audit tracking and decreasing time needed to generate usage reports by 20%.",
        "Contributed to the development of Content Management Portal functionality which facilitated multiple stages of review of the content before being delivered to users.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Expense Tracker",
      description:
        "An interactive website which helps users to manage their monthly expenses, view their past expenses through interactive charts and analyze the expenses for the upcoming months.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "jQuery",
          color: "blue-text-gradient",
        },
      ],
      image: expense_tracker,
      icon: github,
      source_code_link: "https://github.com/VarunKrishna1010/expense_tracker",
    },
    {
      name: "Tweet Sentiment Analysis",
      description:
        "A tool developed to predict the sentiment of the tweets. This tool will help in analyzing the tweets targeting a specific topic/product/brand and help to improve the services for the same.",
      tags: [
        {
          name: "PySpark",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Databricks",
          color: "pink-text-gradient",
        },
      ],
      image: tweet_sentiment_analysis,
      icon: github,
      source_code_link: "https://github.com/VarunKrishna1010/TweetSentimentAnalysis",
    },
    {
      name: "Formula 1 Analysis",
      description:
        "A go to dashboard for a common man to gain more information about driver statistics, driver performance at the qualifying sessions and races over the years, comparison of driver statistics and constructor statistics.",
      tags: [
        {
          name: "Tableau",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "DataExploratoryAnalysis",
          color: "pink-text-gradient",
        },
      ],
      image: f1_analysis,
      icon: tableau,
      source_code_link: "https://public.tableau.com/app/profile/varun.krishna.ramakrishnan/viz/F1Analysis-VKR/TurboHybridEra",
    },
    {
      name: "Prediction of Breast Cancer",
      description:
        "A tool developed using Azure ML to predict whether the tumour is cancerous or non-cancerous by identifying the important attributes using machine learning techniques. This tool will help in identifying the patients at high risks at the earlier stages and help cut down the costs during treatment.",
      tags: [
        {
          name: "AzureML",
          color: "blue-text-gradient",
        },
        {
          name: "DataAnalysis",
          color: "green-text-gradient",
        },
      ],
      image: breast_cancer_prediction,
      icon: github,
      source_code_link: "https://github.com/VarunKrishna1010/Breast-CancerPrediction",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
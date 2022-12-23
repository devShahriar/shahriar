import slugify from "slugify";

const data = {
  name: "Shahriar Islam",
  about: {
    title: "Hi, I'm S M Shahriar Islam",
    subtitles: [
      "tuku tuku tu ku tu ku @ Pathao"
    ],
    resume: "https://drive.google.com/file/d/1yg75hWcIops3zdlu9HEzhVHg9WBp4wbb/view?fbclid=IwAR1sp9vwJdyW8-qzVmPF7GK2h88n4lTRJuTuyqo-U4KwYCsbXX3XKBzFmVw",
    bio: "Willing to work hard and face any challenges to provide the best results",
    description: "I am an experienced software engineer and a coding instructor. Over the past few years, I have earned experience in different domains of software engineering. I am focused as a Backend engineer. I like to work with distributed systems, microservices, and DevOps. Besides backend engineering, I have also learned the discipline of mobile development, front-end development. I love to share my knowledge of why I have taught many people about different technologies."
  },
  links: [
    {
      alt: "Linkedin",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/devshahriar/"
    },
    {
      alt: "Medium",
      icon: "Medium",
      link: "https://shudipshahriar.medium.com/"
    },
    {
      alt: "Github",
      icon: "github",
      link: "https://github.com/devShahriar"
    },
    {
      alt: "Email",
      icon: "gmail",
      link: "shudip.shahriar@gmail.com"
    }
  ],
  skills: [
    {
      name: "Languages",
      items: ["Go","Java","Javascript","Python","Kotlin",{label: "Shell",icon:"GNU Bash"}]
    },
    {
      name: "Backend Development",
      items: [
        "Go",
        {
          label: "Node.js",
          icon: "nodedotjs"
        }, 
        "Express","Flask","Django","Rabbitmq","GraphQl"
      ]
    },
    {
      name: "Database",
      items: ["MySQL", "Redis",  "Mongodb",  "PostgreSQL"]
    },
    {
      name: "Mobile",
      items: ["Android Studio", "Kotlin"]
    },
    {
      name: "Frontend",
      items: ["React"]
    },
    {
      name: "Devops",
      items: ["Kubernetes","Docker", "Helm"]
    }
  ],
  courses: [
    {
      title: "Docker crash course",
      topics: [
        "Docker"
      ],
      image_url: 'https://i.imgur.com/dIZdqRR.png',
      short_description: 'Docker is one of the most demanding topics around the world. This course aims to provide a piece of in-depth knowledge about docker.You will learn how to containerize your applications. We will learn all the core concepts and all the commands related to docker with some real-world examples',
      description: "Docker containers are a flexible platform that allows you to easily build ship and run your applications in scalable and distributed environments. Docker is widely used and it is written in Go. In this crash course, we will learn from basic to advance level concepts related to docker.",
      start_date: "2021-07-19",
      registration_link: 'https://forms.gle/jaZtsCzYm4RMCZ8B7',
      contents: [
        {
          title: 'What is a Container?',
        },
        {
          title: 'What is a Docker Image?',
        },
        {
          title: 'What is a Docker Registry?',
        },
        {
          title: 'Docker Architecture Overview',
        },
        {
          title: 'Docker basic commands'
        },
        {
          title: 'Creating a docker image',
        },
        {
          title : 'Understand how to write Dockerfile'
        },
        {
          title: 'Docker Container Manipulation Basics',
          description:'Run a container, publish port, Use Detached Mode, List containers, Rename containers, Kill or stop containers,Restart containers, Execute commands inside the container'
        },
        {
          title: 'Docker Image Manipulation Basics',
        },
        {
          title: 'How to Compose Projects Using Docker-Compose'
        },
        {
          title: 'Docker Compose Basics'
        },
        {
          title: 'How to Start Services in Docker Compose'
        },
        {
          title: 'How to List Services in Docker Compose'
        },
        {
          title: 'How to Execute Commands Inside a Running Service in Docker Compose'
        },
        {
          title: 'Run multiple services with docker-compose',
          
          description: "Create Redis , Mysql etc services in docker-compose. Use custom docker image and run it as a service with docker-compose"
        },
        {
          title : 'Docker volumes'
        },
        {
          title : 'Networking in Docker-compose'
        }
      ],
      slug: slugify("Docker crash course").toLowerCase()
    },
    
  ],
  experiences: [
    {
      organization: "Pathao",
      role: "software engineer",
      type: "Full-time",
      start_date: "2021-05-02",
      thumbnail: "https://pathao.com/wp-content/uploads/2019/03/cropped-Pathao-icon-.png",
      location: "Dhaka, Bangladesh",
      descriptions: [
        "Core Engineer of our allocation system which is responsible for paring user with best rider|foodman",
        "Developed food man slotting feature in our allocation system. Which ensures avaiablity of foodman in a perticular area. It reduced user cancelaction",
        "Developed ride bidding model in allocation system. User can offer fair and the rides can bid on that.",
        "Improved user search experince . Maintener of our inhouse search engine",
        "Develop ETA service which provides routes and estimation of duration accorinding to traffic data",
        "Developing the backend infratructure of various services",
        "Feature implemented in the fraud detection system",
        "Working with various data pipelines",
        "Responsible for service relaibility"
      ]
    },
    {
      organization: "Upwork",
      role: "Backend Engineer Golang",
      type: "Freelance",
      start_date: "2020-01-19",
      end_date: "2021-04-03",
      thumbnail: "https://blog.golang.org/go-brand/Go-Logo/PNG/Go-Logo_White.png",
      location: "Dhaka, Bangladesh",
      descriptions: [
        "Developed a backend of architecute of a ecommerce site by following microservices pattern",
        "Developed scalable websocket server",
        "Converted an existing monolith project into a microservice architecture",
        "Developed realtime locaion streaming server",
      ]
    },
    { organization: "Upwork",
      role: "Full stack developer",
      type: "Freelancer",
      start_date: "2018-04-01",
      end_date: "2021-01-01",
      thumbnail: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
      location: "Dhaka, Bangladesh",
      descriptions: [
        "Node js",
        "Reactjs",
        "Django",
        "Python",
      ]
    },
  ]
}

export default data;
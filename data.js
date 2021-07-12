import slugify from "slugify";

const data = {
  name: "Shahriar Islam",
  about: {
    title: "Hi, I'm S M Shahriar Islam",
    subtitles: [
      "Data Engineer @ Pathao"
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
    // {
    //   title: "Go beginners",
    //   topics: [
    //     "Go",
    //     "Graphql"
    //   ],
    //   video_url: 'https://www.youtube.com/embed/YS4e4q9oBaU',
    //   image_url: 'https://i.morioh.com/2020/03/24/fa7ceac4ffd5.jpg',
    //   short_description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
    //   description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est",
    //   start_date: "2021-06-14",
    //   registration_link: 'https://localhost:5001/graphql',
    //   contents: [
    //     {
    //       title: 'Go variables',
    //       description: 'In this section we will learn about go variables'
    //     },
    //     {
    //       title: 'Go decorators',
    //       description: 'In this section we will learn about go variables'
    //     },
    //     {
    //       title: 'Go structs',
    //       description: 'In this section we will learn about go variables'
    //     },
    //     {
    //       title: 'Go enumerators',
    //       description: 'In this section we will learn about go variables'
    //     },
    //     {
    //       title: 'Go iterators',
    //       description: 'In this section we will learn about go variables'
    //     },
    //     {
    //       title: 'Go concurrency',
    //       description: 'In this section we will learn about go variables'
    //     },
    //     {
    //       title: 'Go channels',
    //       description: 'In this section we will learn about go variables'
    //     }
    //   ],
    //   slug: slugify("Go beginners").toLowerCase()
    // },
    {
      title: "Docker crash course",
      topics: [
        "Docker"
      ],
      image_url: 'https://lh3.googleusercontent.com/4aYGCNAu7uLvXUVq96CFfygAKnIS1JqnarQD6eRMZ8ZPgfPtPFL3wwsIrjQT0B9H9g8dR7goKOEvp2PnabjB4ij0rFTJJpJPKfMyLQ-Z2fj9h_SLQgOosmkRsvPpZfRoPGTOu9au8l_TxKUmeHq5rw5T_ojOiuAnj4m7CLGmju656tTAvPXNz2J8peGWSwQs4PgozsUsJbaL6DePFKNgHEBbC77i5C7WyLTsL0Vl8PGBAm29m2w9OSwykFm6VTL5sYkJKlRijBAGUqOlIjmwg_lDY6qxS04ytVHdChUADqOAjoojU01C-nsfWWDn_E2wwtiBbIOcyNbbVYvkvrOxFAjdACO9y1UGqz4PEitbzHD0xkKmVTqx8G67LweoMAuttxDqDVYkuIkqfTrT7RgBZ2H3H0aDcVo_xKPRooDUGwi07r3ziBpwv4gk1PutQF_qL8r-HbDELLCEH5CalAC06IkS84adYWmqrOuFVhHt6Hb-4o8SXLUjUc3Zl2-a1g1tEeby8ZSkpJxKPqYPwqG_4M8ulr25k8_zQkodfBLVgckcxpHsqUm2a4fhhtUnoVmUinwMbBcdNjxy-05mF0bFgAqoYNVyw9sPkYKY4UX4YHlJhU44XdhAZjbUppXMxZC-9zUmfg0ZMAnlVm0pj7w9SowZPO5kw47zepFREzuswJb-IYithqVRSCvxC14AtocHdjoIpPvHmErX6p1iOt2HFuH5=w327-h252-no?authuser=1',
      short_description: 'Docker is one of the most demanding topics around the world. This course aims to provide a piece of in-depth knowledge about docker.You will learn how to containerize your applications. We will learn all the core concepts and all the commands related to docker with some real-world examples',
      description: "Docker containers are a flexible platform that allows you to easily build ship and run your applications in scalable and distributed environments. Docker is widely used and it is written in Go. In this crash course, we will learn from basic to advance level concepts related to docker.",
      start_date: "2021-07-17",
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
          description:'Run a container, publish port, Use Detached Mode, List containes, Rename containers, Kill or stop containers,Restart containers, Execute commands inside the container'
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
      role: "Data Engineer",
      type: "Full-time",
      start_date: "2021-05-02",
      thumbnail: "https://pathao.com/wp-content/uploads/2019/03/cropped-Pathao-icon-.png",
      location: "Dhaka, Bangladesh",
      descriptions: [
        "Developing the backend infratructure of various services",
        "Feature implemented in the fraud detection system",
        "Working with various data pipelines"
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
      thumbnail: "https://lh3.googleusercontent.com/sGNvIZgLekWTNAPXicmoYlrQSFKQC72dEwy8iYq15K9aw0uySJFT6gw5TnzoQGajym2pL2XFz__WBGe43Cikvq3SBshG2e5EuTT1eYXOubapzN3tPr1byCahCreqCUydA6txM6vAWVLjuISc_eLe9KCIA41pbVYbXnQksl9WK1DED_GxOPJNDM0nScsay0y0nwqxPEnT2Ce9BpltlJvwxQL775nvohOSYOy-cgKsEtO6mML_izeWA7d29GL70jHlF9ZYNqj-Y1wyaDwmyaKYoGI4NUaCgKIwCKS1WyVXWsozom7m3SZLGug1OBdRoa9rScERgMwtxCLxBHrh_qsIRUlaPtfGpfdgGpnXM5zvge_E-uu1gj_MUGLIdoGHdAIks8C2gpu9End_Gz0JGM18umjiEXvvtW5UVnWeXebDvXbB6Baf0RiAsIFplRJ2kQc3-M-R4-dY1fLyHDgvammrIBSdAPg7MmKG7T5EEYfpeLa1plFXuFZ-7F6Lr1W6BxYUiIuj9ut-dgCya4TP2BoFd9U7sUA6xjq5HtEP3KZXHlwwxlCgBw_zNxKPlCXxK-4nW4NAXFFamNvSqNbjPNSqm4EB4aQrN8EuFJ9GPDceXxwo9Twuu5dPrLKlfkKSuO7pNvrUlZ5g0PiMPsboWD_rrCW9hbrd4JEOsiVi3eM-ZufLRFaQWZ4nMIAYMTa2TtOAnI4-4Q0-nuob_MhpA5XQGbs6=w481-h331-no?authuser=1",
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
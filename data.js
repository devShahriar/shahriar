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
      link: "https://shudipshahriar.medium.com/"
    },
    {
      alt: "Medium",
      icon: "Medium",
      link: "https://stackoverflow.com/users/15832436/devShahriar"
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
      thumbnail: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBISEBIQFRAVFRcSFhYVFhAQFQ8QFRUWFhcVFRcYHSggGBolGxUVITEhJSktLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0lICUtLS0tLy0tLS0tLy0tLS8tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKcBLgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgQBAwYFB//EAEEQAAIBAgMEBgYIBAUFAAAAAAABAgMRBCExBRJBUQYTYXGBkSIyobHB0RVCUlNykuHwFmKTogcUI0OCM2Oys8L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QAMREAAgECAwQKAQQDAAAAAAAAAAECAxEEITESQVFhBRMiMoGRobHB8HEUUlPRFULh/9oADAMBAAIRAxEAPwDrwYM3PTPmwBcxcEXMmSAAuSBC5K4FzII3JXAuALi5BIAuAADJgAAyADAIykkrtpJat5JIqVNq0VrK/aoVJx/Mlb2kSko6ux1GEpu0U3+E37F0FaOPpP66X4rwv+ZI37yte6trfhbncJqSuiJRlF2kmvzkSBGFRNXi01zTTXsJEkAGLmLkkXJXFyNzFwRc2XMXIXMXFhtGy4IXFxYm5MEbi4IuSBG4uCbkjJEAjaMXFyAuScmbi5EAXJXFyIAuZFzABBm5m5EAm5suYuQuZATNlxc1i4JuTuSuarkrkE3J3NUq6TtaTfFRTlZdvITnZN8lfyPnX+K20KtKlhaVOcoqrv1Kji3F1Jehk2uHpPLu5HE5bKuW0afWyUUdZWxEpvelF7qeUc707c4tL0vby7TrRyzWeatm2uxI5PoBjqk8JN1Jyk1UklKT3pKnGENG9eCXefT9ndE6UKDrYqr1cd3rJelGnGnG13KU35ts8OVOVWpJt79/3/h9VCpGjSjGK3aL115+L5nLwk03uxluvPhGz4652/UKElKMoqEbO+7eTjOV1a8UrN8uN7Hs7W2XCnTp18NWjWwtR7qnGSqKLeUWpJveTeXfYrQx1TDYbF4rD0euxNGNNU47sqm4qkpRnU3Y5tJJXtwvna5zCEoVUk7Pj9+Tuc4VKT2ldaWf31RQpVcRTrb1aUHF23l1UqEoQva7Tb3oq+rzXPVHv3LlPF1MbseGJxlBUcQouputSW64yaTSlmlOK0fCXHJnk4CV6cb8Lw791uCfkkethqknJwk770/HO58/0jQhGMakFbOzW69rq3sWrkbmAbDy7mbmBYAgAAAAzLRGGADNzBJIEmLi5ndDQBi4uYAAAAIAAAAAAABCNS7sATAAAMpGDKAJpCxG4uAYaMGWylXlW3nuxW7wtuNvLjeS43OZy2Vezf4VyynT25Wul+XZFw5bpZsRYinClV33GMv9KUOrUoZPJ3/ljnzseu8dUj68Y+MZU/7s4t+JHESdRrfjHdjml63paXd1yv5syV8ZTjB8eDT9nbz8mehhej60qkX/AK370ZL0avnyseDsbZiwtGFOMZNbzk95xbk24zs7ZZqG73s+u7Y2fQ2lgJ0XOSo1oxanB2lCUZKcWu1SisnysfO4YRTe7BK/GWqpdvfyXwL1KhiKbbpVHG+b3Jypbz5uHqt9uphoKq4uSi2m933Q9ivUowkqbmk0lrf1a38j0NobJo7M2UsHTqTqSlPrE6jW9NqpGrUm7aRSjbva4s87YWxK+FrV8VDF168vVilFdRCN05U5R3rSz3VvRs4+ZmngZynv1pOTyv6Uqkp2zScnpFP6qyPTU3u7t5bt77t3u37tDRHDTm9qWXLf+d/3Mx1OkKcOxHtc87X9L/nwK+2tvV60FCdJwheN4xu9+W8t3em8t3es7LsNWEpbsFF65t8t6Tbduy7NuN9T/lD/ANkQbKVCNNuV23zt8JHmYnGTrRUWkks8r68c2wiaIAvMRsua2AABz8wGAZloYevhY0KrJ2Vl7TeCWrGYslcgAQTuYuRAAYBGdRLW4JEaibsTNDp8tUbKU7rtIDRMAEkAAAGic23lkiCT55kg0QWGLy5sXlzZlBsWJMXlzZtpTbyZCxmjr4BIh6G4G3D4ec5bsIuT7OHfyPdwnRp61Z+Efmzmc4x1Z1SoVKvdX9HOg7WhsahH/bTfN3l78i0sHT+xD8sfkVPErga49Gz3yX3yPn7KeIwVPK0bNzirLeStvJy9FO3qqR9Bx9DDxjvVacUm1HKLbbfBKKu/0OV2hCi6ydB3pxWt96MpvjF8krrxfImNWNTstfJzPC1MP21LlldX5czRCCSSikktEkkl4EgC0ygAAGnF/UXOa9icv/kyRxCbnBJN66a7ztGOXH1noezg+j9SecmoLtzfkvmRtxWrOupqTtsxf1s8gHWUujdJes5S8d1ewsQ2Jh1/t+bk/iVvERL49H1XrZeP9I4sHZz2Fh39S3dKXzKOJ6Mx/wBubT5PNeaJWIgyJYCtHNWf4ZzQLGMwVSk7VItcnqn3MqqSZanfQxuLTs1mEs+wkASQCO+r24katS2mpr3PPUg6SLAIUp37yUpW1JItuNWIk01Z8zS5N6mzEvNeJquctlkVkWUiE1Z7y8TN1n+hmHDT2ZknOhl1uRKErmmerJ0OJJDSsbQWaWAqySlGnJp6NJ2ZP6MrfdT8mRtLiSqc3pF+TPMTzEn369naXFsev91PyZn6Hr/dz/KyNqPFeZ31cuD8mUYvv9hmUte35F36Gr/dy/KzRicHODSnFxbva6ava4TT3hwazafkzW5a66dh6Ww9kSrPed40lk5fafKPzIbH2U61Sz9SOcn2cl2s7mlTUYqMUlFKyS4IprVdnJamrCYVVO1Lu+5rw2GhTjuwikvf2t8SwAYz2EklZAGjEYmEFecoxXa0r9xVjtnDt262PjdLzZKTeiIc4p2bXmeV06xO5QhZtVOsTjbhaMlJ+T82jncHUUoRcbJWtZcLcD1f8QKW9To1YtOEd6Lad16e60/7GvE5HA4t03zi9V8UbcPTWw5LU8fpCrLrlF6JZeO/48D3wQpVVJXi7omWmUYOkpznCTnGWsLNWcLK+TVnne/H2G2lhKkqjpKN5JJ72ahuPSTfLJ+jrdcszUsM6kowhlUveMlrTa1n3LlxulxOlwWAdOcpyqObaUVdKKilflxfHhkslnfBLradVtSvF8d33dyPWpRo1qC2o2ksrqyv93872Gz9lwpPe9aq1ZzetuUV9Vfttnr4ZZFVIvQjZJHMnc004pZIkDXUqRiryaS5tpL2lP6Yw97ddDzfvISb0O3KMdWegDTQrwmrwlGS5xafuNxB0nc1VaUZRcZJOL1TOR23sh0fThd0m/GHY+ztOzNdWmpJxkrxas1zRZTqODKK+HjWjZ67mfPCDqWuXNqYR0akocNYvnF6fLwKKWZvTTV0fPuLi2nuIxXF6kjD043M5X0dviSdEZLitSfWXV1+2RXje/xEuJBBKotP3yNdVWZsrcDVZfuwCEJ3eiNsdeBsjhkuZuoUoby321G+ds3bsFyWr6FOpDiToq2bSfZwfedSsdg7W6teMEzP0jhPul/TiVdY/wBrNP6aNrdZEox6SVUrKNOyy0lkjP8AEtb7MPKRd+ksJ90v6cR9JYT7pf04nFo/sZfef86POj0prX9Wn5S+Zs/iat9mHlIuraGE+6X9OJj6Swn3S/JH5kWj+xi8/wCdFNdJq32YeUjyMdip1qilLOUnZJaLKyS8z19qYvDyp7tKmoybWdoxslnk0aej+DU68W9IJy8dF7X7DuOzGLls2KJupUmqbntJ/fQ6XZeCVGlGC11k+cnr8vAvAGNtt3Z7cYqKSWiBzu3ekG43To2c9HLVRfJc2ejtnFOnRbTtKXox7G+PgrnF9Uu3mX0aSl2mYcZiHDsQ13letOUnvTbcnxbuyFi9QwjnKMY6tq375Ht/wr/3Vz9X9TTKpGOTZ50KNSpnFX+82c1RqtKUdYSylF6SXbyfJ6qx5GOoKm9bxaydnaKWqnZWTXPTPwXeQ6KWv/q6/wAv6lHE7HVGtDelvRlCpw3bSvB215J+RRVxKpwc45vhxNNHA1Ks405q0eOV1k9M9/Dx1OMp1Gs4trudja8ZU+3I6fBdE6daLlGo4XlN5K6tvytk3bSxvh0CV1vV24cVuJNrle+XkXRxNOUU2ZpdH11JxWl7X08dS10S2f1dHrJX6yraTb1UPqLyd/E9s3f5d9hONDmY5Su7s9mFLZiorREcPT4s8rbm3eqfV07OpxfCHzZ6W08T1VKUlrpH8T0/fYcPKF3dttvXtbzuWUaal2mZ8XXdNbENWaMTXnN71STk+16d3I1NFx0l8TDpL4mvQ8l3buzRQqzhJShJxlzTt5nbbC2r10WpWVSOttJL7SOQdJFzZNTcr02m9d19qll8fYVVYKUeZow1aVOa4PU7kAGE9053pbhrwhNaxdn3P9V7Tlt07npDG+Hn2br/ALkcbuG2hK8DxcfC1W63pFa2uhFSztZFrqV2kFhle+ZcZLGpLTQTeRY6ldpidFMA0TlmmRm87/ItqBndBHgZABB0AAAD2NnbGjUgpznu30S3dObueOLESTaydjunKMXeSv42Oj/h6n96/wC0fw7T+9l/ac5YWOOrl+70L+upfxrzZf2vgY0pRjGTldX4ZZ9h6PRSH/Vf4V72c+dD0UeVVfhf/kRUTVPUnDNOumlZZ5eDOhABiPZOd6VTzpLh6T9yOfOj6VUnuwnwTcX42a93tOcNtHuI8TF5VpeHsdB0ZwnrVX3R+L+HmdEeFgNsUIUoR9JNJJqzefHTtLH07Q+0/wAsiipGcpN2Z6FCpSp01HaXnvPVKuMwcKsd2aTXufNPVPN5rmVPp2h9qX5ZHpxd0n7ypxa1RojUhPutMrYPBxppRhlFaLP3vNlsAg6sAACTn+lVTKnHg235WXxZzp03SiheEJr6rs+6X6peZzJto9xHi4xPrnfl7AAFplBvwML1aaXFx95oPa6NYRubqtZRyXbJ/Je85nLZi2W0YOc1FHUAA889887b8rYefbZf3I446XpRXtCEOMnveEf1fsOaNlBdg8fHSvVtwSAALjGAAAAAAAAAAAAAAAAAAD1ujVfdrbr0lFrxWa+J5JOlUcZKS1Tuu9ESjtJo7pz2JqXA78FbBYlVIKceOq5Piiyedax9Ammro04ijGcXCSyascftHZs6TzV4cJLR9/JnbGO8sp1HAor4eNXXJ8T58ZjFt2Sbb4LNs7WWzqLzdOPlY3UcPCHqRjHuSRd+oXAxro+V85L75Hi7G2M4tVKqzWcY8nzfb2HQAGeUnJ3Z6FKlGnHZiCricXGEqcXrN2XZ2+dl4k8TiIwi5Sdkvb2LtONxmLlUqObyfD+VLRI7pU9t8inE4jqkra/B3IKWzMYqtNS+sspLlIulbTTszTGSkrrQ11qSlFxkrpqz7jkNpbMnSbdm6fCXL8XJnZg7p1HB5FNfDxqrPJ8T56DtqmzaLd3Tjfsy9xKhgaUM4winztn5l36hcDD/AI+d+8vU5zZuxp1GnNOMO3Jy7l8TqaNNRioxVorJI2AonUctTdRoRpLLzBjvMnO9INp60oP8bXu+ZEIuTsjurVjSjtSPL2ri+tqykvVXox/CvnmymAegkkrI8GUnJtsAAHIAAAAAABohTbN0Y2AMgGudXkAbAVWzABbuLlQAFq4uVkjfCnbvAPR2XtCVGV9YP1l8V2nW4bERqRUoNNe7sfJnCG3D4uVJ70JNP2Psa4lVSipZrU14fFOl2XmvY70HN4PpRF5VYNPms15ar2nqUtsUJaVYLv8AR95ldOS1R6ccRTlpL4PQBT+kqP3tP88fmVq23qEfr73ZFN+3QhRb0R26kI6teZ6pVxuNhSjvVJJclxk+xHPYzpRJ5Uobv80s34LQ8GrVlOW9OTlJ8XmWwoN94yVcdFZQz9j0to7SdaWbtFerG+na+bKhCnTt3kzWkkrI8uUnJ3epawGMlSnvR00a4SR1+CxkKsd6D71xi+TRwxmGKlTe9BtS7PiVVKSmaMPiXSyeaPoIOXwfSfhVh/yXxTPWo7aw8tKkV+K8feZXTktUepDEUp6S+D0gVf8AP0tesp2/HD5mirtnDx1qxfdeXuOVFvRFjnFateZ6JCU0ldtJLVvJI5/FdKILKlByfOXory1PBx+06tX15ej9lZRXhx8S2NGT1yMtTG04rs5s93au307wovsc88u75ngmqjDibTVCCirI8urVlUleQAIVJWR0VmXURjrUaDABY61DrUVwAWOtQ61FcAFsxKVtTJhxQBonUv3ECz1a5Dq1yAKwLPVrkOrXIArE4QuburXIkkAYjGxkAAjOdjRKVze4LkNxcgCuCx1a5Dq1yAKwLPVrkOrXIkFdI304W7ySikZIAAABGpO3eV2yw4IdWuQBWBZ6tch1a5AFYFnq1yHVrkSCuSpwv3G7q1yMpEAyAAAytOV2WGrkeqQBXBY6pDqkAVwWOqQ6pAFcFjqkOqQBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==",
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
      thumbnail: "https://pathao.com/wp-content/uploads/2019/03/cropped-Pathao-icon-.png",
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
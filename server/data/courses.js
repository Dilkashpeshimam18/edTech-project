const courseModel = [
    {
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            }
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
        ]
    },
    {
        id: 2,
        name: 'Digital Photography Basics',
        instructor: 'Ella Moore',
        description: 'Master the art of digital photography and enhance your visual storytelling skills.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://www.thoughtco.com/thmb/ghwaW1EpTXfWbMfRxxtpG-I8sjk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/photography-2188818_1920-331a85a054c846199636a7a56735a7a9.jpg',
        duration: '6 weeks',
        schedule: 'Saturdays, 10:00 AM - 12:00 PM',
        location: 'In-Person',
        prerequisites: ['Digital camera or smartphone with a camera'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Photography',
                content: 'Understanding camera settings and composition.'
            },
            {
                week: 2,
                topic: 'Photography Techniques',
                content: 'Exploring various photography techniques and styles.'
            }
        ],
        students: [
            {
                id: 201,
                name: 'Grace Turner',
                email: 'grace@example.com',
            },
            {
                id: 202,
                name: 'Sam Brown',
                email: 'sam@example.com',
            },
        ]
    },
    {
        id: 3,
        name: 'Data Visualization with Tableau',
        instructor: 'Oliver Green',
        description: 'Learn data visualization techniques using Tableau for business analytics.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://cronuts.digital/wp-content/uploads/2023/01/tableau-logo.jpg',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 7:30 PM - 9:30 PM',
        location: 'Online',
        prerequisites: ['Basic data analysis knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Data Visualization',
                content: 'Understanding the importance of data visualization.'
            },
            {
                week: 2,
                topic: 'Tableau Basics',
                content: 'Getting started with Tableau and creating simple visualizations.'
            }
        ],
        students: [
            {
                id: 301,
                name: 'Sophie Lee',
                email: 'sophie@example.com',
            },
            {
                id: 302,
                name: 'James Carter',
                email: 'james@example.com',
            },
        ]
    },
    {
        id: 4,
        name: 'iOS App Development with Swift',
        instructor: 'Liam Johnson',
        description: 'Build iOS apps using Swift, Apple\'s powerful programming language.',
        enrollmentStatus: 'Open',
        thumbnail: 'data:image/jpeg;base64,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',
        duration: '12 weeks',
        schedule: 'Tuesdays and Thursdays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Getting Started with Swift',
                content: 'Introduction to Swift and Xcode.'
            },
            {
                week: 2,
                topic: 'iOS App Development Fundamentals',
                content: 'Building user interfaces and handling user interactions.'
            }
        ],
        students: [
            {
                id: 401,
                name: 'Ava Miller',
                email: 'ava@example.com',
            },
            {
                id: 402,
                name: 'Noah Wilson',
                email: 'noah@example.com',
            },
        ]
    },
    {
        id: 5,
        name: 'Artificial Intelligence and Ethics',
        instructor: 'Sophia White',
        description: 'Explore the ethical implications of AI and its impact on society.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://miro.medium.com/v2/resize:fit:696/1*vUY5-qaydI7adsXCQjxoAQ.jpeg',
        duration: '8 weeks',
        schedule: 'Wednesdays, 5:00 PM - 7:00 PM',
        location: 'In-Person',
        prerequisites: ['Basic knowledge of artificial intelligence'],
        syllabus: [
            {
                week: 1,
                topic: 'Ethics in AI',
                content: 'Understanding ethical concerns in AI development and deployment.'
            },
            {
                week: 2,
                topic: 'AI in Society',
                content: 'Examining the societal impact of AI technologies.'
            }
        ],
        students: [
            {
                id: 501,
                name: 'Olivia Davis',
                email: 'olivia@example.com',
            },
            {
                id: 502,
                name: 'Ethan Harris',
                email: 'ethan@example.com',
            },
        ]
    },
    {
        id: 6,
        name: 'Digital Marketing Analytics',
        instructor: 'Isabella Smith',
        description: 'Explore data-driven digital marketing strategies and analytics tools.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://digitalcatalyst.in/blog/wp-content/uploads/2022/03/major-components-of-digital-marketing.png',
        duration: '10 weeks',
        schedule: 'Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of digital marketing'],
        syllabus: [
            {
                week: 1,
                topic: 'Digital Marketing Fundamentals',
                content: 'Introduction to digital marketing channels and strategies.'
            },
            {
                week: 2,
                topic: 'Marketing Analytics with Google Analytics',
                content: 'Using Google Analytics for data analysis and insights.'
            }
        ],
        students: [
            {
                id: 601,
                name: 'Liam Taylor',
                email: 'liam@example.com',
            },
            {
                id: 602,
                name: 'Mia Turner',
                email: 'mia@example.com',
            },
        ]
    },

    {
        id: 7,
        name: 'Introduction to Cybersecurity',
        instructor: 'Daniel Harris',
        description: 'Learn the basics of cybersecurity, threat detection, and network security.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://www.neit.edu/wp-content/uploads/2022/10/Cyber-Security-Icon-Concept-2-1.jpeg',
        duration: '8 weeks',
        schedule: 'Saturdays, 9:00 AM - 11:00 AM',
        location: 'Online',
        prerequisites: ['Basic computer knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Cybersecurity Fundamentals',
                content: 'Understanding the importance of cybersecurity.'
            },
            {
                week: 2,
                topic: 'Network Security',
                content: 'Exploring network vulnerabilities and security measures.'
            }
        ],
        students: [
            {
                id: 701,
                name: 'Ella Brown',
                email: 'ella@example.com',
            },
            {
                id: 702,
                name: 'Oliver Miller',
                email: 'oliver@example.com',
            },
        ]
    },
    {
        id: 8,
        name: 'Data Engineering with Apache Spark',
        instructor: 'Sophia Davis',
        description: 'Learn data engineering techniques using Apache Spark for big data processing.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://miro.medium.com/v2/resize:fit:1200/0*WBxeZnyom3O6dRtM.png',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of data processing'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Big Data',
                content: 'Understanding big data challenges and solutions.'
            },
            {
                week: 2,
                topic: 'Working with Apache Spark',
                content: 'Setting up Apache Spark and processing data.'
            }
        ],
        students: [
            {
                id: 801,
                name: 'Aiden Turner',
                email: 'aiden@example.com',
            },
            {
                id: 802,
                name: 'Lily Johnson',
                email: 'lily@example.com',
            },
        ]
    },
    {
        id: 9,
        name: 'Advanced JavaScript Development',
        instructor: 'Noah Smith',
        description: 'Take your JavaScript skills to the next level with advanced concepts and techniques.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://i.ytimg.com/vi/lMKhJPbK0HE/sddefault.jpg',
        duration: '12 weeks',
        schedule: 'Tuesdays and Thursdays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Intermediate JavaScript knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Advanced Functions and Closures',
                content: 'In-depth exploration of JavaScript functions and closures.'
            },
            {
                week: 2,
                topic: 'Asynchronous Programming',
                content: 'Working with asynchronous operations and promises.'
            }
        ],
        students: [
            {
                id: 901,
                name: 'Liam Davis',
                email: 'liam@example.com',
            },
            {
                id: 902,
                name: 'Emma Harris',
                email: 'emma@example.com',
            },
        ]
    },
    {
        id: 10,
        name: 'Blockchain Development with Ethereum',
        instructor: 'Ava White',
        description: 'Build decentralized applications (DApps) using Ethereum blockchain technology.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg',
        duration: '8 weeks',
        schedule: 'Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of blockchain and smart contracts'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Ethereum and Solidity',
                content: 'Getting started with Ethereum and Solidity language.'
            },
            {
                week: 2,
                topic: 'Smart Contracts and DApp Development',
                content: 'Creating and deploying smart contracts for DApps.'
            }
        ],
        students: [
            {
                id: 1001,
                name: 'Olivia Smith',
                email: 'olivia@example.com',
            },
            {
                id: 1002,
                name: 'Ethan Davis',
                email: 'ethan@example.com',
            },
        ]
    },
   
    {
        id: 11,
        name: 'Game Development with Unity',
        instructor: 'Lucas Martinez',
        description: 'Learn game development using Unity and C# to create your own video games.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://blog.potenzaglobalsolutions.com/wp-content/uploads/2021/06/5-Rarely-Known-Advantages-And-Disadvantages-Of-Unity-Game-Development.jpg',
        duration: '12 weeks',
        schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Unity',
                content: 'Getting started with Unity and game development basics.'
            },
            {
                week: 2,
                topic: 'Game Mechanics and Scripting',
                content: 'Implementing game mechanics and scripting with C#.'
            }
        ],
        students: [
            {
                id: 1201,
                name: 'Ella Turner',
                email: 'ella@example.com',
            },
            {
                id: 1202,
                name: 'Oliver Smith',
                email: 'oliver@example.com',
            },
        ]
    },
    {
        id: 12,
        name: 'Advanced Data Science with Python',
        instructor: 'Sophia Harris',
        description: 'Take your data science skills to the next level with advanced Python techniques.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230318230239/Python-Data-Science-Tutorial.jpg',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Intermediate data science knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Advanced Data Analysis',
                content: 'Advanced data analysis techniques using Python libraries.'
            },
            {
                week: 2,
                topic: 'Machine Learning Algorithms',
                content: 'In-depth study of machine learning algorithms with Python.'
            }
        ],
        students: [
            {
                id: 1301,
                name: 'Aiden Smith',
                email: 'aiden@example.com',
            },
            {
                id: 1302,
                name: 'Lily Davis',
                email: 'lily@example.com',
            },
        ]
    },
    {
        id: 13,
        name: 'UI/UX Design Fundamentals',
        instructor: 'Noah Turner',
        description: 'Learn the principles of UI/UX design and create user-friendly interfaces.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://mdevelopers.com/storage/0_success-projects-ujj_d3a50aee.webp',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic design knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'UI Design Principles',
                content: 'Understanding user interface design principles.'
            },
            {
                week: 2,
                topic: 'UX Research and Prototyping',
                content: 'Conducting user research and creating prototypes.'
            }
        ],
        students: [
            {
                id: 1401,
                name: 'Liam Smith',
                email: 'liam@example.com',
            },
            {
                id: 1402,
                name: 'Emma Turner',
                email: 'emma@example.com',
            },
        ]
    },
    {
        id: 14,
        name: 'Introduction to Robotics',
        instructor: 'Ava Johnson',
        description: 'Explore the world of robotics and learn how to build and program robots.',
        enrollmentStatus: 'Closed',
        thumbnail: 'data:image/jpeg;base64,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',
        duration: '10 weeks',
        schedule: 'Saturdays, 10:00 AM - 12:00 PM',
        location: 'In-Person',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Robotics',
                content: 'Basics of robotics, components, and applications.'
            },
            {
                week: 2,
                topic: 'Robot Building and Programming',
                content: 'Building and programming robots for various tasks.'
            }
        ],
        students: [
            {
                id: 1501,
                name: 'Olivia Turner',
                email: 'olivia@example.com',
            },
            {
                id: 1502,
                name: 'Ethan Smith',
                email: 'ethan@example.com',
            },
        ]
    },
    
    {
        id: 15,
        name: 'Business Analytics and Data Visualization',
        instructor: 'Ella Johnson',
        description: 'Learn data-driven business analytics and data visualization techniques.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://i0.wp.com/www.yellowfinbi.com/assets/files/2022/07/what_is_data_visualization_purpose_in_business_intelligence_1.png?fit=1200%2C627&ssl=1',
        duration: '10 weeks',
        schedule: 'Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of data analysis'],
        syllabus: [
            {
                week: 1,
                topic: 'Business Data Analysis',
                content: 'Analyzing business data for insights and decision-making.'
            },
            {
                week: 2,
                topic: 'Data Visualization with Tableau',
                content: 'Creating interactive data visualizations with Tableau.'
            }
        ],
        students: [
            {
                id: 1701,
                name: 'Aiden Turner',
                email: 'aiden@example.com',
            },
            {
                id: 1702,
                name: 'Lily Smith',
                email: 'lily@example.com',
            },
        ]
    }
    
];

module.exports=courseModel;
const courseModel = [
    {
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
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
        thumbnail: 'your.image.here',
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
        thumbnail: 'your.image.here',
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
        thumbnail: 'your.image.here',
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
        thumbnail: 'your.image.here',
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
        thumbnail: 'your.image.here',
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
        thumbnail: 'your.image.here',
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
        thumbnail: 'your.image.here',
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
        thumbnail: 'your.image.here',
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
        thumbnail: 'your.image.here',
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
        name: 'Art History: Renaissance to Modern Art',
        instructor: 'Sophie Johnson',
        description: 'Explore the history of art from the Renaissance to the modern era.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'In-Person',
        prerequisites: ['None'],
        syllabus: [
            {
                week: 1,
                topic: 'Renaissance Art',
                content: 'Introduction to the art of the Renaissance period.'
            },
            {
                week: 2,
                topic: 'Impressionism and Post-Impressionism',
                content: 'Exploring Impressionist and Post-Impressionist art movements.'
            }
        ],
        students: [
            {
                id: 1101,
                name: 'Liam Miller',
                email: 'liam@example.com',
            },
            {
                id: 1102,
                name: 'Mia Harris',
                email: 'mia@example.com',
            },
        ]
    },
    {
        id: 12,
        name: 'Game Development with Unity',
        instructor: 'Lucas Martinez',
        description: 'Learn game development using Unity and C# to create your own video games.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
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
        id: 13,
        name: 'Advanced Data Science with Python',
        instructor: 'Sophia Harris',
        description: 'Take your data science skills to the next level with advanced Python techniques.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
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
        id: 14,
        name: 'UI/UX Design Fundamentals',
        instructor: 'Noah Turner',
        description: 'Learn the principles of UI/UX design and create user-friendly interfaces.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
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
        id: 15,
        name: 'Introduction to Robotics',
        instructor: 'Ava Johnson',
        description: 'Explore the world of robotics and learn how to build and program robots.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
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
        id: 16,
        name: 'Digital Art and Illustration',
        instructor: 'Sophie Davis',
        description: 'Learn digital art techniques and create stunning illustrations and digital artwork.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '12 weeks',
        schedule: 'Fridays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic drawing skills'],
        syllabus: [
            {
                week: 1,
                topic: 'Digital Art Tools and Software',
                content: 'Introduction to digital art tools and software.'
            },
            {
                week: 2,
                topic: 'Digital Painting Techniques',
                content: 'Mastering digital painting techniques and styles.'
            }
        ],
        students: [
            {
                id: 1601,
                name: 'Liam Harris',
                email: 'liam@example.com',
            },
            {
                id: 1602,
                name: 'Mia Smith',
                email: 'mia@example.com',
            },
        ]
    },
    {
        id: 17,
        name: 'Business Analytics and Data Visualization',
        instructor: 'Ella Johnson',
        description: 'Learn data-driven business analytics and data visualization techniques.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
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
    },


    {
        id: 18,
        name: 'Artificial Intelligence in Healthcare',
        instructor: 'Sophia Davis',
        description: 'Explore AI applications in the healthcare industry and their impact on patient care.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '8 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of healthcare'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to AI in Healthcare',
                content: 'Overview of AI applications in healthcare and healthcare data.'
            },
            {
                week: 2,
                topic: 'Medical Image Analysis with AI',
                content: 'Using AI for medical image analysis and diagnosis.'
            }
        ],
        students: [
            {
                id: 2101,
                name: 'Oliver Harris',
                email: 'oliver@example.com',
            },
            {
                id: 2102,
                name: 'Lily Smith',
                email: 'lily@example.com',
            },
        ]
    },
    {
        id: 19,
        name: 'Data Science for Social Impact',
        instructor: 'Noah Turner',
        description: 'Learn how data science can be used for social good and address societal challenges.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '10 weeks',
        schedule: 'Tuesdays and Thursdays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Basic data science knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Data for Social Impact',
                content: 'Understanding the role of data science in addressing societal issues.'
            },
            {
                week: 2,
                topic: 'Data Analysis for Social Good',
                content: 'Analyzing data to create insights and solutions for social challenges.'
            }
        ],
        students: [
            {
                id: 2201,
                name: 'Ava Turner',
                email: 'ava@example.com',
            },
            {
                id: 2202,
                name: 'Liam Harris',
                email: 'liam@example.com',
            },
        ]
    },
    {
        id: 20,
        name: 'Introduction to 3D Printing and Design',
        instructor: 'Ella Smith',
        description: 'Discover the world of 3D printing and learn how to design and create 3D-printed objects.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '8 weeks',
        schedule: 'Thursdays, 6:00 PM - 8:00 PM',
        location: 'In-Person',
        prerequisites: ['Basic computer skills'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to 3D Printing',
                content: 'Overview of 3D printing technology and its applications.'
            },
            {
                week: 2,
                topic: '3D Modeling and Printing',
                content: 'Creating 3D models and printing them using 3D printers.'
            }
        ],
        students: [
            {
                id: 2301,
                name: 'Olivia Turner',
                email: 'olivia@example.com',
            },
            {
                id: 2302,
                name: 'Ethan Harris',
                email: 'ethan@example.com',
            },
        ]
    },
];

module.exports=courseModel;
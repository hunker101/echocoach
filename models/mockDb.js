const db = {
    users: [
        { 
            id: 1, 
            name: 'John Doe', 
            email: 'john@example.com', 
            level: 'Intermediate', 
            preAssessmentResult: 100,
            photoURL: 'https://i.pravatar.cc/150?img=12',
            createdAt: new Date('2024-01-15T10:30:00Z').toISOString(),
            stats: { speaking: 78, listening: 85, reading: 65, writing: 70 } 
        },
        { 
            id: 2, 
            name: 'Jane Smith', 
            email: 'jane@admin.com', 
            level: 'Advanced', 
            preAssessmentResult: 100,
            photoURL: 'https://i.pravatar.cc/150?img=47',
            createdAt: new Date('2023-11-20T14:15:00Z').toISOString(),
            stats: { speaking: 95, listening: 98, reading: 92, writing: 96 } 
        },
        { 
            id: 3, 
            name: 'Robert Brown', 
            email: 'bob@school.edu', 
            level: 'Pre-Intermediate', 
            preAssessmentResult: 100,
            photoURL: 'https://i.pravatar.cc/150?img=33',
            createdAt: new Date('2024-02-08T09:45:00Z').toISOString(),
            stats: { speaking: 88, listening: 90, reading: 85, writing: 92 } 
        },
        { 
            id: 4, 
            name: 'Alice Wonderland', 
            email: 'alice@wonder.com', 
            level: 'Beginner', 
            preAssessmentResult: 100,
            photoURL: 'https://i.pravatar.cc/150?img=68',
            createdAt: new Date('2024-03-22T16:20:00Z').toISOString(),
            stats: { speaking: 45, listening: 50, reading: 60, writing: 40 } 
        }
    ],
    
    pendingModules: [
        {
            id: 101,
            userId: 1,
            userName: "John Doe",
            userEmail: "john@example.com",
            userRole: "Student",
            userRank: "Beginner",
            status: "Pending", 
            // Added Module 2 and 3 for testing navigation
            modules: [
                {
                    moduleId: 1,
                    title: "Module 1: Foundations",
                    scores: { overall: 5.5, speaking: 5.0, listening: 6.0, reading: 5.5, writing: 5.5 },
                    content: {
                        writing: { title: "Writing", desc: "Develop coherent and well-structured responses", question: "Describe a memorable trip you took." },
                        reading: { title: "Reading", desc: "Boost your comprehension and skimming skills", question: "Read the passage about Climate Change." },
                        listening: { title: "Listening", desc: "Enhance your focus and audio understanding", question: "Listen to the conversation in a cafe." },
                        speaking: { title: "Speaking", desc: "Build fluency, improve pronunciation", question: "Which area do you find most challenging?" }
                    }
                },
                {
                    moduleId: 2,
                    title: "Module 2: Business English",
                    scores: { overall: 6.0, speaking: 6.0, listening: 5.5, reading: 6.5, writing: 6.0 },
                    content: {
                        writing: { title: "Writing", desc: "Email etiquette and formal reports", question: "Write a formal email to a client." },
                        reading: { title: "Reading", desc: "Analyzing business reports", question: "Summarize the quarterly financial report." },
                        listening: { title: "Listening", desc: "Meeting comprehension", question: "Listen to the board meeting minutes." },
                        speaking: { title: "Speaking", desc: "Presentation skills", question: "Present a new product idea." }
                    }
                },
                {
                    moduleId: 3,
                    title: "Module 3: Travel Essentials",
                    scores: { overall: 5.0, speaking: 5.5, listening: 5.0, reading: 5.0, writing: 4.5 },
                    content: {
                        writing: { title: "Writing", desc: "Filling out travel forms", question: "Complete the visa application form." },
                        reading: { title: "Reading", desc: "Reading signs and schedules", question: "Find the train to London on the schedule." },
                        listening: { title: "Listening", desc: "Airport announcements", question: "Identify the boarding gate change." },
                        speaking: { title: "Speaking", desc: "Asking for directions", question: "Ask a local how to get to the museum." }
                    }
                }
            ]
        },
        {
            id: 102,
            userId: 4,
            userName: "Alice Wonderland",
            userEmail: "alice@wonder.com",
            userRole: "Student",
            userRank: "Intermediate",
            status: "Validated",
            modules: [
                {
                    moduleId: 1,
                    title: "Module 1",
                    scores: { overall: 6.5, speaking: 6.5, listening: 6.0, reading: 7.0, writing: 6.5 },
                    content: {
                        writing: { title: "Writing", desc: "Essay composition", question: "Write about AI." },
                        reading: { title: "Reading", desc: "Speed reading", question: "Read the news article." },
                        listening: { title: "Listening", desc: "Active listening", question: "Listen to the news." },
                        speaking: { title: "Speaking", desc: "Public speaking", question: "Give a short speech." }
                    }
                }
            ]
        }
    ],
    
    finalAssessments: [
        { 
            id: 1, 
            type: 'Writing', 
            difficulty: 'Standard',
            taskNumber: 1,
            title: 'Writing exam 1',
            prompt: 'The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
            description: 'The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
            image: 'https://placehold.co/600x400?text=Writing+Task+1'
        },
        { 
            id: 10, 
            type: 'Writing', 
            difficulty: 'Standard',
            taskNumber: 1,
            title: 'Writing exam 2',
            prompt: 'Some people think that it is better to educate boys and girls in separate schools. Others, however, believe that boys and girls benefit more from attending mixed schools. Discuss both views and give your own opinion.',
            description: 'Some people think that it is better to educate boys and girls in separate schools. Others, however, believe that boys and girls benefit more from attending mixed schools. Discuss both views and give your own opinion.',
            image: null
        },
        { 
            id: 11, 
            type: 'Writing', 
            difficulty: 'Standard',
            taskNumber: 2,
            title: 'Writing exam 3',
            prompt: 'The graph illustrates the proportion of the population aged 65 and over between 1940 and 2040 in three different countries. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
            description: 'The graph illustrates the proportion of the population aged 65 and over between 1940 and 2040 in three different countries. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
            image: 'https://placehold.co/600x400?text=Population+Graph'
        },
        // Reading Exams (with passage and questions structure)
        { 
            id: 20, 
            type: 'Reading', 
            difficulty: 'Standard',
            title: 'Reading exam 1',
            prompt: 'Read the following passage about climate change and answer the questions that follow. The passage discusses the impact of human activities on global temperatures and weather patterns.',
            description: 'Read the following passage about climate change and answer the questions that follow. The passage discusses the impact of human activities on global temperatures and weather patterns.',
            image: 'https://placehold.co/600x400?text=Reading+Passage+1',
            passage: 'Climate change is one of the most pressing issues of our time. Over the past century, human activities have significantly increased the concentration of greenhouse gases in the atmosphere. The burning of fossil fuels, deforestation, and industrial processes have all contributed to this phenomenon. Scientists have observed a steady rise in global average temperatures, leading to melting ice caps, rising sea levels, and more frequent extreme weather events. Understanding the causes and effects of climate change is crucial for developing effective strategies to mitigate its impact and adapt to the changes that are already occurring.',
            questions: [
                {
                    id: 2001,
                    question: 'What is the main cause of increased greenhouse gases in the atmosphere?',
                    optionA: 'Natural weather patterns',
                    optionB: 'Human activities such as burning fossil fuels',
                    optionC: 'Solar radiation changes',
                    optionD: 'Ocean current variations',
                    correctAnswer: 2,
                    tags: 'main_idea, comprehension, section_1'
                },
                {
                    id: 2002,
                    question: 'According to the passage, what is one observed effect of climate change?',
                    optionA: 'Decreased global temperatures',
                    optionB: 'Melting ice caps and rising sea levels',
                    optionC: 'Reduced extreme weather events',
                    optionD: 'Increased forest growth',
                    correctAnswer: 2,
                    tags: 'detail_recognition, section_1'
                }
            ]
        },
        { 
            id: 21, 
            type: 'Reading', 
            difficulty: 'Standard',
            title: 'Reading exam 2',
            prompt: 'This passage explores the history and development of the English language, from its origins to its current status as a global language. Answer the comprehension questions based on the text.',
            description: 'This passage explores the history and development of the English language, from its origins to its current status as a global language. Answer the comprehension questions based on the text.',
            image: 'https://placehold.co/600x400?text=Reading+Passage+2',
            passage: 'The English language has a rich and complex history that spans over 1,500 years. It originated from the Germanic languages spoken by Anglo-Saxon tribes who settled in Britain during the 5th century. Over the centuries, English has absorbed words and influences from many other languages, including Latin, French, Norse, and more recently, languages from around the world. This linguistic diversity has contributed to English becoming a global language, spoken by over 1.5 billion people worldwide. Today, English serves as the primary language of international business, science, technology, and diplomacy.',
            questions: [
                {
                    id: 2101,
                    question: 'When did the English language originate?',
                    optionA: 'During the 3rd century',
                    optionB: 'During the 5th century with Anglo-Saxon settlement',
                    optionC: 'During the Middle Ages',
                    optionD: 'During the Renaissance period',
                    correctAnswer: 2,
                    tags: 'detail_recognition, Numbers, section_1'
                },
                {
                    id: 2102,
                    question: 'What has contributed to English becoming a global language?',
                    optionA: 'Its simplicity compared to other languages',
                    optionB: 'Its linguistic diversity and absorption of words from many languages',
                    optionC: 'Government policies promoting English',
                    optionD: 'The decline of other languages',
                    correctAnswer: 2,
                    tags: 'inference, critical_analysis, section_2'
                }
            ]
        },
        { 
            id: 22, 
            type: 'Reading', 
            difficulty: 'Standard',
            title: 'Reading exam 3',
            prompt: 'The following text discusses the benefits and challenges of renewable energy sources. Read carefully and respond to the questions about main ideas, details, and inferences.',
            description: 'The following text discusses the benefits and challenges of renewable energy sources. Read carefully and respond to the questions about main ideas, details, and inferences.',
            image: 'https://placehold.co/600x400?text=Reading+Passage+3',
            passage: 'Renewable energy sources, such as solar, wind, and hydroelectric power, offer promising alternatives to traditional fossil fuels. These technologies harness natural processes that are continuously replenished, making them sustainable long-term solutions. Solar panels convert sunlight directly into electricity, while wind turbines generate power from moving air. Hydroelectric systems utilize the energy of flowing water. Despite their environmental benefits, renewable energy sources face challenges including high initial costs, intermittent availability, and the need for energy storage solutions. However, as technology advances and costs decrease, renewable energy is becoming increasingly competitive with conventional energy sources.',
            questions: [
                {
                    id: 2201,
                    question: 'What is the main advantage of renewable energy sources mentioned in the passage?',
                    optionA: 'They are cheaper than fossil fuels',
                    optionB: 'They are continuously replenished and sustainable',
                    optionC: 'They require no maintenance',
                    optionD: 'They work in all weather conditions',
                    correctAnswer: 2,
                    tags: 'main_idea, comprehension, section_1'
                },
                {
                    id: 2202,
                    question: 'According to the passage, what is one challenge facing renewable energy?',
                    optionA: 'They produce too much energy',
                    optionB: 'High initial costs and intermittent availability',
                    optionC: 'They are too complex to install',
                    optionD: 'They require too much land',
                    correctAnswer: 2,
                    tags: 'detail_recognition, section_2'
                },
                {
                    id: 2203,
                    question: 'What can be inferred about the future of renewable energy?',
                    optionA: 'It will completely replace fossil fuels immediately',
                    optionB: 'It is becoming more competitive as technology improves',
                    optionC: 'It will remain too expensive to be practical',
                    optionD: 'It will only be used in developing countries',
                    correctAnswer: 2,
                    tags: 'inference, critical_analysis, section_3'
                }
            ]
        },
        // Listening Exams (with narration, speakers, and questions structure)
        { 
            id: 30, 
            type: 'Listening', 
            difficulty: 'Standard',
            title: 'Listening exam 1',
            prompt: 'Listen to a conversation between a customer and a hotel receptionist. Answer the questions that follow.',
            description: 'Listen to a conversation between a customer and a hotel receptionist. Answer the questions that follow.',
            image: 'https://placehold.co/600x400?text=Listening+Passage+1',
            narration: 'This conversation is between a Customer and a Receptionist at a hotel front desk. The customer is checking in and has some questions about the hotel facilities.',
            speakers: [
                {
                    role: 'Speaker 1',
                    accent: 'British',
                    script: 'Good evening! Welcome to the Grand Hotel. How can I assist you with your check-in today?'
                },
                {
                    role: 'Speaker 2',
                    accent: 'American',
                    script: 'Hi, I have a reservation under the name Smith. I was wondering if you could tell me about the hotel facilities, particularly the gym and pool hours?'
                }
            ],
            questions: [
                {
                    id: 3001,
                    question: 'What is the customer asking about?',
                    optionA: 'Room service options',
                    optionB: 'Gym and pool hours',
                    optionC: 'Restaurant reservations',
                    optionD: 'Tourist attractions nearby',
                    correctAnswer: 2,
                    tags: 'main_idea, comprehension, section_1'
                },
                {
                    id: 3002,
                    question: 'What is the receptionist\'s accent?',
                    optionA: 'American',
                    optionB: 'British',
                    optionC: 'Australian',
                    optionD: 'Irish',
                    correctAnswer: 2,
                    tags: 'detail_recognition, accent, section_1'
                }
            ]
        },
        { 
            id: 31, 
            type: 'Listening', 
            difficulty: 'Standard',
            title: 'Listening exam 2',
            prompt: 'Listen to a discussion between two students about their university course. Answer the questions based on what you hear.',
            description: 'Listen to a discussion between two students about their university course. Answer the questions based on what you hear.',
            image: 'https://placehold.co/600x400?text=Listening+Passage+2',
            narration: 'This is a conversation between two university students discussing their course schedule and assignment deadlines. They are planning their study schedule for the upcoming week.',
            speakers: [
                {
                    role: 'Speaker 1',
                    accent: 'Australian',
                    script: 'Hey, have you checked the assignment deadline for the history essay? I think it\'s due next Friday, but I want to make sure.'
                },
                {
                    role: 'Speaker 2',
                    accent: 'British',
                    script: 'Actually, I just looked it up yesterday. It\'s due on Thursday, not Friday. We should probably start working on it this weekend to have enough time.'
                }
            ],
            questions: [
                {
                    id: 3101,
                    question: 'When is the history essay due?',
                    optionA: 'Wednesday',
                    optionB: 'Thursday',
                    optionC: 'Friday',
                    optionD: 'Saturday',
                    correctAnswer: 2,
                    tags: 'detail_recognition, Numbers, section_1'
                },
                {
                    id: 3102,
                    question: 'What do the students plan to do this weekend?',
                    optionA: 'Attend a lecture',
                    optionB: 'Start working on the essay',
                    optionC: 'Go to the library',
                    optionD: 'Take a break',
                    correctAnswer: 2,
                    tags: 'inference, planning, section_2'
                }
            ]
        },
        { 
            id: 32, 
            type: 'Listening', 
            difficulty: 'Standard',
            title: 'Listening exam 3',
            prompt: 'Listen to a lecture about environmental science. Take notes and answer the questions that follow.',
            description: 'Listen to a lecture about environmental science. Take notes and answer the questions that follow.',
            image: 'https://placehold.co/600x400?text=Listening+Passage+3',
            narration: 'This is a university lecture on environmental science, specifically focusing on renewable energy sources and their impact on climate change. The professor is explaining the benefits and challenges of different renewable energy technologies.',
            speakers: [
                {
                    role: 'Speaker 1',
                    accent: 'American',
                    script: 'Today we\'ll be discussing renewable energy sources and their role in combating climate change. Solar and wind energy have become increasingly cost-effective over the past decade, making them viable alternatives to fossil fuels.'
                },
                {
                    role: 'Speaker 2',
                    accent: 'Indian',
                    script: 'Professor, could you explain how these renewable sources compare in terms of efficiency and environmental impact?'
                }
            ],
            questions: [
                {
                    id: 3201,
                    question: 'What is the main topic of the lecture?',
                    optionA: 'Fossil fuel extraction methods',
                    optionB: 'Renewable energy sources and climate change',
                    optionC: 'Nuclear energy safety',
                    optionD: 'Energy storage technologies',
                    correctAnswer: 2,
                    tags: 'main_idea, comprehension, section_3'
                },
                {
                    id: 3202,
                    question: 'According to the professor, what has happened to solar and wind energy costs?',
                    optionA: 'They have increased significantly',
                    optionB: 'They have become more cost-effective',
                    optionC: 'They remain unchanged',
                    optionD: 'They are still too expensive',
                    correctAnswer: 2,
                    tags: 'detail_recognition, section_3'
                }
            ]
        },
        // Speaking Exams (with moduleContent and questions grouped by part)
        { 
            id: 40, 
            type: 'Speaking', 
            difficulty: 'Standard',
            title: 'Speaking Test 5: Travel & Home',
            prompt: 'Focuses on tourism vocabulary and past tense.',
            description: 'Focuses on tourism vocabulary and past tense.',
            image: 'https://placehold.co/600x400?text=Speaking+Test+5',
            moduleContent: 'In this section, I will ask you some general questions about yourself. This will take about 4-5 minutes. Please speak clearly and try to give detailed answers.',
            questions: [
                {
                    id: 4001,
                    partId: 1,
                    question: 'Tell me about your hometown.',
                    tags: '#hometown, #intro, #easy'
                },
                {
                    id: 4002,
                    partId: 1,
                    question: 'Is it a good place for children?',
                    tags: '#hometown, #family, #easy'
                },
                {
                    id: 4003,
                    partId: 2,
                    question: 'Describe a book you read recently.',
                    tags: '#cue_card, #books, #medium'
                },
                {
                    id: 4004,
                    partId: 3,
                    question: 'Do people in your country read enough?',
                    tags: '#discussion, #reading, #hard'
                }
            ]
        },
        { 
            id: 41, 
            type: 'Speaking', 
            difficulty: 'Standard',
            title: 'Speaking Test 6: Work & Education',
            prompt: 'Covers professional vocabulary and future plans.',
            description: 'Covers professional vocabulary and future plans.',
            image: 'https://placehold.co/600x400?text=Speaking+Test+6',
            moduleContent: 'Good morning/afternoon. My name is [Examiner Name]. Can you tell me your full name, please? Thank you. Now, in this first part, I\'d like to ask you some questions about yourself.',
            questions: [
                {
                    id: 4101,
                    partId: 1,
                    question: 'What do you do for work?',
                    tags: '#work, #intro, #easy'
                },
                {
                    id: 4102,
                    partId: 1,
                    question: 'Do you enjoy your job?',
                    tags: '#work, #opinion, #easy'
                },
                {
                    id: 4103,
                    partId: 2,
                    question: 'Describe a memorable journey you have taken.',
                    tags: '#cue_card, #travel, #medium'
                },
                {
                    id: 4104,
                    partId: 3,
                    question: 'How has technology changed the way people travel?',
                    tags: '#discussion, #technology, #hard'
                }
            ]
        },
        // Reading Questions (existing)
        { 
            id: 2, 
            type: 'Reading', 
            difficulty: 'Standard',
            prompt: 'According to the passage, what is the primary benefit of regular reading?',
            question: 'According to the passage, what is the primary benefit of regular reading?',
            optionA: 'A. Improved memory retention',
            optionB: 'B. Enhanced critical thinking skills',
            optionC: 'C. Better time management',
            optionD: 'D. Increased social connections',
            correctAnswer: 2
        },
        { 
            id: 8, 
            type: 'Reading', 
            difficulty: 'Standard',
            prompt: 'What does the author suggest about the future of digital reading?',
            question: 'What does the author suggest about the future of digital reading?',
            optionA: 'A. It will completely replace printed books',
            optionB: 'B. It will complement traditional reading methods',
            optionC: 'C. It will decrease overall reading habits',
            optionD: 'D. It will only appeal to younger generations',
            correctAnswer: 2
        },
        { 
            id: 9, 
            type: 'Reading', 
            difficulty: 'Standard',
            prompt: 'The word "ubiquitous" in paragraph 3 most closely means:',
            question: 'The word "ubiquitous" in paragraph 3 most closely means:',
            optionA: 'A. Rare and uncommon',
            optionB: 'B. Present everywhere',
            optionC: 'C. Difficult to understand',
            optionD: 'D. Technologically advanced',
            correctAnswer: 2
        },
        // Listening Questions
        { 
            id: 3, 
            type: 'Listening', 
            difficulty: 'Standard',
            prompt: 'What is the main topic of the conversation?',
            question: 'What is the main topic of the conversation?',
            optionA: 'A. Booking a restaurant table',
            optionB: 'B. Making a hotel reservation',
            optionC: 'C. Ordering food delivery',
            optionD: 'D. Canceling a reservation',
            correctAnswer: 1
        },
        { 
            id: 10, 
            type: 'Listening', 
            difficulty: 'Standard',
            prompt: 'What time does the library close on weekends?',
            question: 'What time does the library close on weekends?',
            optionA: 'A. 5:00 PM',
            optionB: 'B. 6:00 PM',
            optionC: 'C. 7:00 PM',
            optionD: 'D. 8:00 PM',
            correctAnswer: 2
        },
        { 
            id: 11, 
            type: 'Listening', 
            difficulty: 'Standard',
            prompt: 'According to the lecture, what is the main cause of climate change?',
            question: 'According to the lecture, what is the main cause of climate change?',
            optionA: 'A. Natural weather patterns',
            optionB: 'B. Human activities and emissions',
            optionC: 'C. Solar radiation changes',
            optionD: 'D. Ocean current variations',
            correctAnswer: 2
        },
        { 
            id: 12, 
            type: 'Listening', 
            difficulty: 'Standard',
            prompt: 'Where should students submit their assignments?',
            question: 'Where should students submit their assignments?',
            optionA: 'A. In the professor\'s office',
            optionB: 'B. Through the online portal',
            optionC: 'C. At the reception desk',
            optionD: 'D. Via email only',
            correctAnswer: 2
        },
        { 
            id: 17, 
            type: 'Listening', 
            difficulty: 'Standard',
            prompt: 'What is the speaker\'s main purpose in this conversation?',
            question: 'What is the speaker\'s main purpose in this conversation?',
            optionA: 'A. To complain about service',
            optionB: 'B. To request information',
            optionC: 'C. To make a reservation',
            optionD: 'D. To cancel an appointment',
            correctAnswer: 2
        },
        { 
            id: 18, 
            type: 'Listening', 
            difficulty: 'Standard',
            prompt: 'How many people are expected to attend the event?',
            question: 'How many people are expected to attend the event?',
            optionA: 'A. 25 people',
            optionB: 'B. 50 people',
            optionC: 'C. 75 people',
            optionD: 'D. 100 people',
            correctAnswer: 3
        },
        // Speaking Questions
        { 
            id: 4, 
            type: 'Speaking', 
            difficulty: 'Standard',
            part: 1,
            questionNumber: 1,
            prompt: 'Tell me about your hometown.',
            question1: 'Tell me about your hometown.',
            question2: null
        },
        { 
            id: 5, 
            type: 'Speaking', 
            difficulty: 'Standard',
            part: 1,
            questionNumber: 2,
            prompt: 'What do you like most about your job or studies?',
            question1: null,
            question2: 'What do you like most about your job or studies?'
        },
        { 
            id: 13, 
            type: 'Speaking', 
            difficulty: 'Standard',
            part: 1,
            questionNumber: 1,
            prompt: 'Do you enjoy reading books? Why or why not?',
            question1: 'Do you enjoy reading books? Why or why not?',
            question2: null
        },
        { 
            id: 6, 
            type: 'Speaking', 
            difficulty: 'Standard',
            part: 2,
            questionNumber: 1,
            prompt: 'Describe a place you would like to visit. You should say: where it is, what you would do there, and why you want to visit it.',
            question1: 'Describe a place you would like to visit. You should say: where it is, what you would do there, and why you want to visit it.',
            question2: null
        },
        { 
            id: 14, 
            type: 'Speaking', 
            difficulty: 'Standard',
            part: 2,
            questionNumber: 1,
            prompt: 'Describe a memorable journey you have taken. You should say: where you went, who you went with, what you did, and explain why it was memorable.',
            question1: 'Describe a memorable journey you have taken. You should say: where you went, who you went with, what you did, and explain why it was memorable.',
            question2: null
        },
        { 
            id: 7, 
            type: 'Speaking', 
            difficulty: 'Standard',
            part: 3,
            questionNumber: 1,
            prompt: 'Do you think tourism has a positive or negative impact on local communities?',
            question1: 'Do you think tourism has a positive or negative impact on local communities?',
            question2: null
        },
        { 
            id: 15, 
            type: 'Speaking', 
            difficulty: 'Standard',
            part: 3,
            questionNumber: 1,
            prompt: 'How has technology changed the way people travel?',
            question1: 'How has technology changed the way people travel?',
            question2: null
        },
        { 
            id: 16, 
            type: 'Speaking', 
            difficulty: 'Standard',
            part: 3,
            questionNumber: 2,
            prompt: 'What are the benefits of traveling to different countries?',
            question1: null,
            question2: 'What are the benefits of traveling to different countries?'
        }
    ],
    
    // Tags database for different skill categories
    tags: {
        writing: [
            { id: 1, tags: ['detail_recognition', 'Numbers', 'section_1'], taskIndex: 0 },
            { id: 2, tags: ['opinion_essay', 'argumentation', 'section_2'], taskIndex: 1 },
            { id: 3, tags: ['academic_writing', 'data_analysis', 'section_1'], taskIndex: 0 },
            { id: 4, tags: ['discursive_essay', 'critical_thinking', 'section_2'], taskIndex: 1 },
            { id: 5, tags: ['descriptive', 'chart_interpretation', 'section_1'], taskIndex: 0 },
            { id: 6, tags: ['persuasive', 'examples', 'section_2'], taskIndex: 1 }
        ],
        reading: [
            { id: 1, tags: ['detail_recognition', 'Numbers', 'section_1'], questionIndex: 0 },
            { id: 2, tags: ['main_idea', 'comprehension', 'section_1'], questionIndex: 1 },
            { id: 3, tags: ['inference', 'critical_analysis', 'section_2'], questionIndex: 0 },
            { id: 4, tags: ['vocabulary', 'context_clues', 'section_1'], questionIndex: 2 },
            { id: 5, tags: ['true_false_not_given', 'fact_checking', 'section_2'], questionIndex: 1 },
            { id: 6, tags: ['matching_headings', 'paragraph_structure', 'section_3'], questionIndex: 0 },
            { id: 7, tags: ['summary_completion', 'key_points', 'section_2'], questionIndex: 2 },
            { id: 8, tags: ['multiple_choice', 'detail_recognition', 'section_1'], questionIndex: 3 }
        ],
        listening: [
            { id: 1, tags: ['detail_recognition', 'Numbers', 'section_1'], questionIndex: 0 },
            { id: 2, tags: ['conversation', 'everyday_situations', 'section_1'], questionIndex: 1 },
            { id: 3, tags: ['monologue', 'academic_context', 'section_2'], questionIndex: 0 },
            { id: 4, tags: ['note_completion', 'key_information', 'section_2'], questionIndex: 1 },
            { id: 5, tags: ['multiple_choice', 'understanding', 'section_3'], questionIndex: 0 },
            { id: 6, tags: ['map_labeling', 'directions', 'section_2'], questionIndex: 2 },
            { id: 7, tags: ['form_completion', 'personal_details', 'section_1'], questionIndex: 3 },
            { id: 8, tags: ['lecture', 'academic_vocabulary', 'section_4'], questionIndex: 0 }
        ],
        speaking: [
            { id: 1, tags: ['introduction', 'personal_information', 'part_1'], part: 1, questionIndex: 0 },
            { id: 2, tags: ['fluency', 'pronunciation', 'part_1'], part: 1, questionIndex: 1 },
            { id: 3, tags: ['long_turn', 'cue_card', 'part_2'], part: 2, questionIndex: 0 },
            { id: 4, tags: ['discussion', 'abstract_topics', 'part_3'], part: 3, questionIndex: 0 },
            { id: 5, tags: ['opinions', 'justification', 'part_3'], part: 3, questionIndex: 1 },
            { id: 6, tags: ['describing', 'past_experiences', 'part_2'], part: 2, questionIndex: 1 },
            { id: 7, tags: ['comparing', 'future_plans', 'part_3'], part: 3, questionIndex: 2 },
            { id: 8, tags: ['hobbies', 'daily_routine', 'part_1'], part: 1, questionIndex: 2 }
        ]
    },
    
    modules: [],
    
    // Regular User Test Bank - Writing Exams (separate from IELTS)
    regularWritingExams: [
        {
            id: 1001,
            title: 'General Writing Practice 1',
            description: 'Focuses on formal letter writing and opinion essays.',
            task1: {
                description: 'You should spend about 20 minutes on this task. The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
                tags: '#graph, #data_interpretation, #chart',
                image: null
            },
            task2: {
                description: 'You should spend about 40 minutes on this task. Some people think that it is better to educate boys and girls in separate schools. Others, however, believe that boys and girls benefit more from attending mixed schools. Discuss both views and give your own opinion.',
                tags: '#essay, #opinion, #education',
                image: null
            },
            createdAt: '2024-01-15T10:00:00.000Z'
        },
        {
            id: 1002,
            title: 'General Writing Practice 2',
            description: 'Practice with descriptive writing and argumentative essays.',
            task1: {
                description: 'You should spend about 20 minutes on this task. The graph illustrates the proportion of the population aged 65 and over between 1940 and 2040 in three different countries. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
                tags: '#graph, #population, #trends',
                image: null
            },
            task2: {
                description: 'You should spend about 40 minutes on this task. In many countries, the amount of crime is increasing. What do you think are the main causes of crime? How can we deal with those causes?',
                tags: '#essay, #argumentative, #crime',
                image: null
            },
            createdAt: '2024-01-16T10:00:00.000Z'
        },
        {
            id: 1003,
            title: 'General Writing Practice 3',
            description: 'Focuses on business correspondence and discussion essays.',
            task1: {
                description: 'You should spend about 20 minutes on this task. You recently stayed in a hotel and forgot some of your belongings there. Write a letter to the hotel manager. In your letter, you should: describe what you left behind, explain where you think you left it, and suggest how the hotel can return it to you.',
                tags: '#letter, #formal, #correspondence',
                image: null
            },
            task2: {
                description: 'You should spend about 40 minutes on this task. Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?',
                tags: '#essay, #discussion, #community',
                image: null
            },
            createdAt: '2024-01-17T10:00:00.000Z'
        }
    ],
    
    // Regular User Test Bank - Reading Exams (separate from IELTS)
    regularReadingExams: [
        {
            id: 2001,
            title: 'Reading Comprehension: Science & Nature',
            description: 'Intermediate level text about climate change.',
            passageTitle: 'Climate Change and Its Global Impact',
            passageContent: 'Climate change is one of the most pressing issues of our time. Over the past century, human activities have significantly increased the concentration of greenhouse gases in the atmosphere. The burning of fossil fuels, deforestation, and industrial processes have all contributed to this phenomenon.\n\nScientists have observed a steady rise in global average temperatures, leading to melting ice caps, rising sea levels, and more frequent extreme weather events. Understanding the causes and effects of climate change is crucial for developing effective strategies to mitigate its impact and adapt to the changes that are already occurring.\n\nThe scientific consensus is clear: climate change is real, it is happening now, and human activities are the primary cause. Governments, businesses, and individuals all have a role to play in addressing this global challenge.',
            questions: [
                {
                    id: 20011,
                    question: 'What is the main cause of increased greenhouse gases in the atmosphere?',
                    optionA: 'Natural weather patterns',
                    optionB: 'Human activities such as burning fossil fuels',
                    optionC: 'Solar radiation changes',
                    optionD: 'Ocean currents',
                    correctAnswer: 'B',
                    tags: '#vocabulary, #main_idea'
                },
                {
                    id: 20012,
                    question: 'According to the passage, what is one consequence of rising global temperatures?',
                    optionA: 'Decreased sea levels',
                    optionB: 'More stable weather patterns',
                    optionC: 'Melting ice caps',
                    optionD: 'Reduced industrial activity',
                    correctAnswer: 'C',
                    tags: '#detail, #comprehension'
                },
                {
                    id: 20013,
                    question: 'What does the passage suggest about addressing climate change?',
                    optionA: 'Only governments can solve the problem',
                    optionB: 'It requires action from multiple sectors of society',
                    optionC: 'Individual actions are not important',
                    optionD: 'The problem is too complex to address',
                    correctAnswer: 'B',
                    tags: '#inference, #critical_thinking'
                }
            ],
            createdAt: '2024-01-18T10:00:00.000Z'
        },
        {
            id: 2002,
            title: 'Reading Comprehension: Technology & Innovation',
            description: 'Advanced level text about artificial intelligence and its applications.',
            passageTitle: 'The Future of Artificial Intelligence',
            passageContent: 'Artificial Intelligence (AI) has transformed from a science fiction concept into a reality that shapes our daily lives. From voice assistants in our smartphones to recommendation algorithms on streaming platforms, AI is everywhere.\n\nMachine learning, a subset of AI, enables computers to learn and improve from experience without being explicitly programmed. This technology powers everything from medical diagnosis systems to autonomous vehicles. However, the rapid advancement of AI also raises important ethical questions about privacy, job displacement, and decision-making transparency.\n\nAs we move forward, it is essential to balance innovation with responsibility, ensuring that AI technologies benefit humanity while addressing potential risks and challenges.',
            questions: [
                {
                    id: 20021,
                    question: 'What is machine learning?',
                    optionA: 'A type of programming that requires explicit instructions',
                    optionB: 'A subset of AI that enables computers to learn from experience',
                    optionC: 'A science fiction concept',
                    optionD: 'A type of voice assistant',
                    correctAnswer: 'B',
                    tags: '#definition, #vocabulary'
                },
                {
                    id: 20022,
                    question: 'According to the passage, what is a concern about AI advancement?',
                    optionA: 'Lack of innovation',
                    optionB: 'Ethical questions about privacy and job displacement',
                    optionC: 'Too slow development',
                    optionD: 'Limited applications',
                    correctAnswer: 'B',
                    tags: '#inference, #critical_thinking'
                }
            ],
            createdAt: '2024-01-19T10:00:00.000Z'
        },
        {
            id: 2003,
            title: 'Reading Comprehension: History & Culture',
            description: 'Intermediate level text about ancient civilizations and their contributions.',
            passageTitle: 'The Legacy of Ancient Civilizations',
            passageContent: 'Ancient civilizations have left an indelible mark on human history. The Egyptians built magnificent pyramids that still stand today, demonstrating remarkable engineering skills. The Greeks contributed philosophy, democracy, and the foundations of Western thought. The Romans built vast road networks and developed legal systems that influence modern law.\n\nThese civilizations, though separated by time and geography, shared common characteristics: they developed writing systems, created complex social structures, and made significant advances in science, mathematics, and the arts. Their achievements continue to inspire and inform our understanding of human progress and potential.',
            questions: [
                {
                    id: 20031,
                    question: 'What is mentioned as a contribution of the Greeks?',
                    optionA: 'Pyramid construction',
                    optionB: 'Road networks',
                    optionC: 'Philosophy and democracy',
                    optionD: 'Modern legal systems',
                    correctAnswer: 'C',
                    tags: '#detail, #comprehension'
                },
                {
                    id: 20032,
                    question: 'What common characteristic did these ancient civilizations share?',
                    optionA: 'They all built pyramids',
                    optionB: 'They developed writing systems and complex social structures',
                    optionC: 'They were located in the same region',
                    optionD: 'They existed at the same time',
                    correctAnswer: 'B',
                    tags: '#main_idea, #synthesis'
                }
            ],
            createdAt: '2024-01-20T10:00:00.000Z'
        }
    ],
    
    // Regular User Test Bank - Listening Exams (separate from IELTS)
    regularListeningExams: [
        {
            id: 3001,
            title: 'Daily Conversation Practice',
            description: 'Focus on phone numbers and dates.',
            narration: 'This conversation is between a Customer and a Receptionist at a hotel. The customer is making a reservation.',
            scriptBlocks: [
                {
                    id: 30011,
                    speaker: 'Speaker 1',
                    accent: 'British',
                    line: 'Good morning, I\'d like to make a reservation for next week, please.'
                },
                {
                    id: 30012,
                    speaker: 'Speaker 2',
                    accent: 'British',
                    line: 'Certainly, sir. What dates are you looking for?'
                },
                {
                    id: 30013,
                    speaker: 'Speaker 1',
                    accent: 'British',
                    line: 'I need a room from the 15th to the 18th of March.'
                },
                {
                    id: 30014,
                    speaker: 'Speaker 2',
                    accent: 'British',
                    line: 'Let me check availability. Yes, we have rooms available. Would you like a single or double room?'
                },
                {
                    id: 30015,
                    speaker: 'Speaker 1',
                    accent: 'British',
                    line: 'A single room, please. How much will that be?'
                },
                {
                    id: 30016,
                    speaker: 'Speaker 2',
                    accent: 'British',
                    line: 'That will be £120 per night, so £360 for three nights.'
                }
            ],
            questions: [
                {
                    id: 30021,
                    question: 'What dates does the customer want to book?',
                    optionA: '15th to 18th of February',
                    optionB: '15th to 18th of March',
                    optionC: '15th to 18th of April',
                    optionD: '15th to 18th of May',
                    correctAnswer: 'B',
                    tags: '#dates, #detail'
                },
                {
                    id: 30022,
                    question: 'What type of room does the customer request?',
                    optionA: 'Double room',
                    optionB: 'Twin room',
                    optionC: 'Single room',
                    optionD: 'Suite',
                    correctAnswer: 'C',
                    tags: '#detail, #comprehension'
                },
                {
                    id: 30023,
                    question: 'What is the total cost for the stay?',
                    optionA: '£120',
                    optionB: '£240',
                    optionC: '£360',
                    optionD: '£480',
                    correctAnswer: 'C',
                    tags: '#numbers, #calculation'
                }
            ],
            createdAt: '2024-01-21T10:00:00.000Z'
        },
        {
            id: 3002,
            title: 'Restaurant Reservation',
            description: 'Practice listening to restaurant booking conversations.',
            narration: 'This conversation takes place between a customer and a restaurant manager. The customer wants to book a table for a special occasion.',
            scriptBlocks: [
                {
                    id: 30021,
                    speaker: 'Speaker 1',
                    accent: 'American',
                    line: 'Hi, I\'d like to make a reservation for this Saturday evening.'
                },
                {
                    id: 30022,
                    speaker: 'Speaker 2',
                    accent: 'American',
                    line: 'Of course! What time would you prefer?'
                },
                {
                    id: 30023,
                    speaker: 'Speaker 1',
                    accent: 'American',
                    line: 'Around 7:30 PM, if possible. It\'s for a party of four.'
                },
                {
                    id: 30024,
                    speaker: 'Speaker 2',
                    accent: 'American',
                    line: 'Let me check... Yes, we can accommodate you at 7:30 PM. May I have your name and phone number?'
                },
                {
                    id: 30025,
                    speaker: 'Speaker 1',
                    accent: 'American',
                    line: 'Sure, it\'s John Smith, and my number is 555-0123.'
                }
            ],
            questions: [
                {
                    id: 30031,
                    question: 'What day does the customer want to make a reservation for?',
                    optionA: 'Friday evening',
                    optionB: 'Saturday evening',
                    optionC: 'Sunday evening',
                    optionD: 'Monday evening',
                    correctAnswer: 'B',
                    tags: '#days, #detail'
                },
                {
                    id: 30032,
                    question: 'How many people will be dining?',
                    optionA: 'Two',
                    optionB: 'Three',
                    optionC: 'Four',
                    optionD: 'Five',
                    correctAnswer: 'C',
                    tags: '#numbers, #detail'
                }
            ],
            createdAt: '2024-01-22T10:00:00.000Z'
        },
        {
            id: 3003,
            title: 'Airport Information',
            description: 'Listening practice for airport announcements and directions.',
            narration: 'This conversation occurs at an airport information desk. A traveler is asking for directions to their gate.',
            scriptBlocks: [
                {
                    id: 30031,
                    speaker: 'Speaker 1',
                    accent: 'Australian',
                    line: 'Excuse me, could you tell me where Gate 12 is?'
                },
                {
                    id: 30032,
                    speaker: 'Speaker 2',
                    accent: 'Australian',
                    line: 'Gate 12 is in Terminal 2. You\'ll need to take the shuttle bus from here.'
                },
                {
                    id: 30033,
                    speaker: 'Speaker 1',
                    accent: 'Australian',
                    line: 'How long does the shuttle take?'
                },
                {
                    id: 30034,
                    speaker: 'Speaker 2',
                    accent: 'Australian',
                    line: 'About 5 minutes. The bus leaves every 10 minutes from Platform 3.'
                },
                {
                    id: 30035,
                    speaker: 'Speaker 1',
                    accent: 'Australian',
                    line: 'Thank you so much for your help!'
                }
            ],
            questions: [
                {
                    id: 30041,
                    question: 'Where is Gate 12 located?',
                    optionA: 'Terminal 1',
                    optionB: 'Terminal 2',
                    optionC: 'Terminal 3',
                    optionD: 'Terminal 4',
                    correctAnswer: 'B',
                    tags: '#location, #detail'
                },
                {
                    id: 30042,
                    question: 'How often does the shuttle bus leave?',
                    optionA: 'Every 5 minutes',
                    optionB: 'Every 10 minutes',
                    optionC: 'Every 15 minutes',
                    optionD: 'Every 20 minutes',
                    correctAnswer: 'B',
                    tags: '#time, #numbers'
                }
            ],
            createdAt: '2024-01-23T10:00:00.000Z'
        }
    ],
    
    // Regular User Test Bank - Speaking Exams (separate from IELTS)
    regularSpeakingExams: [
        {
            id: 4001,
            title: 'IELTS Speaking Test 12: Family & Hobbies',
            description: 'Focuses on present tense and describing relationships.',
            moduleContent: 'In this part of the exam, I am going to ask you some questions about yourself. Please answer naturally and try to speak for at least 30 seconds for each question.\n\nLet\'s begin with some questions about your family and hobbies.',
            questions: {
                part1: [
                    {
                        id: 40011,
                        question: 'Tell me about your hometown.',
                        tags: '#hometown, #intro, #place',
                        partId: 1
                    },
                    {
                        id: 40012,
                        question: 'Do you like living there?',
                        tags: '#hometown, #opinion, #intro',
                        partId: 1
                    },
                    {
                        id: 40013,
                        question: 'Is it a good place for children?',
                        tags: '#hometown, #family, #intro',
                        partId: 1
                    },
                    {
                        id: 40014,
                        question: 'What do you like most about your job or studies?',
                        tags: '#work, #studies, #intro',
                        partId: 1
                    }
                ],
                part2: [
                    {
                        id: 40021,
                        question: 'Describe a book you read recently. You should say:\n- What the book was about\n- When you read it\n- Why you chose to read it\nAnd explain how it affected you.',
                        tags: '#book, #cue_card, #description',
                        partId: 2
                    },
                    {
                        id: 40022,
                        question: 'Describe a memorable journey you have taken. You should say:\n- Where you went\n- Who you went with\n- What you did there\nAnd explain why it was memorable.',
                        tags: '#journey, #travel, #cue_card',
                        partId: 2
                    }
                ],
                part3: [
                    {
                        id: 40031,
                        question: 'Do people in your country read enough?',
                        tags: '#reading, #culture, #discussion',
                        partId: 3
                    },
                    {
                        id: 40032,
                        question: 'How has technology changed the way people travel?',
                        tags: '#technology, #travel, #discussion',
                        partId: 3
                    },
                    {
                        id: 40033,
                        question: 'What are the benefits of traveling to different countries?',
                        tags: '#travel, #benefits, #discussion',
                        partId: 3
                    }
                ]
            },
            createdAt: '2024-01-24T10:00:00.000Z'
        },
        {
            id: 4002,
            title: 'IELTS Speaking Test 13: Work & Education',
            description: 'Practice with work-related vocabulary and educational topics.',
            moduleContent: 'Welcome to the speaking test. I will ask you questions about your work, education, and related topics. Please speak clearly and provide detailed answers.',
            questions: {
                part1: [
                    {
                        id: 40041,
                        question: 'What kind of work do you do?',
                        tags: '#work, #job, #intro',
                        partId: 1
                    },
                    {
                        id: 40042,
                        question: 'Do you enjoy your job?',
                        tags: '#work, #opinion, #intro',
                        partId: 1
                    },
                    {
                        id: 40043,
                        question: 'What did you study at university?',
                        tags: '#education, #university, #intro',
                        partId: 1
                    }
                ],
                part2: [
                    {
                        id: 40051,
                        question: 'Describe a person who has influenced you. You should say:\n- Who this person is\n- How you know them\n- What they have done\nAnd explain why they have influenced you.',
                        tags: '#person, #influence, #cue_card',
                        partId: 2
                    }
                ],
                part3: [
                    {
                        id: 40061,
                        question: 'What skills are most important for success in the workplace?',
                        tags: '#work, #skills, #discussion',
                        partId: 3
                    },
                    {
                        id: 40062,
                        question: 'How important is education in today\'s society?',
                        tags: '#education, #society, #discussion',
                        partId: 3
                    }
                ]
            },
            createdAt: '2024-01-25T10:00:00.000Z'
        },
        {
            id: 4003,
            title: 'IELTS Speaking Test 14: Health & Lifestyle',
            description: 'Topics covering health, fitness, and daily routines.',
            moduleContent: 'In this speaking test, we will discuss topics related to health, fitness, and lifestyle. Please answer the questions naturally and try to provide examples from your own experience.',
            questions: {
                part1: [
                    {
                        id: 40071,
                        question: 'Do you exercise regularly?',
                        tags: '#health, #exercise, #intro',
                        partId: 1
                    },
                    {
                        id: 40072,
                        question: 'What kind of food do you like?',
                        tags: '#food, #preferences, #intro',
                        partId: 1
                    },
                    {
                        id: 40073,
                        question: 'How do you usually spend your weekends?',
                        tags: '#weekend, #routine, #intro',
                        partId: 1
                    }
                ],
                part2: [
                    {
                        id: 40081,
                        question: 'Describe a healthy activity you enjoy. You should say:\n- What the activity is\n- When and where you do it\n- How often you do it\nAnd explain why it is healthy for you.',
                        tags: '#health, #activity, #cue_card',
                        partId: 2
                    }
                ],
                part3: [
                    {
                        id: 40091,
                        question: 'What are the main health problems in your country?',
                        tags: '#health, #society, #discussion',
                        partId: 3
                    },
                    {
                        id: 40092,
                        question: 'How can governments encourage people to live healthier lives?',
                        tags: '#health, #government, #discussion',
                        partId: 3
                    }
                ]
            },
            createdAt: '2024-01-26T10:00:00.000Z'
        }
    ]
};

module.exports = db;
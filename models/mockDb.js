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
    
    assessments: [
        { id: 1, category: 'Reading', question: 'Identify the verb in the sentence: "The cat sleeps."', answer: 'sleeps' },
        { id: 2, category: 'Speaking', question: 'Synonym for "Happy"', answer: 'Joyful' }
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
    
    // ============================================
    // REGULAR USER TEST BANK (Separate from IELTS)
    // ============================================
    regularExams: [], // Main collection for Regular User Test Bank exams
    
    // Separate collections for each skill type (mirrors finalAssessments structure but isolated)
    regularWritingExams: [],
    regularReadingExams: [],
    regularListeningExams: [],
    regularSpeakingExams: [],
    
    // Tags for Regular User Test Bank (separate from IELTS tags)
    regularTags: {
        writing: [],
        reading: [],
        listening: [],
        speaking: []
    }
};

module.exports = db;
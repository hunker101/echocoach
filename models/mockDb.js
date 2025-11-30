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
            prompt: 'The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
            description: 'The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
            image: 'https://placehold.co/600x400?text=Writing+Task+1'
        },
        // Reading Questions
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
    
    modules: [] 
};

module.exports = db;
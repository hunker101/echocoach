const db = {
    users: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', level: 'Beginner', stats: { speaking: 78, listening: 85, reading: 65, writing: 70 } },
        { id: 2, name: 'Jane Smith', email: 'jane@admin.com', role: 'Admin', level: 'Advanced', stats: { speaking: 95, listening: 98, reading: 92, writing: 96 } },
        { id: 3, name: 'Robert Brown', email: 'bob@school.edu', role: 'Teacher', level: 'Advanced', stats: { speaking: 88, listening: 90, reading: 85, writing: 92 } },
        { id: 4, name: 'Alice Wonderland', email: 'alice@wonder.com', role: 'Student', level: 'Beginner', stats: { speaking: 45, listening: 50, reading: 60, writing: 40 } }
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
        { id: 1, category: 'Grammar', question: 'Identify the verb in the sentence: "The cat sleeps."', answer: 'sleeps' },
        { id: 2, category: 'Vocab', question: 'Synonym for "Happy"', answer: 'Joyful' }
    ],
    finalAssessments: [
        { id: 1, prompt: 'Discuss the economic impact of AI in 500 words.', type: 'Writing', difficulty: 'Hard' },
        { id: 2, prompt: 'Read the following passage aloud with correct intonation.', type: 'Speaking', difficulty: 'Standard' }
    ],
    modules: [] 
};

module.exports = db;
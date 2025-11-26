const db = {
    users: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', level: 'Beginner', stats: { speaking: 78, listening: 85, reading: 65, writing: 70 } },
        { id: 2, name: 'Jane Smith', email: 'jane@admin.com', role: 'Admin', level: 'Advanced', stats: { speaking: 95, listening: 98, reading: 92, writing: 96 } },
        { id: 3, name: 'Robert Brown', email: 'bob@school.edu', role: 'Teacher', level: 'Advanced', stats: { speaking: 88, listening: 90, reading: 85, writing: 92 } },
        { id: 4, name: 'Alice Wonderland', email: 'alice@wonder.com', role: 'Student', level: 'Beginner', stats: { speaking: 45, listening: 50, reading: 60, writing: 40 } }
    ],
    
    // Defines the specific module assignments to users
    pendingModules: [
        {
            id: 101,
            userId: 1,
            userName: "John Doe",
            userEmail: "john@example.com",
            userRole: "Student",
            userRank: "Beginner",
            status: "Pending", 
            // This simulates the "Module 1", "Module 2" list if a user has multiple
            modules: [
                {
                    moduleId: 1,
                    title: "Module 1",
                    scores: { overall: 5.5, speaking: 5.0, listening: 6.0, reading: 5.5, writing: 5.5 },
                    content: {
                        writing: { 
                            title: "Writing", 
                            desc: "Develop coherent and well-structured responses", 
                            question: "Describe a memorable trip you took and what you learned from it." 
                        },
                        reading: { 
                            title: "Reading", 
                            desc: "Boost your comprehension and skimming skills", 
                            question: "Read the passage about Climate Change and answer the summary questions." 
                        },
                        listening: { 
                            title: "Listening", 
                            desc: "Enhance your focus and audio understanding", 
                            question: "Listen to the conversation in a cafe and identify the main topic." 
                        },
                        speaking: { 
                            title: "Speaking", 
                            desc: "Build fluency, improve pronunciation, and speak with clarity", 
                            question: "Which area do you find most challenging when speaking English?" 
                        }
                    }
                },
                // You can add Module 2, Module 3 here...
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
        { id: 1, category: 'Speaking', question: 'Identify the verb in the sentence: "The cat sleeps."', answer: 'sleeps' },
        { id: 2, category: 'Writing', question: 'Synonym for "Happy"', answer: 'Joyful' }
    ],
    finalAssessments: [
        { id: 1, prompt: 'Discuss the economic impact of AI in 500 words.', type: 'Writing', difficulty: 'Hard' },
        { id: 2, prompt: 'Read the following passage aloud with correct intonation.', type: 'Speaking', difficulty: 'Standard' }
    ],
    modules: [] // Admin created generic templates
};

module.exports = db;
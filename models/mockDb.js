// This file simulates a database connection. 
// Later, we will replace these arrays with Mongoose models or SQL tables.

const db = {
    users: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student' },
        { id: 2, name: 'Jane Smith', email: 'jane@admin.com', role: 'Admin' },
        { id: 3, name: 'Robert Brown', email: 'bob@school.edu', role: 'Teacher' }
    ],
    modules: [
        { id: 1, code: 'GR-101', title: 'Grammar Foundations', description: 'Master the basics of sentence structure.', level: 'Beginner', lessons: 12 },
        { id: 2, code: 'SP-202', title: 'Public Speaking', description: 'Learn to speak confidently in front of crowds.', level: 'Intermediate', lessons: 8 }
    ],
    assessments: [
        { id: 1, category: 'Grammar', question: 'Identify the verb in the sentence: "The cat sleeps."', answer: 'sleeps' },
        { id: 2, category: 'Vocab', question: 'Synonym for "Happy"', answer: 'Joyful' }
    ],
    finalAssessments: [
        { id: 1, prompt: 'Discuss the economic impact of AI in 500 words.', type: 'Writing', difficulty: 'Hard' },
        { id: 2, prompt: 'Read the following passage aloud with correct intonation.', type: 'Speaking', difficulty: 'Standard' }
    ]
};

module.exports = db;
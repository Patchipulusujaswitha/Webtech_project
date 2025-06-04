const departmentCourses = {
    cse: [
        {
            code: "CSE1017",
            name: "Programming in C and C++",
            credits: 4,
            options: [
                { slot: "D1", room: "211", faculty: "Dr. Punam Kumari", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "D1", room: "210", faculty: "Dr. Senthil Kumar Janagan", capacity: 60, currentEnrollment: 0, type: "Theory", credits:  2 },
                { slot: "D1", room: "312", faculty: "Dr. Rajat", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "D2", room: "211", faculty: "Dr. Punam Kumari", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "D2", room: "210", faculty: "Dr. Senthil Kumar Janagan", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "D2", room: "312", faculty: "Dr. Rajat", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "E1", room: "620", faculty: "Dr. Senthil Kumar Janagan", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "G1", room: "206", faculty: "Dr. Rajesh Kumar", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "G1", room: "209", faculty: "Dr. Kumar Shashvat", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "G1", room: "208", faculty: "Mr. Mohan", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                // Lab slots - now 1 credit each, and always pairs. Mapped to L1, L2, L3, L4 time blocks.
                { slot: "L1+L2 & L11+L12", room: "507, 508", faculty: "Dr. Punam Kumari", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 2 },
                { slot: "L1+L2 & L11+L12", room: "509", faculty: "Mr. Mohan", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 2 },
                { slot: "L11+L12 & L19+L20", room: "507, 508", faculty: "Dr. Senthil Kumar Janagan", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 2 },
                { slot: "L31+L32 & L21+L22", room: "507, 508", faculty: "Dr. Punam Kumari", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 2 },
                { slot: "L35+L36 & L25+L26", room: "509, 507", faculty: "Dr. Kumar Shashvat", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 2 },
                { slot: "L21+L22 & L37+L38", room: "507, 509", faculty: "Dr. Senthil Kumar Janagan", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 2 },
                { slot: "L21+L22 & L39+L40", room: "509, 508", faculty: "Mr.Mohan", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 2 },
                { slot: "L27+L28 & L37+L38", room: "507, 508", faculty: "Dr. Rajesh Kumar", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 2 },
                { slot: "L27+L28 & L39+L40", room: "508, 507", faculty: "Dr. Punam Kumari", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 2 },
                { slot: "L27+L28 & L39+L40", room: "509", faculty: "Dr. Senthil Kumar Janagan", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 2 },
            ]
        },
        {
            code: "CSE2015",
            name: "Source Code Management",
            credits: 1,
            options: [
                { slot: "L13+L14", room: "508", faculty: "Dr. Vinob Chander R", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L15+L16", room: "509", faculty: "Dr. Monit Kapoor", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L15+L16", room: "508", faculty: "Dr. Rajat", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L29+L30", room: "507", faculty: "Dr. Rajat", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L3+L4", room: "507", faculty: "Dr. Rajat", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L3+L4", room: "508", faculty: "Dr. Vinob Chander R", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L5+L6", room: "509", faculty: "Dr. Vinob Chander R", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L5+L6", room: "507", faculty: "Dr. Monit Kapoor", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L5+L6", room: "508", faculty: "Dr. Rajat", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L7+L8", room: "507", faculty: "Dr. Rajat", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
            ]
        },
        {
            code: "CSE2002",
            name: "Web Technology",
            credits: 3,
            options: [
                { slot: "D1", room: "620", faculty: "Dr Arshpreet Kaur", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "D1", room: "614", faculty: "Dr.Deepak Raj", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "E1", room: "209", faculty: "Dr Arshpreet Kaur", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "E1", room: "312", faculty: "Dr.Deepak Raj", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "E2", room: "207", faculty: "Dr Arshpreet Kaur", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "E2", room: "312", faculty: "Dr.Deepak Raj", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "F2", room: "206", faculty: "Dr Arshpreet Kaur", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "F2", room: "312", faculty: "Dr.Deepak Raj", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "G1", room: "312", faculty: "Dr.Deepak Raj", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "G1", room: "614", faculty: "Dr. Madhu Bhan", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 2 },
                // Lab Slots - now 1 credit each
                { slot: "L23+L24", room: "508", faculty: "Dr Arshpreet Kaur", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L25+L26", room: "509", faculty: "Dr.Deepak Raj", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L9+L10", room: "507", faculty: "Dr. Madhu Bhan", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L15+L16", room: "508", faculty: "Dr Arshpreet Kaur", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L29+L30", room: "509", faculty: "Dr.Deepak Raj", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L33+L34", room: "507", faculty: "Dr Arshpreet Kaur", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L19+L20", room: "509", faculty: "Dr.Deepak Raj", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
            ]
        }
    ],
    ece: [
        {
            code: "ECE1001",
            name: "Fundamentals of Electrical and Electronics Engineering",
            credits: 4,
            options: [
                { slot: "B1", room: "312", faculty: "Mrs. Bugide Sreevidya", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "B1", room: "210", faculty: "Mrs. Anughna N", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "C2", room: "210", faculty: "Mrs. Bugide Sreevidya", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "C2", room: "211", faculty: "Mrs. Anughna N", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                // Lab slots - now 1 credit each
                { slot: "L1+L2", room: "006", faculty: "Mrs. Anughna N", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L21+L22", room: "006", faculty: "Mrs. Bugide Sreevidya", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L25+L26", room: "006", faculty: "Mrs. Anughna N", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L3+L4", room: "006", faculty: "Mrs. Bugide Sreevidya", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L31+L32", room: "006", faculty: "Mrs. Bugide Sreevidya", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L33+L34", room: "006", faculty: "Mrs. Anughna N", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L39+L40", room: "006", faculty: "Mrs. Bugide Sreevidya", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L7+L8", room: "006", faculty: "Mrs. Anughna N", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
            ]
        }
    ],
    math: [
        {
            code: "MAT1002",
            name: "Differential Equations and Transform Techniques",
            credits: 3,
            options: [
                { slot: "A1", room: "206", faculty: "Dr. P. SENTHIL KUMAR", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "A1", room: "207", faculty: "Ms. SWETHA", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "A1", room: "208", faculty: "Mr. ANKIT KUMAR YADAV", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "B2", room: "210", faculty: "Dr. P. SENTHIL KUMAR", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "B2", room: "206", faculty: "Ms. THUNGA S", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "B2", room: "207", faculty: "Ms. SWETHA", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "B2", room: "208", faculty: "Dr. RAVLJ", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "B2", room: "209", faculty: "Mr. ANKIT KUMAR YADAV", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "C1", room: "206", faculty: "Dr. RAVLJ", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "C1", room: "207", faculty: "Mr. ANKIT KUMAR YADAV", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "C2", room: "206", faculty: "Ms. THUNGA S", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
            ]
        }
    ],
    chem: [
        {
            code: "CHE1001",
            name: "Environmental Studies",
            credits: 0,
            options: [
                { slot: "D1", room: "206", faculty: "Smt. Shruthi. K.S", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 0 },
                { slot: "E1", room: "206", faculty: "Smt. Shruthi. K.S", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 0 },
                { slot: "F1", room: "207", faculty: "Smt. Shruthi. K.S", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 0 },
                { slot: "F2", room: "208", faculty: "Smt. Shruthi. K.S", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 0 },
            ]
        }
    ],
    phy: [
        {
            code: "PHY1001",
            name: "Physics of Optoelectronic devices",
            credits: 4,
            options: [
                { slot: "D1", room: "207", faculty: "Dr. V.V. Jaiswal", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "E1", room: "207", faculty: "Dr. Lokesha HS", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "E1", room: "208", faculty: "Dr. Nagabhushana K R", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "F1", room: "208", faculty: "Dr. Lokesha HS", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "G1", room: "207", faculty: "Dr. A. Balaksrishna", capacity: 60, currentEnrollment: 0, type: "Theory", credits: 3 },
                // Lab slots - now 1 credit each
                { slot: "L13+L14", room: "002", faculty: "Dr. A. Balaksrishna", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L15+L16", room: "002", faculty: "Dr. Nagabhushana K R", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L19+L20", room: "002", faculty: "Dr. V.V. Jaiswal", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L23+L24", room: "002", faculty: "Dr. Lokesha HS", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L27+L28", room: "002", faculty: "Dr. V.V. Jaiswal", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L29+L30", room: "002", faculty: "Dr. Nagabhushana K R", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L3+L4", room: "002", faculty: "Dr. Lokesha HS", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L31+L32", room: "002", faculty: "Dr. Lokesha HS", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L35+L36", room: "002", faculty: "Dr. A. Balaksrishna", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L7+L8", room: "002", faculty: "Dr. Lokesha HS", capacity: 60, currentEnrollment: 0, type: "Lab", credits: 1 },
            ]
        }
    ],
    lang: [
        {
            code: "FRE1001",
            name: "Basic French",
            credits: 1,
            options: [
                { slot: "L11+L12", room: "629", faculty: "Ms. Yamini Vij", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L21+L22", room: "207", faculty: "Ms. Yamini Vij", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L35+L36", room: "614", faculty: "Ms. Yamini Vij", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
            ]
        },
        {
            code: "GER1001",
            name: "Basic German",
            credits: 1,
            options: [
                { slot: "L15+L16", room: "211", faculty: "Ms. Rukmini Vasanth", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L29+L30", room: "206", faculty: "Ms. Rukmini Vasanth", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
            ]
        },
        {
            code: "KAN1004",
            name: "Kannada Literature",
            credits: 3,
            options: [
                { slot: "A2", room: "210", faculty: "Dr.Ashokbabu", capacity: 50, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "B1", room: "206", faculty: "Dr.Ashokbabu", capacity: 50, currentEnrollment: 0, type: "Theory", credits: 3 },
                { slot: "B2", room: "620", faculty: "Dr.Ashokbabu", capacity: 50, currentEnrollment: 0, type: "Theory", credits: 3 },
            ]
        },
        {
            code: "KAN1005",
            name: "Kannada Kali",
            credits: 1,
            options: [
                { slot: "L23+L24", room: "206", faculty: "Dr.Ashokbabu", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L37+L38", room: "615", faculty: "Dr.Ashokbabu", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L7+L8", room: "615", faculty: "Dr.Ashokbabu", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
            ]
        },
        {
            code: "ENG1003",
            name: "Professional English",
            credits: 1,
            options: [
                { slot: "L11+L12", room: "614", faculty: "Dr. Madhavi G.M", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L11+L12", room: "209", faculty: "Ms. Ramya M.Η", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L11+L12", room: "615", faculty: "Mr.Abirlal Mukherjee", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L13+L14", room: "208", faculty: "Mr.Abirlal Mukherjee", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L15+L16", room: "210", faculty: "Dr. Madhavi G.M", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L33+L34", room: "614", faculty: "Ms.Ramya M.Η", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L35+L36", room: "210", faculty: "Mr.Abirlal Mukherjee", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L37+L38", room: "620", faculty: "Mr.Abirlal Mukherjee", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L7+L8", room: "210", faculty: "Ms.Ramya M.Η", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L7+L8", room: "211", faculty: "Mr.Abirlal Mukherjee", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
            ]
        }
    ],
    nutrition: [
        {
            code: "BIT1002",
            name: "Basic Human Nutrition",
            credits: 2,
            options: [
                { slot: "D1", room: "209", faculty: "Mr.MD.Umar", capacity: 50, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "D2", room: "620", faculty: "Mr.MD.Umar", capacity: 50, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "E1", room: "211", faculty: "Mr.MD.Umar", capacity: 50, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "E2", room: "614", faculty: "Mr.MD.Umar", capacity: 50, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "F1", room: "312", faculty: "Dr Amit Verma", capacity: 50, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "F1", room: "211", faculty: "Dr. A Sanjeeva Kumar", capacity: 50, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "F2", room: "211", faculty: "Mr.MD.Umar", capacity: 50, currentEnrollment: 0, type: "Theory", credits: 2 },
                { slot: "G1", room: "620", faculty: "Dr Amit Verma", capacity: 50, currentEnrollment: 0, type: "Theory", credits: 2 },
            ]
        }
    ],
    psyc: [
        {
            code: "PSY1002",
            name: "Dynamics of Human Behaviour",
            credits: 1,
            options: [
                { slot: "L1+L2", room: "209", faculty: "Ms. Varshini S", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L17+L18", room: "210", faculty: "Ms. Varshini S", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L21+L22", room: "209", faculty: "Ms. Shweta Singh", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L25+L26", room: "312", faculty: "Ms. Shweta Singh", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L37+L38", room: "209", faculty: "Ms. Varshini S", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L37+L38", room: "206", faculty: "Ms. Shweta Singh", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L9+L10", room: "209", faculty: "Ms. Shweta Singh", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
            ]
        },
        {
            code: "PSY1001",
            name: "Understanding Self for Effectiveness",
            credits: 1,
            options: [
                { slot: "L1+L2", room: "615", faculty: "Ms. Shweta Singh", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L29+L30", room: "209", faculty: "Ms. Shweta Singh", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
                { slot: "L5+L6", room: "211", faculty: "Ms. Varshini S", capacity: 50, currentEnrollment: 0, type: "Lab", credits: 1 },
            ]
        },
        {
            code: "PSY3111",
            name: "Social Psychology",
            credits: 3,
            options: [
                { slot: "B2", room: "311", faculty: "Ms. Varshini", capacity: 50, currentEnrollment: 0, type: "Theory", credits: 3 },
            ]
        }
    ]
};

// Define generic time blocks for easier conflict detection
const TIME_BLOCKS = {
    "T1A": { start: "09:00", end: "09:50" }, // Theory Slot A (first half of 9:00-10:45)
    "T1B": { start: "09:55", end: "10:45" }, // Theory Slot B (second half of 9:00-10:45)
    "L1":  { start: "09:00", end: "10:40" }, // Lab Slot 1 (overlaps T1A, T1B)
    "T2A": { start: "10:50", end: "11:40" }, // Theory Slot A (first half of 10:50-12:35)
    "T2B": { start: "11:45", end: "12:35" }, // Theory Slot B (second half of 10:50-12:35)
    "L2":  { start: "10:50", end: "12:30" }, // Lab Slot 2 (overlaps T2A, T2B)
    "T3A": { start: "13:15", end: "14:05" }, // Theory Slot A (first half of 1:15-3:00)
    "T3B": { start: "14:10", end: "15:00" }, // Theory Slot B (second half of 1:15-3:00)
    "L3":  { start: "13:15", end: "14:55" }, // Lab Slot 3 (overlaps T3A, T3B)
    "T4A": { start: "15:05", end: "15:55" }, // Theory Slot A (first half of 3:05-4:50)
    "T4B": { start: "16:00", end: "16:50" }, // Theory Slot B (second half of 3:05-4:50)
    "L4":  { start: "15:05", end: "16:45" }  // Lab Slot 4 (overlaps T4A, T4B)
};

// This maps individual slot codes (like D1, L1) to an array of their corresponding day and precise time block ID.
const slotToTimetableMapping = {
    "A1": [{ day: "MON", timeBlock: "T1A" }, { day: "WED", timeBlock: "T1B" }, { day: "FRI", timeBlock: "T2A" }],
    "A2": [{ day: "MON", timeBlock: "T3A" }, { day: "WED", timeBlock: "T3B" }, { day: "FRI", timeBlock: "T4A" }],
    "B1": [{ day: "TUE", timeBlock: "T1A" }, { day: "WED", timeBlock: "T2B" }, { day: "THU", timeBlock: "T1B" }],
    "B2": [{ day: "TUE", timeBlock: "T3A" }, { day: "WED", timeBlock: "T4B" }, { day: "THU", timeBlock: "T3B" }],
    "C1": [{ day: "WED", timeBlock: "T1A" }, { day: "THU", timeBlock: "T2B" }, { day: "FRI", timeBlock: "T1B" }],
    "C2": [{ day: "WED", timeBlock: "T3A" }, { day: "THU", timeBlock: "T4B" }, { day: "FRI", timeBlock: "T3B" }],
    "D1": [{ day: "MON", timeBlock: "T2A" }, { day: "THU", timeBlock: "T1A" }],
    "D2": [{ day: "MON", timeBlock: "T4A" }, { day: "THU", timeBlock: "T3A" }],
    "E1": [{ day: "TUE", timeBlock: "T2A" }, { day: "FRI", timeBlock: "T1A" }],
    "E2": [{ day: "TUE", timeBlock: "T4A" }, { day: "FRI", timeBlock: "T3A" }],
    "G1": [{ day: "TUE", timeBlock: "T1B" }, { day: "THU", timeBlock: "T2A" }],
    "G2": [{ day: "TUE", timeBlock: "T3B" }, { day: "THU", timeBlock: "T4A" }],
    "F1": [{ day: "MON", timeBlock: "T1B" }, { day: "WED", timeBlock: "T2A" }],
    "F2": [{ day: "MON", timeBlock: "T3B" }, { day: "WED", timeBlock: "T4A" }],
    "TC1": [{ day: "MON", timeBlock: "T2B" }],
    "TC2": [{ day: "MON", timeBlock: "T4B" }],
    "TA1": [{ day: "TUE", timeBlock: "T2B" }],
    "TA2": [{ day: "TUE", timeBlock: "T4B" }],
    "TB1": [{ day: "FRI", timeBlock: "T2B" }],
    "TB2": [{ day: "FRI", timeBlock: "T4B" }],
    

    // Lab slots - mapped to their respective time blocks on the correct day(s)
    "L1+L2": [{ day: "MON", timeBlock: "L1" }],
    "L3+L4": [{ day: "MON", timeBlock: "L2" }],
    "L21+L22": [{ day: "MON", timeBlock: "L3" }],
    "L23+L24": [{ day: "MON", timeBlock: "L4" }],
    "L5+L6": [{ day: "TUE", timeBlock: "L1" }],
    "L7+L8": [{ day: "TUE", timeBlock: "L2" }],
    "L25+L26": [{ day: "TUE", timeBlock: "L3" }],
    "L27+L28": [{ day: "TUE", timeBlock: "L4" }],
    "L9+L10": [{ day: "WED", timeBlock: "L1" }],
    "L11+L12": [{ day: "WED", timeBlock: "L2" }],
    "L29+L30": [{ day: "WED", timeBlock: "L3" }],
    "L31+L32": [{ day: "WED", timeBlock: "L4" }],
    "L13+L14": [{ day: "THU", timeBlock: "L1" }],
    "L15+L16": [{ day: "THU", timeBlock: "L2" }],
    "L33+L34": [{ day: "THU", timeBlock: "L3" }],
    "L35+L36": [{ day: "THU", timeBlock: "L4" }],
    "L17+L18": [{ day: "FRI", timeBlock: "L1" }],
    "L19+L20": [{ day: "FRI", timeBlock: "L2" }],
    "L37+L38": [{ day: "FRI", timeBlock: "L3" }],
    "L39+L40": [{ day: "FRI", timeBlock: "L4" }],

    // Composite lab slots now explicitly list all their occupied day/timeBlock pairs
    "L1+L2 & L11+L12": [
        { day: "MON", timeBlock: "L1" },
        { day: "WED", timeBlock: "L2" } // Assuming L11+L12 maps to L2 time block on WED
    ],
    "L11+L12 & L19+L20": [
        { day: "WED", timeBlock: "L2" },
        { day: "FRI", timeBlock: "L2" } // Assuming L19+L20 maps to L2 time block on FRI
    ],
    "L31+L32 & L21+L22": [
        { day: "WED", timeBlock: "L4" }, // Assuming L31+L32 maps to L4 time block on WED
        { day: "MON", timeBlock: "L3" } // Assuming L21+L22 maps to L3 time block on MON
    ],
    "L35+L36 & L25+L26": [
        { day: "THU", timeBlock: "L4" }, // Assuming L35+L36 maps to L4 time block on THU
        { day: "TUE", timeBlock: "L3" } // Assuming L25+L26 maps to L3 time block on TUE
    ],
    "L21+L22 & L37+L38": [
        { day: "MON", timeBlock: "L3" }, // From L21+L22
        { day: "FRI", timeBlock: "L3" }  // From L37+L38
    ],
    "L21+L22 & L39+L40": [
        { day: "MON", timeBlock: "L3" }, // From L21+L22
        { day: "FRI", timeBlock: "L4" }  // From L39+L40
    ],
    "L27+L28 & L37+L38": [
        { day: "TUE", timeBlock: "L4" }, // From L27+L28
        { day: "FRI", timeBlock: "L3" }  // From L37+L38
    ],
    "L27+L28 & L39+L40": [
        { day: "TUE", timeBlock: "L4" }, 
        { day: "FRI", timeBlock: "L4" } // Both map to L4
    ],
};


// This maps a time block to all other conflicting time blocks (all theory/lab that occupy the same period)
const conflictMapping = {
    "T1A": ["T1A", "L1"],
    "T1B": ["T1B", "L1"],
    "L1":  ["T1A", "T1B", "L1"],
    "T2A": ["T2A", "L2"],
    "T2B": ["T2B", "L2"],
    "L2":  ["T2A", "T2B", "L2"],
    "T3A": ["T3A","L3"],
    "T3B": ["T3B", "L3"],
    "L3":  ["T3A", "T3B", "L3"],
    "T4A": ["T4A", "L4"],
    "T4B": ["T4B", "L4"],
    "L4":  ["T4A", "T4B", "L4"]
};


let registeredCourses = []; 
let currentDepartment = null;
let totalCredits = 0;

// --- DOM Elements ---
const sidebarItems = document.querySelectorAll('.sidebar-item');
const selectedDeptTitle = document.getElementById('selected-dept-title');
const availableCoursesList = document.getElementById('available-courses-list');
const selectDeptMessage = document.getElementById('select-dept-message');
const registeredCoursesList = document.getElementById('registered-courses-list');
const noRegisteredMessage = document.getElementById('no-registered-message');
const liveTimetable = document.getElementById('live-timetable');
const totalCreditsDisplay = document.getElementById('total-credits');

// --- Functions ---
function getCourseByCode(courseCode) {
    for (const dept in departmentCourses) {
        const foundCourse = departmentCourses[dept].find(c => c.code === courseCode);
        if (foundCourse) {
            return foundCourse;
        }
    }
    return null;
}

function getCourseOptionByCodeAndSlot(courseCode, slot) {
    const course = getCourseByCode(courseCode);
    if (course && course.options) {
        return course.options.find(opt => opt.slot === slot);
    }
    return null;
}

function calculateTotalCredits() {
    let sum = 0;
    const countedCourseCodes = new Set(); 

    registeredCourses.forEach(regCourseEntry => {
        const course = getCourseByCode(regCourseEntry.code);
        if (course && !countedCourseCodes.has(course.code)) {
            sum += course.credits;
            countedCourseCodes.add(course.code);
        }
    });
    totalCredits = sum;
    totalCreditsDisplay.textContent = `Total Credits: ${totalCredits}/27`;
}

// Function to update the timetable display
function updateTimetableDisplay() {
    // Clear all previous highlights and frozen states and content
    document.querySelectorAll('.timetable td').forEach(cell => {
        cell.classList.remove('highlighted', 'registered', 'frozen');
        // Only clear content if it's not a fixed header or lunch slot
        if (!cell.classList.contains('day-header') && !cell.classList.contains('slot-type-header') && !cell.classList.contains('lunch-slot')) {
            cell.innerHTML = '';
        }
    });

    // Mark registered courses
    registeredCourses.forEach(regCourseEntry => { // Each entry is now an individual time block: { code, slot, type, day, timeBlock }
        const day = regCourseEntry.day;
        const timeBlockId = regCourseEntry.timeBlock;
        const courseName = getCourseByCode(regCourseEntry.code)?.name;

        const cellsForThisTimeBlock = document.querySelectorAll(`.timetable td[data-time-block="${timeBlockId}"]`);

        cellsForThisTimeBlock.forEach(cell => {
            const cellDay = cell.id.split('-')[0].toUpperCase();
            if (cellDay === day) {
                cell.classList.add('registered');
                cell.innerHTML = `<div class="cell-content"><span>${regCourseEntry.code}</span><span>${regCourseEntry.slot}</span></div>`;

                // Freeze conflicting slots for this specific registered block
                const conflictingBlocks = conflictMapping[timeBlockId];
                conflictingBlocks.forEach(conflictBlock => {
                    const conflictCells = document.querySelectorAll(`.timetable td[data-time-block="${conflictBlock}"]`);
                    conflictCells.forEach(conflictCell => {
                        const conflictCellDay = conflictCell.id.split('-')[0].toUpperCase();
                        // Only freeze if it's the same day and not already registered by any other course
                        if (conflictCellDay === day && !conflictCell.classList.contains('registered')) {
                            conflictCell.classList.add('frozen');
                        }
                    });
                });
            }
        });
    });

    // Highlight selected but not yet registered slots (from dropdowns)
    document.querySelectorAll('.slot-select').forEach(select => {
        const selectedSlot = select.value;
        const courseCode = select.dataset.courseCode;

        if (selectedSlot) {
            const optionDetails = getCourseOptionByCodeAndSlot(courseCode, selectedSlot);
            // Only highlight if no part of this option is already registered
            const isAnyPartOfOptionRegistered = slotToTimetableMapping[selectedSlot].some(mapping =>
                registeredCourses.some(rc => rc.code === courseCode && rc.slot === selectedSlot && rc.day === mapping.day && rc.timeBlock === mapping.timeBlock)
            );

            if (optionDetails && !isAnyPartOfOptionRegistered) {
                const slotMappingsToHighlight = slotToTimetableMapping[selectedSlot];

                slotMappingsToHighlight.forEach(mapping => {
                    const day = mapping.day;
                    const timeBlockId = mapping.timeBlock;

                    const cellsToHighlight = document.querySelectorAll(`.timetable td[data-time-block="${timeBlockId}"]`);

                    cellsToHighlight.forEach(cell => {
                        const cellDay = cell.id.split('-')[0].toUpperCase();
                        // Only highlight if it's the correct day and not already registered or frozen
                        if (cellDay === day && !cell.classList.contains('registered') && !cell.classList.contains('frozen')) {
                            cell.classList.add('highlighted');
                            cell.innerHTML = `<div class="cell-content"><span>${courseCode}</span><span>${selectedSlot}</span></div>`;
                        }
                    });
                });
            }
        }
    });
    calculateTotalCredits();
}


// Function to display available courses for a specific department
function displayAvailableCourses(dept) {
    currentDepartment = dept;
    selectedDeptTitle.textContent = dept.toUpperCase();
    availableCoursesList.innerHTML = ''; // Clear the list first
    selectDeptMessage.classList.add('hidden'); // Hide the initial message

    const courses = departmentCourses[dept] || [];

    if (courses.length === 0) {
        const noCoursesMsg = document.createElement('p');
        noCoursesMsg.textContent = 'No courses available for this department.';
        noCoursesMsg.style.gridColumn = '1 / -1';
        noCoursesMsg.style.color = '#666';
        availableCoursesList.appendChild(noCoursesMsg);
        return;
    }

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course-box', 'card');

        const theoryOptions = course.options.filter(opt => opt.type === 'Theory');
        const labOptions = course.options.filter(opt => opt.type === 'Lab');

        let optionsHtml = '';

        if (theoryOptions.length > 0) {
            optionsHtml += '<h4>Theory Slots</h4>';
            optionsHtml += `<select class="slot-select" data-course-code="${course.code}" data-slot-type="Theory">`;
            optionsHtml += '<option value="">Select Theory Slot</option>';
            optionsHtml += theoryOptions.map(opt => {
                const isRegistered = registeredCourses.some(regCourse => regCourse.code === course.code && regCourse.slot === opt.slot);
                const isFull = opt.currentEnrollment >= opt.capacity;
                const isDisabled = isRegistered || isFull;
                return `
                    <option value="${opt.slot}" ${isDisabled ? 'disabled' : ''}>
                        Slot: ${opt.slot} | Room: ${opt.room} | ${opt.faculty} (${opt.currentEnrollment}/${opt.capacity})
                        ${isRegistered ? '(Registered)' : ''}
                    </option>
                `;
            }).join('');
            optionsHtml += '</select>';
        }

        if (labOptions.length > 0) {
            if (theoryOptions.length > 0) {
                optionsHtml += '<hr style="margin: 16px 0; border: 0; border-top: 1px solid #eee;">';
            }
            optionsHtml += '<h4>Lab Slots</h4>';
            optionsHtml += `<select class="slot-select" data-course-code="${course.code}" data-slot-type="Lab">`;
            optionsHtml += '<option value="">Select Lab Slot</option>';
            optionsHtml += labOptions.map(opt => {
                const isRegistered = registeredCourses.some(regCourse => regCourse.code === course.code && regCourse.slot === opt.slot);
                const isFull = opt.currentEnrollment >= opt.capacity;
                const isDisabled = isRegistered || isFull;
                return `
                    <option value="${opt.slot}" ${isDisabled ? 'disabled' : ''}>
                        Slot: ${opt.slot} | Room: ${opt.room} | ${opt.faculty} (${opt.currentEnrollment}/${opt.capacity})
                        ${isRegistered ? '(Registered)' : ''}
                    </option>
                `;
            }).join('');
            optionsHtml += '</select>';
        }

        const allOptionsUnavailable = course.options.every(opt => {
            const isRegisteredByUser = registeredCourses.some(regCourse => regCourse.code === course.code && regCourse.slot === opt.slot);
            const isFull = opt.currentEnrollment >= opt.capacity;
            return isRegisteredByUser || isFull;
        });

        courseElement.innerHTML = `
            <h3>${course.code} - ${course.name} (${course.credits} Credits)</h3>
            ${optionsHtml}
            <button class="${allOptionsUnavailable ? 'btn-disabled' : 'btn-primary'} register-btn" data-course-code="${course.code}" ${allOptionsUnavailable ? 'disabled' : ''}>Register Selected Slot</button>
        `;
        availableCoursesList.appendChild(courseElement);
    });

    addRegisterButtonListeners();
    addDropdownChangeListeners(); // Add listener for dropdown changes
    updateTimetableDisplay(); // Update timetable when department changes
}

// Function to display registered courses in the list
function displayRegisteredCoursesList() {
    registeredCoursesList.innerHTML = ''; // Clear the list first

    // Create a temporary set to store unique course-slot combinations for display
    const displayedRegistrations = new Set();

    if (registeredCourses.length === 0) {
        registeredCoursesList.appendChild(noRegisteredMessage);
        noRegisteredMessage.classList.remove('hidden');
    } else {
        noRegisteredMessage.classList.add('hidden');
        registeredCourses.forEach(regCourseEntry => {
            const uniqueKey = `${regCourseEntry.code}-${regCourseEntry.slot}`;
            if (displayedRegistrations.has(uniqueKey)) {
                return; // Skip if already displayed
            }
            displayedRegistrations.add(uniqueKey);

            const fullCourse = getCourseByCode(regCourseEntry.code);
            const registeredOptionDetails = getCourseOptionByCodeAndSlot(regCourseEntry.code, regCourseEntry.slot);

            if (!fullCourse || !registeredOptionDetails) return;

            const courseElement = document.createElement('div');
            courseElement.classList.add('registered-course-item');
            courseElement.innerHTML = `
                <div>
                    <h3>${fullCourse.name} (${regCourseEntry.code})</h3>
                    <p>${fullCourse.credits} Credits</p>
                    <p>Registered Slot: ${regCourseEntry.slot} | Room: ${registeredOptionDetails.room} | Faculty: ${registeredOptionDetails.faculty}</p>
                </div>
                <button class="btn-secondary remove-btn" data-course-code="${regCourseEntry.code}" data-slot="${regCourseEntry.slot}">Remove</button>
                `;
            registeredCoursesList.appendChild(courseElement);
        });
        addRemoveButtonListeners();
    }
    updateTimetableDisplay(); // Update timetable after displaying registered courses
}


// Function to handle registration
function registerCourse(courseCode) {
    const courseElement = availableCoursesList.querySelector(`.course-box button[data-course-code="${courseCode}"]`).closest('.course-box');

    let selectedSlot = null;
    let selectedSlotType = null;

    // Check theory select
    const theorySelect = courseElement.querySelector('.slot-select[data-slot-type="Theory"]');
    if (theorySelect && theorySelect.value) {
        selectedSlot = theorySelect.value;
        selectedSlotType = "Theory";
    }

    // Check lab select if theory wasn't selected
    if (!selectedSlot) {
        const labSelect = courseElement.querySelector('.slot-select[data-slot-type="Lab"]');
        if (labSelect && labSelect.value) {
            selectedSlot = labSelect.value;
            selectedSlotType = "Lab";
        }
    }

    if (!selectedSlot) {
        alert('Please select a slot to register.');
        return;
    }

    let courseToRegister = null;
    let optionToRegister = null;

    for (const dept in departmentCourses) {
        const foundCourse = departmentCourses[dept].find(c => c.code === courseCode);
        if (foundCourse) {
            courseToRegister = foundCourse;
            optionToRegister = foundCourse.options.find(opt => opt.slot === selectedSlot);
            break;
        }
    }

    const isAlreadyRegistered = registeredCourses.some(regCourse => regCourse.code === courseCode && regCourse.slot === selectedSlot);
    const isFull = optionToRegister && optionToRegister.currentEnrollment >= optionToRegister.capacity;

    if (!courseToRegister || !optionToRegister) {
        console.error(`Course or option not found for code: ${courseCode}, slot: ${selectedSlot}`);
        alert('Error: Course or slot not found.');
        return;
    }
    if (isAlreadyRegistered) {
        alert(`You are already registered for ${courseToRegister.name} Slot ${selectedSlot}.`);
        return;
    }
    if (isFull) {
        alert(`Sorry, ${courseToRegister.name} Slot ${selectedSlot} is full.`);
        return;
    }

    // Get all detailed mappings for the selected slot (could be one or many for composite)
    const slotMappings = slotToTimetableMapping[selectedSlot];
    if (!slotMappings || slotMappings.length === 0) {
        alert('Selected slot has no valid timetable mapping. Cannot register.');
        return;
    }

    // Check for conflicts across all parts of the selected slot
    for (const mapping of slotMappings) {
        const conflictingSlots = getConflictingRegisteredSlots([mapping.day], mapping.timeBlock);
        if (conflictingSlots.length > 0) {
            const conflictDetails = conflictingSlots.map(s => `${getCourseByCode(s.code).name} (${s.slot})`).join(', ');
            alert(`Cannot register for ${courseToRegister.name} Slot ${selectedSlot}. It conflicts with your existing registration(s): ${conflictDetails} on ${mapping.day} at ${TIME_BLOCKS[mapping.timeBlock].start}.`);
            return;
        }
    }

    // If no conflicts, add each individual time block entry to registeredCourses
    slotMappings.forEach(mapping => {
        registeredCourses.push({
            code: courseCode,
            slot: selectedSlot, // Keep original slot string for display in registered list
            type: selectedSlotType,
            day: mapping.day, // Individual day for this specific block
            timeBlock: mapping.timeBlock // Individual time block for this specific day
        });
    });

    optionToRegister.currentEnrollment++;

    if (currentDepartment) {
        displayAvailableCourses(currentDepartment);
    }
    displayRegisteredCoursesList();
    updateTimetableDisplay();

    console.log(`Registered for: ${courseToRegister.name} Slot: ${selectedSlot}`);
}

// Helper function to check for conflicts
function getConflictingRegisteredSlots(candidateDays, candidateTimeBlock) {
    const conflicts = [];
    const affectedTimeBlocks = conflictMapping[candidateTimeBlock];

    registeredCourses.forEach(regCourseEntry => { // regCourseEntry is now { code, slot, type, day, timeBlock }
        const regDay = regCourseEntry.day;
        const regTimeBlock = regCourseEntry.timeBlock;

        // Check for day overlap
        const dayOverlap = candidateDays.includes(regDay);

        // Check for time block overlap
        const timeBlockOverlap = affectedTimeBlocks.includes(regTimeBlock);

        if (dayOverlap && timeBlockOverlap) {
            // Ensure we don't conflict with a different part of the *same* composite slot being registered
            // This is implicitly handled now if we register each part individually.
            // However, if the `regCourseEntry.slot` is the original composite string, we need to be careful.
            // It's better that `registeredCourses` contains unique `code`, `slot`, `day`, `timeBlock` combinations.
            // By adding each component of a composite slot to `registeredCourses` individually,
            // this `getConflictingRegisteredSlots` will correctly identify conflicts with *other* courses.
            // If the user selects the same composite slot twice, the `isAlreadyRegistered` check at the beginning of `registerCourse` handles it.
            conflicts.push(regCourseEntry);
        }
    });
    return conflicts;
}


// Function to handle removing a registered course
function removeCourse(courseCode, slot) {
    // Decrement enrollment
    const optionToRemove = getCourseOptionByCodeAndSlot(courseCode, slot);
    if (optionToRemove) {
        optionToRemove.currentEnrollment--;
        if (optionToRemove.currentEnrollment < 0) {
            optionToRemove.currentEnrollment = 0;
        }
    } else {
        console.warn(`Could not find option data to decrement enrollment for ${courseCode} Slot: ${slot}`);
    }

    // Remove all entries associated with this specific courseCode and slot
    registeredCourses = registeredCourses.filter(regCourseEntry =>
        !(regCourseEntry.code === courseCode && regCourseEntry.slot === slot)
    );

    if (currentDepartment) {
        displayAvailableCourses(currentDepartment);
    }
    displayRegisteredCoursesList();
    updateTimetableDisplay(); // Update the timetable highlights/freezes

    console.log(`Removed registration for: ${courseCode} Slot: ${slot}`);
}


// Function to add event listeners to register buttons
function addRegisterButtonListeners() {
    const registerButtons = availableCoursesList.querySelectorAll('.register-btn');
    registerButtons.forEach(button => {
        button.removeEventListener('click', handleRegisterClick); // Prevent duplicate listeners
        button.addEventListener('click', handleRegisterClick);
    });
}

// Event handler for register button clicks
function handleRegisterClick(event) {
    event.preventDefault();
    const courseCode = event.target.dataset.courseCode;
    registerCourse(courseCode);
}

// Function to add event listeners to remove buttons
function addRemoveButtonListeners() {
    const removeButtons = registeredCoursesList.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.removeEventListener('click', handleRemoveClick); // Prevent duplicate listeners
        button.addEventListener('click', handleRemoveClick);
    });
}

// Event handler for remove button clicks
function handleRemoveClick(event) {
    event.preventDefault();
    const courseCode = event.target.dataset.courseCode;
    const slot = event.target.dataset.slot;
    removeCourse(courseCode, slot);
}

// Function to add event listeners to dropdowns for highlighting
function addDropdownChangeListeners() {
    document.querySelectorAll('.slot-select').forEach(select => {
        select.removeEventListener('change', handleSlotSelectChange); // Prevent duplicate listeners
        select.addEventListener('change', handleSlotSelectChange);
    });
}

// Event handler for slot dropdown changes
function handleSlotSelectChange(event) {
    updateTimetableDisplay(); // Re-render timetable to show new highlight
}


// Event listeners for sidebar items
sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all sidebar items
        sidebarItems.forEach(si => si.classList.remove('active'));
        // Add 'active' class to the clicked item
        item.classList.add('active');

        const dept = item.dataset.dept;
        displayAvailableCourses(dept);
    });
});


// --- Initial Load ---
document.addEventListener("DOMContentLoaded", () => {
    displayRegisteredCoursesList();
    updateTimetableDisplay(); 
    calculateTotalCredits(); 
});

document.addEventListener('DOMContentLoaded', function() {
    const printBtn = document.getElementById('printTimetableBtn');

    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print(); 
        });
    }
});

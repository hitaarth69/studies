const SYLLABUS = {
    semesters: [{
        id: 1,
        name: 'Semester 1',
        subjects: [{
            id: 'cs101',
            code: 'CS101',
            name: 'Programming Fundamentals',
            description: 'Introduction to programming using C.',
            topics: [{
                id: 'cs101-t1',
                title: 'Introduction to Programming',
                objectives: ['Understand what programming is and why it matters.',
                    'Set up a development environment.', 'Write and run your first C program.'
                ],
                content: `<p><strong>What is Programming?</strong> Programming is the art of giving instructions to a computer to perform specific tasks. It's how we create software, from simple calculators to complex artificial intelligence systems.</p><p><strong>Why C?</strong> C is a powerful, efficient language that gives you low-level control over system resources. It's the mother of many modern languages like C++, Java, and Python. Learning C teaches you how memory works, how data is organized, and how to think like a computer scientist.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Mastering C gives you a deep understanding of how computers work, which makes learning every other language easier.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}'
                }],
                keyTakeaways: ['Programming is giving precise instructions to a computer.',
                    'C is a foundational language for CS education.',
                    'The "Hello, World!" program is your first milestone.'
                ],
                practiceQuestions: ['Explain the role of a compiler.',
                    'What is the difference between a compiler and an interpreter?',
                    'Write a C program that prints your name 10 times using a loop.'
                ],
                youtube: 'https://www.youtube.com/embed/HB3UY0P9jPA'
            }, {
                id: 'cs101-t2',
                title: 'Variables & Data Types',
                objectives: ['Understand variables as containers for data.',
                    'Learn the basic data types in C: int, float, char, double.',
                    'Declare and initialize variables correctly.'
                ],
                content: `<p><strong>Variables:</strong> A variable is a named storage location in memory. You can think of it as a labeled box where you store values.</p><p><strong>Data Types:</strong> C has several built-in data types:</p><ul><li><strong>int</strong> – for whole numbers (e.g., 5, -3, 100)</li><li><strong>float</strong> – for decimal numbers (e.g., 3.14, -2.5)</li><li><strong>char</strong> – for single characters (e.g., 'A', 'b', '9')</li><li><strong>double</strong> – for high-precision decimals</li></ul><div class="key-box"><p><strong>💡 Pro Tip:</strong> Choose the smallest data type that can hold your values to save memory and improve performance.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: 'int age = 20;\nfloat pi = 3.14159;\nchar grade = \'A\';\ndouble salary = 50000.50;'
                }],
                keyTakeaways: ['Variables store data in memory.',
                    'C has several data types for different kinds of data.',
                    'Choose the right data type for efficiency.'
                ],
                practiceQuestions: ['What is the difference between float and double?',
                    'Declare a variable to store a student\'s name (as a string).',
                    'Write a program that prints the size of each data type using sizeof().'
                ],
                youtube: 'https://www.youtube.com/embed/b-c-n3p3BwQ'
            }, {
                id: 'cs101-t3',
                title: 'Control Structures (if, for, while)',
                objectives: ['Understand conditional execution using if/else.',
                    'Use loops (for, while) to repeat code.', 'Write programs that make decisions and repeat tasks.'
                ],
                content: `<p><strong>Control structures</strong> are the building blocks of logic in any program. They allow you to control the flow of execution.</p><p><strong>Conditional Statements:</strong> Use <code>if</code>, <code>else if</code>, and <code>else</code> to execute code only when certain conditions are met.</p><p><strong>Loops:</strong> <code>for</code>, <code>while</code>, and <code>do-while</code> let you repeat a block of code multiple times.</p><div class="key-box"><p><strong>💡 Think About It:</strong> Every algorithm you write will use some combination of conditions and loops. Master these and you'll be able to solve any problem.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: 'int num = 10;\nif (num > 0) {\n    printf("Positive\\n");\n} else {\n    printf("Non-positive\\n");\n}\n\nfor (int i = 1; i <= 5; i++) {\n    printf("%d ", i);\n}\nprintf("\\n");\n\nint j = 0;\nwhile (j < 3) {\n    printf("j = %d\\n", j);\n    j++;\n}'
                }],
                keyTakeaways: ['if/else allows decision-making in your code.',
                    'for loops are great for counting and iterating.',
                    'while loops are useful when you don\'t know the number of iterations upfront.'
                ],
                practiceQuestions: ['Write a program to check if a number is even or odd.',
                    'Print the sum of numbers from 1 to 100 using a for loop.',
                    'Write a program that keeps asking for a password until the correct one is entered.'
                ],
                youtube: 'https://www.youtube.com/embed/6M-hGmI3rMA'
            }]
        }, {
            id: 'ma101',
            code: 'MA101',
            name: 'Mathematics I',
            description: 'Calculus and Linear Algebra.',
            topics: [{
                id: 'ma101-t1',
                title: 'Limits & Continuity',
                objectives: ['Understand the concept of a limit.', 'Evaluate limits algebraically.',
                    'Determine continuity of functions.'
                ],
                content: `<p><strong>Limits:</strong> A limit describes the value that a function approaches as the input approaches a certain value. It's the foundation of calculus.</p><p><strong>Continuity:</strong> A function is continuous if there are no breaks, jumps, or holes in its graph. Formally, f(x) is continuous at x = a if lim(x→a) f(x) = f(a).</p><div class="key-box"><p><strong>💡 Why This Matters:</strong> Limits are the foundation of calculus. They allow us to define derivatives and integrals, which are essential for physics, engineering, and economics.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Limits describe behavior near a point.',
                    'Continuity means no breaks in the function.',
                    'These concepts are the building blocks of calculus.'
                ],
                practiceQuestions: ['Evaluate lim(x→2) (x² - 4)/(x - 2).',
                    'Is the function f(x) = 1/x continuous at x = 0? Explain.',
                    'Find the limit of (sin x)/x as x→0.'
                ],
                youtube: 'https://www.youtube.com/embed/riXcZT2ICjA'
            }]
        }, {
            id: 'ph101',
            code: 'PH101',
            name: 'Physics I',
            description: 'Mechanics and thermodynamics.',
            topics: [{
                id: 'ph101-t1',
                title: 'Newton\'s Laws of Motion',
                objectives: ['Understand the three laws of motion.', 'Apply Newton\'s laws to solve problems.',
                    'Recognize the concept of force and mass.'
                ],
                content: `<p><strong>Newton's First Law:</strong> An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction unless acted upon by an unbalanced force.</p><p><strong>Newton's Second Law:</strong> F = ma. The acceleration of an object is directly proportional to the net force applied and inversely proportional to its mass.</p><p><strong>Newton's Third Law:</strong> For every action, there is an equal and opposite reaction.</p><div class="key-box"><p><strong>💡 Real-World Application:</strong> These laws govern everything from cars accelerating on a highway to planets orbiting the sun.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Newton\'s First Law is the law of inertia.',
                    'Newton\'s Second Law: F = ma.',
                    'Newton\'s Third Law: action-reaction pairs.'
                ],
                practiceQuestions: ['Explain why you lurch forward when a bus stops suddenly.',
                    'A 10 kg object is pushed with a force of 50 N. What is its acceleration?',
                    'When you jump, why does the Earth not move significantly?'
                ],
                youtube: 'https://www.youtube.com/embed/5C5_dOEyAfk'
            }]
        }, {
            id: 'ec101',
            code: 'EC101',
            name: 'Basic Electronics',
            description: 'Circuits and semiconductors.',
            topics: [{
                id: 'ec101-t1',
                title: 'Ohm\'s Law & Circuits',
                objectives: ['Understand Ohm\'s Law (V = IR).',
                    'Analyze simple series and parallel circuits.',
                    'Calculate voltage, current, and resistance.'
                ],
                content: `<p><strong>Ohm's Law:</strong> The voltage across a resistor is directly proportional to the current flowing through it, with the resistance being the constant of proportionality: V = IR.</p><p><strong>Series Circuits:</strong> The current is the same through all components. The total resistance is the sum of individual resistances.</p><p><strong>Parallel Circuits:</strong> The voltage is the same across all branches. The total resistance is given by 1/R_total = 1/R1 + 1/R2 + ...</p><div class="key-box"><p><strong>💡 Quick Tip:</strong> Ohm's law is your most important tool in electronics. Memorize it and learn to apply it intuitively.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['V = IR is the fundamental relationship.',
                    'Series circuits have the same current; parallel circuits have the same voltage.',
                    'Calculate equivalent resistance for combined circuits.'
                ],
                practiceQuestions: ['If a resistor has 12 V across it and 3 A flowing, what is its resistance?',
                    'Calculate the total resistance of a 10Ω and 20Ω resistor in series.',
                    'What is the current through a 5Ω resistor connected to a 15 V battery?'
                ],
                youtube: 'https://www.youtube.com/embed/7BS4h-vDXBw'
            }]
        }]
    }, {
        id: 2,
        name: 'Semester 2',
        subjects: [{
            id: 'cs201',
            code: 'CS201',
            name: 'Data Structures',
            description: 'Stacks, queues, linked lists, trees.',
            topics: [{
                id: 'cs201-t1',
                title: 'Arrays & Linked Lists',
                objectives: ['Understand the array data structure.', 'Learn the linked list data structure.',
                    'Compare arrays and linked lists.'
                ],
                content: `<p><strong>Arrays:</strong> A contiguous block of memory that stores elements of the same type. Access is O(1), but insertion and deletion are O(n).</p><p><strong>Linked Lists:</strong> A linear collection of nodes, where each node points to the next. Insertion and deletion are O(1) at the head, but access is O(n).</p><div class="key-box"><p><strong>💡 When to Use:</strong> Use arrays when you need fast random access. Use linked lists when you need fast insertions/deletions.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: 'struct Node {\n    int data;\n    struct Node* next;\n};\n\nstruct Node* createNode(int data) {\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->next = NULL;\n    return newNode;\n}'
                }],
                keyTakeaways: ['Arrays have O(1) access, O(n) insertion/deletion.',
                    'Linked lists have O(n) access, O(1) insertion/deletion at head.',
                    'Each structure has its own strengths and weaknesses.'
                ],
                practiceQuestions: ['Implement a function to insert a node at the end of a linked list.',
                    'Compare the memory usage of an array vs. a linked list.',
                    'What is the time complexity of finding an element in an unsorted linked list?'
                ],
                youtube: 'https://www.youtube.com/embed/WwfhLC16fok'
            }, {
                id: 'cs201-t2',
                title: 'Stacks & Queues',
                objectives: ['Understand the stack data structure (LIFO).',
                    'Understand the queue data structure (FIFO).',
                    'Implement stacks and queues using arrays and linked lists.'
                ],
                content: `<p><strong>Stack:</strong> A Last-In-First-Out (LIFO) data structure. Operations: push (add), pop (remove), peek (view top).</p><p><strong>Queue:</strong> A First-In-First-Out (FIFO) data structure. Operations: enqueue (add), dequeue (remove), front (view).</p><div class="key-box"><p><strong>💡 Real-World Use:</strong> Stacks are used in function call management (recursion). Queues are used in task scheduling and buffering.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: '#define MAX 100\nint stack[MAX], top = -1;\n\nvoid push(int val) {\n    if (top >= MAX-1) { printf("Stack Overflow\\n"); return; }\n    stack[++top] = val;\n}\n\nint pop() {\n    if (top < 0) { printf("Stack Underflow\\n"); return -1; }\n    return stack[top--];\n}'
                }],
                keyTakeaways: ['Stack: LIFO — push, pop, peek.',
                    'Queue: FIFO — enqueue, dequeue, front.',
                    'Both are fundamental data structures with many applications.'
                ],
                practiceQuestions: ['How would you implement a stack using a linked list?',
                    'What is the time complexity of stack push and pop operations?',
                    'Write a function to check if parentheses are balanced using a stack.'
                ],
                youtube: 'https://www.youtube.com/embed/lyZQPjUT5B4'
            }]
        }, {
            id: 'cs202',
            code: 'CS202',
            name: 'Discrete Mathematics',
            description: 'Logic and set theory.',
            topics: [{
                id: 'cs202-t1',
                title: 'Propositional Logic',
                objectives: ['Understand propositions and logical connectives.',
                    'Learn truth tables and logical equivalence.', 'Apply logic to solve problems.'
                ],
                content: `<p><strong>Proposition:</strong> A statement that is either true or false.</p><p><strong>Logical Connectives:</strong> NOT (¬), AND (∧), OR (∨), IMPLIES (→), IF AND ONLY IF (↔).</p><p><strong>Truth Tables:</strong> A table that shows the truth value of a compound proposition for all possible truth values of its components.</p><div class="key-box"><p><strong>💡 Why This Matters:</strong> Logic is the foundation of computer science. It's used in programming, digital circuit design, and artificial intelligence.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Propositions are statements that are true or false.',
                    'Logical connectives combine propositions.',
                    'Truth tables are used to evaluate logical expressions.'
                ],
                practiceQuestions: ['Construct a truth table for (p ∧ q) → r.',
                    'Show that ¬(p ∨ q) ≡ ¬p ∧ ¬q (De Morgan\'s Law).',
                    'Is the statement (p → q) ∧ (q → p) equivalent to (p ↔ q)?'
                ],
                youtube: 'https://www.youtube.com/embed/afWMy1ZQeRU'
            }]
        }, {
            id: 'cs203',
            code: 'CS203',
            name: 'Computer Organization',
            description: 'CPU architecture and memory.',
            topics: [{
                id: 'cs203-t1',
                title: 'CPU Architecture',
                objectives: ['Understand the basic components of a CPU.',
                    'Learn about the fetch-decode-execute cycle.', 'Explore the memory hierarchy.'
                ],
                content: `<p><strong>CPU Components:</strong> The Central Processing Unit consists of the Arithmetic Logic Unit (ALU), the Control Unit (CU), and registers.</p><p><strong>Fetch-Decode-Execute Cycle:</strong> The CPU repeatedly fetches an instruction from memory, decodes it, and executes it.</p><p><strong>Memory Hierarchy:</strong> Registers, Cache, RAM, and Secondary Storage. Each level is faster and more expensive than the next.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> The memory hierarchy is a trade-off between speed, cost, and capacity.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['The CPU has an ALU, CU, and registers.',
                    'The fetch-decode-execute cycle is the core of CPU operation.',
                    'Memory hierarchy balances speed and cost.'
                ],
                practiceQuestions: ['Explain the difference between the ALU and the Control Unit.',
                    'What is the purpose of the program counter?',
                    'Why is cache memory faster than RAM?'
                ],
                youtube: 'https://www.youtube.com/embed/8pi0xWbZ3Z0'
            }]
        }]
    }, {
        id: 3,
        name: 'Semester 3',
        subjects: [{
            id: 'cs301',
            code: 'CS301',
            name: 'Object Oriented Programming',
            description: 'Classes, inheritance, polymorphism.',
            topics: [{
                id: 'cs301-t1',
                title: 'Classes & Objects',
                objectives: ['Understand the concept of a class as a blueprint.',
                    'Create objects from classes.', 'Understand encapsulation.'
                ],
                content: `<p><strong>Class:</strong> A blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) that the objects will have.</p><p><strong>Object:</strong> An instance of a class. It has state (values of its attributes) and behavior (methods).</p><p><strong>Encapsulation:</strong> Bundling the data and methods that operate on that data, and hiding the internal state from the outside.</p><div class="key-box"><p><strong>💡 OOP Pillar:</strong> Encapsulation helps you manage complexity and protect data integrity.</p></div>`,
                codeBlocks: [{ lang: 'cpp',
                    code: 'class Student {\nprivate:\n    string name;\n    int age;\npublic:\n    void setName(string n) { name = n; }\n    string getName() { return name; }\n    void setAge(int a) { age = a; }\n    int getAge() { return age; }\n};'
                }],
                keyTakeaways: ['A class is a blueprint; an object is an instance.',
                    'Encapsulation hides internal state.',
                    'Classes encapsulate data and behavior.'
                ],
                practiceQuestions: ['What is the difference between a class and an object?',
                    'Explain the concept of encapsulation with an example.',
                    'Why is encapsulation important in software design?'
                ],
                youtube: 'https://www.youtube.com/embed/fLMlTBFpFnE'
            }, {
                id: 'cs301-t2',
                title: 'Inheritance & Polymorphism',
                objectives: ['Understand inheritance as a mechanism for code reuse.',
                    'Learn about polymorphism and method overriding.',
                    'Write programs that use inheritance and polymorphism.'
                ],
                content: `<p><strong>Inheritance:</strong> A mechanism where a new class (derived class) is created from an existing class (base class). The derived class inherits the properties and methods of the base class.</p><p><strong>Polymorphism:</strong> The ability of an object to take many forms. It allows a base class reference to refer to a derived class object.</p><p><strong>Method Overriding:</strong> A derived class provides its own implementation of a method that is already defined in the base class.</p><div class="key-box"><p><strong>💡 OOP Pillars:</strong> Inheritance promotes code reuse. Polymorphism enables flexibility and extensibility.</p></div>`,
                codeBlocks: [{ lang: 'cpp',
                    code: 'class Animal {\npublic:\n    virtual void speak() { cout << "Animal speaks" << endl; }\n};\n\nclass Dog : public Animal {\npublic:\n    void speak() override { cout << "Dog barks" << endl; }\n};'
                }],
                keyTakeaways: ['Inheritance allows a class to reuse code from another class.',
                    'Polymorphism allows objects to behave differently based on their type.',
                    'Method overriding is a key feature of polymorphism.'
                ],
                practiceQuestions: ['What is the difference between inheritance and composition?',
                    'Explain the concept of polymorphism with a real-world analogy.',
                    'What is the purpose of the virtual keyword in C++?'
                ],
                youtube: 'https://www.youtube.com/embed/0PyeCJEQpBU'
            }]
        }, {
            id: 'cs302',
            code: 'CS302',
            name: 'Database Management Systems',
            description: 'SQL and relational databases.',
            topics: [{
                id: 'cs302-t1',
                title: 'Introduction to SQL',
                objectives: ['Understand the purpose of SQL.',
                    'Write basic SQL queries (SELECT, INSERT, UPDATE, DELETE).',
                    'Use WHERE clauses and operators.'
                ],
                content: `<p><strong>SQL (Structured Query Language):</strong> The standard language for managing and manipulating relational databases.</p><p><strong>Basic Queries:</strong> SELECT, INSERT, UPDATE, DELETE.</p><p><strong>WHERE Clause:</strong> Used to filter records based on a condition.</p><div class="key-box"><p><strong>💡 Pro Tip:</strong> Always use parameterized queries to prevent SQL injection attacks!</p></div>`,
                codeBlocks: [{ lang: 'sql',
                    code: '-- Select all students\nSELECT * FROM students;\n\n-- Insert a new student\nINSERT INTO students (name, age) VALUES (\'John\', 22);\n\n-- Update a student\'s age\nUPDATE students SET age = 23 WHERE name = \'John\';\n\n-- Delete a student\nDELETE FROM students WHERE name = \'John\';'
                }],
                keyTakeaways: ['SQL is used to interact with relational databases.',
                    'SELECT retrieves data, INSERT adds, UPDATE modifies, DELETE removes.',
                    'WHERE filters records.'
                ],
                practiceQuestions: ['Write a SQL query to get all students with age greater than 20.',
                    'What is the difference between DELETE and TRUNCATE?',
                    'How would you retrieve students sorted by name?'
                ],
                youtube: 'https://www.youtube.com/embed/7S_tz1z_5bA'
            }]
        }]
    }, {
        id: 4,
        name: 'Semester 4',
        subjects: [{
            id: 'cs401',
            code: 'CS401',
            name: 'Analysis of Algorithms',
            description: 'Time complexity and sorting.',
            topics: [{
                id: 'cs401-t1',
                title: 'Asymptotic Notation',
                objectives: ['Understand Big O, Omega, and Theta notations.',
                    'Analyze the time complexity of simple algorithms.',
                    'Use recurrence relations to analyze recursive algorithms.'
                ],
                content: `<p><strong>Big O Notation:</strong> Describes the upper bound of an algorithm's running time. It gives the worst-case time complexity.</p><p><strong>Omega (Ω) Notation:</strong> Describes the lower bound. It gives the best-case time complexity.</p><p><strong>Theta (Θ) Notation:</strong> Describes the tight bound. It gives the average-case time complexity.</p><div class="key-box"><p><strong>💡 Why It Matters:</strong> Asymptotic analysis allows you to compare algorithms independently of hardware and implementation details.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Big O is the upper bound (worst-case).',
                    'Omega is the lower bound (best-case).',
                    'Theta is the tight bound (average-case).'
                ],
                practiceQuestions: ['What is the time complexity of nested loops?',
                    'Explain why O(1) is better than O(n).',
                    'What is the recurrence relation for merge sort?'
                ],
                youtube: 'https://www.youtube.com/embed/2pP8QmTrUVs'
            }, {
                id: 'cs401-t2',
                title: 'Sorting Algorithms',
                objectives: ['Understand the key sorting algorithms: Bubble, Insertion, Selection, Merge, Quick.',
                    'Analyze their time and space complexities.', 'Implement sorting algorithms in code.'
                ],
                content: `<p><strong>Bubble Sort:</strong> Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. Time: O(n²).</p><p><strong>Merge Sort:</strong> Divide and conquer algorithm. Divides the array into two halves, recursively sorts them, and merges the results. Time: O(n log n).</p><p><strong>Quick Sort:</strong> Picks a pivot and partitions the array around it. Time: O(n log n) average, O(n²) worst-case.</p><div class="key-box"><p><strong>💡 Choose Wisely:</strong> Merge sort is stable and predictable. Quick sort is faster on average but has a worst-case of O(n²).</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: 'void quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}'
                }],
                keyTakeaways: ['Bubble, Insertion, Selection are O(n²).',
                    'Merge and Quick sort are O(n log n) on average.',
                    'Choice of algorithm depends on the data and requirements.'
                ],
                practiceQuestions: ['Compare and contrast Merge Sort and Quick Sort.',
                    'What is the worst-case time complexity of Quick Sort? When does it happen?',
                    'Implement Bubble Sort and analyze its performance.'
                ],
                youtube: 'https://www.youtube.com/embed/2m3iRz6nK4Y'
            }]
        }, {
            id: 'cs402',
            code: 'CS402',
            name: 'Software Engineering',
            description: 'SDLC and Agile methodologies.',
            topics: [{
                id: 'cs402-t1',
                title: 'SDLC & Agile',
                objectives: ['Understand the Software Development Life Cycle (SDLC).',
                    'Learn about Agile methodologies.', 'Compare Waterfall and Agile approaches.'
                ],
                content: `<p><strong>SDLC:</strong> The Software Development Life Cycle is a structured process for building software. Phases: Requirements → Design → Implementation → Testing → Deployment → Maintenance.</p><p><strong>Waterfall:</strong> A linear, sequential approach where each phase must be completed before the next begins.</p><p><strong>Agile:</strong> An iterative approach where software is developed in small increments (sprints) with continuous feedback.</p><div class="key-box"><p><strong>💡 Industry Standard:</strong> Agile is the dominant methodology in modern software development.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['SDLC provides a structured framework for software development.',
                    'Waterfall is linear; Agile is iterative.',
                    'Agile emphasizes collaboration and flexibility.'
                ],
                practiceQuestions: ['What are the phases of the SDLC?',
                    'Compare and contrast Waterfall and Agile.', 'What is a sprint in Agile methodology?'
                ],
                youtube: 'https://www.youtube.com/embed/NnH3H0uR7y8'
            }]
        }]
    }, {
        id: 5,
        name: 'Semester 5',
        subjects: [{
            id: 'cs501',
            code: 'CS501',
            name: 'Operating Systems',
            description: 'Process management and scheduling.',
            topics: [{
                id: 'cs501-t1',
                title: 'Process Scheduling',
                objectives: ['Understand processes and threads.', 'Learn CPU scheduling algorithms.',
                    'Implement scheduling algorithms.'
                ],
                content: `<p><strong>Process:</strong> A program in execution. It has its own memory space, registers, and program counter.</p><p><strong>Scheduling Algorithms:</strong> FCFS (First-Come First-Served), SJF (Shortest Job First), Round Robin, Priority Scheduling.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> The goal of scheduling is to maximize CPU utilization and minimize turnaround time.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Processes are programs in execution.',
                    'Scheduling algorithms manage CPU time allocation.',
                    'Different algorithms have different performance characteristics.'
                ],
                practiceQuestions: ['Compare FCFS and Round Robin scheduling.',
                    'What is the convoy effect in FCFS?', 'Implement a simple round-robin scheduler.'
                ],
                youtube: 'https://www.youtube.com/embed/6aN8LwQ_nlw'
            }]
        }, {
            id: 'cs502',
            code: 'CS502',
            name: 'Computer Networks',
            description: 'OSI and TCP/IP models.',
            topics: [{
                id: 'cs502-t1',
                title: 'OSI Model',
                objectives: ['Understand the OSI reference model.', 'Learn the functions of each layer.',
                    'Compare OSI with TCP/IP.'
                ],
                content: `<p><strong>OSI Model:</strong> 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.</p><p><strong>TCP/IP:</strong> 4 layers: Network Interface, Internet, Transport, Application.</p><div class="key-box"><p><strong>💡 Why It Matters:</strong> The OSI model is a conceptual framework for understanding how data travels across a network.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['OSI has 7 layers; TCP/IP has 4 layers.',
                    'Each layer has specific functions.',
                    'TCP/IP is the practical implementation of networking.'
                ],
                practiceQuestions: ['What are the functions of the Transport layer?',
                    'Compare OSI and TCP/IP models.', 'Explain the role of the Network layer.'
                ],
                youtube: 'https://www.youtube.com/embed/7IS7p2Nq1z8'
            }]
        }]
    }, {
        id: 6,
        name: 'Semester 6',
        subjects: [{
            id: 'cs601',
            code: 'CS601',
            name: 'Artificial Intelligence',
            description: 'Search algorithms and knowledge representation.',
            topics: [{
                id: 'cs601-t1',
                title: 'Search Algorithms',
                objectives: ['Understand uninformed search (BFS, DFS).',
                    'Learn informed search (A*, Greedy).', 'Implement search algorithms.'
                ],
                content: `<p><strong>Uninformed Search:</strong> BFS (Breadth-First Search), DFS (Depth-First Search), Uniform Cost.</p><p><strong>Informed Search:</strong> Greedy Best-First, A* (uses heuristics to guide the search).</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Heuristics improve search efficiency by guiding the search towards the goal.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['BFS and DFS are fundamental search algorithms.',
                    'A* uses heuristics to find optimal paths.',
                    'Search algorithms are used in many AI applications.'
                ],
                practiceQuestions: ['Compare BFS and DFS.', 'Explain the role of a heuristic function in A*.',
                    'Implement a simple pathfinding algorithm.'
                ],
                youtube: 'https://www.youtube.com/embed/6jT1Nc7Z-tA'
            }]
        }, {
            id: 'cs602',
            code: 'CS602',
            name: 'Web Technologies',
            description: 'HTML, CSS, and JavaScript.',
            topics: [{
                id: 'cs602-t1',
                title: 'HTML & CSS Basics',
                objectives: ['Understand HTML structure and tags.', 'Learn CSS for styling.',
                    'Build a simple webpage.'
                ],
                content: `<p><strong>HTML:</strong> HyperText Markup Language is used to structure web content. It uses tags to define elements like headings, paragraphs, and links.</p><p><strong>CSS:</strong> Cascading Style Sheets is used for presentation. It controls layout, colors, fonts, and animations.</p><p><strong>Box Model:</strong> Every HTML element is a box with margin, border, padding, and content.</p><div class="key-box"><p><strong>💡 Pro Tip:</strong> Use semantic HTML (like &lt;article&gt;, &lt;section&gt;, &lt;nav&gt;) for better accessibility and SEO.</p></div>`,
                codeBlocks: [{ lang: 'html',
                    code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n    <style>\n        body { font-family: Arial; background: #f0f0f0; }\n        h1 { color: blue; }\n    </style>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n    <p>This is my first webpage.</p>\n</body>\n</html>'
                }],
                keyTakeaways: ['HTML provides structure.', 'CSS provides style.',
                    'The box model is fundamental to layout.'
                ],
                practiceQuestions: ['What is the difference between HTML and CSS?',
                    'Explain the CSS box model.', 'Create a simple styled webpage.'
                ],
                youtube: 'https://www.youtube.com/embed/UB1O30fR-EE'
            }]
        }]
    }, {
        id: 7,
        name: 'Semester 7',
        subjects: [{
            id: 'cs701',
            code: 'CS701',
            name: 'Machine Learning',
            description: 'Supervised and unsupervised learning.',
            topics: [{
                id: 'cs701-t1',
                title: 'Linear Regression',
                objectives: ['Understand linear regression.', 'Learn cost functions and gradient descent.',
                    'Implement linear regression.'
                ],
                content: `<p><strong>Linear Regression:</strong> A statistical method for modeling the relationship between a dependent variable and one or more independent variables. It finds the best-fit line that minimizes the sum of squared errors.</p><p><strong>Cost Function:</strong> Mean Squared Error (MSE) is commonly used to measure the error of the model.</p><p><strong>Gradient Descent:</strong> An optimization algorithm that iteratively adjusts the parameters to minimize the cost function.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Linear regression is the foundation of many machine learning models, including neural networks.</p></div>`,
                codeBlocks: [{ lang: 'python',
                    code: 'import numpy as np\n\nX = np.array([1, 2, 3, 4, 5])\ny = np.array([2, 4, 6, 8, 10])\n\n# Fit linear regression using polyfit (least squares)\ncoef = np.polyfit(X, y, 1)\nprint(f"Slope: {coef[0]}, Intercept: {coef[1]}")'
                }],
                keyTakeaways: ['Linear regression models linear relationships.',
                    'Gradient descent optimizes the cost function.',
                    'It\'s a fundamental algorithm in machine learning.'
                ],
                practiceQuestions: ['Explain the cost function in linear regression.',
                    'What is gradient descent and why is it used?', 'Implement linear regression using a dataset.'
                ],
                youtube: 'https://www.youtube.com/embed/7ArmBVF2dCs'
            }]
        }, {
            id: 'cs702',
            code: 'CS702',
            name: 'Cloud Computing',
            description: 'IaaS, PaaS, SaaS models.',
            topics: [{
                id: 'cs702-t1',
                title: 'Cloud Service Models',
                objectives: ['Understand IaaS, PaaS, SaaS.', 'Learn about virtualization.', 'Explore cloud providers.'
                ],
                content: `<p><strong>IaaS:</strong> Infrastructure as a Service (e.g., AWS EC2, GCP Compute Engine). Provides virtualized hardware resources like servers, storage, and networking.</p><p><strong>PaaS:</strong> Platform as a Service (e.g., Google App Engine, AWS Elastic Beanstalk). Provides a platform for developing and deploying applications without managing the underlying infrastructure.</p><p><strong>SaaS:</strong> Software as a Service (e.g., Google Workspace, Salesforce). Provides ready-to-use software applications delivered over the internet.</p><div class="key-box"><p><strong>💡 Why It Matters:</strong> Cloud computing is the backbone of modern IT infrastructure, enabling scalability, cost-efficiency, and innovation.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['IaaS provides virtualized hardware.',
                    'PaaS provides a platform for application development.',
                    'SaaS provides ready-to-use software.'
                ],
                practiceQuestions: ['Compare IaaS, PaaS, and SaaS.',
                    'What is virtualization and how does it enable cloud computing?',
                    'List some popular cloud providers and their services.'
                ],
                youtube: 'https://www.youtube.com/embed/7is6hBd8-DY'
            }]
        }]
    }, {
        id: 8,
        name: 'Semester 8',
        subjects: [{
            id: 'cs801',
            code: 'CS801',
            name: 'Cyber Security',
            description: 'Cryptography and network security.',
            topics: [{
                id: 'cs801-t1',
                title: 'Introduction to Cryptography',
                objectives: ['Understand symmetric and asymmetric encryption.',
                    'Learn about hashing and digital signatures.', 'Explore cryptographic protocols.'
                ],
                content: `<p><strong>Symmetric Encryption:</strong> Uses the same key for encryption and decryption (e.g., AES, DES). Fast and efficient for bulk data.</p><p><strong>Asymmetric Encryption:</strong> Uses a public/private key pair (e.g., RSA, ECC). The public key encrypts, the private key decrypts. Slower but provides authentication and non-repudiation.</p><p><strong>Hashing:</strong> A one-way function that converts data into a fixed-size hash (e.g., SHA-256). Used for data integrity and password storage.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Cryptography is the foundation of modern security, ensuring confidentiality, integrity, and authenticity.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Symmetric encryption uses one key.',
                    'Asymmetric encryption uses a key pair.', 'Hashing is used for data integrity.'
                ],
                practiceQuestions: ['Explain the difference between symmetric and asymmetric encryption.',
                    'What is a digital signature and how does it work?', 'How does hashing ensure data integrity?'
                ],
                youtube: 'https://www.youtube.com/embed/6Fp4PPQh2_o'
            }]
        }, {
            id: 'cs802',
            code: 'CS802',
            name: 'Project Work',
            description: 'Capstone project integrating all disciplines.',
            topics: [{
                id: 'cs802-t1',
                title: 'Project Planning & Execution',
                objectives: ['Plan a software project.', 'Apply project management techniques.',
                    'Deliver a working prototype.'
                ],
                content: `<p><strong>Project Lifecycle:</strong> Initiation, Planning, Execution, Monitoring & Control, Closure.</p><p><strong>Agile Project Management:</strong> Scrum (sprints, daily stand-ups, retrospectives) and Kanban (visualizing workflow).</p><p><strong>Documentation:</strong> SRS (Software Requirements Specification), Design Documents, Test Plans, User Manuals.</p><div class="key-box"><p><strong>💡 Pro Tip:</strong> A well-documented project is a successful project. Documentation ensures maintainability and reduces onboarding time.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Project planning is crucial for success.',
                    'Agile methodologies enable iterative development.',
                    'Documentation is essential for maintainability.'
                ],
                practiceQuestions: ['What are the phases of a project life cycle?',
                    'Explain the Scrum framework.', 'What should be included in an SRS?'
                ],
                youtube: 'https://www.youtube.com/embed/5Exi7IhJ9-Q'
            }]
        }]
    }]
};

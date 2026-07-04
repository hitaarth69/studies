const SYLLABUS = {
    semesters: [{
        id: 1,
        name: 'Semester 1',
        subjects: [{
            id: 'ma101',
            code: 'MA101',
            name: 'Integral Calculus & Linear Algebra',
            description: 'Integration techniques, differential equations, matrices, and vector spaces.',
            topics: [{
                id: 'ma101-t1',
                title: 'Integral Calculus',
                objectives: ['Understand definite and indefinite integrals.',
                    'Learn integration techniques (substitution, by parts, partial fractions).',
                    'Apply integrals to find areas and volumes.'
                ],
                content: `<p><strong>Integral Calculus</strong> is the study of accumulation and area under curves. It is the inverse operation of differentiation.</p><p><strong>Definite Integral:</strong> Represents the signed area between a function and the x-axis over a specific interval. It is denoted as ∫<sub>a</sub><sup>b</sup> f(x) dx.</p><p><strong>Indefinite Integral:</strong> Represents the family of antiderivatives of a function. It is denoted as ∫ f(x) dx = F(x) + C.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> The Fundamental Theorem of Calculus connects differentiation and integration, making them inverse operations.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Integration is the inverse of differentiation.',
                    'Definite integrals find area under curves.',
                    'The Fundamental Theorem of Calculus links derivatives and integrals.'
                ],
                practiceQuestions: ['Evaluate ∫ (3x² + 2x + 1) dx.',
                    'Find the area under y = x² from x=0 to x=2.',
                    'Apply integration by parts to ∫ x·eˣ dx.'
                ],
                youtube: 'https://www.youtube.com/embed/2I5hQwZPjL4'
            }, {
                id: 'ma101-t2',
                title: 'Linear Algebra',
                objectives: ['Understand vectors and matrices.',
                    'Learn matrix operations (addition, multiplication, inverse).',
                    'Apply linear algebra to solve systems of equations.'
                ],
                content: `<p><strong>Linear Algebra</strong> is the study of vectors, vector spaces, and linear transformations. It is fundamental to machine learning, computer graphics, and quantum mechanics.</p><p><strong>Vectors:</strong> Objects that have both magnitude and direction. Represented as ordered lists of numbers.</p><p><strong>Matrices:</strong> Rectangular arrays of numbers used to represent linear transformations and systems of equations.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Linear algebra is the language of machine learning. Nearly every algorithm uses vectors and matrices.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Vectors have magnitude and direction.',
                    'Matrices represent linear transformations.',
                    'Linear algebra is essential for data science and AI.'
                ],
                practiceQuestions: ['What is a vector space?',
                    'Find the inverse of a 2×2 matrix.',
                    'Solve a system of linear equations using matrices.'
                ],
                youtube: 'https://www.youtube.com/embed/kjBOesZCoqc'
            }]
        }, {
            id: 'ph101',
            code: 'PH101',
            name: 'Engineering Physics',
            description: 'Classical mechanics, thermodynamics, waves, and optics.',
            topics: [{
                id: 'ph101-t1',
                title: 'Classical Mechanics',
                objectives: ['Understand Newton\'s laws of motion.',
                    'Learn work, energy, and power concepts.',
                    'Apply conservation laws to solve problems.'
                ],
                content: `<p><strong>Newton's Laws of Motion:</strong> The foundation of classical mechanics.</p><ul><li><strong>First Law (Inertia):</strong> An object at rest stays at rest unless acted upon by an external force.</li><li><strong>Second Law (F=ma):</strong> The acceleration of an object is proportional to the net force applied.</li><li><strong>Third Law (Action-Reaction):</strong> Every action has an equal and opposite reaction.</li></ul><div class="key-box"><p><strong>💡 Real-World Application:</strong> These laws govern everything from car crashes to rocket launches.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Newton\'s laws describe motion.',
                    'F = ma is the core equation of mechanics.',
                    'Conservation laws simplify problem-solving.'
                ],
                practiceQuestions: ['Explain why you lurch forward when a bus stops suddenly.',
                    'A 10 kg object is pushed with a force of 50 N. What is its acceleration?',
                    'When you jump, why does the Earth not move significantly?'
                ],
                youtube: 'https://www.youtube.com/embed/5C5_dOEyAfk'
            }, {
                id: 'ph101-t2',
                title: 'Thermodynamics & Waves',
                objectives: ['Understand laws of thermodynamics.',
                    'Learn concepts of heat, work, and entropy.',
                    'Understand wave motion and sound.'
                ],
                content: `<p><strong>Thermodynamics:</strong> The study of heat, work, and energy transfer.</p><ul><li><strong>First Law:</strong> Energy cannot be created or destroyed.</li><li><strong>Second Law:</strong> Entropy always increases in an isolated system.</li></ul><p><strong>Wave Motion:</strong> Waves transfer energy without transferring matter. Types: transverse and longitudinal.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Thermodynamics governs the efficiency of engines and power plants.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Thermodynamics deals with heat and work.',
                    'Entropy measures disorder.',
                    'Waves transfer energy without matter transfer.'
                ],
                practiceQuestions: ['What is the first law of thermodynamics?',
                    'Explain the concept of entropy.',
                    'What is the difference between transverse and longitudinal waves?'
                ],
                youtube: 'https://www.youtube.com/embed/6sGmm0rlLgk'
            }]
        }, {
            id: 'cs101',
            code: 'CS101',
            name: 'Programming Fundamentals (C/C++)',
            description: 'Introduction to programming using C and C++.',
            topics: [{
                id: 'cs101-t1',
                title: 'Introduction to C Programming',
                objectives: ['Understand programming concepts.',
                    'Set up a development environment.',
                    'Write your first C program.'
                ],
                content: `<p><strong>What is Programming?</strong> Programming is the art of giving instructions to a computer to perform specific tasks.</p><p><strong>Why C?</strong> C is a powerful, efficient language that gives you low-level control over system resources. It's the mother of many modern languages like C++, Java, and Python.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Mastering C gives you a deep understanding of how computers work.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}'
                }],
                keyTakeaways: ['Programming is giving instructions to a computer.',
                    'C is a foundational language.', 'Hello World is your first milestone.'
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
                content: `<p><strong>Variables:</strong> A variable is a named storage location in memory.</p><p><strong>Data Types:</strong> C has several built-in data types:</p><ul><li><strong>int</strong> – whole numbers</li><li><strong>float</strong> – decimal numbers</li><li><strong>char</strong> – single characters</li><li><strong>double</strong> – high-precision decimals</li></ul><div class="key-box"><p><strong>💡 Pro Tip:</strong> Choose the smallest data type that can hold your values to save memory.</p></div>`,
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
                    'Use loops (for, while) to repeat code.',
                    'Write programs that make decisions and repeat tasks.'
                ],
                content: `<p><strong>Control structures</strong> are the building blocks of logic in any program.</p><p><strong>Conditional Statements:</strong> Use <code>if</code>, <code>else if</code>, and <code>else</code> to execute code only when certain conditions are met.</p><p><strong>Loops:</strong> <code>for</code>, <code>while</code>, and <code>do-while</code> let you repeat a block of code multiple times.</p><div class="key-box"><p><strong>💡 Think About It:</strong> Every algorithm uses some combination of conditions and loops.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: 'int num = 10;\nif (num > 0) {\n    printf("Positive\\n");\n} else {\n    printf("Non-positive\\n");\n}\n\nfor (int i = 1; i <= 5; i++) {\n    printf("%d ", i);\n}\nprintf("\\n");\n\nint j = 0;\nwhile (j < 3) {\n    printf("j = %d\\n", j);\n    j++;\n}'
                }],
                keyTakeaways: ['if/else allows decision-making.',
                    'for loops are great for counting.',
                    'while loops are useful for unknown iterations.'
                ],
                practiceQuestions: ['Write a program to check if a number is even or odd.',
                    'Print the sum of numbers from 1 to 100 using a for loop.',
                    'Write a program that keeps asking for a password until the correct one is entered.'
                ],
                youtube: 'https://www.youtube.com/embed/6M-hGmI3rMA'
            }]
        }, {
            id: 'eg101',
            code: 'EG101',
            name: 'Engineering Graphics & Design',
            description: 'Technical drawing, CAD, and engineering visualization.',
            topics: [{
                id: 'eg101-t1',
                title: 'Introduction to Engineering Drawing',
                objectives: ['Understand orthographic projections.',
                    'Learn isometric and perspective drawing.',
                    'Use CAD software for drafting.'
                ],
                content: `<p><strong>Engineering Drawing</strong> is the universal language of engineers. It communicates design ideas through precise graphical representations.</p><p><strong>Orthographic Projection:</strong> Represents a 3D object in 2D using multiple views (front, top, side).</p><p><strong>Isometric Projection:</strong> Represents a 3D object in a single view with all axes equally foreshortened.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Engineering graphics is essential for communicating design intent in manufacturing and construction.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Engineering drawing is a universal language.',
                    'Orthographic projections show multiple views.',
                    'Isometric projections show 3D in 2D.'
                ],
                practiceQuestions: ['What is the difference between orthographic and isometric projection?',
                    'Draw the front, top, and side views of a simple object.',
                    'What is the purpose of dimensioning in engineering drawings?'
                ],
                youtube: 'https://www.youtube.com/embed/7GwPlmHqM3E'
            }]
        }, {
            id: 'de101',
            code: 'DE101',
            name: 'Digital Electronics & Logic Design',
            description: 'Digital circuits, Boolean algebra, logic gates, and sequential circuits.',
            topics: [{
                id: 'de101-t1',
                title: 'Boolean Algebra & Logic Gates',
                objectives: ['Understand Boolean algebra laws.',
                    'Learn logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR).',
                    'Design combinational circuits.'
                ],
                content: `<p><strong>Boolean Algebra:</strong> A mathematical system for representing and manipulating logical expressions. It uses binary variables (0 and 1).</p><p><strong>Logic Gates:</strong> Electronic circuits that perform logical operations on one or more binary inputs to produce a single output.</p><ul><li><strong>AND:</strong> Output is 1 only if all inputs are 1.</li><li><strong>OR:</strong> Output is 1 if at least one input is 1.</li><li><strong>NOT:</strong> Inverts the input.</li></ul><div class="key-box"><p><strong>💡 Key Insight:</strong> Logic gates are the building blocks of all digital circuits, including microprocessors.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Boolean algebra uses binary variables.',
                    'Logic gates perform logical operations.',
                    'Digital circuits are built from logic gates.'
                ],
                practiceQuestions: ['What is the truth table for an AND gate?',
                    'Simplify the expression (A+B)·(A+C) using Boolean algebra.',
                    'Design a half-adder circuit using logic gates.'
                ],
                youtube: 'https://www.youtube.com/embed/gI-qXk7XojA'
            }, {
                id: 'de101-t2',
                title: 'Sequential Circuits',
                objectives: ['Understand flip-flops and latches.',
                    'Learn counters and shift registers.',
                    'Design state machines.'
                ],
                content: `<p><strong>Sequential Circuits:</strong> Digital circuits where the output depends not only on the current inputs but also on the previous state (memory).</p><p><strong>Flip-Flops:</strong> Basic memory elements that store one bit of data. Types: SR, D, JK, T.</p><p><strong>State Machines:</strong> Used to design complex sequential circuits like traffic lights and vending machines.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Sequential circuits are the foundation of computer memory and processors.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Sequential circuits have memory.',
                    'Flip-flops store single bits.',
                    'State machines model complex behaviors.'
                ],
                practiceQuestions: ['What is the difference between a latch and a flip-flop?',
                    'Design a 4-bit up-counter using JK flip-flops.',
                    'What is a finite state machine (FSM)?'
                ],
                youtube: 'https://www.youtube.com/embed/A4o3S73RcBw'
            }]
        }, {
            id: 'es101',
            code: 'ES101',
            name: 'Environmental Sciences',
            description: 'Ecology, pollution, climate change, and sustainable development.',
            topics: [{
                id: 'es101-t1',
                title: 'Introduction to Environmental Science',
                objectives: ['Understand ecological principles.',
                    'Learn about pollution and its effects.',
                    'Explore sustainable development.'
                ],
                content: `<p><strong>Environmental Science</strong> is the study of the environment and the interactions between humans and nature.</p><p><strong>Pollution:</strong> Types include air, water, soil, and noise pollution. Causes: industrialization, urbanization, and deforestation.</p><p><strong>Sustainable Development:</strong> Meeting the needs of the present without compromising the ability of future generations to meet their own needs.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Sustainable development is the key to balancing economic growth with environmental protection.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Environmental science studies human-nature interactions.',
                    'Pollution harms ecosystems and human health.',
                    'Sustainability ensures future generations can thrive.'
                ],
                practiceQuestions: ['What are the major types of pollution?',
                    'Explain the concept of sustainable development.',
                    'What is the greenhouse effect and how does it contribute to climate change?'
                ],
                youtube: 'https://www.youtube.com/embed/tYj3-Hz2xH8'
            }]
        }, {
            id: 'cs102',
            code: 'CS102',
            name: 'Communication Skills',
            description: 'Technical communication, presentation skills, and professional writing.',
            topics: [{
                id: 'cs102-t1',
                title: 'Technical Communication',
                objectives: ['Understand the importance of communication in engineering.',
                    'Learn technical writing and documentation skills.',
                    'Develop presentation and public speaking skills.'
                ],
                content: `<p><strong>Communication Skills</strong> are essential for engineers to convey technical ideas effectively to colleagues, clients, and stakeholders.</p><p><strong>Technical Writing:</strong> Writing clear, concise, and accurate technical documents, reports, and manuals.</p><p><strong>Presentation Skills:</strong> Delivering engaging and informative presentations using visual aids and effective speaking techniques.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Strong communication skills differentiate good engineers from great engineers.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Communication is critical for engineering success.',
                    'Technical writing must be clear and concise.',
                    'Effective presentations engage the audience.'
                ],
                practiceQuestions: ['What are the key elements of a technical report?',
                    'How would you prepare for a technical presentation?',
                    'What is the importance of active listening in communication?'
                ],
                youtube: 'https://www.youtube.com/embed/kRjGq-Mk5UA'
            }]
        }]
    }, {
        id: 2,
        name: 'Semester 2',
        subjects: [{
            id: 'cs201',
            code: 'CS201',
            name: 'Data Structures & Algorithms',
            description: 'Arrays, linked lists, stacks, queues, trees, graphs, and algorithm design.',
            topics: [{
                id: 'cs201-t1',
                title: 'Arrays & Linked Lists',
                objectives: ['Understand arrays as contiguous memory blocks.',
                    'Learn linked lists as dynamic data structures.',
                    'Compare arrays and linked lists.'
                ],
                content: `<p><strong>Arrays:</strong> A contiguous block of memory that stores elements of the same type. Access is O(1), but insertion and deletion are O(n).</p><p><strong>Linked Lists:</strong> A linear collection of nodes, where each node points to the next. Insertion and deletion are O(1) at the head, but access is O(n).</p><div class="key-box"><p><strong>💡 When to Use:</strong> Arrays for fast random access. Linked lists for fast insertions/deletions.</p></div>`,
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
                content: `<p><strong>Stack:</strong> A Last-In-First-Out (LIFO) data structure. Operations: push (add), pop (remove), peek (view top).</p><p><strong>Queue:</strong> A First-In-First-Out (FIFO) data structure. Operations: enqueue (add), dequeue (remove), front (view).</p><div class="key-box"><p><strong>💡 Real-World Use:</strong> Stacks are used in function call management (recursion). Queues are used in task scheduling.</p></div>`,
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
            }, {
                id: 'cs201-t3',
                title: 'Trees & Graphs',
                objectives: ['Understand tree data structures (binary, BST, AVL).',
                    'Learn graph representations (adjacency matrix, adjacency list).',
                    'Implement tree and graph traversals.'
                ],
                content: `<p><strong>Trees:</strong> Hierarchical data structures with a root node and child nodes. Binary trees have at most two children per node.</p><p><strong>Graphs:</strong> Networks of nodes connected by edges. Can be directed or undirected.</p><p><strong>Traversals:</strong> DFS (Depth-First Search) and BFS (Breadth-First Search) are used to explore trees and graphs.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Trees and graphs model real-world relationships like file systems, social networks, and maps.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: 'struct Node {\n    int data;\n    struct Node* left;\n    struct Node* right;\n};\n\nvoid inorder(struct Node* root) {\n    if (root == NULL) return;\n    inorder(root->left);\n    printf("%d ", root->data);\n    inorder(root->right);\n}'
                }],
                keyTakeaways: ['Trees are hierarchical structures.',
                    'Graphs represent networks of relationships.',
                    'DFS and BFS are essential traversal algorithms.'
                ],
                practiceQuestions: ['What is the difference between a binary tree and a binary search tree?',
                    'Implement a function to search for a node in a BST.',
                    'How would you detect a cycle in a graph using DFS?'
                ],
                youtube: 'https://www.youtube.com/embed/4t5wjGG6CO8'
            }]
        }, {
            id: 'cs202',
            code: 'CS202',
            name: 'Object-Oriented Programming (Java/C++)',
            description: 'Classes, objects, inheritance, polymorphism, encapsulation, and abstraction.',
            topics: [{
                id: 'cs202-t1',
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
                id: 'cs202-t2',
                title: 'Inheritance & Polymorphism',
                objectives: ['Understand inheritance as a mechanism for code reuse.',
                    'Learn about polymorphism and method overriding.',
                    'Write programs that use inheritance and polymorphism.'
                ],
                content: `<p><strong>Inheritance:</strong> A mechanism where a new class (derived class) is created from an existing class (base class). The derived class inherits the properties and methods of the base class.</p><p><strong>Polymorphism:</strong> The ability of an object to take many forms. It allows a base class reference to refer to a derived class object.</p><p><strong>Method Overriding:</strong> A derived class provides its own implementation of a method that is already defined in the base class.</p><div class="key-box"><p><strong>💡 OOP Pillars:</strong> Inheritance promotes code reuse. Polymorphism enables flexibility.</p></div>`,
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
            id: 'cs203',
            code: 'CS203',
            name: 'Database Management Systems (DBMS)',
            description: 'Relational databases, SQL, normalization, transactions, and indexing.',
            topics: [{
                id: 'cs203-t1',
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
            }, {
                id: 'cs203-t2',
                title: 'Normalization & Transactions',
                objectives: ['Understand normalization (1NF, 2NF, 3NF, BCNF).',
                    'Learn about ACID properties of transactions.',
                    'Understand indexing and query optimization.'
                ],
                content: `<p><strong>Normalization:</strong> The process of organizing data in a database to reduce redundancy and improve data integrity.</p><ul><li><strong>1NF:</strong> Each cell contains atomic (indivisible) values.</li><li><strong>2NF:</strong> All non-key attributes are fully functionally dependent on the primary key.</li><li><strong>3NF:</strong> No transitive dependencies.</li></ul><p><strong>ACID Properties:</strong> Atomicity, Consistency, Isolation, Durability – ensure reliable transaction processing.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Normalization improves database design by reducing redundancy and preventing anomalies.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Normalization reduces data redundancy.',
                    'ACID properties ensure reliable transactions.',
                    'Indexing speeds up query performance.'
                ],
                practiceQuestions: ['What is the difference between 2NF and 3NF?',
                    'Explain the ACID properties of transactions.',
                    'What is an index and how does it improve query performance?'
                ],
                youtube: 'https://www.youtube.com/embed/GFQaEYEc8_8'
            }]
        }, {
            id: 'cs204',
            code: 'CS204',
            name: 'Operating Systems',
            description: 'Process management, memory management, file systems, and concurrency.',
            topics: [{
                id: 'cs204-t1',
                title: 'Process Scheduling',
                objectives: ['Understand processes and threads.',
                    'Learn CPU scheduling algorithms.',
                    'Implement scheduling algorithms.'
                ],
                content: `<p><strong>Process:</strong> A program in execution. It has its own memory space, registers, and program counter.</p><p><strong>Scheduling Algorithms:</strong> FCFS (First-Come First-Served), SJF (Shortest Job First), Round Robin, Priority Scheduling.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> The goal of scheduling is to maximize CPU utilization and minimize turnaround time.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Processes are programs in execution.',
                    'Scheduling algorithms manage CPU time allocation.',
                    'Different algorithms have different performance characteristics.'
                ],
                practiceQuestions: ['Compare FCFS and Round Robin scheduling.',
                    'What is the convoy effect in FCFS?',
                    'Implement a simple round-robin scheduler.'
                ],
                youtube: 'https://www.youtube.com/embed/6aN8LwQ_nlw'
            }, {
                id: 'cs204-t2',
                title: 'Memory Management',
                objectives: ['Understand virtual memory and paging.',
                    'Learn about segmentation and swapping.',
                    'Understand memory allocation algorithms.'
                ],
                content: `<p><strong>Memory Management:</strong> The process of managing the allocation and deallocation of memory to processes.</p><p><strong>Paging:</strong> Divides physical memory into fixed-size blocks called frames. Divides logical memory into blocks of the same size called pages.</p><p><strong>Segmentation:</strong> Divides memory into variable-sized segments based on the logical structure of the program.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Virtual memory allows processes to use more memory than is physically available.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Memory management allocates memory to processes.',
                    'Paging uses fixed-size blocks.',
                    'Segmentation uses variable-sized blocks.'
                ],
                practiceQuestions: ['What is virtual memory and how does it work?',
                    'Explain the difference between paging and segmentation.',
                    'What is a page fault and how is it handled?'
                ],
                youtube: 'https://www.youtube.com/embed/p9nL2lHgmFE'
            }]
        }, {
            id: 'cs205',
            code: 'CS205',
            name: 'Discrete Mathematics',
            description: 'Logic, sets, relations, functions, combinatorics, and graph theory.',
            topics: [{
                id: 'cs205-t1',
                title: 'Propositional Logic',
                objectives: ['Understand propositions and logical connectives.',
                    'Learn truth tables and logical equivalence.',
                    'Apply logic to solve problems.'
                ],
                content: `<p><strong>Proposition:</strong> A statement that is either true or false.</p><p><strong>Logical Connectives:</strong> NOT (¬), AND (∧), OR (∨), IMPLIES (→), IF AND ONLY IF (↔).</p><p><strong>Truth Tables:</strong> A table that shows the truth value of a compound proposition for all possible truth values of its components.</p><div class="key-box"><p><strong>💡 Why This Matters:</strong> Logic is the foundation of computer science. It's used in programming, digital circuit design, and AI.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Propositions are statements that are true or false.',
                    'Logical connectives combine propositions.',
                    'Truth tables evaluate logical expressions.'
                ],
                practiceQuestions: ['Construct a truth table for (p ∧ q) → r.',
                    'Show that ¬(p ∨ q) ≡ ¬p ∧ ¬q (De Morgan\'s Law).',
                    'Is the statement (p → q) ∧ (q → p) equivalent to (p ↔ q)?'
                ],
                youtube: 'https://www.youtube.com/embed/afWMy1ZQeRU'
            }, {
                id: 'cs205-t2',
                title: 'Graph Theory',
                objectives: ['Understand graphs and their properties.',
                    'Learn graph representations (adjacency matrix, adjacency list).',
                    'Apply graph algorithms (DFS, BFS).'
                ],
                content: `<p><strong>Graphs:</strong> Mathematical structures used to model pairwise relations between objects.</p><ul><li><strong>Vertices (Nodes):</strong> The objects in the graph.</li><li><strong>Edges (Links):</strong> The relationships between objects.</li></ul><p><strong>Graph Representations:</strong> Adjacency Matrix (2D array) and Adjacency List (array of linked lists).</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Graphs are used to model networks like social media, transportation, and the internet.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Graphs model relationships between objects.',
                    'Adjacency matrix and adjacency list are common representations.',
                    'DFS and BFS are fundamental graph traversal algorithms.'
                ],
                practiceQuestions: ['What is the difference between directed and undirected graphs?',
                    'Implement a graph using an adjacency list.',
                    'How would you find the shortest path between two nodes in a graph?'
                ],
                youtube: 'https://www.youtube.com/embed/09_LlHjoEiY'
            }]
        }, {
            id: 'cs206',
            code: 'CS206',
            name: 'Computer Organization & Architecture',
            description: 'CPU architecture, memory hierarchy, instruction sets, and assembly language.',
            topics: [{
                id: 'cs206-t1',
                title: 'CPU Architecture',
                objectives: ['Understand the basic components of a CPU.',
                    'Learn about the fetch-decode-execute cycle.',
                    'Explore the memory hierarchy.'
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
        }, {
            id: 'cs207',
            code: 'CS207',
            name: 'Software Engineering Principles',
            description: 'SDLC, agile methodologies, testing, and project management.',
            topics: [{
                id: 'cs207-t1',
                title: 'SDLC & Agile',
                objectives: ['Understand the Software Development Life Cycle (SDLC).',
                    'Learn about Agile methodologies.',
                    'Compare Waterfall and Agile approaches.'
                ],
                content: `<p><strong>SDLC:</strong> The Software Development Life Cycle is a structured process for building software. Phases: Requirements → Design → Implementation → Testing → Deployment → Maintenance.</p><p><strong>Waterfall:</strong> A linear, sequential approach where each phase must be completed before the next begins.</p><p><strong>Agile:</strong> An iterative approach where software is developed in small increments (sprints) with continuous feedback.</p><div class="key-box"><p><strong>💡 Industry Standard:</strong> Agile is the dominant methodology in modern software development.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['SDLC provides a structured framework for software development.',
                    'Waterfall is linear; Agile is iterative.',
                    'Agile emphasizes collaboration and flexibility.'
                ],
                practiceQuestions: ['What are the phases of the SDLC?',
                    'Compare and contrast Waterfall and Agile.',
                    'What is a sprint in Agile methodology?'
                ],
                youtube: 'https://www.youtube.com/embed/NnH3H0uR7y8'
            }]
        }]
    }, {
        id: 3,
        name: 'Semester 3',
        subjects: [{
            id: 'cs301',
            code: 'CS301',
            name: 'Design & Analysis of Algorithms (DAA)',
            description: 'Algorithm design techniques, complexity analysis, and optimization.',
            topics: [{
                id: 'cs301-t1',
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
                id: 'cs301-t2',
                title: 'Sorting Algorithms',
                objectives: ['Understand the key sorting algorithms: Bubble, Insertion, Selection, Merge, Quick.',
                    'Analyze their time and space complexities.',
                    'Implement sorting algorithms in code.'
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
            }, {
                id: 'cs301-t3',
                title: 'Dynamic Programming & Greedy Algorithms',
                objectives: ['Understand dynamic programming principles.',
                    'Learn greedy algorithms and their applications.',
                    'Solve problems using DP and greedy approaches.'
                ],
                content: `<p><strong>Dynamic Programming:</strong> A technique for solving complex problems by breaking them down into simpler subproblems and storing the results (memoization).</p><p><strong>Greedy Algorithms:</strong> Make the locally optimal choice at each step with the hope of finding a global optimum.</p><p><strong>Common Problems:</strong> Knapsack, Coin Change, Longest Common Subsequence (DP). Activity Selection, Huffman Coding (Greedy).</p><div class="key-box"><p><strong>💡 Key Insight:</strong> DP is used when a problem has overlapping subproblems. Greedy is used when local optimal choices lead to a global optimum.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['DP solves problems by storing subproblem solutions.',
                    'Greedy makes locally optimal choices.',
                    'DP is used for optimization problems.'
                ],
                practiceQuestions: ['What is the difference between DP and greedy algorithms?',
                    'Solve the 0/1 Knapsack problem using DP.',
                    'Apply the Huffman coding algorithm to a set of characters.'
                ],
                youtube: 'https://www.youtube.com/embed/oBt53YbR9Kk'
            }]
        }, {
            id: 'cs302',
            code: 'CS302',
            name: 'Computer Networks',
            description: 'OSI model, TCP/IP, routing, switching, and network security.',
            topics: [{
                id: 'cs302-t1',
                title: 'OSI & TCP/IP Models',
                objectives: ['Understand the OSI reference model.',
                    'Learn the functions of each layer.',
                    'Compare OSI with TCP/IP.'
                ],
                content: `<p><strong>OSI Model:</strong> 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.</p><p><strong>TCP/IP:</strong> 4 layers: Network Interface, Internet, Transport, Application.</p><div class="key-box"><p><strong>💡 Why It Matters:</strong> The OSI model is a conceptual framework for understanding how data travels across a network.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['OSI has 7 layers; TCP/IP has 4 layers.',
                    'Each layer has specific functions.',
                    'TCP/IP is the practical implementation of networking.'
                ],
                practiceQuestions: ['What are the functions of the Transport layer?',
                    'Compare OSI and TCP/IP models.',
                    'Explain the role of the Network layer.'
                ],
                youtube: 'https://www.youtube.com/embed/7IS7p2Nq1z8'
            }, {
                id: 'cs302-t2',
                title: 'Routing & Switching',
                objectives: ['Understand routing algorithms (RIP, OSPF, BGP).',
                    'Learn switching techniques (circuit, packet, message switching).',
                    'Understand IP addressing and subnetting.'
                ],
                content: `<p><strong>Routing:</strong> The process of determining the path that data packets take across a network.</p><ul><li><strong>RIP:</strong> Distance-vector routing protocol.</li><li><strong>OSPF:</strong> Link-state routing protocol.</li><li><strong>BGP:</strong> Path-vector routing protocol used on the internet.</li></ul><p><strong>IP Addressing:</strong> IPv4 addresses are 32-bit numbers. Subnetting divides a network into smaller subnetworks.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Routing algorithms ensure that data reaches its destination efficiently.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Routing determines the path of data packets.',
                    'RIP, OSPF, and BGP are common routing protocols.',
                    'IP addresses uniquely identify devices on a network.'
                ],
                practiceQuestions: ['What is the difference between RIP and OSPF?',
                    'How does subnetting work?', 'What is NAT and why is it used?'
                ],
                youtube: 'https://www.youtube.com/embed/m8VvHHB4NQ4'
            }]
        }, {
            id: 'cs303',
            code: 'CS303',
            name: 'Web Technology & Full Stack Development',
            description: 'HTML, CSS, JavaScript, frontend frameworks, and backend development.',
            topics: [{
                id: 'cs303-t1',
                title: 'HTML & CSS Basics',
                objectives: ['Understand HTML structure and tags.',
                    'Learn CSS for styling.',
                    'Build a simple webpage.'
                ],
                content: `<p><strong>HTML:</strong> HyperText Markup Language is used to structure web content.</p><p><strong>CSS:</strong> Cascading Style Sheets is used for presentation. It controls layout, colors, fonts, and animations.</p><p><strong>Box Model:</strong> Every HTML element is a box with margin, border, padding, and content.</p><div class="key-box"><p><strong>💡 Pro Tip:</strong> Use semantic HTML for better accessibility and SEO.</p></div>`,
                codeBlocks: [{ lang: 'html',
                    code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n    <p>This is my first webpage.</p>\n</body>\n</html>'
                }],
                keyTakeaways: ['HTML provides structure.', 'CSS provides style.',
                    'The box model is fundamental to layout.'
                ],
                practiceQuestions: ['What is the difference between HTML and CSS?',
                    'Explain the CSS box model.', 'Create a simple styled webpage.'
                ],
                youtube: 'https://www.youtube.com/embed/UB1O30fR-EE'
            }, {
                id: 'cs303-t2',
                title: 'JavaScript & Frontend Frameworks',
                objectives: ['Understand JavaScript fundamentals.',
                    'Learn DOM manipulation and event handling.',
                    'Explore React or other frontend frameworks.'
                ],
                content: `<p><strong>JavaScript:</strong> A programming language that allows you to create interactive web pages.</p><p><strong>DOM Manipulation:</strong> Use JavaScript to dynamically modify the structure, style, and content of a web page.</p><p><strong>React:</strong> A popular JavaScript library for building user interfaces using components.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> JavaScript is essential for creating dynamic and responsive web applications.</p></div>`,
                codeBlocks: [{ lang: 'javascript',
                    code: '// JavaScript Example\ndocument.getElementById("myButton").addEventListener("click", function() {\n    alert("Button clicked!");\n});'
                }],
                keyTakeaways: ['JavaScript adds interactivity to web pages.',
                    'DOM manipulation changes page content dynamically.',
                    'React is a popular frontend framework.'
                ],
                practiceQuestions: ['What is the DOM?',
                    'Write a JavaScript function that changes the background color of a page when a button is clicked.',
                    'What are React components and why are they useful?'
                ],
                youtube: 'https://www.youtube.com/embed/PkZNo7MFNFg'
            }]
        }, {
            id: 'cs304',
            code: 'CS304',
            name: 'Theory of Computation / Formal Languages',
            description: 'Automata theory, regular languages, context-free languages, and Turing machines.',
            topics: [{
                id: 'cs304-t1',
                title: 'Finite Automata & Regular Languages',
                objectives: ['Understand finite automata (DFA, NFA).',
                    'Learn regular expressions and their applications.',
                    'Understand the pumping lemma for regular languages.'
                ],
                content: `<p><strong>Finite Automata:</strong> Mathematical models of computation with a finite number of states.</p><ul><li><strong>DFA (Deterministic Finite Automaton):</strong> For each state and input symbol, there is exactly one transition.</li><li><strong>NFA (Nondeterministic Finite Automaton):</strong> There may be multiple transitions for a given state and input symbol.</li></ul><p><strong>Regular Languages:</strong> Languages that can be recognized by finite automata. They are described by regular expressions.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Finite automata are used in text processing, compiler design, and network protocols.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['DFA and NFA are finite automata models.',
                    'Regular languages are recognized by finite automata.',
                    'Regular expressions describe regular languages.'
                ],
                practiceQuestions: ['What is the difference between a DFA and an NFA?',
                    'Construct a DFA that accepts strings ending with "00".',
                    'What is the pumping lemma and how is it used to prove a language is not regular?'
                ],
                youtube: 'https://www.youtube.com/embed/58R9NwhY5q8'
            }, {
                id: 'cs304-t2',
                title: 'Context-Free Languages & Turing Machines',
                objectives: ['Understand context-free grammars and languages.',
                    'Learn about pushdown automata.',
                    'Understand Turing machines and computability.'
                ],
                content: `<p><strong>Context-Free Languages:</strong> Languages generated by context-free grammars. They are recognized by pushdown automata.</p><p><strong>Turing Machines:</strong> A theoretical computational model that can simulate any algorithm. It consists of an infinite tape, a head, and a finite set of states.</p><p><strong>Computability:</strong> A problem is computable if it can be solved by a Turing machine.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Turing machines define the limits of computation. The halting problem is undecidable.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Context-free languages are generated by context-free grammars.',
                    'Turing machines are the most powerful computational model.',
                    'The halting problem is undecidable.'
                ],
                practiceQuestions: ['What is a pushdown automaton and how does it relate to context-free languages?',
                    'Describe the components of a Turing machine.',
                    'What is the halting problem and why is it important?'
                ],
                youtube: 'https://www.youtube.com/embed/dNRDvLACg5Q'
            }]
        }, {
            id: 'cs305',
            code: 'CS305',
            name: 'Programming for Scientific Computing (Python)',
            description: 'Python for data analysis, numerical computing, and scientific applications.',
            topics: [{
                id: 'cs305-t1',
                title: 'Python Fundamentals',
                objectives: ['Understand Python syntax and data types.',
                    'Learn control flow and functions in Python.',
                    'Use Python for basic programming tasks.'
                ],
                content: `<p><strong>Python:</strong> A high-level, interpreted programming language known for its simplicity and readability.</p><p><strong>Data Types:</strong> int, float, bool, str, list, tuple, dict, set.</p><p><strong>Functions:</strong> Use <code>def</code> to define reusable blocks of code.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Python is widely used in data science, AI, and scientific computing due to its extensive libraries.</p></div>`,
                codeBlocks: [{ lang: 'python',
                    code: '# Python example\nprint("Hello, World!")\n\n# Function definition\ndef greet(name):\n    return f"Hello, {name}!"\n\n# Loop\nfor i in range(5):\n    print(greet(f"User {i}"))'
                }],
                keyTakeaways: ['Python is simple and readable.',
                    'It has a rich set of data structures.',
                    'Functions are defined using def.'
                ],
                practiceQuestions: ['What is the difference between a list and a tuple in Python?',
                    'Write a Python function to calculate the factorial of a number.',
                    'How do you handle exceptions in Python?'
                ],
                youtube: 'https://www.youtube.com/embed/_uQrJ0TkZlc'
            }, {
                id: 'cs305-t2',
                title: 'Scientific Python (NumPy, Matplotlib)',
                objectives: ['Understand NumPy for numerical computing.',
                    'Learn Matplotlib for data visualization.',
                    'Apply Python to solve scientific problems.'
                ],
                content: `<p><strong>NumPy:</strong> A library for numerical computing in Python. Provides support for large, multi-dimensional arrays and matrices.</p><p><strong>Matplotlib:</strong> A plotting library for creating static, animated, and interactive visualizations.</p><p><strong>Use Cases:</strong> Data analysis, machine learning, image processing, and scientific simulations.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> NumPy and Matplotlib are the foundation of the Python scientific ecosystem.</p></div>`,
                codeBlocks: [{ lang: 'python',
                    code: 'import numpy as np\nimport matplotlib.pyplot as plt\n\n# Create data\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\n\n# Plot\nplt.plot(x, y)\nplt.title("Sine Wave")\nplt.xlabel("x")\nplt.ylabel("sin(x)")\nplt.show()'
                }],
                keyTakeaways: ['NumPy provides efficient array operations.',
                    'Matplotlib is used for data visualization.',
                    'Python is powerful for scientific computing.'
                ],
                practiceQuestions: ['How do you create a NumPy array?',
                    'Plot a histogram of random data using Matplotlib.',
                    'What are the advantages of using NumPy over Python lists?'
                ],
                youtube: 'https://www.youtube.com/embed/8YLiVYZ-lVw'
            }]
        }, {
            id: 'cs306',
            code: 'CS306',
            name: 'Advanced Microprocessors',
            description: 'Microprocessor architecture, instruction sets, interfacing, and assembly programming.',
            topics: [{
                id: 'cs306-t1',
                title: 'Microprocessor Architecture',
                objectives: ['Understand the architecture of 8086 and modern processors.',
                    'Learn the instruction set and addressing modes.',
                    'Write assembly language programs.'
                ],
                content: `<p><strong>Microprocessor:</strong> A central processing unit (CPU) on a single integrated circuit. The 8086 is a classic 16-bit microprocessor.</p><p><strong>Architecture:</strong> Internal structure including registers (AX, BX, CX, DX), ALU, Control Unit, and Bus Interface Unit.</p><p><strong>Addressing Modes:</strong> Immediate, Direct, Register, Register Indirect, Indexed, Based.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Microprocessors are the heart of computers and embedded systems.</p></div>`,
                codeBlocks: [{ lang: 'assembly',
                    code: 'MOV AX, 5     ; Load immediate value\nMOV BX, AX     ; Copy register\nADD AX, BX     ; Add registers\nHLT            ; Halt execution'
                }],
                keyTakeaways: ['Microprocessors are CPUs on a single chip.',
                    'The 8086 is a foundational microprocessor.',
                    'Assembly language is the lowest-level programming language.'
                ],
                practiceQuestions: ['What are the main components of a microprocessor?',
                    'Explain the difference between immediate and register addressing modes.',
                    'Write an assembly program to add two numbers and store the result.'
                ],
                youtube: 'https://www.youtube.com/embed/6i2I8mB43WY'
            }]
        }, {
            id: 'cs307',
            code: 'CS307',
            name: 'Technical Communication & Soft Skills',
            description: 'Technical writing, presentation skills, interview preparation, and professional ethics.',
            topics: [{
                id: 'cs307-t1',
                title: 'Technical Writing & Presentation',
                objectives: ['Understand the principles of technical writing.',
                    'Learn to create effective technical documents.',
                    'Develop presentation and public speaking skills.'
                ],
                content: `<p><strong>Technical Writing:</strong> The process of creating clear, concise, and accurate technical documents.</p><p><strong>Key Principles:</strong> Know your audience, be clear and concise, use visual aids, and organize information logically.</p><p><strong>Presentation Skills:</strong> Plan your content, use visual aids effectively, speak clearly, and engage the audience.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Strong communication skills are essential for career advancement.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Technical writing communicates complex information clearly.',
                    'Effective presentations engage and inform the audience.',
                    'Communication skills are critical for professional success.'
                ],
                practiceQuestions: ['What are the key elements of a technical report?',
                    'How would you prepare for a technical presentation?',
                    'What is the importance of audience analysis in communication?'
                ],
                youtube: 'https://www.youtube.com/embed/kRjGq-Mk5UA'
            }]
        }]
    }, {
        id: 4,
        name: 'Semester 4',
        subjects: [{
            id: 'cs401',
            code: 'CS401',
            name: 'Artificial Intelligence & Machine Learning',
            description: 'Search algorithms, knowledge representation, machine learning, and neural networks.',
            topics: [{
                id: 'cs401-t1',
                title: 'Search Algorithms',
                objectives: ['Understand uninformed search (BFS, DFS).',
                    'Learn informed search (A*, Greedy).',
                    'Implement search algorithms.'
                ],
                content: `<p><strong>Uninformed Search:</strong> BFS (Breadth-First Search), DFS (Depth-First Search), Uniform Cost.</p><p><strong>Informed Search:</strong> Greedy Best-First, A* (uses heuristics to guide the search).</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Heuristics improve search efficiency by guiding the search towards the goal.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['BFS and DFS are fundamental search algorithms.',
                    'A* uses heuristics to find optimal paths.',
                    'Search algorithms are used in many AI applications.'
                ],
                practiceQuestions: ['Compare BFS and DFS.',
                    'Explain the role of a heuristic function in A*.',
                    'Implement a simple pathfinding algorithm.'
                ],
                youtube: 'https://www.youtube.com/embed/6jT1Nc7Z-tA'
            }, {
                id: 'cs401-t2',
                title: 'Machine Learning Basics',
                objectives: ['Understand supervised and unsupervised learning.',
                    'Learn about linear regression and classification.',
                    'Explore neural networks.'
                ],
                content: `<p><strong>Supervised Learning:</strong> Training models using labeled data. Tasks include classification and regression.</p><p><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data. Tasks include clustering and dimensionality reduction.</p><p><strong>Neural Networks:</strong> Computational models inspired by the human brain. They consist of layers of interconnected neurons.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Machine learning is the foundation of modern AI applications.</p></div>`,
                codeBlocks: [{ lang: 'python',
                    code: 'from sklearn.linear_model import LinearRegression\nimport numpy as np\n\n# Data\nX = np.array([[1], [2], [3], [4]])\ny = np.array([2, 4, 6, 8])\n\n# Train model\nmodel = LinearRegression()\nmodel.fit(X, y)\n\n# Predict\nprint(model.predict([[5]]))'
                }],
                keyTakeaways: ['Supervised learning uses labeled data.',
                    'Unsupervised learning finds patterns in unlabeled data.',
                    'Neural networks are the backbone of deep learning.'
                ],
                practiceQuestions: ['What is the difference between supervised and unsupervised learning?',
                    'Explain the concept of gradient descent.', 'What is a neural network and how does it work?'
                ],
                youtube: 'https://www.youtube.com/embed/aircAruvnKk'
            }]
        }, {
            id: 'cs402',
            code: 'CS402',
            name: 'Cloud Computing & DevOps',
            description: 'Cloud service models, virtualization, CI/CD, and DevOps tools.',
            topics: [{
                id: 'cs402-t1',
                title: 'Cloud Service Models',
                objectives: ['Understand IaaS, PaaS, SaaS.',
                    'Learn about virtualization.',
                    'Explore cloud providers.'
                ],
                content: `<p><strong>IaaS:</strong> Infrastructure as a Service (e.g., AWS EC2, GCP Compute Engine). Provides virtualized hardware resources.</p><p><strong>PaaS:</strong> Platform as a Service (e.g., Google App Engine, AWS Elastic Beanstalk). Provides a platform for developing and deploying applications.</p><p><strong>SaaS:</strong> Software as a Service (e.g., Google Workspace, Salesforce). Provides ready-to-use software applications.</p><div class="key-box"><p><strong>💡 Why It Matters:</strong> Cloud computing is the backbone of modern IT infrastructure.</p></div>`,
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
            }, {
                id: 'cs402-t2',
                title: 'DevOps & CI/CD',
                objectives: ['Understand DevOps principles.',
                    'Learn CI/CD pipelines.',
                    'Explore tools like Docker, Jenkins, and GitHub Actions.'
                ],
                content: `<p><strong>DevOps:</strong> A set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the software development lifecycle.</p><p><strong>CI/CD:</strong> Continuous Integration and Continuous Delivery/Deployment. Automates the building, testing, and deployment of applications.</p><p><strong>Key Tools:</strong> Docker (containerization), Jenkins (automation server), GitHub Actions (CI/CD).</p><div class="key-box"><p><strong>💡 Key Insight:</strong> DevOps and CI/CD enable rapid and reliable software releases.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['DevOps combines development and operations.',
                    'CI/CD automates build, test, and deployment.',
                    'Tools like Docker and Jenkins are essential for DevOps.'
                ],
                practiceQuestions: ['What is the difference between CI and CD?',
                    'Explain the role of Docker in DevOps.', 'What is a CI/CD pipeline?'
                ],
                youtube: 'https://www.youtube.com/embed/0yWAtQ6wY1s'
            }]
        }, {
            id: 'cs403',
            code: 'CS403',
            name: 'Cybersecurity & Cryptography',
            description: 'Network security, cryptography, ethical hacking, and security policies.',
            topics: [{
                id: 'cs403-t1',
                title: 'Introduction to Cryptography',
                objectives: ['Understand symmetric and asymmetric encryption.',
                    'Learn about hashing and digital signatures.',
                    'Explore cryptographic protocols.'
                ],
                content: `<p><strong>Symmetric Encryption:</strong> Uses the same key for encryption and decryption (e.g., AES, DES). Fast and efficient for bulk data.</p><p><strong>Asymmetric Encryption:</strong> Uses a public/private key pair (e.g., RSA, ECC). Slower but provides authentication and non-repudiation.</p><p><strong>Hashing:</strong> A one-way function that converts data into a fixed-size hash (e.g., SHA-256). Used for data integrity.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Cryptography is the foundation of modern security, ensuring confidentiality, integrity, and authenticity.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Symmetric encryption uses one key.',
                    'Asymmetric encryption uses a key pair.',
                    'Hashing is used for data integrity.'
                ],
                practiceQuestions: ['Explain the difference between symmetric and asymmetric encryption.',
                    'What is a digital signature and how does it work?',
                    'How does hashing ensure data integrity?'
                ],
                youtube: 'https://www.youtube.com/embed/6Fp4PPQh2_o'
            }, {
                id: 'cs403-t2',
                title: 'Network Security',
                objectives: ['Understand network security principles.',
                    'Learn about firewalls, IDS, and VPNs.',
                    'Explore ethical hacking and penetration testing.'
                ],
                content: `<p><strong>Network Security:</strong> The practice of protecting networks, devices, and data from unauthorized access and attacks.</p><p><strong>Key Technologies:</strong> Firewalls (filter traffic), IDS/IPS (detect/prevent intrusions), VPNs (secure communication).</p><p><strong>Ethical Hacking:</strong> Testing systems for vulnerabilities with permission, using the same techniques as malicious hackers.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Network security is a continuous process of identification, protection, detection, and response.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Network security protects against unauthorized access.',
                    'Firewalls, IDS, and VPNs are key security technologies.',
                    'Ethical hacking helps identify vulnerabilities.'
                ],
                practiceQuestions: ['What is the difference between a firewall and an IDS?',
                    'Explain how a VPN works.', 'What are the phases of penetration testing?'
                ],
                youtube: 'https://www.youtube.com/embed/5nK9BQd5-tg'
            }]
        }, {
            id: 'cs404',
            code: 'CS404',
            name: 'Data Science & Big Data Analytics',
            description: 'Data analysis, visualization, big data frameworks, and analytics tools.',
            topics: [{
                id: 'cs404-t1',
                title: 'Data Science Fundamentals',
                objectives: ['Understand the data science lifecycle.',
                    'Learn data preprocessing and exploratory data analysis.',
                    'Apply statistical methods to analyze data.'
                ],
                content: `<p><strong>Data Science:</strong> An interdisciplinary field that uses scientific methods, algorithms, and systems to extract insights from data.</p><p><strong>Data Preprocessing:</strong> Cleaning, transforming, and organizing raw data for analysis.</p><p><strong>Exploratory Data Analysis (EDA):</strong> Visualizing and summarizing data to understand its main characteristics.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Data science is about turning raw data into actionable insights.</p></div>`,
                codeBlocks: [{ lang: 'python',
                    code: 'import pandas as pd\nimport matplotlib.pyplot as plt\n\n# Load data\ndf = pd.read_csv("data.csv")\n\n# Summary statistics\nprint(df.describe())\n\n# Plot\ndf.hist()\nplt.show()'
                }],
                keyTakeaways: ['Data science extracts insights from data.',
                    'Preprocessing is essential for data quality.',
                    'EDA is the first step in data analysis.'
                ],
                practiceQuestions: ['What are the stages of the data science lifecycle?',
                    'What is EDA and why is it important?',
                    'How do you handle missing data in a dataset?'
                ],
                youtube: 'https://www.youtube.com/embed/X3paOmcrTjQ'
            }, {
                id: 'cs404-t2',
                title: 'Big Data & Analytics',
                objectives: ['Understand big data concepts (volume, velocity, variety).',
                    'Learn Hadoop and Spark frameworks.',
                    'Apply big data analytics to real-world problems.'
                ],
                content: `<p><strong>Big Data:</strong> Extremely large and complex datasets that require specialized tools to process.</p><p><strong>Hadoop:</strong> A framework for distributed processing of large data sets using the MapReduce model.</p><p><strong>Apache Spark:</strong> A fast, in-memory data processing engine for big data analytics.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Big data analytics enables organizations to make data-driven decisions at scale.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Big data has high volume, velocity, and variety.',
                    'Hadoop enables distributed processing.',
                    'Spark provides fast, in-memory data processing.'
                ],
                practiceQuestions: ['What is MapReduce and how does it work?',
                    'Compare Hadoop and Spark.', 'What are some real-world applications of big data analytics?'
                ],
                youtube: 'https://www.youtube.com/embed/2fTBRGvCQqE'
            }]
        }, {
            id: 'cs405',
            code: 'CS405',
            name: 'Compiler Design',
            description: 'Lexical analysis, parsing, syntax-directed translation, code generation, and optimization.',
            topics: [{
                id: 'cs405-t1',
                title: 'Lexical Analysis & Parsing',
                objectives: ['Understand lexical analysis and regular expressions.',
                    'Learn parsing techniques (LL, LR).',
                    'Build a simple parser.'
                ],
                content: `<p><strong>Lexical Analysis:</strong> The first phase of a compiler. It converts a stream of characters into a stream of tokens.</p><p><strong>Parsing:</strong> The second phase. It analyzes the token stream according to the grammar of the language.</p><p><strong>Parsing Techniques:</strong> LL (top-down) and LR (bottom-up) are two common approaches.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Compiler design is a core area of computer science that combines theory and practice.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Lexical analysis converts characters to tokens.',
                    'Parsing analyzes the token stream according to grammar.',
                    'LL and LR are common parsing techniques.'
                ],
                practiceQuestions: ['What is the role of a lexer in a compiler?',
                    'Explain the difference between LL and LR parsing.',
                    'What is an abstract syntax tree (AST)?'
                ],
                youtube: 'https://www.youtube.com/embed/4GCBw29zV_0'
            }, {
                id: 'cs405-t2',
                title: 'Code Generation & Optimization',
                objectives: ['Understand code generation techniques.',
                    'Learn about code optimization.',
                    'Understand the role of the linker and loader.'
                ],
                content: `<p><strong>Code Generation:</strong> The final phase of a compiler. It generates target machine code from the intermediate representation.</p><p><strong>Code Optimization:</strong> Techniques to improve the performance and efficiency of generated code.</p><p><strong>Linker and Loader:</strong> The linker combines multiple object files into a single executable. The loader loads the executable into memory for execution.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Code optimization is crucial for producing efficient software.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Code generation produces machine code.',
                    'Optimization improves code performance.',
                    'The linker and loader prepare the code for execution.'
                ],
                practiceQuestions: ['What is the difference between static and dynamic linking?',
                    'Explain the concept of dead code elimination.',
                    'How does a loader work?'
                ],
                youtube: 'https://www.youtube.com/embed/Pl8xXw0DgUY'
            }]
        }, {
            id: 'cs406',
            code: 'CS406',
            name: 'Major Capstone Project',
            description: 'Comprehensive project integrating all CSE disciplines.',
            topics: [{
                id: 'cs406-t1',
                title: 'Project Planning & Execution',
                objectives: ['Plan a software project.',
                    'Apply project management techniques.',
                    'Deliver a working prototype.'
                ],
                content: `<p><strong>Project Lifecycle:</strong> Initiation, Planning, Execution, Monitoring & Control, Closure.</p><p><strong>Agile Project Management:</strong> Scrum (sprints, daily stand-ups, retrospectives) and Kanban (visualizing workflow).</p><p><strong>Documentation:</strong> SRS (Software Requirements Specification), Design Documents, Test Plans, User Manuals.</p><div class="key-box"><p><strong>💡 Pro Tip:</strong> A well-documented project is a successful project. Documentation ensures maintainability.</p></div>`,
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
        }, {
            id: 'cs407',
            code: 'CS407',
            name: 'Industry Internship',
            description: 'Practical industry experience in a professional environment.',
            topics: [{
                id: 'cs407-t1',
                title: 'Internship Preparation & Execution',
                objectives: ['Prepare for an internship interview.',
                    'Understand workplace culture and expectations.',
                    'Deliver a project report.'
                ],
                content: `<p><strong>Internship:</strong> A period of practical work experience in a professional environment.</p><p><strong>Preparation:</strong> Build a strong resume, practice coding interviews, and research the company.</p><p><strong>Execution:</strong> Work on real-world projects, collaborate with professionals, and document your contributions.</p><div class="key-box"><p><strong>💡 Key Insight:</strong> Internships are a critical bridge between academic learning and professional practice.</p></div>`,
                codeBlocks: [],
                keyTakeaways: ['Internships provide real-world experience.',
                    'Preparation is key to a successful internship.',
                    'Document your work and learn from professionals.'
                ],
                practiceQuestions: ['What should you include in a resume for an internship?',
                    'How would you prepare for a technical interview?',
                    'What are the key takeaways from an internship experience?'
                ],
                youtube: 'https://www.youtube.com/embed/5Exi7IhJ9-Q'
            }]
        }]
    }]
};

// ======================================================================
//  PRACTICAL LABS (Separate section)
// ======================================================================
const PRACTICAL_LABS = [
    { id: 'lab1', name: 'Programming Lab (C, C++, Java)', description: 'Hands-on programming exercises in C, C++, and Java.' },
    { id: 'lab2', name: 'Data Structures & Algorithms Lab', description: 'Implementation and analysis of data structures and algorithms.' },
    { id: 'lab3', name: 'Database Management Systems Lab', description: 'SQL queries, database design, and normalization.' },
    { id: 'lab4', name: 'UNIX / OS Lab', description: 'Unix commands, shell scripting, and OS concepts.' },
    { id: 'lab5', name: 'Networking Lab', description: 'Network configuration, protocols, and simulation.' },
    { id: 'lab6', name: 'Android & Mobile Application Lab', description: 'Android app development and mobile programming.' },
];

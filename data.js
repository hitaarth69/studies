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
                objectives: [
                    'Understand definite and indefinite integrals.',
                    'Learn integration techniques (substitution, by parts, partial fractions).',
                    'Apply integrals to find areas and volumes.'
                ],
                content: `<p><strong>Integral Calculus</strong> is the study of accumulation and area under curves. It is the inverse operation of differentiation.</p>
                <p><strong>Definite Integral:</strong> Represents the signed area between a function and the x-axis over a specific interval. It is denoted as ∫<sub>a</sub><sup>b</sup> f(x) dx.</p>
                <p><strong>Indefinite Integral:</strong> Represents the family of antiderivatives of a function. It is denoted as ∫ f(x) dx = F(x) + C.</p>
                <p><strong>The Fundamental Theorem of Calculus:</strong> Connects differentiation and integration, making them inverse operations. Part 1: d/dx ∫<sub>a</sub><sup>x</sup> f(t) dt = f(x). Part 2: ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a).</p>
                <p><strong>Integration Techniques:</strong> Substitution (u = g(x)), Integration by Parts (∫u dv = uv - ∫v du), Partial Fractions (decomposing rational functions), and Trigonometric Substitution.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Integration is used in physics to find displacement from velocity, in economics to find total cost from marginal cost, and in engineering to compute center of mass.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Integration is the inverse of differentiation.',
                    'Definite integrals find area under curves.',
                    'The Fundamental Theorem of Calculus links derivatives and integrals.'
                ],
                practiceQuestions: [
                    'Evaluate ∫ (3x² + 2x + 1) dx.',
                    'Find the area under y = x² from x=0 to x=2.',
                    'Apply integration by parts to ∫ x·eˣ dx.'
                ],
                resources: [
                    { name: 'Wikipedia – Integral Calculus', url: 'https://en.wikipedia.org/wiki/Integral' },
                    { name: 'GeeksforGeeks – Integration', url: 'https://www.geeksforgeeks.org/integrals/' },
                    { name: 'TutorialsPoint – Calculus', url: 'https://www.tutorialspoint.com/calculus/index.htm' }
                ]
            }, {
                id: 'ma101-t2',
                title: 'Linear Algebra',
                objectives: [
                    'Understand vectors and matrices.',
                    'Learn matrix operations (addition, multiplication, inverse).',
                    'Apply linear algebra to solve systems of equations.'
                ],
                content: `<p><strong>Linear Algebra</strong> is the study of vectors, vector spaces, and linear transformations. It is fundamental to machine learning, computer graphics, and quantum mechanics.</p>
                <p><strong>Vectors:</strong> Objects that have both magnitude and direction. Represented as ordered lists of numbers. Vector addition: (a₁, a₂) + (b₁, b₂) = (a₁+b₁, a₂+b₂). Scalar multiplication: k(a₁, a₂) = (ka₁, ka₂).</p>
                <p><strong>Matrices:</strong> Rectangular arrays of numbers used to represent linear transformations and systems of equations. Matrix multiplication: (AB)ᵢⱼ = Σₖ Aᵢₖ · Bₖⱼ.</p>
                <p><strong>Eigenvalues and Eigenvectors:</strong> For a square matrix A, a non-zero vector v is an eigenvector if Av = λv, where λ is the eigenvalue.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Linear algebra is the language of machine learning. Nearly every algorithm uses vectors and matrices to represent and process data.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Vectors have magnitude and direction.',
                    'Matrices represent linear transformations.',
                    'Linear algebra is essential for data science and AI.'
                ],
                practiceQuestions: [
                    'What is a vector space?',
                    'Find the inverse of a 2×2 matrix.',
                    'Solve a system of linear equations using matrices.'
                ],
                resources: [
                    { name: 'Wikipedia – Linear Algebra', url: 'https://en.wikipedia.org/wiki/Linear_algebra' },
                    { name: 'GeeksforGeeks – Linear Algebra', url: 'https://www.geeksforgeeks.org/linear-algebra/' },
                    { name: '3Blue1Brown – Essence of Linear Algebra', url: 'https://www.3blue1brown.com/topics/linear-algebra' }
                ]
            }]
        }, {
            id: 'ph101',
            code: 'PH101',
            name: 'Engineering Physics',
            description: 'Classical mechanics, thermodynamics, waves, and optics.',
            topics: [{
                id: 'ph101-t1',
                title: 'Classical Mechanics',
                objectives: [
                    'Understand Newton\'s laws of motion.',
                    'Learn work, energy, and power concepts.',
                    'Apply conservation laws to solve problems.'
                ],
                content: `<p><strong>Newton's Laws of Motion:</strong> The foundation of classical mechanics.</p>
                <ul>
                    <li><strong>First Law (Inertia):</strong> An object at rest stays at rest unless acted upon by an external force. An object in motion stays in motion with the same speed and direction unless acted upon by an external force.</li>
                    <li><strong>Second Law (F = ma):</strong> The acceleration of an object is directly proportional to the net force applied and inversely proportional to its mass. F = ma.</li>
                    <li><strong>Third Law (Action-Reaction):</strong> Every action has an equal and opposite reaction. F₁₂ = -F₂₁.</li>
                </ul>
                <p><strong>Conservation of Energy:</strong> The total energy of an isolated system remains constant. Energy can change from kinetic to potential and vice versa.</p>
                <div class="key-box"><p><strong>💡 Real-World Application:</strong> These laws govern everything from car crashes to rocket launches, and are essential for mechanical and aerospace engineering.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Newton\'s laws describe motion.',
                    'F = ma is the core equation of mechanics.',
                    'Conservation laws simplify problem-solving.'
                ],
                practiceQuestions: [
                    'Explain why you lurch forward when a bus stops suddenly.',
                    'A 10 kg object is pushed with a force of 50 N. What is its acceleration?',
                    'When you jump, why does the Earth not move significantly?'
                ],
                resources: [
                    { name: 'Wikipedia – Newton\'s Laws', url: 'https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion' },
                    { name: 'Khan Academy – Physics', url: 'https://www.khanacademy.org/science/physics' },
                    { name: 'HyperPhysics – Mechanics', url: 'http://hyperphysics.phy-astr.gsu.edu/hbase/hph.html' }
                ]
            }, {
                id: 'ph101-t2',
                title: 'Thermodynamics & Waves',
                objectives: [
                    'Understand laws of thermodynamics.',
                    'Learn concepts of heat, work, and entropy.',
                    'Understand wave motion and sound.'
                ],
                content: `<p><strong>Thermodynamics:</strong> The study of heat, work, and energy transfer.</p>
                <ul>
                    <li><strong>First Law:</strong> The change in internal energy of a system equals the heat added minus the work done by the system. ΔU = Q - W.</li>
                    <li><strong>Second Law:</strong> Entropy always increases in an isolated system. Heat cannot spontaneously flow from a cold body to a hot body.</li>
                    <li><strong>Third Law:</strong> As temperature approaches absolute zero, entropy approaches a minimum constant.</li>
                </ul>
                <p><strong>Wave Motion:</strong> Waves transfer energy without transferring matter. Types: transverse (particles move perpendicular to wave direction) and longitudinal (particles move parallel).</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Thermodynamics governs the efficiency of engines, refrigerators, and power plants. Waves are fundamental to sound, light, and communication.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Thermodynamics deals with heat and work.',
                    'Entropy measures disorder.',
                    'Waves transfer energy without matter transfer.'
                ],
                practiceQuestions: [
                    'What is the first law of thermodynamics?',
                    'Explain the concept of entropy.',
                    'What is the difference between transverse and longitudinal waves?'
                ],
                resources: [
                    { name: 'Wikipedia – Thermodynamics', url: 'https://en.wikipedia.org/wiki/Thermodynamics' },
                    { name: 'GeeksforGeeks – Thermodynamics', url: 'https://www.geeksforgeeks.org/laws-of-thermodynamics/' },
                    { name: 'HyperPhysics – Waves', url: 'http://hyperphysics.phy-astr.gsu.edu/hbase/waves.html' }
                ]
            }]
        }, {
            id: 'cs101',
            code: 'CS101',
            name: 'Programming Fundamentals (C/C++)',
            description: 'Introduction to programming using C and C++.',
            topics: [{
                id: 'cs101-t1',
                title: 'Introduction to C Programming',
                objectives: [
                    'Understand programming concepts.',
                    'Set up a development environment.',
                    'Write your first C program.'
                ],
                content: `<p><strong>What is Programming?</strong> Programming is the art of giving instructions to a computer to perform specific tasks. It is how we create software, from simple calculators to complex artificial intelligence systems.</p>
                <p><strong>Why C?</strong> C is a powerful, efficient language that gives you low-level control over system resources. It is the mother of many modern languages like C++, Java, and Python. Learning C teaches you how memory works, how data is organized, and how to think like a computer scientist.</p>
                <p><strong>The Compilation Process:</strong> Source code → Preprocessor → Compiler → Assembler → Linker → Executable. Understanding this process helps you debug and optimize code.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Mastering C gives you a deep understanding of how computers work, which makes learning every other language easier.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}'
                }],
                keyTakeaways: [
                    'Programming is giving instructions to a computer.',
                    'C is a foundational language.',
                    'Hello World is your first milestone.'
                ],
                practiceQuestions: [
                    'Explain the role of a compiler.',
                    'What is the difference between a compiler and an interpreter?',
                    'Write a C program that prints your name 10 times using a loop.'
                ],
                resources: [
                    { name: 'GeeksforGeeks – C Language', url: 'https://www.geeksforgeeks.org/c-programming-language/' },
                    { name: 'TutorialsPoint – C Programming', url: 'https://www.tutorialspoint.com/cprogramming/index.htm' },
                    { name: 'Learn-C.org – Interactive C Tutorial', url: 'https://www.learn-c.org/' }
                ]
            }, {
                id: 'cs101-t2',
                title: 'Variables & Data Types',
                objectives: [
                    'Understand variables as containers for data.',
                    'Learn the basic data types in C: int, float, char, double.',
                    'Declare and initialize variables correctly.'
                ],
                content: `<p><strong>Variables:</strong> A variable is a named storage location in memory. You can think of it as a labeled box where you store values.</p>
                <p><strong>Data Types:</strong> C has several built-in data types:</p>
                <ul>
                    <li><strong>int</strong> – for whole numbers (e.g., 5, -3, 100) – typically 4 bytes.</li>
                    <li><strong>float</strong> – for decimal numbers (e.g., 3.14, -2.5) – 4 bytes.</li>
                    <li><strong>char</strong> – for single characters (e.g., 'A', 'b', '9') – 1 byte.</li>
                    <li><strong>double</strong> – for high-precision decimals – 8 bytes.</li>
                    <li><strong>void</strong> – represents no value, used for functions that return nothing.</li>
                </ul>
                <p><strong>Type Modifiers:</strong> signed, unsigned, short, long – modify the range and size of data types.</p>
                <div class="key-box"><p><strong>💡 Pro Tip:</strong> Choose the smallest data type that can hold your values to save memory and improve performance.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: 'int age = 20;\nfloat pi = 3.14159;\nchar grade = \'A\';\ndouble salary = 50000.50;\nunsigned int count = 100;'
                }],
                keyTakeaways: [
                    'Variables store data in memory.',
                    'C has several data types for different kinds of data.',
                    'Choose the right data type for efficiency.'
                ],
                practiceQuestions: [
                    'What is the difference between float and double?',
                    'Declare a variable to store a student\'s name (as a string).',
                    'Write a program that prints the size of each data type using sizeof().'
                ],
                resources: [
                    { name: 'GeeksforGeeks – Data Types in C', url: 'https://www.geeksforgeeks.org/data-types-in-c/' },
                    { name: 'TutorialsPoint – C Variables', url: 'https://www.tutorialspoint.com/cprogramming/c_variables.htm' },
                    { name: 'C Reference – Data Types', url: 'https://en.cppreference.com/w/c/language/type' }
                ]
            }, {
                id: 'cs101-t3',
                title: 'Control Structures (if, for, while)',
                objectives: [
                    'Understand conditional execution using if/else.',
                    'Use loops (for, while) to repeat code.',
                    'Write programs that make decisions and repeat tasks.'
                ],
                content: `<p><strong>Control structures</strong> are the building blocks of logic in any program. They allow you to control the flow of execution.</p>
                <p><strong>Conditional Statements:</strong> Use <code>if</code>, <code>else if</code>, and <code>else</code> to execute code only when certain conditions are met. The <code>switch</code> statement is an alternative for multiple conditions.</p>
                <p><strong>Loops:</strong> <code>for</code> (used when the number of iterations is known), <code>while</code> (used when the number of iterations is not known upfront), and <code>do-while</code> (executes at least once).</p>
                <p><strong>Break and Continue:</strong> <code>break</code> exits a loop early. <code>continue</code> skips the rest of the current iteration.</p>
                <div class="key-box"><p><strong>💡 Think About It:</strong> Every algorithm you write will use some combination of conditions and loops. Master these and you'll be able to solve any problem.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: 'int num = 10;\nif (num > 0) {\n    printf("Positive\\n");\n} else if (num < 0) {\n    printf("Negative\\n");\n} else {\n    printf("Zero\\n");\n}\n\nfor (int i = 1; i <= 5; i++) {\n    printf("%d ", i);\n}\n\nint j = 0;\nwhile (j < 3) {\n    printf("j = %d\\n", j);\n    j++;\n}'
                }],
                keyTakeaways: [
                    'if/else allows decision-making.',
                    'for loops are great for counting.',
                    'while loops are useful for unknown iterations.'
                ],
                practiceQuestions: [
                    'Write a program to check if a number is even or odd.',
                    'Print the sum of numbers from 1 to 100 using a for loop.',
                    'Write a program that keeps asking for a password until the correct one is entered.'
                ],
                resources: [
                    { name: 'GeeksforGeeks – Control Structures in C', url: 'https://www.geeksforgeeks.org/control-structures-in-c/' },
                    { name: 'TutorialsPoint – C Loops', url: 'https://www.tutorialspoint.com/cprogramming/c_loops.htm' },
                    { name: 'Programiz – C if/else Statement', url: 'https://www.programiz.com/c-programming/c-if-else-statement' }
                ]
            }]
        }, {
            id: 'eg101',
            code: 'EG101',
            name: 'Engineering Graphics & Design',
            description: 'Technical drawing, CAD, and engineering visualization.',
            topics: [{
                id: 'eg101-t1',
                title: 'Introduction to Engineering Drawing',
                objectives: [
                    'Understand orthographic projections.',
                    'Learn isometric and perspective drawing.',
                    'Use CAD software for drafting.'
                ],
                content: `<p><strong>Engineering Drawing</strong> is the universal language of engineers. It communicates design ideas through precise graphical representations.</p>
                <p><strong>Orthographic Projection:</strong> Represents a 3D object in 2D using multiple views (front, top, side). Each view shows the object as seen from a specific direction.</p>
                <p><strong>Isometric Projection:</strong> Represents a 3D object in a single view with all axes equally foreshortened. The angles between axes are 120 degrees.</p>
                <p><strong>CAD (Computer-Aided Design):</strong> Software like AutoCAD, SolidWorks, and Fusion 360 are used for modern engineering design. They allow 3D modeling, simulation, and automated drafting.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Engineering graphics is essential for communicating design intent in manufacturing and construction.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Engineering drawing is a universal language.',
                    'Orthographic projections show multiple views.',
                    'Isometric projections show 3D in 2D.'
                ],
                practiceQuestions: [
                    'What is the difference between orthographic and isometric projection?',
                    'Draw the front, top, and side views of a simple object.',
                    'What is the purpose of dimensioning in engineering drawings?'
                ],
                resources: [
                    { name: 'Wikipedia – Engineering Drawing', url: 'https://en.wikipedia.org/wiki/Engineering_drawing' },
                    { name: 'GeeksforGeeks – Engineering Drawing Basics', url: 'https://www.geeksforgeeks.org/engineering-drawing-basics/' },
                    { name: 'CADTutor – AutoCAD Tutorials', url: 'https://www.cadtutor.net/tutorials/autocad/' }
                ]
            }]
        }, {
            id: 'de101',
            code: 'DE101',
            name: 'Digital Electronics & Logic Design',
            description: 'Digital circuits, Boolean algebra, logic gates, and sequential circuits.',
            topics: [{
                id: 'de101-t1',
                title: 'Boolean Algebra & Logic Gates',
                objectives: [
                    'Understand Boolean algebra laws.',
                    'Learn logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR).',
                    'Design combinational circuits.'
                ],
                content: `<p><strong>Boolean Algebra:</strong> A mathematical system for representing and manipulating logical expressions. It uses binary variables (0 and 1).</p>
                <p><strong>Basic Laws:</strong> Commutative, Associative, Distributive, Identity, Complement, and De Morgan's Laws.</p>
                <p><strong>Logic Gates:</strong> Electronic circuits that perform logical operations on one or more binary inputs to produce a single output.</p>
                <ul>
                    <li><strong>AND:</strong> Output is 1 only if all inputs are 1.</li>
                    <li><strong>OR:</strong> Output is 1 if at least one input is 1.</li>
                    <li><strong>NOT:</strong> Inverts the input.</li>
                    <li><strong>NAND:</strong> NOT of AND – outputs 0 only if all inputs are 1.</li>
                    <li><strong>NOR:</strong> NOT of OR – outputs 1 only if all inputs are 0.</li>
                    <li><strong>XOR:</strong> Output is 1 if inputs are different.</li>
                    <li><strong>XNOR:</strong> Output is 1 if inputs are the same.</li>
                </ul>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Logic gates are the building blocks of all digital circuits, including microprocessors and memory.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Boolean algebra uses binary variables.',
                    'Logic gates perform logical operations.',
                    'Digital circuits are built from logic gates.'
                ],
                practiceQuestions: [
                    'What is the truth table for an AND gate?',
                    'Simplify the expression (A+B)·(A+C) using Boolean algebra.',
                    'Design a half-adder circuit using logic gates.'
                ],
                resources: [
                    { name: 'Wikipedia – Boolean Algebra', url: 'https://en.wikipedia.org/wiki/Boolean_algebra' },
                    { name: 'GeeksforGeeks – Logic Gates', url: 'https://www.geeksforgeeks.org/logic-gates/' },
                    { name: 'TutorialsPoint – Digital Circuits', url: 'https://www.tutorialspoint.com/digital_circuits/index.htm' }
                ]
            }, {
                id: 'de101-t2',
                title: 'Sequential Circuits',
                objectives: [
                    'Understand flip-flops and latches.',
                    'Learn counters and shift registers.',
                    'Design state machines.'
                ],
                content: `<p><strong>Sequential Circuits:</strong> Digital circuits where the output depends not only on the current inputs but also on the previous state (memory).</p>
                <p><strong>Flip-Flops:</strong> Basic memory elements that store one bit of data. Types: SR (Set-Reset), D (Data), JK (Jack-Kilby), T (Toggle).</p>
                <p><strong>Counters:</strong> Sequential circuits that count clock pulses. Types: Ripple counters (asynchronous) and synchronous counters.</p>
                <p><strong>State Machines:</strong> Used to design complex sequential circuits like traffic lights, vending machines, and CPU control units.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Sequential circuits are the foundation of computer memory and processors.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Sequential circuits have memory.',
                    'Flip-flops store single bits.',
                    'State machines model complex behaviors.'
                ],
                practiceQuestions: [
                    'What is the difference between a latch and a flip-flop?',
                    'Design a 4-bit up-counter using JK flip-flops.',
                    'What is a finite state machine (FSM)?'
                ],
                resources: [
                    { name: 'Wikipedia – Flip-Flop', url: 'https://en.wikipedia.org/wiki/Flip-flop_(electronics)' },
                    { name: 'GeeksforGeeks – Sequential Circuits', url: 'https://www.geeksforgeeks.org/sequential-circuits/' },
                    { name: 'All About Circuits – Sequential Logic', url: 'https://www.allaboutcircuits.com/textbook/digital/chpt-11/introduction-sequential-logic-circuits/' }
                ]
            }]
        }, {
            id: 'es101',
            code: 'ES101',
            name: 'Environmental Sciences',
            description: 'Ecology, pollution, climate change, and sustainable development.',
            topics: [{
                id: 'es101-t1',
                title: 'Introduction to Environmental Science',
                objectives: [
                    'Understand ecological principles.',
                    'Learn about pollution and its effects.',
                    'Explore sustainable development.'
                ],
                content: `<p><strong>Environmental Science</strong> is the study of the environment and the interactions between humans and nature.</p>
                <p><strong>Pollution:</strong> Types include air (greenhouse gases, particulate matter), water (chemical, biological), soil (heavy metals, pesticides), and noise pollution. Major causes: industrialization, urbanization, and deforestation.</p>
                <p><strong>Climate Change:</strong> The increase in Earth's average temperature due to greenhouse gas emissions. Effects include rising sea levels, extreme weather events, and biodiversity loss.</p>
                <p><strong>Sustainable Development:</strong> Meeting the needs of the present without compromising the ability of future generations to meet their own needs. The UN Sustainable Development Goals (SDGs) provide a global framework.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Sustainable development is the key to balancing economic growth with environmental protection.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Environmental science studies human-nature interactions.',
                    'Pollution harms ecosystems and human health.',
                    'Sustainability ensures future generations can thrive.'
                ],
                practiceQuestions: [
                    'What are the major types of pollution?',
                    'Explain the concept of sustainable development.',
                    'What is the greenhouse effect and how does it contribute to climate change?'
                ],
                resources: [
                    { name: 'Wikipedia – Environmental Science', url: 'https://en.wikipedia.org/wiki/Environmental_science' },
                    { name: 'UN – Sustainable Development Goals', url: 'https://sdgs.un.org/goals' },
                    { name: 'EPA – Environmental Topics', url: 'https://www.epa.gov/environmental-topics' }
                ]
            }]
        }, {
            id: 'cs102',
            code: 'CS102',
            name: 'Communication Skills',
            description: 'Technical communication, presentation skills, and professional writing.',
            topics: [{
                id: 'cs102-t1',
                title: 'Technical Communication',
                objectives: [
                    'Understand the importance of communication in engineering.',
                    'Learn technical writing and documentation skills.',
                    'Develop presentation and public speaking skills.'
                ],
                content: `<p><strong>Communication Skills</strong> are essential for engineers to convey technical ideas effectively to colleagues, clients, and stakeholders.</p>
                <p><strong>Technical Writing:</strong> Writing clear, concise, and accurate technical documents, reports, and manuals. Key principles: know your audience, be clear, use visuals, and organize information logically.</p>
                <p><strong>Presentation Skills:</strong> Delivering engaging and informative presentations using visual aids and effective speaking techniques. Key elements: preparation, practice, eye contact, and body language.</p>
                <p><strong>Professional Email Etiquette:</strong> Clear subject lines, concise messaging, proper greetings, and professional tone.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Strong communication skills differentiate good engineers from great engineers.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Communication is critical for engineering success.',
                    'Technical writing must be clear and concise.',
                    'Effective presentations engage the audience.'
                ],
                practiceQuestions: [
                    'What are the key elements of a technical report?',
                    'How would you prepare for a technical presentation?',
                    'What is the importance of active listening in communication?'
                ],
                resources: [
                    { name: 'Wikipedia – Technical Communication', url: 'https://en.wikipedia.org/wiki/Technical_communication' },
                    { name: 'GeeksforGeeks – Communication Skills', url: 'https://www.geeksforgeeks.org/communication-skills/' },
                    { name: 'SkillsYouNeed – Presentation Skills', url: 'https://www.skillsyouneed.com/presentation-skills/' }
                ]
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
                objectives: [
                    'Understand arrays as contiguous memory blocks.',
                    'Learn linked lists as dynamic data structures.',
                    'Compare arrays and linked lists.'
                ],
                content: `<p><strong>Arrays:</strong> A contiguous block of memory that stores elements of the same type. Access is O(1), but insertion and deletion are O(n).</p>
                <p><strong>Linked Lists:</strong> A linear collection of nodes, where each node points to the next. Insertion and deletion are O(1) at the head, but access is O(n).</p>
                <p><strong>Types of Linked Lists:</strong> Singly linked (each node points to the next), Doubly linked (each node points to both previous and next), Circular linked (last node points back to the first).</p>
                <div class="key-box"><p><strong>💡 When to Use:</strong> Arrays for fast random access. Linked lists for fast insertions/deletions.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: 'struct Node {\n    int data;\n    struct Node* next;\n};\n\nstruct Node* createNode(int data) {\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->next = NULL;\n    return newNode;\n}'
                }],
                keyTakeaways: [
                    'Arrays have O(1) access, O(n) insertion/deletion.',
                    'Linked lists have O(n) access, O(1) insertion/deletion at head.',
                    'Each structure has its own strengths and weaknesses.'
                ],
                practiceQuestions: [
                    'Implement a function to insert a node at the end of a linked list.',
                    'Compare the memory usage of an array vs. a linked list.',
                    'What is the time complexity of finding an element in an unsorted linked list?'
                ],
                resources: [
                    { name: 'GeeksforGeeks – Linked Lists', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/' },
                    { name: 'TutorialsPoint – Arrays vs Linked Lists', url: 'https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm' },
                    { name: 'Khan Academy – Data Structures', url: 'https://www.khanacademy.org/computing/computer-science/algorithms' }
                ]
            }, {
                id: 'cs201-t2',
                title: 'Stacks & Queues',
                objectives: [
                    'Understand the stack data structure (LIFO).',
                    'Understand the queue data structure (FIFO).',
                    'Implement stacks and queues using arrays and linked lists.'
                ],
                content: `<p><strong>Stack:</strong> A Last-In-First-Out (LIFO) data structure. Operations: push (add an element to the top), pop (remove the top element), peek (view the top element without removing it).</p>
                <p><strong>Queue:</strong> A First-In-First-Out (FIFO) data structure. Operations: enqueue (add an element to the rear), dequeue (remove the front element), front (view the front element).</p>
                <p><strong>Applications:</strong> Stacks are used in function call management (recursion), undo/redo operations, and expression evaluation. Queues are used in task scheduling, buffering, and BFS.</p>
                <div class="key-box"><p><strong>💡 Real-World Use:</strong> Stacks power the back button in browsers. Queues manage print jobs in printers.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: '#define MAX 100\nint stack[MAX], top = -1;\n\nvoid push(int val) {\n    if (top >= MAX-1) { printf("Stack Overflow\\n"); return; }\n    stack[++top] = val;\n}\n\nint pop() {\n    if (top < 0) { printf("Stack Underflow\\n"); return -1; }\n    return stack[top--];\n}'
                }],
                keyTakeaways: [
                    'Stack: LIFO — push, pop, peek.',
                    'Queue: FIFO — enqueue, dequeue, front.',
                    'Both are fundamental data structures with many applications.'
                ],
                practiceQuestions: [
                    'How would you implement a stack using a linked list?',
                    'What is the time complexity of stack push and pop operations?',
                    'Write a function to check if parentheses are balanced using a stack.'
                ],
                resources: [
                    { name: 'GeeksforGeeks – Stack Data Structure', url: 'https://www.geeksforgeeks.org/stack-data-structure/' },
                    { name: 'GeeksforGeeks – Queue Data Structure', url: 'https://www.geeksforgeeks.org/queue-data-structure/' },
                    { name: 'TutorialsPoint – Stack and Queue', url: 'https://www.tutorialspoint.com/data_structures_algorithms/stacks_queues.htm' }
                ]
            }, {
                id: 'cs201-t3',
                title: 'Trees & Graphs',
                objectives: [
                    'Understand tree data structures (binary, BST, AVL).',
                    'Learn graph representations (adjacency matrix, adjacency list).',
                    'Implement tree and graph traversals.'
                ],
                content: `<p><strong>Trees:</strong> Hierarchical data structures with a root node and child nodes. Binary trees have at most two children per node. Binary Search Trees (BST) are ordered. AVL trees are self-balancing.</p>
                <p><strong>Graphs:</strong> Networks of nodes connected by edges. Can be directed or undirected, weighted or unweighted.</p>
                <p><strong>Traversals:</strong> DFS (Depth-First Search) explores as far as possible along each branch. BFS (Breadth-First Search) explores all neighbors at the current level before moving deeper.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Trees and graphs model real-world relationships like file systems, social networks, and maps.</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: 'struct Node {\n    int data;\n    struct Node* left;\n    struct Node* right;\n};\n\nvoid inorder(struct Node* root) {\n    if (root == NULL) return;\n    inorder(root->left);\n    printf("%d ", root->data);\n    inorder(root->right);\n}'
                }],
                keyTakeaways: [
                    'Trees are hierarchical structures.',
                    'Graphs represent networks of relationships.',
                    'DFS and BFS are essential traversal algorithms.'
                ],
                practiceQuestions: [
                    'What is the difference between a binary tree and a binary search tree?',
                    'Implement a function to search for a node in a BST.',
                    'How would you detect a cycle in a graph using DFS?'
                ],
                resources: [
                    { name: 'GeeksforGeeks – Binary Trees', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
                    { name: 'GeeksforGeeks – Graph Data Structure', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
                    { name: 'Visualgo – Graph Traversals', url: 'https://visualgo.net/en/dfsbfs' }
                ]
            }]
        }, {
            id: 'cs202',
            code: 'CS202',
            name: 'Object-Oriented Programming (Java/C++)',
            description: 'Classes, objects, inheritance, polymorphism, encapsulation, and abstraction.',
            topics: [{
                id: 'cs202-t1',
                title: 'Classes & Objects',
                objectives: [
                    'Understand the concept of a class as a blueprint.',
                    'Create objects from classes.',
                    'Understand encapsulation.'
                ],
                content: `<p><strong>Class:</strong> A blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) that the objects will have.</p>
                <p><strong>Object:</strong> An instance of a class. It has state (values of its attributes) and behavior (methods).</p>
                <p><strong>Encapsulation:</strong> Bundling the data and methods that operate on that data, and hiding the internal state from the outside. Achieved using private/public access specifiers.</p>
                <p><strong>Key OOP Principles:</strong> Encapsulation (data hiding), Inheritance (code reuse), Polymorphism (flexibility), Abstraction (simplifying complex systems).</p>
                <div class="key-box"><p><strong>💡 OOP Pillar:</strong> Encapsulation helps you manage complexity and protect data integrity.</p></div>`,
                codeBlocks: [{ lang: 'cpp',
                    code: 'class Student {\nprivate:\n    string name;\n    int age;\npublic:\n    void setName(string n) { name = n; }\n    string getName() { return name; }\n    void setAge(int a) { age = a; }\n    int getAge() { return age; }\n};'
                }],
                keyTakeaways: [
                    'A class is a blueprint; an object is an instance.',
                    'Encapsulation hides internal state.',
                    'Classes encapsulate data and behavior.'
                ],
                practiceQuestions: [
                    'What is the difference between a class and an object?',
                    'Explain the concept of encapsulation with an example.',
                    'Why is encapsulation important in software design?'
                ],
                resources: [
                    { name: 'GeeksforGeeks – OOP Concepts', url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/' },
                    { name: 'TutorialsPoint – OOP in C++', url: 'https://www.tutorialspoint.com/cplusplus/cpp_object_oriented.htm' },
                    { name: 'Programiz – Java OOP', url: 'https://www.programiz.com/java-programming/oops-concepts' }
                ]
            }, {
                id: 'cs202-t2',
                title: 'Inheritance & Polymorphism',
                objectives: [
                    'Understand inheritance as a mechanism for code reuse.',
                    'Learn about polymorphism and method overriding.',
                    'Write programs that use inheritance and polymorphism.'
                ],
                content: `<p><strong>Inheritance:</strong> A mechanism where a new class (derived class) is created from an existing class (base class). The derived class inherits the properties and methods of the base class.</p>
                <p><strong>Types of Inheritance:</strong> Single, Multiple (in Java via interfaces), Multilevel, Hierarchical, and Hybrid.</p>
                <p><strong>Polymorphism:</strong> The ability of an object to take many forms. It allows a base class reference to refer to a derived class object.</p>
                <p><strong>Method Overriding:</strong> A derived class provides its own implementation of a method that is already defined in the base class. This enables runtime polymorphism.</p>
                <div class="key-box"><p><strong>💡 OOP Pillars:</strong> Inheritance promotes code reuse. Polymorphism enables flexibility and extensibility.</p></div>`,
                codeBlocks: [{ lang: 'cpp',
                    code: 'class Animal {\npublic:\n    virtual void speak() { cout << "Animal speaks" << endl; }\n};\n\nclass Dog : public Animal {\npublic:\n    void speak() override { cout << "Dog barks" << endl; }\n};'
                }],
                keyTakeaways: [
                    'Inheritance allows a class to reuse code from another class.',
                    'Polymorphism allows objects to behave differently based on their type.',
                    'Method overriding is a key feature of polymorphism.'
                ],
                practiceQuestions: [
                    'What is the difference between inheritance and composition?',
                    'Explain the concept of polymorphism with a real-world analogy.',
                    'What is the purpose of the virtual keyword in C++?'
                ],
                resources: [
                    { name: 'GeeksforGeeks – Inheritance', url: 'https://www.geeksforgeeks.org/inheritance-in-c/' },
                    { name: 'GeeksforGeeks – Polymorphism', url: 'https://www.geeksforgeeks.org/polymorphism-in-c/' },
                    { name: 'TutorialsPoint – C++ Polymorphism', url: 'https://www.tutorialspoint.com/cplusplus/cpp_polymorphism.htm' }
                ]
            }]
        }, {
            id: 'cs203',
            code: 'CS203',
            name: 'Database Management Systems (DBMS)',
            description: 'Relational databases, SQL, normalization, transactions, and indexing.',
            topics: [{
                id: 'cs203-t1',
                title: 'Introduction to SQL',
                objectives: [
                    'Understand the purpose of SQL.',
                    'Write basic SQL queries (SELECT, INSERT, UPDATE, DELETE).',
                    'Use WHERE clauses and operators.'
                ],
                content: `<p><strong>SQL (Structured Query Language):</strong> The standard language for managing and manipulating relational databases.</p>
                <p><strong>Basic Queries:</strong> SELECT (retrieve data), INSERT (add data), UPDATE (modify data), DELETE (remove data).</p>
                <p><strong>WHERE Clause:</strong> Used to filter records based on a condition. Supports operators: =, <>, >, <, >=, <=, BETWEEN, LIKE, IN.</p>
                <p><strong>Joins:</strong> INNER JOIN (matches rows from both tables), LEFT JOIN (all rows from left, matching from right), RIGHT JOIN (vice versa), FULL JOIN (all rows from both).</p>
                <div class="key-box"><p><strong>💡 Pro Tip:</strong> Always use parameterized queries to prevent SQL injection attacks!</p></div>`,
                codeBlocks: [{ lang: 'sql',
                    code: '-- Select all students\nSELECT * FROM students;\n\n-- Insert a new student\nINSERT INTO students (name, age) VALUES (\'John\', 22);\n\n-- Update a student\'s age\nUPDATE students SET age = 23 WHERE name = \'John\';\n\n-- Delete a student\nDELETE FROM students WHERE name = \'John\';\n\n-- Join example\nSELECT s.name, c.course_name\nFROM students s\nINNER JOIN enrollments e ON s.id = e.student_id\nINNER JOIN courses c ON e.course_id = c.id;'
                }],
                keyTakeaways: [
                    'SQL is used to interact with relational databases.',
                    'SELECT retrieves data, INSERT adds, UPDATE modifies, DELETE removes.',
                    'WHERE filters records.'
                ],
                practiceQuestions: [
                    'Write a SQL query to get all students with age greater than 20.',
                    'What is the difference between DELETE and TRUNCATE?',
                    'How would you retrieve students sorted by name?'
                ],
                resources: [
                    { name: 'W3Schools – SQL Tutorial', url: 'https://www.w3schools.com/sql/' },
                    { name: 'GeeksforGeeks – SQL', url: 'https://www.geeksforgeeks.org/sql-tutorial/' },
                    { name: 'Mode.com – SQL Tutorial', url: 'https://mode.com/sql-tutorial/' }
                ]
            }, {
                id: 'cs203-t2',
                title: 'Normalization & Transactions',
                objectives: [
                    'Understand normalization (1NF, 2NF, 3NF, BCNF).',
                    'Learn about ACID properties of transactions.',
                    'Understand indexing and query optimization.'
                ],
                content: `<p><strong>Normalization:</strong> The process of organizing data in a database to reduce redundancy and improve data integrity.</p>
                <ul>
                    <li><strong>1NF:</strong> Each cell contains atomic (indivisible) values. No repeating groups.</li>
                    <li><strong>2NF:</strong> All non-key attributes are fully functionally dependent on the primary key.</li>
                    <li><strong>3NF:</strong> No transitive dependencies (non-key attributes depend on other non-key attributes).</li>
                    <li><strong>BCNF:</strong> Every determinant is a candidate key.</li>
                </ul>
                <p><strong>ACID Properties:</strong> Atomicity (all or nothing), Consistency (data integrity), Isolation (concurrent execution), Durability (changes persist).</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Normalization improves database design by reducing redundancy and preventing anomalies.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Normalization reduces data redundancy.',
                    'ACID properties ensure reliable transactions.',
                    'Indexing speeds up query performance.'
                ],
                practiceQuestions: [
                    'What is the difference between 2NF and 3NF?',
                    'Explain the ACID properties of transactions.',
                    'What is an index and how does it improve query performance?'
                ],
                resources: [
                    { name: 'Wikipedia – Database Normalization', url: 'https://en.wikipedia.org/wiki/Database_normalization' },
                    { name: 'GeeksforGeeks – DBMS Normalization', url: 'https://www.geeksforgeeks.org/normalization-in-dbms/' },
                    { name: 'TutorialsPoint – DBMS Transactions', url: 'https://www.tutorialspoint.com/dbms/dbms_transaction.htm' }
                ]
            }]
        }, {
            id: 'cs204',
            code: 'CS204',
            name: 'Operating Systems',
            description: 'Process management, memory management, file systems, and concurrency.',
            topics: [{
                id: 'cs204-t1',
                title: 'Process Scheduling',
                objectives: [
                    'Understand processes and threads.',
                    'Learn CPU scheduling algorithms.',
                    'Implement scheduling algorithms.'
                ],
                content: `<p><strong>Process:</strong> A program in execution. It has its own memory space, registers, and program counter.</p>
                <p><strong>Scheduling Algorithms:</strong> FCFS (First-Come First-Served) – simple but suffers from the convoy effect. SJF (Shortest Job First) – minimizes average waiting time. Round Robin – preemptive scheduling with time quantum. Priority Scheduling – based on process priority.</p>
                <p><strong>Context Switching:</strong> The process of saving the state of a process and loading the state of another process. It is the overhead of multitasking.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> The goal of scheduling is to maximize CPU utilization and minimize turnaround time.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Processes are programs in execution.',
                    'Scheduling algorithms manage CPU time allocation.',
                    'Different algorithms have different performance characteristics.'
                ],
                practiceQuestions: [
                    'Compare FCFS and Round Robin scheduling.',
                    'What is the convoy effect in FCFS?',
                    'Implement a simple round-robin scheduler.'
                ],
                resources: [
                    { name: 'GeeksforGeeks – CPU Scheduling', url: 'https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/' },
                    { name: 'TutorialsPoint – OS Scheduling', url: 'https://www.tutorialspoint.com/operating_system/os_process_scheduling.htm' },
                    { name: 'Wikipedia – Scheduling Algorithms', url: 'https://en.wikipedia.org/wiki/Scheduling_(computing)' }
                ]
            }, {
                id: 'cs204-t2',
                title: 'Memory Management',
                objectives: [
                    'Understand virtual memory and paging.',
                    'Learn about segmentation and swapping.',
                    'Understand memory allocation algorithms.'
                ],
                content: `<p><strong>Memory Management:</strong> The process of managing the allocation and deallocation of memory to processes.</p>
                <p><strong>Paging:</strong> Divides physical memory into fixed-size blocks called frames. Divides logical memory into blocks of the same size called pages. Uses a page table to map virtual addresses to physical addresses.</p>
                <p><strong>Segmentation:</strong> Divides memory into variable-sized segments based on the logical structure of the program (code, data, stack).</p>
                <p><strong>Virtual Memory:</strong> Allows processes to use more memory than is physically available. Uses demand paging – pages are loaded into memory only when needed.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Virtual memory enables efficient memory usage and allows multiple processes to run simultaneously.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Memory management allocates memory to processes.',
                    'Paging uses fixed-size blocks.',
                    'Segmentation uses variable-sized blocks.'
                ],
                practiceQuestions: [
                    'What is virtual memory and how does it work?',
                    'Explain the difference between paging and segmentation.',
                    'What is a page fault and how is it handled?'
                ],
                resources: [
                    { name: 'GeeksforGeeks – Memory Management', url: 'https://www.geeksforgeeks.org/memory-management-in-operating-system/' },
                    { name: 'Wikipedia – Virtual Memory', url: 'https://en.wikipedia.org/wiki/Virtual_memory' },
                    { name: 'TutorialsPoint – OS Memory Management', url: 'https://www.tutorialspoint.com/operating_system/os_memory_management.htm' }
                ]
            }]
        }, {
            id: 'cs205',
            code: 'CS205',
            name: 'Discrete Mathematics',
            description: 'Logic, sets, relations, functions, combinatorics, and graph theory.',
            topics: [{
                id: 'cs205-t1',
                title: 'Propositional Logic',
                objectives: [
                    'Understand propositions and logical connectives.',
                    'Learn truth tables and logical equivalence.',
                    'Apply logic to solve problems.'
                ],
                content: `<p><strong>Proposition:</strong> A statement that is either true or false.</p>
                <p><strong>Logical Connectives:</strong> NOT (¬) – negation, AND (∧) – conjunction, OR (∨) – disjunction, IMPLIES (→) – implication, IF AND ONLY IF (↔) – biconditional.</p>
                <p><strong>Truth Tables:</strong> A table that shows the truth value of a compound proposition for all possible truth values of its components.</p>
                <p><strong>Logical Equivalence:</strong> Two propositions are logically equivalent if they have the same truth values for all possible assignments.</p>
                <div class="key-box"><p><strong>💡 Why This Matters:</strong> Logic is the foundation of computer science. It's used in programming, digital circuit design, and artificial intelligence.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Propositions are statements that are true or false.',
                    'Logical connectives combine propositions.',
                    'Truth tables evaluate logical expressions.'
                ],
                practiceQuestions: [
                    'Construct a truth table for (p ∧ q) → r.',
                    'Show that ¬(p ∨ q) ≡ ¬p ∧ ¬q (De Morgan\'s Law).',
                    'Is the statement (p → q) ∧ (q → p) equivalent to (p ↔ q)?'
                ],
                resources: [
                    { name: 'Wikipedia – Propositional Logic', url: 'https://en.wikipedia.org/wiki/Propositional_calculus' },
                    { name: 'GeeksforGeeks – Propositional Logic', url: 'https://www.geeksforgeeks.org/proposition-logic/' },
                    { name: 'Stanford Encyclopedia – Logic', url: 'https://plato.stanford.edu/entries/logic-classical/' }
                ]
            }, {
                id: 'cs205-t2',
                title: 'Graph Theory',
                objectives: [
                    'Understand graphs and their properties.',
                    'Learn graph representations (adjacency matrix, adjacency list).',
                    'Apply graph algorithms (DFS, BFS).'
                ],
                content: `<p><strong>Graphs:</strong> Mathematical structures used to model pairwise relations between objects.</p>
                <ul>
                    <li><strong>Vertices (Nodes):</strong> The objects in the graph.</li>
                    <li><strong>Edges (Links):</strong> The relationships between objects.</li>
                </ul>
                <p><strong>Graph Representations:</strong> Adjacency Matrix (2D array – O(V²) memory) and Adjacency List (array of linked lists – O(V+E) memory).</p>
                <p><strong>Graph Properties:</strong> Degree (number of incident edges), Path (sequence of vertices connected by edges), Cycle (path with no repeated vertices except start/end).</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Graphs are used to model networks like social media, transportation, and the internet.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Graphs model relationships between objects.',
                    'Adjacency matrix and adjacency list are common representations.',
                    'DFS and BFS are fundamental graph traversal algorithms.'
                ],
                practiceQuestions: [
                    'What is the difference between directed and undirected graphs?',
                    'Implement a graph using an adjacency list.',
                    'How would you find the shortest path between two nodes in a graph?'
                ],
                resources: [
                    { name: 'Wikipedia – Graph Theory', url: 'https://en.wikipedia.org/wiki/Graph_theory' },
                    { name: 'GeeksforGeeks – Graph Data Structure', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
                    { name: 'Brilliant – Graph Theory', url: 'https://brilliant.org/wiki/graph-theory/' }
                ]
            }]
        }, {
            id: 'cs206',
            code: 'CS206',
            name: 'Computer Organization & Architecture',
            description: 'CPU architecture, memory hierarchy, instruction sets, and assembly language.',
            topics: [{
                id: 'cs206-t1',
                title: 'CPU Architecture',
                objectives: [
                    'Understand the basic components of a CPU.',
                    'Learn about the fetch-decode-execute cycle.',
                    'Explore the memory hierarchy.'
                ],
                content: `<p><strong>CPU Components:</strong> The Central Processing Unit consists of the Arithmetic Logic Unit (ALU) – performs arithmetic and logic operations, the Control Unit (CU) – controls the flow of data, and registers – fast storage locations within the CPU.</p>
                <p><strong>Fetch-Decode-Execute Cycle:</strong> The CPU repeatedly:</p>
                <ol>
                    <li><strong>Fetch:</strong> Retrieves an instruction from memory using the program counter.</li>
                    <li><strong>Decode:</strong> Interprets the instruction to determine the operation.</li>
                    <li><strong>Execute:</strong> Performs the operation (arithmetic, load/store, branch).</li>
                </ol>
                <p><strong>Memory Hierarchy:</strong> Registers (fastest, smallest), Cache (L1, L2, L3), RAM (main memory), Secondary Storage (hard disk, SSD).</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> The memory hierarchy is a trade-off between speed, cost, and capacity.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'The CPU has an ALU, CU, and registers.',
                    'The fetch-decode-execute cycle is the core of CPU operation.',
                    'Memory hierarchy balances speed and cost.'
                ],
                practiceQuestions: [
                    'Explain the difference between the ALU and the Control Unit.',
                    'What is the purpose of the program counter?',
                    'Why is cache memory faster than RAM?'
                ],
                resources: [
                    { name: 'Wikipedia – CPU Architecture', url: 'https://en.wikipedia.org/wiki/Central_processing_unit' },
                    { name: 'GeeksforGeeks – Computer Organization', url: 'https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/' },
                    { name: 'TutorialsPoint – CPU Architecture', url: 'https://www.tutorialspoint.com/computer_organization/index.htm' }
                ]
            }]
        }, {
            id: 'cs207',
            code: 'CS207',
            name: 'Software Engineering Principles',
            description: 'SDLC, agile methodologies, testing, and project management.',
            topics: [{
                id: 'cs207-t1',
                title: 'SDLC & Agile',
                objectives: [
                    'Understand the Software Development Life Cycle (SDLC).',
                    'Learn about Agile methodologies.',
                    'Compare Waterfall and Agile approaches.'
                ],
                content: `<p><strong>SDLC:</strong> The Software Development Life Cycle is a structured process for building software. Phases: Requirements Gathering → System Design → Implementation → Testing → Deployment → Maintenance.</p>
                <p><strong>Waterfall Model:</strong> A linear, sequential approach where each phase must be completed before the next begins. Predictable but inflexible to changes.</p>
                <p><strong>Agile Methodologies:</strong> An iterative approach where software is developed in small increments (sprints) with continuous feedback. Examples: Scrum (sprints, daily stand-ups, retrospectives), Kanban (visualizing workflow, limiting WIP), Extreme Programming (XP).</p>
                <div class="key-box"><p><strong>💡 Industry Standard:</strong> Agile is the dominant methodology in modern software development.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'SDLC provides a structured framework for software development.',
                    'Waterfall is linear; Agile is iterative.',
                    'Agile emphasizes collaboration and flexibility.'
                ],
                practiceQuestions: [
                    'What are the phases of the SDLC?',
                    'Compare and contrast Waterfall and Agile.',
                    'What is a sprint in Agile methodology?'
                ],
                resources: [
                    { name: 'Wikipedia – Software Development Process', url: 'https://en.wikipedia.org/wiki/Software_development_process' },
                    { name: 'GeeksforGeeks – SDLC', url: 'https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/' },
                    { name: 'Atlassian – Agile Guide', url: 'https://www.atlassian.com/agile' }
                ]
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
                objectives: [
                    'Understand Big O, Omega, and Theta notations.',
                    'Analyze the time complexity of simple algorithms.',
                    'Use recurrence relations to analyze recursive algorithms.'
                ],
                content: `<p><strong>Big O Notation:</strong> Describes the upper bound of an algorithm's running time. It gives the worst-case time complexity. For example, O(n) means the running time grows linearly with the input size.</p>
                <p><strong>Omega (Ω) Notation:</strong> Describes the lower bound. It gives the best-case time complexity.</p>
                <p><strong>Theta (Θ) Notation:</strong> Describes the tight bound. It gives the average-case time complexity.</p>
                <p><strong>Recurrence Relations:</strong> Used to analyze recursive algorithms. Example: T(n) = 2T(n/2) + O(n) for merge sort, which solves to O(n log n).</p>
                <div class="key-box"><p><strong>💡 Why It Matters:</strong> Asymptotic analysis allows you to compare algorithms independently of hardware and implementation details.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Big O is the upper bound (worst-case).',
                    'Omega is the lower bound (best-case).',
                    'Theta is the tight bound (average-case).'
                ],
                practiceQuestions: [
                    'What is the time complexity of nested loops?',
                    'Explain why O(1) is better than O(n).',
                    'What is the recurrence relation for merge sort?'
                ],
                resources: [
                    { name: 'Wikipedia – Big O Notation', url: 'https://en.wikipedia.org/wiki/Big_O_notation' },
                    { name: 'GeeksforGeeks – Asymptotic Notation', url: 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/' },
                    { name: 'Khan Academy – Asymptotic Notation', url: 'https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation' }
                ]
            }, {
                id: 'cs301-t2',
                title: 'Sorting Algorithms',
                objectives: [
                    'Understand the key sorting algorithms: Bubble, Insertion, Selection, Merge, Quick.',
                    'Analyze their time and space complexities.',
                    'Implement sorting algorithms in code.'
                ],
                content: `<p><strong>Bubble Sort:</strong> Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. Time: O(n²). Stable and in-place.</p>
                <p><strong>Selection Sort:</strong> Divides the list into sorted and unsorted regions. Finds the minimum element in the unsorted region and moves it to the sorted region. Time: O(n²).</p>
                <p><strong>Insertion Sort:</strong> Builds the sorted array one element at a time. Time: O(n²) worst-case, O(n) best-case when the array is nearly sorted.</p>
                <p><strong>Merge Sort:</strong> Divide and conquer algorithm. Divides the array into two halves, recursively sorts them, and merges the results. Time: O(n log n), Space: O(n).</p>
                <p><strong>Quick Sort:</strong> Picks a pivot and partitions the array around it. Time: O(n log n) average, O(n²) worst-case. In-place but not stable.</p>
                <div class="key-box"><p><strong>💡 Choose Wisely:</strong> Merge sort is stable and predictable. Quick sort is faster on average but has a worst-case of O(n²).</p></div>`,
                codeBlocks: [{ lang: 'c',
                    code: 'void quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}'
                }],
                keyTakeaways: [
                    'Bubble, Insertion, Selection are O(n²).',
                    'Merge and Quick sort are O(n log n) on average.',
                    'Choice of algorithm depends on the data and requirements.'
                ],
                practiceQuestions: [
                    'Compare and contrast Merge Sort and Quick Sort.',
                    'What is the worst-case time complexity of Quick Sort? When does it happen?',
                    'Implement Bubble Sort and analyze its performance.'
                ],
                resources: [
                    { name: 'GeeksforGeeks – Sorting Algorithms', url: 'https://www.geeksforgeeks.org/sorting-algorithms/' },
                    { name: 'Wikipedia – Sorting Algorithm', url: 'https://en.wikipedia.org/wiki/Sorting_algorithm' },
                    { name: 'Visualgo – Sorting Visualizations', url: 'https://visualgo.net/en/sorting' }
                ]
            }, {
                id: 'cs301-t3',
                title: 'Dynamic Programming & Greedy Algorithms',
                objectives: [
                    'Understand dynamic programming principles.',
                    'Learn greedy algorithms and their applications.',
                    'Solve problems using DP and greedy approaches.'
                ],
                content: `<p><strong>Dynamic Programming:</strong> A technique for solving complex problems by breaking them down into simpler subproblems and storing the results (memoization). Used when a problem has overlapping subproblems and optimal substructure.</p>
                <p><strong>Common DP Problems:</strong> Knapsack Problem (0/1 and fractional), Coin Change (minimum coins for a given amount), Longest Common Subsequence (LCS), Longest Increasing Subsequence (LIS), Edit Distance.</p>
                <p><strong>Greedy Algorithms:</strong> Make the locally optimal choice at each step with the hope of finding a global optimum. Used when the problem has the greedy choice property.</p>
                <p><strong>Common Greedy Problems:</strong> Activity Selection (maximum activities without overlap), Huffman Coding (optimal prefix codes), Fractional Knapsack, Dijkstra's Shortest Path.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> DP is used when a problem has overlapping subproblems. Greedy is used when local optimal choices lead to a global optimum.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'DP solves problems by storing subproblem solutions.',
                    'Greedy makes locally optimal choices.',
                    'DP is used for optimization problems.'
                ],
                practiceQuestions: [
                    'What is the difference between DP and greedy algorithms?',
                    'Solve the 0/1 Knapsack problem using DP.',
                    'Apply the Huffman coding algorithm to a set of characters.'
                ],
                resources: [
                    { name: 'GeeksforGeeks – Dynamic Programming', url: 'https://www.geeksforgeeks.org/dynamic-programming/' },
                    { name: 'GeeksforGeeks – Greedy Algorithms', url: 'https://www.geeksforgeeks.org/greedy-algorithms/' },
                    { name: 'YouTube – MIT DP Lecture', url: 'https://www.youtube.com/watch?v=OQ5jsbhAv_M' }
                ]
            }]
        }, {
            id: 'cs302',
            code: 'CS302',
            name: 'Computer Networks',
            description: 'OSI model, TCP/IP, routing, switching, and network security.',
            topics: [{
                id: 'cs302-t1',
                title: 'OSI & TCP/IP Models',
                objectives: [
                    'Understand the OSI reference model.',
                    'Learn the functions of each layer.',
                    'Compare OSI with TCP/IP.'
                ],
                content: `<p><strong>OSI Model:</strong> The Open Systems Interconnection model is a conceptual framework that standardizes the functions of a communication system into 7 layers:</p>
                <ol>
                    <li><strong>Physical:</strong> Raw data transmission over cables, fiber, or wireless.</li>
                    <li><strong>Data Link:</strong> MAC addresses, error detection, framing (Ethernet).</li>
                    <li><strong>Network:</strong> IP addresses, routing (IPv4, IPv6).</li>
                    <li><strong>Transport:</strong> End-to-end communication, TCP (reliable), UDP (unreliable).</li>
                    <li><strong>Session:</strong> Connection management, authentication.</li>
                    <li><strong>Presentation:</strong> Data translation, encryption, compression.</li>
                    <li><strong>Application:</strong> User-facing services (HTTP, FTP, SMTP).</li>
                </ol>
                <p><strong>TCP/IP Model:</strong> A 4-layer practical implementation: Network Interface (Physical + Data Link), Internet (Network), Transport, Application (Session + Presentation + Application).</p>
                <div class="key-box"><p><strong>💡 Why It Matters:</strong> The OSI model is a conceptual framework for understanding how data travels across a network.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'OSI has 7 layers; TCP/IP has 4 layers.',
                    'Each layer has specific functions.',
                    'TCP/IP is the practical implementation of networking.'
                ],
                practiceQuestions: [
                    'What are the functions of the Transport layer?',
                    'Compare OSI and TCP/IP models.',
                    'Explain the role of the Network layer.'
                ],
                resources: [
                    { name: 'Wikipedia – OSI Model', url: 'https://en.wikipedia.org/wiki/OSI_model' },
                    { name: 'GeeksforGeeks – OSI Model', url: 'https://www.geeksforgeeks.org/layers-of-osi-model/' },
                    { name: 'Cloudflare – OSI Model Explained', url: 'https://www.cloudflare.com/learning/ddos/osi-model/' }
                ]
            }, {
                id: 'cs302-t2',
                title: 'Routing & Switching',
                objectives: [
                    'Understand routing algorithms (RIP, OSPF, BGP).',
                    'Learn switching techniques (circuit, packet, message switching).',
                    'Understand IP addressing and subnetting.'
                ],
                content: `<p><strong>Routing:</strong> The process of determining the path that data packets take across a network.</p>
                <ul>
                    <li><strong>RIP (Routing Information Protocol):</strong> Distance-vector routing protocol. Uses hop count as the metric (max 15 hops).</li>
                    <li><strong>OSPF (Open Shortest Path First):</strong> Link-state routing protocol. Uses Dijkstra's algorithm to find the shortest path.</li>
                    <li><strong>BGP (Border Gateway Protocol):</strong> Path-vector routing protocol used on the internet to route between autonomous systems.</li>
                </ul>
                <p><strong>IP Addressing:</strong> IPv4 addresses are 32-bit numbers (e.g., 192.168.1.1). Subnetting divides a network into smaller subnetworks using a subnet mask.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Routing algorithms ensure that data reaches its destination efficiently.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Routing determines the path of data packets.',
                    'RIP, OSPF, and BGP are common routing protocols.',
                    'IP addresses uniquely identify devices on a network.'
                ],
                practiceQuestions: [
                    'What is the difference between RIP and OSPF?',
                    'How does subnetting work?',
                    'What is NAT and why is it used?'
                ],
                resources: [
                    { name: 'Wikipedia – Routing', url: 'https://en.wikipedia.org/wiki/Routing' },
                    { name: 'GeeksforGeeks – Routing Protocols', url: 'https://www.geeksforgeeks.org/routing-protocols-in-computer-networks/' },
                    { name: 'Cisco – Routing Basics', url: 'https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-3.html' }
                ]
            }]
        }, {
            id: 'cs303',
            code: 'CS303',
            name: 'Web Technology & Full Stack Development',
            description: 'HTML, CSS, JavaScript, frontend frameworks, and backend development.',
            topics: [{
                id: 'cs303-t1',
                title: 'HTML & CSS Basics',
                objectives: [
                    'Understand HTML structure and tags.',
                    'Learn CSS for styling.',
                    'Build a simple webpage.'
                ],
                content: `<p><strong>HTML (HyperText Markup Language):</strong> Used to structure web content. It uses tags like <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;div&gt;</code>, and <code>&lt;section&gt;</code> to define elements.</p>
                <p><strong>Semantic HTML:</strong> Use tags that convey meaning: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>. This improves accessibility and SEO.</p>
                <p><strong>CSS (Cascading Style Sheets):</strong> Used for presentation. Controls layout, colors, fonts, animations, and responsiveness.</p>
                <p><strong>Box Model:</strong> Every HTML element is a box with margin (outer spacing), border (edge), padding (inner spacing), and content (actual element).</p>
                <div class="key-box"><p><strong>💡 Pro Tip:</strong> Use semantic HTML for better accessibility and SEO.</p></div>`,
                codeBlocks: [{ lang: 'html',
                    code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n    <p>This is my first webpage.</p>\n</body>\n</html>'
                }],
                keyTakeaways: [
                    'HTML provides structure.',
                    'CSS provides style.',
                    'The box model is fundamental to layout.'
                ],
                practiceQuestions: [
                    'What is the difference between HTML and CSS?',
                    'Explain the CSS box model.',
                    'Create a simple styled webpage.'
                ],
                resources: [
                    { name: 'MDN Web Docs – HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                    { name: 'MDN Web Docs – CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                    { name: 'W3Schools – HTML & CSS', url: 'https://www.w3schools.com/html/default.asp' }
                ]
            }, {
                id: 'cs303-t2',
                title: 'JavaScript & Frontend Frameworks',
                objectives: [
                    'Understand JavaScript fundamentals.',
                    'Learn DOM manipulation and event handling.',
                    'Explore React or other frontend frameworks.'
                ],
                content: `<p><strong>JavaScript:</strong> A programming language that allows you to create interactive web pages. It runs in the browser and handles user interactions, animations, and API calls.</p>
                <p><strong>DOM Manipulation:</strong> Use JavaScript to dynamically modify the structure, style, and content of a web page. <code>document.getElementById()</code>, <code>querySelector()</code>, <code>addEventListener()</code>.</p>
                <p><strong>Async JavaScript:</strong> <code>setTimeout</code>, <code>setInterval</code>, Promises, <code>async/await</code> for handling asynchronous operations like API calls.</p>
                <p><strong>React:</strong> A popular JavaScript library for building user interfaces using components. It uses a virtual DOM for efficient updates.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> JavaScript is essential for creating dynamic and responsive web applications.</p></div>`,
                codeBlocks: [{ lang: 'javascript',
                    code: '// JavaScript Example\ndocument.getElementById("myButton").addEventListener("click", function() {\n    alert("Button clicked!");\n});\n\n// Async example\nasync function fetchData() {\n    const response = await fetch("https://api.example.com/data");\n    const data = await response.json();\n    console.log(data);\n}'
                }],
                keyTakeaways: [
                    'JavaScript adds interactivity to web pages.',
                    'DOM manipulation changes page content dynamically.',
                    'React is a popular frontend framework.'
                ],
                practiceQuestions: [
                    'What is the DOM?',
                    'Write a JavaScript function that changes the background color of a page when a button is clicked.',
                    'What are React components and why are they useful?'
                ],
                resources: [
                    { name: 'MDN – JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
                    { name: 'React Official Docs', url: 'https://react.dev/learn' },
                    { name: 'W3Schools – JavaScript', url: 'https://www.w3schools.com/js/default.asp' }
                ]
            }]
        }, {
            id: 'cs304',
            code: 'CS304',
            name: 'Theory of Computation / Formal Languages',
            description: 'Automata theory, regular languages, context-free languages, and Turing machines.',
            topics: [{
                id: 'cs304-t1',
                title: 'Finite Automata & Regular Languages',
                objectives: [
                    'Understand finite automata (DFA, NFA).',
                    'Learn regular expressions and their applications.',
                    'Understand the pumping lemma for regular languages.'
                ],
                content: `<p><strong>Finite Automata:</strong> Mathematical models of computation with a finite number of states.</p>
                <ul>
                    <li><strong>DFA (Deterministic Finite Automaton):</strong> For each state and input symbol, there is exactly one transition. It always knows which state to go to next.</li>
                    <li><strong>NFA (Nondeterministic Finite Automaton):</strong> There may be multiple transitions for a given state and input symbol, or ε-transitions (transitions without consuming input).</li>
                </ul>
                <p><strong>Regular Languages:</strong> Languages that can be recognized by finite automata. They are described by regular expressions (e.g., a*b+, (ab)*).</p>
                <p><strong>Pumping Lemma:</strong> A property of regular languages that can be used to prove that a language is not regular. If a language is regular, there exists a pumping length p such that any string of length ≥ p can be pumped.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Finite automata are used in text processing, compiler design, and network protocols.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'DFA and NFA are finite automata models.',
                    'Regular languages are recognized by finite automata.',
                    'Regular expressions describe regular languages.'
                ],
                practiceQuestions: [
                    'What is the difference between a DFA and an NFA?',
                    'Construct a DFA that accepts strings ending with "00".',
                    'What is the pumping lemma and how is it used to prove a language is not regular?'
                ],
                resources: [
                    { name: 'Wikipedia – Finite Automata', url: 'https://en.wikipedia.org/wiki/Finite-state_machine' },
                    { name: 'GeeksforGeeks – Automata Theory', url: 'https://www.geeksforgeeks.org/introduction-of-finite-automata/' },
                    { name: 'Stanford – Automata Theory', url: 'https://web.stanford.edu/class/archive/cs/cs103/cs103.1176/lectures/11/' }
                ]
            }, {
                id: 'cs304-t2',
                title: 'Context-Free Languages & Turing Machines',
                objectives: [
                    'Understand context-free grammars and languages.',
                    'Learn about pushdown automata.',
                    'Understand Turing machines and computability.'
                ],
                content: `<p><strong>Context-Free Languages:</strong> Languages generated by context-free grammars (CFGs). A CFG consists of variables, terminals, production rules, and a start symbol.</p>
                <p><strong>Pushdown Automata (PDA):</strong> A finite automaton with a stack. It can recognize context-free languages. PDAs are more powerful than finite automata.</p>
                <p><strong>Turing Machines:</strong> A theoretical computational model that can simulate any algorithm. It consists of an infinite tape, a head that reads/writes symbols, and a finite set of states.</p>
                <p><strong>Computability:</strong> A problem is computable if it can be solved by a Turing machine. The halting problem (determining whether a program halts) is undecidable.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Turing machines define the limits of computation. The halting problem is undecidable.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Context-free languages are generated by context-free grammars.',
                    'Turing machines are the most powerful computational model.',
                    'The halting problem is undecidable.'
                ],
                practiceQuestions: [
                    'What is a pushdown automaton and how does it relate to context-free languages?',
                    'Describe the components of a Turing machine.',
                    'What is the halting problem and why is it important?'
                ],
                resources: [
                    { name: 'Wikipedia – Context-Free Grammar', url: 'https://en.wikipedia.org/wiki/Context-free_grammar' },
                    { name: 'Wikipedia – Turing Machine', url: 'https://en.wikipedia.org/wiki/Turing_machine' },
                    { name: 'GeeksforGeeks – Turing Machine', url: 'https://www.geeksforgeeks.org/turing-machine-introduction/' }
                ]
            }]
        }, {
            id: 'cs305',
            code: 'CS305',
            name: 'Programming for Scientific Computing (Python)',
            description: 'Python for data analysis, numerical computing, and scientific applications.',
            topics: [{
                id: 'cs305-t1',
                title: 'Python Fundamentals',
                objectives: [
                    'Understand Python syntax and data types.',
                    'Learn control flow and functions in Python.',
                    'Use Python for basic programming tasks.'
                ],
                content: `<p><strong>Python:</strong> A high-level, interpreted programming language known for its simplicity and readability. It is widely used in data science, AI, web development, and automation.</p>
                <p><strong>Data Types:</strong> int (integers), float (decimals), bool (True/False), str (strings), list (mutable sequences), tuple (immutable sequences), dict (key-value pairs), set (unique elements).</p>
                <p><strong>Control Flow:</strong> <code>if</code>, <code>elif</code>, <code>else</code> for conditionals. <code>for</code> and <code>while</code> loops for iteration.</p>
                <p><strong>Functions:</strong> Use <code>def</code> to define reusable blocks of code. Functions can take parameters and return values.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Python is widely used in data science, AI, and scientific computing due to its extensive libraries.</p></div>`,
                codeBlocks: [{ lang: 'python',
                    code: '# Python example\nprint("Hello, World!")\n\n# Function definition\ndef greet(name):\n    return f"Hello, {name}!"\n\n# Loop\nfor i in range(5):\n    print(greet(f"User {i}"))\n\n# List comprehension\nsquares = [x**2 for x in range(10)]\nprint(squares)'
                }],
                keyTakeaways: [
                    'Python is simple and readable.',
                    'It has a rich set of data structures.',
                    'Functions are defined using def.'
                ],
                practiceQuestions: [
                    'What is the difference between a list and a tuple in Python?',
                    'Write a Python function to calculate the factorial of a number.',
                    'How do you handle exceptions in Python?'
                ],
                resources: [
                    { name: 'Python.org – Official Tutorial', url: 'https://docs.python.org/3/tutorial/' },
                    { name: 'GeeksforGeeks – Python', url: 'https://www.geeksforgeeks.org/python-programming-language/' },
                    { name: 'Real Python – Tutorials', url: 'https://realpython.com/' }
                ]
            }, {
                id: 'cs305-t2',
                title: 'Scientific Python (NumPy, Matplotlib)',
                objectives: [
                    'Understand NumPy for numerical computing.',
                    'Learn Matplotlib for data visualization.',
                    'Apply Python to solve scientific problems.'
                ],
                content: `<p><strong>NumPy:</strong> A library for numerical computing in Python. Provides support for large, multi-dimensional arrays and matrices.</p>
                <p><strong>Key NumPy Features:</strong> ndarray (n-dimensional array), vectorized operations (faster than loops), broadcasting (operations on arrays of different shapes), linear algebra functions, random number generation.</p>
                <p><strong>Matplotlib:</strong> A plotting library for creating static, animated, and interactive visualizations. Used for line plots, bar charts, histograms, scatter plots, and 3D visualizations.</p>
                <p><strong>Use Cases:</strong> Data analysis, machine learning, image processing, scientific simulations, and financial modeling.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> NumPy and Matplotlib are the foundation of the Python scientific ecosystem.</p></div>`,
                codeBlocks: [{ lang: 'python',
                    code: 'import numpy as np\nimport matplotlib.pyplot as plt\n\n# Create data\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\n\n# Array operations\narr = np.array([1, 2, 3, 4, 5])\nprint(arr * 2)  # Broadcasting\n\n# Plot\nplt.plot(x, y)\nplt.title("Sine Wave")\nplt.xlabel("x")\nplt.ylabel("sin(x)")\nplt.grid(True)\nplt.show()'
                }],
                keyTakeaways: [
                    'NumPy provides efficient array operations.',
                    'Matplotlib is used for data visualization.',
                    'Python is powerful for scientific computing.'
                ],
                practiceQuestions: [
                    'How do you create a NumPy array?',
                    'Plot a histogram of random data using Matplotlib.',
                    'What are the advantages of using NumPy over Python lists?'
                ],
                resources: [
                    { name: 'NumPy Official Docs', url: 'https://numpy.org/doc/stable/' },
                    { name: 'Matplotlib Official Docs', url: 'https://matplotlib.org/stable/tutorials/index.html' },
                    { name: 'GeeksforGeeks – NumPy Tutorial', url: 'https://www.geeksforgeeks.org/numpy-tutorial/' }
                ]
            }]
        }, {
            id: 'cs306',
            code: 'CS306',
            name: 'Advanced Microprocessors',
            description: 'Microprocessor architecture, instruction sets, interfacing, and assembly programming.',
            topics: [{
                id: 'cs306-t1',
                title: 'Microprocessor Architecture',
                objectives: [
                    'Understand the architecture of 8086 and modern processors.',
                    'Learn the instruction set and addressing modes.',
                    'Write assembly language programs.'
                ],
                content: `<p><strong>Microprocessor:</strong> A central processing unit (CPU) on a single integrated circuit. The 8086 is a classic 16-bit microprocessor that is still studied as a foundation.</p>
                <p><strong>8086 Architecture:</strong> Internal structure including general-purpose registers (AX, BX, CX, DX), segment registers (CS, DS, SS, ES), ALU, Control Unit, and Bus Interface Unit.</p>
                <p><strong>Addressing Modes:</strong> Immediate (direct value), Direct (memory address), Register (register contents), Register Indirect (address in register), Indexed (base + offset), Based (segment + offset).</p>
                <p><strong>Instruction Set:</strong> Data transfer (MOV, XCHG), Arithmetic (ADD, SUB, MUL, DIV), Logic (AND, OR, XOR, NOT), Branching (JMP, JZ, JC, LOOP), Stack operations (PUSH, POP).</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Microprocessors are the heart of computers and embedded systems.</p></div>`,
                codeBlocks: [{ lang: 'assembly',
                    code: 'MOV AX, 5     ; Load immediate value 5 into AX\nMOV BX, AX     ; Copy AX to BX\nADD AX, BX     ; Add AX and BX, store in AX\nCMP AX, 10     ; Compare AX with 10\nJZ LABEL       ; Jump if zero\nHLT            ; Halt execution\nLABEL:\nMOV CX, 1\nHLT'
                }],
                keyTakeaways: [
                    'Microprocessors are CPUs on a single chip.',
                    'The 8086 is a foundational microprocessor.',
                    'Assembly language is the lowest-level programming language.'
                ],
                practiceQuestions: [
                    'What are the main components of a microprocessor?',
                    'Explain the difference between immediate and register addressing modes.',
                    'Write an assembly program to add two numbers and store the result.'
                ],
                resources: [
                    { name: 'Wikipedia – 8086 Microprocessor', url: 'https://en.wikipedia.org/wiki/Intel_8086' },
                    { name: 'GeeksforGeeks – 8086 Architecture', url: 'https://www.geeksforgeeks.org/architecture-of-8086/' },
                    { name: 'TutorialsPoint – 8086 Microprocessor', url: 'https://www.tutorialspoint.com/microprocessor/index.htm' }
                ]
            }]
        }, {
            id: 'cs307',
            code: 'CS307',
            name: 'Technical Communication & Soft Skills',
            description: 'Technical writing, presentation skills, interview preparation, and professional ethics.',
            topics: [{
                id: 'cs307-t1',
                title: 'Technical Writing & Presentation',
                objectives: [
                    'Understand the principles of technical writing.',
                    'Learn to create effective technical documents.',
                    'Develop presentation and public speaking skills.'
                ],
                content: `<p><strong>Technical Writing:</strong> The process of creating clear, concise, and accurate technical documents.</p>
                <p><strong>Key Principles:</strong> Know your audience (technical vs. non-technical), be clear and concise, use visual aids (diagrams, charts), and organize information logically.</p>
                <p><strong>Document Types:</strong> User manuals, technical reports, API documentation, research papers, product specifications.</p>
                <p><strong>Presentation Skills:</strong> Plan your content (introduction, body, conclusion), use visual aids effectively, speak clearly and confidently, engage the audience, handle Q&A sessions.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Strong communication skills are essential for career advancement.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Technical writing communicates complex information clearly.',
                    'Effective presentations engage and inform the audience.',
                    'Communication skills are critical for professional success.'
                ],
                practiceQuestions: [
                    'What are the key elements of a technical report?',
                    'How would you prepare for a technical presentation?',
                    'What is the importance of audience analysis in communication?'
                ],
                resources: [
                    { name: 'Wikipedia – Technical Writing', url: 'https://en.wikipedia.org/wiki/Technical_writing' },
                    { name: 'GeeksforGeeks – Communication Skills', url: 'https://www.geeksforgeeks.org/communication-skills/' },
                    { name: 'SkillsYouNeed – Presentation Skills', url: 'https://www.skillsyouneed.com/presentation-skills/' }
                ]
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
                objectives: [
                    'Understand uninformed search (BFS, DFS).',
                    'Learn informed search (A*, Greedy).',
                    'Implement search algorithms.'
                ],
                content: `<p><strong>Uninformed Search:</strong> BFS (Breadth-First Search) – explores all neighbors at the current level before moving deeper. DFS (Depth-First Search) – explores as far as possible along a branch before backtracking. Uniform Cost Search – expands the node with the lowest cost.</p>
                <p><strong>Informed Search:</strong> Greedy Best-First – expands the node closest to the goal using a heuristic. A* – expands the node with the lowest f(n) = g(n) + h(n), where g(n) is the cost from the start and h(n) is the heuristic estimate to the goal.</p>
                <p><strong>Heuristics:</strong> A heuristic is a rule of thumb that guides the search. For A*, the heuristic must be admissible (never overestimate the cost to the goal).</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Heuristics improve search efficiency by guiding the search towards the goal.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'BFS and DFS are fundamental search algorithms.',
                    'A* uses heuristics to find optimal paths.',
                    'Search algorithms are used in many AI applications.'
                ],
                practiceQuestions: [
                    'Compare BFS and DFS.',
                    'Explain the role of a heuristic function in A*.',
                    'Implement a simple pathfinding algorithm.'
                ],
                resources: [
                    { name: 'Wikipedia – Search Algorithms', url: 'https://en.wikipedia.org/wiki/Search_algorithm' },
                    { name: 'GeeksforGeeks – A* Algorithm', url: 'https://www.geeksforgeeks.org/a-search-algorithm/' },
                    { name: 'Brilliant – Pathfinding', url: 'https://brilliant.org/wiki/pathfinding/' }
                ]
            }, {
                id: 'cs401-t2',
                title: 'Machine Learning Basics',
                objectives: [
                    'Understand supervised and unsupervised learning.',
                    'Learn about linear regression and classification.',
                    'Explore neural networks.'
                ],
                content: `<p><strong>Supervised Learning:</strong> Training models using labeled data. Tasks include:</p>
                <ul>
                    <li><strong>Regression:</strong> Predicting continuous values (e.g., house prices, stock prices).</li>
                    <li><strong>Classification:</strong> Predicting discrete categories (e.g., spam detection, image recognition).</li>
                </ul>
                <p><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data. Tasks include:</p>
                <ul>
                    <li><strong>Clustering:</strong> Grouping similar data points (e.g., K-means, hierarchical clustering).</li>
                    <li><strong>Dimensionality Reduction:</strong> Reducing the number of features (e.g., PCA, t-SNE).</li>
                </ul>
                <p><strong>Neural Networks:</strong> Computational models inspired by the human brain. They consist of layers of interconnected neurons. Deep learning uses multiple hidden layers.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Machine learning is the foundation of modern AI applications.</p></div>`,
                codeBlocks: [{ lang: 'python',
                    code: 'from sklearn.linear_model import LinearRegression\nimport numpy as np\n\n# Data\nX = np.array([[1], [2], [3], [4]])\ny = np.array([2, 4, 6, 8])\n\n# Train model\nmodel = LinearRegression()\nmodel.fit(X, y)\n\n# Predict\nprint(model.predict([[5]]))  # Output: [10.]'
                }],
                keyTakeaways: [
                    'Supervised learning uses labeled data.',
                    'Unsupervised learning finds patterns in unlabeled data.',
                    'Neural networks are the backbone of deep learning.'
                ],
                practiceQuestions: [
                    'What is the difference between supervised and unsupervised learning?',
                    'Explain the concept of gradient descent.',
                    'What is a neural network and how does it work?'
                ],
                resources: [
                    { name: 'Wikipedia – Machine Learning', url: 'https://en.wikipedia.org/wiki/Machine_learning' },
                    { name: 'Scikit-learn – Documentation', url: 'https://scikit-learn.org/stable/tutorial/' },
                    { name: 'Andrew Ng – Machine Learning Course', url: 'https://www.coursera.org/learn/machine-learning' }
                ]
            }]
        }, {
            id: 'cs402',
            code: 'CS402',
            name: 'Cloud Computing & DevOps',
            description: 'Cloud service models, virtualization, CI/CD, and DevOps tools.',
            topics: [{
                id: 'cs402-t1',
                title: 'Cloud Service Models',
                objectives: [
                    'Understand IaaS, PaaS, SaaS.',
                    'Learn about virtualization.',
                    'Explore cloud providers.'
                ],
                content: `<p><strong>IaaS (Infrastructure as a Service):</strong> Provides virtualized hardware resources like servers, storage, and networking (e.g., AWS EC2, GCP Compute Engine, Azure Virtual Machines).</p>
                <p><strong>PaaS (Platform as a Service):</strong> Provides a platform for developing and deploying applications without managing the underlying infrastructure (e.g., Google App Engine, AWS Elastic Beanstalk, Heroku).</p>
                <p><strong>SaaS (Software as a Service):</strong> Provides ready-to-use software applications delivered over the internet (e.g., Google Workspace, Salesforce, Microsoft 365).</p>
                <p><strong>Virtualization:</strong> The process of creating virtual versions of hardware, operating systems, or storage. Hypervisors (e.g., VMware, KVM) manage virtual machines.</p>
                <div class="key-box"><p><strong>💡 Why It Matters:</strong> Cloud computing is the backbone of modern IT infrastructure, enabling scalability, cost-efficiency, and innovation.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'IaaS provides virtualized hardware.',
                    'PaaS provides a platform for application development.',
                    'SaaS provides ready-to-use software.'
                ],
                practiceQuestions: [
                    'Compare IaaS, PaaS, and SaaS.',
                    'What is virtualization and how does it enable cloud computing?',
                    'List some popular cloud providers and their services.'
                ],
                resources: [
                    { name: 'Wikipedia – Cloud Computing', url: 'https://en.wikipedia.org/wiki/Cloud_computing' },
                    { name: 'GeeksforGeeks – Cloud Computing', url: 'https://www.geeksforgeeks.org/cloud-computing/' },
                    { name: 'AWS – Cloud Fundamentals', url: 'https://aws.amazon.com/training/learn-about-cloud/' }
                ]
            }, {
                id: 'cs402-t2',
                title: 'DevOps & CI/CD',
                objectives: [
                    'Understand DevOps principles.',
                    'Learn CI/CD pipelines.',
                    'Explore tools like Docker, Jenkins, and GitHub Actions.'
                ],
                content: `<p><strong>DevOps:</strong> A set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the software development lifecycle and deliver high-quality software continuously.</p>
                <p><strong>CI/CD (Continuous Integration/Continuous Delivery):</strong></p>
                <ul>
                    <li><strong>Continuous Integration:</strong> Developers frequently merge code changes into a shared repository. Automated builds and tests are run to catch issues early.</li>
                    <li><strong>Continuous Delivery:</strong> Automates the deployment of code to staging or production environments after passing tests.</li>
                    <li><strong>Continuous Deployment:</strong> Automatically deploys every change that passes tests to production.</li>
                </ul>
                <p><strong>Key Tools:</strong> Docker (containerization), Jenkins (automation server), GitHub Actions (CI/CD), Kubernetes (container orchestration).</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> DevOps and CI/CD enable rapid and reliable software releases.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'DevOps combines development and operations.',
                    'CI/CD automates build, test, and deployment.',
                    'Tools like Docker and Jenkins are essential for DevOps.'
                ],
                practiceQuestions: [
                    'What is the difference between CI and CD?',
                    'Explain the role of Docker in DevOps.',
                    'What is a CI/CD pipeline?'
                ],
                resources: [
                    { name: 'Wikipedia – DevOps', url: 'https://en.wikipedia.org/wiki/DevOps' },
                    { name: 'GeeksforGeeks – DevOps', url: 'https://www.geeksforgeeks.org/devops-tutorial/' },
                    { name: 'Atlassian – CI/CD Guide', url: 'https://www.atlassian.com/continuous-delivery' }
                ]
            }]
        }, {
            id: 'cs403',
            code: 'CS403',
            name: 'Cybersecurity & Cryptography',
            description: 'Network security, cryptography, ethical hacking, and security policies.',
            topics: [{
                id: 'cs403-t1',
                title: 'Introduction to Cryptography',
                objectives: [
                    'Understand symmetric and asymmetric encryption.',
                    'Learn about hashing and digital signatures.',
                    'Explore cryptographic protocols.'
                ],
                content: `<p><strong>Symmetric Encryption:</strong> Uses the same key for encryption and decryption (e.g., AES, DES, 3DES). Fast and efficient for bulk data. Key distribution is a challenge.</p>
                <p><strong>Asymmetric Encryption:</strong> Uses a public/private key pair (e.g., RSA, ECC, Diffie-Hellman). The public key encrypts, the private key decrypts. Slower but provides authentication and non-repudiation.</p>
                <p><strong>Hashing:</strong> A one-way function that converts data into a fixed-size hash (e.g., SHA-256, MD5). Used for data integrity (checksums) and password storage (salting + hashing).</p>
                <p><strong>Digital Signatures:</strong> Combine hashing and asymmetric encryption to provide authentication, integrity, and non-repudiation.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Cryptography is the foundation of modern security, ensuring confidentiality, integrity, and authenticity.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Symmetric encryption uses one key.',
                    'Asymmetric encryption uses a key pair.',
                    'Hashing is used for data integrity.'
                ],
                practiceQuestions: [
                    'Explain the difference between symmetric and asymmetric encryption.',
                    'What is a digital signature and how does it work?',
                    'How does hashing ensure data integrity?'
                ],
                resources: [
                    { name: 'Wikipedia – Cryptography', url: 'https://en.wikipedia.org/wiki/Cryptography' },
                    { name: 'GeeksforGeeks – Cryptography', url: 'https://www.geeksforgeeks.org/cryptography-and-its-types/' },
                    { name: 'Khan Academy – Cryptography', url: 'https://www.khanacademy.org/computing/computer-science/cryptography' }
                ]
            }, {
                id: 'cs403-t2',
                title: 'Network Security',
                objectives: [
                    'Understand network security principles.',
                    'Learn about firewalls, IDS, and VPNs.',
                    'Explore ethical hacking and penetration testing.'
                ],
                content: `<p><strong>Network Security:</strong> The practice of protecting networks, devices, and data from unauthorized access and attacks.</p>
                <p><strong>Key Technologies:</strong></p>
                <ul>
                    <li><strong>Firewalls:</strong> Filter traffic based on rules. Types: packet filtering, stateful inspection, proxy firewalls.</li>
                    <li><strong>IDS/IPS:</strong> Intrusion Detection Systems (monitor and alert) and Intrusion Prevention Systems (block threats).</li>
                    <li><strong>VPNs:</strong> Virtual Private Networks create encrypted tunnels for secure communication over public networks.</li>
                </ul>
                <p><strong>Ethical Hacking:</strong> Testing systems for vulnerabilities with permission, using the same techniques as malicious hackers. Phases: Reconnaissance, Scanning, Exploitation, Post-exploitation, Reporting.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Network security is a continuous process of identification, protection, detection, and response.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Network security protects against unauthorized access.',
                    'Firewalls, IDS, and VPNs are key security technologies.',
                    'Ethical hacking helps identify vulnerabilities.'
                ],
                practiceQuestions: [
                    'What is the difference between a firewall and an IDS?',
                    'Explain how a VPN works.',
                    'What are the phases of penetration testing?'
                ],
                resources: [
                    { name: 'Wikipedia – Network Security', url: 'https://en.wikipedia.org/wiki/Network_security' },
                    { name: 'GeeksforGeeks – Network Security', url: 'https://www.geeksforgeeks.org/network-security/' },
                    { name: 'OWASP – Security Guidelines', url: 'https://owasp.org/www-project-top-ten/' }
                ]
            }]
        }, {
            id: 'cs404',
            code: 'CS404',
            name: 'Data Science & Big Data Analytics',
            description: 'Data analysis, visualization, big data frameworks, and analytics tools.',
            topics: [{
                id: 'cs404-t1',
                title: 'Data Science Fundamentals',
                objectives: [
                    'Understand the data science lifecycle.',
                    'Learn data preprocessing and exploratory data analysis.',
                    'Apply statistical methods to analyze data.'
                ],
                content: `<p><strong>Data Science:</strong> An interdisciplinary field that uses scientific methods, algorithms, and systems to extract insights from data.</p>
                <p><strong>Data Science Lifecycle:</strong> Problem Definition → Data Collection → Data Preprocessing → Exploratory Data Analysis (EDA) → Modeling → Evaluation → Deployment.</p>
                <p><strong>Data Preprocessing:</strong> Cleaning (handling missing values, outliers), Transformation (scaling, normalization, encoding categorical variables), Feature Engineering (creating new features).</p>
                <p><strong>Exploratory Data Analysis (EDA):</strong> Visualizing and summarizing data using statistics and plots (histograms, scatter plots, box plots, correlation matrices).</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Data science is about turning raw data into actionable insights.</p></div>`,
                codeBlocks: [{ lang: 'python',
                    code: 'import pandas as pd\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\n# Load data\ndf = pd.read_csv("data.csv")\n\n# Summary statistics\nprint(df.describe())\n\n# Check missing values\nprint(df.isnull().sum())\n\n# Visualize distribution\ndf.hist(figsize=(10, 6))\nplt.show()\n\n# Correlation heatmap\nsns.heatmap(df.corr(), annot=True)\nplt.show()'
                }],
                keyTakeaways: [
                    'Data science extracts insights from data.',
                    'Preprocessing is essential for data quality.',
                    'EDA is the first step in data analysis.'
                ],
                practiceQuestions: [
                    'What are the stages of the data science lifecycle?',
                    'What is EDA and why is it important?',
                    'How do you handle missing data in a dataset?'
                ],
                resources: [
                    { name: 'Wikipedia – Data Science', url: 'https://en.wikipedia.org/wiki/Data_science' },
                    { name: 'GeeksforGeeks – Data Science', url: 'https://www.geeksforgeeks.org/data-science/' },
                    { name: 'Kaggle – Learn Data Science', url: 'https://www.kaggle.com/learn' }
                ]
            }, {
                id: 'cs404-t2',
                title: 'Big Data & Analytics',
                objectives: [
                    'Understand big data concepts (volume, velocity, variety).',
                    'Learn Hadoop and Spark frameworks.',
                    'Apply big data analytics to real-world problems.'
                ],
                content: `<p><strong>Big Data:</strong> Extremely large and complex datasets that require specialized tools to process. Characterized by the 3Vs: Volume (large amounts), Velocity (high speed of generation), Variety (different formats: structured, semi-structured, unstructured).</p>
                <p><strong>Hadoop:</strong> A framework for distributed processing of large data sets using the MapReduce model. Components: HDFS (Hadoop Distributed File System) for storage, YARN for resource management.</p>
                <p><strong>Apache Spark:</strong> A fast, in-memory data processing engine for big data analytics. Supports batch processing, real-time streaming, machine learning (MLlib), and graph processing (GraphX).</p>
                <p><strong>Real-World Applications:</strong> Fraud detection, recommendation systems, predictive maintenance, sentiment analysis, healthcare analytics.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Big data analytics enables organizations to make data-driven decisions at scale.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Big data has high volume, velocity, and variety.',
                    'Hadoop enables distributed processing.',
                    'Spark provides fast, in-memory data processing.'
                ],
                practiceQuestions: [
                    'What is MapReduce and how does it work?',
                    'Compare Hadoop and Spark.',
                    'What are some real-world applications of big data analytics?'
                ],
                resources: [
                    { name: 'Wikipedia – Big Data', url: 'https://en.wikipedia.org/wiki/Big_data' },
                    { name: 'Apache Hadoop', url: 'https://hadoop.apache.org/' },
                    { name: 'Apache Spark', url: 'https://spark.apache.org/' }
                ]
            }]
        }, {
            id: 'cs405',
            code: 'CS405',
            name: 'Compiler Design',
            description: 'Lexical analysis, parsing, syntax-directed translation, code generation, and optimization.',
            topics: [{
                id: 'cs405-t1',
                title: 'Lexical Analysis & Parsing',
                objectives: [
                    'Understand lexical analysis and regular expressions.',
                    'Learn parsing techniques (LL, LR).',
                    'Build a simple parser.'
                ],
                content: `<p><strong>Compiler:</strong> A program that translates source code from a high-level programming language to machine code.</p>
                <p><strong>Lexical Analysis (Scanner):</strong> The first phase of a compiler. It converts a stream of characters into a stream of tokens (keywords, identifiers, literals, operators). Uses regular expressions and finite automata.</p>
                <p><strong>Parsing (Syntax Analysis):</strong> The second phase. It analyzes the token stream according to the grammar of the language. Builds a parse tree (or abstract syntax tree).</p>
                <p><strong>Parsing Techniques:</strong></p>
                <ul>
                    <li><strong>LL (Top-Down):</strong> Starts from the start symbol and expands non-terminals. LL(1) uses one lookahead token.</li>
                    <li><strong>LR (Bottom-Up):</strong> Starts from the input tokens and reduces them to the start symbol. LR(1), SLR, LALR are variants.</li>
                </ul>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Compiler design is a core area of computer science that combines theory and practice.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Lexical analysis converts characters to tokens.',
                    'Parsing analyzes the token stream according to grammar.',
                    'LL and LR are common parsing techniques.'
                ],
                practiceQuestions: [
                    'What is the role of a lexer in a compiler?',
                    'Explain the difference between LL and LR parsing.',
                    'What is an abstract syntax tree (AST)?'
                ],
                resources: [
                    { name: 'Wikipedia – Compiler', url: 'https://en.wikipedia.org/wiki/Compiler' },
                    { name: 'GeeksforGeeks – Compiler Design', url: 'https://www.geeksforgeeks.org/compiler-design-tutorials/' },
                    { name: 'Stanford – Compilers Course', url: 'https://web.stanford.edu/class/cs143/' }
                ]
            }, {
                id: 'cs405-t2',
                title: 'Code Generation & Optimization',
                objectives: [
                    'Understand code generation techniques.',
                    'Learn about code optimization.',
                    'Understand the role of the linker and loader.'
                ],
                content: `<p><strong>Code Generation:</strong> The final phase of a compiler. It generates target machine code from the intermediate representation (IR).</p>
                <p><strong>Code Optimization:</strong> Techniques to improve the performance and efficiency of generated code.</p>
                <ul>
                    <li><strong>Machine-Independent Optimization:</strong> Constant folding, dead code elimination, loop unrolling, common subexpression elimination.</li>
                    <li><strong>Machine-Dependent Optimization:</strong> Register allocation, instruction scheduling, peephole optimization.</li>
                </ul>
                <p><strong>Linker and Loader:</strong> The linker combines multiple object files into a single executable. The loader loads the executable into memory for execution.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Code optimization is crucial for producing efficient software.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Code generation produces machine code.',
                    'Optimization improves code performance.',
                    'The linker and loader prepare the code for execution.'
                ],
                practiceQuestions: [
                    'What is the difference between static and dynamic linking?',
                    'Explain the concept of dead code elimination.',
                    'How does a loader work?'
                ],
                resources: [
                    { name: 'Wikipedia – Code Generation', url: 'https://en.wikipedia.org/wiki/Code_generation_(compiler)' },
                    { name: 'GeeksforGeeks – Code Optimization', url: 'https://www.geeksforgeeks.org/code-optimization-in-compiler-design/' },
                    { name: 'TutorialsPoint – Compiler Design', url: 'https://www.tutorialspoint.com/compiler_design/index.htm' }
                ]
            }]
        }, {
            id: 'cs406',
            code: 'CS406',
            name: 'Major Capstone Project',
            description: 'Comprehensive project integrating all CSE disciplines.',
            topics: [{
                id: 'cs406-t1',
                title: 'Project Planning & Execution',
                objectives: [
                    'Plan a software project.',
                    'Apply project management techniques.',
                    'Deliver a working prototype.'
                ],
                content: `<p><strong>Capstone Project:</strong> A comprehensive project that integrates knowledge from multiple CSE disciplines. It is typically the final project before graduation.</p>
                <p><strong>Project Lifecycle:</strong> Initiation (define scope) → Planning (schedule, resources) → Execution (coding, testing) → Monitoring & Control (tracking progress) → Closure (delivery, documentation).</p>
                <p><strong>Agile Project Management:</strong> Scrum (sprints, daily stand-ups, retrospectives) and Kanban (visualizing workflow, limiting WIP).</p>
                <p><strong>Documentation:</strong> SRS (Software Requirements Specification), Design Documents (architecture, UML diagrams), Test Plans (unit, integration, system tests), User Manuals.</p>
                <div class="key-box"><p><strong>💡 Pro Tip:</strong> A well-documented project is a successful project. Documentation ensures maintainability and reduces onboarding time.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Project planning is crucial for success.',
                    'Agile methodologies enable iterative development.',
                    'Documentation is essential for maintainability.'
                ],
                practiceQuestions: [
                    'What are the phases of a project life cycle?',
                    'Explain the Scrum framework.',
                    'What should be included in an SRS?'
                ],
                resources: [
                    { name: 'Wikipedia – Project Management', url: 'https://en.wikipedia.org/wiki/Project_management' },
                    { name: 'GeeksforGeeks – SDLC', url: 'https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/' },
                    { name: 'Scrum Guide', url: 'https://scrumguides.org/' }
                ]
            }]
        }, {
            id: 'cs407',
            code: 'CS407',
            name: 'Industry Internship',
            description: 'Practical industry experience in a professional environment.',
            topics: [{
                id: 'cs407-t1',
                title: 'Internship Preparation & Execution',
                objectives: [
                    'Prepare for an internship interview.',
                    'Understand workplace culture and expectations.',
                    'Deliver a project report.'
                ],
                content: `<p><strong>Internship:</strong> A period of practical work experience in a professional environment.</p>
                <p><strong>Preparation:</strong> Build a strong resume (highlight projects, skills, and achievements), practice coding interviews (data structures, algorithms, system design), research the company (products, culture, mission).</p>
                <p><strong>Execution:</strong> Work on real-world projects, collaborate with professionals, follow coding standards and best practices, document your contributions, seek feedback regularly.</p>
                <p><strong>Internship Report:</strong> Summarize your work, achievements, learning outcomes, and reflections on the experience.</p>
                <div class="key-box"><p><strong>💡 Key Insight:</strong> Internships are a critical bridge between academic learning and professional practice.</p></div>`,
                codeBlocks: [],
                keyTakeaways: [
                    'Internships provide real-world experience.',
                    'Preparation is key to a successful internship.',
                    'Document your work and learn from professionals.'
                ],
                practiceQuestions: [
                    'What should you include in a resume for an internship?',
                    'How would you prepare for a technical interview?',
                    'What are the key takeaways from an internship experience?'
                ],
                resources: [
                    { name: 'GeeksforGeeks – Internship Tips', url: 'https://www.geeksforgeeks.org/internship-tips-and-guide/' },
                    { name: 'LinkedIn – Internship Advice', url: 'https://www.linkedin.com/pulse/top-10-tips-summer-internship-success/' },
                    { name: 'NACE – Internship Standards', url: 'https://www.naceweb.org/' }
                ]
            }]
        }]
    }]
};

// ======================================================================
//  PRACTICAL LABS
// ======================================================================
const PRACTICAL_LABS = [
    { id: 'lab1', name: 'Programming Lab (C, C++, Java)', description: 'Hands-on programming exercises in C, C++, and Java. Covers syntax, control structures, functions, OOP concepts, and basic algorithms.' },
    { id: 'lab2', name: 'Data Structures & Algorithms Lab', description: 'Implementation and analysis of data structures (arrays, linked lists, stacks, queues, trees, graphs) and algorithms (sorting, searching, DP, greedy).' },
    { id: 'lab3', name: 'Database Management Systems Lab', description: 'SQL queries (SELECT, INSERT, UPDATE, DELETE), database design, normalization, transaction management, and PL/SQL procedures.' },
    { id: 'lab4', name: 'UNIX / OS Lab', description: 'Unix commands, shell scripting, file system navigation, process management, and OS concepts (scheduling, memory management simulations).' },
    { id: 'lab5', name: 'Networking Lab', description: 'Network configuration, IP addressing, routing, switching, socket programming, and simulation using Cisco Packet Tracer or Wireshark.' },
    { id: 'lab6', name: 'Android & Mobile Application Lab', description: 'Android app development using Java/Kotlin. Covers UI design, activities, intents, data storage, and API integration.' },
];

const resume = `RAHUL SHARMA
Backend Developer | rahul.sharma.dev@email.com | +91-98765-43210
LinkedIn: linkedin.com/in/rahulsharma-dev | GitHub: github.com/rahulsharma

SUMMARY
Backend developer with 2.5 years of experience building and maintaining 
RESTful APIs and microservices using Node.js and Express. Experienced in 
designing scalable database schemas, implementing authentication systems, 
and optimizing query performance. Comfortable working in agile teams and 
collaborating with frontend and DevOps engineers.

TECHNICAL SKILLS
Languages: JavaScript, TypeScript, basic Python
Backend: Node.js, Express.js, NestJS (basic)
Databases: MongoDB, PostgreSQL, Redis (caching)
Tools: Docker, Git, Postman, Jenkins (CI/CD basics)
Cloud: AWS (EC2, S3, basic Lambda), basic knowledge of Nginx
Other: JWT, OAuth2, WebSockets, REST API design, Microservices basics

WORK EXPERIENCE

Backend Developer — Nimbus Softech Pvt Ltd (Jan 2023 – Present)
- Built and maintained 12+ REST APIs for an e-commerce platform serving 
  ~50,000 monthly active users using Node.js and Express.
- Designed MongoDB schemas and optimized queries, reducing average API 
  response time by 35%.
- Implemented JWT-based authentication and role-based access control 
  (RBAC) for admin and customer portals.
- Integrated third-party payment gateway (Razorpay) and shipping APIs.
- Set up Redis caching layer for frequently accessed product data, 
  cutting database load by ~40%.
- Collaborated with frontend team (React) on API contracts and 
  participated in daily standups and sprint planning.

Junior Backend Developer — CodeCraft Solutions (Jun 2022 – Dec 2022)
- Assisted in developing internal admin dashboard APIs using Express 
  and PostgreSQL.
- Wrote unit tests using Jest, improving code coverage from 40% to 70%.
- Fixed bugs and handled minor feature requests for a client-facing 
  booking system.

PROJECTS
Task Management API (Personal Project)
- Built a full-featured task management REST API with Node.js, Express, 
  MongoDB, and JWT auth. Deployed on Render, documented with Swagger.

Real-time Chat App
- Built a chat application using Node.js, Socket.io, and MongoDB with 
  support for private rooms and typing indicators.

EDUCATION
B.Tech in Computer Science — Gujarat Technological University (2018–2022)

CERTIFICATIONS
- AWS Certified Cloud Practitioner (2023)`

const selfDescription = `I'm a backend developer who genuinely enjoys the "invisible" parts of 
software — the APIs, database design, and system architecture that make 
everything else work smoothly. I like breaking down a messy business 
requirement into a clean, well-structured API contract, and I care a lot 
about writing code that the next developer (or future me) won't hate.

I'm comfortable working independently but I actually prefer collaborating 
closely with frontend developers and product folks early on, since I've 
learned that most bugs and rework come from unclear assumptions made 
upfront. I'm still building depth in system design at scale — things like 
handling millions of requests, distributed systems, and advanced caching 
strategies are areas I'm actively studying right now because my current 
role hasn't given me exposure to systems at that scale yet.

I'd describe myself as someone who asks a lot of "why" questions before 
writing code, gets uncomfortable with undocumented systems, and has a 
habit of over-testing edge cases (my teammates sometimes tease me for it). 
I'm looking for a role where I can grow into more complex backend/system 
design problems, ideally in a team that values code quality and does 
proper code reviews.`

const jobDescription = `Job Title: Backend Developer (Node.js)
Company: FinEdge Technologies
Location: Bengaluru, India (Hybrid)
Experience: 2–4 years

About the Role:
We're looking for a Backend Developer to join our core platform team 
building the infrastructure behind our fintech lending product. You'll 
work on designing and scaling APIs that handle sensitive financial data, 
collaborate closely with our DevOps and frontend teams, and help us move 
toward a microservices architecture.

Responsibilities:
- Design, build, and maintain RESTful and GraphQL APIs using Node.js 
  and TypeScript.
- Work with PostgreSQL and MongoDB to design efficient, normalized 
  database schemas.
- Implement secure authentication and authorization flows (OAuth2, JWT) 
  for financial-grade applications.
- Optimize application performance, including query optimization, 
  caching (Redis), and load testing.
- Write clean, well-tested code (unit and integration tests using Jest 
  or Mocha).
- Collaborate with DevOps to containerize services using Docker and 
  deploy on AWS/Kubernetes.
- Participate in code reviews, architecture discussions, and sprint 
  planning in an agile environment.
- Ensure application security best practices, especially around 
  handling PII and financial data.

Requirements:
- 2-4 years of experience with Node.js and Express or NestJS.
- Strong understanding of RESTful API design principles.
- Experience with both SQL (PostgreSQL) and NoSQL (MongoDB) databases.
- Familiarity with message queues (RabbitMQ/Kafka) is a plus.
- Understanding of microservices architecture and distributed systems.
- Experience with Docker; Kubernetes knowledge is a plus.
- Good understanding of authentication/authorization mechanisms.
- Strong problem-solving skills and ability to write clean, 
  maintainable code.
- Bonus: exposure to fintech, payment systems, or high-security 
  environments.

Nice to Have:
- Experience with CI/CD pipelines (Jenkins/GitHub Actions).
- Basic knowledge of AWS services (EC2, S3, Lambda, RDS).
- Contributions to open-source projects.`

module.exports = {
    resume, selfDescription, jobDescription
}
const { GoogleGenAI } = require("@google/genai")
const { z } = require("zod")
const  puppeteer = require("puppeteer")

const client = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
})

// Hand-written JSON Schema — matches your fields exactly, no extra keys
const interviewReportJsonSchema = {
    type: "object",
    properties: {
        matchScore: {
            type: "integer",
            description: "A score between 0 and 100 indicating how well the candidate's profile matches the job description"
        },
        title: {
            type: "string",
            description: "The title of the job for which the interview report is generated"
        },
        technicalQuestions: {
            type: "array",
            description: "Technical questions that can be asked in the interview along with their intension and how to answer them",
            items: {
                type: "object",
                properties: {
                    question: { type: "string", description: "The technical question that can be asked in the interview" },
                    intension: { type: "string", description: "The intension of the interviewer behind asking this question" },
                    answer: { type: "string", description: "How to answer this question, what points to cover, what approach to take" }
                },
                required: ["question", "intension", "answer"]
            }
        },
        behavioralQuestions: {
            type: "array",
            description: "Behavioral questions that can be asked in the interview along with their intension and how to answer them",
            items: {
                type: "object",
                properties: {
                    question: { type: "string", description: "The behavioral question that can be asked in the interview" },
                    intension: { type: "string", description: "The intension of the interviewer behind asking this question" },
                    answer: { type: "string", description: "How to answer this question, what points to cover, what approach to take" }
                },
                required: ["question", "intension", "answer"]
            }
        },
        skillGaps: {
            type: "array",
            description: "List of skill gaps in the candidate's profile along with their severity",
            items: {
                type: "object",
                properties: {
                    skill: { type: "string", description: "The skill which the candidate is lacking" },
                    severity: { type: "string", enum: ["low", "medium", "high"], description: "The severity of this skill gap" }
                },
                required: ["skill", "severity"]
            }
        },
        preparationPlan: {
            type: "array",
            description: "A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively",
            items: {
                type: "object",
                properties: {
                    day: { type: "integer", description: "The day number in the preparation plan, starting from 1" },
                    focus: { type: "string", description: "The main focus of this day in the preparation plan" },
                    tasks: {
                        type: "array",
                        items: { type: "string" },
                        description: "List of tasks to be done on this day"
                    }
                },
                required: ["day", "focus", "tasks"]
            }
        }
    },
    required: ["matchScore", "title", "technicalQuestions", "behavioralQuestions", "skillGaps", "preparationPlan"]
}

// Zod schema derived from the JSON schema — used only to validate the AI's output
const interviewReportSchema = z.fromJSONSchema(interviewReportJsonSchema)

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {

    const prompt = `Generate an interview report for a candidate with the following details:
                        Resume: ${resume}
                        Self Description: ${selfDescription}
                        Job Description: ${jobDescription}`

    const interaction = await client.interactions.create({
        model: "gemini-3-flash-preview",
        input: prompt,
        response_format: {
            type: "text",
            mime_type: "application/json",
            schema: interviewReportJsonSchema
        }
    })

    const report = interviewReportSchema.parse(JSON.parse(interaction.output_text))
    return report
}

const resumePdfJsonSchema = {
    type: "object",
    properties: {
        html: {
            type: "string",
            description: "The full HTML content of the tailored resume, ready to be converted to PDF using a library like puppeteer"
        }
    },
    required: ["html"]
}

// Zod schema derived from the JSON schema — used only to validate the AI's output
const resumePdfSchema = z.fromJSONSchema(resumePdfJsonSchema)

async function generatePdfFromHtml(htmlContent) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setContent(htmlContent, { waitUntil: "networkidle0" })
    const pdfBuffer = await page.pdf({
        format: "A4",
        margin: {
            top: "20mm",
            bottom: "20mm",
            left: "15mm",
            right: "15mm"
        }
    })
    await browser.close()
    return pdfBuffer
}

async function generateResumePdf({ resume, selfDescription, jobDescription }) {

    const prompt = `Generate a resume for a candidate with the following details:
                        Resume: ${resume}
                        Self Description: ${selfDescription}
                        Job Description: ${jobDescription}
                        The response should be a JSON object with a single field "html" which contains the HTML content of the resume, which can be converted to PDF using a library like puppeteer.
                        The resume should be tailored for the given job description and should highlight the candidate's strengths and relevant experience. The HTML content should be well-formatted and structured, making it easy to read and visually appealing.
                        The content of the resume should not sound like it's generated by AI and should be as close as possible to a real human-written resume.
                        You can highlight the content using some colors or different font styles but the overall design should be simple and professional.
                        The content should be ATS friendly, i.e. it should be easily parsable by ATS systems without losing important information.
                        The resume should not be too lengthy, it should ideally be 1-2 pages long when converted to PDF. Focus on quality rather than quantity and make sure to include all the relevant information that can increase the candidate's chances of getting an interview call for the given job description.`

    const interaction = await client.interactions.create({
        model: "gemini-3-flash-preview",
        input: prompt,
        response_format: {
            type: "text",
            mime_type: "application/json",
            schema: resumePdfJsonSchema
        }
    })

    const parsed = resumePdfSchema.parse(JSON.parse(interaction.output_text))
    const pdfBuffer = await generatePdfFromHtml(parsed.html)
    return pdfBuffer
}

module.exports = {generateInterviewReport, generateResumePdf}
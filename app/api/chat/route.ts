import { NextResponse } from "next/server"
import { xai } from "@ai-sdk/xai"
import { generateText } from "ai"

// Resume data as context for the AI
const resumeContext = `
Yoel Nasi Kazado
nasikazado@wisc.edu | +1(608)-901-9166 | LinkedIn | yoelnk.com | Madison, WI, 53703

EDUCATION
University of Wisconsin-Madison | Madison, WI - May 2025
Bachelor of Science in Data Science; Certificates in Entrepreneurship and Computer Science

Venture Institute, VC Lab | Palo Alto, CA/Online - March 2025
Intensive 9-week program training in venture capital fund management with Decile Hub certification.

EXPERIENCE
Data Analyst at Entrepreneurship Initiative Project | Office of the Chancellor | Madison, WI - October 2024-Present
● Exported, processed, and analyzed data on entrepreneurial activities, leveraging insights to support strategic initiatives in entrepreneurship.
● Designed and implemented databases to track and analyze university-affiliated entrepreneurs and investors, facilitating streamlined access to networking and collaboration opportunities.
● Developed and executed LinkedIn and other scraping processes to gather and aggregate data on entrepreneurs and investors, enhancing the accuracy and comprehensiveness of the university's entrepreneurial network.

Senior Analyst at Starto VC | UW-Madison | Madison, WI - February 2024–Present
● Sourced and evaluated high-potential early-stage startups, focusing on university student-founded ventures.
● Conducted comprehensive due diligence on startup teams, market potential, financials, and scalability to inform investment decisions.
● Collaborated with senior partners to assess potential investments' viability and risk profile, contributing to deal flow and strategy.
● Received formal training from IdeaFund VC on founder and company valuation, financial modeling, and due diligence practices.

Associate at Wisconsin Investment Partners (WIP) Associate Program (WIPAP) - October 2024–Present
● Collaborated with WIP to screen, evaluate, and mentor startups as part of an angel investment program.
● Gained hands-on experience with the angel investment process, including startup evaluation and deal structuring.
● Participated actively in deal screening and evaluation committees, contributing to investment decision-making.
● Built a network by engaging with entrepreneurs, company representatives, and WIP members.
● Mentored high-value startups, supporting their growth and development in dynamic markets.

Business Operations & Sales Intern at Avrupa Mümessillik | Istanbul, TR - July 2023–August 2024
● Implemented an automated Excel Workflow to reduce time spent on accounting and finance operations by 20%.
● Strengthened customer relations by connecting with customers to understand and resolve pain points.
● Engaged in contract negotiations with factories, managing to extend sales of 2 types of products by 3%.
● Formulated transportation agreements and pricing, optimizing route plans/contracts to be 8% cheaper.

Co-Founder/CEO at NFTicx | London, UK - October 2022-September 2023
● Directed the full-cycle development of a Minimum Viable Product (MVP), from concept to market launch, ensuring strategic alignment with user needs and market trends.
● Developed and implemented innovative marketing strategies to drive early user adoption and successfully monetize the product.
● Negotiated a profitable exit by effectively positioning the venture for acquisition.

PROJECTS
Medical Bill Negotiation Assistant - A web application that helps users analyze their medical bills and provides negotiation recommendations.
YJN Calculator - A comprehensive collection of calculators for students, educators, and professionals.
Pomelo Educational Robot - An educational robot designed for primary school classrooms to teach coding through physical code-blocks.
VC Investments Visualization - An interactive data visualization platform analyzing venture capital investments.
Blackjack Strategy Assistant - A web application that helps players make optimal decisions in blackjack games.

AWARDS
● "Advanced Track: Alumni Award" in Transcend UW (2023) for outstanding entrepreneurial performance.
● ACM/IEEE Intl. Conference on Human-Robot Interaction 2019: Delegates' Choice Award
● European Product Design Awards 2019 Honorable Mention

LEADERSHIP & INVOLVEMENT
Gener8tor CS Nest & Ramp100 Member | UW-Madison | Madison, WI - February 2023–Sep 2024
● Collaborated with fellow entrepreneurs and mentors during my Entrepreneurship Process
● I received mentorship from founders and professors on the whole entrepreneurial process, including fundraising.

Event Manager/Mentor at Hisar IdeaLab | Hisar Schools | Turkey/Greece - January 2018–June 2022
● Led educational initiatives and managed logistics for large-scale events, demonstrating organizational skills.

SKILLS & INTERESTS
Technical: Data Analysis, Python, Java, R, SQL, MongoDB, ED Technology, Problem-Solving, Microsoft Office
Soft Skills: Project Management, Negotiation, Event Organization/Management, Client Relationship Management, Communication and Presentation Skills, Change Management, Time Management and Multitasking
Interests: Tennis, Snowboarding, Running, Chess, LLM fine-tuning, psychology, painting, fishing
`

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    // System prompt to constrain the AI to only talk about Yoel
    const systemPrompt = `
      You are an AI assistant for Yoel Nasi Kazado's portfolio website.
      Your name is YoelBot.
      ONLY answer questions related to Yoel Nasi Kazado based on the provided resume information.
      If asked about anything not related to Yoel or his resume, politely redirect the conversation back to Yoel's background, skills, or experiences.
      Be professional, concise, and helpful.
      Here is Yoel's resume information that you can reference:
      ${resumeContext}
    `

    // Generate response using xAI with just the current message
    const { text } = await generateText({
      model: xai("grok-3-beta"),
      prompt: message, // Just use the current message
      system: systemPrompt,
      maxTokens: 500,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Error in chat API:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to process your request"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}

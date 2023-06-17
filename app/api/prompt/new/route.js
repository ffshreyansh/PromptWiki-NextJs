import Prompt from "@models/prompts";
const { connectToDB } = require("@utils/database");

export const POST = async (request) => {
    const { userId, prompt, tags } = await request.json();



    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tags
        })

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 })
    }
}
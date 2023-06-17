import Prompt from "@models/prompts";
import { connectToDB } from "@utils/database";

export const GET = async (request, {params}) => {
    try {
        await connectToDB()

        const prompt = await Prompt.find({ creator: params.id}).populate('creator')

        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 
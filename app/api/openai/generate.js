const { Configuration, OpenAIApi, Configuration } = require("openai");


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: { message: "Error in API key" }
        });

}
return;



}

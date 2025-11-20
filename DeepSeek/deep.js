async function fetchChatResponse() {
    const userInput = document.getElementById("userInput").value;
    const responseDiv = document.getElementById("response");

    if (!userInput.trim()) {
        responseDiv.innerHTML = "Please enter a question.";
        return;
    }

    responseDiv.innerHTML = "Thinking...";

    const apiUrl = "https://openrouter.ai/api/v1/chat/completions";
    const apiKey = "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"; 
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-r1-distill-llama-70b:free",
                messages: [{ role: "user", content: userInput }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        responseDiv.innerHTML = data.choices[0]?.message?.content || "No response from AI.";
    } catch (error) {
        console.error("Error:", error);
        responseDiv.innerHTML = "Error fetching response.";
    }
}

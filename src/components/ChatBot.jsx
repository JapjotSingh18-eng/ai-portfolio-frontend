import React, { useState, useEffect, useRef } from "react";

// Ensure Vite reads the base URL correctly
const API_URL = import.meta.env.VITE_API_URL || "https://ai-portfolio-backend-11.onrender.com";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: userMessage.content }),
  });

  if (!response.ok) {
    throw new Error(`Server returned status ${response.status}`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  // Create an empty assistant message first
  setMessages((prev) => [
    ...prev,
    { role: "assistant", content: "" },
  ]);

  let fullResponse = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    const chunk = decoder.decode(value, { stream: true });

    fullResponse += chunk;

    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = {
        role: "assistant",
        content: fullResponse,
      };
      return updated;
    });
  }
} catch (error) {
    console.error(error);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "Unable to connect to the AI server.",
      },
    ]);
  } finally {
    setLoading(false);
  }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-950 text-white">

    {/* Header */}
    <div className="bg-gradient-to-r from-blue-700 to-cyan-500 p-4 shadow-lg">
      <h1 className="text-2xl font-bold">🤖 Japjot AI Assistant</h1>
      <p className="text-sm opacity-80">AI Portfolio Assistant</p>
    </div>

    {/* Messages */}
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 && (
        <div className="bg-slate-800 p-4 rounded-xl w-fit">
          Hi 👋 I am Japjot's AI Portfolio Assistant.<br />
          Ask me about my projects, skills, education or AI experience.
        </div>
      )}

      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[70%] p-3 rounded-xl ${
              msg.role === "user"
                ? "bg-blue-600"
                : "bg-slate-800"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}

      {loading && (
        <div className="bg-slate-800 p-3 rounded-xl w-fit">
          Thinking...
        </div>
      )}
    </div>

    {/* Input */}
    <form
      onSubmit={sendMessage}
      className="p-4 border-t border-slate-700 flex gap-2"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about my portfolio..."
        className="flex-1 bg-slate-800 p-3 rounded-xl outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl"
      >
        Send
      </button>
    </form>
  </div>

  );
}
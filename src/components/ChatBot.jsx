import React, { useState, useEffect, useRef } from "react";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://ai-portfolio-backend-12.onrender.com";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.response ||
            data.reply ||
            data.message ||
            "No response received.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ Unable to connect to the AI server. Please try again.",
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
        <h1 className="text-2xl font-bold">
          🤖 Japjot AI Assistant
        </h1>
        <p className="text-sm opacity-80">
          AI Portfolio Assistant
        </p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">

        {messages.length === 0 && (
          <div className="bg-slate-800 rounded-xl p-4 max-w-lg">
            <h2 className="font-semibold text-lg mb-2">
              👋 Welcome!
            </h2>

            <p>
              I'm Japjot's AI Portfolio Assistant.
            </p>

            <p className="mt-2">
              Ask me about:
            </p>

            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Projects</li>
              <li>Skills</li>
              <li>Education</li>
              <li>Experience</li>
              <li>Resume</li>
              <li>Career Goals</li>
            </ul>
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 whitespace-pre-wrap ${
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
          <div className="flex justify-start">
            <div className="bg-slate-800 rounded-2xl px-4 py-3">
              Thinking...
            </div>
          </div>
        )}

        <div ref={bottomRef}></div>

      </div>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="border-t border-slate-700 p-4 flex gap-3"
      >
        <input
          type="text"
          value={input}
          placeholder="Ask about my portfolio..."
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded-xl bg-slate-800 p-3 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl disabled:opacity-50"
        >
          {loading ? "..." : "Send"}
        </button>
      </form>

    </div>
  );
}
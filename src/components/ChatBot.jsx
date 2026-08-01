import React, { useState } from 'react';

// Ensure Vite reads the base URL correctly
const API_URL = import.meta.env.VITE_API_URL || "https://ai-portfolio-backend-8.onrender.com";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // EXACT ALIGNMENT: Appends /chat to the base domain, sends a POST request with JSON headers
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

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error("Connection Error:", error);
      setMessages((prev) => [...prev, { role: 'assistant', content: "Unable to connect to the AI server. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Your existing Chat UI JSX elements go here...
    <div>Chat UI Wrapper</div>
  );
}
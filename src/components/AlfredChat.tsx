import React, { useState, useEffect, useRef } from "react";
import '../styles/AlfredChat.css';
import ReactMarkdown from "react-markdown";
import alfredLogo from "../assets/alfred-logo.png";
import { API_URL } from "../utils/constants";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AlfredChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I am Alfred, your helpful AI butler. I know everything about Loc Le. How may I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    try {
      const response = await fetch(`${API_URL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();
      const alfredReply: Message = {
        role: "assistant",
        content: data.reply || "Sorry, I don't have an answer for that.",
      };
      setMessages((prev) => [...prev, alfredReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: err instanceof Error ? err.message : "An error occurred." },
      ]);
    }
  };

  return (
    <div className="alfred-chat">
      {isOpen ? (
        <div className="chat-window">
          <button className="close-btn" onClick={toggleChat}>
            <div className="chat-header">
              <span>Alfred</span>
            </div>
          </button>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${msg.role === "user" ? "user" : "assistant"}`}
              >
                {msg.role === "assistant" ? (
                  <div className="assistant-message">
                    <img src={alfredLogo} alt="Alfred Logo" className="alfred-logo" />
                    <div className="assistant-text">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                ) : (
                  <div className="user-message">
                    {msg.content}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              placeholder="Ask Alfred..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button className="send-btn" onClick={sendMessage}>Send</button>
          </div>
        </div>
      ) : (
        <button className="chat-toggle" onClick={toggleChat}>
          💬 Chat with Alfred
        </button>
      )}
    </div>
  );
};

export default AlfredChat;
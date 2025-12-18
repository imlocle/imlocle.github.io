import React, { useState, useEffect, useRef } from "react";
import "../styles/AlfredChat.css";
import ReactMarkdown from "react-markdown";
import alfredLogo from "../assets/alfred-logo.png";
import sanitizeHtml from "sanitize-html";
import { VITE_API_URL } from "../config";
import { ALFRED_GREETINGS } from "../utils/constants";

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
        ALFRED_GREETINGS[Math.floor(Math.random() * ALFRED_GREETINGS.length)],
    },
  ]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Lock body scroll and focus input when opening
  useEffect(() => {
    if (isOpen) {
      // prevent background from scrolling
      document.body.style.overflow = "hidden";
      // focus input after the animation/frame
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.body.style.overflow = "";
    }
    // cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleChat = () => setIsOpen(prev => !prev);

  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(`${VITE_API_URL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();
      const alfredReply: Message = {
        role: "assistant",
        content:
          data.reply || "I apologize, but I don't have an answer for that.",
      };
      setMessages(prev => [...prev, alfredReply]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content:
            err instanceof Error
              ? err.message
              : "My apologies, I am currently unavailable. Please come back soon.",
        },
      ]);
    } finally {
      await new Promise(r => setTimeout(r, 500));
      setIsLoading(false);
    }
  };

  return (
    <div className="alfred-chat" aria-live="polite">
      {/* Floating button */}
      {!isOpen && (
        <button
          className="chat-toggle"
          onClick={toggleChat}
          aria-label="Open chat with Alfred"
        >
          💬 Chat with Alfred
        </button>
      )}

      {/* Overlay + Chat when open */}
      {isOpen && (
        <>
          {/* overlay sits below the chat window but above everything else */}
          <div
            className="chat-overlay"
            onClick={toggleChat}
            aria-hidden="true"
          />
          <div
            className="chatbot-container slide-up"
            role="dialog"
            aria-modal="true"
            aria-label="Alfred chat window"
          >
            <div className="chat-window">
              <div className="chat-header">
                <div className="chat-header-left">
                  <span className="chat-title">Alfred</span>
                  <span className="chat-subtitle">
                    AI assistant • <a href="/#about">Built by Loc Le</a>
                  </span>
                </div>

                <button
                  className="close-btn"
                  onClick={toggleChat}
                  aria-label="Close chat"
                >
                  ✕
                </button>
              </div>

              <div className="chat-messages">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`chat-message ${msg.role === "user" ? "user" : "assistant"}`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="assistant-message">
                        <img
                          src={alfredLogo}
                          alt="Alfred Logo"
                          className="alfred-logo"
                        />
                        <div className="assistant-text">
                          <ReactMarkdown>
                            {sanitizeHtml(msg.content, {
                              allowedTags: [
                                "p",
                                "strong",
                                "em",
                                "a",
                                "ul",
                                "ol",
                                "li",
                                "code",
                                "pre",
                              ],
                              allowedAttributes: {
                                a: ["href", "target", "rel"],
                              },
                            })}
                          </ReactMarkdown>
                        </div>
                      </div>
                    ) : (
                      <div className="user-message">{msg.content}</div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="chat-message assistant">
                    <div className="assistant-message">
                      <img
                        src={alfredLogo}
                        alt="Alfred Logo"
                        className="alfred-logo"
                      />
                      <div className="assistant-text">
                        <div className="loading-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="chat-input">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  placeholder="Ask Alfred..."
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && sendMessage()}
                  aria-label="Ask Alfred a question"
                />
                <button
                  className="send-btn"
                  onClick={sendMessage}
                  aria-label="Send message"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AlfredChat;

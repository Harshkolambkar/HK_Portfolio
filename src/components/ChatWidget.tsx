import React, { useState, useRef, useEffect } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import "../assets/styles/ChatWidget.scss";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface HistoryItem {
  role: string;
  parts: string;
}

const WELCOME: Message = {
  role: "assistant",
  content: "Hi there! I'm Harsh's portfolio assistant. Ask me anything about his skills, experience, or projects!",
};

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [geminiHistory, setGeminiHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: geminiHistory }),
      });

      const data = await res.json();
      const reply: string = data.response;

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setGeminiHistory((prev) => [
        ...prev,
        { role: "user", parts: text },
        { role: "model", parts: reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble right now. Please try again in a moment!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-widget">
      <div className={`chat-window ${isOpen ? "open" : "closed"}`}>
        <div className="chat-header">
          <div className="header-info">
            <SmartToyIcon fontSize="small" />
            <div>
              <h3>Harsh's Assistant</h3>
              <p>Ask me anything about Harsh</p>
            </div>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <CloseIcon fontSize="small" />
          </button>
        </div>

        <div className="messages-area">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.role}`}>
              {msg.role === "assistant" && (
                <div className="bot-avatar">
                  <SmartToyIcon />
                </div>
              )}
              <div className="bubble">{msg.content}</div>
            </div>
          ))}

          {isLoading && (
            <div className="typing-indicator">
              <div className="bot-avatar">
                <SmartToyIcon />
              </div>
              <div className="bubble">
                <span /><span /><span />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Ask about Harsh..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button
            className="send-btn"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
          >
            <SendIcon fontSize="small" />
          </button>
        </div>
      </div>

      <button className="chat-toggle-btn" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
}

export default ChatWidget;

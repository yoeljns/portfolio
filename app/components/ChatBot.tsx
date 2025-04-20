"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send, Loader2, Bot } from "lucide-react"

// Add this at the top of the file, after the imports
declare global {
  interface Window {
    openYoelBot?: boolean
  }
}

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm YoelBot. Ask me anything about Yoel Nasi Kazado's background, skills, or experiences!",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Show tooltip after a delay when the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 2000)

    // Hide tooltip after some time
    const hideTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  // Add this near your other useEffect hooks
  useEffect(() => {
    // Function to handle the global event
    const handleOpenYoelBot = () => {
      if (window.openYoelBot) {
        setIsOpen(true)
        setShowTooltip(false)
        window.openYoelBot = false
      }
    }

    // Listen for the custom event
    window.addEventListener("openYoelBot", handleOpenYoelBot)

    // Also check once on mount in case the variable was set before this component mounted
    if (window.openYoelBot) {
      setIsOpen(true)
      setShowTooltip(false)
      window.openYoelBot = false
    }

    return () => {
      window.removeEventListener("openYoelBot", handleOpenYoelBot)
    }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [messages, isOpen])

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
    } catch (error) {
      console.error("Error sending message:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat button with pulsing animation */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && !isOpen && (
          <div className="absolute bottom-full right-0 mb-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-xs animate-fade-in border border-primary">
            <div className="flex items-start gap-2">
              <Bot className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium">Hi there! I'm YoelBot 👋</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Ask me anything about Yoel's experience, skills, or background!
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white dark:bg-gray-800 border-r border-b border-primary"></div>
          </div>
        )}

        {/* Main button with pulse effect */}
        <Button
          onClick={() => {
            setIsOpen(true)
            setShowTooltip(false)
          }}
          className="rounded-full w-16 h-16 shadow-lg flex items-center justify-center bg-primary hover:bg-primary/90 relative chat-bot-button"
          size="icon"
        >
          {/* Pulse animation */}
          <span className="absolute w-full h-full rounded-full animate-ping bg-primary/30 opacity-75"></span>

          {/* Bot icon */}
          <Bot className="h-8 w-8" />
        </Button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] bg-background border border-primary rounded-lg shadow-xl flex flex-col z-50">
          {/* Header */}
          <div className="p-3 border-b flex justify-between items-center bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-medium">YoelBot - Ask me anything!</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                {message.role === "assistant" && (
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center mr-2 flex-shrink-0">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center mr-2 flex-shrink-0">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t">
            <div className="flex space-x-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Yoel..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                disabled={!input.trim() || isLoading}
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-center mt-2 gap-1">
              <Bot className="h-3 w-3 text-primary" />
              <p className="text-xs text-muted-foreground text-center">
                YoelBot knows all about Yoel's experience and skills
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

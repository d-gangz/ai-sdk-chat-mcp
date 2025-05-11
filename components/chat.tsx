"use client";

import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 3,
  });
  return (
    <div className="flex flex-col w-full h-full max-w-md mx-auto relative">
      {/* Messages container with padding to ensure space for the input field */}
      <div className="flex-1 overflow-y-auto pb-20 pt-6">
        {messages.map((message) => (
          <div key={message.id} className="whitespace-pre-wrap mb-4">
            <div className="font-semibold">
              {message.role === "user" ? "User: " : "AI: "}
            </div>
            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text":
                  return <div key={`${message.id}-${i}`}>{part.text}</div>;
                case "tool-invocation":
                  return (
                    <pre
                      key={`${message.id}-${i}`}
                      className="overflow-x-auto text-sm bg-zinc-100 dark:bg-zinc-800 p-2 rounded mt-1"
                    >
                      {JSON.stringify(part.toolInvocation, null, 2)}
                    </pre>
                  );
              }
            })}
          </div>
        ))}
      </div>

      {/* Fixed input at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-zinc-950">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-2 border border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 rounded shadow-md"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}

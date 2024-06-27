import React from "react";

interface ChatInputProps {
  value: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({ value }) => {
  const [textAreaValue, setTextAreaValue] = React.useState(value);
  const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <textarea
      value={textAreaValue}
      onChange={onTextAreaChange}
      className="border rounded p-2"
    />
  );
};

import React from "react";

interface ChatInputProps {
  value: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({ value }) => {
  const [textAreaValue, setTextAreaValue] = React.useState(value);
  const [imageBlobs, setImageBlobs] = React.useState<string[]>([]);
  const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const handlePaste = async (
    event: React.ClipboardEvent<HTMLTextAreaElement>
  ) => {
    if (!event.clipboardData) {
      return;
    }

    const items = event.clipboardData.items;
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        const file = item.getAsFile();
        if (!file) {
          continue;
        }

        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target && e.target.result) {
            const blob = e.target.result.toString();
            if (blob) {
              setImageBlobs((prev) => [...prev, blob]);
            }
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div>
      {imageBlobs.length > 0 && (
        <div className="flex space-x-2">
          {imageBlobs.map((blob, index) => (
            <img key={index} src={blob} className="w-12 h-12" />
          ))}
        </div>
      )}
      <textarea
        value={textAreaValue}
        onChange={onTextAreaChange}
        onPaste={handlePaste}
        className="border rounded p-2"
      />
    </div>
  );
};

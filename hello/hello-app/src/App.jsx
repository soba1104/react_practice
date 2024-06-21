import { ColorMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { TailwindCss } from "./components/TailwindCss";
import { useState, useEffect } from "react";

export const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert("hoge");
  }, [num]);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Hello, world!</h1>
      <CssModules />
      <TailwindCss />
      <ColorMessage color="blue">お元気でしょうか？？？</ColorMessage>
      <ColorMessage color="pink">お元気ですよね？？？</ColorMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};

"use client";
import React, { useState } from "react";

import { CopyBlock, dracula } from "react-code-blocks";
import { text } from "stream/consumers";
// import "./styles.css";

interface Props {
  texto: string;
}

const Code = ({ texto }: Props) => {
  // const texto = `class HelloMessage extends React.Component {
  //       handlePress = () => {
  //         alert('Hello')
  //       }
  //       render() {
  //         return (
  //           <div>
  //             <p>Hello {this.props.name}</p>
  //             <button onClick={this.handlePress}>Say Hello</button>
  //           </div>
  //         );
  //       }
  //     }

  //     ReactDOM.render(
  //       <HelloMessage name="Taylor" />,
  //       mountNode
  //     );`;
  const [language, changeLanguage] = useState("jsx");
  const [languageDemo, changeDemo] = useState("");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  let cadena = texto[0];
  console.log(cadena);
  return (
    <div className="container mx-auto p-4">
      <div className="demo">
        <CopyBlock
          language={language}
          text={cadena}
          showLineNumbers={lineNumbers}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <br />
      </div>
    </div>
  );
};

export default Code;

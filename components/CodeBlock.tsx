"use client";
import { useState } from "react";

import {
  CheckIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";

import { Highlight, themes } from "prism-react-renderer";

import copyToClipboard from "@/lib/copyToClipboard";
import { Button } from "./Button";

const CodeBlock = ({ data }: any) => {
  const [isCopied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1100);
  };

  const code = data.code;
  const filename = data.filename;
  const language = data.language;
  const highlightedLines = data.highlightedLines;

  const checkLine = (index: number) => {
    if (highlightedLines !== undefined) {
      if (highlightedLines.includes(index)) {
        return true;
      } else {
        return false;
      }
    } else return null;
  };

  return (
    <div className="border border-gray-800  shadow-lg bg-gray-700  text-white  px-3 pb-3 pt-1 rounded-xl my-6 h-full scrollbar-hide lg:w-4/5 mx-auto w-full">
      <div className="flex justify-between items-center w-full">
        <div></div>
        <div className=" items-center">
          {filename ? <p className="my-3">{filename}</p> : null}
        </div>

        <Button
          variant={"outline"}
          onClick={async () => {
            await copyToClipboard(code);
            copy();
          }}
        >
          {isCopied ? (
            <CheckIcon width={20} height={20} className=" text-green-500" />
          ) : (
            <ClipboardDocumentListIcon width={20} height={20} />
          )}
        </Button>
      </div>
      <div className="bg-accent-solid-white dark:bg-accent-5/50 rounded-lg overflow-y-scroll scrollbar-hide w-full">
        {/* <div className='flex w-full pr-8 justify-end absolute'>
            
            </div>  */}
        <Highlight
          //   {...defaultProps}
          theme={themes.dracula}
          code={code}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              style={{
                ...style,
                marginTop: 0,
                marginBottom: 0,
                overflowX: "scroll",
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span>{`${i + 1}  `}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeBlock;

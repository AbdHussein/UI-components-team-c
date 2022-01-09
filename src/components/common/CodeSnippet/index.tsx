import React, { useState } from "react";
import { Container, CodeWrapper, Code } from "./CodeSnippet.styled";
import SnippetsActions from "./SnippetsActions";

interface ICodeSnippet {
  simple_code: string;
  full_code: string;
}

const Index = ({ full_code, simple_code }: ICodeSnippet) => {
  const [showFullCode, setShowFullCode] = useState<boolean>(false);

  return (
    <Container>
      <SnippetsActions
        showFullCode={showFullCode}
        setShowFullCode={setShowFullCode}
      />
      <CodeWrapper>
        {showFullCode ? <Code>{full_code}</Code> : <Code>{simple_code}</Code>}
      </CodeWrapper>
    </Container>
  );
};

export default Index;

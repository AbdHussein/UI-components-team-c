import React from 'react'
import CodeSnippet from '../../../common/CodeSnippet'

export default function ColorCodeSnippet() {
    return (
        <CodeSnippet
        full_code={`
          import ReactDOM from react-dom';
          const SkeletonDemo = () => (
            <Skeleton  bgColor='black'
            variant="rectangular"
            width={210}
            height={118} />
         
          );
            
          ReactDOM.render(
            <SkeletonDemo />,
            document.getElementById("root")
          );
        `}
        simple_code={`
        <Skeleton 
         bgColor='black'
         variant="rectangular"
          width={210}
         height={118} />
        
        `}
      />
    )
}

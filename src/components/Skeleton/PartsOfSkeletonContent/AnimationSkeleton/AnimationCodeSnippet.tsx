import React from 'react'
import CodeSnippet from '../../../common/CodeSnippet'

export default function AnimationCodeSnippet() {
    return (
        <CodeSnippet
        full_code={`

          import  Avatar  from "./Avatar";
          import ReactDOM from react-dom';
          
          const SkeletonDemo = () => (
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          );
            
          ReactDOM.render(
            <SkeletonDemo />,
            document.getElementById("root")
          );
        `}
        simple_code={`
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        `}
      />
    )
}

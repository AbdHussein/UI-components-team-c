import React from 'react'
import CodeSnippet from '../../../common/CodeSnippet'

export default function VariantsCodeSnippet() {
    return (
        <CodeSnippet
        full_code={`
        import ReactDOM from react-dom';
        const SkeletonDemo = () => (

          <ComponentOverview style={{ background:'red'}}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
          </ComponentOverview>

          );
          
          ReactDOM.render(
            <SkeletonDemo />,
            document.getElementById("root")
            );
            `}
        simple_code={`
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
        
        `}
      />
    )
}

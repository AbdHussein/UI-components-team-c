import React from 'react'
import CodeSnippet from '../../../common/CodeSnippet'

export default function UsageCodeSnippet() {
    return (
        <CodeSnippet
        full_code={`
        {
          item ? (
            <img
              style={{
                width: 210,
                height: 118,
              }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          );
        }
            `}
        simple_code={`
        {
          item ? (
            <img
              style={{
                width: 210,
                height: 118,
              }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          );
        }
        `}
      />
    )
}

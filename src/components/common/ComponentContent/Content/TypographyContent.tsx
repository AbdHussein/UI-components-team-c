import React from "react";
import Typography from "../../../Typography";
import CodeSnippet from "../../CodeSnippet";

const TypographyContent = () => {
  return (
    <div>
      <Typography variant="h1">Typography</Typography>
      <Typography variant="body1" gutterBottom>
        Use typography to present your design and content as clearly and
        efficiently as possible.
      </Typography>
      <Typography variant="h2">Component</Typography>
      <Typography variant="body1" gutterBottom>
        The Typography component makes it easy to apply a default set of font
        weights and sizes in your application.
      </Typography>

      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>

      <CodeSnippet
        full_code={`
        import Typography from './Typography';
  
        
        export default function Types() {
          return (
              <Typography variant="h1" component="div" gutterBottom>
                h1. Heading
              </Typography>
              <Typography variant="h2" gutterBottom>
                h2. Heading
              </Typography>
              <Typography variant="h3" gutterBottom >
                h3. Heading
              </Typography>
              <Typography variant="h4" gutterBottom >
                h4. Heading
              </Typography>
              <Typography variant="h5" gutterBottom >
                h5. Heading
              </Typography>
              <Typography variant="h6" gutterBottom>
                h6. Heading
              </Typography>
              <Typography variant="subtitle1" gutterBottom >
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
              <Typography variant="subtitle2" gutterBottom >
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
              <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
              </Typography>
              <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
              </Typography>
        
  
          );
        }
            `}
        simple_code={`
              <Typography variant="h1" component="div" gutterBottom>
                h1. Heading
              </Typography>
              <Typography variant="h2" gutterBottom>
                h2. Heading
              </Typography>
              <Typography variant="h3" gutterBottom >
                h3. Heading
              </Typography>
              <Typography variant="h4" gutterBottom >
                h4. Heading
              </Typography>
        `}
      />
    </div>
  );
};

export default TypographyContent;

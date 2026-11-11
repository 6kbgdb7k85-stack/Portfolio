import { Stack, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <>
      <Typography variant="h3" sx={{ textAlign: "center", mb:"1rem" }}>
        About
      </Typography>
      <Stack spacing={2} sx={{ textIndent: "2rem" }}>
        <Typography variant="body1" component="p">
          Before I could talk, I learned how to make a computer respond to my
          command. It was just emptying the trash, but to an almost 2 year-old,
          it was pure magic! A few years later, another marvel of technology
          captivated me - the "Back to the Future" DeLorean time machine.
        </Typography>
        <Typography variant="body1" component="p">
          Through the years as I learned more and more about coding (as well as
          most of the dialogue to "Back to the Future"), I discovered where my
          passions intersected. Writing code creates a road map for where you
          are going, just like the DeLorean time circuits.
        </Typography>
        <Typography variant="body1" component="p">
          The practical side of me put the DeLorean dream on hold as I threw
          myself whole-heartedly into programming. The life I dreamed of -
          making computers respond to my command - has come to fruition. I have
          two degrees in software development and a decade of broad-based coding
          experience. And yes, there is a DeLorean in my garage.
        </Typography>
        <Typography variant="body1" component="p">
          Today, I’m a full-stack software engineer looking for a new
          challenge... while still holding out hope for a hover conversion.
        </Typography>
      </Stack>
    </>
  );
}

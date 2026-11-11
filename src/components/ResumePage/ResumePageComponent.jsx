import { Download } from "@mui/icons-material";
import { IconButton, Link, Stack, Toolbar, Typography } from "@mui/material";
import ResumeHeaderComponent from "./ResumeHeaderComponent";
import downloadFile from "../../common/utils/downloadFile";
import { EMAIL, RESUME_NAME, RESUME_PATH } from "../../common/constants";

export default function ResumePageComponent() {
  return (
    <>
      <Toolbar>
        <Typography variant="h3" align="center" sx={{flexGrow:1}}>
          NATHAN A. BAGGS
        </Typography>
        <IconButton
          color="inherit"
          sx={{ ml: "auto" }}
          onClick={() => downloadFile(RESUME_PATH, RESUME_NAME)}
        >
          <Download />
        </IconButton>
      </Toolbar>
      <Typography variant="h5" align="center" color="secondary">
        SENIOR SOFTWARE ENGINEER | FULL-STACK DEVELOPMENT
      </Typography>
      <Typography variant="body1" align="center">
        (804) 687-5911 | <Link href={`mailto: ${EMAIL}`}>{EMAIL}</Link> |
        Charlotte, NC 28214 |{" "}
        <Link href="https://www.linkedin.com/in/nathanbaggs/" target="_blank">
          linkedin.com/in/nathanbaggs
        </Link>
      </Typography>
      <ResumeHeaderComponent title={"PROFESSIONAL SUMMARY"} />
      <Typography variant="body1">
        Senior Software Engineer with a decade of experience in enterprise
        technology and financial-services environments, including internal web
        platforms, front-end development, functional testing, and application
        support. Experience reviewing technology solutions, developing and
        debugging web applications, and automating functional tests with AccelQ.
        Full-stack development background spanning JavaScript, TypeScript,
        Python, SQL, React, Angular, and Flask.
      </Typography>
      <ResumeHeaderComponent title={"TECHNICAL SKILLS"} />
      <Typography variant="body1">
        <strong>Languages:</strong> JavaScript, TypeScript, Python, SQL
      </Typography>
      <Typography variant="body1">
        <strong>Frontend:</strong> React.js, Angular, HTML5, CSS3, Material UI
      </Typography>
      <Typography variant="body1">
        <strong>Backend & APIs:</strong> Flask, RESTful APIs, databases, Ruby on
        Rails
      </Typography>
      <Typography variant="body1">
        <strong>Tools & Practices:</strong> Git, GitHub, Bootstrap, AccelQ
        functional test automation, WCAG
      </Typography>
      <ResumeHeaderComponent title={"EXPERIENCE"} />
      <Typography variant="body1">
        <strong>Software Engineer Senior Analyst</strong> | Wells Fargo
      </Typography>
      <Typography variant="body1">Charlotte, NC | 2019–2026</Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Developed, maintained, and supported internal web-based platforms
            that support loan-approval workflows and contribute to process
            efficiency, security, accountability, and risk assessment.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Reviewed complex enterprise technology solutions against tactical
            and strategic business objectives.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Designed, coded, tested, debugged, and documented front-end projects
            in an enterprise technology environment.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Automated functional testing using AccelQ to support software
            quality and testing workflows.
          </Typography>
        </li>
      </ul>
      <Typography variant="body1">
        <strong>Technology Associate</strong> | Synechron
      </Typography>
      <Typography variant="body1">Charlotte, NC | 2017–2019</Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Worked with company consultants and client employees to support a
            financial-services client.
          </Typography>
        </li>
      </ul>
      <Typography variant="body1">
        <strong>Technology Advisor</strong> | Clergy Image
      </Typography>
      <Typography variant="body1">Charlotte, NC | 2016–2018</Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Worked with the CEO of a clothing-industry startup on a web-based
            platform for customer ordering, manufacturing, transportation, and
            logistics.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Supported requirements for an ordering platform handling thousands
            of product variations.
          </Typography>
        </li>
      </ul>
      <ResumeHeaderComponent title={"PROJECTS"} />
      <Typography variant="body1">
        <strong>QuickWeather</strong> | Weather application
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            City-based weather app in React featuring current weather conditions
            and a five-day forecast using OpenMeteo API
          </Typography>
        </li>
        <li style={{ listStyle: "none" }}>
          <Typography variant="body1">
            <Link href="https://quickweather-t6eq.onrender.com" target="_blank">
              Live demo
            </Link>{" "}
            |{" "}
            <Link
              href="https://github.com/6kbgdb7k85-stack/QuickWeather"
              target="_blank"
            >
              Github
            </Link>
          </Typography>
        </li>
      </ul>
      <Typography variant="body1">
        <strong>DIY Tracker</strong> | DIY project management platform
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            A platform for managing DIY projects. Uses React frontend and Flask
            backend.
          </Typography>
        </li>
        <li style={{ listStyle: "none" }}>
          <Typography variant="body1">
            <Link href="https://diy-tracker-6llk.onrender.com" target="_blank">
              Live demo
            </Link>{" "}
            |{" "}
            <Link
              href="https://github.com/6kbgdb7k85-stack/DIY-Tracker"
              target="_blank"
            >
              Github
            </Link>
          </Typography>
        </li>
      </ul>
      <Typography variant="body1">
        <strong>Global Cookbook</strong> | Recipe sharing platform
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            A platform for sharing and storing recipes. Uses React frontend and
            Flask backend.
          </Typography>
        </li>
        <li style={{ listStyle: "none" }}>
          <Typography variant="body1">
            <Link href="https://global-cookbook.onrender.com" target="_blank">
              Live demo
            </Link>{" "}
            |{" "}
            <Link
              href="https://github.com/6kbgdb7k85-stack/Global-Cookbook"
              target="_blank"
            >
              Github
            </Link>
          </Typography>
        </li>
      </ul>
      <ResumeHeaderComponent title={"EDUCATION & PROFESSIONAL DEVELOPMENT"} />
      <Typography variant="body1">
        <strong>Full-Stack Web Development</strong> — University of North
        Carolina at Charlotte
      </Typography>
      <Typography variant="body2">Continuing Education | 2026-2026</Typography>
      <Typography variant="body1">
        <strong>Front-End Web Development</strong> — Tech Talent South
      </Typography>
      <Typography variant="body2">Continuing Education | 2016-2016</Typography>
      <Typography variant="body1">
        <strong>Bachelor of Arts, Interactive Media Design</strong> — Becker
        College
      </Typography>
      <Typography variant="body2">
        Game Development and Programming | 2013–2015
      </Typography>
      <Typography variant="body1">
        <strong>
          Associate of Applied Science, Simulation and Game Development
        </strong>{" "}
        — Central Piedmont Community College
      </Typography>
      <Typography variant="body2">
        Simulation and Game Development | 2010–2013
      </Typography>
      <ResumeHeaderComponent title={"ADDITIONAL INTERESTS"} />
      <Typography variant="body1">
        Restoring a 1981 DeLorean; travel and cultural exploration; video game
        mechanics and design.
      </Typography>
    </>
  );
}

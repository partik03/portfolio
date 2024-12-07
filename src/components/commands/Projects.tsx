import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Funworld Bangalore",
    desc: "A Full Stack Website for a leading Water Park in Bangalore",
    url: "https://funworldblr.com/",
  },
  {
    id: 2,
    title: "Freshers Survival Bot",
    desc: "A Telegram Bot for my college freshers",
    url: "https://t.me/freshersSurvivalBot",
  },
  {
    id: 3,
    title: "Top1Percent Testing Portal",
    desc: "Testing portal for a leading GMAT Institute in India",
    url: "https://top-1-percent-nextjs.vercel.app/",
  },
  {
    id: 4,
    title: "SnapX: Metamask Snap",
    desc: "A metamask snap for recovering lost wallet using Biometric Authentication",
    url: "https://github.com/partik03/snapx",
  },
  {
    id: 5,
    title: "Nodecloud",
    desc: "An NPM package providing a unified package for multiple cloud providers",
    url: "https://github.com/partik03/nodecloud",
  },
  {
    id: 6,
    title: "RustCloud",
    desc: "An Rust Crate providing a unified package for multiple cloud providers.",
    url: "https://github.com/partik03/rustcloud",
  },
];

export default Projects;

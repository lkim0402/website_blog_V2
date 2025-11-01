import PageTitle from "../../components/PageTitle";
import Project from "../../components/projects/Project";
import { projectData } from "@/data/projectData";
import { ProjectType } from "../../types/Project_types";

import FadeInPage from "../../components/FadeInPage";

export default function Projects() {
  const projectTypeList = [];
  for (const value of Object.values(ProjectType)) {
    projectTypeList.push(value);
  }
  return (
    <FadeInPage>
      <div>
        <PageTitle
          title="Projects"
          description="A showcase of projects I've worked on and those I'm currently working on."
        />

        <div className="flex gap-4 mb-5">
          {projectTypeList.map((el) => {
            return <div key={el}>{el}</div>;
          })}
        </div>

        <div className="grid grid-cols-1 gap-15 xl:grid-cols-2 justify-items-center ">
          {projectData.map((el) => {
            return <Project key={el.title} {...el} />;
          })}
        </div>
      </div>
    </FadeInPage>
  );
}

import PageTitle from "../../components/PageTitle";
import Project from "../../components/projects/Project";
import { projectData } from "@/data/projectData";

import FadeInPage from "../../components/FadeInPage";

export default function Projects() {
  return (
    <FadeInPage>
      <div>
        <PageTitle
          title="Projects"
          description="a showcase of projects I've worked on and those I'm currently working on"
        />
        <div className="grid grid-cols-1 gap-15 xl:grid-cols-2 justify-items-center ">
          {projectData.map((el) => {
            return <Project key={el.title} {...el} />;
          })}
        </div>
      </div>
    </FadeInPage>
  );
}

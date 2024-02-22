import Skill from "./Skill";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
        <h2 className="mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 py-8 text-center 2sm:grid-cols-2 sm:gap-12 md:grid-cols-3 xl:grid-cols-4">
          <Skill image="ndjs.png">NodeJs</Skill>
          <Skill image="JavaScript.png">JavaScript</Skill>
          <Skill image="psgres.png">PostgreSQL</Skill>
          <Skill image="xpress.png">Express</Skill>
          <Skill image="sequelize.png">Sequelize</Skill>
          <Skill image="React.png">React</Skill>
          <Skill image="Redux.png">Redux</Skill>
          <Skill image="HTML.png">HTML</Skill>
          <Skill image="CSS.png">CSS</Skill>
          <Skill image="git.png">Git</Skill>
        </div>
      </div>
    </section>
  );
}

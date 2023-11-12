import ContactItem from "./ContactItem";
import LINKEDIN from "../assets/contactbg/linkedin.png";
import GITHUB from "../assets/contactbg/github.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1540px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-cyan-400">
        Connect With Us
      </h1>
      <p className="text-center py-8 text-black text-2xl">
        Interested in more? Well, reach out!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ContactItem
          bg={LINKEDIN}
          name="Linkedin"
          description=""
          hyperlink="https://ca.linkedin.com/company/the-golang-way/"
        />
        <ContactItem
          bg={GITHUB}
          name="GitHub"
          description=""
          hyperlink="https://github.com/the-golang-way/"
        />
      </div>
    </div>
  );
};

export default Projects;

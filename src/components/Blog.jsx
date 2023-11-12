import BlogItem from "./BlogItem";
import ONE from "../assets/blogbg/blog1.jpg";
import TWO from "../assets/blogbg/blog2.jpg";
import THREE from "../assets/blogbg/blog3.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1540px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-pink-400">
        Blogs and Articles
      </h1>
      <p className="text-center py-8 text-black text-2xl">
        Enjoy our published blogs and articles!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <BlogItem
          bg={ONE}
          name="Web Dev Volunteers!"
          description=""
          hyperlink="https://www.linkedin.com/posts/the-golang-way_interested-in-contributing-to-open-source-activity-7127768084194488321-V7G9?utm_source=share&utm_medium=member_desktop"
        />
        <BlogItem
          bg={TWO}
          name="Calling Go Developers!"
          description=""
          hyperlink="https://www.linkedin.com/posts/the-golang-way_opensource-goprogramming-accessibility-activity-7125508092359843840-vyyT?utm_source=share&utm_medium=member_desktop"
        />
        <BlogItem
          bg={THREE}
          name="Exciting News!"
          description=""
          hyperlink="https://www.linkedin.com/posts/the-golang-way_the-golang-way-activity-7121969704214175744-0vUq?utm_source=share&utm_medium=member_desktop"
        />
      </div>
    </div>
  );
};

export default Projects;

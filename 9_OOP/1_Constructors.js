/* Object Literal is a collection of properties or functions or methods */
const myproject = {
  id: "100",
  name: "E-commerce WebApp's Front-end",
  technologies: ["Javascript", "React.js", "Redux", "TailwindCSS", "Next.js"],
  getTechData: function () {
    // In this function, we can apparantly access properties of it's object like 'name' and 'properties' directly.
    // But we can't do that because this function has it's own FEC, So we have to access it with 'this' keyword which clearifies the current context
    const name = this.name;
    const tech = this.technologies;
    return console.log(`Project Title: ${name} \n Tech Stack: ${tech}`);
  },
};

myproject.getTechData();

/* In case I want to create another project named "project2" which will have same properties and functions
 as of project with some different values, I would have to define a separate object literal and assign same 
 properties and functions. In case of 1000s of projects, it would get messy and hectic. 
 Solution to this problem is using constructor function. It will take paramters and pass-on as an object*/
function Project(id, name, technologies) {
  // now we can assign the parameter values to some variables with different names like
  // projectId = id, but it is not a very popular convention, instead we can use 'this' keyword
  this.id = id; // here 'this.id' is a variable assigned to parameter 'id'
  this.name = name;
  this.technologies = technologies;

  // it is not mendatory to write 'return this', it is implicitly understood by JS
  return this;
}
// now whenever we want to create a new object litteral we can call 'updatedProject' and pass values of id, name and technologies
// to create new instances, we use 'new' keyword before constructor function. It creates a new instance and doesnot effects the previous instances
const project1 = new Project(20, "API development", ["Node.js", "Express.js"]);
const project2 = new Project(43, "UI development of a SAAS", [
  "React.js",
  "javascript",
]);
console.log(project1);
console.log(project2);

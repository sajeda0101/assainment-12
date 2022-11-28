import React from "react";
import useTitle from "../UseTitle/UseTitle";

const Blog = () => {
    useTitle('Blog')
  return (
    <div className="">
      <div className="border border-indigo-600 w-5/6 mx-auto mt-3 p-5">
      <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
          <p> <strong>1.URL:</strong>The id of the current item, being viewed.Filter parameters.Pagination offset and limitSorting data<br></br>
          <strong>2.Web Storage:</strong>The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.
Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.  <br /> 
          <strong>3.Local State:</strong>The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc. <br />
          <strong>4.Lifted State:</strong>The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state. <br />
          <strong>5.Derived State:</strong>The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.
          </p>
      </div>
      <div className="border border-indigo-600 w-5/6 mx-auto mt-3 p-5">
      <h2 className="card-title">How does prototypical inheritance work?</h2>
          <p>JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not have static types.

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.</p>
      </div>
      <div className="border border-indigo-600 w-5/6 mx-auto mt-3 p-5">
      <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
          <p>A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.
Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.</p>
      </div>
      <div className="border border-indigo-600 w-5/6 mx-auto mt-3 p-5">
      <h2 className="card-title">React vs. Angular vs. Vue?</h2>
          <p> <strong>React:</strong>developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website. <br />
          <strong>Angular:</strong>, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular. <br />
          <strong>Vue:</strong> also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
Further reading: Vue.js Tutorial for Beginner Developers
          </p>
      </div>
    </div>
//  
  );
};

export default Blog;

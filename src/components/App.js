import React from "react";
import Header from "./Header";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {

  // const blogPost = blogData.map((blog) => {
  //   return <Blog key= {blog.id} name={blog.name} image={blog.image} posts={blog.posts} />
  // })
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

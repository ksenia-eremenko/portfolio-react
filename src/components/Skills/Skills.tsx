import parse from 'html-react-parser';
import React from 'react'

type SkillsItemsType = {
  title: string
  subtitle: string
}

const Skills = () => {
  const items: Array<SkillsItemsType> = [
    {
      title: "HTML + CSS(SASS, LESS)",
      subtitle: `${'I know how to work with user interfaces and create them. I work with semantic HTML tags. Working with CSS selectors and writing them. I understand the block model. I understand flexbox. <br />Working with and implementing responsive web principles, including proper use of media queries.'}`
    },
    {
      title: "JSX/TSX",
      subtitle: "In React, I work with a syntax extension that is truly one of the coolest parts of the React ecosystem: JSX and TSX. JSX is so similar to HTML that you can think of it as JavaScript with an HTML flavor. <br /> JSX is an abstraction on top of the React.createElement() API. One of the reasons it's vital for a library."
    },
    {
      title: "JavaScript",
      subtitle: "Understanding the fundamental concepts that the JavaScript language provides: -Variables and scoping; -Arrays and objects; -Array Methods; -Functions and arrow functions; -DOM Manipulation and event handlers; -The 'this' keyword; -Higher order functions and callback functions and more."
    },
    {
      title: "Git",
      subtitle: "Git is essential for every developer to store projects in solutions like GitHub, Bitbucket, and GitLab. A skill that is part of my daily life."
    },
    {
      title: "Redux",
      subtitle: "Redux is a state management library and more. This is not a framework, but a self-confident way of working with data. The principles behind Redux are similar to functional programming and immutability. The key is to master the concepts of fundamental React programming before diving into Redux."
    },
    {
      title: "Node + npm + yarn",
      subtitle: "React developers need to have a solid understanding of the npm registry. This is the place where software developers can go to get software to help them build software. Sounds funny, but truly that's all the npm is: a cloud storage for packages we call dependencies."
    },
  ]
  return (
    <div className="skills">
      <div className="block-title">- SKILLS</div>
      <div className="block-subtitle">My Skills</div>
      <div className="skills--items">
        {items.map((e, i) => {
          return <div className="skills--item" key={i}>
            <div className="n b-title color3">{(i < 9 ? `${'0' + (i + 1)}` : i + 1)}</div>
            <div className="title semibold b-title bt16">{e.title}</div>
            <div className="b-title bt14 color3">{parse(e.subtitle)}</div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Skills
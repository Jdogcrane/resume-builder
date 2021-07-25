const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID
  username: String
  email: String
  password: String
  resume: Resume
  education: [Education]
  experiences: [Experience]
  projects: [Project]
}

type Resume {
  _id: ID!
  name: String
  city: String
  state: String
  address: String
  zip: String
  linkedIn: String
  github: String
  phoneNumber: String
  summary: String
  skills: [String]
}

input ResumeInput {
  name: String
  city: String
  state: String
  address: String
  zip: String
  linkedIn: String
  github: String
  phoneNumber: String
  summary: String
  skills: [String]
}

type Project {
  title: String!
  link: String!
  points: String
  tools: String
}


input ProjectInput {
  title: String!
  link: String!
  points: String
  tools: String
}


type Experience {
  company: String!
  role: String!
  date: String!
  location: String!
  description: String!
  keyAchievements: String
}

input ExperienceInput {
  company: String!
  role: String!
  date: String!
  location: String!
  description: String!
  keyAchievements: String
}

type Education {
  school: String
  date: String
  location: String
  description: String
}

input EducationInput {
  school: String
  date: String
  location: String
  description: String
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createResume(name: String!, city: String!, state: String!, address: String!, zip: String!, linkedIn: String, github: String, phoneNumber: String!, summary: String!, skills: [String]): Resume
    addResume(resumeData: ResumeInput): User
    createExp(company: String!, role: String!, date: String!, location: String!, description: String!, keyAchievements: String): Experience
    createEd(school: String!, date: String!, location: String, description: String!): Education
    createProject(title: String!, link: String!, points: String, tools: String): Project
    addExp(expData: ExperienceInput): Resume
    addEducation(educationData: EducationInput): Resume
    addProject(projectData: ProjectInput): Resume
  }
`;

module.exports = typeDefs;

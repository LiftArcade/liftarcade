# Introduction and Setup

This project has two goals:

1. Build an open-source project that can be used as a learning resource, gather feedback, and accept contributions from the community.
2. Establish a profitable, partially open-source company that provides reliable and well-documented fitness advice.

Throughout the process, I will document the code, business decisions, and technical choices in the `docs` folder. My aim is for this project to serve as a reference for future endeavors and to benefit from constructive criticism from the community.

## Quick Introduction

I am a self-taught hobbyist with a passion for computers. While I lack formal education in Computer Science, I have experience in various areas such as OS development, web development, and backend development. This project presents a new challenge for me, and I am excited to learn and grow from it. While it's primarily for fun, any financial success is not expected or a primary goal.

## Project structure

To set up the project, I followed the guide at [https://monorepo.guide/](https://monorepo.guide/) with the exception of using pnpm workspaces.

The mono-repo is structured as follows:

```
/app -> Frontend
/docs -> Project documentation
/packages -> Various packages used by the project
/services
  /database -> Backend service for the database
```

## Tech Stack

- [Markdown](https://www.markdownguide.org/) - for the documentation
- [GitHub](https://www.github.com/) - for the code hosting
- [pnpm](https://pnpm.js.org/) - for package management
- [pnpm workspaces](https://pnpm.js.org/en/workspaces) - for mono-repo management
- [mono-repo.guide](https://monorepo.guide/) - for mono-repo setup
- [Github Flow](https://guides.github.com/introduction/flow/) - for the git workflow

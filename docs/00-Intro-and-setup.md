# Setup

Date: 2024-03-02
Status: accepted

## Introduction

This project has two goals:

1. Build an open-source project that can be used as a learning resource, gather feedback, and accept contributions from the community.
2. Establish a profitable, partially open-source company that provides reliable and well-documented fitness advice.

Throughout the process, I will document the code, business decisions, and technical choices in the `docs` folder. My aim is for this project to serve as a reference for future endeavors and to benefit from constructive criticism from the community.

## On the shoulders of giants

This project is heavily inspired by Kent C Dodds and his [Epic Web](https://www.epicweb.dev/) course. The exception is that this project is built using svelte. I highly recommend checking out his course if you are interested in learning React or web dev in general. It does a great job of going through things at a level higher than "Hello world", like many other courses do. It also explains the decisions behind the code, which is something I find lacking in many other courses.

Additionally, it is build using UI inspiration from shadcn-ui and tailwindcss.

## Quick Introduction

I am a self-taught hobbyist with a passion for computers and fitness. This project presents a new challenge for me, and I am excited to learn and grow from it. While it's primarily for fun, any financial success is not expected or a primary goal.

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

## Internal Management

- [Notion](https://www.notion.so/) (with AI subscription) - This is really used all over the place and I feel it’s too good to pass up. From marketing to internal planing of tweets, roadmaps and etc. What is put on Github, likely started as a draft in Notion.

## Template for decisions

_Stolen from Kent C Dodds_

```markdown
# Title

Date: YYYY-MM-DD
Status: proposed | rejected | accepted | deprecated | … | superseded by 0005

## Context

## Decision

## Consequences
```

# Introduction and setup

Throughout this process, I plan to document both the code and the _process_ including business decisions, technical decisions, and the reasoning behind them. The documents can be found in the `docs` folder. My ultimate goal is that this project can be used as a reference for future projects, as well as garner some healthy criticism from the community so that I and other may learn from this.

### Quick who am I

I am a hobbyist and have no formal education in Computer Science. I have been dabbling in computers since a very young age however, and starting with slackware I have dabbled in OS development, web development, and backend development. This said, I have never fully completed a project of this scale, and I am looking forward to the challenge and learning what I can. I do this mostly for fun, but if it turns out to make millions (it will not), I will deny this (i probably wont do this) and say the goal was always to make millions (again, it will not).

## Project structure

Setup a mono-repo using the guide found at [https://monorepo.guide/](https://monorepo.guide/). The only difference is that I decided to use pnpm workspaces.

The mono-repo is setup with the following structure:

```
/app -> for the frontend
/docs -> for the documentation of the project
/packages -> for different packages used by the project as it may grow.
/services
  /database -> for the backend service
```

## Tech stack added

- [markdown](https://www.markdownguide.org/) - for the documentation
- [github](https://www.github.com/) - for the code hosting
- [pnpm](https://pnpm.js.org/) - for package management
- [pnpm workspaces](https://pnpm.js.org/en/workspaces) - for mono-repo management
- [mono-repo.guide](https://monorepo.guide/) - for mono-repo setup
- [Github Flow](https://guides.github.com/introduction/flow/) - for the git workflow

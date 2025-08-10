# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

##The link to the other repo: https://github.com/rksab/CI-CD

##Exercise11.1:
Say, we have a team of about 6 people working on a Python project. As it's an interpreted language, static code analysis helps catch issues which otherwise would be caught by a compiler.
Tools Available: Pylint, Flake, Black, Ruff

Testing:the most popular framework is **pytest**, which allows writing simple functions for tests, supports fixtures for reusable setup code, and integrates well with plugins. The Python standard library includes **unittest**, which follows the xUnit style and is good for more structured test cases. Some teams also use **nose2** for a more feature-rich unittest-compatible option.

Build: If the app is packaged as a library or needs a distributable artifact, **setuptools** or **poetry** can be used to create build artifacts. In containerized environments, building means producing a Docker image via a Dockerfile.

Beyond Jenkins and Github Actions, alternative CI/CD platforms include GitLab CI/CD, CircleCI, Travis CI, Azure Pipelines.

Whether to self-host or use a cloud-based environment, depends on different factors, say we have very particular requirements or our code and data are sensitive, it makes sense to self-host. It gives us flexibility and security but would need additional budget for infrastructure and team. In case we have such strict requirements, and don't want to worry abt the additional work, maybe app is in the beginning stage and team is small and focus needs to be on development and we don't have the expertise or budget or self-hosting, it makes sense to use a cloud-based environment. It helps to scale quickly without maintenance overhead.

The CI/CD pipeline for forked repo can be found at: https://github.com/rksab/full-stack-open-pokedex

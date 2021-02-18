# docs-with-sandboxes

Creating and example repo to understand visx's doc strategy using codesandboxes. Took the following steps:

1. This project was bootstrapped with [`react-three-next`](https://github.com/pmndrs/react-three-next) + typescript
2. Created a directory `src/sandboxes`
3. Created a template standalone "app" `src/sandboxes/template` to copy over when starting a new sandbox example. Its important that each sandbox has the same template so its easy to reference many of them later.
4. Created two super simple examples `src/sandboxes/box` and `src/sandboxes/sphere`
5. Used the main `Example` component frm each sandbox subdirectory in the regular nextjs app.
6. Published each [sandbox import wizard](https://codesandbox.io/s/github) by pasting github url to each sandbox subdirectory. I believe this can be done by a cli. [Box Sandbox](https://codesandbox.io/s/github/jameswesc/drei-docs-with-sandboxes/tree/main/src/sandboxes/box?file=/index.tsx); [Sphere Sandbox](https://codesandbox.io/s/github/jameswesc/drei-docs-with-sandboxes/tree/main/src/sandboxes/sphere?file=/index.tsx)

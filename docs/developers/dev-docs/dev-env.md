---
title: Setting up your development environment
---

If you would like to contribute to the Bulgur Cloud codebase, the recommended
method is to use Visual Studio Code with devcontainers. The project comes with
devcontainers set up so you can get up to speed quickly. If you prefer not to
use these, it is possible to run everything directly as well.

## With VSCode & Devcontainers

Visual Studio Code is an open source editor and development environment.
Devcontainers are a containers based technology that automates setting up
development environments. Bulgur Cloud uses these to make it easier to get
started with development.

- First, install Visual Studio Code and Docker, if you don't have them already.
- Next, clone the [Bulgur Cloud repository](https://github.com/bulgur-cloud/bulgur-cloud).
- Open the cloned repository with Visual Studio Code. VSCode should detect the
  devcontainers and prompt to reopen the repository with the devcontainer.
  Accept the prompt, and a new VSCode window should pop up.
- In 5 to 10 minutes, the devcontainer should be done being setting up.

To start working, you can `Ctrl+Shift+P` or `Cmd+Shift+P`, type "Tasks: Run
Task" and hit enter, then select "Run everything". This will build and launch
the backend server and the web frontend, which should then pop open in your
browser. If it doesn't, you can navigate to `http://localhost:19006/` yourself
in your browser.

You should be able to log in with the username `test` and password `test`.

### Troubleshooting

#### You can see the login page, but can't log in

If you see the login page, but you get an error message or are unable to log in,
it could be because the backend server is still building. Check the integrated
VSCode terminal (`View: Focus on Terminal View`), and look for the "Run backend"
task. You should see messages like:

```
[2023-01-02T18:32:03.467226495Z]  INFO: bulgur-cloud/2573 on 2967825e5b8d: Allowing any origin (target=bulgur_cloud::server, line=48, file=bulgur-cloud-backend/src/server.rs)
```

If you see messages about compiling things, the backend might still be building.
Depending on your system, it can take a while to do your first build.

## Directly, without VSCode and Devcontainers

If you would like to run Bulgur Cloud without using VSCode and devcontainers,
you'll need to install a few things first.

- Rust. The best place to start is [rustup.rs](https://rustup.rs/).
- [cargo-watch](https://github.com/watchexec/cargo-watch#install)
- [Nodejs](https://nodejs.org/en/), and [yarn](https://yarnpkg.com/getting-started/install).
- [bunyan](https://www.npmjs.com/package/bunyan#installation)

Once you have everything installed, clone the [Bulgur Cloud repository](https://github.com/bulgur-cloud/bulgur-cloud).

In a terminal, open the root of the cloned repository, then run:

```sh
# This first step can take a while to run, it needs to download and compile everything
cargo run -- user add --username test --password test
cargo watch -s 'cargo run | bunyan'
```

In a different terminal, open the `bulgur-cloud-frontend` folder and run:

```sh
yarn install
yarn run web
```

The frontend should pop open in your browser, or you can navigate to `http://localhost:19006/` yourself.
You should be able to log in with the username `test` and password `test`.

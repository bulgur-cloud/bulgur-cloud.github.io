---
title: Installing Bulgur Cloud
description: Install Bulgur Cloud to get started
---

There are several options for installing Bulgur Cloud.

- Download and run the executable directly on any Linux or Windows system.
- Use with Docker and Docker Compose.
- For supported distributions, use packages (coming soon)

## Executable

Visit the [releases page](https://github.com/bulgur-cloud/bulgur-cloud/releases)
to find the latest release. Then look at the "Assets" section and find the
version that fits your system. Executables are available for Linux for several
CPU architectures, and for Windows. 

Most desktops and servers use `x86_64` architecture, and Raspberry Pi 3 and
higher models use `aarch64`, and older Raspberry Pi's use `armv6` or `armv7`. If
you are unsure, you can run the command `uname -m` to find out which one you
have.

The files in the release page are in archives (`zip` or `tar.xz`). You should
get a single executable file when you extract the archive. You should place this
executable in a safe location like `/usr/local/bin` on Linux systems. Make sure
the folder you place it in is in your `$PATH` variable.

## Docker

Install [Docker](https://www.docker.com/). On Linux systems you should be able
to install it through your package manager, or through Docker Desktop on MacOs
and Windows.

### Directly with Docker

Pull the
[seriousbug/bulgur-cloud](https://hub.docker.com/r/seriousbug/bulgur-cloud)
image from DockerHub, then run it. You'll need to create and mount a few
folders.

```sh
# Pull the docker image
docker pull seriousbug/bulgur-cloud:latest
# Create folders to store the data
mkdir -p users storage
# Add users for the service, repeat for however many users you'd like to add
docker run --rm -it -p 8000:8000 -v "$(pwd)/users":/users:rw -v "$(pwd)/storage":/storage:rw seriousbug/bulgur-cloud:latest user add --username name-for-user
# Start the service
docker run --detach -v "$(pwd)/users":/users:rw -v "$(pwd)/storage":/storage:rw seriousbug/bulgur-cloud:latest
```

### With Docker Compose

Docker Compose allows you to write down how you want to run Bulgur Cloud (and
any other services you might want), so you don't have to manually manage it. To
use it, create a file named `docker-compose.yml` then copy the following
contents into it.

```yml
version: '3'
services:
  bulgur-cloud:
    image: seriousbug/bulgur-cloud
    ports:
      # This is the port you want to expose Bulgur Cloud through.
      # The first `8000` is the port on the host machine,
      # change that if you want to use a different port.
      - "127.0.0.1:8000:8000"
    volumes:
      # All the Bulgur Cloud data will be stored in a directory
      # named `data` inside the folder where `docker-compose.yml` is.
      # You can change the first part of the path, before `:` to change
      # where the data should be stored.
      - ./data:/data:rw
      # You can pass options to Bulgur Cloud here.
      # This option is an example that limits the number of worker threads
      # that Bulgur Cloud will create. You can remove this line
      # if you want to let Bulgur Cloud decide the number automatically.
    command: "--workers=2"
    working_dir: "/data"
```

```sh
# Start the service
docker compose up -d
# Create your account
docker compose run --rm -it bulgur-cloud user add --username name-for-user
```

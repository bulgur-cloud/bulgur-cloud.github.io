---
title: Release
---
The release process is mostly automated. To release a new version, run the `./make-release-branch.sh` script with what kind of version bump you would like from
`patch`, `minor`, or `major`. For example, `bash ./make-release-branch.sh minor`.

This script will create a new release branch,
bump up the version number in the codebase,
then commit it. You must push this branch with `git push`.

The release workflow is triggered by the branch. Once the branch is pushed, you
should see the release workflow automatically build and test the release. The
workflow will then push the containers to ghcr.io and Docker Hub, and create a
Github release.

If the release workflow fails, you can push corrections to the release branch.
The release workflow will re-run.

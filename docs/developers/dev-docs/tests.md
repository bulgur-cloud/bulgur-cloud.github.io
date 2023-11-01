---
title: Running tests
---

## Backend

Run: `cargo test -- --test-threads=1`

The `--test-threads=1` is required for now because the tests all modify the same
folders and conflict with each other, so they can't be parallelized. This will
be dropped soon once that is fixed.

## Frontend

There are no frontend tests right now. Feel free to set it up if you would like
to contribute.

## E2E

There are Playwright powered end to end tests under the `frontend` folder.
To run them, first start the backend server yourself. Then, run them with `npm run test`.

You can also run them with the Playwright extension in VSCode. Open any e2e test
file under `frontend/tests`, and you should see run and debug options in the
gutter.

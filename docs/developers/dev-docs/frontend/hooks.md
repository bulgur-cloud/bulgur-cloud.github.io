---
title: Hooks & Actions
---

The hooks are based on [SWR](https://swr.vercel.app/),
which handles caching and revalidation for us.

## Adding a new hook that fetches data

Start with this format:

```ts
export function useThing() {
  return useFetch<api.TypeForRequest, api.TypeForResponse>({
    method: "GET or HEAD or whatever",
    "/url/to/thing",
  });
  // Instead of immediately returning the result of `useFetch`, you can also add
  // some code to transform the response you get from it.
}
```

## Adding a new hook that does an action

Start with this format:

```ts
export function useThing() {
  const { site, token } = useAppSelector((selector) => selector.auth);
  const dispatch = useAppDispatch();
  const { doRequest } = useRequest();

  async function doThing() {
    // Do whatever you need to do the action
    const out = await doRequest(/* ... */);
    // Then, update the state with redux
    dispatch(slice.action.thing());
  }

  return { doThing };
}
```

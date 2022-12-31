---
title: Authentication
---

### login
- `POST /auth/login`
- Request example:
  ```json
  {
    "username": "me",
    "password": "my-password",
  }
  ```
- Response example:
  ```json
  {
      "access_token": "me8ND5QUczhjVzVkksda2a",
      "refresh_token": "fLlFCcI22Ar4tMOkds2as",
      "valid_for_seconds": 86400
  }
  ```

Make a login attempt. This endpoint is heavily throttled, by default at 10
requests per minute. If you make too many attempts, you'll receive a `429 Too
Many Requests` error. This throttling is lifted for development builds.

The `access_token` is used to actually access API endpoints. The `refresh_token`
is used to get new access tokens when your access token expires. Clients should
never store the user password, only the refresh token.

The access token is not guaranteed to be valid for the time specified in the
response. For example, a server restart may cause tokens to become invalid. See
[meta](meta#head-stats) on how to check if a token is valid.

### refresh
- `POST /auth/refresh`
- Request example:
  ```json
  {
    "username": "me",
    "refresh_token": "fLlFCcI22Ar4tMOkds2as"
  }
  ```
- Response example:
  ```json
  {
      "access_token": "TsChuPN-VfTR9Rj23tx3x",
      "refresh_token": "fLlFCcI22Ar4tMOkds2as",
      "valid_for_seconds": 86400
  }
  ```

  Note the refresh token doesn't change.
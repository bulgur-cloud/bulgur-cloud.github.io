---
title: Banners
sidebar_position: 10
---

You can add banner messages to Bulgur Cloud. These banner messages can be
displayed on the top of the login page, and any regular page. For example, we
use this on the [demo website](https://bulgur-cloud.bgenc.net) to display the
test account to log in with.

![An example of a banner, with a text displayed above the login page.](banner-example.webp)

## Adding a banner

You can add a banner message by following these steps:

1. Create a folder named `banner` in the server directory (where `users` and `storage` directories are)
2. Inside the `banner` folder, create:
   - `login.txt` for a banner that will be displayed on the login page
   - `page.txt` for a banner that will be displayed on all pages after the login

Reload the web page (no need to restart the server). The banners should now be
displayed on their respective pages.

## Removing a banner

To remove a banner, delete the corresponding banner file. The banner is removed
immediately, there's no need to restart the server. Users who already had a page
open will continue to see the banner until they refresh the page.

---
authors: 
  - kaan
title: Moving from React Native & Expo to Next.js
tags:
  - dev
image: theme-showcase-slice.png
---

![The Bulgur Cloud user interface, with 2 diagonal cuts down the middle separating it into 3 sections. The leftmost section has a light pink background with reddish pink, rounded buttons. The middle section has a yellow background with square, hot pink buttons. The right section has a black background with gold text.](theme-showcase-slice.png)

Starting with the 0.4.0 version, Bulgur Cloud moved from [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/) to [Next.js](https://nextjs.org/). We also moved from [NativeBase](https://nativebase.io/) to [TailwindCSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/).

This was almost a complete rewrite of the user interface. Between switching from
React Native components to HTML elements, and going from NativeBase with
CSS-in-JS to a CSS utility framework, all the UI besides redux stores and client
hooks was re-rewritten.

<!--truncate-->

There were a few reasons for this rewrite. The one that annoyed me the most was
the fast refresh: React Native for Web does not support "fast refresh" where the
user interface state is kept while the code for the components gets replaced.
Without fast refresh, every time you make even a small change the whole page
refreshes. This is makes it very annoying to work on components like modals:
open the modal, make a change, open the modal again, make another change...
Next.js supports fast refresh out of the box, which is a much nicer experience.

Another problem is that React Native's "write once, run everywhere" promise
falls apart in many cases. One of these is animations: React Native supports
"native animations" where the animations are run on a native thread on mobile
platforms. But on the web, native animations are not supported and animations
fall back to running on the main UI thread. This means you get laggy animations.
The actual "native" way to do animations in the web is [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation),
but CSS animations are very different from how react native animations work
so it can't be just translated. This means you have to write any components that
need animation twice.

Same goes for any time you need other components, like video players. Bulgur
Cloud comes with a basic video player to preview video files. You can play
videos in React Native with
[react-native-video](https://github.com/react-native-video/react-native-video),
but it does not support web. Which again means writing components twice, once
using these react native components and once using HTML elements.

---

So what did we get out of this rewrite? A lot, actually. Besides improved
developer experience, Bulgur Cloud's UI is now a lot more performant as it comes
at one third the bundle size as before! See the before and after below.

![Two lines of browser data transfer stats. First line: 4 requests, 1.56 MB / 359.06 kB transferred. Second line: 9 requests, 470.28 kB / 188.74 kB transferred.](bundle-size.png)

During this rewrite, I also made sure to make everything navigable by keyboard.
This is especially important for users who rely on screen readers. Finally, I
took an easy opportunity to add themes that users can pick from a list, which
DaisyUI makes it very. This is short of our eventual goal to add fully custom
themes, but it's a good step towards that.

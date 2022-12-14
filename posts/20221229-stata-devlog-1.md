---
title: 'Stata Devlog 1: Migrating to Flutter'
date: '2022-12-29'
---

After a lot of experimentation and bug fixing with React Native, I made the decision to migrate the app over to Flutter and work from there. The main reason for this is that React Native renders your app using native components for different platforms, such as iOS, Android, or web, and I don't want to have to worry about native components. There are ways to use UI libraries instead, such as react-native-paper, but I did not really like the implementation. Flutter, on the other hand, uses a single codebase to render your app on all platforms, and I think that will be much easier to work with. I already have experience with Flutter, so I think it will be a good choice for this project.

I have already transferred over all of the components, translating them to Dart files. This was not hard to do because Dart and React are very similar in the way that state is handled, and the way that components/widgets are created.

I tried (and failed) to implement Google authentication, so I will tackle that problem again once I have Firebase set up for data storage.

---
title: Tomatenquark 0.2.0
description: The second iteration of Tomatenquark
date: 08-02-20 (mm-dd-yy)
sidebar: false
---

# Tomatenquark 0.2.0

Hey there, Fohlen here from the Tomatenquark Team.
We have finally completed much of the work on our second milestone. We'd like to use this blog post to go into detail about the changes to the game and added features.

## A release for the players

This release brings Steam support. This means that from now on, playtime tracking will be (more) accurate. You will also be able to see which of your friends are playing.

We have also added support for Steam authentication and [Valve Anticheat](https://support.steampowered.com/kb/7849-RADZ-6869/valve-anti-cheat-system-vac?l=german). If you enable `autoticket` (enabled by default) on servers that support authentication and VAC this means:

- your friends can see that you are playing and join the server
- only authenticated players can join the server
- you can report and potentially block players using Valve's reporting system

Next up on the list are achievements. We started adding a few of them already, and upcoming releases will cover more of them. Have fun discovering! With the latest update also frags and kills per death ratio are being recorded to the Tomatenquark leaderboard (which we will put on the website in the future).

Besides new features we have made many improvements to the rendering and default settings of the game. Most noticeably we increased the network update rate to 66Hz (previously 30Hz). We hope these changes reflect the experience of the majority of our community and yield a better, lag-free experience. 

Last but not least three new maps have been added to the game: `absolute`, `outpost` and `tubes`.

## For creators

After many troubles with our current map download system we have decided to step down from the previous implementation and rely completly on the Steam Workshop. Unfortunately this means that in the vanilla (non-Steam) version of the game, some of the content may become unavailable.
If you are using the Steam version we have very good news for you.
In this release we are including an alpha of the workshop support. Below is a video series illustrating how it all works:

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLpRsMfwTUEV1lyyH1Nmlmo0VBWI-LUSSi" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you would like to help us test the workshop, please join the [TomatenQuark Steam group](https://steamcommunity.com/groups/TomatenQuark), which will unlock access to the workshop for you before general availability.

## And for server owners

The updated release also comes with a dedicated server application that can be used to install and start the game.
Below you can find the instructions to get it working:

[![asciicast](https://asciinema.org/a/4u1SkqZVDJwLe7LC8mFbXGQlB.svg)](https://asciinema.org/a/4u1SkqZVDJwLe7LC8mFbXGQlB)

Please refer to the [SteamCMD documentation](https://developer.valvesoftware.com/wiki/SteamCMD) for further questions.

This approach has some benefits, including:

- one familiar interface to install software (`steamcmd`)
- regular updates to the server are delivered without any hassle
- _"your map differs from the server"_ messages are now a thing of the past
- server protection can be enabled

### How to enable protection

If you would like your server to require Steam authentication please use the `serverprotection` variable like so:

```
serverprotection 0 // disable server protection
serverprotection 1 // enable protection and list on the steam server list
serverprotection 2 // enable protection and VAC. Kick players that are banned because of anticheat
```

### How to use custom content on your server

In order for your server to deliver custom content please follow these instructions:

1. join the TomatenQuark group to gain access to the workshop
2. create a workshop collection (see [this video](https://www.youtube.com/watch?v=5yFPuinN4wI&feature=emb_title) for more information)
3. put the identifier of your collection into the server-init
4. update your map rotation with maps from your collection

For step 3. you need to configure the `servercontent` variable like so:

```
servercontent IDENTIFIER
```

For step 4. you should change your maprotation, e.g like this:

```
workshopmaps = [mapid/mapname mapid/mapname2 mapid2/mapname mapid2/mapname2]

maprotation "?capture ?hold" $workshopmaps
```

With this checklist done, your players should be downloading your collection automatically!

## A look into the future

We have made development of Tomatenquark tremendously easier by switching our build system to a unified CMake setup. From now on, one configuration is used to build on all platforms.
We hope this can help us to improve developer satisfaction, thus productivity (= more and better releases).

With this huge effort, alongside the Steam release out of the way here are the next steps we want to take before transitioning from early release to stable:

- adding more achievements
- adding a leaderboard on the website and in-game (more statistics)
- adding a race mode
- releasing the workshop to general availability
- adding a campaign (coop)

Alright folks, that's all for now. :beers: 


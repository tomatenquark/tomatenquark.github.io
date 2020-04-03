---
title: Map downloads
description: This post describes the upcoming release including map downloads
date: 04-03-20 (mm-dd-yy)
sidebar: false
---

# Map downloads

These two words carry a lot of meaning, so we'll get right to it! 

## For the players

Players have wished for downloadable maps for a long time. This release brings them to Tomatenquark!
You can now play old content from Sauerbraten, and custom content from content creators alike.

Please bear with developers. This is a technical preview, bugs may occur, the game may crash. Reporting to us is appreciated!

It will also take a while before content creators can adopt old content for the new system, so not all maps may be available out of the box.

## For content creators

You have a awesome map, but it uses custom textures, sounds, models?
This update is for you! You can now ship your custom content using the assetbundler.

To do so, please make extensive use of the `map.cfg` file. If you declare a texture using:

`texture n mytexture`

It will be declared as a download for the game, and the player will automatically download these textures.

Please make sure you use `texturereset`, as the default textures may not always be available.

### From `mmodel` to `mmodelfile`

The `mmodel` file is huge pain. Sauerbraten can load multiple model files. Which one will the `mmodel` load? IQM? MD5?

To deal with this, we have introduced the `mmodelfile` command.

From now on please declare your models like so:

```
exec dcp/blade_x/obj.cfg
mmodelfile dcp/blade_x/model.obj
mmodel dcp/blade_x
```

This will tell the game to:

- load the config specified in `dcp/blade_x` and all of it's declared contents
- load the model file `model.obj`
- finally load the map model `dcp/blade_x` with all of its dependencies

In the future we plan to add tools to make this easier for content creators, so that you wouldn't need to bother with config files in the first place.

## For server hosters

To add downloads to your server please add the following to your `server-init.cfg`

```
servercontent https://svn.code.sf.net/p/sauerbraten/code # valid HTTP address WITHOUT a backslash
```

The address should be a valid HTTP or HTTPS server. The game will start looking for maps declared in the usual folder structure (`packages/base/map.cfg`).

Please be aware that you are responsible for the content being served.

## For developers

`assetbundler` serves as a initial step to make shipping maps (and media assets in general) easier.
We plan to go from `map.cfg` to `map.json`, where one would declare the needed files. This will also allow for declaring dependencies on other maps, prefabs, models, etc.

Notably we have implemented a `go` version of the assetbundler as well (next to the curl version).
Check it out on [GitHub](https://github.com/tomatenquark/assetbundler).
It is currently not being used (instead a `libcurl` version is used) because `cgo` and `MSVC` don't like each other. As these issues are resolved we would like to offer a standalone tool to package maps. This makes it easier to reproduce and test outside of the game!

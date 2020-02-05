# Organization structure

The `Tomatenquark` is structured into a multitude of repositories which are briefly described on this page.

#### `sauerbraten_code`

`sauerbraten_code` is a read-only mirror of the [SVN of sauerbraten](https://svn.code.sf.net/p/sauerbraten/code). It serves a ground truth for all patches that are incorporated into other repositories.

#### `code`

The `code` repository contains code for the `sauerbraten` game. It comes with an extensive [continous integration and deployment](https://github.com/tomatenquark/code/actions) suite. This allows for shipping releases quickly (on `git tag`) on all mainstream platforms, while keeping repository size relatively small. Currently the `libs` for all mainstream platforms are still in the repository, which should change in the future.

#### `media`

`media` contains all media assets (located in `packages` and `data`) shipping within the SVN.
It is relatively large (`>= 1.8GB`) and should be replaced by smaller packages with clear licensing in the future.

#### `launcher`

The `launcher` repository contains a Electron based `launcher` for Tomatenquark. Currently it can:

- download and update releases of Tomatenquark from it's GitHub releases page
- download and update media using git

#### `tomatenquark.github.io`

The website of the project which should serve as ground truth for all organizational topics.

#### `.github`

Meta repository containing uniform templates for issues and pull requests (not yet).

#### `sauerworld_mappack`

This is imported from sauerworld.org

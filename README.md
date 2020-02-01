# What is Tomatenquark

`Tomatenquark` is a early stage project dedicated to the [Cube 2: Sauerbraten](http://sauerbraten.org/) game. `Tomatenquark`'s primary objective is to bring back ongoing development of the game and it's [amazing community](http://sauerworld.org/). This effort has be initiated by providing binaries of the current [svn](https://svn.code.sf.net/p/sauerbraten/code). Changes to the current `svn` will be incorporated into `Tomatenquark` in the foreseeable future.

### Installation

Installation of `Tomatenquark` is currently organized into two steps:

- Downloading binaries
- Downloading media

#### Downloading binaries 

The latest release binaries can be downloaded via [GitHub Releases](https://github.com/Tomatenquark/code/releases) (built by [GitHub Actions](https://github.com/features/actions)) below.

| Macos | Windows | Ubuntu |
| :---: | :-----: | :----: |
| [<img src="./images/apple-brands.svg" height="100" width="100" alt="Macos"/>](https://github.com/Tomatenquark/code/releases/latest/download/sauerbraten_macos.zip) | [<img src="./images/windows-brands.svg" height="100" width="100" alt="Windows"/>](https://github.com/Tomatenquark/code/releases/latest/download/sauerbraten_windows.zip) | [<img src="./images/ubuntu-brands.svg" height="100" width="100" alt="Ubuntu"/>](https://github.com/Tomatenquark/code/releases/latest/download/sauerbraten_ubuntu.zip) |

Once you downloaded a binary that fits your platform proceed with [downloading media](#downloading-media).

#### Downloading media

The latest version of all media assets (<img src="./images/cubes-solid.svg" height="14em" width="14em">) can be downloaded from [GitHub](https://github.com/Tomatenquark/media/archive/master.zip). Once downloaded the instructions below will tell where exactly to put media contents.

##### Macos <img src="./images/apple-brands.svg" height="14em" width="14em">

Copy the contents of `media.zip` to `~/Library/Application Support/sauerbraten`. Tilde (`~`) is a placeholder for your current user's home directory.

##### Windows <img src="./images/windows-brands.svg" height="14em" width="14em">

Copy the contents of `media.zip` to `$HOME\My Games\Sauerbraten`. `$HOME` is a placeholder for your current user's home directory.

##### Ubuntu <img src="./images/ubuntu-brands.svg" height="14em" width="14em">

Copy the contents of `media.zip` to `~/sauerbraten`. Tilde (`~`) is a placeholder for your current user's home directory.

#### Playing the game

Once you have downloaded binaries and media you can start playing by executing the `sauerbraten_client` (or `bat`) distributed for your platform.

### Development

If you would like to contribute to the development of `Tomatenquark` (and thus the `sauerbraten` ecosystem) please note the following:

- there is a overall direction that this project aims at - see ["Sauerbraten fork - Tomatenquark"](https://hackmd.io/@VEZp3E0FRz-R7QeOzCh6zg/SkC5zPeGU)
- the project is in very early phases. Feedback is highly appreciated. You can talk to me on [Discord](https://discord.gg/012c19bkwljlWsh3y).
- everything is undocumented right now. This is very much how `sauerbraten` deals with things, and very much how `Tomatenquark` **is not supposed** to be. Be a little patient. Creating quality documentation takes time 🍷

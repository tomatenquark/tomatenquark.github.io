# Gameplay

## Gameplay Commands

The following commands can be applied in the game by pressing T, and then typing /commandname. The backquote key (\`) is a shortcut for having the / typed for you. To have these commands applied automatically before the game starts open the autoexec.cfg file and add them there, without the /. Name and team in particular should be changed there.

### map

`map M`

Loads a map. If connected to a multiplayer server, votes to load this map (others will have to type "map M" as well to agree with loading this map). To vote for a map with a specific mode, set the mode before you issue the map command (see multiplayer menu). See also map in the editref.

### name

`name yourname`

Used for multiplayer, sets the name other players will know you as.

### team

`team teamname`

Determines who are your teammates in any team game mode (truncated to 4 characters, case sensitive).

### say

`say text...`

Outputs text to all players, as if you typed it.

### ignore

`ignore N`

Ignores all chat messages from player N, where N is either the player's name or client number.

### unignore

`unignore N`

Stops ignoring chat messages from player N, where N is either the player's name or client number.

### echo

`echo text...`

Outputs text to the console. Most useful for scripts.

### saycommand

`saycommand P...`

This puts a prompt on screen where you can type stuff into, which will capture all keystrokes until you press return (or esc to cancel). You may press tab to autocomplete commands/aliases/variables, and up/down keys to browse the command history. If what you typed started with a "/", the rest of it will be executed as a command, otherwise its something you "say" to all players. default key = T for talk, \` for commands. If P is prefix to insert to the buffer, (default key ` inserts a /).

### connect

`connect serverip [port [password]]`

Connects to a server, e.g. "connect fov120.com". You can optionally specify a port for connecting to servers with custom ports. If port is 0 or not specified, then it connects to the default port. You can optionally specify a password for connecting to password-protected servers.

### lanconnect

`lanconnect`

Connects to any server on the local area network by broadcasting the connection request.

### disconnect

`disconnect`

Leave the server.

### reconnect

`reconnect [password]`

Reconnects to the server which you were last connected to. You can optionally specify a password if the server was password-protected.

### rate

`rate N`

Sets your clients maximum downstream bandwidth to N kilobytes per second. Leaving it at 0 (the default) means the server will dynamically try to do the best thing, this is recommended for players who don't have a clue what their bandwidth is (setting your rate unoptimally is worse than not setting it all). Modem players (56k) could try rate 4 and tweak from there, dsl players can try rate 6-10. Note that the more players on a server, the more critical the effect of your rate.

### showscores

`showscores`

+showscores turns display of scores (name/frags/network) on and -showscores turns it off. Default key = tab

### conskip

`conskip N`

Allows you to browse through the console history, by offsetting the console output by N. Default key keypad - scrolls into the history (conskip 1) and keypad + resets the history (conskip -1000).

### toggleconsole

`toggleconsole`

Toggle between a more permanent and bigger console display and default, scroll off the screen variety. Unlike other games, you can play the game normally with the larger console on.

### weapon

`weapon a b c`

Tries to select weapons a, b & c, in that order, if they have ammo (0 = fist, 1 = sg, 2 = cg, 3 = rl, 4 = rifle, 5 = gl, 6 = pistol). If none of the 3 indicated have any ammo, it will try the remaining weapons for one with ammo (in order 3/2/1/4/0) (the fist needs no ammo). You can use the weapon command with 0 to 3 arguments. examples:

```
weapon 2 1 0 // close up selection
weapon 4 3 2 // far away selection
weapon 3 2 1 // medium distance selection
weapon 0 // humiliate selection :)
weapon // just switch to anything with amm
```

In any selection, it will skip whichever weapon you have currently selected, so executing a weapon command repeatedly toggles between the two best weapons with ammo within a given selection. default keys 0 to 4 select the corresponding weapons, with sensible default alternatives, middle mouse button is a simple weapon switch.

### setweapon

`setweapon N [F]`

Sets with weapon to gun N, only if the gun has ammo. If F=1, then the gun is set to N, regardless of whether the gun has any ammo.

### cycleweapon

`cycleweapon A B C D E`

Cycles through the guns specified (may specify 1-5 guns). The next gun with ammo after the currently used gun in the sequence is selected.

### nextweapon

`nextweapon [N] [F]`

Cycles through all available guns with ammo (or even empty guns if F=1 is specified). If N is -1, then it cycles through the available guns in reverse.

### gamespeed

`gamespeed P`

Sets the gamespeed in percent, i.e. 50 is playing in slowmotion at half the speed. does not work in multiplayer. for entertainment purposes only :)

### mode

`mode N`

Set gameplay mode to N for the next game played (next map load). N can be:

0. "ffa" / "default" mode. This is the default normal ffa game, and can also be used as "prewar" while setting up teams / voting for the next game.
1. coop edit mode. This simply enables map editing in multiplayer, otherwise identical to mode 0.
2. a standard teamplay game. will work with any number of teams with any number of players: you are allied with all players whose "team" setting is the same as yours.
3. instagib mode. No items will spawn, but everyone will have 100 rifle rounds and 1 health.
4. instagib team mode. No items will spawn, but everyone will have 100 rifle rounds and 1 health.
5. efficiency mode. No items will spawn, but everyone will get all weapons with full ammo, and green armour.
6. efficiency [team] mode. No items will spawn, but everyone will get all weapons with full ammo, and green armour.
7. tactics mode. No items will spawn, but everyone will spawn with only base ammo for 2 random weapons and green armour.
8. tactics [team] mode. No items will spawn, but everyone will spawn with only base ammo for 2 random weapons and green armour.
9. capture mode, see capture mode section below.
10. regen capture mode, like capture mode but with no respawn timer, and you regenerate health, armour, and ammo by standing on bases you own.
11. ctf mode. Capture the flag where you must retrieve the enemy flag and return it to your own flag for points.
12. insta ctf mode. Capture the flag as above, but with weapons, health, and items as in instagib mode.
13. protect mode. Touch the enemy flag for points. Protect your own flag by picking it up.
14. insta protect mode. Like protect mode above, but with weapons, health, and items as in instagib mode.
15. hold mode. Hold the flag for a time to score points.
16. insta hold mode. Like hold mode above, but with weapons, health, and items as in instagib mode.
17. efficiency ctf mode. Capture the flag as above, but with weapons, health, and items as in efficiency mode.
18. efficiency protect mode. Like protect mode above, but with weapons, health, and items as in efficiency mode.
19. efficiency hold mode. Like hold mode above, but with weapons, health, and items as in efficiency mode.
20. collect mode. Frag the enemy team to drop skulls. Collect them and bring them to the enemy base for points.
21. insta collect mode. Like collect mode above, but with weapons, health, and items as in instagib mode.
22. efficiency collect mode. Like collect mode above, but with weapons, health, and items as in efficiency mode.

- demo playback mode, see demo recording section below. (-1)
- single player, see single player mode section below. (-2)
- single player, see single player mode section below. (-3)

Frag counting is the same for all modes: 1 for a frag, -1 for a suicide or a teamkill. Timelimit for all game modes is 10 minutes, except for coop-edit mode where there is no limit.

### skill

`skill N`

Sets the skill level (1-10) for single player modes. Default = 3. Affects number of monsters in DMSP mode, and general monster AI in all SP modes.

### showgui servers

`showgui servers`

Displays the server menu. The server menu contains the last N servers you connected to, sorted by ping (servers are pinged automatically when bringing up this menu). Just select one to connect again. If you connect to a server by typing "connect" manually, the server gets added here automatically. You can also add servers to "servers.cfg" manually.

### updatefrommaster

`updatefrommaster`

Contacts the masterserver and adds any new servers to the server list (written to servers.cfg on exit). (see also multiplayer menu).

### clearservers

`clearservers [N]`

Clears all servers from the server browser's list. If N is 0 or not specified, only servers added by the masterserver are cleared. If N is 1, all servers are cleared, including kept servers.

### keepserver

`keepserver NAME PORT [PASSWORD]`

Adds a server to the server browser's list with ip address NAME and port PORT. If PASSWORD is specified, this password is used when clicking on the server in the server browser. This command causes the server to remain in the server browser's list even if the server list is updated from the master server or servers are cleared.

### addserver

`addserver NAME PORT [PASSWORD]`

Adds a server to the server browser's list with ip address NAME and port PORT. If PASSWORD is specified, this password is used when clicking on the server in the server browser. Note that servers added to the list with this command will be removed when the list is updated from the masterserver!

### paused

`paused B`

Wether the game is paused or not (default 0, default key F1 toggles).

### blood

`blood B`

Toggles whether blood is enabled (default 1).

### damageblendfactor

`damageblendfactor F`

The higher F, the longer the screen will stay red when you are damaged.

### damageblend 

`damageblend B`

Toggles whether the screen is blended red when damaged (default 1).

### damagecompass

`damagecompass B`

Toggles whether compass arrows are shown, indicating the amount and direction of damage taken (default 1).

### sendmap / getmap

```
sendmap
getmap
```

These two commands allow you to send other players maps they may not have while in multiplayer mode, and easily keep maps in sync while doing coop edit. "sendmap" reloads the current map you are on, then uploads it to the server and sends every other player a message about it. Other players can then simply type "getmap" to receive the current map, which is written to their local disk then reloaded. A second variant "sendmap name" is available which is particularly useful for coop editing, which first does a "savemap name" before performing the actual "sendmap". Thus in both cases you must already be on the map you want to send before issuing the command! (in some multiplayer that requires voting). Also note that "getmap" operates on the last map send by some other player, whatever it is.

## Movement, controls & physics

Jumping gains a 30% speedboost while in the air. Moving forwards or backwards without strafing also gains a 30% speedboost. Forward and jumping speedboosts are cumulative.

This has been designed such to give you multiple options to control your speed while navigating a level, you can use strafe for example to slowdown forward motion as you approach a corner to make navigating the corner easier. What this achieves is giving you both speed and precision at the same time, because pure speed (all action being equally fast) just makes you bump into walls.

## Items and Gameplay

Official game storyline: "You kill stuff. The End." **All of the following is assumed to be highly in flux. Once things settled down the document will reflect the changes.**

There are initially 7 weapons:

| num | name | damage | reload | dam/sec | technically similar to |
| --- | ---- | ------ | ------ | ------- | ---------------------- |
| 0   | fist | 50 | 0.25s | 200 | quake3 gauntlet |
| 1   | shotgun | 20x10 | 1.4s | 143 | doom2 SSG (wide angle, but less than in doom2) |
| 2   | chaingun | 30 | 0.1s | 300 | quake LG (mild spread at distance) |
| 3   | rocket launcher	| 120 | 0.8s | 150 | quake RL (splash damage) |
| 4   | rifle | 100 | 1.5s | 66 | quake2 RG |
| 5   | grenade launcher | 90 | 0.6s | 150 | any quake GL, except faster but less damaging |
| 6   | pistol | 35 | 0.5s | 70 | quake SG, but more precise |

The player has available all weapons when he spawns, but no ammo for them (except 40 pistol ammo), 100 health, and no armour.

Items that can be picked up:

- 6 types of ammo (10 shells, 5 rockets, 20 bullets, 5 rifle rounds, 10 grenades, 30 pistol ammo) (to a max of 30/15/60/15/30/120, respawn 16/12/8 seconds)
- health (adds 25 to a max of MAXHEALTH (initially 100), respawn 20/15/10 seconds)
- health boost (adds 10 to your MAXHEALTH until the end of the current map, respawn 60 seconds)
- light armour (100, absorbs 50% of damage, respawn 20 seconds)
- heavy armour (200, absorbs 75% of damage, respawn 30 seconds)
- quad powerup (4x damage for 20 seconds, respawn 70 seconds)

Health and ammo respawn depends on number of players in the game, the numbers given are for 1-2, 3-4, and 5+ player games respectively.

## Multiplayer

Quick start to multiplayer gaming:

- Open up autoexec.cfg with an editor and make sure you have your name set to something unique.
- Start the game
- go to the multiplayer menu and select "update from master server", this will get you the lastest server list (you only need to do this once every day of multiplayer gaming or so).
- select the server browser in the multiplayer menu. see how all servers get pinged automatically and information on player/map/game mode are displayed.
- select a server with a good ping (near the top of the list, below 200 is very playable, above may give noticable delays on gameplay events but is still playable).
- run, shoot and enjoy!
- you may want to get familiar with the various game modes the game has, and how to vote for other maps and modes (again, easily done using the multiplayer menu) Be cooperative with the other players on the server, and vote. Remember, press T to talk to others.

Setting up a LAN game:

- One of the computers on the LAN has to run server.bat. It really doesn't matter which.
- The simplest way for all players to connect is for them to type "lanconnect" (if there is only one server on the LAN) or "connect servername" (if there are multiple servers) in the console (press ` to get in the console), where servername is the network name or ip address of the machine running server.bat. if all went well you should now be in the game together, as above.
- If your LAN is connected to the internet, by default your server will register with the masterserver, and players could thus follow the procedure above to join the game: your server will show up in the list, and may thus be joined by people over the internet! If you want to avoid your server to contact the master server, you can start it with -mblah or something.

## Capture

This is the most complicated multiplayer mode so some explanation is required. This mode is centered around the idea of capturing and holding bases, and has similarities to the game "battlefield 1942" and the "onslaught" mode of unreal 2004: "bases" are placed thruout the map

A base (flag) can be in 2 states: captured or neutral. When captured, it is captured by a certain team. This is shown by the texture its rendered with (red means enemy captured, blue means your team, grey means neutral). When a base is captured, it will produce ammo periodically (every 20 seconds). Your team may take ammo (shown as ammo boxes orbiting the base) by either touching the base, or explicitly with the R key ("repammo" command).

A neutral base can be converted to your team by standing next to it for N seconds (N = 7 or so) within a certain radius. Multiple players speed up the process proportionally. The time accumulated to N is counted by the server as soon as the first player enters the radius, and reset to 0 immediately once all players of the initial team leave the radius.

A base of the enemy color can be converted to neutral in exactly the same way. (so often it is a 2 step process to take over a base). However, it takes twice as long to convert an enemy base to neutral, as it does to convert a neutral base to your team.

Current team name and capture status is shown above the base using a text particle.

At the spawn of a map, all bases are neutral, and all players spawn at normal player spawns, and try to capture whatever they can. Once bases are captured, players will spawn at spawnpoints close to whichever of their bases is closest to an enemy base. spawning will be preferred at bases which are not currently being captured by an enemy.

If a player dies, they wait 5 seconds before they can respawn again. If you have no bases left (the enemy has captured yours, or at least made em neutral) you will spawn at random spawnpoints.

If all bases are captured by one team, then that team wins the game automaticaly. Alternatively, if this doesn't happen, at the timelimit the team that wins is the team that has held the most bases for the most amount of time (1 point per X seconds for every base in your color).

No points are awarded for kills or self-deaths. Infact, no individual score is ever displayed, your score is the same as the team's score.

When you spawn, you are given a certain amount of ammo for randomly 2 weapons out of the 5 main ones, + pistol ammo. Ammo will periodically spawn at bases owned by a given team which can be collected by only that team.

A simple HUD shows bases relative to your current position in red or blue (can be a sphere with blips on it, with blips on the border for faraway bases).

## Network Code

You will notice that the engine plays and responds better on a high ping connection than most games out there; the reason for this is that just about everything is done clientside, not just movement (as is common in games today) but also aim (the fat client / thin server model).

The benefits of this are that the effects of lag are minimised, and someone on a 200 ping can compete on an almost even playing field with someone with a 20 ping, the disadvantages are mainly in that its harder to combat cheating. Further advantages for server admins are that servers use virtually no cpu, and very little bandwidth for a lot of clients (you can host a 4 player game on a modem!).

It is impossible to completely hide lag however, and these are some of the effects that can still show lag if you or someone you play with has a high ping / bad connection:

- if the connection has packetloss. There is no direct indicator of packetloss, instead the "packet jump" figure is provided on the hud (use "showscores"). Packet jump says as much as the amount of milliseconds that pass between updates from the indicated player. If it is extremely variable, or is high(>80) then your gameplay may be hampered (players jumping from place to place). Ideally it is a steady 40 or lower. A consistent packet jump is more vital to gameplay than ping. There is also player prediction based on extrapolation using the physics model, in an attempt to be both as up to date as possible in relation to the game state, and as realistic with regards to physics. However, under packet loss this model breaks down and player movement becomes choppy.
- if ping is high (either yours or someone you play with), some actions may appear lagged. The effect of ping is generally that the players in a game are effectively playing more and more seperate games, as someone with a high ping is "playing in the past". The local effects of this are masked out by client side movement & aim, but may become noticable across players:
    - you may get hit by someone even though you are already out of his view. This is because he is aiming at your movements of a while ago, and his hits take a while to arrive back at you. You may therefore be hit by gunfire up to his lag + your lag milliseconds after you leave his FOV.
    - item pickup: you may be denied an item if you try to pick it up at virtually the same time as someone else (server decides who was "first"). Item pickup is server side, only when you hear the sound effect have you actually picked up the item.
    - players dying appears lagged. This will improve.
- if a player is severely lagged (or you are) he temporarily becomes a "ghost" that cannot be hit (if >1sec packet jump).

## Multiplayer Online

Besides the abovementioned client-side gameplay, the code is also open source, which makes it too easy to cheat with. Anyone can modify the source to add cheats, recompile, and join multiplayer games.

There is no real trivial way to combat this:

- Moving the gameplay entirely serverside makes things a lot more complicated, hurts smoothness of gameplay, and still doesn't really solve the cheating problem
- Cube 2's predecessor, Cube, had "official binaries" which differed from the Open Source version in a different network protocol. This helped combat cheating somewhat, but still not entirely.
- A social solution, "Trusted Communities" was proposed, that would give players an identity, and only allow you to play on trusted servers if you were trusted by other players. This system could work well but requires a lot of infrastructure and organization

Cube and Cube 2 have rather small communities, and the main issue is not necessarily to combat cheating (a lost battle to start with), but more to allow non-cheaters to have undisturbed games together. Hence Sauerbraten multiplayer has a very simple solution:

There is no cheat protection at all. Nada.

Servers operate in a so called "master mode" which allows people to easily and painlessly have games with people they know, without being disturbed by cheaters. The way it works is very simple: the first person to enter a server and use the "setmaster" command becomes the "master" of that server. The master has 4 commands at his disposal which other players have not:

### setmaster

`setmaster B`

Attempts to set master status to B. 0 gives up master status, 1 claims master status, or the admin password may be specified to steal master status from the current master. If you specify a password, you are granted "admin" status, which allows you to enable server features that an ordinary master can't.

### mastermode

`mastermode N`

Sets the server to master mode N. N can be (ranging from very open to very private):

0. (open): anyone can enter the server. This is the default mode. It is good for games with random people, if no cheaters appear to be around.
1. (veto): as 0, but now the master can force map changes. This is good when playing with new players who may not understand how to vote for map changes.
2. (locked): as 1, but anyone joining after this mode has been set will be forced to be spectator only. This mode is ideal for tournament play, or games with friends only.
3. (private): as 2, but now noone can join the server anymore. Good for games with friends when cheaters are around, cheaters wont even connect, so wont have the chance to try and screw things up.

### kick

`kick N`

Kick's the player with client number N (displayed in parentheses next to name) off the server, and bans his ip until 4 hours or the server is empty. You can't kick yourself. N may also just be the player's name. This command is useful when you started playing an open game, and a cheater joins. Additionally you can move to a higher mastermode for additional protection. Don't use this command for anything other than cheaters or people otherwise obstructing games.

### clearbans

`clearbans`

Clears all previously set bans, as if the server were empty.

### spectator

`spectator B [N]`

Sets whether a player is a spectator (B=1 to enable, 0 to disable). N is specified as for kick. A player can voluntarily make himself a spectator, but only the current master can make other players spectators.

### goto

`goto N`

If you are a spectator, then this takes you to the location of player N (where N is a client number or the player's name).

### pausegame

`pausegame N`

Pauses a multiplayer game if N=1, or unpauses it if N=0. Requires admin privileges.

The important thing to see about these commands is that they don't prevent cheating, nor are necessarily a fair way of adminning a server. They just make it real easy to have fun games with friends without being disturbed by cheaters or people you don't want to play with.

In the event that a cheater is the master, or someone is being abusive with his masters powers, you can simply leave the server and start a game somewhere else. There are usually more servers than players anyway, and more players than cheaters.

If the current master leaves the server, other players may attempt to claim master status. Mastermode will be reset to 0 when this happens (also when the server clears). At any time, all players will see who is the master in a game because his name is marked in a different colour on the scoreboard.

## Demo Recording

You may record server-side demos during multiplayer games. You must have gained "admin" privileges by using the "setmaster" command to enable demo recording for a match. Once enabled, the next map that is played will start recording a demo. Once this map finishes, the server will provide the demo, so that any interested clients can download it. Demo recording is disabled automatically again for the next map, unless it is explicitly enabled again. The server will only store a fixed number of demos, and the oldest demo will be removed to make room for new ones if it already has the maximum number of demos (currently 5).

Demos may be played back via the special local "demo" mode (mode -1), where the map name is the name of the demo to be played.

### recorddemo

`recorddemo B`

Sets whether demo recording will be enabled for the next match (B=1 to enable, 0 to disable). Requires admin privileges.

### stopdemo

`stopdemo`

If in multiplayer, this command will finish recording a demo prematurely instead of waiting till the end of a match. Requires admin privileges.

If used during local demo playback, this will stop demo playback.

### cleardemos

`cleardemos`

Clears all demos from the server. Requires admin privileges.

### listdemos

`listdemos`

This lists all demos available on the server. Any client may use this command.

### getdemo

`getdemo [N]`

This command retrieves a demo from the server, where N corresponds to the demo number provided by the "listdemos" command. If no number is specified, this command will get the most recent demo. The demo will be saved locally in the main directory as a file with the extension ".dmo". Any client may use this command.

### demo

`demo F`

This alias sets the mode to -1 (the special demo playback game mode) and map to F, where F is the name of a demo file, but without the ".dmo" file extension. The "stopdemo" command may be used to terminate playback early when in this game mode.

## Movie Recording

Cube 2 can record movies as uncompressed video and sound to AVI files. These files will grow very large very rapidly and so it is strongly recommended that they are compressed before sharing.

### movie

`movie [filename]`

Providing a filename begins the movie recording, without a filename stops the recording. Small movies are stored as "<filename>.avi", but when a movie file exceeds 1Gb then the movies are stored as multiple files "<filename>XXX.avi", where XXX is numbered in sequence 000 to 999.

### moview

`moview W`

The width (default is 320) of the movie (0 will use the current window width). The movie will be downsized appropriately.

### movieh

`movieh H`

The height (default is 240) of the movie (0 will use the current window height). The movie will be downsized appropriately.

### moviefps

`moviefps F`

The framerate (default is 24fps) at which to record the movie. Movie recording may prematurely stop if unable to record reliably at this framerate.

### moviesound

`moviesound 0/1`

Enable recording of sound with 1, disable with 0.

### movieaccel

`movieaccel 0/1`

Enable GPU-accelerated video encoding with 1, disable with 0. This is enabled by default, but may cause problems on some video cards. If you notice movie recording displaying strange results, try disabling this and see if it helps.

## Bots

Bots are supported in all multiplayer modes, so long as they have waypoints available to guide them. Bots range in skill from 0 to 100, with an extra skill level 101 making the bots as skilled as possible. You must either be master or playing locally to add or remove bots. At the end of a match, all bots are removed.

### addbot

`addbot [SKILL]`

Adds a bot at skill level SKILL if provided, or defaults to a random skill level between 50 and 100 if not provided. You must be master or playing locally to use this command. Bots may only be added up to the server specified bot limit unless you are an admin or local player. This also causes waypoints to load if any are available for the current map.

### delbot

`delbot`

Removes a bot. You must be master or playing locally to use this command.

### botlimit

`botlimit N`

Sets the bot limit for masters to N. This limit does not effect admins or local players. Only admins or local players can use this command.

### botbalance

`botbalance B`

Enables automatic team balancing for bots if B=1 and disables it if B=0. Only masters or local players can use this command.

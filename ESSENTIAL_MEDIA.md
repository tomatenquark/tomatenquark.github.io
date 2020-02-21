Essential
---------

The `essential` repository contains a minimal collection of media assets to run the game. It's goal is to create a free and libre version of the game that can be freely distributed.

## Hard-coded paths

`sauerbraten` currently ships with an extensive list of hardcoded paths. Below is a list of these paths:

| File | Used in |
| ---- | ------- |
| `data/background.png` | [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L223), [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L738) |
| `data/background_detail.png` | [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L228), [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L739) |
| `data/logo_1024.png` | [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L244), [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L737) |
| `data/logo.png` | [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L244), [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L422) |
| `data/mapshot_frame.png` | [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L286), [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L741) |
| `data/loading_frame.png` | [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L365), [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L422), [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L742) |
| `data/loading_bar.png` | [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L380), [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L743) |
| `data/background_decal.png` | [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L739) |
| `packages/textures/notexture.png` | [main.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/main.cpp#L743) |
| `packages/particles/blood.png` | [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L860) |
| `packages/particles/base.png`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L861), [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L873) |
| `packages/particles/smoke.png`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L862) |
| `packages/particles/steam.png`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L863) |
| `packages/particles/flames.png`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L864) |
| `packages/particles/ball1.png`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L865) |
| `packages/particles/ball2.png`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L866) |
| `packages/particles/ball3.png`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L867) |
| `packages/particles/flare.jpg`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L867) |
| `packages/particles/flare.jpg`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L868) |
| `packages/particles/spark.png`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L872) |
| `packages/particles/snow.png`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L874) |
| `packages/particles/muzzleflash1.jpg`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L875) |
| `packages/particles/muzzleflash2.jpg`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L876) |
| `packages/particles/muzzleflash3.jpg`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L877) |
| `packages/hud/items.png`| [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L878), [renderparticles.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderparticles.cpp#L878) |
| `packages/hud/hud_rpg.png` | [rpg.cpp](https://github.com/tomatenquark/code/blob/master/src/rpggame/rpg.cpp) |
| `packages/hud/hbar.png` | [rpg.cpp](https://github.com/tomatenquark/code/blob/master/src/rpggame/rpg.cpp#L181) |
| `data/crosshair.png` | [rpg.cpp](https://github.com/tomatenquark/code/blob/master/src/rpggame/rpg.cpp#L219), [rendergl.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/rendergl.cpp#L2083) |
| `packages/particles/explosion.png` | [explosion.h](https://github.com/tomatenquark/code/blob/master/src/engine/explosion.h#L248) |
| `packages/particles/plasma.png` | [explosion.h](https://github.com/tomatenquark/code/blob/master/src/engine/explosion.h#L248) |
| `data/guiskin.png` | [3dgui.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/3dgui.cpp#L824), [3dgui.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/3dgui.cpp#L445), [3dgui.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/3dgui.cpp#L824) |
| `data/guioverlay.png` | [3dgui.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/3dgui.cpp#L344), [3dgui.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/3dgui.cpp#L400), [3dgui.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/3dgui.cpp#L445), [3dgui.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/3dgui.cpp#L659), [3dgui.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/3dgui.cpp#L746) |
| `data/guislider.png` | [3dgui.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/3dgui.cpp#L757) |
| `packages/particles/scorch.png` | [decal.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/decal.cpp#L588) |
| `packages/particles/blood.png` | [decal.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/decal.cpp#L589) |
| `packages/particles/bullet.png` | [decal.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/decal.cpp#L590) |
| `packages/hud/items.png` | [fps.cpp](https://github.com/tomatenquark/code/blob/master/src/fpsgame/fps.cpp#L759) |
| `data/hit.png` | [fps.cpp](https://github.com/tomatenquark/code/blob/master/src/fpsgame/fps.cpp#L1034) |
| `data/teammate.png` | [fps.cpp](https://github.com/tomatenquark/code/blob/master/src/fpsgame/fps.cpp#L1035) |
| `data/crosshair.png` | [fps.cpp](https://github.com/tomatenquark/code/blob/master/src/fpsgame/fps.cpp#L1036), [rendergl.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/rendergl.cpp#L2083) |
| `packages/particles/blob.png` | [blob.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/blob.cpp#L694), [blob.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/blob.cpp#L695) |
| `packages/hud/blip_blue_alive.png` | [client.cpp](https://github.com/tomatenquark/code/blob/master/src/fpsgame/client.cpp#L75) |
| `packages/hud/blip_red_alive.png` | [client.cpp](https://github.com/tomatenquark/code/blob/master/src/fpsgame/client.cpp#L75) |
| `packages/hud/blip_blue_dead.png` | [client.cpp](https://github.com/tomatenquark/code/blob/master/src/fpsgame/client.cpp#L91), [client.cpp](https://github.com/tomatenquark/code/blob/master/src/fpsgame/client.cpp#L91) |
| `packages/hud/damage.png` | [rendergl.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/rendergl.cpp#L2053) |
| `data/guicursor.png` | [rendergl.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/rendergl.cpp#L2124) |
| `packages/caustics/caust%.2d.png` | [renderva.cpp](https://github.com/tomatenquark/code/blob/master/src/engine/renderva.cpp#L1434) |
| `packages/hud/radar.png` | [capture.h](https://github.com/tomatenquark/code/blob/master/src/fpsgame/capture.h#L478) |
| `packages/hud/compass.png` | [capture.h](https://github.com/tomatenquark/code/blob/master/src/fpsgame/capture.h#L481) |
| `packages/hud/blip_blue.png` | [capture.h](https://github.com/tomatenquark/code/blob/master/src/fpsgame/capture.h#L497) |
| `packages/hud/blip_grey.png` | [capture.h](https://github.com/tomatenquark/code/blob/master/src/fpsgame/capture.h#L505) |
| `packages/hud/blip_red.png` | [capture.h](https://github.com/tomatenquark/code/blob/master/src/fpsgame/capture.h#L508) |
| `packages/particles/lensflares.png` | [lensflare.h](https://github.com/tomatenquark/code/blob/master/src/engine/lensflare.h#L192) |


## Used licenses

### `data`

| File | Author | License |
| ---- | ------ | ------- |
| `.cfg` | -    | ZLIB    |
| `guioverlay.png`, `guiskin.png`, `guislider.png` | Markus "makkE" Bekel | Creative Commons Deed / Attribution Non-commercial Share-Alike ( at-nc-sa ) |
| ` data/background_detail.png`, ` data/background_decal.png`, ` data/background.png`, ` data/logo.png`, ` data/icon.png` | The Inexor Team | CC-BY-SA 4.0 |

### `packages`

| File | Author | License |
| ---- | ------ | ------- |
| `base` | - | See `map.cfg` for licenses |
| `blendbrush` | The Inexor Team | CC-BY-SA 4.0 |
| `crosshairs` | The Inexor Team | CC-BY-SA 4.0 |
| `fonts` | Tavmjong Bah | Public domain |
| `hud` | Lee Salzman | ZLIB |
| `icons` | Scnd101 | GNU LGPL v3 |
| `models/snoutx10k` | John 'geartrooper' Siar | CC-BY 3.0 http://creativecommons.org/licenses/by/3.0/ |
| `models/armor` | diverse | GNU GPL 2 |
| `models/hudgun` | Geartrooper | CC-BY-NC 3.0 |
| `models/projectiles` | Markus Bekel | CC-BY-NC-SA |
| `models/vwep` | Markus Bekel | CC-BY-NC-SA |
| `particles/qreeves` | Quinton Reeves | CC BY-SA 3.0 |
| `particles` | diverse | CC-BY-SA 4.0 and do whatever you want |
| `sounds/q009` | Q009 | CC BY-SA 4.0 |
| `sounds/lordkv` | lukv | CC BY-SA 4.0 |
| `texture` | diverse | CC0 1.0 Universal (CC0 1.0) |
| `texture/yves_allaire/` | Yves Allaire | Do whatever you want |

# Misskey Emoji Archive Generator

Scripts for generating zip archive containing `meta.json` to import multiple emoji images to misskey.

## What is this

* Generates zip archive containing following:
  * auto-generated `meta.json` with single category specified.
  * emoji-images with hyphen replaced to underscore.

## Requirement

* `Node.js` 20.x

## Prepare for generating zip archive

* Run `npm i` to install dependencies.
* Copy `config.example.js` and rename to `config.js`
  * Specify target directory name under `src` as `TARGET`
  * Specify category name you want to register emojis as `CATEGORY`
* Create directory containing emoji images under `src`
  * Make sure directory name matches you specified at `config.js`
* Run `npm run emoji` to generate `meta.json` and zipped archive.
* Open `/admin/emojis` at your misskey server with administration role.
* Choose `Import` menu, upload generated zip archive to your misskey drive and start import.
* Have fun.

## TESTED WITH

* Sharkey `2024.3.2`
  * Should be worked with Misskey too, but not tested.

## TODO

* Use question prompt instead of specifying directory name in `config.js`.
* Validate emoji file name.

## Changelogs

### 2024.04.13 - v0.1

* Initial release.

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
  * (optional) Specify category name you want to register emojis as `CATEGORY`
  * (optional) Specify author or provided license notation as `LICENSE`
* Create directory containing emoji images under `src`
  * Make sure directory name matches you specified at `config.js`
* Run `npm run emoji` to generate `meta.json` and zipped archive.
* Open `/admin/emojis` at your misskey server with administration role.
* Choose `Import` menu, upload generated zip archive to your misskey drive and start import.
* Have fun.

## Tested with

* Sharkey `2024.3.2` / `2025.2.2`
  * Should be worked with Misskey too, but not tested.

## Todo

* Use question prompt instead of specifying directory name in `config.js`.
* Validate emoji file name.

## Term of use / Disclaimer

* Test at your development environment before you import generated archive into your production environment.
* You should consider taking backup of your database before you import emojis.
* Use at your own risk. Author of this script do not take responsibility any result of importing generated archive using this script.

## Changelogs

### 2024.04.13 - v0.1

* Initial release.
* [v0.1.1] update readme.
* [v0.1.2] add fallback if file name parse failed.
* [v0.1.3] update readme.
* [v0.1.4] add license field.

# Feudal Realms Modpack

## Setup

Run `setup.sh` or `setup.bat` depending on your operating system. This will ensure you have the mods installed for your instance.

You will also need [Twitch Export Builder](https://github.com/Gaz492/twitch-export-builder/releases). You can install it from that link or `go get github.com/Gaz492/twitch-export-builder`.

## How To

The `.build.json` identifies what files and folders are to be overrides for the modpack. 

The `.gitignore` is pretty strict and only includes files that should be overwritten since all mods create their own default configuration. No point in checking them in if they are generated on instance run.

### Add an override

If the override should override user configurations on modpack update, then modifying the file in the `./config/` directory is where you want to do this. This is usually not a great experience but some cases this is needed.

If the override is for default settings for the mod pack for a better experience, the `./defaultconfigs` folder is where you should look. Add a file with the same name as the file you want to override with a default value. It is best to only include the keys you are overwritting in here.

If you are changing recipies or `kubejs` is installed and looks in the `kubejs` directory. [https://kubejs.latvian.dev/](https://kubejs.latvian.dev/) more information can be found here.
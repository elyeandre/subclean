export declare const help_text = "\nUsage: subclean [options]\nExample: subclean subtitle.srt -w\nBulk: subclean --sweep \"path/to/media\"\n\nOptions:\n  -i, --input      The file you want to clean\n  -o, --output     Where to write the cleaned file (defaults to input)\n  -w, --overwrite  Overwrite the output file if it already exists     \n  -c, --clean      Delete the input file before writing the output    \n  -v, --version    Display current version\n  -n, --no-check   Don't check for a new package version\n  -s, --silent     Silent mode. Nothing logged to console\n      --debug      Display extra debugging information\n      --sweep      Bulk subtitle cleaning. Searches for subtitles\n                   in multiple directories (and sub-directories)\n                   This will enable --overwrite!\n      --depth      How many sub-directories to look when sweep cleaning\n      --help       Show the text you're reading now\n";

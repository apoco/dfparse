# dfparse

## Goal

This goal of this project is to be able to understand and parse Dwarf Fortress data files, starting with save files, into a structured format. Once parsing this data is possible, other tools may be built on top of this, such as the ability to modify and rewrite files. I'm focusing on Dwarf Fortress Premium first, but if we can get that completed I'm open to entertaining support for older versions.

Selfishly, I started this effort to see if I could salvage my first fort in DF Premium which is affected by [a crash when loading the save file](https://dwarffortress.mantishub.io/view.php?id=12018); I'm sure the bug will be fixed before I can reverse engineer things, but mapping out the save file should enable all kinds of other interesting things.

## Progress

This is in its infancy. I'm putting it online in the hopes of crowdsourcing the effort with help from the many talented people in the Dwarf Fortress community that surely have more understanding of the data formats and inner workings of the game. So far, I don't have any insider information; I'm reverse engineering things using a JS debugger and my own save files. At the time of this writing, I've churned through over 4 megabytes of the uncompressed save file bytes, not that I understand it all, but I've found some meaning and some patterns, so I've got a long way to go still.

## Contributing

Want to contribute? Here are some ideas:

1. Validating the code thus far against your own save files, to confirm or invalidate my multitude of guesses and assumptions.
2. Sharing information you have or insights; there are many places where the meaning of the data is unknown or the semantics of the structures may be wrong.
3. Sharing your own detective work; feel free to hack on this code, do your own reverse engineering, then send me a pull request if you'd like to fill out the parsing!
4. Linking me to other projects or documentation around the same goals; if someone else has figured some things out, I'd love to borrow their findings.
5. Engineering ideas are also welcome, but performance, code structure, tests, etc are not my primary focus.

## Credits

Progress thus far was aided immensely by the [work done by Andux](https://dwarffortresswiki.org/index.php/User:Andux/Format_research) researching the format of world and save files for older versions of Dwarf Fortress.

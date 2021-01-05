# MIM the skins

This skin is an attempt to heavily use svg files.

It applies both grunticon (via grunt) and node-scss (via node).

## Installation prior to development

Check our from git as so:

git clone https://github.com/sweco-dkbesr/sps-skin-mim
cd sps-skin-mim/internal
npm install
npx grunt
npx run scss-watch

## Development Workflow 

1) Put svg files into images/svg
2) run _grunt:default_ -> sass/svgs/_svg.css is created, contains now svgs inlined into css classes
3) update custom-icons.scss so each class in 2) is incorporated
4) run npx run _scss-watch_ -> custom_css.scss is parsed, css file is saved here: ../css/custom
5) refresh module
6) Voilá

## Installing this skin modules

See ../readme.txt

# convert to webp

- Add files to images folder or project or copy full path address of folder
- Use . to use default source (./images) or destination (./compressed) paths
- Syntaxes:
- - npm run convert
- - - This will convert from ./images folder and save to ./converted folder
- - npm run convert "-- SOURCE FOLDER PATH --"
- - - This will convert from "-- SOURCE FOLDER PATH --" folder and save to ./converted folder
- - npm run convert . "-- DESTINATION FOLDER PATH --"
- - - This will convert from ./images folder and save to "-- DESTINATION FOLDER PATH --" folder
- - npm run convert "-- SOURCE FOLDER PATH --" "-- DESTINATION FOLDER PATH --"
- - - This will convert from "-- SOURCE FOLDER PATH --" folder and save to "-- DESTINATION FOLDER PATH --" folder

# revert webp to JPEG / JPG / PNG / GIF

- Add files to images folder or project or copy full path address of folder
- Use . to use default source (./images) or destination (./reverted) paths
- JPEG you can replace with desired image types JPEG/JPG/PNG/GIF/BMP
- If not type is given then JPEG will be use as default
- Syntax:
- - npm run revert
- - - This will revert webp to jpeg from ./images folder and save to ./reverted folder
- - npm run revert png
- - - This will revert webp to png from ./images folder and save to ./reverted folder
- - npm run revert png "-- SOURCE FOLDER PATH --"
- - - This will revert webp to png from "-- SOURCE FOLDER PATH --" folder and save to ./reverted folder
- - npm run revert png . "-- DESTINATION FOLDER PATH --"
- - - This will revert webp to png from ./images folder and save to "-- DESTINATION FOLDER PATH --" folder
- - npm run revert png "-- SOURCE FOLDER PATH --" "-- DESTINATION FOLDER PATH --"
- - - This will revert webp to png from "-- SOURCE FOLDER PATH --" folder and save to "-- DESTINATION FOLDER PATH --" folder


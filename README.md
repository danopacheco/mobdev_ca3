# mobdev_ca3
Breaking bad 


To install ionic 
npm i -g @ionic/cli

To check if ionic is installed 
ionic info

To star ionic app just once!!!!!! if you put this code again you will do a disaster 
ionic start mobdev-ionic-intro blank --type=angular

Enter to your file 
cd ./mobdev-ionic-intro

starting ionic app 
ionic serve

To create pages
ionic g page pages/Tab
ionic g page pages/Characters
ionic g page pages/Episodes
ionic g page pages/Quotes
ionic g page pages/Death-Count
ionic g page pages/Character-details
ionic g page pages/Episodes-details


to eliminate pages 
cd src/app/pages 
rm -r name 

Creating services 
ionic g service services/api

add a gitpod.yml so eill start automatically
tasks:
  - name: Install ionic & Angular CLI
    command: npm i -D -E angular/cli && npx --yes ionic serve

Setting up Ionic Storage
npm i -g cordova



Breaking bad API link https://breakingbadapi.com

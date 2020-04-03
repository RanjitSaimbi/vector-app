# Vector App

Simple card app. The cards can be populated by pressing the button, which posts dummy data to the back end.

## Front End

To start up the front end navigate to ```vector-app-fe```:
```sh
$ npm install
```

```sh
$ npm start
```

## Back End

To start up the back end navigate to ```vector-app-be```:
```sh
$ docker-compose up -d --build
```

## Notes
The front end has been built using React Hooks, and re-usable / extendable functional components. 

Note that the back end is extendable for adding additional routes to add, delete and amend items. Resources have been abstracted into seperate files / directories to allow for extendability.

Websocket technology would allow multiple users to update the back end, whilst being posted changes other users had made in (close to) real time.  
you'll need to have some local dependencies: ```sudo npm i -g ts-node-dev pino-pretty prisma```

in order to work locally, you'll need to run the postgres database. we have a docker-compose ready to run it:
```docker-compose -f docker-compose.local.yaml up postgres```

then you'll need to setup env variables needed to run the app. There's an example env file you can use: ```cp .example.env .env``` 

and then run the migrations: ```sudo prisma migrate dev```

you can now install dependencies ```npm run ci```

and run it locally: ```npm run dev```


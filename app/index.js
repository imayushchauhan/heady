const Express = require('express');
const Config = require('config');
const Mongoose = require('mongoose');
const Fs = require('fs');
const Path = require('path').join;
const Router = require('router');
const BodyParser = require('body-parser');
const AppRouter = require('../routes');

class App {
    constructor() {
        this.app = Express();
        this.app.use(BodyParser.json({limit: '50mb'}));
        this.router = Router();
        this.app.use(this.router);
        this.env = process.env.NODE_ENV || 'development';
        this.port = Config.get(this.env + '.appConfig.port');
    }

    startServer() {
        this.app.listen(this.port, () => console.log(`App listening on port ${this.port}!!`))
    }

    attachRoutes() {
        let appRouter = new AppRouter();
        appRouter.attachRoutes(this.router);
    }

    connectDatabases() {
        const url = Config.get(this.env + '.dbConfig.url');
        this.connectMongo(url);
    }

    connectMongo(url) {
        return new Promise((resolve, reject) => {
            Mongoose.connect(url, function (err, res) {
                if (err)
                    reject(err);

                resolve(res);
            });
        });
    }
}

module.exports = App;
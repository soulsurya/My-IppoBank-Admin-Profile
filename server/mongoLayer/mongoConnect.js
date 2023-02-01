import { sendSlackMessage } from '../alerting/slackAlert';
import constants from '../constants';

var MongoClient = require('mongodb').MongoClient;
var url = ""
if (process.env.SRV && process.env.SRV == "true")
    url = "mongodb+srv://" + process.env.MONGO_USERNAME + ":"
        + process.env.MONGO_PASSWORD + "@"
        + process.env.MONGO_URL
        + "/";
else
    url = "mongodb://" + (process.env.MONGO_URL || '127.0.0.1:27107') + "/";

const MongoConnection = {}

let connectionObject = {}

/**
 * Creating a async
 * @param {The database name} database 
 */
MongoConnection.createConnectionAsync = async (database = process.env.MONGO_DB) => {
    const client = new MongoClient(url + database, { useUnifiedTopology: true });
    await client.connect().then((client) => {
        sendSlackMessage("Creating a new connection pool for the database", "INFO", constants.SLACK_ICONS.INFO, "MongoConnection.createConnectionAsync")

        connectionObject[database] = client.db(database)
    })
}

MongoConnection.getConnection = async (database) => {
    if (connectionObject[database] === undefined || connectionObject[database] === null) {
        await MongoConnection.createConnectionAsync(database)
    }

    return connectionObject[database]
}

export default MongoConnection;
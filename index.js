const restify = require('restify');
const { plugins } = require('restify');
const cors = require('cors');

const config = require('./config.json');
const router = require('./routes/routes')

const server = restify.createServer({ name: 'uselessBox' });

const acceptParserOptions = [
  'application/json',
  'text/plain',
  'application/octet-stream',
  'application/javascript',
  'audio/mp3',
  'audio/AMR',
];

server.pre(cors());

// use middleware
server.use(plugins.bodyParser());
server.use(plugins.queryParser());
server.use(plugins.authorizationParser());
server.use(plugins.acceptParser(acceptParserOptions));


router.applyRoutes(server);

server.listen(config.port, () => {
  console.log('%s listening at %s', server.name, server.url);
});
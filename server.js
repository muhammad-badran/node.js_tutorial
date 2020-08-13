#install node.js from nodejs.org
#use cmd to install packages (npm install <package-name>
#packages: express - cors - body-parser

//  Empty JS object to acct as endpoint for all routes
projectData = {};

// Express to run server and routes
express = require(express());

// start up an instance of appa
app = express();

const bodyParser = require('body-parser');
// Middleware
app.use(bodyParder.urlencoded({ exptended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
cors = require(cors());

// initializing the main project folder (folder name: website)
app.use(express.static('website'));

const port = 3000;
// Spin up the server
const server = app.listen(port, listening);
// Callback to debug
function listening () {
  console.log('server running');
  console.log('running on localhost: ${port}');
}

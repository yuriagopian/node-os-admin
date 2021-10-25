const os = require('os-utils');
const ps =  require("ps-node");
const psList = require("ps-list");

(async()=> {
    console.log(await psList());
})()

os.cpuUsage(function(v){
    console.log( 'CPU Usage (%): ' + v );
});
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'REGION'});

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var params = {
   KeyName: 'KEY_PAIR_NAME'
};

// Create the key pair
ec2.createKeyPair(params, function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log(JSON.stringify(data));
   }
});

import * as express from 'express';
//import * as mqtt from 'mqtt';
//import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';

//import Cat from './models/cat';
import User from './models/user';

import CameraCtrl from './controllers/camera';
import Camera from './models/camera';

import InstructionCtrl from './controllers/instruction'
import Instruction from './models/instruction';

import * as mqttCon from 'mqtt-connection';
import * as net from 'net';

export default function setRoutes(app) {

 // const mqtt = require('mqtt');
  const router = express.Router();

  //const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();

  const cameraCtrl = new CameraCtrl();
  const instructionCtrl = new InstructionCtrl();

 /* var client = mqtt.connect([{ host: '192.168.1.110', port: 1883 }]);
  var stream = net.createConnection(1883, '192.168.1.110')
  var conn = mqttCon(stream);
  console.log(conn)
  
     conn.on('connect', function () {
     conn.subscribe('ui')
     conn.publish('ui', 'gg')
  })

   conn.on('message', function(topic, message) {
    console.log(message.toString())
    conn.end()
  })*/

   //Cameras
   router.route('/cameras').get(cameraCtrl.getAll);
   router.route('/cameras/count').get(cameraCtrl.count);
   router.route('/cameras').post(cameraCtrl.insertMosquitto);
   router.route('/cameras/:id').get(cameraCtrl.get);
   router.route('/cameras/:id').put(cameraCtrl.update);
   router.route('/cameras/:id').delete(cameraCtrl.delete);

   //Instructions
   router.route('/instructions').get(instructionCtrl.getAll);
   router.route('/instructions/count').get(instructionCtrl.count);
   router.route('/instructions').post(instructionCtrl.insert);
   router.route('/instructions/:id').get(instructionCtrl.get);
   router.route('/instructions/:id').put(instructionCtrl.update);
   router.route('/instructions/:id').delete(instructionCtrl.delete);

  // Cats
  // router.route('/cats').get(catCtrl.getAll);
  // router.route('/cats/count').get(catCtrl.count);
  // router.route('/cat').post(catCtrl.insert);
  // router.route('/cat/:id').get(catCtrl.get);
  // router.route('/cat/:id').put(catCtrl.update);
  // router.route('/cat/:id').delete(catCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

 

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import Camera from '../models/camera';

const should = chai.use(chaiHttp).should();

describe('Camera', () => {

  beforeEach(done => {
    Camera.remove({}, err => {
      done();
    });
  });

  describe('Backend tests for cameras', () => {

    it('should get all the cameras', done => {
      chai.request(app)
        .get('/api/cameras')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('should get cameras count', done => {
      chai.request(app)
        .get('/api/cameras/count')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('number');
          res.body.should.be.eql(0);
          done();
        });
    });

    it('should create new camera', done => {
      const camera = {
        "id" : 2,
        "iso" : 70,
        "exposure" : 78,
        "led" : [
                    {
                        "id" : 3,
                        "frequency" : 65 
                    },
                    {
                        "id" : 4,
                        "frequency" : 45 
                    },
                    {
                        "id" : 7,
                        "frequency" : 35 
                    },
                    {
                        "id" : 8,
                        "frequency" : 76 
                    }
                ]
        };
      chai.request(app)
        .post('/api/camera')
        .send(camera)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.a.property('id');
          res.body.should.have.a.property('iso');
          res.body.should.have.a.property('exposure');
          res.body.should.have.a.property.array('led');
          res.body.should.have.a.property.array('led').object.property('id');
          res.body.should.have.a.property.array('led').object.property('frequency');
          res.body.should.have.a.property.array('led').object.property('id');
          res.body.should.have.a.property.array('led').object.property('frequency');
          res.body.should.have.a.property.array('led').object.property('id');
          res.body.should.have.a.property.array('led').object.property('frequency');
          res.body.should.have.a.property.array('led').object.property('id');
          res.body.should.have.a.property.array('led').object.property('frequency');
          done();
        });
    });

    it('should get a camera by its id', done => {
      const camera = new Camera({
                                "id" : 2,
                                "iso" : 70,
                                "exposure" : 78,
                                "led" : [
                                            {
                                                "id" : 3,
                                                "frequency" : 65 
                                            },
                                            {
                                                "id" : 4,
                                                "frequency" : 45 
                                            },
                                            {
                                                "id" : 7,
                                                "frequency" : 35 
                                            },
                                            {
                                                "id" : 8,
                                                "frequency" : 76 
                                            }
                                        ]
                                });
      camera.save((error, newCamera) => {
        chai.request(app)
          .get(`/api/camera/${newCamera.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.a.property('id');
            res.body.should.have.a.property('iso');
            res.body.should.have.a.property('exposure');
            res.body.should.have.a.property.array('led');
            res.body.should.have.a.property.array('led').object.property('id');
            res.body.should.have.a.property.array('led').object.property('frequency');
            res.body.should.have.a.property.array('led').object.property('id');
            res.body.should.have.a.property.array('led').object.property('frequency');
            res.body.should.have.a.property.array('led').object.property('id');
            res.body.should.have.a.property.array('led').object.property('frequency');
            res.body.should.have.a.property.array('led').object.property('id');
            res.body.should.have.a.property.array('led').object.property('frequency');
            res.body.should.have.property('_id').eql(newCamera.id);
            done();
          });
      });
    });

    it('should update a camera by its id', done => {
      const camera = new Camera({
                                "id" : 2,
                                "iso" : 70,
                                "exposure" : 78,
                                "led" : [
                                            {
                                                "id" : 3,
                                                "frequency" : 65 
                                            },
                                            {
                                                "id" : 4,
                                                "frequency" : 45 
                                            },
                                            {
                                                "id" : 7,
                                                "frequency" : 35 
                                            },
                                            {
                                                "id" : 8,
                                                "frequency" : 76 
                                            }
                                        ]
                                });
      camera.save((error, newCamera) => {
        chai.request(app)
          .put(`/api/camera/${newCamera.id}`)
          .send({ iso: 5 })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    it('should delete a camera by its id', done => {
        const camera = new Camera({
                                "id" : 2,
                                "iso" : 70,
                                "exposure" : 78,
                                "led" : [
                                            {
                                                "id" : 3,
                                                "frequency" : 65 
                                            },
                                            {
                                                "id" : 4,
                                                "frequency" : 45 
                                            },
                                            {
                                                "id" : 7,
                                                "frequency" : 35 
                                            },
                                            {
                                                "id" : 8,
                                                "frequency" : 76 
                                            }
                                        ]
                                });
      camera.save((error, newCamera) => {
        chai.request(app)
          .delete(`/api/camera/${newCamera.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });

});



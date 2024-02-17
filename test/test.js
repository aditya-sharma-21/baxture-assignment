const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const server = require("../index");

chai.use(chaiHttp);

describe("/Baxture Assignment Test Cases", function () {
  it("should send message on base url", function (done) {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        expect(res.body.message).to.be.a.equal(
          "Welcome to Baxture Assignment backend server"
        );
        done();
      });
  });

  it("should fetch all the users", function (done) {
    chai
      .request(server)
      .get("/api/users")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });

  it("should fetch the user by id", function (done) {
    chai
      .request(server)
      .get("/api/users/id")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  it("should create user", function (done) {
    let reqBody = {
      id: "5edba790-cd52-11ee-95dd",
      username: "aditya",
      age: 20,
      hobbies: ["1", "2"],
    };

    chai
      .request(server)
      .post("/api/users")
      .send(reqBody)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  it("should update user details", function (done) {
    let reqBody = {
      username: "aditya",
      age: 20,
      hobbies: ["1", "2"],
    };

    chai
      .request(server)
      .put("/api/users/id")
      .send(reqBody)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  it("should delete user details", function (done) {
    const id = "6002b5e0-cd67-11ee-bfb4-0bed357cee5b";
    chai
      .request(server)
      .delete(`/api/users/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

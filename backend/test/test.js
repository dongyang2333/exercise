require("dotenv").config();

const axios = require('axios');
const { expect } = require("chai");
let exerciseId=''
describe("test exercises interfaces", function(){
    it ('add new exercise', (done)=>{
        const username='John';
        const date=123;
        const description='new exercise';
        const duration=10;
        axios.post("http://localhost:5000/exercises/add",{username,date,description,duration})
        .then(function(res) {
            expect(res.status).to.equal(200);
            if (res.data) {
                exerciseId = res.data
                done();
            } else {
                done(new Error("test register new card fail"));
            }
        })
        .catch(function(err){
            done(err);
        })
    })
    it ('update the exercises', (done) => {
        const description='change the exercise'
        const username='Andy'
        axios.post("http://localhost:5000/exercises/update/"+exerciseId, { username,description})
        .then(function (res) {
            expect(res.status).to.equal(200);
            if(res.data.code ==1){
                done()
            } else {
                done(new Error ("test update eercise fail"));
            }
        })
    })
    it('test delete card', (done) => {
        axios.delete("http://localhost:5000/exercises/"+exerciseId)
            .then(function (res) {
                expect(res.status).to.equal(200);
                if (res.data.code == 1) {
                    done()
                } else {
                    done(new Error("test delete exercise fail"));
                }
            })
            .catch(function (error) {
                done(error);
            })
    })
})



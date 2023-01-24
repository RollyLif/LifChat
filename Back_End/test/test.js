let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('post connexion', () => {
    it('should return id and token', ()=>{
        chai.request(app)
            .post('/person/login')
            .send({
                username : "Rolly",
                password : "123456"
            })
            .end((err,res)=>{
                expect(res.body).to.be.json;
                expect(err).to.be.null;
                expect(res).to.have.status(200)
            });
    });
});

describe('get messages by user', ()=>{
    chai.request(app)
    .get('/private/message/conversation/63ce837f50e6d2cb6d6f2cf7')
    .send()
    .end((err, res)=>{
        expect(res.body).to.be.an('array');
        expect(err).to.be.null;
        expect(res).to.have.status(200)
    }

    )
})

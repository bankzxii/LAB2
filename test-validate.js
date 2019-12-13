const chai = require('chai');
const expect = chai.expect;
const validate = require('./validate');

describe('Validate Module', ()=>{
    context('isUserNameValid' ,()=>{
        it('Function prototype : boolean isUserNameValid(username: String)',()=>{
            expect(validate.isUserNameValid('kob')).to.be.true;
        });
        
        it('จำนวนตัวอักษรอย่างน้อย 3 ตัวอักษร',()=>{
            expect(validate.isUserNameValid('tu')).to.be.false;
        });

        it('ทุกตัวต้องเป็นตัวเล็ก',()=>{
            expect(validate.isUserNameValid('Kob')).to.be.false;
            expect(validate.isUserNameValid('koB')).to.be.false;
        });

        it('จำนวนตัวอักษรที่มากที่สุดคือ 15 ตัวอักษร',()=>{
            expect(validate.isUserNameValid('kob1234567890123')).to.be.false;
        });
    });

    context('isAgeValid', ()=>{
        it('Function prototype : boolean isAgeValid (age: String)', ()=>{
            expect(validate.isAgeValid('18')).to.be.true;
        });

        it('age ต้องเป็นข้อความที่เป็นตัวเลข', ()=>{
            expect(validate.isAgeValid('a')).to.be.false;
        });

        it('อายุต้องไม่ต่ำกว่า 18 ปี และไม่เกิน 100 ปี', ()=>{
            expect(validate.isAgeValid('17')).to.be.false;
            expect(validate.isAgeValid('101')).to.be.false;
        });
        
    });

    context('isPasswordValid', ()=>{
        it('Function prototype : boolean isUserNameValid(password: String)', ()=>{
            expect(validate.isPasswordValid('muangmit')).to.be.true;
        });

        it('จำนวนตัวอักษรอย่างน้อย 8 ตัวอักษร', ()=>{
            expect(validate.isPasswordValid('muangm')).to.be.false;
            expect(validate.isPasswordValid('muangmit')).to.be.true;
        });

        it('ต้องมีอักษรตัวใหญ่เป็นส่วนประกอบอย่างน้อย 1 ตัว', ()=>{
            expect(validate.isPasswordValid('bankzxiistyle')).to.be.false;
            // expect(validate.isPasswordValid('Bankzxiistyle')).to.be.true;
        })
    });
});
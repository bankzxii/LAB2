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
            // expect(validate.isPasswordValid(123456)).to.be.false;
            expect(validate.isPasswordValid('Bank003#')).to.be.true;
        });

        it('จำนวนตัวอักษรอย่างน้อย 8 ตัวอักษร', ()=>{
            // expect(validate.isPasswordValid('muangm')).to.be.false;
            expect(validate.isPasswordValid('Bank003#')).to.be.true;
        });

        it('ต้องมีอักษรตัวใหญ่เป็นส่วนประกอบอย่างน้อย 1 ตัว', ()=>{
            // expect(validate.isPasswordValid('Bankzxiistyle001')).to.be.false;
            expect(validate.isPasswordValid('Bank003#')).to.be.true;
        });

        it('ต้องมีตัวเลขเป็นส่วนประกอบอย่างน้อย 3 ตัว' ,()=>{
            // expect(validate.isPasswordValid('Bankzxiistyle')).to.be.false;
            expect(validate.isPasswordValid('Bank003#')).to.be.true;
        });

        it('ต้องมีอักขระ พิเศษ !@#$%^&*()_+|~-={}[]:";<>?,./ อย่างน้อย 1 ตัว' ,()=>{
            // expect(validate.isPasswordValid('Bankzxiistyle')).to.be.false;
            expect(validate.isPasswordValid('Bank003#')).to.be.true;
        });
    });

    context('isDateValid', ()=>{
        it('Function prototype: boolean isDateValid(day: Integer, month: Integer, year: Integer)',()=>{
            expect(validate.isDateValid(8,7,1997)).to.be.true;
            expect(validate.isDateValid('a','b','c')).to.be.false;
        });

        it('day เริ่ม 1 และไม่เกิน 31 ในทุกๆเดือน',()=>{
            expect(validate.isDateValid(1,7,1997)).to.be.true;
            expect(validate.isDateValid(31,7,1997)).to.be.true;
            expect(validate.isDateValid('0','7','1997')).to.be.false;
            expect(validate.isDateValid('32','7','1997')).to.be.false;
        });

        it('year จะต้องไม่ต่ำกว่า 1970 และไม่เกินปี 2020',()=>{
            expect(validate.isDateValid(1,7,1970)).to.be.true;
            expect(validate.isDateValid(31,7,2020)).to.be.true;
            expect(validate.isDateValid(31,7,2021)).to.be.false;
            expect(validate.isDateValid(31,7,1969)).to.be.false;
        });

        it('แต่ละเดือนมีจำนวนวันต่างกันตามรายการดังต่อไปนี้',()=>{
            // Check true
            expect(validate.isDateValid(31,1,1970)).to.be.true; 
            expect(validate.isDateValid(29,2,2000)).to.be.true; 
            expect(validate.isDateValid(31,3,1970)).to.be.true; 
            expect(validate.isDateValid(30,4,1970)).to.be.true; 
            expect(validate.isDateValid(31,5,1970)).to.be.true; 
            expect(validate.isDateValid(30,6,1970)).to.be.true; 
            expect(validate.isDateValid(31,7,1970)).to.be.true; 
            expect(validate.isDateValid(31,8,1970)).to.be.true; 
            expect(validate.isDateValid(30,9,1970)).to.be.true; 
            expect(validate.isDateValid(31,10,1970)).to.be.true; 
            expect(validate.isDateValid(30,11,1970)).to.be.true; 
            expect(validate.isDateValid(31,12,1970)).to.be.true; 
            // Check false
            expect(validate.isDateValid(32,1,1997)).to.be.false; 
            expect(validate.isDateValid(29,2,1997)).to.be.false;
            expect(validate.isDateValid(0,3,1997)).to.be.false;
            expect(validate.isDateValid(31,4,1997)).to.be.false; 

        });
    });
});
const {sum,substract,convertTimetoString}=require("./index")
describe("Testing the sum function ",()=>{
    test("Add 2 positive number",()=>{
        expect(sum(1,2)).toBe(3)
    })
    test("Add 3 negative number",()=>{
        expect(sum(-1,-2,-3)).toBe(-6)
    })
    test("more than two argumnetns",()=>{
        expect(sum(-1,-2,3,4)).toBe(4)
    })
    test("substract is ",()=>{
        expect(substract(2,1)).toBe(1)
    })
    test("conver into string",()=>{
        expect(convertTimetoString(50)).toBe("0 hours 0 minutes 50 seconds")
    })
})
// describe('first', () => { second })
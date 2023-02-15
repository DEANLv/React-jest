import sum from './Math';

describe("Math Module",()=>{
    test('该算法答案应该为两数之和',() =>{
        const number = 1;//设定第一参数
        const anotherNumber = 2;//设定第二参数
        const result = sum(number,anotherNumber);//执行方法
        expect(result).toBe(3);//正确
        // expect(result).toBe(2);//错误
    })
})
const calculo = require('./calculadora')

describe('funções matematicas', () => {
     test('soma dois numeros', ()=>{
          expect(calculo.soma(2,3)).toBe(5)
          expect(calculo.soma(3,3)).toBe(6)
          
     })
})

describe('funções matematicas', () => {
     test('subitracao dois numeros', ()=>{
          expect(calculo.subtracao(3,2)).toBe(1)
          expect(calculo.subtracao(3,3)).toBe(0)
          
     })
})

describe('funções matematicas', () => {
     test('multiplicacao dois numeros', ()=>{
          expect(calculo.multiplicao(3,2)).toBe(6)
          expect(calculo.multiplicao(3,3)).toBe(9)
          
     })
})

describe('funções matematicas', () => {
     test('Divisão dois numeros', ()=>{
          expect(calculo.divisao(6,2)).toBe(3)
          expect(calculo.divisao(3,3)).toBe(1)
          
     })
})
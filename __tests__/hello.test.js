const say = require('@/hello')

describe('Hello', () => {
  it('say Hello World', () => {
    expect(say()).toBe('Hello World')
  })
})

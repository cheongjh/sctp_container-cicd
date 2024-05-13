const { handler } = require('./index')

describe('handler', () => {
  it('should return status code 200 and the correct message', async () => {
    const event = {};
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      }, null, 2),
    };
    const result = await handler(event);
    expect(result).toEqual(expectedResponse);
  });
});
module.exports.handler = async (event) => {
  console.log("Cheong")
  console.log(event) // required to see logs in cloudwatch
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.handlerpost = async (event) => {
    console.log("Cheong")
    console.log(event)
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "This is POST function/method",
          input: event,
        },
        null,
        2
      ),
    };
  };
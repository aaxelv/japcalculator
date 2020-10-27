exports.handler = async function (event, context) {
  const requestBody = JSON.parse(event.body);
  if (requestBody.message) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: requestBody.message }),
    };
  }
  return {
    statusCode: 400,
    body: JSON.stringify({ message: "Attention ça buug" }),
  };
};

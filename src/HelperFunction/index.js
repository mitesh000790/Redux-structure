export const getFormattedResponse = (key, response) => {
    return {
        key,
        message: response,
        technicalMessage: "API call successful",
        statusCode: 200,
    };
};

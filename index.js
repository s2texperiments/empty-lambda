exports.handler = async (event, context) => {
    console.log(`REQUEST: ${JSON.stringify(event)}`);
    console.log(`CONTEXT: ${JSON.stringify(context)}`);
};
const convert = require('@openapi-contrib/json-schema-to-openapi-schema');
const fs = require('fs');

const schema = fs.readFileSync('input.json', 'utf8');

 
(async () => {
  const convertedSchema = await convert(schema);
  console.log(convertedSchema);
})();

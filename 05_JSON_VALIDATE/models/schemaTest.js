const schema = {
    type : "object",
    properties :{
        one : {type : "number"},
        two : {type : "string"},
        three : {type : "boolean"},
        four : {
            type : "array",
            items: {type: "string"}
        }
    },
    required: ["two", "one"],
    additionalProperties : true
}

export const schemaTest = schema;
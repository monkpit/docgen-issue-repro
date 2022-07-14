const rule = require("../../src/rules/no-foo");
const { RuleTester } = require("eslint-docgen").RuleTester;

const ruleTester = new RuleTester();
ruleTester.run("no-foo", rule, {
    valid: [],
    invalid: [
        {
            code: "foo",
            errors: [
                {
                    messageId: "avoidName"
                }
            ]
        }
    ]
});
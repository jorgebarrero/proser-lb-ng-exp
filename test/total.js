let field = {
    total: "SUPERVISOR",
    detail: ["COUNT(*)", "LLamadas recibidas", "LLamadas realizadas"]
}

let input = `
SELECT 'TOTAL', ${field.detail}
FROM MainCdr

UNION

SELECT ${field.total}, ${field.detail}
FROM MainCdr
GROUP BY ${field.total}
`
console.log(input);

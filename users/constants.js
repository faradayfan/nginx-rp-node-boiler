
module.exports = {
    service: {
        name: "users"
    },
    hash_rounds: 10,
    jwt_cert: process.env.JWT_CERT ? process.env.JWT_CERT : "jwt secret cert"
}

module.exports = {
    service: {
        name: "users"
    },
    hash_rounds: 10,
    jwt: {
        cert: process.env.JWT_CERT ? process.env.JWT_CERT : "jwt secret cert",
        expire: 3 * (60 * 60), // 3 hours in seconds
    },
    db: {
        users: {
            bootstrap: {
                username: "admin",
                firstName: "admin",
                lastName: "admin",
                password: "password1234",
                active: true,
                admin: true
            }
        },
        roles: {
            bootstrap: {
                name: "Admin"
            }
        },
        resources: {
            bootstrap: {
                name: "All",
                path: "/*",
                type: "api"
            }
        },
        roleClaims: {
            bootstrap: {
                subject: "all",
                claims: ["create", "view", "edit", "delete", "list"]
            }
        },
    }
}
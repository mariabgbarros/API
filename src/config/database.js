module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        options: {
            encrypt: false,
            validateBulkLoadParameters: true
        },
    },
    host: 'ec2-34-203-182-65.compute-1.amazonaws.com',
    user: 'hjiaaxwneihezr',
    password: '8cc31e459e7e110be33b1e0d452c1033749174f42607f9ef891061c7e3445392',
    database: 'd5ls3unrcr3ka6',
    port: 5432,
    define: {
        timestamps: true,
        freezeTableName: false,
        underscored: false,
    }
};
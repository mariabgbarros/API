module.exports = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    },
    dialect: 'postgres',
    host: 'ec2-54-159-175-38.compute-1.amazonaws.com',
    database: 'd5ls3unrcr3ka6',
    port: '5432',
    username: 'hjiaaxwneihezr',
    password: '8cc31e459e7e110be33b1e0d452c1033749174f42607f9ef891061c7e3445392',
    define: {
        timestamps: true,
        freezeTableName: false,
        underscored: true
    }
};
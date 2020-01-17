
module.exports= {
    type: 'mysql',
    host: 'localhost', 
    port: 3306,
    username: 'stephen',
    password: '123456',
    database: 'lt_auth',
    entities: [__dirname + '/src/**/**.entity.ts'], 
    logging: false,
    synchronize: false
}
  
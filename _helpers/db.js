const tedious = require('tedious');
const { Sequelize,DataTypes } = require('sequelize');

const { dbName, dbConfig } = require('config.json');

module.exports = db = {};

initialize();

async function initialize() {
    const dialect = 'mysql';
    const host = dbConfig.server;
    const { userName, password } = dbConfig.authentication.options;

   

    // connect to db
    console.log('dbName',dbName);
    const sequelize = new Sequelize(dbName, userName, password, { host, dialect });

    // init models and add them to the exported db object
    db.User = require('../main/users/user.model')(sequelize);
    db.user_role = require('../main/users/user_role.model')(sequelize);
    // db.account_master = require('../main/account_master/account_master.model')(sequelize);
    // db.client_master = require('../main/client_master/client_master.model')(sequelize);
    // db.association_mapping = require('../main/association_mapping/association_mapping.model')(sequelize);
    // db.visit_plan = require('../main/visit_plan/visit_plan.model')(sequelize);
    // db.target_plan = require('../main/target_plan/target_plan.model')(sequelize);
    // db.state_city = require('../main/State_city/state.model')(sequelize);
    // db.city_name = require('../main/State_city/city.model')(sequelize);
    // db.custom_fields = require('../main/custom_fields/custom_fields.model')(sequelize);
    // db.custom_attributes = require('../main/custom_attributes/custom_attributes.model')(sequelize);
    // db.area_city = require('../main/State_city/area_city.model')(sequelize);
    // db.area_city = require('../main/State_city/user_stateCity_mapping.model')(sequelize);
    // db.tour_plan = require('../main/tour_plan/tour_plan.model')(sequelize);
    // db.product_master = require('../main/product_master/product_master.model')(sequelize);
    // db.activity_report = require('../main/activity_report/activity_report.model')(sequelize);
    // db.leaves = require('../main/Leaves/leaves.model')(sequelize);
    // db.distributor = require('../main/distributor_master/distributor_master.model')(sequelize);
    // db.enquiry = require('../main/enquiry/enquiry.model')(sequelize);
    //Samples
    // let sample = require('../main/samples/samples.model');
    // db.samples = sample.samples(sequelize);
    // db.samples_product = sample.samples_product(sequelize);
    // db.material_master = sample.material_master(sequelize);
    // db.polymed_master = require('../main/product_master/polymedAccountMaster.model')(sequelize);
    db.sequelize = sequelize;


    // sync all models with database
    // await sequelize.sync({ alter: true });

}

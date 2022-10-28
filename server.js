require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const errorHandler = require('_middleware/error-handler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api routes
app.use('/users', require('./main/users/users.controller'));
// global error handler
app.use(errorHandler);
 

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3999;
app.listen(port, () => console.log('Server listening on port ' + port));

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Simulation",
        description: "Simulation Node",
        contact: {
          name: "Simulation Developer"
        },
        servers: ["http://localhost:3999"]
      }
    },
    // ['.routes/*.js']
    apis: ["server.js"]
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Routes
/**
 * @swagger
 * /user:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /visit/addvisit:
 *    post:
 *      description: User is use this service to add thier visit as per thier schedule
 *    parameters:
 *      - name : visit_type
 *        description: visit_type
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name : user_id
 *        description: user_id
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name : approval_id
 *        description: approval_id
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name : approval_at
 *        description: approval_at
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name : approval_status
 *        description: approval_status
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name : joint_call
 *        description: joint_call
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name : doctor_category
 *        description: doctor_category
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name : product_details
 *        description: product_details
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name : association_id
 *        description: association_id
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name : state
 *        description: state
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name : city
 *        description: city
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *      - name : remark
 *        description: remark   
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: Report Created Successfully
 */

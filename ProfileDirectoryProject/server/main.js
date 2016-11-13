import _ from 'lodash'
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees'
import {image, helpers} from 'faker'

var faker = require('faker');

Meteor.startup(() => {
    // code to run on server at startup

    // Check to see if data exists in the collection
    // See of the collection has any records
    const numberRecords = Employees.find({}).count();
    console.log(numberRecords);
    if(numberRecords==0){
        //Generate some data...
        _.times(5000, () => {
            const {name, email, phone} = helpers.createCard();

            Employees.insert({
                name : name,
                email : email,
                phone : phone,
                avatar : image.avatar()
            });
        });
    }

    //Employees.remove({});

    Meteor.publish('employees', function(){
       return Employees.find({}, {limit:20});
    });
});

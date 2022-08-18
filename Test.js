import React, { useEffect } from "react";
import { Text } from "react-native";
//const Realm = require('realm');
import Realm from "realm";
//import 'react-native-reanimated';

//const Realm = require('realm');

const TaskSchema = {
    name: "Task",
    properties: {
      _id: "int",
      name: "string",
      status: "string?",
    },
    primaryKey: "_id",
  };

const Test = () => {
    const db = async() => {
        /*const realm = await Realm.open({
            path: "myrealm",
            schema: [TaskSchema],
        });
        /*let task1, task2;
        realm.write(() => {
            task1 = realm.create("Task", {
                _id: 1,
                name: "go grocery shopping",
                status: "Open",
            });
            task2 = realm.create("Task", {
                _id: 2,
                name: "go exercise",
                status: "Open",
            });
            console.log(`created two tasks: ${task1.name} & ${task2.name}`);
        });*/

        Realm.open({ 
            schema: [TaskSchema],
            path: "myrealm"
        }).then(realm => {
            realm.write(() => {
                realm.create("Task", {
                    _id: 1,
                    name: "go grocery shopping",
                    status: "Open",
                });
            })
            realm.close()
        })
    }
    useEffect(() => {
        /*let realm = new Realm({
        path: "UserDatabase.realm",
        schema: [
            {
            name: "user_details",
            properties: {
                user_id: { type: "int", default: 0 },
                user_name: "string",
                user_contact: "string",
                user_address: "string",
            },
            },
        ],
        });

        realm.write(() => {
            try {
                realm.create('user_details', {
                    user_id: 1,
                    user_name: 'name',
                    user_contact: 'contact',
                    user_address: 'address'
                });
            } catch (e) {
                console.error(e.message);
            }
        })*/
        //db()
    }, []);

    return <Text>Test</Text>;
};

export default Test;

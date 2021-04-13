import { v4 as uuid_v4 } from "uuid";


let	items = [
        {
          id: uuid_v4(),
          name: "name 1",
          level: 0
        },
        {
          id: uuid_v4(),
          name: "name 2",
          level: 0
        },
        {
          id: uuid_v4(),
          name: "name 3",
          level: 1
        },
        {
          id:  uuid_v4(), 
          name: "name 4",
          level: 1
        }
    ];
 export default items;
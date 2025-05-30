function List(){
    const fruits=
         [{id: 1,name:"apple",calories:52},
         {id: 2,name:"banana",calories:89},
         {id:3,name:"orange",calories:47},
         {id:4,name:"grape",calories:69},
         {id:5,name:"kiwi",calories:61}]; 


    fruits.sort((a,b) => a.name.localeCompare(b.name));
    fruits.sort((a,b) => a.calories - b.calories);

    
    const ListItems=fruits.map(fruit => <li key={fruit.key}>
                            {fruit.name}: &nbsp;
                            <b>{fruit.calories}  </b></li>)
    return(<ol>{ListItems}</ol>)
}
export default List;
//Movie

const movies = [
    {title : 'a', year : 2018, rating : 4.5},
    {title : 'b', year : 2018, rating : 4.7},
    {title : 'c', year : 2018, rating : 3},
    {title : 'd', year : 2017, rating : 4.5},
];

function filter(array){
    // let filter = [];
    // for(let key of movies){
    //     if(key.year === 2018 && key.rating >4){
    //         filter.push(key);
    //     }
    // }
    // console.log(filter);
    // let sort = filter.sort(
    //     (a,b) => {
    //     if(a.rating>b.rating) return -1;
    //     if(a.rating<b.rating) return 1;
    //     return 0;
    // });
    // // console.log(sort);
    // for(let key of sort){
    //     console.log(key.title);
    // }

    console.log(array.filter(m => m.year===2018 && m.rating > 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title));
}

filter(movies);
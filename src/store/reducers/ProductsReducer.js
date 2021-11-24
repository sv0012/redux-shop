const initState={
    products:[
        {
            id:1,name:'men t-shirt summer season',image:'1.jpg',price:20,discount:2,discountPrice:20-2/100*20,quantity:1,desc:"Laboris tempor duis velit sit ullamco. Voluptate sunt incididunt anim irure do eiusmod amet laboris ad magna. Et commodo sint consectetur deserunt nisi est ipsum. Sit laborum amet est officia nostrud consequat incididunt voluptate cillum aliqua reprehenderit nulla. Ut enim Lorem reprehenderit occaecat proident do quis commodo ipsum esse aliqua. Ut officia exercitation exercitation aliquip sit aute consectetur ex. Veniam eu ad ea in quis."
        },

        {
            id:2,name:'women jacket for summer',image:'2.jpg',price:30,discount:5,discountPrice:30-5/100*30,quantity:1,desc:"Laboris tempor duis velit sit ullamco. Voluptate sunt incididunt anim irure do eiusmod amet laboris ad magna. Et commodo sint consectetur deserunt nisi est ipsum. Sit laborum amet est officia nostrud consequat incididunt voluptate cillum aliqua reprehenderit nulla. Ut enim Lorem reprehenderit occaecat proident do quis commodo ipsum esse aliqua. Ut officia exercitation exercitation aliquip sit aute consectetur ex. Veniam eu ad ea in quis."
        },
        {
            id:3,name:'men trouser for all seasons',image:'3.jpg',price:15,discount:3,discountPrice:15-3/100*15,quantity:1,desc:"Laboris tempor duis velit sit ullamco. Voluptate sunt incididunt anim irure do eiusmod amet laboris ad magna. Et commodo sint consectetur deserunt nisi est ipsum. Sit laborum amet est officia nostrud consequat incididunt voluptate cillum aliqua reprehenderit nulla. Ut enim Lorem reprehenderit occaecat proident do quis commodo ipsum esse aliqua. Ut officia exercitation exercitation aliquip sit aute consectetur ex. Veniam eu ad ea in quis."
        },
        {
            id:4,name:'shoes',image:'4.jpg',price:50,discount:4,discountPrice:50-4/100*50,quantity:1,desc:"Laboris tempor duis velit sit ullamco. Voluptate sunt incididunt anim irure do eiusmod amet laboris ad magna. Et commodo sint consectetur deserunt nisi est ipsum. Sit laborum amet est officia nostrud consequat incididunt voluptate cillum aliqua reprehenderit nulla. Ut enim Lorem reprehenderit occaecat proident do quis commodo ipsum esse aliqua. Ut officia exercitation exercitation aliquip sit aute consectetur ex. Veniam eu ad ea in quis."
        },
        {
            id:5,name:'female skirt',image:'5.jpg',price:25,discount:2,discountPrice:25-2/100*25,quantity:1,desc:"Laboris tempor duis velit sit ullamco. Voluptate sunt incididunt anim irure do eiusmod amet laboris ad magna. Et commodo sint consectetur deserunt nisi est ipsum. Sit laborum amet est officia nostrud consequat incididunt voluptate cillum aliqua reprehenderit nulla. Ut enim Lorem reprehenderit occaecat proident do quis commodo ipsum esse aliqua. Ut officia exercitation exercitation aliquip sit aute consectetur ex. Veniam eu ad ea in quis."
        },
        {
            id:6,name:'female ripped jeans',image:'6.jpg',price:60,discount:6,discountPrice:60-6/100*60,quantity:1,desc:"Laboris tempor duis velit sit ullamco. Voluptate sunt incididunt anim irure do eiusmod amet laboris ad magna. Et commodo sint consectetur deserunt nisi est ipsum. Sit laborum amet est officia nostrud consequat incididunt voluptate cillum aliqua reprehenderit nulla. Ut enim Lorem reprehenderit occaecat proident do quis commodo ipsum esse aliqua. Ut officia exercitation exercitation aliquip sit aute consectetur ex. Veniam eu ad ea in quis."
        },
        {
            id:7,name:'joggers',image:'7.jpg',price:35,discount:2,discountPrice:35-2/100*35,quantity:1,desc:"Laboris tempor duis velit sit ullamco. Voluptate sunt incididunt anim irure do eiusmod amet laboris ad magna. Et commodo sint consectetur deserunt nisi est ipsum. Sit laborum amet est officia nostrud consequat incididunt voluptate cillum aliqua reprehenderit nulla. Ut enim Lorem reprehenderit occaecat proident do quis commodo ipsum esse aliqua. Ut officia exercitation exercitation aliquip sit aute consectetur ex. Veniam eu ad ea in quis."
        },
        {
            id:8,name:'male jacket',image:'8.jpg',price:80,discount:7,discountPrice:80-7/100*80,quantity:1,desc:"Laboris tempor duis velit sit ullamco. Voluptate sunt incididunt anim irure do eiusmod amet laboris ad magna. Et commodo sint consectetur deserunt nisi est ipsum. Sit laborum amet est officia nostrud consequat incididunt voluptate cillum aliqua reprehenderit nulla. Ut enim Lorem reprehenderit occaecat proident do quis commodo ipsum esse aliqua. Ut officia exercitation exercitation aliquip sit aute consectetur ex. Veniam eu ad ea in quis."
        },
        {
            id:9,name:'female jacket',image:'1.jpg',price:95,discount:4,discountPrice:95-4/100*95,quantity:1,desc:"Laboris tempor duis velit sit ullamco. Voluptate sunt incididunt anim irure do eiusmod amet laboris ad magna. Et commodo sint consectetur deserunt nisi est ipsum. Sit laborum amet est officia nostrud consequat incididunt voluptate cillum aliqua reprehenderit nulla. Ut enim Lorem reprehenderit occaecat proident do quis commodo ipsum esse aliqua. Ut officia exercitation exercitation aliquip sit aute consectetur ex. Veniam eu ad ea in quis."
        },
        {
            id:10,name:'male winter jacket',image:'10.jpg',price:120,discount:3,discountPrice:120-3/100*120,quantity:1,desc:"Laboris tempor duis velit sit ullamco. Voluptate sunt incididunt anim irure do eiusmod amet laboris ad magna. Et commodo sint consectetur deserunt nisi est ipsum. Sit laborum amet est officia nostrud consequat incididunt voluptate cillum aliqua reprehenderit nulla. Ut enim Lorem reprehenderit occaecat proident do quis commodo ipsum esse aliqua. Ut officia exercitation exercitation aliquip sit aute consectetur ex. Veniam eu ad ea in quis."
        },
    ],
    product: {}
}

const ProductsReducer = (state=initState,action) => {

    switch (action.type) {

        case "PRODUCT":
            return {...state,product:state.products.find(product=>product.id===parseInt(action.id))}
    
        default:
            return state;
    }
    
}

export default ProductsReducer

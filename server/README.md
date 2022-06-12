#cli    
npx sequelize-cli model:generate --name item --attributes name:string,price:integer,image:string,brandId:integer
npx sequelize-cli model:generate --name brand --attributes name:string,image:string
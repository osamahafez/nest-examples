# Nest-Mysql-Graphql Example

## Example Explanation
- We have UsersModule and PostsModule and they are mutually connected via [Circular_Dependency](https://docs.nestjs.com/fundamentals/circular-dependency)

- We use typeorm to connect to mysql and create UserEntity and PostEntity. Check [Database](https://docs.nestjs.com/techniques/database)

- Then we add graphql(code-first) and create UserModel and UserModel (Note that UserEntity and UserModel must have same fields. Same goes for Post)

- Using graphql queries you can fetch all users with each user's posts,fetch user by id and fetch all posts

- Using graphql mutations you can create users, delete users and create post for a user

## Nest Docs

[Nest](https://docs.nestjs.com/)
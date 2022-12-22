create database firstapi;

create table users(
    id serial primary key,
    name varchar(40),
    email text
);

insert into users (name, email) values ('joe', 'joe@gmail.com');

insert into users (name, email) values ('ryan', 'ryan@gmail.com');
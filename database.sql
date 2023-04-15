-- create database: maid_ready_app

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "account_type" VARCHAR (10) NOT NULL,
    "email" VARCHAR (300) NOT NULL
);

CREATE TABLE "property" (
    "id" SERIAL PRIMARY KEY,
    "street" VARCHAR (300) NOT NULL,
    "city" VARCHAR (300) NOT NULL,
    "state" VARCHAR (100) NOT NULL,
    "zipcode" VARCHAR (5) NOT NULL,
    "sq_footage" INT NOT NULL,
    "owner_id" INT REFERENCES "user"
);

CREATE TABLE "job" (
    "id" SERIAL PRIMARY KEY,
    "price" DECIMAL NOT NULL,
    "date_completed_by" DATE NOT NULL,
    "time" TIME NOT NULL,
    "status" VARCHAR (20) NOT NULL,
    "claimed" BOOLEAN,
    "property_id" INT REFERENCES "property",
    "owner_id" INT REFERENCES "user",
    "keeper_id" INT REFERENCES "user"
);

CREATE TABLE "checklist_item" (
    "id" SERIAL PRIMARY KEY,
    "completed" BOOLEAN,
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "job_checklist" (
    "id" SERIAL PRIMARY KEY,
    "job_id" INT REFERENCES "job",
    "checklist_item_id" INT REFERENCES "checklist_item"
);


-- create database: maid_ready_app

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) NOT NULL,
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
    "claimed" BOOLEAN DEFAULT FALSE NOT NULL, 
    "property_id" INT REFERENCES "property",
    "owner_id" INT REFERENCES "user",
    "keeper_id" INT REFERENCES "user"
);

CREATE TABLE "checklist_item" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(255) NOT NULL, 
	"description" VARCHAR(1000),
	"standard" BOOLEAN NOT NULL DEFAULT FALSE,
	"job_id" INT REFERENCES "job" ON DELETE CASCADE
);


-- CREATE TABLE "job_checklist" (
--     "id" SERIAL PRIMARY KEY,
--     "job_id" INT REFERENCES "job",
--     "checklist_item_id" INT REFERENCES "checklist_item"
-- );

CREATE TABLE "cleaning_standard" (
    "id" SERIAL PRIMARY KEY,
    "task" varchar(255) NOT NULL,
    "description" varchar(1000)
);

INSERT INTO "cleaning_standard" ("task", "description")
VALUES 
('Strip the beds, start load of sheets, if multiple sheets are provided make the bed with the second set that is provided.', null),
('Wash the comforter and shams (if requested by owner) will be extra charge.',null),
('Wipe down nightstands, dresser and if needed tv.',null),
('Clean bathroom: wipe down counters, sink, toilet (don''t forget the base of toilet and neck), tub, mirror, stock paper products, remove any trash. (Repeat if multiple bathrooms)',null),
('Check supply of hand soap and lotion, fill if necessary.',null),
('Check supply of hand soap and lotion, fill if necessary.',null),
('Clean kitchen: wipe down counters, appliances (stove top, fridge front) dishwasher, check inside fridge for any food left behind, remove any trash.',null),
('Check all drawers and cabinets for dishes, utensils, pots and pans (inventory)',null),
('Check supply of soap.',null),
('Clean the living room: wipe down tv stand, tv, side tables, coffee tables, lamps.',null),
('Wipe windowsills',null),
('Sweep/dust mop/vacuum the whole house/apartment',null),
('If balcony or porch is on property may sure to dust/sweep for cob webs.',null);


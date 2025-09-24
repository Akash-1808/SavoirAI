CREATE TABLE candidates (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    education TEXT,
    skills TEXT[],
    location VARCHAR(100)
);

CREATE TABLE internships (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150),
    company VARCHAR(100),
    description TEXT,
    skills_required TEXT[],
    location VARCHAR(100)
);

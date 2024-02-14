DROP TABLE IF EXISTS users;
CREATE TABLE
IF NOT EXISTS users
(
    id INTEGER PRIMARY KEY,
    saasId TEXT NOT NULL,
    displayName TEXT NOT NULL,
    userCustomId TEXT UNIQUE
);

INSERT INTO users
    (id, saasId, displayName, userCustomId)
VALUES
    (1, 'd;fakjd;akjdfowi', 'alfreds_01', 'Maria Anders');

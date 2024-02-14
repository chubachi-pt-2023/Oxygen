# Oxygen

Oxygen is ATOMONO API server.

package manager: pnpm

framework: hono

cloud: cloudflare

local server port: 8787

domain: oxygen.jabelic.workers.dev

## branch

- dev: master
- staging: staging
- release: release

```
pnpm install
pnpm dev
```

```
pnpm deploy
```

## DB

```
+-------------------------+
| Database |
+-------------------------+
| atomono_api_development |
| information_schema |
| performance_schema |
+-------------------------+

mysql> show tables;
+-----------------------------------+
| Tables_in_atomono_api_development |
+-----------------------------------+
| ar_internal_metadata |
| category_hierarchies |
| flipper_features |
| flipper_gates |
| master_brands |
| master_categories |
| master_companies |
| master_countries |
| products |
| replaces_products |
| reviews |
| schema_migrations |
| users |
| users_favorites |
| users_products |
| users_profiles |
+-----------------------------------+


mysql> show tables;
+-----------------------------------+
| Tables_in_atomono_api_development |
+-----------------------------------+
| ar_internal_metadata              |
| category_hierarchies              |
| flipper_features                  |
| flipper_gates                     |
| master_brands                     |
| master_categories                 |
| master_companies                  |
| master_countries                  |
| products                          |
| replaces_products                 |
| reviews                           |
| schema_migrations                 |
| users                             |
| users_favorites                   |
| users_products                    |
| users_profiles                    |
+-----------------------------------+
16 rows in set (0.01 sec)

mysql> describe ar_internal_metadata;
+------------+--------------+------+-----+---------+-------+
| Field      | Type         | Null | Key | Default | Extra |
+------------+--------------+------+-----+---------+-------+
| key        | varchar(255) | NO   | PRI | NULL    |       |
| value      | varchar(255) | YES  |     | NULL    |       |
| created_at | datetime(6)  | NO   |     | NULL    |       |
| updated_at | datetime(6)  | NO   |     | NULL    |       |
+------------+--------------+------+-----+---------+-------+
4 rows in set (0.01 sec)

mysql>
mysql> describe category_hierarchies;
+-------------------+--------+------+-----+---------+----------------+
| Field             | Type   | Null | Key | Default | Extra          |
+-------------------+--------+------+-----+---------+----------------+
| id                | bigint | NO   | PRI | NULL    | auto_increment |
| root_category_id  | int    | NO   | MUL | NULL    |                |
| child_category_id | int    | NO   |     | NULL    |                |
| order             | int    | NO   |     | NULL    |                |
+-------------------+--------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql>
mysql>
mysql> describe flipper_features;
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | bigint       | NO   | PRI | NULL    | auto_increment |
| key        | varchar(255) | NO   | UNI | NULL    |                |
| created_at | datetime(6)  | NO   |     | NULL    |                |
| updated_at | datetime(6)  | NO   |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+
4 rows in set (0.01 sec)

mysql>
mysql>
mysql> describe flipper_gates;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | bigint       | NO   | PRI | NULL    | auto_increment |
| feature_key | varchar(255) | NO   | MUL | NULL    |                |
| key         | varchar(255) | NO   |     | NULL    |                |
| value       | text         | YES  |     | NULL    |                |
| created_at  | datetime(6)  | NO   |     | NULL    |                |
| updated_at  | datetime(6)  | NO   |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
6 rows in set (0.01 sec)

mysql>
mysql>
mysql> describe master_brands;
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | bigint       | NO   | PRI | NULL    | auto_increment |
| name       | varchar(255) | NO   | UNI | NULL    |                |
| name_ja    | varchar(255) | YES  | UNI | NULL    |                |
| name_en    | varchar(255) | YES  | UNI | NULL    |                |
| created_at | datetime(6)  | NO   |     | NULL    |                |
| updated_at | datetime(6)  | NO   |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+
6 rows in set (0.00 sec)

mysql>
mysql> describe master_categories;
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | bigint       | NO   | PRI | NULL    | auto_increment |
| name       | varchar(255) | NO   | UNI | NULL    |                |
| created_at | datetime(6)  | NO   |     | NULL    |                |
| updated_at | datetime(6)  | NO   |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql>
mysql>
mysql> describe master_companies;
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | bigint       | NO   | PRI | NULL    | auto_increment |
| name       | varchar(255) | NO   | UNI | NULL    |                |
| name_ja    | varchar(255) | YES  | UNI | NULL    |                |
| name_en    | varchar(255) | YES  | UNI | NULL    |                |
| created_at | datetime(6)  | NO   |     | NULL    |                |
| updated_at | datetime(6)  | NO   |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+
6 rows in set (0.00 sec)

mysql>
mysql> describe master_countries;
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | bigint       | NO   | PRI | NULL    | auto_increment |
| name       | varchar(255) | NO   | UNI | NULL    |                |
| created_at | datetime(6)  | NO   |     | NULL    |                |
| updated_at | datetime(6)  | NO   |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+
4 rows in set (0.01 sec)

mysql>
mysql>
mysql> describe products;
+------------------+--------------+------+-----+---------+----------------+
| Field            | Type         | Null | Key | Default | Extra          |
+------------------+--------------+------+-----+---------+----------------+
| id               | bigint       | NO   | PRI | NULL    | auto_increment |
| name             | varchar(255) | YES  |     | NULL    |                |
| company_id       | bigint       | YES  | MUL | NULL    |                |
| brand_id         | bigint       | YES  | MUL | NULL    |                |
| category_id      | bigint       | YES  | MUL | NULL    |                |
| country_id       | bigint       | YES  | MUL | NULL    |                |
| image_url        | text         | YES  |     | NULL    |                |
| origin_image_url | text         | YES  |     | NULL    |                |
| price            | bigint       | YES  |     | NULL    |                |
| description      | text         | YES  |     | NULL    |                |
| composition      | text         | YES  |     | NULL    |                |
| capacity         | varchar(255) | YES  |     | NULL    |                |
| size             | varchar(255) | YES  |     | NULL    |                |
| product_status   | int          | NO   |     | 1       |                |
| discontinued_on  | date         | YES  |     | NULL    |                |
| created_at       | datetime(6)  | NO   |     | NULL    |                |
| updated_at       | datetime(6)  | NO   |     | NULL    |                |
+------------------+--------------+------+-----+---------+----------------+
17 rows in set (0.00 sec)

mysql>
mysql> describe replaces_products;
+----------------+-------------+------+-----+---------+----------------+
| Field          | Type        | Null | Key | Default | Extra          |
+----------------+-------------+------+-----+---------+----------------+
| id             | bigint      | NO   | PRI | NULL    | auto_increment |
| old_product_id | bigint      | NO   | MUL | NULL    |                |
| new_product_id | bigint      | NO   | MUL | NULL    |                |
| source_kind    | int         | NO   |     | 0       |                |
| created_at     | datetime(6) | NO   |     | NULL    |                |
| updated_at     | datetime(6) | NO   |     | NULL    |                |
+----------------+-------------+------+-----+---------+----------------+
6 rows in set (0.01 sec)

mysql>
mysql> describe reviews;
+-------------------------+-------------+------+-----+---------+----------------+
| Field                   | Type        | Null | Key | Default | Extra          |
+-------------------------+-------------+------+-----+---------+----------------+
| id                      | bigint      | NO   | PRI | NULL    | auto_increment |
| product_id              | bigint      | NO   | MUL | NULL    |                |
| discontinued_product_id | bigint      | NO   | MUL | NULL    |                |
| user_id                 | bigint      | NO   |     | NULL    |                |
| comment                 | text        | NO   |     | NULL    |                |
| anonymous               | tinyint(1)  | NO   |     | 0       |                |
| created_at              | datetime(6) | NO   |     | NULL    |                |
| updated_at              | datetime(6) | NO   |     | NULL    |                |
+-------------------------+-------------+------+-----+---------+----------------+
8 rows in set (0.00 sec)

mysql>
mysql> describe schema_migrations;
+---------+--------------+------+-----+---------+-------+
| Field   | Type         | Null | Key | Default | Extra |
+---------+--------------+------+-----+---------+-------+
| version | varchar(255) | NO   | PRI | NULL    |       |
+---------+--------------+------+-----+---------+-------+
1 row in set (0.01 sec)

mysql> describe users;
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | bigint       | NO   | PRI | NULL    | auto_increment |
| name       | varchar(255) | YES  |     | NULL    |                |
| email      | varchar(255) | YES  | UNI | NULL    |                |
| uid        | varchar(255) | YES  | UNI | NULL    |                |
| created_at | datetime(6)  | NO   |     | NULL    |                |
| updated_at | datetime(6)  | NO   |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+
6 rows in set (0.00 sec)

mysql> describe users_favorites;
+------------+-------------+------+-----+---------+----------------+
| Field      | Type        | Null | Key | Default | Extra          |
+------------+-------------+------+-----+---------+----------------+
| id         | bigint      | NO   | PRI | NULL    | auto_increment |
| user_id    | bigint      | NO   | MUL | NULL    |                |
| product_id | bigint      | NO   |     | NULL    |                |
| created_at | datetime(6) | NO   |     | NULL    |                |
| updated_at | datetime(6) | NO   |     | NULL    |                |
+------------+-------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)

mysql> describe users_products;
+---------------+-------------+------+-----+---------+----------------+
| Field         | Type        | Null | Key | Default | Extra          |
+---------------+-------------+------+-----+---------+----------------+
| id            | bigint      | NO   | PRI | NULL    | auto_increment |
| user_id       | bigint      | YES  | MUL | NULL    |                |
| product_id    | bigint      | YES  | MUL | NULL    |                |
| repeats       | int         | NO   |     | 0       |                |
| registered_at | date        | YES  |     | NULL    |                |
| created_at    | datetime(6) | NO   |     | NULL    |                |
| updated_at    | datetime(6) | NO   |     | NULL    |                |
+---------------+-------------+------+-----+---------+----------------+
7 rows in set (0.01 sec)

mysql> describe users_profiles ;
+--------------------------+-------------+------+-----+---------+----------------+
| Field                    | Type        | Null | Key | Default | Extra          |
+--------------------------+-------------+------+-----+---------+----------------+
| id                       | bigint      | NO   | PRI | NULL    | auto_increment |
| user_id                  | bigint      | NO   | MUL | NULL    |                |
| skin_type                | int         | NO   |     | 0       |                |
| skin_color               | int         | NO   |     | 0       |                |
| hair_type                | int         | NO   |     | 0       |                |
| facial_feature           | int         | NO   |     | 0       |                |
| age                      | int         | NO   |     | 0       |                |
| favorites_cosmetics_type | int         | NO   |     | 0       |                |
| gender                   | int         | NO   |     | 0       |                |
| physique                 | int         | NO   |     | 0       |                |
| created_at               | datetime(6) | NO   |     | NULL    |                |
| updated_at               | datetime(6) | NO   |     | NULL    |                |
+--------------------------+-------------+------+-----+---------+----------------+
12 rows in set (0.01 sec)

```

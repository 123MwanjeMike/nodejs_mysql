# Nodejs with MySQL

## Setup
1. Create a mysql database of your choice:
```
CREATE DATABASE <<database_name_here>>;
```

2. Select to use your created database above:
 ```
 USE <<database_name_here>>;
 ```

3. Create the customers table:
```
CREATE TABLE IF NOT EXISTS `customers` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  active BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

4. Create a `.env` file with all the variables as listed in `./.env.example` and fill in their values respectively.

5  Run the start script
```
npm run start
```

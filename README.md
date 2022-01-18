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

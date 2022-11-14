CREATE TABLE
  `vehicles` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `type` varchar(255) DEFAULT NULL,
    `license_plate` varchar(255) DEFAULT NULL,
    `chassis` varchar(255) DEFAULT NULL,
    `renavam` varchar(255) DEFAULT NULL,
    `year` varchar(4) DEFAULT NULL,
    `category` varchar(255) DEFAULT NULL,
    `color` varchar(255) DEFAULT NULL,
    `steering_wheel` varchar(255) DEFAULT NULL,
    `username` varchar(255) DEFAULT NULL,
    `motor` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci

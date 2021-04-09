<?php

class Sql extends \PDO
{

    const HOSTNAME = "localhost";
    const PORT = "3306";
    const USERNAME = "root";
    const PASSWORD = "";
    const DBNAME = "dbsos";

    private $conn;

    public function __construct($HOSTNAME = Sql::HOSTNAME, $USERNAME = Sql::USERNAME, $PASSWORD = Sql::PASSWORD, $DBNAME = Sql::DBNAME)
    {

        $this->conn = new \PDO(
            "mysql:dbname=" . $DBNAME . ";host=" . $HOSTNAME . ";charset=utf8",
            $USERNAME,
            $PASSWORD
        );
    }

    private function setParams($statement, $parameters = array())
    {

        foreach ($parameters as $key => $value) {

            $this->bindParam($statement, $key, $value);
        }
    }

    private function bindParam($statement, $key, $value)
    {

        $statement->bindParam($key, $value);
    }

    public function query($rawQuery, $params = array())
    {

        $stmt = $this->conn->prepare($rawQuery);

        $this->setParams($stmt, $params);

        $stmt->execute();
    }

    public function select($rawQuery, $params = array())
    {

        $stmt = $this->conn->prepare($rawQuery);

        $this->setParams($stmt, $params);

        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}

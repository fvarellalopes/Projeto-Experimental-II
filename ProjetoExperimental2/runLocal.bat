mvn clean package -U
java -jar target/dependency/webapp-runner.jar target/*.war
pause
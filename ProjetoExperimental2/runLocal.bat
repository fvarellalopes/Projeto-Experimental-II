call mvn clean package -U -T 2C
call java -jar target/dependency/webapp-runner.jar target/*.war
pause
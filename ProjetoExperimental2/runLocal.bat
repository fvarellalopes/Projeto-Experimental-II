call mvn clean package -U
call java -jar target/dependency/webapp-runner.jar target/*.war
pause
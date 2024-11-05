FROM ubuntu:latest AS build
RUN apt-get update
RUN apt-get install openjdk-21-jdk -y
RUN apt-get install maven -y
COPY . .
RUN mvn clean package

FROM openjdk:21-jdk-slim
EXPOSE 8080
COPY --from=build /target/BioCundi.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]


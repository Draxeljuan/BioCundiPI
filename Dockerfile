# Etapa de construcción
FROM maven:3.8.5-openjdk-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Etapa de ejecución
FROM openjdk:21-jdk-slim
WORKDIR /app
EXPOSE 8080
COPY --from=build /app/target/BioCundi.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]

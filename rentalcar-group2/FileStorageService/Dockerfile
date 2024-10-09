ARG image_name=FileStorageService

FROM openjdk:17
EXPOSE 8082
WORKDIR /app
ADD target/FileStorageService-0.0.1-SNAPSHOT.jar FileStorageService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "/app/FileStorageService-0.0.1-SNAPSHOT.jar"]

LABEL image.name=$image_name
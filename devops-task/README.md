
# Node.js Web Application with Express.js and Redis

This project is a Node.js web application built with Express.js and Redis. It includes configuration files for .gitignore and .dockerignore. The CI/CD process is managed using GitLab CI with the configuration defined in the `gitlab-ci.yml` file. Additionally, there is a `Dockerfile` and Docker stack configuration for building and deploying the application.

## Project Structure

- **.gitignore**: Specifies files and directories to be ignored by Git.
- **.dockerignore**: Specifies files and directories to be ignored by Docker.
- **Dockerfile**: Defines the Docker image for the application.
- **docker-compose.yml**: Configuration for Docker Stack.
- **gitlab-ci.yml**: GitLab CI configuration for automating the build and deployment process.

## Building the Docker Image

To build the Docker image manually and push it to the image registry, follow these steps:

1. **Build the Docker Image**:
   ```bash
   docker build -t 192.168.0.1:5000/app:latest .
   ```

2. **Push the Docker Image to the Registry**:
   ```bash
   docker push 192.168.0.1:5000/app:latest
   ```

## Deploying the Docker Stack

To deploy the Docker stack manually, use the following command:

   ```bash
   docker stack deploy -c docker-compose.yml my-stack
   ```

## Notes

- Ensure Docker and Docker Swarm installed on your machine.
- Make sure you have access to the Docker image registry at `192.168.0.1:5000`.
- Replace `my-stack` with the desired name for your Docker stack.

## Additional Information

For more detailed information about the project structure, dependencies, and usage, please refer to the individual files within the codebase.



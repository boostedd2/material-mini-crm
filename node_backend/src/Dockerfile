# Use a Node.js base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the environment variable
ENV NODE_ENV=development

# Expose the port your application listens on
EXPOSE 3000

# Start the application with Nodemon
CMD ["npm", "start"]

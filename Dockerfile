# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if you use yarn)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React (TypeScript) app
RUN npm run build

# Install 'serve' to serve the static build
RUN npm install -g serve

# Expose port 5000
EXPOSE 5000

# Start the app using 'serve'
CMD ["serve", "-s", "build", "-l", "5000"]
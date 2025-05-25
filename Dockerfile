# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app for production
RUN npm run build

# Expose port and run the app
EXPOSE 3000
CMD ["npm", "start"]

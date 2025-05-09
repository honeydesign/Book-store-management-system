# Book Store API Documentation

This project includes comprehensive API documentation using the OpenAPI 3.0 specification.

## Accessing the API Documentation

### Option 1: Swagger UI (Interactive)

The API documentation is available through a Swagger UI interface at:

\`\`\`
http://localhost:3000/docs
\`\`\`

This interactive documentation allows you to:
- Browse all available endpoints
- See request and response schemas
- Test API endpoints directly from the browser

### Option 2: Raw OpenAPI Specification

You can also access the raw OpenAPI specification in JSON format at:

\`\`\`
http://localhost:3000/api/docs/spec
\`\`\`

This is useful if you want to import the API specification into other tools.

## Using the Documentation

The API documentation is organized by tags:
- **Authentication**: User signup, login, and logout
- **Users**: User profile management
- **Books**: Book management operations
- **Purchases**: Purchase operations
- **Wishlist**: Wishlist operations

Each endpoint includes:
- Description of what the endpoint does
- Required parameters
- Request body schema (for POST/PATCH requests)
- Response schemas
- Possible error responses

## Authentication

Most endpoints require authentication. The API uses cookie-based authentication.
After logging in, the authentication cookie is automatically included in subsequent requests.

## Generating API Clients

You can use the OpenAPI specification to generate client libraries for various programming languages.
Tools like [OpenAPI Generator](https://openapi-generator.tech/) can be used to generate client code.

Example:
\`\`\`bash
npx @openapitools/openapi-generator-cli generate -i http://localhost:3000/api/docs/spec -g typescript-fetch -o ./client
\`\`\`

This will generate a TypeScript client for your API.

# Application Backlog

## 1. Homepage

### Feature: Display carousel with auto-scroll functionality
- **Priority**: High
- **Status**: In progress
- **Description**: Implement a carousel on the homepage using the ShadCN components and integrate it with the Embla AutoScroll plugin to auto-scroll logos.
- **Tasks**:
  - [x] Install Embla Carousel and AutoScroll plugin.
  - [x] Create a logo carousel with looping functionality.
  - [ ] Implement user controls to start/stop auto-scroll.

### Bug: Auto-scroll not initialized correctly
- **Priority**: Medium
- **Status**: To Do
- **Description**: Ensure the auto-scroll starts when the page loads and loops through the logos every 2 seconds.
- **Tasks**:
  - [ ] Investigate if Embla plugin is properly initialized.
  - [ ] Fix any conflicts between ShadCN carousel and Embla plugin.

---

## 2. Shop Page (Product List)

### Feature: Display a list of products with pagination
- **Priority**: High
- **Status**: To Do
- **Description**: Build a product list page where users can view all products with pagination.
- **Tasks**:
  - [ ] Fetch products from JSON file or API.
  - [ ] Implement pagination to show a limited number of products per page.
  - [ ] Integrate search and filtering options for categories and price ranges.
  - [ ] Add sorting options (e.g., by price, popularity).

### Bug: Product data not loading properly
- **Priority**: Medium
- **Status**: In progress
- **Description**: Product data from the JSON file is not loading correctly due to an undefined state.
- **Tasks**:
  - [x] Fix the state handling in `useEffect` for loading products.
  - [ ] Ensure pagination and filtering work correctly.

---

## 3. Product Item Page

### Feature: Product details page with dynamic routing
- **Priority**: High
- **Status**: In progress
- **Description**: Display detailed information about a product, such as name, description, price, and specifications.
- **Tasks**:
  - [x] Set up dynamic routes to load product details based on product ID.
  - [ ] Fetch product data based on the dynamic route.
  - [ ] Show relevant product details (name, price, form, brand, etc.).

### Bug: 404 error on product detail page
- **Priority**: Medium
- **Status**: To Do
- **Description**: Clicking on a product card in the product list leads to a 404 page, even though the route is correct.
- **Tasks**:
  - [ ] Investigate and fix dynamic routing issues.
  - [ ] Ensure `useRouter` correctly identifies the product ID.

---

## 4. Search Page (Search Results)

### Feature: Display search results based on user input
- **Priority**: High
- **Status**: Planned
- **Description**: Allow users to search for products and show relevant search results with pagination.
- **Tasks**:
  - [ ] Implement a search bar on the homepage and shop page.
  - [ ] Fetch search results from the product data based on user input.
  - [ ] Paginate the search results if needed.

---

## 5. Contact Page

### Feature: Simple contact form
- **Priority**: Medium
- **Status**: Planned
- **Description**: Create a contact page with a form that allows users to send inquiries.
- **Tasks**:
  - [ ] Add a contact form with fields like Name, Email, Message.
  - [ ] Implement form validation.
  - [ ] Ensure form submission triggers an email or API request.

---

## 6. Authentication Page

### Feature: Add user authentication and login
- **Priority**: Medium
- **Status**: Planned
- **Description**: Add user authentication for purchasing products or viewing special product details.
- **Tasks**:
  - [ ] Implement a login page.
  - [ ] Secure routes for logged-in users to access their product purchases.
  - [ ] Implement session or token-based authentication.

---

## 7. Admin Dashboard

### Feature: Admin dashboard to manage products
- **Priority**: Low
- **Status**: Planned
- **Description**: Build an admin dashboard where admins can manage products, view sales, and user data.
- **Tasks**:
  - [ ] Create a dashboard layout with navigation.
  - [ ] Add product management features (CRUD: Create, Read, Update, Delete).
  - [ ] Display product statistics, user data, and sales insights.
  
---

## 8. Performance and SEO

### Feature: Optimize performance and page load speed
- **Priority**: Low
- **Status**: To Do
- **Description**: Optimize product listing, images, and carousel to ensure fast load times.
- **Tasks**:
  - [ ] Implement lazy loading for product images and carousel images.
  - [ ] Minimize the use of large images and reduce the initial bundle size.

### Enhancement: Implement SEO best practices
- **Priority**: Low
- **Status**: To Do
- **Description**: Ensure that the product pages and other components are SEO-friendly.
- **Tasks**:
  - [ ] Add meta tags, alt text for images, and structured data for product pages.
  - [ ] Optimize URL structure and ensure each product has a clean, readable URL.

# Back-End Backlog

## 1. Data Model
- **Priority**: High
- **Status**: Finished
- **Description**: Create models and context to generate Database and import data from CSV files.
- **Tasks**:
  - [x] Creation of the data model based on the MCD.
  - [x] Creation of the connect class to generate the tables in the database and persist the data.
  - [x] Added function to import data.

## 2. Controller
- **Priority**: High
- **Status**: In progress
- **Description**: API entry point.
- **Tasks**:
  - [x] Creation of controllers by model.
  - [ ] customizing controllers according to front-end needs.

## 3. JWT
- **Priority**: High
- **Status**: In progress
- **Description**: Generate Token to secure API connexion.
- **Tasks**:
  - [x] Added controller for authentication.
  - [ ] functioning with the User table.

## 4. IIS Deploy
- **Priority**: High
- **Status**: Finished
- **Description**: deploying the API on IIS for a local connection.
- **Tasks**:
  - [x] IIS deployment and configuration.

## 5. Pictures import
- **Priority**: High
- **Status**: In progress
- **Description**: Import pictures from front-end.
- **Tasks**:
  - [ ] Added a controller for upload.
  - [ ] Added upload.
  - [ ] generate URL.

## 6. User account management
- **Priority**: Medium
- **Status**: In progress
- **Description**: Add user account management to secure the application.
- **Tasks**:
  - [x] add model.
  - [ ] Add Controller.
  - [ ] Add interface.

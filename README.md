# MKSG Clothing System

## PHP CRUD Contents

- **Folder**: `./PHP`
  1. **Handle Add Task Action**: PHP script to handle the addition of new tasks to the system.
  2. **Handle Done Task Action**: PHP script to mark tasks as completed within the system.

## To Do List Database

- **Folder**: `./public/database.xml`
  - Contains the XML file used to store and manage the to-do list data.

## Pages

1. **Login Page**: `./src/page.jsx`
   - The main entry point of the application where users log in to access other pages.
2. **Prediction Page**: `./src/pages/prediction-page.jsx`
   - Page where users can view and interact with order status predictions.
3. **Overview Page**: `./src/pages/overview-page.jsx`
   - Provides an overview of key metrics and data visualizations related to the business.
4. **Gallery Page**: `./src/pages/gallery-page.jsx`
   - Displays a gallery of images or other media related to the business.

## JSX (Javascript + XML) Components

- **Components Folder**: `./src/components`

  - Reusable UI components used throughout the application.

  1. **Data Table**: Component for displaying data in a tabular format.
  2. **Datetime**: Component for showing the current date and time.
  3. **To Do List Card (JQuery Fetching Method)**: Component for displaying and managing to-do list items using jQuery for data fetching.
  4. **Filters/Slicer Card**: Component for filtering data displayed in other components.
  5. **Form Dialog**: Component for displaying forms in a dialog box.
  6. **Header**: Component for the header section of the pages.
  7. **KPI Wrapper**: Wrapper component for displaying Key Performance Indicators (KPIs).
  8. **KPI Card**: Individual card component for displaying a specific KPI.
  9. **Month Area/Bar Card**: Component for displaying monthly data in area or bar chart format.
  10. **Order Status Pie Card**: Component for displaying order status distribution in a pie chart.
  11. **Page Links**: Component for navigation links between different pages.
  12. **Projected Visitors Card**: Component for displaying projected visitor data.
  13. **Distance Range Card**: Component for displaying data related to distance ranges.
  14. **Week Area/Bar Card**: Component for displaying weekly data in area or bar chart format.

- **Charts Components Folder**: `./src/components/figures`

  - Contains specific chart components for data visualization.

  1. **Distance Range Bar Chart**: Bar chart for visualizing distance range data.
  2. **Month Area/Bar Chart**: Area or bar chart for visualizing monthly data.
  3. **Order Status Pie Chart**: Pie chart for visualizing the distribution of order statuses.
  4. **Week Area/Bar Chart**: Area or bar chart for visualizing weekly data.
  5. **Projected Visitors Bar Chart**: Bar chart for visualizing projected visitors data.

## Custom Made API Using Python (FastAPI)

1. **Preprocessing of Data for Machine Learning Model**: `./src/api/preprocess.ipynb`
   - Jupyter notebook for preprocessing data used in the machine learning model.
2. **Modeling of Random Forest for Order Status Classification**: `./src/api/modeling.ipynb`
   - Jupyter notebook for building and training the Random Forest model for classifying order status.
3. **Model Exported**: `./src/api/model/random_forest.pkl`
   - The trained Random Forest model saved as a pickle file.
4. **FastAPI Backend**: `./src/api/main.py`
   - Main FastAPI application file that defines the API endpoints.
5. **FastAPI Model Table**: `./src/api/model.py`
   - Defines the database models used by FastAPI.
6. **FastAPI Database Configuration**: `./src/api/database.py`
   - Configuration file for setting up the database connection and session management.
7. **FastAPI Database**: `./src/api/database.db`
   - SQLite database file used by the FastAPI application.

## Hooks to Fetch Data from Backend Python

- **Hooks Folder**: `./src/hooks`

  - Custom React hooks for fetching data from the backend API.

  1. **Use Fetch Data (API Call Fetching Method)**: Hook for making API calls and fetching data from the backend.

## Objects

### Data Mapping

- **Constants Folder**: `./src/constants`
  - Contains constants and mappings used throughout the application.

## Production Build Folder (Minimized Version)

- **Build Folder**: `./src/build`
  - Contains the production build of the application with minimized and optimized files.

## Websites

1. **MKSG Clothing API System**: [https://mksg-clothing.onrender.com/](https://mksg-clothing.onrender.com/)
   - The website where the API for the MKSG Clothing System is hosted.
2. **MKSG Clothing System**: [https://mksg-lifestyle.onrender.com/](https://mksg-lifestyle.onrender.com/)
   - The main website for the MKSG Clothing System, where users can access various features and pages of the application.

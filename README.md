# TicketFlow — React Version

TicketFlow is a clean and lightweight ticket management UI built in **React** with mock authentication and simple state management.  
---

## Features
* Mock Authentication System – Login/signup with LocalStorage persistence.
* Ticket Management Dashboard – Create, Read, Update and  delete tickets.
* Modern Styling – Built with Tailwind CSS for responsive design.
* Accessibility First – WCAG-friendly with proper ARIA attributes and keyboard navigation

##  Frameworks & Libraries Used

- **React** (Vite or Create React App)
- **React Router DOM** – page routing
- **Tailwind CSS** – modern styling
- **LocalStorage** – mock authentication persistence

---
## Live Demo
 https://ticketweb-project.netlify.app/

##  Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/ticketflow.git
cd ticketflow/react
```
### 2. Install Dependencies
```bash
npm install
npm run dev
```
### 3. Start the development server
```bash
npm run dev
```
### 4. Visit the application at http://localhost:5173 (or your configured port)

## Core Components

| Component | Description |
|-----------|-------------|
| `LandingView` | Welcome page with feature overview |
| `LoginView` / `SignupView` | Authentication forms |
| `DashboardView` | Main ticket management interface |
| `TicketsView` | Detailed ticket listings and controls |
| `Header` / `Footer` | Shared layout components |
| `Toast` | Feedback and notification system |

## Accessibility Features
*  All form fields properly labeled
*  Focus styles for keyboard navigation
*  ARIA attributes for screen readers
*  Responsive design across devices
*  Semantic HTML structure

## Known Limitations
* Mock Authentication Only – No real backend API integration
* LocalStorage Persistence – Data resets when browser storage is cleared
* Development Focus – Primarily for demonstration and learning purposes

## Project Goal
* Provide a clean, accessible interface for ticket management concepts

## License
MIT License – See LICENSE file for details.







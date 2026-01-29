# TicketFlow — React Version

TicketFlow is a clean and lightweight ticket management UI built in **React** with mock authentication and simple state management.  
It mirrors the Vue and Twig versions for consistent design and logic.

---

##  Frameworks & Libraries Used

- **React** (Vite or Create React App)
- **React Router DOM** – page routing
- **Tailwind CSS** – modern styling
- **LocalStorage** – mock authentication persistence

---
## Live Demo
  *ticketweb-project.netlify.app*

##  Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/ticketflow.git
cd ticketflow/react
Install Dependencies
npm install
npm run dev

Switching Framework Versions

The project includes three versions:

/react
/vue
/twig

To switch between versions:

React → cd react && npm run dev

Vue → cd vue && npm run dev

Twig → serve with MAMP or Render at http://localhost:8888/ticketflow-twig

UI Components
Component	Description
LandingView.vue	Welcome & feature overview
LoginView.vue	Login page
SignupView.vue	Signup form
DashboardView.vue	Main ticket dashboard
TicketsView.vue	Ticket management
Header/Footer.vue	Shared layout
Toast.vue	Feedback messages
 State Example
{
  mock_user: { email, password },
  ticketapp_session: "mock_token_123"
}

♿ Accessibility

All form fields labeled

Focus styles and ARIA attributes

Responsive & keyboard friendly

 Test User Credentials
Email: admin@test.com
Password: password

 Known Issues

Mock-only login (no API)

LocalStorage resets clear data




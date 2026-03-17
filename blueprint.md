# Turnover App - Project Blueprint

## Overview
The Turnover App provides a modern, dark-themed Leave Turnover Form for employees to seamlessly document their task handoffs and specific client turnovers. It uses a robust Next.js setup with Server Actions (for potential future expansions) and client-side react state to manage dynamic subtasks correctly. The interface provides a beautiful layout focused on readability, sleek component sizing, and accessibility, using Tailwind CSS.

## Features Implemented
- **Basic Information Collection:** Captures task name, vertical, leave type, start/end dates, and descriptions.
- **Conditional Gemini Notes:** Dynamically shows a "Link to Gemini Notes" field when the selected vertical is Client Services, Project Management, Relationship Management, or CSO.
- **Dynamic Client Turnovers:** Users can define a numerical count of clients, which dynamically renders the exact number of subtask components. Each component captures a subtask name, assignee, and description.
- **Dark Mode UI:** Premium aesthetics built using Tailwind CSS dark classes (`bg-gray-900`, `bg-gray-800`, `border-gray-700`, neon accents, shadows).
- **ClickUp User Integration:** Replaces static select dropdowns for "Applicant" and "Lead Assignee" with Searchable Comboboxes powered by the ClickUp API `/team` endpoint. Searching is client-side, dynamic, and incorporates profile pictures. Loading states improve user experience while dependencies are fetched.
- **ClickUp Task Creation:** Submit form to a new custom API route that dynamically resolves ClickUp list IDs per vertical, creates the Main Leave Turnover task containing standard information/Gemini link, and natively builds children subtasks automatically to track each documented client. 
- **Subtask Assignee Resolution:** Extends the `SearchableCombobox` into iterating loop forms so each subtask tracks an explicit ClickUp Team user. It directly routes those IDs to construct native assignments inside the ClickUp tree seamlessly.
- **Success UI Feedback (New):** Replaces the main component payload with an animated, full-page status confirmation after task trees finish building securely into ClickUp natively, guaranteeing data state wipes to prepare for subsequent application rounds safely.
- **Authentication & Authorization:** Implements Google-based OAuth via NextAuth (Auth.js). Access is restricted to verified members of the Skyrocket ClickUp workspace, verified during the sign-in callback.
- **Route Protection:** Uses Next.js Middleware to automatically redirect unauthenticated users to the `/login` page when attempting to access the turnover form or any internal routes.
- **Branded Login Page:** A custom login page styled with Skyrocket branding (logo, dark mode, typography) that provides a secure entry point for authorized members.

## Active Plan & Steps
1. [DONE] Implement middleware for route protection and login redirects.
2. [DONE] Configure NextAuth with Google Provider and ClickUp membership verification.
3. [DONE] Create a branded login page at `/login`.
4. Verify the full authentication flow (Redirect -> Login -> Callback -> Access).
5. Ensure session persistence and handle edge cases (e.g., session expiration).

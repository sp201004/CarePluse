<div align="center">
  <br />
    <a>
      <img src="https://github.com/user-attachments/assets/fb1991c8-22b9-4764-aa10-707a89532e89" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>

  <h3 align="center">CarePluse — A HealthCare Management System</h3>

   <div align="center">
     <em>Behind every appointment is a life that matters!</em>
    </div>
</div>


## <a name="introduction">🤖 Introduction</a>

CarePluse is a comprehensive and modern healthcare management system designed to streamline the entire appointment lifecycle for both patients and administrators. Built using cutting-edge technologies like Next.js, Appwrite, and TailwindCSS, CarePluse delivers a fast, secure, and user-friendly experience.

This platform empowers patients to seamlessly register, search for available doctors, book new appointments, and receive real-time notifications — all from the comfort of their device. On the other side, administrators can efficiently monitor and manage patient appointments, confirm or reschedule bookings, send SMS confirmations, and maintain an organized healthcare workflow.

## <a name="tech-stack">⚙️ Tech Stack</a>

## Technology Stack
- **Frontend Framework**: Next.js 14 with TypeScript
- **Styling**: TailwindCSS + ShadCN UI Components
- **Backend Services**: Appwrite (Authentication, Database, Storage)
- **Notifications**: Twilio SMS Integration
- **Monitoring**: Sentry for performance tracking and error reporting
- **Type Safety**: TypeScript

## Project Structure
```
CarePluse/
├── app/                  # Next.js app directory (pages and routing)
├── components/          # Reusable UI components
├── constants/          # Application constants
├── lib/               # Utility functions and configurations
├── public/            # Static assets
├── types/             # TypeScript type definitions
└── ...configuration files
```

## <a name="features">🔋 Features</a>

CarePluse is packed with features that ensure an efficient, secure, and user-friendly healthcare experience for both patients and administrators:

- **👤 Patient Registration**  
  Users can register and create a personalized patient profile to manage their healthcare journey.

- **📅 Book Appointments with Doctors**  
  Patients can schedule one or multiple appointments with doctors based on availability and preference.

- **🗂️ Admin-Side Appointment Management**  
  A dedicated admin panel enables healthcare staff to view and manage all patient appointments efficiently.

- **✅ Confirm & Schedule Appointments**  
  Admins can confirm and assign exact timings to appointments, ensuring a well-organized schedule.

- **❌ Cancel Appointments**  
  Administrators can cancel appointments with just a few clicks when necessary.

- **📲 SMS Notifications**  
  Patients receive real-time SMS confirmations powered by Twilio for every scheduled appointment.

- **📱 Fully Responsive UI**  
  The application is fully responsive and optimized for mobile, tablet, and desktop usage.

- **📁 File Upload with Appwrite Storage**  
  Securely upload and store medical files or documents using Appwrite’s cloud storage.

- **📊 Real-Time Monitoring via Sentry**  
  Track errors and monitor app performance in real time using Sentry integration.

- **🧱 Scalable & Modular Architecture**  
  Built with reusable components and clean architecture for easier maintenance and scalability.

- **🌐 Environment Configuration**  
  Easily configurable using environment variables to adapt across different stages — development, staging, and production.

- **🔐 Admin Access with Passkey**  
  Admin dashboard is protected using a passkey stored securely in cookies to restrict unauthorized access.

- **🎨 Built with Modern Stack**  
  Uses the latest technologies including Next.js, Appwrite, TailwindCSS, ShadCN, and TypeScript to ensure performance and maintainability.

> ...and many more features to ensure seamless operation, maintainable code, and a delightful user experience.


## Core Features

### Patient Features
- User registration and authentication
- Appointment booking system
- Profile management
- File upload capability
- Appointment history tracking

### Administrative Features
- Appointment management dashboard
- Scheduling and confirmation system
- Appointment cancellation
- SMS notification system
- Patient records management

### Technical Features
- Responsive design for all devices
- Secure file storage with Appwrite
- Real-time performance monitoring with Sentry
- Type-safe development with TypeScript
- Modern UI components with ShadCN
- Server-side rendering with Next.js

## Setup Requirements
- Node.js
- npm/yarn
- Appwrite account
- Twilio account (for SMS)
- Sentry account (for monitoring)


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/healthcare.git
cd healthcare
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=654321
```
# Additional configurations for Twilio and Sentry
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Production Deployment
- Configure Sentry for production monitoring
- Set up Appwrite production environment
- Configure Twilio SMS services
- Deploy using your preferred hosting service

## Security Features
- Secure authentication with Appwrite
- Protected admin routes
- Secure file storage
- Environment variable protection
- Type-safe API calls

## Performance Optimization
- Server-side rendering
- Image optimization
- Code splitting
- Performance monitoring with Sentry

  ## 🌟 Show your support

Give a ⭐️ if this project helped you!

<div align="center">
Built with ❤️ by the Surya
</div>

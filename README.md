# Q-Commerce Restaurant

## 📌 Project Overview
This project is a **Q-Commerce (Quick Commerce) Restaurant Website**, designed to provide a seamless online food ordering experience.

## 🏗️ Project Structure
```
q-commerce-restaurant/
│-- public/             # Static assets (images)
│-- src/
│   ├── app/           # Application pages & routes
│   │   ├── api/       # API handlers
│   │   ├── shop/      # Shop main route
│   │   │   ├── [food_id]/  # Dynamic food item pages
│   │   ├── ourchef/   # Our Chef page
│   ├── components/    # Reusable UI components
│   ├── utils/         # Utility functions
│   ├── sanity/        # CMS
│-- .env               # Environment variables
│-- next.config.js     # Next.js configuration
│-- package.json       # Project dependencies & scripts
│-- README.md          # Project documentation (this file)
```

## 🚀 Features
- 📜 **Dynamic Menu** – Browse restaurant menu items
- 🌐 **API Integration** – Fetch dynamic restaurant data from **Sanity CMS**
- 📱 **Responsive Design** – Mobile-friendly UI
- ⚡ **Optimized Performance** – Fast-loading pages

## ⚙️ Technologies Used
- **Next.js** – React-based framework for SSR & SSG
- **TypeScript** – Type safety for better development
- **Tailwind CSS** – Utility-first styling
- **Shadcn UI** – Modern UI components
- **Sanity CMS** – Backend for dynamic content

## 🛠 Installation & Setup
### 1️⃣ Clone the repository:
```bash
git clone https://github.com/MehreenMunsifAli/Nextjs_Design_Jam_2024.git
cd Nextjs_Design_Jam_2024
```

### 2️⃣ Install dependencies:
```bash
npm install  # or yarn install
```

### 3️⃣ Set up environment variables:
Create a `.env` file in the root directory and add:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com
NEXT_PUBLIC_SANITY_API_TOKEN=your_sanity_project_token
```

### 4️⃣ Run the development server:
```bash
npm run dev  # or yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔗 API Endpoints
| Endpoint        | Description                     |
|-----------------|---------------------------------|
| `/api/shop`     | Fetch restaurant menu items     |
| `/api/shop/{id}`| Fetch individual product detail |

## 📢 Contributing
Contributions are welcome! Feel free to **fork, submit PRs, or open issues**.
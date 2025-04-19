<div align="center">
 <img src="https://github.com/user-attachments/assets/d9942d91-735e-48c0-9630-6829d47ec2bd" alt="memoa" style="margin-right: 10px;">
</div>

<p align="center">
    <strong> Memoa is a Notion-inspired app designed to streamline <br/> workflow organization and effortless note-taking.</strong>
</p>

https://github.com/user-attachments/assets/e1432f95-2c54-4fea-89dd-1bf3d1a2eb52

---

## 📦 Installation

1. **Clone the repository:**  
```bash
git clone https://github.com/Ukhang/memoa.git
cd memoa
```

2. **Install the dependencies:**  
```bash
npm install
```

3. **Set up the environment variables:**  
Create a `.env.local` file in the root directory and add:
```env
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

4. **Run Convex:**  
```bash
npx convex dev
```

5. **Run the development server:**  
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Tech Stack

- **Next.js** - Framework for building React applications
- **TypeScript** - Strongly typed superset of JavaScript
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Convex** - Backend-as-a-Service for real-time data management
- **Clerk** - User authentication and management solution
- **Edge Store** - Secure and scalable file storage system

## Features

### Productivity and Organization

- Notion-style editor for efficient note-taking
- Support for infinite nested documents to create hierarchical structures
- Expandable and collapsible sidebar for intuitive navigation
- Real-time customizable icons for each document
- Soft delete functionality with a trash bin and recovery options

### User Experience

- Light and dark modes to match user preferences
- Fully responsive design optimized for mobile devices
- Dedicated landing page for an engaging entry point
- Personalizable cover images for individual documents

### Data Management

- Real-time database updates for seamless data handling
- Options to upload, delete, and replace files effortlessly

### Security and Sharing

- Secure user authentication to protect notes
- Ability to publish notes publicly for easy sharing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## 🙌 Acknowledgements

- Inspired by [Notion](https://www.notion.so/)
- Thanks to the open-source community for continuous support

---

<div align="center">
    Made with ❤️ by Ukhang Marma
</div>

# 🔥 Trenzon – "Where Trends Live" 💬  
A modern eCommerce experience built with **React Native**. Seamlessly browse, shop, and manage your cart with intuitive design and lightning performance.

---

## 🎥 Live Walkthrough

👉 [Watch Demo on Google Drive](https://your-drive-link-here.com)

---

## 📱 About the App

Trenzon is a **fully functional eCommerce mobile app** built using **React Native**, integrating **Firebase authentication**, **context-based cart management**, and **persistent local storage**. The app features:

- 🔐 **User Authentication**
- 🛒 **Add to Cart, Remove from Cart**
- 👕 **Select Product Size & Color**
- 🧭 **Stack + Tab Navigation**
- 💾 **User-specific persistent cart using AsyncStorage**
- 🧠 **Context API-based global state**
- 🔍 **Search & Sort Products**
- 🧍 **Gender & Category Filters**
- 🎨 **Clean, user-friendly UI**

---


## 📦 Upcoming Features

> Already in progress/planned:
- 📍 Location Access with **Map Integration**
- 👤 Profile Page with order history
- 💳 Pay on Delivery (Cash on Delivery)
- 📦 Reordering previous items

---

## 🧠 Tech Stack

| Tech             | Usage                                  |
|------------------|-----------------------------------------|
| React Native     | Cross-platform mobile development       |
| Firebase         | Authentication                         |
| AsyncStorage     | Local per-user cart persistence         |
| Context API      | Global state management (Cart, Auth)    |
| React Navigation | Stack & Bottom Tab navigation           |

---

## Run the App

npx react-native run-android
or
npx react-native run-ios


## 👨‍💻 Developer

Made with ❤️ by Akshay Shinde
📧 Feel free to reach out for collaborations, feedback, or questions!


## 📬 Feedback & Contributions

Pull requests and suggestions are welcome!
Let's make Trenzon the next big shopping experience 📈


## 🧭 Folder Structure

```plaintext
EcomApp/
├── src/
│   ├── assets/               # Images & icons
│   ├── components/           # Reusable UI components
│   │   ├── CartCard.jsx
│   │   ├── Category.jsx
│   │   ├── Header.jsx
│   │   └── Products.jsx
│   ├── context/
│   │   └── CartContext.js    # Global cart context
│   ├── data/                 # Reserved for product/mock data
│   ├── navigators/           # All navigation configurations
│   │   ├── MyStack.jsx
│   │   ├── MyTabs.jsx
│   │   └── RootNavigator.jsx
│   ├── screens/              # App screens
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   ├── LoginScreen.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── ProfileScreen.jsx
│   │   ├── ReorderScreen.jsx
│   │   └── SignUpScreen.jsx
│   └── App.jsx               # App entry point
├── .eslintrc.js
├── .prettierrc.js
├── .watchmanconfig
├── app.json
└── .gitignore
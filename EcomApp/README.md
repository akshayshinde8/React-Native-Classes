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

| Tech         | Usage                                |
|--------------|---------------------------------------|
| React Native | App development                       |
| Firebase     | Authentication                        |
| AsyncStorage | Local per-user cart persistence       |
| Context API  | Global state management (Cart)        |
| React Navigation | Stack & Bottom Tab navigation     |

---

## 🧭 Folder Structure

Here's how the codebase is organized:

EcomApp/ │ ├── src/ │ ├── assets/ # Images & icons │ ├── components/ # Reusable UI components │ │ ├── CartCard.jsx │ │ ├── Category.jsx │ │ ├── Header.jsx │ │ └── Products.jsx │ │ │ ├── context/ │ │ └── CartContext.js # Global cart context │ │ │ ├── data/ # (Reserved for mock/product data) │ │ │ ├── navigators/ # Navigation files │ │ ├── MyStack.jsx │ │ ├── MyTabs.jsx │ │ └── RootNavigator.jsx │ │ │ └── screens/ # All app screens │ ├── Cart.jsx │ ├── Home.jsx │ ├── LoginScreen.jsx │ ├── ProductDetails.jsx │ ├── ProfileScreen.jsx │ ├── ReorderScreen.jsx │ └── SignUpScreen.jsx │ ├── App.jsx # Entry point ├── .eslintrc.js ├── .prettierrc.js ├── .watchmanconfig ├── app.json └── .gitignore
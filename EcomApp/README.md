# 🔥 Trenzon – "Where Trends Live" 💬  
A modern eCommerce experience built with **React Native**. Seamlessly browse, shop, and manage your cart with intuitive design and lightning performance.

---

## 🎥 Live Walkthrough

👉 [Watch Demo on Google Drive](https://drive.google.com/file/d/1RE394QDGjpmEwEY8rb7sJDIWC5OgpwlY/view?usp=sharing)

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
## 📸 Glimpse and Screenshots of Trenzon
<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1YxyC2f01xIoGxRvdNhLozzZK1KqC0fqb" height="400"/>
  &nbsp;&nbsp;&nbsp;
  <img src="https://drive.google.com/uc?export=view&id=179kO6LPIsEnY6FBSnOgB4ZpMFq9wmDPY" height="400"/>
</p>
<p align="center">
  <b>Sign Up Page</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <b>Log In Page</b>
</p>

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1SxlNHJdOncScX9Rtc2z-IWMUkiF4zZ25" height="400"/>
  &nbsp;&nbsp;&nbsp;
  <img src="https://drive.google.com/uc?export=view&id=1-Al58WhaFhiNibsnkWFm0wUSCg-Dn3hQ" height="400"/>
  &nbsp;&nbsp;&nbsp;
  <img src="https://drive.google.com/uc?export=view&id=11Dsuws3yuarlLoTp65uqeT1GfRHZY32G" height="400"/>
</p>
<p align="center">
  <b>Home Page</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <b>Cart Page</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <b>Product Details Page</b>
</p>


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
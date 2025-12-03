// --- FILE: firebaseconfig.js ---

// 1. BAGIAN IMPORT (Mengambil semua alat yang dibutuhkan dari internet)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, // Tambahan: Biar nav-logic.js bisa baca data
    query, 
    where, 
    onSnapshot, 
    doc, 
    updateDoc, 
    deleteDoc, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 2. BAGIAN KONFIGURASI (Kunci Rahasia Proyek 'webprojectlayat')
const firebaseConfig = {
  apiKey: "AIzaSyCyz-Xzooz_NurpbiKgkBvDcJeALjuFQUg",
  authDomain: "webprojectlayat.firebaseapp.com",
  projectId: "webprojectlayat",
  storageBucket: "webprojectlayat.firebasestorage.app",
  messagingSenderId: "667319525995",
  appId: "1:667319525995:web:d40df56c335c4e8910072e",
  measurementId: "G-PR1J28N28H"
};

// 3. BAGIAN INISIALISASI (Menyalakan Mesin)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Database
const auth = getAuth(app);    // Login Sistem

// 4. BAGIAN EKSPOR (Menyediakan alat ke file lain)
export { 
    db, auth, signInAnonymously, onAuthStateChanged,
    collection, addDoc, getDocs, query, where, onSnapshot, 
    doc, updateDoc, deleteDoc, serverTimestamp 
};
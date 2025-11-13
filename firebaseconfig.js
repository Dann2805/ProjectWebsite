// --- FILE: firebase-config.js ---

// 1. BAGIAN IMPORT (Gunakan Alamat Lengkap/CDN agar jalan di HTML biasa)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    query, 
    where, 
    onSnapshot, 
    doc, 
    updateDoc, 
    deleteDoc,
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 2. BAGIAN KONFIGURASI (Ini KUNCI RAHASIA dari akun Firebase Anda)
const firebaseConfig = {
  apiKey: "AIzaSyCyz-Xzooz_NurpbiKgkBvDcJeALjuFQUg",
  authDomain: "webprojectlayat.firebaseapp.com",
  projectId: "webprojectlayat",
  storageBucket: "webprojectlayat.firebasestorage.app",
  messagingSenderId: "667319525995",
  appId: "1:667319525995:web:d40df56c335c4e8910072e",
  measurementId: "G-PR1J28N28H"
};

// 3. BAGIAN INISIALISASI (Menyalakan Mesinnya)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Menyalakan Database
const auth = getAuth(app);    // Menyalakan Sistem Login

// 4. BAGIAN EKSPOR (Agar bisa dipakai di contact.html dan history.html)
export { 
    db, auth, signInAnonymously, onAuthStateChanged,
    collection, addDoc, query, where, onSnapshot, 
    doc, updateDoc, deleteDoc, serverTimestamp 
};
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDDeuSNVlNmi7xaDyAlDaplX0GQoJY_sn4",
  authDomain: "performsat-production.firebaseapp.com",
  projectId: "performsat-production",
  storageBucket: "performsat-production.firebasestorage.app",
  messagingSenderId: "579528917036",
  appId: "1:579528917036:web:1d285f40d3fa9b962c9189"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkProgress() {
  try {
    const usersRef = collection(db, 'users');
    const usersSnapshot = await getDocs(usersRef);

    console.log('\n=== USERS ===');
    if (usersSnapshot.empty) {
      console.log('No users found');
    } else {
      usersSnapshot.forEach(doc => {
        console.log(`\nUser ID: ${doc.id}`);
        console.log('Email:', doc.data().email);
        console.log('Role:', doc.data().role);
      });
    }

    const progressRef = collection(db, 'progress');
    const progressSnapshot = await getDocs(progressRef);

    console.log('\n\n=== PROGRESS ===');
    if (progressSnapshot.empty) {
      console.log('No progress documents found - students haven\'t completed any lessons yet');
    } else {
      progressSnapshot.forEach(doc => {
        const data = doc.data();
        console.log(`\nUser ID: ${doc.id}`);
        console.log('Total Lessons Completed:', data.totalLessonsCompleted || 0);
        console.log('Completed Lessons:', Object.keys(data.completedLessons || {}).length);
      });
    }

    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

checkProgress();

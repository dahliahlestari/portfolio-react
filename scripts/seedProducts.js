import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyA0bZkHJwKmjFEjTI4_pUDmzhI1q_KwqsA",
    authDomain: "dahlia-portfolio.firebaseapp.com",
    projectId: "dahlia-portfolio",
    storageBucket: "dahlia-portfolio.firebasestorage.app",
    messagingSenderId: "45662853847",
    appId: "1:45662853847:web:1c6e536fa5b63aff8dae92",
    measurementId: "G-3278SWG48H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = [
    // WEDDING SERIES
    {
        title: "Red Royal Wedding",
        slug: "red-royal-wedding",
        price: "IDR 350.000",
        category: "Wedding Series 01",
        description: "A luxurious deep red and gold invitation template, perfect for elegant evening receptions. Features animation, wax seal motifs, and gold typography.",
        previewLink: "/preview/red-elegant",
        previewImage: "https://placehold.co/600x800/4a0404/d4af37?text=Red+Royal+Wedding",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    },
    {
        title: "Modern Minimal White",
        slug: "modern-minimal-white",
        price: "IDR 150.000",
        category: "Wedding Series 01",
        description: "Clean lines, generous white space, and bold typography. Ideal for modern couples who appreciate simplicity.",
        previewLink: "/preview/modern-minimal",
        previewImage: "https://placehold.co/600x800/ffffff/000000?text=Modern+Minimal",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    },
    {
        title: "Classic Gold",
        slug: "classic-gold",
        price: "IDR 150.000",
        category: "Wedding Series 01",
        description: "Luxurious gold accents combined with traditional layout. A premium choice for formal black-tie weddings.",
        previewLink: "/preview/wedding-01", // Default template
        previewImage: "https://placehold.co/600x800/000000/ffd700?text=Classic+Gold",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    },
    // EVENT SERIES
    {
        title: "Birthday Bash Pink",
        slug: "birthday-bash-pink",
        price: "IDR 100.000",
        category: "Event Series 02",
        description: "Fun, vibrant, and energetic design for birthday parties. Capable of setting the mood for a great celebration.",
        previewLink: "/preview/birthday-bash",
        previewImage: "https://placehold.co/600x800/ff00ff/ffffff?text=Birthday+Bash",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    },
    {
        title: "Corporate Seminar",
        slug: "corporate-seminar",
        price: "IDR 120.000",
        category: "Event Series 02",
        description: "Professional and sleek design suitable for business events, workshops, and seminars.",
        previewLink: "/preview/modern-minimal", // Reusing minimal for corporate
        previewImage: "https://placehold.co/600x800/000080/ffffff?text=Corporate+Seminar",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    },
    {
        title: "Baby Shower",
        slug: "baby-shower",
        price: "IDR 100.000",
        category: "Event Series 02",
        description: "Soft colors and cute illustrations to welcome the new arrival. Heartwarming and inviting.",
        previewLink: "/preview/birthday-bash", // Reusing bash for now
        previewImage: "https://placehold.co/600x800/ffc0cb/ffffff?text=Baby+Shower",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    }
];

async function seed() {
    console.log("Seeding product database...");
    let successCount = 0;

    for (const product of products) {
        try {
            await addDoc(collection(db, "products"), product);
            console.log(`[SUCCESS] Added: ${product.title}`);
            successCount++;
        } catch (e) {
            console.error(`[FAILED] Error adding ${product.title}:`);
            if (e.code === 'permission-denied') {
                console.error(">>> PERMISSION DENIED: Please change your Firebase Firestore Rules to 'allow read, write: if true;' in the console.");
            } else {
                console.error(e);
            }
        }
    }

    console.log(`\nSeeding complete. Successfully added ${successCount} of ${products.length} products.`);
    process.exit(0);
}

seed();

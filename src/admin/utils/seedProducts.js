import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export const productsToSeed = [
    // --- WEDDING SERIES ---
    {
        title: "Red Royal Wedding",
        slug: "red-royal-wedding",
        price: "IDR 350.000",
        category: "Wedding Series 01",
        description: "A luxurious deep red and gold invitation template, perfect for elegant evening receptions. Features animation, wax seal motifs, and gold typography.",
        previewLink: "/preview/red-elegant",
        previewImage: "https://placehold.co/600x800/4a0404/d4af37?text=Red+Royal",
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
        title: "Classic Gold & Black",
        slug: "classic-gold-black",
        price: "IDR 250.000",
        category: "Wedding Series 01",
        description: "Luxurious gold accents combined with traditional black layout. A premium choice for formal black-tie weddings.",
        previewLink: "/preview/wedding-01",
        previewImage: "https://placehold.co/600x800/000000/ffd700?text=Classic+Gold",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    },
    {
        title: "Emerald Garden",
        slug: "emerald-garden-wedding",
        price: "IDR 200.000",
        category: "Wedding Series 01",
        description: "Deep green hues with floral accents. Perfect for garden or outdoor weddings.",
        previewLink: "/preview/red-elegant", // Reusing layout
        previewImage: "https://placehold.co/600x800/004d25/ffd700?text=Emerald+Garden",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    },
    {
        title: "Rustic Wood",
        slug: "rustic-wood-wedding",
        price: "IDR 175.000",
        category: "Wedding Series 01",
        description: "Warm earth tones and wood textures. Best for barn or rustic themed weddings.",
        previewLink: "/preview/modern-minimal",
        previewImage: "https://placehold.co/600x800/8b4513/ffffff?text=Rustic+Wood",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    },
    {
        title: "Vintage Renaissance Arch",
        slug: "vintage-renaissance-arch",
        price: "IDR 400.000",
        category: "Wedding Series 01",
        description: "A Baroque-inspired design featuring cherubs, cloud motifs, and an elegant archway. Perfect for fairytale weddings.",
        previewLink: "/preview/vintage-arch",
        previewImage: "https://images.unsplash.com/photo-1544084944-152696a63339?q=80&w=1000&auto=format&fit=crop", // Using same image as template for consistency
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    },

    // --- EVENT SERIES ---
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
        title: "Sweet 17 Blue",
        slug: "sweet-17-blue",
        price: "IDR 110.000",
        category: "Event Series 02",
        description: "Elegant blue tones for a sophisticated sweet 17 celebration.",
        previewLink: "/preview/birthday-bash",
        previewImage: "https://placehold.co/600x800/0000ff/ffffff?text=Sweet+17",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    },
    {
        title: "Corporate Summit",
        slug: "corporate-summit-2026",
        price: "IDR 150.000",
        category: "Event Series 02",
        description: "Professional and sleek design suitable for business events, workshops, and seminars.",
        previewLink: "/preview/modern-minimal", // Reusing minimal for corporate
        previewImage: "https://placehold.co/600x800/000080/ffffff?text=Corp+Summit",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    },
    {
        title: "Tech Conference",
        slug: "tech-conf-dark",
        price: "IDR 180.000",
        category: "Event Series 02",
        description: "Futuristic dark mode design for technology and startup events.",
        previewLink: "/preview/modern-minimal",
        previewImage: "https://placehold.co/600x800/111111/00ff00?text=Tech+Conf",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    },
    {
        title: "Baby Shower Pastel",
        slug: "baby-shower-pastel",
        price: "IDR 100.000",
        category: "Event Series 02",
        description: "Soft colors and cute illustrations to welcome the new arrival. Heartwarming and inviting.",
        previewLink: "/preview/birthday-bash", // Reusing bash for now
        previewImage: "https://placehold.co/600x800/ffc0cb/ffffff?text=Baby+Shower",
        qrisData: "000201010212000000000000000000",
        createdAt: new Date()
    }
];

export async function seedDatabase() {
    console.log("Starting seed process...");
    let count = 0;
    for (const product of productsToSeed) {
        try {
            // Re-create Date object to ensure it's fresh
            await addDoc(collection(db, "products"), { ...product, createdAt: new Date() });
            count++;
        } catch (error) {
            console.error("Error seeding product:", error);
            throw error;
        }
    }
    return count;
}

// ==========================================
// ⚙️ REAL USER NAME SETTINGS
// Replace these strings with your real names!
// ==========================================
const REAL_NAME_1 = "Tate"; 
const REAL_NAME_2 = "Cooper";

// --- MODULAR DATA CONFIGURATION ---
export const userList = [REAL_NAME_1, REAL_NAME_2];

export const exercisesDataset = [
    // Exercises exclusive to User 1
    { id: "user1_run", name: "Run for 10 Minutes", payout: 120, allowedUsers: [REAL_NAME_1] },
    { id: "user1_jacks", name: "60 Jumping Jacks", payout: 60, allowedUsers: [REAL_NAME_1] },
    
    // Exercises exclusive to User 2
    { id: "user2_pushups", name: "12 Pushups", payout: 60, allowedUsers: [REAL_NAME_2] },
    { id: "user2_pullups", name: "1 Pull-up", payout: 10, allowedUsers: [REAL_NAME_2] }
];

export const shopDataset = [
    // Global computer time items that automatically process the points earned above
    { id: "pc_10", name: "10 Minutes Computer Time", cost: 10, minutes: 10, allowedUsers: ["all"] },
    { id: "pc_60", name: "1 Hour Computer Time", cost: 60, minutes: 60, allowedUsers: ["all"] },
    { id: "pc_120", name: "2 Hours Computer Time", cost: 120, minutes: 120, allowedUsers: ["all"] }
];

// --- EMAILJS CONFIGURATION ---
// Get keys for free at https://emailjs.com
export const EMAILJS_KEYS = {
    PUBLIC_KEY: "79W_m7oGQ5_DoOKyD",
    SERVICE_ID: "theExerciseFunManOWhimsy",
    TEMPLATE_ID: "template_kwxldvs"
};

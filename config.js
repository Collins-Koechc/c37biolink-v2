// c37Biolink Global Platform Configuration
const CONFIG = {
    // 1. Supabase Infrastructure Keys
    SUPABASE_URL: "https://wezfhoyppkiiaaakjyuf.supabase.co",
    SUPABASE_ANON_KEY: "sb_publishable_l_IgDGtmuM2kr5kknjIw4w_ORaUZ1bX",

    // 2. Cloudinary High-Performance Image Optimization Rail
    CLOUDINARY_CLOUD_NAME: "kyyfb33k",
    CLOUDINARY_UPLOAD_PRESET: "c37biolink"
};

// Global Verification Check Rule
if (CONFIG.SUPABASE_URL.includes("YOUR_")) {
    console.warn("c37Biolink Engine: Please replace the placeholder API keys in config.js with your live production credentials.");
}

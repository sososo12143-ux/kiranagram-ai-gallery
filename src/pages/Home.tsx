import { useState } from "react";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/home/Sidebar";
import { Stories } from "@/components/home/Stories";
import { PostCard } from "@/components/home/PostCard";
import { HeroCard } from "@/components/home/HeroCard";
import { DesktopHeader } from "@/components/home/DesktopHeader";
import { MobileBottomNav } from "@/components/home/MobileBottomNav";
import { KiranagraemLogo } from "@/components/KiranagraemLogo";
import { Heart, MessageCircle } from "lucide-react";

const mockPosts = [
  {
    id: "1",
    username: "writings_of_wazir",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    caption: "KALI - Mission 4: The Guardians of Kashmir ✨ #GhibliStyle #AIArt",
    likes: 2847,
    comments: 142,
    timeAgo: "1 w",
    isAI: true,
    likedBy: ["mr_kir_150"],
  },
  {
    id: "2",
    username: "cyber_artist",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800",
    caption: "Neon dreams in the digital realm 🌃 #CyberPunk #AIGenerated",
    likes: 4521,
    comments: 238,
    timeAgo: "4h",
    isVideo: true,
    isAI: true,
  },
  {
    id: "3",
    username: "pixel_wizard",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    caption: "Mountain serenity captured in pixels 🏔️ #DigitalArt #Nature",
    likes: 1893,
    comments: 87,
    timeAgo: "6h",
    isAI: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Left Sidebar - Hover expandable */}
      <Sidebar />

      {/* Desktop Header */}
      <DesktopHeader />

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 bg-background border-b border-border z-40 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <KiranagraemLogo size="sm" />
          <div className="flex items-center gap-4">
            <button className="hover:opacity-70 transition-opacity">
              <Heart size={24} className="text-foreground" />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <MessageCircle size={24} className="text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="md:ml-[72px] pb-20 md:pb-8">
        <div className="max-w-[470px] mx-auto px-0 md:px-4 pt-16 md:pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Stories */}
            <div className="px-4 md:px-0">
              <Stories />
            </div>

            {/* Hero Card */}
            <div className="px-4 md:px-0">
              <HeroCard />
            </div>

            {/* Posts */}
            <div className="space-y-3">
              {mockPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PostCard post={post} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}

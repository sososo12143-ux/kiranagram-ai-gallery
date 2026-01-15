import { useState } from "react";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/home/Sidebar";
import { Stories } from "@/components/home/Stories";
import { PostCard } from "@/components/home/PostCard";
import { RightSidebar } from "@/components/home/RightSidebar";
import { FeedTabs } from "@/components/home/FeedTabs";

const mockPosts = [
  {
    id: "1",
    username: "ghibli_dreamer",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    caption: "Magical forest vibes ✨ Created with AI #GhibliStyle #AIArt",
    likes: 2847,
    comments: 142,
    timeAgo: "2h",
    isAI: true,
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
  {
    id: "4",
    username: "dream_maker",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    caption: "Abstract emotions in visual form 🎨 #AbstractArt #AICreation",
    likes: 3156,
    comments: 164,
    timeAgo: "8h",
    isAI: true,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("for-you");

  return (
    <div className="min-h-screen bg-background">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-[220px] mr-[340px] max-w-[600px] mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Stories */}
          <Stories />

          {/* Feed Tabs */}
          <FeedTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Posts */}
          <div className="space-y-6">
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
      </main>

      {/* Right Sidebar */}
      <div className="fixed right-0 top-0 h-screen w-[340px] overflow-y-auto py-8 px-4 border-l border-border">
        <RightSidebar />
      </div>
    </div>
  );
}

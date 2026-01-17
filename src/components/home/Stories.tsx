import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface Story {
  id: string;
  username: string;
  avatar: string;
  hasNew: boolean;
}

const mockStories: Story[] = [
  { id: "1", username: "Your Story", avatar: "", hasNew: false },
  { id: "2", username: "abhi_kalsi_", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100", hasNew: true },
  { id: "3", username: "akashdeep", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", hasNew: true },
  { id: "4", username: "r_lakz_34", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100", hasNew: true },
  { id: "5", username: "pawankalsi_", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", hasNew: true },
  { id: "6", username: "mr_kash_", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100", hasNew: true },
];

export function Stories() {
  return (
    <div className="mb-4 border-b border-border pb-4">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {mockStories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col items-center gap-1 cursor-pointer flex-shrink-0"
          >
            <div
              className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full p-[2px] ${
                story.hasNew
                  ? "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
                  : "bg-border"
              }`}
            >
              <div className="w-full h-full rounded-full bg-background p-[2px]">
                {story.id === "1" ? (
                  <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center relative">
                    <Plus size={20} className="text-muted-foreground" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-background">
                      <Plus size={12} className="text-white" />
                    </div>
                  </div>
                ) : (
                  <img
                    src={story.avatar}
                    alt={story.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                )}
              </div>
            </div>
            <span className="text-[11px] text-foreground truncate max-w-[64px] text-center">
              {story.username}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

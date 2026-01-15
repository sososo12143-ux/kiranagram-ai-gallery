import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface Story {
  id: string;
  username: string;
  avatar: string;
  hasNew: boolean;
  isLive?: boolean;
}

const mockStories: Story[] = [
  { id: "1", username: "Your Story", avatar: "", hasNew: false },
  { id: "2", username: "ai_artist", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100", hasNew: true, isLive: true },
  { id: "3", username: "ghibli_fan", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", hasNew: true },
  { id: "4", username: "dream_art", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100", hasNew: true },
  { id: "5", username: "pixel_magic", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", hasNew: true },
  { id: "6", username: "cyber_wave", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100", hasNew: false },
];

export function Stories() {
  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-foreground">Stories</h3>
        <span className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
          See All
        </span>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {mockStories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col items-center gap-1 cursor-pointer flex-shrink-0"
          >
            <div
              className={`relative w-14 h-14 rounded-full p-[2px] ${
                story.hasNew
                  ? "bg-gradient-to-tr from-foreground to-muted-foreground"
                  : "bg-border"
              }`}
            >
              <div className="w-full h-full rounded-full bg-background p-[2px]">
                {story.id === "1" ? (
                  <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                    <Plus size={20} className="text-foreground" />
                  </div>
                ) : (
                  <img
                    src={story.avatar}
                    alt={story.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                )}
              </div>
              {story.isLive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-destructive text-destructive-foreground text-[9px] px-1.5 py-0.5 rounded font-semibold uppercase">
                  Live
                </span>
              )}
            </div>
            <span className="text-[11px] text-muted-foreground truncate max-w-[60px]">
              {story.username}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

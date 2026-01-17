import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark,
  MoreHorizontal,
  Play
} from "lucide-react";

interface Post {
  id: string;
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
  isVideo?: boolean;
  isAI?: boolean;
  likedBy?: string[];
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl overflow-hidden border border-border"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-border">
            <img
              src={post.avatar}
              alt={post.username}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">
              {post.username}
            </span>
            {post.likedBy && (
              <span className="text-xs text-muted-foreground">
                and {post.likedBy[0]}
              </span>
            )}
            <span className="text-xs text-muted-foreground">• {post.timeAgo}</span>
          </div>
        </div>
        <button className="p-1.5 hover:bg-secondary rounded-full transition-colors">
          <MoreHorizontal size={20} className="text-muted-foreground" />
        </button>
      </div>

      {/* Image/Video */}
      <div className="relative aspect-square bg-secondary">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-full object-cover"
        />
        {post.isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-background/80 flex items-center justify-center backdrop-blur-sm">
              <Play size={32} className="text-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        )}
        {post.isAI && (
          <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground text-[10px] px-2 py-1 rounded-full font-medium">
            AI Generated
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className="hover:opacity-70 transition-opacity"
            >
              <Heart
                size={24}
                className={liked ? "fill-red-500 text-red-500" : "text-foreground"}
              />
            </motion.button>
            <button className="hover:opacity-70 transition-opacity">
              <MessageCircle size={24} className="text-foreground" />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <Send size={24} className="text-foreground" />
            </button>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setSaved(!saved)}
            className="hover:opacity-70 transition-opacity"
          >
            <Bookmark
              size={24}
              className={saved ? "fill-foreground text-foreground" : "text-foreground"}
            />
          </motion.button>
        </div>

        {/* Likes */}
        <p className="text-sm font-semibold text-foreground mb-1">
          {likesCount.toLocaleString()} likes
        </p>

        {/* Caption */}
        <p className="text-sm text-foreground">
          <span className="font-semibold">{post.username}</span>{" "}
          <span className="text-muted-foreground">{post.caption}</span>
        </p>

        {/* Comments */}
        {post.comments > 0 && (
          <button className="text-sm text-muted-foreground mt-1 hover:text-foreground transition-colors">
            View all {post.comments} comments
          </button>
        )}

        {/* Comment input */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            Post
          </button>
        </div>
      </div>
    </motion.article>
  );
}

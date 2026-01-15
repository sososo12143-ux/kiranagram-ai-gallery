import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import { KiranagraemLogo } from "@/components/KiranagraemLogo";
import { AuthInput } from "@/components/ui/AuthInput";
import { Button } from "@/components/ui/button";
import heroCollage from "@/assets/hero-collage.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-[935px] flex items-center justify-center gap-8">
        {/* Left side - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="relative">
            <img
              src={heroCollage}
              alt="Kiranagraem AI Art"
              className="w-[380px] h-auto rounded-2xl shadow-2xl"
            />
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 text-3xl"
            >
              🔥
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -right-6 text-3xl"
            >
              💜
            </motion.div>
            <motion.div
              animate={{ y: [-3, 7, -3] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-12 text-3xl"
            >
              ❤️
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 -right-8 w-12 h-12 bg-kiranagraem-blue rounded-full flex items-center justify-center text-primary-foreground"
            >
              ⭐
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-[350px]"
        >
          <div className="bg-card border border-border rounded-sm p-10 mb-3">
            <div className="text-center mb-8">
              <KiranagraemLogo size="lg" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <AuthInput
                type="text"
                label="Phone number, username or email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <AuthInput
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              <Button
                type="submit"
                className="w-full gradient-button hover:opacity-90 transition-opacity mt-4"
                disabled={!email || !password}
              >
                Log in
              </Button>
            </form>

            <div className="flex items-center my-5">
              <div className="flex-1 h-px bg-border" />
              <span className="px-4 text-sm text-muted-foreground font-medium">OR</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <button className="w-full flex items-center justify-center gap-2 text-kiranagraem-blue font-semibold text-sm hover:opacity-80 transition-opacity">
              <Facebook className="w-5 h-5" />
              Log in with Facebook
            </button>

            <div className="text-center mt-5">
              <Link to="/forgot-password" className="text-xs text-foreground hover:underline">
                Forgotten your password?
              </Link>
            </div>
          </div>

          <div className="bg-card border border-border rounded-sm p-5 text-center">
            <p className="text-sm text-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-kiranagraem-blue font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;

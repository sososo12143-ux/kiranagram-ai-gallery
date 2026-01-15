import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import { KiranagraemLogo } from "@/components/KiranagraemLogo";
import { AuthInput } from "@/components/ui/AuthInput";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt:", formData);
  };

  const isFormValid = formData.email && formData.password && formData.fullName && formData.username;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[350px]"
      >
        <div className="bg-card border border-border rounded-sm px-10 py-8 mb-3">
          <div className="text-center mb-4">
            <KiranagraemLogo size="lg" />
            <p className="text-muted-foreground mt-4 font-semibold text-base leading-tight">
              Sign up to see AI-generated photos and videos from your friends.
            </p>
          </div>

          <Button
            variant="default"
            className="w-full gradient-button hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-4"
          >
            <Facebook className="w-5 h-5" />
            Log in with Facebook
          </Button>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-border" />
            <span className="px-4 text-sm text-muted-foreground font-medium">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-2">
            <AuthInput
              type="text"
              label="Mobile number or email address"
              value={formData.email}
              onChange={handleChange("email")}
            />
            <AuthInput
              type="password"
              label="Password"
              value={formData.password}
              onChange={handleChange("password")}
            />
            <AuthInput
              type="text"
              label="Full Name"
              value={formData.fullName}
              onChange={handleChange("fullName")}
            />
            <AuthInput
              type="text"
              label="Username"
              value={formData.username}
              onChange={handleChange("username")}
            />

            <p className="text-xs text-muted-foreground text-center pt-3 leading-relaxed">
              People who use our service may have uploaded your contact information to Kiranagraem.{" "}
              <Link to="/about" className="text-kiranagraem-blue hover:underline">
                Learn more
              </Link>
            </p>

            <p className="text-xs text-muted-foreground text-center pt-2 leading-relaxed">
              By signing up, you agree to our{" "}
              <Link to="/terms" className="text-kiranagraem-blue hover:underline">
                Terms
              </Link>
              ,{" "}
              <Link to="/privacy" className="text-kiranagraem-blue hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/cookies" className="text-kiranagraem-blue hover:underline">
                Cookies Policy
              </Link>
              .
            </p>

            <Button
              type="submit"
              className="w-full gradient-button hover:opacity-90 transition-opacity mt-4"
              disabled={!isFormValid}
            >
              Sign Up
            </Button>
          </form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-card border border-border rounded-sm p-5 text-center"
        >
          <p className="text-sm text-foreground">
            Have an account?{" "}
            <Link to="/login" className="text-kiranagraem-blue font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;

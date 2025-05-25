"use client"

import { useLogIn } from "@/APIs/Auth/logIn";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    // ~ ######## Hooks
    const { mutate: login, isPending } = useLogIn();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        userType: "student" as "student" | "teacher"
    });
    // ~ ######## Hooks

    // ~ ######## Handlers
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login({
            email: formData.email,
            password: formData.password,
            userType: formData.userType
        });
    };
    // ~ ######## Handlers

    return (
        <main className="min-h-screen bg-background flex items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
                    <p className="text-foreground-muted">
                        Continue your learning journey
                    </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="input-primary"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-sm font-medium text-foreground">
                                Password
                            </label>
                            <Link 
                                href="/students/forgot-password"
                                className="text-sm text-primary hover:text-primary-hover transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="input-primary"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                            Login as
                        </label>
                        <div className="flex gap-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="student"
                                    checked={formData.userType === "student"}
                                    onChange={e => setFormData(prev => ({ ...prev, userType: e.target.value as "student" | "teacher" }))}
                                    className="form-radio text-primary"
                                />
                                <span className="text-sm text-foreground">Student</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="teacher"
                                    checked={formData.userType === "teacher"}
                                    onChange={e => setFormData(prev => ({ ...prev, userType: e.target.value as "student" | "teacher" }))}
                                    className="form-radio text-primary"
                                />
                                <span className="text-sm text-foreground">Teacher</span>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className={`w-full btn-primary ${
                            isPending ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        {isPending ? "Signing in..." : "Sign in"}
                    </button>
                </form>

                {/* Footer */}
                <div className="text-center text-sm">
                    <p className="text-foreground-muted">
                        Do not have an account?{" "}
                        <Link 
                            href="/students/signup" 
                            className="text-primary hover:text-primary-hover transition-colors"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>

                {/* Social Login Options */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-foreground-muted">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        className="btn-secondary flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        Google
                    </button>
                    <button
                        type="button"
                        className="btn-secondary flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                        Facebook
                    </button>
                </div>
            </div>
        </main>
    );
}
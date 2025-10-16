"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/20 via-accent/10 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-breathe">
          <h2 className="font-serif text-5xl font-bold text-foreground mb-6 text-balance">Get Inspired by Movement</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Receive tips, new exercises, and exclusive discounts first
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full px-6 py-6 text-lg border-2 border-primary/30 focus:border-primary"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-[#FDDC8E] hover:text-foreground text-primary-foreground rounded-full px-8 py-6 text-lg transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              Subscribe to Balance
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

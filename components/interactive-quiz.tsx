"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const goals = [
  {
    id: "stretch",
    title: "Stretching",
    icon: "🧘‍♀️",
    products: ["Stretching Straps", "Yoga Blocks", "Soft Mats"],
  },
  {
    id: "rehab",
    title: "Rehabilitation",
    icon: "💆‍♀️",
    products: ["Massage Rollers", "Soft Balls", "Low Resistance Rings"],
  },
  { id: "tone", title: "Toning", icon: "💪", products: ["Pilates Rings", "Resistance Bands", "Balance Cushions"] },
  { id: "strength", title: "Strength", icon: "🔥", products: ["Weighted Accessories", "Pro Rings", "Firm Rollers"] },
]

export function InteractiveQuiz() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-accent/10 via-background to-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-foreground mb-4 text-balance">Find Your Balance</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Choose your goal, and we'll recommend the perfect accessories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {goals.map((goal) => (
            <Card
              key={goal.id}
              className={`cursor-pointer transition-all duration-500 border-2 ${
                selected === goal.id
                  ? "border-primary bg-primary/10 scale-105 shadow-xl animate-breathe"
                  : "border-border hover:border-primary/50 hover:scale-105"
              }`}
              onClick={() => setSelected(goal.id)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">{goal.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{goal.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {selected && (
          <div className="bg-card rounded-2xl p-8 shadow-xl animate-breathe">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              We recommend for you:
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {goals
                .find((g) => g.id === selected)
                ?.products.map((product, index) => (
                  <div key={index} className="bg-secondary/50 rounded-lg p-4 text-center text-foreground">
                    {product}
                  </div>
                ))}
            </div>
            <div className="text-center">
              <Button className="bg-primary hover:bg-[#FDDC8E] hover:text-foreground text-primary-foreground rounded-full px-8">
                View Products
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

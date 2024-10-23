'use client'

import { Button } from "&/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "&/components/ui/card"
import { Label } from "&/components/ui/label"
import { RadioGroup, RadioGroupItem } from "&/components/ui/radio-group"
import { useState } from "react"

export function HealthProfileSetup() {
  const [healthGoal, setHealthGoal] = useState("")
  const [dietaryPreference, setDietaryPreference] = useState("")

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">Set Up Your Health Profile</CardTitle>
          <CardDescription className="text-center">
            Help us personalize your meal plans by selecting your health goals and dietary preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label className="text-lg font-semibold">Health Goal</Label>
              <RadioGroup className="grid grid-cols-2 gap-4 mt-2" value={healthGoal} onValueChange={setHealthGoal}>
                <Label
                  htmlFor="weight-loss"
                  className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${
                    healthGoal === "weight-loss" ? "bg-primary/10 border-primary" : "bg-background"
                  }`}
                >
                  <RadioGroupItem value="weight-loss" id="weight-loss" className="sr-only" />
                  Weight Loss
                </Label>
                <Label
                  htmlFor="maintain-health"
                  className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${
                    healthGoal === "maintain-health" ? "bg-primary/10 border-primary" : "bg-background"
                  }`}
                >
                  <RadioGroupItem value="maintain-health" id="maintain-health" className="sr-only" />
                  Maintain Health
                </Label>
              </RadioGroup>
            </div>
            <div>
              <Label className="text-lg font-semibold">Dietary Preference</Label>
              <RadioGroup
                className="grid grid-cols-2 gap-4 mt-2"
                value={dietaryPreference}
                onValueChange={setDietaryPreference}
              >
                <Label
                  htmlFor="vegan"
                  className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${
                    dietaryPreference === "vegan" ? "bg-primary/10 border-primary" : "bg-background"
                  }`}
                >
                  <RadioGroupItem value="vegan" id="vegan" className="sr-only" />
                  Vegan
                </Label>
                <Label
                  htmlFor="keto"
                  className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${
                    dietaryPreference === "keto" ? "bg-primary/10 border-primary" : "bg-background"
                  }`}
                >
                  <RadioGroupItem value="keto" id="keto" className="sr-only" />
                  Keto
                </Label>
                <Label
                  htmlFor="gluten-free"
                  className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${
                    dietaryPreference === "gluten-free" ? "bg-primary/10 border-primary" : "bg-background"
                  }`}
                >
                  <RadioGroupItem value="gluten-free" id="gluten-free" className="sr-only" />
                  Gluten-Free
                </Label>
                <Label
                  htmlFor="balanced"
                  className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${
                    dietaryPreference === "balanced" ? "bg-primary/10 border-primary" : "bg-background"
                  }`}
                >
                  <RadioGroupItem value="balanced" id="balanced" className="sr-only" />
                  Balanced
                </Label>
              </RadioGroup>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Continue</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
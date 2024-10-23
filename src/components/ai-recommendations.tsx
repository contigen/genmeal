'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "&/components/ui/card"
import { AlertTriangle, Dna, Heart } from "lucide-react"

export function AiRecommendations() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Your Genetic Insights & Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 text-yellow-500" />
              Health Risks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Slightly elevated risk for Type 2 Diabetes</li>
              <li>Moderate risk for Cardiovascular Disease</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Dna className="mr-2 text-blue-500" />
              Nutrient Deficiencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Vitamin D deficiency likely</li>
              <li>Potential iron deficiency</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2 text-green-500" />
              Health Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Increase intake of omega-3 fatty acids</li>
              <li>Consider vitamin D supplementation</li>
              <li>Regular cardiovascular exercise recommended</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
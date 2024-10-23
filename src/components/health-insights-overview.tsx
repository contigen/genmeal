'use client'

import { Button } from "&/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "&/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "&/components/ui/tabs"
import { Heart, Brain, Dna, Shield } from "lucide-react"

const healthAreas = [
  {
    name: "Metabolism",
    icon: <Dna className="w-5 h-5" />,
    insights: [
      {
        title: "MTHFR Gene Variant",
        description: "You have a variant that may affect folate metabolism. This could impact your body's ability to process certain B vitamins.",
        recommendation: "Consider increasing your intake of folate-rich foods or discussing B-vitamin supplementation with your healthcare provider.",
      },
      {
        title: "APOE Gene",
        description: "Your genetic profile suggests a typical metabolism of fats and cholesterol.",
        recommendation: "Maintain a balanced diet with healthy fats to support overall metabolic health.",
      },
    ],
  },
  {
    name: "Cardiovascular",
    icon: <Heart className="w-5 h-5" />,
    insights: [
      {
        title: "ACE Gene",
        description: "Your variant may be associated with slightly higher blood pressure levels.",
        recommendation: "Regular cardiovascular exercise and monitoring your salt intake could be beneficial.",
      },
    ],
  },
  {
    name: "Cognitive",
    icon: <Brain className="w-5 h-5" />,
    insights: [
      {
        title: "BDNF Gene",
        description: "Your genetic profile suggests typical cognitive function and neuroplasticity.",
        recommendation: "Engage in regular mental exercises and learning new skills to maintain cognitive health.",
      },
    ],
  },
  {
    name: "Immunity",
    icon: <Shield className="w-5 h-5" />,
    insights: [
      {
        title: "IL-6 Gene",
        description: "Your variant may be associated with a more reactive immune system.",
        recommendation: "Focus on anti-inflammatory foods and stress-reduction techniques to support your immune health.",
      },
    ],
  },
]

export function HealthInsightsOverviewComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Health Insights Overview</h1>
      <Tabs defaultValue={healthAreas[0].name.toLowerCase()}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6">
          {healthAreas.map((area) => (
            <TabsTrigger key={area.name} value={area.name.toLowerCase()} className="flex items-center">
              {area.icon}
              <span className="ml-2">{area.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {healthAreas.map((area) => (
          <TabsContent key={area.name} value={area.name.toLowerCase()}>
            <div className="grid gap-6 md:grid-cols-2">
              {area.insights.map((insight, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{insight.title}</CardTitle>
                    <CardDescription>{insight.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-2">Recommendation:</p>
                    <p>{insight.recommendation}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
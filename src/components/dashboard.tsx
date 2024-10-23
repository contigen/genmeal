'use client'

import { Button } from "&/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "&/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "&/components/ui/tabs"
import { AlertTriangle, Dna, Heart, Leaf, Brain, Droplet } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const biomarkerData = [
  { name: "Cholesterol", value: 180, min: 0, max: 240, unit: "mg/dL" },
  { name: "Blood Pressure", value: 120, min: 90, max: 140, unit: "mmHg" },
  { name: "Blood Sugar", value: 95, min: 70, max: 130, unit: "mg/dL" },
]

const progressData = [
  { month: "Jan", cholesterol: 200, bloodPressure: 130, bloodSugar: 110 },
  { month: "Feb", cholesterol: 190, bloodPressure: 125, bloodSugar: 105 },
  { month: "Mar", cholesterol: 185, bloodPressure: 122, bloodSugar: 100 },
  { month: "Apr", cholesterol: 180, bloodPressure: 120, bloodSugar: 95 },
]

export function DashboardComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Your Health Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Dna className="mr-2 text-primary" />
              Genetic Analysis Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="biomarkers">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="biomarkers">Biomarkers</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
              </TabsList>
              <TabsContent value="biomarkers">
                <div className="space-y-4">
                  {biomarkerData.map((marker) => (
                    <div key={marker.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{marker.name}</span>
                        <span>{marker.value} {marker.unit}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: `${((marker.value - marker.min) / (marker.max - marker.min)) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{marker.min}</span>
                        <span>{marker.max}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="progress">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="cholesterol" stroke="#8884d8" name="Cholesterol" />
                    <Line type="monotone" dataKey="bloodPressure" stroke="#82ca9d" name="Blood Pressure" />
                    <Line type="monotone" dataKey="bloodSugar" stroke="#ffc658" name="Blood Sugar" />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Leaf className="mr-2 text-green-500" />
              Personalized Health Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Heart className="mr-2 h-5 w-5 text-red-500 mt-0.5" />
                <span>Incorporate more omega-3 fatty acids in your diet to support heart health.</span>
              </li>
              <li className="flex items-start">
                <Brain className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                <span>Consider cognitive exercises to maintain mental acuity, based on your genetic profile.</span>
              </li>
              <li className="flex items-start">
                <Droplet className="mr-2 h-5 w-5 text-cyan-500 mt-0.5" />
                <span>Increase your daily water intake to support your metabolism and overall health.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 text-yellow-500" />
            Potential Health Risks
          </CardTitle>
          <CardDescription>Based on your genetic profile, consider monitoring these areas:</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Slightly elevated risk for Type 2 Diabetes</li>
            <li>Moderate risk for Cardiovascular Disease</li>
            <li>Potential sensitivity to certain medications</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
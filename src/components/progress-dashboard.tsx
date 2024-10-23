'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "&/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { PieChart, Pie, Cell } from "recharts"

const weightData = [
  { date: "Week 1", weight: 180 },
  { date: "Week 2", weight: 178 },
  { date: "Week 3", weight: 176 },
  { date: "Week 4", weight: 174 },
]

const nutrientData = [
  { name: "Protein", value: 30 },
  { name: "Carbs", value: 50 },
  { name: "Fat", value: 20 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

export function ProgressDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Your Progress Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weight Progress</CardTitle>
            <CardDescription>Your weight loss journey over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nutrient Intake</CardTitle>
            <CardDescription>Your average daily nutrient breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={nutrientData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {nutrientData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center mt-4">
              {nutrientData.map((entry, index) => (
                <div key={`legend-${index}`} className="flex items-center mx-2">
                  <div className="w-3 h-3 mr-1" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  <span>{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Health Markers</CardTitle>
            <CardDescription>Key health indicators based on your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="font-semibold">BMI</h3>
                <p className="text-2xl text-primary">24.5</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold">Body Fat %</h3>
                <p className="text-2xl text-primary">18%</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold">Muscle Mass</h3>
                <p className="text-2xl text-primary">32%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}